"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { GeneratedPlan } from "@/lib/study-plan";
import { prettySubSkill } from "@/lib/utils";

function formatDate(iso: string): string {
  // iso is YYYY-MM-DD — parse as local, not UTC, to avoid off-by-one.
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

/**
 * Renders a `GeneratedPlan`: headline summary, milestones timeline, a
 * week-by-week Accordion, and a Regenerate action. Client component — it owns
 * the regenerate fetch call.
 */
export function StudyPlanView({ plan }: { plan: GeneratedPlan }) {
  const router = useRouter();
  const [regenerating, setRegenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRegenerate() {
    setRegenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/study-plan", { method: "PUT" });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not regenerate plan");
      }
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not regenerate plan");
    } finally {
      setRegenerating(false);
    }
  }

  const { summary } = plan;

  return (
    <div className="space-y-8">
      {/* Summary */}
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <CardTitle className="text-xl">Your study plan</CardTitle>
              <CardDescription className="mt-1">
                {summary.totalWeeks} week{summary.totalWeeks === 1 ? "" : "s"} ·{" "}
                {summary.hoursPerWeek} hr/week · test on {formatDate(summary.testDate)}
              </CardDescription>
            </div>
            <Button onClick={handleRegenerate} variant="outline" disabled={regenerating}>
              {regenerating ? "Regenerating…" : "Regenerate"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label="Target score" value={String(summary.targetScore)} />
            <Stat
              label="Projected now"
              value={summary.projectedComposite != null ? String(summary.projectedComposite) : "—"}
            />
            <Stat
              label="Prior ACT"
              value={summary.priorActScore != null ? String(summary.priorActScore) : "—"}
            />
            <Stat
              label="Point gap"
              value={summary.pointGap != null ? `${summary.pointGap > 0 ? "+" : ""}${summary.pointGap}` : "—"}
            />
          </div>
          {summary.focusSubjects.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Focus subjects
              </span>
              {summary.focusSubjects.map((s) => (
                <Badge key={s} variant="accent">
                  {s.charAt(0) + s.slice(1).toLowerCase()}
                </Badge>
              ))}
            </div>
          )}
          {plan.notes.length > 0 && (
            <ul className="space-y-1 rounded-md border-l-4 border-callout-note-border bg-callout-note px-4 py-3">
              {plan.notes.map((n, i) => (
                <li key={i} className="font-sans text-xs text-foreground">
                  {n}
                </li>
              ))}
            </ul>
          )}
          {error && (
            <p className="font-sans text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Milestones timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Milestones</CardTitle>
          <CardDescription>Key checkpoints between now and test day</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-0">
            {plan.milestones.map((m, i) => (
              <li key={`${m.date}-${i}`} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="mt-1 h-3 w-3 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {i < plan.milestones.length - 1 && (
                    <span className="w-px flex-1 bg-border" aria-hidden />
                  )}
                </div>
                <div className={i < plan.milestones.length - 1 ? "pb-5" : ""}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-sm font-semibold">{m.label}</span>
                    <span className="font-sans text-xs tabular-nums text-muted-foreground">
                      {formatDate(m.date)}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground">{m.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Weekly accordion */}
      <section className="space-y-3">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Week by week
        </h2>
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible defaultValue="week-1">
              {plan.weeks.map((week) => (
                <AccordionItem key={week.weekNumber} value={`week-${week.weekNumber}`}>
                  <AccordionTrigger>
                    <span className="flex flex-1 items-center justify-between gap-3 pr-2">
                      <span className="text-left">
                        Week {week.weekNumber} · {week.theme}
                      </span>
                      <span className="flex items-center gap-2">
                        {week.isReviewWeek && <Badge variant="info">Review</Badge>}
                        <span className="font-sans text-xs font-normal tabular-nums text-muted-foreground">
                          {formatDate(week.startDate)}–{formatDate(week.endDate)}
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="font-sans text-xs text-muted-foreground">
                      Target: {week.targetHours} hr this week
                    </p>

                    {week.focusSkills.length > 0 && (
                      <div className="space-y-2">
                        <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          Focus skills
                        </p>
                        {week.focusSkills.map((s) => (
                          <div
                            key={`${s.subject}-${s.subSkill}`}
                            className="flex flex-wrap items-center justify-between gap-2 rounded-md border bg-muted/30 px-3 py-2"
                          >
                            <div>
                              <div className="font-sans text-sm font-medium">
                                {prettySubSkill(s.subSkill)}
                              </div>
                              <div className="font-sans text-xs text-muted-foreground">
                                {s.subject.charAt(0) + s.subject.slice(1).toLowerCase()} ·{" "}
                                {Math.round(s.masteryScore * 100)}% mastery
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button asChild size="sm" variant="outline">
                                <Link href={s.lessonHref}>Lesson</Link>
                              </Button>
                              <Button asChild size="sm" variant="outline">
                                <Link href={s.practiceHref}>Practice</Link>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <Separator />

                    <div className="space-y-2">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                        This week&apos;s tasks
                      </p>
                      <ul className="list-disc space-y-1 pl-5">
                        {week.tasks.map((t, i) => (
                          <li key={i} className="font-sans text-sm">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border bg-card px-3 py-2.5">
      <div className="font-sans text-xs text-muted-foreground">{label}</div>
      <div className="font-sans text-xl font-semibold tabular-nums">{value}</div>
    </div>
  );
}
