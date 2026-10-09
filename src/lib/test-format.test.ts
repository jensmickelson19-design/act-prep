import { describe, it, expect } from "vitest";
import {
  ACT_SECTIONS,
  sectionsFor,
  getSection,
  nextSection,
} from "@/lib/test-format";

describe("test-format", () => {
  it("has the four enhanced-ACT sections with correct counts", () => {
    expect(ACT_SECTIONS.map((s) => s.subject)).toEqual([
      "ENGLISH",
      "MATH",
      "READING",
      "SCIENCE",
    ]);
    expect(ACT_SECTIONS.map((s) => s.questionCount)).toEqual([50, 45, 36, 40]);
    expect(ACT_SECTIONS.map((s) => s.durationSec)).toEqual([
      35 * 60,
      50 * 60,
      40 * 60,
      40 * 60,
    ]);
  });

  describe("sectionsFor", () => {
    it("includes Science when requested", () => {
      expect(sectionsFor(true).map((s) => s.subject)).toEqual([
        "ENGLISH",
        "MATH",
        "READING",
        "SCIENCE",
      ]);
    });

    it("drops Science when not requested", () => {
      expect(sectionsFor(false).map((s) => s.subject)).toEqual([
        "ENGLISH",
        "MATH",
        "READING",
      ]);
    });
  });

  describe("getSection", () => {
    it("returns the format for a known subject", () => {
      expect(getSection("MATH")).toMatchObject({
        subject: "MATH",
        questionCount: 45,
      });
    });

    it("throws on an unknown subject", () => {
      // @ts-expect-error deliberately passing an invalid subject
      expect(() => getSection("HISTORY")).toThrow(/Unknown subject/);
    });
  });

  describe("nextSection", () => {
    it("advances to the following section", () => {
      expect(nextSection("ENGLISH", true)?.subject).toBe("MATH");
      expect(nextSection("MATH", true)?.subject).toBe("READING");
      expect(nextSection("READING", true)?.subject).toBe("SCIENCE");
    });

    it("returns null after the last section", () => {
      expect(nextSection("SCIENCE", true)).toBeNull();
    });

    it("treats Reading as last when Science is excluded", () => {
      expect(nextSection("READING", false)).toBeNull();
    });

    it("returns null for a subject not in the active list", () => {
      expect(nextSection("SCIENCE", false)).toBeNull();
    });
  });
});
