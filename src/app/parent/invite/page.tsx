"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvitePage() {
  const [code, setCode] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/invite/create", { method: "POST" });
    setLoading(false);
    if (!res.ok) {
      setError("Could not generate code");
      return;
    }
    const body = await res.json();
    setCode(body.code);
    setExpiresAt(body.expiresAt);
  }

  return (
    <main className="container flex min-h-screen items-center justify-center py-12">
      <Card className="w-full max-w-lg shadow-md">
        <CardHeader className="space-y-1.5">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Link a student
          </p>
          <CardTitle className="font-serif text-2xl">Invite a child</CardTitle>
          <CardDescription>
            Generate a one-time invite code. Share it with your child to link their account to yours.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {code ? (
            <div className="space-y-2">
              <div className="rounded-md border border-accent/40 bg-accent/[0.08] px-4 py-6 text-center font-mono text-3xl font-semibold tracking-[0.25em] text-foreground">
                {code}
              </div>
              <p className="text-sm text-muted-foreground">
                Expires {expiresAt ? new Date(expiresAt).toLocaleDateString() : "soon"}. The code can only be used once.
              </p>
            </div>
          ) : (
            <Button onClick={generate} disabled={loading} className="w-full">
              {loading ? "Generating…" : "Generate code"}
            </Button>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button asChild variant="outline" className="w-full">
            <Link href="/parent">Back to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
