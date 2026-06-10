import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { recordAttemptAndUpdateMastery } from "@/lib/mastery";

const schema = z.object({
  sessionId: z.string().min(1),
  questionId: z.string().min(1),
  selectedAnswer: z.enum(["A", "B", "C", "D"]),
  timeSpentSec: z.number().int().min(0).max(60 * 60),
});

const STALE_AFTER_MS = 90 * 1000;
const REMEDIATION_TARGET_STREAK = 3;

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const { sessionId, questionId, selectedAnswer, timeSpentSec } = parsed.data;

  const [study, question] = await Promise.all([
    prisma.studySession.findUnique({ where: { id: sessionId } }),
    prisma.question.findUnique({ where: { id: questionId } }),
  ]);
  if (!study || study.userId !== session.user.id) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }
  if (study.endedAt) {
    return NextResponse.json({ error: "Session already ended" }, { status: 410 });
  }
  if (Date.now() - study.lastPingAt.getTime() > STALE_AFTER_MS) {
    await prisma.studySession.update({
      where: { id: study.id },
      data: { endedAt: study.lastPingAt },
    });
    return NextResponse.json({ error: "Session timed out" }, { status: 410 });
  }
  if (!question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  const isCorrect = question.correctAnswer === selectedAnswer;

  await prisma.attempt.create({
    data: {
      userId: session.user.id,
      questionId: question.id,
      sessionId,
      selectedAnswer,
      isCorrect,
      timeSpentSec,
    },
  });

  // Refresh the heartbeat — answering is also a "still here" signal.
  await prisma.studySession.update({
    where: { id: study.id },
    data: { lastPingAt: new Date() },
  });

  await recordAttemptAndUpdateMastery({
    userId: session.user.id,
    subject: question.subject,
    subSkill: question.subSkill,
    isCorrect,
    difficulty: question.difficulty,
  });

  // Did this correct answer just complete the remediation streak?
  let justExitedRemediation = false;
  if (isCorrect) {
    const lastMiss = await prisma.attempt.findFirst({
      where: {
        userId: session.user.id,
        sessionId,
        isCorrect: false,
        question: { subject: question.subject },
      },
      orderBy: { createdAt: "desc" },
      include: { question: { select: { subSkill: true } } },
    });
    if (lastMiss && lastMiss.question.subSkill === question.subSkill) {
      const sinceMiss = await prisma.attempt.findMany({
        where: {
          userId: session.user.id,
          sessionId,
          createdAt: { gt: lastMiss.createdAt },
          question: { subSkill: question.subSkill },
        },
        orderBy: { createdAt: "asc" },
        select: { isCorrect: true },
      });
      const trailingStreak = trailingTrue(sinceMiss.map((a) => a.isCorrect));
      // Exactly hitting the streak target on this attempt = just exited.
      if (trailingStreak === REMEDIATION_TARGET_STREAK) {
        justExitedRemediation = true;
      }
    }
  }

  return NextResponse.json({
    isCorrect,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation,
    justExitedRemediation,
  });
}

function trailingTrue(values: boolean[]): number {
  let n = 0;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i]) n++;
    else break;
  }
  return n;
}
