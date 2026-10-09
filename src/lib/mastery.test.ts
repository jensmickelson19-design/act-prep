import { describe, it, expect } from "vitest";
import { deltaFor, qualityFor, clamp01, nextSm2 } from "@/lib/mastery";

describe("mastery: deltaFor", () => {
  it("gives the strongest positive signal for a correct hard question", () => {
    expect(deltaFor(true, 5)).toBe(1);
    expect(deltaFor(true, 1)).toBe(0.5);
  });

  it("gives the strongest negative signal for a wrong easy question", () => {
    expect(deltaFor(false, 1)).toBe(0.5);
    expect(deltaFor(false, 5)).toBe(0);
  });

  it("stays within [0,1] for every difficulty", () => {
    for (let d = 1; d <= 5; d++) {
      expect(deltaFor(true, d)).toBeGreaterThanOrEqual(0);
      expect(deltaFor(true, d)).toBeLessThanOrEqual(1);
      expect(deltaFor(false, d)).toBeGreaterThanOrEqual(0);
      expect(deltaFor(false, d)).toBeLessThanOrEqual(1);
    }
  });
});

describe("mastery: qualityFor", () => {
  it("maps correct answers to a passing SM-2 quality", () => {
    expect(qualityFor(true, 5)).toBe(5);
    expect(qualityFor(true, 4)).toBe(5);
    expect(qualityFor(true, 3)).toBe(4);
    expect(qualityFor(true, 1)).toBe(4);
  });

  it("maps wrong answers to a failing SM-2 quality", () => {
    expect(qualityFor(false, 1)).toBe(1);
    expect(qualityFor(false, 2)).toBe(1);
    expect(qualityFor(false, 3)).toBe(2);
    expect(qualityFor(false, 5)).toBe(2);
  });
});

describe("mastery: clamp01", () => {
  it("clamps to the unit interval", () => {
    expect(clamp01(-1)).toBe(0);
    expect(clamp01(2)).toBe(1);
    expect(clamp01(0.42)).toBe(0.42);
  });
});

describe("mastery: nextSm2", () => {
  it("resets interval and reps on a failing quality", () => {
    const out = nextSm2(2.5, 30, 5, 2);
    expect(out.intervalDays).toBe(1);
    expect(out.repetitions).toBe(0);
    expect(out.easeFactor).toBeCloseTo(2.3);
  });

  it("never lets ease factor drop below 1.3", () => {
    const out = nextSm2(1.3, 10, 3, 0);
    expect(out.easeFactor).toBe(1.3);
  });

  it("follows the SM-2 interval ladder on passes", () => {
    const first = nextSm2(2.5, 0, 0, 5);
    expect(first.intervalDays).toBe(1);
    expect(first.repetitions).toBe(1);

    const second = nextSm2(first.easeFactor, first.intervalDays, first.repetitions, 5);
    expect(second.intervalDays).toBe(6);
    expect(second.repetitions).toBe(2);

    const third = nextSm2(second.easeFactor, second.intervalDays, second.repetitions, 5);
    // rep >= 2: interval = round(prevInterval * updatedEase), where ease is
    // bumped this same call for a quality-5 pass.
    expect(third.intervalDays).toBe(Math.round(6 * third.easeFactor));
    expect(third.easeFactor).toBeGreaterThan(second.easeFactor);
    expect(third.repetitions).toBe(3);
  });

  it("schedules nextReviewAt intervalDays into the future", () => {
    const out = nextSm2(2.5, 0, 1, 4);
    const days = (out.nextReviewAt.getTime() - Date.now()) / (24 * 60 * 60 * 1000);
    expect(days).toBeGreaterThan(out.intervalDays - 0.01);
    expect(days).toBeLessThan(out.intervalDays + 0.01);
  });
});
