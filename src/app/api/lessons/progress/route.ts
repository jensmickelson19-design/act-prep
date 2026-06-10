/**
 * POST /api/lessons/progress
 *
 * Upserts a LessonProgress record for the authenticated student.
 *
 * Request body (JSON):
 *   { lessonId: string, completed: boolean }
 *
 * Response 200:
 *   { ok: true, lessonId: string, completedAt: string | null }
 *
 * Errors:
 *   401  — not authenticated or not a STUDENT
 *   400  — body fails Zod validation
 *   404  — lessonId does not exist in the Lesson table
 *
 * Behavior:
 *   - completed=true: upsert ensures the row exists, then sets completedAt=now
 *     only when it is currently null (preserves original timestamp on repeat POSTs).
 *   - completed=false: upsert ensures the row exists, then clears completedAt.
 *   - viewedAt is always refreshed to now.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  lessonId: z.string().min(1),
  completed: z.boolean(),
});

export async function POST(req: Request) {
  // 1. Auth guard
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Parse + validate body
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { lessonId, completed } = parsed.data;
  const userId = session.user.id;

  // 3. Verify the lesson exists (avoids orphaned progress rows on bad IDs)
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    select: { id: true },
  });
  if (!lesson) {
    return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
  }

  const now = new Date();

  // 4a. Ensure the progress row exists (touch viewedAt).
  //     Using upsert here so both the "first ever view" and subsequent calls
  //     are a single round-trip before the conditional update below.
  const row = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: { userId, lessonId, viewedAt: now },
    update: { viewedAt: now },
    select: { id: true, completedAt: true },
  });

  // 4b. Apply the completion state.
  let finalCompletedAt = row.completedAt;

  if (completed && row.completedAt === null) {
    // First time marking complete — set the timestamp.
    const updated = await prisma.lessonProgress.update({
      where: { id: row.id },
      data: { completedAt: now },
      select: { completedAt: true },
    });
    finalCompletedAt = updated.completedAt;
  } else if (!completed && row.completedAt !== null) {
    // Un-marking complete — clear the timestamp.
    const updated = await prisma.lessonProgress.update({
      where: { id: row.id },
      data: { completedAt: null },
      select: { completedAt: true },
    });
    finalCompletedAt = updated.completedAt;
  }
  // else: completed=true and already had completedAt → preserve original timestamp (no-op)
  // else: completed=false and already null → no change needed

  return NextResponse.json({
    ok: true,
    lessonId,
    completedAt: finalCompletedAt?.toISOString() ?? null,
  });
}
