import type { Subject } from "@prisma/client";

// Enhanced ACT (April 2025+): 2h 5min without Science, 2h 45min with.
// English shortened from 45→35 min, Math from 60→50 min and 60→45 q,
// Reading from 35→40 min (40→36 q), Science same time, now optional.
export type SectionFormat = {
  subject: Subject;
  durationSec: number;
  questionCount: number;
};

export const ACT_SECTIONS: SectionFormat[] = [
  { subject: "ENGLISH", durationSec: 35 * 60, questionCount: 50 },
  { subject: "MATH", durationSec: 50 * 60, questionCount: 45 },
  { subject: "READING", durationSec: 40 * 60, questionCount: 36 },
  { subject: "SCIENCE", durationSec: 40 * 60, questionCount: 40 },
];

export function sectionsFor(withScience: boolean): SectionFormat[] {
  return withScience ? ACT_SECTIONS : ACT_SECTIONS.filter((s) => s.subject !== "SCIENCE");
}

export function getSection(subject: Subject): SectionFormat {
  const s = ACT_SECTIONS.find((x) => x.subject === subject);
  if (!s) throw new Error(`Unknown subject: ${subject}`);
  return s;
}

export function nextSection(
  current: Subject,
  withScience: boolean
): SectionFormat | null {
  const list = sectionsFor(withScience);
  const idx = list.findIndex((s) => s.subject === current);
  if (idx < 0 || idx === list.length - 1) return null;
  return list[idx + 1];
}
