import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { checkAccess, isSubscribed } from "@/lib/access";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SubscribeActions } from "./subscribe-actions";

const FEATURES = [
  "Two full-length practice tests that mirror the real ACT",
  "900+ adaptive drill questions across all four sections",
  "49 lessons covering every ACT sub-skill",
  "Score projections, analytics, and a personalized study plan",
  "Parent dashboard with progress reporting",
];

export default async function SubscribePage({
  searchParams,
}: {
  searchParams: { success?: string; canceled?: string };
}) {
  const session = await auth();
  if (!session) redirect("/login?next=/subscribe");

  const userId = session.user.id;
  const role = session.user.role;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { subscriptionStatus: true, stripeCustomerId: true },
  });
  const access = await checkAccess(userId, role);
  const selfSubscribed = user ? isSubscribed(user) : false;

  const childOptions =
    role === "PARENT"
      ? (
          await prisma.parentChildLink.findMany({
            where: { parentId: userId },
            include: { child: { select: { id: true, name: true } } },
            orderBy: { createdAt: "asc" },
          })
        ).map((l) => ({ id: l.child.id, name: l.child.name }))
      : [];

  const home = role === "PARENT" ? "/parent" : "/student";

  return (
    <main className="container max-w-xl space-y-6 py-16">
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          {access.hasAccess ? "Your subscription" : "Unlock full access"}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {access.hasAccess
            ? access.via === "linked"
              ? "You're covered by a linked account's subscription."
              : "Your plan is active."
            : "One plan covers a student and their linked parent account."}
        </p>
      </header>

      {searchParams.success && (
        <div className="rounded-md border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
          You&apos;re in! Your 7-day free trial has started. It can take a few seconds for
          access to activate after checkout.
        </div>
      )}
      {searchParams.canceled && (
        <div className="rounded-md border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
          Checkout canceled — no charge was made.
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-baseline justify-between">
            <span>ACT Prep — full access</span>
            <span className="text-2xl">
              $20<span className="text-sm font-normal text-muted-foreground">/month</span>
            </span>
          </CardTitle>
          <CardDescription>7-day free trial · cancel anytime</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm">
            {FEATURES.map((f) => (
              <li key={f} className="flex gap-2">
                <span aria-hidden>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <SubscribeActions
            role={role}
            childOptions={childOptions}
            subscribed={selfSubscribed}
            hasBillingAccount={Boolean(user?.stripeCustomerId)}
          />
          <p className="text-xs text-muted-foreground">
            Subscribing as a parent? Your plan covers one linked student. Students can also
            subscribe directly — either way, both accounts get access.
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        {access.hasAccess ? (
          <Button asChild variant="ghost">
            <Link href={home}>Back to the app</Link>
          </Button>
        ) : (
          <form
            action={async () => {
              "use server";
              const { signOut } = await import("@/auth");
              await signOut({ redirectTo: "/login" });
            }}
          >
            <Button variant="ghost" type="submit">
              Sign out
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
