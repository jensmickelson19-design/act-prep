import * as Sentry from "@sentry/nextjs";

// Server-side (Node runtime) Sentry init. Entirely inert unless SENTRY_DSN is
// set, so local dev and preview deploys without the env var pay nothing.
const dsn = process.env.SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    // Sample a fraction of transactions for performance monitoring. Errors are
    // always captured regardless of this value.
    tracesSampleRate: process.env.VERCEL_ENV === "production" ? 0.1 : 1.0,
    // Don't send local/dev noise even if a DSN leaks into a dev shell.
    enabled: process.env.NODE_ENV === "production",
  });
}
