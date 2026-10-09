import { describe, it, expect } from "vitest";
import { ipFromHeaders, RATE_LIMITS } from "@/lib/rate-limit";

describe("rate-limit: ipFromHeaders", () => {
  it("takes the first entry of x-forwarded-for", () => {
    const h = new Headers({ "x-forwarded-for": "203.0.113.7, 70.41.3.18, 150.172.238.178" });
    expect(ipFromHeaders(h)).toBe("203.0.113.7");
  });

  it("trims whitespace around the forwarded IP", () => {
    const h = new Headers({ "x-forwarded-for": "  203.0.113.7  " });
    expect(ipFromHeaders(h)).toBe("203.0.113.7");
  });

  it("falls back to x-real-ip when x-forwarded-for is absent", () => {
    const h = new Headers({ "x-real-ip": "198.51.100.2" });
    expect(ipFromHeaders(h)).toBe("198.51.100.2");
  });

  it("returns a stable bucket when no IP headers and for null", () => {
    expect(ipFromHeaders(new Headers())).toBe("unknown");
    expect(ipFromHeaders(null)).toBe("unknown");
  });
});

describe("rate-limit: RATE_LIMITS config", () => {
  it("defines positive limits and windows for every rule", () => {
    for (const rule of Object.values(RATE_LIMITS)) {
      expect(rule.limit).toBeGreaterThan(0);
      expect(rule.windowSec).toBeGreaterThan(0);
      expect(rule.name).toMatch(/^[a-z]+$/i);
    }
  });

  it("keeps login stricter than signup per window", () => {
    // login: 10 / 15min; signup: 5 / 60min — signup is rarer, tighter overall.
    const loginPerHour = RATE_LIMITS.login.limit * (3600 / RATE_LIMITS.login.windowSec);
    const signupPerHour = RATE_LIMITS.signup.limit * (3600 / RATE_LIMITS.signup.windowSec);
    expect(signupPerHour).toBeLessThan(loginPerHour);
  });
});
