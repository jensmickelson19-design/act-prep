"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavTab {
  label: string;
  href: string;
  /** Optional: match this prefix for active state instead of exact href. */
  matchPrefix?: string;
}

/** The 5 canonical student tabs. Exported so AppShell and tests share one source of truth. */
export const STUDENT_NAV_TABS: NavTab[] = [
  { label: "Home", href: "/student" },
  { label: "Lessons", href: "/student/lessons", matchPrefix: "/student/lessons" },
  { label: "Study Plan", href: "/student/study-plan", matchPrefix: "/student/study-plan" },
  { label: "Analytics", href: "/student/analytics", matchPrefix: "/student/analytics" },
  { label: "Tests", href: "/student/test", matchPrefix: "/student/test" },
  { label: "Account", href: "/account", matchPrefix: "/account" },
];

export interface NavTabsProps {
  tabs: NavTab[];
  /** Pass-through for extra wrapper classes. */
  className?: string;
}

function tabMatches(tab: NavTab, pathname: string): boolean {
  if (tab.matchPrefix) {
    return pathname === tab.matchPrefix || pathname.startsWith(tab.matchPrefix + "/");
  }
  return pathname === tab.href;
}

export function NavTabs({ tabs, className }: NavTabsProps): JSX.Element {
  const pathname = usePathname();

  // Of all matching tabs, the longest matching href wins.
  let activeHref: string | null = null;
  for (const tab of tabs) {
    if (tabMatches(tab, pathname)) {
      if (activeHref === null || tab.href.length > activeHref.length) {
        activeHref = tab.href;
      }
    }
  }

  return (
    <nav
      className={cn(
        // Tabs still scroll horizontally on narrow screens, but the scrollbar
        // is hidden (.no-scrollbar utility in globals.css).
        "flex items-center gap-6 overflow-x-auto whitespace-nowrap font-sans text-sm no-scrollbar",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.href === activeHref;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "-mb-px border-b-2 py-4 transition-colors",
              isActive
                ? "border-accent font-semibold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
