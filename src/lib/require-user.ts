import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { emailCheckPasses } from "@/lib/email-verification";

// Shared gate for the authenticated app areas. Confirms there is a session and
// that the user still exists, and enforces email verification once the grace
// window has closed. Returns the user row so callers don't re-query.
export async function requireAppUser() {
  const session = await auth();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) redirect("/login");

  if (!emailCheckPasses(user)) redirect("/verify-email/required");

  return { session, user };
}
