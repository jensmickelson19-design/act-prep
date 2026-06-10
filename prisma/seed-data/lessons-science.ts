// ===========================================================================
// lessons-science.ts — Science lessons seed data
// Subject: SCIENCE | Lessons: 9 (one per sub-skill)
// All content is 100% original — no imitation of real ACT items or published
// prep materials.
// ===========================================================================

import type { SeedLesson } from "./types";

export const scienceLessons: SeedLesson[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. read_data
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "read_data",
    title: "Reading Data from Tables and Graphs",
    summary:
      "Reading data questions ask you to locate specific values in a table, bar graph, line graph, or scatter plot, and to identify key features such as the minimum, maximum, or a value at a particular condition. Accuracy and careful reading of labels are the most important skills here.",
    body: `## What This Skill Is

The ACT Science section is built around reading and interpreting scientific data. Before you can analyze or compare data, you must be able to **read it accurately**. This means finding a specific value in a table, reading a point off a graph, identifying the highest or lowest value in a data set, and understanding what you're looking at — what each column, row, axis, or data series represents.

## Key Rules

1. **Read titles, labels, and units before reading data.** Every table and graph has a title (what is being measured), row/column headers (the conditions and variables), and units (what system of measurement). Failing to check units is one of the most common errors in science data reading.

2. **Tables.** Find the row for the condition you need, then slide across to the correct column for the variable being asked about. It sounds simple — but be careful when tables have many rows/columns, or when conditions span multiple rows.

3. **Line graphs.** Find the value on the $x$-axis named in the question, trace straight up to the line, then trace horizontally to the $y$-axis to read the value. If the point falls between gridlines, estimate carefully.

4. **Bar graphs.** Read the height of the bar to the labeled scale on the $y$-axis. Don't confuse adjacent bars.

5. **Scatter plots.** Each dot represents one data point with an $x$-value and a $y$-value. To find a specific point, locate it by its $x$-coordinate and read its $y$-value.

6. **Identifying maximums, minimums, and trends.** For "which condition produced the highest/lowest value," compare all relevant values and pick the extreme. For "what is the trend," look at the overall direction of the data.

## Common Traps

**Misreading scale.** If the $y$-axis goes from 0 to 100 in increments of 20, each small gridline might represent 4 or 5 units. Check increment size before reading values.

**Reading the wrong row or column.** In a multi-variable table, confirm you're reading the row for the right trial, experiment, or condition.

## Quick Tip

Treat every data question as a lookup task: identify exactly what you're looking for (the variable), exactly where to look (the condition or column), and read carefully. Don't rush through data reading — one misread value costs you a point.`,
    examples: [
      {
        prompt:
          'The table below shows the boiling point (in °C) of four liquids at three different pressures (in kPa).\n\n| Liquid | 50 kPa | 101.3 kPa | 200 kPa |\n|--------|--------|-----------|---------|\n| Ethanol | 52 | 78 | 103 |\n| Water | 81 | 100 | 120 |\n| Acetone | 30 | 56 | 78 |\n| Glycerol | 189 | 290 | 353 |\n\nAt 101.3 kPa, which liquid has the lowest boiling point?',
        steps: [
          "Locate the column for 101.3 kPa — this is the standard atmospheric pressure column.",
          "Read the boiling points for each liquid in that column: Ethanol 78°C, Water 100°C, Acetone 56°C, Glycerol 290°C.",
          "Identify the lowest value: 56°C, which corresponds to Acetone.",
        ],
        answer:
          "At 101.3 kPa, Acetone has the lowest boiling point at 56°C.",
      },
    ],
    orderIndex: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. data_relationships
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "data_relationships",
    title: "How Variables Change Together",
    summary:
      "Data relationship questions ask you to describe how two or more variables change in relation to each other — whether they increase together, move in opposite directions, or show no consistent pattern. You may also need to compare data across multiple experiments or data displays.",
    body: `## What This Skill Is

Once you can read data accurately, the next step is understanding **how variables relate to each other**. Does the dependent variable increase as the independent variable increases? Decrease? Stay flat? Do two experiments produce similar or different trends? These questions test your ability to describe and compare patterns in data.

## Key Rules

1. **Direct (positive) relationship.** As variable A increases, variable B also increases. A line graph with a positive slope shows a direct relationship.

2. **Inverse (negative) relationship.** As variable A increases, variable B decreases. A line graph with a negative slope shows an inverse relationship.

3. **No relationship.** The dependent variable shows no consistent change as the independent variable changes — the data is scattered or flat.

4. **Nonlinear relationships.** Some variables are related but not in a straight line — they might show exponential growth, a curve, or a plateau. Describe what the graph actually shows rather than assuming linearity.

5. **Comparing across experiments or data sets.** When two experiments test the same variable under different conditions, ask: Is the trend the same in both? Is one trend steeper? Do the two data sets agree or contradict each other?

6. **Combining data.** Some questions ask you to identify a pattern across two different displays (one table, one graph). Look for the variable they share and use it as a link.

## Common Traps

**Assuming linearity.** A graph might show a curve or plateau rather than a straight line. Don't describe a curved relationship as a straight one.

**Confusing correlation with causation.** Two variables moving together in a data set does not prove that one causes the other. Stick to describing the observed pattern; the ACT doesn't ask you to claim causation from correlation alone.

## Quick Tip

For each graph or table showing a relationship, ask yourself three questions: (1) As X goes up, does Y go up, go down, or stay the same? (2) Is the relationship linear or curved? (3) Are there any exceptions or unusual data points? Answering these three questions lets you describe almost any data relationship accurately.`,
    examples: [
      {
        prompt:
          'A researcher measures the growth rate (in mm/day) of a plant species at five different light intensities (in lumens). The data is:\n\n| Light Intensity (lumens) | Growth Rate (mm/day) |\n|--------------------------|----------------------|\n| 100 | 1.2 |\n| 200 | 2.1 |\n| 300 | 3.0 |\n| 400 | 3.8 |\n| 500 | 4.5 |\n\nDescribe the relationship between light intensity and growth rate.',
        steps: [
          "As light intensity increases from 100 to 500 lumens, the growth rate increases from 1.2 to 4.5 mm/day.",
          "Check whether the increases are approximately constant: +0.9, +0.9, +0.8, +0.7 mm/day per 100-lumen increase — the increases are very close in magnitude.",
          "The relationship appears approximately linear and direct (positive): as light intensity increases, growth rate increases at a roughly consistent rate.",
          "There are no decreases or plateaus within the data range shown.",
        ],
        answer:
          "There is a direct (positive) and approximately linear relationship between light intensity and plant growth rate. As light intensity increases, growth rate increases at a roughly constant rate of about 0.8–0.9 mm/day per 100 lumens.",
      },
    ],
    orderIndex: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. data_translation
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "data_translation",
    title: "Translating Between Data Formats",
    summary:
      "Data translation questions ask you to take information from one format — a table, a graph, or a written description — and use it in a different format, or to interpolate and extrapolate values that aren't directly shown. The skill is converting data without losing its meaning.",
    body: `## What This Skill Is

Scientific data can be presented in many formats: tables, line graphs, bar graphs, scatter plots, diagrams, or plain text. **Data translation** is the ability to move between these formats — reading a table and sketching the corresponding graph, using graph data to answer a question phrased as a table lookup, or estimating values between (interpolation) or beyond (extrapolation) the data points you're given.

## Key Rules

1. **Interpolation.** Estimating a value *between* two known data points. If a line graph shows values at $x = 2$ and $x = 4$, you can estimate the value at $x = 3$ by reading between those points. For a linear relationship, the estimated value is simply the midpoint.

2. **Extrapolation.** Estimating a value *beyond* the data range. If the trend is consistent, you can extend it cautiously. But note that extrapolation assumes the trend continues — the ACT may ask whether a given extrapolation is justified by the data.

3. **Table to graph translation.** Check that the graph correctly reflects the values in the table: correct axis labels, correct scales, correct ordering of data points, and no missing entries.

4. **Graph to table translation.** Read each data point from the graph (at each labeled $x$-value) and record the corresponding $y$-value. Estimate carefully when points fall between gridlines.

5. **Text to data.** A passage might describe an experiment's results in words ("the temperature increased by 5°C every 10 minutes for the first hour"). You can construct a table or graph from this description to answer questions about specific values.

## Common Traps

**Extrapolating beyond justified limits.** A graph that shows a linear increase over a limited range might plateau or reverse beyond that range. Don't confidently extrapolate far beyond the data unless the question asks you to assume the trend continues.

**Scale errors in translation.** When reading a graph for table values, always check the scale. A value that looks like "30" on a scale where each gridline represents 10 units might actually be 25 or 35 if you don't read carefully.

## Quick Tip

For interpolation on a line graph, use the two nearest data points and estimate where the curve or line would be at the requested value. For extrapolation, extend the existing trend by the same amount per interval. When in doubt, state your assumption ("assuming the linear trend continues...").`,
    examples: [
      {
        prompt:
          'A line graph shows the temperature of a liquid sample (in °C) over time as it is heated. The graph shows data points at: 0 min → 20°C, 2 min → 30°C, 4 min → 40°C, 6 min → 50°C, 8 min → 60°C. The relationship is linear.\n\n(a) What would be the estimated temperature at 3 minutes?\n(b) If the trend continues, what would be the estimated temperature at 10 minutes?',
        steps: [
          "Identify the rate of change: the temperature increases by 10°C every 2 minutes, or 5°C per minute.",
          "(a) Interpolation at 3 minutes: Start from the 2-minute value (30°C) and add 1 minute × 5°C/min = 5°C. Estimated temperature at 3 min = 30 + 5 = 35°C.",
          "(b) Extrapolation at 10 minutes: Extend the linear trend. At 8 min the temperature is 60°C. Add 2 more minutes × 5°C/min = 10°C. Estimated temperature at 10 min = 60 + 10 = 70°C.",
          "Both estimates assume the linear trend holds — which is valid within the observed range and reasonable for a short extrapolation.",
        ],
        answer:
          "(a) The estimated temperature at 3 minutes is 35°C. (b) If the trend continues, the estimated temperature at 10 minutes is 70°C.",
      },
    ],
    orderIndex: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. experimental_design
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "experimental_design",
    title: "Understanding Experimental Design",
    summary:
      "Experimental design questions ask you to identify the independent variable, dependent variable, and controls in an experiment, explain why certain procedures are used, and evaluate whether an experiment is set up to test what it claims to test.",
    body: `## What This Skill Is

**Experimental design** is the framework of a scientific investigation. A well-designed experiment changes one variable at a time, measures the effect on another, and controls all other factors. Understanding these components lets you describe what an experiment tests and evaluate whether it was set up correctly.

## Key Rules

1. **Independent variable (IV).** The variable the experimenter deliberately changes or manipulates. In an experiment testing whether temperature affects enzyme activity, temperature is the IV.

2. **Dependent variable (DV).** The variable that is measured as an outcome — it "depends on" the IV. Enzyme activity (measured, for example, as reaction rate) is the DV.

3. **Control variables (constants).** Everything else that is kept the same across all trials. If temperature is the IV and pH is not controlled, you can't know whether changes in enzyme activity were caused by temperature or pH.

4. **Control group.** The group that receives no treatment (or the standard condition). It provides a baseline for comparison. Without a control group, you can't know whether the IV caused the observed effect.

5. **Replication.** Running multiple trials at each condition reduces the effect of random variation and makes results more reliable.

6. **Why specific procedures are used.** When a passage describes a procedural step (e.g., "all samples were kept in the dark during testing"), the ACT may ask why. Usually it's to control a potential confounding variable — in this case, to eliminate light as a factor.

## Common Traps

**Confusing IV and DV.** The IV is what you change intentionally; the DV is what you observe in response. Ask: "What did the researcher set up differently? What did they measure?"

**Assuming a control group is always "no treatment."** In some experiments, the control is the existing standard (e.g., the standard drug dose), not a placebo. The key is that the control provides a reference point for comparison.

## Quick Tip

When reading an experiment description, immediately identify: (1) What did the researcher change? (IV) (2) What did the researcher measure? (DV) (3) What was kept constant? (Controls) Answering these three questions first makes every subsequent question about the experiment much easier.`,
    examples: [
      {
        prompt:
          'A researcher wants to test whether the concentration of a fertilizer solution affects the root length of bean seedlings. She grows 30 seedlings divided into three groups of 10. Group 1 receives pure water, Group 2 receives a 5% fertilizer solution, and Group 3 receives a 10% fertilizer solution. All seedlings are grown under the same light source for the same number of hours each day, at the same temperature, and in identical amounts of identical potting mix. After 14 days, she measures the root length of each seedling.\n\nIdentify the independent variable, dependent variable, and two control variables in this experiment.',
        steps: [
          "Independent variable: the variable the researcher deliberately changes. She changes the concentration of the fertilizer solution across the three groups (0%, 5%, 10%). IV = fertilizer concentration.",
          "Dependent variable: the outcome being measured. IV = root length (measured after 14 days).",
          "Control variables: everything kept constant so the IV is the only difference. The passage lists: same light source, same hours of light per day, same temperature, identical amount of identical potting mix.",
          "Two control variables from the list: light conditions (same source, same hours) and temperature.",
        ],
        answer:
          "Independent variable: fertilizer concentration (0%, 5%, 10%). Dependent variable: root length of the seedlings. Two control variables: light conditions (same source and duration) and temperature. The control group is Group 1 (pure water), which provides a baseline for comparison.",
      },
    ],
    orderIndex: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. compare_experiments
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "compare_experiments",
    title: "Comparing Experiments and Predicting Results",
    summary:
      "Compare-experiments questions ask you to find similarities and differences between two or more experiments, determine which variables differ between them, and predict what results a new set of conditions would produce based on existing data.",
    body: `## What This Skill Is

Many ACT Science passages describe two or more related experiments. **Comparing experiments** means identifying how the studies differ in their design, conditions, or variables, and using that understanding to answer questions — including predicting what would happen under a condition not directly tested.

## Key Rules

1. **Identify what is the same and what differs between experiments.** Two experiments might use the same organism but vary the temperature. Or the same temperature but vary the organism. The difference defines what each experiment actually tests.

2. **Why experiments differ.** Researchers often design multiple experiments to isolate different variables or to test the same variable across different contexts. Understanding the rationale for each experimental design helps you interpret the results.

3. **Predicting results for a new condition.** Using observed trends, you can predict what would happen under an untested condition:
   - Identify the trend from the existing experiments.
   - Apply that trend to the new condition.
   - State the prediction with appropriate qualification ("based on the trend shown...").

4. **New trial questions.** A question might say "In Experiment 3, the researchers used a 15°C temperature instead of 10°C or 20°C. Based on the data, what result would they most likely observe?" Use the trend between 10°C and 20°C to predict the result at 15°C (interpolation).

5. **Contradictory results.** Sometimes two experiments produce opposite trends. The question then asks you to identify the experimental variable that accounts for the difference — usually the one condition that changed between the two experiments.

## Common Traps

**Generalizing from one experiment to all conditions.** A trend found in Experiment 1 may not hold for Experiment 2 if the conditions are meaningfully different. Check whether the experiments are testing the same variable.

**Predicting an untested extreme.** If the data shows a trend from 10°C to 30°C, predicting at 100°C requires much larger extrapolation and may not be valid. Stay within reasonable bounds.

## Quick Tip

Before answering comparison questions, quickly make a two-column list: "What is the same?" and "What is different?" between the experiments. This mental inventory makes comparison questions much more manageable.`,
    examples: [
      {
        prompt:
          'Experiment 1 measured the rate of photosynthesis in spinach leaves at temperatures of 10°C, 20°C, 30°C, and 40°C under constant light. Results showed increasing rates from 10°C to 30°C, then a sharp decrease at 40°C.\n\nExperiment 2 repeated the same procedure but in low-light conditions. Results showed the same pattern — increasing from 10°C to 30°C, then decreasing at 40°C — but all rates were lower than in Experiment 1.\n\nBased on the data from both experiments, what would you predict for the rate of photosynthesis in spinach leaves at 25°C under constant light?',
        steps: [
          "Identify the trend from Experiment 1: photosynthesis rate increases from 10°C to 30°C. At 25°C (between 20°C and 30°C), the rate should be between the 20°C and 30°C values.",
          "This is an interpolation prediction within Experiment 1's temperature range, under constant light conditions.",
          "Since the trend is consistently increasing from 10°C to 30°C in Experiment 1, the rate at 25°C would be higher than at 20°C but lower than at 30°C.",
          "Experiment 2 (low light) shows the same trend at lower absolute values — since the question specifies 'constant light,' we use Experiment 1's data.",
        ],
        answer:
          "Based on Experiment 1, the photosynthesis rate at 25°C under constant light would be higher than at 20°C but lower than at 30°C — falling between those two measured values. The increasing trend from 10°C to 30°C supports this prediction.",
      },
    ],
    orderIndex: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. hypothesis_testing
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "hypothesis_testing",
    title: "Hypotheses, Accuracy, and Precision",
    summary:
      "Hypothesis testing questions ask you to evaluate whether experimental results support or refute a stated hypothesis, assess whether a method could improve the experiment, and understand the distinction between accuracy (closeness to the true value) and precision (consistency of repeated measurements).",
    body: `## What This Skill Is

A **hypothesis** is a testable prediction about the relationship between variables. **Hypothesis testing** involves designing an experiment to test the prediction, collecting data, and then evaluating whether the results support or refute the hypothesis. Understanding **accuracy** and **precision** helps you assess the quality of the measurements.

## Key Rules

1. **Supporting vs. refuting a hypothesis.** A hypothesis is supported when the data match the predicted pattern. It is refuted when the data contradict the prediction. Note: data "support" a hypothesis — they don't "prove" it. Even supporting data only show the hypothesis is consistent with the evidence.

2. **Partial support.** Sometimes data support a hypothesis under some conditions but not others. Recognize this nuance — the ACT may ask you to identify the conditions under which the hypothesis holds.

3. **Alternative hypotheses.** The ACT may present a hypothesis and ask which experimental result would support an alternative explanation. Think about what pattern of data would point to a different cause.

4. **Accuracy.** How close a measurement is to the true or accepted value. A thermometer that consistently reads 2°C too high has low accuracy.

5. **Precision.** How consistent repeated measurements are with each other. A scale that gives the same reading five times has high precision, even if that reading is wrong. High precision + low accuracy = systematic error.

6. **Improving accuracy and precision.** Accuracy is improved by calibrating instruments or using better measurement tools. Precision is improved by repeating measurements, using automated equipment, or reducing random variation.

## Common Traps

**Confusing accuracy and precision.** These are different concepts. A dartboard analogy: arrows clustered tightly together but far from the bullseye = high precision, low accuracy. Arrows scattered around the bullseye = high accuracy, low precision.

**Overclaiming from one experiment.** One experiment that yields supporting data does not "prove" a hypothesis — it supports it. Similarly, one unexpected result may be due to experimental error rather than a refutation of the hypothesis.

## Quick Tip

For hypothesis-support questions: find the hypothesis, find the relevant data, and ask whether the data show the predicted pattern. For accuracy/precision questions: accuracy = "am I close to the true value?" and precision = "do I get the same answer every time?"`,
    examples: [
      {
        prompt:
          'A student hypothesizes that increasing the salt concentration of water will increase its boiling point. She measures the boiling points of solutions with 0%, 1%, 2%, 3%, and 4% salt (by mass) and records: 100°C, 100.6°C, 101.0°C, 101.7°C, 102.1°C.\n\n(a) Do the results support or refute the hypothesis? Explain.\n(b) The student measures the 2% solution three times and gets 100.9°C, 101.2°C, and 100.8°C. Are these measurements precise? Are they accurate (the true value is 101.0°C)?',
        steps: [
          "(a) Evaluate the hypothesis: the prediction is that boiling point increases as salt concentration increases. The data show: 0%→100°C, 1%→100.6°C, 2%→101.0°C, 3%→101.7°C, 4%→102.1°C. Boiling point consistently increases with salt concentration.",
          "The data support the hypothesis — every increase in salt concentration corresponds to an increase in boiling point.",
          "(b) Assess precision: the three measurements for the 2% solution are 100.9°C, 101.2°C, and 100.8°C. The range is 101.2 − 100.8 = 0.4°C. The measurements are moderately close together — reasonably precise but not extremely precise.",
          "Assess accuracy: the true value is 101.0°C. The average of the three measurements = (100.9 + 101.2 + 100.8) / 3 = 100.97°C ≈ 101.0°C. The average is very close to the true value — the measurements are accurate on average.",
        ],
        answer:
          "(a) The results support the hypothesis. Boiling point consistently increases with salt concentration across all tested values. (b) The measurements are reasonably accurate (their average closely matches the true value of 101.0°C) but show moderate variability — they are acceptably precise, though not perfectly consistent.",
      },
    ],
    orderIndex: 6,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. model_comprehension
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "model_comprehension",
    title: "Reading and Understanding Scientific Models",
    summary:
      "Model comprehension questions ask you to locate information within a scientific model — such as a diagram, flowchart, or conceptual figure — and identify what the model shows, what its components represent, and what it implies about a scientific concept.",
    body: `## What This Skill Is

A **scientific model** is a simplified representation of a real system or process. Models can be diagrams of molecular structure, flowcharts of energy cycles, labeled cross-sections of biological systems, or conceptual figures showing relationships between factors. **Model comprehension** means reading the model accurately: understanding what each component represents and what the model as a whole is saying.

## Key Rules

1. **Read the legend and labels.** Every component in a model should be labeled. Before answering questions, read every label, arrow, color key, and caption. These tell you what each part represents.

2. **Follow the arrows.** In flowcharts and process diagrams, arrows indicate direction of flow, energy transfer, or sequence. Following the arrows tells you the path through the system.

3. **Identify what the model represents.** Is it showing a chemical reaction? A food web? An electromagnetic spectrum? A cell membrane? Understanding the overall context prevents misreading individual components.

4. **What does the model show vs. what does it leave out?** No model shows everything. A simplified diagram of the water cycle might omit groundwater flow. Knowing the model's limitations is important for evaluation questions (the next sub-skill), but for comprehension questions, focus on what is shown.

5. **Implications within the model.** A comprehension question might ask what a model implies: "Based on the model, what would happen to Component A if Component B increased?" This requires understanding the relationships shown in the model, not just the labels.

## Common Traps

**Bringing in outside knowledge.** A model comprehension question is about what this model shows. If the model shows something that contradicts your prior knowledge (perhaps because it's simplified or fictional), answer based on the model, not on what you know.

**Misreading arrows.** An arrow pointing from A to B might mean "A becomes B," "A produces B," "A affects B," or "A is followed by B." The context and label of the arrow determine its meaning.

## Quick Tip

When you encounter a model in an ACT Science passage, spend 20–30 seconds reading every label and following the main arrows before answering any questions. A thorough initial read of the model saves time and prevents errors on every question related to it.`,
    examples: [
      {
        prompt:
          'A model of a simplified ecosystem shows the following components connected by arrows labeled "energy flow": \nSun → Grass → Grasshopper → Frog → Snake → Hawk\n\nA dashed arrow labeled "decomposition" points from each organism back to "Soil Nutrients," and an arrow labeled "uptake" points from "Soil Nutrients" back to "Grass."\n\nBased on the model, what happens to the energy in a grasshopper that dies without being eaten by a frog?',
        steps: [
          "Locate the grasshopper in the model: it receives energy from grass and transfers energy to the frog.",
          "What happens when the grasshopper dies without being eaten? Look for other pathways from organisms in the model — the dashed 'decomposition' arrow.",
          "The dashed arrow shows that when an organism dies, its energy/matter goes to 'Soil Nutrients' via decomposition.",
          "From Soil Nutrients, the 'uptake' arrow returns nutrients to Grass.",
          "Therefore, a dead grasshopper not eaten by a frog would contribute to Soil Nutrients via decomposition, which can then be taken up by Grass.",
        ],
        answer:
          "Based on the model, a grasshopper that dies without being eaten would decompose and its nutrients would enter the Soil Nutrients pool, which can then be taken up by Grass — cycling the matter back through the ecosystem.",
      },
    ],
    orderIndex: 7,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. model_evaluation
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "model_evaluation",
    title: "Evaluating the Strengths and Weaknesses of Models",
    summary:
      "Model evaluation questions ask you to assess a scientific model — identifying what it explains well, what it cannot explain, whether new information supports or contradicts it, and how it compares to an alternative model. Critical thinking about models is a higher-level science skill.",
    body: `## What This Skill Is

All scientific models are simplifications — they capture some aspects of reality accurately while leaving others out or oversimplifying them. **Model evaluation** is the skill of critically assessing a model: understanding its explanatory strengths, recognizing its limitations, and determining whether new evidence supports, weakens, or requires revision of the model.

## Key Rules

1. **What does the model explain well?** A model is strong where its predictions match observed data. If every observation fits the model's predictions, the model has explanatory power for that phenomenon.

2. **What can the model not explain?** Identify observations, edge cases, or phenomena that the model cannot account for. These are its limitations. A model of wave behavior in water that works at small amplitudes might break down at large amplitudes.

3. **New information: support or contradict?** If a question presents a new observation, ask: Is this what the model predicts? If yes, the new information supports the model. If no, it contradicts or weakens the model.

4. **Comparing two models.** When two models are presented (as in a Conflicting Viewpoints passage), evaluate each against the evidence: Which model explains more of the observed data? Which makes predictions that have been confirmed? Which leaves fewer unexplained anomalies?

5. **A model being "incorrect" doesn't mean useless.** The Bohr model of the atom is incorrect in important ways, but it still accurately predicts many spectral lines of hydrogen. Evaluate models based on their usefulness and accuracy for specific phenomena, not just whether they're perfectly correct.

## Common Traps

**All-or-nothing thinking.** A model that explains 80% of the data is not necessarily "wrong" — it may be a useful approximation. Conversely, a model that works for most cases might fail importantly for a critical case.

**Assuming new data always overturns a model.** One piece of contradictory evidence may represent an exception, an experimental error, or a limitation in the new data collection — not necessarily a fatal flaw in the model.

## Quick Tip

For model evaluation questions, first summarize what the model claims. Then evaluate the question's new information: does it match what the model predicts, contradict it, or fall outside the model's stated scope? Answer precisely based on that comparison.`,
    examples: [
      {
        prompt:
          'Two scientists propose models to explain why certain bird populations migrate earlier in spring:\n\nModel A: Birds use day length (photoperiod) as their primary migration cue. As days lengthen in spring, hormonal changes trigger migration regardless of temperature.\n\nModel B: Birds use temperature as their primary migration cue. They migrate when temperatures rise above a species-specific threshold.\n\nA researcher observes that in an unusually cold spring, two bird species arrived at their breeding grounds on almost exactly the same dates as in previous (warmer) springs.\n\nDoes this observation support Model A, Model B, or neither? Explain.',
        steps: [
          "Model A predicts: migration timing is controlled by day length, not temperature. Therefore, migration dates should be similar regardless of whether the spring is cold or warm.",
          "Model B predicts: migration timing is controlled by temperature. In a colder spring, temperatures rise later, so birds should arrive later than in warmer springs.",
          "The observation: two species arrived at almost exactly the same dates as in previous, warmer springs — despite the cold.",
          "This matches Model A's prediction (consistent timing regardless of temperature) and contradicts Model B's prediction (which would expect later arrival in a cold spring).",
        ],
        answer:
          "The observation supports Model A. If birds rely primarily on photoperiod (day length), their migration timing should be consistent year to year regardless of temperature — which matches the observed consistent arrival dates in both cold and warm springs. This contradicts Model B, which predicts later arrivals in cold springs.",
      },
    ],
    orderIndex: 8,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. predictions_conclusions
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "SCIENCE",
    subSkill: "predictions_conclusions",
    title: "Drawing Conclusions and Making Predictions",
    summary:
      "Predictions and conclusions questions ask you to use data and models to make evidence-based predictions about untested conditions, or to draw a conclusion that is consistent with the data presented. The conclusion must follow logically from the evidence — no more, no less.",
    body: `## What This Skill Is

**Drawing conclusions** means stating what the data show, in terms of the research question, without going beyond the evidence. **Making predictions** means using observed patterns to anticipate what would happen under new or untested conditions. Both skills require staying grounded in what the data actually support.

## Key Rules

1. **A conclusion must follow from the data.** Do not claim more certainty than the data warrant. If one experiment shows that compound X inhibits bacterial growth at a certain concentration, you cannot conclude that it will work at all concentrations or against all bacteria.

2. **Identify the scope of the data.** The conclusion should match the scope: if the data covers temperatures from 10°C to 40°C, conclusions about 5°C or 50°C require extrapolation (which should be labeled as such).

3. **Distinguish correlation from causation.** Data can show that two things co-occur without proving that one causes the other. A conclusion stating correlation is valid; a conclusion claiming causation requires a controlled experiment, not just observational data.

4. **Consistent vs. contradictory conclusions.** The ACT often presents four possible conclusions and asks which one is consistent with the data. Eliminate any conclusion that describes a pattern the data doesn't show. Eliminate conclusions that are too strong (claiming certainty the data doesn't establish).

5. **Predictions based on models.** Use the model's rules to project what would happen in a new scenario. State the prediction in terms of the model's logic, and acknowledge if the prediction requires extrapolation.

6. **"Best supported" conclusions.** When multiple choices seem consistent with the data, the "best supported" one is the most specific and directly grounded in what the data show — not a vague generalization.

## Common Traps

**Overgeneralizing.** "This compound prevents all bacterial infections" vs. "this compound inhibited growth of the tested strain at the concentrations tested." The second is what the data support.

**Choosing conclusions that sound scientific but aren't in the data.** The ACT sometimes includes plausible-sounding choices that go beyond what the passage shows. Stay tethered to the actual data.

## Quick Tip

For every conclusion or prediction choice, ask: "What would I need to see in the data to make this claim?" Then check whether the passage actually shows that. If the data doesn't support the claim, eliminate the choice — no matter how reasonable it sounds.`,
    examples: [
      {
        prompt:
          'A study measured the concentration of dissolved oxygen (DO, in mg/L) in a river at three locations downstream from a wastewater treatment plant. The results were:\n\n| Distance from plant (km) | DO (mg/L) |\n|--------------------------|------------|\n| 1 | 4.2 |\n| 5 | 6.8 |\n| 10 | 8.5 |\n\nHealthy aquatic ecosystems generally require DO levels above 6 mg/L.\n\nWhich conclusion is best supported by these data?',
        steps: [
          "Read the data: dissolved oxygen increases with distance from the wastewater plant (4.2 → 6.8 → 8.5 mg/L).",
          "Apply the threshold: DO > 6 mg/L is needed for healthy aquatic ecosystems. At 1 km: 4.2 (below threshold). At 5 km: 6.8 (above threshold). At 10 km: 8.5 (above threshold).",
          "Evaluate candidate conclusions:",
          "Conclusion A: 'The wastewater plant has no impact on river oxygen levels.' — Contradicted by the low DO at 1 km. Eliminate.",
          "Conclusion B: 'The river is incapable of supporting aquatic life.' — Too strong; at 5 km and 10 km, DO is above the threshold. Eliminate.",
          "Conclusion C: 'DO levels increase with distance from the plant, and locations beyond approximately 5 km appear to meet the threshold for healthy aquatic conditions.' — This is directly supported by the data. ✓",
          "Conclusion D: 'The river's DO will continue to increase indefinitely as distance increases.' — This requires extrapolation beyond the data range and assumes a trend that may not continue. Eliminate.",
        ],
        answer:
          "Conclusion C is best supported: DO levels increase with distance from the plant, and at 5 km and beyond, levels exceed the 6 mg/L threshold associated with healthy aquatic conditions. The data cannot support stronger claims about locations beyond 10 km or about all aquatic life in the river.",
      },
    ],
    orderIndex: 9,
  },
];
