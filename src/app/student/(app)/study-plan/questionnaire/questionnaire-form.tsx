"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const SUBJECTS = [
  { value: "ENGLISH", label: "English" },
  { value: "MATH", label: "Math" },
  { value: "READING", label: "Reading" },
  { value: "SCIENCE", label: "Science" },
] as const;

type SubjectValue = (typeof SUBJECTS)[number]["value"];

/** ISO YYYY-MM-DD for a date `days` from today — used to seed the date input. */
function isoOffset(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * The study-plan questionnaire. Collects the inputs for `generateStudyPlan`
 * and POSTs them to `/api/study-plan`, then routes to the plan view.
 */
export function QuestionnaireForm() {
  const router = useRouter();
  const [targetScore, setTargetScore] = useState("28");
  const [takenBefore, setTakenBefore] = useState<"yes" | "no">("no");
  const [priorScore, setPriorScore] = useState("");
  const [testDate, setTestDate] = useState(isoOffset(56));
  const [hoursPerWeek, setHoursPerWeek] = useState("6");
  const [focusSubjects, setFocusSubjects] = useState<SubjectValue[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function toggleSubject(value: SubjectValue) {
    setFocusSubjects((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const target = Number(targetScore);
    const hours = Number(hoursPerWeek);
    const prior = priorScore.trim() === "" ? null : Number(priorScore);

    if (!Number.isInteger(target) || target < 1 || target > 36) {
      setError("Enter a target score between 1 and 36.");
      return;
    }
    if (!Number.isInteger(hours) || hours < 1 || hours > 40) {
      setError("Enter weekly study hours between 1 and 40.");
      return;
    }
    if (takenBefore === "yes" && (prior == null || prior < 1 || prior > 36)) {
      setError("Enter your prior ACT score between 1 and 36.");
      return;
    }
    if (!testDate) {
      setError("Choose your test date.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetScore: target,
          takenActBefore: takenBefore === "yes",
          priorActScore: takenBefore === "yes" ? prior : null,
          testDate,
          hoursPerWeek: hours,
          focusSubjects,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error ?? "Could not create your study plan.");
      }
      router.push("/student/study-plan");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create your study plan.");
      setSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Build your study plan</CardTitle>
        <CardDescription>
          A few questions so we can tailor a week-by-week plan to your goal.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Target score */}
          <div className="space-y-2">
            <Label htmlFor="targetScore">Target composite score</Label>
            <Input
              id="targetScore"
              type="number"
              min={1}
              max={36}
              inputMode="numeric"
              value={targetScore}
              onChange={(e) => setTargetScore(e.target.value)}
              className="max-w-[8rem]"
            />
            <p className="font-sans text-xs text-muted-foreground">
              The composite ACT score (1–36) you are aiming for.
            </p>
          </div>

          <Separator />

          {/* Taken ACT before */}
          <div className="space-y-2">
            <Label>Have you taken the ACT before?</Label>
            <RadioGroup
              value={takenBefore}
              onValueChange={(v) => setTakenBefore(v as "yes" | "no")}
              className="flex gap-6"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="taken-no" />
                <Label htmlFor="taken-no" className="font-normal">
                  No
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="taken-yes" />
                <Label htmlFor="taken-yes" className="font-normal">
                  Yes
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Prior score (conditional) */}
          {takenBefore === "yes" && (
            <div className="space-y-2">
              <Label htmlFor="priorScore">Your most recent ACT composite</Label>
              <Input
                id="priorScore"
                type="number"
                min={1}
                max={36}
                inputMode="numeric"
                value={priorScore}
                onChange={(e) => setPriorScore(e.target.value)}
                className="max-w-[8rem]"
              />
            </div>
          )}

          <Separator />

          {/* Test date */}
          <div className="space-y-2">
            <Label htmlFor="testDate">Test date</Label>
            <Input
              id="testDate"
              type="date"
              value={testDate}
              min={isoOffset(0)}
              onChange={(e) => setTestDate(e.target.value)}
              className="max-w-[12rem]"
            />
          </div>

          {/* Hours per week */}
          <div className="space-y-2">
            <Label htmlFor="hoursPerWeek">Hours per week you can study</Label>
            <Select value={hoursPerWeek} onValueChange={setHoursPerWeek}>
              <SelectTrigger id="hoursPerWeek" className="max-w-[12rem]">
                <SelectValue placeholder="Select hours" />
              </SelectTrigger>
              <SelectContent>
                {[2, 4, 6, 8, 10, 12, 15, 20].map((h) => (
                  <SelectItem key={h} value={String(h)}>
                    {h} hours
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Focus subjects */}
          <div className="space-y-2">
            <Label>Subjects to prioritise (optional)</Label>
            <p className="font-sans text-xs text-muted-foreground">
              Leave all unchecked to weight every subject equally.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {SUBJECTS.map((s) => {
                const checked = focusSubjects.includes(s.value);
                return (
                  <button
                    key={s.value}
                    type="button"
                    aria-pressed={checked}
                    onClick={() => toggleSubject(s.value)}
                    className={
                      "rounded-md border px-3 py-2 font-sans text-sm transition-colors " +
                      (checked
                        ? "border-accent bg-accent/15 font-medium text-foreground"
                        : "border-input bg-card text-muted-foreground hover:bg-hover")
                    }
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <p className="font-sans text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
            {submitting ? "Building your plan…" : "Generate study plan"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
