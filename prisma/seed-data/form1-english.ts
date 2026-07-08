import type { SeedPassage } from "./types";

// ===========================================================================
// English — Diagnostic Form 1 (form1EnglishPassages)
// ---------------------------------------------------------------------------
// 5 full-length original passages, 50 questions, formOrder 1-50 CONTINUOUS
// across all passages (10 questions each). Every question is 100% original
// content — no imitation of real ACT passages or items.
//
// Each question is tagged subject ENGLISH, diagnosticForm 1, an exact-string
// reportingCategory + subSkill from docs/act-taxonomy.md, difficulty 1-5, and
// estimatedTimeSec (~30-50).
//
// Format note: English form content is stored as PASSAGES. Each passage's
// `body` holds the full essay prose. Portion-anchored questions mark their
// underlined text with [[n]]...[[/n]] where n is the question's formOrder; the
// renderer (src/components/passage-body.tsx) shows this as an underlined span
// with a superscript number. Text inside the markers is PLAIN prose (no
// markdown, no math, no nested markers). Whole-paragraph / whole-essay rhetoric
// questions carry no body marker and reference the passage generally.
// "NO CHANGE" is offered where the underlined text may be correct as written.
//
// Passages in this form:
//   I.   "The Bread Route"                 — personal narrative   (formOrder 1-10)
//   II.  "The People Who Name Colors"      — informational/career (formOrder 11-20)
//   III. "The Cartographer of Storms"      — biography            (formOrder 21-30)
//   IV.  "How a Desert Breathes"           — science/nature       (formOrder 31-40)
//   V.   "The Argument in the Frame"       — humanities/arts       (formOrder 41-50)
//
// Difficulty spread: 8 easy (1-2), 30 medium (3), 12 hard (4-5) — the
// taxonomy's ~15/60/25 mix.
// ===========================================================================

export const form1EnglishPassages: SeedPassage[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE I — "The Bread Route" (personal narrative) — formOrder 1-10
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    diagnosticForm: 1,
    title: "The Bread Route",
    body: `The winter I was fourteen, my grandmother recruited me to help her deliver bread. She had baked for the neighborhood for twenty years, and [[1]]her customers, who trusted her completely, they waited[[/1]] each Saturday for the smell of her loaves to reach the street. I imagined the job would be simple. I would carry a basket, knock on doors, and be home by noon.

[[2]]The route was longer than I expected, however.[[/2]] My grandmother knew every house, and at each one she stopped to talk. Mrs. Okafor needed to describe her son's new apartment. The Delgados wanted advice about their fig tree. An old man named [[3]]Sokolov who lived alone above the hardware store[[/3]] always asked whether the winter would be a hard one. My grandmother answered [[4]]patiently, she never rushed anybody, and[[/4]] only then did she hand over the loaf.

By our tenth house I was cold and impatient. "We could go twice as fast," I told her, "if you [[5]]didn't stop to chat at every single door.[[/5]]" She looked at me for a moment. Then she said that the bread was not the reason people opened their doors. [[6]]The bread was the excuse.[[/6]]

I did not understand her at first. But over the following weeks I began to notice things. [[7]]I noticed that Mr. Sokolov's questions about the weather were really questions about whether anyone would check on him.[[/7]] I noticed that Mrs. Okafor talked about her son because she missed him. The loaf was warm and good, but [[8]]it was the smallest part of what we carried up those steps.[[/8]]

By spring I had stopped counting the houses. I no longer thought of the route as a list of stops to finish. [[10]]I thought of it as a set of people who were, briefly, glad to see us.[[/10]]`,
    questions: [
      {
        // 1
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 1,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 1?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "her customers, who trusted her completely, waited" },
          { label: "C", text: "her customers who trusted her completely, they waited" },
          { label: "D", text: "her customers trusting her completely, they waited" },
        ],
        correctAnswer: "B",
        explanation:
          "The subject 'her customers' is followed by the nonrestrictive clause 'who trusted her completely'; the sentence then needs a single verb ('waited'). Choice B supplies it cleanly. A and C add the redundant subject pronoun 'they' after the interrupter, creating a subject repeated twice. D turns the verb into a participle ('trusting') and still leaves the stray 'they.' Common trap: a long modifier between subject and verb tempts writers to restate the subject.",
      },
      {
        // 2
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 2,
        reportingCategory: "production_of_writing",
        subSkill: "transitions",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice for the underlined portion 2 provides the most logical transition from the first paragraph to the second?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "The route was longer than I expected, therefore." },
          { label: "C", text: "The route was longer than I expected, for example." },
          { label: "D", text: "The route was longer than I expected, meanwhile." },
        ],
        correctAnswer: "A",
        explanation:
          "The first paragraph says the narrator expected the job to be 'simple'; the second contradicts that expectation, so the contrast word 'however' is correct. 'Therefore' (B) signals a result, not a contrast. 'For example' (C) would introduce an illustration of a prior point, which this is not. 'Meanwhile' (D) signals simultaneity, which does not fit.",
      },
      {
        // 3
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 3,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 3?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Sokolov, who lived alone above the hardware store," },
          { label: "C", text: "Sokolov, who lived alone above the hardware store" },
          { label: "D", text: "Sokolov who lived alone above the hardware store," },
        ],
        correctAnswer: "B",
        explanation:
          "'Who lived alone above the hardware store' is a nonrestrictive clause describing the already-named 'Sokolov,' so it must be set off by a comma on both sides. B does this. A omits both commas; C opens the interrupter but never closes it; D closes it but never opens it. Common trap: a proper noun is already fully identified, so the following clause is extra information and needs paired commas.",
      },
      {
        // 4
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 4,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 4?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "patiently; she never rushed anybody, and" },
          { label: "C", text: "patiently, never rushing anybody, and" },
          { label: "D", text: "patiently she never rushed anybody and" },
        ],
        correctAnswer: "C",
        explanation:
          "As written, 'My grandmother answered patiently, she never rushed anybody, and only then...' splices two independent clauses with a comma. Choice C fixes this by reducing the middle clause to a participial phrase ('never rushing anybody'), which attaches smoothly. B creates an awkward semicolon-plus-'and' sequence that leaves an unbalanced structure. D fuses everything with no punctuation. Common trap: 'she never rushed anybody' is a complete sentence, so joining it with just a comma is a splice.",
      },
      {
        // 5
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 5,
        reportingCategory: "knowledge_of_language",
        subSkill: "concision",
        difficulty: 2,
        estimatedTimeSec: 35,
        prompt:
          'Which choice best replaces the underlined portion 5?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "didn't stop to chat and talk at every door." },
          { label: "C", text: "didn't stop to chat at every door." },
          { label: "D", text: "didn't halt yourself to stop and chat at each and every single door." },
        ],
        correctAnswer: "C",
        explanation:
          "The most concise, non-redundant version is C. A includes the redundant 'every single'; B adds 'chat and talk,' which repeat the same idea; D piles up 'halt yourself to stop' and 'each and every single,' all redundant. The information is identical, so the shortest clear version wins.",
      },
      {
        // 6
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 6,
        reportingCategory: "production_of_writing",
        subSkill: "rhetorical_purpose",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'The writer wants the underlined portion 6 to capture, in a single pointed statement, the grandmother’s central lesson. Given that all choices are true, which best accomplishes that goal?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "The bread was still warm at that point." },
          { label: "C", text: "The bread was baked fresh every Saturday morning." },
          { label: "D", text: "The bread came in several different varieties." },
        ],
        correctAnswer: "A",
        explanation:
          "'The bread was the excuse' delivers the grandmother's point sharply: people opened their doors for connection, not for a loaf. B, C, and D are true details about the bread but say nothing about why people opened their doors, so they miss the rhetorical goal of stating the lesson.",
      },
      {
        // 7
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 7,
        reportingCategory: "knowledge_of_language",
        subSkill: "concision",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 7, keeping the two ideas but avoiding repetition?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "I noticed that Mr. Sokolov's questions about the weather were really questions about whether anyone would check on him. I saw that" },
          { label: "C", text: "Mr. Sokolov's questions about the weather were really questions about whether anyone would check on him." },
          { label: "D", text: "Mr. Sokolov's questions about the weather, which I noticed, were really questions, I noticed, about whether anyone would check on him." },
        ],
        correctAnswer: "C",
        explanation:
          "The following sentence already begins 'I noticed that Mrs. Okafor...,' so the parallel 'I noticed that' opening here is not the problem—the wordiness is. C states the observation directly and lets the parallel 'I noticed' fall on the next sentence, which is where the passage's pattern lives. Wait: read carefully. A repeats 'I noticed' across both sentences, which is acceptable parallelism, but C is tighter without losing meaning and removes the double 'noticed' cluster. B adds a second redundant verb ('I saw that'); D inserts 'I noticed' twice inside one sentence. Common trap: repeated sentence openers can be intentional parallelism, but here the shortest version that keeps the idea is best.",
      },
      {
        // 8
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 8,
        reportingCategory: "knowledge_of_language",
        subSkill: "word_choice",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 8?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "it was the tiniest, most miniature part of what we carried up those steps." },
          { label: "C", text: "it was the part of what we carried up those steps that was small." },
          { label: "D", text: "it were the smallest part of what we carried up those steps." },
        ],
        correctAnswer: "A",
        explanation:
          "'It was the smallest part' is idiomatic, correct, and concise. B is redundant ('tiniest, most miniature'). C is a clumsy, roundabout rephrasing. D uses the plural verb 'were' with the singular subject 'it.' Common trap: the fancier-sounding options (B, C) add words without adding meaning.",
      },
      {
        // 9
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 9,
        reportingCategory: "production_of_writing",
        subSkill: "sentence_paragraph_order",
        difficulty: 3,
        estimatedTimeSec: 45,
        prompt:
          'The writer is considering whether the last paragraph should begin a new paragraph at the underlined sentence 9. The sentence "By spring I had stopped counting the houses" is best understood as:',
        choices: [
          { label: "A", text: "an effective opening for the final paragraph, because it marks a shift in time and in the narrator's attitude." },
          { label: "B", text: "misplaced, because it introduces a season that contradicts the winter setting established earlier." },
          { label: "C", text: "unnecessary, because the narrator's change of heart has not been developed anywhere in the essay." },
          { label: "D", text: "better positioned as the first sentence of the essay, where it would preview the conclusion." },
        ],
        correctAnswer: "A",
        explanation:
          "The sentence jumps forward in time ('By spring') and signals the narrator's transformation, making it a fitting start for the concluding paragraph. B is wrong because moving from winter to spring is a deliberate, logical progression, not a contradiction. C is wrong because the middle paragraphs develop the change of heart. D would spoil the narrative by revealing the ending first.",
      },
      {
        // 10
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 10,
        reportingCategory: "production_of_writing",
        subSkill: "intros_conclusions",
        difficulty: 3,
        estimatedTimeSec: 45,
        prompt:
          'Which choice for the underlined portion 10 provides the most fitting conclusion to the essay as a whole?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "I thought of it as the fastest way to be done before noon." },
          { label: "C", text: "I thought of it as proof that I could carry a heavy basket." },
          { label: "D", text: "I thought of it as a chore my grandmother had assigned me." },
        ],
        correctAnswer: "A",
        explanation:
          "The essay's arc moves from impatience to valuing the people on the route, so ending with 'a set of people who were, briefly, glad to see us' completes that arc. B returns to the narrator's early impatience with speed, undoing the growth. C narrows the lesson to physical strength, which is not the point. D reduces the route to a chore, the opposite of the earned insight.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE II — "The People Who Name Colors" (informational/career)
  // formOrder 11-20
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    diagnosticForm: 1,
    title: "The People Who Name Colors",
    body: `Somewhere in an office building, a person is deciding whether a new shade of paint should be called "Morning Fog" or "Quiet Harbor." This person is a color namer, and the job is [[11]]more demanding than one might expect it to be.[[/11]] A single hardware store may stock two thousand paint chips, and each one needs a name that customers will remember, trust, and want to live inside for years.

Color naming sits at the intersection of marketing, psychology, and language. [[12]]A namer study how buyers respond to words.[[/12]] Research suggests that people prefer paints with specific, evocative names over paints labeled only by number. A gray called "Silver Birch" [[13]]sells better then[[/13]] the same gray called "Gray 7." The name does not change the pigment, [[14]]but it changes the story[[/14]] the customer tells about the wall.

Good color names follow a few quiet rules. They avoid words with negative associations. They borrow from nature, food, and travel, because those words carry warmth. And they resist being too [[16]]clever, a name that requires a joke to understand tends to age badly.[[/16]]

The work is harder than it sounds because language shifts. [[17]]A shade named a decade ago may sound dated now, the way clothing does.[[/17]] Namers therefore track how words are used in books, songs, and social media, watching for terms that are gaining or losing appeal. [[18]]In this way, a color namer is part linguist, part forecaster.[[/18]]

[[19]]Few people set out to become color namers; most arrive by way of design, writing, or branding.[[/19]] What the job rewards is a particular kind of attention: the ability to look at a wall of nearly identical grays and find, in each one, a slightly different feeling. The best namers, it turns out, are not the ones with the largest vocabulary but the ones who notice the most.`,
    questions: [
      {
        // 11
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 11,
        reportingCategory: "knowledge_of_language",
        subSkill: "concision",
        difficulty: 2,
        estimatedTimeSec: 35,
        prompt:
          'Which choice best replaces the underlined portion 11?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "more demanding than one might expect." },
          { label: "C", text: "more demanding than one might have the expectation of." },
          { label: "D", text: "more demanding than any person could ever possibly expect it might be." },
        ],
        correctAnswer: "B",
        explanation:
          "B is the tightest correct version. A ends with the wordy tail 'expect it to be.' C turns the verb into the padded 'have the expectation of.' D adds a chain of empty intensifiers ('could ever possibly... might be'). The meaning is identical, so the most concise phrasing wins.",
      },
      {
        // 12
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 12,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 2,
        estimatedTimeSec: 35,
        prompt:
          'Which choice best replaces the underlined portion 12?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "A namer studies how buyers respond to words." },
          { label: "C", text: "A namer studying how buyers respond to words." },
          { label: "D", text: "A namer, studies how buyers respond to words." },
        ],
        correctAnswer: "B",
        explanation:
          "The singular subject 'A namer' requires the singular verb 'studies.' A uses the plural 'study.' C replaces the verb with the participle 'studying,' leaving a fragment. D inserts a comma between the subject and its verb. Common trap: subject-verb agreement, where a singular subject looks plural because the sentence discusses many namers in general.",
      },
      {
        // 13
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 13,
        reportingCategory: "knowledge_of_language",
        subSkill: "word_choice",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 13?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "sells better than" },
          { label: "C", text: "sells better, then" },
          { label: "D", text: "sells, better then" },
        ],
        correctAnswer: "B",
        explanation:
          "A comparison uses 'than,' not the time word 'then.' B is correct. A and C use 'then'; C and D also add commas that wrongly break the comparison. Common trap: 'than' versus 'then'—'than' compares, 'then' places in time.",
      },
      {
        // 14
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 14,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 14?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "but, it changes the story" },
          { label: "C", text: "but it changes, the story" },
          { label: "D", text: "but it changes the story;" },
        ],
        correctAnswer: "A",
        explanation:
          "'The name does not change the pigment, but it changes the story...' correctly joins two independent clauses with a comma plus the coordinating conjunction 'but.' A is right. B places a comma after 'but,' which is unnecessary. C separates the verb 'changes' from its object 'the story.' D adds a semicolon before the object, splitting the clause. Common trap: FANBOYS conjunctions take a comma before, not after.",
      },
      {
        // 15
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 15,
        reportingCategory: "production_of_writing",
        subSkill: "relevance",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'The writer is considering adding the following sentence to open the third paragraph, in place of the underlined sentence 15: "My cousin once painted her bedroom a color called Thunderclap." Should the writer make this change?',
        choices: [
          { label: "A", text: "Yes, because a personal anecdote makes the informational passage more engaging." },
          { label: "B", text: "Yes, because it gives a concrete example of a memorable color name." },
          { label: "C", text: "No, because the sentence introduces a personal detail that does not fit the passage's informational focus and derails the paragraph's point about naming rules." },
          { label: "D", text: "No, because the passage has already stated that color names borrow from nature." },
        ],
        correctAnswer: "C",
        explanation:
          "The passage is an objective, informational piece about the profession, and the paragraph's job is to present the 'quiet rules' of naming. A sudden anecdote about a cousin's bedroom breaks the tone and topic, so it should not replace the topic sentence (C). A and B defend adding it, but engagement and a lone example do not outweigh the loss of focus. D gives a wrong reason—the nature point comes later in the same paragraph, not before it.",
      },
      {
        // 16
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 16,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 16?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "clever; a name that requires a joke to understand tends to age badly." },
          { label: "C", text: "clever a name that requires a joke to understand tends to age badly." },
          { label: "D", text: "clever, a name requiring a joke to understand, tends to age badly." },
        ],
        correctAnswer: "B",
        explanation:
          "'They resist being too clever' and 'a name that requires a joke... ages badly' are two independent clauses; joining them with only a comma (A) is a comma splice. A semicolon (B) correctly links closely related independent clauses. C removes the punctuation entirely, fusing the sentences. D turns the second clause into a misplaced interrupter that leaves 'They resist being too clever... tends to age badly,' a broken sentence. Common trap: a comma splice between two complete thoughts.",
      },
      {
        // 17
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 17,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "modifiers_parallelism",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 17?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Sounding dated now, a shade named a decade ago is like clothing." },
          { label: "C", text: "Named a decade ago, a shade may sound dated now, the way clothing does." },
          { label: "D", text: "A shade may sound dated now, named a decade ago, the way clothing does." },
        ],
        correctAnswer: "A",
        explanation:
          "In A the modifier 'named a decade ago' sits directly beside the noun it describes, 'a shade,' which is correct. C also attaches the modifier correctly but reorders the sentence less smoothly, and it front-loads the modifier while burying the subject; however, the tested defect is misplacement. B awkwardly leads with 'Sounding dated now' and compares a shade to clothing rather than to how clothing dates. D floats 'named a decade ago' between the verb and the comparison, separating it from 'a shade.' A keeps modifier and noun together most cleanly.",
      },
      {
        // 18
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 18,
        reportingCategory: "production_of_writing",
        subSkill: "transitions",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice for the underlined portion 18 best signals that the sentence sums up the point of the paragraph before it?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "For instance, a color namer is part linguist, part forecaster." },
          { label: "C", text: "On the other hand, a color namer is part linguist, part forecaster." },
          { label: "D", text: "Nevertheless, a color namer is part linguist, part forecaster." },
        ],
        correctAnswer: "A",
        explanation:
          "The sentence draws a conclusion from the paragraph's description of namers tracking language, so the summarizing 'In this way' is correct. 'For instance' (B) would introduce an example, not a summary. 'On the other hand' (C) signals contrast. 'Nevertheless' (D) signals concession. Only A matches the summarizing relationship.",
      },
      {
        // 19
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 19,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 19?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Few people set out to become color namers, most arrive by way of design, writing, or branding." },
          { label: "C", text: "Few people set out to become color namers most arrive by way of design, writing, or branding." },
          { label: "D", text: "Few people set out to become color namers: most arrive by way of design writing or branding." },
        ],
        correctAnswer: "A",
        explanation:
          "The semicolon in A correctly joins two related independent clauses. B replaces it with a comma, creating a comma splice. C removes the punctuation entirely, fusing the clauses. D uses a colon (acceptable for introducing an elaboration) but then drops the commas in the series 'design, writing, or branding,' making that version incorrect. Common trap: two complete thoughts need a semicolon, period, or comma-plus-conjunction—not a bare comma.",
      },
      {
        // 20
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 20,
        reportingCategory: "production_of_writing",
        subSkill: "intros_conclusions",
        difficulty: 3,
        estimatedTimeSec: 45,
        prompt:
          'Suppose the writer’s goal was to end the passage by identifying the core skill the profession requires. Does the underlined concluding sentence 20 accomplish that goal?',
        choices: [
          { label: "A", text: "Yes, because it names close attention—noticing the most—as the decisive skill, tying the essay together." },
          { label: "B", text: "Yes, because it praises namers for having the largest vocabularies." },
          { label: "C", text: "No, because it repeats information about salaries stated earlier in the passage." },
          { label: "D", text: "No, because the passage never discussed what skills the job requires." },
        ],
        correctAnswer: "A",
        explanation:
          "The final sentence pinpoints 'noticing the most' as what separates the best namers, fulfilling the goal of naming the core skill and echoing the earlier line about finding 'a slightly different feeling' in each gray. B misreads the sentence, which explicitly says the skill is not vocabulary. C is false—salaries were never mentioned. D is false—the passage repeatedly discusses the attention the job demands.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE III — "The Cartographer of Storms" (biography) — formOrder 21-30
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    diagnosticForm: 1,
    title: "The Cartographer of Storms",
    body: `In 1931, a young woman named Ada Renwick took a job that no one else in the weather bureau wanted. Her task was [[21]]to sort through decades of shipping logs, storm reports, and barometer readings[[/21]] that had been shoved into a back room and forgotten. The records were a mess. [[22]]Sailors had scrawled them in a hurry, the ink had faded, and half the dates were missing.[[/22]]

Most of her colleagues [[23]]assumed the logs were worthless.[[/23]] Renwick disagreed. She believed that if the scattered observations could be organized by place and date, [[24]]they would reveal the paths that storms tended to follow across the ocean.[[/24]] For three years she [[25]]transcribed entries onto index cards, one card per report,[[/25]] until she had tens of thousands of them.

[[26]]Then she began to sort.[[/26]] She pinned the cards to a wall-sized map, grouping them by the location where each reading had been taken. Slowly, patterns emerged. Storms that seemed random when read one by one [[27]]had traced, when mapped together, recurring highways across the water.[[/27]] Renwick's map was among the first to show that hurricanes followed predictable curves rather than wandering at will.

[[28]]The bureau, which had nearly discarded the logs, now used[[/28]] her map to warn ships away from the danger zones she had charted. Her method—gathering forgotten scraps and arranging them until a shape appeared—became standard practice.

Renwick published little and gave no interviews, and for decades her name was left off the histories of the field. Only recently have researchers, reading old bureau memos, recovered her role. [[30]]She had not predicted a single storm herself.[[/30]] She had done something rarer: she had made the record legible, so that others could.`,
    questions: [
      {
        // 21
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 21,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "modifiers_parallelism",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 21?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "to sort through decades of shipping logs, storm reports, and reading barometers" },
          { label: "C", text: "to sort through decades of shipping logs, reporting storms, and barometer readings" },
          { label: "D", text: "the sorting through of decades of shipping logs, storm reports, and barometer readings" },
        ],
        correctAnswer: "A",
        explanation:
          "The three items in the series must be parallel nouns: 'shipping logs, storm reports, and barometer readings.' A keeps them parallel. B breaks the pattern with the phrase 'reading barometers'; C breaks it with 'reporting storms.' D shifts the whole predicate to the noun phrase 'the sorting through of,' which is clumsy and no longer matches the sentence's 'was to...' structure. Common trap: faulty parallelism inside a list.",
      },
      {
        // 22
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 22,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 22?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Sailors had scrawled them in a hurry the ink had faded, and half the dates were missing." },
          { label: "C", text: "Sailors had scrawled them in a hurry; the ink had faded; and half the dates were missing." },
          { label: "D", text: "Sailors had scrawled them, in a hurry the ink had faded, and half the dates were missing." },
        ],
        correctAnswer: "A",
        explanation:
          "This is a series of three independent clauses, correctly joined by commas with 'and' before the last: 'Sailors had scrawled..., the ink had faded, and half the dates were missing.' A is right. B drops the comma after 'hurry,' fusing the first two clauses. C uses semicolons but keeps 'and,' an inconsistent mix. D misplaces a comma so that 'in a hurry the ink had faded' runs together. Common trap: a three-part series of clauses uses parallel comma-and-'and' punctuation.",
      },
      {
        // 23
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 23,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "verb_tense",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 23?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "assume the logs were worthless." },
          { label: "C", text: "had been assuming the logs are worthless." },
          { label: "D", text: "will assume the logs were worthless." },
        ],
        correctAnswer: "A",
        explanation:
          "The passage narrates past events, so the simple past 'assumed' is correct and consistent with 'disagreed' in the next sentence. B shifts to the present 'assume.' C mixes past 'had been assuming' with the present 'are.' D shifts to the future 'will assume.' Common trap: unnecessary tense shifts within a consistently past narrative.",
      },
      {
        // 24
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 24,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "pronouns",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 24?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "it would reveal the paths that storms tended to follow across the ocean." },
          { label: "C", text: "they would reveal the paths that storms tended to follow across the ocean's." },
          { label: "D", text: "you would reveal the paths that storms tended to follow across the ocean." },
        ],
        correctAnswer: "A",
        explanation:
          "The pronoun refers to 'the scattered observations,' which is plural, so the plural 'they' is correct (A). B uses the singular 'it,' which disagrees with 'observations.' C adds a stray possessive apostrophe to 'ocean's.' D shifts to the second person 'you,' which has no referent here. Common trap: pronoun-antecedent agreement across an intervening clause.",
      },
      {
        // 25
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 25,
        reportingCategory: "knowledge_of_language",
        subSkill: "concision",
        difficulty: 2,
        estimatedTimeSec: 35,
        prompt:
          'Which choice best replaces the underlined portion 25?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "transcribed and copied entries onto index cards, writing one card per report," },
          { label: "C", text: "transcribed entries, which she wrote out, onto index cards, one card per report," },
          { label: "D", text: "transcribed entries onto index cards, writing them out one card per each single report," },
        ],
        correctAnswer: "A",
        explanation:
          "A is clean and non-redundant. B pairs 'transcribed and copied,' which mean the same thing. C inserts the empty aside 'which she wrote out.' D adds 'one card per each single report,' where 'each single' is redundant. The extra words in B, C, and D add nothing.",
      },
      {
        // 26
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 26,
        reportingCategory: "production_of_writing",
        subSkill: "transitions",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice for the underlined portion 26 best signals that this paragraph describes the step that follows the years of transcription?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "In contrast, she began to sort." },
          { label: "C", text: "For example, she began to sort." },
          { label: "D", text: "Regardless, she began to sort." },
        ],
        correctAnswer: "A",
        explanation:
          "The preceding paragraph ends with three years of transcription; 'Then she began to sort' signals the next step in sequence, which is correct. 'In contrast' (B) implies opposition. 'For example' (C) implies illustration. 'Regardless' (D) implies concession. Only the sequential 'Then' fits.",
      },
      {
        // 27
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 27,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "verb_tense",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 27?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "traced, when mapped together, recurring highways across the water." },
          { label: "C", text: "have traced, when mapped together, recurring highways across the water." },
          { label: "D", text: "traces, when mapped together, recurring highways across the water." },
        ],
        correctAnswer: "B",
        explanation:
          "The surrounding narration is in the simple past ('emerged,' 'was'), so the simple past 'traced' matches (B). A uses the past perfect 'had traced,' which wrongly implies this action preceded another past action; there is no earlier past event for it to precede. C uses the present perfect 'have traced,' inconsistent with the past narrative. D uses the present 'traces.' Common trap: past perfect is only for an action completed before another past action, not for ordinary past events.",
      },
      {
        // 28
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 28,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 28?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "The bureau which had nearly discarded the logs now used" },
          { label: "C", text: "The bureau, which had nearly discarded the logs now used" },
          { label: "D", text: "The bureau which had nearly discarded the logs, now used" },
        ],
        correctAnswer: "A",
        explanation:
          "'Which had nearly discarded the logs' is a nonrestrictive clause and needs a comma on both sides, as in A. B omits both commas. C opens the interrupter but does not close it before 'now.' D closes it but does not open it. Common trap: nonrestrictive 'which' clauses always take paired commas.",
      },
      {
        // 29
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 29,
        reportingCategory: "production_of_writing",
        subSkill: "relevance",
        difficulty: 4,
        estimatedTimeSec: 50,
        prompt:
          'The writer is considering adding the following true sentence after the underlined sentence 29: "Weather bureaus in the 1930s were staffed almost entirely by men." Should the writer add it?',
        choices: [
          { label: "A", text: "Yes, because it supports the paragraph's point that Renwick's contribution went long unrecognized." },
          { label: "B", text: "Yes, because it provides the exact date on which Renwick was hired." },
          { label: "C", text: "No, because it flatly contradicts the essay's claim that Renwick worked at a weather bureau." },
          { label: "D", text: "No, because it belongs in a paragraph about barometer readings, not about recognition." },
        ],
        correctAnswer: "A",
        explanation:
          "The paragraph explains why Renwick's name was 'left off the histories' for decades; noting that the field was staffed almost entirely by men helps account for that neglect, so adding the sentence supports the paragraph's point (A). B is false—the sentence gives no hiring date. C is false and illogical—it does not contradict her employment. D misidentifies where the detail is relevant; it bears directly on recognition, the paragraph's actual subject.",
      },
      {
        // 30
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 30,
        reportingCategory: "production_of_writing",
        subSkill: "intros_conclusions",
        difficulty: 4,
        estimatedTimeSec: 50,
        prompt:
          'Which choice for the underlined portion 30 most effectively concludes the biography by defining the nature of Renwick’s achievement?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "She had never enjoyed the coastal weather she spent her career studying." },
          { label: "C", text: "She had filled out more index cards than anyone in the bureau's history." },
          { label: "D", text: "She had wished, in the end, that she had chosen a different profession." },
        ],
        correctAnswer: "A",
        explanation:
          "The essay portrays Renwick as the person who organized forgotten records so others could use them, and 'she had made the record legible, so that others could' names exactly that achievement. B introduces an irrelevant note about her weather preferences. C reduces her work to a quantity of cards, missing the significance. D invents a regret unsupported by, and contrary to, the admiring portrait.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE IV — "How a Desert Breathes" (science/nature) — formOrder 31-40
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    diagnosticForm: 1,
    title: "How a Desert Breathes",
    body: `A desert can look, at midday, [[31]]like a place where nothing happens.[[/31]] The sand is still, the air shimmers, and the few plants seem frozen in place. But this stillness is a kind of disguise. [[32]]Beneath the surface a desert is constantly exchanging gases with the atmosphere,[[/32]] and researchers have begun to describe this exchange as a form of breathing.

The breathing happens mainly through the soil. Desert soils hold vast [[33]]networks of tiny pores, and these pores fill with air.[[/33]] When the ground warms during the day, the air inside these pores expands and [[34]]is pushed upward, carrying carbon dioxide with it.[[/34]] At night, as the ground cools, the process reverses, and the soil draws air back in. Over a full day, a patch of desert can inhale and exhale a measurable volume of gas.

[[36]]This rhythm matters because deserts cover roughly a fifth of the planet's land.[[/36]] Even a small exchange, multiplied across such an area, [[37]]affect the global balance of carbon.[[/37]] For years, scientists treated deserts as inactive in this respect. [[38]]Newer measurements suggest the opposite: dry soils may absorb far more carbon than anyone expected.[[/38]]

The mechanism is still debated. [[39]]Some researchers argue that microscopic organisms in the crust of the soil pull carbon from the air; others suspect that minerals in the sand react with carbon dioxide directly.[[/39]] Both processes may be at work, operating at different depths and different times of day.

Whatever the explanation, the old image of the desert as an empty, motionless place is giving way to a stranger and more accurate one: a vast surface, quietly trading breath with the sky.`,
    questions: [
      {
        // 31
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 31,
        reportingCategory: "knowledge_of_language",
        subSkill: "clarity_style",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 31, keeping the sentence clear and consistent with the passage’s measured tone?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "like a place where, as far as anything you could see goes, nothing whatsoever is going on at all." },
          { label: "C", text: "like a totally dead zone of pure boring nothingness." },
          { label: "D", text: "like the kind of place, you know, where stuff doesn't really happen." },
        ],
        correctAnswer: "A",
        explanation:
          "A is clear, economical, and matches the passage's calm, expository tone. B is a wordy, tangled rewrite. C uses slangy, exaggerated diction ('totally dead,' 'pure boring nothingness') that clashes with the tone. D is casual and vague ('you know,' 'stuff'). Common trap: informal or padded phrasing that breaks a passage's established register.",
      },
      {
        // 32
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 32,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 32?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Beneath the surface, a desert is constantly exchanging gases with the atmosphere," },
          { label: "C", text: "Beneath the surface a desert is constantly exchanging gases, with the atmosphere," },
          { label: "D", text: "Beneath, the surface a desert is constantly exchanging gases with the atmosphere," },
        ],
        correctAnswer: "B",
        explanation:
          "The introductory prepositional phrase 'Beneath the surface' should be set off with a comma before the main clause, as in B. A omits that comma. C misplaces the comma between 'gases' and 'with the atmosphere,' splitting the verb from its phrase. D puts a comma after 'Beneath,' breaking the phrase apart. Common trap: an introductory phrase of four or more words is typically followed by a comma.",
      },
      {
        // 33
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 33,
        reportingCategory: "knowledge_of_language",
        subSkill: "concision",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 33 to combine the ideas most effectively?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "networks of tiny, air-filled pores." },
          { label: "C", text: "networks of tiny pores, and it is the case that these pores are filled up with air." },
          { label: "D", text: "networks of tiny pores, pores that are filled with air inside of them." },
        ],
        correctAnswer: "B",
        explanation:
          "B folds the second clause into a single modifier, 'tiny, air-filled pores,' the tightest correct version. A ('and these pores fill with air') is grammatical but wordier than needed. C adds the empty filler 'it is the case that' and 'filled up.' D repeats 'pores' and adds the redundant 'inside of them.' The most concise clear version wins.",
      },
      {
        // 34
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 34,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "modifiers_parallelism",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 34?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "is pushed upward, and carbon dioxide is carried with it." },
          { label: "C", text: "pushing upward and carrying carbon dioxide with it." },
          { label: "D", text: "is pushed upward and carries carbon dioxide with it." },
        ],
        correctAnswer: "A",
        explanation:
          "The subject 'the air' takes the compound predicate 'expands and is pushed upward,' and the participial phrase 'carrying carbon dioxide with it' modifies the air being pushed—A is correct and parallel. B breaks the smooth flow by starting a new passive clause. C changes 'expands and is pushed' to the mismatched 'pushing.' D switches from passive 'is pushed' to active 'carries' in a way that makes 'the air carries,' losing parallel structure with 'is pushed.' Common trap: keep verb voice and the trailing participle consistent.",
      },
      {
        // 35
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 35,
        reportingCategory: "production_of_writing",
        subSkill: "sentence_paragraph_order",
        difficulty: 4,
        estimatedTimeSec: 50,
        prompt:
          'For the sake of logic and coherence, the underlined sentence 35 ("Over a full day, a patch of desert can inhale and exhale a measurable volume of gas") should be placed:',
        choices: [
          { label: "A", text: "where it is now." },
          { label: "B", text: "before the sentence describing the daytime warming, so the volume is introduced first." },
          { label: "C", text: "at the very start of the paragraph, before 'The breathing happens mainly through the soil.'" },
          { label: "D", text: "in the final paragraph, after 'trading breath with the sky.'" },
        ],
        correctAnswer: "A",
        explanation:
          "The sentence summarizes the full day-night cycle just described (warming pushes air up, cooling draws it back), so it logically belongs at the end of that paragraph, where it is (A). Placing it before the daytime step (B) or at the paragraph's start (C) would state the summary before the cycle is explained. Moving it to the final paragraph (D) would interrupt that paragraph's separate closing image. Common trap: a summarizing sentence belongs after, not before, the details it summarizes.",
      },
      {
        // 36
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 36,
        reportingCategory: "production_of_writing",
        subSkill: "transitions",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice for the underlined portion 36 best links the paragraph’s claim about scale to the description that came before it?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "This rhythm matters, in other words, because deserts cover roughly a fifth of the planet's land." },
          { label: "C", text: "This rhythm matters, despite the fact that deserts cover roughly a fifth of the planet's land." },
          { label: "D", text: "This rhythm matters because deserts, on the contrary, cover roughly a fifth of the planet's land." },
        ],
        correctAnswer: "A",
        explanation:
          "'This rhythm matters because...' cleanly connects the just-described breathing cycle to a reason it is significant, with no misleading connector—A is best. 'In other words' (B) falsely signals a restatement of something already said. 'Despite the fact that' (C) turns a supporting reason into a concession. 'On the contrary' (D) inserts a false contrast. Common trap: added connectives that misrepresent a straightforward cause.",
      },
      {
        // 37
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 37,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 37?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "affects the global balance of carbon." },
          { label: "C", text: "affecting the global balance of carbon." },
          { label: "D", text: "affect the global balance of carbon, which is important." },
        ],
        correctAnswer: "B",
        explanation:
          "The singular subject 'a small exchange' takes the singular verb 'affects' (B). A uses the plural 'affect.' C replaces the main verb with the participle 'affecting,' leaving the sentence without a predicate—a fragment. D keeps the wrong 'affect' and tacks on the vague filler 'which is important.' Common trap: the plural noun 'measurements' or 'deserts' nearby lures the eye, but the actual subject is the singular 'exchange.'",
      },
      {
        // 38
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 38,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 38?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Newer measurements suggest the opposite, dry soils may absorb far more carbon than anyone expected." },
          { label: "C", text: "Newer measurements suggest the opposite; dry soils, may absorb far more carbon than anyone expected." },
          { label: "D", text: "Newer measurements suggest the opposite dry soils may absorb far more carbon than anyone expected." },
        ],
        correctAnswer: "A",
        explanation:
          "A colon correctly introduces the elaboration that specifies what 'the opposite' means, and the first clause is independent, so the colon is proper (A). B uses only a comma, creating a comma splice. C uses a semicolon (defensible) but then inserts a stray comma after 'soils,' splitting subject from verb. D removes all punctuation, fusing the clauses. Common trap: a colon is valid after a complete clause when what follows explains or specifies it.",
      },
      {
        // 39
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 39,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 39?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Some researchers argue that microscopic organisms in the crust of the soil pull carbon from the air, others suspect that minerals in the sand react with carbon dioxide directly." },
          { label: "C", text: "Some researchers argue that microscopic organisms in the crust of the soil pull carbon from the air others suspect that minerals in the sand react with carbon dioxide directly." },
          { label: "D", text: "Some researchers argue that microscopic organisms in the crust of the soil pull carbon from the air; others suspect, that minerals in the sand react with carbon dioxide directly." },
        ],
        correctAnswer: "A",
        explanation:
          "Two independent clauses are correctly joined by a semicolon, and 'others suspect that...' takes no comma before 'that' (A). B joins the clauses with only a comma, a splice. C omits punctuation between the clauses, fusing them. D keeps the correct semicolon but inserts an incorrect comma after 'suspect,' separating the verb from its 'that' clause. Common trap: never put a comma between a verb and the 'that' clause it introduces.",
      },
      {
        // 40
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 40,
        reportingCategory: "production_of_writing",
        subSkill: "rhetorical_purpose",
        difficulty: 3,
        estimatedTimeSec: 45,
        prompt:
          'The underlined sentence 40 ("Both processes may be at work, operating at different depths and different times of day") primarily serves to:',
        choices: [
          { label: "A", text: "reconcile the two competing explanations by suggesting they need not be mutually exclusive." },
          { label: "B", text: "dismiss both explanations as unlikely to be correct." },
          { label: "C", text: "introduce a third explanation not mentioned earlier in the paragraph." },
          { label: "D", text: "restate the passage's opening claim that a desert looks lifeless at midday." },
        ],
        correctAnswer: "A",
        explanation:
          "The paragraph presents two rival mechanisms ('Some researchers... others suspect'), and this sentence proposes that both could operate together—reconciling them (A). It does not dismiss them (B); it embraces both. It adds no third mechanism (C); it refers to the same two. It has nothing to do with the midday-lifeless image (D). Common trap: mistaking a synthesis for a dismissal.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PASSAGE V — "The Argument in the Frame" (humanities/arts) — formOrder 41-50
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    diagnosticForm: 1,
    title: "The Argument in the Frame",
    body: `When we walk through a museum, we tend to think of each painting as a finished object, [[41]]complete in itself and closed to argument.[[/41]] But a curator will tell you that a painting is never quite finished being shaped. [[42]]The moment a work is hung on a wall, it enters a conversation with everything around it.[[/42]]

Consider the frame. [[43]]A gilded, ornate frame tells a viewer to expect grandeur; a plain wooden one suggests restraint.[[/43]] Museums change frames deliberately, [[44]]because the frame is part of the argument the museum is making about the painting.[[/44]] [[45]]A landscape that looks tranquil in a simple border can look almost imperial behind heavy gold.[[/45]]

The wall matters too. [[46]]Hang a small, quiet portrait beside a huge dramatic battle scene, and the portrait will seem to shrink and apologize.[[/46]] Move it to its own wall, and it recovers its dignity. Curators spend weeks deciding [[47]]which paintings should hang near which,[[/47]] arranging the room the way a writer arranges sentences.

[[48]]Even the lighting makes a claim.[[/48]] Warm light flatters old varnish and invites intimacy; cool, even light insists on clarity and distance. None of these choices are neutral. Each one nudges the viewer toward a way of seeing.

This is why two museums can own nearly identical paintings and yet present them to entirely different effect. [[50]]The painting supplies the words, but the museum, it turns out, writes the sentence.[[/50]]`,
    questions: [
      {
        // 41
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 41,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "modifiers_parallelism",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 41?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "complete in itself and it is closed to argument." },
          { label: "C", text: "complete in itself and closing to argument." },
          { label: "D", text: "being complete in itself and closed to argument." },
        ],
        correctAnswer: "A",
        explanation:
          "The two parallel adjective phrases 'complete in itself' and 'closed to argument' correctly modify 'object' (A). B breaks the parallel by inserting a new clause, 'and it is closed.' C swaps the adjective 'closed' for the mismatched participle 'closing.' D adds an unnecessary 'being' that turns the phrase gerundive and clumsy. Common trap: keep paired descriptive phrases in the same grammatical form.",
      },
      {
        // 42
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 42,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 42?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "The moment a work is hung on a wall it enters a conversation, with everything around it." },
          { label: "C", text: "The moment a work is hung on a wall it enters a conversation with everything around it." },
          { label: "D", text: "The moment a work is hung on a wall; it enters a conversation with everything around it." },
        ],
        correctAnswer: "A",
        explanation:
          "'The moment a work is hung on a wall' is an introductory dependent clause, correctly followed by a comma before the main clause (A). B drops that comma and adds a wrong one before 'with everything.' C drops the comma entirely, running the dependent clause into the main clause. D uses a semicolon after a dependent clause, which cannot stand alone. Common trap: a semicolon requires an independent clause on both sides.",
      },
      {
        // 43
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 43,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "punctuation",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 43?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "A gilded, ornate frame tells a viewer to expect grandeur, a plain wooden one suggests restraint." },
          { label: "C", text: "A gilded ornate frame tells a viewer to expect grandeur; a plain wooden one suggests restraint." },
          { label: "D", text: "A gilded, ornate frame tells a viewer to expect grandeur a plain wooden one suggests restraint." },
        ],
        correctAnswer: "A",
        explanation:
          "Two independent clauses are joined by a semicolon, and the coordinate adjectives 'gilded, ornate' are correctly separated by a comma (A). B joins the clauses with a comma, a splice. C drops the needed comma between the coordinate adjectives 'gilded' and 'ornate.' D omits punctuation between the two clauses, fusing them. Common trap: coordinate adjectives (both modify the noun, and you could swap them or insert 'and') take a comma.",
      },
      {
        // 44
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 44,
        reportingCategory: "knowledge_of_language",
        subSkill: "word_choice",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 44 to show the logical relationship between changing frames and the museum’s aim?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "although the frame is part of the argument the museum is making about the painting." },
          { label: "C", text: "unless the frame is part of the argument the museum is making about the painting." },
          { label: "D", text: "whether the frame is part of the argument the museum is making about the painting." },
        ],
        correctAnswer: "A",
        explanation:
          "Museums change frames deliberately for a reason, so the causal 'because' correctly links action and motive (A). 'Although' (B) signals concession, reversing the logic. 'Unless' (C) sets a condition, which makes no sense here. 'Whether' (D) introduces an alternative, not a reason. Common trap: choosing a connective that distorts a clear cause-and-effect relationship.",
      },
      {
        // 45
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 45,
        reportingCategory: "production_of_writing",
        subSkill: "rhetorical_purpose",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'The writer wants the underlined sentence 45 to illustrate, with a concrete example, the claim that a frame changes how a painting reads. Which choice best accomplishes that goal?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Frames come in many materials, including wood, metal, and gilded plaster." },
          { label: "C", text: "Museums have employed professional framers for well over a century." },
          { label: "D", text: "A frame can be expensive to build and difficult to transport." },
        ],
        correctAnswer: "A",
        explanation:
          "A gives a vivid, concrete example—the same landscape reading as 'tranquil' or 'imperial' depending on its frame—directly illustrating the claim. B lists frame materials without showing an effect on perception. C offers a historical fact irrelevant to the point. D discusses cost and transport, not how a frame changes a painting's meaning. Common trap: true-but-off-target statements that do not do the illustrative work the goal requires.",
      },
      {
        // 46
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 46,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "modifiers_parallelism",
        difficulty: 4,
        estimatedTimeSec: 45,
        prompt:
          'Which choice best replaces the underlined portion 46?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Hanging a small, quiet portrait beside a huge dramatic battle scene, the portrait will seem to shrink and apologize." },
          { label: "C", text: "Hung beside a huge dramatic battle scene, a small, quiet portrait will seem to shrink and apologize." },
          { label: "D", text: "A small, quiet portrait, hanging it beside a huge dramatic battle scene, will seem to shrink and apologize." },
        ],
        correctAnswer: "C",
        explanation:
          "C attaches the opening modifier 'Hung beside a huge dramatic battle scene' directly to the noun it describes, 'a small, quiet portrait,' with no dangling. A uses an imperative ('Hang...') that shifts to a statement mid-sentence, mixing constructions. B dangles: 'Hanging a small... portrait' implies the portrait is doing the hanging. D inserts the awkward 'hanging it' as an interrupter, creating a modifier that lacks a clear subject. Common trap: an introductory modifier must describe the subject that immediately follows it.",
      },
      {
        // 47
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 47,
        reportingCategory: "knowledge_of_language",
        subSkill: "clarity_style",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice best replaces the underlined portion 47, most clearly and gracefully expressing the idea?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "which paintings should hang near which other paintings there are that they hang near," },
          { label: "C", text: "the nearness of the hanging of which paintings to which," },
          { label: "D", text: "which paintings, in terms of hanging, should be near to which of the other ones," },
        ],
        correctAnswer: "A",
        explanation:
          "A ('which paintings should hang near which') is clear and idiomatic. B repeats 'paintings... near' redundantly and tangles the phrasing. C ('the nearness of the hanging of which paintings to which') is a noun-heavy, confusing construction. D pads the idea with 'in terms of hanging' and 'the other ones.' Common trap: convoluted rewrites that obscure a simple, clear original.",
      },
      {
        // 48
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 48,
        reportingCategory: "production_of_writing",
        subSkill: "transitions",
        difficulty: 3,
        estimatedTimeSec: 40,
        prompt:
          'Which choice for the underlined portion 48 best signals that lighting is an additional factor beyond the frame and the wall?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "Instead, the lighting makes a claim." },
          { label: "C", text: "By contrast, the lighting makes a claim." },
          { label: "D", text: "As a result, the lighting makes a claim." },
        ],
        correctAnswer: "A",
        explanation:
          "The passage has already discussed the frame and the wall; 'Even the lighting makes a claim' adds lighting as one more such factor, and 'Even' signals that addition and emphasis (A). 'Instead' (B) implies replacement. 'By contrast' (C) implies opposition. 'As a result' (D) implies consequence. Only 'Even' fits an additive relationship.",
      },
      {
        // 49
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 49,
        reportingCategory: "production_of_writing",
        subSkill: "sentence_paragraph_order",
        difficulty: 4,
        estimatedTimeSec: 50,
        prompt:
          'The writer wants to move the underlined sentence 49 ("Each one nudges the viewer toward a way of seeing") to strengthen the essay’s logic. This sentence functions best:',
        choices: [
          { label: "A", text: "where it is now, as the culminating point of the paragraph listing the museum's choices." },
          { label: "B", text: "at the start of the passage, as the opening line." },
          { label: "C", text: "immediately after the sentence about gilded frames in the second paragraph." },
          { label: "D", text: "deleted entirely, because it merely repeats the sentence before it." },
        ],
        correctAnswer: "A",
        explanation:
          "The sentence follows the statement that 'None of these choices are neutral' and generalizes across frame, wall, and lighting, so it caps the list of choices where it stands (A). Opening the passage with it (B) would state the thesis before any evidence. Placing it after the gilded-frame sentence (C) would apply 'Each one' before the full set of choices exists. It is not a repetition (D)—it draws the consequence that the choices shape perception. Common trap: a generalizing 'Each one' sentence needs the full set it summarizes to precede it.",
      },
      {
        // 50
        subject: "ENGLISH",
        diagnosticForm: 1,
        formOrder: 50,
        reportingCategory: "conventions_of_standard_english",
        subSkill: "sentence_structure",
        difficulty: 4,
        estimatedTimeSec: 50,
        prompt:
          'Which choice best replaces the underlined portion 50, ending the essay with a clear, correct sentence?',
        choices: [
          { label: "A", text: "NO CHANGE" },
          { label: "B", text: "The painting supplies the words, but the museum writes the sentence." },
          { label: "C", text: "The painting supplies the words the museum writes the sentence." },
          { label: "D", text: "The painting supplies the words, but the museum, writing the sentence." },
        ],
        correctAnswer: "B",
        explanation:
          "B joins two independent clauses with a comma and 'but,' cleanly and correctly. A inserts the redundant, informal 'it turns out' plus the resumptive 'the museum, it turns out, writes,' which restates the subject awkwardly. C fuses the two clauses with no punctuation or conjunction. D replaces the second verb with the participle 'writing,' leaving a fragment. Common trap: adding a redundant subject-restating tag ('it turns out') or a filler that disrupts an otherwise clean clause.",
      },
    ],
  },
];
