import type { Subject } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { ACT_SECTIONS } from "@/lib/test-format";

// ---------------------------------------------------------------------------
// Raw-correct → scaled-score conversion tables (one per subject).
//
// Each table is an array indexed by the number of correct answers in the
// section; the value is the ACT scaled score (1–36). Table length = section
// question count + 1 (index 0 = zero correct ... index N = all correct).
//
// CALIBRATED (Phase 2) against the seeded diagnostic content. Real ACT
// raw→scaled curves are not published and vary by form; these tables are
// derived from an expected-score model fitted to the measured difficulty mix
// of the diagnostic forms (see DIAGNOSTIC_DIFFICULTY_MIX below). A student of
// latent ability θ∈[0,1] (scaled score = 1 + 35θ) answers a difficulty-d (1–5)
// item correctly with probability
//   p(θ,d) = 0.25 + 0.75·σ(6(θ−0.5) − 1.4(d−3))
// the 0.25 floor reflecting 4-choice guessing. Inverting each section's
// expected raw-correct against its difficulty mix yields the raw→scaled table,
// so a harder section gets a more lenient curve — as real ACT form equating
// does. Treat every score this module produces as a "projected estimate" —
// never an official ACT score, and surface it with that disclaimer.
// ---------------------------------------------------------------------------

// Difficulty 1–5 counts per subject, measured from fixed Practice Test Form 1
// (prisma/seed-data/form1-*.ts). Sums equal the ACT section sizes (50/45/36/40).
// Re-measure and update if Form 1 content is re-authored; extend to average
// across forms when Form 2 lands.
const DIAGNOSTIC_DIFFICULTY_MIX: Record<Subject, number[]> = {
  ENGLISH: [0, 4, 31, 15, 0],
  MATH: [4, 6, 20, 12, 3],
  READING: [0, 6, 17, 11, 2],
  SCIENCE: [2, 7, 18, 12, 1],
};

// Nominal mix used by the accuracy-only fallback for non-canonical sections.
const NOMINAL_DIFFICULTY_MIX = [7, 15, 54, 20, 4];

const GUESS_FLOOR = 0.25;

// Probability a student of ability θ answers a difficulty-d (1–5) item correct.
function pCorrect(theta: number, difficulty: number): number {
  const logit = 6 * (theta - 0.5) - 1.4 * (difficulty - 3);
  return GUESS_FLOOR + (1 - GUESS_FLOOR) / (1 + Math.exp(-logit));
}

// Scale a difficulty mix to a section of `total` questions (fractional counts).
function scaledCounts(mix: number[], total: number): number[] {
  const sum = mix.reduce((a, b) => a + b, 0);
  return mix.map((c) => (c / sum) * total);
}

// Invert the expected-score model: return the scaled score (1–36) of the
// ability whose expected raw-correct equals `targetCorrect`.
function invertToScaled(countsByDifficulty: number[], targetCorrect: number): number {
  const expected = (theta: number): number =>
    countsByDifficulty.reduce((sum, n, i) => sum + n * pCorrect(theta, i + 1), 0);
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (expected(mid) < targetCorrect) lo = mid;
    else hi = mid;
  }
  return Math.max(1, Math.min(36, Math.round(1 + 35 * ((lo + hi) / 2))));
}

// Accuracy-only fallback for sections whose length has no canonical table.
function accuracyToScaled(accuracy: number): number {
  return invertToScaled(scaledCounts(NOMINAL_DIFFICULTY_MIX, 100), accuracy * 100);
}

// Build the calibrated raw-count → scaled table for one subject.
function buildCalibratedTable(subject: Subject, total: number): number[] {
  const counts = scaledCounts(DIAGNOSTIC_DIFFICULTY_MIX[subject], total);
  const table: number[] = [];
  for (let correct = 0; correct <= total; correct++) {
    table.push(invertToScaled(counts, correct));
  }
  return table;
}

// Per-subject conversion tables, keyed off the real ACT section sizes
// (English 50, Math 45, Reading 36, Science 40) from test-format.ts.
export const RAW_SCORE_TABLES: Record<Subject, number[]> = Object.fromEntries(
  ACT_SECTIONS.map((s) => [s.subject, buildCalibratedTable(s.subject, s.questionCount)])
) as Record<Subject, number[]>;

// Convert a raw correct count for a section into a scaled score (1–36). Falls
// back to nearest valid index if `correct`/`total` fall outside the table.
export function rawCorrectToScaled(
  subject: Subject,
  correct: number,
  total: number
): number {
  const table = RAW_SCORE_TABLES[subject];
  // If the section length differs from the canonical table (shouldn't happen
  // for diagnostics, but practice tests vary), interpolate by accuracy instead.
  if (!table || total !== table.length - 1) {
    return accuracyToScaled(total > 0 ? correct / total : 0);
  }
  const idx = Math.max(0, Math.min(table.length - 1, correct));
  return table[idx];
}

export type SubSkillResult = {
  subSkill: string;
  total: number;
  correct: number;
};

export type SectionResult = {
  subject: Subject;
  total: number;
  correct: number;
  scaledScore: number;
  subSkills: SubSkillResult[];
};

export type TestResult = {
  compositeScore: number;
  sections: SectionResult[];
};

// Score a completed test by joining the stored answers against each question's
// correct answer.
export async function scoreTest(testId: string): Promise<TestResult> {
  const test = await prisma.testAttempt.findUniqueOrThrow({ where: { id: testId } });
  const answers = test.answers as Record<string, "A" | "B" | "C" | "D">;
  const questionsBySection = test.questionsBySection as Record<Subject, string[]>;

  const sectionResults: SectionResult[] = [];
  for (const [subject, qids] of Object.entries(questionsBySection) as [Subject, string[]][]) {
    if (!qids || qids.length === 0) continue;
    const questions = await prisma.question.findMany({
      where: { id: { in: qids } },
      select: { id: true, subSkill: true, correctAnswer: true },
    });
    const byId = new Map(questions.map((q) => [q.id, q]));

    const bySubSkill = new Map<string, { total: number; correct: number }>();
    let correct = 0;
    for (const qid of qids) {
      const q = byId.get(qid);
      if (!q) continue;
      const a = answers[qid];
      const ok = a === q.correctAnswer;
      if (ok) correct++;
      const bucket = bySubSkill.get(q.subSkill) ?? { total: 0, correct: 0 };
      bucket.total++;
      if (ok) bucket.correct++;
      bySubSkill.set(q.subSkill, bucket);
    }
    const total = qids.length;
    sectionResults.push({
      subject,
      total,
      correct,
      scaledScore: rawCorrectToScaled(subject, correct, total),
      subSkills: Array.from(bySubSkill.entries())
        .map(([subSkill, v]) => ({ subSkill, ...v }))
        .sort((a, b) => a.correct / a.total - b.correct / b.total),
    });
  }

  const compositeScore =
    sectionResults.length > 0
      ? Math.round(
          sectionResults.reduce((sum, s) => sum + s.scaledScore, 0) / sectionResults.length
        )
      : 0;

  return { compositeScore, sections: sectionResults };
}

// ---------------------------------------------------------------------------
// Per-question review data for a completed test. Reuses the same answers ×
// correctAnswer join as scoreTest, but additionally returns the full question
// content (prompt/choices/explanation/figures/passage) so the result page can
// render a study-oriented review, grouped by section in question order.
// ---------------------------------------------------------------------------

export type ReviewChoice = { label: string; text: string };

export type ReviewQuestion = {
  id: string;
  subSkill: string;
  formOrder: number | null;
  prompt: string;
  choices: ReviewChoice[];
  figures: unknown;
  passage: { id: string; title: string | null; body: string; figures: unknown } | null;
  selected: string | null;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
};

export type ReviewSection = {
  subject: Subject;
  questions: ReviewQuestion[];
};

export async function reviewTest(testId: string): Promise<ReviewSection[]> {
  const test = await prisma.testAttempt.findUniqueOrThrow({ where: { id: testId } });
  const answers = test.answers as Record<string, string>;
  const questionsBySection = test.questionsBySection as Record<Subject, string[]>;

  const sections: ReviewSection[] = [];
  for (const [subject, qids] of Object.entries(questionsBySection) as [Subject, string[]][]) {
    if (!qids || qids.length === 0) continue;
    const rows = await prisma.question.findMany({
      where: { id: { in: qids } },
      select: {
        id: true,
        subSkill: true,
        formOrder: true,
        prompt: true,
        choices: true,
        figures: true,
        correctAnswer: true,
        explanation: true,
        passage: { select: { id: true, title: true, body: true, figures: true } },
      },
    });
    const byId = new Map(rows.map((r) => [r.id, r]));
    const questions: ReviewQuestion[] = [];
    for (const qid of qids) {
      const r = byId.get(qid);
      if (!r) continue;
      const selected = answers[qid] ?? null;
      questions.push({
        id: r.id,
        subSkill: r.subSkill,
        formOrder: r.formOrder,
        prompt: r.prompt,
        choices: r.choices as ReviewChoice[],
        figures: r.figures,
        passage: r.passage,
        selected,
        correctAnswer: r.correctAnswer,
        isCorrect: selected === r.correctAnswer,
        explanation: r.explanation,
      });
    }
    sections.push({ subject, questions });
  }
  return sections;
}
