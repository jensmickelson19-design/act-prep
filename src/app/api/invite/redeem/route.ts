import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { inviteRedeemSchema } from "@/lib/validators";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = inviteRedeemSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid code" }, { status: 400 });
  }

  const invite = await prisma.inviteCode.findUnique({ where: { code: parsed.data.code } });
  if (!invite || invite.redeemedBy || invite.expiresAt < new Date()) {
    return NextResponse.json({ error: "Invalid or expired code" }, { status: 400 });
  }

  await prisma.$transaction(async (tx) => {
    await tx.inviteCode.update({
      where: { id: invite.id },
      data: { redeemedBy: session.user.id, redeemedAt: new Date() },
    });
    await tx.parentChildLink.upsert({
      where: { parentId_childId: { parentId: invite.parentId, childId: session.user.id } },
      create: { parentId: invite.parentId, childId: session.user.id },
      update: {},
    });
  });

  return NextResponse.json({ ok: true });
}
