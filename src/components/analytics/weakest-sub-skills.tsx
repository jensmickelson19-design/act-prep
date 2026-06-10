import Link from "next/link";
import type { Subject } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn, prettySubSkill } from "@/lib/utils";
import type { WeakSubSkill } from "@/lib/parent-stats";

function titleCase(subject: string): string {
  return subject.charAt(0) + subject.slice(1).toLowerCase();
}

function subjectSlug(subject: Subject): string {
  return subject.toLowerCase();
}

/**
 * Pure presentational "Areas to focus on" card — the weakest sub-skills by
 * mastery score. When `actionable` is set, each row gains Lesson + Practice
 * links so the student can act on the weakness immediately. Data is supplied
 * via props; no DB access here.
 */
export function WeakestSubSkills({
  weakest,
  actionable = false,
}: {
  weakest: WeakSubSkill[];
  actionable?: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Areas to focus on</CardTitle>
        <CardDescription>Sub-skills with the lowest mastery score</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {weakest.length === 0 ? (
          <p className="font-sans text-sm text-muted-foreground">No practice data yet.</p>
        ) : (
          weakest.map((w) => {
            const pct = Math.round(w.masteryScore * 100);
            const low = w.masteryScore < 0.4;
            return (
              <div
                key={`${w.subject}_${w.subSkill}`}
                className="rounded-md border bg-muted/30 px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-sans text-sm font-medium">
                      {prettySubSkill(w.subSkill)}
                    </div>
                    <div className="font-sans text-xs text-muted-foreground">
                      {titleCase(w.subject)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={pct}
                      className="h-1.5 w-16"
                      indicatorClassName={low ? "bg-destructive" : "bg-warning"}
                    />
                    <span
                      className={cn(
                        "font-sans tabular-nums text-sm font-medium",
                        low ? "text-destructive" : "text-muted-foreground"
                      )}
                    >
                      {pct}%
                    </span>
                  </div>
                </div>
                {actionable && (
                  <div className="mt-2 flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/student/lessons/${w.subSkill}`}>Lesson</Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/student/practice/${subjectSlug(w.subject)}`}>Practice</Link>
                    </Button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
