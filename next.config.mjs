import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */

// Security headers applied to every response. CSP is intentionally conservative
// but allows what the app actually uses:
//  - Google Fonts (next/font self-hosts the CSS but the font files are proxied
//    through /_next, so no external font host is needed)
//  - Stripe Checkout/Portal are full redirects (not embedded), so no frame-src
//  - 'unsafe-inline' for styles: Tailwind + Radix inject inline style attrs
//  - 'unsafe-eval' is NOT allowed
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.stripe.com",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Required on Next 14.2 for src/instrumentation.ts (Sentry init +
    // onRequestError) to load.
    instrumentationHook: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

// withSentryConfig is a thin wrapper: without SENTRY_* env vars it only adds the
// SDK's tunneling/tree-shaking niceties and does not upload source maps or call
// out anywhere at build time.
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  // Only attempt source-map upload when we have credentials for it.
  sourcemaps: { disable: !process.env.SENTRY_AUTH_TOKEN },
  disableLogger: true,
  widenClientFileUpload: true,
});
