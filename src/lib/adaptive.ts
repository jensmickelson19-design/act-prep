import type { Subject, Question, Passage } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// When a student misses a question, we queue up to REMEDIATION_MAX_ATTEMPTS
// more questions on the same sub-skill before letting them move on, exiting
// early once they get REMEDIATION_TARGET_STREAK correct in a row.
const REMEDIATION_TARGET_STREAK = 3;
const REMEDIATION_MAX_ATTEMPTS = 5;

export type QuestionWithPassage = Question & {
  passage: Pick<Passage, "id" | "title" | "body"> | null;
};

export type NextQuestionResult =
  | { kind: "question"; question: QuestionWithPassage; isRemediation: boolean; subSkill: string }
  | { kind: "done"; reason: "no_questions_available" };

export async function selectNextQuestion(
  userId: string,
  subject: Subject,
  sessionId: string
): Promise<NextQuestionResult> {
  const lastMiss = await prisma.attempt.findFirst({
    where: { userId, sessionId, isCorrect: false, question: { subject } },
    orderBy: { createdAt: "desc" },
    include: { question: true },
  });

  if (lastMiss) {
    const sinceMiss = await prisma.attempt.findMany({
      where: {
        userId,
        sessionId,
        createdAt: { gt: lastMiss.createdAt },
        question: { subSkill: lastMiss.question.subSkill },
      },
      orderBy: { createdAt: "asc" },
      select: { isCorrect: true },
    });

    const stillInRemediation =
      trailingTrueStreak(sinceMiss.map((a) => a.isCorrect)) < REMEDIATION_TARGET_STREAK &&
      sinceMiss.length < REMEDIATION_MAX_ATTEMPTS;

    if (stillInRemediation) {
      const similar = await pickSimilar(userId, lastMiss.question, sessionId);
      if (similar) {
        return { kind: "question", question: similar, isRemediation: true, subSkill: lastMiss.question.subSkill };
      }
      // Out of unseen similar questions — fall through to weakest sub-skill rather than block.
    }
  }

  const fresh = await pickFromWeakestSubSkill(userId, subject, sessionId);
  if (!fresh) return { kind: "done", reason: "no_questions_available" };
  return { kind: "question", question: fresh, isRemediation: false, subSkill: fresh.subSkill };
}

function trailingTrueStreak(values: boolean[]): number {
  let n = 0;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i]) n++;
    else break;
  }
  return n;
}

async function pickSimilar(
  userId: string,
  missed: Question,
  sessionId: string
): Promise<QuestionWithPassage | null> {
  const seen = await sessionQuestionIds(userId, sessionId);
  const candidates = await prisma.question.findMany({
    where: {
      subject: missed.subject,
      subSkill: missed.subSkill,
      id: { notIn: seen },
      difficulty: { gte: missed.difficulty - 1, lte: missed.difficulty + 1 },
    },
    include: { passage: { select: { id: true, title: true, body: true } } },
  });
  if (candidates.length === 0) return null;
  candidates.sort(
    (a, b) =>
      Math.abs(a.difficulty - missed.difficulty) - Math.abs(b.difficulty - missed.difficulty)
  );
  return candidates[0];
}

async function pickFromWeakestSubSkill(
  userId: string,
  subject: Subject,
  sessionId: string
): Promise<QuestionWithPassage | null> {
  const seen = await sessionQuestionIds(userId, sessionId);

  const available = await prisma.question.groupBy({
    by: ["subSkill"],
    where: { subject, id: { notIn: seen } },
    _count: { _all: true },
  });
  if (available.length === 0) return null;

  const mastery = await prisma.subSkillMastery.findMany({
    where: { userId, subject, subSkill: { in: available.map((a) => a.subSkill) } },
    select: { subSkill: true, masteryScore: true },
  });
  const masteryMap = new Map(mastery.map((m) => [m.subSkill, m.masteryScore]));

  const ranked = available
    .map((a) => ({ subSkill: a.subSkill, score: masteryMap.get(a.subSkill) ?? 0 }))
    .sort((a, b) => a.score - b.score);
  const target = ranked[0];

  // Mastery 0 → target difficulty 1; mastery 1 → target difficulty 5.
  const targetDifficulty = Math.max(1, Math.min(5, Math.round(target.score * 4) + 1));

  const pool = await prisma.question.findMany({
    where: { subject, subSkill: target.subSkill, id: { notIn: seen } },
    include: { passage: { select: { id: true, title: true, body: true } } },
  });
  pool.sort(
    (a, b) => Math.abs(a.difficulty - targetDifficulty) - Math.abs(b.difficulty - targetDifficulty)
  );
  return pool[0] ?? null;
}

async function sessionQuestionIds(userId: string, sessionId: string): Promise<string[]> {
  const rows = await prisma.attempt.findMany({
    where: { userId, sessionId },
    select: { questionId: true },
  });
  return rows.map((r) => r.questionId);
}
