import { redirect } from "next/navigation";
import { checkAccess } from "@/lib/access";
import { requireAppUser } from "@/lib/require-user";

// Gate for every /student route (drills, tests, lessons, analytics, study
// plan). Authentication/role routing is middleware's job; this layout enforces
// email verification (post-grace) and the subscription paywall.
export default async function StudentGateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = await requireAppUser();

  const access = await checkAccess(session.user.id, session.user.role);
  if (!access.hasAccess) redirect("/subscribe");

  return <>{children}</>;
}
