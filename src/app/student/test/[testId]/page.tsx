import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { TestRunner } from "./test-runner";

export default async function TestPage({ params }: { params: { testId: string } }) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") redirect("/login");

  const test = await prisma.testAttempt.findUnique({ where: { id: params.testId } });
  if (!test || test.userId !== session.user.id) redirect("/student");
  if (test.status === "COMPLETED") redirect(`/student/test/${test.id}/result`);

  return <TestRunner testId={test.id} />;
}
