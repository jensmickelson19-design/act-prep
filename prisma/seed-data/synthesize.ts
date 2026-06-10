import type { PrismaClient, Subject } from "@prisma/client";

// Generate ~30 days of synthetic practice history for the demo student so the
// projected-score card and the parent dashboard (Phase 4) have something to
// chart. Deterministic via a seedable RNG.
//
// Mastery + SM-2 update logic is inlined here (duplicated from src/lib/mastery)
// so the seed script doesn't pull in the Next.js-aliased import graph.

const SUBJECTS: Subject[] = ["ENGLISH", "MATH", "READING", "SCIENCE"];
const DAYS = 30;
const START_HOUR = 16;
const SEED = 42;
const ALPHA = 0.2;

function mulberry32(seed: number) {
  let s = seed;
  return function rand() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rand: () => number, arr: T[]): T {
  return arr[Math.floor(rand() * arr.length)];
}

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function deltaFor(isCorrect: boolean, difficulty: number) {
  const w = (difficulty - 1) / 4;
  return isCorrect ? 0.5 + 0.5 * w : 0.5 - 0.5 * w;
}

function qualityFor(isCorrect: boolean, difficulty: number) {
  if (isCorrect) return difficulty >= 4 ? 5 : 4;
  return difficulty <= 2 ? 1 : 2;
}

function nextSm2(easeFactor: number, intervalDays: number, repetitions: number, quality: number) {
  if (quality < 3) {
    return {
      easeFactor: Math.max(1.3, easeFactor - 0.2),
      intervalDays: 1,
      repetitions: 0,
      nextReviewAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    };
  }
  const newEase = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );
  let newInterval: number;
  const newReps = repetitions + 1;
  if (repetitions === 0) newInterval = 1;
  else if (repetitions === 1) newInterval = 6;
  else newInterval = Math.round(intervalDays * newEase);
  return {
    easeFactor: newEase,
    intervalDays: newInterval,
    repetitions: newReps,
    nextReviewAt: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000),
  };
}

async function updateMastery(
  prisma: PrismaClient,
  userId: string,
  subject: Subject,
  subSkill: string,
  isCorrect: boolean,
  difficulty: number
) {
  const delta = deltaFor(isCorrect, difficulty);
  const quality = qualityFor(isCorrect, difficulty);
  const existing = await prisma.subSkillMastery.findUnique({
    where: { userId_subject_subSkill: { userId, subject, subSkill } },
  });
  if (!existing) {
    const sm2 = nextSm2(2.5, 0, 0, quality);
    await prisma.subSkillMastery.create({
      data: { userId, subject, subSkill, masteryScore: delta, ...sm2 },
    });
    return;
  }
  const newScore = clamp01((1 - ALPHA) * existing.masteryScore + ALPHA * delta);
  const sm2 = nextSm2(existing.easeFactor, existing.intervalDays, existing.repetitions, quality);
  await prisma.subSkillMastery.update({
    where: { id: existing.id },
    data: { masteryScore: newScore, ...sm2 },
  });
}

export async function synthesizeStudentHistory(prisma: PrismaClient, studentId: string) {
  const rand = mulberry32(SEED);
  const now = new Date();
  const dayMs = 24 * 60 * 60 * 1000;
  const startDate = new Date(now.getTime() - DAYS * dayMs);

  const questionsBySubject = new Map<
    Subject,
    Array<{ id: string; subSkill: string; difficulty: number; correctAnswer: string }>
  >();
  for (const subject of SUBJECTS) {
    const qs = await prisma.question.findMany({
      where: { subject },
      select: { id: true, subSkill: true, difficulty: true, correctAnswer: true },
    });
    questionsBySubject.set(subject, qs);
  }

  let sessionsCreated = 0;
  let attemptsCreated = 0;

  for (let dayIdx = 0; dayIdx < DAYS; dayIdx++) {
    const dayBase = new Date(startDate.getTime() + dayIdx * dayMs);
    const dow = dayBase.getDay();
    const skipProb = dow === 0 || dow === 6 ? 0.5 : 0.25;
    if (rand() < skipProb) continue;

    const sessionsToday = rand() < 0.25 ? 2 : 1;
    for (let s = 0; s < sessionsToday; s++) {
      const subject = pick(rand, SUBJECTS);
      const startHour = START_HOUR + s * 2 + Math.floor(rand() * 2);
      const startedAt = new Date(
        dayBase.getFullYear(),
        dayBase.getMonth(),
        dayBase.getDate(),
        startHour,
        Math.floor(rand() * 60)
      );
      const durationMin = 8 + Math.floor(rand() * 18);
      const endedAt = new Date(startedAt.getTime() + durationMin * 60 * 1000);
      const numAttempts = 4 + Math.floor(rand() * 8);

      const study = await prisma.studySession.create({
        data: {
          userId: studentId,
          subject,
          startedAt,
          endedAt,
          lastPingAt: endedAt,
        },
      });
      sessionsCreated++;

      const questions = questionsBySubject.get(subject) ?? [];
      if (questions.length === 0) continue;

      // Accuracy improves linearly: 45% on day 0 → ~80% on day 30.
      const baseAccuracy = 0.45 + (dayIdx / DAYS) * 0.35;

      for (let a = 0; a < numAttempts; a++) {
        const q = pick(rand, questions);
        const adjusted = baseAccuracy - (q.difficulty - 3) * 0.08;
        const isCorrect = rand() < Math.max(0.15, Math.min(0.95, adjusted));
        const attemptedAt = new Date(
          startedAt.getTime() + Math.floor((a / numAttempts) * durationMin * 60 * 1000)
        );
        const wrongChoices = ["A", "B", "C", "D"].filter((x) => x !== q.correctAnswer);
        const selectedAnswer = isCorrect ? q.correctAnswer : pick(rand, wrongChoices);

        await prisma.attempt.create({
          data: {
            userId: studentId,
            questionId: q.id,
            sessionId: study.id,
            selectedAnswer,
            isCorrect,
            timeSpentSec: 20 + Math.floor(rand() * 40),
            createdAt: attemptedAt,
          },
        });
        attemptsCreated++;

        await updateMastery(prisma, studentId, subject, q.subSkill, isCorrect, q.difficulty);
      }
    }
  }

  return { sessionsCreated, attemptsCreated };
}
