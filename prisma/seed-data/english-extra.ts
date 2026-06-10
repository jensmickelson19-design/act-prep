import type { SeedQuestion } from "./types";

// ===========================================================================
// English — Diagnostic Test 2 + Adaptive Practice Bank (englishExtraQuestions)
// ---------------------------------------------------------------------------
// This file holds two logical sections in one SeedQuestion[] export:
//   1. Diagnostic Test 2 — 50 items, diagnosticForm 2, formOrder 1-50, across
//      5 original passages. Passage prose is embedded in each question's prompt;
//      underlined portions are marked [[n]] and the prompt names the item by its
//      formOrder number. "NO CHANGE" is offered where the text may be correct.
//   2. Adaptive practice bank — 152 standalone items, NO diagnosticForm/formOrder,
//      covering all 13 English subSkills (11-14 items each, >= 10).
//
// Every question is 100% original content (no imitation of real ACT items) and
// is tagged subject ENGLISH with an exact-string reportingCategory + subSkill
// from docs/act-taxonomy.md, difficulty 1-5, and estimatedTimeSec.
//
// Diagnostic 2 difficulty mix (lead correction 2): leans easier than Diag 1 —
// ~12 easy (1-2, several at 1) / 30 medium (3) / 8 hard (4-5), so the two forms
// average ~20/60/20. Adaptive bank also holds ~20/60/20.
//
// Passages in Diagnostic 2:
//   I.   "The Repair Cafe"               — narrative/community essay (formOrder 1-10)
//   II.  "The Quiet Work of Pollinators" — science/nature piece      (formOrder 11-20)
//   III. "A Mapmaker of Sound"           — biography                 (formOrder 21-30)
//   IV.  "Learning to Read a Trail"      — workplace/career piece     (formOrder 31-40)
//   V.   "The Last Letterpress"          — humanities/arts essay      (formOrder 41-50)
// ===========================================================================

export const englishExtraQuestions: SeedQuestion[] = [
  // ═════════════════════════════════════════════════════════════════════════
  // DIAGNOSTIC TEST 2  (diagnosticForm 2, formOrder 1-50)
  // ═════════════════════════════════════════════════════════════════════════

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE I — "The Repair Cafe" (narrative/community essay) · formOrder 1-10
  //
  // [1] On the first Saturday of every month, the basement of our public
  // library [[1]] turns into a workshop. Volunteers set up long tables, and
  // neighbors arrive carrying broken lamps, [[2]] silent radios and torn
  // backpacks. [[3]] The event is called a Repair Cafe.
  //
  // [2] My grandmother brought a wooden clock that had not ticked in years.
  // [[4]] She had kept it on a shelf because it once belonged to her father.
  // A volunteer named Theo opened the back, [[5]] studied the still gears, and
  // cleaned each one with a soft brush. [[6]] Slowly, the clock began to tick.
  //
  // [3] [[7]] Watching Theo work, I understood the cafe's real purpose. [[8]] It
  // is not only about saving money or reducing waste. [[9]] It teaches people
  // that the things they own can be understood and mended, [[10]] rather than
  // simply thrown away.
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'PASSAGE I — "The Repair Cafe." Paragraph 1: "On the first Saturday of every month, the basement of our public library [[1]] turns into a workshop." The essay describes this recurring event in the present tense. Which choice for [[1]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "turned" },
      { label: "C", text: "will turn" },
      { label: "D", text: "had turned" },
    ],
    correctAnswer: "A",
    explanation:
      "The phrase 'every month' marks a habitual, ongoing event, which standard English states in the present tense; 'turns' matches that and the present-tense verbs around it. The past, future, and past-perfect options all break the established tense.",
    diagnosticForm: 2,
    formOrder: 1,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE I, Paragraph 1: "Volunteers set up long tables, and neighbors arrive carrying broken lamps, [[2]] silent radios and torn backpacks." Which choice for [[2]] correctly punctuates the items in the series?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "silent radios, and torn backpacks" },
      { label: "C", text: "silent radios, and torn backpacks," },
      { label: "D", text: "silent, radios and torn backpacks" },
    ],
    correctAnswer: "B",
    explanation:
      "A list of three items takes a comma after each item before the conjunction: 'lamps, silent radios, and torn backpacks.' A omits the comma before 'and,' C adds a stray comma after the final item, and D inserts a comma that splits the adjective 'silent' from 'radios.'",
    diagnosticForm: 2,
    formOrder: 2,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE I, Paragraph 1, [[3]]: "The event is called a Repair Cafe." This sentence functions in the paragraph primarily to:',
    choices: [
      { label: "A", text: "name the event the paragraph has been describing." },
      { label: "B", text: "argue that repair is better than recycling." },
      { label: "C", text: "give the library's hours of operation." },
      { label: "D", text: "introduce the narrator's grandmother." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph describes the scene first and then supplies its name, so the sentence labels what has just been pictured. It makes no argument (B), gives no hours (C), and does not introduce the grandmother, who appears in the next paragraph (D).",
    diagnosticForm: 2,
    formOrder: 3,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE I, Paragraph 2, [[4]]: "She had kept it on a shelf because it once belonged to her father." Should the writer keep or delete this sentence?',
    choices: [
      {
        label: "A",
        text: "Keep, because it explains why the broken clock mattered enough to bring for repair.",
      },
      { label: "B", text: "Keep, because it describes how the clock's gears work." },
      { label: "C", text: "Delete, because the grandmother is not mentioned again." },
      { label: "D", text: "Delete, because it contradicts the essay's focus on waste." },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence gives the clock sentimental value, which explains why a long-broken object was worth repairing and supports the essay's point about mending what we own. It does not describe the gears (B); the grandmother does reappear and relevance does not require it (C); and it does not contradict the essay (D).",
    diagnosticForm: 2,
    formOrder: 4,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE I, Paragraph 2: "A volunteer named Theo opened the back, [[5]] studied the still gears, and cleaned each one with a soft brush." Which choice for [[5]] keeps the series of verbs parallel?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "studying the still gears" },
      { label: "C", text: "had studied the still gears" },
      { label: "D", text: "was studying the still gears" },
    ],
    correctAnswer: "A",
    explanation:
      "The series 'opened... studied... and cleaned' uses three simple-past verbs, so 'studied' keeps the parallel pattern. The participle 'studying,' the past-perfect 'had studied,' and the past-progressive 'was studying' all break the matching verb forms.",
    diagnosticForm: 2,
    formOrder: 5,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE I, Paragraph 2: "A volunteer named Theo opened the back, studied the still gears, and cleaned each one with a soft brush. [[6]] Slowly, the clock began to tick." Which choice for [[6]] best signals the result of Theo\'s careful work?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "However," },
      { label: "C", text: "For example," },
      { label: "D", text: "In contrast," },
    ],
    correctAnswer: "A",
    explanation:
      "'Slowly' fits because the clock starts ticking gradually as a direct result of the cleaning just described. 'However' and 'In contrast' signal opposition, and 'For example' wrongly turns the sentence into an illustration.",
    diagnosticForm: 2,
    formOrder: 6,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE I, Paragraph 3: "[[7]] Watching Theo work, I understood the cafe\'s real purpose." Which choice for [[7]] avoids a dangling modifier?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Watching Theo work, the cafe's real purpose became clear." },
      { label: "C", text: "Watching Theo work, it was clear what the cafe's purpose was." },
      { label: "D", text: "Watching Theo work, the purpose of the cafe revealed itself to me." },
    ],
    correctAnswer: "A",
    explanation:
      "The opening phrase 'Watching Theo work' must modify the person doing the watching, so the subject of the main clause has to be 'I.' Choice A supplies that subject. B makes 'purpose' the watcher, C makes the empty 'it' the watcher, and D makes 'the purpose' the watcher.",
    diagnosticForm: 2,
    formOrder: 7,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'PASSAGE I, Paragraph 3: "[[8]] Its not only about saving money or reducing waste." Which choice for [[8]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "It's" },
      { label: "C", text: "Its'" },
      { label: "D", text: "Its is" },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence needs the contraction of 'it is,' which is spelled 'it's' with an apostrophe. 'Its' is the possessive, 'Its'' is not a word, and 'Its is' is ungrammatical.",
    diagnosticForm: 2,
    formOrder: 8,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE I, Paragraph 3: "It teaches people that the things [[9]] they own can be understood and mended." Which choice for [[9]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "it owns" },
      { label: "C", text: "you own" },
      { label: "D", text: "one owns" },
    ],
    correctAnswer: "A",
    explanation:
      "The pronoun must agree with its antecedent 'people,' which is plural and in the third person, so 'they' is correct. 'It' is singular, and 'you' and 'one' shift person away from 'people.'",
    diagnosticForm: 2,
    formOrder: 9,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE I, Paragraph 3, [[10]]: The writer wants to end the essay by reinforcing its central idea. Which choice for the underlined portion best concludes the passage?',
    choices: [
      { label: "A", text: "NO CHANGE: rather than simply thrown away." },
      { label: "B", text: "rather than left in the library basement." },
      { label: "C", text: "rather than sold at the monthly book sale." },
      { label: "D", text: "rather than repaired by a professional." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay's central idea is that ordinary objects can be understood and mended instead of discarded, so 'thrown away' completes that contrast and closes the passage on its theme. B, C, and D end on incidental details that miss the essay's point about waste.",
    diagnosticForm: 2,
    formOrder: 10,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE II — "The Quiet Work of Pollinators" (science/nature) · formOrder 11-20
  //
  // [1] When people picture a pollinator, [[11]] they usually imagine a
  // honeybee. Bees are important, [[12]] but they are far from the only
  // animals that carry pollen. Beetles, moths, bats, and even some birds
  // [[13]] move pollen from flower to flower.
  //
  // [2] [[14]] A flower and its pollinator often fit together remarkably well.
  // A long, narrow blossom [[15]] may be shaped so that only a moth's slender
  // tongue can reach the nectar inside. [[16]] In return for the nectar, the
  // moth carries pollen to the next flower of the same kind.
  //
  // [3] [[17]] This partnership is easy to overlook. Most pollination happens
  // quietly, [[18]] without anyone noticing it at all. Yet roughly a third of
  // the food crops people eat [[19]] depend on animal pollinators. [[20]]
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'PASSAGE II — "The Quiet Work of Pollinators." Paragraph 1: "When people picture a pollinator, [[11]] they usually imagine a honeybee." Which choice for [[11]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "he" },
      { label: "C", text: "it" },
      { label: "D", text: "you" },
    ],
    correctAnswer: "A",
    explanation:
      "The antecedent 'people' is plural and third person, so the plural pronoun 'they' agrees. 'He' and 'it' are singular, and 'you' shifts to the second person.",
    diagnosticForm: 2,
    formOrder: 11,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 1: "Bees are important, [[12]] but they are far from the only animals that carry pollen." Which choice for [[12]] best fits the relationship between the two clauses?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "so" },
      { label: "C", text: "for" },
      { label: "D", text: "or" },
    ],
    correctAnswer: "A",
    explanation:
      "The clause concedes that bees matter and then sets that against a contrasting point, so the contrast conjunction 'but' is correct. 'So' signals result, 'for' signals cause, and 'or' signals an alternative.",
    diagnosticForm: 2,
    formOrder: 12,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'PASSAGE II, Paragraph 1: "Beetles, moths, bats, and even some birds [[13]] move pollen from flower to flower." Which choice for [[13]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "moves" },
      { label: "C", text: "is moving" },
      { label: "D", text: "has moved" },
    ],
    correctAnswer: "A",
    explanation:
      "The compound subject joined by 'and' is plural, so the plural present-tense verb 'move' agrees and fits the passage's general present tense. 'Moves' and 'is moving' are singular, and 'has moved' shifts to the present perfect.",
    diagnosticForm: 2,
    formOrder: 13,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, Paragraph 2, [[14]]: The writer wants to open this paragraph with a sentence that introduces its main idea — the close match between a flower and its pollinator. Which choice best does this?',
    choices: [
      { label: "A", text: "NO CHANGE: A flower and its pollinator often fit together remarkably well." },
      { label: "B", text: "Honeybees were brought to North America by European settlers." },
      { label: "C", text: "Nectar is a sugary liquid produced by many flowering plants." },
      { label: "D", text: "Moths are most active during the evening and night." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph illustrates how a blossom's shape suits a moth's tongue, so an opening sentence about flower and pollinator fitting together states that idea. B is unrelated history, and C and D are isolated facts that do not frame the paragraph.",
    diagnosticForm: 2,
    formOrder: 14,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 2: "A long, narrow blossom [[15]] may be shaped so that only a moth\'s slender tongue can reach the nectar inside." Which choice for [[15]] best fits a scientific explanation that allows for variation among flowers?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "is always shaped" },
      { label: "C", text: "could care less how it is shaped" },
      { label: "D", text: "will definitely be shaped" },
    ],
    correctAnswer: "A",
    explanation:
      "'May be shaped' appropriately presents a possibility, since not every long blossom matches a moth, which fits careful scientific writing. 'Is always' and 'will definitely be' overstate certainty, and C is an illogical idiom that does not fit the sentence.",
    diagnosticForm: 2,
    formOrder: 15,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 2: "...only a moth\'s slender tongue can reach the nectar inside. [[16]] In return for the nectar, the moth carries pollen to the next flower." Which choice for [[16]] best shows the exchange between flower and moth?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Despite the nectar," },
      { label: "C", text: "Long before the nectar," },
      { label: "D", text: "Instead of the nectar," },
    ],
    correctAnswer: "A",
    explanation:
      "The moth gets nectar and gives pollination in exchange, so 'In return for the nectar' names that mutual trade. 'Despite' signals contrast, 'Long before' signals time, and 'Instead of' signals substitution, none of which describes an exchange.",
    diagnosticForm: 2,
    formOrder: 16,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 65,
    prompt:
      'PASSAGE II, Paragraph 3: "[[17]] This partnership is easy to overlook. Most pollination happens quietly, without anyone noticing it at all." The sentence beginning "This partnership..." is currently the first sentence of Paragraph 3. For the most logical passage, this sentence should be:',
    choices: [
      { label: "A", text: "left where it is now." },
      { label: "B", text: "moved to the very start of the passage, before Paragraph 1." },
      { label: "C", text: "moved to the end of Paragraph 2." },
      { label: "D", text: "deleted, because it repeats Paragraph 2 word for word." },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence introduces the idea that the third paragraph develops — that pollination goes unnoticed despite its importance — so it belongs at the head of Paragraph 3. Moving it (B, C) would separate it from the support that follows, and it restates no sentence word for word (D).",
    diagnosticForm: 2,
    formOrder: 17,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE II, Paragraph 3: "Most pollination happens quietly, [[18]] without anyone noticing it at all." Which choice for [[18]] is most concise?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "without anyone noticing." },
      { label: "C", text: "without anyone at all ever noticing it." },
      { label: "D", text: "and no one notices it whatsoever in any way." },
    ],
    correctAnswer: "B",
    explanation:
      "'Quietly' already implies that the process goes unnoticed, so 'at all' merely pads the phrase; 'without anyone noticing' says the same thing cleanly. A keeps the filler, and C and D add still more redundant words.",
    diagnosticForm: 2,
    formOrder: 18,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE II, Paragraph 3: "Yet roughly a third of the food crops people eat [[19]] depend on animal pollinators." Which choice for [[19]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "depends" },
      { label: "C", text: "depending" },
      { label: "D", text: "to depend" },
    ],
    correctAnswer: "A",
    explanation:
      "The subject is the plural 'crops' (the 'a third of' phrase takes its number from the plural noun it describes), so the plural verb 'depend' agrees. 'Depends' is singular, and 'depending' and 'to depend' leave the sentence without a main verb.",
    diagnosticForm: 2,
    formOrder: 19,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE II, [[20]]: The writer wants to end the passage with a sentence that underscores why the quiet work of pollinators matters to readers. Which choice best accomplishes this?',
    choices: [
      {
        label: "A",
        text: "Without that unseen labor, our grocery shelves would look very different.",
      },
      { label: "B", text: "Honeybees can travel several miles from their hive in a single day." },
      { label: "C", text: "The word 'pollen' comes from a Latin term for fine flour." },
      { label: "D", text: "Many gardeners enjoy watching insects visit their flowers." },
    ],
    correctAnswer: "A",
    explanation:
      "The requested purpose is to stress why pollination matters to readers, and A connects that hidden work directly to the food on store shelves. B and C are isolated facts, and D notes a hobby rather than the stakes for readers.",
    diagnosticForm: 2,
    formOrder: 20,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE III — "A Mapmaker of Sound" (biography) · formOrder 21-30
  //
  // [1] Ruth Crawford Seeger is remembered today as a composer, [[21]] but for
  // much of her life she did something quieter and just as lasting. She
  // [[22]] traveled the country collecting folk songs. Working with recordings
  // [[23]] that were often scratchy and faint, she wrote the melodies down note
  // by note.
  //
  // [2] [[24]] The work demanded a remarkable ear. A singer might bend a note
  // in a way no standard symbol could capture, [[25]] so Seeger invented small
  // marks of her own to show it. Her transcriptions [[26]] preserve not just
  // the tunes but the way real people sang them.
  //
  // [3] [[27]] Seeger published hundreds of these songs in books for children
  // and teachers. [[28]] Because of her, melodies that lived only in memory
  // could be sung again by people who had never heard the original singers.
  // [[29]] She had turned passing sound into something a reader could hold.
  // [[30]]
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III — "A Mapmaker of Sound." Paragraph 1: "Ruth Crawford Seeger is remembered today as a composer, [[21]] but for much of her life she did something quieter and just as lasting." Which choice for [[21]] best fits?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "so" },
      { label: "C", text: "and therefore" },
      { label: "D", text: "because" },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence sets her public reputation against a lesser-known part of her life, so the contrast word 'but' fits. 'So' and 'and therefore' signal a result, and 'because' signals a cause.",
    diagnosticForm: 2,
    formOrder: 21,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE III, Paragraph 1: "She [[22]] traveled the country collecting folk songs." Which choice for [[22]] is most precise and appropriate for this informational biography?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "wandered around" },
      { label: "C", text: "knocked about" },
      { label: "D", text: "drifted through" },
    ],
    correctAnswer: "A",
    explanation:
      "'Traveled the country' plainly describes purposeful, wide-ranging work and fits the neutral tone of a biography. 'Wandered around,' 'knocked about,' and 'drifted through' all suggest aimlessness, which misrepresents her deliberate collecting.",
    diagnosticForm: 2,
    formOrder: 22,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE III, Paragraph 1: "Working with recordings [[23]] that were often scratchy and faint, she wrote the melodies down note by note." Which choice for [[23]] uses the correct relative pronoun?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "who were" },
      { label: "C", text: "whom were" },
      { label: "D", text: "what were" },
    ],
    correctAnswer: "A",
    explanation:
      "The relative clause modifies 'recordings,' which are things, so 'that' is correct. 'Who' and 'whom' refer to people, and 'what' cannot introduce a relative clause modifying a stated noun.",
    diagnosticForm: 2,
    formOrder: 23,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III, Paragraph 2, [[24]]: The writer wants to open this paragraph with a sentence that introduces the difficulty of Seeger\'s task. Which choice best does this?',
    choices: [
      { label: "A", text: "NO CHANGE: The work demanded a remarkable ear." },
      { label: "B", text: "Seeger was born in Ohio in 1901." },
      { label: "C", text: "Folk songs are often passed down within families." },
      { label: "D", text: "Many composers also play several instruments." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph goes on to show how hard it was to capture bent notes, so an opening that names the demand on her ear sets up that difficulty. B is biographical background, and C and D are general facts unrelated to the paragraph's focus.",
    diagnosticForm: 2,
    formOrder: 24,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 2: "A singer might bend a note in a way no standard symbol could capture, [[25]] so Seeger invented small marks of her own to show it." Which choice for [[25]] best fits the relationship between the clauses?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "but" },
      { label: "C", text: "although" },
      { label: "D", text: "or" },
    ],
    correctAnswer: "A",
    explanation:
      "Because standard symbols fell short, Seeger created her own marks — a cause-and-result relationship that 'so' expresses. 'But' and 'although' signal contrast, and 'or' signals an alternative.",
    diagnosticForm: 2,
    formOrder: 25,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 2: "Her transcriptions [[26]] preserve not just the tunes but the way real people sang them." The passage treats the lasting effect of her transcriptions as still true today. Which choice for [[26]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "preserved" },
      { label: "C", text: "will preserve" },
      { label: "D", text: "had preserved" },
    ],
    correctAnswer: "A",
    explanation:
      "The transcriptions still preserve those performances, an ongoing present-day fact, so the present-tense 'preserve' is correct. The past, future, and past-perfect forms all wrongly limit the effect to another time.",
    diagnosticForm: 2,
    formOrder: 26,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE III, Paragraph 3: "[[27]] Seeger published hundreds of these songs in books for children and teachers." Which choice for [[27]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Seeger, published hundreds of these songs" },
      { label: "C", text: "Seeger published hundreds, of these songs," },
      { label: "D", text: "Seeger published, hundreds of these songs" },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence is a single clear independent clause that needs no internal commas. B splits the subject from its verb, C inserts commas that break up the object phrase, and D separates the verb from its object.",
    diagnosticForm: 2,
    formOrder: 27,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE III, Paragraph 3: "[[28]] Because of her, melodies that lived only in memory could be sung again." Which choice for [[28]] best shows that the result followed from Seeger\'s work?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "In spite of her," },
      { label: "C", text: "Apart from her," },
      { label: "D", text: "Long before her," },
    ],
    correctAnswer: "A",
    explanation:
      "The rescued melodies are a result of Seeger's efforts, so 'Because of her' marks that cause. 'In spite of her' and 'Apart from her' signal contrast or exclusion, and 'Long before her' signals time.",
    diagnosticForm: 2,
    formOrder: 28,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE III, Paragraph 3, [[29]]: Which version of this sentence is clearest and best fits the dignified tone of the biography?',
    choices: [
      {
        label: "A",
        text: "NO CHANGE: She had turned passing sound into something a reader could hold.",
      },
      {
        label: "B",
        text: "Sound that was passing got turned by her into a thing that a reader was able to hold onto.",
      },
      {
        label: "C",
        text: "What she had done was the turning of passing sound into a holdable thing for readers.",
      },
      {
        label: "D",
        text: "Passing sound, she had turned it, into something held by a reader could be.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A states the idea in one balanced, graceful clause that suits the biography's measured tone. B is wordy and limp, C buries the verb in the noun 'turning,' and D scrambles the word order into nonsense.",
    diagnosticForm: 2,
    formOrder: 29,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE III, [[30]]: The writer wants to close the biography with a sentence that connects the essay\'s title, "A Mapmaker of Sound," to Seeger\'s achievement. Which choice best does this?',
    choices: [
      {
        label: "A",
        text: "Like a mapmaker, she gave others a way to find their way back to music that might otherwise have been lost.",
      },
      { label: "B", text: "She also composed several original works for string quartet." },
      { label: "C", text: "Folk music remains popular at festivals across the country." },
      { label: "D", text: "Her books are still found in many school libraries today." },
    ],
    correctAnswer: "A",
    explanation:
      "The title compares Seeger to a mapmaker, and A draws that comparison out by showing how her work guides others back to lost music. B returns to her composing, C is a general fact about folk music, and D, while related, does not tie back to the mapmaker image.",
    diagnosticForm: 2,
    formOrder: 30,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE IV — "Learning to Read a Trail" (workplace/career) · formOrder 31-40
  //
  // [1] My first week as a trail crew apprentice, I assumed the job was mostly
  // [[31]] about moving dirt. We did move a great deal of dirt. [[32]] But our
  // supervisor, Lin, kept telling us that the real skill was learning to read
  // the land before we touched it.
  //
  // [2] A trail, Lin explained, [[33]] is a promise to water. Every path we
  // built had to send rain somewhere safe, [[34]] or the next storm would carve
  // it into a gully. [[35]] We learned to spot the faint low lines where water
  // already wanted to go.
  //
  // [3] [[36]] By the end of the summer, I could walk a hillside and see the
  // trail before it existed. [[37]] The work had changed how I looked at
  // ordinary ground. [[38]] What had once seemed like a simple slope now showed
  // me [[39]] its hidden grain. [[40]]
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE IV — "Learning to Read a Trail." Paragraph 1: "My first week as a trail crew apprentice, I assumed the job was mostly [[31]] about moving dirt." Which choice for [[31]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "about moving dirt;" },
      { label: "C", text: "about, moving dirt" },
      { label: "D", text: "about moving dirt," },
    ],
    correctAnswer: "A",
    explanation:
      "The phrase 'about moving dirt' completes the sentence and needs no punctuation before the period. A semicolon (B) requires an independent clause after it, and the commas in C and D break up the phrase.",
    diagnosticForm: 2,
    formOrder: 31,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE IV, Paragraph 1: "We did move a great deal of dirt. [[32]] But our supervisor, Lin, kept telling us that the real skill was learning to read the land." Which choice for [[32]] best fits?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "So" },
      { label: "C", text: "Likewise," },
      { label: "D", text: "For instance," },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence sets the narrator's first assumption against Lin's correction, so the contrast word 'But' fits. 'So' signals result, 'Likewise' signals similarity, and 'For instance' signals an example.",
    diagnosticForm: 2,
    formOrder: 32,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE IV, Paragraph 2: "A trail, Lin explained, [[33]] is a promise to water." The phrase "a promise to water" is included mainly to:',
    choices: [
      {
        label: "A",
        text: "present Lin's vivid way of saying a trail must manage where rain goes.",
      },
      { label: "B", text: "explain the legal contract a trail crew signs before working." },
      { label: "C", text: "describe a stream that runs alongside the finished trail." },
      { label: "D", text: "list the tools the crew used to build the path." },
    ],
    correctAnswer: "A",
    explanation:
      "Calling a trail 'a promise to water' is a figurative way of saying the path must reliably direct rainfall, which the next sentence explains. It is not a literal legal contract (B), not a stream (C), and not a list of tools (D).",
    diagnosticForm: 2,
    formOrder: 33,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, Paragraph 2: "Every path we built had to send rain somewhere safe, [[34]] or the next storm would carve it into a gully." Which choice for [[34]] correctly joins the two independent clauses?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "the next storm would carve" },
      { label: "C", text: "or, the next storm would carve" },
      { label: "D", text: "or the next storm, would carve" },
    ],
    correctAnswer: "A",
    explanation:
      "A comma plus the coordinating conjunction 'or' correctly joins two independent clauses. B drops the conjunction and leaves a comma splice, C adds a stray comma after 'or,' and D inserts a comma between subject and verb.",
    diagnosticForm: 2,
    formOrder: 34,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE IV, Paragraph 2: "[[35]] We learned to spot the faint low lines where water already wanted to go." Which choice for the underlined portion is most concise?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      {
        label: "B",
        text: "We learned and came to know how to spot the faint low lines where water already wanted to go.",
      },
      {
        label: "C",
        text: "We learned to spot, find, and notice the faint low lines where water already wanted to go.",
      },
      {
        label: "D",
        text: "We learned how to spot the faint low lines, the ones where water already in advance wanted to go.",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A states the idea once, cleanly. B pads with the redundant 'and came to know,' C piles up the synonyms 'spot, find, and notice,' and D adds the redundant 'in advance' to 'already.'",
    diagnosticForm: 2,
    formOrder: 35,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE IV, Paragraph 3: "[[36]] By the end of the summer, I could walk a hillside and see the trail before it existed." Which choice for [[36]] best signals the passage of time across the season?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "On the other hand," },
      { label: "C", text: "In contrast," },
      { label: "D", text: "Nonetheless," },
    ],
    correctAnswer: "A",
    explanation:
      "'By the end of the summer' marks the span of time over which the narrator's skill developed, which the sentence needs. The other choices all signal contrast, which does not fit a description of steady progress.",
    diagnosticForm: 2,
    formOrder: 36,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE IV, Paragraph 3, [[37]]: "The work had changed how I looked at ordinary ground." Which alternative to the underlined sentence is a comma splice?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      {
        label: "B",
        text: "The work had changed me, I looked at ordinary ground differently now.",
      },
      {
        label: "C",
        text: "The work had changed how I looked at ordinary ground, and the change lasted.",
      },
      {
        label: "D",
        text: "Because the work had changed me, I looked at ordinary ground differently.",
      },
    ],
    correctAnswer: "B",
    explanation:
      "The question asks which version is a comma splice. Choice B joins two independent clauses with only a comma. A is one clause, C joins clauses with a comma plus 'and,' and D uses a dependent clause before the main clause.",
    diagnosticForm: 2,
    formOrder: 37,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE IV, Paragraph 3: The paragraph\'s sentences currently run: (1) "By the end of the summer, I could walk a hillside and see the trail before it existed." (2) "The work had changed how I looked at ordinary ground." (3) "What had once seemed like a simple slope now showed me its hidden grain." Sentence [[38]] is sentence (3). For the most logical paragraph, sentence (3) should be:',
    choices: [
      { label: "A", text: "left where it is, as the last sentence." },
      { label: "B", text: "moved so that it becomes the first sentence." },
      { label: "C", text: "moved so that it appears between sentences (1) and (2)." },
      { label: "D", text: "deleted, because it repeats sentence (1) word for word." },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence (3) gives the most specific, vivid illustration of the changed vision sentence (2) describes, so it works best as the closing image. Moving it earlier (B, C) would precede the general statement it illustrates, and it repeats no sentence word for word (D).",
    diagnosticForm: 2,
    formOrder: 38,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'PASSAGE IV, Paragraph 3: "What had once seemed like a simple slope now showed me [[39]] its hidden grain." Which choice for [[39]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "it's" },
      { label: "C", text: "their" },
      { label: "D", text: "its'" },
    ],
    correctAnswer: "A",
    explanation:
      "The possessive form of 'it' is 'its,' with no apostrophe, and it agrees with the singular 'slope.' 'It's' is the contraction of 'it is,' 'their' is plural, and 'its'' is not a word.",
    diagnosticForm: 2,
    formOrder: 39,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE IV, [[40]]: The writer wants to end the essay with a sentence that reflects on what the apprenticeship taught beyond trail building. Which choice best concludes the passage?',
    choices: [
      {
        label: "A",
        text: "Lin had not just taught me to build trails; she had taught me to see.",
      },
      { label: "B", text: "The crew finished three miles of new trail that summer." },
      { label: "C", text: "Trail work is physically demanding and pays modestly." },
      { label: "D", text: "I returned to the same trailhead the following June." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay builds toward the idea that the work changed how the narrator perceives land, and A names that larger lesson — learning to see. B is a project statistic, C is a general comment on the job, and D is a flat logistical detail.",
    diagnosticForm: 2,
    formOrder: 40,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE V — "The Last Letterpress" (humanities/arts essay) · formOrder 41-50
  //
  // [1] In a narrow shop two blocks from the train station, Mr. Adler still
  // prints wedding invitations on a press built in 1911. [[41]] The machine,
  // which weighs nearly a ton, fills half the room. [[42]] Most printers gave
  // up such presses decades ago.
  //
  // [2] [[43]] I asked Adler why he had kept his. He set a card in my hand and
  // told me to run my thumb across it. Where a modern printer leaves a flat,
  // [[44]] glossy surface, the letterpress had pressed each letter slightly
  // into the paper. [[45]] You could feel the words.
  //
  // [3] [[46]] Adler admits the old method is slow. A single invitation can
  // take him an afternoon. [[47]] But his customers, he says, are not paying
  // only for the words on the card. [[48]] They are paying for the faint
  // impression a finger can trace, [[49]] for proof that a human hand made
  // something just for them. [[50]]
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE V — "The Last Letterpress." Paragraph 1: "[[41]] The machine, which weighs nearly a ton, fills half the room." Which choice for [[41]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The machine which weighs nearly a ton" },
      { label: "C", text: "The machine, which weighs nearly a ton" },
      { label: "D", text: "The machine which weighs nearly a ton," },
    ],
    correctAnswer: "A",
    explanation:
      "The clause 'which weighs nearly a ton' is non-restrictive and must be set off by a comma on each side. B drops both commas, C drops the closing comma, and D drops the opening comma.",
    diagnosticForm: 2,
    formOrder: 41,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE V, Paragraph 1: "[[42]] Most printers gave up such presses decades ago." Which choice for [[42]] is correct in this sentence about a change completed in the past?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "give up" },
      { label: "C", text: "are giving up" },
      { label: "D", text: "will give up" },
    ],
    correctAnswer: "A",
    explanation:
      "The phrase 'decades ago' places the action firmly in the past, so the simple past 'gave up' is correct. The present 'give up,' present-progressive 'are giving up,' and future 'will give up' all clash with 'decades ago.'",
    diagnosticForm: 2,
    formOrder: 42,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE V, Paragraph 2, [[43]]: The writer wants to begin this paragraph with a sentence that sets up the explanation the rest of the paragraph gives. Which choice best does this?',
    choices: [
      { label: "A", text: "NO CHANGE: I asked Adler why he had kept his." },
      { label: "B", text: "The train station was built in the same decade as the press." },
      { label: "C", text: "Wedding invitations come in many sizes and colors." },
      { label: "D", text: "Adler has run the shop for more than forty years." },
    ],
    correctAnswer: "A",
    explanation:
      "The rest of the paragraph answers why Adler keeps his press, so an opening that poses that question sets the explanation up. B is an unrelated fact about the station, C is a general comment on invitations, and D is biographical background that does not frame the answer.",
    diagnosticForm: 2,
    formOrder: 43,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE V, Paragraph 2: "Where a modern printer leaves a flat, [[44]] glossy surface, the letterpress had pressed each letter slightly into the paper." Which choice for [[44]] best contrasts with the textured letterpress result?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "expensive" },
      { label: "C", text: "colorful" },
      { label: "D", text: "temporary" },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence contrasts a smooth modern page with the dented letterpress page, so 'glossy,' which describes a flat, slick surface, completes the contrast. 'Expensive,' 'colorful,' and 'temporary' describe other qualities that have nothing to do with texture.",
    diagnosticForm: 2,
    formOrder: 44,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE V, Paragraph 2, [[45]]: "You could feel the words." Which alternative to the underlined sentence is a sentence fragment?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The words themselves, something you could actually feel." },
      { label: "C", text: "You could feel the words with your fingertips." },
      { label: "D", text: "The words could be felt." },
    ],
    correctAnswer: "B",
    explanation:
      "The question asks which version is a fragment. Choice B has a noun phrase ('The words themselves') and an appositive but no main verb, so it never makes a complete statement. A, C, and D each contain a subject and a finite verb.",
    diagnosticForm: 2,
    formOrder: 45,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'PASSAGE V, Paragraph 3: "[[46]] Adler admits the old method is slow. A single invitation can take him an afternoon." Which choice for [[46]] is correct?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Adler admits, the old method is slow." },
      { label: "C", text: "Adler admits the old method, is slow." },
      { label: "D", text: "Adler, admits the old method is slow." },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence is one clear independent clause with a noun clause as its object and needs no internal commas. B and C insert commas that break the verb from its clause, and D splits the subject from the verb.",
    diagnosticForm: 2,
    formOrder: 46,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'PASSAGE V, Paragraph 3: "A single invitation can take him an afternoon. [[47]] But his customers, he says, are not paying only for the words on the card." Which choice for [[47]] best fits?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Therefore," },
      { label: "C", text: "Likewise," },
      { label: "D", text: "Meanwhile," },
    ],
    correctAnswer: "A",
    explanation:
      "The slowness might seem like a drawback, but the sentence reframes it as worthwhile, so the contrast word 'But' fits. 'Therefore' signals result, 'Likewise' signals similarity, and 'Meanwhile' signals simultaneous time.",
    diagnosticForm: 2,
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
        text: "NO CHANGE: They are paying for the faint impression a finger can trace,",
      },
      {
        label: "B",
        text: "What they are paying for is the faint impression, this being something a finger is able to do the tracing of,",
      },
      {
        label: "C",
        text: "The faint impression, traceable by a finger, is the thing being paid for by them,",
      },
      {
        label: "D",
        text: "For the faint impression, which a finger traces, is what the paying they do is for,",
      },
    ],
    correctAnswer: "A",
    explanation:
      "Choice A states the idea in one clean clause with natural word order that suits the essay's quiet tone. B is wordy and clumsy, C shifts to a flat passive construction, and D scrambles the word order awkwardly.",
    diagnosticForm: 2,
    formOrder: 48,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'PASSAGE V, Paragraph 3: "They are paying for the faint impression a finger can trace, [[49]] for proof that a human hand made something just for them." Which choice for [[49]] keeps the two phrases parallel?',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "and proof that a human hand made something" },
      { label: "C", text: "proving that a human hand made something" },
      { label: "D", text: "which proves a human hand made something" },
    ],
    correctAnswer: "A",
    explanation:
      "The sentence lists two things customers pay 'for,' so each item should begin with 'for': 'for the faint impression... for proof....' B drops the parallel 'for,' and C and D switch to a participle and a relative clause that break the matching structure.",
    diagnosticForm: 2,
    formOrder: 49,
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 55,
    prompt:
      'PASSAGE V, [[50]]: The writer wants to end the essay with a sentence that captures why Adler\'s slow craft still matters. Which choice best concludes the passage?',
    choices: [
      {
        label: "A",
        text: "In an age of instant printing, that small, deliberate mark is the rarest thing he sells.",
      },
      { label: "B", text: "The shop is open Tuesday through Saturday each week." },
      { label: "C", text: "Adler learned the trade from his uncle as a teenager." },
      { label: "D", text: "Letterpress printing was once the standard method everywhere." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay argues that the felt, handmade mark is what gives Adler's work value, and A names that mark as the rarest thing he sells, closing on the theme. B is store hours, C is biographical background, and D is general history.",
    diagnosticForm: 2,
    formOrder: 50,
  },

  // ═════════════════════════════════════════════════════════════════════════
  // ADAPTIVE PRACTICE BANK  (152 standalone items, no diagnosticForm/formOrder)
  // All 13 English subSkills, 11-14 items each. Difficulty mix ~20/60/20.
  // ═════════════════════════════════════════════════════════════════════════

  // ── punctuation (13) ──────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Which choice correctly punctuates the sentence? "After the rain stopped ___ the children went outside."',
    choices: [
      { label: "A", text: "stopped the children" },
      { label: "B", text: "stopped, the children" },
      { label: "C", text: "stopped; the children" },
      { label: "D", text: "stopped: the children" },
    ],
    correctAnswer: "B",
    explanation:
      "An introductory dependent clause ('After the rain stopped') is followed by a comma before the main clause. A omits the comma, and a semicolon (C) or colon (D) cannot follow an introductory dependent clause.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Which choice is correctly punctuated? "The committee reviewed three proposals ___ none of them met the budget."',
    choices: [
      { label: "A", text: "proposals, none" },
      { label: "B", text: "proposals none" },
      { label: "C", text: "proposals; none" },
      { label: "D", text: "proposals: none," },
    ],
    correctAnswer: "C",
    explanation:
      "Two independent clauses must be separated by a semicolon (or a period). A comma alone (A) makes a splice, B fuses the clauses, and the colon plus stray comma in D is incorrect.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Which sentence uses the apostrophe correctly?',
    choices: [
      { label: "A", text: "The childrens' coats were left on the bus." },
      { label: "B", text: "The children's coats were left on the bus." },
      { label: "C", text: "The childrens coats were left on the bus." },
      { label: "D", text: "The childrens's coats were left on the bus." },
    ],
    correctAnswer: "B",
    explanation:
      "'Children' is already plural, so the possessive adds apostrophe + s: 'children's.' A treats 'childrens' as if it were the plural, C omits the apostrophe, and D doubles the s.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice correctly punctuates the sentence? "The museum has one famous exhibit ___ a meteorite found in 1894."',
    choices: [
      { label: "A", text: "exhibit, a meteorite" },
      { label: "B", text: "exhibit; a meteorite" },
      { label: "C", text: "exhibit: a meteorite" },
      { label: "D", text: "exhibit a meteorite" },
    ],
    correctAnswer: "C",
    explanation:
      "A colon follows a complete independent clause to introduce an explanation or appositive ('a meteorite found in 1894'). A comma (A) is weaker and less precise here, a semicolon (B) requires a second independent clause, and D leaves the appositive unpunctuated.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice is correctly punctuated? "My cousin ___ who lives in Denver ___ visits us every spring."',
    choices: [
      { label: "A", text: "cousin who lives in Denver visits" },
      { label: "B", text: "cousin, who lives in Denver, visits" },
      { label: "C", text: "cousin who lives in Denver, visits" },
      { label: "D", text: "cousin, who lives in Denver visits" },
    ],
    correctAnswer: "B",
    explanation:
      "'Who lives in Denver' is a non-restrictive clause adding extra detail about one specific cousin, so it needs a comma on each side. A omits both commas, and C and D each supply only one.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice correctly uses a dash? "Only one ingredient ___ saffron ___ made the dish expensive."',
    choices: [
      { label: "A", text: "ingredient, saffron, made" },
      { label: "B", text: "ingredient — saffron — made" },
      { label: "C", text: "ingredient — saffron, made" },
      { label: "D", text: "ingredient, saffron — made" },
    ],
    correctAnswer: "B",
    explanation:
      "A pair of dashes can set off an interrupting appositive, and the punctuation must match on both sides. A is acceptable with commas but the prompt asks for a dash; C and D mismatch a dash with a comma, which is never correct.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which sentence is correctly punctuated?',
    choices: [
      { label: "A", text: "She packed sandwiches, fruit, and water and left." },
      { label: "B", text: "She packed sandwiches fruit and water, and left." },
      { label: "C", text: "She packed, sandwiches, fruit, and water and left." },
      { label: "D", text: "She packed sandwiches, fruit and water and, left." },
    ],
    correctAnswer: "A",
    explanation:
      "Items in a series take commas between them, and the final 'and left' is a second verb needing no comma before it. B omits the series commas, C inserts a comma after 'packed,' and D adds a stray comma after 'and.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice is correctly punctuated? "The report was thorough ___ however ___ it arrived two days late."',
    choices: [
      { label: "A", text: "thorough, however, it" },
      { label: "B", text: "thorough; however, it" },
      { label: "C", text: "thorough however, it" },
      { label: "D", text: "thorough, however it" },
    ],
    correctAnswer: "B",
    explanation:
      "When 'however' joins two independent clauses, a semicolon precedes it and a comma follows it. A creates a comma splice, C omits the semicolon, and D omits the comma after 'however.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which sentence correctly uses the apostrophe?',
    choices: [
      { label: "A", text: "The bus's route changed, but it's schedule stayed the same." },
      { label: "B", text: "The buss route changed, but its schedule stayed the same." },
      { label: "C", text: "The bus's route changed, but its schedule stayed the same." },
      { label: "D", text: "The bus' route changed, but its' schedule stayed the same." },
    ],
    correctAnswer: "C",
    explanation:
      "A singular noun ending in s takes apostrophe + s ('bus's'), and the possessive of 'it' is 'its' with no apostrophe. A wrongly uses the contraction 'it's,' B drops the apostrophe from 'bus's,' and D mispunctuates both words.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which choice correctly punctuates the sentence? "The author visited three cities ___ Lima ___ Peru ___ Quito ___ Ecuador ___ and Bogota ___ Colombia."',
    choices: [
      { label: "A", text: "cities: Lima, Peru; Quito, Ecuador; and Bogota, Colombia." },
      { label: "B", text: "cities, Lima, Peru, Quito, Ecuador, and Bogota, Colombia." },
      { label: "C", text: "cities; Lima, Peru, Quito, Ecuador, and Bogota, Colombia." },
      { label: "D", text: "cities: Lima Peru, Quito Ecuador, and Bogota Colombia." },
    ],
    correctAnswer: "A",
    explanation:
      "When list items themselves contain commas (city, country), semicolons separate the items, and a colon introduces the list. B uses only commas, which blurs the items; C wrongly uses a semicolon to introduce the list; and D drops the comma between city and country.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which sentence is correctly punctuated?',
    choices: [
      { label: "A", text: "The election results, which surprised everyone, were announced at noon." },
      { label: "B", text: "The election results which surprised everyone, were announced at noon." },
      { label: "C", text: "The election results, which surprised everyone were announced at noon." },
      { label: "D", text: "The election results which surprised everyone were announced, at noon." },
    ],
    correctAnswer: "A",
    explanation:
      "The non-restrictive clause 'which surprised everyone' is set off by a comma on each side. B and C each provide only one comma, and D omits both clause commas while inserting a stray comma before 'at noon.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which choice correctly punctuates the sentence? "We had one goal ___ to finish the trail before dark ___ and we nearly missed it."',
    choices: [
      { label: "A", text: "goal: to finish the trail before dark, and" },
      { label: "B", text: "goal, to finish the trail before dark, and" },
      { label: "C", text: "goal; to finish the trail before dark; and" },
      { label: "D", text: "goal: to finish the trail before dark; and" },
    ],
    correctAnswer: "A",
    explanation:
      "A colon introduces the appositive 'to finish the trail before dark' after a complete clause, and a comma plus 'and' then joins the second independent clause. B uses a comma where a colon is clearer, and C and D misuse semicolons around the appositive.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "punctuation",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Which sentence is punctuated correctly?',
    choices: [
      { label: "A", text: "The professor, who I admire most, teaches geology, her lectures are unforgettable." },
      { label: "B", text: "The professor whom I admire most teaches geology; her lectures are unforgettable." },
      { label: "C", text: "The professor, whom I admire most teaches geology; her lectures are unforgettable." },
      { label: "D", text: "The professor whom I admire most, teaches geology, her lectures are unforgettable." },
    ],
    correctAnswer: "B",
    explanation:
      "'Whom I admire most' is a restrictive clause identifying which professor, so it takes no commas, and the two independent clauses are joined by a semicolon. A creates a comma splice, C inserts only one comma around a restrictive clause, and D both mispunctuates the clause and splices.",
  },

  // ── sentence_structure (13) ───────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt: 'Which of the following is a complete sentence?',
    choices: [
      { label: "A", text: "Because the storm knocked out the power." },
      { label: "B", text: "Running quickly toward the open door." },
      { label: "C", text: "The lights flickered twice." },
      { label: "D", text: "Which we had not expected at all." },
    ],
    correctAnswer: "C",
    explanation:
      "A complete sentence needs a subject and a finite verb and must express a complete thought. C has the subject 'lights' and the verb 'flickered.' A and D are dependent clauses, and B is a participial phrase.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Which choice best fixes the run-on? "The trail was steep we rested often."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The trail was steep, we rested often." },
      { label: "C", text: "The trail was steep, so we rested often." },
      { label: "D", text: "The trail was steep we rested, often." },
    ],
    correctAnswer: "C",
    explanation:
      "Two independent clauses can be joined by a comma plus a coordinating conjunction. A is a fused sentence, B is a comma splice, and D leaves the fusion uncorrected while adding a stray comma.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Which choice best fixes the fragment? "Whenever the bakery opens early."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Whenever the bakery opens early, a line forms outside." },
      { label: "C", text: "Whenever the bakery opens early; a line." },
      { label: "D", text: "The bakery opens early. Whenever." },
    ],
    correctAnswer: "B",
    explanation:
      "The dependent clause 'Whenever the bakery opens early' needs an independent clause to complete it. B adds 'a line forms outside.' C still lacks a main clause, and D leaves 'Whenever' stranded as a fragment.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice corrects the comma splice? "The recipe looked simple, it took three hours to prepare."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "simple it took" },
      { label: "C", text: "simple, but it took" },
      { label: "D", text: "simple, it took," },
    ],
    correctAnswer: "C",
    explanation:
      "A coordinating conjunction such as 'but' added after the comma properly joins the two independent clauses and signals the contrast. A is the splice, B fuses the clauses, and D adds a stray comma.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice fixes the faulty subordination? "Although the bridge was repaired, but drivers still avoided it."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Although the bridge was repaired, drivers still avoided it." },
      { label: "C", text: "Although the bridge was repaired, however drivers still avoided it." },
      { label: "D", text: "The bridge was repaired, although but drivers still avoided it." },
    ],
    correctAnswer: "B",
    explanation:
      "'Although' already signals contrast, so adding 'but' (or 'however') doubles the contrast word. B keeps only 'Although.' C still doubles with 'however,' and D garbles the construction.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice is a sentence fragment?',
    choices: [
      { label: "A", text: "The volunteers arrived before dawn." },
      { label: "B", text: "Most of the seats were already taken." },
      { label: "C", text: "A long, careful explanation of the rules." },
      { label: "D", text: "The teacher answered every question." },
    ],
    correctAnswer: "C",
    explanation:
      "C is a noun phrase with no finite verb, so it expresses no complete thought. A, B, and D each have a subject and a finite verb.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice best fixes the run-on? "The museum closed early the staff had a meeting."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The museum closed early; the staff had a meeting." },
      { label: "C", text: "The museum closed early, the staff had a meeting." },
      { label: "D", text: "The museum closed early the staff, had a meeting." },
    ],
    correctAnswer: "B",
    explanation:
      "A semicolon correctly joins two closely related independent clauses. A is fused, C is a comma splice, and D leaves the fusion and adds a stray comma.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice best fixes the fragment? "The scientist studying coral reefs for nearly a decade."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The scientist has studied coral reefs for nearly a decade." },
      { label: "C", text: "The scientist, studying coral reefs for nearly a decade." },
      { label: "D", text: "Studying coral reefs, the scientist for nearly a decade." },
    ],
    correctAnswer: "B",
    explanation:
      "The original has no finite main verb — 'studying' is a participle. B supplies the finite verb 'has studied.' C and D keep the participle and never form a complete predicate.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Which choice correctly joins the two ideas? "The experiment failed twice. The team refused to give up."',
    choices: [
      { label: "A", text: "The experiment failed twice, the team refused to give up." },
      { label: "B", text: "The experiment failed twice the team refused to give up." },
      { label: "C", text: "Although the experiment failed twice, the team refused to give up." },
      { label: "D", text: "The experiment failed twice and, the team refused to give up." },
    ],
    correctAnswer: "C",
    explanation:
      "Subordinating the first clause with 'Although' joins the ideas and shows the contrast. A is a comma splice, B is fused, and D misplaces the comma after 'and.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which choice is a complete, correctly built sentence?',
    choices: [
      { label: "A", text: "The novel that won the prize, which surprised the critics who had ignored it." },
      { label: "B", text: "The novel that won the prize surprised the critics who had ignored it." },
      { label: "C", text: "The novel that won the prize, surprised the critics, who had ignored it." },
      { label: "D", text: "The novel won the prize, surprising the critics, who had ignored it, and." },
    ],
    correctAnswer: "B",
    explanation:
      "B has the subject 'novel,' the main verb 'surprised,' and two correctly attached restrictive clauses. A has no main verb, C splits the subject from the verb with a comma, and D ends with a dangling 'and.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which choice corrects the faulty coordination? "The hikers were exhausted, and they reached the summit at last."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The hikers were exhausted, but they reached the summit at last." },
      { label: "C", text: "The hikers were exhausted, so they reached the summit at last." },
      { label: "D", text: "The hikers were exhausted, for they reached the summit at last." },
    ],
    correctAnswer: "B",
    explanation:
      "Reaching the summit despite exhaustion is a contrast, so 'but' is the logical conjunction. 'And' merely adds, 'so' wrongly makes exhaustion the cause of reaching the summit, and 'for' wrongly makes it the reason.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Which choice is a fused (run-on) sentence?',
    choices: [
      { label: "A", text: "The river rose overnight; the campers moved to higher ground." },
      { label: "B", text: "The river rose overnight, so the campers moved to higher ground." },
      { label: "C", text: "The river rose overnight the campers moved to higher ground." },
      { label: "D", text: "When the river rose overnight, the campers moved to higher ground." },
    ],
    correctAnswer: "C",
    explanation:
      "C jams two independent clauses together with no punctuation or conjunction, the definition of a fused sentence. A uses a semicolon, B uses a comma plus 'so,' and D subordinates the first clause.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "sentence_structure",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Which revision is both complete and free of faulty subordination? "Even though the funding was approved, however the project still stalled, because the permits were delayed."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Even though the funding was approved, the project still stalled because the permits were delayed." },
      { label: "C", text: "Even though the funding was approved, the project still stalled, because of the permits were delayed." },
      { label: "D", text: "The funding was approved, however, even though the project stalled because the permits delayed." },
    ],
    correctAnswer: "B",
    explanation:
      "The original doubles the contrast with both 'Even though' and 'however.' B keeps one contrast word and cleanly subordinates the cause with 'because.' C adds 'of' before a clause, and D scrambles the logic and leaves a fragment.",
  },

  // ── verb_tense (11) ───────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the correct verb: "Yesterday the team ___ its final practice before the tournament."',
    choices: [
      { label: "A", text: "holds" },
      { label: "B", text: "held" },
      { label: "C", text: "will hold" },
      { label: "D", text: "holding" },
    ],
    correctAnswer: "B",
    explanation:
      "'Yesterday' marks a completed past action, so the simple past 'held' is correct. 'Holds' is present, 'will hold' is future, and 'holding' is not a finite verb.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct verb: "Every morning the bakery ___ the smell of fresh bread into the street."',
    choices: [
      { label: "A", text: "sent" },
      { label: "B", text: "sends" },
      { label: "C", text: "will send" },
      { label: "D", text: "had sent" },
    ],
    correctAnswer: "B",
    explanation:
      "'Every morning' signals a habitual action, which standard English states in the simple present, so 'sends' is correct. The past, future, and past-perfect forms misrepresent a recurring routine.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the verb that keeps the tense consistent: "She opened the journal, read the first page, and ___ at the date."',
    choices: [
      { label: "A", text: "stares" },
      { label: "B", text: "will stare" },
      { label: "C", text: "stared" },
      { label: "D", text: "is staring" },
    ],
    correctAnswer: "C",
    explanation:
      "The series 'opened... read... and stared' uses the simple past consistently. The present, future, and present-progressive forms all create an unwarranted tense shift within the series.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct verb: "By the time the guests arrived, the host ___ the entire meal."',
    choices: [
      { label: "A", text: "cooked" },
      { label: "B", text: "had cooked" },
      { label: "C", text: "cooks" },
      { label: "D", text: "has cooked" },
    ],
    correctAnswer: "B",
    explanation:
      "The past perfect 'had cooked' shows an action completed before another past action ('arrived'). Simple past 'cooked' fails to show the earlier completion, and the present and present-perfect forms clash with the past narrative.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct verb: "The library ___ its hours since the new wing opened last year."',
    choices: [
      { label: "A", text: "extended" },
      { label: "B", text: "extends" },
      { label: "C", text: "has extended" },
      { label: "D", text: "will extend" },
    ],
    correctAnswer: "C",
    explanation:
      "'Since' with a past starting point calls for the present perfect, so 'has extended' links the past change to the present. Simple past 'extended' loses that connection, and the present and future forms do not fit 'since last year.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the verb that avoids an inappropriate shift in voice: "The committee reviewed the budget, and then a new plan ___."',
    choices: [
      { label: "A", text: "was proposed by them" },
      { label: "B", text: "they proposed" },
      { label: "C", text: "it proposed" },
      { label: "D", text: "the committee proposed it" },
    ],
    correctAnswer: "B",
    explanation:
      "The first clause is active ('The committee reviewed'), so the second should stay active to avoid an awkward shift to the passive voice. 'They proposed' keeps the active voice; A shifts to passive, C uses an illogical 'it,' and D is wordy and repeats the subject.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct verb: "Water ___ at one hundred degrees Celsius at sea level."',
    choices: [
      { label: "A", text: "boiled" },
      { label: "B", text: "boils" },
      { label: "C", text: "will boil" },
      { label: "D", text: "had boiled" },
    ],
    correctAnswer: "B",
    explanation:
      "A general scientific fact is stated in the simple present, so 'boils' is correct. The past, future, and past-perfect forms wrongly limit a timeless truth to a particular time.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct verb: "Neither the manager nor the clerks ___ aware of the schedule change."',
    choices: [
      { label: "A", text: "was" },
      { label: "B", text: "were" },
      { label: "C", text: "is" },
      { label: "D", text: "has been" },
    ],
    correctAnswer: "B",
    explanation:
      "With 'neither...nor,' the verb agrees with the nearer subject, which is the plural 'clerks,' so 'were' is correct. 'Was,' 'is,' and 'has been' are singular and do not agree with 'clerks.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the correct verb: "If the shipment ___ on time, the store would not have run out of supplies."',
    choices: [
      { label: "A", text: "arrived" },
      { label: "B", text: "had arrived" },
      { label: "C", text: "would arrive" },
      { label: "D", text: "arrives" },
    ],
    correctAnswer: "B",
    explanation:
      "A past unreal conditional uses 'had + past participle' in the if-clause to match 'would not have run out' in the main clause. Simple past 'arrived' is too weak, and 'would arrive' and 'arrives' do not fit the past contrary-to-fact meaning.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the correct verb: "The director insisted that every actor ___ present at the rehearsal."',
    choices: [
      { label: "A", text: "is" },
      { label: "B", text: "was" },
      { label: "C", text: "be" },
      { label: "D", text: "will be" },
    ],
    correctAnswer: "C",
    explanation:
      "A demand or insistence triggers the subjunctive, which uses the base form 'be' regardless of subject. 'Is,' 'was,' and 'will be' are indicative forms that do not fit the verb 'insisted that.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "verb_tense",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the verb sequence that is correct: "By next spring, the crew ___ on the tunnel for three full years."',
    choices: [
      { label: "A", text: "works" },
      { label: "B", text: "will have been working" },
      { label: "C", text: "had been working" },
      { label: "D", text: "has worked" },
    ],
    correctAnswer: "B",
    explanation:
      "An action continuing up to a point in the future ('by next spring') for a span of time takes the future perfect progressive, 'will have been working.' The present, past-perfect, and present-perfect forms do not place the duration in the future.",
  },

  // ── pronouns (12) ─────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the correct pronoun: "The dog wagged ___ tail when the door opened."',
    choices: [
      { label: "A", text: "it's" },
      { label: "B", text: "its" },
      { label: "C", text: "their" },
      { label: "D", text: "its'" },
    ],
    correctAnswer: "B",
    explanation:
      "'Its' is the singular possessive that agrees with 'dog.' 'It's' is the contraction of 'it is,' 'their' is plural, and 'its'' is not a word.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct pronoun: "Each of the students must bring ___ own laptop to the exam."',
    choices: [
      { label: "A", text: "their" },
      { label: "B", text: "they're" },
      { label: "C", text: "his or her" },
      { label: "D", text: "its" },
    ],
    correctAnswer: "C",
    explanation:
      "'Each' is singular, so in formal ACT English the pronoun is the singular 'his or her.' 'Their' is plural, 'they're' is a contraction, and 'its' cannot refer to people.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct pronoun: "The award was shared between Maria and ___."',
    choices: [
      { label: "A", text: "I" },
      { label: "B", text: "me" },
      { label: "C", text: "myself" },
      { label: "D", text: "mine" },
    ],
    correctAnswer: "B",
    explanation:
      "The pronoun is the object of the preposition 'between,' so the objective case 'me' is correct. 'I' is subjective, 'myself' is a reflexive used only when the subject acts on itself, and 'mine' is possessive.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct pronoun: "The team celebrated ___ first championship in twenty years."',
    choices: [
      { label: "A", text: "their" },
      { label: "B", text: "its" },
      { label: "C", text: "it's" },
      { label: "D", text: "they're" },
    ],
    correctAnswer: "B",
    explanation:
      "A collective noun like 'team' acting as a single unit takes the singular 'its.' 'Their' treats the team as plural members, and 'it's' and 'they're' are contractions, not possessives.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the option that corrects the vague pronoun reference: "When Carla met Priya, she had just returned from Japan."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "she, Carla, had just returned" },
      { label: "C", text: "Priya had just returned from Japan when Carla met her." },
      { label: "D", text: "she just returned from Japan" },
    ],
    correctAnswer: "C",
    explanation:
      "In the original, 'she' could mean Carla or Priya. C rewrites the sentence so the pronoun 'her' clearly refers to Priya, who is named first. A leaves the ambiguity, B is clumsy, and D still leaves 'she' unclear.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct pronoun: "It was ___ who first noticed the error in the report."',
    choices: [
      { label: "A", text: "her" },
      { label: "B", text: "she" },
      { label: "C", text: "herself" },
      { label: "D", text: "hers" },
    ],
    correctAnswer: "B",
    explanation:
      "After a linking verb ('was'), the pronoun is a predicate nominative and takes the subjective case 'she.' 'Her' is objective, 'herself' is reflexive, and 'hers' is possessive.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct pronoun: "Anyone who wants a refund must keep ___ receipt."',
    choices: [
      { label: "A", text: "their" },
      { label: "B", text: "his or her" },
      { label: "C", text: "they're" },
      { label: "D", text: "our" },
    ],
    correctAnswer: "B",
    explanation:
      "'Anyone' is a singular indefinite pronoun, so formal English uses the singular 'his or her.' 'Their' is plural, 'they're' is a contraction, and 'our' shifts person.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct relative pronoun: "The scientist ___ discovery changed the field never sought fame."',
    choices: [
      { label: "A", text: "who's" },
      { label: "B", text: "whose" },
      { label: "C", text: "whom" },
      { label: "D", text: "that" },
    ],
    correctAnswer: "B",
    explanation:
      "The clause needs the possessive relative pronoun 'whose' to show the discovery belongs to the scientist. 'Who's' is the contraction of 'who is,' 'whom' is an object pronoun, and 'that' cannot show possession.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct pronoun: "My brother and ___ repainted the fence over the weekend."',
    choices: [
      { label: "A", text: "me" },
      { label: "B", text: "I" },
      { label: "C", text: "myself" },
      { label: "D", text: "him" },
    ],
    correctAnswer: "B",
    explanation:
      "The pronoun is part of the compound subject performing the verb 'repainted,' so the subjective case 'I' is correct. 'Me' and 'him' are objective, and 'myself' is reflexive.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the correct pronoun: "The judges gave the prize to ___ had practiced the longest."',
    choices: [
      { label: "A", text: "whomever" },
      { label: "B", text: "whoever" },
      { label: "C", text: "whom" },
      { label: "D", text: "who's" },
    ],
    correctAnswer: "B",
    explanation:
      "The pronoun is the subject of the verb 'had practiced' within its clause, so the subjective 'whoever' is correct, even though the whole clause is the object of 'to.' 'Whomever' and 'whom' are objective, and 'who's' is a contraction.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the option that corrects the pronoun reference: "The new software crashed the laptop, but the technician fixed it quickly."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "the technician fixed the laptop quickly." },
      { label: "C", text: "the technician quickly fixed them." },
      { label: "D", text: "it was fixed quickly by the technician." },
    ],
    correctAnswer: "B",
    explanation:
      "In the original 'it' could refer to the software or the laptop. B replaces the vague pronoun with the noun 'laptop' to make the reference clear. A keeps the ambiguity, C wrongly uses the plural 'them,' and D still relies on the unclear 'it.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "pronouns",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the option that best corrects the faulty pronoun shift: "When a traveler plans a long trip, you should research local customs before you go."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "they should research local customs before they go." },
      { label: "C", text: "a traveler should research local customs before traveling." },
      { label: "D", text: "one should research local customs before you go." },
    ],
    correctAnswer: "C",
    explanation:
      "The sentence begins with the singular third-person 'a traveler,' so the rest must stay singular and third person. C does this consistently. A and D shift to 'you,' and B shifts to the plural 'they.'",
  },

  // ── modifiers_parallelism (12) ────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the parallel option: "The puppy likes running, jumping, and ___."',
    choices: [
      { label: "A", text: "to chew" },
      { label: "B", text: "chewing" },
      { label: "C", text: "chews" },
      { label: "D", text: "it chews" },
    ],
    correctAnswer: "B",
    explanation:
      "The series uses -ing forms: 'running, jumping, and chewing.' The infinitive 'to chew,' the finite 'chews,' and the clause 'it chews' all break the parallel pattern.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the parallel option: "The course teaches students to write clearly, to think critically, and ___ confidently."',
    choices: [
      { label: "A", text: "speaking" },
      { label: "B", text: "to speak" },
      { label: "C", text: "they speak" },
      { label: "D", text: "spoken" },
    ],
    correctAnswer: "B",
    explanation:
      "The series uses 'to' + verb: 'to write... to think... to speak.' The participle 'speaking,' the clause 'they speak,' and the past participle 'spoken' all break the parallel structure.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Which sentence places the modifier "only" most logically? Intended meaning: she read no books other than two.',
    choices: [
      { label: "A", text: "She only read two books last summer." },
      { label: "B", text: "She read only two books last summer." },
      { label: "C", text: "Only she read two books last summer." },
      { label: "D", text: "She read two only books last summer." },
    ],
    correctAnswer: "B",
    explanation:
      "To limit the number of books, 'only' must sit directly before 'two books.' A suggests reading was the only thing she did, C limits who read, and D is ungrammatical.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the option that corrects the dangling modifier: "Walking into the kitchen, the smell of cinnamon was wonderful."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Walking into the kitchen, I noticed the wonderful smell of cinnamon." },
      { label: "C", text: "Walking into the kitchen, the cinnamon smelled wonderful." },
      { label: "D", text: "The smell of cinnamon, walking into the kitchen, was wonderful." },
    ],
    correctAnswer: "B",
    explanation:
      "The phrase 'Walking into the kitchen' must modify a person who can walk, so the main clause should begin with 'I.' B does this. A and C make the smell or the cinnamon do the walking, and D scrambles the sentence.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the parallel option: "The report was praised for being accurate, thorough, and ___."',
    choices: [
      { label: "A", text: "it was concise" },
      { label: "B", text: "concise" },
      { label: "C", text: "with concision" },
      { label: "D", text: "to be concise" },
    ],
    correctAnswer: "B",
    explanation:
      "The series lists adjectives: 'accurate, thorough, and concise.' The clause, the prepositional phrase, and the infinitive all break the parallel adjective pattern.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the option that corrects the misplaced modifier: "The waiter served a steak to the customer that was cooked perfectly."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The waiter served a steak that was cooked perfectly to the customer." },
      { label: "C", text: "The waiter served, to the customer, a steak that was cooked perfectly." },
      { label: "D", text: "Cooked perfectly, the waiter served the customer a steak." },
    ],
    correctAnswer: "B",
    explanation:
      "The modifier 'that was cooked perfectly' must sit next to 'steak,' not 'customer.' B places it correctly. A modifies 'customer,' C adds clumsy interrupting commas, and D makes the waiter the thing cooked perfectly.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the parallel option: "She is responsible for ordering supplies, training new hires, and ___ the schedule."',
    choices: [
      { label: "A", text: "to set" },
      { label: "B", text: "sets" },
      { label: "C", text: "setting" },
      { label: "D", text: "she sets" },
    ],
    correctAnswer: "C",
    explanation:
      "The series of gerunds 'ordering... training... setting' must stay parallel after 'responsible for.' The infinitive, the finite verb, and the clause all break the pattern.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the option with the adjectives in the most natural order: Intended meaning: a small, round, wooden table.',
    choices: [
      { label: "A", text: "a wooden round small table" },
      { label: "B", text: "a round wooden small table" },
      { label: "C", text: "a small round wooden table" },
      { label: "D", text: "a wooden small round table" },
    ],
    correctAnswer: "C",
    explanation:
      "English orders stacked adjectives by size, then shape, then material: 'small round wooden table.' The other orders sound unnatural to a fluent reader.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the option that corrects the faulty parallelism: "The new policy is intended not only to reduce costs but also improving service."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "not only to reduce costs but also to improve service" },
      { label: "C", text: "not only reducing costs but also to improve service" },
      { label: "D", text: "not only to reduce costs but improving also service" },
    ],
    correctAnswer: "B",
    explanation:
      "The correlative pair 'not only... but also' must join matching forms; after 'to reduce' the second element needs 'to improve.' A pairs an infinitive with a gerund, C pairs a gerund with an infinitive, and D garbles the word order.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the option that corrects the dangling modifier: "After finishing the marathon, a medal was placed around her neck."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "After finishing the marathon, she received a medal around her neck." },
      { label: "C", text: "After finishing the marathon, the medal was hers." },
      { label: "D", text: "A medal, after finishing the marathon, was placed around her neck." },
    ],
    correctAnswer: "B",
    explanation:
      "The phrase 'After finishing the marathon' must modify the runner, so the main clause should begin with 'she.' B does this. A and C make the medal finish the marathon, and D simply relocates the dangling phrase.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the parallel option: "The guidebook explains how to pitch a tent, where to find water, and ___."',
    choices: [
      { label: "A", text: "the building of a fire" },
      { label: "B", text: "how a fire is built" },
      { label: "C", text: "how to build a fire" },
      { label: "D", text: "building a fire" },
    ],
    correctAnswer: "C",
    explanation:
      "The series uses 'question word + to + verb': 'how to pitch... where to find... how to build.' The noun phrase, the passive clause, and the gerund all break that parallel structure.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "conventions_of_standard_english",
    subSkill: "modifiers_parallelism",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the option that corrects the modifier and parallelism error: "Hoping to save time, the shortcut was taken by the hikers, tired and who wanted rest."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Hoping to save time, the hikers, tired and wanting rest, took the shortcut." },
      { label: "C", text: "Hoping to save time, the shortcut, tired and wanting rest, was taken." },
      { label: "D", text: "The shortcut was taken, hoping to save time, by the tired hikers who wanted rest." },
    ],
    correctAnswer: "B",
    explanation:
      "The opening phrase must modify the hikers, and the description of them must be parallel. B makes 'the hikers' the subject and pairs the adjective 'tired' with the participle 'wanting.' A and C let the shortcut do the hoping, and D leaves the dangling modifier uncorrected.",
  },

  // ── concision (12) ────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the most concise version: "At this point in time, the store is closed."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "At this current point in time now," },
      { label: "C", text: "Currently," },
      { label: "D", text: "At the present point of time that we are in," },
    ],
    correctAnswer: "C",
    explanation:
      "'At this point in time' is a wordy way to say 'currently.' B and D are even wordier, and only C trims the phrase to a single precise word.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the most concise version: "The two twins were identical and looked exactly alike."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The twins were identical." },
      { label: "C", text: "The two twins looked alike and were identical to each other." },
      { label: "D", text: "The identical twins were the same and alike." },
    ],
    correctAnswer: "B",
    explanation:
      "'Twins' already implies two, and 'identical' already means they look exactly alike, so the rest is redundant. B keeps only what is needed; A, C, and D repeat the same idea.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the most concise version: "The reason the flight was delayed was because of the heavy fog."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The flight was delayed because of the heavy fog." },
      { label: "C", text: "The reason for the delay of the flight was on account of heavy fog." },
      { label: "D", text: "Heavy fog was the reason why the flight was delayed because of it." },
    ],
    correctAnswer: "B",
    explanation:
      "'The reason... was because' says cause twice. B states the cause once, cleanly. A keeps the redundancy, and C and D add still more wordy cause phrases.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "In my own personal opinion, I think the design could be improved."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "In my own personal opinion, the design could be improved." },
      { label: "C", text: "I think the design could be improved." },
      { label: "D", text: "It is my personal opinion that I think the design could be improved." },
    ],
    correctAnswer: "C",
    explanation:
      "'My own personal opinion' and 'I think' both signal the same thing. C keeps just one signal of opinion. A, B, and D stack redundant opinion phrases.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "The committee gathered together in order to discuss the proposal."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The committee gathered together to discuss the proposal." },
      { label: "C", text: "The committee gathered to discuss the proposal." },
      { label: "D", text: "The committee, gathering together, discussed the proposal in order to." },
    ],
    correctAnswer: "C",
    explanation:
      "'Gathered' already means 'came together,' and 'in order to' can shrink to 'to.' C removes both wordy spots. A and B keep 'together,' and D is awkward and incomplete.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "The final outcome of the vote was a complete and total surprise."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The outcome of the vote was a surprise." },
      { label: "C", text: "The final end result of the vote surprised everyone completely." },
      { label: "D", text: "The vote's outcome, in the end, was a total and complete surprise." },
    ],
    correctAnswer: "B",
    explanation:
      "An 'outcome' is already final, and 'complete and total' doubles one idea. B trims both. A, C, and D keep redundant words such as 'final,' 'end result,' or 'complete and total.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "She returned back to the office to retrieve the file that she had forgotten."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "She returned to the office to retrieve the file she had forgotten." },
      { label: "C", text: "She went back and returned to the office for the forgotten file." },
      { label: "D", text: "She returned back again to the office for the file." },
    ],
    correctAnswer: "B",
    explanation:
      "'Returned' already means 'came back,' so 'back' is redundant. B removes it. A and D keep 'back,' and C adds the redundant 'went back and returned.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "Due to the fact that the road was icy, the bus traveled slowly."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Because the road was icy, the bus traveled slowly." },
      { label: "C", text: "Owing to the fact of the road being icy, the bus traveled slowly." },
      { label: "D", text: "The road was icy, and due to that fact the bus traveled slowly." },
    ],
    correctAnswer: "B",
    explanation:
      "'Due to the fact that' is a wordy substitute for 'because.' B makes that swap. A, C, and D all keep a bulky 'fact'-based cause phrase.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the most concise version: "The instructions were clear, and they were easy to understand and follow."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The instructions were clear and easy to follow." },
      { label: "C", text: "The clear instructions were understandable and also easy to follow them." },
      { label: "D", text: "The instructions, being clear, were easy and simple to understand and follow." },
    ],
    correctAnswer: "B",
    explanation:
      "'Clear' and 'easy to understand' overlap, and 'understand and follow' doubles one idea. B keeps a single tight pairing. A, C, and D restate the same point.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the most concise version: "It is a well-known fact that is widely recognized that exercise benefits health."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Exercise benefits health." },
      { label: "C", text: "It is well known and widely recognized that exercise benefits health." },
      { label: "D", text: "As a fact that is known well, exercise benefits health." },
    ],
    correctAnswer: "B",
    explanation:
      "'Well-known fact that is widely recognized' is a long way of saying nothing the sentence needs; B states the point directly. A, C, and D all keep redundant 'well-known fact' framing.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the most concise version: "The new manager, who is someone that values honesty, encourages open discussion."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "The new manager, who values honesty, encourages open discussion." },
      { label: "C", text: "The new manager, being a person who is one that values honesty, encourages open discussion." },
      { label: "D", text: "The new manager values honesty, and is someone who encourages open discussion." },
    ],
    correctAnswer: "B",
    explanation:
      "'Who is someone that values honesty' can shrink to 'who values honesty.' B makes that cut. A and C keep the padding, and D rephrases without trimming the wordiness.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "concision",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the most concise version that keeps the meaning: "Despite the fact that it was raining, and in spite of the weather, the game continued on without stopping."',
    choices: [
      { label: "A", text: "NO CHANGE" },
      { label: "B", text: "Despite the rain, the game continued." },
      { label: "C", text: "Although it was raining and the weather was bad, the game still continued on." },
      { label: "D", text: "In spite of the weather and rain, the game went on and did not stop." },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence repeats the concession ('despite the fact... in spite of the weather') and the idea of not stopping ('continued on without stopping'). B states each idea once. A, C, and D all keep doubled concessions or doubled 'continued' phrasing.",
  },

  // ── clarity_style (12) ────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt: 'Which version states the idea most clearly?',
    choices: [
      { label: "A", text: "The book was read by me in one sitting because it was being so interesting." },
      { label: "B", text: "I read the book in one sitting because it was so interesting." },
      { label: "C", text: "The reading of the book by me, in one sitting, was due to interest." },
      { label: "D", text: "In one sitting the book, so interesting, got read by me." },
    ],
    correctAnswer: "B",
    explanation:
      "B uses a clear active sentence with natural word order. A and D use awkward passive constructions, and C buries the verb in the noun 'reading.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt: 'Which version is clearest and least clumsy?',
    choices: [
      { label: "A", text: "The decision that was made by the board was one that disappointed many." },
      { label: "B", text: "The board's decision disappointed many." },
      { label: "C", text: "Many were disappointed by the decision that the board had made by them." },
      { label: "D", text: "The decision, board-made, was a thing disappointing to many." },
    ],
    correctAnswer: "B",
    explanation:
      "B is a tight active clause. A and C use roundabout passive phrasing, and D is choppy and unidiomatic.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt: 'Which version expresses the idea most clearly?',
    choices: [
      { label: "A", text: "The purpose of the meeting was for the discussing of next year's budget." },
      { label: "B", text: "The meeting's purpose was that of a discussion about the budget for next year." },
      { label: "C", text: "The meeting was held to discuss next year's budget." },
      { label: "D", text: "Next year's budget, that was what the meeting was for the discussion of." },
    ],
    correctAnswer: "C",
    explanation:
      "C uses a clear infinitive ('to discuss') and natural order. A and B turn the verb into the clumsy noun phrases 'the discussing of' and 'a discussion about,' and D scrambles the word order.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A passage about a quiet seaside town uses a calm, descriptive tone. Which sentence best fits that style?',
    choices: [
      { label: "A", text: "The harbor was, like, totally chill in the early morning light." },
      { label: "B", text: "At dawn the harbor lay still, its water pale and unmoving." },
      { label: "C", text: "The harbor was a place where, at the time of dawn, there was stillness." },
      { label: "D", text: "Dawn-wise, the harbor situation was a stillness-type scenario." },
    ],
    correctAnswer: "B",
    explanation:
      "B matches the calm, descriptive tone with concrete, graceful phrasing. A is too casual and slangy, C is wordy and flat, and D uses jarring jargon.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt: 'Which version is clearest and avoids awkward repetition?',
    choices: [
      { label: "A", text: "The teacher gave the students a test, and the test was a hard test for the students." },
      { label: "B", text: "The teacher gave the students a difficult test." },
      { label: "C", text: "The students were given, by the teacher, a test that was difficult for them to take." },
      { label: "D", text: "A test, difficult, was what the teacher gave to the students of the class." },
    ],
    correctAnswer: "B",
    explanation:
      "B states the idea once in a clean active sentence. A repeats 'test' and 'students,' C uses clumsy passive phrasing, and D is choppy and disordered.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A formal research summary should avoid casual language. Which sentence best fits that style?',
    choices: [
      { label: "A", text: "The results were kind of surprising and threw the researchers for a loop." },
      { label: "B", text: "The results were unexpected and prompted the researchers to revise their model." },
      { label: "C", text: "The results, no joke, made the researchers totally rethink everything." },
      { label: "D", text: "The results sort of shocked the researchers into a big rethink." },
    ],
    correctAnswer: "B",
    explanation:
      "B uses precise, formal language suited to a research summary. A, C, and D rely on casual idioms ('threw for a loop,' 'no joke,' 'sort of') that clash with the formal tone.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt: 'Which version is clearest?',
    choices: [
      { label: "A", text: "Having been delayed by traffic, the meeting was started late by the team." },
      { label: "B", text: "Delayed by traffic, the team started the meeting late." },
      { label: "C", text: "The meeting, traffic having delayed the team, was a late start." },
      { label: "D", text: "Because of traffic, lateness was the result for the start of the meeting." },
    ],
    correctAnswer: "B",
    explanation:
      "B places the modifier next to the people it describes and uses an active verb. A uses an awkward passive, C is convoluted, and D buries the action in the noun 'lateness.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt: 'Which version expresses the comparison most clearly?',
    choices: [
      { label: "A", text: "The second draft, when compared to the first, it was tighter and clearer than it." },
      { label: "B", text: "The second draft was tighter and clearer than the first." },
      { label: "C", text: "In comparison with the first draft, tighter and clearer is what the second was." },
      { label: "D", text: "Tighter and clearer, the second draft was that, more so than the first draft was." },
    ],
    correctAnswer: "B",
    explanation:
      "B states the comparison in one balanced clause. A repeats the pronoun 'it,' C inverts the word order awkwardly, and D is choppy and redundant.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt: 'Which version is clearest and most graceful?',
    choices: [
      { label: "A", text: "The scientist's explanation, it being detailed, was understood by the audience well." },
      { label: "B", text: "The scientist explained the process in detail, and the audience understood it well." },
      { label: "C", text: "A detailed explanation of the process by the scientist was well understood, audience-wise." },
      { label: "D", text: "The process explanation, detailed by the scientist, the audience well understood it." },
    ],
    correctAnswer: "B",
    explanation:
      "B uses two clear active clauses joined logically. A inserts an awkward 'it being,' C tacks on the jargon 'audience-wise,' and D scrambles the word order.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'A reflective personal essay uses a thoughtful, measured voice. Which sentence best fits that style?',
    choices: [
      { label: "A", text: "Looking back, I see that the long walk taught me to notice small things." },
      { label: "B", text: "Looking back, that walk was a real game-changer for my noticing skills." },
      { label: "C", text: "Retrospectively speaking, the walk was, noticing-wise, a major upgrade." },
      { label: "D", text: "That walk? It basically rewired how I do the whole noticing thing." },
    ],
    correctAnswer: "A",
    explanation:
      "A matches the thoughtful, measured voice of a reflective essay. B and D are too casual, and C uses awkward jargon ('noticing-wise,' 'upgrade').",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt: 'Which version is clearest and avoids a confusing structure?',
    choices: [
      { label: "A", text: "The bridge, which the engineers, who were experienced, designed, has lasted a century." },
      { label: "B", text: "The bridge designed by the experienced engineers has lasted a century." },
      { label: "C", text: "Having been designed by engineers who were experienced, a century is how long the bridge lasted." },
      { label: "D", text: "The bridge has lasted a century, the engineers designing it being experienced ones." },
    ],
    correctAnswer: "B",
    explanation:
      "B states the idea in one smooth clause. A nests clauses inside clauses confusingly, C uses an awkward passive opener, and D tacks on a clumsy participial phrase.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "clarity_style",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt: 'Which version is clearest and best maintains a consistent, formal tone?',
    choices: [
      { label: "A", text: "The proposal, although it has merit, it also has flaws that, if they are not fixed, could sink it." },
      { label: "B", text: "The proposal has merit, but it also has flaws that could doom it if left unaddressed." },
      { label: "C", text: "The proposal is good and bad, and the bad parts, unfixed, would be the end of it for sure." },
      { label: "D", text: "Merit-wise the proposal is fine, but flaw-wise it is, unless fixed, a goner." },
    ],
    correctAnswer: "B",
    explanation:
      "B states the contrast in one clean, formal sentence. A repeats the subject with a stray 'it,' C is vague and too casual ('for sure'), and D uses jarring jargon and slang.",
  },

  // ── word_choice (12) ──────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the correct word: "The team was proud of ___ accomplishment."',
    choices: [
      { label: "A", text: "they're" },
      { label: "B", text: "their" },
      { label: "C", text: "there" },
      { label: "D", text: "theyre" },
    ],
    correctAnswer: "B",
    explanation:
      "'Their' is the possessive needed before 'accomplishment.' 'They're' means 'they are,' 'there' indicates place, and 'theyre' is a misspelling.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct word: "The medicine had a noticeable ___ on her recovery."',
    choices: [
      { label: "A", text: "affect" },
      { label: "B", text: "effect" },
      { label: "C", text: "affects" },
      { label: "D", text: "effected" },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence needs a noun meaning 'result,' which is 'effect.' 'Affect' and 'affects' are usually verbs, and 'effected' is a verb form.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct word: "There were ___ chairs than guests, so some people stood."',
    choices: [
      { label: "A", text: "less" },
      { label: "B", text: "fewer" },
      { label: "C", text: "least" },
      { label: "D", text: "lesser" },
    ],
    correctAnswer: "B",
    explanation:
      "'Fewer' is used with countable nouns such as 'chairs.' 'Less' is for uncountable quantities, and 'least' and 'lesser' do not fit a simple comparison of two counts.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the correct word: "The hikers were not sure ___ to turn back or push on."',
    choices: [
      { label: "A", text: "weather" },
      { label: "B", text: "whether" },
      { label: "C", text: "wether" },
      { label: "D", text: "whither" },
    ],
    correctAnswer: "B",
    explanation:
      "'Whether' introduces a choice between alternatives. 'Weather' refers to atmospheric conditions, 'wether' is a male sheep, and 'whither' means 'to what place.'",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct word: "The committee will ___ the new members at the next meeting."',
    choices: [
      { label: "A", text: "accept" },
      { label: "B", text: "except" },
      { label: "C", text: "expect" },
      { label: "D", text: "access" },
    ],
    correctAnswer: "A",
    explanation:
      "'Accept' means to receive or admit. 'Except' means to exclude, 'expect' means to anticipate, and 'access' means to reach or enter.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the word that best fits a precise, informational tone: "The bridge will ___ the strain of heavy traffic for decades."',
    choices: [
      { label: "A", text: "put up with" },
      { label: "B", text: "withstand" },
      { label: "C", text: "deal with" },
      { label: "D", text: "handle okay" },
    ],
    correctAnswer: "B",
    explanation:
      "'Withstand' precisely means to endure force or strain and fits an informational tone. 'Put up with,' 'deal with,' and 'handle okay' are casual and less exact.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct word: "Her advice had a strong ___ on the way I approached the problem."',
    choices: [
      { label: "A", text: "affect" },
      { label: "B", text: "effect" },
      { label: "C", text: "influence on" },
      { label: "D", text: "affecting" },
    ],
    correctAnswer: "B",
    explanation:
      "The sentence needs a noun meaning 'result' or 'impact' after 'a strong,' which is 'effect.' 'Affect' is normally a verb, 'influence on' would create the doubled phrase 'effect on... on,' and 'affecting' is a verb form.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the word that creates the most logical connection: "The road was flooded; ___, we took the longer route."',
    choices: [
      { label: "A", text: "therefore" },
      { label: "B", text: "however" },
      { label: "C", text: "nevertheless" },
      { label: "D", text: "instead of which" },
    ],
    correctAnswer: "A",
    explanation:
      "Taking the longer route is the result of the flooding, so the cause-and-effect word 'therefore' fits. 'However' and 'nevertheless' signal contrast, and 'instead of which' is ungrammatical here.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the correct word: "The new evidence will ___ the jury\'s decision."',
    choices: [
      { label: "A", text: "affect" },
      { label: "B", text: "effect" },
      { label: "C", text: "effects" },
      { label: "D", text: "affect on" },
    ],
    correctAnswer: "A",
    explanation:
      "Here a verb meaning 'to influence' is needed, which is 'affect.' 'Effect' and 'effects' are normally nouns, and 'affect on' wrongly adds a preposition to the verb.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the word that best fits the sentence: "The diplomat chose her words carefully to avoid any ___ remark."',
    choices: [
      { label: "A", text: "ingenious" },
      { label: "B", text: "ingenuous" },
      { label: "C", text: "indignant" },
      { label: "D", text: "imprudent" },
    ],
    correctAnswer: "D",
    explanation:
      "'Imprudent' means unwise or rash, which is what a careful diplomat would avoid. 'Ingenious' means clever, 'ingenuous' means innocent or frank, and 'indignant' means angry — none of which a diplomat would carefully avoid.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the word that best fits a serious historical account: "The treaty was meant to ___ a lasting peace between the two nations."',
    choices: [
      { label: "A", text: "set up" },
      { label: "B", text: "establish" },
      { label: "C", text: "whip up" },
      { label: "D", text: "throw together" },
    ],
    correctAnswer: "B",
    explanation:
      "'Establish' formally means to create something lasting and fits a serious historical tone. 'Set up' is casual, and 'whip up' and 'throw together' suggest haste, the opposite of a lasting peace.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "knowledge_of_language",
    subSkill: "word_choice",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the word that best fits the sentence: "The critic praised the film for its ___ portrayal of ordinary life, free of melodrama."',
    choices: [
      { label: "A", text: "restrained" },
      { label: "B", text: "reckless" },
      { label: "C", text: "reluctant" },
      { label: "D", text: "redundant" },
    ],
    correctAnswer: "A",
    explanation:
      "'Restrained' means controlled and understated, which matches a portrayal 'free of melodrama.' 'Reckless' means careless, 'reluctant' means unwilling, and 'redundant' means needlessly repetitive — none fits the praise described.",
  },

  // ── transitions (11) ──────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 1,
    estimatedTimeSec: 35,
    prompt:
      'Choose the best transition: "It rained all morning. ___, the picnic was canceled."',
    choices: [
      { label: "A", text: "However" },
      { label: "B", text: "Therefore" },
      { label: "C", text: "Meanwhile" },
      { label: "D", text: "For example" },
    ],
    correctAnswer: "B",
    explanation:
      "The cancellation results from the rain, so the cause-and-effect word 'Therefore' fits. 'However' signals contrast, 'Meanwhile' signals simultaneous time, and 'For example' signals an illustration.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the best transition: "The plan was expensive. ___, it promised to save money over time."',
    choices: [
      { label: "A", text: "However" },
      { label: "B", text: "Therefore" },
      { label: "C", text: "Likewise" },
      { label: "D", text: "In addition" },
    ],
    correctAnswer: "A",
    explanation:
      "A high cost set against long-term savings is a contrast, so 'However' fits. 'Therefore' signals result, and 'Likewise' and 'In addition' signal similarity or addition.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 2,
    estimatedTimeSec: 40,
    prompt:
      'Choose the best transition: "The museum has a large art collection. ___, it houses a notable fossil exhibit."',
    choices: [
      { label: "A", text: "Nevertheless" },
      { label: "B", text: "In addition" },
      { label: "C", text: "In contrast" },
      { label: "D", text: "As a result" },
    ],
    correctAnswer: "B",
    explanation:
      "The second sentence adds another holding of the museum, so the additive 'In addition' fits. 'Nevertheless' and 'In contrast' signal opposition, and 'As a result' signals cause and effect.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the best transition: "Many readers expected a sad ending. ___, the novel closes on a hopeful note."',
    choices: [
      { label: "A", text: "Instead" },
      { label: "B", text: "Therefore" },
      { label: "C", text: "Similarly" },
      { label: "D", text: "Furthermore" },
    ],
    correctAnswer: "A",
    explanation:
      "The hopeful ending replaces the expected sad one, so 'Instead' marks that substitution. 'Therefore' signals result, 'Similarly' signals likeness, and 'Furthermore' adds a point.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the best transition: "The first experiment used fresh water. The second, ___, used salt water."',
    choices: [
      { label: "A", text: "as a result" },
      { label: "B", text: "for instance" },
      { label: "C", text: "by contrast" },
      { label: "D", text: "in conclusion" },
    ],
    correctAnswer: "C",
    explanation:
      "Fresh water versus salt water sets up a difference between the two experiments, so 'by contrast' fits. 'As a result' signals cause, 'for instance' signals an example, and 'in conclusion' signals a summary.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the best transition: "She trained for months. ___, on race day she felt fully prepared."',
    choices: [
      { label: "A", text: "Nonetheless" },
      { label: "B", text: "As a result" },
      { label: "C", text: "However" },
      { label: "D", text: "On the other hand" },
    ],
    correctAnswer: "B",
    explanation:
      "Her preparedness follows from months of training, so the cause-and-effect 'As a result' fits. The other three choices all signal contrast, which the sentence does not contain.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the best transition: "The recipe is simple. ___, it requires only five ingredients."',
    choices: [
      { label: "A", text: "In fact" },
      { label: "B", text: "However" },
      { label: "C", text: "Nevertheless" },
      { label: "D", text: "In contrast" },
    ],
    correctAnswer: "A",
    explanation:
      "The second sentence reinforces and intensifies the claim that the recipe is simple, so 'In fact' fits. The other choices all signal contrast, which does not match.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'Choose the best transition: "First, the dough must rest for an hour. ___, it is rolled out and cut into shapes."',
    choices: [
      { label: "A", text: "Nevertheless" },
      { label: "B", text: "Next" },
      { label: "C", text: "In contrast" },
      { label: "D", text: "For example" },
    ],
    correctAnswer: "B",
    explanation:
      "The sentences describe steps in a sequence, so the sequencing word 'Next' fits after 'First.' 'Nevertheless' and 'In contrast' signal opposition, and 'For example' signals an illustration.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the best transition: "The data clearly supported the theory. ___, a few researchers remained unconvinced."',
    choices: [
      { label: "A", text: "Consequently" },
      { label: "B", text: "Even so" },
      { label: "C", text: "Likewise" },
      { label: "D", text: "Therefore" },
    ],
    correctAnswer: "B",
    explanation:
      "Despite strong data, some doubt remained, a contrast that 'Even so' captures. 'Consequently' and 'Therefore' signal result, and 'Likewise' signals similarity.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'Choose the best transition: "The factory cut its energy use sharply. ___, its costs fell and its emissions dropped."',
    choices: [
      { label: "A", text: "In contrast" },
      { label: "B", text: "As a consequence" },
      { label: "C", text: "Nonetheless" },
      { label: "D", text: "Granted" },
    ],
    correctAnswer: "B",
    explanation:
      "Lower costs and emissions follow from the cut in energy use, so 'As a consequence' fits. 'In contrast' and 'Nonetheless' signal opposition, and 'Granted' signals a concession.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "transitions",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'Choose the best transition: "The author spends three chapters praising city life. ___, the final chapter quietly admits she prefers the countryside."',
    choices: [
      { label: "A", text: "Accordingly" },
      { label: "B", text: "In the same vein" },
      { label: "C", text: "Ironically" },
      { label: "D", text: "To summarize" },
    ],
    correctAnswer: "C",
    explanation:
      "The ending contradicts the long buildup in an unexpected, self-undercutting way, which 'Ironically' captures. 'Accordingly' signals result, 'In the same vein' signals similarity, and 'To summarize' signals a recap.",
  },

  // ── relevance (11) ────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'A paragraph explains how to compost kitchen scraps. Which sentence would be LEAST relevant to that paragraph?',
    choices: [
      { label: "A", text: "Fruit peels and coffee grounds break down quickly in a compost bin." },
      { label: "B", text: "Turning the pile each week speeds decomposition." },
      { label: "C", text: "My neighbor recently painted his house a bright shade of blue." },
      { label: "D", text: "Finished compost can be mixed into garden soil." },
    ],
    correctAnswer: "C",
    explanation:
      "The paragraph is about composting kitchen scraps; the color of a neighbor's house has nothing to do with that topic. A, B, and D all give information directly about composting.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph describes how honeybees communicate the location of flowers through a "waggle dance." Should the writer add the sentence "Honey has been used as a sweetener for thousands of years"?',
    choices: [
      {
        label: "A",
        text: "No, because it shifts away from the paragraph's focus on bee communication.",
      },
      { label: "B", text: "No, because the claim about honey is factually false." },
      { label: "C", text: "Yes, because it explains how the waggle dance works." },
      { label: "D", text: "Yes, because every paragraph about bees should mention honey." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph focuses on how bees communicate, and a fact about honey as a sweetener does not belong, so it should not be added. The honey claim is true (B), it does not explain the dance (C), and relevance, not a blanket rule, governs the choice (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph argues that public libraries strengthen communities. Which sentence best supports that focus?',
    choices: [
      { label: "A", text: "Libraries offer free meeting spaces where neighborhood groups can gather." },
      { label: "B", text: "The first public library in the town was built of red brick." },
      { label: "C", text: "Some people prefer to buy their books rather than borrow them." },
      { label: "D", text: "Library buildings are often closed on national holidays." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph's focus is how libraries strengthen communities, and free meeting space for local groups directly supports that claim. B is an architectural detail, C raises an unrelated preference, and D is a logistical fact.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'An essay on the benefits of walking to school includes this sentence: "The walk gives students time to wake up and prepare mentally for the day." Should the writer keep it?',
    choices: [
      {
        label: "A",
        text: "Keep, because it names a specific benefit of walking, which is the essay's topic.",
      },
      { label: "B", text: "Keep, because it describes the route students take to school." },
      { label: "C", text: "Delete, because it has nothing to do with walking." },
      { label: "D", text: "Delete, because essays should not mention students." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay is about the benefits of walking to school, and mental preparation is one such benefit, so the sentence is relevant and should stay. It does not describe a route (B), it clearly relates to walking (C), and there is no rule against mentioning students (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph explains why a city added protected bike lanes. Which sentence would be LEAST relevant?',
    choices: [
      { label: "A", text: "Protected lanes reduce collisions between cars and cyclists." },
      { label: "B", text: "City surveys showed residents wanted safer routes to work." },
      { label: "C", text: "The mayor of the city enjoys sailing on weekends." },
      { label: "D", text: "Separated lanes encourage more people to commute by bicycle." },
    ],
    correctAnswer: "C",
    explanation:
      "The paragraph explains the reasons for protected bike lanes; the mayor's weekend hobby has no bearing on that. A, B, and D each give a reason or effect connected to the bike lanes.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'An informational passage explains how solar panels convert sunlight into electricity. Should the writer add "Many homeowners also enjoy the modern look of rooftop panels"?',
    choices: [
      {
        label: "A",
        text: "No, because the passage explains a technical process, and the appeal of the panels' appearance is off-topic.",
      },
      { label: "B", text: "No, because solar panels do not change a home's appearance." },
      { label: "C", text: "Yes, because it explains the science of energy conversion." },
      { label: "D", text: "Yes, because appearance is the main reason people buy panels." },
    ],
    correctAnswer: "A",
    explanation:
      "The passage focuses on the technical process of converting sunlight to electricity, so a comment about how panels look does not fit. The appearance claim is not relevant to the science (C), it makes no unsupported sales claim about why people buy (D), and panels do alter a roof's look (B).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph describes the training a search-and-rescue dog must complete. Which sentence best fits that focus?',
    choices: [
      { label: "A", text: "Handlers teach the dogs to follow a scent across difficult terrain." },
      { label: "B", text: "Dogs were first domesticated thousands of years ago." },
      { label: "C", text: "Some breeds shed more fur than others during the summer." },
      { label: "D", text: "Many families adopt dogs from local animal shelters." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph focuses on search-and-rescue training, and teaching scent tracking is part of that training. B is general history, C is about shedding, and D is about adoption — none relates to rescue training.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'An essay argues that students learn best with regular short breaks. The writer considers adding: "One study found that attention declines sharply after about twenty-five minutes of focus." Should the sentence be added?',
    choices: [
      {
        label: "A",
        text: "Yes, because it provides evidence that supports the essay's argument for short breaks.",
      },
      { label: "B", text: "Yes, because it describes the writer's own study habits." },
      { label: "C", text: "No, because the essay should not mention research." },
      { label: "D", text: "No, because it contradicts the essay's main argument." },
    ],
    correctAnswer: "A",
    explanation:
      "A study showing attention drops after about twenty-five minutes supports the argument that students need regular breaks, so the sentence is relevant and should be added. It is research, not a personal habit (B); essays may cite research (C); and it supports rather than contradicts the argument (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'A passage explains how a coral reef recovers after a storm. Which sentence would be LEAST relevant to that focus?',
    choices: [
      { label: "A", text: "Fast-growing coral species are often the first to reestablish on damaged reefs." },
      { label: "B", text: "Fish gradually return as the reef structure is rebuilt." },
      { label: "C", text: "Scuba diving is a popular activity at many tropical resorts." },
      { label: "D", text: "Healthy water quality speeds the regrowth of coral colonies." },
    ],
    correctAnswer: "C",
    explanation:
      "The passage explains reef recovery after a storm; the popularity of scuba diving at resorts does not bear on that process. A, B, and D each describe part of how a reef recovers.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'An essay focuses on how a young inventor solved a problem in her own neighborhood. The writer considers adding a paragraph listing famous inventors of the past century. Should this paragraph be added?',
    choices: [
      {
        label: "A",
        text: "No, because a list of unrelated inventors would pull focus from the essay's subject and her local project.",
      },
      { label: "B", text: "No, because the young inventor has not yet invented anything." },
      { label: "C", text: "Yes, because every essay about inventing needs a historical list." },
      { label: "D", text: "Yes, because it proves the young inventor is as skilled as those figures." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay centers on one young inventor and her neighborhood project, so a paragraph cataloging unrelated famous inventors would distract from that focus. The essay does describe her invention (B), no rule requires a historical list (C), and such a list would not prove a comparison of skill (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "relevance",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'A persuasive essay urges the town to fund a new community garden, stressing benefits to residents. The writer considers adding: "The vacant lot was once the site of a hardware store that closed in 1998." Should this sentence be added?',
    choices: [
      {
        label: "A",
        text: "No, because the lot's former use as a hardware store does not advance the argument for funding the garden.",
      },
      { label: "B", text: "No, because hardware stores have nothing to do with gardening tools." },
      { label: "C", text: "Yes, because it gives a vivid history that strengthens the persuasive appeal." },
      { label: "D", text: "Yes, because readers always want to know a lot's full history." },
    ],
    correctAnswer: "A",
    explanation:
      "The essay argues for funding based on benefits to residents, and the lot's history as a hardware store does not support that case, so the sentence should not be added. The detail is not persuasive (C), readers do not always need a lot's history (D), and the weak hardware-tool link in B is not the real reason it fails.",
  },

  // ── rhetorical_purpose (11) ───────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'A passage opens: "Picture a kitchen drawer crammed with tangled cords for devices no one owns anymore." This opening sentence is included mainly to:',
    choices: [
      { label: "A", text: "draw the reader in with a familiar, concrete image of clutter." },
      { label: "B", text: "give exact instructions for organizing a drawer." },
      { label: "C", text: "list the brands of devices the cords belonged to." },
      { label: "D", text: "argue that all electronic devices should be banned." },
    ],
    correctAnswer: "A",
    explanation:
      "The vivid 'tangled cords' image is a hook that pulls the reader into a recognizable scene. It gives no instructions (B), names no brands (C), and makes no argument about banning devices (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'In a passage about a violinist, the writer describes her hands as "two careful birds." This figurative phrase is included mainly to:',
    choices: [
      { label: "A", text: "suggest the delicate, precise quality of her movements." },
      { label: "B", text: "explain that she keeps birds as pets." },
      { label: "C", text: "indicate that the concert was held outdoors." },
      { label: "D", text: "list the materials her violin is made of." },
    ],
    correctAnswer: "A",
    explanation:
      "Comparing her hands to 'careful birds' evokes lightness and precision in how she plays. It does not say she owns birds (B), describe the venue (C), or list materials (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A passage states: "By 1900, the city had paved nearly every downtown street." Within a paragraph about the city\'s rapid growth, this sentence mainly serves to:',
    choices: [
      { label: "A", text: "offer concrete evidence of how quickly the city was developing." },
      { label: "B", text: "describe the writer's opinion of modern road design." },
      { label: "C", text: "introduce a new character into the passage." },
      { label: "D", text: "explain how asphalt is manufactured." },
    ],
    correctAnswer: "A",
    explanation:
      "A specific fact about paved streets by 1900 gives concrete proof of rapid growth. It is not an opinion (B), introduces no character (C), and explains no manufacturing process (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'The writer wants to convey a tired hiker\'s sense of relief at reaching camp. Which sentence best accomplishes that purpose?',
    choices: [
      { label: "A", text: "She dropped her pack, and the weight seemed to lift from her whole body." },
      { label: "B", text: "The campsite was located four miles from the trailhead." },
      { label: "C", text: "She checked the map to confirm the elevation." },
      { label: "D", text: "The tent was made of a lightweight nylon fabric." },
    ],
    correctAnswer: "A",
    explanation:
      "The image of weight lifting from her body conveys physical and emotional relief. B is a neutral fact, C is a routine action, and D is an equipment detail, none of which expresses relief.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A passage about an old printing press includes the sentence: "The machine groaned like a ship in heavy seas." This comparison mainly serves to:',
    choices: [
      { label: "A", text: "give the reader a vivid sense of the press's strain and noise." },
      { label: "B", text: "explain that the press was once used aboard a ship." },
      { label: "C", text: "argue that newer presses are quieter." },
      { label: "D", text: "describe the weather on the day the passage is set." },
    ],
    correctAnswer: "A",
    explanation:
      "The simile makes the reader hear the press's heavy, laboring sound. It does not place the press on a ship (B), make an argument about newer presses (C), or describe weather (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'The writer wants to emphasize that a scientific discovery was the result of patient, repeated effort rather than luck. Which sentence best accomplishes this?',
    choices: [
      { label: "A", text: "The breakthrough came only after years of trial, failure, and quiet adjustment." },
      { label: "B", text: "The discovery was announced at a large international conference." },
      { label: "C", text: "The laboratory was located on the third floor of an old building." },
      { label: "D", text: "Several newspapers reported the finding the following week." },
    ],
    correctAnswer: "A",
    explanation:
      "'Years of trial, failure, and quiet adjustment' stresses sustained effort over luck. B describes the announcement, C describes the setting, and D describes news coverage — none speaks to how the discovery was achieved.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A passage about a crowded market includes: "Voices, footsteps, and the clatter of carts braided into a single restless hum." The sentence mainly serves to:',
    choices: [
      { label: "A", text: "create a strong sensory impression of the market's busy atmosphere." },
      { label: "B", text: "list the goods that vendors were selling that day." },
      { label: "C", text: "explain the market's official opening and closing times." },
      { label: "D", text: "argue that the market should be made larger." },
    ],
    correctAnswer: "A",
    explanation:
      "Blending sounds into 'a single restless hum' immerses the reader in the busy scene. It lists no goods (B), gives no hours (C), and makes no argument (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'In an essay criticizing a new policy, the writer asks: "Who, exactly, benefits from a rule that no one can explain?" This rhetorical question mainly serves to:',
    choices: [
      { label: "A", text: "underscore the writer's doubt about the policy's value." },
      { label: "B", text: "request specific data from the reader." },
      { label: "C", text: "introduce a balanced summary of both sides." },
      { label: "D", text: "praise the officials who wrote the policy." },
    ],
    correctAnswer: "A",
    explanation:
      "The rhetorical question implies the policy benefits no one, sharpening the writer's criticism. It does not genuinely request data (B), introduce a balanced summary (C), or praise the officials (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'A passage describes a long-abandoned house: "Paint curled from the boards like old bark, and the porch sagged toward the weeds." These details mainly serve to:',
    choices: [
      { label: "A", text: "convey the house's deep state of neglect and decay." },
      { label: "B", text: "explain the steps needed to repair the house." },
      { label: "C", text: "praise the original builder's craftsmanship." },
      { label: "D", text: "give the house's address and year of construction." },
    ],
    correctAnswer: "A",
    explanation:
      "Curling paint and a sagging porch are concrete images of neglect and decay. They give no repair steps (B), no praise of craftsmanship (C), and no address or date (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'The writer wants a sentence that shifts the passage from describing a problem to proposing a solution. Which sentence best serves that transition?',
    choices: [
      { label: "A", text: "There is, however, a straightforward step the school could take instead." },
      { label: "B", text: "The problem has frustrated parents for many years." },
      { label: "C", text: "Each morning the same long lines form at the entrance." },
      { label: "D", text: "Many other schools face crowding of one kind or another." },
    ],
    correctAnswer: "A",
    explanation:
      "A names a 'step the school could take,' pivoting from problem to solution. B and C continue describing the problem, and D widens the problem rather than introducing a solution.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "rhetorical_purpose",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'An essay about memory ends: "We do not store the past so much as rebuild it, brick by uncertain brick, each time we look back." This closing sentence mainly serves to:',
    choices: [
      {
        label: "A",
        text: "leave the reader with a memorable image that restates the essay's central idea.",
      },
      { label: "B", text: "introduce a new scientific experiment for the reader to consider." },
      { label: "C", text: "list the names of researchers who study memory." },
      { label: "D", text: "give step-by-step advice for improving one's memory." },
    ],
    correctAnswer: "A",
    explanation:
      "The 'brick by uncertain brick' image vividly restates the essay's idea that memory is reconstructed, a fitting close. It introduces no new experiment (B), names no researchers (C), and gives no how-to advice (D).",
  },

  // ── sentence_paragraph_order (11) ─────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'A paragraph has these sentences: (1) "The cake cooled on the rack." (2) "First, she mixed the batter and poured it into the pan." (3) "She frosted it once it was completely cool." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 1, 3" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "3, 2, 1" },
      { label: "D", text: "2, 3, 1" },
    ],
    correctAnswer: "A",
    explanation:
      "The steps follow a clear time sequence: mix and pour (2), then cool (1), then frost (3). The word 'First' marks sentence 2 as the opener, and frosting must come after cooling.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph contains: (1) "This habit soon paid off." (2) "Every evening, Marcus reviewed his notes for twenty minutes." (3) "By midterms, he had memorized far more than his classmates." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 1, 3" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "3, 1, 2" },
      { label: "D", text: "2, 3, 1" },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 2 names the habit, sentence 1's 'This habit' must follow it, and sentence 3 gives the midterm result. The order 2, 1, 3 keeps cause before effect and keeps the pronoun reference clear.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'In a paragraph about a storm, the sentence "The next morning, neighbors gathered to clear the fallen branches" currently appears as the first sentence, before any description of the storm itself. This sentence should be:',
    choices: [
      { label: "A", text: "moved to the end of the paragraph." },
      { label: "B", text: "left as the first sentence." },
      { label: "C", text: "deleted entirely." },
      { label: "D", text: "moved to the middle of the paragraph." },
    ],
    correctAnswer: "A",
    explanation:
      "'The next morning' describes the aftermath, so it logically belongs after the paragraph describes the storm. Keeping it first puts the aftermath before the event (B), the cleanup detail is worth keeping (C), and the middle would still precede the storm description (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph has: (1) "As a result, the garden produced vegetables all summer." (2) "In April, the volunteers tilled the soil and planted seeds." (3) "Through May and June, they watered and weeded the beds daily." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 3, 1" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "3, 2, 1" },
      { label: "D", text: "2, 1, 3" },
    ],
    correctAnswer: "A",
    explanation:
      "The events follow the calendar: April planting (2), May-June tending (3), then the summer result (1). 'As a result' marks sentence 1 as the concluding effect.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph contains: (1) "Their efforts, however, were not enough to save the old theater." (2) "Residents circulated a petition and packed every city council meeting." (3) "When demolition was announced, the community refused to stay silent." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "3, 2, 1" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "2, 3, 1" },
      { label: "D", text: "3, 1, 2" },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 3 sets up the announcement, sentence 2 describes the response, and sentence 1's 'however' delivers the disappointing outcome. The order 3, 2, 1 keeps cause, action, and result in sequence.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A passage about a scientist devotes one paragraph to her childhood and the next to her major discovery. A sentence about her retirement currently sits in the childhood paragraph. This sentence should be:',
    choices: [
      { label: "A", text: "moved to a later paragraph that covers the end of her career." },
      { label: "B", text: "left in the childhood paragraph." },
      { label: "C", text: "moved to the very first line of the passage." },
      { label: "D", text: "deleted, because retirement is never relevant in a biography." },
    ],
    correctAnswer: "A",
    explanation:
      "A biography moves chronologically, so a retirement detail belongs near the end, not in the childhood paragraph. Leaving it (B) or moving it to the opening (C) breaks the time order, and retirement can be relevant in a biography (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph has: (1) "The bread now had a crisp, golden crust." (2) "She slid the loaf into a hot oven." (3) "After forty minutes, she opened the oven door." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 3, 1" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "2, 1, 3" },
      { label: "D", text: "3, 2, 1" },
    ],
    correctAnswer: "A",
    explanation:
      "The actions follow time order: put the loaf in (2), open the door after forty minutes (3), then see the finished crust (1). Sentence 1's 'now' marks it as the final result.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'A long paragraph first explains how tides are caused by the moon, then suddenly describes how to read a tide chart, then returns to the moon\'s gravitational pull. The best revision would be to:',
    choices: [
      {
        label: "A",
        text: "begin a new paragraph at the shift to reading a tide chart, so each topic is kept together.",
      },
      { label: "B", text: "delete all discussion of the moon's gravity." },
      { label: "C", text: "move the first sentence to the end of the paragraph." },
      { label: "D", text: "leave the paragraph unchanged, since all the sentences mention tides." },
    ],
    correctAnswer: "A",
    explanation:
      "The paragraph mixes two distinct topics — the cause of tides and how to read a chart — so dividing it keeps each topic unified. Deleting the gravity discussion (B) loses key content, moving one sentence (C) does not fix the topic jump, and sharing the word 'tides' does not make the paragraph coherent (D).",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'A paragraph contains: (1) "Eventually, the entire colony depends on this one chemical signal." (2) "When an ant finds food, it lays a scent trail back to the nest." (3) "Other ants follow that trail, reinforcing it as they go." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 3, 1" },
      { label: "B", text: "1, 2, 3" },
      { label: "C", text: "2, 1, 3" },
      { label: "D", text: "3, 2, 1" },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 2 introduces the scent trail, sentence 3 shows other ants reinforcing it, and sentence 1's 'Eventually' draws the broad conclusion. The order 2, 3, 1 moves from specific action to general consequence.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 4,
    estimatedTimeSec: 60,
    prompt:
      'A paragraph has: (1) "That decision shaped the rest of his career." (2) "Turning down the offer, he chose instead to stay and finish his research." (3) "A large company offered him a high-paying position overseas." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "3, 2, 1" },
      { label: "B", text: "1, 3, 2" },
      { label: "C", text: "2, 3, 1" },
      { label: "D", text: "3, 1, 2" },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 3 presents the offer, sentence 2 shows him turning it down, and sentence 1's 'That decision' refers back to that choice. The order 3, 2, 1 keeps the events and the pronoun reference logical.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "sentence_paragraph_order",
    difficulty: 5,
    estimatedTimeSec: 70,
    prompt:
      'A paragraph contains: (1) "Only then did the pattern become obvious." (2) "At first, the scattered data points seemed to mean nothing." (3) "She sorted the readings by temperature and plotted them again." (4) "A clean upward curve rose across the page." For the most logical order, the sentences should run:',
    choices: [
      { label: "A", text: "2, 3, 4, 1" },
      { label: "B", text: "1, 2, 3, 4" },
      { label: "C", text: "2, 3, 1, 4" },
      { label: "D", text: "3, 2, 4, 1" },
    ],
    correctAnswer: "A",
    explanation:
      "Sentence 2 sets the initial confusion, sentence 3 is the action she takes, sentence 4 shows the curve appearing, and sentence 1's 'Only then' caps the sequence. The order 2, 3, 4, 1 keeps confusion, action, result, and conclusion in line.",
  },

  // ── intros_conclusions (11) ───────────────────────────────────────────────
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 2,
    estimatedTimeSec: 45,
    prompt:
      'A paragraph then explains, step by step, how to fold an origami crane. Which sentence is the best introduction for that paragraph?',
    choices: [
      { label: "A", text: "Folding a paper crane takes only a few simple steps." },
      { label: "B", text: "Paper is sold in many colors at the craft store." },
      { label: "C", text: "Cranes are large birds found near rivers and marshes." },
      { label: "D", text: "My grandmother enjoyed many different hobbies." },
    ],
    correctAnswer: "A",
    explanation:
      "An introduction should announce the paragraph's topic — the steps of folding a crane — which A does. B is about buying paper, C is about real birds, and D is about a relative's hobbies.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph describes several ways trees benefit a city: cooling streets, cleaning air, and sheltering birds. Which sentence is the best conclusion for that paragraph?',
    choices: [
      { label: "A", text: "In these ways, a single tree quietly does the work of many city services." },
      { label: "B", text: "Trees should be watered regularly during dry summers." },
      { label: "C", text: "The oak is one of the most common trees in North America." },
      { label: "D", text: "City planners often meet to discuss new construction." },
    ],
    correctAnswer: "A",
    explanation:
      "A conclusion should tie together the points just made; A sums up the cooling, cleaning, and sheltering as the 'work of many city services.' B gives care advice, C names a tree species, and D shifts to planners.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph goes on to describe the daily routine of a lighthouse keeper in the 1800s. Which sentence is the best introduction?',
    choices: [
      { label: "A", text: "A lighthouse keeper's day was governed by a strict, unchanging schedule." },
      { label: "B", text: "Lighthouses are often painted in bold stripes." },
      { label: "C", text: "Modern lighthouses are now fully automated." },
      { label: "D", text: "The keeper's cat liked to sleep on the warm lamp room floor." },
    ],
    correctAnswer: "A",
    explanation:
      "The introduction should set up the paragraph's subject — the keeper's daily routine — which A does. B describes appearance, C jumps to modern lighthouses, and D is a minor detail rather than a topic statement.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'An essay has described how a small bookshop survived by hosting community events. Which sentence best concludes the essay?',
    choices: [
      {
        label: "A",
        text: "By becoming a gathering place, the shop turned its customers into a community that kept it alive.",
      },
      { label: "B", text: "The shop sells both new and used books at varied prices." },
      { label: "C", text: "Reading is a hobby enjoyed by people of every age." },
      { label: "D", text: "The owner first opened the shop more than thirty years ago." },
    ],
    correctAnswer: "A",
    explanation:
      "A strong conclusion restates the essay's main idea; A captures how community events kept the shop alive. B is a pricing detail, C is a general statement about reading, and D returns to background facts.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph then explains the different jobs performed by bees within a hive. Which sentence is the best introduction?',
    choices: [
      { label: "A", text: "Inside a hive, every bee has a specific role to play." },
      { label: "B", text: "Honey can be light gold or deep amber in color." },
      { label: "C", text: "Beekeeping has become a popular urban hobby." },
      { label: "D", text: "A bee sting can be painful but is rarely dangerous." },
    ],
    correctAnswer: "A",
    explanation:
      "The introduction should preview the paragraph's topic — the various jobs of bees — which A does. B is about honey color, C is about the hobby, and D is about stings.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'An essay has argued that learning a musical instrument improves focus, patience, and confidence. Which sentence best concludes the essay?',
    choices: [
      {
        label: "A",
        text: "Picking up an instrument, then, trains far more than the ears and hands.",
      },
      { label: "B", text: "The violin and the cello belong to the string family." },
      { label: "C", text: "Music lessons can be found at many community centers." },
      { label: "D", text: "Some instruments are more expensive than others." },
    ],
    correctAnswer: "A",
    explanation:
      "A conclusion should pull the essay's points together; A captures that an instrument trains 'far more than the ears and hands.' B classifies instruments, C is about finding lessons, and D is about cost.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 3,
    estimatedTimeSec: 50,
    prompt:
      'A paragraph then describes how desert plants survive long periods without rain. Which sentence is the best introduction?',
    choices: [
      { label: "A", text: "Desert plants have developed remarkable ways to endure months of drought." },
      { label: "B", text: "Deserts can be surprisingly cold at night." },
      { label: "C", text: "Many tourists visit deserts to photograph the scenery." },
      { label: "D", text: "Cactus spines are actually modified leaves." },
    ],
    correctAnswer: "A",
    explanation:
      "The introduction should announce the paragraph's focus — how desert plants survive drought — which A does. B is about temperature, C is about tourism, and D is a single isolated fact, not a topic statement.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'An essay has traced how a polluted river was gradually restored over twenty years. Which sentence best concludes the essay?',
    choices: [
      {
        label: "A",
        text: "The river's slow recovery shows that even deep damage can be undone with patience and steady effort.",
      },
      { label: "B", text: "The river flows for nearly two hundred miles before reaching the sea." },
      { label: "C", text: "Fishing licenses are required in most parts of the state." },
      { label: "D", text: "The cleanup project was first proposed at a town meeting." },
    ],
    correctAnswer: "A",
    explanation:
      "A conclusion should distill the essay's larger lesson; A states that patience and steady effort can undo deep damage. B is a geographic fact, C is about licenses, and D returns to how the project began.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'A passage opens with a paragraph that will describe the surprising intelligence of octopuses. Which sentence is the best opening?',
    choices: [
      {
        label: "A",
        text: "An octopus can open a jar, recognize a familiar face, and slip through a gap the size of a coin.",
      },
      { label: "B", text: "Octopuses live in oceans all over the world." },
      { label: "C", text: "The plural of 'octopus' is sometimes debated." },
      { label: "D", text: "Many sea creatures are difficult to study in the wild." },
    ],
    correctAnswer: "A",
    explanation:
      "An effective opening hooks the reader and previews the topic; A's striking examples promise a discussion of octopus intelligence. B is a plain habitat fact, C is about wording, and D is a general comment about sea creatures.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 4,
    estimatedTimeSec: 55,
    prompt:
      'An essay has explained how a city reduced traffic by improving its bus system. Which sentence best concludes the essay while pointing toward the future?',
    choices: [
      {
        label: "A",
        text: "If the city keeps investing in transit, its streets may grow quieter still in the years ahead.",
      },
      { label: "B", text: "The city's buses are painted blue and white." },
      { label: "C", text: "Traffic is a common complaint in many large cities." },
      { label: "D", text: "The first bus route in the city opened decades ago." },
    ],
    correctAnswer: "A",
    explanation:
      "A forward-looking conclusion should connect the essay's result to the future, which A does by projecting quieter streets. B is about bus color, C is a general complaint, and D looks backward to the system's origin.",
  },
  {
    subject: "ENGLISH",
    reportingCategory: "production_of_writing",
    subSkill: "intros_conclusions",
    difficulty: 5,
    estimatedTimeSec: 65,
    prompt:
      'An essay has described a hiker who set out expecting solitude but found unexpected company on the trail, and it ends by reflecting on what she learned. Which sentence best concludes the essay?',
    choices: [
      {
        label: "A",
        text: "She had gone to the mountains to be alone and came back understanding that she never really wanted to be.",
      },
      { label: "B", text: "The trail was about eight miles long from start to finish." },
      { label: "C", text: "Hiking boots should be broken in before a long hike." },
      { label: "D", text: "The mountains receive heavy snowfall every winter." },
    ],
    correctAnswer: "A",
    explanation:
      "A reflective conclusion should capture the change in the hiker; A contrasts her expectation of solitude with what she learned about herself. B is a distance fact, C is gear advice, and D is about weather.",
  },
];

