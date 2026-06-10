# Reading Author Plan

Author: `reading-author`. Phase 1 — planning only. This document is the sole deliverable
of this phase. No seed content will be written until the lead approves.

## 0. Scope, ownership, and a flagged problem

**Files I may edit:** `prisma/seed-data/reading.ts` (exports `readingPassages`) and
`prisma/seed-data/reading-extra.ts` (exports `readingExtraPassages`). Both stay as arrays
of `SeedPassage`. I will touch no other file.

**Frozen / read-only:** `docs/act-taxonomy.md`, `prisma/seed-data/types.ts`,
`prisma/schema.prisma`, `src/lib/test-scoring.ts`, and every other author's files.

**Flag for the lead (no edit requested from me — just informing):** the *current*
contents of `reading.ts` and `reading-extra.ts` use `subSkill` strings that are NOT in
the closed Reading taxonomy — `main_idea`, `inference`, `detail`, `vocabulary_in_context`,
`authors_purpose`, `authors_tone`. They also omit the now-required `reportingCategory`
field on every question and the `passageType` field on every passage. During the
authoring phase I will **rewrite both files from scratch** so every question uses only
valid taxonomy strings. The old four passages will be discarded/rebuilt, not patched.
Mapping I will apply when reusing any salvageable content:
`main_idea` → `central_ideas`, `inference` → `close_reading`,
`detail` → `close_reading`, `vocabulary_in_context` → `word_meaning`,
`authors_purpose` → `purpose_point_of_view`, `authors_tone` → `purpose_point_of_view`.

## (a) All 9 Reading subSkills with target question counts

The Reading taxonomy is closed: 3 reporting categories, 9 subskills. Total planned
Reading content = Diagnostic 1 (36) + Diagnostic 2 (36) + adaptive bank (~150) = ~222
questions. Targets below cover the full adaptive bank plus diagnostics.

| reportingCategory | subSkill | Adaptive-bank target | Diag 1 | Diag 2 | Total |
|---|---|---|---|---|---|
| key_ideas_and_details | close_reading | 18 | 6 | 6 | 30 |
| key_ideas_and_details | central_ideas | 16 | 4 | 4 | 24 |
| key_ideas_and_details | sequence_relationships | 16 | 4 | 4 | 24 |
| craft_and_structure | word_meaning | 18 | 5 | 5 | 28 |
| craft_and_structure | text_structure | 16 | 4 | 4 | 24 |
| craft_and_structure | purpose_point_of_view | 18 | 5 | 5 | 28 |
| integration_of_knowledge_and_ideas | arguments | 16 | 4 | 4 | 24 |
| integration_of_knowledge_and_ideas | multiple_texts | 16 | 2 | 2 | 20 |
| integration_of_knowledge_and_ideas | visual_quantitative | 16 | 2 | 2 | 20 |
| **Total** | | **150** | **36** | **36** | **222** |

Every one of the 9 subskills is covered; each adaptive-bank subskill lands in the
14–18 band required by the brief (most at 16–18, none below 14). `multiple_texts` is
exercised by the paired/two-text passage slot in each diagnostic and by paired passages
in the bank. `visual_quantitative` questions will be attached to passages that include a
described chart/table/diagram embedded in the passage `body` text (no real images —
the data is described in prose/ASCII so it stays 100% original and renderable).

## (b) Originality commitment

Every passage and every question I author will be **100% original**. I will not copy,
paraphrase, translate, or closely imitate any real ACT passage, any published test-prep
passage, or any copyrighted literary/journalistic text. I will invent fictional authors,
characters, studies, places, and data. I will mirror only the *format* of the real ACT
Reading section — its four genres, passage lengths (~600–950 words), questions-per-
passage counts (~10), question styles, and difficulty mix — never its specific content.
All "adapted from" framing in titles refers to invented source works.

## (c) Difficulty spread (actual counts)

Target spread per the taxonomy: ~20% easy (difficulty 1–2), ~60% medium (3), ~20% hard
(4–5), applied across all ~222 questions.

| Difficulty | Band | Count | Share |
|---|---|---|---|
| 1 | easy | 18 | 8% |
| 2 | easy | 27 | 12% |
| 3 | medium | 133 | 60% |
| 4 | hard | 33 | 15% |
| 5 | hard | 11 | 5% |
| **Total** | | **222** | **100%** |

Easy = 45 (20%), medium = 133 (60%), hard = 44 (20%). Within each diagnostic form of 36
this resolves to roughly: difficulty 1 ×3, 2 ×4, 3 ×22, 4 ×5, 5 ×2 (= 36, ~20/60/20).
Each passage's ~10 questions will carry an internal spread (typically 2 easy / 6 medium /
2 hard) rather than clustering at 3. Hard items concentrate on `purpose_point_of_view`,
`arguments`, `central_ideas`, and `multiple_texts`; easy items on `close_reading`
detail-location and `word_meaning`.

## (d) Passage plan and file mapping

**Real-ACT format mirrored:** each Reading section = 4 passages, one per genre
(`literary_narrative`, `social_science`, `humanities`, `natural_science`), ~10 questions
each, 36 total. One of the four slots in each form is a **paired/two-text set** (two
short related texts under one passage entry) that exercises `multiple_texts`.

### Diagnostic Test 1 — 4 passages, 36 questions, `diagnosticForm: 1`, `formOrder` 1–36

| formOrder | passageType | Genre slot | Questions | Notes |
|---|---|---|---|---|
| 1–9 | literary_narrative | single text | 9 | character/relationship narrative |
| 10–18 | social_science | single text | 9 | includes 1 `visual_quantitative` (described table) |
| 19–27 | humanities | **paired two-text** | 9 | includes 2 `multiple_texts` |
| 28–36 | natural_science | single text | 9 | includes 1 `visual_quantitative` (described figure) |

### Diagnostic Test 2 — 4 passages, 36 questions, `diagnosticForm: 2`, `formOrder` 1–36

| formOrder | passageType | Genre slot | Questions | Notes |
|---|---|---|---|---|
| 1–9 | literary_narrative | single text | 9 | |
| 10–18 | humanities | single text | 9 | includes 1 `visual_quantitative` |
| 19–27 | social_science | **paired two-text** | 9 | includes 2 `multiple_texts` |
| 28–36 | natural_science | single text | 9 | includes 1 `visual_quantitative` |

(Each form is 4×9 = 36. Genre order rotates between forms; both forms still hit all four
genres and a paired set. Each passage's 9 questions span the subskills per the table in
section (a).)

### Adaptive bank — ~150 questions, no `diagnosticForm`

~14 original passages (mix of all 4 genres, including ~3–4 paired two-text sets for
`multiple_texts`), ~10–11 questions each, summing to ~150 questions and covering all 9
subskills at 16–18 per skill.

### File mapping: `reading.ts` vs `reading-extra.ts`

- **`reading.ts` → `readingPassages`:** the two diagnostic forms. Diagnostic 1's 4
  passages + Diagnostic 2's 4 passages = 8 `SeedPassage` objects, 72 questions, all
  carrying `diagnosticForm` and `formOrder`. This keeps the graded, fixed-form content
  in one file.
- **`reading-extra.ts` → `readingExtraPassages`:** the entire ~150-question adaptive
  bank — ~14 passages, no `diagnosticForm`/`formOrder`. This keeps the adaptive bank
  isolated from the diagnostics.

Both files keep exporting their required symbols as `SeedPassage[]`.

## (e) Work split — 6 batches

Each batch is a self-contained deliverable the lead can review independently.

**Batch 1 — Diagnostic Test 1 (`reading.ts`).** 4 passages, 36 questions, `diagnosticForm:1`,
`formOrder` 1–36. All passages tagged `passageType`; all questions tagged
`reportingCategory` + `subSkill` (valid strings only) + difficulty + estimatedTimeSec +
answer key + explanation. Includes the humanities paired set.

**Batch 2 — Diagnostic Test 2 (`reading.ts`).** 4 passages, 36 questions, `diagnosticForm:2`,
`formOrder` 1–36. Includes the social_science paired set. After this batch `reading.ts`
is complete (8 passages, 72 questions) and type-checks.

**Batch 3 — Adaptive bank, key_ideas_and_details (`reading-extra.ts`).** ~4 passages
delivering ~50 questions tagged `close_reading` (18), `central_ideas` (16),
`sequence_relationships` (16). No diagnostic tags.

**Batch 4 — Adaptive bank, craft_and_structure (`reading-extra.ts`).** ~4–5 passages
delivering ~52 questions tagged `word_meaning` (18), `text_structure` (16),
`purpose_point_of_view` (18).

**Batch 5 — Adaptive bank, integration_of_knowledge_and_ideas (`reading-extra.ts`).**
~5 passages (including 3–4 paired two-text sets and passages with described
visuals) delivering ~48 questions tagged `arguments` (16), `multiple_texts` (16),
`visual_quantitative` (16).

**Batch 6 — Verification pass.** No new content. Audit both files: confirm every
`subSkill`/`reportingCategory` string is on the closed list, every passage has a
`passageType`, difficulty counts match section (c), per-subskill counts match section
(a), diagnostic `formOrder` is contiguous 1–36 per form, every question has exactly one
defensible correct answer with a passage-grounded explanation, and the files type-check
against `SeedPassage`/`SeedQuestion`. Deliver a short coverage report to the lead.

## Per-question quality standard (applies to every batch)

- `subject: "READING"` on every passage and question.
- `reportingCategory` and `subSkill` are exact strings from the closed Reading list and
  are mutually consistent (subskill belongs to its category).
- `difficulty` 1–5; `estimatedTimeSec` realistic (~45–90s, scaling with difficulty).
- 4 choices labeled A–D; exactly one correct answer; distractors plausible but clearly
  wrong — never a second defensible answer.
- Explanation cites or paraphrases the specific passage text that justifies the key.
- Passage bodies are original prose of realistic ACT length; `visual_quantitative`
  items rely on data described within the passage body, not external images.
