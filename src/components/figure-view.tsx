"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartFigure, FigureSpec, TableFigure } from "@/lib/figures";
import { cn } from "@/lib/utils";

// Series colors reuse the themed chart palette from globals.css so figures
// stay legible in both light and dark mode.
const SERIES_COLORS = [
  "hsl(var(--chart-english))",
  "hsl(var(--chart-math))",
  "hsl(var(--chart-reading))",
  "hsl(var(--chart-science))",
  "hsl(var(--chart-composite))",
];

function axisLabel(axis: { label: string; unit?: string }): string {
  return axis.unit ? `${axis.label} (${axis.unit})` : axis.label;
}

function TableView({ figure }: { figure: TableFigure }) {
  return (
    <figure className="my-4">
      <figcaption className="mb-1 text-xs font-semibold">
        {figure.label}
        {figure.caption ? `. ${figure.caption}` : ""}
      </figcaption>
      <div className="overflow-x-auto rounded-md border">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-muted">
              {figure.columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "border-b px-2 py-1 font-semibold",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center",
                    (!col.align || col.align === "left") && "text-left"
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {figure.rows.map((row, i) => (
              <tr key={i} className="even:bg-muted/40">
                {figure.columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-2 py-1 tabular-nums",
                      col.align === "right" && "text-right",
                      col.align === "center" && "text-center"
                    )}
                  >
                    {row[col.key] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {figure.footnote && (
        <p className="mt-1 text-[11px] text-muted-foreground">{figure.footnote}</p>
      )}
    </figure>
  );
}

// Merge per-series point arrays into one recharts-friendly array keyed by the
// x value, so multi-series line/bar charts align on a shared x axis.
function mergeSeriesData(figure: ChartFigure): Record<string, number | string>[] {
  const xKey = figure.xAxis.dataKey;
  const byX = new Map<number | string, Record<string, number | string>>();
  for (const s of figure.series) {
    for (const point of s.data) {
      const x = point[xKey];
      const row = byX.get(x) ?? { [xKey]: x };
      row[s.dataKey] = point[s.dataKey];
      byX.set(x, row);
    }
  }
  return [...byX.values()];
}

function ChartView({ figure }: { figure: ChartFigure }) {
  const xType = figure.xAxis.type ?? (figure.chartType === "bar" ? "category" : "number");
  const showLegend = figure.legend ?? figure.series.length > 1;

  const xAxisEl = (
    <XAxis
      dataKey={figure.xAxis.dataKey}
      type={xType}
      domain={figure.xAxis.domain ?? (xType === "number" ? ["auto", "auto"] : undefined)}
      stroke="currentColor"
      className="text-xs text-muted-foreground"
      tick={{ fontSize: 11 }}
      label={{
        value: axisLabel(figure.xAxis),
        position: "insideBottom",
        offset: -4,
        fontSize: 11,
      }}
    />
  );
  const yAxisEl = (
    <YAxis
      type="number"
      // Scatter charts read the y value from the YAxis dataKey (all scatter
      // series share one y field by convention).
      dataKey={figure.chartType === "scatter" ? figure.series[0]?.dataKey : undefined}
      domain={figure.yAxis.domain ?? ["auto", "auto"]}
      stroke="currentColor"
      className="text-xs text-muted-foreground"
      tick={{ fontSize: 11 }}
      width={44}
      label={{
        value: axisLabel(figure.yAxis),
        angle: -90,
        position: "insideLeft",
        offset: 8,
        fontSize: 11,
      }}
    />
  );
  const gridEl = <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />;
  const tooltipEl = (
    <Tooltip
      contentStyle={{
        backgroundColor: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "0.5rem",
        fontSize: "0.75rem",
      }}
      labelStyle={{ color: "hsl(var(--card-foreground))", fontWeight: 600 }}
    />
  );
  const legendEl = showLegend ? <Legend wrapperStyle={{ fontSize: 11 }} /> : null;
  const margin = { top: 8, right: 12, left: 8, bottom: 12 };

  let chart: React.ReactElement;
  if (figure.chartType === "line") {
    chart = (
      <LineChart data={mergeSeriesData(figure)} margin={margin}>
        {gridEl}
        {xAxisEl}
        {yAxisEl}
        {tooltipEl}
        {legendEl}
        {figure.series.map((s, i) => (
          <Line
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={SERIES_COLORS[i % SERIES_COLORS.length]}
            strokeWidth={2}
            dot={{ r: 2.5 }}
          />
        ))}
      </LineChart>
    );
  } else if (figure.chartType === "bar") {
    chart = (
      <BarChart data={mergeSeriesData(figure)} margin={margin}>
        {gridEl}
        {xAxisEl}
        {yAxisEl}
        {tooltipEl}
        {legendEl}
        {figure.series.map((s, i) => (
          <Bar
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            fill={SERIES_COLORS[i % SERIES_COLORS.length]}
          />
        ))}
      </BarChart>
    );
  } else {
    chart = (
      <ScatterChart margin={margin}>
        {gridEl}
        {xAxisEl}
        {yAxisEl}
        {tooltipEl}
        {legendEl}
        {figure.series.map((s, i) => (
          <Scatter
            key={s.dataKey}
            name={s.name}
            data={s.data}
            fill={SERIES_COLORS[i % SERIES_COLORS.length]}
          />
        ))}
      </ScatterChart>
    );
  }

  return (
    <figure className="my-4">
      <figcaption className="mb-1 text-xs font-semibold">
        {figure.label}
        {figure.caption ? `. ${figure.caption}` : ""}
      </figcaption>
      <div className="h-64 w-full rounded-md border bg-card p-2">
        <ResponsiveContainer width="100%" height="100%">
          {chart}
        </ResponsiveContainer>
      </div>
    </figure>
  );
}

export function FigureView({ figure }: { figure: FigureSpec }) {
  if (figure.kind === "table") return <TableView figure={figure} />;
  return <ChartView figure={figure} />;
}
