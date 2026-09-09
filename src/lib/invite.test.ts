import { describe, it, expect } from "vitest";
import { generateInviteCode, inviteExpiryDate } from "@/lib/invite";

describe("invite: generateInviteCode", () => {
  it("produces an 8-char code from the unambiguous alphabet", () => {
    for (let i = 0; i < 200; i++) {
      const code = generateInviteCode();
      expect(code).toMatch(/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{8}$/);
    }
  });

  it("excludes visually ambiguous characters (0, O, 1, I)", () => {
    const joined = Array.from({ length: 200 }, generateInviteCode).join("");
    expect(joined).not.toMatch(/[01OI]/);
  });

  it("is effectively unique across many draws", () => {
    const seen = new Set<string>();
    for (let i = 0; i < 500; i++) seen.add(generateInviteCode());
    expect(seen.size).toBeGreaterThan(495);
  });
});

describe("invite: inviteExpiryDate", () => {
  it("expires roughly 14 days out", () => {
    const days = (inviteExpiryDate().getTime() - Date.now()) / (24 * 60 * 60 * 1000);
    expect(days).toBeGreaterThan(13.99);
    expect(days).toBeLessThan(14.01);
  });
});
