import type { SeedPassage } from "./types";

// ===========================================================================
// Science seed content — Adaptive practice bank.
// 24 passages, 150 questions. No diagnosticForm / formOrder: these items are
// adaptive-bank only.
// Passage types: 9 data_representation, 11 research_summary,
// 4 conflicting_viewpoints — mirroring real ACT Science section emphasis,
// with extra conflicting_viewpoints / model passages so the evaluation_of_models
// subskills reach the 14-18 band.
// All 9 Science subskills are covered within the 14-18 band each:
//   read_data 17, data_relationships 17, data_translation 16,
//   experimental_design 16, compare_experiments 16, hypothesis_testing 16,
//   model_comprehension 16, model_evaluation 16, predictions_conclusions 18.
// reportingCategory rollup: interpretation_of_data 50, scientific_investigation
// 48, evaluation_of_models 52.
// Difficulty: ~20% easy (1-2), ~60% medium (3), ~20% hard (4-5).
// All passages, datasets, experiments, viewpoints, questions, and explanations
// are 100% original to this app and do not duplicate the diagnostic passages
// in science.ts. Tables/graphs/diagrams are described in passage-body text.
// ===========================================================================

export const scienceExtraPassages: SeedPassage[] = [
  // =========================================================================
  // P1 — data_representation — 6 Qs
  // interp: read_data x3, data_relationships x2, data_translation x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Sound Intensity and Distance from a Speaker",
    passageType: "data_representation",
    body: `A technician measured how the loudness of a tone changes with distance from a single loudspeaker playing a steady 1,000 Hz note. Loudness was recorded as sound intensity level in decibels (dB); a higher dB value means a louder sound. Measurements were taken in an open field with no nearby walls.

Table 1: Sound intensity level versus distance from the speaker.

Distance (m) | Intensity level (dB)
-------------|---------------------
1            | 88
2            | 82
4            | 76
8            | 70
16           | 64

Table 2: Intensity level at a fixed distance of 4 m for three speaker power settings.

Power setting (W) | Intensity level (dB)
------------------|---------------------
5                 | 70
10                | 73
20                | 76
40                | 79

Figure 1 (described): A line graph plots intensity level (dB, vertical axis) against distance (m, horizontal axis) for the Table 1 data. The line falls smoothly from upper left to lower right and never rises.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the intensity level measured at a distance of 8 m?",
        choices: [
          { label: "A", text: "64 dB" },
          { label: "B", text: "70 dB" },
          { label: "C", text: "76 dB" },
          { label: "D", text: "82 dB" },
        ],
        correctAnswer: "B",
        explanation:
          "Reading the 8 m row of Table 1 gives an intensity level of 70 dB. 64 dB is the 16 m value and 76 dB is the 4 m value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 2, at a power setting of 20 W and a distance of 4 m, the intensity level was:",
        choices: [
          { label: "A", text: "70 dB" },
          { label: "B", text: "73 dB" },
          { label: "C", text: "76 dB" },
          { label: "D", text: "79 dB" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 2 lists the 20 W row at 76 dB. The values 70, 73, and 79 dB correspond to the 5 W, 10 W, and 40 W settings.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, at which distance was the intensity level 88 dB?",
        choices: [
          { label: "A", text: "1 m" },
          { label: "B", text: "4 m" },
          { label: "C", text: "8 m" },
          { label: "D", text: "16 m" },
        ],
        correctAnswer: "A",
        explanation:
          "Table 1 records an intensity level of 88 dB at a distance of 1 m, the closest distance tested.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        prompt:
          "Based on Table 1, each time the distance from the speaker doubled, the intensity level:",
        choices: [
          { label: "A", text: "increased by about 6 dB." },
          { label: "B", text: "decreased by about 6 dB." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "decreased by about 20 dB." },
        ],
        correctAnswer: "B",
        explanation:
          "From 1 to 2 m, 2 to 4 m, 4 to 8 m, and 8 to 16 m, the intensity falls 88→82→76→70→64 — a steady drop of 6 dB for each doubling of distance.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 2, as the power setting increased, the intensity level at 4 m:",
        choices: [
          { label: "A", text: "increased by 3 dB for each doubling of power." },
          { label: "B", text: "decreased as power increased." },
          { label: "C", text: "increased by 10 dB for each doubling of power." },
          { label: "D", text: "did not change." },
        ],
        correctAnswer: "A",
        explanation:
          "Power doubles at each step (5→10→20→40 W) and intensity rises 70→73→76→79 dB — a constant +3 dB per doubling.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A student wants a single graph from Table 2 showing how intensity level depends on power setting. The plotted points should:",
        choices: [
          { label: "A", text: "rise from lower left to upper right." },
          { label: "B", text: "fall from upper left to lower right." },
          { label: "C", text: "form a horizontal line." },
          { label: "D", text: "rise to a peak and then fall." },
        ],
        correctAnswer: "A",
        explanation:
          "In Table 2 intensity climbs steadily (70, 73, 76, 79 dB) as power rises (5, 10, 20, 40 W). With power on the horizontal axis, the points move upward to the right.",
      },
    ],
  },

  // =========================================================================
  // P2 — research_summary — 7 Qs
  // invest: experimental_design x3, compare_experiments x2, hypothesis_testing x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Catalase Activity in Hydrogen Peroxide",
    passageType: "research_summary",
    body: `Catalase is an enzyme that speeds the breakdown of hydrogen peroxide (H2O2) into water and oxygen gas. Students measured catalase activity by recording the volume of oxygen gas produced in 60 seconds when a small disk soaked in catalase solution was dropped into H2O2.

Experiment 1
Students dropped catalase disks into beakers of 3% H2O2 held at different temperatures. All disks were the same size and soaked in the same catalase solution. The volume of oxygen collected after 60 s was recorded.

Table 1
Temperature (°C) | Oxygen volume (mL)
-----------------|-------------------
10               | 8
20               | 19
30               | 34
40               | 41
50               | 22
60               | 4

Experiment 2
Using H2O2 held at 40 °C (the most productive temperature from Experiment 1), students varied the H2O2 concentration. All other conditions matched Experiment 1.

Table 2
H2O2 concentration (%) | Oxygen volume (mL)
-----------------------|-------------------
1                      | 16
2                      | 29
3                      | 41
4                      | 48
5                      | 50

Experiment 3
Using 3% H2O2 at 40 °C, students changed the pH of the catalase solution soaked into the disk. All other conditions matched Experiment 1.

Table 3
pH of catalase solution | Oxygen volume (mL)
------------------------|-------------------
4                       | 7
5                       | 25
6                       | 39
7                       | 42
8                       | 30
9                       | 11`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which of the following was deliberately changed by the students?",
        choices: [
          { label: "A", text: "The concentration of H2O2" },
          { label: "B", text: "The pH of the catalase solution" },
          { label: "C", text: "The temperature of the H2O2" },
          { label: "D", text: "The size of the catalase disk" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 1 held disk size, catalase solution, and H2O2 concentration constant. Only temperature was changed across beakers, so it is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "Why did the students keep all catalase disks the same size in every experiment?",
        choices: [
          { label: "A", text: "Larger disks cannot be soaked in catalase solution." },
          { label: "B", text: "Disk size affects how much catalase is present, so holding it constant keeps it from confounding the tested variable." },
          { label: "C", text: "Disk size determines the temperature of the H2O2." },
          { label: "D", text: "Smaller disks produce more accurate oxygen readings." },
        ],
        correctAnswer: "B",
        explanation:
          "A larger disk carries more catalase and would itself change the oxygen output. Holding disk size constant ensures any change in oxygen volume is due to the variable being tested, not to differing amounts of enzyme.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Why did the students use H2O2 at 40 °C in both Experiment 2 and Experiment 3?",
        choices: [
          { label: "A", text: "It was the only temperature at which oxygen gas forms." },
          { label: "B", text: "It produced the most oxygen in Experiment 1, so temperature would not limit the effect of the variable being tested." },
          { label: "C", text: "It is the temperature of the laboratory room." },
          { label: "D", text: "Higher temperatures would damage the disks." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 identified 40 °C as the most productive temperature. Holding temperature at this best value in Experiments 2 and 3 keeps temperature from limiting the reaction, so changes in oxygen output can be attributed to the new variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, as temperature rose from 10 °C to 60 °C, the oxygen volume:",
        choices: [
          { label: "A", text: "increased continuously." },
          { label: "B", text: "decreased continuously." },
          { label: "C", text: "rose to a peak near 40 °C and then declined." },
          { label: "D", text: "stayed roughly constant." },
        ],
        correctAnswer: "C",
        explanation:
          "Oxygen volume goes 8, 19, 34, 41, 22, 4 mL. It climbs to a maximum of 41 mL at 40 °C, then falls sharply at 50 °C and 60 °C.",
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
          { label: "A", text: "Experiment 3 varied the pH of the catalase solution, whereas Experiment 2 varied H2O2 concentration." },
          { label: "B", text: "Experiment 3 varied temperature, whereas Experiment 2 varied pH." },
          { label: "C", text: "Experiment 3 used a larger disk than Experiment 2." },
          { label: "D", text: "Experiment 3 collected oxygen for a longer time than Experiment 2." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 changed H2O2 concentration (1-5%) while Experiment 3 changed the pH of the catalase solution (4-9). The deliberately changed variable is the key difference.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Suppose students run a new trial using 4% H2O2 at 40 °C with a catalase solution at pH 5. Based on Experiments 2 and 3, the oxygen volume would most likely be:",
        choices: [
          { label: "A", text: "well below 48 mL, because pH 5 produced much less oxygen than pH 7 in Experiment 3." },
          { label: "B", text: "exactly 48 mL, the Experiment 2 result for 4% H2O2." },
          { label: "C", text: "greater than 50 mL." },
          { label: "D", text: "0 mL, because catalase cannot work at pH 5." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2's 48 mL for 4% H2O2 used the favorable pH 7 catalase solution. Experiment 3 shows pH 5 gave only 25 mL versus 42 mL at pH 7. A pH 5 trial would therefore produce well below 48 mL.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A student hypothesizes that catalase works fastest in strongly acidic conditions. Do the results of Experiment 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; oxygen volume was highest at pH 4, the most acidic value tested." },
          { label: "B", text: "Yes; oxygen volume rose steadily as pH decreased." },
          { label: "C", text: "No; oxygen volume peaked near pH 7 and was lowest at the acidic pH 4." },
          { label: "D", text: "No; oxygen volume did not change with pH." },
        ],
        correctAnswer: "C",
        explanation:
          "Table 3 shows oxygen volume peaking at 42 mL at pH 7 and dropping to just 7 mL at pH 4. Catalase works best near neutral pH, not in strongly acidic conditions, so the hypothesis is not supported.",
      },
    ],
  },

  // =========================================================================
  // P3 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Stopping Distance of a Test Car",
    passageType: "data_representation",
    body: `An automotive lab measured how far a test car travels after the brakes are fully applied. The braking distance is the distance the car moves from the moment the brakes lock to the moment it stops. Tests were run on a dry concrete track.

Table 1: Braking distance versus initial speed on dry concrete.

Initial speed (km/h) | Braking distance (m)
---------------------|---------------------
20                   | 3
40                   | 12
60                   | 27
80                   | 48
100                  | 75

Table 2: Braking distance from an initial speed of 60 km/h on four road surfaces.

Road surface   | Braking distance (m)
---------------|---------------------
Dry concrete   | 27
Wet concrete   | 41
Packed gravel  | 53
Ice            | 138

Figure 1 (described): A bar graph displays the four braking distances from Table 2. The ice bar is by far the tallest, more than five times the height of the dry-concrete bar.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the braking distance at an initial speed of 80 km/h?",
        choices: [
          { label: "A", text: "27 m" },
          { label: "B", text: "48 m" },
          { label: "C", text: "75 m" },
          { label: "D", text: "138 m" },
        ],
        correctAnswer: "B",
        explanation:
          "Table 1 lists the 80 km/h row at a braking distance of 48 m. 27 m is the 60 km/h value and 75 m is the 100 km/h value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 2, on which surface was the braking distance from 60 km/h the longest?",
        choices: [
          { label: "A", text: "Dry concrete" },
          { label: "B", text: "Wet concrete" },
          { label: "C", text: "Packed gravel" },
          { label: "D", text: "Ice" },
        ],
        correctAnswer: "D",
        explanation:
          "Table 2 lists braking distances of 27, 41, 53, and 138 m. The longest, 138 m, is on ice.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1, as the initial speed increased, the braking distance:",
        choices: [
          { label: "A", text: "increased, and by a larger amount with each step." },
          { label: "B", text: "increased, but by a smaller amount with each step." },
          { label: "C", text: "decreased steadily." },
          { label: "D", text: "stayed roughly constant." },
        ],
        correctAnswer: "A",
        explanation:
          "The braking distances are 3, 12, 27, 48, 75 m. The increases for each 20 km/h step are +9, +15, +21, +27 — rising, and by a larger amount each time.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, when the initial speed doubled from 40 km/h to 80 km/h, the braking distance changed by a factor of about:",
        choices: [
          { label: "A", text: "1" },
          { label: "B", text: "2" },
          { label: "C", text: "4" },
          { label: "D", text: "8" },
        ],
        correctAnswer: "C",
        explanation:
          "At 40 km/h the distance is 12 m and at 80 km/h it is 48 m. 48 ÷ 12 = 4, so doubling the speed multiplied the braking distance by about 4.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the braking distance at an initial speed of 50 km/h would most likely be:",
        choices: [
          { label: "A", text: "less than 12 m" },
          { label: "B", text: "between 12 and 27 m" },
          { label: "C", text: "between 48 and 75 m" },
          { label: "D", text: "greater than 75 m" },
        ],
        correctAnswer: "B",
        explanation:
          "A speed of 50 km/h lies between 40 km/h (12 m) and 60 km/h (27 m). The braking distance should fall between those two values.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A driver on ice traveling 60 km/h needs how many times the braking distance required on dry concrete at the same speed?",
        choices: [
          { label: "A", text: "About 1.5 times" },
          { label: "B", text: "About 2 times" },
          { label: "C", text: "About 5 times" },
          { label: "D", text: "About 10 times" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 2 gives 138 m on ice and 27 m on dry concrete at 60 km/h. 138 ÷ 27 ≈ 5.1, so braking on ice needs roughly 5 times the distance.",
      },
    ],
  },

  // =========================================================================
  // P4 — research_summary — 7 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x3
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Rusting of Iron Nails",
    passageType: "research_summary",
    body: `Rust forms when iron reacts with both oxygen and water. Students investigated the conditions that speed the rusting of iron nails. They scored rusting after 10 days on a 0-10 scale, where 0 means no visible rust and 10 means the nail surface is completely covered.

Experiment 1
Students placed identical iron nails in five sealed test tubes, each containing a different environment, and kept all tubes at 22 °C. After 10 days each nail was given a rust score.

Table 1
Tube environment            | Rust score
----------------------------|-----------
Dry air only                | 1
Boiled water (no air)       | 2
Tap water with air          | 7
Salt water with air         | 9
Oil coating, sealed         | 0

Experiment 2
Students placed identical nails in tap water with air at five temperatures and scored rusting after 10 days.

Table 2
Temperature (°C) | Rust score
-----------------|-----------
5                | 3
15               | 5
25               | 7
35               | 9
45               | 10

Experiment 3
Students placed identical nails in salt water with air, varying the salt concentration, all kept at 25 °C, and scored rusting after 10 days.

Table 3
Salt concentration (%) | Rust score
-----------------------|-----------
0                      | 7
1                      | 8
2                      | 9
4                      | 9
8                      | 10`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, why did the students use identical iron nails in every tube?",
        choices: [
          { label: "A", text: "So the nail itself would not differ between tubes, leaving the environment as the tested variable" },
          { label: "B", text: "Because only identical nails can rust" },
          { label: "C", text: "To change the temperature of each tube" },
          { label: "D", text: "To make the experiment take less time" },
        ],
        correctAnswer: "A",
        explanation:
          "Using identical nails ensures the only thing differing between tubes is the environment, so any difference in rust score can be attributed to the environment being tested.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A student hypothesizes that iron needs both air and water to rust significantly. Do the results of Experiment 1 support this hypothesis?",
        choices: [
          { label: "A", text: "No; the dry-air tube rusted just as much as the tap-water tube." },
          { label: "B", text: "Yes; tubes with both air and water scored 7-9, while tubes missing air or water scored 0-2." },
          { label: "C", text: "No; rusting occurred equally in every tube." },
          { label: "D", text: "Yes; the oil-coated nail rusted the most." },
        ],
        correctAnswer: "B",
        explanation:
          "Dry air alone (score 1) and boiled water with no air (score 2) barely rusted, while tap water with air (7) and salt water with air (9) rusted heavily. Significant rusting required both air and water.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, what is the purpose of the tube with an oil coating?",
        choices: [
          { label: "A", text: "To raise the temperature of the other tubes" },
          { label: "B", text: "To test whether sealing the nail away from air and water prevents rusting" },
          { label: "C", text: "To add salt to the nail's surface" },
          { label: "D", text: "To make the nail rust faster" },
        ],
        correctAnswer: "B",
        explanation:
          "The oil coating blocks contact with air and water. Its rust score of 0 tests whether sealing the iron prevents the reaction, providing a comparison with the exposed tubes.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 2, as temperature increased, the rust score:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 2 shows rust scores of 3, 5, 7, 9, 10 as temperature rises from 5 °C to 45 °C — a steady increase.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Experiments 2 and 3 both produced rusting. Which statement best describes how they differed?",
        choices: [
          { label: "A", text: "Experiment 2 varied temperature using plain tap water; Experiment 3 varied salt concentration while holding temperature at 25 °C." },
          { label: "B", text: "Experiment 2 varied salt concentration; Experiment 3 varied temperature." },
          { label: "C", text: "Both varied temperature, with Experiment 3 using salt water." },
          { label: "D", text: "Both varied salt concentration at different temperatures." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 changed temperature (5-45 °C) using plain tap water. Experiment 3 changed salt concentration (0-8%) with temperature fixed at 25 °C. Each held one factor steady while varying the other.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Suppose students run a new trial placing a nail in salt water with air at 35 °C. Based on Experiments 2 and 3, the rust score would most likely be:",
        choices: [
          { label: "A", text: "lower than the score for tap water at 35 °C" },
          { label: "B", text: "at least as high as the score for tap water at 35 °C, since salt water rusted nails more than tap water" },
          { label: "C", text: "exactly 3, the lowest score in Experiment 2" },
          { label: "D", text: "0, because salt prevents rust" },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 shows salt water with air (9) rusted more than tap water with air (7) at 25 °C, and Experiment 2 shows higher temperatures raise rust scores. A salt-water nail at 35 °C should score at least as high as tap water at 35 °C (9).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student claims that beyond a salt concentration of about 2%, adding more salt does little to speed rusting. Do the results of Experiment 3 support this claim?",
        choices: [
          { label: "A", text: "No; the rust score doubled between 2% and 8% salt." },
          { label: "B", text: "Yes; the rust score barely changed (9, 9, 10) from 2% to 8% salt." },
          { label: "C", text: "No; rusting stopped entirely above 2% salt." },
          { label: "D", text: "Yes; the rust score fell sharply above 2% salt." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 3 shows scores of 9 at 2%, 9 at 4%, and 10 at 8% salt — only a one-point change across a fourfold rise in salt. The data support the claim that added salt has little effect above about 2%.",
      },
    ],
  },

  // =========================================================================
  // P5 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Solubility of Three Solids in Water",
    passageType: "data_representation",
    body: `A chemistry class measured solubility — the maximum mass of a solid that fully dissolves in 100 g of water — for three compounds across a range of water temperatures.

Table 1: Solubility (g of solid per 100 g of water).

Temp (°C) | Potassium nitrate | Table salt | Cerium sulfate
----------|-------------------|------------|----------------
0         | 13                | 36         | 21
20        | 32                | 36         | 10
40        | 64                | 37         | 5
60        | 110               | 37         | 3
80        | 169               | 38         | 2

Figure 1 (described): A line graph plots solubility (vertical axis) against temperature (horizontal axis) for all three compounds. The potassium nitrate line climbs steeply, the table salt line is nearly flat, and the cerium sulfate line slopes downward.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what is the solubility of potassium nitrate at 40 °C?",
        choices: [
          { label: "A", text: "5 g per 100 g water" },
          { label: "B", text: "37 g per 100 g water" },
          { label: "C", text: "64 g per 100 g water" },
          { label: "D", text: "110 g per 100 g water" },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the potassium nitrate column at the 40 °C row gives 64 g per 100 g water. 110 is the 60 °C value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, at 0 °C, which compound had the highest solubility?",
        choices: [
          { label: "A", text: "Potassium nitrate" },
          { label: "B", text: "Table salt" },
          { label: "C", text: "Cerium sulfate" },
          { label: "D", text: "All three were equal." },
        ],
        correctAnswer: "B",
        explanation:
          "At 0 °C the solubilities are 13 (potassium nitrate), 36 (table salt), and 21 (cerium sulfate) g per 100 g water. Table salt's 36 g is the highest.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1, as water temperature increased, the solubility of cerium sulfate:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "B",
        explanation:
          "Cerium sulfate solubility falls from 21 g at 0 °C to just 2 g at 80 °C — it decreases as temperature rises, unlike the other two compounds.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which compound's solubility changed least over the temperature range tested?",
        choices: [
          { label: "A", text: "Potassium nitrate" },
          { label: "B", text: "Table salt" },
          { label: "C", text: "Cerium sulfate" },
          { label: "D", text: "All three changed by the same amount." },
        ],
        correctAnswer: "B",
        explanation:
          "Table salt goes from 36 to 38 g (a 2 g change), potassium nitrate from 13 to 169 g (156 g), and cerium sulfate from 21 to 2 g (19 g). Table salt changed the least.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the solubility of potassium nitrate at 50 °C would most likely be:",
        choices: [
          { label: "A", text: "less than 32 g per 100 g water" },
          { label: "B", text: "between 64 and 110 g per 100 g water" },
          { label: "C", text: "exactly 169 g per 100 g water" },
          { label: "D", text: "greater than 169 g per 100 g water" },
        ],
        correctAnswer: "B",
        explanation:
          "A temperature of 50 °C lies between 40 °C (64 g) and 60 °C (110 g). The solubility of potassium nitrate should fall between those values.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A student is told that one compound dissolved at 92 g per 100 g of water. Based on Table 1, this measurement was most likely made with:",
        choices: [
          { label: "A", text: "potassium nitrate at a temperature between 40 °C and 60 °C." },
          { label: "B", text: "table salt at 80 °C." },
          { label: "C", text: "cerium sulfate at 0 °C." },
          { label: "D", text: "table salt at 0 °C." },
        ],
        correctAnswer: "A",
        explanation:
          "A solubility of 92 g falls between potassium nitrate's 64 g (40 °C) and 110 g (60 °C). No other compound reaches anywhere near 92 g, so the measurement was potassium nitrate between 40 °C and 60 °C.",
      },
    ],
  },

  // =========================================================================
  // P6 — research_summary — 7 Qs
  // invest: experimental_design x2, compare_experiments x3, hypothesis_testing x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Plant Growth Under Colored Light",
    passageType: "research_summary",
    body: `Students investigated how the color of light affects the growth of bean seedlings. They measured growth as the increase in stem height (cm) after 14 days.

Experiment 1
Students grew 10 bean seedlings under each of four colored light filters. All seedlings received the same total light intensity, water, soil, and a temperature of 24 °C. After 14 days the average stem height increase was recorded.

Table 1
Light color | Avg. height increase (cm)
------------|--------------------------
Red         | 14.2
Blue        | 11.8
Green       | 4.6
White       | 16.1

Experiment 2
Using white light (the most effective from Experiment 1), students varied the daily light duration. All other conditions matched Experiment 1.

Table 2
Daily light (hours) | Avg. height increase (cm)
--------------------|--------------------------
4                   | 5.3
8                   | 10.9
12                  | 16.1
16                  | 18.0
20                  | 17.4

Experiment 3
Using white light for 12 hours per day, students varied the air temperature. All other conditions matched Experiment 1.

Table 3
Temperature (°C) | Avg. height increase (cm)
-----------------|--------------------------
12               | 6.0
18               | 12.4
24               | 16.1
30               | 13.7
36               | 5.8`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, why were total light intensity, water, soil, and temperature kept the same for all seedlings?",
        choices: [
          { label: "A", text: "So that light color would be the only factor differing between groups" },
          { label: "B", text: "To guarantee that every seedling grew the same amount" },
          { label: "C", text: "Because seedlings cannot grow without colored light" },
          { label: "D", text: "To shorten the time the experiment took" },
        ],
        correctAnswer: "A",
        explanation:
          "Holding intensity, water, soil, and temperature constant ensures that any difference in growth is due to the one variable deliberately changed — the color of the light.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which variable was deliberately changed between the groups of seedlings?",
        choices: [
          { label: "A", text: "The color of the light" },
          { label: "B", text: "The air temperature" },
          { label: "C", text: "The amount of water" },
          { label: "D", text: "The type of soil" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 held intensity, water, soil, and temperature constant and changed only the color of the light filter, so light color is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 2, as daily light duration increased, the height increase:",
        choices: [
          { label: "A", text: "rose continuously through 20 hours." },
          { label: "B", text: "rose to a peak near 16 hours, then dipped slightly." },
          { label: "C", text: "fell continuously." },
          { label: "D", text: "stayed constant." },
        ],
        correctAnswer: "B",
        explanation:
          "Height increase goes 5.3, 10.9, 16.1, 18.0, 17.4 cm. It climbs to a maximum of 18.0 cm at 16 hours, then dips slightly to 17.4 cm at 20 hours.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "What did Experiment 3 vary that Experiment 2 held constant?",
        choices: [
          { label: "A", text: "Air temperature" },
          { label: "B", text: "Daily light duration" },
          { label: "C", text: "Light color" },
          { label: "D", text: "Number of seedlings per group" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 held temperature at 24 °C and varied daily light duration. Experiment 3 varied air temperature (12-36 °C) while fixing the light at white for 12 hours per day.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A new trial grows seedlings under green light for 12 hours per day at 24 °C. Based on Experiments 1 and 2, the height increase would most likely be:",
        choices: [
          { label: "A", text: "about 16.1 cm, like the white-light 12-hour result." },
          { label: "B", text: "well below 16.1 cm, because green light produced far less growth than white in Experiment 1." },
          { label: "C", text: "greater than 18.0 cm." },
          { label: "D", text: "impossible to estimate from the data." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 showed green light produced only 4.6 cm versus 16.1 cm for white under the same 12-hour, 24 °C conditions. A green-light 12-hour trial should therefore give growth well below the white-light value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A student runs a trial under white light for 16 hours per day at 30 °C. Based on Experiments 2 and 3, this trial differs from the standard Experiment 1 conditions in:",
        choices: [
          { label: "A", text: "both the daily light duration and the temperature" },
          { label: "B", text: "the light color only" },
          { label: "C", text: "the soil type only" },
          { label: "D", text: "no variables at all" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1's standard conditions were white light, 24 °C, and (per Experiment 2) 12 hours of light. A 16-hour, 30 °C trial differs in both the daily light duration and the temperature.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that bean seedlings grow best at the warmest temperatures. Do the results of Experiment 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; growth was greatest at 36 °C, the warmest temperature tested." },
          { label: "B", text: "No; growth peaked at 24 °C and was much lower at the warmest temperature, 36 °C." },
          { label: "C", text: "Yes; growth rose steadily as temperature increased." },
          { label: "D", text: "No; temperature had no effect on growth." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 3 shows growth peaking at 16.1 cm at 24 °C and falling to just 5.8 cm at 36 °C. Growth is best at a moderate temperature, not the warmest, so the hypothesis is not supported.",
      },
    ],
  },

  // =========================================================================
  // P7 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Atmospheric Conditions with Altitude",
    passageType: "data_representation",
    body: `A weather balloon carried instruments upward through the atmosphere, recording conditions at five altitudes. Air pressure is given in kilopascals (kPa).

Table 1: Atmospheric conditions versus altitude.

Altitude (km) | Air temperature (°C) | Air pressure (kPa) | Water vapor (g/m3)
--------------|----------------------|--------------------|--------------------
0             | 15                   | 101                | 9.4
2             | 2                    | 79                 | 5.1
4             | -11                  | 62                 | 2.3
6             | -24                  | 47                 | 0.8
8             | -37                  | 36                 | 0.2

Figure 1 (described): A line graph plots air temperature (°C, vertical axis) against altitude (km, horizontal axis). The line falls in a straight, steady manner from 15 °C at the surface to -37 °C at 8 km.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the air pressure at an altitude of 4 km?",
        choices: [
          { label: "A", text: "36 kPa" },
          { label: "B", text: "47 kPa" },
          { label: "C", text: "62 kPa" },
          { label: "D", text: "79 kPa" },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the air pressure column at the 4 km row gives 62 kPa. 47 kPa is the 6 km value and 79 kPa is the 2 km value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, at which altitude was the water vapor content the lowest?",
        choices: [
          { label: "A", text: "0 km" },
          { label: "B", text: "2 km" },
          { label: "C", text: "6 km" },
          { label: "D", text: "8 km" },
        ],
        correctAnswer: "D",
        explanation:
          "Water vapor content drops from 9.4 g/m3 at the surface to 0.2 g/m3 at 8 km — the lowest value in the column.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1, as altitude increased, air temperature and air pressure:",
        choices: [
          { label: "A", text: "both increased." },
          { label: "B", text: "both decreased." },
          { label: "C", text: "increased and decreased, respectively." },
          { label: "D", text: "decreased and increased, respectively." },
        ],
        correctAnswer: "B",
        explanation:
          "From 0 to 8 km, temperature falls from 15 °C to -37 °C and pressure falls from 101 kPa to 36 kPa. Both variables decrease with altitude.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Figure 1, for each 2 km gain in altitude the air temperature dropped by about:",
        choices: [
          { label: "A", text: "2 °C" },
          { label: "B", text: "7 °C" },
          { label: "C", text: "13 °C" },
          { label: "D", text: "37 °C" },
        ],
        correctAnswer: "C",
        explanation:
          "Temperature goes 15, 2, -11, -24, -37 °C at 2 km intervals — a steady drop of 13 °C for each 2 km gain.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the air pressure at an altitude of 5 km would most likely be:",
        choices: [
          { label: "A", text: "less than 36 kPa" },
          { label: "B", text: "between 47 and 62 kPa" },
          { label: "C", text: "between 79 and 101 kPa" },
          { label: "D", text: "greater than 101 kPa" },
        ],
        correctAnswer: "B",
        explanation:
          "An altitude of 5 km lies between 4 km (62 kPa) and 6 km (47 kPa). The pressure should fall between those two values.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the water vapor content at an altitude of 3 km would most likely be:",
        choices: [
          { label: "A", text: "less than 0.2 g/m3" },
          { label: "B", text: "between 2.3 and 5.1 g/m3" },
          { label: "C", text: "between 5.1 and 9.4 g/m3" },
          { label: "D", text: "greater than 9.4 g/m3" },
        ],
        correctAnswer: "B",
        explanation:
          "An altitude of 3 km lies between 2 km (5.1 g/m3) and 4 km (2.3 g/m3). The water vapor content should fall between those two values.",
      },
    ],
  },

  // =========================================================================
  // P8 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Battery Drain in a Small Motor",
    passageType: "research_summary",
    body: `An electronics class studied how a small electric motor drains a battery. They measured run time — the number of minutes the motor ran before the battery could no longer turn it.

Experiment 1
Students ran identical motors using batteries of five different voltages. Each motor lifted the same 100 g load. The run time was recorded.

Table 1
Battery voltage (V) | Run time (min)
--------------------|---------------
1.5                 | 95
3.0                 | 68
4.5                 | 50
6.0                 | 39
9.0                 | 24

Experiment 2
Using a 3.0 V battery, students varied the mass of the load lifted by the motor. All other conditions matched Experiment 1.

Table 2
Load mass (g) | Run time (min)
--------------|---------------
50            | 102
100           | 68
200           | 41
400           | 23
800           | 12

Experiment 3
Using a 3.0 V battery and a 100 g load, students ran the motor at five air temperatures. All other conditions matched Experiment 1.

Table 3
Air temperature (°C) | Run time (min)
---------------------|---------------
0                    | 44
10                   | 58
20                   | 68
30                   | 71
40                   | 72`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "A student hypothesizes that using a higher-voltage battery shortens the motor's run time. Do the results of Experiment 1 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; run time fell steadily from 95 min at 1.5 V to 24 min at 9.0 V." },
          { label: "B", text: "No; run time rose as voltage increased." },
          { label: "C", text: "No; run time was unaffected by voltage." },
          { label: "D", text: "Yes; run time was longest at the highest voltage." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 1 shows run time falling steadily (95, 68, 50, 39, 24 min) as battery voltage rises from 1.5 V to 9.0 V, which supports the hypothesis that a higher voltage shortens run time.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, as battery voltage increased, the run time:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "B",
        explanation:
          "Run time falls from 95 min at 1.5 V to 24 min at 9.0 V — a steady decrease as voltage rises.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, why did the students have every motor lift the same 100 g load?",
        choices: [
          { label: "A", text: "To keep load mass from affecting the results, so run-time differences could be attributed to voltage" },
          { label: "B", text: "Because motors can lift only 100 g loads" },
          { label: "C", text: "To change the load with each trial" },
          { label: "D", text: "Because heavier loads damage the battery" },
        ],
        correctAnswer: "A",
        explanation:
          "Load mass also affects run time. Holding it at 100 g for every trial keeps it from confounding the result, so any change in run time can be attributed to battery voltage.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which variable was changed in Experiment 2 but held constant in Experiment 3?",
        choices: [
          { label: "A", text: "Load mass" },
          { label: "B", text: "Battery voltage" },
          { label: "C", text: "Air temperature" },
          { label: "D", text: "Type of motor" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 varied load mass (50-800 g). Experiment 3 fixed the load at 100 g and varied air temperature instead.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "Suppose students run a new trial with a 3.0 V battery lifting a 200 g load at 0 °C. Based on Experiments 2 and 3, the run time would most likely be:",
        choices: [
          { label: "A", text: "less than the 41 min recorded for a 200 g load at 20 °C, because the colder temperature shortens run time" },
          { label: "B", text: "exactly 41 min, the Experiment 2 value for a 200 g load" },
          { label: "C", text: "greater than 102 min" },
          { label: "D", text: "0 min, because the motor cannot run in the cold" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2's 41 min for a 200 g load was measured at 20 °C. Experiment 3 shows run time falls from 68 min at 20 °C to 44 min at 0 °C for a 100 g load. A 200 g load at 0 °C should therefore run less than 41 min.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student claims that lowering the air temperature always shortens the motor's run time. Do the results of Experiment 3 fully support this claim?",
        choices: [
          { label: "A", text: "Yes; run time fell continuously as temperature dropped." },
          { label: "B", text: "Only partly; run time fell at low temperatures but barely changed between 30 °C and 40 °C." },
          { label: "C", text: "No; run time rose as temperature dropped." },
          { label: "D", text: "No; temperature had no effect on run time." },
        ],
        correctAnswer: "B",
        explanation:
          "Run time rises from 44 min at 0 °C to 68 min at 20 °C, supporting the claim at low temperatures. But from 30 °C (71 min) to 40 °C (72 min) it barely changes, so the claim that temperature 'always' matters is only partly supported.",
      },
    ],
  },

  // =========================================================================
  // P9 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Half-Life Decay of a Radioactive Sample",
    passageType: "data_representation",
    body: `A physics lab tracked a radioactive isotope as it decayed. The activity of the sample — the rate at which it emits particles — was measured in counts per minute (cpm) at regular time intervals.

Table 1: Sample activity over time.

Time (hours) | Activity (cpm)
-------------|---------------
0            | 6,400
3            | 3,200
6            | 1,600
9            | 800
12           | 400
15           | 200

Table 2: Initial activity (at time 0) of three different samples of the same isotope.

Sample | Initial mass (mg) | Initial activity (cpm)
-------|-------------------|------------------------
X      | 1.0               | 1,600
Y      | 2.0               | 3,200
Z      | 4.0               | 6,400

Figure 1 (described): A curve plots activity (vertical axis) against time (horizontal axis) for the Table 1 data. The curve falls steeply at first and then more gradually, approaching but never reaching zero.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the activity of the sample at 6 hours?",
        choices: [
          { label: "A", text: "800 cpm" },
          { label: "B", text: "1,600 cpm" },
          { label: "C", text: "3,200 cpm" },
          { label: "D", text: "6,400 cpm" },
        ],
        correctAnswer: "B",
        explanation:
          "Reading the 6-hour row of Table 1 gives an activity of 1,600 cpm. 800 cpm is the 9-hour value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 2, which sample had the greatest initial mass?",
        choices: [
          { label: "A", text: "Sample X" },
          { label: "B", text: "Sample Y" },
          { label: "C", text: "Sample Z" },
          { label: "D", text: "All three had equal mass." },
        ],
        correctAnswer: "C",
        explanation:
          "Table 2 lists initial masses of 1.0, 2.0, and 4.0 mg for Samples X, Y, and Z. Sample Z's 4.0 mg is the greatest.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1, the time required for the activity to fall to half its value is about:",
        choices: [
          { label: "A", text: "1.5 hours" },
          { label: "B", text: "3 hours" },
          { label: "C", text: "6 hours" },
          { label: "D", text: "12 hours" },
        ],
        correctAnswer: "B",
        explanation:
          "Activity halves every 3 hours: 6,400→3,200→1,600→800→400→200 at 3-hour intervals. The half-life is about 3 hours.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 2, as the initial mass of a sample increased, its initial activity:",
        choices: [
          { label: "A", text: "increased in direct proportion to the mass." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "changed with no clear pattern." },
        ],
        correctAnswer: "A",
        explanation:
          "Doubling the mass (1.0→2.0→4.0 mg) doubles the activity (1,600→3,200→6,400 cpm). Activity rises in direct proportion to mass.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the activity at 18 hours would most likely be:",
        choices: [
          { label: "A", text: "400 cpm" },
          { label: "B", text: "200 cpm" },
          { label: "C", text: "100 cpm" },
          { label: "D", text: "0 cpm" },
        ],
        correctAnswer: "C",
        explanation:
          "Activity halves every 3 hours. From 200 cpm at 15 hours, one more half-life gives 100 cpm at 18 hours.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A new sample of this isotope has an initial mass of 3.0 mg. Based on Table 2, its initial activity would most likely be:",
        choices: [
          { label: "A", text: "1,600 cpm" },
          { label: "B", text: "between 3,200 and 6,400 cpm" },
          { label: "C", text: "exactly 6,400 cpm" },
          { label: "D", text: "greater than 6,400 cpm" },
        ],
        correctAnswer: "B",
        explanation:
          "A 3.0 mg mass lies between Sample Y (2.0 mg, 3,200 cpm) and Sample Z (4.0 mg, 6,400 cpm). Since activity is proportional to mass, the value should fall between 3,200 and 6,400 cpm (about 4,800 cpm).",
      },
    ],
  },

  // =========================================================================
  // P10 — research_summary — 7 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x2
  // interp: data_relationships x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Mealworm Movement and Surface Texture",
    passageType: "research_summary",
    body: `Students studied how mealworm beetle larvae respond to their surroundings. They timed how long a larva took to cross a 30 cm track and counted direction changes.

Experiment 1
Students placed one larva at a time at the start of tracks lined with five different surfaces. The track was kept dark and at 25 °C. They recorded the average crossing time for 20 larvae per surface.

Table 1
Track surface | Avg. crossing time (s)
--------------|------------------------
Glass         | 88
Smooth paper  | 62
Sandpaper     | 41
Cloth         | 35
Cork          | 33

Experiment 2
Using the sandpaper track, students varied the air temperature and recorded the average crossing time for 20 larvae per temperature.

Table 2
Temperature (°C) | Avg. crossing time (s)
-----------------|------------------------
10               | 96
18               | 58
25               | 41
32               | 30
38               | 36

Experiment 3
Using the sandpaper track at 25 °C, students offered a light at one end of the track and recorded the percentage of 20 larvae that moved toward the light versus away from it.

Table 3
Light brightness (lux) | Moved toward light (%) | Moved away (%)
-----------------------|------------------------|----------------
0                      | 50                     | 50
50                     | 35                     | 65
200                    | 20                     | 80
800                    | 10                     | 90`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In each part of Experiment 1, the students timed 20 larvae on a surface and used the average crossing time. Recording an average of 20 larvae rather than timing a single larva mainly served to:",
        choices: [
          { label: "A", text: "reduce the effect of differences between individual larvae, giving a more reliable crossing time" },
          { label: "B", text: "change the track surface being tested" },
          { label: "C", text: "raise the air temperature of the track" },
          { label: "D", text: "increase the length of the track" },
        ],
        correctAnswer: "A",
        explanation:
          "Individual larvae vary in how fast they move. Averaging 20 larvae per surface reduces the influence of any one unusual larva, producing a more reliable measure of the crossing time for that surface.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 3, as light brightness increased, the percentage of larvae moving away from the light:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed at 50%." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 3 shows 50%, 65%, 80%, and 90% moving away as brightness rises from 0 to 800 lux — a steady increase.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, why was the track kept dark for every surface tested?",
        choices: [
          { label: "A", text: "To keep light from influencing larva movement, so only surface texture differed" },
          { label: "B", text: "Because larvae cannot move in light" },
          { label: "C", text: "To raise the track temperature" },
          { label: "D", text: "To make the larvae cross faster" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 3 shows light strongly affects larva direction. Keeping Experiment 1 dark removes light as a factor, so any difference in crossing time is due to surface texture alone.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that mealworm larvae are attracted to light. Do the results of Experiment 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; most larvae moved toward the light at every brightness." },
          { label: "B", text: "No; as brightness increased, fewer larvae moved toward the light and more moved away." },
          { label: "C", text: "Yes; exactly 50% moved toward the light at all brightness levels." },
          { label: "D", text: "No; light brightness had no effect on larva direction." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 3 shows the percentage moving toward the light dropping from 50% to 10% as brightness rises. Larvae increasingly avoid the light, so the hypothesis of attraction is not supported.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that mealworm larvae cross fastest at the warmest temperatures. Do the results of Experiment 2 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; crossing time was shortest at 38 °C, the warmest temperature." },
          { label: "B", text: "No; crossing time was shortest at 32 °C and rose again at the warmest temperature, 38 °C." },
          { label: "C", text: "Yes; crossing time fell steadily as temperature rose." },
          { label: "D", text: "No; temperature had no effect on crossing time." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 2 shows crossing time reaching its minimum of 30 s at 32 °C, then rising to 36 s at 38 °C. The fastest crossing is at a moderate-warm temperature, not the warmest, so the hypothesis is not supported.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Experiments 1 and 2 both measured crossing time. What did Experiment 2 change that Experiment 1 held constant?",
        choices: [
          { label: "A", text: "Air temperature" },
          { label: "B", text: "Track surface" },
          { label: "C", text: "Track length" },
          { label: "D", text: "Number of larvae per group" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 held the temperature at 25 °C and varied the track surface. Experiment 2 fixed the surface as sandpaper and varied air temperature (10-38 °C).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "Suppose students run a new trial using the glass track at 25 °C with a bright 800 lux light at one end. Based on Experiments 1 and 3, the larvae would most likely:",
        choices: [
          { label: "A", text: "cross quickly and mostly move toward the light." },
          { label: "B", text: "cross slowly compared with sandpaper and mostly move away from the light." },
          { label: "C", text: "cross at the same speed as on cork and ignore the light." },
          { label: "D", text: "refuse to move at all." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 shows glass produced the slowest crossing (88 s versus 41 s on sandpaper), and Experiment 3 shows 90% of larvae move away from an 800 lux light. Combining both, the larvae should cross slowly and mostly move away from the light.",
      },
    ],
  },

  // =========================================================================
  // P11 — conflicting_viewpoints — 7 Qs
  // models: model_comprehension x3, model_evaluation x2, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Two Explanations for the Source of Cave Stalactites",
    passageType: "conflicting_viewpoints",
    body: `A limestone cave contains thousands of stalactites — icicle-shaped mineral deposits hanging from the ceiling. Two geologists explain how the cave's stalactites formed.

Background information both geologists accept:
- Stalactites are made almost entirely of the mineral calcite.
- The rock above the cave is limestone, which is also made of calcite.
- Rainwater seeping through soil picks up carbon dioxide and becomes slightly acidic.
- Slightly acidic water can dissolve calcite from limestone.
- Drip water sampled inside the cave contains dissolved calcite.

Geologist 1 (Seepage-Deposition view)
Stalactites form slowly as acidic rainwater seeps down through cracks in the limestone above the cave. The water dissolves calcite from the limestone on its way down. When a drop reaches the cave ceiling and is exposed to cave air, some carbon dioxide escapes from the water, making it less acidic. The water can then no longer hold all its dissolved calcite, so a thin film of calcite is left behind at the drip point. Over thousands of years, layer upon layer builds a stalactite. This view predicts that stalactites grow faster in wetter climates, because more seeping water delivers more calcite.

Geologist 2 (Flood-Sediment view)
Stalactites formed long ago when the cave was repeatedly flooded by an underground river carrying calcite-rich sediment. As floodwater filled the cave and then slowly drained, calcite sediment settled and clung to the ceiling, gradually shaping the hanging deposits. The cave's drip water today simply seeps through these existing deposits and is not building them. This view predicts that stalactites stopped growing once the underground river changed course and the floods ended, regardless of present-day climate.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Geologist 1, calcite is left behind at the drip point because:",
        choices: [
          { label: "A", text: "the cave is repeatedly flooded by an underground river." },
          { label: "B", text: "carbon dioxide escapes from the drop, so the water can no longer hold all its dissolved calcite." },
          { label: "C", text: "the limestone above the cave is pushed downward." },
          { label: "D", text: "cave air adds calcite to the water." },
        ],
        correctAnswer: "B",
        explanation:
          "Geologist 1 states that when carbon dioxide escapes from a drop exposed to cave air, the water becomes less acidic and can no longer hold all its dissolved calcite, leaving a film behind.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Geologist 2, the cave's present-day drip water:",
        choices: [
          { label: "A", text: "is the main builder of the stalactites." },
          { label: "B", text: "dissolves the stalactites away." },
          { label: "C", text: "merely seeps through deposits that already exist and is not building them." },
          { label: "D", text: "carries flood sediment into the cave." },
        ],
        correctAnswer: "C",
        explanation:
          "Geologist 2 states that today's drip water simply seeps through existing deposits and is not building them; the stalactites were formed earlier by floods.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "The two geologists most clearly disagree about:",
        choices: [
          { label: "A", text: "whether stalactites are made of calcite." },
          { label: "B", text: "whether the rock above the cave is limestone." },
          { label: "C", text: "whether stalactites are still growing today." },
          { label: "D", text: "whether rainwater can become slightly acidic." },
        ],
        correctAnswer: "C",
        explanation:
          "Geologist 1 describes ongoing, slow growth from seeping water, while Geologist 2 says growth stopped once the floods ended. Whether stalactites are still growing is their core disagreement. The other points are shared background both accept.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Researchers place a clean glass plate beneath a dripping stalactite and find a thin calcite layer on it after two years. This finding most directly:",
        choices: [
          { label: "A", text: "supports Geologist 1, because it shows calcite is still being deposited from drip water today." },
          { label: "B", text: "supports Geologist 2, because it shows the cave was once flooded." },
          { label: "C", text: "weakens Geologist 1's view, because the plate was clean to start." },
          { label: "D", text: "has no bearing on either view." },
        ],
        correctAnswer: "A",
        explanation:
          "Geologist 1 holds that drip water deposits calcite today; Geologist 2 holds that growth has stopped. A fresh calcite layer forming on a clean plate shows present-day deposition, supporting Geologist 1 and undercutting Geologist 2.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Which background fact is used by Geologist 1's explanation but is least essential to Geologist 2's?",
        choices: [
          { label: "A", text: "Stalactites are made of calcite." },
          { label: "B", text: "Rainwater seeping through soil becomes slightly acidic and can dissolve calcite." },
          { label: "C", text: "The rock above the cave is limestone." },
          { label: "D", text: "Drip water in the cave contains dissolved calcite." },
        ],
        correctAnswer: "B",
        explanation:
          "Geologist 1's mechanism depends on acidic seeping water dissolving calcite and later depositing it. Geologist 2's flood-sediment mechanism relies on calcite-rich floodwater settling out, not on acidic seepage, so the acidity fact is least essential to that view.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "If Geologist 1's view is correct, what would most likely be observed when comparing two similar caves, one in a wet climate and one in a dry climate?",
        choices: [
          { label: "A", text: "Stalactites would grow faster in the wet-climate cave." },
          { label: "B", text: "Stalactites would grow faster in the dry-climate cave." },
          { label: "C", text: "Neither cave's stalactites would be growing at all." },
          { label: "D", text: "Stalactites would grow at exactly the same rate in both caves." },
        ],
        correctAnswer: "A",
        explanation:
          "Geologist 1 explicitly predicts that stalactites grow faster in wetter climates because more seeping water delivers more calcite. The wet-climate cave should show faster growth.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Suppose careful measurements show this cave's stalactites have not grown at all over the past 50 years, even though the region's climate is wet. This outcome would best be explained by:",
        choices: [
          { label: "A", text: "Geologist 1's view, because wet climates always speed stalactite growth." },
          { label: "B", text: "Geologist 2's view, because growth has stopped despite a wet climate, as expected if stalactites formed only during past floods." },
          { label: "C", text: "neither view, because climate cannot affect calcite." },
          { label: "D", text: "both views equally well." },
        ],
        correctAnswer: "B",
        explanation:
          "Geologist 1 predicts ongoing growth, faster in wet climates, so no growth in a wet climate contradicts that view. Geologist 2 predicts growth ended with the floods regardless of climate, which matches the observed lack of growth.",
      },
    ],
  },

  // =========================================================================
  // P12 — data_representation — 6 Qs
  // models: model_comprehension x2, model_evaluation x2, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "A Model of Density and Floating",
    passageType: "data_representation",
    body: `A student used a simple model to predict whether objects float in liquids. In the model, density is the mass of a material divided by its volume, given in grams per milliliter (g/mL). The model's rule is: an object floats in a liquid only if the object's density is less than the liquid's density; otherwise it sinks.

Table 1: Density of five liquids at 20 °C.

Liquid          | Density (g/mL)
----------------|---------------
Corn syrup      | 1.38
Glycerin        | 1.26
Water           | 1.00
Vegetable oil   | 0.92
Rubbing alcohol | 0.79

Table 2: Model prediction for a plastic bead of density 0.95 g/mL placed in each liquid, compared with the observed result.

Liquid          | Model predicts | Observed
----------------|----------------|----------
Corn syrup      | Floats         | Floats
Glycerin        | Floats         | Floats
Water           | Floats         | Floats
Vegetable oil   | Sinks          | Sinks
Rubbing alcohol | Sinks          | Sinks`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "According to the model, an object floats in a liquid only if the object's density is:",
        choices: [
          { label: "A", text: "less than the liquid's density." },
          { label: "B", text: "greater than the liquid's density." },
          { label: "C", text: "exactly equal to 1.00 g/mL." },
          { label: "D", text: "greater than 1.38 g/mL." },
        ],
        correctAnswer: "A",
        explanation:
          "The passage states the model's rule: an object floats only if the object's density is less than the liquid's density.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 2, in which liquids did the model predict the 0.95 g/mL bead would sink?",
        choices: [
          { label: "A", text: "Corn syrup and glycerin" },
          { label: "B", text: "Water and glycerin" },
          { label: "C", text: "Vegetable oil and rubbing alcohol" },
          { label: "D", text: "Corn syrup and water" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 2 shows the model predicting 'Sinks' only for vegetable oil and rubbing alcohol, the two liquids less dense than the bead.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "How well did the model's predictions match the observed results in Table 2?",
        choices: [
          { label: "A", text: "The model matched the observed result for all five liquids." },
          { label: "B", text: "The model matched for only the three densest liquids." },
          { label: "C", text: "The model failed for every liquid." },
          { label: "D", text: "The model matched only for rubbing alcohol." },
        ],
        correctAnswer: "A",
        explanation:
          "In Table 2 the 'Model predicts' and 'Observed' columns are identical for all five liquids, so the model correctly predicted every result.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Using the model, a new liquid has a density of 1.10 g/mL. The 0.95 g/mL bead placed in this liquid would be predicted to:",
        choices: [
          { label: "A", text: "float, because 1.10 g/mL is greater than the bead's 0.95 g/mL." },
          { label: "B", text: "sink, because 1.10 g/mL is greater than the bead's 0.95 g/mL." },
          { label: "C", text: "float, because 1.10 g/mL is less than the bead's 0.95 g/mL." },
          { label: "D", text: "neither float nor sink." },
        ],
        correctAnswer: "A",
        explanation:
          "The model says an object floats when the liquid is denser than the object. A 1.10 g/mL liquid is denser than the bead's 0.95 g/mL, so the model predicts the bead floats.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Using the model and Table 1, if corn syrup, water, and vegetable oil are poured into one jar without mixing, the layers from top to bottom would be:",
        choices: [
          { label: "A", text: "corn syrup, water, vegetable oil." },
          { label: "B", text: "vegetable oil, water, corn syrup." },
          { label: "C", text: "water, corn syrup, vegetable oil." },
          { label: "D", text: "vegetable oil, corn syrup, water." },
        ],
        correctAnswer: "B",
        explanation:
          "By the model, less dense liquids float above denser ones. Vegetable oil (0.92) is least dense, water (1.00) intermediate, and corn syrup (1.38) densest, so top to bottom is oil, water, corn syrup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A student finds that a hollow steel ball, although made of a material far denser than water, floats in water. This observation indicates that the model:",
        choices: [
          { label: "A", text: "is wrong because steel cannot float under any circumstances." },
          { label: "B", text: "has a limitation: it uses the material's density but ignores hollow shapes, whose overall density (including trapped air) can be lower." },
          { label: "C", text: "proves water is denser than corn syrup." },
          { label: "D", text: "correctly predicted the steel ball would float." },
        ],
        correctAnswer: "B",
        explanation:
          "The model compares the material's density to the liquid's. A hollow ball traps air, so its overall density is lower than the steel itself. The model ignores shape, so this case reveals a limitation, not that the model is entirely wrong.",
      },
    ],
  },

  // =========================================================================
  // P13 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Antibiotic Effectiveness Against Bacteria",
    passageType: "research_summary",
    body: `Microbiology students tested how well antibiotics stop bacterial growth. They placed a small paper disk soaked in antibiotic on a dish covered with bacteria. After 24 hours a clear ring with no bacteria formed around each disk; the diameter of this ring (the "zone of inhibition") indicates how effective the antibiotic is — a larger ring means a more effective antibiotic.

Experiment 1
Students tested four antibiotics against one bacterial species, using disks of equal size soaked in equal volumes of antibiotic, all dishes kept at 37 °C. They measured the zone of inhibition.

Table 1
Antibiotic | Zone of inhibition (mm)
-----------|------------------------
W          | 22
X          | 9
Y          | 31
Z          | 16

Experiment 2
Using Antibiotic Y (the most effective from Experiment 1), students varied the concentration of antibiotic soaked into the disk. All other conditions matched Experiment 1.

Table 2
Antibiotic concentration (mg/mL) | Zone of inhibition (mm)
---------------------------------|------------------------
2                                | 14
4                                | 22
8                                | 31
16                               | 37
32                               | 40

Experiment 3
Using Antibiotic Y at 8 mg/mL, students tested it against four different bacterial species. All other conditions matched Experiment 1.

Table 3
Bacterial species | Zone of inhibition (mm)
------------------|------------------------
Species 1         | 31
Species 2         | 6
Species 3         | 25
Species 4         | 2`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "In Experiment 1, why were the disks all the same size and soaked in equal volumes?",
        choices: [
          { label: "A", text: "So the type of antibiotic would be the only factor differing between disks" },
          { label: "B", text: "Because larger disks cannot hold antibiotic" },
          { label: "C", text: "To change the bacterial species being tested" },
          { label: "D", text: "To keep the dishes at 37 °C" },
        ],
        correctAnswer: "A",
        explanation:
          "Disk size and soaked volume both affect how much antibiotic is delivered. Holding them constant ensures the zone differences are due to the type of antibiotic alone.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 2, which variable was deliberately changed?",
        choices: [
          { label: "A", text: "The concentration of Antibiotic Y on the disk" },
          { label: "B", text: "The bacterial species" },
          { label: "C", text: "The temperature of the dishes" },
          { label: "D", text: "The size of the disk" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 used Antibiotic Y against one species at 37 °C with equal-size disks, changing only the antibiotic concentration. Concentration is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 2, as antibiotic concentration increased, the zone of inhibition:",
        choices: [
          { label: "A", text: "increased, but by a smaller amount with each step." },
          { label: "B", text: "decreased steadily." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "The zone goes 14, 22, 31, 37, 40 mm. The increases for each doubling of concentration are +8, +9, +6, +3 — still rising, but by progressively smaller amounts at the high end.",
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
          { label: "A", text: "Experiment 3 tested different bacterial species, whereas Experiment 2 varied antibiotic concentration." },
          { label: "B", text: "Experiment 3 varied antibiotic concentration, whereas Experiment 2 tested different species." },
          { label: "C", text: "Experiment 3 used a different antibiotic than Experiment 2." },
          { label: "D", text: "Experiment 3 used larger disks than Experiment 2." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 varied the concentration of Antibiotic Y against one species. Experiment 3 fixed the concentration at 8 mg/mL and tested four different bacterial species.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "Suppose students test Antibiotic Y at 16 mg/mL against Species 2. Based on Experiments 2 and 3, the zone of inhibition would most likely be:",
        choices: [
          { label: "A", text: "larger than the 6 mm seen for Species 2 at 8 mg/mL, but still small because Species 2 resists Antibiotic Y" },
          { label: "B", text: "exactly 37 mm, the Experiment 2 value at 16 mg/mL" },
          { label: "C", text: "larger than 40 mm" },
          { label: "D", text: "0 mm, because antibiotics never affect Species 2" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2's 37 mm at 16 mg/mL used the susceptible species; Experiment 3 shows Species 2 yields only a tiny 6 mm zone at 8 mg/mL. A higher concentration should enlarge that zone somewhat, but it would stay small because Species 2 resists Antibiotic Y.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that Antibiotic Y is highly effective against all bacteria. Do the results of Experiment 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; every species produced a zone larger than 25 mm." },
          { label: "B", text: "No; Species 2 and Species 4 produced very small zones (6 and 2 mm), showing Y is not effective against them." },
          { label: "C", text: "Yes; all four species produced the same zone size." },
          { label: "D", text: "No; Antibiotic Y produced no zone for any species." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 3 shows large zones for Species 1 (31 mm) and Species 3 (25 mm) but tiny zones for Species 2 (6 mm) and Species 4 (2 mm). Antibiotic Y is not effective against all bacteria, so the hypothesis is not supported.",
      },
    ],
  },

  // =========================================================================
  // P14 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Earthquake Wave Arrival Times",
    passageType: "data_representation",
    body: `When an earthquake occurs, it sends out two main types of waves. P-waves travel fastest and arrive first; S-waves travel more slowly and arrive later. The gap between the two arrivals grows with distance from the earthquake's origin, so it can be used to locate the quake.

Table 1: Wave arrival times recorded at five stations after one earthquake.

Station | Distance from origin (km) | P-wave arrival (s) | S-wave arrival (s)
--------|---------------------------|--------------------|--------------------
A       | 100                       | 13                 | 23
B       | 200                       | 26                 | 46
C       | 300                       | 39                 | 69
D       | 400                       | 52                 | 92
E       | 500                       | 65                 | 115

Figure 1 (described): A line graph plots arrival time (s, vertical axis) against distance from origin (km, horizontal axis). Two straight lines rise from the origin: the lower line is the P-wave, the steeper upper line is the S-wave. The vertical gap between the lines widens with distance.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what was the P-wave arrival time at Station C?",
        choices: [
          { label: "A", text: "26 s" },
          { label: "B", text: "39 s" },
          { label: "C", text: "52 s" },
          { label: "D", text: "69 s" },
        ],
        correctAnswer: "B",
        explanation:
          "Reading the P-wave column at the Station C row gives 39 s. 69 s is the S-wave arrival at Station C.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, which station was farthest from the earthquake's origin?",
        choices: [
          { label: "A", text: "Station A" },
          { label: "B", text: "Station C" },
          { label: "C", text: "Station D" },
          { label: "D", text: "Station E" },
        ],
        correctAnswer: "D",
        explanation:
          "Table 1 lists distances of 100, 200, 300, 400, and 500 km. Station E, at 500 km, is the farthest.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, as distance from the origin increased, the gap between the S-wave and P-wave arrival times:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "The S-minus-P gaps are 10, 20, 30, 40, and 50 s at Stations A through E. The gap grows steadily with distance.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Table 1, the S-minus-P time gap increased by about how much for each additional 100 km of distance?",
        choices: [
          { label: "A", text: "5 s" },
          { label: "B", text: "10 s" },
          { label: "C", text: "13 s" },
          { label: "D", text: "20 s" },
        ],
        correctAnswer: "B",
        explanation:
          "The gaps are 10, 20, 30, 40, 50 s at 100 km intervals — a steady increase of 10 s per 100 km.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "At a sixth station, the S-wave arrived 35 s after the P-wave. Based on Table 1, this station was most likely located at a distance of about:",
        choices: [
          { label: "A", text: "150 km" },
          { label: "B", text: "250 km" },
          { label: "C", text: "350 km" },
          { label: "D", text: "450 km" },
        ],
        correctAnswer: "C",
        explanation:
          "The S-minus-P gap is 30 s at 300 km and 40 s at 400 km. A 35 s gap lies halfway between, indicating a distance of about 350 km.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the P-wave arrival time at a station 250 km from the origin would most likely be:",
        choices: [
          { label: "A", text: "less than 13 s" },
          { label: "B", text: "between 26 and 39 s" },
          { label: "C", text: "between 52 and 65 s" },
          { label: "D", text: "greater than 65 s" },
        ],
        correctAnswer: "B",
        explanation:
          "A distance of 250 km lies between Station B (200 km, 26 s) and Station C (300 km, 39 s). The P-wave arrival should fall between those values.",
      },
    ],
  },

  // =========================================================================
  // P15 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x1, hypothesis_testing x2
  // interp: data_relationships x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Bouncing Height of a Rubber Ball",
    passageType: "research_summary",
    body: `Students studied how high a rubber ball rebounds after being dropped. They measured rebound height as a percentage of the drop height — for example, a ball dropped from 100 cm that rebounds to 60 cm has a 60% rebound.

Experiment 1
Students dropped the same rubber ball onto five different floor surfaces from a fixed height of 100 cm at 22 °C. They recorded the rebound percentage, averaging five drops per surface.

Table 1
Floor surface | Rebound (%)
--------------|------------
Concrete      | 76
Hardwood      | 71
Tile          | 73
Carpet        | 48
Foam mat      | 29

Experiment 2
Dropping the same ball onto concrete, students varied the drop height. All other conditions matched Experiment 1.

Table 2
Drop height (cm) | Rebound (%)
-----------------|------------
50               | 77
100              | 76
150              | 76
200              | 75

Experiment 3
Dropping the ball onto concrete from 100 cm, students changed the ball's temperature before each drop. All other conditions matched Experiment 1.

Table 3
Ball temperature (°C) | Rebound (%)
----------------------|------------
0                     | 52
10                    | 64
22                    | 76
35                    | 84
50                    | 88`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which variable was deliberately changed between trials?",
        choices: [
          { label: "A", text: "The floor surface" },
          { label: "B", text: "The drop height" },
          { label: "C", text: "The ball's temperature" },
          { label: "D", text: "The type of ball" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 held drop height at 100 cm, temperature at 22 °C, and used the same ball, varying only the floor surface. Surface is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that the rebound percentage depends strongly on the drop height. Do the results of Experiment 2 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; rebound percentage doubled as drop height increased." },
          { label: "B", text: "No; rebound percentage stayed nearly constant (75-77%) across all drop heights." },
          { label: "C", text: "Yes; rebound percentage fell sharply as drop height increased." },
          { label: "D", text: "No; the ball did not rebound at any drop height." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 2 shows rebound percentages of 77, 76, 76, and 75 as drop height rose from 50 to 200 cm — essentially unchanged. The data do not support a strong dependence on drop height.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 3, as the ball's temperature increased, the rebound percentage:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 3 shows rebound percentages of 52, 64, 76, 84, 88 as temperature rises from 0 to 50 °C — a steady increase.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Why did the students average five drops for each surface in Experiment 1?",
        choices: [
          { label: "A", text: "To change the drop height five times" },
          { label: "B", text: "To reduce the effect of small random errors and get a more reliable rebound value" },
          { label: "C", text: "To test five different balls per surface" },
          { label: "D", text: "To warm the ball before each drop" },
        ],
        correctAnswer: "B",
        explanation:
          "Averaging several repeated drops reduces the impact of random measurement variation in any single drop, producing a more reliable rebound percentage for each surface.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Experiments 2 and 3 both used the concrete floor. Which statement best describes how they differed and what they showed?",
        choices: [
          { label: "A", text: "Experiment 2 varied drop height and showed little effect; Experiment 3 varied ball temperature and showed a clear effect." },
          { label: "B", text: "Experiment 2 varied ball temperature; Experiment 3 varied drop height; both showed a clear effect." },
          { label: "C", text: "Both varied drop height, and both showed little effect." },
          { label: "D", text: "Both varied ball temperature, and neither showed an effect." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 changed drop height (50-200 cm) and the rebound barely moved (75-77%). Experiment 3 changed ball temperature (0-50 °C) and the rebound climbed from 52% to 88%. Temperature mattered; drop height did not.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "A student claims that a warmer ball will rebound higher on any surface. Experiment 3 used only concrete. What additional test would best evaluate this claim?",
        choices: [
          { label: "A", text: "Repeat Experiment 3's range of ball temperatures while dropping the ball on a different surface, such as carpet" },
          { label: "B", text: "Repeat Experiment 1 with a colder ball only" },
          { label: "C", text: "Drop the ball from a greater height onto concrete" },
          { label: "D", text: "Use a different ball at a single temperature" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 3 tested temperature only on concrete. To check whether the warming effect holds on 'any surface,' the temperature range should be repeated on a different surface such as carpet, isolating temperature on a new surface.",
      },
    ],
  },

  // =========================================================================
  // P16 — data_representation — 6 Qs
  // interp: read_data x2, data_relationships x2, data_translation x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Light Penetration in a Lake",
    passageType: "data_representation",
    body: `Limnologists lowered a light sensor into a clear lake to study how sunlight fades with depth. The sensor reported the percentage of surface light remaining at each depth. They also recorded the abundance of algae, which depend on light.

Table 1: Light and algae at different depths in the lake.

Depth (m) | Light remaining (% of surface) | Algae (cells per mL)
----------|--------------------------------|----------------------
0         | 100                            | 410
2         | 64                             | 540
4         | 41                             | 690
6         | 26                             | 350
8         | 17                             | 120
10        | 11                             | 30

Figure 1 (described): A curve plots light remaining (vertical axis) against depth (horizontal axis). The curve falls steeply near the surface and more gradually with depth, never reaching zero within the range shown.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 40,
        prompt:
          "According to Table 1, what percentage of surface light remained at a depth of 6 m?",
        choices: [
          { label: "A", text: "11%" },
          { label: "B", text: "17%" },
          { label: "C", text: "26%" },
          { label: "D", text: "41%" },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the light column at the 6 m row gives 26%. 17% is the 8 m value and 41% is the 4 m value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        prompt:
          "According to Table 1, at which depth was the algae abundance highest?",
        choices: [
          { label: "A", text: "0 m" },
          { label: "B", text: "2 m" },
          { label: "C", text: "4 m" },
          { label: "D", text: "8 m" },
        ],
        correctAnswer: "C",
        explanation:
          "Algae counts are 410, 540, 690, 350, 120, and 30 cells per mL. The highest, 690, occurs at 4 m.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, from 4 m to 10 m, light remaining and algae abundance:",
        choices: [
          { label: "A", text: "both increased." },
          { label: "B", text: "both decreased." },
          { label: "C", text: "increased and decreased, respectively." },
          { label: "D", text: "decreased and increased, respectively." },
        ],
        correctAnswer: "B",
        explanation:
          "From 4 m to 10 m, light remaining falls from 41% to 11% and algae falls from 690 to 30 cells per mL. Below 4 m both decrease together.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Algae abundance did not simply track light remaining at all depths. Which observation best shows this?",
        choices: [
          { label: "A", text: "Light was highest at 0 m, but algae abundance was higher at 2 m and 4 m than at the surface." },
          { label: "B", text: "Light decreased steadily with depth." },
          { label: "C", text: "Algae abundance was lowest at 10 m." },
          { label: "D", text: "Light remaining never reached zero." },
        ],
        correctAnswer: "A",
        explanation:
          "Light was greatest at the surface (100%), yet algae were more abundant at 2 m (540) and 4 m (690) than at 0 m (410). If algae simply tracked light, the surface would have the most algae, so the peak at 4 m shows the relationship is not that simple.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Based on Table 1, the light remaining at a depth of 5 m would most likely be:",
        choices: [
          { label: "A", text: "less than 11%" },
          { label: "B", text: "between 26 and 41%" },
          { label: "C", text: "between 64 and 100%" },
          { label: "D", text: "greater than 100%" },
        ],
        correctAnswer: "B",
        explanation:
          "A depth of 5 m lies between 4 m (41%) and 6 m (26%). The light remaining should fall between those two values.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "Based on Figure 1, the depth at which light remaining first drops below 5% would most likely be:",
        choices: [
          { label: "A", text: "between 2 and 4 m" },
          { label: "B", text: "between 6 and 8 m" },
          { label: "C", text: "deeper than 10 m" },
          { label: "D", text: "at exactly 10 m" },
        ],
        correctAnswer: "C",
        explanation:
          "At 10 m, 11% of light still remains, and the curve falls only gradually at depth. Light would not drop below 5% until somewhere deeper than 10 m.",
      },
    ],
  },

  // =========================================================================
  // P17 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x1, hypothesis_testing x2
  // interp: data_relationships x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Heat Released by a Hand-Warmer Reaction",
    passageType: "research_summary",
    body: `A chemistry class studied a hand warmer that releases heat when iron powder reacts with oxygen. They measured the peak temperature reached by the warmer and how long it stayed above 40 °C (the "warm time").

Experiment 1
Students prepared five hand-warmer packets, each with a different mass of iron powder, all other ingredients held constant. Each packet was opened in air at 20 °C and the peak temperature was recorded.

Table 1
Iron powder (g) | Peak temperature (°C)
----------------|----------------------
5               | 38
10              | 46
15              | 53
20              | 58
25              | 61

Experiment 2
Using packets with 15 g of iron powder, students opened them in environments with different oxygen levels and recorded the warm time.

Table 2
Oxygen level (% of normal air) | Warm time (min)
-------------------------------|----------------
25                             | 22
50                             | 48
100                            | 95
150                            | 118
200                            | 129

Experiment 3
Using 15 g iron-powder packets in normal air, students opened them at five surrounding air temperatures and recorded the warm time.

Table 3
Surrounding air temp (°C) | Warm time (min)
--------------------------|----------------
0                         | 61
10                        | 78
20                        | 95
30                        | 110
40                        | 124`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "A student hypothesizes that adding more iron powder raises the peak temperature of the hand warmer. Do the results of Experiment 1 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; peak temperature rose steadily from 38 °C at 5 g to 61 °C at 25 g of iron powder." },
          { label: "B", text: "No; peak temperature fell as iron powder was added." },
          { label: "C", text: "No; peak temperature was unaffected by the mass of iron powder." },
          { label: "D", text: "Yes; peak temperature was highest at the smallest mass of iron powder." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 1 shows peak temperature climbing steadily (38, 46, 53, 58, 61 °C) as iron powder rises from 5 g to 25 g, which supports the hypothesis that more iron powder raises the peak temperature.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, as the mass of iron powder increased, the peak temperature:",
        choices: [
          { label: "A", text: "increased, but by a smaller amount with each step." },
          { label: "B", text: "decreased steadily." },
          { label: "C", text: "stayed the same." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "A",
        explanation:
          "Peak temperatures are 38, 46, 53, 58, 61 °C. The gains for each 5 g step are +8, +7, +5, +3 — still rising, but by progressively smaller amounts.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, why did the students hold all ingredients except the iron powder constant?",
        choices: [
          { label: "A", text: "So any change in peak temperature could be attributed to the mass of iron powder" },
          { label: "B", text: "Because the other ingredients do not react" },
          { label: "C", text: "To change the oxygen level in each packet" },
          { label: "D", text: "To keep the air temperature at 20 °C" },
        ],
        correctAnswer: "A",
        explanation:
          "Holding the other ingredients constant ensures the only variable that differs between packets is the iron-powder mass, so peak-temperature differences can be attributed to it.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Experiments 2 and 3 both measured warm time using 15 g packets. What did each one vary?",
        choices: [
          { label: "A", text: "Experiment 2 varied oxygen level; Experiment 3 varied surrounding air temperature." },
          { label: "B", text: "Experiment 2 varied air temperature; Experiment 3 varied oxygen level." },
          { label: "C", text: "Both varied the mass of iron powder." },
          { label: "D", text: "Both varied the oxygen level." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 changed the oxygen level (25-200% of normal air); Experiment 3 fixed normal air and changed the surrounding air temperature (0-40 °C).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that doubling the oxygen level always doubles the warm time. Do the results of Experiment 2 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; warm time exactly doubled at every step." },
          { label: "B", text: "No; warm time roughly doubled from 25% to 50% oxygen but increased far less than double from 100% to 200%." },
          { label: "C", text: "No; warm time decreased as oxygen level increased." },
          { label: "D", text: "Yes; warm time stayed constant as oxygen increased." },
        ],
        correctAnswer: "B",
        explanation:
          "Warm time goes 22→48 min when oxygen doubles from 25% to 50% (roughly double), but only 95→129 min when oxygen doubles from 100% to 200% — far less than double. The hypothesis does not hold across the whole range.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that a warmer surrounding environment lengthens the warm time. Do the results of Experiment 3 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; warm time rose steadily from 61 min at 0 °C to 124 min at 40 °C." },
          { label: "B", text: "No; warm time fell as the surrounding temperature rose." },
          { label: "C", text: "No; warm time was unaffected by the surrounding temperature." },
          { label: "D", text: "Yes; warm time was longest at the coldest temperature." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 3 shows warm time climbing steadily (61, 78, 95, 110, 124 min) as the surrounding air temperature rises from 0 to 40 °C, supporting the hypothesis.",
      },
    ],
  },

  // =========================================================================
  // P18 — conflicting_viewpoints — 7 Qs
  // models: model_comprehension x3, model_evaluation x2, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Two Explanations for the Bright Streaks on a Distant Moon",
    passageType: "conflicting_viewpoints",
    body: `A spacecraft photographed an icy moon and found long, bright streaks crossing its surface. Two planetary scientists explain what the streaks are.

Background information both scientists accept:
- The moon's surface is mostly water ice.
- The streaks are brighter and bluer than the surrounding older, darker ice.
- The streaks run for hundreds of kilometers and follow long cracks in the surface.
- Instruments detect salts within and beside the streaks.
- The moon is squeezed and stretched by the gravity of the large planet it orbits, which warms its interior.

Scientist 1 (Subsurface-Ocean view)
The streaks are deposits left by liquid water from an ocean beneath the ice. Tidal squeezing keeps part of the interior warm enough for liquid water. Where the surface cracks, salty ocean water rises, reaches the surface, and freezes, leaving fresh, bright, salty ice along the crack. The streaks are bright and blue because the ice is young; older surface ice darkens over time as radiation alters it. This view predicts that the salt in the streaks matches the salt expected in a deep ocean and that the youngest streaks are the brightest.

Scientist 2 (Ice-Fault view)
The streaks are simply fresh ice exposed by faulting, with no liquid water involved. As the moon is squeezed, the brittle surface ice fractures and slabs grind against each other along the cracks. This grinding crushes and exposes clean ice from just below the weathered surface, which looks bright and blue. The salts were already present throughout the moon's ice and are merely uncovered, not delivered by an ocean. This view predicts that the streaks are no deeper than the brittle surface layer and that salt is found uniformly across the moon, not concentrated by an ocean.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Scientist 1, the bright streaks formed when:",
        choices: [
          { label: "A", text: "slabs of surface ice ground against each other along cracks." },
          { label: "B", text: "salty ocean water rose through cracks, reached the surface, and froze." },
          { label: "C", text: "radiation darkened the older ice." },
          { label: "D", text: "the planet's gravity stopped squeezing the moon." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1's Subsurface-Ocean view states that where the surface cracks, salty ocean water rises, reaches the surface, and freezes, leaving fresh bright ice along the crack.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Scientist 2, the salts detected in the streaks:",
        choices: [
          { label: "A", text: "were delivered to the surface by a subsurface ocean." },
          { label: "B", text: "were created by radiation striking the surface." },
          { label: "C", text: "were already present throughout the moon's ice and were merely uncovered." },
          { label: "D", text: "came from the large planet the moon orbits." },
        ],
        correctAnswer: "C",
        explanation:
          "Scientist 2's Ice-Fault view states the salts were already present throughout the moon's ice and are merely uncovered by faulting, not delivered by an ocean.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Both scientists agree that the moon is squeezed by the planet's gravity. How does each use this fact?",
        choices: [
          { label: "A", text: "Scientist 1 says it warms the interior enough for liquid water; Scientist 2 says it fractures the brittle surface ice." },
          { label: "B", text: "Both say it directly creates the salts found in the streaks." },
          { label: "C", text: "Scientist 1 says it cools the interior; Scientist 2 says it has no effect." },
          { label: "D", text: "Both ignore the squeezing entirely." },
        ],
        correctAnswer: "A",
        explanation:
          "Scientist 1 uses tidal squeezing to keep part of the interior warm enough for liquid water. Scientist 2 uses the same squeezing to fracture and grind the brittle surface ice. They apply the shared fact in different ways.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A new instrument finds that the salt is concentrated along the streaks and is scarce in the older ice between them. This finding most directly:",
        choices: [
          { label: "A", text: "supports Scientist 1, because an ocean would deliver salt specifically along the cracks." },
          { label: "B", text: "supports Scientist 2, because faulting spreads salt evenly across the moon." },
          { label: "C", text: "weakens both views equally." },
          { label: "D", text: "has no bearing on either view." },
        ],
        correctAnswer: "A",
        explanation:
          "Scientist 1 predicts ocean water delivers salt along the cracks; Scientist 2 predicts salt is uniform across the moon. Salt concentrated along the streaks and scarce elsewhere matches Scientist 1's prediction and contradicts Scientist 2's.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Radar shows that one bright streak extends downward only as far as the thin, brittle surface layer and does not connect to any deeper region. This result would:",
        choices: [
          { label: "A", text: "strengthen Scientist 1's view, because an ocean would leave only a shallow deposit." },
          { label: "B", text: "strengthen Scientist 2's view, because the Ice-Fault view predicts the streaks are no deeper than the brittle surface layer." },
          { label: "C", text: "strengthen both views equally." },
          { label: "D", text: "weaken Scientist 2's view, because faulting reaches deep into the moon." },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 2 explicitly predicts the streaks are no deeper than the brittle surface layer. A streak confined to that layer, with no link to a deeper region, matches Scientist 2's prediction, while Scientist 1's view expects a connection to a deep ocean.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "If Scientist 1's view is correct, comparing streaks of different ages should show that:",
        choices: [
          { label: "A", text: "the youngest streaks are the brightest." },
          { label: "B", text: "the oldest streaks are the brightest." },
          { label: "C", text: "all streaks are equally bright regardless of age." },
          { label: "D", text: "the youngest streaks contain no salt." },
        ],
        correctAnswer: "A",
        explanation:
          "Scientist 1 states older surface ice darkens over time, so fresh ice is brightest. The view explicitly predicts that the youngest streaks are the brightest.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A mission designer wants to look for signs of life in liquid water. Based on the two views, the designer should be most interested in the streaks if:",
        choices: [
          { label: "A", text: "Scientist 2's view is correct, because faulted ice is a likely home for life." },
          { label: "B", text: "Scientist 1's view is correct, because the streaks would then be material from a subsurface liquid-water ocean." },
          { label: "C", text: "neither view is correct, because liquid water cannot exist on an icy moon." },
          { label: "D", text: "both views are correct, because they describe the same liquid ocean." },
        ],
        correctAnswer: "B",
        explanation:
          "Only Scientist 1's view connects the streaks to a subsurface liquid-water ocean, the kind of environment that could support life. Under Scientist 2's view the streaks are merely crushed dry ice, so the streaks matter for a life search only if Scientist 1 is correct.",
      },
    ],
  },

  // =========================================================================
  // P19 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x1
  // interp: data_relationships x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Crystal Growth from a Salt Solution",
    passageType: "research_summary",
    body: `Students grew crystals by dissolving a salt in hot water and letting the solution cool so crystals formed. They measured the mass of crystals collected and the size of the largest single crystal.

Experiment 1
Students dissolved the same mass of salt in identical volumes of water, then let each solution cool from 80 °C at five different cooling rates. After cooling, the mass of crystals collected was recorded.

Table 1
Cooling rate (°C per hour) | Crystal mass collected (g)
---------------------------|---------------------------
2                          | 18
5                          | 18
10                         | 19
20                         | 18
40                         | 18

Experiment 2
For the same five cooling rates from Experiment 1, students measured the length of the single largest crystal that formed.

Table 2
Cooling rate (°C per hour) | Largest crystal length (mm)
---------------------------|----------------------------
2                          | 24
5                          | 17
10                         | 11
20                         | 6
40                         | 3

Experiment 3
Cooling at 5 °C per hour, students varied the starting mass of salt dissolved in the fixed volume of water and recorded the total crystal mass collected.

Table 3
Salt dissolved (g) | Crystal mass collected (g)
-------------------|---------------------------
20                 | 4
30                 | 13
40                 | 23
50                 | 33
60                 | 42`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which variable was deliberately changed?",
        choices: [
          { label: "A", text: "The cooling rate of the solution" },
          { label: "B", text: "The mass of salt dissolved" },
          { label: "C", text: "The volume of water" },
          { label: "D", text: "The starting temperature" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 held the salt mass, water volume, and 80 °C starting temperature constant, varying only the cooling rate. Cooling rate is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on Experiment 2, as the cooling rate increased, the largest crystal length:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 2 shows largest crystal lengths of 24, 17, 11, 6, 3 mm as the cooling rate rises from 2 to 40 °C per hour — a steady decrease.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A student hypothesizes that a faster cooling rate yields a greater total mass of crystals. Do the results of Experiment 1 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; crystal mass rose sharply as the cooling rate increased." },
          { label: "B", text: "No; crystal mass stayed essentially constant (18-19 g) at every cooling rate." },
          { label: "C", text: "No; crystal mass fell as the cooling rate increased." },
          { label: "D", text: "Yes; crystal mass doubled with each faster setting." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 1 shows crystal mass of 18, 18, 19, 18, 18 g across all cooling rates — essentially unchanged. The total mass collected does not depend on cooling rate, so the hypothesis is not supported.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Taken together, Experiments 1 and 2 indicate that increasing the cooling rate:",
        choices: [
          { label: "A", text: "raises both the total crystal mass and the largest crystal size." },
          { label: "B", text: "leaves the total crystal mass nearly unchanged but produces smaller individual crystals." },
          { label: "C", text: "lowers the total crystal mass while producing larger individual crystals." },
          { label: "D", text: "has no effect on either crystal mass or crystal size." },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 shows total mass holding steady near 18 g regardless of cooling rate, while Experiment 2 shows the largest crystal shrinking from 24 mm to 3 mm as cooling speeds up. So faster cooling keeps the mass but yields smaller crystals.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 3, why did the students keep the volume of water fixed?",
        choices: [
          { label: "A", text: "So any change in crystal mass could be attributed to the amount of salt dissolved" },
          { label: "B", text: "Because water cannot be measured accurately" },
          { label: "C", text: "To change the cooling rate" },
          { label: "D", text: "Because more water dissolves less salt" },
        ],
        correctAnswer: "A",
        explanation:
          "Holding the water volume constant ensures the only variable changing is the mass of salt dissolved, so any change in crystal mass collected can be attributed to that variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "A student wants to grow one very large single crystal with as much total crystal mass as possible. Based on all three experiments, the student should:",
        choices: [
          { label: "A", text: "use a slow cooling rate and dissolve a large mass of salt" },
          { label: "B", text: "use a fast cooling rate and dissolve a small mass of salt" },
          { label: "C", text: "use a fast cooling rate and dissolve a large mass of salt" },
          { label: "D", text: "use a slow cooling rate and dissolve a small mass of salt" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 shows slow cooling yields the largest single crystal (24 mm at 2 °C per hour), and Experiment 3 shows more dissolved salt yields more total crystal mass (42 g at 60 g salt). Combining both, a slow cooling rate with a large salt mass is best.",
      },
    ],
  },

  // =========================================================================
  // P20 — data_representation — 6 Qs
  // models: model_comprehension x2, model_evaluation x2, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "A Model of Ocean Tides",
    passageType: "data_representation",
    body: `A coastal observatory uses a model to predict ocean tides. In the model, the height of the water at a shore is the sum of two regular up-and-down cycles: a large cycle caused by the Moon and a smaller cycle caused by the Sun. When the two cycles peak together, the model predicts the highest tides, called spring tides; when they are out of step, it predicts smaller tides, called neap tides.

Table 1: Model predictions for one site over six days.

Day | Moon-cycle height (m) | Sun-cycle height (m) | Predicted total tide height (m)
----|-----------------------|----------------------|--------------------------------
1   | +1.8                  | +0.6                 | +2.4
2   | +1.8                  | +0.2                 | +2.0
3   | +1.8                  | -0.2                 | +1.6
4   | +1.8                  | -0.6                 | +1.2
5   | +1.8                  | -0.2                 | +1.6
6   | +1.8                  | +0.2                 | +2.0

Figure 1 (described): A diagram shows the Sun, Earth, and Moon. When the Sun and Moon are lined up on the same side of Earth, their cycles add together (spring tide); when the Sun and Moon are at right angles as seen from Earth, the cycles partly cancel (neap tide).`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "According to the model in Table 1, what was the predicted total tide height on Day 2?",
        choices: [
          { label: "A", text: "+1.2 m" },
          { label: "B", text: "+1.6 m" },
          { label: "C", text: "+2.0 m" },
          { label: "D", text: "+2.4 m" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 1 lists the Day 2 predicted total tide height as +2.0 m.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to the model, the predicted total tide height on each day is found by:",
        choices: [
          { label: "A", text: "adding the Moon-cycle height and the Sun-cycle height." },
          { label: "B", text: "multiplying the Moon-cycle height by the Sun-cycle height." },
          { label: "C", text: "subtracting the Moon-cycle height from the Sun-cycle height." },
          { label: "D", text: "using only the Moon-cycle height." },
        ],
        correctAnswer: "A",
        explanation:
          "On Day 1, +1.8 plus +0.6 equals +2.4 m; on Day 4, +1.8 plus -0.6 equals +1.2 m. The total tide height is the sum of the two cycle heights, as the passage states.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Based on the model in Table 1, the day on which the smallest tide (a neap tide) is predicted is:",
        choices: [
          { label: "A", text: "Day 1" },
          { label: "B", text: "Day 2" },
          { label: "C", text: "Day 4" },
          { label: "D", text: "Day 6" },
        ],
        correctAnswer: "C",
        explanation:
          "The predicted total tide heights are 2.4, 2.0, 1.6, 1.2, 1.6, 2.0 m. The smallest, 1.2 m, occurs on Day 4 — the neap tide.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "If on Day 7 the Sun-cycle height returns to +0.6 m while the Moon-cycle height stays at +1.8 m, the model would predict a total tide height of:",
        choices: [
          { label: "A", text: "+1.2 m" },
          { label: "B", text: "+1.8 m" },
          { label: "C", text: "+2.0 m" },
          { label: "D", text: "+2.4 m" },
        ],
        correctAnswer: "D",
        explanation:
          "The model adds the two heights: +1.8 m plus +0.6 m equals +2.4 m, the same spring-tide value seen on Day 1.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Measured tide heights at the site match the model's predictions on Days 1-5 but on Day 6 the measured tide is +3.5 m, far above the predicted +2.0 m. This single result most likely indicates that:",
        choices: [
          { label: "A", text: "the model is completely wrong and should be discarded." },
          { label: "B", text: "a factor not included in the model, such as a storm surge, affected the Day 6 tide." },
          { label: "C", text: "the Moon stopped affecting the tides on Day 6." },
          { label: "D", text: "the Sun-cycle height must have been +1.7 m on Day 6." },
        ],
        correctAnswer: "B",
        explanation:
          "The model matched five straight days, so it is not simply wrong. A large one-day excess suggests an outside factor the model does not include — such as a storm surge — pushed the tide above the predicted value.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A scientist notes that the model treats the Moon-cycle height as a constant +1.8 m every day. In reality the Moon's distance from Earth changes over a month. This observation points to:",
        choices: [
          { label: "A", text: "a strength of the model, because a constant value is always more accurate." },
          { label: "B", text: "a limitation of the model, because a fixed Moon-cycle height ignores the real monthly change in the Moon's influence." },
          { label: "C", text: "proof that the Sun has no effect on tides." },
          { label: "D", text: "evidence that tides cannot be predicted at all." },
        ],
        correctAnswer: "B",
        explanation:
          "Holding the Moon-cycle height fixed at +1.8 m ignores the real variation caused by the Moon's changing distance. That simplification is a limitation of the model, since it can make predictions less accurate over a month.",
      },
    ],
  },

  // =========================================================================
  // P21 — research_summary — 6 Qs
  // invest: experimental_design x2, compare_experiments x2, hypothesis_testing x1
  // interp: data_relationships x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Water Filtration by Sand Columns",
    passageType: "research_summary",
    body: `Environmental science students built model water filters by packing sand into clear vertical tubes. They poured muddy water in at the top and measured the turbidity (cloudiness) of the water that came out the bottom. Turbidity is reported in nephelometric turbidity units (NTU); a lower NTU means clearer water. The muddy water poured in always had a turbidity of 240 NTU.

Experiment 1
Students built five filter columns, each packed with a different depth of sand, and poured in the muddy water. They measured the turbidity of the filtered water.

Table 1
Sand depth (cm) | Output turbidity (NTU)
----------------|------------------------
10              | 96
20              | 54
30              | 27
40              | 14
50              | 11

Experiment 2
Using a 30 cm sand depth, students varied the size of the sand grains and measured output turbidity.

Table 2
Sand grain size (mm) | Output turbidity (NTU)
---------------------|------------------------
0.2                  | 9
0.5                  | 27
1.0                  | 58
2.0                  | 112

Experiment 3
Using a 30 cm depth of 0.5 mm sand, students varied the rate at which water was poured through the column and measured output turbidity.

Table 3
Flow rate (mL per minute) | Output turbidity (NTU)
--------------------------|------------------------
20                        | 18
40                        | 27
80                        | 49
160                       | 88`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "In Experiment 1, which variable was deliberately changed between the columns?",
        choices: [
          { label: "A", text: "The depth of sand" },
          { label: "B", text: "The size of the sand grains" },
          { label: "C", text: "The flow rate of the water" },
          { label: "D", text: "The turbidity of the muddy water poured in" },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 used the same 240 NTU input water and changed only the depth of sand in each column. Sand depth is the independent variable.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In Experiment 1, as the sand depth increased, the output turbidity:",
        choices: [
          { label: "A", text: "increased." },
          { label: "B", text: "decreased." },
          { label: "C", text: "stayed constant." },
          { label: "D", text: "rose then fell." },
        ],
        correctAnswer: "B",
        explanation:
          "Table 1 shows output turbidity of 96, 54, 27, 14, 11 NTU as sand depth rises from 10 to 50 cm — a steady decrease, meaning deeper sand produced clearer water.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "Why did the students always pour in muddy water of the same 240 NTU turbidity?",
        choices: [
          { label: "A", text: "So differences in output turbidity would be due to the filter, not the input water" },
          { label: "B", text: "Because 240 NTU is the only turbidity that can be measured" },
          { label: "C", text: "To change the sand grain size" },
          { label: "D", text: "To raise the flow rate" },
        ],
        correctAnswer: "A",
        explanation:
          "Using the same 240 NTU input every time ensures that any difference in output turbidity is caused by the filter design being tested, not by starting with dirtier or cleaner water.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "A student hypothesizes that smaller sand grains produce clearer water. Do the results of Experiment 2 support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; output turbidity rose from 9 NTU at 0.2 mm grains to 112 NTU at 2.0 mm grains, so smaller grains gave clearer water." },
          { label: "B", text: "No; smaller grains produced cloudier water." },
          { label: "C", text: "No; grain size had no effect on output turbidity." },
          { label: "D", text: "Yes; output turbidity was lowest at the largest grain size." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 2 shows output turbidity climbing from 9 NTU (smallest 0.2 mm grains) to 112 NTU (largest 2.0 mm grains). Smaller grains gave the lowest turbidity — the clearest water — supporting the hypothesis.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Which feature was the same in both Experiment 2 and Experiment 3 but not varied in either?",
        choices: [
          { label: "A", text: "The 30 cm sand depth" },
          { label: "B", text: "The size of the sand grains" },
          { label: "C", text: "The flow rate of the water" },
          { label: "D", text: "The depth of sand was varied in both." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 2 varied grain size and Experiment 3 varied flow rate, but both used a fixed 30 cm depth of sand. The 30 cm depth was held constant in each.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 3,
        estimatedTimeSec: 80,
        prompt:
          "Based on Experiments 1, 2, and 3, which filter setup would most likely produce the clearest output water?",
        choices: [
          { label: "A", text: "10 cm of 2.0 mm sand at a 160 mL per minute flow rate" },
          { label: "B", text: "50 cm of 0.2 mm sand at a 20 mL per minute flow rate" },
          { label: "C", text: "30 cm of 1.0 mm sand at an 80 mL per minute flow rate" },
          { label: "D", text: "20 cm of 0.5 mm sand at a 160 mL per minute flow rate" },
        ],
        correctAnswer: "B",
        explanation:
          "The data show clearer water with deeper sand (Experiment 1), smaller grains (Experiment 2), and a slower flow rate (Experiment 3). Choice B combines the deepest sand, the smallest grains, and the slowest flow, so it would give the clearest output.",
      },
    ],
  },

  // =========================================================================
  // P22 — data_representation — 6 Qs
  // models: model_comprehension x3, model_evaluation x1, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "An Energy-Flow Model of a Food Web",
    passageType: "data_representation",
    body: `Ecologists use an energy-flow model to track how energy moves through a grassland community. In the model, energy enters through grass (the producer) and passes to grasshoppers, then to mice, then to hawks. At each step, only about 10% of the energy is passed on; the rest is lost as heat. Energy is measured in kilojoules per square meter per year (kJ/m2/yr).

Table 1: Energy at each level of the model food web.

Level             | Energy (kJ/m2/yr)
------------------|-------------------
Grass             | 40,000
Grasshoppers      | 4,000
Mice              | 400
Hawks             | 40

Figure 1 (described): A diagram shows a pyramid with four stacked bars. Grass forms the wide base, grasshoppers a narrower bar above it, mice a still narrower bar, and hawks the small bar at the top. Each bar's width is drawn proportional to its energy value.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 1,
        estimatedTimeSec: 45,
        prompt:
          "According to Table 1, how much energy is held at the grasshopper level of the model?",
        choices: [
          { label: "A", text: "40 kJ/m2/yr" },
          { label: "B", text: "400 kJ/m2/yr" },
          { label: "C", text: "4,000 kJ/m2/yr" },
          { label: "D", text: "40,000 kJ/m2/yr" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 1 lists the grasshopper level at 4,000 kJ/m2/yr. 40,000 is grass and 400 is mice.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to the model, the energy at each level compared with the level just below it is about:",
        choices: [
          { label: "A", text: "10 times as much." },
          { label: "B", text: "one-tenth as much." },
          { label: "C", text: "equal." },
          { label: "D", text: "twice as much." },
        ],
        correctAnswer: "B",
        explanation:
          "Energy goes 40,000 → 4,000 → 400 → 40 kJ/m2/yr from grass up to hawks. Each level holds about one-tenth the energy of the level below it, matching the model's stated 10% transfer.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "In the model, the energy not passed from one level to the next is described as being:",
        choices: [
          { label: "A", text: "stored permanently in the grass." },
          { label: "B", text: "lost as heat." },
          { label: "C", text: "returned to the hawks." },
          { label: "D", text: "converted into new grasshoppers." },
        ],
        correctAnswer: "B",
        explanation:
          "The passage states that at each step only about 10% of the energy is passed on and 'the rest is lost as heat.'",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "If a fifth level — a large bird that eats hawks — were added to the model, the energy at that level would most likely be about:",
        choices: [
          { label: "A", text: "4 kJ/m2/yr" },
          { label: "B", text: "40 kJ/m2/yr" },
          { label: "C", text: "400 kJ/m2/yr" },
          { label: "D", text: "4,000 kJ/m2/yr" },
        ],
        correctAnswer: "A",
        explanation:
          "Each level holds about one-tenth the energy of the level below. The hawk level is 40 kJ/m2/yr, so a level above it would hold about one-tenth of that, roughly 4 kJ/m2/yr.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 80,
        prompt:
          "The model implies that a grassland can support far fewer hawks than grasshoppers. The best reason drawn from the model is that:",
        choices: [
          { label: "A", text: "hawks need more space than grasshoppers." },
          { label: "B", text: "only about 1% of the grasshopper-level energy reaches the hawks, since energy drops tenfold at each of the two steps in between." },
          { label: "C", text: "grasshoppers reproduce faster than hawks." },
          { label: "D", text: "hawks do not eat mice." },
        ],
        correctAnswer: "B",
        explanation:
          "From grasshoppers to hawks the energy passes through mice, dropping tenfold twice (4,000 → 400 → 40). Only about 1% of the grasshopper-level energy reaches the hawks, so the grassland can support far fewer hawks.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A field study finds that mice in this grassland also eat grass seeds directly, not only grasshoppers. This finding suggests that the model:",
        choices: [
          { label: "A", text: "is a perfect description of the real food web." },
          { label: "B", text: "simplifies the real food web, which has feeding links the four-level chain does not show." },
          { label: "C", text: "overestimates the energy reaching the hawks." },
          { label: "D", text: "proves grasshoppers do not exist in the grassland." },
        ],
        correctAnswer: "B",
        explanation:
          "The model shows a single straight chain (grass → grasshoppers → mice → hawks). A real link in which mice eat grass directly is not in that chain, so the finding shows the model is a simplification of a more connected real food web.",
      },
    ],
  },

  // =========================================================================
  // P23 — conflicting_viewpoints — 6 Qs
  // models: model_comprehension x3, model_evaluation x2, predictions_conclusions x1
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Two Explanations for a Songbird's Winter Disappearance",
    passageType: "conflicting_viewpoints",
    body: `Each autumn, the gray-capped warbler vanishes from a northern forest and reappears there each spring. Two ornithologists explain where the birds go and why.

Background information both ornithologists accept:
- The warblers are present in the northern forest only from April through September.
- The warblers eat mainly flying insects, which are abundant in the northern forest in summer but nearly absent in winter.
- Banded warblers from the northern forest have been recaptured in a southern woodland 2,000 km away during winter.
- The northern forest's winter temperatures often fall below -15 °C.

Ornithologist 1 (Long-Migration view)
The warblers leave because their insect food disappears in the cold northern winter. Each autumn the entire population flies 2,000 km south to the warmer southern woodland, where flying insects remain available all winter, then returns north in spring to breed. The banding recaptures show the same individuals making this round trip. This view predicts that warbler numbers in the southern woodland rise sharply each winter and fall each spring, mirroring the northern pattern in reverse.

Ornithologist 2 (Local-Dormancy view)
Most warblers do not travel far. When insects vanish and the cold arrives, the birds enter a state of deep dormancy, sheltering in tree cavities within or near the northern forest and lowering their body temperature to survive on stored fat until spring. Only a few individuals wander south, which is why a small number are recaptured there. This view predicts that warblers, or their dormant bodies, can be found in northern tree cavities throughout the winter, and that the southern woodland's winter population is small.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Ornithologist 1, the warblers leave the northern forest each autumn because:",
        choices: [
          { label: "A", text: "their insect food disappears in the cold northern winter." },
          { label: "B", text: "they enter a state of deep dormancy in tree cavities." },
          { label: "C", text: "the southern woodland becomes too warm." },
          { label: "D", text: "predators arrive in the northern forest." },
        ],
        correctAnswer: "A",
        explanation:
          "Ornithologist 1's Long-Migration view states the warblers leave because their insect food disappears in the cold northern winter, prompting a 2,000 km flight south.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Ornithologist 2, most warblers survive the winter by:",
        choices: [
          { label: "A", text: "flying 2,000 km south to a warmer woodland." },
          { label: "B", text: "entering deep dormancy in northern tree cavities and living on stored fat." },
          { label: "C", text: "switching to a diet of seeds in the northern forest." },
          { label: "D", text: "building nests that trap heat." },
        ],
        correctAnswer: "B",
        explanation:
          "Ornithologist 2's Local-Dormancy view states that most birds shelter in northern tree cavities, lower their body temperature, and survive on stored fat until spring.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 70,
        prompt:
          "Both ornithologists accept that banded warblers were recaptured in the southern woodland. How does each explain this fact?",
        choices: [
          { label: "A", text: "Ornithologist 1 says it shows the whole population migrates south; Ornithologist 2 says only a few individuals wander there." },
          { label: "B", text: "Both say it proves the birds are dormant in the north." },
          { label: "C", text: "Ornithologist 1 says the recaptures were errors; Ornithologist 2 says the whole population migrates." },
          { label: "D", text: "Both ignore the recapture evidence." },
        ],
        correctAnswer: "A",
        explanation:
          "Ornithologist 1 treats the recaptures as evidence the entire population makes the round trip. Ornithologist 2 accepts the same recaptures but argues only a few wandering individuals reach the south.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A winter survey of the southern woodland finds it crowded with gray-capped warblers, far more than are present there in summer. This finding most directly:",
        choices: [
          { label: "A", text: "supports Ornithologist 1, because a large winter population matches the Long-Migration prediction." },
          { label: "B", text: "supports Ornithologist 2, because dormancy keeps birds in the north." },
          { label: "C", text: "weakens both views equally." },
          { label: "D", text: "has no bearing on either view." },
        ],
        correctAnswer: "A",
        explanation:
          "Ornithologist 1 predicts the southern population rises sharply each winter; Ornithologist 2 predicts it stays small. A crowded southern woodland in winter matches Ornithologist 1's prediction and contradicts Ornithologist 2's.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Researchers searching northern tree cavities all winter find no warblers, dormant or active, anywhere in or near the northern forest. This result would:",
        choices: [
          { label: "A", text: "strengthen Ornithologist 2's view, because dormant birds should be hidden in cavities." },
          { label: "B", text: "strengthen Ornithologist 1's view, because the Local-Dormancy view predicts dormant birds would be found in northern cavities, and none were." },
          { label: "C", text: "strengthen both views equally." },
          { label: "D", text: "have no bearing on either view." },
        ],
        correctAnswer: "B",
        explanation:
          "Ornithologist 2 predicts dormant warblers can be found in northern cavities all winter. Finding none there contradicts that prediction and is consistent with Ornithologist 1's view that the birds have all left for the south.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "If Ornithologist 1's view is correct, the warbler population of the southern woodland over a year should:",
        choices: [
          { label: "A", text: "rise sharply in winter and fall in spring." },
          { label: "B", text: "rise sharply in summer and fall in winter." },
          { label: "C", text: "stay the same all year." },
          { label: "D", text: "fall steadily year after year." },
        ],
        correctAnswer: "A",
        explanation:
          "Ornithologist 1 explicitly predicts the southern woodland's numbers rise sharply each winter, when the migrating birds arrive, and fall each spring, when they return north.",
      },
    ],
  },

  // =========================================================================
  // P24 — conflicting_viewpoints — 6 Qs
  // models: model_comprehension x2, model_evaluation x2, predictions_conclusions x2
  // =========================================================================
  {
    subject: "SCIENCE",
    title: "Two Explanations for Smooth Boulders in a Dry Valley",
    passageType: "conflicting_viewpoints",
    body: `A dry desert valley contains thousands of large boulders whose surfaces are unusually smooth and rounded. Two geologists explain how the boulders became smooth.

Background information both geologists accept:
- The boulders are made of hard granite.
- The valley today receives almost no rainfall and has no flowing river.
- The valley floor is covered with fine, well-sorted sand.
- Layers of rounded gravel are found buried beneath parts of the valley floor.
- Strong, steady winds blow through the valley nearly every day.

Geologist 1 (Ancient-River view)
The boulders were smoothed long ago by a powerful river that once flowed through the valley. Tumbling in fast-moving water, the boulders knocked against one another and against the riverbed, wearing away rough edges until they became rounded. The buried layers of rounded gravel are the old river's deposits. The valley later dried out when the climate changed and the river vanished. This view predicts that the smoothing happened in the distant past and that the boulders are not being shaped today.

Geologist 2 (Wind-Abrasion view)
The boulders are smoothed by the wind, a process still going on today. The strong daily winds pick up fine sand and hurl it against the boulders; over long periods this sandblasting wears the surfaces smooth and rounded. The fine sand on the valley floor is the very material doing the work. The buried gravel is unrelated old material. This view predicts that boulder surfaces facing the prevailing wind are smoother than sheltered surfaces, and that smoothing continues in the present-day climate.`,
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        prompt:
          "According to Geologist 1, the boulders became smooth because:",
        choices: [
          { label: "A", text: "wind-blown sand sandblasted their surfaces." },
          { label: "B", text: "they tumbled in a powerful river, knocking against one another and the riverbed." },
          { label: "C", text: "they were buried under layers of gravel." },
          { label: "D", text: "rainfall slowly dissolved the granite." },
        ],
        correctAnswer: "B",
        explanation:
          "Geologist 1's Ancient-River view states the boulders tumbled in fast-moving water, knocking against one another and the riverbed until their rough edges wore away.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 65,
        prompt:
          "According to Geologist 2, the fine sand on the valley floor:",
        choices: [
          { label: "A", text: "is the material the wind hurls against the boulders to smooth them." },
          { label: "B", text: "was deposited by an ancient river." },
          { label: "C", text: "protects the boulders from the wind." },
          { label: "D", text: "has no role in smoothing the boulders." },
        ],
        correctAnswer: "A",
        explanation:
          "Geologist 2's Wind-Abrasion view states the strong winds pick up the fine sand and hurl it against the boulders, and that this sand 'is the very material doing the work.'",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "Surveyors find that on most boulders the surface facing the steady prevailing wind is noticeably smoother than the sheltered surface. This finding most directly:",
        choices: [
          { label: "A", text: "supports Geologist 2, because wind-driven sand would smooth the wind-facing side most." },
          { label: "B", text: "supports Geologist 1, because a river smooths all sides equally." },
          { label: "C", text: "weakens both views equally." },
          { label: "D", text: "has no bearing on either view." },
        ],
        correctAnswer: "A",
        explanation:
          "Geologist 2 predicts that wind-facing surfaces are smoother than sheltered ones. A consistent difference between the windward and sheltered sides matches that prediction; a tumbling river would have smoothed all sides alike.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 5,
        estimatedTimeSec: 95,
        prompt:
          "Researchers polish a rough granite block, place it in the valley, and find it measurably smoother after ten years with no river present. This result would:",
        choices: [
          { label: "A", text: "strengthen Geologist 1's view, because rivers smooth granite quickly." },
          { label: "B", text: "strengthen Geologist 2's view, because it shows smoothing still occurs today without a river, as wind abrasion predicts." },
          { label: "C", text: "strengthen both views equally." },
          { label: "D", text: "weaken Geologist 2's view, because ten years is too short for any change." },
        ],
        correctAnswer: "B",
        explanation:
          "Geologist 1 predicts the smoothing is finished and not happening today; Geologist 2 predicts it continues in the present climate. Measurable smoothing of a fresh block with no river present matches Geologist 2's view and contradicts Geologist 1's.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 3,
        estimatedTimeSec: 75,
        prompt:
          "If Geologist 1's view is correct, examining the boulders over the next century should show that they:",
        choices: [
          { label: "A", text: "do not become any smoother, because the smoothing happened in the distant past." },
          { label: "B", text: "become noticeably smoother as the wind works on them." },
          { label: "C", text: "become rougher over time." },
          { label: "D", text: "are slowly buried by the river's gravel." },
        ],
        correctAnswer: "A",
        explanation:
          "Geologist 1's view holds that the smoothing was done by a river that has since vanished and that the boulders are not being shaped today. Under that view the boulders should show no further smoothing over the next century.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 85,
        prompt:
          "A land manager wants to protect the boulders from any further change. Based on the two views, action would be most worthwhile if:",
        choices: [
          { label: "A", text: "Geologist 1's view is correct, because the river could return at any time." },
          { label: "B", text: "Geologist 2's view is correct, because wind abrasion is an ongoing process that continues to reshape the boulders." },
          { label: "C", text: "neither view is correct, because granite never changes." },
          { label: "D", text: "both views are correct, because each describes a process happening today." },
        ],
        correctAnswer: "B",
        explanation:
          "Only Geologist 2's view describes an ongoing process — wind abrasion — that is still reshaping the boulders. Under Geologist 1's view the shaping is already finished, so protective action would matter only if Geologist 2 is correct.",
      },
    ],
  },
];
