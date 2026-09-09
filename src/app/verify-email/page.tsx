"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
}

function VerifyEmail() {
  const router = useRouter();
  const token = useSearchParams().get("token") ?? "";
  const [state, setState] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function confirm() {
    setState("loading");
    setError(null);
    const res = await fetch("/api/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(data.error ?? "Could not verify your email.");
      setState("error");
      return;
    }
    setState("ok");
    setTimeout(() => router.push("/"), 1800);
  }

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center py-16">
      <Link
        href="/"
        className="mb-8 font-serif text-lg font-semibold tracking-tight text-foreground"
      >
        ACT Prep
      </Link>
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-1.5">
          <CardTitle className="font-serif text-2xl">Confirm your email</CardTitle>
          <CardDescription>
            {state === "ok"
              ? "You're all set."
              : "One click to confirm this is your address."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!token && (
            <p className="text-sm text-destructive">
              This link is missing its token. Open the most recent verification
              email, or request a new one from your account.
            </p>
          )}
          {token && state !== "ok" && (
            <Button onClick={confirm} disabled={state === "loading"} className="w-full">
              {state === "loading" ? "Confirming…" : "Confirm email"}
            </Button>
          )}
          {state === "error" && error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          {state === "ok" && (
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              Email confirmed. Taking you back to the app…
            </p>
          )}
          <p className="text-center text-sm text-muted-foreground">
            <Link
              href="/"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Go to the app
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
