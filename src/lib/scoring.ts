import type { Subject } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// Real ACT scaled-score curves aren't published. The piecewise-linear
// breakpoints in mapAccuracyToScaled are calibrated to the same expected-score
// model as test-scoring.ts (4-choice guessing floor at ~0.25 weighted
// accuracy → scaled 1), so projections and completed-test scores stay
// consistent. Wrap users with "projected estimate" disclaimer language.
const MIN_ATTEMPTS_PER_SECTION = 20;
const RECENT_WINDOW = 50;

export const SUBJECTS: Subject[] = ["ENGLISH", "MATH", "READING", "SCIENCE"];

export type SectionProjection = {
  subject: Subject;
  scaledScore: number;
  rawAccuracy: number;
  weightedAccuracy: number;
  attemptCount: number;
};

export type ProjectionResult = {
  composite: number | null;
  sections: Record<Subject, SectionProjection | null>;
  lastAttemptAt: Date | null;
};

export async function projectScores(userId: string): Promise<ProjectionResult> {
  const sections: Record<Subject, SectionProjection | null> = {
    ENGLISH: null,
    MATH: null,
    READING: null,
    SCIENCE: null,
  };

  for (const subject of SUBJECTS) {
    sections[subject] = await projectSection(userId, subject);
  }

  const present = SUBJECTS.map((s) => sections[s]).filter(
    (s): s is SectionProjection => s !== null
  );
  const composite =
    present.length === 4
      ? Math.round(present.reduce((sum, s) => sum + s.scaledScore, 0) / 4)
      : null;

  const lastAttempt = await prisma.attempt.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });

  return { composite, sections, lastAttemptAt: lastAttempt?.createdAt ?? null };
}

async function projectSection(userId: string, subject: Subject): Promise<SectionProjection | null> {
  const attempts = await prisma.attempt.findMany({
    where: { userId, question: { subject } },
    select: { isCorrect: true, question: { select: { difficulty: true } } },
    orderBy: { createdAt: "desc" },
    take: RECENT_WINDOW,
  });

  if (attempts.length < MIN_ATTEMPTS_PER_SECTION) return null;

  const weightedNum = attempts.reduce(
    (sum, a) => sum + (a.isCorrect ? a.question.difficulty : 0),
    0
  );
  const weightedDen = attempts.reduce((sum, a) => sum + a.question.difficulty, 0);
  const weightedAccuracy = weightedDen > 0 ? weightedNum / weightedDen : 0;
  const rawAccuracy = attempts.filter((a) => a.isCorrect).length / attempts.length;

  return {
    subject,
    scaledScore: mapAccuracyToScaled(weightedAccuracy),
    rawAccuracy,
    weightedAccuracy,
    attemptCount: attempts.length,
  };
}

export type TrendPoint = {
  date: string; // YYYY-MM-DD
  composite: number | null;
  english: number | null;
  math: number | null;
  reading: number | null;
  science: number | null;
};

// Replay attempts day-by-day to project a 1-day-resolution trend over the last
// `days` days. We pull every attempt once and slice client-side rather than
// running 30 separate queries.
export async function getProjectionTrend(userId: string, days: number = 30): Promise<TrendPoint[]> {
  const attempts = await prisma.attempt.findMany({
    where: { userId },
    select: {
      isCorrect: true,
      createdAt: true,
      question: { select: { subject: true, difficulty: true } },
    },
    orderBy: { createdAt: "asc" },
  });

  const trend: TrendPoint[] = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  for (let d = days; d >= 0; d--) {
    const dayEnd = new Date(today);
    dayEnd.setDate(dayEnd.getDate() - d);
    dayEnd.setHours(23, 59, 59, 999);
    const upTo = attempts.filter((a) => a.createdAt <= dayEnd);

    const scoresBySubject: Record<Subject, number | null> = {
      ENGLISH: null,
      MATH: null,
      READING: null,
      SCIENCE: null,
    };
    for (const subject of SUBJECTS) {
      const window = upTo.filter((a) => a.question.subject === subject).slice(-RECENT_WINDOW);
      if (window.length < MIN_ATTEMPTS_PER_SECTION) continue;
      const num = window.reduce((s, a) => s + (a.isCorrect ? a.question.difficulty : 0), 0);
      const den = window.reduce((s, a) => s + a.question.difficulty, 0);
      scoresBySubject[subject] = mapAccuracyToScaled(den > 0 ? num / den : 0);
    }

    const allFour = SUBJECTS.map((s) => scoresBySubject[s]).filter(
      (s): s is number => s !== null
    );
    const composite =
      allFour.length === 4 ? Math.round(allFour.reduce((a, b) => a + b, 0) / 4) : null;

    trend.push({
      date: localDateStr(dayEnd),
      composite,
      english: scoresBySubject.ENGLISH,
      math: scoresBySubject.MATH,
      reading: scoresBySubject.READING,
      science: scoresBySubject.SCIENCE,
    });
  }
  return trend;
}

function localDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function mapAccuracyToScaled(accuracy: number): number {
  // Piecewise-linear: each tuple is (weighted accuracy, scaled score).
  // Calibrated from the expected-score model fitted to the seeded diagnostic
  // difficulty mix — weighted accuracy ~0.25 is chance-level (4-choice
  // guessing) and floors at scaled 1; ~0.58 → 18; ~0.93 → 36.
  const points: Array<[number, number]> = [
    [0, 1],
    [0.29, 1],
    [0.39, 10],
    [0.58, 18],
    [0.79, 27],
    [0.88, 32],
    [0.93, 36],
    [1, 36],
  ];
  if (accuracy <= 0) return 1;
  if (accuracy >= 1) return 36;
  for (let i = 0; i < points.length - 1; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[i + 1];
    if (accuracy <= x1) {
      const t = (accuracy - x0) / (x1 - x0);
      return Math.max(1, Math.min(36, Math.round(y0 + t * (y1 - y0))));
    }
  }
  return 36;
}
