import { describe, it, expect } from "vitest";
import { mapAccuracyToScaled } from "@/lib/scoring";

describe("scoring: mapAccuracyToScaled", () => {
  it("floors at 1 for chance-level or worse accuracy", () => {
    expect(mapAccuracyToScaled(0)).toBe(1);
    expect(mapAccuracyToScaled(-0.5)).toBe(1);
    expect(mapAccuracyToScaled(0.25)).toBe(1);
  });

  it("caps at 36 for perfect or above-range accuracy", () => {
    expect(mapAccuracyToScaled(1)).toBe(36);
    expect(mapAccuracyToScaled(1.5)).toBe(36);
    expect(mapAccuracyToScaled(0.93)).toBe(36);
  });

  it("hits the documented calibration anchors", () => {
    expect(mapAccuracyToScaled(0.58)).toBe(18);
    expect(mapAccuracyToScaled(0.39)).toBe(10);
  });

  it("is monotonically non-decreasing across the domain", () => {
    let prev = 0;
    for (let a = 0; a <= 1.0001; a += 0.01) {
      const score = mapAccuracyToScaled(a);
      expect(score).toBeGreaterThanOrEqual(prev);
      prev = score;
    }
  });

  it("always returns an integer inside 1-36", () => {
    for (let a = 0; a <= 1.0001; a += 0.017) {
      const score = mapAccuracyToScaled(a);
      expect(Number.isInteger(score)).toBe(true);
      expect(score).toBeGreaterThanOrEqual(1);
      expect(score).toBeLessThanOrEqual(36);
    }
  });
});
