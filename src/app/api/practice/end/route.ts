import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({ sessionId: z.string().min(1) });

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid sessionId" }, { status: 400 });
  }

  const study = await prisma.studySession.findUnique({ where: { id: parsed.data.sessionId } });
  if (!study || study.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (study.endedAt) {
    return NextResponse.json({ ok: true, alreadyEnded: true });
  }

  const now = new Date();
  await prisma.studySession.update({
    where: { id: study.id },
    data: { endedAt: now, lastPingAt: now },
  });
  return NextResponse.json({ ok: true });
}
