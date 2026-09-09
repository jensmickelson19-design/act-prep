import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/validators";
import { RATE_LIMITS, clientIp, rateLimit } from "@/lib/rate-limit";
import { sendVerificationEmail } from "@/lib/auth-email";

export async function POST(req: Request) {
  const limit = await rateLimit(RATE_LIMITS.signup, clientIp());
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many sign-up attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
    );
  }

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

  // Kick off email verification. Don't fail signup if the send hiccups — the
  // user can resend from their account, and the grace window covers the gap.
  await sendVerificationEmail(user.id, user.email).catch(() => {});

  return NextResponse.json({ id: user.id, email: user.email, role: user.role });
}
