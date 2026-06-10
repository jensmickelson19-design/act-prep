import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  subject: z.enum(["ENGLISH", "MATH", "READING", "SCIENCE"]),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session || session.user.role !== "STUDENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
  }

  const study = await prisma.studySession.create({
    data: { userId: session.user.id, subject: parsed.data.subject },
  });
  return NextResponse.json({ sessionId: study.id });
}
