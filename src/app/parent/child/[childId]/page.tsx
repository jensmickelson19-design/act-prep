import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard";
import { formatRelative, getChildSummary, getWeakestSubSkills } from "@/lib/parent-stats";
import { getProjectionTrend, projectScores } from "@/lib/scoring";

export default async function ChildDashboard({ params }: { params: { childId: string } }) {
  const session = await auth();
  if (!session || session.user.role !== "PARENT") redirect("/login");

  const link = await prisma.parentChildLink.findUnique({
    where: { parentId_childId: { parentId: session.user.id, childId: params.childId } },
  });
  if (!link) notFound();

  const [summary, projection, trend, weakest] = await Promise.all([
    getChildSummary(params.childId),
    projectScores(params.childId),
    getProjectionTrend(params.childId, 30),
    getWeakestSubSkills(params.childId, 5),
  ]);

  if (!summary) notFound();

  return (
    <main className="container space-y-8 py-8">
      {/* Header */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {summary.child.name}
          </h1>
          <p className="mt-1 font-sans text-sm text-muted-foreground">
            {summary.child.email} · Last active {formatRelative(summary.lastActive)}
          </p>
        </div>
        <Button asChild variant="outline" className="shrink-0">
          <Link href="/parent">&larr; Dashboard</Link>
        </Button>
      </header>

      <AnalyticsDashboard
        summary={summary}
        projection={projection}
        trend={trend}
        weakest={weakest}
        actionable={false}
      />
    </main>
  );
}
