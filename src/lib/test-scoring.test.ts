import { describe, it, expect } from "vitest";
import { RAW_SCORE_TABLES, rawCorrectToScaled } from "@/lib/test-scoring";
import { ACT_SECTIONS } from "@/lib/test-format";

const SUBJECTS = ["ENGLISH", "MATH", "READING", "SCIENCE"] as const;

describe("test-scoring: raw -> scaled tables", () => {
  it("builds one table per subject sized to section length + 1", () => {
    for (const s of ACT_SECTIONS) {
      const table = RAW_SCORE_TABLES[s.subject];
      expect(table).toHaveLength(s.questionCount + 1);
    }
  });

  it("keeps every scaled score within the ACT 1-36 band", () => {
    for (const subject of SUBJECTS) {
      for (const score of RAW_SCORE_TABLES[subject]) {
        expect(score).toBeGreaterThanOrEqual(1);
        expect(score).toBeLessThanOrEqual(36);
      }
    }
  });

  it("is monotonically non-decreasing in raw correct count", () => {
    for (const subject of SUBJECTS) {
      const table = RAW_SCORE_TABLES[subject];
      for (let i = 1; i < table.length; i++) {
        expect(table[i]).toBeGreaterThanOrEqual(table[i - 1]);
      }
    }
  });

  it("scores zero correct near the floor and a perfect section at 36", () => {
    for (const subject of SUBJECTS) {
      const table = RAW_SCORE_TABLES[subject];
      expect(table[0]).toBeLessThanOrEqual(5);
      expect(table[table.length - 1]).toBe(36);
    }
  });
});

describe("test-scoring: rawCorrectToScaled", () => {
  it("uses the canonical table when the section length matches", () => {
    const total = 50; // English
    expect(rawCorrectToScaled("ENGLISH", 50, total)).toBe(36);
    expect(rawCorrectToScaled("ENGLISH", 0, total)).toBe(
      RAW_SCORE_TABLES.ENGLISH[0]
    );
  });

  it("clamps an out-of-range correct count to the table bounds", () => {
    expect(rawCorrectToScaled("MATH", -5, 45)).toBe(RAW_SCORE_TABLES.MATH[0]);
    expect(rawCorrectToScaled("MATH", 999, 45)).toBe(
      RAW_SCORE_TABLES.MATH[RAW_SCORE_TABLES.MATH.length - 1]
    );
  });

  it("falls back to accuracy interpolation for a non-canonical section length", () => {
    const full = rawCorrectToScaled("READING", 10, 10);
    const none = rawCorrectToScaled("READING", 0, 10);
    expect(full).toBeGreaterThan(none);
    expect(none).toBeGreaterThanOrEqual(1);
    expect(full).toBeLessThanOrEqual(36);
  });

  it("returns the floor for a zero-length section", () => {
    expect(rawCorrectToScaled("SCIENCE", 0, 0)).toBeGreaterThanOrEqual(1);
  });

  it("rewards more correct answers with a higher or equal score", () => {
    let prev = 0;
    for (let c = 0; c <= 45; c++) {
      const score = rawCorrectToScaled("MATH", c, 45);
      expect(score).toBeGreaterThanOrEqual(prev);
      prev = score;
    }
  });
});
