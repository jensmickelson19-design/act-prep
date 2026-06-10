import type { Subject } from "@prisma/client";

/**
 * Deterministic study-plan generator.
 *
 * NOTE FOR LEAD: the reference spec `docs/plans/ok-now-that-we-squishy-ritchie.md`
 * (section E — "fully specifies the study-plan algorithm") is NOT present in the
 * repository. This module implements a reasonable, fully deterministic
 * (no-LLM) algorithm in its place. If/when the real section-E spec lands, the
 * body of `generateStudyPlan` should be reconciled against it; the exported
 * type shapes below are intentionally simple JSON-serializable structures so a
 * later swap stays low-risk. See the report for details.
 *
 * The algorithm:
 *  1. Derive the number of whole study weeks between "now" and the test date.
 *  2. Rank every tracked sub-skill weakest-first; sub-skills in the student's
 *     chosen focus subjects get a priority boost.
 *  3. Distribute the ranked sub-skills across the available weeks so each week
 *     gets a roughly even slice (weakest skills land in the earliest weeks).
 *  4. Size each week's task list to the student's weekly hour budget.
 *  5. Reserve the final week (when >= 3 weeks exist) as a review / full-length
 *     practice-test week.
 *  6. Emit milestone markers (kickoff, mid-point checkpoint, final review,
 *     test day).
 */

// ---------------------------------------------------------------------------
// Input / snapshot types
// ---------------------------------------------------------------------------

/** Questionnaire answers — the raw student-supplied inputs. */
export interface StudyPlanInput {
  /** Desired ACT composite score (1–36). */
  targetScore: number;
  /** Whether the student has taken an official ACT before. */
  takenActBefore: boolean;
  /** Prior official ACT composite, if `takenActBefore`. */
  priorActScore?: number | null;
  /** Test date (the day of the real ACT). */
  testDate: Date;
  /** Hours per week the student can commit to studying. */
  hoursPerWeek: number;
  /** Subjects the student wants to prioritise. Empty = treat all equally. */
  focusSubjects: Subject[];
  /**
   * Optional projected-composite estimate (from `projectScores`). Used only to
   * frame the headline gap; the plan still generates without it.
   */
  projectedComposite?: number | null;
}

/** One tracked sub-skill's mastery, as read from `SubSkillMastery`. */
export interface MasteryEntry {
  subject: Subject;
  subSkill: string;
  masteryScore: number;
}

/** The full mastery snapshot passed alongside the questionnaire input. */
export type MasterySnapshot = MasteryEntry[];

// ---------------------------------------------------------------------------
// Output types — JSON-serializable (persisted in StudyPlan.generatedPlan)
// ---------------------------------------------------------------------------

/** A single sub-skill the student should work on during a given week. */
export interface PlanFocusSkill {
  subject: Subject;
  subSkill: string;
  /** Mastery score at generation time (0–1). */
  masteryScore: number;
  /** `/student/lessons/{subSkill}` */
  lessonHref: string;
  /** `/student/practice/{subject-slug}` */
  practiceHref: string;
}

/** One week of the plan. */
export interface PlanWeek {
  /** 1-based week index. */
  weekNumber: number;
  /** ISO date (YYYY-MM-DD) the week starts. */
  startDate: string;
  /** ISO date (YYYY-MM-DD) the week ends. */
  endDate: string;
  /** Short theme line, e.g. "Build English fundamentals". */
  theme: string;
  /** Sub-skills to focus on this week. */
  focusSkills: PlanFocusSkill[];
  /** Concrete checklist items for the week. */
  tasks: string[];
  /** Whether this is the final review / practice-test week. */
  isReviewWeek: boolean;
  /** Target study hours this week (== input.hoursPerWeek). */
  targetHours: number;
}

/** A dated milestone on the plan timeline. */
export interface PlanMilestone {
  /** ISO date (YYYY-MM-DD). */
  date: string;
  label: string;
  description: string;
}

/** The generated plan artifact persisted in `StudyPlan.generatedPlan`. */
export interface GeneratedPlan {
  /** Schema version, so the persisted JSON can be migrated later. */
  version: 1;
  /** ISO timestamp the plan was generated. */
  generatedAt: string;
  /** Echo of the headline inputs for display. */
  summary: {
    targetScore: number;
    priorActScore: number | null;
    projectedComposite: number | null;
    /** targetScore minus the best known current estimate, or null. */
    pointGap: number | null;
    testDate: string;
    totalWeeks: number;
    hoursPerWeek: number;
    focusSubjects: Subject[];
  };
  weeks: PlanWeek[];
  milestones: PlanMilestone[];
  /** Human-readable notes / caveats shown under the plan. */
  notes: string[];
}

// ---------------------------------------------------------------------------
// Tunables
// ---------------------------------------------------------------------------

/** Roughly one focus sub-skill per this many study hours per week. */
const HOURS_PER_FOCUS_SKILL = 2;
/** Min / max focus skills per week regardless of hours. */
const MIN_SKILLS_PER_WEEK = 1;
const MAX_SKILLS_PER_WEEK = 6;
/** A focus subject's weakness rank is multiplied by this (lower = sooner). */
const FOCUS_SUBJECT_PRIORITY = 0.6;
/** Plans are clamped to this many weeks (longer horizons just repeat review). */
const MAX_WEEKS = 24;
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function subjectSlug(subject: Subject): string {
  return subject.toLowerCase();
}

function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function titleCase(subject: Subject): string {
  return subject.charAt(0) + subject.slice(1).toLowerCase();
}

function toFocusSkill(m: MasteryEntry): PlanFocusSkill {
  return {
    subject: m.subject,
    subSkill: m.subSkill,
    masteryScore: m.masteryScore,
    lessonHref: `/student/lessons/${m.subSkill}`,
    practiceHref: `/student/practice/${subjectSlug(m.subject)}`,
  };
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

/**
 * Build a deterministic week-by-week study plan from the questionnaire input
 * and a mastery snapshot. Pure function — no DB access, no randomness.
 */
export function generateStudyPlan(
  input: StudyPlanInput,
  masterySnapshot: MasterySnapshot,
  now: Date = new Date()
): GeneratedPlan {
  const focusSet = new Set<Subject>(input.focusSubjects);

  // --- 1. Determine the horizon in whole weeks -----------------------------
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const test = new Date(
    input.testDate.getFullYear(),
    input.testDate.getMonth(),
    input.testDate.getDate()
  );
  const rawWeeks = Math.floor((test.getTime() - startOfToday.getTime()) / MS_PER_WEEK);
  const totalWeeks = Math.max(1, Math.min(MAX_WEEKS, rawWeeks));

  // --- 2. Rank sub-skills weakest-first, boosting focus subjects -----------
  // Sort key: weaker mastery first; focus-subject skills get their effective
  // mastery scaled down so they rank earlier. Ties broken deterministically
  // by subject then subSkill so output is stable for identical input.
  const ranked = [...masterySnapshot].sort((a, b) => {
    const ka = a.masteryScore * (focusSet.has(a.subject) ? FOCUS_SUBJECT_PRIORITY : 1);
    const kb = b.masteryScore * (focusSet.has(b.subject) ? FOCUS_SUBJECT_PRIORITY : 1);
    if (ka !== kb) return ka - kb;
    if (a.subject !== b.subject) return a.subject < b.subject ? -1 : 1;
    return a.subSkill < b.subSkill ? -1 : a.subSkill > b.subSkill ? 1 : 0;
  });

  // --- 3. Size weeks -------------------------------------------------------
  const hasReviewWeek = totalWeeks >= 3;
  const focusWeekCount = hasReviewWeek ? totalWeeks - 1 : totalWeeks;

  const skillsPerWeek = Math.max(
    MIN_SKILLS_PER_WEEK,
    Math.min(MAX_SKILLS_PER_WEEK, Math.round(input.hoursPerWeek / HOURS_PER_FOCUS_SKILL))
  );

  // --- 4. Distribute ranked skills across the focus weeks ------------------
  // Weakest skills land in week 1; we slice the ranked list in order. If there
  // are more skills than weeks*skillsPerWeek, the overflow weakest skills are
  // dropped from explicit focus (still covered by the review week's notes).
  const weeks: PlanWeek[] = [];
  let cursor = 0;
  for (let w = 0; w < focusWeekCount; w++) {
    const weekStart = new Date(startOfToday.getTime() + w * MS_PER_WEEK);
    const weekEnd = new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000);
    const slice = ranked.slice(cursor, cursor + skillsPerWeek);
    cursor += slice.length;

    const focusSkills = slice.map(toFocusSkill);

    // Theme: the dominant subject of this week's slice, or a generic line.
    const subjectCounts = new Map<Subject, number>();
    for (const s of focusSkills) {
      subjectCounts.set(s.subject, (subjectCounts.get(s.subject) ?? 0) + 1);
    }
    let theme = "Targeted skill practice";
    if (subjectCounts.size > 0) {
      const dominant = [...subjectCounts.entries()].sort((a, b) => b[1] - a[1])[0][0];
      theme =
        subjectCounts.size === 1
          ? `Focus on ${titleCase(dominant)}`
          : `${titleCase(dominant)}-led mixed practice`;
    }

    const tasks: string[] = [];
    for (const s of focusSkills) {
      tasks.push(`Read the lesson for "${prettyLabel(s.subSkill)}" (${titleCase(s.subject)}).`);
      tasks.push(
        `Complete an adaptive practice set in ${titleCase(s.subject)} targeting "${prettyLabel(
          s.subSkill
        )}".`
      );
    }
    if (focusSkills.length === 0) {
      tasks.push("Complete an adaptive practice set in each subject to refresh your mastery data.");
    }
    tasks.push("Review every question you missed and note the reason for each error.");

    weeks.push({
      weekNumber: w + 1,
      startDate: isoDate(weekStart),
      endDate: isoDate(weekEnd),
      theme,
      focusSkills,
      tasks,
      isReviewWeek: false,
      targetHours: input.hoursPerWeek,
    });
  }

  // --- 5. Review / practice-test week --------------------------------------
  if (hasReviewWeek) {
    const w = focusWeekCount;
    const weekStart = new Date(startOfToday.getTime() + w * MS_PER_WEEK);
    // The final week ends on test day rather than a fixed +6.
    const weekEnd = test.getTime() > weekStart.getTime() ? test : weekStart;
    // Carry the still-weakest 3 skills into review for one last pass.
    const carryover = ranked.slice(0, 3).map(toFocusSkill);
    weeks.push({
      weekNumber: w + 1,
      startDate: isoDate(weekStart),
      endDate: isoDate(weekEnd),
      theme: "Full-length review & test simulation",
      focusSkills: carryover,
      tasks: [
        "Take a full-length, timed practice test under real conditions.",
        "Review the full score report and re-practice your three weakest sub-skills.",
        "Rest the day before the test — light review only, no new material.",
      ],
      isReviewWeek: true,
      targetHours: input.hoursPerWeek,
    });
  }

  // --- 6. Milestones -------------------------------------------------------
  const milestones: PlanMilestone[] = [];
  milestones.push({
    date: weeks[0].startDate,
    label: "Plan kickoff",
    description: "Start your study plan — begin with your weakest sub-skills.",
  });
  if (totalWeeks >= 4) {
    const midWeek = weeks[Math.floor(weeks.length / 2)];
    milestones.push({
      date: midWeek.startDate,
      label: "Mid-point checkpoint",
      description: "Re-check your projected score and adjust focus if needed.",
    });
  }
  if (hasReviewWeek) {
    milestones.push({
      date: weeks[weeks.length - 1].startDate,
      label: "Final review week",
      description: "Full-length practice test and last-pass review.",
    });
  }
  milestones.push({
    date: isoDate(test),
    label: "Test day",
    description: "Official ACT — arrive early, bring approved materials.",
  });

  // --- Summary & notes -----------------------------------------------------
  const bestEstimate =
    input.projectedComposite ?? (input.takenActBefore ? input.priorActScore ?? null : null);
  const pointGap = bestEstimate != null ? input.targetScore - bestEstimate : null;

  const notes: string[] = [];
  if (rawWeeks < 1) {
    notes.push(
      "Your test date is less than a week away — this plan is compressed into a single intensive week."
    );
  }
  if (rawWeeks > MAX_WEEKS) {
    notes.push(
      `Your test is more than ${MAX_WEEKS} weeks away — the plan covers the ${MAX_WEEKS} weeks leading up to it; revisit the questionnaire closer to the date.`
    );
  }
  if (masterySnapshot.length === 0) {
    notes.push(
      "No mastery data yet — complete some practice questions so future plans can target your specific weak spots."
    );
  }
  if (cursor < ranked.length) {
    notes.push(
      `${ranked.length - cursor} additional sub-skill(s) could not fit into weekly focus blocks — cover them during the review week.`
    );
  }
  if (pointGap != null && pointGap > 6) {
    notes.push(
      `A ${pointGap}-point jump is ambitious — consider increasing weekly study hours or extending your timeline.`
    );
  }
  notes.push(
    "Projected scores are heuristic estimates from practice activity, not official ACT scores."
  );

  return {
    version: 1,
    generatedAt: now.toISOString(),
    summary: {
      targetScore: input.targetScore,
      priorActScore: input.takenActBefore ? input.priorActScore ?? null : null,
      projectedComposite: input.projectedComposite ?? null,
      pointGap,
      testDate: isoDate(test),
      totalWeeks,
      hoursPerWeek: input.hoursPerWeek,
      focusSubjects: input.focusSubjects,
    },
    weeks,
    milestones,
    notes,
  };
}

/** Local pretty-printer (kept in-module so study-plan.ts has no UI deps). */
function prettyLabel(subSkill: string): string {
  return subSkill.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
