// ===========================================================================
// lessons-math.ts — Math lessons seed data
// Subject: MATH | Lessons: 18 (one per sub-skill)
// All content is 100% original — no imitation of real ACT items or published
// prep materials. KaTeX notation used throughout ($...$ inline, $$...$$ display).
// ===========================================================================

import type { SeedLesson } from "./types";

export const mathLessons: SeedLesson[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. number_operations
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "number_operations",
    title: "Working with Numbers: Operations and Place Value",
    summary:
      "This lesson covers the fundamental operations — addition, subtraction, multiplication, and division — applied to whole numbers, decimals, and fractions, along with rounding, place value, and ordering numbers. These skills are the foundation for every calculation on the ACT.",
    body: String.raw`## What This Skill Is

Number operations are the building blocks of all ACT Math. You'll need to add, subtract, multiply, and divide whole numbers, fractions, and decimals accurately and efficiently. You also need to understand **place value** (the value of each digit's position), **rounding** (approximating a number to a specified place), and **ordering** (comparing numbers on a number line).

## Key Rules

1. **Place value.** In the number $3{,}742.56$, the digit $3$ is in the thousands place, $7$ in the hundreds, $4$ in the tens, $2$ in the ones, $5$ in the tenths, and $6$ in the hundredths. Understanding place value is essential for rounding and for lining up decimals.

2. **Rounding.** To round to a given place, look at the digit immediately to the right. If it is $5$ or greater, round up; if it is $4$ or less, round down. Example: $4.386$ rounded to the nearest hundredth is $4.39$ (because the $6$ in the thousandths place rounds the $8$ up to $9$).

3. **Fraction operations.**
   - Addition/subtraction: find a common denominator, then add/subtract numerators.
   - Multiplication: multiply numerators together and denominators together. Simplify by cancelling common factors before multiplying.
   - Division: multiply by the reciprocal of the divisor: $\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \times \dfrac{d}{c}$.

4. **Decimal operations.** For addition and subtraction, align decimal points. For multiplication, multiply as whole numbers, then count total decimal places. For division, shift the decimal to make the divisor a whole number, then divide normally.

5. **Order of operations (PEMDAS).** Parentheses → Exponents → Multiplication and Division (left to right) → Addition and Subtraction (left to right). Never skip steps.

## Common Traps

**Lining up decimals.** Forgetting to align decimal points during addition leads to errors. Always write numbers so their decimal points are vertically aligned.

**Fraction division.** Students often forget to flip the second fraction. $\frac{3}{4} \div \frac{1}{2}$ is $\frac{3}{4} \times \frac{2}{1} = \frac{6}{4} = \frac{3}{2}$, not $\frac{3}{8}$.

## Quick Tip

When a problem involves mixed numbers (like $2\frac{3}{4}$), convert to improper fractions first before operating: $2\frac{3}{4} = \frac{11}{4}$. This avoids sign errors and makes multiplication and division straightforward.`,
    examples: [
      {
        prompt:
          "A recipe calls for $2\\frac{1}{3}$ cups of flour and $\\frac{3}{4}$ cup of sugar. What is the total amount of dry ingredients, in cups?",
        steps: [
          "Convert the mixed number to an improper fraction: $2\\frac{1}{3} = \\frac{7}{3}$.",
          "Find a common denominator for $\\frac{7}{3}$ and $\\frac{3}{4}$. The LCM of $3$ and $4$ is $12$.",
          "Convert each fraction: $\\frac{7}{3} = \\frac{28}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$.",
          "Add: $\\frac{28}{12} + \\frac{9}{12} = \\frac{37}{12}$.",
          "Convert back to a mixed number: $\\frac{37}{12} = 3\\frac{1}{12}$.",
        ],
        answer:
          "The total amount of dry ingredients is $3\\frac{1}{12}$ cups.",
      },
      {
        prompt:
          "Evaluate the expression $18 \\div (2 + 4) \\times 3 - 5$ using the correct order of operations.",
        steps: [
          "Start with the parentheses: $2 + 4 = 6$. The expression becomes $18 \\div 6 \\times 3 - 5$.",
          "Perform division and multiplication left to right: $18 \\div 6 = 3$. Now: $3 \\times 3 - 5$.",
          "Continue multiplication: $3 \\times 3 = 9$. Now: $9 - 5$.",
          "Subtract: $9 - 5 = 4$.",
        ],
        answer: "The value of the expression is $4$.",
      },
    ],
    orderIndex: 1,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. exponents_radicals
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "exponents_radicals",
    title: "Exponents, Roots, and Scientific Notation",
    summary:
      "This lesson covers the laws of exponents, square and higher roots, rational exponents, and scientific notation. Mastering these rules lets you simplify expressions quickly and work with very large or very small numbers efficiently.",
    body: String.raw`## What This Skill Is

**Exponents** are shorthand for repeated multiplication: $a^n$ means multiply $a$ by itself $n$ times. **Roots** are the inverse: $\sqrt[n]{a}$ asks what number, raised to the $n$th power, gives $a$. **Scientific notation** expresses very large or very small numbers as a product of a number between 1 and 10 and a power of 10.

## Key Rules

1. **Laws of exponents:**
   - Product rule: $a^m \cdot a^n = a^{m+n}$
   - Quotient rule: $\dfrac{a^m}{a^n} = a^{m-n}$
   - Power rule: $(a^m)^n = a^{mn}$
   - Zero exponent: $a^0 = 1$ (for $a \neq 0$)
   - Negative exponent: $a^{-n} = \dfrac{1}{a^n}$

2. **Rational exponents.** $a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$. Example: $8^{2/3} = (\sqrt[3]{8})^2 = 2^2 = 4$.

3. **Simplifying radicals.** Factor out perfect squares (or cubes, etc.): $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$.

4. **Rationalizing the denominator.** Multiply numerator and denominator by the radical to clear it: $\dfrac{5}{\sqrt{3}} = \dfrac{5\sqrt{3}}{3}$.

5. **Scientific notation.** $6.02 \times 10^{23}$ — the coefficient is between 1 and 10. To multiply, multiply coefficients and add exponents. To divide, divide coefficients and subtract exponents.

## Common Traps

**Distributing an exponent incorrectly.** $(a + b)^2 \neq a^2 + b^2$. You must expand: $(a + b)^2 = a^2 + 2ab + b^2$.

**Negative bases vs. negative exponents.** $(-2)^3 = -8$ (negative base, odd power = negative result). $2^{-3} = \frac{1}{8}$ (negative exponent = reciprocal). These are completely different.

## Quick Tip

When an expression has multiple exponent rules to apply, work from the inside out. For scientific notation problems, handle the powers of 10 separately from the coefficients, then combine.`,
    examples: [
      {
        prompt:
          "Simplify: $\\dfrac{x^5 \\cdot x^{-2}}{x^3}$",
        steps: [
          "Apply the product rule in the numerator: $x^5 \\cdot x^{-2} = x^{5 + (-2)} = x^3$.",
          "Now apply the quotient rule: $\\dfrac{x^3}{x^3} = x^{3-3} = x^0$.",
          "Any nonzero base to the zero power equals $1$.",
        ],
        answer: "$\\dfrac{x^5 \\cdot x^{-2}}{x^3} = 1$ (for $x \\neq 0$).",
      },
      {
        prompt:
          "Simplify $\\sqrt{50} + \\sqrt{32}$.",
        steps: [
          "Simplify $\\sqrt{50}$: factor out the largest perfect square. $50 = 25 \\times 2$, so $\\sqrt{50} = 5\\sqrt{2}$.",
          "Simplify $\\sqrt{32}$: $32 = 16 \\times 2$, so $\\sqrt{32} = 4\\sqrt{2}$.",
          "Now add like radicals: $5\\sqrt{2} + 4\\sqrt{2} = 9\\sqrt{2}$.",
        ],
        answer: "$\\sqrt{50} + \\sqrt{32} = 9\\sqrt{2}$.",
      },
    ],
    orderIndex: 2,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. numbers_advanced
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "numbers_advanced",
    title: "Absolute Value, Complex Numbers, and Matrices",
    summary:
      "This lesson introduces absolute value (distance from zero on the number line), complex numbers (numbers involving $i = \\sqrt{-1}$), and matrices (rectangular arrays of numbers used to organize data and perform operations).",
    body: String.raw`## What This Skill Is

The ACT occasionally ventures beyond the real number line into more advanced number concepts. **Absolute value** measures distance without regard to direction. **Complex numbers** extend the real numbers to include $i = \sqrt{-1}$, allowing us to take square roots of negative numbers. **Matrices** are grids of numbers that follow their own rules for addition and multiplication.

## Key Rules

**Absolute value:**
- $|a|$ = distance from $a$ to zero: $|5| = 5$ and $|-5| = 5$.
- $|a - b|$ = distance between $a$ and $b$ on the number line.
- To solve $|x - 3| = 7$, split into two cases: $x - 3 = 7$ (giving $x = 10$) or $x - 3 = -7$ (giving $x = -4$).

**Complex numbers:**
- Standard form: $a + bi$ where $a$ is the real part and $b$ is the imaginary part.
- $i^1 = i,\; i^2 = -1,\; i^3 = -i,\; i^4 = 1$ — the pattern repeats every 4 powers.
- Add/subtract: combine real parts and imaginary parts separately: $(3 + 2i) + (1 - 5i) = 4 - 3i$.
- Multiply: use FOIL and replace $i^2$ with $-1$: $(2 + i)(3 - i) = 6 - 2i + 3i - i^2 = 6 + i + 1 = 7 + i$.

**Matrices (2×2 basics):**
- Addition: add corresponding entries. Both matrices must have the same dimensions.
- Scalar multiplication: multiply every entry by the scalar.
- Matrix multiplication: for $A \times B$, the entry in row $r$, column $c$ of the product equals the dot product of row $r$ of $A$ with column $c$ of $B$. The number of columns in $A$ must equal the number of rows in $B$.

## Common Traps

**Absolute value equations.** $|x| = -3$ has no solution — absolute value is never negative. Always check whether the right side is negative before solving.

**$i^2$ substitution.** When multiplying complex numbers, students forget to replace $i^2$ with $-1$, leaving an extra $i^2$ term. Always complete this substitution.

## Quick Tip

For powers of $i$ beyond $i^4$, divide the exponent by 4 and look at the remainder: remainder 1 → $i$, remainder 2 → $-1$, remainder 3 → $-i$, remainder 0 → $1$.`,
    examples: [
      {
        prompt:
          "Solve for all values of $x$: $|2x + 1| = 9$.",
        steps: [
          "An absolute value equation $|A| = c$ (with $c \\geq 0$) splits into two cases: $A = c$ or $A = -c$.",
          "Case 1: $2x + 1 = 9 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.",
          "Case 2: $2x + 1 = -9 \\Rightarrow 2x = -10 \\Rightarrow x = -5$.",
          "Both values satisfy the original equation (check: $|2(4)+1| = |9| = 9$ ✓; $|2(-5)+1| = |-9| = 9$ ✓).",
        ],
        answer: "$x = 4$ or $x = -5$.",
      },
      {
        prompt:
          "Compute $(3 + 2i)(1 - 4i)$.",
        steps: [
          "Use FOIL: $(3)(1) + (3)(-4i) + (2i)(1) + (2i)(-4i)$.",
          "Simplify each term: $3 - 12i + 2i - 8i^2$.",
          "Replace $i^2$ with $-1$: $3 - 12i + 2i - 8(-1) = 3 - 12i + 2i + 8$.",
          "Combine real parts and imaginary parts: $(3 + 8) + (-12i + 2i) = 11 - 10i$.",
        ],
        answer: "$(3 + 2i)(1 - 4i) = 11 - 10i$.",
      },
    ],
    orderIndex: 3,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. expressions_polynomials
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "expressions_polynomials",
    title: "Expressions and Polynomials",
    summary:
      "This lesson covers simplifying algebraic expressions by combining like terms, adding, subtracting, and multiplying polynomials, and factoring — including factoring out the GCF and factoring quadratics. These techniques appear in nearly every ACT algebra problem.",
    body: String.raw`## What This Skill Is

An **expression** is a mathematical phrase with numbers, variables, and operations but no equals sign. A **polynomial** is a specific type of expression made up of terms with non-negative integer exponents. Polynomial work forms the backbone of algebra on the ACT.

## Key Rules

1. **Like terms.** Only terms with identical variable parts (same variable, same exponent) can be combined. $3x^2 + 5x^2 = 8x^2$, but $3x^2 + 5x$ cannot be simplified further.

2. **Adding and subtracting polynomials.** Distribute the sign (especially important for subtraction) and combine like terms:
$$
(4x^2 + 3x - 1) - (x^2 - 5x + 2) = 4x^2 + 3x - 1 - x^2 + 5x - 2 = 3x^2 + 8x - 3
$$

3. **Multiplying polynomials.** Use the distributive property. For two binomials, use FOIL (First, Outer, Inner, Last):
$$(x + 3)(x - 5) = x^2 - 5x + 3x - 15 = x^2 - 2x - 15$$

4. **Factoring out the GCF.** Always look for a common factor first: $6x^3 - 9x^2 = 3x^2(2x - 3)$.

5. **Factoring quadratics.** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$:
$$x^2 + 7x + 12 = (x + 3)(x + 4)$$
For $ax^2 + bx + c$ with $a \neq 1$, use the AC method or trial and error.

6. **Special products.**
   - Difference of squares: $a^2 - b^2 = (a + b)(a - b)$
   - Perfect square trinomial: $a^2 + 2ab + b^2 = (a + b)^2$

## Common Traps

**Forgetting to distribute the negative.** $(5x - 3) - (2x + 7)$ — students often forget to change the sign of $+7$ to $-7$, getting $+7$ instead of $-7$.

**FOIL used for three terms.** FOIL only works for two binomials. For $(x + 1)(x + 2)(x + 3)$, FOIL the first two, then multiply the result by the third.

## Quick Tip

When factoring, always start by checking for a GCF. Then identify the structure: is it a quadratic? Difference of squares? Perfect square? Working through these checkpoints quickly narrows down your approach.`,
    examples: [
      {
        prompt:
          "Expand and simplify: $(2x - 3)^2$.",
        steps: [
          "Recognize this as a perfect square trinomial: $(a - b)^2 = a^2 - 2ab + b^2$ with $a = 2x$ and $b = 3$.",
          "Apply the formula: $(2x)^2 - 2(2x)(3) + (3)^2$.",
          "Simplify each term: $4x^2 - 12x + 9$.",
        ],
        answer: "$(2x - 3)^2 = 4x^2 - 12x + 9$.",
      },
      {
        prompt:
          "Factor completely: $2x^3 - 8x^2 - 10x$.",
        steps: [
          "First, factor out the GCF of all three terms. The GCF is $2x$: $2x(x^2 - 4x - 5)$.",
          "Now factor the quadratic $x^2 - 4x - 5$. Find two numbers that multiply to $-5$ and add to $-4$: those are $-5$ and $+1$.",
          "Factor: $x^2 - 4x - 5 = (x - 5)(x + 1)$.",
          "Combine with the GCF: $2x(x - 5)(x + 1)$.",
        ],
        answer: "$2x^3 - 8x^2 - 10x = 2x(x - 5)(x + 1)$.",
      },
    ],
    orderIndex: 4,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. linear_equations
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "linear_equations",
    title: "Solving Linear Equations and Systems",
    summary:
      "This lesson covers solving one-variable linear equations by isolating the variable, and solving systems of two linear equations using substitution or elimination. These are among the most tested algebra skills on the ACT.",
    body: String.raw`## What This Skill Is

A **linear equation** is an equation in which every variable has an exponent of 1 (no squares, no square roots). Solving one means isolating the variable on one side of the equals sign. A **system of linear equations** is two or more equations with two or more variables that must be satisfied simultaneously.

## Key Rules

**One-variable linear equations:**
1. Distribute any parentheses.
2. Combine like terms on each side.
3. Use addition/subtraction to get all variable terms on one side and all constants on the other.
4. Divide by the coefficient of the variable.

**Systems of equations — Substitution:**
1. Solve one equation for one variable.
2. Substitute that expression into the other equation.
3. Solve for the remaining variable.
4. Back-substitute to find the first variable.

**Systems of equations — Elimination:**
1. Multiply one or both equations so that the coefficients of one variable are equal (and opposite in sign).
2. Add the equations to eliminate that variable.
3. Solve for the remaining variable.
4. Substitute back to find the other.

**Special cases:**
- **No solution:** the system produces a contradiction like $0 = 5$ — the lines are parallel.
- **Infinitely many solutions:** the system produces a tautology like $0 = 0$ — the equations describe the same line.

## Common Traps

**Sign errors when eliminating.** If you're adding equations to eliminate a variable, make sure the signs on that variable are truly opposite. Multiply an equation by $-1$ if needed.

**Checking the solution.** Always substitute your answer back into the original equation(s). A computation error is easy to make — checking takes only a moment.

## Quick Tip

For systems, choose substitution when one equation is already solved for a variable (like $y = 3x - 1$). Choose elimination when both equations are in standard form ($ax + by = c$) — especially when the coefficients are easily made equal.`,
    examples: [
      {
        prompt:
          "Solve for $x$: $3(x - 4) + 5 = 2x + 7$.",
        steps: [
          "Distribute the $3$: $3x - 12 + 5 = 2x + 7$.",
          "Combine like terms on the left: $3x - 7 = 2x + 7$.",
          "Subtract $2x$ from both sides: $x - 7 = 7$.",
          "Add $7$ to both sides: $x = 14$.",
          "Check: $3(14 - 4) + 5 = 3(10) + 5 = 35$ and $2(14) + 7 = 35$. ✓",
        ],
        answer: "$x = 14$.",
      },
      {
        prompt:
          "Solve the system: $\\begin{cases} 2x + 3y = 12 \\\\ 5x - 3y = 2 \\end{cases}$",
        steps: [
          "Notice that the $y$-coefficients are $+3$ and $-3$. Adding the equations will eliminate $y$.",
          "Add: $(2x + 3y) + (5x - 3y) = 12 + 2 \\Rightarrow 7x = 14 \\Rightarrow x = 2$.",
          "Substitute $x = 2$ into the first equation: $2(2) + 3y = 12 \\Rightarrow 4 + 3y = 12 \\Rightarrow 3y = 8 \\Rightarrow y = \\dfrac{8}{3}$.",
          "Check in the second equation: $5(2) - 3\\left(\\dfrac{8}{3}\\right) = 10 - 8 = 2$. ✓",
        ],
        answer: "$x = 2,\\; y = \\dfrac{8}{3}$.",
      },
    ],
    orderIndex: 5,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. inequalities
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "inequalities",
    title: "Inequalities and Their Graphs",
    summary:
      "This lesson covers solving linear inequalities, compound inequalities, and absolute-value inequalities, and interpreting their solutions on a number line or coordinate plane. The critical rule: multiplying or dividing by a negative number flips the inequality sign.",
    body: String.raw`## What This Skill Is

An **inequality** states that two expressions are not equal — one is greater than, less than, greater than or equal to, or less than or equal to the other. Solving an inequality produces a range of values (a solution set) rather than a single answer. Graphing that solution set on a number line or coordinate plane is a key skill.

## Key Rules

1. **Solving linear inequalities.** Use the same steps as solving an equation, with one critical exception: **if you multiply or divide both sides by a negative number, flip the inequality sign**.
$$3 - 2x > 7 \Rightarrow -2x > 4 \Rightarrow x < -2$$

2. **Graphing on a number line.** Open circle ($\circ$) for strict inequalities ($<$ or $>$); closed circle ($\bullet$) for $\leq$ or $\geq$. Shade the region that satisfies the inequality.

3. **Compound inequalities.**
   - "And" (intersection): $-3 < x \leq 5$ — both conditions must be true simultaneously. Solve the middle piece.
   - "Or" (union): $x < -1$ or $x > 4$ — satisfy at least one condition.

4. **Absolute-value inequalities.**
   - $|x| < c$ (with $c > 0$) → $-c < x < c$ (between $-c$ and $c$).
   - $|x| > c$ (with $c > 0$) → $x < -c$ or $x > c$ (two separate rays).

5. **Graphing linear inequalities on the coordinate plane.** Graph the boundary line (solid for $\leq$ or $\geq$, dashed for $<$ or $>$). Test a point (usually $(0, 0)$) to determine which side to shade.

## Common Traps

**Forgetting to flip the sign.** Dividing by a negative without flipping is the most common inequality mistake. Write a reminder note next to any step where you divide or multiply by a negative.

**Misreading compound inequalities.** "$x > 3$ and $x > 7$" simplifies to just $x > 7$ (the more restrictive condition). "$x > 3$ or $x > 7$" simplifies to $x > 3$.

## Quick Tip

At the end of an inequality problem, test a value in your solution set in the original inequality to confirm it works, then test a value outside your solution set to confirm it doesn't.`,
    examples: [
      {
        prompt:
          "Solve and graph on a number line: $-3x + 6 \\leq 15$.",
        steps: [
          "Subtract $6$ from both sides: $-3x \\leq 9$.",
          "Divide both sides by $-3$. Since we're dividing by a negative, flip the inequality sign: $x \\geq -3$.",
          "On a number line, place a closed circle at $-3$ (because $\\geq$ includes $-3$) and shade to the right.",
          "Check with $x = 0$: $-3(0) + 6 = 6 \\leq 15$ ✓. Check with $x = -4$ (outside solution): $-3(-4) + 6 = 18$, and $18 \\leq 15$ is false ✓ (correctly excluded).",
        ],
        answer:
          "$x \\geq -3$. On the number line: closed circle at $-3$, shading to the right.",
      },
      {
        prompt:
          "Solve: $|2x - 3| > 7$.",
        steps: [
          "An absolute-value inequality of the form $|A| > c$ splits into two cases: $A > c$ or $A < -c$.",
          "Case 1: $2x - 3 > 7 \\Rightarrow 2x > 10 \\Rightarrow x > 5$.",
          "Case 2: $2x - 3 < -7 \\Rightarrow 2x < -4 \\Rightarrow x < -2$.",
          "Check: $x = 6$: $|2(6)-3| = |9| = 9 > 7$ ✓. $x = -3$: $|2(-3)-3| = |-9| = 9 > 7$ ✓. $x = 0$ (between): $|{-3}| = 3$, and $3 > 7$ is false ✓ (correctly excluded).",
        ],
        answer: "$x > 5$ or $x < -2$.",
      },
    ],
    orderIndex: 6,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. quadratics
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "quadratics",
    title: "Quadratic Equations and Inequalities",
    summary:
      "This lesson covers solving quadratic equations by factoring, completing the square, and the quadratic formula, as well as interpreting the discriminant and solving quadratic inequalities. Quadratics are one of the most heavily tested algebra topics on the ACT.",
    body: String.raw`## What This Skill Is

A **quadratic equation** has the form $ax^2 + bx + c = 0$ (with $a \neq 0$). Its solutions (called **roots** or **zeros**) are the $x$-values where the parabola crosses the $x$-axis. You should know three methods for finding them, and you should understand the **discriminant** — the part of the quadratic formula that tells you how many real solutions exist.

## Key Rules

1. **Factoring.** Works best when the quadratic factors neatly:
$$x^2 - x - 6 = 0 \Rightarrow (x - 3)(x + 2) = 0 \Rightarrow x = 3 \text{ or } x = -2$$

2. **The quadratic formula.** Always works:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

3. **Completing the square.** Useful for converting to vertex form $y = a(x-h)^2 + k$. Half the $b$-coefficient, square it, add and subtract from both sides.

4. **The discriminant.** $D = b^2 - 4ac$.
   - $D > 0$: two distinct real roots
   - $D = 0$: one repeated real root
   - $D < 0$: no real roots (two complex roots)

5. **Quadratic inequalities.** Solve $ax^2 + bx + c > 0$ (or $< 0$) by:
   - Finding the roots (zeros).
   - Testing a value in each region between roots.
   - Determining which region(s) satisfy the inequality.

6. **Vertex form.** $y = a(x - h)^2 + k$ gives vertex $(h, k)$, axis of symmetry $x = h$, and direction of opening (up if $a > 0$, down if $a < 0$).

## Common Traps

**Sign errors in the quadratic formula.** $b^2 - 4ac$ requires careful sign tracking. If $b = -5$, then $b^2 = 25$ (positive), not $-25$.

**Setting a factored expression equal to something other than 0.** The zero-product property only works when the product equals zero. If $(x+2)(x-3) = 6$, you cannot say $x+2=6$ or $x-3=6$. Expand, rearrange to equal zero, then factor.

## Quick Tip

Always try factoring first — it's the fastest method if it works. If the quadratic doesn't factor within 20 seconds, switch directly to the quadratic formula. Don't spend precious test time hunting for a factorization that may not exist.`,
    examples: [
      {
        prompt:
          "Solve by using the quadratic formula: $2x^2 - 5x - 3 = 0$.",
        steps: [
          "Identify $a = 2$, $b = -5$, $c = -3$.",
          "Compute the discriminant: $b^2 - 4ac = (-5)^2 - 4(2)(-3) = 25 + 24 = 49$.",
          "Apply the formula: $x = \\dfrac{-(-5) \\pm \\sqrt{49}}{2(2)} = \\dfrac{5 \\pm 7}{4}$.",
          "Two solutions: $x = \\dfrac{5 + 7}{4} = \\dfrac{12}{4} = 3$ and $x = \\dfrac{5 - 7}{4} = \\dfrac{-2}{4} = -\\dfrac{1}{2}$.",
          "Check: $2(3)^2 - 5(3) - 3 = 18 - 15 - 3 = 0$ ✓.",
        ],
        answer: "$x = 3$ or $x = -\\dfrac{1}{2}$.",
      },
      {
        prompt:
          "For what values of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?",
        steps: [
          "A quadratic has exactly one real solution when its discriminant equals zero: $D = b^2 - 4ac = 0$.",
          "Here $a = 1$, $b = k$, $c = 9$, so $D = k^2 - 4(1)(9) = k^2 - 36$.",
          "Set $D = 0$: $k^2 - 36 = 0 \\Rightarrow k^2 = 36 \\Rightarrow k = \\pm 6$.",
        ],
        answer:
          "$k = 6$ or $k = -6$. With either value, the quadratic has exactly one real solution (a repeated root).",
      },
    ],
    orderIndex: 7,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. function_basics
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "function_basics",
    title: "Understanding Functions: Notation, Domain, and Range",
    summary:
      "This lesson explains what a function is, how to use function notation like $f(x)$, how to evaluate functions, how to find domain and range, and how to work with composite functions. Functions are a central topic across multiple ACT reporting categories.",
    body: String.raw`## What This Skill Is

A **function** is a rule that assigns exactly one output to each input. If you put a value in, you get exactly one value out. Function notation $f(x)$ (read "f of x") means the output of function $f$ when the input is $x$.

## Key Rules

1. **Evaluating a function.** To find $f(3)$, substitute $3$ everywhere you see $x$ in the function's rule: if $f(x) = 2x^2 - 1$, then $f(3) = 2(3)^2 - 1 = 17$.

2. **Domain.** The set of all valid inputs. Common restrictions:
   - Denominators cannot equal zero: for $f(x) = \dfrac{1}{x-2}$, the domain excludes $x = 2$.
   - Radicands of even-index radicals must be non-negative: for $f(x) = \sqrt{x + 3}$, we need $x \geq -3$.

3. **Range.** The set of all possible outputs. Often easier to determine from a graph than algebraically.

4. **Composite functions.** $(f \circ g)(x) = f(g(x))$ — plug $g(x)$ into $f$ wherever you see $x$.
$$\text{If } f(x) = x + 1 \text{ and } g(x) = x^2, \text{ then } f(g(x)) = x^2 + 1.$$

5. **One-to-one and the vertical line test.** A graph represents a function if every vertical line intersects it at most once. This is the **vertical line test**.

## Common Traps

**Confusing $f(g(x))$ and $g(f(x))$.** Composition is not commutative — $f(g(x))$ and $g(f(x))$ usually give different results. Always substitute the inner function first.

**Including excluded values in the domain.** If $x = 2$ makes a denominator zero, it is excluded from the domain even if the expression has other valid inputs near it.

## Quick Tip

When evaluating a composite function, work from the inside out. Evaluate the inner function first, then use that result as the input for the outer function. Writing your work step by step prevents substitution errors.`,
    examples: [
      {
        prompt:
          "Let $f(x) = 3x - 4$ and $g(x) = x^2 + 1$. Find $f(g(2))$.",
        steps: [
          "Evaluate the inner function first: $g(2) = (2)^2 + 1 = 4 + 1 = 5$.",
          "Now use this result as the input for $f$: $f(5) = 3(5) - 4 = 15 - 4 = 11$.",
        ],
        answer: "$f(g(2)) = 11$.",
      },
      {
        prompt:
          "Find the domain of $h(x) = \\dfrac{\\sqrt{x - 1}}{x - 5}$.",
        steps: [
          "Identify the two restrictions: the expression under the square root must be non-negative, and the denominator cannot be zero.",
          "Restriction 1 (square root): $x - 1 \\geq 0 \\Rightarrow x \\geq 1$.",
          "Restriction 2 (denominator): $x - 5 \\neq 0 \\Rightarrow x \\neq 5$.",
          "Combine: the domain is all $x \\geq 1$ with $x \\neq 5$.",
          "In interval notation: $[1, 5) \\cup (5, \\infty)$.",
        ],
        answer:
          "The domain is $[1, 5) \\cup (5, \\infty)$ — all real numbers greater than or equal to $1$, except $5$.",
      },
    ],
    orderIndex: 8,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. function_graphs
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "function_graphs",
    title: "Graphing Functions and Transformations",
    summary:
      "This lesson covers how to recognize and sketch the graphs of common functions (linear, quadratic, absolute value, square root), how transformations (shifts, stretches, and reflections) change a graph, and how to identify asymptotes and match graphs to equations.",
    body: String.raw`## What This Skill Is

**Graphing functions** means connecting an algebraic rule to its visual picture in the coordinate plane. **Transformations** let you predict how a graph changes when you modify the equation — shifting it left, right, up, or down, stretching it, or flipping it. This is a critical skill because many ACT problems give you a graph and ask you to find or identify the matching equation, or vice versa.

## Key Rules

**Parent functions to know:**
- Linear: $y = x$ (a line through the origin, slope 1)
- Quadratic: $y = x^2$ (U-shaped parabola opening up)
- Absolute value: $y = |x|$ (V-shape)
- Square root: $y = \sqrt{x}$ (half-curve starting at origin)

**Transformation rules** (starting from $y = f(x)$):
- $y = f(x) + k$: shift **up** $k$ units ($k > 0$) or **down** $|k|$ units ($k < 0$)
- $y = f(x - h)$: shift **right** $h$ units ($h > 0$) — the sign inside the parentheses is opposite to the direction!
- $y = a \cdot f(x)$: **vertical stretch** by factor $|a|$ if $|a| > 1$; **compression** if $0 < |a| < 1$; **reflection over the $x$-axis** if $a < 0$
- $y = f(-x)$: **reflection over the $y$-axis**

**Asymptotes:**
- For $y = \dfrac{1}{x}$: vertical asymptote at $x = 0$, horizontal asymptote at $y = 0$.
- For $y = \dfrac{1}{x - h} + k$: vertical asymptote at $x = h$, horizontal asymptote at $y = k$.

## Common Traps

**Horizontal shift direction.** $y = (x - 3)^2$ shifts the parabola **right** 3 (not left). Inside the function, subtracting shifts right; adding shifts left. This is the opposite of what students expect.

**Vertical vs. horizontal reflection.** Multiplying the entire function by $-1$ flips over the $x$-axis. Replacing $x$ with $-x$ flips over the $y$-axis.

## Quick Tip

Build a transformation step by step: start with the parent function, apply horizontal shifts first (inside the function), then vertical shifts (outside), then stretches/compressions, then reflections. Doing each transformation in isolation makes it easy to track the final position.`,
    examples: [
      {
        prompt:
          "Describe the graph of $y = -2(x + 1)^2 + 3$ in terms of transformations of $y = x^2$.",
        steps: [
          "Identify the parent function: $y = x^2$ — an upward-opening parabola with vertex at $(0, 0)$.",
          "$(x + 1)$ inside the squared term: horizontal shift **left** 1 unit. Vertex moves to $(-1, 0)$.",
          "The $+3$ outside: vertical shift **up** 3 units. Vertex moves to $(-1, 3)$.",
          "The factor of $2$: vertical stretch by a factor of $2$ (the parabola is narrower).",
          "The negative sign: reflection over the $x$-axis, so the parabola opens **downward**.",
          "Final description: a downward-opening parabola with vertex at $(-1, 3)$, narrower than $y = x^2$.",
        ],
        answer:
          "The graph is a downward-opening parabola with vertex at $(-1, 3)$, stretched vertically by a factor of 2 compared to $y = x^2$.",
      },
      {
        prompt:
          "The graph of $y = f(x)$ passes through the point $(4, 7)$. What point must be on the graph of $y = f(x - 2) + 5$?",
        steps: [
          "Identify the transformations: $f(x - 2)$ shifts the graph right 2 units; $+5$ shifts it up 5 units.",
          "A point $(a, b)$ on $y = f(x)$ maps to the point $(a + 2, b + 5)$ on the transformed graph.",
          "Apply to $(4, 7)$: the new point is $(4 + 2, 7 + 5) = (6, 12)$.",
        ],
        answer:
          "The point $(6, 12)$ must be on the graph of $y = f(x - 2) + 5$.",
      },
    ],
    orderIndex: 9,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. sequences
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "sequences",
    title: "Arithmetic and Geometric Sequences",
    summary:
      "This lesson covers arithmetic sequences (where a constant is added each term) and geometric sequences (where each term is multiplied by a constant ratio), including how to find specific terms, sums, and how to write recursive and explicit formulas.",
    body: String.raw`## What This Skill Is

A **sequence** is an ordered list of numbers following a pattern. The two most common types on the ACT are **arithmetic** (add or subtract the same amount each time) and **geometric** (multiply by the same number each time).

## Key Rules

**Arithmetic sequences:**
- Common difference $d$: the amount added from term to term.
- Explicit formula: $a_n = a_1 + (n - 1)d$, where $a_1$ is the first term and $n$ is the term number.
- Example: $3, 7, 11, 15, \ldots$ — here $a_1 = 3$ and $d = 4$, so $a_n = 3 + (n-1)(4) = 4n - 1$.

**Geometric sequences:**
- Common ratio $r$: the number each term is multiplied by.
- Explicit formula: $a_n = a_1 \cdot r^{n-1}$.
- Example: $2, 6, 18, 54, \ldots$ — here $a_1 = 2$ and $r = 3$, so $a_n = 2 \cdot 3^{n-1}$.

**Recursive formulas:**
- Arithmetic: $a_1 = \text{given},\; a_n = a_{n-1} + d$.
- Geometric: $a_1 = \text{given},\; a_n = r \cdot a_{n-1}$.

**Sum of an arithmetic sequence** (for $n$ terms):
$$S_n = \frac{n}{2}(a_1 + a_n)$$

**Identifying the type:** if differences between consecutive terms are constant → arithmetic. If ratios between consecutive terms are constant → geometric.

## Common Traps

**Off-by-one errors.** The $n$th term formula uses $(n-1)$, not $n$. The first term ($n = 1$) gives $a_1 + (1-1)d = a_1$, which is correct — be careful not to use $n$ in place of $(n-1)$.

**Confusing sum with the $n$th term.** The formula $a_n = a_1 + (n-1)d$ finds a specific term. The formula $S_n = \frac{n}{2}(a_1 + a_n)$ finds the total of all terms up to that point.

## Quick Tip

If a sequence problem gives you two non-consecutive terms, set up a system: use the explicit formula for each given term. This typically gives you two equations to solve for $a_1$ and $d$ (or $a_1$ and $r$).`,
    examples: [
      {
        prompt:
          "An arithmetic sequence has $a_1 = 5$ and $d = 4$. What is the 20th term?",
        steps: [
          "Use the explicit formula: $a_n = a_1 + (n - 1)d$.",
          "Substitute $n = 20$, $a_1 = 5$, $d = 4$: $a_{20} = 5 + (20 - 1)(4) = 5 + 19 \\times 4$.",
          "Compute: $5 + 76 = 81$.",
        ],
        answer: "The 20th term is $a_{20} = 81$.",
      },
      {
        prompt:
          "A geometric sequence has $a_2 = 6$ and $a_5 = 162$. Find the common ratio $r$ and the first term $a_1$.",
        steps: [
          "Use the explicit formula for both terms: $a_2 = a_1 \\cdot r^{1}$ and $a_5 = a_1 \\cdot r^{4}$.",
          "Divide the second equation by the first to eliminate $a_1$: $\\dfrac{a_5}{a_2} = \\dfrac{a_1 r^4}{a_1 r} = r^3$.",
          "So $r^3 = \\dfrac{162}{6} = 27 \\Rightarrow r = 3$.",
          "Use $a_2 = a_1 \\cdot r$: $6 = a_1 \\cdot 3 \\Rightarrow a_1 = 2$.",
          "Check: $a_1 = 2, a_2 = 6, a_3 = 18, a_4 = 54, a_5 = 162$ ✓.",
        ],
        answer: "$r = 3$ and $a_1 = 2$.",
      },
    ],
    orderIndex: 10,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. trigonometry
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "trigonometry",
    title: "Trigonometry: The Unit Circle and Trig Functions",
    summary:
      "This lesson covers the definitions of sine, cosine, and tangent using the unit circle and right triangles, key angle values, basic trig identities, and the graphs of trig functions including period and amplitude. Trig appears on the harder portion of the ACT Math test.",
    body: String.raw`## What This Skill Is

**Trigonometry** studies the relationships between angles and sides. The ACT tests trig in the context of right triangles and the unit circle (a circle of radius 1 centered at the origin). Knowing the definitions, key values, and a few identities will carry you through most trig questions.

## Key Rules

**Definitions (unit circle):**
For an angle $\theta$ measured counterclockwise from the positive $x$-axis to the point $(x, y)$ on the unit circle:
$$\cos\theta = x, \quad \sin\theta = y, \quad \tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}$$

**Key angle values to memorize:**

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
|---|---|---|---|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ |
| $45°$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

**Pythagorean identity:** $\sin^2\theta + \cos^2\theta = 1$. This is the most important trig identity on the ACT.

**Graphs of trig functions:**
- $y = \sin x$ and $y = \cos x$ both have **period** $2\pi$ and **amplitude** $1$.
- $y = A\sin(Bx)$ has amplitude $|A|$ and period $\dfrac{2\pi}{|B|}$.

**Signs by quadrant (ASTC — All Students Take Calculus):**
- Quadrant I: all positive
- Quadrant II: sine positive
- Quadrant III: tangent positive
- Quadrant IV: cosine positive

## Common Traps

**Confusing $\sin$ and $\cos$ at standard angles.** At $30°$, $\sin 30° = \frac{1}{2}$ (opposite/hypotenuse for a 30-60-90 triangle, and the "short" side) while $\cos 30° = \frac{\sqrt{3}}{2}$.

**Period formula.** The period of $y = \sin(Bx)$ is $\frac{2\pi}{B}$, not $2\pi B$.

## Quick Tip

Draw a quick unit circle sketch for reference when you need it. Memorize the "special angles" table — just four rows cover nearly every exact-value trig problem on the ACT.`,
    examples: [
      {
        prompt:
          "If $\\sin\\theta = \\dfrac{4}{5}$ and $\\theta$ is in the second quadrant, find $\\cos\\theta$ and $\\tan\\theta$.",
        steps: [
          "Use the Pythagorean identity: $\\sin^2\\theta + \\cos^2\\theta = 1$.",
          "Substitute: $\\left(\\dfrac{4}{5}\\right)^2 + \\cos^2\\theta = 1 \\Rightarrow \\dfrac{16}{25} + \\cos^2\\theta = 1 \\Rightarrow \\cos^2\\theta = \\dfrac{9}{25}$.",
          "So $\\cos\\theta = \\pm\\dfrac{3}{5}$. In quadrant II, cosine is negative, so $\\cos\\theta = -\\dfrac{3}{5}$.",
          "Find tangent: $\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta} = \\dfrac{4/5}{-3/5} = -\\dfrac{4}{3}$.",
        ],
        answer:
          "$\\cos\\theta = -\\dfrac{3}{5}$ and $\\tan\\theta = -\\dfrac{4}{3}$.",
      },
      {
        prompt:
          "The function $y = 3\\sin(2x)$ has what amplitude and period?",
        steps: [
          "Compare to the general form $y = A\\sin(Bx)$. Here $A = 3$ and $B = 2$.",
          "Amplitude $= |A| = |3| = 3$.",
          "Period $= \\dfrac{2\\pi}{|B|} = \\dfrac{2\\pi}{2} = \\pi$.",
        ],
        answer:
          "The amplitude is $3$ and the period is $\\pi$.",
      },
    ],
    orderIndex: 11,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. plane_geometry
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "plane_geometry",
    title: "Angles, Triangles, and Polygons",
    summary:
      "This lesson covers angle relationships (vertical, supplementary, complementary, parallel-line angles), triangle properties (angle sum, exterior angles, triangle inequality), and area and perimeter formulas for common polygons. Plane geometry is the largest geometry topic on the ACT.",
    body: String.raw`## What This Skill Is

**Plane geometry** is the study of flat shapes and their properties. On the ACT, you'll work with angles formed by intersecting or parallel lines, properties of triangles (including special triangles), and area and perimeter formulas for polygons.

## Key Rules

**Angle relationships:**
- **Vertical angles** are equal: when two lines cross, the angles across from each other are congruent.
- **Supplementary angles** sum to $180°$; **complementary angles** sum to $90°$.
- **Parallel lines cut by a transversal:** alternate interior angles are equal; corresponding angles are equal; co-interior (same-side interior) angles are supplementary.

**Triangles:**
- The three angles sum to $180°$.
- **Exterior angle theorem:** an exterior angle equals the sum of the two non-adjacent interior angles.
- **Triangle inequality:** the sum of any two sides must be greater than the third side.
- **Area:** $A = \dfrac{1}{2}bh$ where $b$ is the base and $h$ is the perpendicular height.

**Special triangles:**
- **Equilateral:** all sides and angles equal; each angle $= 60°$.
- **Isosceles:** two equal sides; base angles are equal.
- **30-60-90:** side ratios $1 : \sqrt{3} : 2$.
- **45-45-90:** side ratios $1 : 1 : \sqrt{2}$.

**Polygons:**
- Sum of interior angles of an $n$-gon: $(n-2) \times 180°$.
- Area of a rectangle: $l \times w$; perimeter: $2l + 2w$.
- Area of a parallelogram: $bh$.
- Area of a trapezoid: $\dfrac{1}{2}(b_1 + b_2)h$.

## Common Traps

**Height vs. slant side.** Area formulas use the **perpendicular** height, not the slant side. In a parallelogram, the height is the perpendicular distance between the bases, not the length of the slanted side.

**Exterior angle theorem confusion.** The exterior angle equals the sum of the two *remote* interior angles — not the adjacent interior angle (which would just be supplementary).

## Quick Tip

When a geometry problem gives you a figure, mark every angle you can determine from the given information directly on the figure. Angle-chasing — labeling known angles and working toward the unknown — solves most plane geometry problems step by step.`,
    examples: [
      {
        prompt:
          "In triangle $ABC$, angle $A = 48°$ and angle $B = 73°$. A line is drawn extending side $BC$ beyond $C$, forming an exterior angle at $C$. What is the measure of that exterior angle?",
        steps: [
          "Find angle $C$ using the triangle angle sum: $48° + 73° + C = 180° \\Rightarrow C = 59°$.",
          "The exterior angle at $C$ is supplementary to angle $C$: $180° - 59° = 121°$.",
          "Alternatively, use the exterior angle theorem: the exterior angle equals the sum of the two remote interior angles: $48° + 73° = 121°$. ✓",
        ],
        answer:
          "The exterior angle at $C$ measures $121°$.",
      },
      {
        prompt:
          "A trapezoid has parallel bases of length $8$ cm and $14$ cm, and a height of $6$ cm. What is its area?",
        steps: [
          "Use the trapezoid area formula: $A = \\dfrac{1}{2}(b_1 + b_2)h$.",
          "Substitute $b_1 = 8$, $b_2 = 14$, $h = 6$: $A = \\dfrac{1}{2}(8 + 14)(6) = \\dfrac{1}{2}(22)(6)$.",
          "Compute: $\\dfrac{1}{2} \\times 132 = 66$ cm².",
        ],
        answer:
          "The area of the trapezoid is $66$ cm².",
      },
    ],
    orderIndex: 12,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. coordinate_geometry
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "coordinate_geometry",
    title: "Points, Lines, and Curves on the Coordinate Plane",
    summary:
      "This lesson covers the distance formula, midpoint formula, slope, equations of lines (slope-intercept and point-slope), and the equations of parabolas and circles in the coordinate plane. Coordinate geometry bridges algebra and geometry on the ACT.",
    body: String.raw`## What This Skill Is

**Coordinate geometry** uses the $xy$-plane to describe geometric figures algebraically. Every line, curve, and shape can be expressed as an equation, and every equation can be visualized as a shape. Mastering the key formulas connects the two worlds.

## Key Rules

**Distance formula** between $(x_1, y_1)$ and $(x_2, y_2)$:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Midpoint formula:**
$$M = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)$$

**Slope** of a line through two points:
$$m = \frac{y_2 - y_1}{x_2 - x_1}$$
Parallel lines have equal slopes. Perpendicular lines have slopes that are negative reciprocals: $m_1 \cdot m_2 = -1$.

**Equations of lines:**
- Slope-intercept: $y = mx + b$
- Point-slope: $y - y_1 = m(x - x_1)$
- Standard form: $ax + by = c$

**Parabolas:** Standard form $y = a(x - h)^2 + k$ — vertex at $(h, k)$.

**Circles:** Standard form $(x - h)^2 + (y - k)^2 = r^2$ — center $(h, k)$, radius $r$.

## Common Traps

**Slope of vertical vs. horizontal lines.** A horizontal line ($y = c$) has slope $0$. A vertical line ($x = c$) has an undefined slope — do not write $m = 0$ for a vertical line.

**Circle equation signs.** $(x - 3)^2 + (y + 2)^2 = 25$ has center $(3, -2)$ — the signs inside the parentheses are opposite to the center coordinates.

## Quick Tip

For circle problems, complete the square if the equation is not in standard form. Group $x$-terms and $y$-terms separately, complete the square for each, and remember to add the same amount to the right side.`,
    examples: [
      {
        prompt:
          "Find the equation of the line that is perpendicular to $y = \\dfrac{2}{3}x + 4$ and passes through the point $(4, -1)$.",
        steps: [
          "The given line has slope $m = \\dfrac{2}{3}$.",
          "A perpendicular line has a slope that is the negative reciprocal: $m_{\\perp} = -\\dfrac{3}{2}$.",
          "Use point-slope form with $(4, -1)$: $y - (-1) = -\\dfrac{3}{2}(x - 4)$.",
          "Simplify: $y + 1 = -\\dfrac{3}{2}x + 6 \\Rightarrow y = -\\dfrac{3}{2}x + 5$.",
        ],
        answer: "$y = -\\dfrac{3}{2}x + 5$.",
      },
      {
        prompt:
          "Find the center and radius of the circle $x^2 - 6x + y^2 + 4y = 12$.",
        steps: [
          "Complete the square for the $x$-terms: $x^2 - 6x$. Half of $-6$ is $-3$; $(-3)^2 = 9$. Add $9$ to both sides.",
          "Complete the square for the $y$-terms: $y^2 + 4y$. Half of $4$ is $2$; $(2)^2 = 4$. Add $4$ to both sides.",
          "The equation becomes: $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$.",
          "Standard form: $(x - 3)^2 + (y + 2)^2 = 25$. Center $(3, -2)$, radius $\\sqrt{25} = 5$.",
        ],
        answer:
          "The center is $(3, -2)$ and the radius is $5$.",
      },
    ],
    orderIndex: 13,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. solid_geometry
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "solid_geometry",
    title: "Volume and Surface Area of 3-D Figures",
    summary:
      "This lesson covers the volume and surface area formulas for prisms, cylinders, pyramids, cones, and spheres, along with how to apply these formulas to composite figures and word problems. Three-dimensional geometry appears consistently on the ACT.",
    body: String.raw`## What This Skill Is

**Solid geometry** extends plane geometry into three dimensions. **Volume** measures how much space a figure occupies (cubic units). **Surface area** measures the total area of all outer faces (square units). Memorizing the key formulas and knowing when to apply them is the core skill.

## Key Rules

**Volume formulas:**
- Rectangular prism (box): $V = lwh$
- Cylinder: $V = \pi r^2 h$
- Pyramid: $V = \dfrac{1}{3}Bh$ where $B$ is the area of the base
- Cone: $V = \dfrac{1}{3}\pi r^2 h$
- Sphere: $V = \dfrac{4}{3}\pi r^3$

**Surface area formulas:**
- Rectangular prism: $SA = 2(lw + lh + wh)$
- Cylinder: $SA = 2\pi r^2 + 2\pi r h$ (two circular ends + lateral surface)
- Sphere: $SA = 4\pi r^2$

**Composite figures.** Some ACT problems show a figure made of two or more basic shapes (e.g., a cylinder with a cone on top). Calculate each part separately and add (for volume) or carefully add the outer surfaces only (for surface area).

**Unit consistency.** Make sure all measurements are in the same unit before computing. If one dimension is in feet and another is in inches, convert first.

## Common Traps

**Confusing volume and surface area.** Volume is cubic units; surface area is square units. Read the question carefully to know which one is requested.

**Pyramid and cone factor of 1/3.** Students often use $Bh$ instead of $\frac{1}{3}Bh$ for pyramids and cones. The factor of $\frac{1}{3}$ is essential — a pyramid has exactly one-third the volume of a prism with the same base and height.

## Quick Tip

For surface area problems, visualize "unfolding" the shape into a flat net. Each face becomes a flat piece you calculate separately. Add the areas of all faces to get the total surface area.`,
    examples: [
      {
        prompt:
          "A cylindrical water tank has a radius of $3$ meters and a height of $10$ meters. How many cubic meters of water can it hold?",
        steps: [
          "Use the cylinder volume formula: $V = \\pi r^2 h$.",
          "Substitute $r = 3$ and $h = 10$: $V = \\pi (3)^2 (10) = \\pi \\cdot 9 \\cdot 10 = 90\\pi$.",
          "As a decimal: $90\\pi \\approx 282.7$ cubic meters.",
        ],
        answer:
          "The tank can hold $90\\pi \\approx 282.7$ cubic meters of water.",
      },
      {
        prompt:
          "A cone and a cylinder have the same base radius $r = 4$ cm and the same height $h = 9$ cm. What is the ratio of the cone's volume to the cylinder's volume?",
        steps: [
          "Compute the cone's volume: $V_{\\text{cone}} = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi (4)^2(9) = \\dfrac{1}{3}\\pi(16)(9) = 48\\pi$.",
          "Compute the cylinder's volume: $V_{\\text{cyl}} = \\pi r^2 h = \\pi(4)^2(9) = 144\\pi$.",
          "Find the ratio: $\\dfrac{V_{\\text{cone}}}{V_{\\text{cyl}}} = \\dfrac{48\\pi}{144\\pi} = \\dfrac{1}{3}$.",
        ],
        answer:
          "The ratio is $\\dfrac{1}{3}$. A cone always has one-third the volume of a cylinder with the same base and height.",
      },
    ],
    orderIndex: 14,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. right_triangle_trig
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "right_triangle_trig",
    title: "Right Triangles: Pythagorean Theorem and SOHCAHTOA",
    summary:
      "This lesson covers the Pythagorean theorem, the special right triangles (30-60-90 and 45-45-90), the SOHCAHTOA definitions of sine, cosine, and tangent in right triangles, and how to find missing sides and angles. These tools appear in both geometry and trigonometry questions.",
    body: String.raw`## What This Skill Is

A **right triangle** has one angle of exactly $90°$. The side opposite the right angle (the longest side) is called the **hypotenuse**. The **Pythagorean theorem** and **SOHCAHTOA** are the two essential tools for working with right triangles.

## Key Rules

**Pythagorean theorem:** $a^2 + b^2 = c^2$ where $c$ is the hypotenuse and $a$, $b$ are the legs.
Common Pythagorean triples: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$, and their multiples.

**Special right triangles:**
- **30-60-90:** sides in ratio $1 : \sqrt{3} : 2$ (short leg : long leg : hypotenuse)
- **45-45-90:** sides in ratio $1 : 1 : \sqrt{2}$ (leg : leg : hypotenuse)

**SOHCAHTOA** (for an acute angle $\theta$ in a right triangle):
$$\sin\theta = \frac{\text{Opposite}}{\text{Hypotenuse}}, \quad \cos\theta = \frac{\text{Adjacent}}{\text{Hypotenuse}}, \quad \tan\theta = \frac{\text{Opposite}}{\text{Adjacent}}$$

**Finding a missing angle.** If you know two sides, use an inverse trig function:
$$\theta = \sin^{-1}\!\left(\frac{\text{opp}}{\text{hyp}}\right), \quad \theta = \cos^{-1}\!\left(\frac{\text{adj}}{\text{hyp}}\right), \quad \theta = \tan^{-1}\!\left(\frac{\text{opp}}{\text{adj}}\right)$$

**Similar triangles.** Two triangles are similar if their corresponding angles are equal. Corresponding sides are proportional.

## Common Traps

**Opposite vs. adjacent confusion.** "Opposite" and "adjacent" are defined relative to the angle in question, not the triangle as a whole. If the angle changes, so do which sides are opposite and adjacent.

**Pythagorean triple short-cuts.** Recognizing a $(3, 4, 5)$ triangle (or multiples like $(6, 8, 10)$) saves time, but confirm the given sides actually match the pattern before assuming.

## Quick Tip

Draw and label the triangle before computing. Mark the right angle, label the given sides, and identify which angle you're working with. Then SOHCAHTOA tells you exactly which ratio to use.`,
    examples: [
      {
        prompt:
          "In a right triangle, the two legs have lengths $7$ and $24$. Find the length of the hypotenuse.",
        steps: [
          "Apply the Pythagorean theorem: $a^2 + b^2 = c^2$.",
          "Substitute: $7^2 + 24^2 = c^2 \\Rightarrow 49 + 576 = c^2 \\Rightarrow 625 = c^2$.",
          "Take the positive square root: $c = \\sqrt{625} = 25$.",
          "Recognize this as the $(7, 24, 25)$ Pythagorean triple.",
        ],
        answer: "The hypotenuse has length $25$.",
      },
      {
        prompt:
          "A right triangle has a hypotenuse of $13$ and one acute angle of $\\ 30°$. Find the lengths of both legs.",
        steps: [
          "This is a 30-60-90 triangle. The angle of $30°$ is opposite the short leg and the angle of $60°$ is opposite the long leg.",
          "Using ratios $1 : \\sqrt{3} : 2$ scaled to hypotenuse $13$ (the $2$ part): the scale factor is $\\dfrac{13}{2}$.",
          "Short leg (opposite $30°$) $= 1 \\times \\dfrac{13}{2} = \\dfrac{13}{2} = 6.5$.",
          "Long leg (opposite $60°$) $= \\sqrt{3} \\times \\dfrac{13}{2} = \\dfrac{13\\sqrt{3}}{2} \\approx 11.26$.",
        ],
        answer:
          "The short leg is $\\dfrac{13}{2} = 6.5$ and the long leg is $\\dfrac{13\\sqrt{3}}{2} \\approx 11.26$.",
      },
    ],
    orderIndex: 15,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 16. data_statistics
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "data_statistics",
    title: "Mean, Median, Mode, and Reading Data Displays",
    summary:
      "This lesson covers computing the mean, median, and mode of a data set, understanding weighted averages, and reading and interpreting bar graphs, histograms, pie charts, scatterplots, and frequency tables. Data and statistics questions appear throughout the ACT Math section.",
    body: String.raw`## What This Skill Is

**Statistics** is the study of how to collect, organize, and summarize data. On the ACT, you need to calculate measures of center (mean, median, mode), handle weighted averages, and extract information from various types of data displays.

## Key Rules

**Mean (average):** $\bar{x} = \dfrac{\text{sum of all values}}{\text{number of values}}$

**Median:** the middle value when data is arranged in order. For an even number of values, the median is the average of the two middle values.

**Mode:** the value that appears most often. A data set can have no mode, one mode, or multiple modes.

**Range:** $\text{max} - \text{min}$ — measures the spread of the data.

**Weighted average:** when some values count more than others:
$$\bar{x}_w = \frac{w_1 x_1 + w_2 x_2 + \cdots + w_n x_n}{w_1 + w_2 + \cdots + w_n}$$
Example: a class grade where homework counts 30% and exams count 70%.

**Back-calculating from the mean.** If you know the mean and all values but one, multiply the mean by the count to get the sum, then subtract the known values.

**Reading data displays:**
- **Bar graph/histogram:** height of bar = frequency or value.
- **Scatterplot:** look for general trend (positive/negative/no correlation); don't confuse individual outliers with the overall pattern.
- **Pie chart:** each sector's central angle $= \dfrac{\text{part}}{\text{whole}} \times 360°$.

## Common Traps

**Mean vs. median.** A few extreme outliers greatly affect the mean but barely affect the median. If a data set has outliers, the median is the better measure of center.

**Forgetting to sort for the median.** Always put values in order before finding the middle. If the data is not sorted, you'll pick the wrong "middle" value.

## Quick Tip

For "find the missing value" problems using the mean: total sum = mean × count. Fill in everything you know and solve for the unknown. This one-step technique solves dozens of ACT statistics problems.`,
    examples: [
      {
        prompt:
          "A student scored $82, 76, 91, 88$, and $79$ on five tests. What score does the student need on the sixth test to achieve a mean of $85$?",
        steps: [
          "The desired mean is $85$ and there will be $6$ tests, so the required total sum is $85 \\times 6 = 510$.",
          "Current sum of five scores: $82 + 76 + 91 + 88 + 79 = 416$.",
          "Required sixth score: $510 - 416 = 94$.",
        ],
        answer:
          "The student needs a score of $94$ on the sixth test.",
      },
      {
        prompt:
          "A data set has 7 values: $\\ 3, 7, 9, 12, 12, 15, 20$. Find the mean, median, and mode.",
        steps: [
          "**Mean:** Sum $= 3 + 7 + 9 + 12 + 12 + 15 + 20 = 78$. Mean $= 78 \\div 7 = \\dfrac{78}{7} \\approx 11.14$.",
          "**Median:** There are $7$ values (odd count). The middle value is the 4th: $3, 7, 9, \\mathbf{12}, 12, 15, 20$. Median $= 12$.",
          "**Mode:** The value that appears most often is $12$ (appears twice). Mode $= 12$.",
        ],
        answer:
          "Mean $\\approx 11.14$, median $= 12$, mode $= 12$.",
      },
    ],
    orderIndex: 16,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 17. probability
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "probability",
    title: "Probability and Counting Techniques",
    summary:
      "This lesson covers basic probability (favorable outcomes over total outcomes), compound events (AND and OR), conditional probability, combinations, permutations, and Venn diagrams. Probability and counting questions are a reliable part of the ACT Math section.",
    body: String.raw`## What This Skill Is

**Probability** measures how likely an event is, expressed as a fraction, decimal, or percent between 0 (impossible) and 1 (certain). **Counting techniques** give you the tools to count large sets of outcomes without listing them one by one.

## Key Rules

**Basic probability:**
$$P(\text{event}) = \frac{\text{number of favorable outcomes}}{\text{total number of equally likely outcomes}}$$

**Complement rule:** $P(\text{not A}) = 1 - P(A)$. This is useful when "at least one" events are easier computed as $1 - P(\text{none})$.

**AND (intersection — both events occur):**
- If independent: $P(A \text{ and } B) = P(A) \times P(B)$
- If dependent: $P(A \text{ and } B) = P(A) \times P(B \mid A)$ where $P(B \mid A)$ is the probability of $B$ given $A$ already happened.

**OR (union — at least one event occurs):**
$$P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$$
If mutually exclusive (can't both happen): $P(A \text{ or } B) = P(A) + P(B)$.

**Permutations** (order matters): $P(n, r) = \dfrac{n!}{(n-r)!}$

**Combinations** (order doesn't matter): $C(n, r) = \dfrac{n!}{r!(n-r)!}$

**Venn diagrams.** Use two or three overlapping circles to organize items belonging to multiple groups. The intersection contains items in all groups; the union contains all items in at least one group.

## Common Traps

**With vs. without replacement.** If items are selected without replacement, the second draw's probability changes because the pool is smaller. Update the denominator.

**Permutations vs. combinations.** Ask: does order matter? Choosing a president, vice president, and secretary from 10 people = permutation (order matters). Choosing any 3 committee members = combination.

## Quick Tip

For "at least one" probability problems, it is almost always faster to compute $1 - P(\text{none})$ than to sum all the cases with one, two, three, etc. successes.`,
    examples: [
      {
        prompt:
          "A bag contains $4$ red marbles, $3$ blue marbles, and $5$ green marbles. Two marbles are drawn one at a time without replacement. What is the probability that both are red?",
        steps: [
          "Total marbles: $4 + 3 + 5 = 12$.",
          "Probability the first marble is red: $\\dfrac{4}{12} = \\dfrac{1}{3}$.",
          "After one red is removed, there are $3$ red marbles and $11$ total. Probability the second is red: $\\dfrac{3}{11}$.",
          "Both red (without replacement): $\\dfrac{1}{3} \\times \\dfrac{3}{11} = \\dfrac{3}{33} = \\dfrac{1}{11}$.",
        ],
        answer: "$P(\\text{both red}) = \\dfrac{1}{11}$.",
      },
      {
        prompt:
          "A club has $8$ members. How many different ways can a president and a vice president be chosen?",
        steps: [
          "This is a permutation problem — order matters because the two positions are different.",
          "Choose president: $8$ options. After choosing president, choose vice president: $7$ options remaining.",
          "$P(8, 2) = 8 \\times 7 = 56$.",
        ],
        answer:
          "There are $56$ ways to choose a president and a vice president from $8$ members.",
      },
    ],
    orderIndex: 17,
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 18. word_problems
  // ─────────────────────────────────────────────────────────────────────────
  {
    subject: "MATH",
    subSkill: "word_problems",
    title: "Rates, Proportions, Percents, and Multi-Step Problems",
    summary:
      "This lesson covers setting up and solving real-world problems involving rates (distance, speed, time), proportions, percent change, unit conversion, and multi-step scenarios. These 'integrating essential skills' problems are the most practical math on the ACT.",
    body: String.raw`## What This Skill Is

**Word problems** require you to translate a real-world scenario into mathematical language, choose the right approach, and carry out the computation accurately. The most common types involve rates, proportions, and percents — skills you've used throughout school, now applied in multi-step contexts.

## Key Rules

**Distance-rate-time:** $d = r \times t$ (and its rearrangements: $r = d/t$, $t = d/r$).
For objects moving toward each other, their rates add. For objects moving in the same direction, subtract rates.

**Proportions.** Set up a ratio and solve:
$$\frac{a}{b} = \frac{c}{d} \Rightarrow ad = bc \quad (\text{cross-multiplication})$$
Always label units in both fractions to ensure they match.

**Percents.**
- "Percent of": multiply. $20\%$ of $80 = 0.20 \times 80 = 16$.
- **Percent increase/decrease:** $\dfrac{\text{new} - \text{original}}{\text{original}} \times 100\%$.
- **Finding the original after a percent change:** if the result is $130\%$ of the original, divide the result by $1.30$.

**Unit conversion.** Multiply by conversion factors (fractions equal to 1): $60 \text{ mph} \times \dfrac{5280 \text{ ft}}{1 \text{ mi}} \times \dfrac{1 \text{ hr}}{3600 \text{ s}} = 88 \text{ ft/s}$.

**Multi-step problems.** Break the problem into stages. Solve each stage before moving to the next. Re-read the question to make sure your final answer is what was actually asked for.

## Common Traps

**Answering the wrong question.** A multi-step problem might ask for the profit after taxes, not the total revenue. Solve all the way to what's actually asked.

**Percent-of-percent confusion.** A $10\%$ discount followed by a $10\%$ tax does not leave the original price unchanged. Each percentage operates on a different base.

## Quick Tip

For any word problem, write down what you know (given values) and what you want to find (the unknown). Then identify which formula or setup connects the two. Writing this structure before computing keeps you from losing track in multi-step problems.`,
    examples: [
      {
        prompt:
          "A car travels from Town A to Town B at $60$ mph. It returns along the same route at $40$ mph. What is the car's average speed for the entire round trip?",
        steps: [
          "Let the one-way distance be $d$ miles. Time from A to B: $\\dfrac{d}{60}$ hours. Time from B to A: $\\dfrac{d}{40}$ hours.",
          "Total distance for round trip: $2d$. Total time: $\\dfrac{d}{60} + \\dfrac{d}{40}$.",
          "Find a common denominator for the time: $\\dfrac{d}{60} + \\dfrac{d}{40} = \\dfrac{2d}{120} + \\dfrac{3d}{120} = \\dfrac{5d}{120} = \\dfrac{d}{24}$.",
          "Average speed $= \\dfrac{\\text{total distance}}{\\text{total time}} = \\dfrac{2d}{d/24} = 2d \\times \\dfrac{24}{d} = 48$ mph.",
        ],
        answer:
          "The average speed for the round trip is $48$ mph. (Note: the average speed is not simply $\\frac{60+40}{2} = 50$ mph — because more time is spent at the slower speed.)",
      },
      {
        prompt:
          "A jacket originally priced at $\\$120$ is marked down by $25\\%$. A week later, the sale price is increased by $10\\%$. What is the final price?",
        steps: [
          "Find the price after the $25\\%$ markdown: $120 \\times (1 - 0.25) = 120 \\times 0.75 = \\$90$.",
          "Apply the $10\\%$ increase to the sale price: $90 \\times (1 + 0.10) = 90 \\times 1.10 = \\$99$.",
          "Note: the $10\\%$ increase is applied to $\\$90$, not to the original $\\$120$.",
        ],
        answer: "The final price of the jacket is $\\$99$.",
      },
    ],
    orderIndex: 18,
  },
];
