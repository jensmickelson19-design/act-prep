import type { SeedQuestion } from "./types";

// ===========================================================================
// English — Diagnostic Test 1 (englishQuestions)
// ---------------------------------------------------------------------------
// 50 items, diagnosticForm 1, formOrder 1-50, across 5 original passages.
// Every question is 100% original content (no imitation of real ACT items).
// Each question is tagged with subject ENGLISH, an exact-string reportingCategory
// and subSkill from docs/act-taxonomy.md, difficulty 1-5, and estimatedTimeSec.
//
// Format note (per lead-approved flag 2): English stays a flat SeedQuestion[].
// Each passage's prose is embedded in its questions' prompt strings; a passage's
// questions form a contiguous run sharing that context. Underlined portions are
// marked with [[ ]] inside the passage text and the prompt names the item by its
// formOrder number. "NO CHANGE" is offered where the underlined text may be
// correct as written.
//
// Passages in this form:
//   I.   "The Locksmith's Apprentice"    — narrative essay        (formOrder 1-10)
//   II.  "Designing for the Color-Blind" — workplace/career piece (formOrder 11-20)
//   III. "The Woman Who Mapped the Ocean Floor" — biography       (formOrder 21-31)
//   IV.  "Why Rivers Wander"             — science/nature piece   (formOrder 32-41)
//   V.   "Learning to Hear a Painting"   — humanities/arts essay  (formOrder 42-50)
//
// Difficulty spread held within this form: 10 easy (1-2), 30 medium (3),
// 10 hard (4-5) — the taxonomy's ~20/60/20 mix.
// ===========================================================================

export const englishQuestions: SeedQuestion[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE I — "The Locksmith's Apprentice" (narrative essay)
  // formOrder 1-10
  //
  // Passage text (numbers in [[ ]] mark underlined portions tested below):
  //
  // [1] The summer I turned sixteen, my uncle Reza offered me a job in his
  // locksmith shop. [[1]] I expected to spend my days cutting keys and watching
  // the clock. [[2]] Instead, Reza handed me a coffee can full of broken padlocks
  // and told me to make every one of them open. [[3]]
  //
  // [2] At first the work [[4]] frustrated me. A lock, I learned, is a small
  // argument between a row of pins and a notched key. [[5]] When the key is
  // wrong, the pins refuse to line up, and the cylinder will not turn. Reza
  // [[6]] would lean over my shoulder, listening to the faint clicks I could
  // barely hear. [[7]] "A lock," he said, "tells you everything if you slow down
  // enough to listen."
  //
  // [3] By August I could open most of the padlocks in under a minute. [[8]] More
  // important, I had stopped watching the clock. [[9]] The shop, [[10]] which had
  // once seemed like a place where time was wasted, had become the place where I
  // learned to pay attention.
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE I — "The Locksmith\'s Apprentice." Paragraph 1: "The summer I turned sixteen, my uncle Reza [[1]] offered me a job in his locksmith shop." Which choice for [[1]] is most appropriate for the neutral, reflective tone of this narrative?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "flung at me" },
      { label: "C", text: "dangled in front of me" },
      { label: "D", text: "lobbed my way" },
    ],
    correctAnswer: "A",
    explanation:
      "The passage is a calm, reflective narrative, so the plain verb 'offered' matches its tone. 'Flung' and 'lobbed' add an aggressive, physical connotation that does not fit, and 'dangled in front of me' wrongly implies the uncle was teasing or manipulating the narrator.",
    diagnosticForm: 1,
    formOrder: 1,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE I, Paragraph 1: "[[2]] Instead Reza handed me a coffee can full of broken padlocks and told me to make every one of them open." Which choice for [[2]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Instead, Reza" },
      { label: "C", text: "Instead Reza," },
      { label: "D", text: "Instead; Reza" },
    ],
    correctAnswer: "B",
    explanation:
      "'Instead' is an introductory transitional word and is set off from the main clause by a comma. Placing the comma after 'Reza' (C) wrongly separates the subject from its verb, and a semicolon (D) cannot follow a single introductory word.",
    diagnosticForm: 1,
    formOrder: 2,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE I, Paragraph 1, [[3]]: The writer wants to end the first paragraph with a sentence that previews the change the summer will bring. Which choice best accomplishes this?',
    choices: [
      { label: "A", text: "Padlocks, I would soon find, are sold in many hardware stores." },
      {
        label: "B",
        text: "I did not yet know that those rusty locks would change how I spent my time.",
      },
      { label: "C", text: "My uncle had run the shop for nearly twenty years." },
      { label: "D", text: "The coffee can was dented and missing its lid." },
    ],
    correctAnswer: "B",
    explanation:
      "An effective lead-in to the rest of the essay should point forward to the transformation the narrator describes. Choice B previews that change. A and D add trivial detail, and C shifts focus to the uncle rather than the narrator's coming experience.",
    diagnosticForm: 1,
    formOrder: 3,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 2: "At first the work [[4]] frustrated me." The narrative is told consistently in the past tense. Which choice for [[4]] is correct?',
    choices: [
      { label: "A", text: "frustrates" },
      { label: "B", text: "will frustrate" },
      { label: "C", text: "NO CHANGE" },
      { label: "D", text: "has frustrated" },
    ],
    correctAnswer: "C",
    explanation:
      "The essay narrates a past summer in the simple past ('handed,' 'learned,' 'said'), so 'frustrated' keeps the tense consistent. The present 'frustrates,' future 'will frustrate,' and present-perfect 'has frustrated' all create an unwarranted shift.",
    diagnosticForm: 1,
    formOrder: 4,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE I, Paragraph 2, [[5]]: "When the key is wrong, the pins refuse to line up, and the cylinder will not turn." Which choice for the underlined portion creates a fused (run-on) sentence?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "the pins refuse to line up the cylinder will not turn." },
      { label: "C", text: "the pins refuse to line up; the cylinder will not turn." },
      { label: "D", text: "the pins refuse to line up, so the cylinder will not turn." },
    ],
    correctAnswer: "B",
    explanation:
      "The question asks which option is incorrect. Choice B jams two independent clauses together with no punctuation or conjunction, producing a fused sentence. A (comma + 'and'), C (semicolon), and D (comma + 'so') all join the clauses correctly.",
    diagnosticForm: 1,
    formOrder: 5,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 2: "Reza [[6]] would lean over my shoulder, listening to the faint clicks I could barely hear." Which choice best describes Reza\'s repeated, habitual action across that summer?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "leans" },
      { label: "C", text: "has leaned" },
      { label: "D", text: "will lean" },
    ],
    correctAnswer: "A",
    explanation:
      "'Would lean' correctly conveys a repeated, habitual past action, which fits a summer of recurring lessons. Present 'leans' and future 'will lean' clash with the past-tense narration, and present-perfect 'has leaned' wrongly connects the action to the present.",
    diagnosticForm: 1,
    formOrder: 6,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 2, [[7]]: "\'A lock,\' he said, \'tells you everything if you slow down enough to listen.\'" Which choice correctly punctuates the interrupted quotation?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: '"A lock" he said "tells you' },
      { label: "C", text: '"A lock," he said. "tells you' },
      { label: "D", text: '"A lock", he said, "tells you' },
    ],
    correctAnswer: "A",
    explanation:
      "When a quoted sentence is interrupted by an attribution, commas set off the attribution and the comma sits inside the closing quotation mark. B drops the commas, C wrongly uses a period that splits one sentence into two, and D places the first comma outside the quotation mark.",
    diagnosticForm: 1,
    formOrder: 7,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 3: "By August I could open most of the padlocks in under a minute. [[8]] I had stopped watching the clock." Which choice for [[8]] best signals that the second point matters even more than the first?',
    choices: [
      { label: "A", text: "For example," },
      { label: "B", text: "More important," },
      { label: "C", text: "In contrast," },
      { label: "D", text: "Meanwhile," },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence ranks the second achievement above the first, so 'More important' is the right logical transition. 'For example' would wrongly make the clause an illustration, 'In contrast' implies opposition, and 'Meanwhile' implies mere simultaneity.",
    diagnosticForm: 1,
    formOrder: 8,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 3, [[9]]: "More important, I had stopped watching the clock and no longer kept checking the time constantly." Which choice for the underlined portion is most concise without losing meaning?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "clock and no longer checked the time." },
      { label: "C", text: "clock." },
      { label: "D", text: "clock, ceasing my constant time-checking habit." },
    ],
    correctAnswer: "C",
    explanation:
      "'Watching the clock' already means checking the time constantly, so any added clause restating it is redundant. Choice C deletes the repetition entirely. A, B, and D all repeat the idea in different words.",
    diagnosticForm: 1,
    formOrder: 9,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 3: "The shop, [[10]] which had once seemed like a place where time was wasted, had become the place where I learned to pay attention." Which choice for [[10]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "which had once seemed like a place where time was wasted" },
      { label: "C", text: "which had once seemed like a place where time was wasted;" },
      { label: "D", text: "which had once seemed like a place, where time was wasted," },
    ],
    correctAnswer: "A",
    explanation:
      "The clause 'which had once seemed...wasted' is a non-restrictive interrupter and needs a comma on each side; the opening comma is already in the passage, so the closing comma must stay. B drops the closing comma, C wrongly uses a semicolon mid-sentence, and D inserts an unneeded comma after 'place.'",
    diagnosticForm: 1,
    formOrder: 10,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE II — "Designing for the Color-Blind" (workplace/career piece)
  // formOrder 11-20
  //
  // Passage text:
  //
  // [1] When Dana Okafor began her career as a graphic designer, [[11]] she
  // assumed her job was simply to make things look beautiful. [[12]] A client's
  // complaint changed that. [[13]] A manager who could not tell the company's red
  // "error" buttons from its green "save" buttons said the new app was unusable
  // for him.
  //
  // [2] Roughly one in twelve men and one in two hundred women [[14]] have some
  // form of color-blindness. [[15]] For these users, a chart that relies on red
  // and green alone can become a meaningless gray blur. Designers who ignore this
  // fact, Okafor argues, [[16]] are not only careless but also losing customers.
  //
  // [3] [[17]] Okafor now teaches a workshop on accessible design. She tells her
  // students to test every layout in grayscale and to pair color with shape,
  // pattern, or a text label. [[18]] A bar chart, for instance, can use stripes
  // as well as hues. [[19]] These habits cost a designer almost nothing.
  // [[20]] They make a product usable for everyone.
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE II — "Designing for the Color-Blind." Paragraph 1: "When Dana Okafor began her career as a graphic designer, [[11]] she assumed her job was simply to make things look beautiful." Which choice for [[11]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "they assumed" },
      { label: "C", text: "one assumed" },
      { label: "D", text: "it assumed" },
    ],
    correctAnswer: "A",
    explanation:
      "The antecedent is 'Dana Okafor,' a single woman, so the singular feminine pronoun 'she' agrees in number and person. 'They' creates a number mismatch, 'one' shifts to an impersonal pronoun, and 'it' cannot refer to a person.",
    diagnosticForm: 1,
    formOrder: 11,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE II, Paragraph 1, [[12]]: "A client\'s complaint changed that." If the writer deleted this sentence, the paragraph would primarily lose:',
    choices: [
      {
        label: "A",
        text: "a transition that signals a turning point and sets up the example that follows.",
      },
      { label: "B", text: "a statistic that supports the essay's central claim." },
      { label: "C", text: "a definition of an unfamiliar technical term." },
      { label: "D", text: "a description of Okafor's educational background." },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence pivots from Okafor's early assumption to the incident that overturned it, and it cues the manager example in the next sentence. It contains no statistic (B), no definition (C), and no biographical background (D).",
    diagnosticForm: 1,
    formOrder: 12,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE II, Paragraph 1, [[13]]: "A manager who could not tell the company\'s red \'error\' buttons from its green \'save\' buttons said the new app was unusable for him." Which alternative to the underlined sentence is a sentence fragment?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      {
        label: "B",
        text: "A manager who could not tell the company's red 'error' buttons from its green 'save' buttons.",
      },
      {
        label: "C",
        text: "A manager could not tell the company's red 'error' buttons from its green 'save' buttons, and he said the new app was unusable for him.",
      },
      {
        label: "D",
        text: "Unable to tell the company's red 'error' buttons from its green 'save' buttons, a manager said the new app was unusable for him.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "The question asks which version is a fragment. Choice B has a subject ('A manager') buried under a relative clause but no main verb, so it never completes a thought. A, C, and D each contain a full independent clause.",
    diagnosticForm: 1,
    formOrder: 13,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 2: "Roughly one in twelve men and one in two hundred women [[14]] have some form of color-blindness." Which choice for [[14]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "has" },
      { label: "C", text: "having" },
      { label: "D", text: "to have" },
    ],
    correctAnswer: "A",
    explanation:
      "The compound subject 'men and women' is joined by 'and,' making it plural, so the plural verb 'have' agrees. 'Has' is singular, while 'having' and 'to have' are non-finite forms that leave the sentence without a main verb.",
    diagnosticForm: 1,
    formOrder: 14,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, Paragraph 2, [[15]]: Which version of this sentence states the idea most clearly and gracefully?',
    choices: [
      {
        label: "A",
        text: "NO CHANGE: For these users, a chart that relies on red and green alone can become a meaningless gray blur.",
      },
      {
        label: "B",
        text: "The reason these users are affected is because of how a chart relying on only red and green is something that can become a gray blur with no meaning to it.",
      },
      {
        label: "C",
        text: "For these users a chart, relying on red and green alone, it can become a gray blur, meaningless.",
      },
      {
        label: "D",
        text: "A meaningless gray blur is what a chart that relies on red and green alone can, for these users, become.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A states the point in a single clear clause with natural word order. B is wordy and clumsy ('the reason...is because'), C is choppy and adds a stray subject 'it,' and D twists the word order so the sentence is hard to follow.",
    diagnosticForm: 1,
    formOrder: 15,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE II, Paragraph 2: "Designers who ignore this fact, Okafor argues, [[16]] are not only careless but also losing customers." Which choice for [[16]] corrects the faulty parallelism?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "are not only careless but also are losing customers" },
      { label: "C", text: "are not only careless but also costly to the company" },
      { label: "D", text: "not only are careless but also losing customers" },
    ],
    correctAnswer: "C",
    explanation:
      "The correlative pair 'not only...but also' must join grammatically matching elements. After 'are,' the first element is the adjective 'careless,' so the second must also be an adjective phrase; 'costly to the company' matches. A and D pair an adjective with a verb phrase, and B awkwardly repeats 'are' yet still mismatches an adjective with a progressive verb.",
    diagnosticForm: 1,
    formOrder: 16,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, Paragraph 3, [[17]]: The writer wants to open the final paragraph with a sentence that shows how Okafor responded to what she learned. Which choice best does this?',
    choices: [
      { label: "A", text: "NO CHANGE: Okafor now teaches a workshop on accessible design." },
      { label: "B", text: "Color theory has fascinated artists for centuries." },
      { label: "C", text: "Many graphic designers work long hours under tight deadlines." },
      { label: "D", text: "Grayscale is a range of shades between black and white." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph goes on to describe what Okafor teaches her students, so an opening sentence that introduces her workshop sets it up directly. B, C, and D are loosely related background facts that do not connect Okafor's lesson to her action.",
    diagnosticForm: 1,
    formOrder: 17,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, Paragraph 3, [[18]]: "A bar chart, for instance, can use stripes as well as hues." Should the writer keep or delete this sentence?',
    choices: [
      {
        label: "A",
        text: "Keep, because it gives a concrete example of pairing color with pattern, the advice in the previous sentence.",
      },
      { label: "B", text: "Keep, because it explains why color-blindness is more common in men." },
      {
        label: "C",
        text: "Delete, because it contradicts Okafor's advice about accessible design.",
      },
      {
        label: "D",
        text: "Delete, because bar charts are not mentioned anywhere else in the passage.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "The previous sentence advises pairing color with shape or pattern, and this sentence illustrates that advice with a bar-chart example, so it is relevant and should stay. It does not explain anything about who is color-blind (B) or contradict the advice (C); a detail need not appear elsewhere to be relevant (D).",
    diagnosticForm: 1,
    formOrder: 18,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 3: "These habits cost a designer almost nothing. [[19]] They make a product usable for everyone." Which choice for [[19]] best joins these two sentences to show the contrast between low cost and high benefit?',
    choices: [
      { label: "A", text: "NO CHANGE (begin a new sentence with) They" },
      { label: "B", text: ", and they" },
      { label: "C", text: ", yet they" },
      { label: "D", text: ", so they" },
    ],
    correctAnswer: "C",
    explanation:
      "The point is that the habits cost almost nothing 'yet' deliver a large benefit, so the contrastive conjunction 'yet' captures the relationship. Leaving two separate sentences (A) loses the contrast, 'and' merely adds, and 'so' wrongly implies the benefit results from the low cost.",
    diagnosticForm: 1,
    formOrder: 19,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, [[20]]: Suppose the writer wants to end the essay by emphasizing that accessible design serves not just color-blind users but the whole audience. Which choice best achieves that purpose?',
    choices: [
      { label: "A", text: "They make a product usable for everyone." },
      { label: "B", text: "They are not difficult for an experienced designer to learn." },
      { label: "C", text: "They were first suggested to Okafor by a frustrated manager." },
      { label: "D", text: "They are now part of her popular weekend workshop." },
    ],
    correctAnswer: "A",
    explanation:
      "The stated purpose is to stress that the benefit reaches the entire audience, and 'usable for everyone' makes exactly that point. B emphasizes ease of learning, C returns to the essay's origin story, and D highlights the workshop, none of which serves the requested purpose.",
    diagnosticForm: 1,
    formOrder: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE III — "The Woman Who Mapped the Ocean Floor" (biography)
  // formOrder 21-31
  //
  // Passage text:
  //
  // [1] In the 1950s, the ocean floor was, [[21]] for most scientists, a flat and
  // featureless plain. Marie Tharp, a geologist working in a New York lab,
  // [[22]] suspected otherwise. She was not allowed aboard the research ships
  // [[23]] that gathered the depth measurements; women were barred from those
  // voyages. [[24]] Instead, she worked from the data the ships sent back.
  //
  // [2] [[25]] Tharp plotted thousands of depth readings by hand. Slowly, a
  // pattern emerged. Down the center of the Atlantic ran a vast underwater
  // mountain range, [[26]] and split by a deep valley. When Tharp pointed out
  // [[27]] this rift to her colleague, he dismissed her finding as "girl talk."
  //
  // [3] [[28]] However, the valley turned out to be one of the most important
  // discoveries in the history of geology. It was evidence that the seafloor was
  // spreading apart, [[29]] a fact that helped confirm the theory of plate
  // tectonics. [[30]] Tharp spent more than two decades drawing the maps.
  // [[31]]
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III — "The Woman Who Mapped the Ocean Floor." Paragraph 1: "In the 1950s, the ocean floor was, [[21]] for most scientists, a flat and featureless plain." Which choice for [[21]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "for most scientists" },
      { label: "C", text: "for most scientists;" },
      { label: "D", text: "for most, scientists" },
    ],
    correctAnswer: "A",
    explanation:
      "'For most scientists' is a parenthetical interrupter and must be set off by a comma on each side; the opening comma is already present, so the closing comma is required. B drops the closing comma, C wrongly uses a semicolon, and D inserts a comma that splits 'most' from 'scientists.'",
    diagnosticForm: 1,
    formOrder: 21,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 1: "Marie Tharp, a geologist working in a New York lab, [[22]] suspected otherwise." Which choice for [[22]] most precisely conveys that Tharp had a reasoned hunch, not proof?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "proved otherwise" },
      { label: "C", text: "guessed otherwise" },
      { label: "D", text: "demanded otherwise" },
    ],
    correctAnswer: "A",
    explanation:
      "'Suspected' captures a reasoned hunch held before evidence is in, which fits a scientist who has not yet plotted her data. 'Proved' overstates her certainty at this stage, 'guessed' implies a random hunch with no reasoning, and 'demanded' does not fit a belief about facts.",
    diagnosticForm: 1,
    formOrder: 22,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 1: "She was not allowed aboard the research ships [[23]] that gathered the depth measurements." Which choice for [[23]] uses the correct relative pronoun?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "who gathered" },
      { label: "C", text: "what gathered" },
      { label: "D", text: "they gathered" },
    ],
    correctAnswer: "A",
    explanation:
      "The relative clause modifies 'ships,' which are things, so the relative pronoun 'that' is correct. 'Who' is reserved for people, 'what' cannot introduce a relative clause modifying a stated noun, and 'they' is a personal pronoun that would create a comma splice or run-on.",
    diagnosticForm: 1,
    formOrder: 23,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE III, Paragraph 1: "She was not allowed aboard the research ships... [[24]] Instead, she worked from the data the ships sent back." Which choice for [[24]] best fits the relationship between the two sentences?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Likewise," },
      { label: "C", text: "For example," },
      { label: "D", text: "As a result of this fact being true," },
    ],
    correctAnswer: "A",
    explanation:
      "Because Tharp could not go to sea, she did something else 'instead,' so the substitution transition is correct. 'Likewise' implies similarity, 'For example' implies illustration, and D expresses cause clumsily and wordily.",
    diagnosticForm: 1,
    formOrder: 24,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III, Paragraph 2, [[25]]: The writer wants the paragraph to open by describing the painstaking method behind Tharp\'s discovery. Which choice best does this?',
    choices: [
      { label: "A", text: "NO CHANGE: Tharp plotted thousands of depth readings by hand." },
      { label: "B", text: "New York winters can be long and cold." },
      { label: "C", text: "The Atlantic Ocean is the second-largest ocean on Earth." },
      { label: "D", text: "Tharp had studied geology and mathematics in college." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph describes how a pattern emerged from Tharp's labor, so an opening that shows her plotting readings by hand introduces that method. B is unrelated weather, C is a general fact about the ocean, and D is biographical background that does not describe the method.",
    diagnosticForm: 1,
    formOrder: 25,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE III, Paragraph 2: "Down the center of the Atlantic ran a vast underwater mountain range, [[26]] and split by a deep valley." Which choice for [[26]] correctly attaches the modifier to the mountain range?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "split by a deep valley" },
      { label: "C", text: "and it splitting by a deep valley" },
      { label: "D", text: "splits by a deep valley" },
    ],
    correctAnswer: "B",
    explanation:
      "The past participle phrase 'split by a deep valley' attaches directly to 'mountain range' as a modifier with no conjunction needed. The original 'and split' wrongly suggests a second verb with no matching subject, C is ungrammatical, and D ('splits') is a present-tense verb that breaks the sentence's structure and tense.",
    diagnosticForm: 1,
    formOrder: 26,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE III, Paragraph 2: "When Tharp pointed out [[27]] this rift to her colleague, he dismissed her finding as \'girl talk.\'" Which choice for [[27]] keeps the reference clear?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "it" },
      { label: "C", text: "this" },
      { label: "D", text: "the same" },
    ],
    correctAnswer: "A",
    explanation:
      "'This rift' names the valley explicitly, so the reader knows exactly what Tharp pointed out. The bare pronoun 'it' and the bare demonstrative 'this' (B and C) leave the reference vague, and 'the same' (D) is a stilted substitute that still names nothing.",
    diagnosticForm: 1,
    formOrder: 27,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III, Paragraph 3: The colleague has just dismissed the finding as "girl talk." The next sentence begins: "[[28]] However, the valley turned out to be one of the most important discoveries in the history of geology." Which choice for [[28]] best fits this contrast?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Therefore," },
      { label: "C", text: "In the same way," },
      { label: "D", text: "Afterward," },
    ],
    correctAnswer: "A",
    explanation:
      "The valley's importance directly contradicts the colleague's dismissal, so the contrast word 'However' is correct. 'Therefore' signals a result, 'In the same way' signals similarity, and 'Afterward' marks only time and misses the reversal of expectation.",
    diagnosticForm: 1,
    formOrder: 28,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 3: "It was evidence that the seafloor was spreading apart, [[29]] a fact that helped confirm the theory of plate tectonics." Which choice for [[29]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "a fact, that helped confirm" },
      { label: "C", text: "a fact; that helped confirm" },
      { label: "D", text: "a fact that helped, confirm" },
    ],
    correctAnswer: "A",
    explanation:
      "The comma before 'a fact' correctly attaches an appositive phrase that renames the preceding clause; no punctuation belongs inside that phrase. B wrongly cuts the restrictive clause off from 'a fact,' C uses a semicolon before a sentence fragment, and D splits the verb phrase 'helped confirm.'",
    diagnosticForm: 1,
    formOrder: 29,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 65,
    prompt:
      'PASSAGE III, Paragraph 3: The sentence "[[30]] Tharp spent more than two decades drawing the maps." currently sits between the sentence about plate tectonics and the paragraph\'s end. For the most logical paragraph, this sentence should be:',
    choices: [
      { label: "A", text: "left where it is now." },
      {
        label: "B",
        text: "moved to Paragraph 2, immediately after the sentence about plotting depth readings by hand.",
      },
      { label: "C", text: "moved to the very beginning of Paragraph 1." },
      { label: "D", text: "deleted, because it repeats information given earlier." },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence describes the labor of mapmaking, which belongs with Paragraph 2's account of how Tharp built the maps by hand. In Paragraph 3 it interrupts the discussion of the discovery's significance. It does not belong in the introduction (C), and the two-decade detail is new information, not a repeat (D).",
    diagnosticForm: 1,
    formOrder: 30,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III, [[31]]: The writer wants to close the biography with a sentence that ties Tharp\'s persistence to her lasting legacy. Which choice best accomplishes this?',
    choices: [
      {
        label: "A",
        text: "The maps she patiently assembled are now studied by geologists around the world.",
      },
      { label: "B", text: "Plate tectonics is taught in nearly every introductory earth-science class." },
      { label: "C", text: "Research ships of the 1950s were noisy and uncomfortable places to work." },
      { label: "D", text: "Tharp was born in Michigan and moved often during her childhood." },
    ],
    correctAnswer: "A",
    explanation:
      "A closing that links Tharp's patient work to its enduring use fulfills the stated purpose, and choice A connects 'patiently assembled' maps to their worldwide study today. B shifts focus to the theory rather than Tharp, C describes ship conditions, and D returns to unrelated childhood biography.",
    diagnosticForm: 1,
    formOrder: 31,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE IV — "Why Rivers Wander" (science/nature informational piece)
  // formOrder 32-41
  //
  // Passage text:
  //
  // [1] A river almost never runs in a straight line. [[32]] Given the choice, it
  // bends, loops, and curves across its valley in a series of broad arcs called
  // meanders. [[33]] The reason for this lies in a simple imbalance of speed.
  //
  // [2] Water on the outside of a bend [[34]] travels faster than water on the
  // inside. The faster current scours the outer bank, [[35]] carrying away soil
  // and slowly cutting the curve deeper. On the inside, the slower water
  // [[36]] drops the sediment it can no longer carry, building a low beach.
  // [[37]] Over many years, each bend grows more pronounced.
  //
  // [3] [[38]] Eventually, a meander can curve so sharply that the river cuts a
  // new, shorter channel straight across the neck. The abandoned loop, [[39]] cut
  // off from the current, becomes a still crescent of water known as an oxbow
  // lake. [[40]] A river, then, is not a fixed feature of the land. [[41]] It is
  // a slow, restless sculptor that is always reshaping its own valley over time.
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE IV — "Why Rivers Wander." Paragraph 1: "[[32]] Given the choice, it bends, loops, and curves across its valley in a series of broad arcs called meanders." Which choice for the underlined portion best avoids redundancy?',
    choices: [
      { label: "A", text: "NO CHANGE: it bends, loops, and curves" },
      { label: "B", text: "it bends, loops, curves, and winds" },
      { label: "C", text: "it bends and loops, also curving and turning," },
      { label: "D", text: "it bends, loops, and curves, twisting and arcing as well," },
    ],
    correctAnswer: "A",
    explanation:
      "Three verbs already convey the river's winding motion vividly; piling on near-synonyms adds words without adding meaning. A is the tightest. B adds a fourth synonym, and C and D tack on still more redundant verbs.",
    diagnosticForm: 1,
    formOrder: 32,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, Paragraph 1, [[33]]: "The reason for this lies in a simple imbalance of speed." This sentence functions in the passage primarily to:',
    choices: [
      {
        label: "A",
        text: "announce the cause that the next paragraph will explain in detail.",
      },
      { label: "B", text: "summarize the discovery of oxbow lakes covered later in the passage." },
      { label: "C", text: "offer the writer's personal opinion about the beauty of rivers." },
      { label: "D", text: "define the technical term 'meander' for the reader." },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence promises a cause ('an imbalance of speed') that Paragraph 2 then unpacks, so it works as a forward-pointing setup. It does not summarize oxbow lakes (B), give a personal opinion (C), or define 'meander,' which the previous sentence already named (D).",
    diagnosticForm: 1,
    formOrder: 33,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE IV, Paragraph 2: "Water on the outside of a bend [[34]] travels faster than water on the inside." The passage describes how rivers behave in general, using the present tense throughout. Which choice for [[34]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "traveled" },
      { label: "C", text: "had traveled" },
      { label: "D", text: "will have traveled" },
    ],
    correctAnswer: "A",
    explanation:
      "A general scientific truth is stated in the present tense, and the surrounding verbs ('scours,' 'drops,' 'grows') are all present, so 'travels' keeps the tense consistent. The past, past-perfect, and future-perfect options all create an unwarranted shift.",
    diagnosticForm: 1,
    formOrder: 34,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, Paragraph 2: "The faster current scours the outer bank, [[35]] carrying away soil and slowly cutting the curve deeper." Which choice for [[35]] keeps the two modifying phrases parallel?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "carrying away soil and it slowly cuts the curve deeper" },
      { label: "C", text: "to carry away soil and slowly cutting the curve deeper" },
      { label: "D", text: "carries away soil and slowly cutting the curve deeper" },
    ],
    correctAnswer: "A",
    explanation:
      "Both phrases describing what the current does should share the same -ing form: 'carrying...and...cutting.' B switches to an independent clause, C mixes an infinitive with a participle, and D mixes a finite verb with a participle.",
    diagnosticForm: 1,
    formOrder: 35,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE IV, Paragraph 2: "On the inside, the slower water [[36]] drops the sediment it can no longer carry, building a low beach." Which choice for [[36]] most precisely describes what slow water does to suspended sediment?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "deposits" },
      { label: "C", text: "abandons" },
      { label: "D", text: "discards" },
    ],
    correctAnswer: "B",
    explanation:
      "'Deposits' is the precise term for sediment settling out of slowing water and is standard in geology, matching the informational tone. 'Drops' is loose and casual, while 'abandons' and 'discards' wrongly suggest a deliberate, almost human choice.",
    diagnosticForm: 1,
    formOrder: 36,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE IV, Paragraph 2: "[[37]] Over many years, each bend grows more pronounced." Which choice for [[37]] best signals the passage of time that lets small effects accumulate?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "On the other hand," },
      { label: "C", text: "For instance," },
      { label: "D", text: "By contrast," },
    ],
    correctAnswer: "A",
    explanation:
      "'Over many years' marks the long span of time across which scouring and depositing slowly enlarge each bend, which is exactly the relationship the sentence needs. The other choices signal contrast or illustration, neither of which fits.",
    diagnosticForm: 1,
    formOrder: 37,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, Paragraph 3: The previous paragraph ends with bends growing more pronounced. The next sentence begins: "[[38]] Eventually, a meander can curve so sharply that the river cuts a new, shorter channel straight across the neck." Which choice for [[38]] best fits?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Nevertheless," },
      { label: "C", text: "In contrast," },
      { label: "D", text: "Similarly," },
    ],
    correctAnswer: "A",
    explanation:
      "'Eventually' shows the next stage in a continuing process — the bends keep growing until the river finally cuts across the neck. 'Nevertheless' and 'In contrast' falsely signal opposition, and 'Similarly' wrongly implies a parallel rather than a next step.",
    diagnosticForm: 1,
    formOrder: 38,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE IV, Paragraph 3: "The abandoned loop, [[39]] cut off from the current, becomes a still crescent of water known as an oxbow lake." Which choice for [[39]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "cut off from the current" },
      { label: "C", text: "cut off, from the current," },
      { label: "D", text: "cut off from the current;" },
    ],
    correctAnswer: "A",
    explanation:
      "The phrase 'cut off from the current' is a non-restrictive modifier interrupting the subject and verb, so it needs a comma on each side. B drops the closing comma, C inserts a comma that splits 'cut off' from 'from the current,' and D wrongly uses a semicolon mid-sentence.",
    diagnosticForm: 1,
    formOrder: 39,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, Paragraph 3: A writer is considering adding the following sentence after [[40]]: "The author once kayaked down a river in Oregon during a family vacation." Should this sentence be added?',
    choices: [
      {
        label: "A",
        text: "No, because it introduces a personal anecdote that does not fit this informational explanation of how rivers form meanders.",
      },
      {
        label: "B",
        text: "No, because rivers in Oregon do not form oxbow lakes.",
      },
      {
        label: "C",
        text: "Yes, because it gives a concrete example of an oxbow lake.",
      },
      {
        label: "D",
        text: "Yes, because it shows the writer has firsthand knowledge of rivers.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "The passage is a focused, impersonal explanation of meander formation, and a casual vacation anecdote breaks that focus and tone, so it should not be added. B states a false claim, and C and D treat an irrelevant personal detail as if it supported the explanation.",
    diagnosticForm: 1,
    formOrder: 40,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE IV, Paragraph 3: "[[41]] It is a slow, restless sculptor that is always reshaping its own valley over time." Which choice for the underlined portion is most concise?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "It is a slow, restless sculptor, always reshaping its own valley." },
      {
        label: "C",
        text: "It is a slow, restless sculptor that is always, over a long period of time, reshaping its own valley.",
      },
      {
        label: "D",
        text: "It is a slow, restless sculptor that continually keeps on reshaping its valley over time.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "'Always' already conveys continuous action, so adding 'over time' or 'over a long period of time' is redundant. B trims the redundancy and tightens the relative clause into a participial phrase. A, C, and D all keep wordy time phrases.",
    diagnosticForm: 1,
    formOrder: 41,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE V — "Learning to Hear a Painting" (humanities/arts essay)
  // formOrder 42-50
  //
  // Passage text:
  //
  // [1] The first time I visited the museum's modern wing, [[42]] I walked
  // through it in under ten minutes. The paintings, all bold blocks of color,
  // seemed to me [[43]] like nothing more than wallpaper. A guide noticed my
  // hurry and asked me to sit with a single canvas for a while.
  //
  // [2] [[44]] Reluctant, I sat. For the first minute I saw only a red square on
  // a gray field. Then I began to notice [[45]] things: a faint seam where two
  // shades of red met, a corner where the paint thinned almost to nothing.
  // [[46]] The longer I looked, the more the flat square seemed to hum.
  //
  // [3] The guide explained that abstract painters often [[47]] compose a canvas
  // the way a musician arranges a piece of music. [[48]] A color, like a note,
  // gains meaning from what surrounds it. [[49]] I had walked past dozens of
  // these paintings without hearing any of them. [[50]]
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE V — "Learning to Hear a Painting." Paragraph 1: "The first time I visited the museum\'s modern wing, [[42]] I walked through it in under ten minutes." The essay narrates a past visit in the past tense. Which choice for [[42]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "I walk" },
      { label: "C", text: "I am walking" },
      { label: "D", text: "I will walk" },
    ],
    correctAnswer: "A",
    explanation:
      "The essay recounts a completed past visit, and surrounding verbs ('visited,' 'seemed,' 'noticed,' 'asked') are past tense, so 'walked' keeps the narration consistent. The present, present-progressive, and future options all break the established tense.",
    diagnosticForm: 1,
    formOrder: 42,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE V, Paragraph 1: "The paintings, all bold blocks of color, seemed to me [[43]] like nothing more than wallpaper." The comparison to wallpaper is included mainly to:',
    choices: [
      {
        label: "A",
        text: "convey the narrator's initial dismissiveness toward the abstract paintings.",
      },
      { label: "B", text: "describe the literal pattern printed on the museum's walls." },
      { label: "C", text: "praise the craftsmanship of the paintings the narrator sees." },
      { label: "D", text: "explain a technique that abstract painters use to mix color." },
    ],
    correctAnswer: "A",
    explanation:
      "Calling the paintings 'nothing more than wallpaper' shows the narrator dismissing them as mere decoration, which sets up the change of mind the essay describes. The phrase is figurative, not a literal wall (B); it belittles rather than praises (C); and it is not a painting technique (D).",
    diagnosticForm: 1,
    formOrder: 43,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE V, Paragraph 2: "[[44]] Reluctant, I sat." Which choice for [[44]] would turn this into a sentence fragment?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Although I was reluctant." },
      { label: "C", text: "Reluctant though I was, I sat down." },
      { label: "D", text: "I was reluctant, but I sat." },
    ],
    correctAnswer: "B",
    explanation:
      "The question asks which option is a fragment. Choice B is a dependent clause introduced by 'Although' with no main clause attached, so it cannot stand alone. A is a complete short sentence, and C and D each contain an independent clause.",
    diagnosticForm: 1,
    formOrder: 44,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE V, Paragraph 2: "Then I began to notice [[45]] things: a faint seam where two shades of red met, a corner where the paint thinned almost to nothing." Which choice for [[45]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "things, a faint seam" },
      { label: "C", text: "things; a faint seam" },
      { label: "D", text: "things a faint seam" },
    ],
    correctAnswer: "A",
    explanation:
      "A colon correctly introduces a list or explanation that follows a complete independent clause ('I began to notice things'). A comma (B) creates a splice into the items, a semicolon (C) wrongly implies a second independent clause, and D leaves the items unpunctuated.",
    diagnosticForm: 1,
    formOrder: 45,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 5,
    estimatedTimeSec: 70,
    prompt:
      'PASSAGE V, Paragraph 2: "[[46]] The longer I looked, the more the flat square seemed to hum." Which choice for the underlined sentence is grammatically complete and clearest?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      {
        label: "B",
        text: "Looking longer, and the flat square seeming more to hum.",
      },
      {
        label: "C",
        text: "The longer I looked, the more the flat square seeming to hum.",
      },
      {
        label: "D",
        text: "While I looked longer, the more the flat square seemed to hum it did.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "The 'the more..., the more...' correlative construction in A is a complete, standard comparative sentence with the finite verbs 'looked' and 'seemed.' B has no main verb, C replaces the finite 'seemed' with the participle 'seeming' so the sentence never completes, and D is a garbled run-on with a dangling 'it did.'",
    diagnosticForm: 1,
    formOrder: 46,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE V, Paragraph 3: "The guide explained that abstract painters often [[47]] compose a canvas the way a musician arranges a piece of music." Which choice for [[47]] best fits the essay\'s comparison of painting to music?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "slap together" },
      { label: "C", text: "manufacture" },
      { label: "D", text: "decorate" },
    ],
    correctAnswer: "A",
    explanation:
      "'Compose' deliberately echoes the language of music and so reinforces the painting-as-music comparison, matching the essay's tone. 'Slap together' is dismissive and casual, 'manufacture' suggests mechanical mass production, and 'decorate' reduces the work to ornament.",
    diagnosticForm: 1,
    formOrder: 47,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE V, Paragraph 3, [[48]]: Which version of this sentence is clearest and best matches the reflective style of the essay?',
    choices: [
      {
        label: "A",
        text: "NO CHANGE: A color, like a note, gains meaning from what surrounds it.",
      },
      {
        label: "B",
        text: "What a color gains is meaning, this being from what is around it, in the manner of a note.",
      },
      {
        label: "C",
        text: "A color gains meaning, and a note does too, from the things surrounding each of them respectively.",
      },
      {
        label: "D",
        text: "From what surrounds it a color, similar to how a note also does, will be gaining meaning.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A states the parallel between a color and a note in one clean, balanced clause that fits the essay's quiet, reflective voice. B is convoluted, C is wordy and awkward ('respectively'), and D scrambles the word order and shifts to a clumsy progressive verb.",
    diagnosticForm: 1,
    formOrder: 48,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 65,
    prompt:
      'PASSAGE V, Paragraph 3: The three sentences of the final paragraph currently appear in this order: (1) "The guide explained that abstract painters often compose a canvas the way a musician arranges a piece of music." (2) "A color, like a note, gains meaning from what surrounds it." (3) "I had walked past dozens of these paintings without hearing any of them." For the most logical paragraph, sentence 3 should be:',
    choices: [
      { label: "A", text: "left where it is, as the last sentence." },
      { label: "B", text: "moved so that it becomes the first sentence of the paragraph." },
      { label: "C", text: "moved so that it appears between sentences 1 and 2." },
      { label: "D", text: "deleted, because it repeats the opening paragraph word for word." },
    ],
    correctAnswer: "A",
    explanation:
      "Sentences 1 and 2 build the painting-as-music idea, and sentence 3 then reflects on that idea by admitting the narrator had missed it before, making it a natural closing reflection. Moving it earlier (B, C) would break the explanation; it restates an earlier idea but not word for word, so it should not be deleted (D).",
    diagnosticForm: 1,
    formOrder: 49,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE V, [[50]]: The writer wants to end the essay with a sentence that returns to the music comparison and shows that the narrator\'s way of seeing has changed. Which choice best concludes the essay?',
    choices: [
      {
        label: "A",
        text: "Now, the guide said, I could finally begin to listen.",
      },
      { label: "B", text: "The museum's modern wing is open every day except Monday." },
      { label: "C", text: "Abstract art first became popular in the early twentieth century." },
      { label: "D", text: "I thanked the guide and left to find the museum cafe." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay's controlling metaphor is 'hearing' a painting, and a conclusion saying the narrator can now 'begin to listen' both echoes that metaphor and signals the change. B is a logistical fact, C is unrelated art history, and D ends on a flat detail that ignores the metaphor and the transformation.",
    diagnosticForm: 1,
    formOrder: 50,
  },
];
