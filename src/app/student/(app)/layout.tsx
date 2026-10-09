import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { AppShell } from "@/components/app-shell";
import { VerifyEmailBanner } from "@/components/verify-email-banner";

// Chrome layout for the student dashboard area. Routes in this (app) route
// group render inside the persistent AppShell nav. The timed runners
// (student/test/**, student/practice/**) live outside this group and stay
// chrome-free.
export default async function StudentAppLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  async function handleSignOut() {
    "use server";
    await signOut({ redirectTo: "/" });
  }

  return (
    <AppShell userName={session.user.name ?? "Student"} signOut={handleSignOut}>
      <VerifyEmailBanner />
      {children}
    </AppShell>
  );
}
