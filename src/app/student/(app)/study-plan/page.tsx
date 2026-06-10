import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { StudyPlanView } from "./study-plan-view";
import type { GeneratedPlan } from "@/lib/study-plan";

/**
 * Study-plan landing page. If the student has an ACTIVE plan, render the
 * week-by-week view; otherwise send them to the questionnaire to create one.
 * Server component — renders content only (the (app) layout supplies chrome).
 */
export default async function StudyPlanPage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const active = await prisma.studyPlan.findFirst({
    where: { userId: session.user.id, status: "ACTIVE" },
    orderBy: { createdAt: "desc" },
  });

  if (!active) {
    redirect("/student/study-plan/questionnaire");
  }

  const plan = active.generatedPlan as unknown as GeneratedPlan;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Study plan
        </h1>
        <p className="mt-1 font-sans text-sm text-muted-foreground">
          A week-by-week roadmap to your target score, built from your weakest sub-skills.
        </p>
      </header>

      <StudyPlanView plan={plan} />
    </div>
  );
}
