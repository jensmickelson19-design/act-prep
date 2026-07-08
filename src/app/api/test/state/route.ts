import { NextResponse } from "next/server";
import type { Subject } from "@prisma/client";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { nextSection, getSection } from "@/lib/test-format";
import { scoreTest } from "@/lib/test-scoring";

// Returns the current state of a test attempt, advancing the section if the
// deadline has passed.
export async function GET(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const testId = searchParams.get("testId");
  if (!testId) {
    return NextResponse.json({ error: "Missing testId" }, { status: 400 });
  }

  let test = await prisma.testAttempt.findUnique({ where: { id: testId } });
  if (!test || test.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Auto-advance any sections whose deadline has passed. This loop handles the
  // case where the student closed the tab and came back well after one or more
  // sections expired.
  while (
    test.status === "IN_PROGRESS" &&
    test.currentSection &&
    test.sectionDeadline &&
    test.sectionDeadline.getTime() <= Date.now()
  ) {
    const upcoming = nextSection(test.currentSection, test.withScience);
    if (!upcoming) {
      test = await prisma.testAttempt.update({
        where: { id: test.id },
        data: { status: "COMPLETED", completedAt: new Date() },
      });
      const result = await scoreTest(test.id);
      test = await prisma.testAttempt.update({
        where: { id: test.id },
        data: {
          sectionScores: result.sections.reduce(
            (acc, s) => ({ ...acc, [s.subject]: s.scaledScore }),
            {} as Record<string, number>
          ),
          compositeScore: result.compositeScore,
        },
      });
      break;
    }
    test = await prisma.testAttempt.update({
      where: { id: test.id },
      data: {
        currentSection: upcoming.subject,
        sectionDeadline: new Date(Date.now() + upcoming.durationSec * 1000),
      },
    });
  }

  if (test.status === "COMPLETED") {
    return NextResponse.json({ status: "COMPLETED" });
  }

  if (test.status === "PAUSED") {
    // Clock is frozen; the client shows a Resume panel instead of questions.
    return NextResponse.json({
      status: "PAUSED",
      testId: test.id,
      currentSection: test.currentSection,
      pausedRemainingSec: test.pausedRemainingSec ?? 0,
    });
  }

  const questionsBySection = test.questionsBySection as Record<Subject, string[]>;
  const ids = questionsBySection[test.currentSection!] ?? [];
  const questions = await prisma.question.findMany({
    where: { id: { in: ids } },
    select: {
      id: true,
      subject: true,
      subSkill: true,
      difficulty: true,
      formOrder: true,
      prompt: true,
      choices: true,
      figures: true,
      passage: { select: { id: true, title: true, body: true, figures: true } },
    },
  });
  // Preserve the order from questionsBySection (findMany doesn't guarantee it).
  const byId = new Map(questions.map((q) => [q.id, q]));
  const ordered = ids.map((id) => byId.get(id)).filter((q): q is NonNullable<typeof q> => !!q);

  const section = getSection(test.currentSection!);
  return NextResponse.json({
    status: test.status,
    testId: test.id,
    withScience: test.withScience,
    currentSection: test.currentSection,
    sectionDeadline: test.sectionDeadline,
    sectionDurationSec: section.durationSec,
    questions: ordered,
    answers: test.answers,
  });
}
