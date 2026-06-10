import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { QuestionnaireForm } from "./questionnaire-form";

/**
 * Study-plan questionnaire page. Renders the form that feeds
 * `POST /api/study-plan`. Server component — renders content only (the (app)
 * layout supplies chrome).
 */
export default async function StudyPlanQuestionnairePage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Create your study plan
        </h1>
        <p className="mt-1 font-sans text-sm text-muted-foreground">
          Answer a few questions and we&apos;ll generate a personalised, week-by-week plan.
        </p>
      </header>

      <QuestionnaireForm />
    </div>
  );
}
