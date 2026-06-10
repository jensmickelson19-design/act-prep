import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FEATURES = [
  {
    title: "Adaptive practice",
    body: "Questions tuned to your level, drawn from every ACT sub-skill so each session targets what matters most.",
  },
  {
    title: "Full-length tests",
    body: "Timed section-by-section, just like the real exam, with a complete score report at the end.",
  },
  {
    title: "Projected scores",
    body: "A clear estimate of where you stand today, updated as you practice, so progress is never a guess.",
  },
];

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect(session.user.role === "PARENT" ? "/parent" : "/student");
  }

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <span className="font-serif text-lg font-semibold tracking-tight">ACT Prep</span>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Create account</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="flex flex-1 items-center">
        <div className="container flex flex-col items-center gap-6 py-20 text-center md:py-28">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Study smarter for test day
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold tracking-tight md:text-6xl">
            A calmer, more deliberate way to prepare for the ACT
          </h1>
          <p className="max-w-xl text-base text-muted-foreground">
            Adaptive practice for students and clear progress reporting for parents — built like a
            textbook, not a video game.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl">
              <Link href="/signup">Get started</Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container py-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            How it works
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="space-y-2">
                <h2 className="font-serif text-xl font-semibold tracking-tight">{f.title}</h2>
                <Separator className="w-10 bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container flex h-16 items-center justify-between text-xs text-muted-foreground">
          <span className="font-serif text-sm font-semibold tracking-tight text-foreground">
            ACT Prep
          </span>
          <span>Adaptive practice for the ACT.</span>
        </div>
      </footer>
    </main>
  );
}
