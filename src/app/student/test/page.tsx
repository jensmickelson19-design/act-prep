import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ACT_SECTIONS } from "@/lib/test-format";
import { StartTestButton } from "./start-button";

export default async function TestStartPage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  // A live (unpaused) test has a running clock — send the student straight back.
  const inProgress = await prisma.testAttempt.findFirst({
    where: { userId: session.user.id, status: "IN_PROGRESS" },
    orderBy: { startedAt: "desc" },
  });
  if (inProgress) redirect(`/student/test/${inProgress.id}`);

  // A paused test is offered as a resume card (below) rather than auto-resumed,
  // so the student can still choose to start fresh.
  const paused = await prisma.testAttempt.findFirst({
    where: { userId: session.user.id, status: "PAUSED" },
    orderBy: { startedAt: "desc" },
  });

  return (
    <main className="container max-w-2xl space-y-8 py-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Practice Test 1</h1>
        <p className="mt-1 text-muted-foreground">
          A fixed, full-length form with real passages and figures — timed section-by-section,
          just like the real ACT. Each section begins as soon as the previous one ends.
        </p>
      </header>

      {paused && (
        <Card className="border-primary/40 bg-primary/5">
          <CardHeader>
            <CardTitle>Resume your paused test</CardTitle>
            <CardDescription>
              You have a saved test in the{" "}
              {paused.currentSection
                ? paused.currentSection.charAt(0) + paused.currentSection.slice(1).toLowerCase()
                : ""}{" "}
              section. Your timer is frozen where you left off.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href={`/student/test/${paused.id}`}>Resume test</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-3">
        <Link href="/student/test/history" className="text-sm underline underline-offset-4">
          View past tests
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Test overview</CardTitle>
          <CardDescription>
            Standard ACT format. Total time: 2h 5m without Science · 2h 45m with Science.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2 text-sm">
            {ACT_SECTIONS.map((s) => (
              <div
                key={s.subject}
                className="flex items-center justify-between rounded-md border bg-muted/30 px-3 py-2.5"
              >
                <span className="font-medium">
                  {s.subject.charAt(0) + s.subject.slice(1).toLowerCase()}
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {Math.round(s.durationSec / 60)} min · {s.questionCount} questions
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Closing the tab is fine — your answers are saved as you go. The section timer keeps
            running whether or not the tab is open, so don&apos;t close it until a section ends.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3">
        <StartTestButton withScience />
        <StartTestButton withScience={false} />
        <Button asChild variant="ghost">
          <Link href="/student">Cancel</Link>
        </Button>
      </div>
    </main>
  );
}
