import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email().toLowerCase().trim(),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(1).max(80).trim(),
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
  name: z.string().min(1).max(80).trim(),
  email: z.string().email().toLowerCase().trim(),
  currentPassword: z.string().min(1, "Enter your current password to save changes"),
});

export const passwordChangeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
});
