import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { formatDuration } from "@/lib/parent-stats";

export interface TimeStudiedData {
  todaySec: number;
  last7DaysSec: number;
  last30DaysSec: number;
  allTimeSec: number;
}

function TimeCard({ label, seconds }: { label: string; seconds: number }) {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="font-sans text-2xl tabular-nums">
          {formatDuration(seconds)}
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

/**
 * Pure presentational "Time studied" section — four headline duration cards.
 * Data is supplied via props; no DB access here.
 */
export function TimeStudied({ timeSpent }: { timeSpent: TimeStudiedData }) {
  return (
    <section className="space-y-3">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Time studied
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        <TimeCard label="Today" seconds={timeSpent.todaySec} />
        <TimeCard label="Last 7 days" seconds={timeSpent.last7DaysSec} />
        <TimeCard label="Last 30 days" seconds={timeSpent.last30DaysSec} />
        <TimeCard label="All time" seconds={timeSpent.allTimeSec} />
      </div>
    </section>
  );
}
