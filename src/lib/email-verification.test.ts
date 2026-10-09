import { describe, it, expect } from "vitest";
import {
  verificationState,
  emailCheckPasses,
  graceDaysLeft,
  VERIFICATION_GRACE_MS,
} from "@/lib/email-verification";

const daysAgo = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

describe("email-verification: verificationState", () => {
  it("is 'verified' whenever emailVerifiedAt is set, regardless of age", () => {
    expect(
      verificationState({ emailVerifiedAt: new Date(), createdAt: daysAgo(100) })
    ).toBe("verified");
  });

  it("is 'grace' for an unverified account inside the window", () => {
    expect(
      verificationState({ emailVerifiedAt: null, createdAt: daysAgo(1) })
    ).toBe("grace");
  });

  it("is 'required' for an unverified account past the window", () => {
    expect(
      verificationState({ emailVerifiedAt: null, createdAt: daysAgo(8) })
    ).toBe("required");
  });

  it("flips to 'required' exactly at the grace boundary", () => {
    const justPast = new Date(Date.now() - VERIFICATION_GRACE_MS - 1000);
    expect(
      verificationState({ emailVerifiedAt: null, createdAt: justPast })
    ).toBe("required");
  });
});

describe("email-verification: emailCheckPasses", () => {
  it("passes for verified and grace, fails for required", () => {
    expect(emailCheckPasses({ emailVerifiedAt: new Date(), createdAt: daysAgo(0) })).toBe(true);
    expect(emailCheckPasses({ emailVerifiedAt: null, createdAt: daysAgo(2) })).toBe(true);
    expect(emailCheckPasses({ emailVerifiedAt: null, createdAt: daysAgo(9) })).toBe(false);
  });
});

describe("email-verification: graceDaysLeft", () => {
  it("is 0 once verified", () => {
    expect(graceDaysLeft({ emailVerifiedAt: new Date(), createdAt: daysAgo(1) })).toBe(0);
  });

  it("counts down within the window and floors at 0 after it", () => {
    expect(graceDaysLeft({ emailVerifiedAt: null, createdAt: daysAgo(0) })).toBe(7);
    expect(graceDaysLeft({ emailVerifiedAt: null, createdAt: daysAgo(6.2) })).toBe(1);
    expect(graceDaysLeft({ emailVerifiedAt: null, createdAt: daysAgo(20) })).toBe(0);
  });
});
