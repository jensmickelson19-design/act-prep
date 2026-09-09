import { z } from "zod";

// `.trim()` / `.toLowerCase()` are applied before the length and format checks
// so that " Foo@Bar.com " validates and a whitespace-only name is rejected.
const email = z.string().trim().toLowerCase().pipe(z.string().email());
const name = z.string().trim().pipe(z.string().min(1).max(80));

export const signupSchema = z.object({
  email,
  password: z.string().min(8, "Password must be at least 8 characters"),
  name,
  role: z.enum(["STUDENT", "PARENT"]),
  inviteCode: z.string().length(8).optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;

export const inviteRedeemSchema = z.object({
  code: z.string().length(8),
});

// Account management. Changing the email changes the login identity, so it
// requires the current password (there is no email-verification flow yet).
export const profileUpdateSchema = z.object({
  name,
  email,
  currentPassword: z.string().min(1, "Enter your current password to save changes"),
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
});
