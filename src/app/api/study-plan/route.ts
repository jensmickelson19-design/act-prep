import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { projectScores } from "@/lib/scoring";
import {
  generateStudyPlan,
  type GeneratedPlan,
  type MasterySnapshot,
  type StudyPlanInput,
} from "@/lib/study-plan";

/**
 * Study-plan API.
 *
 * POST  — create a fresh plan from questionnaire answers. Archives any prior
 *         ACTIVE plan first (at most one ACTIVE plan per student).
 * PUT   — regenerate: rebuild the plan from the CURRENT ACTIVE plan's
 *         questionnaire answers + the latest mastery / projection data.
 */

const subjectEnum = z.enum(["ENGLISH", "MATH", "READING", "SCIENCE"]);

// Questionnaire payload. `priorActScore` is required-and-valid only when
// `takenActBefore` is true; the refinement enforces that.
const questionnaireSchema = z
  .object({
    targetScore: z.number().int().min(1).max(36),
    takenActBefore: z.boolean(),
    priorActScore: z.number().int().min(1).max(36).nullable().optional(),
    testDate: z
      .string()
      .refine((s) => !Number.isNaN(Date.parse(s)), "Invalid test date"),
    hoursPerWeek: z.number().int().min(1).max(40),
    focusSubjects: z.array(subjectEnum).max(4).default([]),
  })
  .refine((d) => !d.takenActBefore || (d.priorActScore != null), {
    message: "Prior ACT score is required when you have taken the ACT before",
    path: ["priorActScore"],
  })
  .refine((d) => new Date(d.testDate).getTime() > Date.now() - 24 * 60 * 60 * 1000, {
    message: "Test date must be today or in the future",
    path: ["testDate"],
  });

type Questionnaire = z.infer<typeof questionnaireSchema>;

/** Build + persist a plan from validated questionnaire answers. */
async function buildAndPersist(userId: string, q: Questionnaire) {
  // Latest mastery snapshot + projected composite for this user.
  const [masteryRows, projection] = await Promise.all([
    prisma.subSkillMastery.findMany({
      where: { userId },
      select: { subject: true, subSkill: true, masteryScore: true },
    }),
    projectScores(userId),
  ]);

  const masterySnapshot: MasterySnapshot = masteryRows.map((m) => ({
    subject: m.subject,
    subSkill: m.subSkill,
    masteryScore: m.masteryScore,
  }));

  const input: StudyPlanInput = {
    targetScore: q.targetScore,
    takenActBefore: q.takenActBefore,
    priorActScore: q.takenActBefore ? q.priorActScore ?? null : null,
    testDate: new Date(q.testDate),
    hoursPerWeek: q.hoursPerWeek,
    focusSubjects: q.focusSubjects,
    projectedComposite: projection.composite,
  };

  const generatedPlan: GeneratedPlan = generateStudyPlan(input, masterySnapshot);

  // Archive any existing ACTIVE plan, then create the new one — atomically.
  const [, created] = await prisma.$transaction([
    prisma.studyPlan.updateMany({
      where: { userId, status: "ACTIVE" },
      data: { status: "ARCHIVED" },
    }),
    prisma.studyPlan.create({
      data: {
        userId,
        status: "ACTIVE",
        targetScore: input.targetScore,
        takenActBefore: input.takenActBefore,
        priorActScore: input.priorActScore,
        testDate: input.testDate,
        hoursPerWeek: input.hoursPerWeek,
        focusSubjects: input.focusSubjects,
        generatedPlan: generatedPlan as unknown as object,
      },
    }),
  ]);

  return created;
}

/** POST — create a new plan from a submitted questionnaire. */
export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = questionnaireSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid questionnaire", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const plan = await buildAndPersist(session.user.id, parsed.data);
  return NextResponse.json({ plan }, { status: 201 });
}

/**
 * PUT — regenerate the ACTIVE plan in place. Reuses the questionnaire answers
 * already stored on the current ACTIVE plan; only the mastery / projection
 * inputs are refreshed. The old ACTIVE plan is archived by `buildAndPersist`.
 */
export async function PUT() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const current = await prisma.studyPlan.findFirst({
    where: { userId: session.user.id, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
  });
  if (!current) {
    return NextResponse.json(
      { error: "No active study plan to regenerate" },
      { status: 404 }
    );
  }

  const q: Questionnaire = {
    targetScore: current.targetScore,
    takenActBefore: current.takenActBefore,
    priorActScore: current.priorActScore,
    testDate: current.testDate.toISOString(),
    hoursPerWeek: current.hoursPerWeek,
    focusSubjects: Array.isArray(current.focusSubjects)
      ? (current.focusSubjects as Questionnaire["focusSubjects"])
      : [],
  };

  const plan = await buildAndPersist(session.user.id, q);
  return NextResponse.json({ plan });
}
