import type { SeedPassage } from "./types";

// READING — Diagnostic Form 1. Four passage sets, 36 questions total (9 per
// set), formOrder 1-36 continuous. One passage per genre, with the humanities
// set built as a paired two-text (Passage A / Passage B) comparison and the
// social-science set carrying a small data table. Every passage and question is
// 100% ORIGINAL content authored for this app; all "adapted from" framing in
// titles and bodies refers to invented source works.
export const form1ReadingPassages: SeedPassage[] = [
  // ===================================================================
  // Passage I — LITERARY NARRATIVE — formOrder 1-9
  // ===================================================================
  {
    subject: "READING",
    passageType: "literary_narrative",
    diagnosticForm: 1,
    title: "From the short story \"The Long Way Around\" by Imani Colvard",
    body: `My grandfather never learned to drive, and so for the whole of my childhood he walked. He walked to the hardware store, to the barbershop, to the river where he was not allowed to fish but fished anyway, and every Sunday he walked the two and a half miles to our house for dinner, arriving with his good shoes dusty and a paper sack of oranges under his arm. My mother offered him rides a hundred times. He refused them all with the same small wave of the hand, as if he were shooing a fly, and it was not until I was nearly grown that I understood the refusal was not stubbornness but a kind of argument he was having with the world, one he intended to keep winning.

He had come north in 1951 with a single suitcase and a mistrust of anything that could be taken away from him. A car could be repossessed; a car could break down on an empty road at night; a car could be pulled over by a man with a badge and a bad mood. His own two feet, he liked to say, had never once refused to start. When I was nine I found this hilarious, and I told him so. He did not laugh. He looked at me for a long moment and then said, "You laugh because you have never had to count the things that belong to you. When you have counted them, you will understand why a man keeps his list short."

I did not understand it then. I understood it the summer I turned sixteen and got my license and my mother's old sedan, and drove everywhere, fast, drunk on the ordinary miracle of covering ground without effort. I would pass my grandfather on the road sometimes, walking, and I would slow down and offer him a ride, and he would give me the small wave, and I would speed off feeling that I had won something, that the future belonged to people like me who moved quickly and the past belonged to people like him who did not.

Then the sedan died. It died spectacularly, on the shoulder of the county highway, in a way that involved smoke and a sound like a dropped bag of silverware, and the man who came to tow it told me the repair would cost more than the car was worth. For three weeks, while I waited for a part that never seemed to arrive, I walked. I walked to my summer job at the lumberyard, two miles each way, and I hated it, and then, somewhere in the second week, I stopped hating it. I began to notice things: a heron that stood in the same reeds every morning, a house where a woman left day-old bread on the porch rail for whoever needed it, the exact place where the pavement gave up and the gravel began. I had driven that road a thousand times and had never once seen it.

On a Sunday near the end of those three weeks, my grandfather came to dinner, and I walked out to meet him on the road, and we walked the last half mile together. He did not say anything about the car, or about my walking, or about being right, which he plainly was. He only handed me an orange from his sack and pointed with his chin at the heron in the reeds, as if to say, So you have found it too. We walked the rest of the way in a silence that felt, for the first time in my life, like a conversation.`,
    questions: [
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "central_ideas",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 1,
        prompt: "The passage is best described as an account of how the narrator:",
        choices: [
          { label: "A", text: "learns to appreciate a value her grandfather had long tried to convey to her." },
          { label: "B", text: "overcomes her fear of driving after a serious car accident." },
          { label: "C", text: "persuades her grandfather to finally accept rides from the family." },
          { label: "D", text: "resents being forced to walk to work after her car breaks down." },
        ],
        correctAnswer: "A",
        explanation: "central_ideas: The narrator moves from finding her grandfather's walking 'hilarious' to walking the last half mile with him 'in a silence that felt... like a conversation,' having come to see what he saw. B distorts the passage (there is no fear of driving); C reverses the grandfather's unchanged refusal; D captures only the narrator's early, temporary reaction, not the arc.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 2,
        prompt: "According to the passage, the narrator's grandfather came north in 1951 with:",
        choices: [
          { label: "A", text: "a paper sack of oranges." },
          { label: "B", text: "a single suitcase and a mistrust of anything that could be taken from him." },
          { label: "C", text: "his mother's old sedan." },
          { label: "D", text: "a driver's license he never used." },
        ],
        correctAnswer: "B",
        explanation: "close_reading: The second paragraph states he 'had come north in 1951 with a single suitcase and a mistrust of anything that could be taken away from him.' The oranges (A) belong to his Sunday visits; the sedan (C) is the narrator's; and the grandfather 'never learned to drive,' so D is false.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "sequence_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 3,
        prompt: "The narrator's attitude toward walking changes as a result of:",
        choices: [
          { label: "A", text: "a conversation in which her grandfather finally explains his reasoning." },
          { label: "B", text: "getting her license and her mother's old sedan." },
          { label: "C", text: "her car breaking down and forcing her to walk for three weeks." },
          { label: "D", text: "her mother repeatedly offering the grandfather rides." },
        ],
        correctAnswer: "C",
        explanation: "sequence_relationships: The shift is caused by the sedan dying, after which 'for three weeks... I walked' and 'somewhere in the second week, I stopped hating it' and began to notice the heron and the bread. Getting the sedan (B) produced the opposite attitude; the grandfather never explains himself in the final scene (A); the mother's offers (D) precede and do not change the narrator.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "word_meaning",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 4,
        prompt: "In the first paragraph, the narrator's statement that her grandfather's refusal \"was not stubbornness but a kind of argument he was having with the world\" most nearly means that his walking was:",
        choices: [
          { label: "A", text: "a pointless quarrel he could never actually win." },
          { label: "B", text: "a deliberate way of asserting a principle he believed in." },
          { label: "C", text: "a sign that he disliked speaking with his family." },
          { label: "D", text: "an angry protest against the people who offered him rides." },
        ],
        correctAnswer: "B",
        explanation: "word_meaning: The narrator explicitly rules out 'stubbornness' and frames the walking as an 'argument... he intended to keep winning' — a purposeful stand for a conviction (later revealed as self-reliance). A contradicts 'intended to keep winning'; C confuses walking with silence; D overstates it as 'angry protest,' which the calm 'small wave of the hand' undercuts.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "purpose_point_of_view",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 5,
        prompt: "The passage is narrated from the point of view of:",
        choices: [
          { label: "A", text: "the grandfather, recalling his journey north in 1951." },
          { label: "B", text: "an adult looking back on events from her childhood and teenage years." },
          { label: "C", text: "a neighbor observing the family from a distance." },
          { label: "D", text: "the narrator's mother, describing her father-in-law." },
        ],
        correctAnswer: "B",
        explanation: "purpose_point_of_view: The narrator speaks in the past tense as a grown woman ('it was not until I was nearly grown that I understood'), recounting being nine and sixteen. The grandfather (A) and mother (D) are described, not narrating; a distant neighbor (C) could not report the narrator's inner thoughts.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "text_structure",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 6,
        prompt: "The description of the heron, the bread on the porch rail, and the place where the pavement gives way to gravel functions primarily to:",
        choices: [
          { label: "A", text: "explain why the narrator's car was so expensive to repair." },
          { label: "B", text: "show concretely what the narrator gained by walking that she had missed while driving." },
          { label: "C", text: "prove that the narrator's route to work was unusually dangerous." },
          { label: "D", text: "suggest that the narrator was becoming lost on unfamiliar roads." },
        ],
        correctAnswer: "B",
        explanation: "text_structure: The narrator lists these details right after saying she 'began to notice things,' then adds she 'had driven that road a thousand times and had never once seen it' — the details make the abstract gain concrete. They have nothing to do with repair costs (A) or danger (C), and the road is familiar, not unfamiliar (D).",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "arguments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 7,
        prompt: "When the grandfather says, \"You laugh because you have never had to count the things that belong to you,\" he is primarily making the point that:",
        choices: [
          { label: "A", text: "the narrator should keep a written list of her possessions." },
          { label: "B", text: "people who have never faced loss do not grasp the value of relying only on what cannot be taken from them." },
          { label: "C", text: "walking is healthier than driving for people of any age." },
          { label: "D", text: "the narrator owns too few things to understand wealth." },
        ],
        correctAnswer: "B",
        explanation: "arguments: The grandfather links 'counting' one's belongings to why 'a man keeps his list short,' having just explained that cars can be 'repossessed' or 'taken away' while his feet 'never once refused to start.' His claim is about the wisdom of depending on the untakeable. A takes 'count' and 'list' literally; C imports an unstated health argument; D misreads the point as being about quantity of possessions.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 8,
        prompt: "In the final scene, the grandfather responds to the narrator's changed outlook by:",
        choices: [
          { label: "A", text: "telling her at length that he had been right all along." },
          { label: "B", text: "offering her a ride the rest of the way home." },
          { label: "C", text: "handing her an orange and pointing at the heron without speaking about it." },
          { label: "D", text: "asking her to explain what she had learned while walking." },
        ],
        correctAnswer: "C",
        explanation: "close_reading: The passage states he 'did not say anything about... being right,' and 'only handed me an orange from his sack and pointed with his chin at the heron.' A directly contradicts 'did not say anything'; the grandfather does not drive, so B is impossible; and he asks nothing (D).",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "word_meaning",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 9,
        prompt: "As it is used in the final sentence, the phrase \"a silence that felt... like a conversation\" most nearly suggests that grandfather and granddaughter:",
        choices: [
          { label: "A", text: "had run out of things to say to each other." },
          { label: "B", text: "were avoiding an argument by refusing to speak." },
          { label: "C", text: "now shared an understanding that needed no words." },
          { label: "D", text: "were too tired from the walk to talk." },
        ],
        correctAnswer: "C",
        explanation: "word_meaning: The silence follows the grandfather's wordless gesture 'as if to say, So you have found it too,' signaling mutual recognition — a communion, not an absence. A misses that the moment is 'for the first time... like a conversation' (full, not empty); B invents an argument; D reduces a meaningful image to fatigue.",
      },
    ],
  },

  // ===================================================================
  // Passage II — SOCIAL SCIENCE — formOrder 10-18 — includes data table
  // and 2 visual_quantitative questions
  // ===================================================================
  {
    subject: "READING",
    passageType: "social_science",
    diagnosticForm: 1,
    title: "From \"The Fifteen-Minute City\" by Renata Ostrowski, on how neighborhood design shapes daily life",
    body: `For most of the twentieth century, city planners in wealthy countries organized urban space around a single assumption: that residents would own automobiles and would not mind driving to reach the things they needed. Homes were separated from shops, shops from workplaces, workplaces from schools. The resulting cities were spacious and, for those with cars, convenient. But they quietly imposed a cost on everyone who could not drive — children, the elderly, the poor, the disabled — and a subtler cost on everyone else: the erosion of the short, unplanned trip on foot that once knit a neighborhood together.

In recent years a competing idea has gained ground. Its advocates call it the "fifteen-minute city," and its premise is simple: a person should be able to reach most daily necessities — groceries, a school, a clinic, a park, a place to work — within a fifteen-minute walk or bicycle ride of home. The goal is not to ban cars but to make them optional, and in doing so to return to the street the foot traffic that makes a neighborhood feel alive and safe.

Skeptics raise a fair objection. Concentrating shops and services close to homes, they argue, works only where enough people live nearby to support those businesses; in a low-density neighborhood of single-family houses, the corner grocery cannot survive. This is true, and it points to the real requirement of the fifteen-minute city: a certain density of residents. The idea is therefore less a plan for every neighborhood than an argument for building the kind of neighborhood in which it can work.

To test whether proximity actually changes behavior, a research team surveyed residents of four neighborhoods in the same mid-sized city, differing chiefly in how far a typical home was from the nearest cluster of shops and services. For each neighborhood they recorded the average walking distance to that cluster and the share of residents who reported making at least one daily errand on foot.

{{figure:t1}}

The pattern in the survey is striking. Where the nearest services lay within a five-minute walk, a large majority of residents ran daily errands on foot; where they lay a twenty-minute walk away, only a small minority did. The relationship was not perfectly smooth — the neighborhood with a nine-minute walk showed a higher share of walkers than its distance alone would predict, which the researchers attributed to a pleasant, tree-lined route that made the walk feel shorter than it was. But the overall message was clear: distance is not merely a matter of minutes. It is a threshold, and beyond a certain point, the car wins by default.

None of this means that redesigning a city is easy. Streets already built cannot be rearranged at will, and residents who have organized their lives around driving may resist changes that seem to inconvenience them in the short term. Yet the survey suggests that the payoff is real. When the things people need are close enough to reach on foot, a surprising number of them will walk — not because they have been told to, but because, at that distance, walking is simply the easier choice.`,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption:
          "Average walking distance to the nearest cluster of shops and services, and the share of residents making at least one daily errand on foot, in four surveyed neighborhoods.",
        columns: [
          { key: "hood", header: "Neighborhood", align: "left" },
          { key: "walk", header: "Walk to services (min)", align: "right" },
          { key: "share", header: "Residents running daily errands on foot (%)", align: "right" },
        ],
        rows: [
          { hood: "Millbrook", walk: 5, share: 72 },
          { hood: "Ashfield", walk: 9, share: 61 },
          { hood: "Cedar Row", walk: 14, share: 38 },
          { hood: "Overlook", walk: 20, share: 19 },
        ],
      },
    ],
    questions: [
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "central_ideas",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 10,
        prompt: "The main idea of the passage is that:",
        choices: [
          { label: "A", text: "cars should be banned from all modern cities." },
          { label: "B", text: "placing daily necessities within a short walk of homes can meaningfully increase how much people travel on foot, though it requires sufficient density." },
          { label: "C", text: "twentieth-century city planners were the first to design cities around walking." },
          { label: "D", text: "low-density neighborhoods of single-family houses are the ideal setting for the fifteen-minute city." },
        ],
        correctAnswer: "B",
        explanation: "central_ideas: The passage explains the fifteen-minute city, notes it requires 'a certain density of residents,' and cites survey evidence that proximity raises walking. A overstates it (the goal is to 'make [cars] optional, not to ban' them); C reverses history (planners assumed car ownership); D contradicts the density point, since low-density areas 'cannot' support the corner grocery.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "visual_quantitative",
        difficulty: 2,
        estimatedTimeSec: 55,
        diagnosticForm: 1,
        formOrder: 11,
        prompt: "According to Table 1, the neighborhood in which the largest share of residents ran daily errands on foot was:",
        choices: [
          { label: "A", text: "Millbrook." },
          { label: "B", text: "Ashfield." },
          { label: "C", text: "Cedar Row." },
          { label: "D", text: "Overlook." },
        ],
        correctAnswer: "A",
        explanation: "visual_quantitative: Table 1 lists Millbrook at 72 percent, the highest of the four (Ashfield 61, Cedar Row 38, Overlook 19). Reading the column correctly rules out the others.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "visual_quantitative",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 12,
        prompt: "The passage states that one neighborhood \"showed a higher share of walkers than its distance alone would predict.\" Based on the passage and Table 1, that neighborhood is:",
        choices: [
          { label: "A", text: "Millbrook, at a five-minute walk." },
          { label: "B", text: "Ashfield, at a nine-minute walk." },
          { label: "C", text: "Cedar Row, at a fourteen-minute walk." },
          { label: "D", text: "Overlook, at a twenty-minute walk." },
        ],
        correctAnswer: "B",
        explanation: "visual_quantitative: The fifth paragraph identifies 'the neighborhood with a nine-minute walk' as the exception, crediting 'a pleasant, tree-lined route.' Table 1 shows Ashfield is the nine-minute neighborhood (61%). The others sit on the expected downward trend, so A, C, and D are wrong.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "sequence_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 13,
        prompt: "According to the passage, the twentieth-century practice of separating homes from shops and workplaces resulted in cities that were:",
        choices: [
          { label: "A", text: "convenient for drivers but costly for those who could not drive." },
          { label: "B", text: "denser and more walkable than earlier cities." },
          { label: "C", text: "unable to support automobile ownership." },
          { label: "D", text: "designed chiefly around bicycle travel." },
        ],
        correctAnswer: "A",
        explanation: "sequence_relationships: The first paragraph says the resulting cities were 'convenient' 'for those with cars' but 'imposed a cost on everyone who could not drive — children, the elderly, the poor, the disabled.' B and D reverse the effect (the cities were car-oriented, not walkable or bike-centered); C contradicts the assumption that residents 'would own automobiles.'",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "text_structure",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 14,
        prompt: "The third paragraph (\"Skeptics raise a fair objection...\") functions in the passage primarily to:",
        choices: [
          { label: "A", text: "abandon the case for the fifteen-minute city in favor of the skeptics' view." },
          { label: "B", text: "acknowledge a valid limitation and use it to refine, rather than reject, the idea." },
          { label: "C", text: "provide statistical proof that the fifteen-minute city cannot work." },
          { label: "D", text: "introduce a new topic unrelated to the rest of the passage." },
        ],
        correctAnswer: "B",
        explanation: "text_structure: The author calls the objection 'fair' and 'true,' then turns it into 'the real requirement' — density — concluding the idea is 'an argument for building the kind of neighborhood in which it can work.' The case is refined, not abandoned (A) or disproven (C); density is central, not unrelated (D).",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "word_meaning",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 15,
        prompt: "As it is used in the final paragraph, the phrase \"the car wins by default\" most nearly means that:",
        choices: [
          { label: "A", text: "cars are mechanically superior to walking." },
          { label: "B", text: "residents are legally required to drive beyond a certain distance." },
          { label: "C", text: "when destinations are too far to walk comfortably, people drive simply because it is the path of least resistance." },
          { label: "D", text: "car manufacturers deliberately design cities to force driving." },
        ],
        correctAnswer: "C",
        explanation: "word_meaning: The passage pairs the phrase with the idea that 'beyond a certain point' walking stops and, elsewhere, that at short distances 'walking is simply the easier choice' — so past the threshold, driving becomes the easier default. A misreads 'wins' as mechanical superiority; B invents a legal rule; D adds a conspiracy the text never claims.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "arguments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 16,
        prompt: "Which of the following, if true, would most strengthen the author's claim that proximity itself changes behavior?",
        choices: [
          { label: "A", text: "Residents of the four neighborhoods were found to have similar incomes, ages, and rates of car ownership." },
          { label: "B", text: "Overlook residents reported enjoying long drives on weekends." },
          { label: "C", text: "Millbrook was recently featured in a magazine about attractive towns." },
          { label: "D", text: "Cedar Row has more parking spaces per resident than the other neighborhoods." },
        ],
        correctAnswer: "A",
        explanation: "arguments: If the neighborhoods match on income, age, and car ownership, then distance — not some other trait — best explains the differing walking rates, directly supporting the author's causal claim. B and D concern driving preferences that would, if anything, muddy the comparison; C is irrelevant to walking behavior.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "purpose_point_of_view",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 17,
        prompt: "The author's overall attitude toward the fifteen-minute city can best be described as:",
        choices: [
          { label: "A", text: "sympathetic but aware of its real limits and difficulties." },
          { label: "B", text: "dismissive of it as an impractical fantasy." },
          { label: "C", text: "completely neutral, expressing no view of his own." },
          { label: "D", text: "enthusiastic to the point of ignoring any objection." },
        ],
        correctAnswer: "A",
        explanation: "purpose_point_of_view: The author endorses the idea ('the payoff is real') yet grants that redesigning a city is 'not easy,' that density is required, and that residents 'may resist.' That balance rules out dismissiveness (B), full neutrality (C), and uncritical enthusiasm (D), since a fair objection is squarely addressed.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 18,
        prompt: "The passage indicates that the research team studied four neighborhoods that differed chiefly in:",
        choices: [
          { label: "A", text: "the average income of their residents." },
          { label: "B", text: "how far a typical home was from the nearest cluster of shops and services." },
          { label: "C", text: "the number of automobiles registered in each." },
          { label: "D", text: "the age of the buildings in each neighborhood." },
        ],
        correctAnswer: "B",
        explanation: "close_reading: The fourth paragraph says the neighborhoods were 'in the same mid-sized city, differing chiefly in how far a typical home was from the nearest cluster of shops and services.' Income (A), car counts (C), and building age (D) are not named as the distinguishing variable.",
      },
    ],
  },

  // ===================================================================
  // Passage III — HUMANITIES — PAIRED (Passage A / Passage B) — formOrder
  // 19-27 — includes 3 multiple_texts questions
  // ===================================================================
  {
    subject: "READING",
    passageType: "humanities",
    diagnosticForm: 1,
    title: "Paired passages on translation and originality",
    body: `Passage A is adapted from an essay by the literary translator Ines Vaquero, "Carrying the Water." Passage B is adapted from a lecture by the poet and critic Desmond Achebe-Lyle titled "The Second Author."

Passage A

People like to say that translation is impossible, and then they read translations all their lives. They read their scripture in translation, their childhood fairy tales, half the novels they love. The impossibility they mean is real but narrow: no sentence in one language maps perfectly onto a sentence in another. A word carries its history, its rhymes, its neighbors, and none of these travel. But to conclude from this that translation fails is to misunderstand what a translator is trying to do. I am not trying to build an identical copy. I am trying to carry the water from one vessel to another without spilling what matters, knowing that the shape of the vessel will change.

Consider a single line of poetry. In the original it may lean on a pun that has no equivalent in my language. I cannot reproduce the pun. But I can ask what the pun was doing — was it making the reader laugh, or slowing the eye, or linking two ideas that the poet wanted linked? — and I can find, in my own language, a different device that does the same work. The words are not the same. The effect, if I am skilled and lucky, is close. This is not betrayal. It is the most faithful thing I know how to do, because it is faithful to the poem's intention rather than to its surface.

The translator who insists on literal fidelity, word for word, produces something dead: technically accurate and unreadable, a museum of corpses. Fidelity to a living thing means keeping it alive. And so I have come to believe that a good translation is not a lesser copy of an original but a genuine work in its own right, made under an unusual and demanding constraint. The translator is not a servant standing behind the author. The translator is a second author, writing the same book again.

Passage B

I want to praise translators, and then I want to disagree with the most flattering thing they say about themselves. Translators are indispensable; without them I would know almost nothing of the world's literature. But some of them, in recent years, have begun to describe themselves as "second authors," co-creators equal in standing to the writers they translate. This I cannot accept, and I think the translators themselves, in a clearer moment, would not accept it either.

The reason is simple. The original author faced the blank page. She invented the story that did not exist, chose which of a thousand possible lines to write, and bore the risk that the whole thing might fail. The translator faces a page that is already full. Every hard decision about what the work would be has been made. The translator's decisions are real and difficult, but they are decisions within a house someone else designed — which wall to paint, which window to open — not decisions about whether to build the house at all.

I do not say this to diminish the craft. A brilliant translation can be more beautiful, sentence by sentence, than a clumsy original; I have read translations that surpass their sources in music. But beauty is not the same as authorship. The translator improves, adapts, and rescues; these are high callings. What the translator does not do is originate, and originating is the one thing that authorship, in the oldest and most honest sense of the word, means. Call the translator an artist. Just do not call the translator the author, for that title belongs to the one who began.`,
    questions: [
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "purpose_point_of_view",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 19,
        prompt: "The central purpose of Passage A is to:",
        choices: [
          { label: "A", text: "argue that translation is impossible and should be abandoned." },
          { label: "B", text: "defend translation as a faithful, creative act and argue that a translator is a genuine author." },
          { label: "C", text: "explain the technical rules for translating puns between languages." },
          { label: "D", text: "warn readers not to trust translations of scripture." },
        ],
        correctAnswer: "B",
        explanation: "purpose_point_of_view: Vaquero rejects literal fidelity as 'dead,' defends fidelity to a poem's 'intention,' and concludes 'the translator is a second author.' A inverts her view (she says the impossibility is 'narrow'); C treats one example as the whole purpose; D misreads the scripture reference, which shows how much people rely on translation.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "word_meaning",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 20,
        prompt: "In Passage A, Vaquero's image of carrying \"the water from one vessel to another without spilling what matters\" most nearly conveys that a translator should preserve a work's:",
        choices: [
          { label: "A", text: "exact words and grammar." },
          { label: "B", text: "essential meaning and effect, even as its form changes." },
          { label: "C", text: "physical length and page count." },
          { label: "D", text: "original title and author's name." },
        ],
        correctAnswer: "B",
        explanation: "word_meaning: Vaquero says the 'shape of the vessel will change' but 'what matters' must not spill, and elsewhere she keeps the 'effect' while the 'words are not the same.' The water is the essential meaning/effect. A contradicts 'the words are not the same'; C and D seize on incidental features she never emphasizes.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 2,
        estimatedTimeSec: 55,
        diagnosticForm: 1,
        formOrder: 21,
        prompt: "In Passage A, Vaquero describes a strictly literal, word-for-word translation as:",
        choices: [
          { label: "A", text: "the most faithful kind of translation possible." },
          { label: "B", text: "something dead — 'technically accurate and unreadable.'" },
          { label: "C", text: "impossible to produce in any language." },
          { label: "D", text: "the mark of a true second author." },
        ],
        correctAnswer: "B",
        explanation: "close_reading: The third paragraph calls the literal translator's product 'something dead: technically accurate and unreadable, a museum of corpses.' A and D reverse her view (she prizes fidelity to intention, not surface); she never calls literal translation impossible (C), only lifeless.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "central_ideas",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 22,
        prompt: "The central claim of Passage B is that:",
        choices: [
          { label: "A", text: "translators are unimportant and should be ignored." },
          { label: "B", text: "a translation can never be beautiful." },
          { label: "C", text: "translators deserve praise, but calling them 'authors' is a mistake because they do not originate the work." },
          { label: "D", text: "the original author and the translator do exactly the same kind of work." },
        ],
        correctAnswer: "C",
        explanation: "central_ideas: Achebe-Lyle calls translators 'indispensable' and their craft a 'high calling,' yet insists 'what the translator does not do is originate,' so the title of author 'belongs to the one who began.' A contradicts his praise; B is refuted by his admission that translations can 'surpass their sources in music'; D is the very claim he rejects.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "arguments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 23,
        prompt: "In Passage B, the extended comparison of a translator to someone deciding \"which wall to paint, which window to open\" in a house \"someone else designed\" is used to support the point that:",
        choices: [
          { label: "A", text: "translators do easier work than authors do." },
          { label: "B", text: "the translator makes real choices, but only within a structure the original author has already created." },
          { label: "C", text: "translation requires no skill or difficult decisions." },
          { label: "D", text: "houses and books are built in fundamentally similar ways." },
        ],
        correctAnswer: "B",
        explanation: "arguments: Achebe-Lyle says the translator's 'decisions are real and difficult, but they are decisions within a house someone else designed... not decisions about whether to build the house at all.' The analogy grants real but bounded choices. A and C overshoot by denying difficulty (he affirms it); D mistakes the illustrative analogy for a literal claim about construction.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "multiple_texts",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 24,
        prompt: "The central disagreement between Passage A and Passage B concerns whether:",
        choices: [
          { label: "A", text: "translations are worth reading at all." },
          { label: "B", text: "a translator should be considered an author of the translated work." },
          { label: "C", text: "translating poetry is harder than translating prose." },
          { label: "D", text: "literal, word-for-word translation is ever acceptable." },
        ],
        correctAnswer: "B",
        explanation: "multiple_texts: Vaquero concludes 'the translator is a second author,' while Achebe-Lyle answers 'do not call the translator the author.' That is the precise clash. Both value translations, so A is a shared premise, not the dispute; neither ranks poetry vs. prose (C); and only Passage A dwells on literal translation (D), which is not their point of contention.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "multiple_texts",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 25,
        prompt: "On which of the following points would the authors of Passage A and Passage B most likely AGREE?",
        choices: [
          { label: "A", text: "A translator is equal in standing to the original author." },
          { label: "B", text: "A skilled translation involves real, difficult, and valuable creative choices." },
          { label: "C", text: "Literal, word-for-word translation is the ideal to aim for." },
          { label: "D", text: "Translations are generally inferior to their originals in beauty." },
        ],
        correctAnswer: "B",
        explanation: "multiple_texts: Vaquero calls translation 'the most faithful thing I know how to do,' a demanding creative act; Achebe-Lyle grants the translator's 'decisions are real and difficult' and calls the craft a 'high calling.' Both prize the skilled choices. A is the point they dispute; both reject literal translation as an ideal (C); and Achebe-Lyle notes translations can 'surpass their sources,' so neither holds D.",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "multiple_texts",
        difficulty: 5,
        estimatedTimeSec: 75,
        diagnosticForm: 1,
        formOrder: 26,
        prompt: "How would Achebe-Lyle (Passage B) most likely respond to Vaquero's claim that a translator is \"a second author, writing the same book again\"?",
        choices: [
          { label: "A", text: "He would agree fully, since he also calls the translator an author." },
          { label: "B", text: "He would accept that translators do skilled, valuable work but deny the title 'author,' because they do not originate the work." },
          { label: "C", text: "He would argue that translators do nothing of value and deserve no praise." },
          { label: "D", text: "He would insist that the translation is always more important than the original." },
        ],
        correctAnswer: "B",
        explanation: "multiple_texts: Achebe-Lyle explicitly praises the craft ('these are high callings') yet says 'do not call the translator the author, for that title belongs to the one who began.' So he would grant the skill but refuse the label — exactly B. A contradicts his refusal of the title; C ignores his praise; D reverses his priority on the originator.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "text_structure",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 27,
        prompt: "The opening of Passage B (\"I want to praise translators, and then I want to disagree...\") functions primarily to:",
        choices: [
          { label: "A", text: "signal that the author will grant translators' value before challenging one specific claim they make." },
          { label: "B", text: "announce that the author will attack translators throughout the lecture." },
          { label: "C", text: "concede that the author has no real disagreement with translators." },
          { label: "D", text: "summarize the argument of Passage A and endorse it." },
        ],
        correctAnswer: "A",
        explanation: "text_structure: The sentence previews the essay's two moves — praise, then a targeted disagreement 'with the most flattering thing they say about themselves' (the 'second author' claim). B overstates it as a sustained attack; C denies the disagreement he clearly presses; D wrongly makes Passage B an endorsement of Passage A.",
      },
    ],
  },

  // ===================================================================
  // Passage IV — NATURAL SCIENCE — formOrder 28-36
  // ===================================================================
  {
    subject: "READING",
    passageType: "natural_science",
    diagnosticForm: 1,
    title: "From \"The Listening Forest\" by Dr. Aleksandr Petrov, on how trees communicate through fungal networks",
    body: `For a long time, biologists pictured a forest as a slow-motion competition. Each tree, in this view, was a solitary contestant, reaching its leaves toward the light and its roots toward the water, and every gain by one tree came at the expense of its neighbors. The picture was not wrong, exactly. Trees do compete. But it turned out to be badly incomplete, because it left out something happening underground that no one had thought to look for.

Beneath the floor of most forests lies a dense web of fungal threads, each one far thinner than a plant root, spreading through the soil in quantities almost too large to imagine. These fungi are not decomposers feeding on dead wood; they are alive and in partnership with the trees. A fungal thread wraps around or grows into a tree's fine roots, and the two organisms trade. The tree, which can make sugar from sunlight, feeds sugar to the fungus. The fungus, whose threads reach far more soil than roots can, gathers water and scarce minerals and passes them back to the tree. Neither could thrive as well alone.

What surprised researchers was that a single fungal network does not serve a single tree. Its threads connect many trees at once — sometimes trees of different species — into one linked system. And through that system, materials move. Using sugars tagged with a traceable form of carbon, researchers were able to follow the flow, and they found that carbon captured by one tree could turn up, days later, in the tissues of another tree entirely, with the fungal network as the only possible path between them.

The direction of the flow was not random. In one carefully designed experiment, researchers grew pairs of trees connected by a shared fungal network and then shaded one tree of each pair, cutting off much of its ability to make sugar. The shaded, sugar-starved trees received a net transfer of carbon from their unshaded partners. When the shading was removed and the once-shaded tree could again make its own sugar, the net flow slowed and, in some pairs, reversed. The network, in other words, tended to move resources from trees that had a surplus toward trees that were in need — though whether the trees "intend" this, or whether it is simply the fungus pursuing its own advantage, remains an open and much-debated question.

It is tempting to read a moral into all this, to describe the forest as cooperative or even generous, and some popular accounts have done exactly that. A note of caution is in order. The fungus is not a charity. It takes a large share of the sugar that passes through it, and there is evidence that some fungi favor the trees that feed them best, behaving less like a neutral pipeline than like a broker taking a cut. What the discoveries overturn is not the fact of competition but the assumption that competition is the whole story. A forest, it now appears, is at once a marketplace, a battlefield, and a network of mutual dependence, and the same tree may be a rival to its neighbor above ground and a trading partner below it.

The old picture of the solitary, competing tree was not so much false as lonely. It described a forest with the connections left out. Restore the connections, and the forest that comes into focus is stranger, busier, and far more interesting than the one biologists thought they were studying — a place where, quite literally, no tree stands alone.`,
    questions: [
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "central_ideas",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 28,
        prompt: "The passage is primarily concerned with:",
        choices: [
          { label: "A", text: "proving that trees do not compete with one another at all." },
          { label: "B", text: "showing that underground fungal networks connect trees and move resources among them, complicating the view of the forest as pure competition." },
          { label: "C", text: "explaining how fungi decompose dead wood on the forest floor." },
          { label: "D", text: "arguing that forests are entirely cooperative and generous places." },
        ],
        correctAnswer: "B",
        explanation: "central_ideas: The passage documents the fungal network trading resources among connected trees and concludes competition 'is [not] the whole story.' A overstates it (the text affirms 'trees do compete'); C is explicitly denied ('these fungi are not decomposers'); D is the romantic reading the author cautions against.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 29,
        prompt: "According to the passage, in the partnership between a tree and the fungus, the tree provides the fungus with:",
        choices: [
          { label: "A", text: "water drawn from deep in the soil." },
          { label: "B", text: "scarce minerals gathered by its roots." },
          { label: "C", text: "sugar made from sunlight." },
          { label: "D", text: "protection from decomposition." },
        ],
        correctAnswer: "C",
        explanation: "close_reading: The second paragraph states 'the tree, which can make sugar from sunlight, feeds sugar to the fungus,' while the fungus supplies water and minerals. A and B reverse the roles (those come from the fungus); D is not part of the described exchange.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "sequence_relationships",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 30,
        prompt: "In the shading experiment, what happened to the net flow of carbon when the shading was removed from a previously shaded tree?",
        choices: [
          { label: "A", text: "It sped up sharply toward the once-shaded tree." },
          { label: "B", text: "It slowed and, in some pairs, reversed direction." },
          { label: "C", text: "It stopped entirely and never resumed." },
          { label: "D", text: "It remained exactly the same as during shading." },
        ],
        correctAnswer: "B",
        explanation: "sequence_relationships: The fourth paragraph reports that once 'the once-shaded tree could again make its own sugar, the net flow slowed and, in some pairs, reversed.' A contradicts 'slowed'; C overstates it (the flow changed, not stopped forever); D denies the described change.",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "sequence_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 31,
        prompt: "The passage indicates that carbon captured by one tree could be found in another tree, and it identifies the fungal network as:",
        choices: [
          { label: "A", text: "one of several routes the carbon might have taken." },
          { label: "B", text: "the only possible path between the two trees." },
          { label: "C", text: "a route the carbon rarely used." },
          { label: "D", text: "a path that carried carbon only within a single species." },
        ],
        correctAnswer: "B",
        explanation: "sequence_relationships: The third paragraph states the carbon appeared in another tree 'with the fungal network as the only possible path between them.' A and C weaken 'only possible'; D contradicts the note that the network links trees 'of different species.'",
      },
      {
        subject: "READING",
        reportingCategory: "integration_of_knowledge_and_ideas",
        subSkill: "arguments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 32,
        prompt: "The author supports the caution against calling the forest \"generous\" chiefly by pointing out that:",
        choices: [
          { label: "A", text: "trees never actually share resources with one another." },
          { label: "B", text: "the fungus takes a large share of the sugar and may favor the trees that feed it best." },
          { label: "C", text: "carbon cannot really move between trees through fungi." },
          { label: "D", text: "popular accounts of the forest are always more accurate than scientific ones." },
        ],
        correctAnswer: "B",
        explanation: "arguments: The fifth paragraph warns 'the fungus is not a charity,' noting it 'takes a large share of the sugar' and that some fungi 'favor the trees that feed them best... like a broker taking a cut.' A and C contradict the passage's core findings; D inverts the author's skepticism toward romantic popular accounts.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "word_meaning",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 33,
        prompt: "As it is used in the fifth paragraph, describing some fungi as acting \"like a broker taking a cut\" most nearly means that the fungi:",
        choices: [
          { label: "A", text: "distribute resources equally and without any self-interest." },
          { label: "B", text: "keep a portion of the resources they pass along in exchange for their role." },
          { label: "C", text: "steal all the sugar and give nothing back to the trees." },
          { label: "D", text: "cut the roots of the trees they connect." },
        ],
        correctAnswer: "B",
        explanation: "word_meaning: The phrase follows the statement that the fungus 'takes a large share of the sugar,' making it a middleman that retains part of what it transfers. A contradicts 'not a charity' and 'a cut'; C overstates it (the fungus still passes resources on); D reads 'cut' literally, ignoring the brokerage metaphor.",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "text_structure",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 34,
        prompt: "The passage's opening description of the forest as \"a slow-motion competition\" of \"solitary\" trees functions primarily to:",
        choices: [
          { label: "A", text: "state the author's own final conclusion about forests." },
          { label: "B", text: "present the older, incomplete view that the rest of the passage complicates." },
          { label: "C", text: "describe an experiment the researchers later performed." },
          { label: "D", text: "prove that trees do not interact with fungi." },
        ],
        correctAnswer: "B",
        explanation: "text_structure: The author calls this picture 'badly incomplete' because it 'left out something happening underground,' then spends the passage adding the missing connections. A reverses the structure (this is the view being revised, not the conclusion); it is a framing, not an experiment (C); and it is not evidence about fungi (D).",
      },
      {
        subject: "READING",
        reportingCategory: "craft_and_structure",
        subSkill: "purpose_point_of_view",
        difficulty: 5,
        estimatedTimeSec: 75,
        diagnosticForm: 1,
        formOrder: 35,
        prompt: "The author most likely writes that the old picture of the solitary tree \"was not so much false as lonely\" in order to convey that the old view was:",
        choices: [
          { label: "A", text: "completely mistaken and should be discarded entirely." },
          { label: "B", text: "accurate in what it included but missing the crucial connections among trees." },
          { label: "C", text: "invented purely to make forests seem sad." },
          { label: "D", text: "more interesting than the new understanding of the forest." },
        ],
        correctAnswer: "B",
        explanation: "purpose_point_of_view: The author immediately explains 'it described a forest with the connections left out' — the view was true as far as it went but incomplete, hence 'lonely' rather than 'false.' A ignores 'not so much false'; C misreads the figurative 'lonely' as an intent; D reverses the author's claim that the connected forest is 'far more interesting.'",
      },
      {
        subject: "READING",
        reportingCategory: "key_ideas_and_details",
        subSkill: "close_reading",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 36,
        prompt: "According to the passage, researchers were able to trace the movement of carbon between trees by:",
        choices: [
          { label: "A", text: "cutting open the fungal threads and inspecting them under a microscope." },
          { label: "B", text: "using sugars tagged with a traceable form of carbon and following where it appeared." },
          { label: "C", text: "measuring the height of each tree over several years." },
          { label: "D", text: "counting the number of fungal threads in the soil." },
        ],
        correctAnswer: "B",
        explanation: "close_reading: The third paragraph states that 'using sugars tagged with a traceable form of carbon, researchers were able to follow the flow' and found the carbon later in another tree's tissues. A, C, and D describe methods the passage never mentions for tracking the carbon.",
      },
    ],
  },
];
