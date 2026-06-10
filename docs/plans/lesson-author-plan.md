# Lesson Author Plan — Phase 3

**Author:** `lesson-author` (Sonnet)
**Scope:** 49 `SeedLesson` records — one per sub-skill — across 4 TypeScript seed files.
**Frozen / read-only:** `docs/act-taxonomy.md`, `prisma/seed-data/types.ts`, `prisma/schema.prisma`.
**Owned files:** `prisma/seed-data/lessons-english.ts`, `lessons-math.ts`, `lessons-reading.ts`, `lessons-science.ts`.

---

## (a) Full 1:1 Sub-Skill Coverage — 49 Lessons

### English — 13 lessons (`lessons-english.ts`)

| orderIndex | subSkill | Reporting Category | Title |
|---|---|---|---|
| 1 | `relevance` | `production_of_writing` | Keeping Your Writing On-Topic |
| 2 | `rhetorical_purpose` | `production_of_writing` | Why Word and Sentence Choice Matters |
| 3 | `transitions` | `production_of_writing` | Connecting Ideas with Transitions |
| 4 | `sentence_paragraph_order` | `production_of_writing` | Arranging Sentences and Paragraphs Logically |
| 5 | `intros_conclusions` | `production_of_writing` | Writing Effective Introductions and Conclusions |
| 6 | `concision` | `knowledge_of_language` | Cutting Redundancy for Cleaner Prose |
| 7 | `clarity_style` | `knowledge_of_language` | Writing Clearly and Matching Passage Style |
| 8 | `word_choice` | `knowledge_of_language` | Choosing the Right Word |
| 9 | `punctuation` | `conventions_of_standard_english` | Mastering Commas, Semicolons, and More |
| 10 | `sentence_structure` | `conventions_of_standard_english` | Fixing Fragments, Fused Sentences, and Run-Ons |
| 11 | `verb_tense` | `conventions_of_standard_english` | Keeping Verb Tense and Voice Consistent |
| 12 | `pronouns` | `conventions_of_standard_english` | Using Pronouns Correctly |
| 13 | `modifiers_parallelism` | `conventions_of_standard_english` | Fixing Modifiers and Faulty Parallelism |

### Math — 18 lessons (`lessons-math.ts`)

| orderIndex | subSkill | Reporting Category | Title |
|---|---|---|---|
| 1 | `number_operations` | `number_and_quantity` | Working with Numbers: Operations and Place Value |
| 2 | `exponents_radicals` | `number_and_quantity` | Exponents, Roots, and Scientific Notation |
| 3 | `numbers_advanced` | `number_and_quantity` | Absolute Value, Complex Numbers, and Matrices |
| 4 | `expressions_polynomials` | `algebra` | Expressions and Polynomials |
| 5 | `linear_equations` | `algebra` | Solving Linear Equations and Systems |
| 6 | `inequalities` | `algebra` | Inequalities and Their Graphs |
| 7 | `quadratics` | `algebra` | Quadratic Equations and Inequalities |
| 8 | `function_basics` | `functions` | Understanding Functions: Notation, Domain, and Range |
| 9 | `function_graphs` | `functions` | Graphing Functions and Transformations |
| 10 | `sequences` | `functions` | Arithmetic and Geometric Sequences |
| 11 | `trigonometry` | `functions` | Trigonometry: The Unit Circle and Trig Functions |
| 12 | `plane_geometry` | `geometry` | Angles, Triangles, and Polygons |
| 13 | `coordinate_geometry` | `geometry` | Points, Lines, and Curves on the Coordinate Plane |
| 14 | `solid_geometry` | `geometry` | Volume and Surface Area of 3-D Figures |
| 15 | `right_triangle_trig` | `geometry` | Right Triangles: Pythagorean Theorem and SOHCAHTOA |
| 16 | `data_statistics` | `statistics_and_probability` | Mean, Median, Mode, and Reading Data Displays |
| 17 | `probability` | `statistics_and_probability` | Probability and Counting Techniques |
| 18 | `word_problems` | `integrating_essential_skills` | Rates, Proportions, Percents, and Multi-Step Problems |

### Reading — 9 lessons (`lessons-reading.ts`)

| orderIndex | subSkill | Reporting Category | Title |
|---|---|---|---|
| 1 | `close_reading` | `key_ideas_and_details` | Reading Closely for Facts and Details |
| 2 | `central_ideas` | `key_ideas_and_details` | Finding the Main Idea and Theme |
| 3 | `sequence_relationships` | `key_ideas_and_details` | Tracking Sequence, Cause, and Effect |
| 4 | `word_meaning` | `craft_and_structure` | Understanding Word Meaning in Context |
| 5 | `text_structure` | `craft_and_structure` | Analyzing How a Passage Is Built |
| 6 | `purpose_point_of_view` | `craft_and_structure` | Identifying Author's Purpose and Point of View |
| 7 | `arguments` | `integration_of_knowledge_and_ideas` | Evaluating Claims, Evidence, and Reasoning |
| 8 | `multiple_texts` | `integration_of_knowledge_and_ideas` | Comparing Perspectives Across Two Passages |
| 9 | `visual_quantitative` | `integration_of_knowledge_and_ideas` | Reading Graphs and Tables Alongside a Passage |

### Science — 9 lessons (`lessons-science.ts`)

| orderIndex | subSkill | Reporting Category | Title |
|---|---|---|---|
| 1 | `read_data` | `interpretation_of_data` | Reading Data from Tables and Graphs |
| 2 | `data_relationships` | `interpretation_of_data` | How Variables Change Together |
| 3 | `data_translation` | `interpretation_of_data` | Translating Between Data Formats |
| 4 | `experimental_design` | `scientific_investigation` | Understanding Experimental Design |
| 5 | `compare_experiments` | `scientific_investigation` | Comparing Experiments and Predicting Results |
| 6 | `hypothesis_testing` | `scientific_investigation` | Hypotheses, Accuracy, and Precision |
| 7 | `model_comprehension` | `evaluation_of_models` | Reading and Understanding Scientific Models |
| 8 | `model_evaluation` | `evaluation_of_models` | Evaluating the Strengths and Weaknesses of Models |
| 9 | `predictions_conclusions` | `evaluation_of_models` | Drawing Conclusions and Making Predictions |

**Total: 13 + 18 + 9 + 9 = 49 lessons. Every sub-skill in the taxonomy receives exactly one lesson.**

---

## (b) File Split and Exports

| File | Export Name | Lessons | Type |
|---|---|---|---|
| `prisma/seed-data/lessons-english.ts` | `englishLessons` | 13 | `SeedLesson[]` |
| `prisma/seed-data/lessons-math.ts` | `mathLessons` | 18 | `SeedLesson[]` |
| `prisma/seed-data/lessons-reading.ts` | `readingLessons` | 9 | `SeedLesson[]` |
| `prisma/seed-data/lessons-science.ts` | `scienceLessons` | 9 | `SeedLesson[]` |

Each file will open with the same header pattern used in the existing seed files: a block comment naming the file, subject, lesson count, and a note that all content is 100% original. The import line will be:

```ts
import type { SeedLesson } from "./types";
```

The named export at the bottom will be:

```ts
export const englishLessons: SeedLesson[] = [ ... ];
// (or mathLessons / readingLessons / scienceLessons)
```

---

## (c) Lesson Structure and Length Conventions

Each `SeedLesson` follows this internal template:

### `title`
Short, student-facing title (4–9 words). Avoids jargon; uses plain action language ("Fixing…", "Understanding…", "Working with…").

### `summary`
Exactly 1–2 sentences. States what the skill is and why it matters on the ACT. No markdown formatting inside this field.

### `body`
Full markdown explanation. Target length: **300–600 words** of prose (shorter for more mechanical skills like punctuation rules, longer where conceptual groundwork is needed, e.g. function transformations). Structure:

1. **What the skill is** — plain-language definition.
2. **Key rules / patterns** — bullet list or numbered list with 3–6 concrete rules or sub-ideas.
3. **Common traps** — a brief paragraph or short bullet list naming the 1–2 most frequent student errors.
4. **Quick tip / strategy box** — 2–4 sentences summarising a test-taking approach.

Math lessons use KaTeX liberally in the body (see section e). Non-math lessons are pure prose/markdown with no math notation.

### `examples`
- **English, Reading, Science:** 1 worked example. The prompt is a short constructed scenario (original passage snippet or data description). Steps walk through the reasoning. Answer states the final choice with a brief rationale.
- **Math:** 2 worked examples per lesson — one at moderate difficulty, one at higher difficulty. Both use full KaTeX notation in prompt, steps, and answer.
- All steps are self-contained sentences so each step can stand alone as a learning moment.
- Target: 3–6 steps per example.

### `orderIndex`
Sequential integers starting at 1 within each subject. Mirrors the ordering in tables in section (a).

### Tone
Warm and encouraging, as if a skilled tutor is explaining the concept. Uses second-person ("you", "your"). Short sentences. Avoids passive voice where practical. Concrete examples anchor every abstract rule.

---

## (d) Commitment to 100% Original Content

All lesson bodies, worked examples, passage excerpts, and data scenarios are **wholly original**. No text is copied or closely paraphrased from real ACT test items, official ACT prep guides (The Real ACT Prep Guide, ACT Online Prep, or similar), or third-party commercial prep materials (Princeton Review, Kaplan, Barron's, etc.). Passage snippets embedded in worked examples are freshly written fictional or expository texts created solely for this project. Data tables and graphs in Science examples are invented scenarios not derived from real experiments. Worked-example answer choices and prompts are crafted specifically to illustrate the target sub-skill and are not modelled on any specific released test item.

---

## (e) KaTeX Math Notation

Math notation appears **only** in `lessons-math.ts`. Convention:

- **Inline math:** `$...$` — used for variables, expressions, equations within a sentence. Example: `The slope of a line is $m = \dfrac{rise}{run}$.`
- **Display math:** `$$...$$` — used for multi-line equations, systems, or any expression that benefits from centering. Example:
  ```
  $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
  ```
- **Worked example prompts:** the problem statement uses display math for the main expression, inline math for references within prose.
- **Steps:** each step in `steps[]` may mix prose and inline math. Where a full algebraic manipulation is shown, display math is used for the transformed equation.
- **Answer:** uses inline math for the final result, e.g. `"The solution is $x = 3$."`.
- Notation follows standard LaTeX conventions: `\frac{}{}`, `\sqrt{}`, `\pm`, `\cdot`, `\leq`, `\geq`, `\neq`, `\sin`, `\cos`, `\tan`, `\pi`, `^{...}`, `_{...}`, etc.
- Complex-number examples use `i` in italic math mode: `$i = \sqrt{-1}$`.
- Matrices use the `\begin{bmatrix}...\end{bmatrix}` environment inside `$$...$$` blocks.

English, Reading, and Science lessons contain **no KaTeX** — all explanation is plain markdown text.

---

## (f) Work Batches

Lessons will be authored in 6 batches in re-engagement sessions. Each batch produces one complete, compile-ready TypeScript file (or a portion thereof if the file is large) with all lessons for that batch's sub-skills.

| Batch | File(s) | Sub-Skills | Lessons |
|---|---|---|---|
| 1 | `lessons-english.ts` (part 1) | `relevance`, `rhetorical_purpose`, `transitions`, `sentence_paragraph_order`, `intros_conclusions`, `concision`, `clarity_style` | 7 |
| 2 | `lessons-english.ts` (part 2, complete file) | `word_choice`, `punctuation`, `sentence_structure`, `verb_tense`, `pronouns`, `modifiers_parallelism` | 6 |
| 3 | `lessons-math.ts` (part 1) | `number_operations`, `exponents_radicals`, `numbers_advanced`, `expressions_polynomials`, `linear_equations`, `inequalities`, `quadratics`, `function_basics`, `function_graphs` | 9 |
| 4 | `lessons-math.ts` (part 2, complete file) | `sequences`, `trigonometry`, `plane_geometry`, `coordinate_geometry`, `solid_geometry`, `right_triangle_trig`, `data_statistics`, `probability`, `word_problems` | 9 |
| 5 | `lessons-reading.ts` (complete file) | `close_reading`, `central_ideas`, `sequence_relationships`, `word_meaning`, `text_structure`, `purpose_point_of_view`, `arguments`, `multiple_texts`, `visual_quantitative` | 9 |
| 6 | `lessons-science.ts` (complete file) | `read_data`, `data_relationships`, `data_translation`, `experimental_design`, `compare_experiments`, `hypothesis_testing`, `model_comprehension`, `model_evaluation`, `predictions_conclusions` | 9 |

**Total batches: 6. Total lessons: 49.**

Batches 1 and 2 are written sequentially and then assembled into the final `lessons-english.ts` export at the end of Batch 2. Batches 3 and 4 follow the same pattern for `lessons-math.ts`. Batches 5 and 6 each produce a standalone complete file in a single pass.

---

## Constraints Respected

- No edits to `docs/act-taxonomy.md`, `prisma/seed-data/types.ts`, or `prisma/schema.prisma`.
- No edits to any other team member's files (`english.ts`, `math.ts`, `reading.ts`, `science.ts`, `*-extra.ts`, `synthesize.ts`).
- All `subSkill` strings copied verbatim from the closed `SubSkill` union in `types.ts`.
- TypeScript `import type { SeedLesson } from "./types"` with no other imports.
- Each file exports exactly one named constant of type `SeedLesson[]`.
