import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({ testId: z.string().min(1) });

// Resume a PAUSED attempt: reconstruct the section deadline from the frozen
// remaining time so the clock continues exactly where it left off.
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
  if (test.status !== "PAUSED") {
    // Not paused — let the client just refetch state.
    return NextResponse.json({ ok: true, status: test.status });
  }

  const remainingSec = test.pausedRemainingSec ?? 0;
  await prisma.testAttempt.update({
    where: { id: test.id },
    data: {
      status: "IN_PROGRESS",
      sectionDeadline: new Date(Date.now() + remainingSec * 1000),
      pausedRemainingSec: null,
    },
  });
  return NextResponse.json({ ok: true, status: "IN_PROGRESS" });
}
