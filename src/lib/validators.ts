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
