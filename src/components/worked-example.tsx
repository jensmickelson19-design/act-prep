/**
 * WorkedExample — renders one WorkedExample in a textbook-style callout box.
 *
 * Layout (inside the callout-example tinted box):
 *   - "Example" eyebrow label
 *   - Prompt (MathText)
 *   - Numbered solution steps (MathText each)
 *   - Final answer in a highlighted answer band
 *
 * Token usage (design-system-spec.md §1.3):
 *   - Box bg:           bg-callout-example      (hsl(var(--callout-example)))
 *   - Left border rule: border-l-4 border-callout-example-border
 *   - Answer band:      bg-primary/10 text-primary  (navy tint — print textbook feel)
 *
 * Every text field that may contain math is rendered through <MathText>.
 */

import { MathText } from "@/components/math-text";
import { cn } from "@/lib/utils";

export interface WorkedExampleData {
  prompt: string;
  steps: string[];
  answer: string;
}

export interface WorkedExampleProps {
  example: WorkedExampleData;
  /** 1-based ordinal shown in the eyebrow (e.g. "Example 1"). */
  index?: number;
  className?: string;
}

export function WorkedExample({ example, index, className }: WorkedExampleProps): JSX.Element {
  const { prompt, steps, answer } = example;

  return (
    <div
      className={cn(
        // callout-example token: cool blue tint bg + left accent border
        "rounded-r-md border-l-4 border-callout-example-border bg-callout-example px-6 py-5",
        className
      )}
      role="region"
      aria-label={index !== undefined ? `Example ${index}` : "Worked example"}
    >
      {/* Eyebrow */}
      <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {index !== undefined ? `Example ${index}` : "Example"}
      </p>

      {/* Prompt */}
      <div className="mb-4 font-serif text-[1.0625rem] leading-[1.7] text-foreground">
        <MathText>{prompt}</MathText>
      </div>

      {/* Solution steps */}
      {steps.length > 0 && (
        <ol className="mb-4 space-y-2 pl-0">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-3 font-serif text-[1.0625rem] leading-[1.7] text-foreground"
            >
              {/* Step counter — sans, tabular-nums, muted */}
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 font-sans text-[0.6875rem] font-semibold tabular-nums text-primary"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span>
                <MathText>{step}</MathText>
              </span>
            </li>
          ))}
        </ol>
      )}

      {/* Answer band */}
      <div className="rounded-md bg-primary/10 px-4 py-3">
        <span className="mr-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-primary">
          Answer:
        </span>
        <span className="font-serif text-[1.0625rem] font-semibold leading-[1.7] text-primary">
          <MathText>{answer}</MathText>
        </span>
      </div>
    </div>
  );
}
