"use client";

import { Fragment } from "react";
import { PassageView } from "@/components/passage-view";
import { FigureView } from "@/components/figure-view";
import type { FigureSpec } from "@/lib/figures";
import { cn } from "@/lib/utils";

// Renders a passage body that may contain two marker syntaxes:
//
//   {{figure:ID}}            — on its own line; renders the FigureSpec with
//                              that id from `figures` at this position.
//   [[n]]underlined text[[/n]] — an ACT English numbered underlined portion;
//                              renders as an underlined span with a leading
//                              superscript number. When `activeMarker` equals
//                              n, the span is highlighted so the student can
//                              see which portion the current question targets.
//
// Segments between markers render through PassageView (GFM + KaTeX).
// Authoring convention: underlined spans are plain prose (no markdown/math
// inside them); figure markers sit on their own line.

const FIGURE_RE = /\{\{figure:([\w-]+)\}\}/g;
const UNDERLINE_RE = /\[\[(\d+)\]\]([\s\S]*?)\[\[\/\1\]\]/g;

type Chunk =
  | { type: "markdown"; text: string }
  | { type: "figure"; id: string }
  | { type: "underline"; n: number; text: string };

function splitBody(body: string): Chunk[] {
  // First pass: split on figure markers.
  const chunks: Chunk[] = [];
  let last = 0;
  for (const m of body.matchAll(FIGURE_RE)) {
    if (m.index! > last) chunks.push({ type: "markdown", text: body.slice(last, m.index) });
    chunks.push({ type: "figure", id: m[1] });
    last = m.index! + m[0].length;
  }
  if (last < body.length) chunks.push({ type: "markdown", text: body.slice(last) });

  // Second pass: split markdown chunks on underline markers.
  const result: Chunk[] = [];
  for (const chunk of chunks) {
    if (chunk.type !== "markdown") {
      result.push(chunk);
      continue;
    }
    let idx = 0;
    for (const m of chunk.text.matchAll(UNDERLINE_RE)) {
      if (m.index! > idx) result.push({ type: "markdown", text: chunk.text.slice(idx, m.index) });
      result.push({ type: "underline", n: Number(m[1]), text: m[2] });
      idx = m.index! + m[0].length;
    }
    if (idx < chunk.text.length) result.push({ type: "markdown", text: chunk.text.slice(idx) });
  }
  return result;
}

// A markdown segment that is interrupted mid-paragraph by underline spans
// must flow inline with its neighbors. We render consecutive
// markdown/underline chunks into "flow groups": a group containing any
// underline renders as one paragraph-flow block with inline markdown-free
// text; a pure-markdown group renders through PassageView.
type FlowGroup =
  | { type: "prose"; text: string }
  | { type: "flow"; parts: Chunk[] }
  | { type: "figure"; id: string };

function groupChunks(chunks: Chunk[]): FlowGroup[] {
  const groups: FlowGroup[] = [];
  let buffer: Chunk[] = [];

  const flush = () => {
    if (buffer.length === 0) return;
    if (buffer.some((c) => c.type === "underline")) {
      groups.push({ type: "flow", parts: buffer });
    } else {
      groups.push({
        type: "prose",
        text: buffer.map((c) => (c.type === "markdown" ? c.text : "")).join(""),
      });
    }
    buffer = [];
  };

  for (const chunk of chunks) {
    if (chunk.type === "figure") {
      flush();
      groups.push({ type: "figure", id: chunk.id });
    } else {
      buffer.push(chunk);
    }
  }
  flush();
  return groups;
}

function UnderlineSpan({
  n,
  text,
  active,
}: {
  n: number;
  text: string;
  active: boolean;
}) {
  return (
    <span
      className={cn(
        "underline decoration-2 underline-offset-2",
        active && "rounded bg-primary/10 px-0.5"
      )}
    >
      <sup className="mr-0.5 font-bold">{n}</sup>
      {text}
    </span>
  );
}

export function PassageBody({
  body,
  figures,
  activeMarker,
  className,
}: {
  body: string;
  figures?: FigureSpec[] | null;
  activeMarker?: number | null;
  className?: string;
}) {
  const figureById = new Map((figures ?? []).map((f) => [f.id, f]));
  const groups = groupChunks(splitBody(body));

  return (
    <div className={className}>
      {groups.map((group, i) => {
        if (group.type === "figure") {
          const spec = figureById.get(group.id);
          if (!spec) {
            if (process.env.NODE_ENV === "development") {
              console.warn(`PassageBody: unknown figure id "${group.id}"`);
            }
            return null;
          }
          return <FigureView key={i} figure={spec} />;
        }
        if (group.type === "prose") {
          return <PassageView key={i} body={group.text} />;
        }
        // Flow group: prose interleaved with underlined spans. Render as
        // whitespace-preserving text so paragraph breaks in the source
        // survive without markdown processing.
        return (
          <div key={i} className="whitespace-pre-line text-sm leading-relaxed">
            {group.parts.map((part, j) => (
              <Fragment key={j}>
                {part.type === "underline" ? (
                  <UnderlineSpan
                    n={part.n}
                    text={part.text}
                    active={activeMarker != null && part.n === activeMarker}
                  />
                ) : part.type === "markdown" ? (
                  part.text
                ) : null}
              </Fragment>
            ))}
          </div>
        );
      })}
    </div>
  );
}
