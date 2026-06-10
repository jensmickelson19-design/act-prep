/**
 * MathMarkdown — renders lesson Markdown with GFM + KaTeX math support.
 *
 * Stack:
 *   - react-markdown   for parsing / rendering Markdown → React elements
 *   - remark-gfm       for GitHub-Flavored Markdown (tables, task lists, etc.)
 *   - remark-math      for $...$ / $$...$$ → math nodes in the mdast
 *   - rehype-katex     for rendering math nodes to KaTeX HTML via rehype
 *
 * The component wraps output in the `prose prose-lesson` typography preset
 * defined in design-system-spec.md §2.4, combined with `dark:prose-invert`
 * and `max-w-none` (the lesson page controls its own width constraint).
 *
 * KaTeX CSS is imported once globally (globals.css) — not here.
 */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { cn } from "@/lib/utils";

export interface MathMarkdownProps {
  /** Raw Markdown string, may include $...$ / $$...$$ math. */
  children: string;
  /** Extra classes appended to the prose wrapper. */
  className?: string;
}

export function MathMarkdown({ children, className }: MathMarkdownProps): JSX.Element {
  return (
    <div className={cn("prose prose-lesson dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
