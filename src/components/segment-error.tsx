"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Shared body for segment-level error boundaries (student / parent areas).
// Rendered inside the surrounding layout, so it only replaces the page content.
export function SegmentError({
  error,
  reset,
  homeHref,
  homeLabel,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  homeHref: string;
  homeLabel: string;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center gap-5 py-24 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="max-w-lg font-serif text-2xl font-semibold tracking-tight md:text-3xl">
        This page didn&rsquo;t load
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The problem has been logged. Try again, or go back to your dashboard.
      </p>
      {error.digest && (
        <p className="text-xs text-muted-foreground">Reference: {error.digest}</p>
      )}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href={homeHref}>{homeLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
