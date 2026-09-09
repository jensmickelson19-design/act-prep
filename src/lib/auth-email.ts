import { prisma } from "@/lib/prisma";
import { absoluteUrl } from "@/lib/app-url";
import {
  sendEmail,
  passwordResetEmail,
  verificationEmail,
} from "@/lib/email";
import {
  generateToken,
  hashToken,
  expiryFromNow,
  PASSWORD_RESET_TTL_MS,
  EMAIL_VERIFICATION_TTL_MS,
} from "@/lib/tokens";

// Issues a password-reset token for `userId`, invalidating any outstanding
// ones, and emails the link. Callers must not reveal whether the account
// existed — invoke this only after a lookup and stay silent either way.
export async function sendPasswordResetEmail(userId: string, email: string) {
  const { token, tokenHash } = generateToken();
  await prisma.$transaction([
    prisma.passwordResetToken.deleteMany({ where: { userId, usedAt: null } }),
    prisma.passwordResetToken.create({
      data: { userId, tokenHash, expiresAt: expiryFromNow(PASSWORD_RESET_TTL_MS) },
    }),
  ]);
  const link = absoluteUrl(`/reset-password?token=${token}`);
  return sendEmail({ to: email, ...passwordResetEmail(link) });
}

// Consumes a raw reset token: returns the userId if valid+unused+unexpired,
// else null. Does not mutate — the route marks it used inside the same
// transaction as the password write.
export async function findValidPasswordResetToken(token: string) {
  const row = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: hashToken(token) },
  });
  if (!row || row.usedAt || row.expiresAt < new Date()) return null;
  return row;
}

// Issues an email-verification token for the user's current address and sends
// it. Safe to call on signup and on demand ("resend").
export async function sendVerificationEmail(userId: string, email: string) {
  const { token, tokenHash } = generateToken();
  await prisma.$transaction([
    prisma.emailVerificationToken.deleteMany({ where: { userId, usedAt: null } }),
    prisma.emailVerificationToken.create({
      data: {
        userId,
        email,
        tokenHash,
        expiresAt: expiryFromNow(EMAIL_VERIFICATION_TTL_MS),
      },
    }),
  ]);
  const link = absoluteUrl(`/verify-email?token=${token}`);
  return sendEmail({ to: email, ...verificationEmail(link) });
}

export async function findValidVerificationToken(token: string) {
  const row = await prisma.emailVerificationToken.findUnique({
    where: { tokenHash: hashToken(token) },
  });
  if (!row || row.usedAt || row.expiresAt < new Date()) return null;
  return row;
}
