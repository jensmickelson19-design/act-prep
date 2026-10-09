// Email verification is enforced softly. For GRACE_MS after signup an
// unverified user keeps full access (so a delayed or spam-filed email doesn't
// lock a paying customer out on day one); after that, protected routes bounce
// to /verify-email until they confirm.

export const VERIFICATION_GRACE_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function verificationState(user: {
  emailVerifiedAt: Date | null;
  createdAt: Date;
}): "verified" | "grace" | "required" {
  if (user.emailVerifiedAt) return "verified";
  const age = Date.now() - user.createdAt.getTime();
  return age < VERIFICATION_GRACE_MS ? "grace" : "required";
}

// Whether the app should let this user through (used by the route gate).
export function emailCheckPasses(user: {
  emailVerifiedAt: Date | null;
  createdAt: Date;
}): boolean {
  return verificationState(user) !== "required";
}

// Days left in the grace window, rounded up, min 0. For banner copy.
export function graceDaysLeft(user: {
  emailVerifiedAt: Date | null;
  createdAt: Date;
}): number {
  if (user.emailVerifiedAt) return 0;
  const left = VERIFICATION_GRACE_MS - (Date.now() - user.createdAt.getTime());
  return Math.max(0, Math.ceil(left / (24 * 60 * 60 * 1000)));
}
