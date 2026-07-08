"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PassageBody } from "@/components/passage-body";
import { FigureView } from "@/components/figure-view";
import { MathText } from "@/components/math-text";
import { asFigures } from "@/lib/figures";
import { cn } from "@/lib/utils";

type Subject = "ENGLISH" | "MATH" | "READING" | "SCIENCE";
type Choice = { label: "A" | "B" | "C" | "D"; text: string };

type SafeQuestion = {
  id: string;
  subject: Subject;
  subSkill: string;
  difficulty: number;
  formOrder: number | null;
  prompt: string;
  choices: Choice[];
  figures: unknown;
  passage: { id: string; title: string | null; body: string; figures: unknown } | null;
};

type TestState =
  | { status: "COMPLETED" }
  | {
      status: "IN_PROGRESS";
      testId: string;
      withScience: boolean;
      currentSection: Subject;
      sectionDeadline: string;
      sectionDurationSec: number;
      questions: SafeQuestion[];
      answers: Record<string, "A" | "B" | "C" | "D">;
    };

const SUBJECT_LABEL: Record<Subject, string> = {
  ENGLISH: "English",
  MATH: "Math",
  READING: "Reading",
  SCIENCE: "Science",
};

function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function TestRunner({ testId }: { testId: string }) {
  const router = useRouter();
  const [state, setState] = useState<TestState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [advancing, setAdvancing] = useState(false);
  const [now, setNow] = useState(() => Date.now());

  const loadState = useCallback(async () => {
    const res = await fetch(`/api/test/state?testId=${encodeURIComponent(testId)}`);
    if (!res.ok) {
      setError(`Could not load test (${res.status})`);
      return;
    }
    const body = (await res.json()) as TestState;
    setState(body);
    if (body.status === "COMPLETED") {
      router.replace(`/student/test/${testId}/result`);
    } else {
      setCurrentIdx(0);
    }
  }, [testId, router]);

  useEffect(() => {
    loadState();
  }, [loadState]);

  // Live countdown.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // When the section deadline passes, ask the server to advance (it does the
  // same lazily on next access, but we want to flip the UI promptly).
  useEffect(() => {
    if (!state || state.status !== "IN_PROGRESS") return;
    const remaining = new Date(state.sectionDeadline).getTime() - now;
    if (remaining > 0) return;
    if (advancing) return;
    setAdvancing(true);
    (async () => {
      await fetch("/api/test/advance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId, fromSection: state.currentSection }),
      });
      await loadState();
      setAdvancing(false);
    })();
  }, [state, now, advancing, testId, loadState]);

  const submitAnswer = useCallback(
    async (questionId: string, selectedAnswer: Choice["label"]) => {
      if (!state || state.status !== "IN_PROGRESS") return;
      // Optimistic update.
      setState({
        ...state,
        answers: { ...state.answers, [questionId]: selectedAnswer },
      });
      const res = await fetch("/api/test/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId, questionId, selectedAnswer }),
      });
      if (res.status === 410) {
        // Section expired — reload state.
        await loadState();
      }
    },
    [state, testId, loadState]
  );

  const advance = useCallback(async () => {
    if (!state || state.status !== "IN_PROGRESS") return;
    if (!confirm("End this section now? You can't return to it.")) return;
    setAdvancing(true);
    await fetch("/api/test/advance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testId, fromSection: state.currentSection }),
    });
    await loadState();
    setAdvancing(false);
  }, [state, testId, loadState]);

  if (error) {
    return (
      <main className="container py-12">
        <p className="text-destructive">{error}</p>
      </main>
    );
  }
  if (!state) {
    return (
      <main className="container py-12">
        <p className="text-muted-foreground">Loading test…</p>
      </main>
    );
  }
  if (state.status === "COMPLETED") {
    return null; // already redirected
  }

  const remaining = new Date(state.sectionDeadline).getTime() - now;
  const q = state.questions[currentIdx];
  const answeredCount = state.questions.filter((qq) => state.answers[qq.id]).length;

  return (
    <main className="container max-w-6xl space-y-4 py-6">
      <header className="sticky top-0 z-10 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">
              {SUBJECT_LABEL[state.currentSection]} section
            </h1>
            <p className="text-xs text-muted-foreground">
              {answeredCount} of {state.questions.length} answered
            </p>
          </div>
          <div className="text-right">
            <div
              className={cn(
                "text-2xl font-bold tabular-nums",
                remaining < 60_000 && "text-destructive"
              )}
            >
              {formatRemaining(remaining)}
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={advance}
              disabled={advancing}
              className="mt-1"
            >
              End section
            </Button>
          </div>
        </div>
      </header>

      <QuestionGrid
        questions={state.questions}
        answers={state.answers}
        currentIdx={currentIdx}
        onJump={setCurrentIdx}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {q.passage && (
          <Card className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
            <CardContent className="pt-6">
              {q.passage.title && (
                <p className="mb-2 text-sm font-semibold">{q.passage.title}</p>
              )}
              <PassageBody
                body={q.passage.body}
                figures={asFigures(q.passage.figures)}
                activeMarker={q.subject === "ENGLISH" ? q.formOrder : null}
              />
            </CardContent>
          </Card>
        )}

        <Card className={cn(!q.passage && "lg:col-span-2")}>
          <CardContent className="space-y-3 pt-6">
            <div className="text-xs text-muted-foreground">
              Question {currentIdx + 1} of {state.questions.length}
            </div>
            <p className="text-base">
              <MathText>{q.prompt}</MathText>
            </p>
            {asFigures(q.figures).map((f) => (
              <FigureView key={f.id} figure={f} />
            ))}
            {q.choices.map((c) => {
              const selected = state.answers[q.id] === c.label;
              return (
                <button
                  key={c.label}
                  onClick={() => submitAnswer(q.id, c.label)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left transition-colors hover:bg-accent",
                    selected && "border-primary bg-primary/5"
                  )}
                >
                  <span className="font-semibold">{c.label}.</span>
                  <span className="flex-1">
                    <MathText>{c.text}</MathText>
                  </span>
                </button>
              );
            })}
            <div className="flex justify-between pt-2">
              <Button
                variant="outline"
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                disabled={currentIdx === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentIdx((i) => Math.min(state.questions.length - 1, i + 1))
                }
                disabled={currentIdx === state.questions.length - 1}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function QuestionGrid({
  questions,
  answers,
  currentIdx,
  onJump,
}: {
  questions: SafeQuestion[];
  answers: Record<string, string>;
  currentIdx: number;
  onJump: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {questions.map((q, i) => {
        const answered = !!answers[q.id];
        const current = i === currentIdx;
        return (
          <button
            key={q.id}
            onClick={() => onJump(i)}
            className={cn(
              "h-8 w-8 rounded text-xs tabular-nums",
              answered ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent",
              current && "ring-2 ring-ring ring-offset-2"
            )}
            aria-label={`Question ${i + 1}${answered ? ", answered" : ""}`}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}
