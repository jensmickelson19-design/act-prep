import { describe, it, expect } from "vitest";
import { isSubscribed } from "@/lib/access";

describe("access: isSubscribed", () => {
  it("grants access for trialing, active, and past_due", () => {
    expect(isSubscribed({ subscriptionStatus: "trialing" })).toBe(true);
    expect(isSubscribed({ subscriptionStatus: "active" })).toBe(true);
    expect(isSubscribed({ subscriptionStatus: "past_due" })).toBe(true);
  });

  it("denies access for canceled, unpaid, incomplete, and null", () => {
    expect(isSubscribed({ subscriptionStatus: "canceled" })).toBe(false);
    expect(isSubscribed({ subscriptionStatus: "unpaid" })).toBe(false);
    expect(isSubscribed({ subscriptionStatus: "incomplete" })).toBe(false);
    expect(isSubscribed({ subscriptionStatus: "incomplete_expired" })).toBe(false);
    expect(isSubscribed({ subscriptionStatus: null })).toBe(false);
  });

  it("denies access for an unrecognized status string", () => {
    expect(isSubscribed({ subscriptionStatus: "paused" })).toBe(false);
    expect(isSubscribed({ subscriptionStatus: "" })).toBe(false);
  });
});
