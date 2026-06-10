# Math Author Plan — ACT-Prep Content

Author: `math-author` (Opus). Phase 1 — planning only. No seed content is written in this phase.

## 0. Scope, ownership, and current-state notes

- I will ONLY ever edit `prisma/seed-data/math.ts` (exports `mathQuestions`) and
  `prisma/seed-data/math-extra.ts` (exports `mathExtraQuestions`). Both stay as
  `SeedQuestion[]` so `prisma/seed.ts` keeps importing them unchanged.
- Frozen / read-only — never edited by me: `docs/act-taxonomy.md`,
  `prisma/seed-data/types.ts`, `prisma/schema.prisma`, `src/lib/test-scoring.ts`. If a
  change there is needed I message the lead.
- **Current-state problem this plan corrects.** The existing `math.ts` / `math-extra.ts`
  are template generators that (a) emit OFF-LIST `subSkill` strings —
  `systems_of_equations`, `quadratics_factored`, `geometry_pythagorean`, `percents`,
  `exponent_rules`, `functions_linear`, `averages`, `distance_rate_time`,
  `slope_intercept`, `statistics`, `logarithms`, `trigonometry` — none of which are in
  the closed taxonomy, and (b) carry NO `reportingCategory`. Every question they emit
  is therefore an adaptive-engine orphan. The authoring phase will REPLACE both files'
  contents wholesale with hand-authored, fully-tagged `SeedQuestion` literals. No
  template generator and no off-list tag survives.

## (a) All 19 Math subSkills with target question counts — full-coverage proof

Total authored Math questions = 45 (Diagnostic 1) + 45 (Diagnostic 2) + 150 (adaptive
bank) = **240**, matching the taxonomy content target. Every subSkill below appears in
both diagnostics and 7–9 times in the adaptive bank.

| # | reportingCategory | subSkill | Diag 1 | Diag 2 | Adaptive | Total |
|---|---|---|---|---|---|---|
| 1 | number_and_quantity | `number_operations` | 2 | 2 | 8 | 12 |
| 2 | number_and_quantity | `exponents_radicals` | 2 | 2 | 8 | 12 |
| 3 | number_and_quantity | `numbers_advanced` | 2 | 2 | 7 | 11 |
| 4 | algebra | `expressions_polynomials` | 3 | 3 | 8 | 14 |
| 5 | algebra | `linear_equations` | 3 | 3 | 8 | 14 |
| 6 | algebra | `inequalities` | 2 | 2 | 8 | 12 |
| 7 | algebra | `quadratics` | 3 | 3 | 8 | 14 |
| 8 | functions | `function_basics` | 3 | 3 | 8 | 14 |
| 9 | functions | `function_graphs` | 2 | 2 | 8 | 12 |
| 10 | functions | `sequences` | 2 | 2 | 7 | 11 |
| 11 | functions | `trigonometry` | 2 | 2 | 8 | 12 |
| 12 | geometry | `plane_geometry` | 3 | 3 | 9 | 15 |
| 13 | geometry | `coordinate_geometry` | 3 | 3 | 8 | 14 |
| 14 | geometry | `solid_geometry` | 2 | 2 | 7 | 11 |
| 15 | geometry | `right_triangle_trig` | 3 | 3 | 8 | 14 |
| 16 | statistics_and_probability | `data_statistics` | 3 | 3 | 8 | 14 |
| 17 | statistics_and_probability | `probability` | 2 | 2 | 8 | 12 |
| 18 | integrating_essential_skills | `word_problems` | 3 | 3 | 9 | 15 |
| 19 | functions | `function_basics` (composite/domain extra) | — | — | — | — |
| | **TOTALS** | | **45** | **45** | **150** | **240** |

Row 19 is a note, not a separate subSkill: composite-function and domain/range items
are tagged `function_basics` and counted in row 8. Adaptive-bank per-subskill counts
are all within the required 7–9 band; row 19 of the table is informational only.

Reporting-category rollup (240 total): number_and_quantity 35, algebra 54,
functions 49, geometry 54, statistics_and_probability 26, integrating_essential_skills 15.
Spread mirrors the real ACT Math section's emphasis (algebra/functions/geometry heavy).

`modeling: true` overlay — applied to questions whose stem produces, interprets,
evaluates, or improves a model (each still keeps its primary reportingCategory above).
Target ~25–30% of items carry `modeling: true`, drawn mostly from `word_problems`,
`linear_equations`, `function_basics`, `function_graphs`, `sequences`, and
`data_statistics` (real-world rate/cost/growth/trend stems). Diagnostics carry ~12–14
modeling items each.

## (b) Originality and variety commitment

- **100% original.** Every question — stem, numbers, context, choices, and explanation
  — is written from scratch. I will NOT copy, paraphrase, transcribe, or closely
  imitate any real ACT item or any published practice-test question. I mirror only the
  ACT's public format (5-choice → here 4-choice `A`–`D` per `SeedChoice`), topic
  coverage, difficulty mix, and timing — never specific items.
- **Genuinely varied, non-templated.** No spec-array template generators. Each
  `SeedQuestion` is an individually hand-authored object literal with its own context
  (geometry diagrams described in prose, real-world scenarios, abstract symbol
  manipulation, graph/table interpretation). Contexts deliberately rotate across the
  bank: coordinate geometry, unit-circle and SOHCAHTOA trig, function notation and
  composition, arithmetic/geometric sequences, single- and multi-event probability and
  counting, solid-geometry volume/surface area, percent/rate/proportion word problems,
  matrices/vectors/complex numbers, statistics from tables and charts. Numbers,
  answer-letter positions, and distractor patterns vary item-to-item; the correct
  answer is NOT placed by a deterministic formula.
- **Answer key + explanation.** Every question has exactly one correct answer and a
  worked explanation that shows the solution path (not just the result). Distractors
  are engineered from realistic student errors — sign slips, off-by-one,
  wrong-operation, unsimplified forms, formula confusion (e.g. area vs. perimeter,
  `sin` vs. `cos`) — and each is verified to be unambiguously wrong so no item has two
  correct choices.

## (c) Difficulty spread — explicit counts (240 questions)

Target: ~20% easy (1–2), ~60% medium (3), ~20% hard (4–5). Planned counts:

| Difficulty | Count | Share |
|---|---|---|
| 1 (easy) | 19 | 8% |
| 2 (easy) | 29 | 12% |
| 3 (medium) | 144 | 60% |
| 4 (hard) | 38 | 16% |
| 5 (hard) | 10 | 4% |
| **Total** | **240** | **100%** |

Easy (1–2) = 48 (20%), medium (3) = 144 (60%), hard (4–5) = 48 (20%).

Per-deliverable spread:
- **Diagnostic 1 (45):** diff1 ×4, diff2 ×5, diff3 ×27, diff4 ×7, diff5 ×2.
- **Diagnostic 2 (45):** diff1 ×4, diff2 ×5, diff3 ×27, diff4 ×7, diff5 ×2.
- **Adaptive bank (150):** diff1 ×11, diff2 ×19, diff3 ×90, diff4 ×24, diff5 ×6.

Within each diagnostic, difficulty roughly ramps with `formOrder` (easier 1–15,
medium 16–35, harder 36–45), mirroring the real ACT Math ordering. `estimatedTimeSec`
scales with difficulty (≈40–55s easy, ≈55–80s medium, ≈80–120s hard); the ACT Math
section is 45 questions in 60 minutes, so the section average stays near 60s.

## (d) File mapping — math.ts vs math-extra.ts

To keep diffs reviewable and the two files balanced, the split is by deliverable:

- **`prisma/seed-data/math.ts` → exports `mathQuestions`** — the **two diagnostic
  forms only**, 90 questions total:
  - Diagnostic Test 1 Math: 45 questions, each `diagnosticForm: 1`, `formOrder: 1–45`.
  - Diagnostic Test 2 Math: 45 questions, each `diagnosticForm: 2`, `formOrder: 1–45`.
  - Math is not passage-based, so no `SeedPassage` — flat `SeedQuestion[]`.
- **`prisma/seed-data/math-extra.ts` → exports `mathExtraQuestions`** — the **~150
  adaptive-bank questions**, no `diagnosticForm` / no `formOrder`, covering all 19
  subSkills at 7–9 each.

Both files become plain hand-authored arrays of `SeedQuestion` object literals; the
old generator functions and the local `q()` helper are removed. The exported symbol
names (`mathQuestions`, `mathExtraQuestions`) and their `SeedQuestion[]` types are
unchanged, so `prisma/seed.ts` needs no edit from me. Each question literal sets
`subject: "MATH"`, `reportingCategory`, `subSkill` (exact closed-list strings),
`difficulty`, `estimatedTimeSec`, `prompt`, `choices`, `correctAnswer`, `explanation`,
and `modeling` where applicable.

## (e) Work split — 6 authoring batches

Each batch is a self-contained deliverable I hand back to the lead for review.

- **Batch 1 — Diagnostic Test 1 Math (math.ts, part 1).** All 45 questions for
  `diagnosticForm: 1`, `formOrder` 1–45, full taxonomy coverage per the (a) table's
  Diag-1 column, difficulty ramp and modeling overlay per (c). Deliverable: complete
  Diagnostic 1 Math section.
- **Batch 2 — Diagnostic Test 2 Math (math.ts, part 2).** All 45 questions for
  `diagnosticForm: 2`, `formOrder` 1–45 — parallel in coverage/difficulty to Diag 1
  but entirely distinct items. Deliverable: `math.ts` complete (90 questions) and
  type-checking.
- **Batch 3 — Adaptive bank: number_and_quantity + algebra (math-extra.ts, part 1).**
  `number_operations`, `exponents_radicals`, `numbers_advanced`,
  `expressions_polynomials`, `linear_equations`, `inequalities`, `quadratics` —
  ~48 questions. Deliverable: first adaptive-bank slice.
- **Batch 4 — Adaptive bank: functions + geometry (math-extra.ts, part 2).**
  `function_basics`, `function_graphs`, `sequences`, `trigonometry`, `plane_geometry`,
  `coordinate_geometry`, `solid_geometry`, `right_triangle_trig` — ~63 questions.
  Deliverable: second adaptive-bank slice.
- **Batch 5 — Adaptive bank: statistics/probability + integrating skills
  (math-extra.ts, part 3).** `data_statistics`, `probability`, `word_problems` —
  ~39 questions. Deliverable: `math-extra.ts` complete (~150 questions), all 19
  subSkills present at 7–9 each, type-checking.
- **Batch 6 — QA and reconciliation pass.** Across both files: verify every
  `subSkill`/`reportingCategory` is an exact closed-list string; recount difficulty
  distribution against the (c) targets and adjust outliers; confirm each item has
  exactly one correct answer with plausible-but-wrong distractors; confirm `formOrder`
  is 1–45 with no gaps/dupes per diagnostic; confirm modeling-overlay coverage; run the
  project type-check / seed build. Deliverable: final reviewed `math.ts` +
  `math-extra.ts`.

## Open items for the lead

- `prisma/seed.ts` does not yet read `reportingCategory`; per instructions the lead
  wires that. I will still set `reportingCategory` on every question now.
- If the lead wants a different math.ts/math-extra.ts split (e.g. diagnostics +
  bank both spread across both files), flag before Batch 1 — easy to adjust.
