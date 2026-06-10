"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TrendPoint } from "@/lib/scoring";

const SECTION_LINES: Array<{ key: keyof TrendPoint; label: string; color: string; width: number }> = [
  { key: "composite", label: "Composite (est.)", color: "hsl(var(--chart-composite))", width: 2.5 },
  { key: "english", label: "English (est.)", color: "hsl(var(--chart-english))", width: 1 },
  { key: "math", label: "Math (est.)", color: "hsl(var(--chart-math))", width: 1 },
  { key: "reading", label: "Reading (est.)", color: "hsl(var(--chart-reading))", width: 1 },
  { key: "science", label: "Science (est.)", color: "hsl(var(--chart-science))", width: 1 },
];

export function ProjectionTrendChart({ data }: { data: TrendPoint[] }) {
  if (data.length === 0 || data.every((d) => d.composite === null)) {
    return (
      <p className="text-sm text-muted-foreground">
        Not enough practice history yet to chart a trend. Continue practicing — the chart will
        appear once there are enough attempts across all four sections.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {SECTION_LINES.map((l) => (
          <div key={l.key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className="inline-block rounded-sm"
              style={{
                width: 20,
                height: l.width > 1 ? 3 : 2,
                backgroundColor: l.color,
              }}
            />
            {l.label}
          </div>
        ))}
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
            <XAxis
              dataKey="date"
              tickFormatter={(s: string) => s.slice(5)}
              stroke="currentColor"
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 11 }}
            />
            <YAxis
              domain={[1, 36]}
              stroke="currentColor"
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 11 }}
              width={28}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                fontSize: "0.75rem",
              }}
              labelStyle={{ color: "hsl(var(--card-foreground))", fontWeight: 600 }}
              formatter={(value: number | string, name: string) => [value, `${name} (projected est.)`]}
            />
            {SECTION_LINES.map((l) => (
              <Line
                key={l.key}
                type="monotone"
                dataKey={l.key}
                name={l.label.replace(" (est.)", "")}
                stroke={l.color}
                strokeWidth={l.width}
                dot={false}
                connectNulls={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-muted-foreground">
        All scores shown are <strong>projected estimates</strong> derived from practice activity
        — not official ACT scores.
      </p>
    </div>
  );
}
