import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SUBJECT_ORDER = ["ENGLISH", "MATH", "READING", "SCIENCE"] as const;

export default async function TestHistoryPage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const attempts = await prisma.testAttempt.findMany({
    where: { userId: session.user.id, status: "COMPLETED" },
    orderBy: { completedAt: "desc" },
    select: {
      id: true,
      form: true,
      completedAt: true,
      compositeScore: true,
      sectionScores: true,
    },
  });

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Past practice tests</h1>
        <p className="mt-1 text-muted-foreground">
          Review any test you&apos;ve completed — scores plus a full question-by-question breakdown.
        </p>
      </header>

      {attempts.length === 0 ? (
        <Card>
          <CardContent className="py-10 text-center text-muted-foreground">
            You haven&apos;t completed a practice test yet.
            <div className="mt-4">
              <Button asChild>
                <Link href="/student/test">Take a practice test</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {attempts.map((a) => {
            const scores = (a.sectionScores as Record<string, number> | null) ?? {};
            return (
              <Link key={a.id} href={`/student/test/${a.id}/result`} className="block">
                <Card className="transition-colors hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <CardTitle className="text-lg">Practice Test {a.form}</CardTitle>
                      <span className="text-2xl font-bold tabular-nums">
                        {a.compositeScore ?? "—"}
                        <span className="ml-1 text-sm font-normal text-muted-foreground">/ 36</span>
                      </span>
                    </div>
                    <CardDescription>
                      {a.completedAt ? a.completedAt.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }) : "Completed"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                    {SUBJECT_ORDER.filter((s) => scores[s] != null).map((s) => (
                      <span key={s} className="tabular-nums">
                        {s.charAt(0) + s.slice(1).toLowerCase()}: <strong className="text-foreground">{scores[s]}</strong>
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      )}

      <Button asChild variant="ghost">
        <Link href="/student/test">Back</Link>
      </Button>
    </div>
  );
}
