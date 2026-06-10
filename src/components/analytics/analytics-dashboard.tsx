import type { ChildSummary, WeakSubSkill } from "@/lib/parent-stats";
import type { ProjectionResult, TrendPoint } from "@/lib/scoring";
import { TimeStudied } from "./time-studied";
import { PracticeStats } from "./practice-stats";
import { ProjectedScores } from "./projected-scores";
import { ProjectionTrendCard } from "./projection-trend-card";
import { TimeBySubject } from "./time-by-subject";
import { WeakestSubSkills } from "./weakest-sub-skills";

export interface AnalyticsDashboardProps {
  summary: ChildSummary;
  projection: ProjectionResult;
  trend: TrendPoint[];
  weakest: WeakSubSkill[];
  /**
   * When true (student view), the weakest-sub-skills card renders per-skill
   * Lesson + Practice links so the student can act on each weakness.
   * Parent view passes false (read-only report).
   */
  actionable?: boolean;
}

/**
 * Composes the six analytics sections into one dashboard. Pure presentational —
 * all data arrives via props (from `getChildSummary`, `projectScores`,
 * `getProjectionTrend`, `getWeakestSubSkills`). Renders content only; the
 * surrounding page supplies any header/chrome.
 */
export function AnalyticsDashboard({
  summary,
  projection,
  trend,
  weakest,
  actionable = false,
}: AnalyticsDashboardProps) {
  return (
    <div className="space-y-8">
      <TimeStudied timeSpent={summary.timeSpent} />
      <PracticeStats
        attempts={summary.attempts}
        correctAttempts={summary.correctAttempts}
        accuracy={summary.accuracy}
      />
      <ProjectedScores projection={projection} />
      <ProjectionTrendCard trend={trend} />
      <div className="grid gap-4 md:grid-cols-2">
        <TimeBySubject timeBySubject={summary.timeBySubject} />
        <WeakestSubSkills weakest={weakest} actionable={actionable} />
      </div>
    </div>
  );
}
