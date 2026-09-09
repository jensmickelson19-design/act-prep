import { randomBytes, createHash } from "crypto";

// Opaque single-use tokens for email links (password reset, email
// verification). We generate 32 random bytes, send the URL-safe base64 form in
// the email, and persist only its SHA-256 hash. A leaked database therefore
// can't be used to forge a working link, and lookups are a single indexed
// equality on the hash.

export function generateToken(): { token: string; tokenHash: string } {
  const token = randomBytes(32).toString("base64url");
  return { token, tokenHash: hashToken(token) };
}

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export const PASSWORD_RESET_TTL_MS = 60 * 60 * 1000; // 1 hour
export const EMAIL_VERIFICATION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export function expiryFromNow(ttlMs: number): Date {
  return new Date(Date.now() + ttlMs);
}
