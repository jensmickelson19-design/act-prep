/**
 * Lessons index — /student/lessons
 *
 * Server component. Queries all lessons (with the current user's progress) and
 * renders them grouped by subject in canonical taxonomy order:
 *   ENGLISH → MATH → READING → SCIENCE
 *
 * Each lesson is shown as a Card with:
 *   - Title + summary
 *   - A progress Badge: "Completed" (success) | "In progress" (info) | "Not started" (outline)
 *
 * When the Lesson table is empty (Wave 1 state), renders a friendly empty state.
 */

import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── types ───────────────────────────────────────────────────────────────────

type SubjectEnum = "ENGLISH" | "MATH" | "READING" | "SCIENCE";

interface LessonRow {
  id: string;
  subSkill: string;
  title: string;
  summary: string;
  orderIndex: number;
  progress: {
    completedAt: Date | null;
    viewedAt: Date;
  } | null;
}

// ─── constants ───────────────────────────────────────────────────────────────

const SUBJECT_ORDER: SubjectEnum[] = ["ENGLISH", "MATH", "READING", "SCIENCE"];

const SUBJECT_LABELS: Record<SubjectEnum, string> = {
  ENGLISH: "English",
  MATH: "Math",
  READING: "Reading",
  SCIENCE: "Science",
};

// ─── helpers ─────────────────────────────────────────────────────────────────

function progressStatus(progress: LessonRow["progress"]): {
  label: string;
  variant: "success" | "info" | "outline";
} {
  if (!progress) return { label: "Not started", variant: "outline" };
  if (progress.completedAt) return { label: "Completed", variant: "success" };
  return { label: "In progress", variant: "info" };
}

// ─── page ────────────────────────────────────────────────────────────────────

export default async function LessonsPage() {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const userId = session.user.id;

  // Fetch all lessons with the user's progress record (if any) in a single
  // query using a filtered relation include.
  const rawLessons = await prisma.lesson.findMany({
    orderBy: [{ subject: "asc" }, { orderIndex: "asc" }],
    include: {
      progress: {
        where: { userId },
        select: { completedAt: true, viewedAt: true },
        take: 1,
      },
    },
  });

  // Shape into our local type — progress[0] or null.
  const lessons: (LessonRow & { subject: SubjectEnum })[] = rawLessons.map((l) => ({
    id: l.id,
    subject: l.subject as SubjectEnum,
    subSkill: l.subSkill,
    title: l.title,
    summary: l.summary,
    orderIndex: l.orderIndex,
    progress: l.progress[0] ?? null,
  }));

  // Group by subject in taxonomy order.
  const grouped = new Map<SubjectEnum, typeof lessons>();
  for (const subj of SUBJECT_ORDER) {
    grouped.set(subj, []);
  }
  for (const lesson of lessons) {
    grouped.get(lesson.subject)?.push(lesson);
  }

  const totalLessons = lessons.length;
  const completedLessons = lessons.filter((l) => l.progress?.completedAt).length;

  return (
    <div className="space-y-8">
      {/* Page header */}
      <header>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Lessons
        </h1>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          Study explanations and worked examples for every ACT skill.
          {totalLessons > 0 && (
            <>
              {" "}
              <span className="tabular-nums font-medium text-foreground">
                {completedLessons}
              </span>{" "}
              of{" "}
              <span className="tabular-nums font-medium text-foreground">
                {totalLessons}
              </span>{" "}
              completed.
            </>
          )}
        </p>
      </header>

      {totalLessons === 0 ? (
        /* Empty state — lessons seed not run yet */
        <div className="rounded-lg border border-dashed bg-muted/30 px-6 py-16 text-center">
          <p className="font-serif text-lg font-semibold text-foreground">
            Lessons coming soon
          </p>
          <p className="mt-2 font-sans text-sm text-muted-foreground">
            Instructional content is being authored and will appear here once published.
          </p>
        </div>
      ) : (
        /* Subject sections */
        <div className="space-y-10">
          {SUBJECT_ORDER.map((subj) => {
            const subjectLessons = grouped.get(subj) ?? [];
            if (subjectLessons.length === 0) return null;

            return (
              <section key={subj} aria-labelledby={`section-${subj}`}>
                {/* Subject eyebrow heading */}
                <h2
                  id={`section-${subj}`}
                  className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {SUBJECT_LABELS[subj]}
                </h2>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subjectLessons.map((lesson) => {
                    const status = progressStatus(lesson.progress);
                    return (
                      <Link
                        key={lesson.id}
                        href={`/student/lessons/${lesson.subSkill}`}
                        className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
                      >
                        <Card className="h-full transition-shadow group-hover:shadow-md">
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-3">
                              <CardTitle className="text-base leading-snug">
                                {lesson.title}
                              </CardTitle>
                              <Badge
                                variant={status.variant}
                                className="mt-0.5 shrink-0"
                              >
                                {status.label}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="line-clamp-2">
                              {lesson.summary}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
