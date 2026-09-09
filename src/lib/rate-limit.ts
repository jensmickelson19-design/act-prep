import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

// Postgres-backed fixed-window rate limiter. Chosen over an in-memory counter
// because the app runs on serverless (Vercel) where instances don't share
// memory, and over Redis because Postgres is already provisioned. Precision is
// deliberately coarse (fixed windows, not sliding) — enough to blunt brute
// force and automated signup abuse without new infrastructure.

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  limit: number;
  retryAfterSec: number;
};

export type RateLimitRule = {
  // Distinguishes actions sharing an identifier, e.g. "login" vs "signup".
  name: string;
  limit: number;
  windowSec: number;
};

// Best-effort client IP from the proxy headers Vercel/most hosts set. Falls
// back to a constant bucket so a missing header fails closed-ish (shared limit)
// rather than disabling the limiter.
export function ipFromHeaders(h: Headers | null): string {
  if (!h) return "unknown";
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return h.get("x-real-ip") ?? "unknown";
}

// Route-handler convenience: reads the request headers from async context.
export function clientIp(): string {
  return ipFromHeaders(headers());
}

function windowStart(windowSec: number, now: number): Date {
  const ms = windowSec * 1000;
  return new Date(Math.floor(now / ms) * ms);
}

/**
 * Count one hit against `rule` for `identifier` (usually an IP, sometimes an
 * email for per-account throttling). Returns whether the caller is still under
 * the limit. On any datastore error it fails OPEN — availability of signup and
 * login matters more than a perfectly enforced limit during a DB blip.
 */
export async function rateLimit(
  rule: RateLimitRule,
  identifier: string
): Promise<RateLimitResult> {
  const now = Date.now();
  const start = windowStart(rule.windowSec, now);
  const key = `${rule.name}:${identifier}`;
  const retryAfterSec = Math.ceil((start.getTime() + rule.windowSec * 1000 - now) / 1000);

  try {
    // Atomic: create the window row at 1, or bump an existing one. The returned
    // count reflects this hit.
    const row = await prisma.rateLimitHit.upsert({
      where: { key_windowStart: { key, windowStart: start } },
      create: { key, windowStart: start, count: 1 },
      update: { count: { increment: 1 } },
      select: { count: true },
    });

    // Opportunistic cleanup of stale windows (~1% of calls) so the table
    // doesn't grow unbounded without a separate cron.
    if (Math.random() < 0.01) {
      const cutoff = new Date(now - 24 * 60 * 60 * 1000);
      await prisma.rateLimitHit
        .deleteMany({ where: { windowStart: { lt: cutoff } } })
        .catch(() => {});
    }

    const remaining = Math.max(0, rule.limit - row.count);
    return { ok: row.count <= rule.limit, remaining, limit: rule.limit, retryAfterSec };
  } catch {
    return { ok: true, remaining: rule.limit, limit: rule.limit, retryAfterSec };
  }
}

// Shared rule definitions so limits live in one place.
export const RATE_LIMITS = {
  signup: { name: "signup", limit: 5, windowSec: 60 * 60 }, // 5 / hour / IP
  login: { name: "login", limit: 10, windowSec: 15 * 60 }, // 10 / 15 min / IP
  passwordChange: { name: "pwchange", limit: 5, windowSec: 15 * 60 },
  profileUpdate: { name: "profile", limit: 10, windowSec: 15 * 60 },
  forgotPassword: { name: "forgotpw", limit: 5, windowSec: 60 * 60 }, // per IP and per email
  resetPassword: { name: "resetpw", limit: 10, windowSec: 60 * 60 }, // token submits / IP
  resendVerification: { name: "resendverify", limit: 4, windowSec: 60 * 60 }, // per user
} as const satisfies Record<string, RateLimitRule>;
