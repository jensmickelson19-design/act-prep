import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { profileUpdateSchema } from "@/lib/validators";

// Update the signed-in user's name and email. The email is the login identity
// and there is no email-verification flow, so we require the current password
// before changing it.
export async function PATCH(req: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const parsed = profileUpdateSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 }
    );
  }
  const { name, email, currentPassword } = parsed.data;

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const ok = await bcrypt.compare(currentPassword, user.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: "That password is incorrect." }, { status: 403 });
  }

  if (email !== user.email) {
    const taken = await prisma.user.findUnique({ where: { email } });
    if (taken) {
      return NextResponse.json({ error: "That email is already in use." }, { status: 409 });
    }
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { name, email },
  });

  // The JWT carries the old name/email until the session refreshes; the client
  // reloads after a successful save.
  return NextResponse.json({ ok: true, emailChanged: email !== user.email });
}
