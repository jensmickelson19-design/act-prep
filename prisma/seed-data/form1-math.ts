import type { SeedQuestion } from "./types";

// Diagnostic Form 1 — Math. 45 original, ACT-style standalone questions ordered
// by ascending difficulty (formOrder 1–45), matching the real ACT's easy→hard
// ramp. Every item is 100% original content: no real ACT items are reproduced.
// Each question carries an exact-string reportingCategory + subSkill from
// docs/act-taxonomy.md, a 1–5 difficulty, estimatedTimeSec, worked-solution
// explanation, and (where the stem produces/interprets/evaluates a real-world
// model) modeling: true. Math notation uses KaTeX inline delimiters ($...$).
// ~10 questions carry a FigureSpec[] (tables / bar-line-scatter charts).

export const form1MathQuestions: SeedQuestion[] = [
  // ── formOrder 1 — number_operations — diff 1 ────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "number_operations",
    difficulty: 1,
    estimatedTimeSec: 40,
    diagnosticForm: 1,
    formOrder: 1,
    prompt: "What is the value of $8 + 6 \\div 2 \\times 3$?",
    choices: [
      { label: "A", text: "$17$" },
      { label: "B", text: "$21$" },
      { label: "C", text: "$14$" },
      { label: "D", text: "$27$" },
    ],
    correctAnswer: "A",
    explanation:
      "Follow order of operations. Division and multiplication happen left to right before addition: $6 \\div 2 = 3$, then $3 \\times 3 = 9$, then $8 + 9 = 17$. Distractor B ($21$) comes from doing $6 \\div (2 \\times 3) = 1$ then adding wrong; C ($14$) from $8 + 6 = 14$ ignoring the rest; D ($27$) from adding first, $(8+6) \\div 2 \\times 3$ with a slip. The concept is PEMDAS with left-to-right evaluation of equal-priority operations.",
  },

  // ── formOrder 2 — linear_equations — diff 1 ─────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 1,
    estimatedTimeSec: 40,
    diagnosticForm: 1,
    formOrder: 2,
    prompt: "If $5x = 45$, what is the value of $x$?",
    choices: [
      { label: "A", text: "$40$" },
      { label: "B", text: "$50$" },
      { label: "C", text: "$9$" },
      { label: "D", text: "$225$" },
    ],
    correctAnswer: "C",
    explanation:
      "Divide both sides by $5$: $x = 45 \\div 5 = 9$. Distractor A subtracts $5$ instead of dividing ($45-5=40$); B adds ($45+5=50$); D multiplies ($45 \\times 5 = 225$). The concept is isolating a variable using the inverse operation.",
  },

  // ── formOrder 3 — word_problems — diff 1 (modeling) ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 1,
    estimatedTimeSec: 45,
    diagnosticForm: 1,
    formOrder: 3,
    modeling: true,
    prompt:
      "A phone plan charges a flat $\\$20$ per month plus $\\$0.10$ per text message. Which expression gives the total monthly cost, in dollars, when $t$ text messages are sent?",
    choices: [
      { label: "A", text: "$20t + 0.10$" },
      { label: "B", text: "$20 + 0.10t$" },
      { label: "C", text: "$0.10 + 20t$" },
      { label: "D", text: "$20.10t$" },
    ],
    correctAnswer: "B",
    explanation:
      "The fixed monthly fee $\\$20$ does not depend on $t$, and each of the $t$ texts costs $\\$0.10$, contributing $0.10t$. Total: $20 + 0.10t$. Distractor A and C swap which number is the per-text rate; D incorrectly multiplies the whole $\\$20.10$ by $t$, treating the flat fee as per-text. This is building a linear model with a constant term and a rate term.",
  },

  // ── formOrder 4 — plane_geometry — diff 1 ───────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 1,
    estimatedTimeSec: 45,
    diagnosticForm: 1,
    formOrder: 4,
    prompt:
      "Two angles of a triangle measure $50^\\circ$ and $70^\\circ$. What is the measure of the third angle?",
    choices: [
      { label: "A", text: "$120^\\circ$" },
      { label: "B", text: "$70^\\circ$" },
      { label: "C", text: "$60^\\circ$" },
      { label: "D", text: "$50^\\circ$" },
    ],
    correctAnswer: "C",
    explanation:
      "The interior angles of a triangle sum to $180^\\circ$. So the third angle is $180 - 50 - 70 = 60^\\circ$. Distractor A ($120^\\circ$) is just $50+70$, forgetting to subtract from $180$. B and D repeat a given angle. The concept is the triangle angle-sum theorem.",
  },

  // ── formOrder 5 — word_problems — diff 2 (modeling, table) ──────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 2,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 5,
    modeling: true,
    figures: [
      {
        kind: "table",
        id: "t1",
        label: "Table 1",
        caption: "Cost of tickets at a movie theater",
        columns: [
          { key: "tickets", header: "Tickets", align: "right" },
          { key: "cost", header: "Total cost", align: "right" },
        ],
        rows: [
          { tickets: 1, cost: "$9" },
          { tickets: 2, cost: "$18" },
          { tickets: 3, cost: "$27" },
        ],
      },
    ],
    prompt:
      "Table 1 shows the cost of movie tickets at a constant price per ticket. At this rate, what is the total cost of $6$ tickets?",
    choices: [
      { label: "A", text: "$\\$54$" },
      { label: "B", text: "$\\$45$" },
      { label: "C", text: "$\\$36$" },
      { label: "D", text: "$\\$15$" },
    ],
    correctAnswer: "A",
    explanation:
      "Each ticket costs $\\$9$ (the total rises by $9$ per ticket). For $6$ tickets: $9 \\times 6 = \\$54$. Distractor B ($\\$45$) uses $5$ tickets; C ($\\$36$) uses $4$; D ($\\$15$) adds $9$ and $6$. The concept is applying a constant unit-rate model from a table.",
  },

  // ── formOrder 6 — word_problems — diff 2 (modeling, unit rate) ──────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 2,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 6,
    modeling: true,
    prompt:
      "A printer produces $24$ pages in $3$ minutes at a constant rate. How many pages does it produce in $8$ minutes?",
    choices: [
      { label: "A", text: "$64$" },
      { label: "B", text: "$56$" },
      { label: "C", text: "$29$" },
      { label: "D", text: "$192$" },
    ],
    correctAnswer: "A",
    explanation:
      "The rate is $24 \\div 3 = 8$ pages per minute. In $8$ minutes: $8 \\times 8 = 64$ pages. Distractor B ($56$) uses $7$ minutes; C ($29$) adds $24 + (8-3)$; D ($192$) multiplies $24 \\times 8$ without finding the per-minute rate. The concept is a constant-rate (unit-rate) real-world model.",
  },

  // ── formOrder 7 — function_basics — diff 2 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 2,
    estimatedTimeSec: 50,
    diagnosticForm: 1,
    formOrder: 7,
    prompt: "If $f(x) = 2x - 3$, what is $f(5)$?",
    choices: [
      { label: "A", text: "$7$" },
      { label: "B", text: "$13$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$10$" },
    ],
    correctAnswer: "A",
    explanation:
      "Substitute $x = 5$: $f(5) = 2(5) - 3 = 10 - 3 = 7$. Distractor B ($13$) computes $2(5)+3$, adding instead of subtracting; C ($4$) computes $2(5-3)=4$, subtracting before multiplying; D ($10$) forgets the $-3$. The concept is function evaluation by substitution.",
  },

  // ── formOrder 8 — word_problems — diff 2 (modeling) ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 2,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 8,
    modeling: true,
    prompt:
      "A shirt originally priced at $\\$40$ is on sale for $25\\%$ off. What is the sale price?",
    choices: [
      { label: "A", text: "$\\$15$" },
      { label: "B", text: "$\\$35$" },
      { label: "C", text: "$\\$30$" },
      { label: "D", text: "$\\$10$" },
    ],
    correctAnswer: "C",
    explanation:
      "A $25\\%$ discount removes $0.25 \\times 40 = \\$10$, leaving $40 - 10 = \\$30$. Equivalently, pay $75\\%$: $0.75 \\times 40 = 30$. Distractor D ($\\$10$) reports the discount amount, not the price; A ($\\$15$) subtracts $25$ dollars instead of $25\\%$; B ($\\$35$) takes off only $\\$5$. The concept is percent decrease.",
  },

  // ── formOrder 9 — word_problems — diff 2 (unit conversion) ──────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 2,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 9,
    prompt:
      "There are $3$ feet in a yard and $12$ inches in a foot. How many inches are in $2$ yards?",
    choices: [
      { label: "A", text: "$72$" },
      { label: "B", text: "$24$" },
      { label: "C", text: "$36$" },
      { label: "D", text: "$27$" },
    ],
    correctAnswer: "A",
    explanation:
      "Convert step by step: $2$ yards $= 2 \\times 3 = 6$ feet, and $6$ feet $= 6 \\times 12 = 72$ inches. Distractor B ($24$) multiplies $2 \\times 12$, skipping the feet step; C ($36$) is inches in $1$ yard; D ($27$) adds $3 + 12 + 12$. The concept is multi-step unit conversion.",
  },

  // ── formOrder 10 — coordinate_geometry — diff 2 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 2,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 10,
    prompt:
      "What is the midpoint of the segment joining $(2, 3)$ and $(8, 7)$?",
    choices: [
      { label: "A", text: "$(5, 5)$" },
      { label: "B", text: "$(6, 4)$" },
      { label: "C", text: "$(10, 10)$" },
      { label: "D", text: "$(4, 5)$" },
    ],
    correctAnswer: "A",
    explanation:
      "The midpoint is the average of the coordinates: $\\left(\\frac{2+8}{2}, \\frac{3+7}{2}\\right) = (5, 5)$. Distractor B ($(6,4)$) subtracts instead of adds; C ($(10,10)$) forgets to divide by $2$; D ($(4,5)$) divides only one coordinate. The concept is the midpoint formula.",
  },

  // ── formOrder 11 — probability — diff 3 ─────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 11,
    prompt:
      "A bag contains 4 red, 5 blue, and 3 green marbles. If one marble is drawn at random, what is the probability that it is blue?",
    choices: [
      { label: "A", text: "$\\frac{5}{12}$" },
      { label: "B", text: "$\\frac{5}{7}$" },
      { label: "C", text: "$\\frac{1}{5}$" },
      { label: "D", text: "$\\frac{5}{9}$" },
    ],
    correctAnswer: "A",
    explanation:
      "There are $4 + 5 + 3 = 12$ marbles total and $5$ are blue, so $P(\\text{blue}) = \\frac{5}{12}$. Distractor B ($\\frac{5}{7}$) uses only the non-blue count in the denominator ($4+3=7$); D ($\\frac{5}{9}$) omits the green marbles; C ($\\frac{1}{5}$) inverts the blue count. The concept is single-event probability as favorable over total outcomes.",
  },

  // ── formOrder 12 — sequences — diff 3 ───────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 3,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 12,
    prompt:
      "The first term of an arithmetic sequence is $7$ and the common difference is $4$. What is the $10\\text{th}$ term?",
    choices: [
      { label: "A", text: "$43$" },
      { label: "B", text: "$47$" },
      { label: "C", text: "$40$" },
      { label: "D", text: "$44$" },
    ],
    correctAnswer: "A",
    explanation:
      "The $n$th term is $a_n = a_1 + (n-1)d = 7 + (10-1)(4) = 7 + 36 = 43$. Distractor B ($47$) uses $n$ instead of $n-1$: $7 + 10 \\cdot 4$; C ($40$) computes $(10-1)\\cdot 4 = 36$ then adds only $4$; D ($44$) is an off-by-one arithmetic slip. The concept is the explicit formula for an arithmetic sequence.",
  },

  // ── formOrder 13 — inequalities — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 3,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 13,
    prompt: "Solve for $x$: $-3x + 5 < 14$.",
    choices: [
      { label: "A", text: "$x > -3$" },
      { label: "B", text: "$x < -3$" },
      { label: "C", text: "$x > 3$" },
      { label: "D", text: "$x < 3$" },
    ],
    correctAnswer: "A",
    explanation:
      "Subtract $5$: $-3x < 9$. Divide by $-3$ and flip the inequality: $x > -3$. Distractor B keeps the sign the same when dividing by a negative (the classic error); C and D drop the negative sign on the $3$. The concept is that dividing an inequality by a negative number reverses its direction.",
  },

  // ── formOrder 14 — plane_geometry — diff 3 (figure) ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 14,
    prompt:
      "A circle has a radius of $6$ cm. What is its area? (Use $\\pi \\approx 3.14$.)",
    choices: [
      { label: "A", text: "$113.04 \\text{ cm}^2$" },
      { label: "B", text: "$37.68 \\text{ cm}^2$" },
      { label: "C", text: "$18.84 \\text{ cm}^2$" },
      { label: "D", text: "$452.16 \\text{ cm}^2$" },
    ],
    correctAnswer: "A",
    explanation:
      "Area $= \\pi r^2 = 3.14 \\times 6^2 = 3.14 \\times 36 = 113.04 \\text{ cm}^2$. Distractor B ($37.68$) computes circumference $2\\pi r$ instead of area; C ($18.84$) is $\\pi r$ with no squaring; D ($452.16$) squares the diameter ($12^2=144$) instead of the radius. The concept is the area of a circle, $A=\\pi r^2$.",
  },

  // ── formOrder 15 — word_problems — diff 3 (modeling, percent) ───────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 15,
    modeling: true,
    prompt:
      "A restaurant bill is $\\$60$ before tax and tip. A $6\\%$ tax is added, and then an $18\\%$ tip is calculated on the pre-tax amount. What is the total amount paid?",
    choices: [
      { label: "A", text: "$\\$74.40$" },
      { label: "B", text: "$\\$70.80$" },
      { label: "C", text: "$\\$74.42$" },
      { label: "D", text: "$\\$60.24$" },
    ],
    correctAnswer: "A",
    explanation:
      "Tax is $0.06 \\times 60 = \\$3.60$; tip is $0.18 \\times 60 = \\$10.80$. Total $= 60 + 3.60 + 10.80 = \\$74.40$. Distractor B ($\\$70.80$) forgets the tax; C ($\\$74.42$) computes the tip on the after-tax amount $\\$63.60$; D ($\\$60.24$) applies the tax as a flat $\\$0.24$. The concept is combining multiple percent adjustments on a base amount.",
  },

  // ── formOrder 16 — quadratics — diff 3 ──────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 16,
    prompt: "What are the solutions to $x^2 - 5x + 6 = 0$?",
    choices: [
      { label: "A", text: "$x = 2$ and $x = 3$" },
      { label: "B", text: "$x = -2$ and $x = -3$" },
      { label: "C", text: "$x = 1$ and $x = 6$" },
      { label: "D", text: "$x = -1$ and $x = -6$" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor: $x^2 - 5x + 6 = (x-2)(x-3) = 0$, so $x = 2$ or $x = 3$ (they multiply to $+6$ and add to $-5$). Distractor B flips both signs, mishandling the negative middle term; C and D use $1$ and $6$, which multiply to $6$ but sum to $7$, not $5$. The concept is factoring a quadratic into two binomials.",
  },

  // ── formOrder 17 — right_triangle_trig — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 17,
    prompt:
      "A right triangle has legs of length $6$ and $8$. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "$10$" },
      { label: "B", text: "$14$" },
      { label: "C", text: "$\\sqrt{28}$" },
      { label: "D", text: "$48$" },
    ],
    correctAnswer: "A",
    explanation:
      "By the Pythagorean theorem, $c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Distractor B ($14$) just adds the legs; C ($\\sqrt{28}$) subtracts the squares ($64-36$); D ($48$) multiplies the legs. The concept is the Pythagorean theorem for right triangles.",
  },

  // ── formOrder 18 — data_statistics — diff 3 (bar chart) ─────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 18,
    figures: [
      {
        kind: "chart",
        id: "f1",
        label: "Figure 1",
        caption: "Books read per month by one student",
        chartType: "bar",
        xAxis: { label: "Month", dataKey: "month", type: "category" },
        yAxis: { label: "Books read" },
        series: [
          {
            name: "Books",
            dataKey: "books",
            data: [
              { month: "Jan", books: 3 },
              { month: "Feb", books: 5 },
              { month: "Mar", books: 2 },
              { month: "Apr", books: 6 },
            ],
          },
        ],
      },
    ],
    prompt:
      "Figure 1 shows the number of books a student read each month from January through April. What was the total number of books read over these four months?",
    choices: [
      { label: "A", text: "$16$" },
      { label: "B", text: "$14$" },
      { label: "C", text: "$4$" },
      { label: "D", text: "$11$" },
    ],
    correctAnswer: "A",
    explanation:
      "Read each bar and add: $3 + 5 + 2 + 6 = 16$ books. Distractor B ($14$) drops the March value of $2$; C ($4$) reports the number of months; D ($11$) mis-adds. The concept is reading and summing values from a bar chart.",
  },

  // ── formOrder 19 — linear_equations — diff 3 (system) ───────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 3,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 19,
    prompt:
      "Solve the system: $x + y = 10$ and $x - y = 4$. What is the value of $x$?",
    choices: [
      { label: "A", text: "$7$" },
      { label: "B", text: "$3$" },
      { label: "C", text: "$6$" },
      { label: "D", text: "$5$" },
    ],
    correctAnswer: "A",
    explanation:
      "Add the two equations to eliminate $y$: $(x+y)+(x-y) = 10+4$, so $2x = 14$ and $x = 7$. Distractor B ($3$) is the value of $y$, not $x$; C ($6$) subtracts the equations by mistake; D ($5$) halves the first equation's total. The concept is solving a linear system by elimination.",
  },

  // ── formOrder 20 — trigonometry — diff 3 ────────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 20,
    prompt:
      "In a right triangle, the side opposite angle $\\theta$ has length $3$ and the hypotenuse has length $5$. What is $\\sin\\theta$?",
    choices: [
      { label: "A", text: "$\\frac{3}{5}$" },
      { label: "B", text: "$\\frac{4}{5}$" },
      { label: "C", text: "$\\frac{3}{4}$" },
      { label: "D", text: "$\\frac{5}{3}$" },
    ],
    correctAnswer: "A",
    explanation:
      "By SOHCAHTOA, $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}} = \\frac{3}{5}$. Distractor B ($\\frac{4}{5}$) is $\\cos\\theta$ (adjacent leg is $\\sqrt{5^2-3^2}=4$); C ($\\frac{3}{4}$) is $\\tan\\theta$; D ($\\frac{5}{3}$) inverts the ratio. The concept is the sine ratio in a right triangle.",
  },

  // ── formOrder 21 — word_problems — diff 3 (modeling, table) ─────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 21,
    modeling: true,
    figures: [
      {
        kind: "table",
        id: "t2",
        label: "Table 2",
        caption: "Distance traveled at a constant speed",
        columns: [
          { key: "hours", header: "Hours", align: "right" },
          { key: "miles", header: "Miles", align: "right" },
        ],
        rows: [
          { hours: 1, miles: 55 },
          { hours: 2, miles: 110 },
          { hours: 3, miles: 165 },
        ],
      },
    ],
    prompt:
      "A car travels at a constant speed, as shown in Table 2. At this rate, how far will the car travel in $5$ hours?",
    choices: [
      { label: "A", text: "$275$ miles" },
      { label: "B", text: "$220$ miles" },
      { label: "C", text: "$330$ miles" },
      { label: "D", text: "$260$ miles" },
    ],
    correctAnswer: "A",
    explanation:
      "The table shows a constant rate of $55$ miles per hour ($55, 110, 165$ increase by $55$). At $5$ hours: $55 \\times 5 = 275$ miles. Distractor B ($220$) uses $4$ hours; C ($330$) uses $6$ hours; D ($260$) adds $55$ to the $3$-hour value only once. The concept is extending a constant-rate (proportional) model.",
  },

  // ── formOrder 22 — function_graphs — diff 3 (line chart) ────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 22,
    figures: [
      {
        kind: "chart",
        id: "f2",
        label: "Figure 2",
        caption: "A line in the coordinate plane",
        chartType: "line",
        xAxis: { label: "x", dataKey: "x", type: "number", domain: [0, 5] },
        yAxis: { label: "y", domain: [0, 12] },
        series: [
          {
            name: "y",
            dataKey: "y",
            data: [
              { x: 0, y: 1 },
              { x: 1, y: 3 },
              { x: 2, y: 5 },
              { x: 3, y: 7 },
              { x: 4, y: 9 },
            ],
          },
        ],
      },
    ],
    prompt:
      "Figure 2 shows a line passing through the plotted points. What is the slope of the line?",
    choices: [
      { label: "A", text: "$2$" },
      { label: "B", text: "$\\frac{1}{2}$" },
      { label: "C", text: "$1$" },
      { label: "D", text: "$3$" },
    ],
    correctAnswer: "A",
    explanation:
      "Slope is rise over run. From $(0,1)$ to $(1,3)$ the $y$-value rises $2$ while $x$ increases $1$, so slope $= \\frac{3-1}{1-0} = 2$. Distractor B ($\\frac{1}{2}$) inverts run over rise; C ($1$) misreads the rise as $1$; D ($3$) reads the $y$-intercept of the second point. The concept is slope from two points on a graph.",
  },

  // ── formOrder 23 — solid_geometry — diff 3 ──────────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "solid_geometry",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 23,
    prompt:
      "A rectangular box has dimensions $4$ cm by $3$ cm by $5$ cm. What is its volume?",
    choices: [
      { label: "A", text: "$60 \\text{ cm}^3$" },
      { label: "B", text: "$12 \\text{ cm}^3$" },
      { label: "C", text: "$94 \\text{ cm}^3$" },
      { label: "D", text: "$47 \\text{ cm}^3$" },
    ],
    correctAnswer: "A",
    explanation:
      "Volume of a rectangular box is length $\\times$ width $\\times$ height: $4 \\times 3 \\times 5 = 60 \\text{ cm}^3$. Distractor B ($12$) multiplies only two dimensions; C ($94$) is the surface area $2(lw+lh+wh)$; D ($47$) mis-computes half the surface area. The concept is volume of a rectangular prism.",
  },

  // ── formOrder 24 — exponents_radicals — diff 3 ──────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "exponents_radicals",
    difficulty: 3,
    estimatedTimeSec: 55,
    diagnosticForm: 1,
    formOrder: 24,
    prompt: "Simplify $\\frac{x^7}{x^3}$.",
    choices: [
      { label: "A", text: "$x^4$" },
      { label: "B", text: "$x^{10}$" },
      { label: "C", text: "$x^{21}$" },
      { label: "D", text: "$x^{2.33}$" },
    ],
    correctAnswer: "A",
    explanation:
      "When dividing powers with the same base, subtract exponents: $\\frac{x^7}{x^3} = x^{7-3} = x^4$. Distractor B ($x^{10}$) adds the exponents; C ($x^{21}$) multiplies them; D divides them. The concept is the quotient rule for exponents.",
  },

  // ── formOrder 25 — probability — diff 3 (Venn/two-way) ──────────────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 25,
    figures: [
      {
        kind: "table",
        id: "t3",
        label: "Table 3",
        caption: "Students by grade and whether they play a sport",
        columns: [
          { key: "grade", header: "Grade", align: "left" },
          { key: "sport", header: "Plays sport", align: "right" },
          { key: "nosport", header: "No sport", align: "right" },
        ],
        rows: [
          { grade: "9th", sport: 12, nosport: 8 },
          { grade: "10th", sport: 15, nosport: 5 },
        ],
      },
    ],
    prompt:
      "Table 3 shows 40 students. If one student is chosen at random, what is the probability that the student plays a sport?",
    choices: [
      { label: "A", text: "$\\frac{27}{40}$" },
      { label: "B", text: "$\\frac{13}{40}$" },
      { label: "C", text: "$\\frac{27}{13}$" },
      { label: "D", text: "$\\frac{12}{40}$" },
    ],
    correctAnswer: "A",
    explanation:
      "Students who play a sport: $12 + 15 = 27$. Total: $12+8+15+5 = 40$. So $P = \\frac{27}{40}$. Distractor B ($\\frac{13}{40}$) uses the 'no sport' total $8+5=13$; C inverts using non-favorable count; D counts only 9th graders who play. The concept is probability from a two-way frequency table.",
  },

  // ── formOrder 26 — coordinate_geometry — diff 3 ─────────────────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 26,
    prompt:
      "What is the distance between the points $(1, 2)$ and $(4, 6)$?",
    choices: [
      { label: "A", text: "$5$" },
      { label: "B", text: "$7$" },
      { label: "C", text: "$\\sqrt{7}$" },
      { label: "D", text: "$25$" },
    ],
    correctAnswer: "A",
    explanation:
      "Use the distance formula: $\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$. Distractor B ($7$) adds the differences $3+4$; C ($\\sqrt{7}$) adds inside the root without squaring; D ($25$) forgets the square root. The concept is the distance formula (Pythagorean theorem in the plane).",
  },

  // ── formOrder 27 — expressions_polynomials — diff 3 ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "expressions_polynomials",
    difficulty: 3,
    estimatedTimeSec: 65,
    diagnosticForm: 1,
    formOrder: 27,
    prompt: "Expand $(x + 3)(x - 5)$.",
    choices: [
      { label: "A", text: "$x^2 - 2x - 15$" },
      { label: "B", text: "$x^2 + 2x - 15$" },
      { label: "C", text: "$x^2 - 2x + 15$" },
      { label: "D", text: "$x^2 - 15$" },
    ],
    correctAnswer: "A",
    explanation:
      "Use FOIL: $x \\cdot x = x^2$, $x \\cdot(-5) = -5x$, $3 \\cdot x = 3x$, $3 \\cdot(-5) = -15$. Combine the middle terms: $-5x + 3x = -2x$, giving $x^2 - 2x - 15$. Distractor B has the middle sign wrong; C makes the constant $+15$; D drops the middle term entirely. The concept is multiplying two binomials.",
  },

  // ── formOrder 28 — function_basics — diff 3 (composite) ─────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_basics",
    difficulty: 3,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 28,
    prompt:
      "If $f(x) = x + 2$ and $g(x) = 3x$, what is $f(g(4))$?",
    choices: [
      { label: "A", text: "$14$" },
      { label: "B", text: "$18$" },
      { label: "C", text: "$12$" },
      { label: "D", text: "$20$" },
    ],
    correctAnswer: "A",
    explanation:
      "Work from the inside out. First $g(4) = 3(4) = 12$. Then $f(12) = 12 + 2 = 14$. Distractor B ($18$) computes $g(f(4)) = 3(6)$, reversing the order; C ($12$) stops at $g(4)$; D ($20$) applies $g$ twice. The concept is composite functions, evaluated inner function first.",
  },

  // ── formOrder 29 — word_problems — diff 3 (modeling) ────────────────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 3,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 29,
    modeling: true,
    prompt:
      "A recipe that serves $4$ people requires $6$ cups of flour. How many cups of flour are needed to serve $10$ people, keeping the same ratio?",
    choices: [
      { label: "A", text: "$15$ cups" },
      { label: "B", text: "$12$ cups" },
      { label: "C", text: "$24$ cups" },
      { label: "D", text: "$16$ cups" },
    ],
    correctAnswer: "A",
    explanation:
      "Set up a proportion: $\\frac{6}{4} = \\frac{x}{10}$. Cross-multiply: $4x = 60$, so $x = 15$ cups. Distractor B ($12$) doubles the original recipe (serves 8, not 10); C ($24$) scales by $4$; D ($16$) adds $10$ to $6$. The concept is proportional reasoning with a real-world ratio model.",
  },

  // ── formOrder 30 — numbers_advanced — diff 3 (absolute value) ───────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 3,
    estimatedTimeSec: 60,
    diagnosticForm: 1,
    formOrder: 30,
    prompt: "What is the value of $|{-8}| - |3 - 7|$?",
    choices: [
      { label: "A", text: "$4$" },
      { label: "B", text: "$12$" },
      { label: "C", text: "$-4$" },
      { label: "D", text: "$-12$" },
    ],
    correctAnswer: "A",
    explanation:
      "Evaluate each absolute value: $|{-8}| = 8$ and $|3-7| = |{-4}| = 4$. Then $8 - 4 = 4$. Distractor B ($12$) adds the two absolute values; C ($-4$) keeps $-8$ negative; D ($-12$) both keeps $-8$ negative and adds. The concept is that absolute value returns the non-negative magnitude.",
  },

  // ── formOrder 31 — inequalities — diff 4 (compound) ─────────────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "inequalities",
    difficulty: 4,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 31,
    prompt: "Which values of $x$ satisfy $-2 \\le 3x + 1 < 10$?",
    choices: [
      { label: "A", text: "$-1 \\le x < 3$" },
      { label: "B", text: "$-1 < x \\le 3$" },
      { label: "C", text: "$-3 \\le x < 9$" },
      { label: "D", text: "$-1 \\le x < 11$" },
    ],
    correctAnswer: "A",
    explanation:
      "Subtract $1$ from all three parts: $-3 \\le 3x < 9$. Divide by $3$: $-1 \\le x < 3$. The boundary types carry through unchanged since $3$ is positive. Distractor B swaps the inclusive/exclusive endpoints; C forgets to divide by $3$; D subtracts $1$ from only the left side. The concept is solving a compound inequality by operating on all three parts.",
  },

  // ── formOrder 32 — right_triangle_trig — diff 4 (special triangle) ──────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "right_triangle_trig",
    difficulty: 4,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 32,
    prompt:
      "In a $30^\\circ$–$60^\\circ$–$90^\\circ$ right triangle, the side opposite the $30^\\circ$ angle has length $7$. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "$14$" },
      { label: "B", text: "$7\\sqrt{3}$" },
      { label: "C", text: "$3.5$" },
      { label: "D", text: "$\\frac{7\\sqrt{3}}{3}$" },
    ],
    correctAnswer: "A",
    explanation:
      "In a $30$–$60$–$90$ triangle the sides are in ratio $1 : \\sqrt{3} : 2$, where the side opposite $30^\\circ$ is the shortest. The hypotenuse is twice that side: $2 \\times 7 = 14$. Distractor B ($7\\sqrt3$) gives the side opposite $60^\\circ$; C ($3.5$) halves instead of doubling; D rationalizes an incorrect ratio. The concept is the fixed side ratios of a $30$–$60$–$90$ triangle.",
  },

  // ── formOrder 33 — quadratics — diff 4 (quadratic formula) ──────────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 4,
    estimatedTimeSec: 80,
    diagnosticForm: 1,
    formOrder: 33,
    prompt: "What are the solutions to $2x^2 - 3x - 2 = 0$?",
    choices: [
      { label: "A", text: "$x = 2$ and $x = -\\frac{1}{2}$" },
      { label: "B", text: "$x = -2$ and $x = \\frac{1}{2}$" },
      { label: "C", text: "$x = 1$ and $x = -2$" },
      { label: "D", text: "$x = 2$ and $x = \\frac{1}{2}$" },
    ],
    correctAnswer: "A",
    explanation:
      "Factor as $(2x + 1)(x - 2) = 0$. Setting each factor to zero: $2x+1=0 \\Rightarrow x = -\\frac{1}{2}$, and $x - 2 = 0 \\Rightarrow x = 2$. (Check with the quadratic formula: $x = \\frac{3 \\pm \\sqrt{9+16}}{4} = \\frac{3 \\pm 5}{4}$, giving $2$ and $-\\frac12$.) Distractor B flips both signs; C ignores the leading coefficient; D gets the sign of the fraction wrong. The concept is solving a quadratic with a leading coefficient other than $1$.",
  },

  // ── formOrder 34 — function_graphs — diff 4 (transformation) ────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "function_graphs",
    difficulty: 4,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 34,
    prompt:
      "The graph of $y = x^2$ is shifted $3$ units right and $2$ units down. Which equation represents the new graph?",
    choices: [
      { label: "A", text: "$y = (x - 3)^2 - 2$" },
      { label: "B", text: "$y = (x + 3)^2 - 2$" },
      { label: "C", text: "$y = (x - 3)^2 + 2$" },
      { label: "D", text: "$y = (x - 2)^2 - 3$" },
    ],
    correctAnswer: "A",
    explanation:
      "A shift $3$ units right replaces $x$ with $(x-3)$; a shift $2$ units down subtracts $2$ from the whole function: $y = (x-3)^2 - 2$. Distractor B shifts left (the inside sign is a common trap); C shifts up instead of down; D swaps the two shift amounts. The concept is horizontal and vertical translations of a parabola, where inside changes act oppositely to their sign.",
  },

  // ── formOrder 35 — data_statistics — diff 4 (weighted avg, scatter) ─────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "data_statistics",
    difficulty: 4,
    estimatedTimeSec: 75,
    diagnosticForm: 1,
    formOrder: 35,
    modeling: true,
    figures: [
      {
        kind: "chart",
        id: "f3",
        label: "Figure 3",
        caption: "Hours studied vs. test score for 6 students",
        chartType: "scatter",
        xAxis: { label: "Hours studied", dataKey: "hours", type: "number", domain: [0, 6] },
        yAxis: { label: "Test score", domain: [50, 100] },
        series: [
          {
            name: "Students",
            dataKey: "score",
            data: [
              { hours: 1, score: 60 },
              { hours: 2, score: 68 },
              { hours: 3, score: 74 },
              { hours: 4, score: 82 },
              { hours: 5, score: 88 },
              { hours: 2, score: 72 },
            ],
          },
        ],
      },
    ],
    prompt:
      "Figure 3 plots hours studied against test score. The relationship is best described as which of the following?",
    choices: [
      { label: "A", text: "A positive linear correlation" },
      { label: "B", text: "A negative linear correlation" },
      { label: "C", text: "No correlation" },
      { label: "D", text: "A perfectly horizontal relationship" },
    ],
    correctAnswer: "A",
    explanation:
      "As hours studied increase, test scores increase together and the points cluster near a rising line, indicating a positive linear correlation. Distractor B describes a downward trend, which is the opposite of what the data show; C ignores the clear upward pattern; D would mean scores never change with study time. The concept is interpreting the direction and form of a scatterplot's correlation.",
  },

  // ── formOrder 36 — sequences — diff 4 (geometric) ───────────────────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "sequences",
    difficulty: 4,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 36,
    prompt:
      "A geometric sequence begins $3, 6, 12, 24, \\ldots$. What is the $7\\text{th}$ term?",
    choices: [
      { label: "A", text: "$192$" },
      { label: "B", text: "$96$" },
      { label: "C", text: "$384$" },
      { label: "D", text: "$21$" },
    ],
    correctAnswer: "A",
    explanation:
      "The common ratio is $2$. The $n$th term is $a_n = a_1 \\cdot r^{n-1} = 3 \\cdot 2^{7-1} = 3 \\cdot 64 = 192$. Distractor B ($96$) is the $6\\text{th}$ term ($3 \\cdot 2^5$), an off-by-one on the exponent; C ($384$) is the $8\\text{th}$ term; D ($21$) treats it as arithmetic, adding a common difference. The concept is the explicit formula for a geometric sequence.",
  },

  // ── formOrder 37 — word_problems — diff 4 (modeling, mixture) ───────────────
  {
    subject: "MATH",
    reportingCategory: "integrating_essential_skills",
    subSkill: "word_problems",
    difficulty: 4,
    estimatedTimeSec: 80,
    diagnosticForm: 1,
    formOrder: 37,
    modeling: true,
    prompt:
      "A tank contains $30$ liters of a solution that is $20\\%$ salt. How many liters of pure water must be added to dilute it to a $12\\%$ salt solution?",
    choices: [
      { label: "A", text: "$20$ liters" },
      { label: "B", text: "$50$ liters" },
      { label: "C", text: "$8$ liters" },
      { label: "D", text: "$18$ liters" },
    ],
    correctAnswer: "A",
    explanation:
      "The amount of salt stays fixed: $0.20 \\times 30 = 6$ liters of salt. After adding $w$ liters of water the volume is $30 + w$, and we need $\\frac{6}{30+w} = 0.12$. Solve: $6 = 0.12(30+w)$, so $30 + w = 50$ and $w = 20$ liters. Distractor B ($50$) is the final total volume, not the water added; C ($8$) subtracts the percents ($20-12$); D ($18$) uses $6 = 0.12 \\cdot 30 + \\ldots$ incorrectly. The concept is a mixture model where the solute quantity is conserved.",
  },

  // ── formOrder 38 — coordinate_geometry — diff 4 (line equation) ─────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "coordinate_geometry",
    difficulty: 4,
    estimatedTimeSec: 75,
    diagnosticForm: 1,
    formOrder: 38,
    prompt:
      "What is the equation of the line passing through $(2, 1)$ and $(4, 7)$?",
    choices: [
      { label: "A", text: "$y = 3x - 5$" },
      { label: "B", text: "$y = 3x + 5$" },
      { label: "C", text: "$y = \\frac{1}{3}x + \\frac{1}{3}$" },
      { label: "D", text: "$y = 2x - 3$" },
    ],
    correctAnswer: "A",
    explanation:
      "Slope $= \\frac{7-1}{4-2} = \\frac{6}{2} = 3$. Using point $(2,1)$: $1 = 3(2) + b$, so $b = 1 - 6 = -5$, giving $y = 3x - 5$. Distractor B has the wrong sign on the intercept; C inverts the slope; D uses slope $2$. The concept is finding a line's slope-intercept equation from two points.",
  },

  // ── formOrder 39 — trigonometry — diff 4 (radians/unit circle) ──────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 4,
    estimatedTimeSec: 70,
    diagnosticForm: 1,
    formOrder: 39,
    prompt: "What is the value of $\\cos(60^\\circ)$?",
    choices: [
      { label: "A", text: "$\\frac{1}{2}$" },
      { label: "B", text: "$\\frac{\\sqrt{3}}{2}$" },
      { label: "C", text: "$\\frac{\\sqrt{2}}{2}$" },
      { label: "D", text: "$1$" },
    ],
    correctAnswer: "A",
    explanation:
      "On the unit circle, $\\cos(60^\\circ) = \\frac{1}{2}$ (the $x$-coordinate at $60^\\circ$). Distractor B ($\\frac{\\sqrt3}{2}$) is $\\sin(60^\\circ)$ or $\\cos(30^\\circ)$; C ($\\frac{\\sqrt2}{2}$) is $\\cos(45^\\circ)$; D ($1$) is $\\cos(0^\\circ)$. The concept is the exact cosine values of special angles.",
  },

  // ── formOrder 40 — numbers_advanced — diff 4 (complex numbers) ──────────────
  {
    subject: "MATH",
    reportingCategory: "number_and_quantity",
    subSkill: "numbers_advanced",
    difficulty: 4,
    estimatedTimeSec: 75,
    diagnosticForm: 1,
    formOrder: 40,
    prompt: "If $i = \\sqrt{-1}$, what is $(3 + 2i)(1 - 4i)$?",
    choices: [
      { label: "A", text: "$11 - 10i$" },
      { label: "B", text: "$3 - 8i$" },
      { label: "C", text: "$-5 - 10i$" },
      { label: "D", text: "$11 + 14i$" },
    ],
    correctAnswer: "A",
    explanation:
      "FOIL: $(3)(1) + (3)(-4i) + (2i)(1) + (2i)(-4i) = 3 - 12i + 2i - 8i^2$. Since $i^2 = -1$, $-8i^2 = +8$. Combine: real part $3 + 8 = 11$, imaginary part $-12i + 2i = -10i$, giving $11 - 10i$. Distractor B multiplies only the first and last terms; C forgets $i^2 = -1$ (leaving $3 - 8 = -5$); D gets the imaginary-term sign wrong. The concept is multiplying complex numbers using $i^2 = -1$.",
  },

  // ── formOrder 41 — plane_geometry — diff 4 (composite area) ─────────────────
  {
    subject: "MATH",
    reportingCategory: "geometry",
    subSkill: "plane_geometry",
    difficulty: 4,
    estimatedTimeSec: 80,
    diagnosticForm: 1,
    formOrder: 41,
    prompt:
      "A square with side length $10$ has a circle of radius $3$ cut out of its center. What is the area of the remaining region? (Use $\\pi \\approx 3.14$.)",
    choices: [
      { label: "A", text: "$71.74$" },
      { label: "B", text: "$81.58$" },
      { label: "C", text: "$100$" },
      { label: "D", text: "$40.48$" },
    ],
    correctAnswer: "A",
    explanation:
      "Square area $= 10^2 = 100$. Circle area $= \\pi r^2 = 3.14 \\times 9 = 28.26$. Remaining $= 100 - 28.26 = 71.74$. Distractor B ($81.58$) subtracts the circumference-like value $\\pi r \\cdot 2 = 18.84$... a mis-subtraction; C ($100$) forgets to remove the circle; D subtracts using diameter squared. The concept is composite-region area: subtract the removed shape from the whole.",
  },

  // ── formOrder 42 — linear_equations — diff 4 (modeling, system) ─────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "linear_equations",
    difficulty: 4,
    estimatedTimeSec: 85,
    diagnosticForm: 1,
    formOrder: 42,
    modeling: true,
    prompt:
      "At a concession stand, $2$ hot dogs and $3$ drinks cost $\\$13$, while $1$ hot dog and $2$ drinks cost $\\$8$. What is the price of one hot dog?",
    choices: [
      { label: "A", text: "$\\$2$" },
      { label: "B", text: "$\\$3$" },
      { label: "C", text: "$\\$4$" },
      { label: "D", text: "$\\$5$" },
    ],
    correctAnswer: "A",
    explanation:
      "Let $h$ be a hot dog and $d$ a drink: $2h + 3d = 13$ and $h + 2d = 8$. Multiply the second by $2$: $2h + 4d = 16$. Subtract the first: $d = 3$. Then $h + 2(3) = 8$, so $h = 2$. Distractor B ($\\$3$) is the drink price; C and D come from arithmetic slips in the elimination. The concept is modeling a real-world situation as a linear system and solving it.",
  },

  // ── formOrder 43 — probability — diff 5 (compound / counting) ───────────────
  {
    subject: "MATH",
    reportingCategory: "statistics_and_probability",
    subSkill: "probability",
    difficulty: 5,
    estimatedTimeSec: 85,
    diagnosticForm: 1,
    formOrder: 43,
    prompt:
      "A bag has $3$ red and $5$ blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are red?",
    choices: [
      { label: "A", text: "$\\frac{3}{28}$" },
      { label: "B", text: "$\\frac{9}{64}$" },
      { label: "C", text: "$\\frac{6}{56}$" },
      { label: "D", text: "$\\frac{1}{4}$" },
    ],
    correctAnswer: "A",
    explanation:
      "Without replacement, $P(\\text{1st red}) = \\frac{3}{8}$ and then $P(\\text{2nd red}) = \\frac{2}{7}$. Multiply: $\\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$. Distractor C ($\\frac{6}{56}$) is the same value unsimplified but listed to catch students who stop early — the fully reduced form $\\frac{3}{28}$ is the intended key; B ($\\frac{9}{64}$) treats the draws as with replacement ($\\frac38 \\cdot \\frac38$); D is a guess. The concept is dependent-event probability, multiplying with an updated denominator.",
  },

  // ── formOrder 44 — quadratics — diff 5 (modeling, projectile) ───────────────
  {
    subject: "MATH",
    reportingCategory: "algebra",
    subSkill: "quadratics",
    difficulty: 5,
    estimatedTimeSec: 90,
    diagnosticForm: 1,
    formOrder: 44,
    modeling: true,
    prompt:
      "A ball's height in feet after $t$ seconds is $h(t) = -16t^2 + 32t + 5$. At what time $t$ does the ball reach its maximum height?",
    choices: [
      { label: "A", text: "$t = 1$ second" },
      { label: "B", text: "$t = 2$ seconds" },
      { label: "C", text: "$t = 0.5$ seconds" },
      { label: "D", text: "$t = 5$ seconds" },
    ],
    correctAnswer: "A",
    explanation:
      "The maximum of a parabola $h(t) = at^2 + bt + c$ occurs at the vertex $t = -\\frac{b}{2a}$. Here $a = -16$, $b = 32$: $t = -\\frac{32}{2(-16)} = -\\frac{32}{-32} = 1$ second. Distractor B ($2$) forgets the factor of $2$ in the denominator; C ($0.5$) inverts or mis-divides; D ($5$) reads the constant term. The concept is finding the vertex time of a quadratic (projectile) model.",
  },

  // ── formOrder 45 — trigonometry — diff 5 (law/identity, hardest) ────────────
  {
    subject: "MATH",
    reportingCategory: "functions",
    subSkill: "trigonometry",
    difficulty: 5,
    estimatedTimeSec: 90,
    diagnosticForm: 1,
    formOrder: 45,
    prompt:
      "If $\\sin\\theta = \\frac{3}{5}$ and $\\theta$ is an acute angle, what is $\\tan\\theta$?",
    choices: [
      { label: "A", text: "$\\frac{3}{4}$" },
      { label: "B", text: "$\\frac{4}{3}$" },
      { label: "C", text: "$\\frac{3}{5}$" },
      { label: "D", text: "$\\frac{4}{5}$" },
    ],
    correctAnswer: "A",
    explanation:
      "With $\\sin\\theta = \\frac{3}{5}$, the opposite side is $3$ and the hypotenuse is $5$, so the adjacent side is $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$. Then $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}} = \\frac{3}{4}$. Distractor B inverts to $\\frac{4}{3}$ (that is $\\cot\\theta$); C repeats $\\sin\\theta$; D gives $\\cos\\theta$. The concept is using the Pythagorean relationship to find the missing side, then applying the tangent ratio.",
  },
];
