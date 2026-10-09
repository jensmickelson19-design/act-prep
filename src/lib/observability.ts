import * as Sentry from "@sentry/nextjs";

// Single choke point for reporting an unexpected error. Always logs to the
// console (visible in Vercel logs); additionally forwards to Sentry when a DSN
// is configured. `context` is attached as extra data, not indexed tags.
export function reportError(error: unknown, context?: Record<string, unknown>) {
  console.error(error, context ?? "");
  Sentry.captureException(error, context ? { extra: context } : undefined);
}
