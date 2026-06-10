import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { selectNextQuestion } from "@/lib/adaptive";

const STALE_AFTER_MS = 90 * 1000;

export async function GET(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");
  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  const study = await prisma.studySession.findUnique({ where: { id: sessionId } });
  if (!study || study.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (study.endedAt) {
    return NextResponse.json({ error: "Session already ended" }, { status: 410 });
  }
  if (!study.subject) {
    return NextResponse.json({ error: "Session has no subject" }, { status: 400 });
  }

  // Lazy idle close: if the last heartbeat is too old, treat this session as
  // abandoned and persist the timeout. The client should redirect on 410.
  if (Date.now() - study.lastPingAt.getTime() > STALE_AFTER_MS) {
    await prisma.studySession.update({
      where: { id: study.id },
      data: { endedAt: study.lastPingAt },
    });
    return NextResponse.json({ error: "Session timed out" }, { status: 410 });
  }

  const result = await selectNextQuestion(session.user.id, study.subject, sessionId);
  if (result.kind === "done") {
    return NextResponse.json({ done: true, reason: result.reason });
  }

  const { correctAnswer, explanation, ...safeQuestion } = result.question;
  return NextResponse.json({
    question: safeQuestion,
    isRemediation: result.isRemediation,
    subSkill: result.subSkill,
  });
}
