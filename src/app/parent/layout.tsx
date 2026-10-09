import { requireAppUser } from "@/lib/require-user";
import { VerifyEmailBanner } from "@/components/verify-email-banner";

// Gate for every /parent route. Middleware handles auth + role; this layout
// enforces email verification once the grace window has closed. The
// subscription check stays per-page (parent access can come from a linked
// child's subscription).
export default async function ParentGateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAppUser();
  return (
    <>
      <VerifyEmailBanner />
      {children}
    </>
  );
}
