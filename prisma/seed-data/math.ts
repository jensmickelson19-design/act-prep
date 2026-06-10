import type { SeedQuestion } from "./types";

// Math seed content — hand-authored, taxonomy-compliant SeedQuestion literals.
// Every item carries an exact-string reportingCategory + subSkill from
// docs/act-taxonomy.md, a 1–5 difficulty, estimatedTimeSec, and (where the stem
// produces/interprets/evaluates a model) modeling: true.
//
// BATCH 1 (this file): Diagnostic Test 1 — 45 questions, diagnosticForm 1,
// formOrder 1–45, easy→hard ramp. Diagnostic 2 and the adaptive bank are added
// in later batches.

export const mathQuestions: SeedQuestion[] = [
  // ── formOrder 1 — number_operations — diff 1 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 1,
    estimatedTimeSec: 40,
    prompt:
      "What is the value of 6 + 3 × 4 − 2?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "34" },
      { label: "C", text: "20" },
      { label: "D", text: "28" },
    ],
    correctAnswer: "A",
    explanation:
      "Apply order of operations. Multiply first: 3 × 4 = 12. Then add and subtract left to right: 6 + 12 − 2 = 18 − 2 = 16.",
    diagnosticForm: 1,
    formOrder: 1,
  },

  // ── formOrder 2 — linear_equations — diff 1 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt: "If x + 9 = 21, what is the value of x?",
    choices: [
      { label: "A", text: "30" },
      { label: "B", text: "12" },
      { label: "C", text: "13" },
      { label: "D", text: "11" },
    ],
    correctAnswer: "B",
    explanation:
      "Subtract 9 from both sides: x = 21 − 9 = 12.",
    diagnosticForm: 1,
    formOrder: 2,
  },

  // ── formOrder 3 — word_problems — diff 1 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "A notebook costs $3. How much do 7 notebooks cost?",
    choices: [
      { label: "A", text: "$10" },
      { label: "B", text: "$24" },
      { label: "C", text: "$21" },
      { label: "D", text: "$28" },
    ],
    correctAnswer: "C",
    explanation:
      "Multiply the unit price by the quantity: 7 × $3 = $21.",
    modeling: true,
    diagnosticForm: 1,
    formOrder: 3,
  },

  // ── formOrder 4 — plane_geometry — diff 1 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "A rectangle has a length of 8 cm and a width of 5 cm. What is its area?",
    choices: [
      { label: "A", text: "13 sq cm" },
      { label: "B", text: "26 sq cm" },
      { label: "C", text: "40 sq cm" },
      { label: "D", text: "45 sq cm" },
    ],
    correctAnswer: "C",
    explanation:
      "Area of a rectangle is length times width: 8 × 5 = 40 square centimeters. (13 is the sum of the sides; 26 is the perimeter.)",
    diagnosticForm: 1,
    formOrder: 4,
  },

  // ── formOrder 5 — number_operations — diff 2 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt:
      "Which of the following lists is ordered from least to greatest?",
    choices: [
      { label: "A", text: "0.5, 0.45, 0.405" },
      { label: "B", text: "0.405, 0.45, 0.5" },
      { label: "C", text: "0.45, 0.405, 0.5" },
      { label: "D", text: "0.5, 0.405, 0.45" },
    ],
    correctAnswer: "B",
    explanation:
      "Compare place by place: 0.405 < 0.450 < 0.500. Writing each to three decimal places makes the order clear: 0.405, 0.450, 0.500.",
    diagnosticForm: 1,
    formOrder: 5,
  },

  // ── formOrder 6 — exponents_radicals — diff 2 ───────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "What is the value of 2^5?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "25" },
      { label: "C", text: "16" },
      { label: "D", text: "32" },
    ],
    correctAnswer: "D",
    explanation:
      "2^5 means 2 multiplied by itself 5 times: 2 × 2 × 2 × 2 × 2 = 32. (10 multiplies base by exponent; 16 is 2^4.)",
    diagnosticForm: 1,
    formOrder: 6,
  },

  // ── formOrder 7 — data_statistics — diff 2 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "The high temperatures, in degrees, on five days were 71, 68, 74, 71, and 66. What is the mean high temperature?",
    choices: [
      { label: "A", text: "70" },
      { label: "B", text: "71" },
      { label: "C", text: "68" },
      { label: "D", text: "72" },
    ],
    correctAnswer: "A",
    explanation:
      "The mean is the sum divided by the count: (71 + 68 + 74 + 71 + 66) ÷ 5 = 350 ÷ 5 = 70. (71 is the mode and median, not the mean.)",
    diagnosticForm: 1,
    formOrder: 7,
  },

  // ── formOrder 8 — expressions_polynomials — diff 2 ──────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt:
      "Which expression is equivalent to 5(2x − 3) + 4x?",
    choices: [
      { label: "A", text: "14x − 3" },
      { label: "B", text: "10x − 15" },
      { label: "C", text: "14x − 15" },
      { label: "D", text: "6x − 15" },
    ],
    correctAnswer: "C",
    explanation:
      "Distribute the 5: 5(2x − 3) = 10x − 15. Add 4x: 10x − 15 + 4x = 14x − 15. (14x − 3 forgets to distribute the 5 to the −3.)",
    diagnosticForm: 1,
    formOrder: 8,
  },

  // ── formOrder 9 — function_basics — diff 2 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt:
      "If f(x) = 3x − 5, what is the value of f(4)?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "7" },
      { label: "C", text: "12" },
      { label: "D", text: "17" },
    ],
    correctAnswer: "B",
    explanation:
      "Substitute x = 4: f(4) = 3(4) − 5 = 12 − 5 = 7. (12 forgets to subtract 5; 2 computes 3 + 4 − 5.)",
    diagnosticForm: 1,
    formOrder: 9,
  },

  // ── formOrder 10 — inequalities — diff 2 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "Which value of x is a solution to the inequality x + 6 ≤ 10?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "4" },
      { label: "C", text: "6" },
      { label: "D", text: "8" },
    ],
    correctAnswer: "B",
    explanation:
      "Subtract 6 from both sides: x ≤ 4. Of the choices, only 4 satisfies x ≤ 4 (4 ≤ 4 is true); 5, 6, and 8 are all greater than 4.",
    diagnosticForm: 1,
    formOrder: 10,
  },

  // ── formOrder 11 — right_triangle_trig — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "14" },
      { label: "C", text: "12" },
      { label: "D", text: "48" },
    ],
    correctAnswer: "A",
    explanation:
      "By the Pythagorean theorem, c² = 6² + 8² = 36 + 64 = 100, so c = 10. (14 incorrectly adds the legs; 48 multiplies them.)",
    diagnosticForm: 1,
    formOrder: 11,
  },

  // ── formOrder 12 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "What is the slope of the line passing through the points (2, 3) and (6, 11)?",
    choices: [
      { label: "A", text: "1/2" },
      { label: "B", text: "2" },
      { label: "C", text: "4" },
      { label: "D", text: "−2" },
    ],
    correctAnswer: "B",
    explanation:
      "Slope = (change in y) / (change in x) = (11 − 3) / (6 − 2) = 8 / 4 = 2. (Choice A inverts the ratio.)",
    diagnosticForm: 1,
    formOrder: 12,
  },

  // ── formOrder 13 — probability — diff 3 ─────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "A drawer holds 5 black socks and 7 white socks. If one sock is drawn at random, what is the probability it is black?",
    choices: [
      { label: "A", text: "5/7" },
      { label: "B", text: "7/12" },
      { label: "C", text: "1/2" },
      { label: "D", text: "5/12" },
    ],
    correctAnswer: "D",
    explanation:
      "Probability = favorable outcomes / total outcomes. There are 5 black socks out of 5 + 7 = 12 socks, so P(black) = 5/12. (Choice B is P(white).)",
    diagnosticForm: 1,
    formOrder: 13,
  },

  // ── formOrder 14 — linear_equations — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "If 4x − 7 = 2x + 9, what is the value of x?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "8" },
      { label: "C", text: "16" },
      { label: "D", text: "−8" },
    ],
    correctAnswer: "B",
    explanation:
      "Subtract 2x from both sides: 2x − 7 = 9. Add 7: 2x = 16. Divide by 2: x = 8. (Choice C stops at 2x = 16.)",
    diagnosticForm: 1,
    formOrder: 14,
  },

  // ── formOrder 15 — sequences — diff 3 ───────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "The first four terms of an arithmetic sequence are 7, 12, 17, 22, … What is the 9th term?",
    choices: [
      { label: "A", text: "42" },
      { label: "B", text: "45" },
      { label: "C", text: "47" },
      { label: "D", text: "52" },
    ],
    correctAnswer: "C",
    explanation:
      "The common difference is 5. The nth term is 7 + (n − 1)(5). For n = 9: 7 + 8(5) = 7 + 40 = 47. (Choice A uses n instead of n − 1.)",
    diagnosticForm: 1,
    formOrder: 15,
  },

  // ── formOrder 16 — quadratics — diff 3 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What are the solutions to x² − 36 = 0?",
    choices: [
      { label: "A", text: "x = 6 only" },
      { label: "B", text: "x = 6 and x = −6" },
      { label: "C", text: "x = 18 and x = −18" },
      { label: "D", text: "x = 36 and x = −36" },
    ],
    correctAnswer: "B",
    explanation:
      "This is a difference of squares: x² − 36 = (x − 6)(x + 6) = 0, so x = 6 or x = −6. (Choice A misses the negative root; choice C divides 36 by 2.)",
    diagnosticForm: 1,
    formOrder: 16,
  },

  // ── formOrder 17 — quadratics — diff 3 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What are the solutions to x² − 9x + 20 = 0?",
    choices: [
      { label: "A", text: "x = −4 and x = −5" },
      { label: "B", text: "x = 4 and x = 5" },
      { label: "C", text: "x = 2 and x = 10" },
      { label: "D", text: "x = −2 and x = −10" },
    ],
    correctAnswer: "B",
    explanation:
      "Find two numbers that multiply to 20 and add to 9: 4 and 5. So x² − 9x + 20 = (x − 4)(x − 5) = 0, giving x = 4 or x = 5. (Choice A has the signs reversed.)",
    diagnosticForm: 1,
    formOrder: 17,
  },

  // ── formOrder 18 — plane_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "In a triangle, two of the interior angles measure 52° and 73°. What is the measure of the third angle?",
    choices: [
      { label: "A", text: "125°" },
      { label: "B", text: "65°" },
      { label: "C", text: "55°" },
      { label: "D", text: "45°" },
    ],
    correctAnswer: "C",
    explanation:
      "The interior angles of a triangle sum to 180°. The third angle is 180° − 52° − 73° = 180° − 125° = 55°. (Choice A is the sum of the two given angles.)",
    diagnosticForm: 1,
    formOrder: 18,
  },

  // ── formOrder 19 — function_basics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "If f(x) = x² + 1 and g(x) = 2x, what is the value of f(g(3))?",
    choices: [
      { label: "A", text: "19" },
      { label: "B", text: "37" },
      { label: "C", text: "20" },
      { label: "D", text: "13" },
    ],
    correctAnswer: "B",
    explanation:
      "Work from the inside out. g(3) = 2(3) = 6. Then f(6) = 6² + 1 = 36 + 1 = 37. (Choice A computes g(f(3)) instead.)",
    diagnosticForm: 1,
    formOrder: 19,
  },

  // ── formOrder 20 — word_problems — diff 3 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A car uses 12 gallons of gas to travel 336 miles. At this rate, how many gallons are needed to travel 504 miles?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "18" },
      { label: "C", text: "21" },
      { label: "D", text: "28" },
    ],
    correctAnswer: "B",
    explanation:
      "The fuel rate is 336 ÷ 12 = 28 miles per gallon. Gallons needed = 504 ÷ 28 = 18. (Choice D is the miles-per-gallon rate, not the gallons.)",
    modeling: true,
    diagnosticForm: 1,
    formOrder: 20,
  },

  // ── formOrder 21 — data_statistics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "The median of the data set 4, 9, 11, 15, 15, 20, 23 is which value?",
    choices: [
      { label: "A", text: "11" },
      { label: "B", text: "15" },
      { label: "C", text: "14" },
      { label: "D", text: "13.86" },
    ],
    correctAnswer: "B",
    explanation:
      "The list has 7 values already in order. The median is the middle (4th) value: 4, 9, 11, [15], 15, 20, 23. The median is 15. (Choice D is the mean.)",
    diagnosticForm: 1,
    formOrder: 21,
  },

  // ── formOrder 22 — inequalities — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Which of the following describes all solutions to −3x + 4 < 19?",
    choices: [
      { label: "A", text: "x < −5" },
      { label: "B", text: "x > −5" },
      { label: "C", text: "x < 5" },
      { label: "D", text: "x > 5" },
    ],
    correctAnswer: "B",
    explanation:
      "Subtract 4: −3x < 15. Divide by −3 and flip the inequality sign (dividing by a negative): x > −5. (Choice A forgets to flip the sign.)",
    diagnosticForm: 1,
    formOrder: 22,
  },

  // ── formOrder 23 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the midpoint of the segment with endpoints (−2, 5) and (8, −1)?",
    choices: [
      { label: "A", text: "(3, 2)" },
      { label: "B", text: "(5, 4)" },
      { label: "C", text: "(6, 6)" },
      { label: "D", text: "(10, −6)" },
    ],
    correctAnswer: "A",
    explanation:
      "The midpoint averages the coordinates: x = (−2 + 8)/2 = 3, y = (5 + (−1))/2 = 2. The midpoint is (3, 2). (Choice D is the difference of the endpoints.)",
    diagnosticForm: 1,
    formOrder: 23,
  },

  // ── formOrder 24 — expressions_polynomials — diff 3 ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which expression is equivalent to (2x + 3)(x − 5)?",
    choices: [
      { label: "A", text: "2x² − 15" },
      { label: "B", text: "2x² − 7x − 15" },
      { label: "C", text: "2x² + 13x − 15" },
      { label: "D", text: "2x² − 7x + 15" },
    ],
    correctAnswer: "B",
    explanation:
      "Use FOIL: (2x)(x) = 2x², (2x)(−5) = −10x, (3)(x) = 3x, (3)(−5) = −15. Combine: 2x² − 10x + 3x − 15 = 2x² − 7x − 15.",
    diagnosticForm: 1,
    formOrder: 24,
  },

  // ── formOrder 25 — trigonometry — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "In a right triangle, the angle θ has an opposite side of length 7 and a hypotenuse of length 25. What is sin θ?",
    choices: [
      { label: "A", text: "24/25" },
      { label: "B", text: "7/24" },
      { label: "C", text: "7/25" },
      { label: "D", text: "25/7" },
    ],
    correctAnswer: "C",
    explanation:
      "By SOHCAHTOA, sine is opposite over hypotenuse: sin θ = 7/25. (Choice A is cos θ; choice B is tan θ.)",
    diagnosticForm: 1,
    formOrder: 25,
  },

  // ── formOrder 26 — solid_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A rectangular box has dimensions 4 in by 5 in by 6 in. What is its volume?",
    choices: [
      { label: "A", text: "15 cubic inches" },
      { label: "B", text: "74 cubic inches" },
      { label: "C", text: "148 cubic inches" },
      { label: "D", text: "120 cubic inches" },
    ],
    correctAnswer: "D",
    explanation:
      "Volume of a rectangular box is length × width × height: 4 × 5 × 6 = 120 cubic inches. (Choice C is the surface area.)",
    diagnosticForm: 1,
    formOrder: 26,
  },

  // ── formOrder 27 — function_graphs — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "The graph of y = x² is shifted 3 units to the right and 2 units down. Which equation represents the new graph?",
    choices: [
      { label: "A", text: "y = (x − 3)² − 2" },
      { label: "B", text: "y = (x + 3)² − 2" },
      { label: "C", text: "y = (x − 3)² + 2" },
      { label: "D", text: "y = (x − 2)² − 3" },
    ],
    correctAnswer: "A",
    explanation:
      "A shift right by 3 replaces x with (x − 3); a shift down by 2 subtracts 2 outside: y = (x − 3)² − 2. (Choice B shifts left, since (x + 3) moves the graph left.)",
    diagnosticForm: 1,
    formOrder: 27,
  },

  // ── formOrder 28 — numbers_advanced — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the value of |3 − 11| + |−5|?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "13" },
      { label: "C", text: "−3" },
      { label: "D", text: "−13" },
    ],
    correctAnswer: "B",
    explanation:
      "Absolute value gives distance from zero, always nonnegative. |3 − 11| = |−8| = 8 and |−5| = 5. Then 8 + 5 = 13. (Choice A computes (3 − 11) + 5 without taking absolute values.)",
    diagnosticForm: 1,
    formOrder: 28,
  },

  // ── formOrder 29 — linear_equations — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "If 2x + y = 13 and x − y = 2, what is the value of x?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "11" },
    ],
    correctAnswer: "B",
    explanation:
      "Add the two equations to eliminate y: (2x + y) + (x − y) = 13 + 2, giving 3x = 15, so x = 5. (Then y = 3.)",
    diagnosticForm: 1,
    formOrder: 29,
  },

  // ── formOrder 30 — plane_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A circle has a radius of 6 cm. What is its area? (Use the exact value in terms of π.)",
    choices: [
      { label: "A", text: "12π sq cm" },
      { label: "B", text: "36π sq cm" },
      { label: "C", text: "6π sq cm" },
      { label: "D", text: "144π sq cm" },
    ],
    correctAnswer: "B",
    explanation:
      "Area of a circle is πr². With r = 6, area = π(6²) = 36π square centimeters. (Choice A is the circumference, 2πr.)",
    diagnosticForm: 1,
    formOrder: 30,
  },

  // ── formOrder 31 — data_statistics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A class of 20 students has an average score of 78 on a quiz. If a 21st student who scored 99 joins, what is the new average?",
    choices: [
      { label: "A", text: "78" },
      { label: "B", text: "79" },
      { label: "C", text: "80" },
      { label: "D", text: "88.5" },
    ],
    correctAnswer: "B",
    explanation:
      "The original total is 20 × 78 = 1560. Adding 99 gives 1659. The new average is 1659 ÷ 21 = 79. (Choice D averages only 78 and 99.)",
    modeling: true,
    diagnosticForm: 1,
    formOrder: 31,
  },

  // ── formOrder 32 — expressions_polynomials — diff 3 ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which is the complete factorization of x² + 2x − 24?",
    choices: [
      { label: "A", text: "(x + 4)(x − 6)" },
      { label: "B", text: "(x − 4)(x + 6)" },
      { label: "C", text: "(x + 2)(x − 12)" },
      { label: "D", text: "(x − 2)(x + 12)" },
    ],
    correctAnswer: "B",
    explanation:
      "Find two numbers that multiply to −24 and add to +2: −4 and +6. So x² + 2x − 24 = (x − 4)(x + 6). (Choice A gives a middle term of −2x.)",
    diagnosticForm: 1,
    formOrder: 32,
  },

  // ── formOrder 33 — function_basics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "For the function f(x) = √(x − 4), what is the domain?",
    choices: [
      { label: "A", text: "All real numbers" },
      { label: "B", text: "x ≥ 4" },
      { label: "C", text: "x ≤ 4" },
      { label: "D", text: "x > 0" },
    ],
    correctAnswer: "B",
    explanation:
      "The expression under a square root must be nonnegative: x − 4 ≥ 0, so x ≥ 4. (Choice C reverses the inequality.)",
    diagnosticForm: 1,
    formOrder: 33,
  },

  // ── formOrder 34 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "What is the distance between the points (1, 2) and (4, 6) in the standard coordinate plane?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "7" },
      { label: "C", text: "25" },
      { label: "D", text: "√7" },
    ],
    correctAnswer: "A",
    explanation:
      "Distance = √((4 − 1)² + (6 − 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5. (Choice C is the value before taking the square root.)",
    diagnosticForm: 1,
    formOrder: 34,
  },

  // ── formOrder 35 — probability — diff 3 ─────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "Two fair six-sided dice are rolled. What is the probability that the sum of the two dice is 9?",
    choices: [
      { label: "A", text: "1/6" },
      { label: "B", text: "1/9" },
      { label: "C", text: "1/12" },
      { label: "D", text: "1/4" },
    ],
    correctAnswer: "B",
    explanation:
      "There are 36 equally likely outcomes. A sum of 9 occurs for (3,6), (4,5), (5,4), (6,3) — 4 outcomes. P = 4/36 = 1/9.",
    diagnosticForm: 1,
    formOrder: 35,
  },

  // ── formOrder 36 — quadratics — diff 4 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "What are the real solutions to 2x² − 7x + 3 = 0?",
    choices: [
      { label: "A", text: "x = 3 and x = 1/2" },
      { label: "B", text: "x = −3 and x = −1/2" },
      { label: "C", text: "x = 3 and x = 2" },
      { label: "D", text: "x = 6 and x = 1" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor by grouping: 2x² − 7x + 3 = (2x − 1)(x − 3) = 0. Setting each factor to zero gives 2x − 1 = 0 → x = 1/2, and x − 3 = 0 → x = 3.",
    diagnosticForm: 1,
    formOrder: 36,
  },

  // ── formOrder 37 — exponents_radicals / numbers_advanced — diff 4 ───────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "What is the value of 27^(2/3)?",
    choices: [
      { label: "A", text: "18" },
      { label: "B", text: "9" },
      { label: "C", text: "729" },
      { label: "D", text: "6" },
    ],
    correctAnswer: "B",
    explanation:
      "A rational exponent 2/3 means take the cube root, then square: the cube root of 27 is 3, and 3² = 9. (Choice C squares first without rooting.)",
    diagnosticForm: 1,
    formOrder: 37,
  },

  // ── formOrder 38 — right_triangle_trig — diff 4 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A 30°-60°-90° right triangle has a hypotenuse of length 14. What is the length of the side opposite the 30° angle?",
    choices: [
      { label: "A", text: "7" },
      { label: "B", text: "7√3" },
      { label: "C", text: "14√3" },
      { label: "D", text: "28" },
    ],
    correctAnswer: "A",
    explanation:
      "In a 30°-60°-90° triangle the sides are in the ratio 1 : √3 : 2, with the side opposite 30° being the shortest. It is half the hypotenuse: 14 ÷ 2 = 7. (Choice B is the side opposite 60°.)",
    diagnosticForm: 1,
    formOrder: 38,
  },

  // ── formOrder 39 — numbers_advanced — diff 4 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "If i = √(−1), what is the value of (3 + 2i)(1 − 4i)?",
    choices: [
      { label: "A", text: "11 − 10i" },
      { label: "B", text: "−5 − 10i" },
      { label: "C", text: "3 − 8i" },
      { label: "D", text: "11 + 14i" },
    ],
    correctAnswer: "A",
    explanation:
      "FOIL: (3)(1) + (3)(−4i) + (2i)(1) + (2i)(−4i) = 3 − 12i + 2i − 8i². Since i² = −1, −8i² = +8. Combine: (3 + 8) + (−12i + 2i) = 11 − 10i.",
    diagnosticForm: 1,
    formOrder: 39,
  },

  // ── formOrder 40 — word_problems — diff 4 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A water tank is filled by one pipe in 6 hours and by a second pipe in 4 hours. If both pipes run together, how long does it take to fill the tank?",
    choices: [
      { label: "A", text: "5 hours" },
      { label: "B", text: "2 hours" },
      { label: "C", text: "2.4 hours" },
      { label: "D", text: "10 hours" },
    ],
    correctAnswer: "C",
    explanation:
      "Rates add. The first pipe fills 1/6 of the tank per hour, the second 1/4 per hour. Combined: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hours. (Choice A averages the two times.)",
    modeling: true,
    diagnosticForm: 1,
    formOrder: 40,
  },

  // ── formOrder 41 — function_graphs — diff 4 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "The function f(x) = (x − 2)/(x + 3) has a vertical asymptote at which value of x?",
    choices: [
      { label: "A", text: "x = 2" },
      { label: "B", text: "x = −3" },
      { label: "C", text: "x = 3" },
      { label: "D", text: "x = −2" },
    ],
    correctAnswer: "B",
    explanation:
      "A vertical asymptote of a rational function occurs where the denominator equals zero (and the numerator does not). Set x + 3 = 0, so x = −3. (Choice A is the x-intercept, where the numerator is zero.)",
    diagnosticForm: 1,
    formOrder: 41,
  },

  // ── formOrder 42 — right_triangle_trig — diff 4 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A 12-foot ladder leans against a wall, making a 60° angle with the level ground. How high up the wall does the top of the ladder reach?",
    choices: [
      { label: "A", text: "6 feet" },
      { label: "B", text: "6√3 feet" },
      { label: "C", text: "12√3 feet" },
      { label: "D", text: "24 feet" },
    ],
    correctAnswer: "B",
    explanation:
      "The wall height is the side opposite the 60° angle, and the ladder is the hypotenuse. sin 60° = height / 12, so height = 12 · sin 60° = 12 · (√3/2) = 6√3 feet. (Choice A uses sin 30°, the side opposite the wrong angle.)",
    modeling: true,
    diagnosticForm: 1,
    formOrder: 42,
  },

  // ── formOrder 43 — solid_geometry — diff 4 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A cylinder has a radius of 3 cm and a height of 10 cm. What is its volume, in terms of π?",
    choices: [
      { label: "A", text: "30π cubic cm" },
      { label: "B", text: "60π cubic cm" },
      { label: "C", text: "90π cubic cm" },
      { label: "D", text: "900π cubic cm" },
    ],
    correctAnswer: "C",
    explanation:
      "Volume of a cylinder is πr²h. With r = 3 and h = 10: π(3²)(10) = π(9)(10) = 90π cubic centimeters. (Choice A uses r instead of r².)",
    diagnosticForm: 1,
    formOrder: 43,
  },

  // ── formOrder 44 — sequences — diff 5 ───────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 5,
    estimatedTimeSec: 105,
    prompt:
      "In a geometric sequence the second term is 12 and the fifth term is 96. What is the first term?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "4" },
      { label: "C", text: "8" },
      { label: "D", text: "3" },
    ],
    correctAnswer: "A",
    explanation:
      "From term 2 to term 5 the value is multiplied by the common ratio r three times: 12 · r³ = 96, so r³ = 8 and r = 2. The first term is the second term divided by r: 12 ÷ 2 = 6.",
    diagnosticForm: 1,
    formOrder: 44,
  },

  // ── formOrder 45 — trigonometry — diff 5 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 5,
    estimatedTimeSec: 110,
    prompt:
      "If θ is an angle in the second quadrant and sin θ = 3/5, what is the value of cos θ?",
    choices: [
      { label: "A", text: "4/5" },
      { label: "B", text: "−4/5" },
      { label: "C", text: "−3/4" },
      { label: "D", text: "5/4" },
    ],
    correctAnswer: "B",
    explanation:
      "Use the identity sin²θ + cos²θ = 1: cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25, so cos θ = ±4/5. In the second quadrant cosine is negative, so cos θ = −4/5. (Choice A ignores the quadrant sign.)",
    diagnosticForm: 1,
    formOrder: 45,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // BATCH 2 — Diagnostic Test 2 — 45 questions, diagnosticForm 2, formOrder 1–45,
  // easy→hard ramp, difficulty spread 4/5/27/7/2. Entirely distinct items from
  // Diagnostic 1, parallel in subSkill coverage.
  // ══════════════════════════════════════════════════════════════════════════

  // ── formOrder 1 — number_operations — diff 1 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 1,
    estimatedTimeSec: 40,
    prompt: "What is the value of 48 ÷ 6 + 5 × 2?",
    choices: [
      { label: "A", text: "18" },
      { label: "B", text: "26" },
      { label: "C", text: "13" },
      { label: "D", text: "21" },
    ],
    correctAnswer: "A",
    explanation:
      "Do division and multiplication before addition: 48 ÷ 6 = 8 and 5 × 2 = 10. Then 8 + 10 = 18.",
    diagnosticForm: 2,
    formOrder: 1,
  },

  // ── formOrder 2 — linear_equations — diff 1 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt: "If 5x = 35, what is the value of x?",
    choices: [
      { label: "A", text: "30" },
      { label: "B", text: "40" },
      { label: "C", text: "7" },
      { label: "D", text: "175" },
    ],
    correctAnswer: "C",
    explanation:
      "Divide both sides by 5: x = 35 ÷ 5 = 7.",
    diagnosticForm: 2,
    formOrder: 2,
  },

  // ── formOrder 3 — word_problems — diff 1 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "A recipe needs 2 cups of flour for each batch of cookies. How many cups are needed for 6 batches?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "12" },
      { label: "C", text: "3" },
      { label: "D", text: "10" },
    ],
    correctAnswer: "B",
    explanation:
      "Multiply cups per batch by the number of batches: 2 × 6 = 12 cups.",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 3,
  },

  // ── formOrder 4 — plane_geometry — diff 1 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "A square has a side length of 9 inches. What is its perimeter?",
    choices: [
      { label: "A", text: "18 inches" },
      { label: "B", text: "81 inches" },
      { label: "C", text: "36 inches" },
      { label: "D", text: "27 inches" },
    ],
    correctAnswer: "C",
    explanation:
      "A square has four equal sides, so its perimeter is 4 × 9 = 36 inches. (81 is the area; 18 doubles one side.)",
    diagnosticForm: 2,
    formOrder: 4,
  },

  // ── formOrder 5 — exponents_radicals — diff 2 ───────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "What is the value of √81?",
    choices: [
      { label: "A", text: "9" },
      { label: "B", text: "40.5" },
      { label: "C", text: "8" },
      { label: "D", text: "27" },
    ],
    correctAnswer: "A",
    explanation:
      "The square root of 81 is the number that, multiplied by itself, gives 81: 9 × 9 = 81, so √81 = 9.",
    diagnosticForm: 2,
    formOrder: 5,
  },

  // ── formOrder 6 — data_statistics — diff 2 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "Five students scored 80, 85, 90, 85, and 100 on a test. What is the mode of the scores?",
    choices: [
      { label: "A", text: "88" },
      { label: "B", text: "90" },
      { label: "C", text: "85" },
      { label: "D", text: "100" },
    ],
    correctAnswer: "C",
    explanation:
      "The mode is the value that appears most often. 85 appears twice; every other score appears once. (88 is the mean; 90 is the median.)",
    diagnosticForm: 2,
    formOrder: 6,
  },

  // ── formOrder 7 — number_operations — diff 2 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "What is 3/8 written as a decimal?",
    choices: [
      { label: "A", text: "0.375" },
      { label: "B", text: "0.38" },
      { label: "C", text: "2.667" },
      { label: "D", text: "0.625" },
    ],
    correctAnswer: "A",
    explanation:
      "Divide the numerator by the denominator: 3 ÷ 8 = 0.375. (0.625 is 5/8; 2.667 inverts the fraction.)",
    diagnosticForm: 2,
    formOrder: 7,
  },

  // ── formOrder 8 — expressions_polynomials — diff 2 ──────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt:
      "Which expression is equivalent to 7x + 4 − 3x + 9?",
    choices: [
      { label: "A", text: "10x + 13" },
      { label: "B", text: "4x + 13" },
      { label: "C", text: "4x + 5" },
      { label: "D", text: "10x + 5" },
    ],
    correctAnswer: "B",
    explanation:
      "Combine like terms. The x-terms: 7x − 3x = 4x. The constants: 4 + 9 = 13. The result is 4x + 13. (Choice A adds the x-terms instead of subtracting.)",
    diagnosticForm: 2,
    formOrder: 8,
  },

  // ── formOrder 9 — function_basics — diff 2 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt:
      "If g(x) = x² − 2x, what is the value of g(5)?",
    choices: [
      { label: "A", text: "15" },
      { label: "B", text: "35" },
      { label: "C", text: "13" },
      { label: "D", text: "20" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute x = 5: g(5) = 5² − 2(5) = 25 − 10 = 15. (Choice B forgets to subtract; choice C uses 5·2 then 5².)",
    diagnosticForm: 2,
    formOrder: 9,
  },

  // ── formOrder 10 — inequalities — diff 2 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "Solve for x: 3x − 4 > 11.",
    choices: [
      { label: "A", text: "x > 5" },
      { label: "B", text: "x > 7/3" },
      { label: "C", text: "x > 21" },
      { label: "D", text: "x < 5" },
    ],
    correctAnswer: "A",
    explanation:
      "Add 4 to both sides: 3x > 15. Divide by 3: x > 5. The inequality sign does not flip because 3 is positive.",
    diagnosticForm: 2,
    formOrder: 10,
  },

  // ── formOrder 11 — right_triangle_trig — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "A right triangle has a hypotenuse of length 13 and one leg of length 5. What is the length of the other leg?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "12" },
      { label: "C", text: "18" },
      { label: "D", text: "√194" },
    ],
    correctAnswer: "B",
    explanation:
      "By the Pythagorean theorem, leg² = 13² − 5² = 169 − 25 = 144, so the leg is √144 = 12. (Choice D adds the squares instead of subtracting.)",
    diagnosticForm: 2,
    formOrder: 11,
  },

  // ── formOrder 12 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "A line has the equation y = −2x + 7. What is the y-intercept of the line?",
    choices: [
      { label: "A", text: "−2" },
      { label: "B", text: "7" },
      { label: "C", text: "3.5" },
      { label: "D", text: "−7" },
    ],
    correctAnswer: "B",
    explanation:
      "In slope-intercept form y = mx + b, the y-intercept is b. Here b = 7. (Choice A is the slope; choice C is the x-intercept.)",
    diagnosticForm: 2,
    formOrder: 12,
  },

  // ── formOrder 13 — probability — diff 3 ─────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability of spinning an even number?",
    choices: [
      { label: "A", text: "1/8" },
      { label: "B", text: "1/4" },
      { label: "C", text: "1/2" },
      { label: "D", text: "4/8 = 5/8" },
    ],
    correctAnswer: "C",
    explanation:
      "The even numbers from 1 to 8 are 2, 4, 6, and 8 — that is 4 of the 8 sections. P(even) = 4/8 = 1/2.",
    diagnosticForm: 2,
    formOrder: 13,
  },

  // ── formOrder 14 — linear_equations — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "If 3(x + 2) = 5x − 4, what is the value of x?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "5" },
      { label: "C", text: "−5" },
      { label: "D", text: "−1" },
    ],
    correctAnswer: "B",
    explanation:
      "Distribute: 3x + 6 = 5x − 4. Subtract 3x: 6 = 2x − 4. Add 4: 10 = 2x. Divide by 2: x = 5.",
    diagnosticForm: 2,
    formOrder: 14,
  },

  // ── formOrder 15 — sequences — diff 3 ───────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt:
      "The first three terms of a geometric sequence are 3, 6, 12, … What is the 6th term?",
    choices: [
      { label: "A", text: "48" },
      { label: "B", text: "96" },
      { label: "C", text: "24" },
      { label: "D", text: "192" },
    ],
    correctAnswer: "B",
    explanation:
      "The common ratio is 2. Continuing: 24 (4th), 48 (5th), 96 (6th). The 6th term is 96. (Choice A is the 5th term.)",
    diagnosticForm: 2,
    formOrder: 15,
  },

  // ── formOrder 16 — quadratics — diff 3 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What are the solutions to x² + 5x − 14 = 0?",
    choices: [
      { label: "A", text: "x = 2 and x = −7" },
      { label: "B", text: "x = −2 and x = 7" },
      { label: "C", text: "x = 2 and x = 7" },
      { label: "D", text: "x = −2 and x = −7" },
    ],
    correctAnswer: "A",
    explanation:
      "Find two numbers multiplying to −14 and adding to 5: 7 and −2. So x² + 5x − 14 = (x − 2)(x + 7) = 0, giving x = 2 or x = −7.",
    diagnosticForm: 2,
    formOrder: 16,
  },

  // ── formOrder 17 — expressions_polynomials — diff 3 ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which expression is equivalent to (3x − 2)²?",
    choices: [
      { label: "A", text: "9x² − 4" },
      { label: "B", text: "9x² + 4" },
      { label: "C", text: "9x² − 12x + 4" },
      { label: "D", text: "9x² − 6x + 4" },
    ],
    correctAnswer: "C",
    explanation:
      "(3x − 2)² = (3x − 2)(3x − 2). FOIL: 9x² − 6x − 6x + 4 = 9x² − 12x + 4. (Choice A forgets the middle term.)",
    diagnosticForm: 2,
    formOrder: 17,
  },

  // ── formOrder 18 — plane_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Two parallel lines are cut by a transversal. One of the eight angles formed measures 110°. What is the measure of its co-interior (same-side interior) angle?",
    choices: [
      { label: "A", text: "110°" },
      { label: "B", text: "55°" },
      { label: "C", text: "70°" },
      { label: "D", text: "90°" },
    ],
    correctAnswer: "C",
    explanation:
      "Co-interior angles formed by a transversal cutting parallel lines are supplementary — they sum to 180°. So the angle is 180° − 110° = 70°. (Choice A would be a corresponding or alternate angle.)",
    diagnosticForm: 2,
    formOrder: 18,
  },

  // ── formOrder 19 — function_basics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "If f(x) = 2x + 1 and g(x) = x − 3, what is f(g(x))?",
    choices: [
      { label: "A", text: "2x − 5" },
      { label: "B", text: "2x − 2" },
      { label: "C", text: "2x − 6" },
      { label: "D", text: "2x + 4" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute g(x) into f: f(g(x)) = 2(x − 3) + 1 = 2x − 6 + 1 = 2x − 5. (Choice C forgets the +1.)",
    diagnosticForm: 2,
    formOrder: 19,
  },

  // ── formOrder 20 — word_problems — diff 3 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A store marks up a $40 item by 35%. What is the new price?",
    choices: [
      { label: "A", text: "$54" },
      { label: "B", text: "$14" },
      { label: "C", text: "$75" },
      { label: "D", text: "$26" },
    ],
    correctAnswer: "A",
    explanation:
      "The markup is 35% of $40 = 0.35 × 40 = $14. New price = $40 + $14 = $54. (Choice B is the markup alone.)",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 20,
  },

  // ── formOrder 21 — data_statistics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A frequency table shows 3 students scored 70, 5 scored 80, and 2 scored 95. What is the mean score?",
    choices: [
      { label: "A", text: "80" },
      { label: "B", text: "79.5" },
      { label: "C", text: "81.5" },
      { label: "D", text: "78" },
    ],
    correctAnswer: "A",
    explanation:
      "Total points = 3(70) + 5(80) + 2(95) = 210 + 400 + 190 = 800. There are 3 + 5 + 2 = 10 students. Mean = 800 ÷ 10 = 80.",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 21,
  },

  // ── formOrder 22 — inequalities — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Which compound inequality describes all x with −1 ≤ 2x − 5 < 7?",
    choices: [
      { label: "A", text: "2 ≤ x < 6" },
      { label: "B", text: "−3 ≤ x < 1" },
      { label: "C", text: "2 ≤ x < 12" },
      { label: "D", text: "−6 ≤ x < 2" },
    ],
    correctAnswer: "A",
    explanation:
      "Add 5 to all three parts: 4 ≤ 2x < 12. Divide all parts by 2: 2 ≤ x < 6.",
    diagnosticForm: 2,
    formOrder: 22,
  },

  // ── formOrder 23 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the equation of the line with slope 4 that passes through the point (0, −3)?",
    choices: [
      { label: "A", text: "y = 4x − 3" },
      { label: "B", text: "y = 4x + 3" },
      { label: "C", text: "y = −3x + 4" },
      { label: "D", text: "y = 4x" },
    ],
    correctAnswer: "A",
    explanation:
      "The point (0, −3) is the y-intercept, so b = −3. With slope m = 4, the equation is y = 4x − 3.",
    diagnosticForm: 2,
    formOrder: 23,
  },

  // ── formOrder 24 — number_operations — diff 3 ───────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the value of 5/6 − 1/4?",
    choices: [
      { label: "A", text: "4/2" },
      { label: "B", text: "7/12" },
      { label: "C", text: "1/3" },
      { label: "D", text: "4/12" },
    ],
    correctAnswer: "B",
    explanation:
      "Use a common denominator of 12: 5/6 = 10/12 and 1/4 = 3/12. Then 10/12 − 3/12 = 7/12.",
    diagnosticForm: 2,
    formOrder: 24,
  },

  // ── formOrder 25 — trigonometry — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the exact value of cos 60°?",
    choices: [
      { label: "A", text: "1/2" },
      { label: "B", text: "√3/2" },
      { label: "C", text: "√2/2" },
      { label: "D", text: "1" },
    ],
    correctAnswer: "A",
    explanation:
      "From the unit circle, cos 60° = 1/2. (Choice B is cos 30°; choice C is cos 45°.)",
    diagnosticForm: 2,
    formOrder: 25,
  },

  // ── formOrder 26 — solid_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A cube has an edge length of 5 cm. What is its total surface area?",
    choices: [
      { label: "A", text: "25 sq cm" },
      { label: "B", text: "125 sq cm" },
      { label: "C", text: "150 sq cm" },
      { label: "D", text: "100 sq cm" },
    ],
    correctAnswer: "C",
    explanation:
      "A cube has 6 identical square faces. Each face has area 5² = 25 sq cm. Total = 6 × 25 = 150 sq cm. (Choice B is the volume.)",
    diagnosticForm: 2,
    formOrder: 26,
  },

  // ── formOrder 27 — function_graphs — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "The graph of y = |x| is reflected across the x-axis. Which equation represents the reflected graph?",
    choices: [
      { label: "A", text: "y = |−x|" },
      { label: "B", text: "y = −|x|" },
      { label: "C", text: "y = |x| − 1" },
      { label: "D", text: "y = |x + 1|" },
    ],
    correctAnswer: "B",
    explanation:
      "Reflecting across the x-axis negates the output: y becomes −y, giving y = −|x|. (Choice A, y = |−x|, equals the original y = |x|.)",
    diagnosticForm: 2,
    formOrder: 27,
  },

  // ── formOrder 28 — numbers_advanced — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the sum of the complex numbers (4 + 7i) and (−9 + 2i)?",
    choices: [
      { label: "A", text: "−5 + 9i" },
      { label: "B", text: "13 + 5i" },
      { label: "C", text: "−5 + 14i" },
      { label: "D", text: "4 + 9i" },
    ],
    correctAnswer: "A",
    explanation:
      "Add real parts and imaginary parts separately: (4 + (−9)) + (7 + 2)i = −5 + 9i.",
    diagnosticForm: 2,
    formOrder: 28,
  },

  // ── formOrder 29 — linear_equations — diff 3 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "If 3x + 2y = 16 and x = y + 2, what is the value of y?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "4" },
      { label: "C", text: "1" },
      { label: "D", text: "6" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute x = y + 2 into the first equation: 3(y + 2) + 2y = 16, so 3y + 6 + 2y = 16, giving 5y = 10 and y = 2.",
    diagnosticForm: 2,
    formOrder: 29,
  },

  // ── formOrder 30 — plane_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A trapezoid has parallel sides of length 6 and 14 and a height of 5. What is its area?",
    choices: [
      { label: "A", text: "50" },
      { label: "B", text: "100" },
      { label: "C", text: "25" },
      { label: "D", text: "420" },
    ],
    correctAnswer: "A",
    explanation:
      "Area of a trapezoid is ½(b₁ + b₂)h = ½(6 + 14)(5) = ½(20)(5) = 50. (Choice B omits the ½.)",
    diagnosticForm: 2,
    formOrder: 30,
  },

  // ── formOrder 31 — data_statistics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A student has test scores of 88, 92, and 79. What score on a fourth test gives an average of exactly 86?",
    choices: [
      { label: "A", text: "85" },
      { label: "B", text: "86" },
      { label: "C", text: "84" },
      { label: "D", text: "90" },
    ],
    correctAnswer: "A",
    explanation:
      "A 4-test average of 86 needs a total of 4 × 86 = 344. The three known scores sum to 88 + 92 + 79 = 259. The fourth score must be 344 − 259 = 85.",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 31,
  },

  // ── formOrder 32 — expressions_polynomials — diff 3 ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which is the complete factorization of 3x² − 12x?",
    choices: [
      { label: "A", text: "3x(x − 4)" },
      { label: "B", text: "3(x² − 12x)" },
      { label: "C", text: "x(3x − 12)" },
      { label: "D", text: "3x(x − 12)" },
    ],
    correctAnswer: "A",
    explanation:
      "The greatest common factor of 3x² and 12x is 3x. Factoring it out: 3x² − 12x = 3x(x − 4). (Choice C does not factor out the full GCF.)",
    diagnosticForm: 2,
    formOrder: 32,
  },

  // ── formOrder 33 — function_basics — diff 3 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "The function f is defined by the table: f(1) = 4, f(2) = 7, f(3) = 10, f(4) = 13. What is f(6) if the pattern continues?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "19" },
      { label: "C", text: "22" },
      { label: "D", text: "18" },
    ],
    correctAnswer: "B",
    explanation:
      "Each input increase of 1 raises the output by 3, so f(x) = 3x + 1. Then f(6) = 3(6) + 1 = 19. (Choice A is f(5).)",
    diagnosticForm: 2,
    formOrder: 33,
  },

  // ── formOrder 34 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "Line m has the equation y = 3x − 1. Which line is parallel to line m?",
    choices: [
      { label: "A", text: "y = 3x + 5" },
      { label: "B", text: "y = −3x − 1" },
      { label: "C", text: "y = (1/3)x + 2" },
      { label: "D", text: "y = −(1/3)x + 4" },
    ],
    correctAnswer: "A",
    explanation:
      "Parallel lines have equal slopes. Line m has slope 3, so a parallel line also has slope 3: y = 3x + 5. (Choice D is perpendicular, slope −1/3.)",
    diagnosticForm: 2,
    formOrder: 34,
  },

  // ── formOrder 35 — probability — diff 3 ─────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A bag has 4 red, 3 blue, and 5 green marbles. If one marble is drawn at random and not replaced, then a second is drawn, what is the probability both are green?",
    choices: [
      { label: "A", text: "5/33" },
      { label: "B", text: "25/144" },
      { label: "C", text: "5/12" },
      { label: "D", text: "1/12" },
    ],
    correctAnswer: "A",
    explanation:
      "There are 12 marbles. P(first green) = 5/12. After removing one green, 4 of 11 remain green: P(second green) = 4/11. Multiply: (5/12)(4/11) = 20/132 = 5/33. (Choice B forgets the marble is not replaced.)",
    diagnosticForm: 2,
    formOrder: 35,
  },

  // ── formOrder 36 — quadratics — diff 4 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "Using the quadratic formula, what are the solutions to x² − 4x − 1 = 0?",
    choices: [
      { label: "A", text: "x = 2 ± √5" },
      { label: "B", text: "x = 2 ± √3" },
      { label: "C", text: "x = −2 ± √5" },
      { label: "D", text: "x = 4 ± √5" },
    ],
    correctAnswer: "A",
    explanation:
      "With a = 1, b = −4, c = −1: x = (4 ± √(16 + 4)) / 2 = (4 ± √20) / 2 = (4 ± 2√5) / 2 = 2 ± √5.",
    diagnosticForm: 2,
    formOrder: 36,
  },

  // ── formOrder 37 — exponents_radicals — diff 4 ──────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "The mass of a particle is 0.0000045 grams. What is this value in scientific notation?",
    choices: [
      { label: "A", text: "4.5 × 10⁻⁶" },
      { label: "B", text: "4.5 × 10⁶" },
      { label: "C", text: "45 × 10⁻⁷" },
      { label: "D", text: "4.5 × 10⁻⁵" },
    ],
    correctAnswer: "A",
    explanation:
      "Move the decimal point 6 places to the right to get 4.5, so the exponent is −6: 0.0000045 = 4.5 × 10⁻⁶. (Choice D miscounts the places.)",
    diagnosticForm: 2,
    formOrder: 37,
  },

  // ── formOrder 38 — right_triangle_trig — diff 4 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "An isosceles right triangle (a 45°-45°-90° triangle) has legs of length 9. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "9√2" },
      { label: "B", text: "9" },
      { label: "C", text: "18" },
      { label: "D", text: "9√3" },
    ],
    correctAnswer: "A",
    explanation:
      "In a 45°-45°-90° triangle the sides are in the ratio 1 : 1 : √2, so the hypotenuse is a leg times √2: 9√2. (Choice C doubles the leg.)",
    diagnosticForm: 2,
    formOrder: 38,
  },

  // ── formOrder 39 — numbers_advanced — diff 4 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "For the matrices A = [[2, 1], [0, 3]] and B = [[4, −1], [5, 2]], what is the entry in row 1, column 1 of A + B?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "8" },
      { label: "C", text: "13" },
      { label: "D", text: "2" },
    ],
    correctAnswer: "A",
    explanation:
      "Matrix addition adds corresponding entries. The row 1, column 1 entry is 2 + 4 = 6. (Choice C, 13, would come from multiplying the matrices.)",
    diagnosticForm: 2,
    formOrder: 39,
  },

  // ── formOrder 40 — word_problems — diff 4 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "Two trains leave the same station traveling in opposite directions. One travels at 55 mph and the other at 70 mph. After how many hours are they 500 miles apart?",
    choices: [
      { label: "A", text: "4 hours" },
      { label: "B", text: "8 hours" },
      { label: "C", text: "5 hours" },
      { label: "D", text: "7.1 hours" },
    ],
    correctAnswer: "A",
    explanation:
      "Moving apart, their separation rate is 55 + 70 = 125 mph. Time = distance ÷ rate = 500 ÷ 125 = 4 hours. (Choice D uses only one train's speed.)",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 40,
  },

  // ── formOrder 41 — function_graphs — diff 4 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "The parabola y = x² − 6x + 5 has its vertex at which point?",
    choices: [
      { label: "A", text: "(3, −4)" },
      { label: "B", text: "(−3, 32)" },
      { label: "C", text: "(3, 5)" },
      { label: "D", text: "(6, 5)" },
    ],
    correctAnswer: "A",
    explanation:
      "The x-coordinate of the vertex is −b/(2a) = −(−6)/(2·1) = 3. Substituting: y = 3² − 6(3) + 5 = 9 − 18 + 5 = −4. The vertex is (3, −4).",
    diagnosticForm: 2,
    formOrder: 41,
  },

  // ── formOrder 42 — right_triangle_trig — diff 4 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A surveyor stands 80 feet from the base of a flagpole and measures the angle of elevation to the top as 35°. Which expression gives the height of the flagpole?",
    choices: [
      { label: "A", text: "80 · tan 35°" },
      { label: "B", text: "80 · sin 35°" },
      { label: "C", text: "80 / tan 35°" },
      { label: "D", text: "80 · cos 35°" },
    ],
    correctAnswer: "A",
    explanation:
      "The 80-foot distance is adjacent to the 35° angle and the height is opposite it. tan 35° = opposite/adjacent = height/80, so height = 80 · tan 35°. (Choice C inverts the relationship.)",
    modeling: true,
    diagnosticForm: 2,
    formOrder: 42,
  },

  // ── formOrder 43 — solid_geometry — diff 4 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A sphere has a radius of 3 cm. What is its volume, in terms of π? (Volume of a sphere = 4/3 πr³.)",
    choices: [
      { label: "A", text: "36π cubic cm" },
      { label: "B", text: "27π cubic cm" },
      { label: "C", text: "12π cubic cm" },
      { label: "D", text: "108π cubic cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume = 4/3 πr³ = 4/3 π(3³) = 4/3 π(27) = 36π cubic centimeters. (Choice B is r³ alone; choice C uses 4/3 πr.)",
    diagnosticForm: 2,
    formOrder: 43,
  },

  // ── formOrder 44 — sequences — diff 5 ───────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 5,
    estimatedTimeSec: 105,
    prompt:
      "An arithmetic sequence has a 4th term of 19 and a 10th term of 49. What is the first term?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "7" },
      { label: "D", text: "9" },
    ],
    correctAnswer: "A",
    explanation:
      "From term 4 to term 10 is 6 steps, with a total increase of 49 − 19 = 30, so the common difference is 30 ÷ 6 = 5. The first term is term 4 minus 3 steps: 19 − 3(5) = 19 − 15 = 4.",
    diagnosticForm: 2,
    formOrder: 44,
  },

  // ── formOrder 45 — trigonometry — diff 5 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 5,
    estimatedTimeSec: 110,
    prompt:
      "If tan θ = 5/12 and θ is an acute angle, what is the value of sin θ?",
    choices: [
      { label: "A", text: "5/13" },
      { label: "B", text: "12/13" },
      { label: "C", text: "13/5" },
      { label: "D", text: "5/17" },
    ],
    correctAnswer: "A",
    explanation:
      "tan θ = opposite/adjacent = 5/12, so picture a right triangle with opposite leg 5 and adjacent leg 12. The hypotenuse is √(5² + 12²) = √169 = 13. Then sin θ = opposite/hypotenuse = 5/13.",
    diagnosticForm: 2,
    formOrder: 45,
  },
];
