import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";
import { getChildSummary, getWeakestSubSkills } from "@/lib/parent-stats";
import { getProjectionTrend, projectScores } from "@/lib/scoring";

export default async function StudentAnalyticsPage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const userId = session.user.id;
  const [summary, projection, trend, weakest] = await Promise.all([
    getChildSummary(userId),
    projectScores(userId),
    getProjectionTrend(userId, 30),
    getWeakestSubSkills(userId, 5),
  ]);

  if (!summary) {
    return (
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Your analytics
          </h1>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            We could not load your analytics. Try practicing a few questions first.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Your analytics
        </h1>
        <p className="mt-1 font-sans text-sm text-muted-foreground">
          Time studied, projected scores, and the sub-skills to focus on next.
        </p>
      </header>

      <AnalyticsDashboard
        summary={summary}
        projection={projection}
        trend={trend}
        weakest={weakest}
        actionable
      />
    </div>
  );
}
