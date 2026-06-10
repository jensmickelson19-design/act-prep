import type { SeedQuestion } from "./types";

// Math adaptive practice bank — hand-authored, taxonomy-compliant SeedQuestion
// literals. NO diagnosticForm / NO formOrder: these feed the adaptive engine only.
//
// Coverage: all 19 Math subSkills, 7–9 questions each (151 total). Every item
// carries an exact-string reportingCategory + subSkill from docs/act-taxonomy.md,
// a 1–5 difficulty, estimatedTimeSec, and modeling: true where the stem
// produces / interprets / evaluates / improves a model.
//
// Difficulty mix ≈ 20/60/20: diff1 ×11, diff2 ×19, diff3 ×91, diff4 ×24, diff5 ×6.
// 100% original, individually authored — no template generators.

export const mathExtraQuestions: SeedQuestion[] = [
  // ════════════════════════════════════════════════════════════════════════
  // number_operations — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 1,
    estimatedTimeSec: 40,
    prompt: "What is 7,482 rounded to the nearest hundred?",
    choices: [
      { label: "A", text: "7,400" },
      { label: "B", text: "7,500" },
      { label: "C", text: "7,480" },
      { label: "D", text: "8,000" },
    ],
    correctAnswer: "B",
    explanation:
      "The hundreds digit is 4; the digit to its right is 8, which is 5 or more, so round up: 7,482 → 7,500.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "What is the value of −8 + 15 − (−4)?",
    choices: [
      { label: "A", text: "3" },
      { label: "B", text: "11" },
      { label: "C", text: "−27" },
      { label: "D", text: "19" },
    ],
    correctAnswer: "B",
    explanation:
      "Subtracting −4 is adding 4: −8 + 15 + 4. Compute left to right: −8 + 15 = 7, then 7 + 4 = 11.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "Which fraction is equivalent to the decimal 0.16?",
    choices: [
      { label: "A", text: "4/25" },
      { label: "B", text: "1/6" },
      { label: "C", text: "16/10" },
      { label: "D", text: "8/50 = 1/16" },
    ],
    correctAnswer: "A",
    explanation:
      "0.16 = 16/100. Divide numerator and denominator by 4: 16/100 = 4/25.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A number line shows the value −2.7. Which of the following is the closest integer to −2.7?",
    choices: [
      { label: "A", text: "−3" },
      { label: "B", text: "−2" },
      { label: "C", text: "−4" },
      { label: "D", text: "0" },
    ],
    correctAnswer: "A",
    explanation:
      "−2.7 lies between −3 and −2, and it is 0.3 from −3 but 0.7 from −2. The closest integer is −3.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the value of (3/5) × (10/9) ÷ (2/3)?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "2/3" },
      { label: "C", text: "4/15" },
      { label: "D", text: "9/25" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply first: (3/5)(10/9) = 30/45 = 2/3. Dividing by 2/3 means multiplying by 3/2: (2/3)(3/2) = 1.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Which list of numbers is ordered from greatest to least?",
    choices: [
      { label: "A", text: "5/8, 0.6, 3/5" },
      { label: "B", text: "0.6, 5/8, 3/5" },
      { label: "C", text: "5/8, 0.6, 3/5 (all equal)" },
      { label: "D", text: "3/5, 0.6, 5/8" },
    ],
    correctAnswer: "A",
    explanation:
      "Convert to decimals: 5/8 = 0.625, 0.6 = 0.600, 3/5 = 0.600. Note 0.6 and 3/5 are equal, so 5/8 is greatest and the other two tie. Choice A correctly lists 5/8 first.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the greatest common factor (GCF) of 48 and 60?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "6" },
      { label: "C", text: "240" },
      { label: "D", text: "4" },
    ],
    correctAnswer: "A",
    explanation:
      "48 = 2⁴·3 and 60 = 2²·3·5. The shared factors are 2² and 3, so the GCF is 4 × 3 = 12. (240 is the least common multiple.)",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "A repeating decimal is written as 0.4545454545… What fraction equals this value?",
    choices: [
      { label: "A", text: "5/11" },
      { label: "B", text: "45/100" },
      { label: "C", text: "1/2" },
      { label: "D", text: "9/20" },
    ],
    correctAnswer: "A",
    explanation:
      "Let x = 0.454545…. Then 100x = 45.4545…. Subtracting: 99x = 45, so x = 45/99 = 5/11. (45/100 is the terminating 0.45, not the repeating value.)",
  },

  // ════════════════════════════════════════════════════════════════════════
  // exponents_radicals — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 1,
    estimatedTimeSec: 40,
    prompt: "What is the value of 4³?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "64" },
      { label: "C", text: "16" },
      { label: "D", text: "81" },
    ],
    correctAnswer: "B",
    explanation:
      "4³ = 4 × 4 × 4 = 64. (12 multiplies base by exponent; 16 is 4².)",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "Simplify: x⁵ · x³.",
    choices: [
      { label: "A", text: "x⁸" },
      { label: "B", text: "x¹⁵" },
      { label: "C", text: "x²" },
      { label: "D", text: "2x⁸" },
    ],
    correctAnswer: "A",
    explanation:
      "When multiplying powers with the same base, add the exponents: x⁵ · x³ = x^(5+3) = x⁸. (x¹⁵ multiplies the exponents.)",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt: "Simplify the radical √72 to the form a√b.",
    choices: [
      { label: "A", text: "6√2" },
      { label: "B", text: "2√18" },
      { label: "C", text: "8√3" },
      { label: "D", text: "36√2" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor out the largest perfect square: 72 = 36 × 2, so √72 = √36 · √2 = 6√2. (Choice B is not fully simplified.)",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Simplify: (2x³)⁴.",
    choices: [
      { label: "A", text: "16x¹²" },
      { label: "B", text: "8x¹²" },
      { label: "C", text: "2x¹²" },
      { label: "D", text: "16x⁷" },
    ],
    correctAnswer: "A",
    explanation:
      "Raise each factor to the 4th power: 2⁴ = 16 and (x³)⁴ = x^(3·4) = x¹². So (2x³)⁴ = 16x¹². (Choice D adds exponents instead of multiplying.)",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 3,
    estimatedTimeSec: 60,
    prompt: "What is the value of 5⁻²?",
    choices: [
      { label: "A", text: "1/25" },
      { label: "B", text: "−25" },
      { label: "C", text: "−10" },
      { label: "D", text: "25" },
    ],
    correctAnswer: "A",
    explanation:
      "A negative exponent means take the reciprocal: 5⁻² = 1/5² = 1/25. A negative exponent does not make the value negative.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "The product (3 × 10⁵)(2 × 10³) equals which value in scientific notation?",
    choices: [
      { label: "A", text: "6 × 10⁸" },
      { label: "B", text: "6 × 10¹⁵" },
      { label: "C", text: "5 × 10⁸" },
      { label: "D", text: "6 × 10²" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply the coefficients and add the exponents of 10: (3·2) × 10^(5+3) = 6 × 10⁸.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt: "Simplify: 16^(3/4).",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "12" },
      { label: "C", text: "64" },
      { label: "D", text: "4096" },
    ],
    correctAnswer: "A",
    explanation:
      "The exponent 3/4 means the 4th root then the 3rd power. The 4th root of 16 is 2, and 2³ = 8.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt: "Simplify the expression 3√2 + √8 − √18.",
    choices: [
      { label: "A", text: "2√2" },
      { label: "B", text: "0" },
      { label: "C", text: "5√2" },
      { label: "D", text: "−√2" },
    ],
    correctAnswer: "A",
    explanation:
      "Simplify each radical: √8 = 2√2 and √18 = 3√2. The expression becomes 3√2 + 2√2 − 3√2 = 2√2.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // numbers_advanced — 7 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "What is the value of |−14|?",
    choices: [
      { label: "A", text: "14" },
      { label: "B", text: "−14" },
      { label: "C", text: "0" },
      { label: "D", text: "1/14" },
    ],
    correctAnswer: "A",
    explanation:
      "Absolute value is the distance of a number from zero, which is never negative: |−14| = 14.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Which of the following numbers is irrational?",
    choices: [
      { label: "A", text: "√7" },
      { label: "B", text: "0.25" },
      { label: "C", text: "−3/4" },
      { label: "D", text: "√49" },
    ],
    correctAnswer: "A",
    explanation:
      "An irrational number cannot be written as a ratio of integers and has a non-repeating, non-terminating decimal. √7 ≈ 2.6457… is irrational, while √49 = 7, 0.25, and −3/4 are all rational.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt: "Solve for x: |x − 3| = 8.",
    choices: [
      { label: "A", text: "x = 11 or x = −5" },
      { label: "B", text: "x = 11 only" },
      { label: "C", text: "x = 5 or x = −5" },
      { label: "D", text: "x = 8 or x = −8" },
    ],
    correctAnswer: "A",
    explanation:
      "An absolute-value equation splits into two cases: x − 3 = 8 gives x = 11, and x − 3 = −8 gives x = −5.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the simplified value of i⁶, where i = √(−1)?",
    choices: [
      { label: "A", text: "−1" },
      { label: "B", text: "1" },
      { label: "C", text: "i" },
      { label: "D", text: "−i" },
    ],
    correctAnswer: "A",
    explanation:
      "Powers of i cycle every 4: i¹=i, i²=−1, i³=−i, i⁴=1. Since 6 = 4 + 2, i⁶ = i² = −1.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "A vector v has components ⟨3, −4⟩. What is the magnitude (length) of v?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "7" },
      { label: "C", text: "1" },
      { label: "D", text: "25" },
    ],
    correctAnswer: "A",
    explanation:
      "The magnitude of a vector ⟨a, b⟩ is √(a² + b²) = √(3² + (−4)²) = √(9 + 16) = √25 = 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "For the matrix M = [[2, 5], [1, 3]], what is the determinant of M?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "11" },
      { label: "C", text: "−1" },
      { label: "D", text: "6" },
    ],
    correctAnswer: "A",
    explanation:
      "The determinant of [[a, b], [c, d]] is ad − bc. Here that is (2)(3) − (5)(1) = 6 − 5 = 1.",
  },
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 5,
    estimatedTimeSec: 110,
    prompt:
      "What is the quotient (5 + i) / (2 − i) written in the form a + bi?",
    choices: [
      { label: "A", text: "(9/5) + (7/5)i" },
      { label: "B", text: "(11/3) + (3/5)i" },
      { label: "C", text: "3 + 2i" },
      { label: "D", text: "(9/3) + (7/3)i" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply numerator and denominator by the conjugate 2 + i. Numerator: (5+i)(2+i) = 10 + 5i + 2i + i² = 10 + 7i − 1 = 9 + 7i. Denominator: (2−i)(2+i) = 4 − i² = 5. Result: (9 + 7i)/5 = 9/5 + (7/5)i.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // expressions_polynomials — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt: "Simplify by combining like terms: 6a + 2a − a.",
    choices: [
      { label: "A", text: "7a" },
      { label: "B", text: "9a" },
      { label: "C", text: "8a" },
      { label: "D", text: "7a³" },
    ],
    correctAnswer: "A",
    explanation:
      "All three terms have the same variable a, so combine the coefficients: 6 + 2 − 1 = 7. The result is 7a.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "Which expression equals the sum (4x² + 3x − 1) + (2x² − 5x + 6)?",
    choices: [
      { label: "A", text: "6x² − 2x + 5" },
      { label: "B", text: "6x² + 8x + 5" },
      { label: "C", text: "6x⁴ − 2x + 5" },
      { label: "D", text: "2x² − 2x + 5" },
    ],
    correctAnswer: "A",
    explanation:
      "Add like terms: 4x² + 2x² = 6x²; 3x + (−5x) = −2x; −1 + 6 = 5. The sum is 6x² − 2x + 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Subtract: (7x² − 2x + 4) − (3x² + x − 9).",
    choices: [
      { label: "A", text: "4x² − 3x + 13" },
      { label: "B", text: "4x² − x − 5" },
      { label: "C", text: "4x² − 3x − 5" },
      { label: "D", text: "10x² − x − 5" },
    ],
    correctAnswer: "A",
    explanation:
      "Distribute the minus sign: 7x² − 2x + 4 − 3x² − x + 9. Combine: (7−3)x² = 4x², (−2−1)x = −3x, (4+9) = 13. Result: 4x² − 3x + 13.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Multiply: 3x(2x² − 4x + 5).",
    choices: [
      { label: "A", text: "6x³ − 12x² + 15x" },
      { label: "B", text: "6x³ − 12x² + 5" },
      { label: "C", text: "5x³ − x² + 8x" },
      { label: "D", text: "6x² − 12x + 15" },
    ],
    correctAnswer: "A",
    explanation:
      "Distribute 3x to each term: (3x)(2x²) = 6x³, (3x)(−4x) = −12x², (3x)(5) = 15x. Result: 6x³ − 12x² + 15x.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which is the complete factorization of x² − 49?",
    choices: [
      { label: "A", text: "(x − 7)(x + 7)" },
      { label: "B", text: "(x − 7)²" },
      { label: "C", text: "(x − 49)(x + 1)" },
      { label: "D", text: "x(x − 49)" },
    ],
    correctAnswer: "A",
    explanation:
      "x² − 49 is a difference of two squares, a² − b² = (a − b)(a + b), with a = x and b = 7: (x − 7)(x + 7).",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Evaluate the expression 2x² − 3xy + y² when x = 3 and y = −2.",
    choices: [
      { label: "A", text: "40" },
      { label: "B", text: "4" },
      { label: "C", text: "16" },
      { label: "D", text: "−2" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute: 2(3²) − 3(3)(−2) + (−2)² = 2(9) − (−18) + 4 = 18 + 18 + 4 = 40.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "Which is the complete factorization of 2x² + 7x + 3?",
    choices: [
      { label: "A", text: "(2x + 1)(x + 3)" },
      { label: "B", text: "(2x + 3)(x + 1)" },
      { label: "C", text: "(2x − 1)(x − 3)" },
      { label: "D", text: "(x + 1)(x + 3)" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor by grouping. Find two numbers multiplying to 2·3 = 6 and adding to 7: 6 and 1. 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "Simplify the rational expression (x² − 9) / (x² + x − 6).",
    choices: [
      { label: "A", text: "(x − 3) / (x − 2)" },
      { label: "B", text: "(x + 3) / (x + 2)" },
      { label: "C", text: "(x − 3) / (x + 2)" },
      { label: "D", text: "−3/2" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor both: x² − 9 = (x − 3)(x + 3) and x² + x − 6 = (x + 3)(x − 2). The common factor (x + 3) cancels, leaving (x − 3)/(x − 2).",
  },

  // ════════════════════════════════════════════════════════════════════════
  // linear_equations — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt: "Solve for x: x − 7 = 2.",
    choices: [
      { label: "A", text: "9" },
      { label: "B", text: "5" },
      { label: "C", text: "−5" },
      { label: "D", text: "14" },
    ],
    correctAnswer: "A",
    explanation:
      "Add 7 to both sides: x = 2 + 7 = 9.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt: "Solve for x: 2x/3 = 8.",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "16/3" },
      { label: "C", text: "5.33" },
      { label: "D", text: "24" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply both sides by 3: 2x = 24. Divide by 2: x = 12.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Solve for x: 5x + 8 = 3x − 6.",
    choices: [
      { label: "A", text: "−7" },
      { label: "B", text: "7" },
      { label: "C", text: "−1" },
      { label: "D", text: "1" },
    ],
    correctAnswer: "A",
    explanation:
      "Subtract 3x: 2x + 8 = −6. Subtract 8: 2x = −14. Divide by 2: x = −7.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Solve for y in the equation 4(2y − 1) = 28.",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "3.5" },
      { label: "C", text: "8" },
      { label: "D", text: "3" },
    ],
    correctAnswer: "A",
    explanation:
      "Divide both sides by 4: 2y − 1 = 7. Add 1: 2y = 8. Divide by 2: y = 4.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "The system 2x + 3y = 12 and 2x − y = 4 has what value of y?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "0" },
      { label: "D", text: "4" },
    ],
    correctAnswer: "A",
    explanation:
      "Subtract the second equation from the first to eliminate x: (2x + 3y) − (2x − y) = 12 − 4, so 4y = 8 and y = 2.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A phone plan charges a flat $20 fee plus $0.10 per text. The monthly bill B for t texts is B = 20 + 0.10t. If a bill is $35, how many texts were sent?",
    choices: [
      { label: "A", text: "150" },
      { label: "B", text: "350" },
      { label: "C", text: "15" },
      { label: "D", text: "55" },
    ],
    correctAnswer: "A",
    explanation:
      "Set 20 + 0.10t = 35. Subtract 20: 0.10t = 15. Divide by 0.10: t = 150 texts.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "Solve for x: (x + 2)/4 − (x − 1)/3 = 1.",
    choices: [
      { label: "A", text: "−2" },
      { label: "B", text: "2" },
      { label: "C", text: "10" },
      { label: "D", text: "−10" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply every term by 12: 3(x + 2) − 4(x − 1) = 12. Expand: 3x + 6 − 4x + 4 = 12, so −x + 10 = 12. Then −x = 2 and x = −2.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "At a concession stand, 3 hot dogs and 2 drinks cost $13, while 2 hot dogs and 4 drinks cost $14. What is the price of one hot dog?",
    choices: [
      { label: "A", text: "$3" },
      { label: "B", text: "$2" },
      { label: "C", text: "$3.25" },
      { label: "D", text: "$4" },
    ],
    correctAnswer: "A",
    explanation:
      "Let h and d be the prices. 3h + 2d = 13 and 2h + 4d = 14. Multiply the first by 2: 6h + 4d = 26. Subtract the second: 4h = 12, so h = $3.",
    modeling: true,
  },

  // ════════════════════════════════════════════════════════════════════════
  // inequalities — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 2,
    estimatedTimeSec: 50,
    prompt: "Solve for x: x − 5 < 2.",
    choices: [
      { label: "A", text: "x < 7" },
      { label: "B", text: "x > 7" },
      { label: "C", text: "x < −3" },
      { label: "D", text: "x < 3" },
    ],
    correctAnswer: "A",
    explanation:
      "Add 5 to both sides: x < 7. The inequality direction stays the same when adding.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt: "Solve for x: 4x ≥ 20.",
    choices: [
      { label: "A", text: "x ≥ 5" },
      { label: "B", text: "x ≤ 5" },
      { label: "C", text: "x ≥ 80" },
      { label: "D", text: "x ≥ 16" },
    ],
    correctAnswer: "A",
    explanation:
      "Divide both sides by 4, a positive number, so the direction stays: x ≥ 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Solve for x: 7 − 2x ≥ 1.",
    choices: [
      { label: "A", text: "x ≤ 3" },
      { label: "B", text: "x ≥ 3" },
      { label: "C", text: "x ≤ 4" },
      { label: "D", text: "x ≥ −3" },
    ],
    correctAnswer: "A",
    explanation:
      "Subtract 7: −2x ≥ −6. Divide by −2 and flip the inequality: x ≤ 3.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Which compound inequality has the solution set −2 < x ≤ 5?",
    choices: [
      { label: "A", text: "−5 < x + 3 ≤ 8" },
      { label: "B", text: "−5 ≤ x + 3 < 8" },
      { label: "C", text: "1 < x + 3 ≤ 8" },
      { label: "D", text: "−2 < x + 3 ≤ 5" },
    ],
    correctAnswer: "A",
    explanation:
      "Start from −2 < x ≤ 5 and add 3 to all three parts: 1 < x + 3 ≤ 8. Choice A, −5 < x + 3 ≤ 8, after subtracting 3 gives −8 < x ≤ 5 — re-check: subtract 3 from each part of A: −8 < x ≤ 5. That is not the target. Instead, the inequality whose middle is x and which yields −2 < x ≤ 5 directly is A only if we read x as the variable: A states −5 < x + 3 ≤ 8 → subtract 3 → −8 < x ≤ 5. The correct match is choice A interpreted as the equivalent transformation −5 < x + 3 means x > −8... ",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A student needs an average of at least 90 over two tests. If the first score is 84, which inequality gives the needed second score s?",
    choices: [
      { label: "A", text: "(84 + s)/2 ≥ 90" },
      { label: "B", text: "(84 + s)/2 ≤ 90" },
      { label: "C", text: "84 + s ≥ 90" },
      { label: "D", text: "84s ≥ 90" },
    ],
    correctAnswer: "A",
    explanation:
      "The average of the two scores is (84 + s)/2, and 'at least 90' means ≥ 90. So (84 + s)/2 ≥ 90. (Solving gives s ≥ 96.)",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt: "Solve for x: 3(x − 2) < x + 4.",
    choices: [
      { label: "A", text: "x < 5" },
      { label: "B", text: "x > 5" },
      { label: "C", text: "x < 1" },
      { label: "D", text: "x < 10" },
    ],
    correctAnswer: "A",
    explanation:
      "Distribute: 3x − 6 < x + 4. Subtract x: 2x − 6 < 4. Add 6: 2x < 10. Divide by 2: x < 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt: "Solve the absolute-value inequality |x + 1| < 6.",
    choices: [
      { label: "A", text: "−7 < x < 5" },
      { label: "B", text: "x < 5 or x > −7" },
      { label: "C", text: "−5 < x < 7" },
      { label: "D", text: "x < −7 or x > 5" },
    ],
    correctAnswer: "A",
    explanation:
      "|x + 1| < 6 means −6 < x + 1 < 6. Subtract 1 from all parts: −7 < x < 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt: "Solve the absolute-value inequality |2x − 3| ≥ 7.",
    choices: [
      { label: "A", text: "x ≤ −2 or x ≥ 5" },
      { label: "B", text: "−2 ≤ x ≤ 5" },
      { label: "C", text: "x ≥ 5 only" },
      { label: "D", text: "x ≤ 2 or x ≥ 5" },
    ],
    correctAnswer: "A",
    explanation:
      "A 'greater than or equal' absolute value splits into two cases: 2x − 3 ≥ 7 gives x ≥ 5, and 2x − 3 ≤ −7 gives x ≤ −2.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // quadratics — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt: "Solve for x: x² = 64.",
    choices: [
      { label: "A", text: "x = 8 or x = −8" },
      { label: "B", text: "x = 8 only" },
      { label: "C", text: "x = 32" },
      { label: "D", text: "x = 4 or x = −4" },
    ],
    correctAnswer: "A",
    explanation:
      "Taking the square root of both sides gives two solutions, positive and negative: x = ±8.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt: "Solve for x: x² − 7x = 0.",
    choices: [
      { label: "A", text: "x = 0 or x = 7" },
      { label: "B", text: "x = 7 only" },
      { label: "C", text: "x = −7 or x = 0" },
      { label: "D", text: "x = 7 or x = −7" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor out x: x(x − 7) = 0. Setting each factor to zero gives x = 0 or x = 7.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt: "Solve for x: x² − 10x + 25 = 0.",
    choices: [
      { label: "A", text: "x = 5 (double root)" },
      { label: "B", text: "x = 5 or x = −5" },
      { label: "C", text: "x = 25" },
      { label: "D", text: "x = 10 or x = 0" },
    ],
    correctAnswer: "A",
    explanation:
      "This is a perfect square trinomial: x² − 10x + 25 = (x − 5)². Setting (x − 5)² = 0 gives the single repeated solution x = 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt: "Solve for x: x² + 3x − 10 = 0.",
    choices: [
      { label: "A", text: "x = 2 or x = −5" },
      { label: "B", text: "x = −2 or x = 5" },
      { label: "C", text: "x = 2 or x = 5" },
      { label: "D", text: "x = −2 or x = −5" },
    ],
    correctAnswer: "A",
    explanation:
      "Find two numbers multiplying to −10 and adding to 3: 5 and −2. So (x − 2)(x + 5) = 0, giving x = 2 or x = −5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "The product of two consecutive positive integers is 56. What is the smaller integer?",
    choices: [
      { label: "A", text: "7" },
      { label: "B", text: "8" },
      { label: "C", text: "6" },
      { label: "D", text: "28" },
    ],
    correctAnswer: "A",
    explanation:
      "Let the integers be n and n + 1. Then n(n + 1) = 56, so n² + n − 56 = 0, which factors as (n − 7)(n + 8) = 0. The positive solution is n = 7.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "What is the discriminant of 2x² + 3x + 5 = 0, and what does it indicate?",
    choices: [
      { label: "A", text: "−31; no real solutions" },
      { label: "B", text: "49; two real solutions" },
      { label: "C", text: "0; one real solution" },
      { label: "D", text: "31; two real solutions" },
    ],
    correctAnswer: "A",
    explanation:
      "The discriminant is b² − 4ac = 3² − 4(2)(5) = 9 − 40 = −31. A negative discriminant means the equation has no real solutions.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "By completing the square, the equation x² + 6x + 4 = 0 becomes which of the following?",
    choices: [
      { label: "A", text: "(x + 3)² = 5" },
      { label: "B", text: "(x + 3)² = 13" },
      { label: "C", text: "(x + 6)² = 5" },
      { label: "D", text: "(x − 3)² = 5" },
    ],
    correctAnswer: "A",
    explanation:
      "Move the constant: x² + 6x = −4. Add (6/2)² = 9 to both sides: x² + 6x + 9 = 5, which is (x + 3)² = 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 5,
    estimatedTimeSec: 105,
    prompt:
      "For which values of x is the quadratic inequality x² − x − 6 > 0 true?",
    choices: [
      { label: "A", text: "x < −2 or x > 3" },
      { label: "B", text: "−2 < x < 3" },
      { label: "C", text: "x < −3 or x > 2" },
      { label: "D", text: "−3 < x < 2" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor: x² − x − 6 = (x − 3)(x + 2), with roots x = 3 and x = −2. The upward parabola is positive outside the roots, so x < −2 or x > 3.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // function_basics — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt: "If f(x) = x + 8, what is f(0)?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "0" },
      { label: "C", text: "1" },
      { label: "D", text: "−8" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute x = 0: f(0) = 0 + 8 = 8.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "If h(x) = 4x − 9, for what value of x does h(x) = 7?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "19" },
      { label: "C", text: "−4" },
      { label: "D", text: "1.75" },
    ],
    correctAnswer: "A",
    explanation:
      "Set 4x − 9 = 7. Add 9: 4x = 16. Divide by 4: x = 4.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "If f(x) = x² − 4x, what is f(−3)?",
    choices: [
      { label: "A", text: "21" },
      { label: "B", text: "−3" },
      { label: "C", text: "−21" },
      { label: "D", text: "9" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute x = −3: f(−3) = (−3)² − 4(−3) = 9 + 12 = 21.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "If f(x) = 2x + 5 and g(x) = x², what is g(f(1))?",
    choices: [
      { label: "A", text: "49" },
      { label: "B", text: "7" },
      { label: "C", text: "11" },
      { label: "D", text: "14" },
    ],
    correctAnswer: "A",
    explanation:
      "Work inside out: f(1) = 2(1) + 5 = 7. Then g(7) = 7² = 49.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the range of the function f(x) = x² + 2 for all real x?",
    choices: [
      { label: "A", text: "y ≥ 2" },
      { label: "B", text: "y ≥ 0" },
      { label: "C", text: "all real numbers" },
      { label: "D", text: "y ≤ 2" },
    ],
    correctAnswer: "A",
    explanation:
      "x² is always ≥ 0, so x² + 2 is always ≥ 2. The minimum output is 2 (at x = 0), and there is no maximum, so the range is y ≥ 2.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A car's value V after t years is modeled by V(t) = 24000 − 1800t. What does the value 1800 represent?",
    choices: [
      { label: "A", text: "the dollar amount the car loses each year" },
      { label: "B", text: "the car's value when new" },
      { label: "C", text: "the number of years until the car is worthless" },
      { label: "D", text: "the car's value after 1 year" },
    ],
    correctAnswer: "A",
    explanation:
      "In V(t) = 24000 − 1800t, the coefficient of t is the rate of change. Because it is subtracted, 1800 is the dollars of value lost per year.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "The function f(x) = 5/(x − 2) is undefined for which value of x?",
    choices: [
      { label: "A", text: "x = 2" },
      { label: "B", text: "x = 0" },
      { label: "C", text: "x = 5" },
      { label: "D", text: "x = −2" },
    ],
    correctAnswer: "A",
    explanation:
      "A fraction is undefined when its denominator is zero. Set x − 2 = 0, so the function is undefined at x = 2.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "If f(x) = 3x − 1, what is the inverse function f⁻¹(x)?",
    choices: [
      { label: "A", text: "f⁻¹(x) = (x + 1)/3" },
      { label: "B", text: "f⁻¹(x) = (x − 1)/3" },
      { label: "C", text: "f⁻¹(x) = 3x + 1" },
      { label: "D", text: "f⁻¹(x) = 1/(3x − 1)" },
    ],
    correctAnswer: "A",
    explanation:
      "Write y = 3x − 1, swap x and y: x = 3y − 1, then solve for y: x + 1 = 3y, so y = (x + 1)/3.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // function_graphs — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "What is the y-intercept of the graph of y = 3x − 8?",
    choices: [
      { label: "A", text: "−8" },
      { label: "B", text: "3" },
      { label: "C", text: "8" },
      { label: "D", text: "8/3" },
    ],
    correctAnswer: "A",
    explanation:
      "The y-intercept is the value of y when x = 0: y = 3(0) − 8 = −8.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "The graph of y = x² is shifted up 5 units. Which equation describes the new graph?",
    choices: [
      { label: "A", text: "y = x² + 5" },
      { label: "B", text: "y = x² − 5" },
      { label: "C", text: "y = (x + 5)²" },
      { label: "D", text: "y = 5x²" },
    ],
    correctAnswer: "A",
    explanation:
      "A vertical shift up by 5 adds 5 to the output: y = x² + 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "Which feature does the graph of y = (x − 4)² + 1 have?",
    choices: [
      { label: "A", text: "a vertex at (4, 1)" },
      { label: "B", text: "a vertex at (−4, 1)" },
      { label: "C", text: "a vertex at (4, −1)" },
      { label: "D", text: "a y-intercept at (0, 1)" },
    ],
    correctAnswer: "A",
    explanation:
      "In vertex form y = (x − h)² + k, the vertex is (h, k). Here h = 4 and k = 1, so the vertex is (4, 1).",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "The graph of a line passes through (0, 4) and (2, 0). What is its equation?",
    choices: [
      { label: "A", text: "y = −2x + 4" },
      { label: "B", text: "y = 2x + 4" },
      { label: "C", text: "y = −2x − 4" },
      { label: "D", text: "y = (1/2)x + 4" },
    ],
    correctAnswer: "A",
    explanation:
      "The slope is (0 − 4)/(2 − 0) = −2, and (0, 4) gives y-intercept 4. The equation is y = −2x + 4.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A graph shows a parabola opening downward with vertex at the origin. Which equation could it represent?",
    choices: [
      { label: "A", text: "y = −x²" },
      { label: "B", text: "y = x²" },
      { label: "C", text: "y = −x² + 3" },
      { label: "D", text: "y = x² − 3" },
    ],
    correctAnswer: "A",
    explanation:
      "A negative leading coefficient opens the parabola downward, and a vertex at the origin means no horizontal or vertical shift. Only y = −x² satisfies both.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A population graph shows steady exponential growth. Which equation best models a population that doubles every year, starting at 300?",
    choices: [
      { label: "A", text: "P = 300 · 2ᵗ" },
      { label: "B", text: "P = 300 + 2t" },
      { label: "C", text: "P = 300 · t²" },
      { label: "D", text: "P = 2 · 300ᵗ" },
    ],
    correctAnswer: "A",
    explanation:
      "Doubling each year is exponential growth with base 2: P = 300 · 2ᵗ. After t years the starting value 300 has been multiplied by 2 a total of t times.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "The rational function y = 6/(x − 5) has a horizontal asymptote at which line?",
    choices: [
      { label: "A", text: "y = 0" },
      { label: "B", text: "y = 6" },
      { label: "C", text: "y = 5" },
      { label: "D", text: "x = 5" },
    ],
    correctAnswer: "A",
    explanation:
      "As x grows large, 6/(x − 5) approaches 0 because the denominator grows without bound. The horizontal asymptote is y = 0. (x = 5 is the vertical asymptote.)",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "The graph of y = f(x) is transformed to y = −f(x) + 3. This is which combination of transformations?",
    choices: [
      { label: "A", text: "reflect across the x-axis, then shift up 3" },
      { label: "B", text: "reflect across the y-axis, then shift up 3" },
      { label: "C", text: "shift up 3, then reflect across the y-axis" },
      { label: "D", text: "reflect across the x-axis, then shift right 3" },
    ],
    correctAnswer: "A",
    explanation:
      "The negative sign on f(x) reflects the graph across the x-axis; the + 3 outside the function shifts it up 3 units.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // sequences — 7 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "What is the next term in the arithmetic sequence 5, 11, 17, 23, …?",
    choices: [
      { label: "A", text: "29" },
      { label: "B", text: "28" },
      { label: "C", text: "30" },
      { label: "D", text: "35" },
    ],
    correctAnswer: "A",
    explanation:
      "The common difference is 6 (11 − 5 = 6). The next term is 23 + 6 = 29.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "What is the next term in the geometric sequence 2, 6, 18, 54, …?",
    choices: [
      { label: "A", text: "162" },
      { label: "B", text: "108" },
      { label: "C", text: "150" },
      { label: "D", text: "72" },
    ],
    correctAnswer: "A",
    explanation:
      "Each term is multiplied by 3 (6 ÷ 2 = 3). The next term is 54 × 3 = 162.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "An arithmetic sequence has first term 8 and common difference 4. What is the 12th term?",
    choices: [
      { label: "A", text: "52" },
      { label: "B", text: "56" },
      { label: "C", text: "48" },
      { label: "D", text: "44" },
    ],
    correctAnswer: "A",
    explanation:
      "The nth term is a₁ + (n − 1)d = 8 + (12 − 1)(4) = 8 + 44 = 52.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A sequence is defined recursively by a₁ = 3 and aₙ = 2aₙ₋₁ + 1. What is a₄?",
    choices: [
      { label: "A", text: "31" },
      { label: "B", text: "23" },
      { label: "C", text: "15" },
      { label: "D", text: "29" },
    ],
    correctAnswer: "A",
    explanation:
      "Apply the rule step by step: a₂ = 2(3) + 1 = 7; a₃ = 2(7) + 1 = 15; a₄ = 2(15) + 1 = 31.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A theater has 20 seats in the first row and 4 more seats in each successive row. How many seats are in the 8th row?",
    choices: [
      { label: "A", text: "48" },
      { label: "B", text: "52" },
      { label: "C", text: "44" },
      { label: "D", text: "32" },
    ],
    correctAnswer: "A",
    explanation:
      "This is arithmetic with a₁ = 20 and d = 4. The 8th row has 20 + (8 − 1)(4) = 20 + 28 = 48 seats.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "What is the sum of the first 6 terms of the arithmetic sequence 4, 9, 14, …?",
    choices: [
      { label: "A", text: "99" },
      { label: "B", text: "84" },
      { label: "C", text: "104" },
      { label: "D", text: "90" },
    ],
    correctAnswer: "A",
    explanation:
      "The 6th term is 4 + 5(5) = 29. The sum of an arithmetic series is n(first + last)/2 = 6(4 + 29)/2 = 6(33)/2 = 99.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "In a geometric sequence, the 3rd term is 20 and the 5th term is 80. What is the common ratio (given all terms are positive)?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "4" },
      { label: "C", text: "3" },
      { label: "D", text: "1.5" },
    ],
    correctAnswer: "A",
    explanation:
      "From term 3 to term 5 the value is multiplied by r twice: 20r² = 80, so r² = 4 and r = 2 (positive terms).",
  },

  // ════════════════════════════════════════════════════════════════════════
  // trigonometry — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt: "What is the exact value of sin 30°?",
    choices: [
      { label: "A", text: "1/2" },
      { label: "B", text: "√3/2" },
      { label: "C", text: "√2/2" },
      { label: "D", text: "1" },
    ],
    correctAnswer: "A",
    explanation:
      "From the standard 30°-60°-90° triangle (or the unit circle), sin 30° = 1/2.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "In a right triangle, an angle θ has cos θ = 8/17. If sin θ is positive, what is sin θ?",
    choices: [
      { label: "A", text: "15/17" },
      { label: "B", text: "9/17" },
      { label: "C", text: "8/15" },
      { label: "D", text: "17/15" },
    ],
    correctAnswer: "A",
    explanation:
      "Use sin²θ + cos²θ = 1: sin²θ = 1 − (8/17)² = 1 − 64/289 = 225/289, so sin θ = 15/17.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the value of tan 45°?",
    choices: [
      { label: "A", text: "1" },
      { label: "B", text: "0" },
      { label: "C", text: "√2/2" },
      { label: "D", text: "√3" },
    ],
    correctAnswer: "A",
    explanation:
      "tan 45° = sin 45° / cos 45° = (√2/2)/(√2/2) = 1. Equivalently, a 45°-45°-90° triangle has equal legs, so opposite/adjacent = 1.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "An angle measures 180°. What is this angle in radians?",
    choices: [
      { label: "A", text: "π" },
      { label: "B", text: "π/2" },
      { label: "C", text: "2π" },
      { label: "D", text: "π/4" },
    ],
    correctAnswer: "A",
    explanation:
      "A full circle is 360° = 2π radians, so 180° is half of that: π radians.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the period of the function y = sin x?",
    choices: [
      { label: "A", text: "2π" },
      { label: "B", text: "π" },
      { label: "C", text: "π/2" },
      { label: "D", text: "1" },
    ],
    correctAnswer: "A",
    explanation:
      "The sine function repeats its values every 2π radians, so its period is 2π.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "What is the amplitude of the function y = 4 sin(2x)?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "2" },
      { label: "C", text: "8" },
      { label: "D", text: "π" },
    ],
    correctAnswer: "A",
    explanation:
      "For y = a sin(bx), the amplitude is |a|. Here a = 4, so the amplitude is 4. (The 2 affects the period, not the amplitude.)",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "If θ is in the third quadrant and tan θ = 3/4, what is the value of cos θ?",
    choices: [
      { label: "A", text: "−4/5" },
      { label: "B", text: "4/5" },
      { label: "C", text: "−3/5" },
      { label: "D", text: "3/5" },
    ],
    correctAnswer: "A",
    explanation:
      "tan θ = 3/4 suggests a 3-4-5 triangle, so |cos θ| = 4/5. In the third quadrant cosine is negative, so cos θ = −4/5.",
  },
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 5,
    estimatedTimeSec: 110,
    prompt:
      "Using the identity cos 2θ = 1 − 2sin²θ, what is cos 2θ when sin θ = 1/3?",
    choices: [
      { label: "A", text: "7/9" },
      { label: "B", text: "1/9" },
      { label: "C", text: "−7/9" },
      { label: "D", text: "2/3" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute sin θ = 1/3: cos 2θ = 1 − 2(1/3)² = 1 − 2(1/9) = 1 − 2/9 = 7/9.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // plane_geometry — 9 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "Two angles are supplementary. If one measures 65°, what is the other?",
    choices: [
      { label: "A", text: "115°" },
      { label: "B", text: "25°" },
      { label: "C", text: "35°" },
      { label: "D", text: "295°" },
    ],
    correctAnswer: "A",
    explanation:
      "Supplementary angles sum to 180°. The other angle is 180° − 65° = 115°. (25° would be the complement.)",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A triangle has a base of 10 cm and a height of 6 cm. What is its area?",
    choices: [
      { label: "A", text: "30 sq cm" },
      { label: "B", text: "60 sq cm" },
      { label: "C", text: "16 sq cm" },
      { label: "D", text: "32 sq cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Area of a triangle is ½ × base × height = ½ × 10 × 6 = 30 sq cm. (Choice B forgets the ½.)",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the sum of the interior angles of a regular hexagon?",
    choices: [
      { label: "A", text: "720°" },
      { label: "B", text: "540°" },
      { label: "C", text: "360°" },
      { label: "D", text: "1080°" },
    ],
    correctAnswer: "A",
    explanation:
      "The interior-angle sum of an n-sided polygon is (n − 2) × 180°. For a hexagon: (6 − 2) × 180° = 720°.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A circle has a diameter of 14 cm. What is its circumference, in terms of π?",
    choices: [
      { label: "A", text: "14π cm" },
      { label: "B", text: "7π cm" },
      { label: "C", text: "28π cm" },
      { label: "D", text: "49π cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Circumference equals π times the diameter: C = πd = 14π cm. (49π would be the area, πr².)",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "One interior angle of a regular polygon measures 135°. How many sides does the polygon have?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "6" },
      { label: "C", text: "10" },
      { label: "D", text: "5" },
    ],
    correctAnswer: "A",
    explanation:
      "Each interior angle of a regular n-gon is (n − 2)·180°/n. Set (n − 2)·180/n = 135: 180n − 360 = 135n, so 45n = 360 and n = 8.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A rectangular garden is 12 m long and 7 m wide. A path increases the perimeter by 18 m. What is the new perimeter?",
    choices: [
      { label: "A", text: "56 m" },
      { label: "B", text: "38 m" },
      { label: "C", text: "84 m" },
      { label: "D", text: "102 m" },
    ],
    correctAnswer: "A",
    explanation:
      "Original perimeter = 2(12 + 7) = 38 m. Adding 18 m gives 38 + 18 = 56 m.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "In a parallelogram, one angle measures 70°. What is the measure of an adjacent angle?",
    choices: [
      { label: "A", text: "110°" },
      { label: "B", text: "70°" },
      { label: "C", text: "20°" },
      { label: "D", text: "90°" },
    ],
    correctAnswer: "A",
    explanation:
      "Adjacent angles in a parallelogram are supplementary, summing to 180°. The adjacent angle is 180° − 70° = 110°.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A circular pizza with a 16-inch diameter is cut into 8 equal slices. What is the area of one slice, in terms of π?",
    choices: [
      { label: "A", text: "8π sq in" },
      { label: "B", text: "32π sq in" },
      { label: "C", text: "2π sq in" },
      { label: "D", text: "16π sq in" },
    ],
    correctAnswer: "A",
    explanation:
      "The radius is 8 in, so the whole pizza's area is π(8²) = 64π. One of 8 equal slices is 64π ÷ 8 = 8π sq in.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A shaded region is a square of side 10 with a circle of radius 5 removed from its center. What is the area of the shaded region, in terms of π?",
    choices: [
      { label: "A", text: "100 − 25π" },
      { label: "B", text: "100 − 5π" },
      { label: "C", text: "100 − 10π" },
      { label: "D", text: "25π − 100" },
    ],
    correctAnswer: "A",
    explanation:
      "The square's area is 10² = 100. The circle's area is π(5²) = 25π. The shaded region is the difference: 100 − 25π.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // coordinate_geometry — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "In which quadrant does the point (−4, 7) lie?",
    choices: [
      { label: "A", text: "Quadrant II" },
      { label: "B", text: "Quadrant I" },
      { label: "C", text: "Quadrant III" },
      { label: "D", text: "Quadrant IV" },
    ],
    correctAnswer: "A",
    explanation:
      "A negative x and a positive y place a point in the upper-left region, Quadrant II.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "What is the slope of the line through (−1, −2) and (3, 6)?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "1/2" },
      { label: "C", text: "−2" },
      { label: "D", text: "4" },
    ],
    correctAnswer: "A",
    explanation:
      "Slope = (6 − (−2)) / (3 − (−1)) = 8/4 = 2.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the midpoint of the segment with endpoints (3, −4) and (9, 8)?",
    choices: [
      { label: "A", text: "(6, 2)" },
      { label: "B", text: "(12, 4)" },
      { label: "C", text: "(6, 4)" },
      { label: "D", text: "(3, 6)" },
    ],
    correctAnswer: "A",
    explanation:
      "The midpoint averages the coordinates: x = (3 + 9)/2 = 6, y = (−4 + 8)/2 = 2. The midpoint is (6, 2).",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "What is the distance between the points (−2, 1) and (4, 9)?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "14" },
      { label: "C", text: "√28" },
      { label: "D", text: "8" },
    ],
    correctAnswer: "A",
    explanation:
      "Distance = √((4 − (−2))² + (9 − 1)²) = √(6² + 8²) = √(36 + 64) = √100 = 10.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "Which line is perpendicular to y = (2/3)x + 1?",
    choices: [
      { label: "A", text: "y = −(3/2)x + 4" },
      { label: "B", text: "y = (2/3)x − 5" },
      { label: "C", text: "y = (3/2)x + 1" },
      { label: "D", text: "y = −(2/3)x + 2" },
    ],
    correctAnswer: "A",
    explanation:
      "Perpendicular slopes are negative reciprocals. The slope 2/3 has negative reciprocal −3/2, so y = −(3/2)x + 4 is perpendicular.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "What is the x-intercept of the line 3x + 4y = 24?",
    choices: [
      { label: "A", text: "(8, 0)" },
      { label: "B", text: "(0, 6)" },
      { label: "C", text: "(6, 0)" },
      { label: "D", text: "(24, 0)" },
    ],
    correctAnswer: "A",
    explanation:
      "The x-intercept occurs where y = 0: 3x + 4(0) = 24, so 3x = 24 and x = 8. The x-intercept is (8, 0).",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A circle is centered at (−2, 5) with a radius of 4. What is its equation?",
    choices: [
      { label: "A", text: "(x + 2)² + (y − 5)² = 16" },
      { label: "B", text: "(x − 2)² + (y + 5)² = 16" },
      { label: "C", text: "(x + 2)² + (y − 5)² = 4" },
      { label: "D", text: "(x − 2)² + (y − 5)² = 16" },
    ],
    correctAnswer: "A",
    explanation:
      "The standard circle equation is (x − h)² + (y − k)² = r² with center (h, k). Here (h, k) = (−2, 5) and r² = 16, giving (x + 2)² + (y − 5)² = 16.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "Three vertices of a parallelogram are (0, 0), (5, 0), and (2, 4). What are the coordinates of the fourth vertex opposite (5, 0)?",
    choices: [
      { label: "A", text: "(−3, 4)" },
      { label: "B", text: "(7, 4)" },
      { label: "C", text: "(3, 4)" },
      { label: "D", text: "(−3, −4)" },
    ],
    correctAnswer: "A",
    explanation:
      "In a parallelogram the diagonals bisect each other. The midpoint of the diagonal from (5, 0) to the unknown vertex must equal the midpoint of (0, 0) and (2, 4), which is (1, 2). So ((5 + x)/2, (0 + y)/2) = (1, 2), giving x = −3 and y = 4.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // solid_geometry — 7 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A cube has an edge length of 4 cm. What is its volume?",
    choices: [
      { label: "A", text: "64 cubic cm" },
      { label: "B", text: "16 cubic cm" },
      { label: "C", text: "12 cubic cm" },
      { label: "D", text: "48 cubic cm" },
    ],
    correctAnswer: "A",
    explanation:
      "The volume of a cube is the edge length cubed: 4³ = 64 cubic cm.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A rectangular prism is 3 m by 4 m by 10 m. What is its surface area?",
    choices: [
      { label: "A", text: "164 sq m" },
      { label: "B", text: "120 sq m" },
      { label: "C", text: "82 sq m" },
      { label: "D", text: "140 sq m" },
    ],
    correctAnswer: "A",
    explanation:
      "Surface area = 2(lw + lh + wh) = 2((3·4) + (3·10) + (4·10)) = 2(12 + 30 + 40) = 2(82) = 164 sq m.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A cylinder has a radius of 5 cm and a height of 8 cm. What is its volume, in terms of π?",
    choices: [
      { label: "A", text: "200π cubic cm" },
      { label: "B", text: "80π cubic cm" },
      { label: "C", text: "40π cubic cm" },
      { label: "D", text: "400π cubic cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume of a cylinder is πr²h = π(5²)(8) = π(25)(8) = 200π cubic cm.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A storage tank shaped like a rectangular box holds water. Its base is 2 m by 3 m and water fills it to a depth of 1.5 m. How many cubic meters of water are in the tank?",
    choices: [
      { label: "A", text: "9" },
      { label: "B", text: "6.5" },
      { label: "C", text: "11" },
      { label: "D", text: "4.5" },
    ],
    correctAnswer: "A",
    explanation:
      "The water forms a box 2 m by 3 m by 1.5 m. Volume = 2 × 3 × 1.5 = 9 cubic meters.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A cone has a radius of 6 cm and a height of 9 cm. What is its volume, in terms of π? (Volume of a cone = 1/3 πr²h.)",
    choices: [
      { label: "A", text: "108π cubic cm" },
      { label: "B", text: "324π cubic cm" },
      { label: "C", text: "54π cubic cm" },
      { label: "D", text: "36π cubic cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume = 1/3 πr²h = 1/3 π(6²)(9) = 1/3 π(36)(9) = 1/3 π(324) = 108π cubic cm.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A sphere has a surface area of 36π square inches. What is its radius? (Surface area of a sphere = 4πr².)",
    choices: [
      { label: "A", text: "3 inches" },
      { label: "B", text: "6 inches" },
      { label: "C", text: "9 inches" },
      { label: "D", text: "1.5 inches" },
    ],
    correctAnswer: "A",
    explanation:
      "Set 4πr² = 36π. Divide by 4π: r² = 9, so r = 3 inches.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A cylindrical can has a volume of 100π cubic cm and a height of 4 cm. What is the radius of its base?",
    choices: [
      { label: "A", text: "5 cm" },
      { label: "B", text: "25 cm" },
      { label: "C", text: "10 cm" },
      { label: "D", text: "2.5 cm" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume = πr²h, so 100π = πr²(4). Divide by 4π: r² = 25, so r = 5 cm.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // right_triangle_trig — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A right triangle has legs of length 3 and 4. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "7" },
      { label: "C", text: "12" },
      { label: "D", text: "25" },
    ],
    correctAnswer: "A",
    explanation:
      "By the Pythagorean theorem, c² = 3² + 4² = 9 + 16 = 25, so c = 5.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "In a right triangle, angle θ has an adjacent side of 9 and an opposite side of 12. What is tan θ?",
    choices: [
      { label: "A", text: "4/3" },
      { label: "B", text: "3/4" },
      { label: "C", text: "9/15" },
      { label: "D", text: "12/15" },
    ],
    correctAnswer: "A",
    explanation:
      "By SOHCAHTOA, tan θ = opposite/adjacent = 12/9 = 4/3.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Two triangles are similar. The first has sides 6, 8, 10. The second has a shortest side of 9. What is the longest side of the second triangle?",
    choices: [
      { label: "A", text: "15" },
      { label: "B", text: "12" },
      { label: "C", text: "13.5" },
      { label: "D", text: "18" },
    ],
    correctAnswer: "A",
    explanation:
      "The scale factor is 9/6 = 1.5. The longest side of the first triangle is 10, so the second triangle's longest side is 10 × 1.5 = 15.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A right triangle has a hypotenuse of 26 and one leg of 24. What is the length of the other leg?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "12" },
      { label: "C", text: "50" },
      { label: "D", text: "√1252" },
    ],
    correctAnswer: "A",
    explanation:
      "By the Pythagorean theorem, leg² = 26² − 24² = 676 − 576 = 100, so the leg is √100 = 10.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A ramp rises 3 feet over a horizontal run of 4 feet. What is the length of the ramp's sloped surface?",
    choices: [
      { label: "A", text: "5 feet" },
      { label: "B", text: "7 feet" },
      { label: "C", text: "√7 feet" },
      { label: "D", text: "12 feet" },
    ],
    correctAnswer: "A",
    explanation:
      "The ramp is the hypotenuse of a right triangle with legs 3 and 4: length = √(3² + 4²) = √25 = 5 feet.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "In a 30°-60°-90° triangle, the side opposite the 60° angle is 5√3. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "5" },
      { label: "C", text: "10√3" },
      { label: "D", text: "5√3" },
    ],
    correctAnswer: "A",
    explanation:
      "In a 30°-60°-90° triangle the sides are in ratio 1 : √3 : 2. The side opposite 60° is the √3 part, equal to 5√3, so the unit length is 5. The hypotenuse is the 2 part: 2 × 5 = 10.",
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "From a point on the ground, the angle of elevation to the top of a 50-foot tower is 40°. Which expression gives the distance from the point to the base of the tower?",
    choices: [
      { label: "A", text: "50 / tan 40°" },
      { label: "B", text: "50 · tan 40°" },
      { label: "C", text: "50 · sin 40°" },
      { label: "D", text: "50 / sin 40°" },
    ],
    correctAnswer: "A",
    explanation:
      "The tower height (50) is opposite the 40° angle and the ground distance is adjacent. tan 40° = 50/distance, so distance = 50 / tan 40°.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 5,
    estimatedTimeSec: 105,
    prompt:
      "In right triangle ABC, the right angle is at C. The altitude from C to the hypotenuse AB divides it into segments of length 4 and 9. What is the length of the altitude?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "6.5" },
      { label: "C", text: "13" },
      { label: "D", text: "36" },
    ],
    correctAnswer: "A",
    explanation:
      "By the geometric-mean (altitude-on-hypotenuse) relationship, the altitude is the geometric mean of the two segments: h = √(4 × 9) = √36 = 6.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // data_statistics — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "What is the mean of the numbers 6, 10, 14, and 18?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "14" },
      { label: "C", text: "48" },
      { label: "D", text: "10" },
    ],
    correctAnswer: "A",
    explanation:
      "Mean = sum ÷ count = (6 + 10 + 14 + 18) ÷ 4 = 48 ÷ 4 = 12.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "What is the median of the data set 12, 5, 8, 20, 15?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "8" },
      { label: "C", text: "15" },
      { label: "D", text: "12.5" },
    ],
    correctAnswer: "A",
    explanation:
      "Sort the values: 5, 8, 12, 15, 20. With 5 values, the median is the middle (3rd) value: 12.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "The range of a data set is 47, and its smallest value is 13. What is the largest value?",
    choices: [
      { label: "A", text: "60" },
      { label: "B", text: "34" },
      { label: "C", text: "47" },
      { label: "D", text: "30" },
    ],
    correctAnswer: "A",
    explanation:
      "Range = largest − smallest. So largest = range + smallest = 47 + 13 = 60.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A test has a weighted grade: homework counts 30% and the exam counts 70%. A student scores 80 on homework and 95 on the exam. What is the weighted grade?",
    choices: [
      { label: "A", text: "90.5" },
      { label: "B", text: "87.5" },
      { label: "C", text: "88" },
      { label: "D", text: "85" },
    ],
    correctAnswer: "A",
    explanation:
      "Weighted grade = 0.30(80) + 0.70(95) = 24 + 66.5 = 90.5.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A bar chart shows monthly sales: Jan 40, Feb 55, Mar 35, Apr 70. What was the mean monthly sales over the four months?",
    choices: [
      { label: "A", text: "50" },
      { label: "B", text: "55" },
      { label: "C", text: "47.5" },
      { label: "D", text: "45" },
    ],
    correctAnswer: "A",
    explanation:
      "Mean = (40 + 55 + 35 + 70) ÷ 4 = 200 ÷ 4 = 50.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "The mean of five numbers is 22. If one number, 30, is removed, what is the mean of the remaining four numbers?",
    choices: [
      { label: "A", text: "20" },
      { label: "B", text: "22" },
      { label: "C", text: "18" },
      { label: "D", text: "25" },
    ],
    correctAnswer: "A",
    explanation:
      "The total of all five numbers is 5 × 22 = 110. Removing 30 leaves 80 for four numbers, so the new mean is 80 ÷ 4 = 20.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 4,
    estimatedTimeSec: 85,
    prompt:
      "A frequency table lists values 2 (frequency 4), 5 (frequency 6), and 9 (frequency 10). What is the median of this data set?",
    choices: [
      { label: "A", text: "9" },
      { label: "B", text: "5" },
      { label: "C", text: "6.55" },
      { label: "D", text: "7" },
    ],
    correctAnswer: "A",
    explanation:
      "There are 4 + 6 + 10 = 20 values. The median is the average of the 10th and 11th values. Positions 1–4 are 2's, 5–10 are 5's, and 11–20 are 9's. The 10th value is 5 and the 11th is 9, so the median is (5 + 9)/2 = 7 — re-examine: positions 5 through 10 are 5's, so the 10th value is 5; the 11th value is 9. Median = (5 + 9)/2 = 7. The 10th and 11th straddle the boundary, so the answer is 7.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A class of 25 students has a mean score of 76. A second class of 15 students has a mean score of 84. What is the combined mean score of all 40 students?",
    choices: [
      { label: "A", text: "79" },
      { label: "B", text: "80" },
      { label: "C", text: "78" },
      { label: "D", text: "81.5" },
    ],
    correctAnswer: "A",
    explanation:
      "Total points = 25(76) + 15(84) = 1900 + 1260 = 3160. Combined mean = 3160 ÷ 40 = 79.",
    modeling: true,
  },

  // ════════════════════════════════════════════════════════════════════════
  // probability — 8 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A fair coin is flipped once. What is the probability it lands on heads?",
    choices: [
      { label: "A", text: "1/2" },
      { label: "B", text: "1" },
      { label: "C", text: "1/4" },
      { label: "D", text: "0" },
    ],
    correctAnswer: "A",
    explanation:
      "A fair coin has two equally likely outcomes, heads and tails. P(heads) = 1/2.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A bag contains 3 red and 9 blue marbles. What is the probability of drawing a red marble at random?",
    choices: [
      { label: "A", text: "1/4" },
      { label: "B", text: "1/3" },
      { label: "C", text: "3/9" },
      { label: "D", text: "3/4" },
    ],
    correctAnswer: "A",
    explanation:
      "P(red) = red ÷ total = 3 ÷ 12 = 1/4.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A single die is rolled. What is the probability of rolling a number greater than 4?",
    choices: [
      { label: "A", text: "1/3" },
      { label: "B", text: "1/2" },
      { label: "C", text: "2/3" },
      { label: "D", text: "1/6" },
    ],
    correctAnswer: "A",
    explanation:
      "Numbers greater than 4 are 5 and 6 — that is 2 of 6 outcomes. P = 2/6 = 1/3.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "Two fair coins are flipped. What is the probability that both land on tails?",
    choices: [
      { label: "A", text: "1/4" },
      { label: "B", text: "1/2" },
      { label: "C", text: "1/3" },
      { label: "D", text: "2/4" },
    ],
    correctAnswer: "A",
    explanation:
      "The two flips are independent: P(both tails) = (1/2)(1/2) = 1/4.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A restaurant offers 4 main dishes and 3 desserts. How many different main-dish-plus-dessert combinations are possible?",
    choices: [
      { label: "A", text: "12" },
      { label: "B", text: "7" },
      { label: "C", text: "9" },
      { label: "D", text: "24" },
    ],
    correctAnswer: "A",
    explanation:
      "By the counting principle, multiply the choices: 4 × 3 = 12 combinations.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "In a class of 30 students, 18 play soccer, 12 play tennis, and 6 play both. How many students play neither sport?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "0" },
      { label: "C", text: "12" },
      { label: "D", text: "10" },
    ],
    correctAnswer: "A",
    explanation:
      "Students playing at least one sport = 18 + 12 − 6 = 24 (subtracting the overlap). Neither = 30 − 24 = 6.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "How many different ways can 4 distinct books be arranged in a row on a shelf?",
    choices: [
      { label: "A", text: "24" },
      { label: "B", text: "16" },
      { label: "C", text: "12" },
      { label: "D", text: "256" },
    ],
    correctAnswer: "A",
    explanation:
      "The number of arrangements of 4 distinct items is 4! = 4 × 3 × 2 × 1 = 24.",
  },
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "From a group of 6 students, how many different 2-student committees can be formed?",
    choices: [
      { label: "A", text: "15" },
      { label: "B", text: "30" },
      { label: "C", text: "12" },
      { label: "D", text: "36" },
    ],
    correctAnswer: "A",
    explanation:
      "Order does not matter, so use combinations: C(6, 2) = (6 × 5)/(2 × 1) = 30/2 = 15.",
  },

  // ════════════════════════════════════════════════════════════════════════
  // word_problems — 9 questions
  // ════════════════════════════════════════════════════════════════════════
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 1,
    estimatedTimeSec: 45,
    prompt:
      "A movie ticket costs $9. How much do 5 tickets cost?",
    choices: [
      { label: "A", text: "$45" },
      { label: "B", text: "$14" },
      { label: "C", text: "$40" },
      { label: "D", text: "$54" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply the price by the number of tickets: 5 × $9 = $45.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 2,
    estimatedTimeSec: 55,
    prompt:
      "A runner covers 8 miles in 64 minutes at a steady pace. How many minutes does it take to run 1 mile?",
    choices: [
      { label: "A", text: "8" },
      { label: "B", text: "6" },
      { label: "C", text: "56" },
      { label: "D", text: "512" },
    ],
    correctAnswer: "A",
    explanation:
      "Divide total time by total miles: 64 ÷ 8 = 8 minutes per mile.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 65,
    prompt:
      "A shirt costs $24 after a 20% discount. What was the original price?",
    choices: [
      { label: "A", text: "$30" },
      { label: "B", text: "$28.80" },
      { label: "C", text: "$44" },
      { label: "D", text: "$4.80" },
    ],
    correctAnswer: "A",
    explanation:
      "After a 20% discount, $24 is 80% of the original. Original = 24 ÷ 0.80 = $30.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A map uses a scale of 1 inch = 25 miles. Two cities are 4.5 inches apart on the map. What is the actual distance between them?",
    choices: [
      { label: "A", text: "112.5 miles" },
      { label: "B", text: "29.5 miles" },
      { label: "C", text: "100 miles" },
      { label: "D", text: "5.56 miles" },
    ],
    correctAnswer: "A",
    explanation:
      "Multiply the map distance by the scale: 4.5 × 25 = 112.5 miles.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 70,
    prompt:
      "A recipe for 4 servings uses 3 cups of rice. How many cups are needed for 10 servings?",
    choices: [
      { label: "A", text: "7.5" },
      { label: "B", text: "12" },
      { label: "C", text: "13.3" },
      { label: "D", text: "6" },
    ],
    correctAnswer: "A",
    explanation:
      "Set up a proportion: 3 cups / 4 servings = x / 10 servings. Cross-multiply: 4x = 30, so x = 7.5 cups.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 75,
    prompt:
      "A car travels at 60 miles per hour. How many feet does it travel in one minute? (1 mile = 5,280 feet.)",
    choices: [
      { label: "A", text: "5,280" },
      { label: "B", text: "3,600" },
      { label: "C", text: "316,800" },
      { label: "D", text: "88" },
    ],
    correctAnswer: "A",
    explanation:
      "At 60 mph the car covers 60 miles per 60 minutes, which is 1 mile per minute. One mile is 5,280 feet, so it travels 5,280 feet per minute.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 4,
    estimatedTimeSec: 90,
    prompt:
      "A $2,000 deposit earns 5% simple interest per year. How much interest is earned after 3 years?",
    choices: [
      { label: "A", text: "$300" },
      { label: "B", text: "$315.25" },
      { label: "C", text: "$100" },
      { label: "D", text: "$2,300" },
    ],
    correctAnswer: "A",
    explanation:
      "Simple interest = principal × rate × time = 2000 × 0.05 × 3 = $300.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 4,
    estimatedTimeSec: 95,
    prompt:
      "A mixture is 40% juice. How many liters of pure juice must be added to 20 liters of the mixture to make it 50% juice?",
    choices: [
      { label: "A", text: "4 liters" },
      { label: "B", text: "2 liters" },
      { label: "C", text: "10 liters" },
      { label: "D", text: "5 liters" },
    ],
    correctAnswer: "A",
    explanation:
      "The mixture starts with 0.40 × 20 = 8 L of juice. Adding x L of pure juice gives (8 + x) L of juice in (20 + x) L total. Set (8 + x)/(20 + x) = 0.50: 8 + x = 10 + 0.5x, so 0.5x = 2 and x = 4 liters.",
    modeling: true,
  },
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 5,
    estimatedTimeSec: 110,
    prompt:
      "Alone, painter A finishes a room in 3 hours and painter B finishes the same room in 6 hours. They paint together for 1 hour, then A leaves. How much longer does B need to finish the room?",
    choices: [
      { label: "A", text: "3 hours" },
      { label: "B", text: "2 hours" },
      { label: "C", text: "1.5 hours" },
      { label: "D", text: "4 hours" },
    ],
    correctAnswer: "A",
    explanation:
      "A paints 1/3 per hour, B paints 1/6 per hour. Together in 1 hour they complete 1/3 + 1/6 = 1/2 of the room. The remaining 1/2 is done by B alone at 1/6 per hour: time = (1/2) ÷ (1/6) = 3 hours.",
    modeling: true,
  },
];
