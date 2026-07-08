import type { SeedPassage } from "./types";

// ===========================================================================
// Science seed content — drill-bank passages (formerly Diagnostic Tests 1 and
// 2 — untagged when the fixed practice-test forms moved to form1-*.ts).
// BATCH 1: 7 passages, 40 questions.  BATCH 2: 7 passages, 40 questions.
// Passage order each form: data_representation, research_summary,
// data_representation, research_summary, data_representation, research_summary,
// conflicting_viewpoints.
// All passages, datasets, experiments, viewpoints, questions, and explanations
// are 100% original to this app. Tables/graphs/diagrams are described in text.
// The adaptive bank lives in science-extra.ts.
// ===========================================================================

export const sciencePassages: SeedPassage[] = [
  // -------------------------------------------------------------------------
  // D1-P1 — data_representation — formOrder 1-5
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Tidal Pool Salinity and Temperature",
    passageType: "data_representation",
    body: `Along a rocky coastline, water collects in shallow basins called tidal pools when the ocean retreats at low tide. A field team measured conditions in six tidal pools at one site on a single summer day, beginning two hours after the tide began to fall. Salinity is reported in parts per thousand (ppt); open ocean water at this site is 35 ppt. Each pool's elevation is given as its height in centimeters above the lowest pool.

Table 1: Conditions measured 2 hours after the tide began falling.

Pool | Elevation (cm) | Volume (L) | Salinity (ppt) | Water temp (°C)
-----|----------------|------------|----------------|----------------
1    | 0              | 240        | 35.1           | 19.4
2    | 18             | 165        | 35.6           | 20.8
3    | 31             | 130        | 36.4           | 22.1
4    | 52             | 88         | 37.9           | 23.7
5    | 70             | 54         | 39.8           | 25.0
6    | 95             | 21         | 42.6           | 27.2

Figure 1 (described): A line graph plots water temperature (°C, vertical axis) against time since the tide began falling (hours, horizontal axis, 0 to 6) for Pool 1 and Pool 6. Pool 1's line rises gently from 19.4 °C at hour 2 to 21.0 °C at hour 6. Pool 6's line rises steeply from 27.2 °C at hour 2 to 33.5 °C at hour 6. The two lines never cross; Pool 6 is warmer than Pool 1 at every hour shown.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, which pool had the smallest water volume?",
        choices: [
          { label: "A", text: "Pool 1" },
          { label: "B", text: "Pool 3" },
          { label: "C", text: "Pool 5" },
          { label: "D", text: "Pool 6" },
        ],
        correctAnswer: "D",
        explanation:
          "Table 1 lists volumes of 240, 165, 130, 88, 54, and 21 L for Pools 1-6. Pool 6's 21 L is the smallest value in the column.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Figure 1, the water temperature of Pool 6 at hour 6 was closest to:",
        choices: [
          { label: "A", text: "21.0 °C" },
          { label: "B", text: "27.2 °C" },
          { label: "C", text: "33.5 °C" },
          { label: "D", text: "39.8 °C" },
        ],
        correctAnswer: "C",
        explanation:
          "Figure 1 states Pool 6's line rises to 33.5 °C at hour 6. 21.0 °C is Pool 1's hour-6 value, 27.2 °C is Pool 6's hour-2 value, and 39.8 °C is a salinity figure, not a temperature.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Table 1, as pool elevation increases, salinity and water temperature:",
        choices: [
          { label: "A", text: "both increase." },
          { label: "B", text: "both decrease." },
          { label: "C", text: "increase and decrease, respectively." },
          { label: "D", text: "decrease and increase, respectively." },
        ],
        correctAnswer: "A",
        explanation:
          "As elevation rises from 0 to 95 cm, salinity climbs steadily from 35.1 to 42.6 ppt and temperature climbs steadily from 19.4 to 27.2 °C. Both variables increase together.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "A seventh pool at this site has an elevation of 40 cm. Based on Table 1, its salinity is most likely:",
        choices: [
          { label: "A", text: "less than 35.1 ppt" },
          { label: "B", text: "between 36.4 and 37.9 ppt" },
          { label: "C", text: "between 39.8 and 42.6 ppt" },
          { label: "D", text: "greater than 42.6 ppt" },
        ],
        correctAnswer: "B",
        explanation:
          "An elevation of 40 cm falls between Pool 3 (31 cm, 36.4 ppt) and Pool 4 (52 cm, 37.9 ppt). Since salinity rises with elevation, the new pool's salinity should fall between those two values.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A student wants to draw a graph from Table 1 showing how volume relates to salinity. The graph should show that, as volume decreases, salinity:",
        choices: [
          { label: "A", text: "increases, so the plotted points trend downward to the right." },
          { label: "B", text: "increases, so the plotted points trend upward to the left." },
          { label: "C", text: "decreases, so the plotted points trend upward to the right." },
          { label: "D", text: "stays constant, so the plotted points form a horizontal line." },
        ],
        correctAnswer: "B",
        explanation:
          "In Table 1 the largest volume (240 L, Pool 1) has the lowest salinity (35.1 ppt) and the smallest volume (21 L, Pool 6) has the highest salinity (42.6 ppt). With volume on the horizontal axis, salinity rises as volume falls, so points climb toward the upper left.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P2 — research_summary — formOrder 6-11
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Seed Germination and Soil pH",
    passageType: "research_summary",
    body: `Students investigated how soil acidity affects the germination of radish seeds. Soil pH is a measure of acidity: values below 7 are acidic, 7 is neutral, and values above 7 are basic.

Experiment 1
The students filled 25 identical trays with the same potting mix and adjusted each group of five trays to a target pH using small amounts of acid or base. They planted 40 radish seeds in each tray, kept all trays at 22 °C with 12 hours of light per day, and watered every tray with 50 mL of water daily. After 7 days they counted the seeds that had germinated (sprouted) in each tray and recorded the average for each pH group.

Table 1
Soil pH | Avg. seeds germinated (of 40)
--------|------------------------------
4.5     | 9
5.5     | 24
6.5     | 36
7.5     | 31
8.5     | 14

Experiment 2
Using only soil at pH 6.5 (the most favorable pH from Experiment 1), the students repeated the procedure but varied the daily watering amount. All other conditions matched Experiment 1.

Table 2
Daily water (mL) | Avg. seeds germinated (of 40)
-----------------|------------------------------
10               | 12
30               | 29
50               | 36
70               | 33
90               | 19

Experiment 3
Using pH 6.5 soil and 50 mL of daily water, the students varied the temperature at which trays were kept. All other conditions matched Experiment 1.

Table 3
Temperature (°C) | Avg. seeds germinated (of 40)
-----------------|------------------------------
10               | 8
16               | 22
22               | 36
28               | 30
34               | 11`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, at which soil pH did the greatest average number of seeds germinate?",
        choices: [
          { label: "A", text: "4.5" },
          { label: "B", text: "5.5" },
          { label: "C", text: "6.5" },
          { label: "D", text: "8.5" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 1 shows averages of 9, 24, 36, 31, and 14 seeds. The maximum, 36, occurs at pH 6.5.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, which of the following was a variable deliberately changed by the students?",
        choices: [
          { label: "A", text: "Daily watering amount" },
          { label: "B", text: "Soil pH" },
          { label: "C", text: "Temperature of the trays" },
          { label: "D", text: "Number of seeds planted per tray" },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 held watering (50 mL), temperature (22 °C), light, and seed count (40) constant. Only soil pH was deliberately changed across the five tray groups, so it is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Why did the students use pH 6.5 soil in both Experiment 2 and Experiment 3?",
        choices: [
          { label: "A", text: "It was the only pH that could be adjusted with acid or base." },
          { label: "B", text: "It produced the highest germination in Experiment 1, so the effect of the new variable could be studied without low-pH or high-pH interference." },
          { label: "C", text: "It is the neutral pH value, which never affects plants." },
          { label: "D", text: "It required the least water to maintain." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 identified pH 6.5 as the most favorable pH (36 germinated). Holding pH at this best value in Experiments 2 and 3 keeps soil acidity from limiting germination, so any change in results can be attributed to the new variable being tested.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In both Experiment 2 and Experiment 3, as the tested variable increased from its lowest value to its highest value, average germination:",
        choices: [
          { label: "A", text: "increased continuously." },
          { label: "B", text: "decreased continuously." },
          { label: "C", text: "rose to a peak and then declined." },
          { label: "D", text: "stayed roughly constant." },
        ],
        correctAnswer: "C",
        explanation:
          "In Experiment 2 germination goes 12, 29, 36, 33, 19 — up to a peak at 50 mL, then down. In Experiment 3 it goes 8, 22, 36, 30, 11 — up to a peak at 22 °C, then down. Both show a rise-then-fall pattern.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "How did Experiment 3 differ from Experiment 2?",
        choices: [
          { label: "A", text: "Experiment 3 varied temperature, whereas Experiment 2 varied daily watering amount." },
          { label: "B", text: "Experiment 3 varied soil pH, whereas Experiment 2 varied temperature." },
          { label: "C", text: "Experiment 3 used a different seed species than Experiment 2." },
          { label: "D", text: "Experiment 3 planted more seeds per tray than Experiment 2." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 varied the daily watering amount (10-90 mL) while holding temperature at 22 °C. Experiment 3 varied temperature (10-34 °C) while holding watering at 50 mL. The deliberately changed variable is the key difference.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A gardener hypothesizes that radish seeds will germinate best in cool, acidic conditions. Do the results of Experiments 1 and 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; germination was highest at the lowest pH and the lowest temperature tested." },
          { label: "B", text: "Yes; germination increased steadily as both pH and temperature decreased." },
          { label: "C", text: "No; germination was highest near pH 6.5 (slightly acidic) and 22 °C (a moderate, not cool, temperature)." },
          { label: "D", text: "No; germination was completely unaffected by pH and temperature." },
        ],
        correctAnswer: "C",
        explanation:
          "Peak germination occurred at pH 6.5 — only slightly acidic, not the most acidic pH 4.5, which gave just 9 — and at 22 °C, well above the coolest 10 °C, which gave just 8. The data show a moderate optimum, not a cool-and-acidic one, so the hypothesis is not supported.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P3 — data_representation — formOrder 12-17
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Cooling of Heated Metal Blocks",
    passageType: "data_representation",
    body: `An engineering class studied how blocks of three metals lose heat. Each block had the same mass (500 g) and the same shape. Each block was heated to 150 °C and then placed on an insulating stand in a room held at 20 °C. The temperature of each block was recorded every 5 minutes.

Table 1: Block temperature (°C) over time.

Time (min) | Aluminum | Iron | Copper
-----------|----------|------|-------
0          | 150      | 150  | 150
5          | 104      | 122  | 96
10         | 78       | 103  | 70
15         | 61       | 89   | 54
20         | 50       | 78   | 44
25         | 43       | 70   | 38
30         | 38       | 64   | 34

Figure 1 (described): A bar graph shows the "specific heat capacity" of each metal — the amount of heat needed to raise 1 g of the metal by 1 °C, in joules per gram per degree Celsius (J/g·°C). The values are: aluminum 0.90 J/g·°C, iron 0.45 J/g·°C, and copper 0.39 J/g·°C. Aluminum has the tallest bar, iron the middle bar, and copper the shortest bar.

Note: A metal with a higher specific heat capacity stores more heat energy per gram at a given temperature.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the temperature of the iron block at 15 minutes?",
        choices: [
          { label: "A", text: "54 °C" },
          { label: "B", text: "61 °C" },
          { label: "C", text: "89 °C" },
          { label: "D", text: "103 °C" },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the Iron column at the 15-minute row in Table 1 gives 89 °C. 54 °C is copper and 61 °C is aluminum at that time; 103 °C is iron at 10 minutes.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Figure 1, which metal has the highest specific heat capacity?",
        choices: [
          { label: "A", text: "Aluminum" },
          { label: "B", text: "Iron" },
          { label: "C", text: "Copper" },
          { label: "D", text: "Aluminum and iron are equal." },
        ],
        correctAnswer: "A",
        explanation:
          "Figure 1 gives 0.90 J/g·°C for aluminum, 0.45 for iron, and 0.39 for copper. Aluminum's value is the largest, so it has the tallest bar and the highest specific heat capacity.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Table 1, at every recorded time after 0 minutes, the warmest block was made of:",
        choices: [
          { label: "A", text: "aluminum." },
          { label: "B", text: "iron." },
          { label: "C", text: "copper." },
          { label: "D", text: "a different metal at each time." },
        ],
        correctAnswer: "B",
        explanation:
          "At 5, 10, 15, 20, 25, and 30 minutes the iron column always holds the highest temperature (122, 103, 89, 78, 70, 64). Iron stays warmest throughout the cooling period.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "For all three metals, the amount the block temperature dropped during each 5-minute interval:",
        choices: [
          { label: "A", text: "stayed the same throughout the experiment." },
          { label: "B", text: "became larger as time went on." },
          { label: "C", text: "became smaller as time went on." },
          { label: "D", text: "changed in no consistent way." },
        ],
        correctAnswer: "C",
        explanation:
          "For copper the drops are 54, 26, 16, 10, 6, 4 °C across successive intervals; aluminum and iron show the same shrinking pattern. As each block approaches room temperature, it cools by less in each interval.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the copper block first dropped below 40 °C between which two recorded times?",
        choices: [
          { label: "A", text: "Between 5 and 10 minutes" },
          { label: "B", text: "Between 15 and 20 minutes" },
          { label: "C", text: "Between 20 and 25 minutes" },
          { label: "D", text: "Between 25 and 30 minutes" },
        ],
        correctAnswer: "C",
        explanation:
          "Copper reads 44 °C at 20 minutes and 38 °C at 25 minutes. It crosses the 40 °C mark somewhere in that interval, so the first reading below 40 °C falls between 20 and 25 minutes.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "If the iron block had been recorded at 35 minutes, its temperature would most likely be:",
        choices: [
          { label: "A", text: "below 20 °C" },
          { label: "B", text: "between 20 °C and 64 °C" },
          { label: "C", text: "exactly 64 °C" },
          { label: "D", text: "above 70 °C" },
        ],
        correctAnswer: "B",
        explanation:
          "Iron is at 64 °C at 30 minutes and is still cooling, but it cannot fall below the 20 °C room temperature. At 35 minutes its temperature must lie between 20 °C and 64 °C — somewhat below 64 but above room temperature.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P4 — research_summary — formOrder 18-23
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Insulation and Heat Loss from Water Containers",
    passageType: "research_summary",
    body: `A researcher tested how different wrappings affect heat loss from containers of hot water.

Experiment 1
The researcher filled five identical metal cans, each with 300 mL of water at 80 °C. Each can was wrapped in a different material of the same thickness (1 cm), then left in a room at 21 °C. After 30 minutes the water temperature in each can was measured.

Table 1
Wrapping material | Water temp after 30 min (°C)
------------------|-----------------------------
None (bare can)   | 41
Cotton cloth      | 52
Cardboard         | 57
Wool felt         | 63
Foam plastic      | 68

Experiment 2
The researcher repeated the procedure using only foam plastic wrapping (the best insulator from Experiment 1) but varied the thickness of the foam. Starting water temperature was again 80 °C and the room was 21 °C.

Table 2
Foam thickness (cm) | Water temp after 30 min (°C)
--------------------|-----------------------------
0.5                 | 61
1.0                 | 68
2.0                 | 73
3.0                 | 75
4.0                 | 76

Experiment 3
Using 1.0 cm of foam plastic, the researcher varied the starting volume of water in the can. The water always started at 80 °C and the room was 21 °C.

Table 3
Water volume (mL) | Water temp after 30 min (°C)
------------------|-----------------------------
100               | 54
200               | 63
300               | 68
400               | 71
500               | 73`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which wrapping material left the water coldest after 30 minutes?",
        choices: [
          { label: "A", text: "Foam plastic" },
          { label: "B", text: "Wool felt" },
          { label: "C", text: "Cardboard" },
          { label: "D", text: "None (bare can)" },
        ],
        correctAnswer: "D",
        explanation:
          "Table 1 shows the bare can at 41 °C, lower than cotton (52), cardboard (57), wool felt (63), and foam plastic (68). The unwrapped can lost the most heat.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, why did the researcher use the same starting water temperature and the same room temperature for every can?",
        choices: [
          { label: "A", text: "To make sure the wrapping material was the only factor differing between cans" },
          { label: "B", text: "To guarantee that all cans would reach the same final temperature" },
          { label: "C", text: "Because water cannot be heated above 80 °C" },
          { label: "D", text: "To reduce the total time the experiment required" },
        ],
        correctAnswer: "A",
        explanation:
          "Holding the starting temperature (80 °C) and room temperature (21 °C) constant means any difference in the final temperatures must be due to the wrapping material — the one variable the researcher deliberately changed.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 2, as foam thickness increased, the water temperature after 30 minutes:",
        choices: [
          { label: "A", text: "increased, and by a larger amount with each step." },
          { label: "B", text: "increased, but by a smaller amount with each step." },
          { label: "C", text: "decreased steadily." },
          { label: "D", text: "stayed the same." },
        ],
        correctAnswer: "B",
        explanation:
          "Final temperatures are 61, 68, 73, 75, 76 °C. The gains for each step up in thickness are +7, +5, +2, +1 — still rising, but by progressively smaller amounts.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which feature was the same in Experiment 2 and Experiment 3 but NOT varied in either one?",
        choices: [
          { label: "A", text: "The thickness of the foam wrapping" },
          { label: "B", text: "The volume of water in the can" },
          { label: "C", text: "The starting water temperature of 80 °C" },
          { label: "D", text: "The type of wrapping material being compared" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 2 varied foam thickness; Experiment 3 varied water volume. Both, however, always started the water at 80 °C in a 21 °C room. The 80 °C starting temperature was held constant in each experiment.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "The researcher predicted that a can holding 250 mL of water, wrapped in 1.0 cm of foam, would be between 63 °C and 68 °C after 30 minutes. Is this prediction consistent with the data?",
        choices: [
          { label: "A", text: "No; 250 mL would cool below 54 °C." },
          { label: "B", text: "No; 250 mL would stay above 73 °C." },
          { label: "C", text: "Yes; 250 mL is between the 200 mL and 300 mL volumes, whose final temperatures were 63 °C and 68 °C." },
          { label: "D", text: "The data give no information about 1.0 cm foam." },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 3 used 1.0 cm foam and shows 200 mL ending at 63 °C and 300 mL ending at 68 °C. A volume of 250 mL lies between these, so its 30-minute temperature should fall between 63 °C and 68 °C, matching the prediction.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A classmate suggests adding a sixth can to Experiment 1 wrapped in 2.0 cm of foam plastic. Why would this addition make Experiment 1 harder to interpret?",
        choices: [
          { label: "A", text: "Foam plastic is not an insulating material." },
          { label: "B", text: "The new can would differ from the others in both material and thickness, so two variables would change at once." },
          { label: "C", text: "Six cans cannot fit in one room." },
          { label: "D", text: "The new can would change the room temperature." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 keeps thickness fixed at 1 cm so that only the material differs between cans. A 2.0 cm foam can would differ in thickness as well as material, so a difference in its result could not be attributed to material alone.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P5 — data_representation — formOrder 24-28
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Populations in a Freshwater Pond",
    passageType: "data_representation",
    body: `Ecologists monitored a freshwater pond for one year, sampling on the first day of each season. They estimated the population of three organisms: a microscopic alga, a small crustacean called a water flea that eats the alga, and a fish that eats water fleas.

Table 1: Estimated populations per liter of pond water.

Season | Algae (cells/L) | Water fleas (per L) | Fish (per 1000 L)
-------|-----------------|---------------------|------------------
Winter | 4,200           | 6                   | 11
Spring | 38,500          | 41                  | 14
Summer | 21,000          | 95                  | 33
Autumn | 9,800           | 52                  | 27

Figure 1 (described): A graph plots water temperature (°C) of the pond on the four sampling days. Winter is 4 °C, spring is 14 °C, summer is 26 °C, and autumn is 13 °C. The line rises from winter to a summer peak, then falls back in autumn.

Figure 2 (described): A graph plots the amount of dissolved oxygen in the pond water (in milligrams per liter, mg/L). Winter is 12.6 mg/L, spring is 10.4 mg/L, summer is 7.1 mg/L, and autumn is 9.8 mg/L. Dissolved oxygen is highest in winter and lowest in summer.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "According to Table 1, in which season was the water flea population the largest?",
        choices: [
          { label: "A", text: "Winter" },
          { label: "B", text: "Spring" },
          { label: "C", text: "Summer" },
          { label: "D", text: "Autumn" },
        ],
        correctAnswer: "C",
        explanation:
          "The water flea column lists 6, 41, 95, and 52 per liter. The largest value, 95, is recorded in summer.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Figure 2, dissolved oxygen in the pond was lowest in which season?",
        choices: [
          { label: "A", text: "Winter" },
          { label: "B", text: "Spring" },
          { label: "C", text: "Summer" },
          { label: "D", text: "Autumn" },
        ],
        correctAnswer: "C",
        explanation:
          "Figure 2 gives dissolved oxygen values of 12.6, 10.4, 7.1, and 9.8 mg/L. The smallest, 7.1 mg/L, occurs in summer.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Comparing Table 1 and Figure 2, the season with the highest fish population was also the season with the:",
        choices: [
          { label: "A", text: "highest dissolved oxygen." },
          { label: "B", text: "lowest dissolved oxygen." },
          { label: "C", text: "lowest algae population." },
          { label: "D", text: "lowest water flea population." },
        ],
        correctAnswer: "B",
        explanation:
          "Fish were most abundant in summer (33 per 1000 L). Figure 2 shows summer also had the lowest dissolved oxygen (7.1 mg/L). The other options describe winter or other seasons.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "From spring to summer, the algae population and the water flea population changed in which way?",
        choices: [
          { label: "A", text: "Both increased." },
          { label: "B", text: "Both decreased." },
          { label: "C", text: "Algae decreased while water fleas increased." },
          { label: "D", text: "Algae increased while water fleas decreased." },
        ],
        correctAnswer: "C",
        explanation:
          "From spring to summer the algae population fell from 38,500 to 21,000 cells/L, while the water flea population rose from 41 to 95 per liter. The two populations moved in opposite directions.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A student combines Figure 1 and Figure 2 into one description of the pond. Which statement correctly summarizes both figures?",
        choices: [
          { label: "A", text: "As water temperature rose toward its summer peak, dissolved oxygen fell to its lowest value." },
          { label: "B", text: "As water temperature rose toward its summer peak, dissolved oxygen also rose to its highest value." },
          { label: "C", text: "Water temperature and dissolved oxygen were both highest in winter." },
          { label: "D", text: "Water temperature and dissolved oxygen stayed constant all year." },
        ],
        correctAnswer: "A",
        explanation:
          "Figure 1 shows temperature peaking in summer (26 °C); Figure 2 shows dissolved oxygen bottoming out in summer (7.1 mg/L). Combining them, the warmest water held the least dissolved oxygen — the two trend in opposite directions.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P6 — research_summary — formOrder 29-33
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Friction on an Inclined Ramp",
    passageType: "research_summary",
    body: `Physics students studied the motion of a wooden block sliding down a ramp. They used a model in which the block slides only if the ramp is tilted past a "release angle" — the smallest angle, measured from horizontal, at which the block begins to move on its own. A surface that grips the block more strongly is said to have more friction and requires a larger release angle.

Experiment 1
Students placed the same wooden block on ramps surfaced with four materials and slowly raised one end of each ramp until the block began to slide. They recorded the release angle for each surface. Each surface was tested three times and the results averaged.

Table 1
Ramp surface | Average release angle (degrees)
-------------|--------------------------------
Glass        | 11
Smooth wood  | 19
Carpet       | 28
Rubber mat   | 37

Experiment 2
Using the smooth-wood ramp, students added mass to the top of the block and again found the release angle. The contact surfaces were unchanged.

Table 2
Total block mass (g) | Release angle (degrees)
---------------------|------------------------
200                  | 19
400                  | 19
600                  | 20
800                  | 19

Experiment 3
Using the smooth-wood ramp and the 200 g block, students sprinkled fine sand on the ramp surface and measured the release angle for increasing amounts of sand.

Table 3
Sand on ramp (g) | Release angle (degrees)
-----------------|------------------------
0                | 19
2                | 23
4                | 26
6                | 30
8                | 31`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which ramp surface had the largest average release angle?",
        choices: [
          { label: "A", text: "Glass" },
          { label: "B", text: "Smooth wood" },
          { label: "C", text: "Carpet" },
          { label: "D", text: "Rubber mat" },
        ],
        correctAnswer: "D",
        explanation:
          "Table 1 lists release angles of 11°, 19°, 28°, and 37°. The largest, 37°, belongs to the rubber mat.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, why did the students test each surface three times and average the results?",
        choices: [
          { label: "A", text: "To change the independent variable three times" },
          { label: "B", text: "To reduce the effect of small measurement errors on the recorded value" },
          { label: "C", text: "To make the block heavier with each trial" },
          { label: "D", text: "To test three different blocks on each surface" },
        ],
        correctAnswer: "B",
        explanation:
          "Repeating a measurement and averaging reduces the impact of small random errors in any single trial, giving a more reliable release angle for each surface.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesized that increasing the block's mass would increase the release angle. Do the results of Experiment 2 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; the release angle rose sharply as mass increased." },
          { label: "B", text: "No; the release angle stayed essentially constant (about 19°-20°) as mass increased." },
          { label: "C", text: "No; the release angle decreased as mass increased." },
          { label: "D", text: "The experiment did not change the block's mass." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 2 shows release angles of 19°, 19°, 20°, and 19° as mass rose from 200 g to 800 g — essentially no change. The data do not support the hypothesis that adding mass raises the release angle.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Experiments 2 and 3 both used the smooth-wood ramp. Which statement best describes how they differed and what they showed?",
        choices: [
          { label: "A", text: "Experiment 2 varied block mass and showed little effect; Experiment 3 varied the amount of sand and showed the release angle increased." },
          { label: "B", text: "Experiment 2 varied the amount of sand; Experiment 3 varied block mass; both showed a strong effect." },
          { label: "C", text: "Both varied block mass, and both showed the release angle increased." },
          { label: "D", text: "Both varied the ramp material, and neither showed any effect." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 changed block mass (200-800 g) and the release angle barely moved. Experiment 3 changed the amount of sand on the ramp (0-8 g) and the release angle rose from 19° to 31°. Sand affected the result; added mass did not.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "Suppose the students run a new trial on the smooth-wood ramp using the 200 g block with 5 g of sand sprinkled on the ramp. Based on Experiment 3, the release angle would most likely be:",
        choices: [
          { label: "A", text: "less than 19°" },
          { label: "B", text: "between 26° and 30°" },
          { label: "C", text: "exactly 19°" },
          { label: "D", text: "greater than 31°" },
        ],
        correctAnswer: "B",
        explanation:
          "In Experiment 3, 4 g of sand gave 26° and 6 g gave 30°. A 5 g amount lies between these, so the release angle should fall between 26° and 30°.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D1-P7 — conflicting_viewpoints — formOrder 34-40
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Two Explanations for a Lake's Vanishing Trout",
    passageType: "conflicting_viewpoints",
    body: `Over the past 20 years, the population of native trout in Coldspring Lake has dropped by about 80%. Two scientists who study the lake explain the decline differently.

Background data both scientists accept:
- Average summer surface-water temperature has risen from 17 °C to 21 °C over the 20-year period.
- Trout in this region grow best between 12 °C and 18 °C and become stressed above 20 °C.
- A non-native fish, the spotfin shiner, was first recorded in the lake 16 years ago. Spotfin shiners eat the same insects that young trout eat.
- The total mass of insects in the lake has not changed measurably over the 20 years.

Scientist 1 (Warming Hypothesis)
The trout decline is caused mainly by warming water. Summer surface temperatures now regularly exceed 20 °C, the level at which trout become stressed. Stressed trout eat less, grow more slowly, and are more likely to die before reproducing. The timing supports this view: the steepest drops in the trout count occurred in the same years that had the hottest summers. The spotfin shiner is not the main problem, because the lake's total insect mass has stayed steady, so there is still enough food for both species. If the lake water can be kept cooler — for example, by protecting shaded streams that feed the lake — the trout population should recover.

Scientist 2 (Competition Hypothesis)
The trout decline is caused mainly by competition with the spotfin shiner. Although the lake's total insect mass is unchanged, spotfin shiners feed in the same shallow areas as young trout and at the same time of year. Young trout that lose these feeding contests grow too slowly to survive their first winter. The trout count began its steepest decline only after spotfin shiners became common, about 12 years ago — several years after the warming had already begun. Removing spotfin shiners from the lake, not cooling the water, is the way to bring the trout back.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Scientist 1, the main cause of the trout decline is:",
        choices: [
          { label: "A", text: "competition with spotfin shiners." },
          { label: "B", text: "rising water temperature." },
          { label: "C", text: "a decrease in the lake's insect mass." },
          { label: "D", text: "overfishing by humans." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1's Warming Hypothesis states the decline is caused mainly by warming water, with summer temperatures now exceeding the 20 °C stress threshold for trout.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Scientist 2, young trout fail to survive their first winter because they:",
        choices: [
          { label: "A", text: "are eaten directly by spotfin shiners." },
          { label: "B", text: "cannot tolerate water cooler than 12 °C." },
          { label: "C", text: "grow too slowly after losing feeding contests with spotfin shiners." },
          { label: "D", text: "migrate out of the lake before winter." },
        ],
        correctAnswer: "C",
        explanation:
          "Scientist 2 states that young trout which lose feeding contests with spotfin shiners 'grow too slowly to survive their first winter.' The shiners compete for insects rather than eating the trout.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which point about the lake's insects do both scientists accept, and how does each use it?",
        choices: [
          { label: "A", text: "Insect mass has fallen; Scientist 1 blames warming and Scientist 2 blames shiners for the loss." },
          { label: "B", text: "Insect mass is unchanged; Scientist 1 uses it to argue food is still sufficient, while Scientist 2 argues shiners still out-compete young trout for it." },
          { label: "C", text: "Insect mass has risen; both scientists treat this as the cause of the decline." },
          { label: "D", text: "Insect mass was never measured; both scientists ignore it." },
        ],
        correctAnswer: "B",
        explanation:
          "The shared background states total insect mass has not changed. Scientist 1 cites this as evidence there is enough food for both species, so shiners are not the problem. Scientist 2 accepts the same fact but argues shiners still win the feeding contests in shared shallow areas.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Records show the single steepest one-year drop in the trout count occurred 10 years ago. Whose hypothesis does this most directly support, and why?",
        choices: [
          { label: "A", text: "Scientist 1, because warming began 20 years ago." },
          { label: "B", text: "Scientist 2, because the steep decline came after spotfin shiners became common about 12 years ago." },
          { label: "C", text: "Scientist 1, because spotfin shiners arrived 16 years ago." },
          { label: "D", text: "Neither, because both causes had been present for the entire 20 years." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 argues the steepest decline began only after shiners became common about 12 years ago. A steepest drop 10 years ago falls after that point, matching Scientist 2's timing argument more directly than Scientist 1's, since warming had already been underway for a decade by then.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Suppose a new survey finds that in a nearby lake with no spotfin shiners, trout numbers also fell sharply as that lake's summer temperature rose above 20 °C. This finding would:",
        choices: [
          { label: "A", text: "strengthen Scientist 1's hypothesis, because trout declined with warming even without shiners present." },
          { label: "B", text: "strengthen Scientist 2's hypothesis, because it shows shiners are required for a decline." },
          { label: "C", text: "weaken both hypotheses equally." },
          { label: "D", text: "have no bearing on either hypothesis." },
        ],
        correctAnswer: "A",
        explanation:
          "A trout decline tied to warming in a lake with no shiners shows warming alone can drive the decline. This supports Scientist 1's Warming Hypothesis and undercuts Scientist 2's claim that shiner competition is the main cause.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "If managers act only on Scientist 2's hypothesis, which action would they most likely take?",
        choices: [
          { label: "A", text: "Protect shaded streams to keep the lake cooler" },
          { label: "B", text: "Remove spotfin shiners from the lake" },
          { label: "C", text: "Add more insects to the lake as extra food" },
          { label: "D", text: "Stock the lake with additional spotfin shiners" },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 explicitly concludes that 'removing spotfin shiners from the lake, not cooling the water, is the way to bring the trout back.' Managers following this hypothesis would remove the shiners.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Managers spend five years protecting shaded streams, and the lake's summer temperature drops back to 17 °C, yet the trout population does not recover while spotfin shiners remain abundant. This outcome would best be explained by:",
        choices: [
          { label: "A", text: "Scientist 1's hypothesis, because cooling the water should have restored the trout." },
          { label: "B", text: "Scientist 2's hypothesis, because trout failed to recover even after the warming was reversed, while shiners were still present." },
          { label: "C", text: "neither hypothesis, because cooling water cannot affect fish." },
          { label: "D", text: "both hypotheses equally well." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1 predicts that cooler water should let the trout recover. If cooling fails while abundant shiners remain, the prediction of the Warming Hypothesis is not met, whereas the persistent shiner population matches Scientist 2's Competition Hypothesis as the better explanation.",
      },
    ],
  },

  // =========================================================================
  // BATCH 2: Diagnostic Test 2 (diagnosticForm: 2) — 7 passages, 40 questions.
  // =========================================================================

  // -------------------------------------------------------------------------
  // D2-P1 — data_representation — formOrder 1-5
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Glacier Mass Balance at Three Elevations",
    passageType: "data_representation",
    body: `A mountain glacier gains mass from snowfall and loses mass from melting. The net change over one year, called the annual mass balance, is reported in meters of water equivalent (m w.e.); a positive value means the glacier gained ice. Researchers placed measuring stakes at three elevations on one glacier and recorded annual mass balance for five consecutive years.

Table 1: Annual mass balance (m w.e.) by stake elevation.

Year | Stake A (1,900 m) | Stake B (2,400 m) | Stake C (2,900 m)
-----|-------------------|-------------------|-------------------
1    | -2.1              | -0.4              | +1.3
2    | -2.6              | -0.9              | +0.8
3    | -1.8              | -0.1              | +1.6
4    | -3.0              | -1.3              | +0.5
5    | -2.4              | -0.6              | +1.1

Figure 1 (described): A bar graph shows total winter snowfall (m w.e., vertical axis) for each of the five years (horizontal axis). The bars read 3.4, 2.9, 3.7, 2.5, and 3.2 m w.e. for Years 1 through 5. Years with the most snowfall (Year 3, then Year 1) are also the years with the least negative balance at Stake A.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the annual mass balance at Stake C in Year 3?",
        choices: [
          { label: "A", text: "-1.8 m w.e." },
          { label: "B", text: "+0.8 m w.e." },
          { label: "C", text: "+1.6 m w.e." },
          { label: "D", text: "+3.7 m w.e." },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the Stake C column at the Year 3 row of Table 1 gives +1.6 m w.e. The value -1.8 is Stake A in Year 3, and +3.7 is a snowfall figure from Figure 1.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Figure 1, in which year was total winter snowfall greatest?",
        choices: [
          { label: "A", text: "Year 1" },
          { label: "B", text: "Year 2" },
          { label: "C", text: "Year 3" },
          { label: "D", text: "Year 4" },
        ],
        correctAnswer: "C",
        explanation:
          "Figure 1 lists snowfall as 3.4, 2.9, 3.7, 2.5, and 3.2 m w.e. for Years 1-5. The tallest bar, 3.7 m w.e., is Year 3.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Table 1, as stake elevation increases, the annual mass balance:",
        choices: [
          { label: "A", text: "becomes more negative." },
          { label: "B", text: "becomes more positive." },
          { label: "C", text: "stays the same." },
          { label: "D", text: "varies with no consistent pattern." },
        ],
        correctAnswer: "B",
        explanation:
          "In every year, Stake A (lowest) is the most negative, Stake B is intermediate, and Stake C (highest) is positive. Mass balance becomes more positive as elevation rises.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Comparing Table 1 and Figure 1, the year with the lowest winter snowfall corresponds to the year in which Stake A had:",
        choices: [
          { label: "A", text: "its least negative mass balance." },
          { label: "B", text: "its most negative mass balance." },
          { label: "C", text: "a positive mass balance." },
          { label: "D", text: "the same mass balance as Stake C." },
        ],
        correctAnswer: "B",
        explanation:
          "Figure 1 shows the lowest snowfall (2.5 m w.e.) in Year 4. In Table 1, Stake A's Year 4 balance of -3.0 m w.e. is its most negative value of the five years.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A new stake is placed at 2,650 m elevation. Based on Table 1, its Year 1 annual mass balance would most likely be:",
        choices: [
          { label: "A", text: "less than -2.1 m w.e." },
          { label: "B", text: "between -0.4 and +1.3 m w.e." },
          { label: "C", text: "greater than +1.3 m w.e." },
          { label: "D", text: "exactly 0.0 m w.e." },
        ],
        correctAnswer: "B",
        explanation:
          "2,650 m lies between Stake B (2,400 m, -0.4 m w.e. in Year 1) and Stake C (2,900 m, +1.3 m w.e. in Year 1). Since balance rises with elevation, the new stake's value should fall between -0.4 and +1.3 m w.e.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P2 — research_summary — formOrder 6-11
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Yeast Fermentation and Sugar Type",
    passageType: "research_summary",
    body: `Yeast cells break down sugars and release carbon dioxide (CO2) gas. Students investigated how sugar type and temperature affect the rate of CO2 production.

Experiment 1: Identical flasks each received 5 g of dry yeast, 200 mL of water at 30 °C, and 20 g of one sugar. The volume of CO2 collected after 15 minutes was recorded.

Sugar     | CO2 collected (mL)
----------|-------------------
Glucose   | 410
Fructose  | 395
Sucrose   | 360
Lactose   | 25

Experiment 2: The procedure of Experiment 1 was repeated using only glucose, but the water temperature was varied.

Water temp (°C) | CO2 collected (mL)
----------------|-------------------
10              | 90
20              | 240
30              | 410
40              | 480
50              | 170

Experiment 3: The Experiment 2 setup at 30 °C was repeated, but before measuring, the yeast was boiled for 10 minutes and then cooled to 30 °C. Only 5 mL of CO2 was collected.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which sugar produced the least CO2?",
        choices: [
          { label: "A", text: "Glucose" },
          { label: "B", text: "Fructose" },
          { label: "C", text: "Sucrose" },
          { label: "D", text: "Lactose" },
        ],
        correctAnswer: "D",
        explanation:
          "Experiment 1 reports 410, 395, 360, and 25 mL for glucose, fructose, sucrose, and lactose. Lactose's 25 mL is by far the smallest.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, which factor was deliberately varied between flasks?",
        choices: [
          { label: "A", text: "The mass of yeast" },
          { label: "B", text: "The water temperature" },
          { label: "C", text: "The type of sugar" },
          { label: "D", text: "The volume of water" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 1 held yeast mass (5 g), water (200 mL at 30 °C), and sugar mass (20 g) constant; only the type of sugar changed across flasks.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Experiment 2, as water temperature rose from 10 °C to 50 °C, CO2 production:",
        choices: [
          { label: "A", text: "increased steadily the whole way." },
          { label: "B", text: "decreased steadily the whole way." },
          { label: "C", text: "rose to a peak near 40 °C, then fell." },
          { label: "D", text: "remained roughly constant." },
        ],
        correctAnswer: "C",
        explanation:
          "CO2 climbs 90 → 240 → 410 → 480 mL from 10 to 40 °C, then drops sharply to 170 mL at 50 °C. The output peaks near 40 °C.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Experiment 3 was most likely designed to test the hypothesis that:",
        choices: [
          { label: "A", text: "boiling the yeast destroys its ability to ferment sugar." },
          { label: "B", text: "glucose ferments faster than sucrose." },
          { label: "C", text: "warmer water always increases CO2 output." },
          { label: "D", text: "lactose cannot be broken down by yeast." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 3 repeats the 30 °C glucose trial with one change — boiling the yeast first. The near-zero result (5 mL vs. 410 mL) tests, and supports, the idea that boiling destroys the yeast's fermenting ability.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which condition was the same in Experiment 1 and Experiment 2?",
        choices: [
          { label: "A", text: "The type of sugar used in every trial" },
          { label: "B", text: "The water temperature in every trial" },
          { label: "C", text: "The mass of yeast (5 g) used in every trial" },
          { label: "D", text: "The volume of CO2 collected" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 2 repeats the Experiment 1 procedure, which fixes 5 g of dry yeast per flask. Sugar type varied in Experiment 1, temperature varied in Experiment 2, and CO2 volume was the measured outcome, not a fixed condition.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "If Experiment 2 were extended to a water temperature of 60 °C, the CO2 collected would most likely be:",
        choices: [
          { label: "A", text: "greater than 480 mL" },
          { label: "B", text: "about 480 mL" },
          { label: "C", text: "less than 170 mL" },
          { label: "D", text: "exactly 410 mL" },
        ],
        correctAnswer: "C",
        explanation:
          "CO2 already fell sharply from 480 mL at 40 °C to 170 mL at 50 °C, indicating heat damage to the yeast above the 40 °C peak. Continuing to 60 °C should drop output even further below 170 mL.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P3 — data_representation — formOrder 12-17
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Absorption Spectrum of a Plant Pigment",
    passageType: "data_representation",
    body: `When light passes through a solution containing a pigment, some wavelengths are absorbed more strongly than others. Absorbance is a unitless measure; higher absorbance means more light of that wavelength was absorbed. A laboratory measured the absorbance of a leaf-pigment extract across the visible spectrum.

Table 1: Absorbance of the pigment extract by wavelength.

Wavelength (nm) | Color region | Absorbance
----------------|--------------|-----------
430             | violet-blue  | 1.42
470             | blue         | 0.96
510             | green        | 0.18
550             | yellow-green | 0.12
590             | orange       | 0.47
660             | red          | 1.28
700             | deep red     | 0.31

Figure 1 (described): A bar graph plots the rate of oxygen production by the plant (relative units, vertical axis) when illuminated by light of each wavelength in Table 1. The bars are tallest at 430 nm and 660 nm and shortest at 510 nm and 550 nm; the pattern of bar heights closely tracks the absorbance values in Table 1.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what is the absorbance of the pigment extract at 590 nm?",
        choices: [
          { label: "A", text: "0.12" },
          { label: "B", text: "0.47" },
          { label: "C", text: "1.28" },
          { label: "D", text: "1.42" },
        ],
        correctAnswer: "B",
        explanation:
          "The 590 nm row of Table 1 lists an absorbance of 0.47.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, the pigment absorbs light least strongly in which color region?",
        choices: [
          { label: "A", text: "violet-blue" },
          { label: "B", text: "yellow-green" },
          { label: "C", text: "orange" },
          { label: "D", text: "red" },
        ],
        correctAnswer: "B",
        explanation:
          "The smallest absorbance in Table 1 is 0.12, at 550 nm, which the table labels yellow-green.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1 and Figure 1, wavelengths that the pigment absorbs strongly are also wavelengths at which the plant:",
        choices: [
          { label: "A", text: "produces oxygen rapidly." },
          { label: "B", text: "produces oxygen slowly." },
          { label: "C", text: "produces no oxygen at all." },
          { label: "D", text: "produces oxygen at a constant rate." },
        ],
        correctAnswer: "A",
        explanation:
          "Figure 1's tallest oxygen-production bars are at 430 and 660 nm — the same wavelengths with the highest absorbance in Table 1 (1.42 and 1.28). Strong absorbance goes with rapid oxygen production.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "If the data in Table 1 were plotted as a line graph of absorbance versus wavelength, the curve would have:",
        choices: [
          { label: "A", text: "a single peak near 510 nm." },
          { label: "B", text: "two high regions, near 430 nm and near 660 nm, with a low dip in between." },
          { label: "C", text: "a steady rise from 430 nm to 700 nm." },
          { label: "D", text: "a flat, horizontal line." },
        ],
        correctAnswer: "B",
        explanation:
          "Absorbance is high at 430 nm (1.42), falls to a low near 510-550 nm (0.18, 0.12), rises again to 660 nm (1.28), then falls. The curve has two peaks with a dip between them.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A researcher illuminates the plant with pure green light at 530 nm. Based on Table 1 and Figure 1, the rate of oxygen production would most likely be:",
        choices: [
          { label: "A", text: "very high, similar to illumination at 430 nm." },
          { label: "B", text: "very low, because the pigment absorbs little light near 530 nm." },
          { label: "C", text: "moderate, similar to illumination at 590 nm." },
          { label: "D", text: "zero, because plants cannot use any visible light." },
        ],
        correctAnswer: "B",
        explanation:
          "530 nm lies between 510 nm (0.18) and 550 nm (0.12), the lowest-absorbance region. Since oxygen production tracks absorbance, illumination at 530 nm should yield a very low rate.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 5,
        estimatedTimeSec: 90,
        prompt:
          "A student claims, 'A pigment's absorbance at a wavelength determines how much that wavelength drives oxygen production.' Which result would most strongly challenge this claim?",
        choices: [
          { label: "A", text: "Oxygen production is high at 430 nm, where absorbance is 1.42." },
          { label: "B", text: "Oxygen production is low at 550 nm, where absorbance is 0.12." },
          { label: "C", text: "Oxygen production is high at 510 nm, where absorbance is only 0.18." },
          { label: "D", text: "Oxygen production is high at 660 nm, where absorbance is 1.28." },
        ],
        correctAnswer: "C",
        explanation:
          "The claim predicts that low absorbance means low oxygen production. High oxygen output at 510 nm, where absorbance is only 0.18, would break that link and challenge the claim. The other options all show absorbance and production matching, which supports the claim.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P4 — research_summary — formOrder 18-23
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Evaporation Rate of Saltwater Solutions",
    passageType: "research_summary",
    body: `Students investigated how dissolved salt and air movement affect how fast water evaporates from an open dish.

Experiment 1: Five identical shallow dishes each held 100 mL of water with a different amount of dissolved table salt. Each dish sat in still air at 25 °C. After 48 hours the mass of water lost to evaporation was recorded.

Salt added (g) | Water lost (g)
---------------|---------------
0              | 41
5              | 38
10             | 35
20             | 30
40             | 22

Experiment 2: A dish with 100 mL of pure water (0 g salt) was placed at 25 °C and a small fan was set to one of four airflow speeds. Water lost after 48 hours was recorded.

Airflow (m/s) | Water lost (g)
--------------|---------------
0.0           | 41
0.5           | 58
1.0           | 72
2.0           | 91

Experiment 3: The Experiment 2 procedure was repeated at an airflow of 1.0 m/s, but using water with 40 g of dissolved salt. The water lost after 48 hours was 53 g.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 2, how much water was lost at an airflow of 1.0 m/s?",
        choices: [
          { label: "A", text: "41 g" },
          { label: "B", text: "58 g" },
          { label: "C", text: "72 g" },
          { label: "D", text: "91 g" },
        ],
        correctAnswer: "C",
        explanation:
          "The Experiment 2 table lists 72 g of water lost at an airflow of 1.0 m/s.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Experiment 1, as the amount of dissolved salt increased, the water lost to evaporation:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "first rose, then fell." },
        ],
        correctAnswer: "B",
        explanation:
          "As salt rose from 0 to 40 g, water lost fell steadily: 41, 38, 35, 30, 22 g. More dissolved salt reduces evaporation.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 2, why was the salt amount kept at 0 g for every dish?",
        choices: [
          { label: "A", text: "To make the dishes lighter to handle." },
          { label: "B", text: "To isolate the effect of airflow by holding salt content constant." },
          { label: "C", text: "Because salt cannot dissolve at 25 °C." },
          { label: "D", text: "To match the temperature of Experiment 1." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 2 varies airflow to study its effect. Holding salt at 0 g for every dish keeps that variable constant, so any change in water lost can be attributed to airflow alone.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Experiment 3 differs from the 1.0 m/s trial of Experiment 2 only in that Experiment 3:",
        choices: [
          { label: "A", text: "used a higher airflow speed." },
          { label: "B", text: "used water containing 40 g of dissolved salt." },
          { label: "C", text: "was run at a lower temperature." },
          { label: "D", text: "was run for a longer time." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 3 repeats the Experiment 2 setup at 1.0 m/s and 25 °C for 48 hours; the only stated change is using water with 40 g of dissolved salt instead of pure water.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Based on the results, the water lost in Experiment 3 (53 g) is best explained by the fact that:",
        choices: [
          { label: "A", text: "airflow increased evaporation while dissolved salt reduced it." },
          { label: "B", text: "salt increased evaporation while airflow had no effect." },
          { label: "C", text: "both salt and airflow reduced evaporation." },
          { label: "D", text: "neither salt nor airflow affects evaporation." },
        ],
        correctAnswer: "A",
        explanation:
          "Pure water at 1.0 m/s lost 72 g; Experiment 3's salty water at the same airflow lost only 53 g — more than the 41 g lost in still pure water but less than 72 g. Airflow raises evaporation while dissolved salt lowers it; the two effects partly offset.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A student hypothesizes that airflow has a larger effect on evaporation than dissolved salt does. Which comparison best tests this hypothesis?",
        choices: [
          { label: "A", text: "Comparing the 0 g and 5 g dishes in Experiment 1" },
          { label: "B", text: "Comparing the change from 0 g to 40 g salt in Experiment 1 with the change from 0.0 to 2.0 m/s airflow in Experiment 2" },
          { label: "C", text: "Comparing two dishes that received the same treatment" },
          { label: "D", text: "Comparing Experiment 3's result with itself" },
        ],
        correctAnswer: "B",
        explanation:
          "Testing which variable matters more requires comparing the full range of each. From 0 to 40 g salt, water lost drops 41 → 22 g (a 19 g change); from 0.0 to 2.0 m/s, it rises 41 → 91 g (a 50 g change). Option B sets up exactly that comparison.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P5 — data_representation — formOrder 24-28
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Ocean Water Properties with Depth",
    passageType: "data_representation",
    body: `A research vessel lowered an instrument package through the open ocean and recorded properties of the water at six depths. Dissolved oxygen is given in milligrams per liter (mg/L).

Table 1: Ocean water properties by depth.

Depth (m) | Temperature (°C) | Dissolved O2 (mg/L) | Pressure (atm)
----------|------------------|---------------------|---------------
0         | 24.6             | 6.8                 | 1.0
50        | 22.1             | 6.5                 | 6.0
200       | 12.4             | 4.1                 | 21.0
500       | 7.8              | 2.0                 | 51.0
1000      | 4.5              | 3.3                 | 101.0
2000      | 2.9              | 5.0                 | 201.0

Figure 1 (described): A scatter plot displays seawater density (kg/m^3, vertical axis) against depth (m, horizontal axis). The plotted points rise steadily from about 1,024 kg/m^3 at the surface to about 1,038 kg/m^3 at 2,000 m, with no point lower than the one above it.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the water pressure at a depth of 500 m?",
        choices: [
          { label: "A", text: "6.0 atm" },
          { label: "B", text: "21.0 atm" },
          { label: "C", text: "51.0 atm" },
          { label: "D", text: "101.0 atm" },
        ],
        correctAnswer: "C",
        explanation:
          "The 500 m row of Table 1 lists a pressure of 51.0 atm.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Table 1, as depth increases, temperature and pressure:",
        choices: [
          { label: "A", text: "both increase." },
          { label: "B", text: "both decrease." },
          { label: "C", text: "temperature decreases and pressure increases." },
          { label: "D", text: "temperature increases and pressure decreases." },
        ],
        correctAnswer: "C",
        explanation:
          "From 0 to 2,000 m, temperature falls steadily from 24.6 to 2.9 °C while pressure rises steadily from 1.0 to 201.0 atm. The two trends move in opposite directions.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "According to Table 1, dissolved oxygen reached its lowest value at which depth?",
        choices: [
          { label: "A", text: "0 m" },
          { label: "B", text: "200 m" },
          { label: "C", text: "500 m" },
          { label: "D", text: "2000 m" },
        ],
        correctAnswer: "C",
        explanation:
          "Dissolved O2 values are 6.8, 6.5, 4.1, 2.0, 3.3, and 5.0 mg/L. The minimum, 2.0 mg/L, occurs at 500 m. Oxygen falls to that depth and then rises again.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Based on Figure 1, seawater density at a depth of 750 m would most likely be closest to:",
        choices: [
          { label: "A", text: "1,022 kg/m^3" },
          { label: "B", text: "1,031 kg/m^3" },
          { label: "C", text: "1,040 kg/m^3" },
          { label: "D", text: "1,045 kg/m^3" },
        ],
        correctAnswer: "B",
        explanation:
          "Figure 1 shows density climbing steadily from ~1,024 kg/m^3 at the surface to ~1,038 kg/m^3 at 2,000 m. A depth of 750 m is roughly one-third of the way down, giving an intermediate value near 1,031 kg/m^3.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A scientist states that dissolved oxygen does not simply track temperature in this water column. Which pair of depths from Table 1 best supports that statement?",
        choices: [
          { label: "A", text: "0 m and 50 m" },
          { label: "B", text: "50 m and 200 m" },
          { label: "C", text: "500 m and 2000 m" },
          { label: "D", text: "200 m and 500 m" },
        ],
        correctAnswer: "C",
        explanation:
          "From 500 m to 2,000 m, temperature keeps falling (7.8 → 2.9 °C) but dissolved oxygen rises (2.0 → 5.0 mg/L). Oxygen moving opposite to temperature there shows the two are not simply linked, supporting the scientist's statement.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P6 — research_summary — formOrder 29-33
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Magnetic Braking of a Falling Magnet",
    passageType: "research_summary",
    body: `When a magnet falls through a metal tube, moving magnetic fields create electric currents in the tube that, in turn, slow the magnet. Students investigated this magnetic braking effect.

Experiment 1: A bar magnet was dropped from the top of a 1.0 m vertical tube. The time to fall through the tube was measured for tubes made of different materials, each with the same wall thickness.

Tube material | Fall time (s)
--------------|--------------
Plastic       | 0.45
Aluminum      | 2.10
Copper        | 3.80
(no tube)     | 0.45

Experiment 2: The copper tube from Experiment 1 was used, and the magnet was replaced with magnets of differing strength. Fall time was recorded.

Magnet strength (relative units) | Fall time (s)
---------------------------------|--------------
1                                | 1.90
2                                | 3.80
4                                | 7.55

Experiment 3: The Experiment 1 procedure was repeated with copper tubes of differing wall thickness, using the strength-2 magnet.

Wall thickness (mm) | Fall time (s)
--------------------|--------------
1.0                 | 2.60
2.0                 | 3.80
4.0                 | 6.40`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "In Experiment 1, which tube material produced the longest fall time?",
        choices: [
          { label: "A", text: "Plastic" },
          { label: "B", text: "Aluminum" },
          { label: "C", text: "Copper" },
          { label: "D", text: "No tube" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 1 lists fall times of 0.45, 2.10, 3.80, and 0.45 s. The longest, 3.80 s, is the copper tube.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Including a 'no tube' drop in Experiment 1 was most useful because it:",
        choices: [
          { label: "A", text: "tested whether the copper tube was the strongest brake." },
          { label: "B", text: "provided a control showing the fall time with no braking effect." },
          { label: "C", text: "measured the strength of the magnet." },
          { label: "D", text: "checked whether the tube wall thickness mattered." },
        ],
        correctAnswer: "B",
        explanation:
          "The 'no tube' drop is a control: with no metal present there is no magnetic braking, so its 0.45 s sets the baseline against which braking by each tube material is judged.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Experiment 2, as magnet strength increased, fall time:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "first rose, then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "As magnet strength rose from 1 to 4, fall time rose from 1.90 to 3.80 to 7.55 s. Stronger magnets fall more slowly through the copper tube.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "In both Experiment 2 and Experiment 3, one trial gave a fall time of 3.80 s. Those two trials had in common that they used:",
        choices: [
          { label: "A", text: "a plastic tube." },
          { label: "B", text: "a copper tube and the strength-2 magnet." },
          { label: "C", text: "no tube at all." },
          { label: "D", text: "the strength-4 magnet." },
        ],
        correctAnswer: "B",
        explanation:
          "In Experiment 2 the 3.80 s result came from the strength-2 magnet in a copper tube. In Experiment 3 the 3.80 s result was the 2.0 mm copper tube, which the procedure states used the strength-2 magnet. Both trials share a copper tube and the strength-2 magnet.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Based on Experiment 3, a copper tube with a wall thickness of 3.0 mm and the strength-2 magnet would most likely produce a fall time:",
        choices: [
          { label: "A", text: "less than 2.60 s" },
          { label: "B", text: "between 3.80 and 6.40 s" },
          { label: "C", text: "greater than 6.40 s" },
          { label: "D", text: "exactly 2.60 s" },
        ],
        correctAnswer: "B",
        explanation:
          "Fall time rises with wall thickness: 2.60 s at 1.0 mm, 3.80 s at 2.0 mm, 6.40 s at 4.0 mm. A 3.0 mm wall lies between 2.0 and 4.0 mm, so its fall time should fall between 3.80 and 6.40 s.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // D2-P7 — conflicting_viewpoints — formOrder 34-40
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Two Explanations for a Coral Reef's Decline",
    passageType: "conflicting_viewpoints",
    body: `A shallow coral reef has lost more than half of its living coral cover over fifteen years. Two marine scientists offer competing explanations. Over the same period, average summer seawater temperature at the reef rose from 28.5 °C to 30.1 °C, and a coastal town upstream grew rapidly.

Scientist 1 (Thermal Stress Hypothesis):
The decline is driven mainly by rising seawater temperature. Corals host tiny algae that supply them with food; when water grows too warm, corals expel the algae and turn white, an event called bleaching. Repeated bleaching starves the coral. Surveys show that the reef's worst die-offs each followed an unusually hot summer, and reefs in cooler, undeveloped regions nearby remain healthy. Reducing greenhouse-gas emissions worldwide is the only durable fix.

Scientist 2 (Nutrient Runoff Hypothesis):
The decline is driven mainly by nutrient pollution. Fertilizer and sewage from the growing coastal town wash into the sea, where the added nutrients fuel blooms of fast-growing seaweed. The seaweed overgrows the coral, blocks light, and harbors coral diseases. Water samples near the reef show nitrogen levels three times higher than fifteen years ago, and the coral loss is most severe directly downstream of the town's outflow. Controlling local runoff would let the reef recover even if the climate continues to warm.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Scientist 1, coral bleaching occurs when:",
        choices: [
          { label: "A", text: "seaweed overgrows and blocks light from the coral." },
          { label: "B", text: "water becomes too warm and corals expel their algae." },
          { label: "C", text: "nitrogen levels in the water triple." },
          { label: "D", text: "coral diseases spread from nearby reefs." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1 states that when water grows too warm, corals expel the food-supplying algae and turn white — the bleaching event.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "According to Scientist 2, the main reason coral cover declined is that:",
        choices: [
          { label: "A", text: "warm water starved the coral of food." },
          { label: "B", text: "nutrient pollution fueled seaweed that overgrew the coral." },
          { label: "C", text: "the reef sits in a cooler, undeveloped region." },
          { label: "D", text: "greenhouse-gas emissions rose worldwide." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 attributes the decline to fertilizer and sewage adding nutrients that fuel seaweed blooms, which overgrow the coral and block light.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Both scientists would most likely agree that:",
        choices: [
          { label: "A", text: "the reef's living coral cover has declined substantially." },
          { label: "B", text: "rising seawater temperature is the main cause of the decline." },
          { label: "C", text: "nutrient runoff is the main cause of the decline." },
          { label: "D", text: "the reef cannot recover under any circumstances." },
        ],
        correctAnswer: "A",
        explanation:
          "The two scientists disagree about the cause but both accept the starting fact stated in the passage — the reef has lost more than half its living coral cover. They differ only on why.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Which finding, if confirmed, would most strengthen Scientist 2's hypothesis over Scientist 1's?",
        choices: [
          { label: "A", text: "Coral loss is just as severe far from the town's outflow as directly downstream of it." },
          { label: "B", text: "Coral loss is far worse directly downstream of the town's outflow than elsewhere on the reef." },
          { label: "C", text: "The reef's worst die-offs each followed an unusually hot summer." },
          { label: "D", text: "Reefs in cooler, undeveloped regions remain healthy." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 ties the decline to the town's runoff. If damage is concentrated directly downstream of the outflow, that spatial pattern points to local pollution rather than basin-wide warming, strengthening Scientist 2 over Scientist 1.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A nearby reef lies in warm water that has risen by the same 1.6 °C but has no coastal town or runoff source. Scientist 1's hypothesis predicts that this reef should be:",
        choices: [
          { label: "A", text: "healthy, because there is no nutrient runoff." },
          { label: "B", text: "declining, because the water has warmed as much as at the studied reef." },
          { label: "C", text: "unaffected, because warming does not harm coral." },
          { label: "D", text: "improving, because seaweed cannot grow there." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1 holds that warming alone drives the decline. A reef with the same temperature rise but no runoff should, by that hypothesis, still be declining from thermal stress.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Which observation would best test whether Scientist 2's hypothesis, rather than Scientist 1's, explains the decline?",
        choices: [
          { label: "A", text: "Measuring the worldwide rise in greenhouse-gas emissions." },
          { label: "B", text: "Tracking coral recovery on a section of reef after the town's nutrient runoff is sharply reduced, while seawater temperature stays high." },
          { label: "C", text: "Recording the reef's coral cover fifteen years ago." },
          { label: "D", text: "Counting the algae living inside healthy corals." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 claims controlling runoff would let the reef recover even with continued warming. Cutting runoff while temperature stays high isolates the nutrient factor: recovery would support Scientist 2, while continued decline would favor Scientist 1.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Suppose the town eliminates its nutrient runoff and nitrogen levels return to their original values, yet over the next decade the reef continues to decline as summer temperatures keep rising. This outcome would best support:",
        choices: [
          { label: "A", text: "Scientist 2's hypothesis, because removing runoff should have halted the decline." },
          { label: "B", text: "Scientist 1's hypothesis, because the decline continued once runoff was removed but warming persisted." },
          { label: "C", text: "neither hypothesis, because reefs cannot decline without seaweed." },
          { label: "D", text: "both hypotheses equally." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 predicts recovery once runoff is controlled. Continued decline after runoff is eliminated, with warming as the remaining factor, contradicts Scientist 2's prediction and matches Scientist 1's Thermal Stress Hypothesis.",
      },
    ],
  },
];
