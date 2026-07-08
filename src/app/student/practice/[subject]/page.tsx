"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  estimatedTimeSec: number;
  prompt: string;
  choices: Choice[];
  figures?: unknown;
  passage: { id: string; title: string | null; body: string; figures?: unknown } | null;
};

type NextResponse =
  | { question: SafeQuestion; isRemediation: boolean; subSkill: string }
  | { done: true; reason: string };

type AnswerResponse = {
  isCorrect: boolean;
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  justExitedRemediation: boolean;
};

const URL_TO_SUBJECT: Record<string, Subject> = {
  english: "ENGLISH",
  math: "MATH",
  reading: "READING",
  science: "SCIENCE",
};

const SUBJECT_LABEL: Record<Subject, string> = {
  ENGLISH: "English",
  MATH: "Math",
  READING: "Reading",
  SCIENCE: "Science",
};

const HEARTBEAT_MS = 30 * 1000;

export default function PracticePage({ params }: { params: { subject: string } }) {
  const router = useRouter();
  const subject = URL_TO_SUBJECT[params.subject.toLowerCase()];

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [data, setData] = useState<NextResponse | null>(null);
  const [selected, setSelected] = useState<Choice["label"] | null>(null);
  const [result, setResult] = useState<AnswerResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({ attempted: 0, correct: 0 });
  const [timedOut, setTimedOut] = useState(false);
  const questionStartRef = useRef<number>(Date.now());

  const currentQuestion = data && !("done" in data) ? data.question : null;
  const inRemediation = data && !("done" in data) && data.isRemediation;

  const loadNext = useCallback(async (sid: string) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setSelected(null);
    try {
      const res = await fetch(`/api/practice/next?sessionId=${encodeURIComponent(sid)}`);
      if (res.status === 410) {
        setTimedOut(true);
        return;
      }
      if (!res.ok) throw new Error(`Failed to load next question (${res.status})`);
      const body = (await res.json()) as NextResponse;
      setData(body);
      questionStartRef.current = Date.now();
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }, []);

  // Start a session on mount.
  useEffect(() => {
    if (!subject) {
      setError("Unknown subject");
      return;
    }
    let cancelled = false;
    (async () => {
      const res = await fetch("/api/practice/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject }),
      });
      if (cancelled) return;
      if (!res.ok) {
        setError("Could not start practice session");
        return;
      }
      const body = (await res.json()) as { sessionId: string };
      setSessionId(body.sessionId);
      await loadNext(body.sessionId);
    })();
    return () => {
      cancelled = true;
    };
  }, [subject, loadNext]);

  // Heartbeat every 30s.
  useEffect(() => {
    if (!sessionId || timedOut) return;
    const id = setInterval(() => {
      fetch("/api/practice/heartbeat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      }).catch(() => undefined);
    }, HEARTBEAT_MS);
    return () => clearInterval(id);
  }, [sessionId, timedOut]);

  // Best-effort close on tab unload.
  useEffect(() => {
    if (!sessionId) return;
    const handler = () => {
      navigator.sendBeacon(
        "/api/practice/end",
        new Blob([JSON.stringify({ sessionId })], { type: "application/json" })
      );
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [sessionId]);

  const submit = useCallback(async () => {
    if (!sessionId || !data || "done" in data || !selected) return;
    setLoading(true);
    const timeSpentSec = Math.max(1, Math.round((Date.now() - questionStartRef.current) / 1000));
    const res = await fetch("/api/practice/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        questionId: data.question.id,
        selectedAnswer: selected,
        timeSpentSec,
      }),
    });
    setLoading(false);
    if (res.status === 410) {
      setTimedOut(true);
      return;
    }
    if (!res.ok) {
      setError("Could not submit answer");
      return;
    }
    const body = (await res.json()) as AnswerResponse;
    setResult(body);
    setStats((s) => ({ attempted: s.attempted + 1, correct: s.correct + (body.isCorrect ? 1 : 0) }));
  }, [sessionId, data, selected]);

  const next = useCallback(async () => {
    if (!sessionId) return;
    await loadNext(sessionId);
  }, [sessionId, loadNext]);

  // Keyboard shortcuts: 1-4 or A-D to select, Enter to submit, N to advance.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (!currentQuestion) return;

      if (!result) {
        const numericIdx = "1234".indexOf(e.key);
        const alphaIdx = "abcdABCD".indexOf(e.key) % 4;
        const idx = numericIdx >= 0 ? numericIdx : "abcd".indexOf(e.key.toLowerCase());
        if (idx >= 0 && idx < currentQuestion.choices.length) {
          e.preventDefault();
          setSelected(currentQuestion.choices[idx].label);
          return;
        }
        if (e.key === "Enter" && selected && !loading) {
          e.preventDefault();
          submit();
        }
      } else {
        if (e.key === "Enter" || e.key.toLowerCase() === "n") {
          e.preventDefault();
          next();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentQuestion, result, selected, loading, submit, next]);

  async function endSession() {
    if (!sessionId) {
      router.push("/student");
      return;
    }
    await fetch("/api/practice/end", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    });
    router.push("/student");
  }

  if (!subject) {
    return (
      <main className="container py-12">
        <p className="text-destructive">Unknown subject.</p>
      </main>
    );
  }

  if (timedOut) {
    return (
      <main className="container py-12">
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Session paused</CardTitle>
            <CardDescription>
              We didn&apos;t see activity for a while, so we closed this practice session. Your progress is saved.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/student")} className="w-full">
              Back to dashboard
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-12">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" onClick={() => router.push("/student")} className="mt-4">
          Back
        </Button>
      </main>
    );
  }

  if (!data || (loading && !result)) {
    return (
      <main className="container py-12">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Loading question…
        </div>
      </main>
    );
  }

  if ("done" in data) {
    return (
      <main className="container py-12">
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Nice work</CardTitle>
            <CardDescription>
              You&apos;ve answered every available {SUBJECT_LABEL[subject]} question in this session.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              {stats.correct} of {stats.attempted} correct ({stats.attempted ? Math.round((stats.correct / stats.attempted) * 100) : 0}%)
            </p>
            <Button onClick={endSession} className="w-full">
              Back to dashboard
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const q = data.question;

  return (
    <main className="container max-w-6xl space-y-4 py-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{SUBJECT_LABEL[subject]} practice</h1>
          <p className="text-sm text-muted-foreground">
            {stats.attempted > 0
              ? `${stats.correct}/${stats.attempted} correct`
              : "First question of this session"}
          </p>
        </div>
        <Button variant="outline" onClick={endSession}>
          End practice
        </Button>
      </header>

      {inRemediation && !result && (
        <div className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
          Let&apos;s try a few more like this. Sub-skill: <strong>{prettySubSkill(data.subSkill)}</strong>
        </div>
      )}

      {result?.justExitedRemediation && (
        <div className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
          Got it! Moving on to a new sub-skill.
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
      {q.passage && (
        <Card className="lg:sticky lg:top-6 lg:max-h-[calc(100vh-4rem)] lg:self-start lg:overflow-y-auto">
          <CardHeader>
            {q.passage.title && <CardTitle className="text-lg">{q.passage.title}</CardTitle>}
          </CardHeader>
          <CardContent>
            <PassageBody body={q.passage.body} figures={asFigures(q.passage.figures)} />
          </CardContent>
        </Card>
      )}

      <Card className={cn(!q.passage && "lg:col-span-2")}>
        <CardHeader>
          <CardDescription className="flex justify-between">
            <span>{prettySubSkill(q.subSkill)}</span>
            <span>Difficulty {q.difficulty}/5</span>
          </CardDescription>
          <CardTitle className="text-lg">
            <MathText>{q.prompt}</MathText>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {asFigures(q.figures).map((f) => (
            <FigureView key={f.id} figure={f} />
          ))}
          {q.choices.map((c, idx) => {
            const isSelected = selected === c.label;
            const isAnswered = !!result;
            const isCorrectChoice = isAnswered && c.label === result.correctAnswer;
            const isWrongSelected = isAnswered && isSelected && !result.isCorrect;
            return (
              <button
                key={c.label}
                disabled={isAnswered || loading}
                onClick={() => setSelected(c.label)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left transition-colors",
                  !isAnswered && isSelected && "border-primary bg-primary/5",
                  !isAnswered && !isSelected && "hover:bg-accent",
                  isCorrectChoice && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950",
                  isWrongSelected && "border-destructive bg-destructive/10"
                )}
              >
                <span className="font-semibold">{c.label}.</span>
                <span className="flex-1">
                  <MathText>{c.text}</MathText>
                </span>
                <span className="text-xs text-muted-foreground" aria-hidden>
                  {idx + 1}
                </span>
              </button>
            );
          })}

          {result ? (
            <div className="space-y-3 pt-2">
              <div
                className={cn(
                  "rounded-md px-4 py-3 text-sm",
                  result.isCorrect
                    ? "bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"
                    : "bg-destructive/10 text-destructive"
                )}
              >
                <strong>{result.isCorrect ? "Correct." : `Not quite — the answer is ${result.correctAnswer}.`}</strong>
                <p className="mt-1 text-sm">
                  <MathText>{result.explanation}</MathText>
                </p>
              </div>
              <Button onClick={next} className="w-full">
                Next question <span className="ml-2 text-xs opacity-70">(Enter)</span>
              </Button>
            </div>
          ) : (
            <>
              <Button onClick={submit} disabled={!selected || loading} className="w-full">
                {loading ? "Submitting…" : "Submit answer"}
                {selected && !loading && <span className="ml-2 text-xs opacity-70">(Enter)</span>}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Keyboard: 1–4 or A–D to pick, Enter to submit
              </p>
            </>
          )}
        </CardContent>
      </Card>
      </div>
    </main>
  );
}

function prettySubSkill(s: string): string {
  return s.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
