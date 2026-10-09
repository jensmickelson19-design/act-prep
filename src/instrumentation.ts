// Next.js instrumentation hook. Loads the runtime-appropriate Sentry config
// once per server/edge worker. Both configs are no-ops without a DSN.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("../sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("../sentry.edge.config");
  }
}

// Captures errors thrown in server components, route handlers, and middleware
// (Next.js 14.2+). Forwards to Sentry when configured; otherwise inert.
export async function onRequestError(
  ...args: Parameters<
    typeof import("@sentry/nextjs").captureRequestError
  >
) {
  if (!process.env.SENTRY_DSN) return;
  const { captureRequestError } = await import("@sentry/nextjs");
  captureRequestError(...args);
}
