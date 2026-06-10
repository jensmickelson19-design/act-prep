# English Author Plan — ACT-Prep App

Author: `english-author` (Opus). Phase 1 — planning only. No seed content is written
this phase. Files I own and will edit in the authoring phase: `prisma/seed-data/english.ts`
and `prisma/seed-data/english-extra.ts` (no other file, ever).

---

## 0. Current-state note (for the lead)

The existing `english.ts` / `english-extra.ts` use **off-taxonomy** `subSkill` strings
(`comma_usage`, `subject_verb_agreement`, `pronoun_reference`, `parallelism`,
`apostrophes`, `modifiers`, `redundancy`, `run_ons`, `word_choice`, `fragments`,
`verb_tense`, `sentence_combining`) and carry **no** `reportingCategory`, no
`diagnosticForm`/`formOrder`, and no passage structure. They also lack the
`reportingCategory` field that `types.ts` now requires. **The authoring phase will
replace both files wholesale** with fully retagged, taxonomy-compliant content. The
old questions' pedagogy is sound and several items will be rewritten (originally, not
copied) and remapped onto the closed taxonomy below. No edits to any frozen file are
proposed.

---

## (a) All 13 English subskills — full coverage with target counts

The closed English taxonomy has 3 reporting categories and 13 subskills. Every
question I author is tagged with `subject: "ENGLISH"`, one exact `reportingCategory`,
and one exact `subSkill` from this list. Totals below cover Diagnostic 1 (50) +
Diagnostic 2 (50) + adaptive bank (~152) = **~252 questions**.

### `production_of_writing` (reportingCategory)
| subSkill | Diag 1 | Diag 2 | Adaptive bank | Total |
|---|---|---|---|---|
| `relevance` | 2 | 2 | 11 | 15 |
| `rhetorical_purpose` | 3 | 3 | 12 | 18 |
| `transitions` | 4 | 4 | 14 | 22 |
| `sentence_paragraph_order` | 2 | 2 | 11 | 15 |
| `intros_conclusions` | 2 | 2 | 11 | 15 |

### `knowledge_of_language` (reportingCategory)
| subSkill | Diag 1 | Diag 2 | Adaptive bank | Total |
|---|---|---|---|---|
| `concision` | 3 | 3 | 12 | 18 |
| `clarity_style` | 3 | 3 | 11 | 17 |
| `word_choice` | 3 | 3 | 11 | 17 |

### `conventions_of_standard_english` (reportingCategory)
| subSkill | Diag 1 | Diag 2 | Adaptive bank | Total |
|---|---|---|---|---|
| `punctuation` | 8 | 8 | 14 | 30 |
| `sentence_structure` | 6 | 6 | 12 | 24 |
| `verb_tense` | 4 | 4 | 11 | 19 |
| `pronouns` | 5 | 5 | 11 | 21 |
| `modifiers_parallelism` | 5 | 5 | 11 | 21 |
| **Section totals** | **50** | **50** | **152** | **252** |

Per-category section weighting roughly matches the real ACT English mix
(`conventions_of_standard_english` ≈ 51-56%, `production_of_writing` ≈ 29-32%,
`knowledge_of_language` ≈ 13-19%). Adaptive bank: every one of the 13 subskills gets
11-14 items (≥10 each, satisfying the taxonomy's ≈10-18 requirement).

**Mapping of old off-list tags → valid taxonomy subskills** (for content I rewrite):
`comma_usage`/`apostrophes` → `punctuation`; `run_ons`/`fragments`/`sentence_combining`
→ `sentence_structure`; `subject_verb_agreement` → `verb_tense` (agreement) or
`pronouns` where pronoun-driven; `pronoun_reference` → `pronouns`;
`parallelism`/`modifiers` → `modifiers_parallelism`; `redundancy` → `concision`;
`word_choice` → `word_choice`. Note: subject-verb agreement lives under `verb_tense`
per the taxonomy's grouping of verb conventions.

## (b) Originality commitment

Every passage and every question I author will be **100% original**. I will not copy,
paraphrase, or closely imitate any real ACT item, released ACT test, or any published
practice-test question from any source. I will mirror only the real ACT English
section's *format* (passage-based with embedded numbered/underlined items, NO CHANGE
as a standard first option where appropriate, 4 answer choices A-D), its *topic
coverage* (the 13 subskills above), and its *difficulty mix*. All passage subjects,
characters, facts, and prose will be freshly invented. Distractors will be plausible
but unambiguously wrong, with exactly one defensible correct answer per item; each
item gets a pedagogically useful explanation that names the rule and why the
distractors fail.

## (c) Difficulty spread — explicit counts

Target spread per the taxonomy: ~20% easy (1-2), ~60% medium (3), ~20% hard (4-5),
applied across all ~252 questions.

| Difficulty | Label | Target count | Share |
|---|---|---|---|
| 1 | easy | 18 | 7% |
| 2 | easy | 34 | 13% |
| 3 | medium | 152 | 60% |
| 4 | hard | 38 | 15% |
| 5 | hard | 12 | 5% |
| **Total** | | **252** | **100%** |

Easy (1-2) = 52 (~21%); medium (3) = 152 (~60%); hard (4-5) = 50 (~20%). Each
diagnostic form individually holds the same spread (~10 easy / ~30 medium / ~10 hard
across its 50 items) so neither diagnostic is skewed. `estimatedTimeSec` per item:
30-45s easy, 45-60s medium, 55-80s hard (ACT English averages ~36s/question; harder
rhetorical/passage-order items run longer).

## (d) File mapping — english.ts vs english-extra.ts

`prisma/seed.ts` imports `englishQuestions` from `english.ts` and
`englishExtraQuestions` from `english-extra.ts`; both stay as `SeedQuestion[]` arrays.
English is passage-based, but the seed schema's diagnostic membership lives on
individual `SeedQuestion`s via `diagnosticForm` + `formOrder`, so passages are
realized as a contiguous run of questions sharing a passage context (passage prose
embedded in each question's `prompt`, or in the first question of the run, per the
final convention the lead confirms — I will ask the lead before authoring whether to
embed passage text in `prompt` or request a `SeedPassage`-style grouping; until then I
plan self-contained `prompt` strings so no schema change is needed).

- **`english.ts` → `englishQuestions`**: **Diagnostic Test 1 only.** All 50 items
  tagged `diagnosticForm: 1`, `formOrder: 1`-`50`, grouped into 5 original passages
  (~10 questions each), ordered as a real ACT English section.
- **`english-extra.ts` → `englishExtraQuestions`**: **Diagnostic Test 2 (50 items,
  `diagnosticForm: 2`, `formOrder: 1`-`50`, 5 original passages) PLUS the ~152
  adaptive-bank questions** (no `diagnosticForm`, no `formOrder`). Adaptive-bank items
  are standalone (single-sentence or short-context prompts) so they need no passage
  grouping. The file's two logical sections will be clearly comment-delimited.

This keeps Diagnostic 1 isolated in one file and everything else in the other, which
is a clean split for review and for the lead's seed wiring. If the lead prefers a
different split (e.g. both diagnostics in `english.ts`, only the bank in
`english-extra.ts`), that is a one-line rebalance — I will confirm with the lead at
the start of authoring.

## (e) Work split — 6 batches

Each batch is a self-contained, reviewable deliverable. I author, self-check tags
against the closed taxonomy, verify the difficulty spread, and hand off.

- **Batch 1 — Diagnostic Test 1, passages I-III (questions 1-30).** Three original
  passages: a personal/narrative essay, a workplace/career informational piece, and a
  history/biography piece. ~30 items in `english.ts`, `diagnosticForm: 1`,
  `formOrder` 1-30, covering all 3 reporting categories. Deliverable: first 30 of
  `englishQuestions`.
- **Batch 2 — Diagnostic Test 1, passages IV-V (questions 31-50).** Two original
  passages: a science/nature informational piece and a humanities/arts essay. ~20
  items, `formOrder` 31-50. Deliverable: complete `english.ts` (50-item Diagnostic 1)
  with verified spread and full subskill mix.
- **Batch 3 — Diagnostic Test 2, passages I-III (questions 1-30).** Three new
  original passages on fresh topics. `english-extra.ts`, `diagnosticForm: 2`,
  `formOrder` 1-30.
- **Batch 4 — Diagnostic Test 2, passages IV-V (questions 31-50).** Two new original
  passages, `formOrder` 31-50. Deliverable: complete 50-item Diagnostic 2 inside
  `english-extra.ts`.
- **Batch 5 — Adaptive bank, conventions + knowledge of language (~80 items).**
  Standalone items for `punctuation` (14), `sentence_structure` (12), `verb_tense`
  (11), `pronouns` (11), `modifiers_parallelism` (11), `concision` (12),
  `clarity_style` (11), `word_choice` (11) — appended to `englishExtraQuestions`,
  no `diagnosticForm`.
- **Batch 6 — Adaptive bank, production of writing (~72 items) + final QA.**
  Standalone items for `relevance` (11), `rhetorical_purpose` (12), `transitions`
  (14), `sentence_paragraph_order` (11), `intros_conclusions` (11). Then a full-file
  QA pass: confirm every item has a valid `reportingCategory`+`subSkill` pair, the
  252-item difficulty spread matches section (c), every subskill hits its target,
  answer keys are correct, distractors have no second defensible answer, and both
  files still export the expected symbols as `SeedQuestion[]`.

After each batch I report counts and stop for lead review before continuing.
