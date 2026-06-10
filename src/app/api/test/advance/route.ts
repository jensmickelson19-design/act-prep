import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { nextSection } from "@/lib/test-format";
import { scoreTest } from "@/lib/test-scoring";

const schema = z.object({
  testId: z.string().min(1),
  fromSection: z.enum(["ENGLISH", "MATH", "READING", "SCIENCE"]),
});

// Move to the next section (or finalize the test if this was the last one).
// We require the client to send `fromSection` to avoid the race where two
// concurrent requests both try to advance, and we trust the server's current
// state for authorization.
export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const test = await prisma.testAttempt.findUnique({ where: { id: parsed.data.testId } });
  if (!test || test.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (test.status !== "IN_PROGRESS") {
    return NextResponse.json({ ok: true, alreadyComplete: true });
  }
  if (test.currentSection !== parsed.data.fromSection) {
    // Client is out of date — treat as no-op, let them refetch state.
    return NextResponse.json({ ok: true, staleClient: true });
  }

  const upcoming = nextSection(test.currentSection!, test.withScience);
  if (!upcoming) {
    // Last section — finalize and compute scores.
    await prisma.testAttempt.update({
      where: { id: test.id },
      data: { status: "COMPLETED", completedAt: new Date() },
    });
    const result = await scoreTest(test.id);
    await prisma.testAttempt.update({
      where: { id: test.id },
      data: {
        sectionScores: result.sections.reduce(
          (acc, s) => ({ ...acc, [s.subject]: s.scaledScore }),
          {} as Record<string, number>
        ),
        compositeScore: result.compositeScore,
      },
    });
    return NextResponse.json({ ok: true, completed: true });
  }

  await prisma.testAttempt.update({
    where: { id: test.id },
    data: {
      currentSection: upcoming.subject,
      sectionDeadline: new Date(Date.now() + upcoming.durationSec * 1000),
    },
  });
  return NextResponse.json({ ok: true, nextSection: upcoming.subject });
}
