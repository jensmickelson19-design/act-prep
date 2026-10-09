import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { verificationState, graceDaysLeft } from "@/lib/email-verification";
import { ResendVerificationButton } from "@/app/verify-email/required/resend-button";

// Renders a dismissible-free reminder while a user is in the email-verification
// grace window. Nothing renders once verified (or once past grace — by then
// the route gate has already redirected to /verify-email/required).
export async function VerifyEmailBanner() {
  const session = await auth();
  if (!session) return null;

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { emailVerifiedAt: true, createdAt: true, email: true },
  });
  if (!user || verificationState(user) !== "grace") return null;

  const days = graceDaysLeft(user);

  return (
    <div className="border-b border-callout-warn-border bg-callout-warn">
      <div className="container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5 text-sm">
        <p className="text-foreground/80">
          <strong>Confirm your email.</strong> We sent a link to{" "}
          <span className="font-medium">{user.email}</span>.{" "}
          {days <= 1
            ? "Access is limited after today until you confirm."
            : `You have ${days} days left before access is limited.`}
        </p>
        <div className="shrink-0">
          <ResendVerificationButton label="Resend link" />
        </div>
      </div>
    </div>
  );
}
