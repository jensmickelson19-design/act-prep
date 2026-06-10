import { NextResponse } from "next/server";
import { z } from "zod";
import type { Subject } from "@prisma/client";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  testId: z.string().min(1),
  questionId: z.string().min(1),
  selectedAnswer: z.enum(["A", "B", "C", "D"]),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { testId, questionId, selectedAnswer } = parsed.data;
  const test = await prisma.testAttempt.findUnique({ where: { id: testId } });
  if (!test || test.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (test.status !== "IN_PROGRESS") {
    return NextResponse.json({ error: "Test already complete" }, { status: 410 });
  }
  if (!test.sectionDeadline || test.sectionDeadline.getTime() <= Date.now()) {
    return NextResponse.json({ error: "Section ended" }, { status: 410 });
  }

  // Only accept answers for questions belonging to the current section.
  const qbs = test.questionsBySection as Record<Subject, string[]>;
  const ids = qbs[test.currentSection!] ?? [];
  if (!ids.includes(questionId)) {
    return NextResponse.json({ error: "Question not in current section" }, { status: 400 });
  }

  const answers = (test.answers as Record<string, string>) ?? {};
  answers[questionId] = selectedAnswer;
  await prisma.testAttempt.update({
    where: { id: test.id },
    data: { answers },
  });

  return NextResponse.json({ ok: true });
}
