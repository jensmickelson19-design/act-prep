import type { SeedPassage } from "./types";

// ===========================================================================
// Diagnostic Form 1 — Science.  6 passages, 40 questions, formOrder 1-40
// continuous across all passages.
// Passage mix: 3 data_representation, 2 research_summary, 1 conflicting_viewpoints.
// All passages, datasets, experiments, viewpoints, questions, and explanations
// are 100% ORIGINAL to this app. Every figure is a real structured FigureSpec
// (TableFigure / ChartFigure) referenced inline in the body with {{figure:ID}}.
// Every keyed answer is recomputed directly from the authored figures.
// ===========================================================================

export const form1SciencePassages: SeedPassage[] = [
  // -------------------------------------------------------------------------
  // P1 — data_representation — formOrder 1-7
  // Soil moisture and infiltration
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Soil Infiltration Across Land Covers",
    passageType: "data_representation",
    diagnosticForm: 1,
    body: `Infiltration is the rate at which water soaks into soil. A watershed team measured infiltration and related soil properties at five sites, each with a different surface cover. At each site they poured a fixed volume of water into a ring pushed into the soil and recorded the infiltration rate (millimeters of water absorbed per hour). They also measured the soil's bulk density (mass of dry soil per unit volume; higher values mean more tightly packed soil) and the percent of the surface covered by living plants.

{{figure:t1}}

The team then tracked one site (the Meadow site) through a single rainstorm, recording how the infiltration rate changed as the storm continued.

{{figure:f1}}`,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Soil properties measured at five sites",
        columns: [
          { key: "site", header: "Site" },
          { key: "cover", header: "Plant cover (%)", align: "right" },
          { key: "density", header: "Bulk density (g/cm³)", align: "right" },
          { key: "infil", header: "Infiltration rate (mm/hr)", align: "right" },
        ],
        rows: [
          { site: "Parking lot edge", cover: 5, density: 1.62, infil: 4 },
          { site: "Bare field", cover: 20, density: 1.48, infil: 11 },
          { site: "Meadow", cover: 55, density: 1.30, infil: 28 },
          { site: "Shrubland", cover: 78, density: 1.18, infil: 41 },
          { site: "Forest", cover: 92, density: 1.04, infil: 63 },
        ],
      },
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Meadow site infiltration rate during one rainstorm",
        chartType: "line",
        xAxis: { label: "Time into storm", unit: "min", dataKey: "min", type: "number" },
        yAxis: { label: "Infiltration rate", unit: "mm/hr" },
        series: [
          {
            name: "Infiltration rate",
            dataKey: "rate",
            data: [
              { min: 0, rate: 28 },
              { min: 15, rate: 24 },
              { min: 30, rate: 19 },
              { min: 45, rate: 15 },
              { min: 60, rate: 12 },
              { min: 75, rate: 10 },
              { min: 90, rate: 9 },
            ],
          },
        ],
        legend: false,
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        diagnosticForm: 1,
        formOrder: 1,
        prompt: "According to Table 1, the infiltration rate at the Forest site was:",
        choices: [
          { label: "A", text: "4 mm/hr" },
          { label: "B", text: "28 mm/hr" },
          { label: "C", text: "41 mm/hr" },
          { label: "D", text: "63 mm/hr" },
        ],
        correctAnswer: "D",
        explanation:
          "Reading the Forest row of Table 1, the infiltration rate is 63 mm/hr. 4 mm/hr is the Parking lot edge, 28 mm/hr is the Meadow, and 41 mm/hr is the Shrubland. This is a direct read_data lookup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 2,
        prompt: "According to Figure 1, at 45 minutes into the storm, the Meadow site's infiltration rate was closest to:",
        choices: [
          { label: "A", text: "9 mm/hr" },
          { label: "B", text: "15 mm/hr" },
          { label: "C", text: "24 mm/hr" },
          { label: "D", text: "28 mm/hr" },
        ],
        correctAnswer: "B",
        explanation:
          "At 45 min, Figure 1 plots 15 mm/hr. 28 mm/hr is the starting value at 0 min, 24 mm/hr is the value at 15 min, and 9 mm/hr is the final value at 90 min. This is a read_data point lookup from a line chart.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 3,
        prompt: "Based on Table 1, as plant cover increased across the five sites, bulk density and infiltration rate:",
        choices: [
          { label: "A", text: "both increased" },
          { label: "B", text: "both decreased" },
          { label: "C", text: "bulk density decreased and infiltration rate increased" },
          { label: "D", text: "bulk density increased and infiltration rate decreased" },
        ],
        correctAnswer: "C",
        explanation:
          "As plant cover rises from 5% to 92%, bulk density falls (1.62 → 1.04 g/cm³) while infiltration rate rises (4 → 63 mm/hr). So bulk density decreased and infiltration increased. Choices A and B wrongly claim both move the same way; D inverts both trends. This tests data_relationships across three columns.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 4,
        prompt: "Based on Table 1, which statement best describes the relationship between bulk density and infiltration rate?",
        choices: [
          { label: "A", text: "Higher bulk density is associated with a higher infiltration rate." },
          { label: "B", text: "Higher bulk density is associated with a lower infiltration rate." },
          { label: "C", text: "Bulk density and infiltration rate are unrelated." },
          { label: "D", text: "Infiltration rate is highest at intermediate bulk density." },
        ],
        correctAnswer: "B",
        explanation:
          "The site with the highest bulk density (1.62 g/cm³, Parking lot edge) has the lowest infiltration (4 mm/hr), and the lowest density (1.04, Forest) has the highest infiltration (63 mm/hr). The relationship is inverse: higher density → lower infiltration. A states the opposite trend, C ignores the clear pattern, and D describes a peak that does not occur (the extremes hold the highest and lowest rates). This tests data_relationships.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 5,
        prompt: "According to Figure 1, over how much did the Meadow site's infiltration rate change between the start of the storm and 60 minutes?",
        choices: [
          { label: "A", text: "It decreased by about 4 mm/hr." },
          { label: "B", text: "It decreased by about 16 mm/hr." },
          { label: "C", text: "It increased by about 16 mm/hr." },
          { label: "D", text: "It stayed the same." },
        ],
        correctAnswer: "B",
        explanation:
          "At 0 min the rate is 28 mm/hr; at 60 min it is 12 mm/hr. The change is 28 − 12 = 16 mm/hr, a decrease. A (4) is the change over just one 15-min step near the end, C reverses the direction, and D ignores the clear downward trend. This tests data_translation (computing a difference from the graph).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 6,
        prompt: "A sixth site is found to have a bulk density of 1.10 g/cm³. Based on the pattern in Table 1, its infiltration rate would most likely be closest to:",
        choices: [
          { label: "A", text: "9 mm/hr" },
          { label: "B", text: "28 mm/hr" },
          { label: "C", text: "52 mm/hr" },
          { label: "D", text: "70 mm/hr" },
        ],
        correctAnswer: "C",
        explanation:
          "A density of 1.10 g/cm³ falls between the Shrubland (1.18, 41 mm/hr) and the Forest (1.04, 63 mm/hr), so its infiltration should fall between 41 and 63 mm/hr. Only 52 mm/hr lies in that interval. 9 and 28 correspond to much higher densities, and 70 exceeds the range for that density. This tests predictions_conclusions by interpolation.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 7,
        prompt: "As the storm in Figure 1 continued, the infiltration rate at the Meadow site changed in what way?",
        choices: [
          { label: "A", text: "It rose steadily throughout." },
          { label: "B", text: "It fell, and the amount of decrease per 15 minutes grew smaller over time." },
          { label: "C", text: "It fell, and the amount of decrease per 15 minutes grew larger over time." },
          { label: "D", text: "It fell at a constant rate throughout." },
        ],
        correctAnswer: "B",
        explanation:
          "The successive 15-min drops are 28→24 (4), 24→19 (5), 19→15 (4), 15→12 (3), 12→10 (2), 10→9 (1). After the early steps, each drop gets smaller, so the rate falls but is leveling off. A reverses the direction, C claims accelerating drops (the opposite), and D claims a constant slope, but the steps shrink. This tests data_relationships (reading the shape of a curve).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // P2 — data_representation — formOrder 8-14
  // Absorption spectra of pigments
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Light Absorption by Plant Pigments",
    passageType: "data_representation",
    diagnosticForm: 1,
    body: `Plant pigments absorb light at particular wavelengths. Students measured the percent of incident light absorbed by solutions of three pigments — Chlorophyll a, Chlorophyll b, and a carotenoid — across a range of visible wavelengths. Higher percent absorption means the pigment captures more light of that wavelength. Wavelengths near 450 nm appear blue and wavelengths near 650 nm appear red.

{{figure:f1}}

They also recorded, for each pigment, the single wavelength at which absorption was greatest (the peak wavelength) and the percent absorbed at that peak.

{{figure:t1}}`,
    figures: [
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Percent of light absorbed vs. wavelength for three pigments",
        chartType: "line",
        xAxis: { label: "Wavelength", unit: "nm", dataKey: "wl", type: "number" },
        yAxis: { label: "Light absorbed", unit: "%" },
        series: [
          {
            name: "Chlorophyll a",
            dataKey: "chlA",
            data: [
              { wl: 400, chlA: 40 },
              { wl: 450, chlA: 88 },
              { wl: 500, chlA: 22 },
              { wl: 550, chlA: 10 },
              { wl: 600, chlA: 24 },
              { wl: 650, chlA: 70 },
              { wl: 700, chlA: 18 },
            ],
          },
          {
            name: "Chlorophyll b",
            dataKey: "chlB",
            data: [
              { wl: 400, chlB: 30 },
              { wl: 450, chlB: 55 },
              { wl: 500, chlB: 35 },
              { wl: 550, chlB: 14 },
              { wl: 600, chlB: 40 },
              { wl: 650, chlB: 52 },
              { wl: 700, chlB: 12 },
            ],
          },
          {
            name: "Carotenoid",
            dataKey: "caro",
            data: [
              { wl: 400, caro: 45 },
              { wl: 450, caro: 72 },
              { wl: 500, caro: 60 },
              { wl: 550, caro: 20 },
              { wl: 600, caro: 6 },
              { wl: 650, caro: 4 },
              { wl: 700, caro: 3 },
            ],
          },
        ],
        legend: true,
      },
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Peak absorption of each pigment",
        columns: [
          { key: "pig", header: "Pigment" },
          { key: "peak", header: "Peak wavelength (nm)", align: "right" },
          { key: "abs", header: "Absorption at peak (%)", align: "right" },
        ],
        rows: [
          { pig: "Chlorophyll a", peak: 450, abs: 88 },
          { pig: "Chlorophyll b", peak: 450, abs: 55 },
          { pig: "Carotenoid", peak: 450, abs: 72 },
        ],
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 8,
        prompt: "According to Figure 1, at 600 nm, the percent of light absorbed by Chlorophyll b was closest to:",
        choices: [
          { label: "A", text: "6%" },
          { label: "B", text: "24%" },
          { label: "C", text: "40%" },
          { label: "D", text: "52%" },
        ],
        correctAnswer: "C",
        explanation:
          "Reading the Chlorophyll b curve at 600 nm gives 40%. 6% is the carotenoid at 600 nm, 24% is Chlorophyll a at 600 nm, and 52% is Chlorophyll b at 650 nm. This is a read_data lookup on a multi-series chart.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 9,
        prompt: "According to Table 1, which pigment absorbed the largest percent of light at its peak wavelength?",
        choices: [
          { label: "A", text: "Chlorophyll a" },
          { label: "B", text: "Chlorophyll b" },
          { label: "C", text: "Carotenoid" },
          { label: "D", text: "All three were equal." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 1 lists peak absorptions of 88%, 55%, and 72%. Chlorophyll a's 88% is the highest. Chlorophyll b (55%) is the lowest, the carotenoid (72%) is in between, and the values are not equal. This tests read_data (finding a maximum in a column).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 10,
        prompt: "Based on Figure 1, at which wavelength did all three pigments absorb the least light?",
        choices: [
          { label: "A", text: "400 nm" },
          { label: "B", text: "450 nm" },
          { label: "C", text: "550 nm" },
          { label: "D", text: "650 nm" },
        ],
        correctAnswer: "C",
        explanation:
          "At 550 nm the values are 10% (Chl a), 14% (Chl b), and 20% (carotenoid) — all low, and lower for each pigment than at the other listed wavelengths. At 450 nm all three are near their highest, and at 400 and 650 nm at least one pigment is high. So 550 nm (green light) is the common minimum. This tests data_relationships across three series.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 11,
        prompt: "According to Figure 1, at which wavelength did Chlorophyll a absorb more light than the carotenoid?",
        choices: [
          { label: "A", text: "400 nm" },
          { label: "B", text: "500 nm" },
          { label: "C", text: "550 nm" },
          { label: "D", text: "650 nm" },
        ],
        correctAnswer: "D",
        explanation:
          "At 650 nm, Chlorophyll a absorbs 70% versus the carotenoid's 4%, so Chl a is clearly higher. At 400 nm (40 vs 45), 500 nm (22 vs 60), and 550 nm (10 vs 20) the carotenoid absorbs more than Chlorophyll a. Only at 650 nm does Chl a exceed the carotenoid, which is nearly transparent there. This tests data_relationships (comparing two series at one x-value).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 12,
        prompt: "A leaf appears green because it reflects (does not absorb) green light near 550 nm. The data in Figure 1 support this because, near 550 nm, the pigments:",
        choices: [
          { label: "A", text: "absorb more light than at any other wavelength" },
          { label: "B", text: "absorb the least light of any wavelength shown" },
          { label: "C", text: "absorb equal amounts of light at every wavelength" },
          { label: "D", text: "absorb only red light" },
        ],
        correctAnswer: "B",
        explanation:
          "Reflected light is light that is not absorbed. If leaves reflect green (~550 nm) light, the pigments must absorb little there — and Figure 1 shows 550 nm as the low point for all three pigments. A claims maximum absorption (opposite), C claims a flat spectrum (the curves vary widely), and D contradicts the strong 450 nm blue absorption. This tests predictions_conclusions (linking a model to the data).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 13,
        prompt: "A student claims: 'Every pigment absorbs its maximum light at 450 nm.' Do Figure 1 and Table 1 support this claim?",
        choices: [
          { label: "A", text: "Yes; Table 1 lists 450 nm as the peak wavelength for all three pigments." },
          { label: "B", text: "No; Chlorophyll a peaks at 650 nm according to Figure 1." },
          { label: "C", text: "No; the carotenoid peaks at 500 nm according to Figure 1." },
          { label: "D", text: "Yes, but only for the two chlorophylls." },
        ],
        correctAnswer: "A",
        explanation:
          "Table 1 lists the peak wavelength as 450 nm for Chlorophyll a, Chlorophyll b, and the carotenoid, so the claim is supported. In Figure 1, each pigment's highest point is at 450 nm (88, 55, 72%). B is wrong — Chl a's 450 nm value (88%) exceeds its 650 nm value (70%); C is wrong — the carotenoid at 450 nm (72%) exceeds its 500 nm value (60%); D wrongly excludes the carotenoid. This tests model_evaluation (checking a claim against the data).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 14,
        prompt: "According to Figure 1, between 500 nm and 650 nm, the carotenoid's absorption:",
        choices: [
          { label: "A", text: "increased continuously" },
          { label: "B", text: "decreased continuously" },
          { label: "C", text: "stayed constant" },
          { label: "D", text: "rose and then fell" },
        ],
        correctAnswer: "B",
        explanation:
          "The carotenoid values from 500 to 650 nm are 60, 20, 6, 4 — a continuous decrease. A reverses it, C ignores the change, and D describes a peak that does not occur in this interval. This tests data_translation (describing a trend segment of a curve).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // P3 — data_representation — formOrder 15-20
  // Density-column layering of liquids
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Densities of Household Liquids",
    passageType: "data_representation",
    diagnosticForm: 1,
    body: `A density column is made by carefully pouring liquids into a tube; liquids that do not mix arrange themselves with the densest at the bottom. Students measured the density of six liquids by weighing a fixed 50.0 mL sample of each on a balance. Density equals mass divided by volume. They recorded each liquid's measured mass and computed its density.

{{figure:t1}}

The students also chilled one liquid, corn syrup, to several temperatures and measured its density at each, since density can change with temperature.

{{figure:f1}}`,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Mass and density of 50.0 mL samples at room temperature",
        columns: [
          { key: "liquid", header: "Liquid" },
          { key: "mass", header: "Mass of 50.0 mL (g)", align: "right" },
          { key: "density", header: "Density (g/mL)", align: "right" },
        ],
        rows: [
          { liquid: "Vegetable oil", mass: 45.5, density: 0.91 },
          { liquid: "Water", mass: 50.0, density: 1.00 },
          { liquid: "Whole milk", mass: 51.5, density: 1.03 },
          { liquid: "Dish soap", mass: 55.0, density: 1.10 },
          { liquid: "Corn syrup", mass: 69.0, density: 1.38 },
          { liquid: "Honey", mass: 72.0, density: 1.44 },
        ],
      },
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Density of corn syrup vs. temperature",
        chartType: "line",
        xAxis: { label: "Temperature", unit: "°C", dataKey: "temp", type: "number" },
        yAxis: { label: "Density", unit: "g/mL" },
        series: [
          {
            name: "Corn syrup",
            dataKey: "d",
            data: [
              { temp: 5, d: 1.42 },
              { temp: 15, d: 1.40 },
              { temp: 25, d: 1.38 },
              { temp: 35, d: 1.36 },
              { temp: 45, d: 1.34 },
            ],
          },
        ],
        legend: false,
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 1,
        estimatedTimeSec: 45,
        diagnosticForm: 1,
        formOrder: 15,
        prompt: "According to Table 1, which liquid had the greatest density?",
        choices: [
          { label: "A", text: "Vegetable oil" },
          { label: "B", text: "Water" },
          { label: "C", text: "Corn syrup" },
          { label: "D", text: "Honey" },
        ],
        correctAnswer: "D",
        explanation:
          "Honey's density of 1.44 g/mL is the largest value in the density column (next is corn syrup at 1.38). Vegetable oil (0.91) is the least dense, and water is 1.00. This is a read_data maximum lookup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 16,
        prompt: "If all six liquids from Table 1 were poured into a density column and did not mix, which liquid would rest at the very bottom?",
        choices: [
          { label: "A", text: "Vegetable oil" },
          { label: "B", text: "Water" },
          { label: "C", text: "Dish soap" },
          { label: "D", text: "Honey" },
        ],
        correctAnswer: "D",
        explanation:
          "The passage states the densest liquid settles at the bottom. Honey is densest (1.44 g/mL), so it rests at the bottom. Vegetable oil (0.91) is the least dense and would float on top; water and dish soap are intermediate. This tests data_relationships (applying the density rule to the table).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 17,
        prompt: "Based on Table 1, a liquid will float on water only if its density is less than 1.00 g/mL. How many of the six liquids would float on water?",
        choices: [
          { label: "A", text: "One" },
          { label: "B", text: "Two" },
          { label: "C", text: "Three" },
          { label: "D", text: "Five" },
        ],
        correctAnswer: "A",
        explanation:
          "Only vegetable oil (0.91 g/mL) is below 1.00 g/mL. Water is exactly 1.00 (it does not float on itself), and milk, dish soap, corn syrup, and honey are all denser than water. So exactly one liquid floats. This tests data_relationships (counting rows meeting a condition).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 18,
        prompt: "According to Figure 1, as the temperature of corn syrup increased from 5 °C to 45 °C, its density:",
        choices: [
          { label: "A", text: "increased from 1.34 to 1.42 g/mL" },
          { label: "B", text: "decreased from 1.42 to 1.34 g/mL" },
          { label: "C", text: "stayed at 1.38 g/mL" },
          { label: "D", text: "rose and then fell" },
        ],
        correctAnswer: "B",
        explanation:
          "Figure 1 shows density falling from 1.42 g/mL at 5 °C to 1.34 g/mL at 45 °C. A reverses the direction, C reports only the 25 °C value, and D describes a peak that never appears (the line falls steadily). This tests data_translation (reading a trend and its endpoints).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 19,
        prompt: "Based on Figure 1, if corn syrup were cooled to 0 °C, its density would most likely be closest to:",
        choices: [
          { label: "A", text: "1.34 g/mL" },
          { label: "B", text: "1.38 g/mL" },
          { label: "C", text: "1.43 g/mL" },
          { label: "D", text: "1.50 g/mL" },
        ],
        correctAnswer: "C",
        explanation:
          "Density rises about 0.02 g/mL for each 10 °C drop (1.34 at 45 → 1.42 at 5). Extending the trend from 1.42 at 5 °C down to 0 °C adds roughly 0.01, giving about 1.43 g/mL. 1.34 and 1.38 are warmer-temperature values, and 1.50 overshoots the steady trend. This tests predictions_conclusions by extrapolation.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_translation",
        difficulty: 3,
        estimatedTimeSec: 55,
        diagnosticForm: 1,
        formOrder: 20,
        prompt: "The density values in Table 1 were computed from the measured masses. Which liquid's 50.0 mL sample had a mass closest to 55 g?",
        choices: [
          { label: "A", text: "Water" },
          { label: "B", text: "Whole milk" },
          { label: "C", text: "Dish soap" },
          { label: "D", text: "Corn syrup" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 1 lists the mass of the 50.0 mL dish soap sample as 55.0 g. Water is 50.0 g, whole milk 51.5 g, and corn syrup 69.0 g. (Consistency check: 55.0 g ÷ 50.0 mL = 1.10 g/mL, matching the density column.) This tests data_translation (linking mass and density columns).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // P4 — research_summary — formOrder 21-27
  // Enzyme activity experiments
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Temperature and pH Effects on an Enzyme",
    passageType: "research_summary",
    diagnosticForm: 1,
    body: `Catalase is an enzyme that breaks hydrogen peroxide into water and oxygen gas. Students studied catalase activity by adding a fixed amount of enzyme to hydrogen peroxide and measuring the volume of oxygen gas produced in one minute. More gas per minute means greater enzyme activity.

Experiment 1
Students ran the reaction at seven temperatures, holding the pH constant at 7.0. All other conditions were identical. They recorded the oxygen produced in one minute at each temperature.

{{figure:f1}}

Experiment 2
Students then held the temperature constant at 35 °C and varied the pH of the solution. They recorded the oxygen produced in one minute at each pH.

{{figure:t1}}`,
    figures: [
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Experiment 1: Oxygen produced vs. temperature (pH held at 7.0)",
        chartType: "line",
        xAxis: { label: "Temperature", unit: "°C", dataKey: "temp", type: "number" },
        yAxis: { label: "Oxygen produced", unit: "mL/min" },
        series: [
          {
            name: "Oxygen produced",
            dataKey: "o2",
            data: [
              { temp: 10, o2: 6 },
              { temp: 20, o2: 14 },
              { temp: 30, o2: 26 },
              { temp: 40, o2: 38 },
              { temp: 50, o2: 22 },
              { temp: 60, o2: 8 },
              { temp: 70, o2: 1 },
            ],
          },
        ],
        legend: false,
      },
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Experiment 2: Oxygen produced vs. pH (temperature held at 35 °C)",
        columns: [
          { key: "ph", header: "pH", align: "right" },
          { key: "o2", header: "Oxygen produced (mL/min)", align: "right" },
        ],
        rows: [
          { ph: 3, o2: 5 },
          { ph: 5, o2: 18 },
          { ph: 7, o2: 34 },
          { ph: 9, o2: 20 },
          { ph: 11, o2: 4 },
        ],
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 21,
        prompt: "In Experiment 1 (Figure 1), how much oxygen was produced per minute at 30 °C?",
        choices: [
          { label: "A", text: "14 mL/min" },
          { label: "B", text: "26 mL/min" },
          { label: "C", text: "38 mL/min" },
          { label: "D", text: "22 mL/min" },
        ],
        correctAnswer: "B",
        explanation:
          "Figure 1 plots 26 mL/min at 30 °C. 14 is the 20 °C value, 38 is the 40 °C value, and 22 is the 50 °C value. This is a read_data point lookup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 22,
        prompt: "In Experiment 1, at which temperature was catalase activity greatest?",
        choices: [
          { label: "A", text: "10 °C" },
          { label: "B", text: "40 °C" },
          { label: "C", text: "50 °C" },
          { label: "D", text: "70 °C" },
        ],
        correctAnswer: "B",
        explanation:
          "Oxygen production peaks at 38 mL/min at 40 °C, then declines. 10 °C (6 mL/min) and 70 °C (1 mL/min) are near the extremes, and 50 °C (22 mL/min) is past the peak. This tests data_relationships (locating a maximum in a curve).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 23,
        prompt: "In Experiment 2, as pH increased from 3 to 11, oxygen production:",
        choices: [
          { label: "A", text: "increased continuously" },
          { label: "B", text: "decreased continuously" },
          { label: "C", text: "increased to a maximum at pH 7, then decreased" },
          { label: "D", text: "stayed constant" },
        ],
        correctAnswer: "C",
        explanation:
          "Table 1 shows 5, 18, 34, 20, 4 mL/min as pH goes 3, 5, 7, 9, 11 — a rise to a peak of 34 at pH 7, then a fall. A and B ignore the reversal, and D contradicts the wide variation. This tests data_relationships (recognizing a peaked pattern).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 24,
        prompt: "In Experiment 1, which variable did the students deliberately change from trial to trial?",
        choices: [
          { label: "A", text: "The pH of the solution" },
          { label: "B", text: "The temperature of the reaction" },
          { label: "C", text: "The amount of enzyme added" },
          { label: "D", text: "The measuring time (one minute)" },
        ],
        correctAnswer: "B",
        explanation:
          "Experiment 1 varied temperature while holding pH at 7.0, the enzyme amount fixed, and the timing at one minute. So temperature is the independent variable. pH, enzyme amount, and time were all held constant (controls). This tests experimental_design (identifying the manipulated variable).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 25,
        prompt: "How did Experiment 2 differ from Experiment 1?",
        choices: [
          { label: "A", text: "Experiment 2 varied pH while holding temperature constant; Experiment 1 varied temperature while holding pH constant." },
          { label: "B", text: "Experiment 2 measured carbon dioxide instead of oxygen." },
          { label: "C", text: "Experiment 2 used a different enzyme than Experiment 1." },
          { label: "D", text: "Experiment 2 varied temperature while Experiment 1 varied pH." },
        ],
        correctAnswer: "A",
        explanation:
          "Experiment 1 varied temperature (pH fixed at 7.0); Experiment 2 varied pH (temperature fixed at 35 °C). Both measured oxygen from catalase, so B and C are false, and D swaps the two experiments' variables. This tests compare_experiments (identifying the design difference).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 26,
        prompt: "A new trial is run at 40 °C and pH 7.0. Based on both experiments, the oxygen produced in one minute would most likely be about:",
        choices: [
          { label: "A", text: "4 mL/min" },
          { label: "B", text: "18 mL/min" },
          { label: "C", text: "38 mL/min" },
          { label: "D", text: "70 mL/min" },
        ],
        correctAnswer: "C",
        explanation:
          "Experiment 1 (pH 7.0) gave 38 mL/min at 40 °C — the enzyme's best temperature. Experiment 2 shows pH 7 is also the best pH (34 mL/min at 35 °C). Combining both optima, a 40 °C, pH 7.0 trial should be near the top observed values, about 38 mL/min. 4 and 18 are far off-peak, and 70 exceeds any measured value. This tests compare_experiments (predicting a combined-optimum result).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 27,
        prompt: "A student hypothesizes: 'Catalase activity always increases as temperature increases.' Do the Experiment 1 results support this hypothesis?",
        choices: [
          { label: "A", text: "Yes; oxygen production rose at every temperature tested." },
          { label: "B", text: "No; oxygen production rose up to 40 °C but then fell at higher temperatures." },
          { label: "C", text: "Yes; oxygen production was highest at 70 °C." },
          { label: "D", text: "No; oxygen production fell at every temperature tested." },
        ],
        correctAnswer: "B",
        explanation:
          "Oxygen rose from 10 to 40 °C (6 → 38 mL/min) but then fell from 40 to 70 °C (38 → 1 mL/min), so activity does not always increase — the hypothesis is not supported. A and C misread the decline above 40 °C (70 °C is nearly the lowest), and D ignores the initial rise. This tests hypothesis_testing (evaluating a claim against a peaked dataset).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // P5 — research_summary — formOrder 28-33
  // Plant growth under light color
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Seedling Growth Under Colored Light",
    passageType: "research_summary",
    diagnosticForm: 1,
    body: `Students investigated how the color of light affects the growth of bean seedlings. Identical seedlings were grown for 14 days, each group under lamps of a single color but of equal brightness (measured in lux). All groups received the same water, soil, temperature, and day length. After 14 days the students measured the average stem height and the average number of leaves per plant.

Study 1
Four groups of seedlings were grown under red, green, blue, or white light of equal brightness.

{{figure:t1}}

Study 2
A separate set of seedlings was grown under white light at four different brightness levels to see whether brightness alone affected growth. Stem height after 14 days was recorded.

{{figure:f1}}`,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Study 1: Growth after 14 days under equal-brightness colored light",
        columns: [
          { key: "color", header: "Light color" },
          { key: "height", header: "Avg stem height (cm)", align: "right" },
          { key: "leaves", header: "Avg leaves per plant", align: "right" },
        ],
        rows: [
          { color: "Red", height: 14.2, leaves: 6 },
          { color: "Green", height: 6.1, leaves: 3 },
          { color: "Blue", height: 11.8, leaves: 7 },
          { color: "White", height: 15.6, leaves: 8 },
        ],
      },
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Study 2: Stem height vs. brightness under white light",
        chartType: "line",
        xAxis: { label: "Brightness", unit: "lux", dataKey: "lux", type: "number" },
        yAxis: { label: "Avg stem height", unit: "cm" },
        series: [
          {
            name: "Stem height",
            dataKey: "h",
            data: [
              { lux: 2000, h: 8.0 },
              { lux: 4000, h: 12.5 },
              { lux: 6000, h: 15.6 },
              { lux: 8000, h: 16.2 },
            ],
          },
        ],
        legend: false,
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 28,
        prompt: "In Study 1 (Table 1), the average stem height under blue light was:",
        choices: [
          { label: "A", text: "6.1 cm" },
          { label: "B", text: "11.8 cm" },
          { label: "C", text: "14.2 cm" },
          { label: "D", text: "15.6 cm" },
        ],
        correctAnswer: "B",
        explanation:
          "Table 1 lists 11.8 cm for the blue group. 6.1 cm is green, 14.2 cm is red, and 15.6 cm is white. This is a read_data lookup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 29,
        prompt: "In Study 1, which light color produced both the shortest stems and the fewest leaves?",
        choices: [
          { label: "A", text: "Red" },
          { label: "B", text: "Green" },
          { label: "C", text: "Blue" },
          { label: "D", text: "White" },
        ],
        correctAnswer: "B",
        explanation:
          "Green light gave the lowest stem height (6.1 cm) and the fewest leaves (3). Red, blue, and white all produced taller stems and more leaves. This tests data_relationships (matching minima across two columns).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "experimental_design",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 30,
        prompt: "Why did the students keep water, soil, temperature, and day length the same for every group in Study 1?",
        choices: [
          { label: "A", text: "To make the seedlings grow faster overall" },
          { label: "B", text: "So that any growth differences could be attributed to light color rather than to those factors" },
          { label: "C", text: "To increase the number of leaves per plant" },
          { label: "D", text: "Because those factors do not affect plant growth" },
        ],
        correctAnswer: "B",
        explanation:
          "Holding water, soil, temperature, and day length constant controls those variables, so differences in growth can be linked to the one factor that changed — light color. A and C misstate the purpose of a control, and D is false (those factors do affect growth, which is exactly why they are held constant). This tests experimental_design (purpose of controls).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "hypothesis_testing",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 31,
        prompt: "A student suggests that the tall stems in the white-light group of Study 1 might be caused simply by white light being brighter than the colored lights. Which feature of the studies makes this explanation unlikely?",
        choices: [
          { label: "A", text: "In Study 1 all lamps were set to equal brightness." },
          { label: "B", text: "Study 2 used only white light." },
          { label: "C", text: "The seedlings were grown for 14 days." },
          { label: "D", text: "Stem height was measured in centimeters." },
        ],
        correctAnswer: "A",
        explanation:
          "The passage states that in Study 1 all lamps were of equal brightness, so brightness cannot explain why white outperformed the colors — the only difference was color. B, C, and D are true statements but do not address the brightness question. This tests hypothesis_testing (using experimental design to rule out an alternative explanation).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 32,
        prompt: "In Study 2 (Figure 1), as brightness increased from 2000 to 8000 lux, stem height:",
        choices: [
          { label: "A", text: "decreased steadily" },
          { label: "B", text: "increased, with the gains getting smaller at higher brightness" },
          { label: "C", text: "stayed constant" },
          { label: "D", text: "increased at a constant rate" },
        ],
        correctAnswer: "B",
        explanation:
          "Heights are 8.0, 12.5, 15.6, 16.2 cm. The step gains are 4.5, 3.1, 0.6 — increasing but leveling off. A reverses the direction, C ignores the rise, and D claims equal steps, but the gains shrink. This tests data_relationships (reading the shape of a curve).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "scientific_investigation",
        subSkill: "compare_experiments",
        difficulty: 4,
        estimatedTimeSec: 70,
        diagnosticForm: 1,
        formOrder: 33,
        prompt: "The white-light seedlings in Study 1 were grown at 6000 lux. Their average height (15.6 cm) is consistent with which point in Study 2?",
        choices: [
          { label: "A", text: "The 2000 lux point (8.0 cm)" },
          { label: "B", text: "The 4000 lux point (12.5 cm)" },
          { label: "C", text: "The 6000 lux point (15.6 cm)" },
          { label: "D", text: "None; the two studies disagree." },
        ],
        correctAnswer: "C",
        explanation:
          "Study 2's 6000 lux white-light height is 15.6 cm — exactly the Study 1 white value, since both used white light at 6000 lux. This cross-check shows the studies agree. A and B are lower-brightness points, and D is false because the values match. This tests compare_experiments (linking a result across two studies).",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // P6 — conflicting_viewpoints — formOrder 34-40
  // Origin of a lake's summer fish die-offs
  // -------------------------------------------------------------------------
  {
    subject: "SCIENCE",
    title: "Explaining Summer Fish Die-Offs in Lake Verde",
    passageType: "conflicting_viewpoints",
    diagnosticForm: 1,
    body: `Each summer, many fish die in Lake Verde, a shallow lake bordered by farms. Two scientists propose different explanations. Both agree the deaths occur mainly on warm, still nights in late summer.

Scientist 1 (Oxygen Hypothesis)
The deaths are caused by low dissolved oxygen. Warm water holds less dissolved oxygen than cool water. On hot days, algae grow rapidly; at night the algae and bacteria consume oxygen faster than it is replenished, and by dawn oxygen falls below what fish need. Wind normally mixes oxygen-rich surface water downward, but on still nights this mixing stops, so the deepest water — where many fish rest at night — becomes nearly oxygen-free. Fish suffocate before sunrise.

Scientist 2 (Ammonia Hypothesis)
The deaths are caused by ammonia poisoning. Fertilizer runoff from the surrounding farms carries nitrogen compounds into the lake, and decaying algae release ammonia. Ammonia is far more toxic to fish in its un-ionized form, and the fraction that is un-ionized rises sharply as both water temperature and pH increase. On warm afternoons, intense algal photosynthesis raises the water's pH. The combination of warm water and high pH converts enough ammonia to its toxic form to kill the fish, independent of the oxygen level.

{{figure:t1}}

A team measured conditions in Lake Verde over one late-summer night, from evening through the following morning.

{{figure:f1}}`,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Fraction of total ammonia in the toxic un-ionized form (%)",
        columns: [
          { key: "temp", header: "Water temp (°C)", align: "right" },
          { key: "ph8", header: "At pH 8.0 (%)", align: "right" },
          { key: "ph9", header: "At pH 9.0 (%)", align: "right" },
        ],
        rows: [
          { temp: 20, ph8: 4, ph9: 28 },
          { temp: 25, ph8: 6, ph9: 36 },
          { temp: 30, ph8: 9, ph9: 45 },
        ],
      },
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Overnight measurements in Lake Verde",
        chartType: "line",
        xAxis: { label: "Time", unit: "h", dataKey: "hour", type: "number" },
        yAxis: { label: "Value" },
        series: [
          {
            name: "Dissolved oxygen (mg/L)",
            dataKey: "o2",
            data: [
              { hour: 18, o2: 8.5 },
              { hour: 21, o2: 6.0 },
              { hour: 0, o2: 4.2 },
              { hour: 3, o2: 2.5 },
              { hour: 6, o2: 1.4 },
            ],
          },
          {
            name: "pH",
            dataKey: "ph",
            data: [
              { hour: 18, ph: 9.0 },
              { hour: 21, ph: 8.6 },
              { hour: 0, ph: 8.2 },
              { hour: 3, ph: 7.9 },
              { hour: 6, ph: 7.7 },
            ],
          },
        ],
        legend: true,
      },
    ],
    questions: [
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 2,
        estimatedTimeSec: 55,
        diagnosticForm: 1,
        formOrder: 34,
        prompt: "According to Scientist 1, the fish die because:",
        choices: [
          { label: "A", text: "ammonia from fertilizer poisons them" },
          { label: "B", text: "dissolved oxygen falls too low for them to breathe" },
          { label: "C", text: "the water becomes too acidic" },
          { label: "D", text: "algae physically block their gills" },
        ],
        correctAnswer: "B",
        explanation:
          "Scientist 1's Oxygen Hypothesis states that nighttime oxygen consumption drops dissolved oxygen below what fish need, so they suffocate. Ammonia poisoning (A) is Scientist 2's view, and acidity (C) and gill-blocking (D) are not claimed by either. This tests model_comprehension (restating a viewpoint's core claim).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_comprehension",
        difficulty: 3,
        estimatedTimeSec: 60,
        diagnosticForm: 1,
        formOrder: 35,
        prompt: "According to Scientist 2, the fraction of ammonia in its toxic form rises when:",
        choices: [
          { label: "A", text: "water temperature and pH both increase" },
          { label: "B", text: "water temperature and pH both decrease" },
          { label: "C", text: "dissolved oxygen increases" },
          { label: "D", text: "wind mixing stops" },
        ],
        correctAnswer: "A",
        explanation:
          "Scientist 2 states the un-ionized (toxic) fraction 'rises sharply as both water temperature and pH increase.' B reverses this, C refers to oxygen (Scientist 1's variable), and D is Scientist 1's mixing mechanism. This tests model_comprehension.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "read_data",
        difficulty: 2,
        estimatedTimeSec: 50,
        diagnosticForm: 1,
        formOrder: 36,
        prompt: "According to Table 1, at 30 °C and pH 9.0, what percent of the total ammonia is in the toxic un-ionized form?",
        choices: [
          { label: "A", text: "9%" },
          { label: "B", text: "28%" },
          { label: "C", text: "36%" },
          { label: "D", text: "45%" },
        ],
        correctAnswer: "D",
        explanation:
          "The 30 °C row, pH 9.0 column of Table 1 gives 45%. 9% is 30 °C at pH 8.0, 28% is 20 °C at pH 9.0, and 36% is 25 °C at pH 9.0. This is a read_data table lookup.",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "interpretation_of_data",
        subSkill: "data_relationships",
        difficulty: 3,
        estimatedTimeSec: 65,
        diagnosticForm: 1,
        formOrder: 37,
        prompt: "According to Table 1, the toxic fraction of ammonia is most affected by pH in what way?",
        choices: [
          { label: "A", text: "At every temperature, raising pH from 8.0 to 9.0 sharply increases the toxic fraction." },
          { label: "B", text: "At every temperature, raising pH from 8.0 to 9.0 decreases the toxic fraction." },
          { label: "C", text: "pH has no effect on the toxic fraction." },
          { label: "D", text: "Raising pH matters only at 20 °C." },
        ],
        correctAnswer: "A",
        explanation:
          "At each temperature the pH 9.0 value greatly exceeds the pH 8.0 value: 4→28 (20 °C), 6→36 (25 °C), 9→45 (30 °C). So higher pH sharply raises the toxic fraction at every temperature. B reverses the effect, C denies the large differences, and D falsely limits it to one temperature. This tests data_relationships (comparing two columns across rows).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 4,
        estimatedTimeSec: 75,
        diagnosticForm: 1,
        formOrder: 38,
        prompt: "The die-offs occur mainly just before dawn (around 6 a.m.). Which pattern in Figure 1 most directly supports Scientist 1's hypothesis over Scientist 2's?",
        choices: [
          { label: "A", text: "Dissolved oxygen reaches its lowest value (1.4 mg/L) at 6 a.m." },
          { label: "B", text: "pH reaches its highest value at 6 a.m." },
          { label: "C", text: "Both oxygen and pH are highest at 6 p.m." },
          { label: "D", text: "pH falls through the night." },
        ],
        correctAnswer: "A",
        explanation:
          "Scientist 1 predicts deaths when oxygen is lowest. Figure 1 shows oxygen falling all night to its minimum of 1.4 mg/L at 6 a.m., matching the timing of the die-offs. In contrast, pH is highest at 6 p.m. and falls overnight (choices B and D are backwards or unhelpful to Scientist 2's dawn timing), and C describes the evening, not dawn. Because the toxic-ammonia conditions (high pH) peak in the evening while deaths occur at dawn, the oxygen pattern fits better. This tests model_evaluation (choosing the evidence that discriminates between two models).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "model_evaluation",
        difficulty: 5,
        estimatedTimeSec: 80,
        diagnosticForm: 1,
        formOrder: 39,
        prompt: "Scientist 2 argues the deaths are caused by toxic ammonia. Which finding from Figure 1 most weakens Scientist 2's hypothesis?",
        choices: [
          { label: "A", text: "pH is highest in the early evening but the deaths occur near dawn, when pH is lowest." },
          { label: "B", text: "Dissolved oxygen is highest in the early evening." },
          { label: "C", text: "pH stays above 7.0 all night." },
          { label: "D", text: "Dissolved oxygen falls below 3 mg/L after midnight." },
        ],
        correctAnswer: "A",
        explanation:
          "Higher pH means more toxic ammonia (Table 1). But Figure 1 shows pH is highest at 6 p.m. (9.0) and lowest at 6 a.m. (7.7), yet the deaths occur at dawn — when the toxic fraction should be lowest. That timing mismatch undercuts Scientist 2. B and C are neutral or even mildly consistent with either view, and D actually supports Scientist 1 (the oxygen hypothesis), not a weakness of Scientist 2 per se. This tests model_evaluation (finding data that contradicts a model).",
      },
      {
        subject: "SCIENCE",
        reportingCategory: "evaluation_of_models",
        subSkill: "predictions_conclusions",
        difficulty: 4,
        estimatedTimeSec: 75,
        diagnosticForm: 1,
        formOrder: 40,
        prompt: "Aerators are machines that pump air into a lake, raising dissolved oxygen and mixing the water. If installing aerators sharply reduced the summer fish die-offs, this result would:",
        choices: [
          { label: "A", text: "support Scientist 1 and weaken Scientist 2" },
          { label: "B", text: "support Scientist 2 and weaken Scientist 1" },
          { label: "C", text: "support both scientists equally" },
          { label: "D", text: "have no bearing on either hypothesis" },
        ],
        correctAnswer: "A",
        explanation:
          "Aerators raise oxygen and restore the mixing that Scientist 1 says fails on still nights, so fewer deaths would directly confirm the Oxygen Hypothesis. Aerators do not remove ammonia or lower pH, so a rescue by aeration argues against ammonia being the cause, weakening Scientist 2. B reverses this, and C and D ignore that oxygen — not ammonia — is what aeration changes. This tests predictions_conclusions (predicting how new evidence bears on competing models).",
      },
    ],
  },
];
