"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Role = "STUDENT" | "PARENT";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("STUDENT");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email"));
    const password = String(data.get("password"));
    const name = String(data.get("name"));
    const inviteCode = String(data.get("inviteCode") || "").trim() || undefined;

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name, role, inviteCode }),
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(typeof body.error === "string" ? body.error : "Signup failed");
      setLoading(false);
      return;
    }
    await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    router.push(role === "PARENT" ? "/parent" : "/student");
    router.refresh();
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
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Get started
          </p>
          <CardTitle className="font-serif text-2xl">Create account</CardTitle>
          <CardDescription>Pick a role to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-5 space-y-2">
            <Label>I am a</Label>
            <div className="grid grid-cols-2 gap-2">
            {(["STUDENT", "PARENT"] as Role[]).map((r) => (
              <Button
                key={r}
                type="button"
                variant={role === r ? "default" : "outline"}
                onClick={() => setRole(r)}
              >
                {r === "STUDENT" ? "Student" : "Parent"}
              </Button>
            ))}
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" minLength={8} required autoComplete="new-password" />
            </div>
            {role === "STUDENT" && (
              <div className="space-y-2">
                <Label htmlFor="inviteCode">
                  Parent invite code <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input id="inviteCode" name="inviteCode" maxLength={8} placeholder="8 characters" />
              </div>
            )}
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Creating…" : "Create account"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              By creating an account you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
                Privacy Policy
              </Link>
              . If you are under 18, a parent or guardian must agree on your behalf.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-accent underline-offset-4 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
