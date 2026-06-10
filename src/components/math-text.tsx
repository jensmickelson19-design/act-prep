/**
 * MathText — renders a string that may contain inline $...$ or display $$...$$ math.
 *
 * Splitting strategy:
 *   1. Split on $$...$$ (display math) first, producing an array of alternating
 *      plain-text / display-math segments.
 *   2. Within each plain segment, split on $...$ (inline math), producing further
 *      alternating plain / inline-math segments.
 *
 * Each resulting segment is rendered as:
 *   - Plain text  → a React text node (via a <span>).
 *   - Inline math → <InlineMath> from react-katex.
 *   - Display math → <BlockMath> from react-katex, wrapped in a block <div>.
 *
 * NOTE: react-katex renders KaTeX synchronously; KaTeX CSS is imported globally.
 */

import * as React from "react";
import { InlineMath, BlockMath } from "react-katex";

// ─── helpers ─────────────────────────────────────────────────────────────────

type Segment =
  | { kind: "text"; value: string }
  | { kind: "inline"; value: string }
  | { kind: "block"; value: string };

/**
 * Split a raw string into an ordered array of Segments.
 * Display math ($$...$$) is matched before inline math ($...$) to avoid
 * treating the opening $$ as two consecutive inline delimiters.
 */
function parseSegments(raw: string): Segment[] {
  const result: Segment[] = [];

  // First pass: split on $$...$$
  const displayParts = raw.split(/\$\$([\s\S]*?)\$\$/g);
  // split with a capturing group → [plain, math, plain, math, …]

  displayParts.forEach((part, i) => {
    if (i % 2 === 1) {
      // Odd indices are display-math captures
      result.push({ kind: "block", value: part });
    } else {
      // Even indices are plain text (possibly containing inline math)
      const inlineParts = part.split(/\$(.*?)\$/g);
      inlineParts.forEach((ip, j) => {
        if (j % 2 === 1) {
          result.push({ kind: "inline", value: ip });
        } else if (ip.length > 0) {
          result.push({ kind: "text", value: ip });
        }
      });
    }
  });

  return result;
}

// ─── component ───────────────────────────────────────────────────────────────

export interface MathTextProps {
  /** The raw string, possibly containing $...$ / $$...$$ delimiters. */
  children: string;
  /** Extra classes on the outermost wrapper. */
  className?: string;
}

/**
 * Renders a mixed math+text string inline. The wrapper is a <span> so the
 * component can sit inside prose text without introducing a block break —
 * unless display math is present, in which case BlockMath itself is a block.
 */
export function MathText({ children, className }: MathTextProps): JSX.Element {
  const segments = parseSegments(children);

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        switch (seg.kind) {
          case "block":
            return <BlockMath key={idx} math={seg.value} />;
          case "inline":
            return <InlineMath key={idx} math={seg.value} />;
          case "text":
          default:
            return <React.Fragment key={idx}>{seg.value}</React.Fragment>;
        }
      })}
    </span>
  );
}
