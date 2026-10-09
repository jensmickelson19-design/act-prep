"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function StartTestButton({ withScience }: { withScience: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function start() {
    setLoading(true);
    const res = await fetch("/api/test/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ withScience }),
    });
    setLoading(false);
    if (!res.ok) return;
    const body = (await res.json()) as { testId: string };
    router.push(`/student/test/${body.testId}`);
  }

  return (
    <Button onClick={start} disabled={loading} variant={withScience ? "default" : "secondary"}>
      {loading
        ? "Starting…"
        : withScience
        ? "Start with Science (2h 45m)"
        : "Start without Science (2h 5m)"}
    </Button>
  );
}
