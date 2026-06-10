import Link from "next/link";
import { auth, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getChildSummary, formatDuration, formatRelative } from "@/lib/parent-stats";
import { projectScores } from "@/lib/scoring";

export default async function ParentHome() {
  const session = await auth();
  if (!session) return null;

  const links = await prisma.parentChildLink.findMany({
    where: { parentId: session.user.id },
    include: { child: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: "asc" },
  });

  const summaries = await Promise.all(
    links.map(async (l) => ({
      link: l,
      summary: await getChildSummary(l.childId),
      projection: await projectScores(l.childId),
    }))
  );

  return (
    <main className="container space-y-8 py-12">
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Overview
          </p>
          <h1 className="mt-1 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Parent dashboard
          </h1>
          <p className="mt-1.5 text-muted-foreground">
            {links.length === 0
              ? "No children linked yet."
              : `Monitoring ${links.length} linked student${links.length === 1 ? "" : "s"}.`}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button asChild variant="outline">
            <Link href="/parent/invite">Invite a child</Link>
          </Button>
          <form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}>
            <Button variant="outline" type="submit">Sign out</Button>
          </form>
        </div>
      </header>

      {links.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Link your first child</CardTitle>
            <CardDescription>
              Generate an invite code and share it with your child. Once they redeem it, their
              progress shows up here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/parent/invite">Generate invite code</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {summaries.map(({ link, summary, projection }) => (
            <Card key={link.child.id} className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{link.child.name}</CardTitle>
                    <CardDescription className="mt-0.5">
                      Last active {formatRelative(summary?.lastActive ?? null)}
                    </CardDescription>
                  </div>
                  {projection.composite !== null && (
                    <div className="shrink-0 rounded-lg border-2 border-primary bg-primary/[0.04] px-3 py-2 text-center">
                      <div className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                        Est. composite
                      </div>
                      <div className="mt-1 font-sans text-2xl font-semibold tabular-nums leading-none text-primary">
                        {projection.composite}
                        <span className="text-sm font-normal text-muted-foreground">/36</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="grid grid-cols-4 gap-2 text-center">
                  <Stat label="Today" value={formatDuration(summary?.timeSpent.todaySec ?? 0)} />
                  <Stat label="7 days" value={formatDuration(summary?.timeSpent.last7DaysSec ?? 0)} />
                  <Stat label="30 days" value={formatDuration(summary?.timeSpent.last30DaysSec ?? 0)} />
                  <Stat label="All time" value={formatDuration(summary?.timeSpent.allTimeSec ?? 0)} />
                </div>
                {projection.composite !== null && (
                  <p className="rounded-md border-l-2 border-callout-warn-border bg-callout-warn px-3 py-2 text-xs text-foreground/80">
                    <strong>Projected estimate only.</strong> These scores are model estimates based
                    on practice activity — not official ACT scores.
                  </p>
                )}
                <Button asChild className="mt-auto w-full">
                  <Link href={`/parent/child/${link.child.id}`}>View full report</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border bg-muted/30 px-2 py-3">
      <div className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 font-sans text-base font-semibold tabular-nums leading-tight">
        {value}
      </div>
    </div>
  );
}
