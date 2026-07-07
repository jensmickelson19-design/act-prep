import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { buildDiagnosticTest, buildTestQuestions } from "@/lib/test-builder";
import { sectionsFor } from "@/lib/test-format";
import { checkAccess } from "@/lib/access";

const schema = z.object({
  withScience: z.boolean().default(true),
  form: z.number().int().min(1).max(2).default(1),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const access = await checkAccess(session.user.id, session.user.role);
  if (!access.hasAccess) {
    return NextResponse.json({ error: "Subscription required" }, { status: 402 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  const { withScience, form } = parsed.data;

  // Fixed practice-test form: every student sees the same items in the same
  // order, like a real ACT form. Falls back to a random bank sample only if
  // the requested form's content is incomplete (transitional safety net).
  let questionsBySection;
  try {
    questionsBySection = await buildDiagnosticTest(form, withScience);
  } catch {
    questionsBySection = await buildTestQuestions(withScience);
  }
  const sections = sectionsFor(withScience);
  const first = sections[0];
  const deadline = new Date(Date.now() + first.durationSec * 1000);

  const test = await prisma.testAttempt.create({
    data: {
      userId: session.user.id,
      status: "IN_PROGRESS",
      form,
      withScience,
      currentSection: first.subject,
      sectionDeadline: deadline,
      questionsBySection: questionsBySection as object,
      answers: {},
    },
  });

  return NextResponse.json({ testId: test.id });
}
