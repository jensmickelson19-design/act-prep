import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export interface PracticeStatsData {
  attempts: number;
  correctAttempts: number;
  accuracy: number | null;
}

/**
 * Pure presentational "Practice stats" section — questions attempted and
 * accuracy. Data is supplied via props; no DB access here.
 */
export function PracticeStats({ attempts, correctAttempts, accuracy }: PracticeStatsData) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Card>
        <CardHeader>
          <CardDescription>Questions attempted</CardDescription>
          <CardTitle className="font-sans text-3xl tabular-nums">{attempts}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Accuracy</CardDescription>
          <CardTitle className="font-sans text-3xl tabular-nums">
            {accuracy !== null ? `${Math.round(accuracy * 100)}%` : "—"}
          </CardTitle>
          <p className="font-sans text-xs text-muted-foreground">
            {correctAttempts} of {attempts} correct
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}
