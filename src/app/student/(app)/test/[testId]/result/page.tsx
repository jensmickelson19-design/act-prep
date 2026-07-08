import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PassageBody } from "@/components/passage-body";
import { FigureView } from "@/components/figure-view";
import { MathText } from "@/components/math-text";
import { asFigures } from "@/lib/figures";
import { scoreTest, reviewTest, type ReviewQuestion } from "@/lib/test-scoring";
import { cn } from "@/lib/utils";

export default async function TestResultPage({ params }: { params: { testId: string } }) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const test = await prisma.testAttempt.findUnique({ where: { id: params.testId } });
  if (!test || test.userId !== session.user.id) notFound();
  if (test.status !== "COMPLETED") redirect(`/student/test/${test.id}`);

  const result = await scoreTest(test.id);
  const review = await reviewTest(test.id);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Practice test results</h1>
        <p className="text-muted-foreground">
          Completed {test.completedAt?.toLocaleString() ?? "recently"}.
        </p>
      </header>

      {/* Disclaimer banner */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-100">
        <strong>These are projected estimates — not official ACT scores.</strong> Scores are
        computed using a heuristic model based on your answers. They are for practice guidance
        only and do not predict your actual ACT result.
      </div>

      {/* Composite score */}
      <Card>
        <CardHeader>
          <CardDescription>Projected composite estimate</CardDescription>
          <CardTitle className="text-6xl tabular-nums leading-none">
            {result.compositeScore}
            <span className="ml-2 text-2xl font-normal text-muted-foreground">/ 36</span>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Per-section scores */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {result.sections.map((s) => {
          const pct = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
          return (
            <Card key={s.subject}>
              <CardHeader className="pb-3">
                <CardDescription>
                  {s.subject.charAt(0) + s.subject.slice(1).toLowerCase()} (est.)
                </CardDescription>
                <CardTitle className="text-4xl tabular-nums leading-none">{s.scaledScore}</CardTitle>
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs text-muted-foreground">
                    {s.correct} of {s.total} correct · {pct}%
                  </p>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Sub-skill breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Sub-skill breakdown</CardTitle>
          <CardDescription>
            Where you did well and where to focus your next practice session.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.sections.map((s) => (
            <details key={s.subject} className="group rounded-lg border bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium [&::-webkit-details-marker]:hidden">
                <span>{s.subject.charAt(0) + s.subject.slice(1).toLowerCase()}</span>
                <span className="text-sm text-muted-foreground">
                  {s.correct}/{s.total} correct
                </span>
              </summary>
              <div className="border-t px-4 pb-3 pt-2">
                {s.subSkills.length === 0 ? (
                  <p className="py-1 text-sm text-muted-foreground">No sub-skill data.</p>
                ) : (
                  <div className="space-y-1">
                    {s.subSkills.map((ss) => {
                      const pct = ss.total > 0 ? Math.round((ss.correct / ss.total) * 100) : 0;
                      return (
                        <div
                          key={ss.subSkill}
                          className="flex items-center gap-3 py-1 text-sm"
                        >
                          <span className="flex-1">{prettySubSkill(ss.subSkill)}</span>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className="w-16 text-right tabular-nums text-muted-foreground">
                              {ss.correct}/{ss.total} ({pct}%)
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </details>
          ))}
        </CardContent>
      </Card>

      {/* Question-by-question review */}
      <Card>
        <CardHeader>
          <CardTitle>Review questions</CardTitle>
          <CardDescription>
            See every question with your answer, the correct answer, and an explanation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {review.map((section) => {
            const correct = section.questions.filter((q) => q.isCorrect).length;
            return (
              <details key={section.subject} className="group rounded-lg border bg-muted/30">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium [&::-webkit-details-marker]:hidden">
                  <span>{section.subject.charAt(0) + section.subject.slice(1).toLowerCase()}</span>
                  <span className="text-sm text-muted-foreground">
                    {correct}/{section.questions.length} correct
                  </span>
                </summary>
                <div className="space-y-4 border-t px-4 py-4">
                  {section.questions.map((q, i) => (
                    <ReviewQuestionCard key={q.id} q={q} index={i} />
                  ))}
                </div>
              </details>
            );
          })}
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/student">Back to dashboard</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/student/test/history">Past tests</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/student/test">Take another test</Link>
        </Button>
      </div>
    </div>
  );
}

function ReviewQuestionCard({ q, index }: { q: ReviewQuestion; index: number }) {
  return (
    <div className="rounded-md border bg-background p-4">
      <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>Question {index + 1}</span>
        <span
          className={cn(
            "rounded px-2 py-0.5 font-medium",
            q.isCorrect
              ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
              : "bg-destructive/10 text-destructive"
          )}
        >
          {q.selected == null ? "Not answered" : q.isCorrect ? "Correct" : "Incorrect"}
        </span>
      </div>

      {q.passage && (
        <div className="mb-3 rounded-md border bg-muted/30 p-3">
          {q.passage.title && <p className="mb-1 text-sm font-semibold">{q.passage.title}</p>}
          <PassageBody
            body={q.passage.body}
            figures={asFigures(q.passage.figures)}
            activeMarker={q.formOrder}
          />
        </div>
      )}

      <p className="mb-2 text-sm">
        <MathText>{q.prompt}</MathText>
      </p>
      {asFigures(q.figures).map((f) => (
        <FigureView key={f.id} figure={f} />
      ))}

      <div className="space-y-1.5">
        {q.choices.map((c) => {
          const isCorrect = c.label === q.correctAnswer;
          const isSelected = c.label === q.selected;
          const isWrongPick = isSelected && !isCorrect;
          return (
            <div
              key={c.label}
              className={cn(
                "flex items-start gap-2 rounded-md border px-3 py-2 text-sm",
                isCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950",
                isWrongPick && "border-destructive bg-destructive/10"
              )}
            >
              <span className="font-semibold">{c.label}.</span>
              <span className="flex-1">
                <MathText>{c.text}</MathText>
              </span>
              {isCorrect && <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Correct answer</span>}
              {isWrongPick && <span className="text-xs font-medium text-destructive">Your answer</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-2 rounded-md bg-muted/50 px-3 py-2 text-sm">
        <span className="font-semibold">Explanation. </span>
        <MathText>{q.explanation}</MathText>
      </div>
    </div>
  );
}

function prettySubSkill(s: string): string {
  return s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
