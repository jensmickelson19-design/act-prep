import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { emailCheckPasses } from "@/lib/email-verification";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResendVerificationButton } from "@/app/verify-email/required/resend-button";

// Hard stop shown once the verification grace window has passed. The user has
// no token link in hand, so the only action here is "resend".
export default async function VerificationRequiredPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) redirect("/login");
  // If they've since verified (or are back inside grace somehow), send them on.
  if (emailCheckPasses(user)) redirect("/");

  return (
    <main className="container flex min-h-screen flex-col items-center justify-center py-16">
      <span className="mb-8 font-serif text-lg font-semibold tracking-tight">ACT Prep</span>
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="space-y-1.5">
          <CardTitle className="font-serif text-2xl">Confirm your email to continue</CardTitle>
          <CardDescription>
            We need to verify <span className="font-medium">{user.email}</span> before
            you can keep using ACT Prep. Check your inbox for the confirmation
            link, or send a new one.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ResendVerificationButton />
          <p className="text-xs text-muted-foreground">
            Wrong address?{" "}
            <Link
              href="/account"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Update it in your account
            </Link>
            , then resend.
          </p>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button variant="ghost" type="submit" className="w-full">
              Sign out
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
