// Canonical, absolute site origin (no trailing slash). Used for links in
// transactional emails and anywhere a fully-qualified URL is needed
// server-side. Mirrors the metadataBase logic in app/layout.tsx.
export function appUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  return `${appUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
