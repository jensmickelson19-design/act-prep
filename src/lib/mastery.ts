import { prisma } from "@/lib/prisma";
import type { Subject } from "@prisma/client";

const ALPHA = 0.2; // EMA smoothing.

// Returns a "delta" in [0,1] representing how much signal this attempt gives.
// Harder questions matter more: a correct difficulty-5 is the strongest positive
// signal; a wrong difficulty-1 is the strongest negative signal.
export function deltaFor(isCorrect: boolean, difficulty: number): number {
  const w = (difficulty - 1) / 4; // 0..1 over difficulty 1..5
  return isCorrect ? 0.5 + 0.5 * w : 0.5 - 0.5 * w;
}

// Map our binary correct + difficulty into SM-2's 0–5 quality scale.
export function qualityFor(isCorrect: boolean, difficulty: number): number {
  if (isCorrect) return difficulty >= 4 ? 5 : 4;
  return difficulty <= 2 ? 1 : 2;
}

export async function recordAttemptAndUpdateMastery(args: {
  userId: string;
  subject: Subject;
  subSkill: string;
  isCorrect: boolean;
  difficulty: number;
}) {
  const { userId, subject, subSkill, isCorrect, difficulty } = args;
  const delta = deltaFor(isCorrect, difficulty);
  const quality = qualityFor(isCorrect, difficulty);

  return prisma.$transaction(async (tx) => {
    const existing = await tx.subSkillMastery.findUnique({
      where: { userId_subject_subSkill: { userId, subject, subSkill } },
    });

    if (!existing) {
      const sm2 = nextSm2(2.5, 0, 0, quality);
      return tx.subSkillMastery.create({
        data: { userId, subject, subSkill, masteryScore: delta, ...sm2 },
      });
    }

    const newScore = clamp01((1 - ALPHA) * existing.masteryScore + ALPHA * delta);
    const sm2 = nextSm2(existing.easeFactor, existing.intervalDays, existing.repetitions, quality);
    return tx.subSkillMastery.update({
      where: { id: existing.id },
      data: { masteryScore: newScore, ...sm2 },
    });
  });
}

export function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

// Standard SM-2 (lite). Quality 3+ is a "pass"; below 3 resets the interval.
export function nextSm2(easeFactor: number, intervalDays: number, repetitions: number, quality: number) {
  if (quality < 3) {
    return {
      easeFactor: Math.max(1.3, easeFactor - 0.2),
      intervalDays: 1,
      repetitions: 0,
      nextReviewAt: addDays(new Date(), 1),
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
    nextReviewAt: addDays(new Date(), newInterval),
  };
}

function addDays(d: Date, n: number) {
  return new Date(d.getTime() + n * 24 * 60 * 60 * 1000);
}
