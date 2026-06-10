import type { Subject } from "@prisma/client";

// Canonical ACT taxonomy. The single source of truth (with descriptions of what
// each tag covers) is docs/act-taxonomy.md — keep these unions in sync with it.
// The unions are deliberately closed: the adaptive engine (src/lib/adaptive.ts)
// and test scoring (src/lib/test-scoring.ts) group by exact `subSkill` string, so
// an off-list tag becomes an orphan that mastery/remediation silently miss.

export type ReportingCategory =
  // English
  | "production_of_writing"
  | "knowledge_of_language"
  | "conventions_of_standard_english"
  // Math
  | "number_and_quantity"
  | "algebra"
  | "functions"
  | "geometry"
  | "statistics_and_probability"
  | "integrating_essential_skills"
  // Reading
  | "key_ideas_and_details"
  | "craft_and_structure"
  | "integration_of_knowledge_and_ideas"
  // Science
  | "interpretation_of_data"
  | "scientific_investigation"
  | "evaluation_of_models";

export type SubSkill =
  // English — production_of_writing
  | "relevance"
  | "rhetorical_purpose"
  | "transitions"
  | "sentence_paragraph_order"
  | "intros_conclusions"
  // English — knowledge_of_language
  | "concision"
  | "clarity_style"
  | "word_choice"
  // English — conventions_of_standard_english
  | "punctuation"
  | "sentence_structure"
  | "verb_tense"
  | "pronouns"
  | "modifiers_parallelism"
  // Math — number_and_quantity
  | "number_operations"
  | "exponents_radicals"
  | "numbers_advanced"
  // Math — algebra
  | "expressions_polynomials"
  | "linear_equations"
  | "inequalities"
  | "quadratics"
  // Math — functions
  | "function_basics"
  | "function_graphs"
  | "sequences"
  | "trigonometry"
  // Math — geometry
  | "plane_geometry"
  | "coordinate_geometry"
  | "solid_geometry"
  | "right_triangle_trig"
  // Math — statistics_and_probability
  | "data_statistics"
  | "probability"
  // Math — integrating_essential_skills
  | "word_problems"
  // Reading — key_ideas_and_details
  | "close_reading"
  | "central_ideas"
  | "sequence_relationships"
  // Reading — craft_and_structure
  | "word_meaning"
  | "text_structure"
  | "purpose_point_of_view"
  // Reading — integration_of_knowledge_and_ideas
  | "arguments"
  | "multiple_texts"
  | "visual_quantitative"
  // Science — interpretation_of_data
  | "read_data"
  | "data_relationships"
  | "data_translation"
  // Science — scientific_investigation
  | "experimental_design"
  | "compare_experiments"
  | "hypothesis_testing"
  // Science — evaluation_of_models
  | "model_comprehension"
  | "model_evaluation"
  | "predictions_conclusions";

// Reading passage genres / Science passage formats (see docs/act-taxonomy.md).
export type PassageType =
  | "literary_narrative"
  | "social_science"
  | "humanities"
  | "natural_science"
  | "data_representation"
  | "research_summary"
  | "conflicting_viewpoints";

// Which fixed diagnostic test a question belongs to. Undefined → the question is
// part of the adaptive practice bank only, not a diagnostic form.
export type DiagnosticForm = 1 | 2;

export type SeedChoice = { label: "A" | "B" | "C" | "D"; text: string };

export type SeedQuestion = {
  subject: Subject;
  reportingCategory: ReportingCategory;
  subSkill: SubSkill;
  difficulty: number;
  estimatedTimeSec: number;
  prompt: string;
  choices: SeedChoice[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  // Math only: true if the question exercises the ACT Modeling category, which
  // overlaps the six Math reporting categories.
  modeling?: boolean;
  // Diagnostic-test membership. When set, the question is a fixed item on that
  // diagnostic form; `formOrder` is its 1-based position within its section.
  diagnosticForm?: DiagnosticForm;
  formOrder?: number;
};

export type SeedPassage = {
  subject: Subject;
  title: string;
  body: string;
  questions: SeedQuestion[];
  // Reading genre / Science passage format.
  passageType?: PassageType;
  // A passage used in a diagnostic form carries the same tags as its questions.
  diagnosticForm?: DiagnosticForm;
};

// ---------------------------------------------------------------------------
// Lessons. One authored instructional lesson per sub-skill (49 total). The
// closed `SubSkill` union guarantees a 1:1 mapping — a missing or misspelled
// sub-skill is a compile error in the per-subject lesson seed files.
// ---------------------------------------------------------------------------

// A step-by-step worked example. `prompt`, each `steps` entry, and `answer` may
// contain inline math delimited with $...$ (or $$...$$ for display math).
export type WorkedExample = {
  prompt: string;
  steps: string[];
  answer: string;
};

export type SeedLesson = {
  subject: Subject;
  subSkill: SubSkill;
  title: string;
  // One- or two-sentence "what this skill is".
  summary: string;
  // Markdown explanation; KaTeX math via $...$ / $$...$$.
  body: string;
  // At least one worked example.
  examples: WorkedExample[];
  // Display order within the subject.
  orderIndex: number;
};
