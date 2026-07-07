import type { Subject } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { sectionsFor } from "@/lib/test-format";

// Pick N questions for one section, spread across sub-skills.
// If the pool is smaller than N, fill the gap by random reuse.
async function buildSection(subject: Subject, target: number): Promise<string[]> {
  const all = await prisma.question.findMany({
    // Random fallback tests sample the drill bank; fixed-form content is
    // reserved for buildDiagnosticTest.
    where: { subject, diagnosticForm: null },
    select: { id: true, subSkill: true },
  });
  if (all.length === 0) return [];

  const bySubSkill = new Map<string, string[]>();
  for (const q of all) {
    const list = bySubSkill.get(q.subSkill) ?? [];
    list.push(q.id);
    bySubSkill.set(q.subSkill, list);
  }
  for (const list of bySubSkill.values()) shuffle(list);

  const picked: string[] = [];
  const buckets = Array.from(bySubSkill.values());
  let cursor = 0;
  // Round-robin across sub-skills.
  while (picked.length < target && buckets.some((b) => b.length > 0)) {
    const bucket = buckets[cursor % buckets.length];
    cursor++;
    const id = bucket.shift();
    if (id) picked.push(id);
  }
  // Pool was smaller than target — top up with random reuse.
  const allIds = all.map((q) => q.id);
  while (picked.length < target) {
    picked.push(allIds[Math.floor(Math.random() * allIds.length)]);
  }
  return picked.slice(0, target);
}

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export async function buildTestQuestions(
  withScience: boolean
): Promise<Record<Subject, string[]>> {
  const sections = sectionsFor(withScience);
  const result: Record<Subject, string[]> = {
    ENGLISH: [],
    MATH: [],
    READING: [],
    SCIENCE: [],
  };
  for (const s of sections) {
    result[s.subject] = await buildSection(s.subject, s.questionCount);
  }
  return result;
}

// Build a fixed practice-test form. Unlike buildTestQuestions, this returns the
// exact, repeatable set of questions tagged for that form, in their authored
// order (formOrder) — no shuffling, no random reuse. Every student who takes
// Practice Test 1 sees the same items. This is the default path from
// api/test/start; the random builder above is only a transitional fallback.
// TODO(form 2): author prisma/seed-data/form2-*.ts with diagnosticForm=2, then
// offer a form picker on the test start page (auto-suggest the untaken form).
export async function buildDiagnosticTest(
  form: number,
  withScience: boolean = true
): Promise<Record<Subject, string[]>> {
  const sections = sectionsFor(withScience);
  const result: Record<Subject, string[]> = {
    ENGLISH: [],
    MATH: [],
    READING: [],
    SCIENCE: [],
  };
  for (const s of sections) {
    const questions = await prisma.question.findMany({
      where: { subject: s.subject, diagnosticForm: form },
      select: { id: true },
      orderBy: { formOrder: "asc" },
    });
    if (questions.length !== s.questionCount) {
      throw new Error(
        `Diagnostic form ${form} ${s.subject}: expected ${s.questionCount} ` +
          `questions, found ${questions.length}. The diagnostic form is incomplete.`
      );
    }
    result[s.subject] = questions.map((q) => q.id);
  }
  return result;
}
