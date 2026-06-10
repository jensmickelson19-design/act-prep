/**
 * Lesson detail — /student/lessons/[subSkill]
 *
 * Server component. Responsibilities:
 *   1. Look up the Lesson by subSkill slug (404 if missing).
 *   2. Upsert a LessonProgress record with viewedAt = now (view tracking).
 *   3. Render the lesson: title, summary, body (MathMarkdown), worked examples
 *      (WorkedExample), a "Mark complete" client island, and a practice link.
 *
 * The `examples` JSON field is cast to WorkedExampleData[] — the seed guarantees
 * this shape (see prisma/seed-data/types.ts WorkedExample).
 */

import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { MathMarkdown } from "@/components/math-markdown";
import { WorkedExample } from "@/components/worked-example";
import type { WorkedExampleData } from "@/components/worked-example";
import { MarkCompleteButton } from "../_mark-complete";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ─── subject → practice URL slug ─────────────────────────────────────────────

const SUBJECT_SLUG: Record<string, string> = {
  ENGLISH: "english",
  MATH: "math",
  READING: "reading",
  SCIENCE: "science",
};

const SUBJECT_LABEL: Record<string, string> = {
  ENGLISH: "English",
  MATH: "Math",
  READING: "Reading",
  SCIENCE: "Science",
};

// ─── page params type ─────────────────────────────────────────────────────────

interface PageProps {
  params: { subSkill: string };
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default async function LessonDetailPage({ params }: PageProps) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const userId = session.user.id;
  const { subSkill } = params;

  // 1. Fetch lesson.
  const lesson = await prisma.lesson.findUnique({
    where: { subSkill },
    include: {
      progress: {
        where: { userId },
        select: { id: true, completedAt: true },
        take: 1,
      },
    },
  });

  if (!lesson) notFound();

  // 2. Upsert viewedAt (fire-and-forget is intentional — don't block render).
  //    We await it here so the DB write happens before the page streams, keeping
  //    the progress state consistent with what we render.
  const now = new Date();
  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: lesson.id } },
    create: { userId, lessonId: lesson.id, viewedAt: now },
    update: { viewedAt: now },
  });

  // 3. Parse worked examples from JSON.
  //    The seed guarantees WorkedExample[] shape; cast is safe.
  const examples = (lesson.examples ?? []) as unknown as WorkedExampleData[];

  const progressRecord = lesson.progress[0] ?? null;
  const isCompleted = !!progressRecord?.completedAt;
  const practiceSlug = SUBJECT_SLUG[lesson.subject] ?? lesson.subject.toLowerCase();
  const subjectLabel = SUBJECT_LABEL[lesson.subject] ?? lesson.subject;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
          <li>
            <Link href="/student/lessons" className="hover:text-foreground transition-colors">
              Lessons
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="font-sans text-xs font-semibold uppercase tracking-[0.12em]">
            {subjectLabel}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {subjectLabel}
            </p>
            <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              {lesson.title}
            </h1>
            <p className="font-sans text-base text-muted-foreground">
              {lesson.summary}
            </p>
          </div>

          {/* Completion control */}
          <div className="flex shrink-0 items-center gap-3">
            {isCompleted ? (
              <Badge variant="success" className="text-sm px-3 py-1.5">
                ✓ Completed
              </Badge>
            ) : (
              <MarkCompleteButton
                lessonId={lesson.id}
                initiallyCompleted={isCompleted}
              />
            )}
          </div>
        </div>
      </header>

      <Separator />

      {/* Lesson body — Markdown with KaTeX math */}
      <section aria-label="Lesson content">
        <MathMarkdown>{lesson.body}</MathMarkdown>
      </section>

      {/* Worked examples */}
      {examples.length > 0 && (
        <section aria-labelledby="examples-heading" className="space-y-4">
          <h2
            id="examples-heading"
            className="font-serif text-xl font-semibold tracking-tight md:text-2xl"
          >
            Worked Examples
          </h2>
          <div className="space-y-6">
            {examples.map((ex, i) => (
              <WorkedExample key={i} example={ex} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      <Separator />

      {/* Footer actions */}
      <footer className="flex flex-wrap items-center justify-between gap-4">
        <Button asChild variant="outline">
          <Link href="/student/lessons">← Back to Lessons</Link>
        </Button>
        <Button asChild variant="accentSolid">
          <Link href={`/student/practice/${practiceSlug}`}>
            Practice {subjectLabel} →
          </Link>
        </Button>
      </footer>
    </div>
  );
}
