import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({ testId: z.string().min(1) });

// Save & exit: freeze the current section's remaining time and mark the attempt
// PAUSED. Answers are already persisted per-tap, so there's nothing else to
// save. Resuming reconstructs the deadline from pausedRemainingSec.
export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const test = await prisma.testAttempt.findUnique({ where: { id: parsed.data.testId } });
  if (!test || test.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (test.status !== "IN_PROGRESS") {
    // Already paused/completed — nothing to do.
    return NextResponse.json({ ok: true, status: test.status });
  }

  const remainingMs = test.sectionDeadline
    ? test.sectionDeadline.getTime() - Date.now()
    : 0;
  const remainingSec = Math.max(0, Math.round(remainingMs / 1000));

  await prisma.testAttempt.update({
    where: { id: test.id },
    data: {
      status: "PAUSED",
      pausedRemainingSec: remainingSec,
      sectionDeadline: null,
    },
  });
  return NextResponse.json({ ok: true, status: "PAUSED", remainingSec });
}
