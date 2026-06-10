// ===========================================================================
// lessons-english.ts — English lessons seed data
// Subject: ENGLISH | Lessons: 13 (one per sub-skill)
// All content is 100% original — no imitation of real ACT items or published
// prep materials.
// ===========================================================================

import type { SeedLesson } from "./types";

export const englishLessons: SeedLesson[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. relevance
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "relevance",
    title: "Keeping Your Writing On-Topic",
    summary:
      "Relevance questions ask you to decide whether a sentence or detail belongs in a passage and whether the passage achieves a stated writing goal. Your job is to cut anything that drifts from the main focus and keep anything that genuinely supports it.",
    body: `## What This Skill Is

Every effective piece of writing has a focus — a central topic, purpose, or argument. When the ACT asks about **relevance**, it wants you to judge whether a specific detail, sentence, or paragraph genuinely contributes to that focus. Sometimes you'll be asked to add information that meets a stated goal ("Which choice most effectively supports the claim made in the preceding sentence?"). Other times you'll be asked to delete or keep a sentence based on whether it fits the passage.

## Key Rules

1. **Identify the passage's focus first.** Before deciding whether something belongs, you need to know what the passage is really about. Read enough context to understand the main topic, not just the sentence being tested.
2. **Ask: Does this detail move the writing forward?** A sentence is relevant if it adds new, useful information that supports or develops the focus. If it just repeats what was already said, or wanders to a loosely related topic, it's off-topic.
3. **Watch for true-but-irrelevant details.** A fact can be interesting and accurate yet still not belong in a passage. If the passage is about urban gardening and a sentence mentions the history of crop rotation in ancient Egypt without connecting it back, that sentence is irrelevant — even if the history is correct.
4. **"Does the passage accomplish the goal?" questions.** These ask whether the passage — as a whole or in a specific part — achieves something like "explain a scientific process" or "describe a person's motivation." Check that the required content is actually present, not just implied.
5. **Keep transitions in mind.** Sometimes a sentence is relevant but poorly placed; sometimes it's well-placed but irrelevant. Judge content first, then placement.

## Common Traps

**The "interesting but off-topic" trap.** Students often keep sentences because the information sounds related or impressive. Always ask: does this directly support the focus, or does it take the reader on a detour?

**Misreading the stated goal.** Goal questions often say something like "the writer wants to emphasize the economic impact." If a choice discusses social impact instead, it's wrong even if the sentence is beautifully written.

## Quick Tip

When you see a sentence underlined or placed in brackets, mentally ask: *If I removed this sentence, would the paragraph still make complete sense and stay on topic?* If yes, the sentence is probably irrelevant. If the passage feels incomplete or loses a key supporting detail without it, it's probably relevant. For goal questions, match the answer to the exact type of information the prompt requests.`,
    examples: [
      {
        prompt:
          'A student is writing an essay about community composting programs and how they reduce landfill waste. The essay includes this sentence: "Ancient Romans used a method of fertilizing fields with kitchen scraps and animal waste." The writer is considering whether to keep or delete this sentence. Which choice is best, and why?',
        steps: [
          "Identify the essay's focus: community composting programs and their role in reducing landfill waste.",
          "Ask whether the Roman fertilizing practice directly supports that focus. The sentence describes an ancient historical practice, not modern composting programs or landfill reduction.",
          "The Roman practice is loosely related to composting (both involve organic waste), but it does not explain how modern community programs reduce landfill waste.",
          "Because the sentence drifts from the essay's stated focus without connecting back to it, it should be deleted.",
        ],
        answer:
          "The sentence should be deleted. Although it mentions organic waste recycling, it is about ancient Rome rather than modern community composting programs, so it does not support the essay's focus on reducing landfill waste.",
      },
    ],
    orderIndex: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. rhetorical_purpose
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "rhetorical_purpose",
    title: "Why Word and Sentence Choice Matters",
    summary:
      "Rhetorical purpose questions ask you to choose the word, phrase, or sentence that best achieves a specific effect — such as conveying an attitude, illustrating a point, or emphasizing a feeling. The right answer does exactly what the question asks, not just something vaguely related.",
    body: `## What This Skill Is

Every word a writer chooses carries meaning beyond its dictionary definition. **Rhetorical purpose** is about selecting language that achieves the intended effect on the reader. On the ACT, these questions often come with a specific directive: "Which choice best conveys the sense of urgency in this paragraph?" or "Which phrase most effectively illustrates the contrast the author describes?"

You are not choosing the prettiest sentence or the most impressive vocabulary. You are choosing the option that accomplishes the named purpose.

## Key Rules

1. **Read the purpose statement carefully.** The question tells you exactly what effect to achieve — urgency, humor, sadness, contrast, irony, formality, etc. Underline or mentally lock in that key word before evaluating choices.
2. **Evaluate each choice against the purpose.** Does this word/phrase convey urgency? Does it illustrate the contrast? Reject answers that are accurate but miss the target effect.
3. **Match the tone of the passage.** If the passage is formal and scientific, a flippant phrase is wrong even if it technically "describes" the right thing. If the passage is conversational, overly academic language is wrong.
4. **Beware of near misses.** Wrong answers often address a related but slightly different purpose. If the question asks for "nostalgia," an answer that creates "sadness" is close but not correct.
5. **Sentence-level purpose questions.** Sometimes you must choose a whole sentence that "introduces the main argument" or "provides a specific example." Check that the sentence does exactly that — don't settle for one that only hints at it.

## Common Traps

**Choosing the most dramatic or vivid option.** More intense language is not always better. Match intensity to the passage's existing tone.

**Ignoring the specific purpose label.** Students sometimes pick an answer based on general quality rather than the named purpose. If the question says "illustrates the contrast," an answer that merely restates a single side of the contrast is wrong.

## Quick Tip

Treat the purpose statement like a target on a wall. Every answer choice is an arrow. The best choice hits the bull's-eye — it does precisely what the prompt asks. Read the purpose, paraphrase it in your own words, then find the arrow that flies straight to it.`,
    examples: [
      {
        prompt:
          'Read this passage excerpt: "The old theater had seen better days. The velvet curtains, once deep crimson, had faded to the color of old rust. The stage lights flickered unpredictably, and half the seats had springs that jabbed the unfortunate audience member who sat in just the wrong spot." The writer wants to choose a phrase to replace "had seen better days" that more vividly conveys the theater\'s state of decline. Which is the best replacement?',
        steps: [
          "Identify the purpose: the replacement phrase must vividly convey decline — not just state it, but make the reader feel it.",
          "The original phrase 'had seen better days' is a cliché that tells rather than shows decline. The rest of the passage shows specific sensory details (faded curtains, flickering lights, broken springs).",
          "A good replacement should match the concrete, sensory tone of the surrounding sentences and make the decline feel real.",
          'Consider: "was crumbling into ruin" — this is vivid and fits. Compare to "was not as nice as before" (too vague) or "was architecturally compromised" (too clinical and formal).',
          '"Was crumbling into ruin" best conveys the sense of decline in a vivid, tonally consistent way.',
        ],
        answer:
          '"Was crumbling into ruin" is the best choice. It vividly conveys decline through concrete imagery and matches the sensory, descriptive tone of the surrounding sentences.',
      },
    ],
    orderIndex: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. transitions
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "transitions",
    title: "Connecting Ideas with Transitions",
    summary:
      "Transition words and phrases signal the logical or time relationship between ideas. Choosing the right transition makes your writing clear and coherent; choosing the wrong one creates confusion even when the surrounding sentences are well-written.",
    body: `## What This Skill Is

A **transition** is a word or phrase that tells readers how one idea relates to another. It can signal that ideas agree, contrast, show cause and effect, mark time, or give an example. Without transitions, writing feels choppy and disconnected. With wrong transitions, it actively misleads the reader.

## Key Rules

1. **Identify the relationship between the ideas first.** Before choosing a transition, decide: Do the two sentences agree? Contrast? Does one cause the other? Is one an example of the other? The transition must match the relationship, not just sound smooth.

2. **Agreement/Addition:** Use words like *furthermore*, *additionally*, *also*, *in fact*, *indeed*, *moreover* when the second idea extends or reinforces the first.

3. **Contrast:** Use *however*, *nevertheless*, *on the other hand*, *yet*, *although*, *even so*, *despite this* when the second idea pushes back against the first.

4. **Cause and effect:** Use *therefore*, *as a result*, *consequently*, *thus*, *because of this* when the second idea is a result of the first.

5. **Time/sequence:** Use *first*, *then*, *next*, *finally*, *afterward*, *meanwhile*, *subsequently* when you need to show the order of events.

6. **Example/illustration:** Use *for example*, *for instance*, *specifically*, *to illustrate* when the second idea gives a concrete case of the general point.

## Common Traps

**Choosing a smooth-sounding word regardless of meaning.** *However* and *therefore* both sound academic, but they mean opposite things (contrast vs. result). Always check the logic, not just the sound.

**Using "however" when ideas actually agree.** If both sentences say essentially the same thing or the second continues in the same direction, you need an addition word, not a contrast word.

## Quick Tip

Read the two sentences and ask: does the second idea go *with* the first or *against* it? Does it *cause* something, or does it *follow* in time? Once you know the relationship, match it to a transition category. Then test your choice by reading both sentences aloud with the transition — does the logic flow naturally?`,
    examples: [
      {
        prompt:
          'Choose the most logical transition to fill in the blank: "The new bridge was designed to withstand 150-mph winds. _______, engineers added extra steel reinforcements to the suspension cables after unexpected feedback from structural testing."',
        steps: [
          "Identify the relationship: The first sentence describes the original design goal (withstand 150-mph winds). The second describes adding reinforcements after testing.",
          "Decide: Does the second sentence agree with the first, contrast it, or show a result of something? Adding reinforcements after testing suggests a follow-up action — something done in addition to, or as a result of, the original design review.",
          "The reinforcements were added *because of* unexpected feedback, suggesting a cause-and-effect or sequential relationship. The phrase 'after unexpected feedback' implies the testing revealed a need.",
          '"Nevertheless" (contrast) and "for example" (illustration) don\'t fit. "As a result" fits the cause-and-effect relationship between the testing feedback and the decision to add reinforcements.',
        ],
        answer:
          '"As a result" is the best transition. The unexpected feedback from testing caused engineers to add reinforcements, making this a cause-and-effect relationship.',
      },
    ],
    orderIndex: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. sentence_paragraph_order
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "sentence_paragraph_order",
    title: "Arranging Sentences and Paragraphs Logically",
    summary:
      "Order questions ask you to find the most logical placement for a sentence within a paragraph or to arrange sentences so ideas flow clearly. The correct order puts general information before specific details, maintains time sequence, and lets each sentence set up the next.",
    body: `## What This Skill Is

**Sentence and paragraph order** is about sequence and logic. On the ACT, you might be asked: "Where should sentence 4 be moved?" or "Which order of sentences makes the paragraph clearest?" The goal is to arrange ideas so the reader never has to stop and wonder, "Wait, what are we talking about?"

## Key Rules

1. **General before specific.** Introductory sentences that state the topic or main idea come before sentences that give details, evidence, or examples. If you try to introduce specific evidence before the reader knows the topic, the passage feels confusing.

2. **Chronological order.** For narratives and processes, events must appear in the order they happened or need to happen. Time markers (*first*, *then*, *afterward*, *eventually*) are clues to sequence.

3. **Logical cause before effect.** The cause must be explained before the effect. If sentence B says "This caused a shortage," sentence A must already have introduced the "this."

4. **Pronoun and reference checks.** If a sentence uses *it*, *they*, *this*, or *that*, the noun it refers to must appear earlier. If you find a pronoun without an antecedent in the surrounding text, the noun-introducing sentence must come first.

5. **Paragraph-level order.** Sometimes a whole paragraph is misplaced. Ask: Does this paragraph introduce a topic that the next one elaborates? Does it provide a conclusion that fits after all the evidence?

## Common Traps

**Moving the topic sentence away from the front.** Students sometimes move the main idea to the middle of a paragraph, burying it in specifics. Keep the main idea at or near the beginning unless the paragraph is building to a conclusion.

**Ignoring transition words as clues.** Words like *however* and *as a result* tell you something about what must have come immediately before. Use them as anchors.

## Quick Tip

Number the sentences and draw a quick map: What is the big idea? What is the first detail that develops it? What comes next logically? Follow the chain. If two orders seem plausible, ask which one has no moment where a reader would be confused or surprised by a reference that hasn't been introduced yet.`,
    examples: [
      {
        prompt:
          "A paragraph contains these four sentences in this order: (1) It quickly spread across the region, carried by migrating birds. (2) Scientists first identified the fungal infection in a single lake in the northern mountains. (3) By the following spring, more than a third of the lake ecosystems in the region showed signs of infection. (4) The infection devastated amphibian populations wherever it appeared. Which order best arranges these sentences logically?",
        steps: [
          "Look for the logical starting point: sentence 2 introduces the infection's initial discovery — this is where the story starts.",
          "Next, we need to explain how it moved from one lake to other places — sentence 1 ('It quickly spread…carried by migrating birds') provides the mechanism of spread. The pronoun 'It' refers back to the fungal infection introduced in sentence 2.",
          "Sentence 3 gives the scale of spread by the following spring — this follows naturally after sentence 1 explains how the infection moved.",
          "Sentence 4 states the ultimate impact on amphibian populations — this is the consequence, which comes last after spread and scale are established.",
          "Best order: 2, 1, 3, 4.",
        ],
        answer:
          "The best order is 2, 1, 3, 4. Sentence 2 introduces the infection, sentence 1 explains how it spread, sentence 3 quantifies the spread, and sentence 4 states the devastating impact.",
      },
    ],
    orderIndex: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. intros_conclusions
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "intros_conclusions",
    title: "Writing Effective Introductions and Conclusions",
    summary:
      "Introduction and conclusion questions ask you to choose the best opening or closing sentence for a paragraph or the entire passage. A good introduction establishes the topic and engages the reader; a good conclusion wraps up the ideas without simply repeating them or introducing something brand new.",
    body: `## What This Skill Is

The opening and closing sentences of a piece of writing do critical work. An **introduction** orients the reader: it announces the topic, establishes the tone, and often previews the main idea. A **conclusion** brings the piece to a satisfying end: it reinforces the main point and may broaden the significance — but it should not repeat the introduction word for word or suddenly raise an unrelated topic.

## Key Rules

1. **A good introduction establishes the topic immediately.** The first sentence of a paragraph or passage should give the reader enough context to understand what's coming. An introduction that starts with a vague reference ("It was an interesting thing") or plunges into specific details without context is ineffective.

2. **Introductions often preview the main idea or argument.** A strong opening sentence hints at what the paragraph will argue or explain, so the reader knows what to look for.

3. **Conclusions summarize without parroting.** A good conclusion restates the main point in fresh words and may zoom out to the bigger picture ("Why does this matter?"). A bad conclusion simply copies the introduction or tacks on a new argument that isn't developed.

4. **Conclusions don't introduce new topics.** If the passage is about urban heat islands and the concluding sentence suddenly mentions ocean acidification, it's wrong — even if the sentence is well-written.

5. **Match tone and formality.** A scientific article needs a formal closing; a personal essay can end with a personal reflection. The conclusion should not shift to a radically different register than the rest of the passage.

## Common Traps

**Picking the most general statement possible.** A conclusion like "Science is important" is technically true but fails to connect meaningfully to the specific passage.

**Picking an opening that's too specific.** An intro that jumps straight to a supporting detail before establishing context leaves readers without orientation.

## Quick Tip

For introductions: does it tell you what the paragraph is about, and does it match the tone of what follows? For conclusions: does it tie back to the main idea introduced earlier, without introducing anything new? If yes to both, you've found the right choice.`,
    examples: [
      {
        prompt:
          "A student writes a paragraph about how noise pollution affects wildlife behavior. The paragraph ends with: 'Researchers found that songbirds in urban areas altered their songs to be heard above traffic noise, and nocturnal mammals changed their feeding times to avoid peak human activity.' The student wants to add a closing sentence. Which choice makes the best conclusion for this paragraph?",
        steps: [
          "The paragraph is about how wildlife adapts behavior due to noise pollution from human activity.",
          "Evaluate option A: 'Noise pollution is a fascinating topic that affects many things.' — This is too vague and does not connect back to the specific wildlife adaptations described.",
          "Evaluate option B: 'These adaptations reveal how profoundly human noise can reshape the rhythms of animal life.' — This ties back to the specific examples (song changes, feeding time shifts) and broadens to a meaningful conclusion about the relationship between human activity and wildlife.",
          "Evaluate option C: 'Scientists should also study how light pollution affects wildlife.' — This introduces a new topic (light pollution) not covered in the paragraph.",
          "Option B fits: it summarizes the paragraph's evidence and closes with a statement about larger significance without adding new topics.",
        ],
        answer:
          "Option B is the best conclusion. It ties the specific examples back to the main idea — that human noise reshapes animal behavior — without introducing new topics or simply repeating earlier sentences.",
      },
    ],
    orderIndex: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. concision
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "concision",
    title: "Cutting Redundancy for Cleaner Prose",
    summary:
      "Concision questions ask you to eliminate wordiness, redundancy, and unnecessary repetition without losing any meaning. On the ACT, the shortest grammatically correct answer that preserves the full meaning is almost always right.",
    body: `## What This Skill Is

**Concision** means expressing an idea in as few words as necessary — no more. Writing becomes wordy when it says the same thing twice (redundancy), uses long phrases where a single word will do, or adds filler that contributes no new meaning. The ACT tests your ability to spot and cut this excess.

## Key Rules

1. **Redundant pairs.** Phrases like *end result*, *true fact*, *future plans*, *past history*, or *brief summary* say the same thing twice. Drop the redundant word: "result," "fact," "plans," "history," "summary."

2. **Circumlocutions.** These are long-winded phrases that can be replaced by one word:
   - *at this point in time* → *now*
   - *due to the fact that* → *because*
   - *in the event that* → *if*
   - *is of the opinion that* → *believes*

3. **Unnecessary modifiers.** Words like *very*, *really*, *quite*, *rather*, *somewhat* often add no meaningful information and should be cut.

4. **Restating what's implied.** If you write "She smiled happily," *happily* is implied by *smiled*. If you write "He thought to himself," all thinking is internal — cut *to himself*.

5. **The shortest option test.** On the ACT, when all choices preserve the correct meaning, prefer the shortest. But never cut a word that changes the meaning.

## Common Traps

**Cutting too much.** "Shortest is always right" is close but not absolute. If deleting words changes or loses the meaning, a slightly longer option is correct. Always verify that the shorter version says the same thing.

**Confusing redundancy with emphasis.** "The final, ultimate conclusion" is redundant. But "The decision was final and irreversible" uses two words that add distinct meanings — not redundant.

## Quick Tip

Read the underlined portion and ask: does every word add information that isn't already there? If any word repeats something already implied by another word in the sentence or passage, cut it. Then check that the remaining sentence is grammatically complete and still says what it needs to say.`,
    examples: [
      {
        prompt:
          'Which version of the underlined sentence is most concise without losing meaning? Original: "The committee made a decision to postpone until a later time the meeting that had been scheduled." Options: (A) made a decision to postpone until a later time the meeting that had been scheduled (B) decided to postpone the scheduled meeting (C) made the decision that the meeting scheduled would be postponed to a later date (D) decided that the scheduled meeting would be postponed at a future point in time"',
        steps: [
          "Identify redundancies in option A: 'made a decision' can be 'decided'; 'until a later time' is implied by 'postpone'; 'that had been scheduled' can be 'scheduled'.",
          "Option B: 'decided to postpone the scheduled meeting' — 'decided' replaces 'made a decision'; 'postpone' already implies a later time; 'scheduled meeting' is clean. All original meaning is preserved.",
          "Option C adds 'to a later date' (redundant with 'postponed') and is longer than necessary.",
          "Option D adds 'at a future point in time' (redundant with 'postponed') — even wordier.",
          "Option B is the most concise version that preserves the full meaning.",
        ],
        answer:
          "Option B — 'decided to postpone the scheduled meeting' — is correct. It removes all redundancy while preserving the complete meaning of the original sentence.",
      },
    ],
    orderIndex: 6,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. clarity_style
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "clarity_style",
    title: "Writing Clearly and Matching Passage Style",
    summary:
      "Clarity and style questions ask you to fix confusing, clumsy, or awkward writing and to choose language that fits the established tone of the passage. The right answer communicates the idea cleanly and sounds like the rest of the passage.",
    body: `## What This Skill Is

A sentence can be grammatically correct yet still be unclear or stylistically jarring. **Clarity** is about making sure the reader instantly understands who does what to whom. **Style** is about making sure the language fits the tone, register, and voice already established in the passage — formal or informal, academic or conversational, objective or personal.

## Key Rules

1. **Eliminate ambiguity.** A sentence is unclear when it's hard to tell who or what a pronoun refers to, or when the sentence structure makes it hard to follow the action. Rewrite so the subject, verb, and object are immediately obvious.

2. **Avoid unnecessarily passive constructions.** "The report was written by the team" is passive. "The team wrote the report" is clearer. Not all passive voice is wrong, but prefer active when clarity suffers.

3. **Match the passage's register.** If the passage is a formal scientific essay, slang and colloquialisms are wrong. If it's a personal narrative, stiff academic language feels out of place. Read a few sentences before the underlined portion to calibrate the tone.

4. **Avoid awkward sentence structures.** Stacked noun phrases, overly embedded clauses, or reversed syntax ("Of the problem, the greatest cause was...") create reading friction. Prefer subject-verb-object order.

5. **Consistency of voice and tense.** Style problems often involve a sudden shift from third person to second person, or from past tense to present tense, without a logical reason.

## Common Traps

**Picking the most formal-sounding answer.** Longer, more academic language isn't automatically clearer. If the passage is casual, a formal answer clashes with the established style.

**Fixing clarity but breaking style.** You might correctly identify that a sentence is confusing and choose a clearer version — but if that version uses slang in a formal passage, it's still wrong.

## Quick Tip

Read two or three sentences before and after the underlined portion. Ask: What tone is this passage using? Then ask: Is the underlined sentence immediately clear — do I know who does what? The correct answer is both stylistically consistent and immediately easy to understand.`,
    examples: [
      {
        prompt:
          'A formal scientific essay contains this sentence: "The results, which the researchers, after a thorough review of the raw data that had been collected, eventually compiled, were surprising." The writer wants to revise this for clarity while maintaining a formal tone. Which revision is best?',
        steps: [
          "Identify the clarity problem: the sentence buries the subject ('The results') and the main verb ('were surprising') under multiple embedded clauses, making it very hard to follow.",
          "Extract the core meaning: the researchers compiled results after reviewing raw data, and the results were surprising.",
          "A clearer version puts the subject and main verb close together: 'After thoroughly reviewing their raw data, the researchers compiled results that proved surprising.'",
          "Check style: 'thoroughly reviewing' and 'proved surprising' maintain formal register. No slang or colloquialisms.",
          "This revision is both clear and consistent with formal scientific writing.",
        ],
        answer:
          "'After thoroughly reviewing their raw data, the researchers compiled results that proved surprising.' This version places the action in a logical order, keeps the subject close to its verb, and maintains a formal tone.",
      },
    ],
    orderIndex: 7,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. word_choice
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "word_choice",
    title: "Choosing the Right Word",
    summary:
      "Word choice questions ask you to select the most appropriate word or phrase for the content, context, or logical relationship between clauses. The right word carries exactly the right meaning and connotation for its context.",
    body: `## What This Skill Is

**Word choice** is about precision. Every word carries a denotation (its dictionary meaning) and a connotation (the feelings or associations it carries). On the ACT, word choice questions test whether you can pick the word that is logically accurate, tonally appropriate, and contextually precise.

## Key Rules

1. **Denotation first.** Make sure the word's literal meaning is correct for the situation. *Affect* and *effect*, *imply* and *infer*, *compose* and *comprise*, *fewer* and *less* — these look similar but mean different things. Know these commonly confused pairs.

2. **Connotation matters.** *Slim*, *slender*, and *scrawny* all describe thinness, but their connotations differ wildly. Choose the word whose emotional tone fits the passage. A passage that describes someone admiringly should use *slender*, not *scrawny*.

3. **Logical connectors within clauses.** Words like *although*, *because*, *since*, *while*, and *whereas* define logical relationships. If the clause that follows describes a contrast, use *although* or *whereas*, not *because*.

4. **Watch for misused words.** Common culprits include: *literally* (means actually, not figuratively), *unique* (means one of a kind — not *very unique*), *disinterested* (means impartial, not uninterested), *enormity* (means great wickedness, not large size).

5. **Context clues.** The surrounding sentences usually make clear what relationship or meaning is needed. Read at least one sentence before and after to understand the context.

## Common Traps

**Choosing a word that sounds similar.** *Elicit* and *illicit* sound alike but mean completely different things (to draw out vs. illegal). Sound alone is not a guide.

**Choosing the most impressive word.** A sophisticated-sounding word that doesn't quite fit is worse than a simple word that fits perfectly.

## Quick Tip

For each answer choice, briefly define the word in your head before plugging it into the sentence. If your definition doesn't make sense in context, eliminate it. For connector words (although, because, while, since), identify the logical relationship between the clauses first, then choose the connector that names that relationship.`,
    examples: [
      {
        prompt:
          "Select the best word to fill in the blank: \"The scientist's findings were _______, challenging decades of accepted research and forcing the field to reconsider its foundational assumptions.\" Options: (A) incremental (B) revolutionary (C) predictable (D) redundant",
        steps: [
          "Read the context: the findings challenged decades of accepted research and forced the field to reconsider foundational assumptions. This suggests the findings caused a major, unexpected change.",
          "Evaluate each option against this context:",
          "Option A — 'incremental': means small, gradual, step-by-step. This contradicts the idea of challenging decades of research. Eliminate.",
          "Option B — 'revolutionary': means causing a major, fundamental change. This fits perfectly — revolutionary findings would challenge accepted research and force reconsideration.",
          "Option C — 'predictable': means expected, foreseeable. The findings clearly surprised the field. Eliminate.",
          "Option D — 'redundant': means unnecessary repetition. This does not describe findings that challenge assumptions. Eliminate.",
        ],
        answer:
          "Option B — 'revolutionary' — is correct. It accurately describes findings that fundamentally challenge established knowledge, matching the context clues in the sentence.",
      },
    ],
    orderIndex: 8,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. punctuation
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "punctuation",
    title: "Mastering Commas, Semicolons, and More",
    summary:
      "Punctuation questions test your ability to use commas, semicolons, colons, apostrophes, and dashes correctly. Each punctuation mark has specific rules, and using the wrong one — or leaving one out — changes the meaning or creates an error.",
    body: `## What This Skill Is

**Punctuation** is the system of marks that organize written language, signal pauses, show relationships between clauses, and prevent ambiguity. The ACT tests five main punctuation marks: commas, semicolons, colons, apostrophes, and dashes.

## Key Rules

**Commas:**
- Separate items in a list: *apples, oranges, and bananas*.
- Follow an introductory phrase or clause: *After the rain stopped, we went outside.*
- Set off a non-restrictive (non-essential) clause: *My sister, who lives in Denver, called yesterday.*
- Join two independent clauses with a coordinating conjunction (FANBOYS): *She studied hard, so she passed the test.*
- Do NOT use a comma to join two independent clauses without a conjunction — that's a comma splice.

**Semicolons:**
- Join two independent clauses without a conjunction: *She studied hard; she passed the test.*
- Separate items in a list when the items themselves contain commas.

**Colons:**
- Introduce a list, explanation, or quotation after an independent clause: *She needed three things: rest, food, and time.*
- Do NOT use a colon after a verb or preposition (*She needed: rest* is wrong).

**Apostrophes:**
- Show possession: *the dog's leash* (singular); *the dogs' leashes* (plural).
- Form contractions: *it's* = *it is*; *they're* = *they are*. Note: *its* (possessive) has no apostrophe.

**Dashes:**
- Set off a dramatic interruption or parenthetical: *The winner — to everyone's surprise — was the youngest competitor.*
- Introduce an explanation or list informally (like a colon but more emphatic).

## Common Traps

**Comma splices.** Joining two complete sentences with only a comma is always wrong. Fix with a semicolon, a period, or a comma + conjunction.

**Its vs. it's.** *It's* always means *it is*. *Its* is possessive. If you can substitute *it is*, use *it's*. Otherwise, no apostrophe.

## Quick Tip

For every underlined punctuation mark, identify what comes before and after it. Is each side a complete sentence? If yes, you need a semicolon, a period, or a comma + conjunction — never just a comma. If only one side is a complete sentence, a colon or a comma may be right depending on what follows.`,
    examples: [
      {
        prompt:
          "Choose the correctly punctuated version of this sentence: \"The expedition required careful planning however the team still encountered unexpected obstacles.\"",
        steps: [
          "Identify the two clauses: (1) 'The expedition required careful planning' — a complete independent clause. (2) 'the team still encountered unexpected obstacles' — a complete independent clause.",
          "'However' is a conjunctive adverb, not a coordinating conjunction. You cannot join two independent clauses with just a comma before 'however' — that would be a comma splice.",
          "Correct options: use a semicolon before 'however' and a comma after it: 'The expedition required careful planning; however, the team still encountered unexpected obstacles.'",
          "Alternatively, split into two sentences: 'The expedition required careful planning. However, the team still encountered unexpected obstacles.'",
          "The semicolon version is preferred when the ideas are closely linked.",
        ],
        answer:
          "\"The expedition required careful planning; however, the team still encountered unexpected obstacles.\" A semicolon is required before 'however' because both sides are independent clauses; 'however' as a conjunctive adverb takes a comma after it.",
      },
    ],
    orderIndex: 9,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. sentence_structure
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "sentence_structure",
    title: "Fixing Fragments, Fused Sentences, and Run-Ons",
    summary:
      "Sentence structure questions ask you to identify and correct sentence fragments (incomplete sentences), fused sentences (two sentences jammed together with no punctuation), run-on sentences (comma splices), and errors in subordination or coordination.",
    body: `## What This Skill Is

A **sentence** must have a subject and a verb and express a complete thought. A **fragment** is missing one of these elements. A **fused sentence** (also called a run-on) joins two independent clauses with no punctuation. A **comma splice** joins them with only a comma. **Faulty subordination** uses the wrong connecting word, making a dependent clause seem like the main idea.

## Key Rules

1. **Identifying a fragment.** Read the underlined portion alone. Does it have a subject? A verb? Does it express a complete thought? If any element is missing, it's a fragment. Common fragment starters: *because*, *although*, *which*, *who*, *since*, *when* — these words make a clause dependent and incomplete by themselves.

2. **Fixing a fragment.** Either attach it to an adjacent independent clause (often with a comma) or rewrite to add a main clause.

3. **Fused sentences.** Two independent clauses with no punctuation between them: *She finished the exam she left the room.* Fix by adding a period, semicolon, or comma + conjunction.

4. **Comma splices.** Two independent clauses joined by only a comma: *She finished the exam, she left the room.* Fix the same way as a fused sentence.

5. **Faulty subordination.** Using *because* when you mean *although*, or making the wrong clause subordinate. *Although she studied, she understood the material.* This implies the understanding is surprising — if it's expected, use *because*.

6. **Faulty coordination.** Using *and* when ideas contrast (should use *but*), or *but* when they agree (should use *and*).

## Common Traps

**Long sentences are not automatically run-ons.** A long sentence with proper conjunctions and punctuation is fine. A short sentence without punctuation between two clauses is still a fused sentence.

**Dependent clauses that look like sentences.** *Because the bridge was closed* has a subject and verb but is not a sentence — it's a fragment. The word *because* makes it dependent.

## Quick Tip

Find the verb in the underlined portion. Then find its subject. Now ask: is there a subordinating word (*because*, *although*, *which*, *when*) making this clause dependent? If so, it needs to be attached to a main clause. If there are two sets of subject+verb with nothing between them, add punctuation or a conjunction.`,
    examples: [
      {
        prompt:
          'Identify the error in this group of sentences and explain how to fix it: "The museum opened its new wing last spring. Featuring over two hundred artifacts from the ancient world. Visitors came from across the country to see the exhibit."',
        steps: [
          "Read each sentence separately. Sentence 1: 'The museum opened its new wing last spring.' — Complete sentence: subject (museum), verb (opened), complete thought. ✓",
          "Sentence 2: 'Featuring over two hundred artifacts from the ancient world.' — This begins with a participial phrase. What is the subject? There is none stated. There is no main verb (featuring is a participle, not a finite verb). This is a fragment.",
          "Sentence 3: 'Visitors came from across the country to see the exhibit.' — Complete sentence. ✓",
          "Fix: attach the fragment to the adjacent sentence it modifies. The fragment describes the new wing, so attach it to sentence 1: 'The museum opened its new wing last spring, featuring over two hundred artifacts from the ancient world.'",
        ],
        answer:
          "'Featuring over two hundred artifacts from the ancient world' is a sentence fragment — it has no subject or main verb. Fix it by attaching it to the preceding sentence with a comma: 'The museum opened its new wing last spring, featuring over two hundred artifacts from the ancient world.'",
      },
    ],
    orderIndex: 10,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. verb_tense
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "verb_tense",
    title: "Keeping Verb Tense and Voice Consistent",
    summary:
      "Verb tense questions test your ability to keep tense consistent within and across sentences, and to avoid inappropriate shifts from active to passive voice. Events that happen at the same time should use the same tense; events in sequence should reflect that sequence through tense.",
    body: `## What This Skill Is

**Verb tense** tells readers when an action occurs — in the past, present, or future. **Consistency** means all verbs in a passage stay in the same time frame unless there is a logical reason to shift. An **inappropriate tense shift** confuses the timeline and makes writing feel unstable. **Voice** (active vs. passive) also matters: unnecessary passive voice is a style error, and an unmotivated shift from active to passive in the middle of a passage is inconsistent.

## Key Rules

1. **Establish the main tense and stick to it.** Most narratives about past events use simple past (*walked*, *said*, *found*). Most expository writing about current facts uses simple present (*shows*, *indicates*). Pick up the tense from the surrounding sentences and match it.

2. **Use perfect tenses for earlier past actions.** If the narrative is in simple past and you need to describe something that happened *before* that point, use past perfect (*had walked*, *had found*). This signals the earlier event clearly.

3. **Future within past.** If a past-tense narrative describes something that was going to happen, use *would* or *was going to*: *She knew she would need more supplies.*

4. **Active vs. passive.** Active: *The researcher conducted the experiment.* Passive: *The experiment was conducted by the researcher.* Passive is appropriate when the doer is unknown or unimportant. An unexplained shift from one to the other within a paragraph is an error.

5. **Idiomatic tense phrases.** *Used to* describes a past habit: *She used to walk to school.* *Would* (habitual) also describes repeated past actions: *He would arrive early every day.* Don't shift between these and simple past for the same repeated action.

## Common Traps

**Shifting from past to present without reason.** Many students slip into present tense mid-narrative because it feels more vivid. If the surrounding context is past tense, stay in past tense.

**Over-using passive voice.** Passive voice isn't always wrong, but switching to it in the middle of an active-voice passage creates an inconsistency error.

## Quick Tip

Scan the sentences before and after the underlined verb. What tense are they using? Match that tense unless the sentence specifically describes something that happened at a different time in the sequence of events. When in doubt, find the verb in the sentence immediately before and match it.`,
    examples: [
      {
        prompt:
          'Identify the tense error in this passage and suggest the correct verb form: "Last summer, the hikers set up camp near the river. They cook dinner over an open fire and went to sleep before dark. The next morning, they broke camp and headed toward the trail."',
        steps: [
          "The passage is set in the past ('Last summer'). Identify each verb's tense.",
          "Sentence 1: 'set up' — simple past. ✓",
          "Sentence 2: 'cook' — simple present. This is an error — the action happened last summer, so it should be past tense. 'went to sleep' — simple past. ✓ The sentence has an inconsistent tense shift.",
          "Sentence 3: 'broke' and 'headed' — simple past. ✓",
          "Fix sentence 2: change 'cook' to 'cooked' — 'They cooked dinner over an open fire and went to sleep before dark.'",
        ],
        answer:
          "'Cook' should be 'cooked.' The narrative is set in the past (last summer), so all verbs describing those events must be in simple past tense. 'Cooked' is consistent with 'set up,' 'went,' 'broke,' and 'headed.'",
      },
    ],
    orderIndex: 11,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. pronouns
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "pronouns",
    title: "Using Pronouns Correctly",
    summary:
      "Pronoun questions test agreement (a pronoun must match its antecedent in number and gender), person consistency (don't shift from 'one' to 'you' or 'they'), and the correct use of relative pronouns (who vs. which vs. that). A pronoun must also have a clear antecedent.",
    body: `## What This Skill Is

A **pronoun** replaces a noun. For pronouns to work correctly, they must agree with the noun they replace (their **antecedent**), they must be in the right grammatical case, and they must have a clear antecedent so the reader knows who or what is being referred to.

## Key Rules

1. **Number agreement.** A singular noun takes a singular pronoun; a plural noun takes a plural pronoun. *Everyone*, *each*, *either*, *neither*, *anyone*, *someone*, *no one* are singular — they take *his or her* or *their* (informal but widely accepted) in standard writing, not *their* in formal contexts on the ACT.

2. **Collective nouns.** Words like *team*, *committee*, *group*, and *staff* are usually treated as singular in American English: *The team won its first championship.*

3. **Pronoun case.** Use subject pronouns (*I*, *he*, *she*, *they*, *we*) when the pronoun is the subject of a verb. Use object pronouns (*me*, *him*, *her*, *them*, *us*) when the pronoun is an object. Tip: remove the other noun and see if the pronoun sounds right alone. (*Between you and I* → *Between I* sounds wrong → use *me*.)

4. **Who vs. whom.** *Who* is a subject pronoun (*who did this?*). *Whom* is an object pronoun (*to whom did you speak?*). Substitute *he/she* or *him/her*: if *he* works, use *who*; if *him* works, use *whom*.

5. **Relative pronouns.** *Who/whom* refer to people. *Which* refers to things (non-restrictive clauses). *That* refers to things (restrictive clauses — no comma). *The dog that bit me* (restrictive). *My dog, which is a beagle, loves walks* (non-restrictive).

6. **Person consistency.** Don't shift from *one* to *you* or from *they* to *we* within the same discussion.

## Common Traps

**Singular antecedents with plural pronouns.** "A student should bring their ID" is increasingly accepted in informal writing, but on the ACT, match formally: "A student should bring his or her ID" (or rewrite as "Students should bring their IDs").

**Ambiguous pronoun reference.** If a sentence has two nouns and a pronoun, the pronoun must clearly refer to one of them. If both are possible antecedents, the sentence is ambiguous and must be rewritten.

## Quick Tip

When you see a pronoun underlined, immediately find its antecedent. Check: (1) Does the pronoun match in number (singular/plural)? (2) Is the antecedent clear and unambiguous? (3) Is the pronoun in the right case (subject/object)?`,
    examples: [
      {
        prompt:
          'Identify the pronoun error in this sentence and correct it: "Neither of the architects submitted their final blueprints before the deadline."',
        steps: [
          "Identify the pronoun and its antecedent: 'their' refers to 'neither of the architects.'",
          "'Neither' is an indefinite pronoun that is grammatically singular. Check: 'neither one of the architects' — it refers to each one individually, not both together.",
          "Because 'neither' is singular, the pronoun should be singular: 'his or her' in formal standard English.",
          "Corrected sentence: 'Neither of the architects submitted his or her final blueprints before the deadline.'",
          "Alternatively, rewrite to avoid the issue: 'Both architects failed to submit their final blueprints before the deadline.'",
        ],
        answer:
          "'Their' should be 'his or her' because 'neither' is a singular indefinite pronoun. Corrected: 'Neither of the architects submitted his or her final blueprints before the deadline.'",
      },
    ],
    orderIndex: 12,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. modifiers_parallelism
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "ENGLISH",
    subSkill: "modifiers_parallelism",
    title: "Fixing Modifiers and Faulty Parallelism",
    summary:
      "Modifier and parallelism questions test two related editing skills: ensuring that descriptive phrases point to the right noun (modifiers), and ensuring that items in a list or comparison use the same grammatical form (parallelism). Both errors create awkward or logically confused sentences.",
    body: `## What This Skill Is

**Modifiers** are words, phrases, or clauses that describe another word. A **misplaced modifier** is positioned so it seems to describe the wrong word. A **dangling modifier** has no logical word to describe at all — it just hangs in the sentence with nothing to attach to.

**Parallelism** means that items joined by *and*, *or*, *but*, or correlative conjunctions (*both…and*, *either…or*, *not only…but also*) must be in the same grammatical form: all nouns, all infinitives, all gerunds, all adjectives, etc.

## Key Rules

**Misplaced modifiers:**
- The modifier should be as close as possible to the noun it describes.
- *Walking down the street, the buildings seemed very tall.* — The buildings aren't walking. Fix: *Walking down the street, I noticed how tall the buildings seemed.*

**Dangling modifiers:**
- Often come at the start of a sentence as a participial phrase.
- The subject of the main clause must be the one doing the action in the phrase.
- *After studying all night, the exam felt manageable.* — The exam didn't study. Fix: *After studying all night, she found the exam manageable.*

**Faulty parallelism:**
- *She enjoys swimming, to run, and hikes.* → *She enjoys swimming, running, and hiking.* (All gerunds.)
- *The job requires patience, skill, and being dedicated.* → *...patience, skill, and dedication.* (All nouns.)
- Correlative conjunctions require matching forms: *Not only did she win the race, but she also set a new record.* Both clauses have subject + verb.

## Common Traps

**Adjective placement.** *Only* is frequently misplaced: *She only eats vegetables on Tuesdays* implies she does nothing else with vegetables on Tuesdays. *She eats only vegetables on Tuesdays* means vegetables are the only thing she eats.

**Seemingly parallel lists that differ in form.** *He likes hiking, swimming, and to cook.* — *to cook* breaks the gerund pattern.

## Quick Tip

For modifiers: find the opening phrase and ask, "Who or what is this phrase describing?" Then make sure that noun or pronoun is the subject of the main clause. For parallelism: find the conjunction and underline each item it connects. Match the first item's grammatical form and adjust all others to match.`,
    examples: [
      {
        prompt:
          'Fix the error in this sentence: "Painted in rich, warm tones, the art critics praised the mural for its striking visual impact."',
        steps: [
          "Identify the opening modifier: 'Painted in rich, warm tones.' This is a participial phrase — it describes something that was painted.",
          "Identify the subject of the main clause: 'the art critics.' Were the art critics painted in rich, warm tones? No — the mural was.",
          "This is a dangling modifier. The subject of the main clause must match the actor described in the opening phrase.",
          "Fix: make 'the mural' the subject of the main clause — 'Painted in rich, warm tones, the mural drew praise from art critics for its striking visual impact.'",
          "Now the opening phrase correctly modifies 'the mural,' which is the subject of the main clause.",
        ],
        answer:
          "'Painted in rich, warm tones, the mural drew praise from art critics for its striking visual impact.' The original sentence has a dangling modifier — 'painted in rich, warm tones' must describe 'the mural,' which should be the grammatical subject of the main clause.",
      },
    ],
    orderIndex: 13,
  },
];
