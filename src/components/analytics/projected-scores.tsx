import { Card } from "@/components/ui/card";
import type { ProjectionResult } from "@/lib/scoring";
import { SUBJECTS } from "@/lib/scoring";

function titleCase(subject: string): string {
  return subject.charAt(0) + subject.slice(1).toLowerCase();
}

/**
 * Pure presentational "Projected ACT scores" section — composite estimate plus
 * the four per-section estimates, with the heuristic-model disclaimer banner.
 * Data is supplied via props; no DB access here.
 */
export function ProjectedScores({ projection }: { projection: ProjectionResult }) {
  return (
    <section className="space-y-3">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        Projected ACT scores
      </h2>

      {/* Disclaimer banner */}
      <div className="rounded-md border-l-4 border-callout-warn-border bg-callout-warn px-4 py-3 text-sm text-foreground">
        <strong>Important — projected estimates only.</strong> The scores below are calculated by
        a heuristic model from recent practice activity. They are <strong>not</strong> official
        ACT scores and should not be interpreted as a guarantee of actual test performance.
        Requires at least 20 recent attempts per section.
      </div>

      {/* Composite + sections */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
        <Card className="flex flex-col items-center justify-center p-6 text-center md:col-span-1">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Composite (est.)
          </p>
          <p className="mt-1 font-sans text-5xl font-semibold tabular-nums leading-none">
            {projection.composite ?? "—"}
          </p>
          <p className="mt-1 font-sans text-sm text-muted-foreground">/ 36</p>
        </Card>
        <div className="grid grid-cols-2 gap-3 md:col-span-4 md:grid-cols-4">
          {SUBJECTS.map((subject) => {
            const s = projection.sections[subject];
            return (
              <div
                key={subject}
                className="flex flex-col items-center rounded-lg border bg-card px-4 py-4 text-center"
              >
                <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {titleCase(subject)}
                </span>
                <span className="mt-1 font-sans text-3xl font-semibold tabular-nums leading-none">
                  {s ? s.scaledScore : "—"}
                </span>
                <span className="mt-1 font-sans text-xs text-muted-foreground">
                  {s
                    ? `${Math.round(s.rawAccuracy * 100)}% · ${s.attemptCount} attempts`
                    : "need ≥20 attempts"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
