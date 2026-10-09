import * as Sentry from "@sentry/nextjs";

// Browser Sentry init. Uses NEXT_PUBLIC_SENTRY_DSN (must be public to reach the
// client bundle). Inert when unset.
//
// Scope: error capture only. Browser performance tracing and Session Replay are
// deliberately disabled — they are the heaviest parts of the SDK and not worth
// the First Load JS cost here. Re-enable via integrations + sample rates if
// front-end performance data becomes a priority.
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NEXT_PUBLIC_VERCEL_ENV ?? process.env.NODE_ENV,
    integrations: [],
    tracesSampleRate: 0,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 0,
    enabled: process.env.NODE_ENV === "production",
  });
}
