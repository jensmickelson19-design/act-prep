import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { checkAccess } from "@/lib/access";

// Subscription gate for every /student route (drills, tests, lessons,
// analytics, study plan). Authentication/role routing is middleware's job;
// this layout only enforces the paywall.
export default async function StudentGateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  const access = await checkAccess(session.user.id, session.user.role);
  if (!access.hasAccess) redirect("/subscribe");

  return <>{children}</>;
}
