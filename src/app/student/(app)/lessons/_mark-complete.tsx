/**
 * MarkCompleteButton — client component that POSTs to /api/lessons/progress.
 *
 * Renders a primary Button if not yet complete; a muted "Completed" badge once
 * the optimistic / server state confirms completion.
 *
 * The component manages its own optimistic UI state: clicking immediately
 * shows "Completed" while the fetch runs in the background. On error it
 * reverts. This keeps the detail page fully server-rendered with a thin client
 * island for the interactive control.
 */

"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface MarkCompleteButtonProps {
  lessonId: string;
  /** Whether the lesson was already completed when the page was server-rendered. */
  initiallyCompleted: boolean;
}

export function MarkCompleteButton({
  lessonId,
  initiallyCompleted,
}: MarkCompleteButtonProps) {
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    // Optimistic update
    setCompleted(true);

    startTransition(async () => {
      try {
        const res = await fetch("/api/lessons/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lessonId, completed: true }),
        });
        if (!res.ok) {
          // Revert optimistic update on server error
          setCompleted(false);
        }
      } catch {
        // Network error — revert
        setCompleted(false);
      }
    });
  }

  if (completed) {
    return (
      <Badge variant="success" className="text-sm px-3 py-1.5">
        ✓ Completed
      </Badge>
    );
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
      variant="accentSolid"
      size="default"
    >
      {isPending ? "Saving…" : "Mark complete"}
    </Button>
  );
}
