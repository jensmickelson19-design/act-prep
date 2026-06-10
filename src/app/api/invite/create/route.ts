import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { generateInviteCode, inviteExpiryDate } from "@/lib/invite";

export async function POST() {
  const session = await auth();
  if (!session || session.user.role !== "PARENT") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Loop in the unlikely event of a code collision.
  for (let i = 0; i < 5; i++) {
    const code = generateInviteCode();
    try {
      const invite = await prisma.inviteCode.create({
        data: { code, parentId: session.user.id, expiresAt: inviteExpiryDate() },
      });
      return NextResponse.json({ code: invite.code, expiresAt: invite.expiresAt });
    } catch (e) {
      // Unique constraint — try again with a fresh code.
      continue;
    }
  }
  return NextResponse.json({ error: "Could not generate code" }, { status: 500 });
}
