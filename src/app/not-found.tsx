import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-6 py-16 text-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        404
      </p>
      <h1 className="max-w-xl font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">
        The link may be out of date, or the page may have moved.
      </p>
      <Button asChild className="mt-2">
        <Link href="/">Go home</Link>
      </Button>
    </main>
  );
}
