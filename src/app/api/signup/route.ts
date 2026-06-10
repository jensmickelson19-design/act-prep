import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/validators";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const { email, password, name, role, inviteCode } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  // Students may optionally redeem an invite at signup; validate before creating the account
  // so we don't end up with an orphan user if the code is bad.
  let invite = null;
  if (role === "STUDENT" && inviteCode) {
    invite = await prisma.inviteCode.findUnique({ where: { code: inviteCode } });
    if (!invite || invite.redeemedBy || invite.expiresAt < new Date()) {
      return NextResponse.json({ error: "Invalid or expired invite code" }, { status: 400 });
    }
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.$transaction(async (tx) => {
    const u = await tx.user.create({
      data: { email, passwordHash, name, role },
    });
    if (invite) {
      await tx.inviteCode.update({
        where: { id: invite.id },
        data: { redeemedBy: u.id, redeemedAt: new Date() },
      });
      await tx.parentChildLink.create({
        data: { parentId: invite.parentId, childId: u.id },
      });
    }
    return u;
  });

  return NextResponse.json({ id: user.id, email: user.email, role: user.role });
}
