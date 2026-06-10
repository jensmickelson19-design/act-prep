# Science Author Plan — ACT-Prep App

**Author:** `science-author` · **Phase:** 1 (planning only) · **Date:** 2026-05-20

This plan governs the two files I own: `prisma/seed-data/science.ts`
(exports `sciencePassages`) and `prisma/seed-data/science-extra.ts`
(exports `scienceExtraPassages`). Both export an array of `SeedPassage`.
I will not touch any other file.

---

## 0. Preflight finding — existing seed content is OFF-TAXONOMY

The current `science.ts` and `science-extra.ts` were stub content. Their
questions use `subSkill` strings that are **not** in the closed Science
taxonomy and they lack `reportingCategory` entirely. Examples of bad tags
present today: `data_representation`, `trend_identification`,
`experimental_design` (used as a subSkill — note `experimental_design`
*is* valid, but most are not), `prediction`, `hypothesis_evaluation`,
`controlled_variables`, `comparison`, `comprehension`, `evidence_evaluation`,
`synthesis`. Also note: `data_representation` is a `passageType`, never a
`subSkill`.

**The closed Science taxonomy has exactly 3 reportingCategories and 9
subSkills:**

| reportingCategory | subSkills |
|---|---|
| `interpretation_of_data` | `read_data`, `data_relationships`, `data_translation` |
| `scientific_investigation` | `experimental_design`, `compare_experiments`, `hypothesis_testing` |
| `evaluation_of_models` | `model_comprehension`, `model_evaluation`, `predictions_conclusions` |

`passageType` values (closed): `data_representation`, `research_summary`,
`conflicting_viewpoints`.

**Therefore the authoring phase will REPLACE the entire current contents of
both files** with fully re-tagged, taxonomy-correct content. The existing
stub passages are not salvageable as-is because every question is mistagged
and untagged for reportingCategory. Where a stub's underlying science is
sound I may reuse the *idea* but all passages/datasets will be re-authored
original (see §2). Net effect: both exported symbols stay intact; their
contents are rebuilt.

---

## (a) All 9 Science subSkills — target question counts (full coverage proof)

Total questions authored: **230** = Diagnostic 1 (40) + Diagnostic 2 (40) +
adaptive bank (150).

Adaptive-bank coverage is the binding requirement (each subskill 14–18
items). Diagnostic items add further coverage but are counted separately.

| reportingCategory | subSkill | Adaptive-bank target | Diag-1 | Diag-2 | Subskill total |
|---|---|---|---|---|---|
| interpretation_of_data | `read_data` | 18 | 6 | 6 | 30 |
| interpretation_of_data | `data_relationships` | 18 | 6 | 6 | 30 |
| interpretation_of_data | `data_translation` | 16 | 4 | 4 | 24 |
| scientific_investigation | `experimental_design` | 16 | 5 | 5 | 26 |
| scientific_investigation | `compare_experiments` | 16 | 4 | 4 | 24 |
| scientific_investigation | `hypothesis_testing` | 16 | 4 | 4 | 24 |
| evaluation_of_models | `model_comprehension` | 16 | 4 | 4 | 24 |
| evaluation_of_models | `model_evaluation` | 16 | 3 | 3 | 22 |
| evaluation_of_models | `predictions_conclusions` | 18 | 4 | 4 | 26 |
| **Total** | | **150** | **40** | **40** | **230** |

Every one of the 9 subskills is covered, all within the 14–18 adaptive-bank
band. The three `interpretation_of_data` data-skills and
`predictions_conclusions` are weighted slightly heavier because a real ACT
Science section over-indexes on data reading and prediction.

reportingCategory rollup of the 150-item bank: interpretation_of_data 52,
scientific_investigation 48, evaluation_of_models 50 — roughly the real ACT
emphasis (data interpretation largest).

---

## (b) Originality commitment

I commit that **100% of all Science passages, datasets, figures-described-in-
text, experiments, viewpoints, questions, answer choices, and explanations
will be entirely original.** Specifically:

- Every experiment scenario, apparatus, and procedure is invented for this
  app.
- Every numeric dataset (every table value, every graph trend described in
  text) is fabricated by me to be internally consistent and pedagogically
  clean, not lifted from any source.
- Conflicting-viewpoints passages present original framings of debates; any
  real-world topic is described in my own words with my own invented
  evidence framing.
- No passage, item, dataset, or explanation will copy, paraphrase, or
  closely imitate any released ACT test, official ACT prep guide, or any
  published practice material or textbook passage.
- I mirror only the *format* of the real ACT (passage types, ~6–7 passages,
  40-question section, questions-per-passage counts, difficulty mix,
  answer-choice style) — never specific content.

---

## (c) Difficulty spread — actual counts

Target per the taxonomy doc: ~20% easy (difficulty 1–2), ~60% medium
(difficulty 3), ~20% hard (difficulty 4–5), applied across all 230 questions.

| Difficulty | Label | Target count | % of 230 |
|---|---|---|---|
| 1 | easy | 20 | 8.7% |
| 2 | easy | 26 | 11.3% |
| 3 | medium | 138 | 60.0% |
| 4 | hard | 33 | 14.3% |
| 5 | hard | 13 | 5.7% |
| **Total** | | **230** | **100%** |

Easy (1+2) = 46 (20.0%). Medium (3) = 138 (60.0%). Hard (4+5) = 46 (20.0%).

Per-deliverable difficulty distribution (each diagnostic mirrors the section
spread; the bank carries the same proportions):

| Difficulty | Diag 1 (40) | Diag 2 (40) | Adaptive bank (150) |
|---|---|---|---|
| 1 | 3 | 3 | 14 |
| 2 | 5 | 5 | 16 |
| 3 | 24 | 24 | 90 |
| 4 | 6 | 6 | 21 |
| 5 | 2 | 2 | 9 |

No subskill will be clustered entirely at difficulty 3: each subskill's
items span at least three difficulty levels.

---

## (d) Passage plan + file mapping

### Real-ACT format I mirror
A Science section = ~6–7 passages, 40 questions. Typical mix: several
`data_representation` passages (5–6 Qs each), several `research_summary`
passages (6–7 Qs each), exactly one `conflicting_viewpoints` passage (7 Qs).
Passage `body` is text; tables/graphs/diagrams are **described in text** so
questions can reference exact values. Each diagnostic passage and its
questions carry `diagnosticForm` (1 or 2) and the questions carry
`formOrder` 1–40 in reading order.

### Diagnostic Test 1 — 40 questions / 7 passages (`diagnosticForm: 1`)

| # | passageType | Qs | formOrder range |
|---|---|---|---|
| D1-P1 | data_representation | 5 | 1–5 |
| D1-P2 | research_summary | 6 | 6–11 |
| D1-P3 | data_representation | 6 | 12–17 |
| D1-P4 | research_summary | 6 | 18–23 |
| D1-P5 | data_representation | 5 | 24–28 |
| D1-P6 | research_summary | 5 | 29–33 |
| D1-P7 | conflicting_viewpoints | 7 | 34–40 |

### Diagnostic Test 2 — 40 questions / 7 passages (`diagnosticForm: 2`)

Same structural template as Diagnostic 1 (5+6+6+6+5+5+7 = 40), entirely
different original passages, datasets, and items.

| # | passageType | Qs | formOrder range |
|---|---|---|---|
| D2-P1 | data_representation | 5 | 1–5 |
| D2-P2 | research_summary | 6 | 6–11 |
| D2-P3 | data_representation | 6 | 12–17 |
| D2-P4 | research_summary | 6 | 18–23 |
| D2-P5 | data_representation | 5 | 24–28 |
| D2-P6 | research_summary | 5 | 29–33 |
| D2-P7 | conflicting_viewpoints | 7 | 34–40 |

### Adaptive bank — ~150 questions / ~24 passages (no `diagnosticForm`)

Grouped into original passages of 5–7 questions each. Mix mirrors the ACT:
roughly 11 `data_representation`, 11 `research_summary`, 2
`conflicting_viewpoints` passages. Each passage's questions are tagged
across the 9 subskills as appropriate to its content; the §(a) per-subskill
bank totals are met in aggregate. ~24 passages × ~6.25 Qs ≈ 150.

### File mapping — `science.ts` vs `science-extra.ts`

`seed.ts` imports `sciencePassages` from `science.ts` and
`scienceExtraPassages` from `science-extra.ts`. Both are flat
`SeedPassage[]`. To keep diagnostics together and the bank separate:

- **`science.ts` → `sciencePassages`**: the **two diagnostic forms** =
  14 passages, 80 questions. Diagnostic 1's 7 passages then Diagnostic 2's 7
  passages, in form/formOrder order.
- **`science-extra.ts` → `scienceExtraPassages`**: the **adaptive bank** =
  ~24 passages, ~150 questions, no `diagnosticForm`.

This keeps fixed-form content in one file and adaptive content in the other,
making review and future edits cleaner. Both files stay well-formed
`SeedPassage[]` exports.

---

## (e) Work split — 6 batches

Each batch is a self-contained authoring deliverable. Batches are done in
order; after each I report counts and tag-validity back to the lead.

| Batch | File | Deliverable | Approx Qs |
|---|---|---|---|
| 1 | `science.ts` | Diagnostic Test 1 — all 7 passages, 40 questions, fully tagged `diagnosticForm: 1` + `formOrder` 1–40. Replaces stub content. | 40 |
| 2 | `science.ts` | Diagnostic Test 2 — all 7 passages, 40 questions, `diagnosticForm: 2` + `formOrder` 1–40. Completes `science.ts`. | 40 |
| 3 | `science-extra.ts` | Adaptive bank part 1: ~8 `data_representation` passages — heavy `read_data`, `data_relationships`, `data_translation` coverage. Replaces stub content. | ~50 |
| 4 | `science-extra.ts` | Adaptive bank part 2: ~8 `research_summary` passages — heavy `experimental_design`, `compare_experiments`, `hypothesis_testing`, `predictions_conclusions`. | ~50 |
| 5 | `science-extra.ts` | Adaptive bank part 3: remaining passages (mix of `data_representation`, `research_summary`, 2 `conflicting_viewpoints`) — fills `model_comprehension`, `model_evaluation`, and any subskill gaps to hit the §(a) per-subskill bands. | ~50 |
| 6 | both | Verification pass: confirm every question has `subject: "SCIENCE"`, a valid `reportingCategory` + matching `subSkill` from the closed list, `difficulty` 1–5, `estimatedTimeSec`; confirm §(a) per-subskill counts, §(c) difficulty counts, diagnostic `formOrder` completeness 1–40 ×2, and that exports/types still satisfy `seed.ts`. | 0 (audit) |

### Cross-cutting authoring standards (every batch)
- Each question: exactly 4 choices A–D, one unambiguously correct answer,
  distractors plausible but clearly wrong (no second defensible answer).
- Each explanation references the passage's specific data
  (e.g. exact table values or the stated trend) so it teaches the skill.
- `estimatedTimeSec` realistic: ~40–55s easy, ~55–75s medium, ~75–95s hard.
- Datasets internally consistent; trends clean enough to support the
  intended subskill without ambiguity.
- Every question carries `reportingCategory` even though current `seed.ts`
  does not yet read it (the lead wires that).

---

## Open item for the lead
None blocking. Flagging only: the existing stub content in both files is
off-taxonomy (see §0) and will be fully replaced in Batches 1–5 — this is
expected and within my file ownership, no FROZEN-file change needed.
