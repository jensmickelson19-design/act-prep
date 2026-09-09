import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/auth-email";
import { RATE_LIMITS, rateLimit } from "@/lib/rate-limit";

// Re-sends the verification email to the signed-in user's current address.
export async function POST() {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const limit = await rateLimit(RATE_LIMITS.resendVerification, `user:${session.user.id}`);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "You've requested this a few times already. Try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
    );
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (user.emailVerifiedAt) {
    return NextResponse.json({ ok: true, alreadyVerified: true });
  }

  await sendVerificationEmail(user.id, user.email);
  return NextResponse.json({ ok: true });
}
