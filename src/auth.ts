import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { RATE_LIMITS, ipFromHeaders, rateLimit } from "@/lib/rate-limit";
import type { Role } from "@prisma/client";

// Thrown from authorize() when the caller has exceeded the login rate limit.
// NextAuth surfaces it to the client as a generic CredentialsSignin error,
// which is fine — we don't want to confirm whether an account exists.
export class RateLimitError extends Error {}

declare module "next-auth" {
  interface Session {
    user: { id: string; role: Role } & DefaultSession["user"];
  }
  interface User {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: Role;
    id?: string;
  }
}

// Keep the type imported even though only used for augmentation, so the
// subpath module resolves and the declaration above takes effect.
type _KeepJWTImport = JWT;

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(raw, request) {
        const parsed = credentialsSchema.safeParse(raw);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;

        // Throttle by IP and, separately, by the email being targeted so one
        // account can't be hammered from many IPs.
        const ip = ipFromHeaders(request?.headers ?? null);
        const [byIp, byEmail] = await Promise.all([
          rateLimit(RATE_LIMITS.login, ip),
          rateLimit(RATE_LIMITS.login, `email:${email.toLowerCase()}`),
        ]);
        if (!byIp.ok || !byEmail.ok) {
          throw new RateLimitError("Too many attempts");
        }

        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return { id: user.id, email: user.email, name: user.name, role: user.role };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (token.id) session.user.id = token.id;
      if (token.role) session.user.role = token.role;
      return session;
    },
  },
});
