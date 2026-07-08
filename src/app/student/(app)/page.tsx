import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { projectScores, SUBJECTS } from "@/lib/scoring";

const SUBJECT_INFO = [
  { slug: "english", label: "English", enum: "ENGLISH" as const, description: "Grammar, usage, and rhetorical skills" },
  { slug: "math", label: "Math", enum: "MATH" as const, description: "Pre-algebra through trigonometry" },
  { slug: "reading", label: "Reading", enum: "READING" as const, description: "Comprehension and reasoning" },
  { slug: "science", label: "Science", enum: "SCIENCE" as const, description: "Data analysis and interpretation" },
];

export default async function StudentHome() {
  const session = await auth();
  if (!session) return null;

  const [mastery, projection] = await Promise.all([
    prisma.subSkillMastery.groupBy({
      by: ["subject"],
      where: { userId: session.user.id },
      _avg: { masteryScore: true },
      _count: { _all: true },
    }),
    projectScores(session.user.id),
  ]);

  const masteryBySubject = new Map(mastery.map((m) => [m.subject, m._avg.masteryScore ?? 0]));
  const subSkillCount = new Map(mastery.map((m) => [m.subject, m._count._all]));

  return (
    <div className="space-y-8">
      <header>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Dashboard
        </p>
        <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Welcome back, {session.user.name}
        </h1>
        <p className="mt-1.5 text-muted-foreground">
          Choose a subject to practice or take a full-length test.
        </p>
      </header>

      <ProjectionCard projection={projection} />

      {/* Subject practice cards */}
      <section className="space-y-4">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Practice by subject
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SUBJECT_INFO.map((s) => {
            const m = masteryBySubject.get(s.enum) ?? 0;
            const count = subSkillCount.get(s.enum) ?? 0;
            const masteryPct = Math.round(m * 100);
            return (
              <Card key={s.slug} className="flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle>{s.label}</CardTitle>
                  <CardDescription>{s.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3">
                  {count > 0 ? (
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Mastery</span>
                        <span className="font-sans font-semibold tabular-nums text-foreground">
                          {masteryPct}%
                        </span>
                      </div>
                      <Progress value={masteryPct} className="h-1.5" />
                      <p className="text-xs text-muted-foreground">
                        {count} sub-skill{count === 1 ? "" : "s"} tracked
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">No practice yet</p>
                  )}
                  <Button asChild className="mt-auto w-full">
                    <Link href={`/student/practice/${s.slug}`}>Practice {s.label}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Full-length test */}
      <Card>
        <CardHeader>
          <CardTitle>Full-length practice test</CardTitle>
          <CardDescription>
            Timed section-by-section, just like the real ACT. Score report at the end.
            2h 5m without Science · 2h 45m with Science.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/student/test">Start a practice test</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/student/test/history">Review past tests</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function ProjectionCard({ projection }: { projection: Awaited<ReturnType<typeof projectScores>> }) {
  const hasAny = SUBJECTS.some((s) => projection.sections[s] !== null);
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Projected ACT score estimate</CardTitle>
            <CardDescription className="mt-1">
              Based on your recent practice activity — <strong>not an official ACT score</strong>.
              {projection.lastAttemptAt && (
                <> Updated {projection.lastAttemptAt.toLocaleDateString()}.</>
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!hasAny ? (
          <div className="rounded-lg border border-dashed bg-muted/30 px-6 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              Complete at least <strong>20 questions per section</strong> to see your projected
              score estimate.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-primary bg-primary/[0.04] px-4 py-5 md:col-span-1">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Composite
                </span>
                <span className="mt-1 font-sans text-4xl font-semibold tabular-nums leading-none text-primary">
                  {projection.composite ?? "—"}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">of 36</span>
              </div>
              {SUBJECTS.map((subject) => {
                const s = projection.sections[subject];
                return (
                  <div
                    key={subject}
                    className="flex flex-col items-center justify-center rounded-lg border bg-card px-4 py-5"
                  >
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {subject.charAt(0) + subject.slice(1).toLowerCase()}
                    </span>
                    <span className="mt-1 font-sans text-3xl font-semibold tabular-nums leading-none">
                      {s ? s.scaledScore : "—"}
                    </span>
                    <span className="mt-1 text-center text-xs text-muted-foreground">
                      {s
                        ? `${Math.round(s.rawAccuracy * 100)}% · ${s.attemptCount} q`
                        : "need ≥20 q"}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="rounded-md border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              <strong>Projected estimate only.</strong> These numbers are computed by a heuristic
              model — they are not official ACT scores and do not predict your actual test result.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
