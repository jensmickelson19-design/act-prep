import { describe, it, expect } from "vitest";
import {
  signupSchema,
  inviteRedeemSchema,
  profileUpdateSchema,
  passwordChangeSchema,
} from "@/lib/validators";

describe("validators: signupSchema", () => {
  const base = {
    email: "Student@Example.com",
    password: "hunter2!!",
    name: "  Jane Doe  ",
    role: "STUDENT" as const,
  };

  it("normalizes email to lowercase and trims name", () => {
    const out = signupSchema.parse(base);
    expect(out.email).toBe("student@example.com");
    expect(out.name).toBe("Jane Doe");
  });

  it("rejects passwords shorter than 8 characters", () => {
    const r = signupSchema.safeParse({ ...base, password: "short" });
    expect(r.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    expect(signupSchema.safeParse({ ...base, email: "not-an-email" }).success).toBe(
      false
    );
  });

  it("rejects an unknown role", () => {
    expect(signupSchema.safeParse({ ...base, role: "ADMIN" }).success).toBe(false);
  });

  it("accepts an optional 8-char invite code but rejects other lengths", () => {
    expect(
      signupSchema.safeParse({ ...base, inviteCode: "ABCD2345" }).success
    ).toBe(true);
    expect(signupSchema.safeParse({ ...base, inviteCode: "TOOLONG12" }).success).toBe(
      false
    );
  });

  it("rejects an empty name", () => {
    expect(signupSchema.safeParse({ ...base, name: "   " }).success).toBe(false);
  });
});

describe("validators: inviteRedeemSchema", () => {
  it("requires exactly 8 characters", () => {
    expect(inviteRedeemSchema.safeParse({ code: "ABCD2345" }).success).toBe(true);
    expect(inviteRedeemSchema.safeParse({ code: "ABC" }).success).toBe(false);
  });
});

describe("validators: profileUpdateSchema", () => {
  it("requires a non-empty current password", () => {
    const r = profileUpdateSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      currentPassword: "",
    });
    expect(r.success).toBe(false);
  });

  it("normalizes the email", () => {
    const out = profileUpdateSchema.parse({
      name: "Jane",
      email: " JANE@Example.com ",
      currentPassword: "pw",
    });
    expect(out.email).toBe("jane@example.com");
  });
});

describe("validators: passwordChangeSchema", () => {
  it("enforces an 8-char minimum on the new password", () => {
    expect(
      passwordChangeSchema.safeParse({
        currentPassword: "old",
        newPassword: "1234567",
      }).success
    ).toBe(false);
    expect(
      passwordChangeSchema.safeParse({
        currentPassword: "old",
        newPassword: "12345678",
      }).success
    ).toBe(true);
  });
});
