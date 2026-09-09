import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/auth-email";
import { RATE_LIMITS, clientIp, rateLimit } from "@/lib/rate-limit";
import { reportError } from "@/lib/observability";

const schema = z.object({ email: z.string().email().toLowerCase().trim() });

// Always responds 200 with the same body whether or not the account exists —
// no account-enumeration signal. Rate limited per IP and per email.
export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    // Even a malformed request gets the generic answer.
    return NextResponse.json({ ok: true });
  }
  const { email } = parsed.data;

  const [byIp, byEmail] = await Promise.all([
    rateLimit(RATE_LIMITS.forgotPassword, clientIp()),
    rateLimit(RATE_LIMITS.forgotPassword, `email:${email}`),
  ]);
  if (!byIp.ok || !byEmail.ok) {
    return NextResponse.json(
      { ok: true },
      { headers: { "Retry-After": String(Math.max(byIp.retryAfterSec, byEmail.retryAfterSec)) } }
    );
  }

  // Never let an internal failure change the response — that would leak
  // whether the address exists. Log it and still answer generically.
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      await sendPasswordResetEmail(user.id, user.email);
    }
  } catch (err) {
    reportError(err, { scope: "forgot-password" });
  }

  return NextResponse.json({ ok: true });
}
