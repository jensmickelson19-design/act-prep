// ===========================================================================
// lessons-reading.ts — Reading lessons seed data
// Subject: READING | Lessons: 9 (one per sub-skill)
// All content is 100% original — no imitation of real ACT items or published
// prep materials.
// ===========================================================================

import type { SeedLesson } from "./types";

export const readingLessons: SeedLesson[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. close_reading
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "close_reading",
    title: "Reading Closely for Facts and Details",
    summary:
      "Close reading means locating specific facts and details in a passage, drawing logical conclusions from what is stated, and paraphrasing the author's words accurately. On the ACT, the answer to a detail question is always supported by something explicitly in the passage — never by outside knowledge.",
    body: `## What This Skill Is

**Close reading** is careful, precise engagement with the text. When a question asks for a specific fact, detail, or logical inference, the correct answer is grounded in what the passage actually says — not what you might expect the author to mean, and not your prior knowledge of the subject.

## Key Rules

1. **Locate before you answer.** For detail questions, always find the relevant portion of the passage before choosing an answer. The correct choice will paraphrase or directly reflect what that portion says. If you can't point to where in the passage your answer comes from, reconsider.

2. **Paraphrase accurately.** Answer choices often restate passage content in different words. Check that the meaning is preserved, not just a word or two from the passage. A choice that uses words from the passage but changes the meaning is wrong.

3. **Logical conclusions vs. over-inferences.** A question that asks what can be "reasonably concluded" still requires the inference to follow directly from stated information. You may take one logical step from the text, but not two or three.

4. **Watch for scope.** If the passage says "some studies suggest," a choice stating "all research confirms" goes beyond the text. Answer choices that are more extreme than the passage are usually wrong.

5. **Line references are a gift.** When a question directs you to specific lines, re-read those lines and the two or three sentences surrounding them for context. The answer will be in that vicinity.

## Common Traps

**"Sounds right" but isn't in the passage.** Wrong answers often state something plausible or generally true — but not stated in this passage. Only what the passage says counts.

**Partial information.** A choice might be true based on part of the passage but miss an important qualification in another sentence. Check that your answer accounts for all relevant information.

## Quick Tip

For close-reading questions, treat it like a scavenger hunt. The question is your clue; the passage is the map. Don't guess — hunt for the evidence, and go with the choice that most directly matches what you find.`,
    examples: [
      {
        prompt:
          'Read this passage excerpt and answer the question below.\n\n"The observatory at Clearwater Ridge was built in 1912 by astronomer Helena Voss, who had spent a decade lobbying municipal authorities for funding. The building housed three telescopes, the largest of which weighed nearly four tons. Voss conducted her most important research there in the 1920s, mapping the distribution of nebulae in the northern sky. She published her findings in 1931, a full year after retiring from active observation."\n\nAccording to the passage, when did Voss publish her findings?',
        steps: [
          "Locate the relevant sentence: 'She published her findings in 1931, a full year after retiring from active observation.'",
          "The question asks when she published — the passage gives a specific year: 1931.",
          "Check the answer choices for one that directly states 1931 or restates 'a year after she retired' consistently with the passage.",
          "Confirm no other date in the passage contradicts this.",
        ],
        answer:
          "Voss published her findings in 1931, which the passage states was a full year after she retired from active observation.",
      },
    ],
    orderIndex: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. central_ideas
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "central_ideas",
    title: "Finding the Main Idea and Theme",
    summary:
      "Central idea questions ask you to identify what a passage is primarily about — its overall point, argument, or theme. The main idea is what everything in the passage supports; it is broader than any single detail but narrower than a sweeping generalization.",
    body: `## What This Skill Is

The **central idea** (or main idea) is the unifying claim or theme that holds a passage together. In a nonfiction article, it's the main argument or purpose. In a literary passage, it may be a theme — a deeper truth about human experience that the story illustrates. Identifying it requires you to think about what all the parts of the passage add up to, not just what any one paragraph says.

## Key Rules

1. **The main idea is supported by everything.** Every paragraph, example, and detail in the passage should relate to the main idea. If you identify a "main idea" that only one or two paragraphs support, it's probably a supporting idea, not the central one.

2. **Too narrow vs. too broad.** A common wrong answer is one that describes only part of the passage (too narrow) or makes a sweeping claim that goes beyond anything the passage actually argues (too broad). The correct main idea fits the passage like a custom-cut piece — not too small, not too large.

3. **Introductions and conclusions are clues.** Authors often state the main idea explicitly at the beginning or end of a passage. The first and last paragraphs are worth extra attention.

4. **Theme in fiction.** In a literary passage, the theme is not a plot point. "The character moved to the city" is a plot point. "People often leave home in search of an identity they might have found within themselves" is a theme. Theme statements are usually general truths, not specific events.

5. **Summarize before answering.** After reading the passage, pause and compose a one-sentence summary in your own words before looking at the choices. Then find the choice that most closely matches your summary.

## Common Traps

**Picking the topic, not the main idea.** "Solar energy" is a topic. "Solar energy is increasingly cost-competitive with fossil fuels" is a main idea. The main idea makes a claim; the topic is just the subject.

**Choosing a detail that's heavily emphasized.** If one vivid example or statistic stands out, it might stick in your memory — but if the rest of the passage discusses other things, that detail is not the main idea.

## Quick Tip

Ask: "What does the author want me to understand or believe after reading this?" That's your candidate for the main idea. Then confirm that each major paragraph connects to that understanding.`,
    examples: [
      {
        prompt:
          'A passage opens by noting that coral reefs are declining worldwide. It then describes how rising ocean temperatures cause coral bleaching, how ocean acidification weakens coral skeletons, and how overfishing disrupts the ecological balance reefs depend on. The final paragraph argues that without coordinated international action, a majority of coral reefs may be functionally extinct within fifty years.\n\nWhich of the following best states the central idea of this passage?',
        steps: [
          "Summarize what the passage covers: it describes multiple threats to coral reefs — bleaching, acidification, overfishing — and argues for urgent international action.",
          "Evaluate candidate main ideas:",
          "Option A: 'Ocean temperatures are rising.' — Too narrow; this is one detail, not the whole passage.",
          "Option B: 'Coral reefs face multiple interconnected threats that require coordinated global action to prevent widespread extinction.' — This encompasses all three threats and the concluding call to action. ✓",
          "Option C: 'The ocean contains many different ecosystems.' — Too broad and not argued in the passage.",
          "Option B matches the passage's scope and argument.",
        ],
        answer:
          "The central idea is best stated as: 'Coral reefs face multiple interconnected threats — bleaching, acidification, and overfishing — that require coordinated international action to prevent their widespread loss.' This encompasses every major section of the passage.",
      },
    ],
    orderIndex: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. sequence_relationships
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "sequence_relationships",
    title: "Tracking Sequence, Cause, and Effect",
    summary:
      "Sequence and relationship questions ask you to identify the order in which events occur, explain what causes what, or describe how two things compare. These questions test whether you can follow the logical and temporal structure of a passage, not just its individual facts.",
    body: `## What This Skill Is

Passages don't just state facts — they arrange them in meaningful relationships. **Sequence** is about time order: what happened first, second, third. **Cause and effect** is about logical relationships: event A led to outcome B. **Comparison and contrast** is about similarities and differences. The ACT tests all three.

## Key Rules

1. **Sequence markers.** Words like *first*, *then*, *next*, *subsequently*, *finally*, *after*, *before*, *meanwhile*, *eventually*, and *in the following year* signal time order. Map the timeline mentally or on paper if the sequence is complex.

2. **Cause-effect markers.** Words like *because*, *since*, *due to*, *as a result*, *therefore*, *consequently*, *led to*, *resulted in*, and *caused* signal causal relationships. When a question asks "why" something happened, look for these markers.

3. **Implied relationships.** Not all cause-effect and sequence relationships are flagged by explicit markers. Sometimes the passage describes events in a sequence without labeling them as such — you must infer the order from context.

4. **Compare-contrast markers.** *Similarly*, *likewise*, *in contrast*, *however*, *whereas*, *while*, and *on the other hand* signal that two things are being compared or contrasted.

5. **"What happened as a result of X?" questions.** After identifying X in the passage, read the sentences that immediately follow it. The effect is usually described right after the cause.

## Common Traps

**Confusing correlation with causation.** The passage might describe two things that happened around the same time without stating one caused the other. Don't assume causation unless the passage states or strongly implies it.

**Getting the sequence backwards.** With flashbacks, non-chronological narratives, or complex timelines, it's easy to mix up what happened first. Use signal words as anchors and build the timeline carefully.

## Quick Tip

For sequence questions, quickly map the key events in order (on scratch paper if needed) as you read. For cause-effect questions, find the cause in the passage, then look immediately after it for the stated effect. Don't skip steps.`,
    examples: [
      {
        prompt:
          'Read this passage excerpt and answer the question.\n\n"The city\'s water treatment plant had operated without incident for more than thirty years. In the spring of 2008, an aging filtration membrane ruptured, temporarily releasing untreated water into the distribution system. City engineers detected the contamination within hours and issued a boil-water advisory. Within two days, a replacement membrane was installed and the advisory was lifted. In the months that followed, the city commissioned a full audit of its aging infrastructure and allocated funds for a comprehensive upgrade program."\n\nAccording to the passage, what directly caused the city to commission an infrastructure audit?',
        steps: [
          "The question asks for a cause-effect relationship. Look for what prompted the infrastructure audit.",
          "The audit was commissioned 'in the months that followed' the filtration membrane rupture and the subsequent advisory.",
          "The passage states the audit came after the incident — the membrane rupture and its aftermath (contamination, advisory) caused the city to take stock of its aging infrastructure.",
          "The direct cause stated in the passage: the water contamination incident caused by the ruptured filtration membrane.",
        ],
        answer:
          "The ruptured filtration membrane and the resulting water contamination event directly prompted the city to commission an infrastructure audit and allocate funds for an upgrade program.",
      },
    ],
    orderIndex: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. word_meaning
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "word_meaning",
    title: "Understanding Word Meaning in Context",
    summary:
      "Word meaning questions ask you to determine the meaning of a word or phrase as it is used in a specific passage, including its connotation, figurative meaning, or the precise shade of meaning the author intends. Context always determines meaning — the dictionary definition is a starting point, not the answer.",
    body: `## What This Skill Is

Words have multiple meanings, and their precise meaning in any given context depends on how they are used. **Word meaning in context** questions test your ability to read carefully enough to understand not just what a word generally means, but what it means here, in this sentence, in this passage.

## Key Rules

1. **Substitute and verify.** When a question asks what a word means in context, cover the word and ask yourself what meaning makes sense in that sentence. Then check your idea against the answer choices. Never just pick the most common dictionary definition — it may not fit this context.

2. **Look for context clues.**
   - *Definitions:* sometimes the author defines a term directly or explains it: "The alluvium — the sediment left behind by flood waters — formed rich topsoil."
   - *Examples:* specific examples after the word often illustrate its meaning.
   - *Synonyms and antonyms:* nearby words with similar or opposite meanings can help.
   - *Tone and register:* the overall tone tells you whether a word is used critically, admiringly, humorously, etc.

3. **Figurative language.** Words and phrases are often used non-literally: "The committee's proposal was dead in the water" doesn't mean drowning. Recognizing metaphors, similes, personification, and idioms is important.

4. **Connotation.** *Stubborn* and *determined* have similar denotations but different connotations (negative vs. positive). A question might ask why the author chose one over the other.

5. **Unfamiliar words.** Break the word into roots, prefixes, and suffixes if it's unfamiliar. *Recapitulate* = re (again) + capit (head/main point) + -ulate (to perform) → to summarize key points again.

## Common Traps

**Picking the most common meaning.** Many word-meaning questions use familiar words in less common ways. "Advance" might mean a forward movement, a sum of money paid early, or a romantic approach — the context determines which.

**Ignoring figurative language.** Treating a figurative expression as literal leads to wrong answers. If the author says "the argument collapsed," they mean it failed, not that anything physically fell.

## Quick Tip

After reading the question, go back to the passage and read the full sentence (and the sentence before and after) that contains the word. Replace the word with each answer choice and ask: which replacement makes the sentence sensible and consistent with what surrounds it?`,
    examples: [
      {
        prompt:
          'In the following sentence, determine the meaning of the word "arrested" as it is used in context:\n\n"The engineer\'s report on the dam\'s structural weakness arrested any plans for expansion and redirected the board\'s attention to basic repairs."\n\nOptions: (A) captured and detained (B) stopped or halted (C) slowed down gradually (D) attracted attention to',
        steps: [
          "The most common meaning of 'arrested' is 'captured and detained' (as in law enforcement). Apply the substitution test: 'captured and detained any plans for expansion' — this doesn't make logical sense. Eliminate A.",
          "Try option B — 'stopped or halted any plans for expansion.' The report revealed a problem serious enough to stop the expansion plans. This fits logically. ✓",
          "Try option C — 'slowed down gradually.' The context suggests a decisive halt, not a gradual slowdown. Eliminate.",
          "Try option D — 'attracted attention to.' This doesn't fit grammatically or logically with 'plans for expansion.' Eliminate.",
          "Option B is the only choice that makes the sentence logical and consistent with the surrounding meaning.",
        ],
        answer:
          "In this context, 'arrested' means 'stopped or halted.' The structural report halted the expansion plans and shifted focus to repairs.",
      },
    ],
    orderIndex: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. text_structure
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "text_structure",
    title: "Analyzing How a Passage Is Built",
    summary:
      "Text structure questions ask you to describe how a passage is organized overall, or what function a specific sentence, paragraph, or section serves within the passage. Understanding structure helps you see why the author made organizational choices and how the parts work together.",
    body: `## What This Skill Is

**Text structure** is the architecture of a passage — the pattern in which ideas are arranged and developed. Recognizing structure helps you read more efficiently and answer questions about why a paragraph is placed where it is or what a specific sentence accomplishes.

## Key Rules

**Common overall text structures:**
- **Problem-solution:** identifies a problem and proposes a solution or evaluates potential solutions.
- **Cause-effect:** traces how one event or condition leads to others.
- **Comparison-contrast:** examines similarities and differences between two subjects.
- **Chronological:** presents events in time order (narrative or historical writing).
- **Claim-evidence:** states an argument, then supports it with examples, data, or reasoning.
- **Description/classification:** defines and categorizes a concept.

**Function of a specific sentence or paragraph:**
- **Introduces a counterargument** (then the next paragraph refutes it).
- **Provides evidence** for the preceding claim.
- **Transitions** between two topics or time periods.
- **Establishes the setting or mood** in a narrative.
- **Summarizes or concludes** what came before.

## Key Rules for Questions

1. **Identify the function from context.** What comes before the paragraph in question? What comes after? The paragraph's job is to connect those two parts.

2. **Match the structure to the answer.** Choices like "it provides a counterexample," "it introduces the central argument," and "it shifts the narrative's focus" each describe a specific function. Identify which one is accurate based on what the paragraph actually does.

3. **Overall structure questions.** Read the passage at a high level: how is the argument developed? Is it chronological? Does it move from general to specific? From problem to solution?

## Common Traps

**Picking content over function.** A question about the function of paragraph 3 is asking what that paragraph *does*, not what it *says*. "It describes the effects of climate change" is content. "It illustrates the author's central claim with a specific case study" is function.

**Over-generalizing.** "This paragraph provides background information" is often too vague. Look for a more specific and accurate description of what the paragraph contributes.

## Quick Tip

Before answering a text-structure question, quickly ask: What was the passage doing before this section, and what does it do after? The section in question is the bridge. Describe the bridge.`,
    examples: [
      {
        prompt:
          'A science article first explains what microplastics are and where they come from (paragraphs 1-2). Paragraph 3 then presents research showing that microplastics have been found in human blood, lungs, and breast milk. Paragraph 4 argues that existing water filtration systems are insufficient to remove microplastic particles effectively. The article concludes with a call for improved filtration technology and new regulations.\n\nWhat is the primary function of paragraph 3?',
        steps: [
          "Paragraph 3 presents research findings: microplastics detected in human blood, lungs, and breast milk.",
          "What comes before? An explanation of what microplastics are and their sources — background context.",
          "What comes after? An argument that current filtration systems are inadequate.",
          "Paragraph 3 bridges background explanation and the argument for change by providing evidence that microplastics are already affecting human health — establishing the urgency that motivates the article's call to action.",
          "Function: paragraph 3 provides concrete scientific evidence that elevates microplastic contamination from an environmental concern to a direct human health threat, justifying the argument that follows.",
        ],
        answer:
          "Paragraph 3 provides research evidence that microplastics have entered the human body, establishing the health urgency that supports the article's subsequent argument for improved filtration and new regulations.",
      },
    ],
    orderIndex: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. purpose_point_of_view
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "purpose_point_of_view",
    title: "Identifying Author's Purpose and Point of View",
    summary:
      "Purpose and point of view questions ask you to determine why an author wrote a passage (to inform, persuade, entertain, describe, etc.) and what perspective or attitude the author holds toward the subject. These questions require reading between the lines as well as attending to explicit statements.",
    body: `## What This Skill Is

**Author's purpose** is the reason the author wrote the passage. Every piece of writing has a purpose — and often more than one. On the ACT, understanding purpose means recognizing whether the author primarily aims to inform, persuade, describe, analyze, entertain, or some combination.

**Point of view** is the author's (or narrator's) perspective and attitude toward the subject. It includes whether the author is objective or biased, sympathetic or critical, optimistic or cautious.

## Key Rules

1. **Purpose categories.** Common purposes include:
   - *Inform/explain:* presents facts and ideas without taking a side.
   - *Persuade/argue:* takes a position and tries to convince the reader.
   - *Analyze/critique:* examines evidence and draws reasoned conclusions.
   - *Describe/narrate:* paints a picture or tells a story.
   - *Entertain:* engages the reader through humor, drama, or narrative.
   Many passages blend two of these purposes.

2. **Tone reveals point of view.** Words carry attitude. *Urgent*, *alarming*, and *dire* suggest the author is concerned and wants action. *Fascinating*, *innovative*, and *remarkable* suggest admiration. *Controversial*, *questionable*, and *disputed* suggest skepticism. Read tone systematically.

3. **What the author chooses to include.** A persuasive author will include evidence supporting their claim and may minimize or dismiss opposing evidence. A balanced informational author will present multiple viewpoints without evaluating them.

4. **Narrator vs. author in fiction.** In literary passages, the narrator is a character or voice within the story. The narrator's point of view may differ from the author's. Ask what the narrator thinks and feels, not what the author personally believes.

5. **Qualifying language signals caution.** Words like *may*, *might*, *could*, *suggests*, and *appears* indicate that the author is careful about claiming certainty. Absolute words like *always*, *never*, *certainly*, and *proves* are stronger stances.

## Common Traps

**Assuming all passages are persuasive.** Some ACT reading passages are purely informational. Assigning a persuasive purpose to a neutral passage leads to wrong answers about the author's intent.

**Over-reading tone.** Not every word choice signals a strong attitude. Read the cumulative effect of the passage, not just isolated word choices.

## Quick Tip

After reading, ask: "Why did the author bother writing this? What did they want the reader to think, feel, or do?" That answer — grounded in specific evidence from the passage — is the author's purpose.`,
    examples: [
      {
        prompt:
          'A passage about self-driving vehicle technology is written by a transportation engineer. The author explains how the technology works, cites multiple studies showing reduced accident rates in pilot programs, acknowledges that cybersecurity vulnerabilities remain an unresolved concern, and concludes that wider deployment should proceed cautiously and with robust regulatory oversight.\n\nWhich best describes the author\'s purpose and point of view?',
        steps: [
          "Identify the purpose: the author explains the technology (inform), presents supporting data (analyze), acknowledges risks (balanced perspective), and recommends a cautious approach (advise/persuade mildly).",
          "Purpose: primarily to analyze the state of self-driving technology and recommend a careful path forward.",
          "Identify the point of view: the author is generally supportive of the technology ('reduced accident rates') but cautious ('cybersecurity vulnerabilities remain'), ending with a call for regulation rather than full endorsement.",
          "Point of view: cautiously optimistic — the author sees promise in the technology but believes risks must be managed through oversight.",
        ],
        answer:
          "The author's purpose is to analyze the evidence for and against self-driving vehicle technology and recommend cautious, regulated deployment. The author's point of view is cautiously optimistic — supportive of the technology's potential but attentive to unresolved risks.",
      },
    ],
    orderIndex: 6,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. arguments
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "arguments",
    title: "Evaluating Claims, Evidence, and Reasoning",
    summary:
      "Argument questions ask you to identify an author's central claim, evaluate the quality of supporting evidence, distinguish fact from opinion, and recognize common reasoning errors. Strong readers engage critically with arguments rather than accepting them uncritically.",
    body: `## What This Skill Is

An **argument** is a claim supported by reasons and evidence. On the ACT, argument questions test whether you can identify what the author is claiming, assess how well the evidence supports that claim, distinguish facts from opinions, and spot flaws in reasoning.

## Key Rules

1. **Claim vs. evidence.** A *claim* is the author's position or conclusion: "Urban green spaces reduce mental health disorders." *Evidence* is what supports it: statistics, studies, expert opinions, examples. The ACT may ask you to identify which is which.

2. **Fact vs. opinion.** A *fact* can be verified objectively: "The study surveyed 500 participants." An *opinion* is a judgment or interpretation: "This research is the most compelling evidence yet." Mixing facts and opinions is a common feature of persuasive writing — recognize both.

3. **Evaluating evidence quality.** Ask: Is the evidence relevant to the claim? Is it sufficient (does one example prove a general rule)? Is the source credible? Does it actually support the claim, or just something related?

4. **Common reasoning errors (logical fallacies):**
   - *Hasty generalization:* drawing a broad conclusion from a small or unrepresentative sample.
   - *False cause (post hoc):* assuming that because A happened before B, A caused B.
   - *Straw man:* misrepresenting an opposing view to make it easier to attack.
   - *Appeal to authority:* using an expert's opinion as proof when the expert may not be relevant or reliable.
   - *Circular reasoning:* the conclusion simply restates the premise.

5. **Strengthening vs. weakening the argument.** Some questions ask you to identify information that would strengthen or weaken the author's argument. Find the claim, then decide whether the new information supports or undermines the link between the evidence and the claim.

## Common Traps

**Agreeing with the argument personally.** Evaluate the argument as written — a well-intentioned claim poorly supported by evidence is still a weak argument.

**Confusing a counterargument with the author's main claim.** Authors sometimes present opposing views before refuting them. Make sure you identify the author's own position, not the position being attacked.

## Quick Tip

When reading an argumentative passage, mentally note the main claim and each piece of supporting evidence as you go. Draw a simple mental map: claim → reason 1 → reason 2 → evidence for each. This structure makes it easier to answer questions about any individual piece of the argument.`,
    examples: [
      {
        prompt:
          'An editorial argues: "Our city should require all new commercial buildings to include rooftop gardens. Studies in Amsterdam and Singapore show that buildings with rooftop gardens have lower interior temperatures. Therefore, requiring rooftop gardens will eliminate the urban heat island effect in our city."\n\nIdentify one weakness in this argument.',
        steps: [
          "Identify the claim: requiring rooftop gardens on new commercial buildings will eliminate the urban heat island effect in our city.",
          "Identify the evidence: studies in Amsterdam and Singapore show lower interior temperatures in buildings with rooftop gardens.",
          "Evaluate the link: lower interior temperatures in specific buildings does not necessarily equal elimination of the citywide urban heat island effect. The evidence applies to individual buildings in two specific cities, not to all buildings in all cities.",
          "Identify the reasoning flaw: this is a hasty generalization — drawing a sweeping citywide conclusion from limited examples. Additionally, 'eliminate' is an extremely strong claim that the evidence (lower temperatures in some buildings) does not support.",
          "A second weakness: the policy only applies to new commercial buildings, which may represent a small fraction of all city buildings — further limiting the impact on the overall heat island effect.",
        ],
        answer:
          "One key weakness: the argument commits a hasty generalization, concluding that rooftop gardens will 'eliminate' a citywide phenomenon based on evidence about individual buildings in two foreign cities. The evidence supports a modest benefit, not elimination of the urban heat island effect.",
      },
    ],
    orderIndex: 7,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. multiple_texts
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "multiple_texts",
    title: "Comparing Perspectives Across Two Passages",
    summary:
      "Multiple-text questions ask you to compare two passages on the same topic, identify where their authors agree and disagree, and understand how each author's perspective shapes their argument. Paired passages appear in the Reading section's Passage pair and require you to hold both texts in mind simultaneously.",
    body: `## What This Skill Is

The ACT Reading section includes at least one paired-passage set: two shorter passages on a related topic, written by different authors with different (or sometimes similar) perspectives. **Multiple-text questions** ask you to compare the perspectives, identify points of agreement or disagreement, and synthesize ideas across both passages.

## Key Rules

1. **Read Passage A fully before starting Passage B.** Don't jump back and forth. Get a clear sense of each author's main claim and tone before trying to compare.

2. **Identify the relationship between the passages.** Do they agree? Disagree? Does Passage B respond to or extend ideas in Passage A? Common relationships include:
   - One supports and one opposes the same position.
   - One is theoretical, one is practical or personal.
   - One is historical, one is contemporary.
   - Both support the same broad goal but disagree on method.

3. **Comparison questions.** These ask things like "Both authors agree that..." or "Author A would most likely respond to Author B's claim by..." To answer, find the relevant position in each passage and determine whether it supports, contradicts, or qualifies the other.

4. **What one author would think of the other's argument.** Use what you know about Author A's values and claims to predict how they'd react to something Author B says. Don't invent — use the evidence from Passage A.

5. **Don't mix up the authors.** When the passages have different tones and perspectives, it's easy to attribute the wrong position to the wrong author. Mark which passage contains which idea as you read.

## Common Traps

**Applying both authors' views to one.** A question might describe an idea and ask which author holds it. If you're unsure, go back to each passage and look for the specific claim.

**Finding agreement where there is real disagreement.** Two authors can discuss the same topic and even use some of the same words while holding fundamentally different positions. Read their claims carefully, not just the surface vocabulary.

## Quick Tip

After reading both passages, write a one-line summary of each author's main position. Then the comparison questions become much easier — you have a clear, simple lens through which to evaluate each choice.`,
    examples: [
      {
        prompt:
          'Passage 1 argues that standardized testing provides essential, objective data for measuring student achievement and that without it, educational inequalities would go undetected. Passage 2 argues that standardized testing narrows the curriculum, causes anxiety, and fails to capture the full range of student abilities.\n\nOn which point would both authors most likely agree?',
        steps: [
          "Identify Author 1's core view: standardized tests produce objective data that reveals educational inequalities — tests have value as a diagnostic tool.",
          "Identify Author 2's core view: standardized tests are harmful — they narrow curriculum, cause anxiety, and are an incomplete measure of ability.",
          "Look for a point where both would converge. Author 1 values tests for detecting inequalities; Author 2 doesn't dispute that inequalities exist — they dispute the test as the right instrument.",
          "Both authors implicitly acknowledge that educational inequalities exist and matter — Author 1 argues testing detects them; Author 2 argues a better tool is needed to address them.",
          "On testing methodology, they disagree. On the existence and importance of educational inequalities as a concern, they are aligned.",
        ],
        answer:
          "Both authors would likely agree that educational inequalities are a serious concern worth measuring and addressing. They disagree on whether standardized tests are the appropriate instrument for doing so.",
      },
    ],
    orderIndex: 8,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. visual_quantitative
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "READING",
    subSkill: "visual_quantitative",
    title: "Reading Graphs and Tables Alongside a Passage",
    summary:
      "Visual and quantitative questions ask you to interpret data from a graph, chart, table, or diagram presented alongside a reading passage, and sometimes to connect the visual data to claims made in the passage. These questions require both reading and data analysis skills.",
    body: `## What This Skill Is

Some ACT Reading passages include visual elements — bar graphs, line graphs, pie charts, data tables, or diagrams. **Visual and quantitative questions** test your ability to read these accurately, identify trends and values, and connect the data to the passage's argument or narrative.

## Key Rules

1. **Read the title and labels first.** Before looking at the data, identify what the graph is measuring. What is on each axis? What are the units? What is the time period? What population is represented? Misreading labels is the most common source of error.

2. **Identify trends, not just individual data points.** Questions often ask about the overall pattern (increasing, decreasing, fluctuating, flat) rather than a specific value. Be ready to describe the direction of change.

3. **Compare categories.** Bar graphs and tables often show multiple categories. Questions may ask which category is highest, lowest, or shows the greatest change. Rank the categories before answering.

4. **Connect the visual to the passage.** Some questions ask whether a data point supports or contradicts a claim in the passage. Read the specific claim carefully, then find the relevant data point in the visual and determine whether they align.

5. **Interpolation and extrapolation.** *Interpolation* means reading a value between two data points; *extrapolation* means projecting beyond the data range. Be cautious with extrapolation — the ACT will not ask you to speculate wildly, but it may ask you to project a clear trend.

## Common Traps

**Confusing correlation with causation in graphs.** A graph showing two trends moving together does not prove one causes the other. Describe what the graph shows; don't claim more.

**Misreading the scale.** Graph axes can have non-linear scales or unusual increments. Always check the scale before reading specific values.

## Quick Tip

Treat the graph or table like a mini passage. Spend 20-30 seconds reading its title, labels, and overall pattern before tackling the questions. The investment pays off by preventing careless reading errors that cost you points.`,
    examples: [
      {
        prompt:
          'A passage discusses trends in renewable energy adoption. The accompanying bar graph shows electricity generated from solar panels (in gigawatt-hours) in Country X for each year from 2015 to 2022. The bars show values of approximately: 2015: 50 GWh, 2016: 75 GWh, 2017: 110 GWh, 2018: 160 GWh, 2019: 220 GWh, 2020: 290 GWh, 2021: 370 GWh, 2022: 460 GWh.\n\nThe passage states that "solar electricity generation in Country X has grown at a consistent rate over the past several years." Does the graph support, contradict, or complicate this claim?',
        steps: [
          "Read the graph carefully: values increase each year from 50 GWh in 2015 to 460 GWh in 2022. Generation clearly grows over the period.",
          "Evaluate the claim of 'consistent rate.' Calculate or estimate year-over-year increases: +25, +35, +50, +60, +70, +80, +90 GWh per year.",
          "The increases are not consistent (equal) — they grow larger each year (accelerating growth), not at a steady fixed amount.",
          "The graph supports the claim that generation has grown, but it complicates the claim of 'consistent rate' — the rate of growth is actually accelerating, not staying the same.",
        ],
        answer:
          "The graph partially supports the claim (solar generation consistently increases each year) but complicates it. The rate of growth is not consistent — it accelerates each year, from a gain of roughly 25 GWh in 2016 to a gain of roughly 90 GWh in 2022. 'Growing at a consistent rate' is therefore imprecise; 'growing at an accelerating rate' would be more accurate.",
      },
    ],
    orderIndex: 9,
  },
];
