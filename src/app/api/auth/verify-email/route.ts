import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { findValidVerificationToken } from "@/lib/auth-email";

const schema = z.object({ token: z.string().min(1) });

// Consumes a verification token. POST (not GET) so link-scanner prefetches
// don't burn the token; the /verify-email page calls this on a button press.
export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const row = await findValidVerificationToken(parsed.data.token);
  if (!row) {
    return NextResponse.json(
      { error: "This link is invalid or has expired. Request a new one from your account." },
      { status: 400 }
    );
  }

  await prisma.$transaction([
    // Only set the flag if the address on the token still matches the user's
    // current email (guards against verifying a stale address after a change).
    prisma.user.updateMany({
      where: { id: row.userId, email: row.email },
      data: { emailVerifiedAt: new Date() },
    }),
    prisma.emailVerificationToken.update({
      where: { id: row.id },
      data: { usedAt: new Date() },
    }),
  ]);

  const user = await prisma.user.findUnique({
    where: { id: row.userId },
    select: { emailVerifiedAt: true, email: true },
  });
  if (!user?.emailVerifiedAt || user.email !== row.email) {
    return NextResponse.json(
      { error: "This link was for a different email address. Request a fresh one." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true });
}
