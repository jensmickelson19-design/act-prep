"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportError } from "@/lib/observability";
import { Button } from "@/components/ui/button";

// Root error boundary: catches render/data errors from any route that doesn't
// have its own closer boundary. Keep it dependency-light so it renders even
// when something upstream is broken.
export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportError(error, { digest: error.digest, boundary: "root" });
  }, [error]);

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-6 py-16 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="max-w-xl font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        We hit an unexpected error
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The problem has been logged. You can try again, or head back and pick up
        where you left off.
      </p>
      {error.digest && (
        <p className="text-xs text-muted-foreground">Reference: {error.digest}</p>
      )}
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </main>
  );
}
