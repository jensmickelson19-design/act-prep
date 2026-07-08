// Structured figure specs for passages and questions. Stored as JSON on
// Passage.figures / Question.figures and rendered by <FigureView>
// (src/components/figure-view.tsx). Passage bodies place figures inline with
// a {{figure:id}} marker on its own line; question-level figures render
// between the prompt and the choices without markers.

export type TableFigure = {
  kind: "table";
  /** Referenced by {{figure:id}} markers, e.g. "t1". */
  id: string;
  /** Display label, e.g. "Table 1". */
  label: string;
  caption?: string;
  columns: { key: string; header: string; align?: "left" | "right" | "center" }[];
  rows: Record<string, string | number>[];
  footnote?: string;
};

export type ChartFigure = {
  kind: "chart";
  /** Referenced by {{figure:id}} markers, e.g. "f1". */
  id: string;
  /** Display label, e.g. "Figure 1". */
  label: string;
  caption?: string;
  chartType: "line" | "bar" | "scatter";
  xAxis: {
    label: string;
    unit?: string;
    /** Key into each series datum holding the x value. */
    dataKey: string;
    type?: "number" | "category";
    domain?: [number, number];
  };
  yAxis: {
    label: string;
    unit?: string;
    domain?: [number, number];
  };
  /** One entry per plotted series; `dataKey` is the y-value key in `data`. */
  series: {
    name: string;
    dataKey: string;
    data: Record<string, number | string>[];
  }[];
  legend?: boolean;
};

export type FigureSpec = TableFigure | ChartFigure;

/** Parse a Prisma Json value into FigureSpec[] (null/undefined → []). */
export function asFigures(value: unknown): FigureSpec[] {
  if (!Array.isArray(value)) return [];
  return value as FigureSpec[];
}
