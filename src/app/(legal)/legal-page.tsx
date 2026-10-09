import Link from "next/link";
import type { ReactNode } from "react";

// Shared chrome for the public legal pages (Terms, Privacy). Kept minimal and
// self-contained so these render for logged-out visitors and for Stripe's
// review crawler.
export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            ACT Prep
          </Link>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <article className="container max-w-2xl py-12">
        <h1 className="font-serif text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>

        <div className="prose prose-sm mt-8 max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-h2:mt-8 prose-h2:text-xl">
          {children}
        </div>
      </article>

      <footer className="border-t border-border">
        <div className="container flex h-16 items-center gap-4 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}
