"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ResendVerificationButton({
  label = "Send a new confirmation email",
}: {
  label?: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [msg, setMsg] = useState<string | null>(null);

  async function resend() {
    setState("loading");
    setMsg(null);
    const res = await fetch("/api/auth/resend-verification", { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setState("error");
      setMsg(data.error ?? "Could not send. Try again shortly.");
      return;
    }
    setState("sent");
    setMsg(
      data.alreadyVerified
        ? "That address is already verified — try reloading."
        : "Sent. Check your inbox (and spam)."
    );
  }

  return (
    <div className="space-y-2">
      <Button onClick={resend} disabled={state === "loading" || state === "sent"} className="w-full">
        {state === "loading" ? "Sending…" : state === "sent" ? "Email sent" : label}
      </Button>
      {msg && (
        <p
          className={
            state === "error"
              ? "text-sm text-destructive"
              : "text-sm text-emerald-700 dark:text-emerald-400"
          }
        >
          {msg}
        </p>
      )}
    </div>
  );
}
