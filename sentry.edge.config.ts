import * as Sentry from "@sentry/nextjs";

// Edge runtime (middleware, edge routes) Sentry init. Inert without SENTRY_DSN.
const dsn = process.env.SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    tracesSampleRate: process.env.VERCEL_ENV === "production" ? 0.1 : 1.0,
    enabled: process.env.NODE_ENV === "production",
  });
}
