import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { buildTestQuestions } from "@/lib/test-builder";
import { sectionsFor } from "@/lib/test-format";

const schema = z.object({ withScience: z.boolean().default(true) });

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  const { withScience } = parsed.data;

  const questionsBySection = await buildTestQuestions(withScience);
  const sections = sectionsFor(withScience);
  const first = sections[0];
  const deadline = new Date(Date.now() + first.durationSec * 1000);

  const test = await prisma.testAttempt.create({
    data: {
      userId: session.user.id,
      status: "IN_PROGRESS",
      withScience,
      currentSection: first.subject,
      sectionDeadline: deadline,
      questionsBySection: questionsBySection as object,
      answers: {},
    },
  });

  return NextResponse.json({ testId: test.id });
}
