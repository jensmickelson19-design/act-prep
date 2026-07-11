import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AppShell } from "@/components/app-shell";
import { checkAccess, isSubscribed } from "@/lib/access";
import { ProfileForm, PasswordForm, ManageBillingButton } from "./account-forms";

// Account settings for BOTH students and parents. Deliberately lives outside
// /student and /parent so it is auth-gated but NOT subscription-gated — a user
// whose subscription lapsed must still be able to manage their profile and
// re-subscribe or cancel.
export default async function AccountPage() {
  const session = await auth();
  if (!session) redirect("/login?next=/account");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      name: true,
      email: true,
      role: true,
      subscriptionStatus: true,
      currentPeriodEnd: true,
      stripeCustomerId: true,
    },
  });
  if (!user) redirect("/login");

  const access = await checkAccess(session.user.id, user.role);
  const selfSubscribed = isSubscribed(user);
  const home = user.role === "PARENT" ? "/parent" : "/student";

  const statusLabel: Record<string, string> = {
    trialing: "Free trial",
    active: "Active",
    past_due: "Payment past due",
    canceled: "Canceled",
  };

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  const content = (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold tracking-tight">Account</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your profile, password, and subscription.
          </p>
        </div>
        {/* Students get the nav shell below; parents (no shell) need their own way out. */}
        {user.role === "PARENT" && (
          <div className="flex shrink-0 gap-2">
            <Button asChild variant="outline">
              <Link href={home}>Back</Link>
            </Button>
            <form action={handleSignOut}>
              <Button variant="outline" type="submit">
                Sign out
              </Button>
            </form>
          </div>
        )}
      </header>

      {/* Subscription */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>
            {selfSubscribed
              ? "Your plan, billing details, and cancellation."
              : access.hasAccess && access.via === "linked"
                ? "Your access comes from a linked account."
                : "You do not have an active subscription."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selfSubscribed ? (
            <>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
                <span>
                  Status:{" "}
                  <strong>
                    {statusLabel[user.subscriptionStatus ?? ""] ?? user.subscriptionStatus}
                  </strong>
                </span>
                <span>
                  Plan: <strong>$20 / month</strong>
                </span>
                {user.currentPeriodEnd && (
                  <span>
                    Renews:{" "}
                    <strong>
                      {user.currentPeriodEnd.toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </strong>
                  </span>
                )}
              </div>
              {user.subscriptionStatus === "past_due" && (
                <p className="rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:bg-amber-950 dark:text-amber-200">
                  Your last payment failed. Update your card to keep your access.
                </p>
              )}
              <Separator />
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Update your card, view invoices, or <strong>cancel your subscription</strong> in
                  the billing portal. If you cancel, you keep access until the end of the period
                  you&apos;ve already paid for.
                </p>
                <ManageBillingButton label="Manage billing or cancel" />
              </div>
            </>
          ) : access.hasAccess && access.via === "linked" ? (
            <p className="text-sm text-muted-foreground">
              {user.role === "STUDENT"
                ? "A linked parent's subscription covers your access. To manage or cancel the plan, they can do it from their own account."
                : "A linked student's subscription covers your access. To manage or cancel the plan, they can do it from their own account."}
            </p>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Subscribe to unlock full access — $20/month with a 7-day free trial.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href="/subscribe">View plans</Link>
                </Button>
                {user.stripeCustomerId && <ManageBillingButton label="Billing history" />}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your name and sign-in email.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm initialName={user.name} initialEmail={user.email} />
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change the password you use to sign in.</CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordForm />
        </CardContent>
      </Card>
    </div>
  );

  // Students get the persistent nav shell (the Account tab lives in it, so the
  // page must keep the nav). Parents have no shell anywhere, so they get the
  // standalone header with Back / Sign out rendered above.
  if (user.role === "STUDENT") {
    return (
      <AppShell userName={user.name} signOut={handleSignOut}>
        {content}
      </AppShell>
    );
  }
  return <main className="container py-12">{content}</main>;
}
