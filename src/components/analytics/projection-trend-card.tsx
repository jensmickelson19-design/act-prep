import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ProjectionTrendChart } from "@/components/projection-trend-chart";
import type { TrendPoint } from "@/lib/scoring";

/**
 * Pure presentational "Projected score trend" card wrapping the trend chart.
 * Data is supplied via props; no DB access here.
 */
export function ProjectionTrendCard({ trend }: { trend: TrendPoint[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projected score trend</CardTitle>
        <CardDescription>
          Last 30 days. Composite (bold) and per-section lines — projected estimates only, not
          official ACT scores.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectionTrendChart data={trend} />
      </CardContent>
    </Card>
  );
}
