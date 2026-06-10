# Canonical ACT Taxonomy

**Frozen — single source of truth for content tagging.** Built from the official ACT
prep-guide reporting categories and skills. Every question authored for this app must
be tagged with a `reportingCategory` and a `subSkill` drawn **only** from the closed
lists below (exact strings). Do not invent new tags — the adaptive engine
(`src/lib/adaptive.ts`) and test scoring (`src/lib/test-scoring.ts`) group by exact
`subSkill` string, so any off-list tag becomes an orphan that mastery tracking and
remediation silently fail to surface.

Two levels:
- **`reportingCategory`** — the official ACT score-report category (broad).
- **`subSkill`** — the granular tag the adaptive engine feeds remediation from.

`subSkill` and `reportingCategory` strings are `snake_case` to match the existing seed
convention. Granularity (~12–19 subskills per subject) is chosen so the planned
~235 questions/subject yield enough items per subskill (~10–18) for adaptive remediation.

---

## English — 50 questions/section · 3 reporting categories · 13 subskills

### `production_of_writing`
| `subSkill` | Covers |
|---|---|
| `relevance` | Relevance of material to topic/focus; whether a passage meets a stated goal |
| `rhetorical_purpose` | Purpose of a word/phrase; word or sentence chosen to convey a feeling, attitude, or illustrate a point |
| `transitions` | Transition words/phrases defining time or logic relationships |
| `sentence_paragraph_order` | Most logical placement of a sentence; reorder sentences; where to divide a paragraph |
| `intros_conclusions` | Suitable introduction or conclusion for a paragraph/passage |

### `knowledge_of_language`
| `subSkill` | Covers |
|---|---|
| `concision` | Delete redundant and wordy material |
| `clarity_style` | Revise unclear/clumsy/confusing writing; conform to passage style and tone |
| `word_choice` | Most appropriate word/phrase for the content; logical connections between clauses |

### `conventions_of_standard_english`
| `subSkill` | Covers |
|---|---|
| `punctuation` | Commas, semicolons, colons, apostrophes, dashes |
| `sentence_structure` | Fragments, fused sentences, run-ons, faulty subordination/coordination |
| `verb_tense` | Inappropriate shifts in verb tense and voice |
| `pronouns` | Pronoun agreement, person, and relative pronouns |
| `modifiers_parallelism` | Misplaced/dangling modifiers, faulty parallelism, adjective placement |

---

## Math — 45 questions/section · 6 reporting categories · 19 subskills

### `number_and_quantity`
| `subSkill` | Covers |
|---|---|
| `number_operations` | Whole numbers, decimals, fractions, rounding, place value, ordering |
| `exponents_radicals` | Powers of ten, exponents, roots, scientific notation, rational exponents |
| `numbers_advanced` | Absolute value, complex numbers, matrices, vectors, irrational numbers |

### `algebra`
| `subSkill` | Covers |
|---|---|
| `expressions_polynomials` | Basic expressions, like terms, add/subtract/multiply polynomials, factoring quadratics |
| `linear_equations` | Solving linear/first-degree equations and systems of equations |
| `inequalities` | Linear, compound, and absolute-value inequalities and their graphs |
| `quadratics` | Quadratic equations and quadratic inequalities |

### `functions`
| `subSkill` | Covers |
|---|---|
| `function_basics` | Function concept, notation, evaluation, domain/range, composite functions |
| `function_graphs` | Graphs of functions, transformations, asymptotes, matching graphs to equations |
| `sequences` | Arithmetic/geometric sequences, recursive expressions, patterns |
| `trigonometry` | Unit circle, trig functions and graphs, basic trig identities |

### `geometry`
| `subSkill` | Covers |
|---|---|
| `plane_geometry` | Angles, parallel lines, triangles, polygons, area/perimeter |
| `coordinate_geometry` | Points, slope, distance, midpoint, equations of lines/parabolas/circles |
| `solid_geometry` | Volume, surface area, three-dimensional figures |
| `right_triangle_trig` | Pythagorean theorem, special triangles, SOHCAHTOA, similar/congruent triangles |

### `statistics_and_probability`
| `subSkill` | Covers |
|---|---|
| `data_statistics` | Mean/median/mode, weighted average, tables/charts, frequency |
| `probability` | Probability, counting techniques, combinations, Venn diagrams |

### `integrating_essential_skills`
| `subSkill` | Covers |
|---|---|
| `word_problems` | Rates, proportions, percents, unit conversion, multi-step real-world problems |

**Math `modeling` overlay:** set the optional `modeling: true` field on any question
that involves producing, interpreting, evaluating, or improving a model. This is the
ACT Modeling reporting category, which overlaps the six categories above (a modeling
question still gets a primary `reportingCategory` from the list).

---

## Reading — 36 questions/section · 3 reporting categories · 9 subskills

### `key_ideas_and_details`
| `subSkill` | Covers |
|---|---|
| `close_reading` | Locate and interpret facts/details, draw logical conclusions, paraphrase |
| `central_ideas` | Identify/infer main idea or theme; summarize key ideas |
| `sequence_relationships` | Sequence of events; stated/implied cause-effect and comparative relationships |

### `craft_and_structure`
| `subSkill` | Covers |
|---|---|
| `word_meaning` | Word meanings, word choice, connotation, figurative language in context |
| `text_structure` | Overall passage structure; function of a word/sentence/paragraph |
| `purpose_point_of_view` | Author's/narrator's purpose, intent, and point of view |

### `integration_of_knowledge_and_ideas`
| `subSkill` | Covers |
|---|---|
| `arguments` | Central claim, supporting reasons, fact vs. opinion, reasoning errors |
| `multiple_texts` | Connections and compared perspectives across two passages |
| `visual_quantitative` | Interpret graphs/diagrams/tables presented with a passage |

**Reading `passageType` values:** `literary_narrative`, `social_science`, `humanities`,
`natural_science`.

---

## Science — 40 questions/section · 3 reporting categories · 9 subskills

### `interpretation_of_data`
| `subSkill` | Covers |
|---|---|
| `read_data` | Select data from a presentation, identify features, find information in text |
| `data_relationships` | How variables change together; compare/combine data across presentations |
| `data_translation` | Translate between table/graph/diagram; interpolation and extrapolation |

### `scientific_investigation`
| `subSkill` | Covers |
|---|---|
| `experimental_design` | Describe an experiment, tools, methods, controls, variables |
| `compare_experiments` | Similarities/differences between experiments; predict results of new trials |
| `hypothesis_testing` | Hypotheses, alternate methods, precision and accuracy |

### `evaluation_of_models`
| `subSkill` | Covers |
|---|---|
| `model_comprehension` | Find information in a model; identify implications and what a model presents |
| `model_evaluation` | Strengths/weaknesses of models; whether new information supports or contradicts |
| `predictions_conclusions` | Predict from a model; draw conclusions consistent with data |

**Science `passageType` values:** `data_representation`, `research_summary`,
`conflicting_viewpoints`.

---

## Content targets

| Subject | Diagnostic 1 | Diagnostic 2 | Adaptive bank | Subject total |
|---|---|---|---|---|
| English | 50 | 50 | ~150 | ~250 |
| Math | 45 | 45 | ~150 | ~240 |
| Reading | 36 | 36 | ~150 | ~222 |
| Science | 40 | 40 | ~150 | ~230 |

The ~150-question adaptive bank for each subject must cover **all** subskills in that
subject (≈10–18 per subskill). Difficulty spread per subject: ~20% easy (difficulty
1–2), ~60% medium (difficulty 3), ~20% hard (difficulty 4–5).

## Quick reference — all valid strings

**`reportingCategory`:** `production_of_writing`, `knowledge_of_language`,
`conventions_of_standard_english`, `number_and_quantity`, `algebra`, `functions`,
`geometry`, `statistics_and_probability`, `integrating_essential_skills`,
`key_ideas_and_details`, `craft_and_structure`, `integration_of_knowledge_and_ideas`,
`interpretation_of_data`, `scientific_investigation`, `evaluation_of_models`.

**`subSkill`:** `relevance`, `rhetorical_purpose`, `transitions`,
`sentence_paragraph_order`, `intros_conclusions`, `concision`, `clarity_style`,
`word_choice`, `punctuation`, `sentence_structure`, `verb_tense`, `pronouns`,
`modifiers_parallelism`, `number_operations`, `exponents_radicals`, `numbers_advanced`,
`expressions_polynomials`, `linear_equations`, `inequalities`, `quadratics`,
`function_basics`, `function_graphs`, `sequences`, `trigonometry`, `plane_geometry`,
`coordinate_geometry`, `solid_geometry`, `right_triangle_trig`, `data_statistics`,
`probability`, `word_problems`, `close_reading`, `central_ideas`,
`sequence_relationships`, `word_meaning`, `text_structure`, `purpose_point_of_view`,
`arguments`, `multiple_texts`, `visual_quantitative`, `read_data`, `data_relationships`,
`data_translation`, `experimental_design`, `compare_experiments`, `hypothesis_testing`,
`model_comprehension`, `model_evaluation`, `predictions_conclusions`.
