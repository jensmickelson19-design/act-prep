import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavTabs, STUDENT_NAV_TABS, type NavTab } from "@/components/nav-tabs";

export interface AppShellProps {
  /** Page content. Rendered inside <main>. */
  children: ReactNode;

  /** Display name shown at top-right. */
  userName: string;

  /**
   * Sign-out handler. A server action, passed straight to a <form action={...}>.
   * AppShell renders the form + "Sign out" button; the page provides the action.
   */
  signOut: () => void | Promise<void>;

  /**
   * Nav tabs to render. Defaults to STUDENT_NAV_TABS when omitted.
   * Parent-side pages can pass their own set.
   */
  tabs?: NavTab[];

  /**
   * When true, the page renders WITHOUT shell chrome (no top nav, no header):
   * just <main>{children}</main> full-bleed. Used by the timed test runner and
   * practice runner so nothing distracts during a session.
   * @default false
   */
  bare?: boolean;

  /** Optional extra classes on the inner <main>. */
  mainClassName?: string;
}

export function AppShell({
  children,
  userName,
  signOut,
  tabs,
  bare = false,
  mainClassName,
}: AppShellProps): JSX.Element {
  if (bare) {
    return <main className={cn("min-h-screen", mainClassName)}>{children}</main>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="container flex h-14 items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link href="/student" className="font-serif text-lg font-semibold tracking-tight">
              ACT Prep
            </Link>
            <NavTabs tabs={tabs ?? STUDENT_NAV_TABS} />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{userName}</span>
            <form action={signOut}>
              <Button type="submit" variant="ghost" size="sm">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </header>
      <main className={cn("container flex-1 py-8", mainClassName)}>{children}</main>
    </div>
  );
}
