import type { Subject } from "@prisma/client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatDuration } from "@/lib/parent-stats";
import { SUBJECTS } from "@/lib/scoring";

function titleCase(subject: string): string {
  return subject.charAt(0) + subject.slice(1).toLowerCase();
}

/**
 * Pure presentational "Time by subject" card — a Progress bar per section.
 * Data is supplied via props; no DB access here.
 */
export function TimeBySubject({ timeBySubject }: { timeBySubject: Record<Subject, number> }) {
  const totalSubjectTime = SUBJECTS.reduce((sum, s) => sum + timeBySubject[s], 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Time by subject</CardTitle>
        <CardDescription>{formatDuration(totalSubjectTime)} total</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {totalSubjectTime === 0 ? (
          <p className="font-sans text-sm text-muted-foreground">No practice time yet.</p>
        ) : (
          SUBJECTS.map((subject) => {
            const sec = timeBySubject[subject];
            const pct = totalSubjectTime > 0 ? (sec / totalSubjectTime) * 100 : 0;
            return (
              <div key={subject} className="space-y-1.5">
                <div className="flex justify-between font-sans text-sm">
                  <span className="font-medium">{titleCase(subject)}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {formatDuration(sec)} · {Math.round(pct)}%
                  </span>
                </div>
                <Progress value={pct} />
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
