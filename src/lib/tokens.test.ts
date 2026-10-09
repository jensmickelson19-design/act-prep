import { describe, it, expect } from "vitest";
import {
  generateToken,
  hashToken,
  expiryFromNow,
  PASSWORD_RESET_TTL_MS,
  EMAIL_VERIFICATION_TTL_MS,
} from "@/lib/tokens";

describe("tokens: generateToken", () => {
  it("returns a URL-safe token and its sha256 hex hash", () => {
    const { token, tokenHash } = generateToken();
    expect(token).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(token.length).toBeGreaterThanOrEqual(42); // 32 bytes base64url
    expect(tokenHash).toMatch(/^[0-9a-f]{64}$/);
  });

  it("hash matches hashToken(token) and the raw token is not the hash", () => {
    const { token, tokenHash } = generateToken();
    expect(hashToken(token)).toBe(tokenHash);
    expect(token).not.toBe(tokenHash);
  });

  it("is unique across many draws", () => {
    const seen = new Set<string>();
    for (let i = 0; i < 500; i++) seen.add(generateToken().token);
    expect(seen.size).toBe(500);
  });
});

describe("tokens: hashToken", () => {
  it("is deterministic and case-stable", () => {
    expect(hashToken("abc")).toBe(hashToken("abc"));
    expect(hashToken("abc")).not.toBe(hashToken("abC"));
  });
});

describe("tokens: expiryFromNow", () => {
  it("returns a future date offset by the TTL", () => {
    const d = expiryFromNow(PASSWORD_RESET_TTL_MS);
    const delta = d.getTime() - Date.now();
    expect(delta).toBeGreaterThan(PASSWORD_RESET_TTL_MS - 1000);
    expect(delta).toBeLessThanOrEqual(PASSWORD_RESET_TTL_MS);
  });

  it("email verification TTL is longer than the reset TTL", () => {
    expect(EMAIL_VERIFICATION_TTL_MS).toBeGreaterThan(PASSWORD_RESET_TTL_MS);
  });
});
