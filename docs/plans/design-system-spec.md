# Design System Spec — Academic / Editorial

**Owner:** `design-system` teammate · **Phase:** 3 (UI overhaul)
**Status:** SPEC — awaiting lead approval. No source files changed yet.
**Aesthetic (LOCKED):** Academic / Editorial — serif display headings + lesson body, navy
+ warm-neutral (cream / stone) palette, one scholarly accent (warm ochre/gold), refined
"textbook" feel with light tinted callout boxes and worked-example layouts.

This document is the contract for the later implementation phase. Section 5 (AppShell API)
is **FROZEN once approved** — feature teammates build against it.

---

## 0. Design principles

- **Credible, not flashy.** Print/textbook restraint: generous whitespace, hairline rules,
  low-saturation color, type doing the heavy lifting.
- **Two-typeface system.** Serif for anything "content" (page titles, section headings,
  lesson prose, worked examples). Sans for anything "interface" (buttons, labels, nav,
  table data, stat numbers, form fields).
- **Navy is the ink.** `--primary` and `--foreground` are deep navy, never pure black.
  Backgrounds are warm cream/stone, never pure white.
- **One accent only.** A warm ochre/gold `--accent` used sparingly: active nav, key CTAs'
  focus, callout box accents. Never used for large fills.
- **Token names are immutable.** Every CSS variable currently in `globals.css` keeps its
  exact name so no existing component breaks. We only re-value them and ADD new ones.

---

## 1. Color tokens

All values are HSL channels (the `H S% L%` triplet, no `hsl()` wrapper) so they slot into
the existing `hsl(var(--x))` pattern in `tailwind.config.ts`.

### 1.1 Existing tokens — re-valued (names UNCHANGED)

#### `:root` (light mode — "warm paper")

| Variable | New value | Role |
|---|---|---|
| `--background` | `38 30% 97%` | Warm cream page background |
| `--foreground` | `222 30% 14%` | Deep navy "ink" body text |
| `--card` | `40 33% 99%` | Near-white warm card surface (lifts off cream bg) |
| `--card-foreground` | `222 30% 14%` | Navy ink on cards |
| `--primary` | `222 47% 20%` | Deep navy — primary buttons, headings emphasis |
| `--primary-foreground` | `40 33% 98%` | Cream text on navy |
| `--secondary` | `36 22% 92%` | Warm stone — secondary buttons, subtle fills |
| `--secondary-foreground` | `222 35% 22%` | Navy text on stone |
| `--muted` | `36 20% 93%` | Warm stone — muted fills, track backgrounds |
| `--muted-foreground` | `222 12% 42%` | Desaturated slate — captions, helper text |
| `--accent` | `38 60% 47%` | Scholarly ochre/gold — active states, highlights |
| `--accent-foreground` | `40 33% 98%` | Cream text on ochre |
| `--destructive` | `4 64% 44%` | Muted scholarly red (not neon) |
| `--destructive-foreground` | `40 33% 98%` | Cream text on red |
| `--border` | `36 18% 86%` | Warm hairline rule |
| `--input` | `36 18% 84%` | Slightly darker border for form fields |
| `--ring` | `38 60% 47%` | Focus ring = ochre accent |
| `--radius` | `0.375rem` | See §3 |

> **Note on `--accent`:** today `--accent` is a near-grey used by `button` ghost/outline
> hover and shadcn primitives as a neutral hover fill. Re-coloring it to ochre would make
> every ghost-hover gold. To avoid that, see §1.3 — we add `--hover` for neutral hover and
> repoint primitives to it, keeping `--accent` as the true brand accent. `--accent` /
> `--accent-foreground` remain valid tokens; existing components keep compiling.

#### `.dark` (dark mode — "lamp-lit study")

| Variable | New value | Role |
|---|---|---|
| `--background` | `222 30% 9%` | Deep navy-charcoal page background |
| `--foreground` | `40 25% 92%` | Warm off-white ink |
| `--card` | `222 28% 12%` | Raised navy card surface |
| `--card-foreground` | `40 25% 92%` | Warm off-white on cards |
| `--primary` | `40 30% 90%` | Warm paper (inverts: light primary on dark) |
| `--primary-foreground` | `222 47% 14%` | Navy text on light primary |
| `--secondary` | `222 22% 18%` | Muted navy — secondary buttons |
| `--secondary-foreground` | `40 25% 92%` | Off-white on secondary |
| `--muted` | `222 20% 17%` | Muted navy — fills, track backgrounds |
| `--muted-foreground` | `222 12% 62%` | Desaturated slate — captions |
| `--accent` | `38 62% 56%` | Brighter ochre for dark-mode contrast |
| `--accent-foreground` | `222 47% 12%` | Navy text on ochre |
| `--destructive` | `4 58% 52%` | Muted red, lifted for dark contrast |
| `--destructive-foreground` | `40 25% 95%` | Off-white on red |
| `--border` | `222 18% 22%` | Low-contrast navy hairline |
| `--input` | `222 18% 26%` | Slightly lighter form border |
| `--ring` | `38 62% 56%` | Focus ring = ochre accent |

### 1.2 New chart-series tokens (ADD to both `:root` and `.dark`)

These let `projection-trend-chart.tsx` stop hardcoding `#60a5fa` etc. Defined as full
`hsl(...)` strings (charts can consume them directly via `var()`), exposed in Tailwind as
the `chart` color group (see §1.4).

| Variable | Light value | Dark value | Series |
|---|---|---|---|
| `--chart-composite` | `222 47% 20%` | `40 30% 90%` | Composite (matches `--primary`) |
| `--chart-english` | `211 60% 42%` | `211 70% 64%` | English — scholarly blue |
| `--chart-math` | `38 60% 45%` | `38 65% 58%` | Math — ochre/gold |
| `--chart-reading` | `158 42% 34%` | `158 48% 50%` | Reading — forest green |
| `--chart-science` | `265 38% 46%` | `265 48% 64%` | Science — muted plum |
| `--chart-grid` | `36 18% 86%` | `222 18% 22%` | Gridlines (matches `--border`) |

`projection-trend-chart.tsx` should use `hsl(var(--chart-composite))` etc. instead of hex.
(That file is NOT owned by this team — the implementing teammate updates it; we only
provide the tokens.)

### 1.3 New semantic tokens (ADD to both modes)

| Variable | Light value | Dark value | Role |
|---|---|---|---|
| `--hover` | `36 24% 90%` | `222 22% 20%` | Neutral hover fill for ghost/outline buttons, nav, list rows. Repoint button `ghost`/`outline` hover from `accent` to this. |
| `--hover-foreground` | `222 35% 22%` | `40 25% 92%` | Text color on neutral hover |
| `--success` | `158 42% 34%` | `158 48% 50%` | Positive deltas, "on track" status |
| `--success-foreground` | `40 33% 98%` | `222 47% 12%` | Text on success |
| `--warning` | `38 70% 44%` | `38 72% 56%` | "Needs attention", caution callouts |
| `--warning-foreground` | `222 47% 14%` | `222 47% 12%` | Text on warning |
| `--info` | `211 60% 42%` | `211 70% 64%` | Informational callouts |
| `--info-foreground` | `40 33% 98%` | `222 47% 12%` | Text on info |

**Callout / tinted-box tokens** (the textbook "light tinted box" — tints are the semantic
hue at very high lightness):

| Variable | Light value | Dark value | Role |
|---|---|---|---|
| `--callout-note` | `38 44% 92%` | `38 30% 18%` | Default note box bg (warm ochre tint) |
| `--callout-note-border` | `38 50% 78%` | `38 35% 32%` | Note box left rule |
| `--callout-tip` | `158 36% 91%` | `158 28% 16%` | Tip / "remember" box bg |
| `--callout-tip-border` | `158 38% 72%` | `158 30% 30%` | Tip box left rule |
| `--callout-warn` | `38 80% 90%` | `38 40% 18%` | Warning box bg |
| `--callout-warn-border` | `38 76% 70%` | `38 44% 34%` | Warning box left rule |
| `--callout-example` | `211 48% 93%` | `211 30% 16%` | Worked-example box bg (cool blue tint) |
| `--callout-example-border` | `211 46% 76%` | `211 32% 32%` | Worked-example box left rule |

### 1.4 `tailwind.config.ts` color additions

Add to `theme.extend.colors` (existing entries unchanged). New groups:

```ts
hover: {
  DEFAULT: "hsl(var(--hover))",
  foreground: "hsl(var(--hover-foreground))",
},
success: {
  DEFAULT: "hsl(var(--success))",
  foreground: "hsl(var(--success-foreground))",
},
warning: {
  DEFAULT: "hsl(var(--warning))",
  foreground: "hsl(var(--warning-foreground))",
},
info: {
  DEFAULT: "hsl(var(--info))",
  foreground: "hsl(var(--info-foreground))",
},
chart: {
  composite: "hsl(var(--chart-composite))",
  english:   "hsl(var(--chart-english))",
  math:      "hsl(var(--chart-math))",
  reading:   "hsl(var(--chart-reading))",
  science:   "hsl(var(--chart-science))",
  grid:      "hsl(var(--chart-grid))",
},
callout: {
  note:    "hsl(var(--callout-note))",
  "note-border":    "hsl(var(--callout-note-border))",
  tip:     "hsl(var(--callout-tip))",
  "tip-border":     "hsl(var(--callout-tip-border))",
  warn:    "hsl(var(--callout-warn))",
  "warn-border":    "hsl(var(--callout-warn-border))",
  example: "hsl(var(--callout-example))",
  "example-border": "hsl(var(--callout-example-border))",
},
```

---

## 2. Typography

### 2.1 Fonts (next/font/google, loaded in `src/app/layout.tsx`)

| Role | Font | Why |
|---|---|---|
| Serif (display + lesson body) | **Source Serif 4** | Modern transitional serif designed for screen text; full weight range (400–700), excellent at both 32px headings and 17px lesson prose. Reads as a credible textbook. |
| Sans (UI) | **Inter** | Neutral, high-legibility UI sans; tabular numerals (important for the many score / stat displays). |

Both are variable Google fonts — no extra weight files needed.

`layout.tsx` (fonts-only change — this team owns layout.tsx for fonts):

```ts
import { Inter, Source_Serif_4 } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
```

Apply both variable classes on `<html>` (or `<body>`); keep `font-sans antialiased` on
`<body>`:

```tsx
<html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
  <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
</html>
```

### 2.2 `tailwind.config.ts` fontFamily

Add to `theme.extend`:

```ts
fontFamily: {
  sans:  ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
  serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
},
```

This makes `font-sans` (the body default) resolve to Inter and `font-serif` resolve to
Source Serif 4. Existing `font-sans` usages keep working.

### 2.3 Type scale & usage rules

| Element | Classes | Notes |
|---|---|---|
| Page title (h1) | `font-serif text-3xl md:text-4xl font-semibold tracking-tight` | Serif. The signature editorial move. |
| Section heading (h2) | `font-serif text-xl md:text-2xl font-semibold tracking-tight` | Serif. |
| Eyebrow / kicker | `font-sans text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground` | Sans. Replaces the current `uppercase tracking-wide` section labels. |
| Card title | `font-serif text-lg font-semibold tracking-tight` | Restyled in `CardTitle`, see §4. |
| Body / UI text | `font-sans text-sm` | Default. |
| Lesson prose | `font-serif text-[1.0625rem] leading-[1.7]` | 17px serif for long-form lesson reading. Delivered via the `prose-lesson` typography preset (§2.4). |
| Stat / score numbers | `font-sans tabular-nums font-semibold` | Always sans + tabular for alignment. |
| Helper / caption | `font-sans text-xs text-muted-foreground` | |

> No global element-level overrides in `globals.css` beyond `body`. Headings get serif by
> explicit class (or via the `prose-lesson` preset), so non-lesson UI text stays sans.

### 2.4 `@tailwindcss/typography` preset

`@tailwindcss/typography` is already a plugin. Add a `typography` key under
`theme.extend` defining a `lesson` modifier so lesson content renders as `prose
prose-lesson`:

```ts
typography: {
  lesson: {
    css: {
      "--tw-prose-body": "hsl(var(--foreground))",
      "--tw-prose-headings": "hsl(var(--primary))",
      "--tw-prose-links": "hsl(var(--accent))",
      "--tw-prose-bold": "hsl(var(--foreground))",
      "--tw-prose-counters": "hsl(var(--muted-foreground))",
      "--tw-prose-bullets": "hsl(var(--border))",
      "--tw-prose-hr": "hsl(var(--border))",
      "--tw-prose-quotes": "hsl(var(--muted-foreground))",
      "--tw-prose-quote-borders": "hsl(var(--accent))",
      "--tw-prose-code": "hsl(var(--foreground))",
      "--tw-prose-pre-bg": "hsl(var(--muted))",
      fontFamily: "var(--font-serif)",
      fontSize: "1.0625rem",
      lineHeight: "1.7",
      h1: { fontFamily: "var(--font-serif)" },
      h2: { fontFamily: "var(--font-serif)" },
      h3: { fontFamily: "var(--font-serif)" },
    },
  },
},
```

Lesson pages (owned by lesson teammates) use `className="prose prose-lesson dark:prose-invert max-w-none"`.
KaTeX styling (already-installed `katex` CSS) is imported once in `globals.css`:
`@import "katex/dist/katex.min.css";` at the very top, before `@tailwind`.

---

## 3. Radius, shadow, spacing

### 3.1 Radius

`--radius: 0.375rem` (down from `0.5rem`). The editorial look wants crisper, less "app-y"
corners. The existing derived scale in `tailwind.config.ts` stays:

- `lg` = `var(--radius)` = 6px
- `md` = `calc(var(--radius) - 2px)` = 4px
- `sm` = `calc(var(--radius) - 4px)` = 2px

Add one larger step for full-bleed panels/dialogs:

```ts
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
  xl: "calc(var(--radius) + 4px)", // dialogs, hero panels
},
```

### 3.2 Shadows / elevation

Editorial = mostly flat with hairline borders. Shadows are soft, low, warm-tinted (navy
not grey). Define as `boxShadow` in `tailwind.config.ts` `theme.extend`:

```ts
boxShadow: {
  // soft resting elevation for cards
  sm: "0 1px 2px 0 hsl(222 47% 20% / 0.04)",
  DEFAULT: "0 1px 3px 0 hsl(222 47% 20% / 0.06), 0 1px 2px -1px hsl(222 47% 20% / 0.05)",
  md: "0 4px 12px -2px hsl(222 47% 20% / 0.08), 0 2px 6px -2px hsl(222 47% 20% / 0.05)",
  // raised: dropdowns, popovers, dialogs
  lg: "0 12px 28px -6px hsl(222 47% 20% / 0.16), 0 4px 10px -4px hsl(222 47% 20% / 0.10)",
},
```

Usage: `Card` uses `shadow-sm` at rest. Dialog/Select/Popover content use `shadow-lg`.
Default to **border-first, shadow-second** — most surfaces get a `border` and only a
whisper of `shadow-sm`.

### 3.3 Container & spacing

Container settings change to support a roomier editorial measure:

```ts
container: {
  center: true,
  padding: { DEFAULT: "1.5rem", sm: "2rem", lg: "2.5rem" },
  screens: { "2xl": "1280px" }, // narrower than 1400 — editorial measure
},
```

Add a content-width utility expectation (no plugin needed — pages use it as a class):
lesson/reading content should cap at `max-w-[68ch]` for comfortable line length. App
dashboards keep `container`.

Vertical rhythm convention (documented for feature teams, not enforced in CSS):
page sections separated by `space-y-8`; inside a section, `space-y-4`; inside a card,
`space-y-3`.

---

## 4. UI primitives

All primitives follow the existing shadcn + `class-variance-authority` pattern, use
`cn()` from `@/lib/utils`, `React.forwardRef`, and live in `src/components/ui/`. Each new
file is a standard shadcn component for the noted Radix package.

### 4.1 RESTYLE — existing primitives

#### `button.tsx`
Keep `ButtonProps`, `buttonVariants` exports and the `asChild`/`Slot` pattern. Changes:

- Base: add `font-sans`, keep `rounded-md`. Add subtle press feedback:
  `active:translate-y-px transition-[color,background-color,box-shadow,transform]`.
- Variants:
  - `default`: `bg-primary text-primary-foreground shadow-sm hover:bg-primary/90` (unchanged logic, gains `shadow-sm`).
  - `destructive`: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`.
  - `outline`: `border border-input bg-card hover:bg-hover hover:text-hover-foreground` — **hover repointed from `accent` to `hover`** (see §1.3).
  - `secondary`: `bg-secondary text-secondary-foreground hover:bg-secondary/80`.
  - `ghost`: `hover:bg-hover hover:text-hover-foreground` — **hover repointed to `hover`**.
  - `link`: `text-accent underline-offset-4 hover:underline` (link color = ochre accent).
  - ADD `accentSolid`: `bg-accent text-accent-foreground shadow-sm hover:bg-accent/90` — the one high-emphasis brand CTA (e.g. "Start practice test").
- Sizes: keep `default` (h-10), `sm` (h-9), `lg` (h-11), `icon` (h-10 w-10). ADD `xl`: `h-12 rounded-md px-10 text-base` for hero CTAs.

#### `card.tsx`
Keep all six exports (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`,
`CardFooter`). Changes:

- `Card`: `rounded-lg border bg-card text-card-foreground shadow-sm` — unchanged structurally; gains the warm new `shadow-sm`/`border` tokens automatically.
- `CardTitle`: change to `font-serif text-lg font-semibold leading-snug tracking-tight` (was `text-2xl` sans). Pages that need bigger titles still pass `className`.
- `CardDescription`: `font-sans text-sm text-muted-foreground` (explicit `font-sans`).
- Header/Content/Footer padding unchanged (`p-6`).

#### `input.tsx`
- Add `font-sans`. Border uses `border-input`. Focus ring already `ring-ring` (now ochre).
- New: `bg-card` instead of `bg-background` so fields lift slightly off the cream page.
- Height `h-10`, `rounded-md` unchanged.

#### `label.tsx`
- Add `font-sans`. Otherwise unchanged (`text-sm font-medium leading-none`).

### 4.2 ADD — new primitives

Each is generated/written in the standard shadcn style for the named Radix package.

| File | Radix package | Exports | Variants / sizes & notes |
|---|---|---|---|
| `tabs.tsx` | `@radix-ui/react-tabs` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | `TabsList`: `inline-flex bg-muted rounded-md p-1`. `TabsTrigger` active state: `data-[state=active]:bg-card data-[state=active]:shadow-sm data-[state=active]:text-foreground`, inactive `text-muted-foreground`. Sans. Used for in-page tabbed content — NOT the top nav (top nav is `nav-tabs.tsx`, §5). |
| `badge.tsx` | none (plain `<span>` + cva) | `Badge`, `badgeVariants` | `rounded-md border px-2.5 py-0.5 text-xs font-semibold font-sans`. Variants: `default` (navy `bg-primary text-primary-foreground`), `secondary` (`bg-secondary text-secondary-foreground`), `outline` (`border-border text-foreground`), `success` (`border-transparent bg-success/15 text-success`), `warning` (`border-transparent bg-warning/20 text-warning-foreground`), `info` (`border-transparent bg-info/15 text-info`), `destructive` (`border-transparent bg-destructive/15 text-destructive`), `accent` (`border-transparent bg-accent/15 text-accent`). Tinted variants use low-alpha fills for the textbook label look. |
| `progress.tsx` | `@radix-ui/react-progress` | `Progress` | Root `h-2 rounded-full bg-muted overflow-hidden`; indicator `bg-primary transition-all`. Optional `indicatorClassName` prop so callers can recolor (e.g. `bg-success`, `bg-destructive`). Replaces the hand-rolled `bg-muted`/`bg-primary` mastery bars in `student/page.tsx` & the parent dashboard. |
| `accordion.tsx` | `@radix-ui/react-accordion` | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` | `AccordionItem`: `border-b`. `AccordionTrigger`: `font-sans font-medium py-4`, chevron rotates `data-[state=open]:rotate-180`. `AccordionContent`: uses `accordion-down`/`accordion-up` animations (see §4.3). For lesson FAQs / collapsible explanations. |
| `dialog.tsx` | `@radix-ui/react-dialog` | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose` | Overlay `bg-foreground/40 backdrop-blur-[1px]`. Content `bg-card border rounded-xl shadow-lg p-6 sm:max-w-lg`, centered, with fade+zoom animation. `DialogTitle` is `font-serif text-lg font-semibold`. Includes top-right close (X) button. For confirmations (e.g. submit-test, end-session). |
| `select.tsx` | `@radix-ui/react-select` | `Select`, `SelectGroup`, `SelectValue`, `SelectTrigger`, `SelectContent`, `SelectLabel`, `SelectItem`, `SelectSeparator` | `SelectTrigger`: same shape as `Input` (`h-10 rounded-md border-input bg-card`). `SelectContent`: `bg-card border rounded-md shadow-lg`. `SelectItem` selected: check icon + `bg-hover`. Sans. |
| `radio-group.tsx` | `@radix-ui/react-radio-group` | `RadioGroup`, `RadioGroupItem` | `RadioGroupItem`: `h-4 w-4 rounded-full border border-input text-accent`, indicator is a filled dot in `--accent`. Focus ring `ring-ring`. For practice/test answer choices. (Answer-choice *layout* — the lettered A/B/C/D card — is built by feature teams; this primitive is the underlying control.) |
| `separator.tsx` | `@radix-ui/react-separator` | `Separator` | `bg-border`; `h-px w-full` horizontal / `w-px h-full` vertical via `orientation`. The editorial hairline rule. |
| `skeleton.tsx` | none (plain `<div>`) | `Skeleton` | `animate-pulse rounded-md bg-muted`. For loading states on dashboards / analytics. |

### 4.3 `globals.css` keyframes/animations

`tailwindcss-animate` is already installed (handles fade/zoom/slide). Accordion needs two
custom keyframes — add to `tailwind.config.ts` `theme.extend`:

```ts
keyframes: {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
},
animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
},
```

### 4.4 `globals.css` final shape (summary)

1. `@import "katex/dist/katex.min.css";`
2. `@tailwind base; @tailwind components; @tailwind utilities;`
3. `@layer base { :root { ...all light tokens... } .dark { ...all dark tokens... } }`
4. `@layer base { * { @apply border-border; } body { @apply bg-background text-foreground; } }`
5. Optional: a `::selection` rule (`background: hsl(var(--accent) / 0.25)`).

No other global styles. All component styling stays in component files / Tailwind classes.

---

## 5. AppShell API — FROZEN ONCE APPROVED

Two new files this team owns: `src/components/app-shell.tsx` and
`src/components/nav-tabs.tsx`. Feature teammates build pages against these signatures.

### 5.1 `nav-tabs.tsx` — the persistent top navigation

Client component (`"use client"`) — needs `usePathname()`.

```tsx
// src/components/nav-tabs.tsx
"use client";

export interface NavTab {
  label: string;
  href: string;
  /** Optional: match this prefix for active state instead of exact href. */
  matchPrefix?: string;
}

/** The 6 canonical tabs. Exported so AppShell and tests share one source of truth. */
export const STUDENT_NAV_TABS: NavTab[];

export interface NavTabsProps {
  tabs: NavTab[];
  /** Pass-through for extra wrapper classes. */
  className?: string;
}

export function NavTabs(props: NavTabsProps): JSX.Element;
```

**Canonical tabs** (`STUDENT_NAV_TABS`):

| label | href | matchPrefix |
|---|---|---|
| Home | `/student` | — (exact match only; `/student` is the dashboard) |
| Analytics | `/student/analytics` | `/student/analytics` |
| Study Plan | `/student/plan` | `/student/plan` |
| Lessons | `/student/lessons` | `/student/lessons` |
| Practice | `/student/practice` | `/student/practice` |
| Test | `/student/test` | `/student/test` |

**Active-tab logic** (inside `NavTabs`):
- `const pathname = usePathname();`
- A tab is active when: `tab.matchPrefix` is set and `pathname === tab.matchPrefix || pathname.startsWith(tab.matchPrefix + "/")`; OR (no `matchPrefix`) `pathname === tab.href`.
- If multiple match, the **longest matching `href`** wins (so `/student/practice/math` highlights Practice, never Home).

**Visual:** horizontal row of links. Active tab — `text-foreground font-semibold` with a
2px ochre underline (`border-b-2 border-accent`, `-mb-px` to sit on the shell's bottom
border). Inactive — `text-muted-foreground hover:text-foreground`. Sans, `text-sm`. On
mobile (`< sm`) the row scrolls horizontally (`overflow-x-auto`, no wrap); no hamburger
menu in this phase.

### 5.2 `app-shell.tsx` — the chrome wrapper

Server component (no client hooks itself; it renders the client `NavTabs`).

```tsx
// src/components/app-shell.tsx
import type { ReactNode } from "react";

export interface AppShellProps {
  /** Page content. Rendered inside <main>. */
  children: ReactNode;

  /** Display name shown at top-right. */
  userName: string;

  /**
   * Sign-out handler. A server action, passed straight to a <form action={...}>.
   * AppShell renders the form + "Sign out" button; the page provides the action.
   */
  signOut: () => void | Promise<void>;

  /**
   * Nav tabs to render. Defaults to STUDENT_NAV_TABS when omitted.
   * Parent-side pages can pass their own set.
   */
  tabs?: NavTab[];

  /**
   * When true, the page renders WITHOUT shell chrome (no top nav, no header):
   * just <main>{children}</main> full-bleed. Used by the timed test runner and
   * practice runner so nothing distracts during a session.
   * @default false
   */
  bare?: boolean;

  /** Optional extra classes on the inner <main>. */
  mainClassName?: string;
}

export function AppShell(props: AppShellProps): JSX.Element;
```

**Behavior:**

- **`bare === false` (default):**
  ```
  <div class="min-h-screen flex flex-col bg-background">
    <header class="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div class="container flex h-14 items-center justify-between gap-6">
        <!-- left: wordmark "ACT Prep" in font-serif font-semibold text-lg -->
        <!-- center/left-of-right: <NavTabs tabs={tabs ?? STUDENT_NAV_TABS} /> -->
        <!-- right: userName (text-sm text-muted-foreground) + sign-out <form> -->
      </div>
    </header>
    <main class={cn("container flex-1 py-8", mainClassName)}>{children}</main>
  </div>
  ```
  - Header is `sticky top-0 z-40` so nav persists on scroll.
  - The ochre active underline on `NavTabs` aligns with the header's `border-b`.
  - Wordmark links to `/student`.
- **`bare === true`:** renders only `<main class={cn("min-h-screen", mainClassName)}>{children}</main>`. No header, no container padding, no nav. `userName`/`signOut`/`tabs` are ignored (still typed as accepted so callers need not branch their props).

**How a page renders chrome-free (test/practice runners):**
The runner route segments opt out by **not rendering `AppShell` with chrome**. Two
equivalent patterns — pick per route, documented here so feature teams are consistent:
- Preferred: the runner page/layout simply does **not** wrap its content in `AppShell`
  at all (or wraps in `AppShell` with `bare`). Because `AppShell` is applied per-page (or
  per route-group `layout.tsx`), there is **no global root-layout shell** to fight.
- Concretely: put `AppShell` (chrome) in a route-group layout for dashboard-style pages
  (e.g. `src/app/student/(app)/layout.tsx`), and keep the runner routes
  (`/student/test/...`, `/student/practice/[subject]/...` session screens) in a sibling
  group **without** that layout. The `bare` prop exists as the escape hatch when a runner
  still wants `AppShell`'s `min-h-screen` wrapper but no chrome.
- `RootLayout` (`src/app/layout.tsx`) stays shell-free: it only sets `<html>`, fonts, and
  `<body>`. This team's only `layout.tsx` change is fonts (§2.1). Route-group layouts that
  import `AppShell` are owned by the routing/feature teams, not this team.

**Constraints / guarantees the API freezes:**
- `signOut` is always a server action passed to a real `<form>` — no client-side handler,
  so it works without JS.
- `AppShell` never reads the session itself; the page passes `userName` + `signOut`. This
  keeps `AppShell` a pure presentational component (server-rendered, no auth import).
- Adding tabs later = append to `STUDENT_NAV_TABS`; the component needs no change.
- `NavTab.matchPrefix` is the only knob for active-state edge cases; no other config.

---

## 6. Migration notes (for the implementation phase — not done now)

These are consequences of the spec; the relevant owning teams handle them:

1. `projection-trend-chart.tsx` — swap hardcoded hex (`#60a5fa`, `#f59e0b`, `#10b981`,
   `#a855f7`) for `hsl(var(--chart-english|math|reading|science))`; `CartesianGrid` uses
   `hsl(var(--chart-grid))`. (Chart file not owned by this team — tokens provided here.)
2. `student/page.tsx` & parent dashboard hand-rolled progress bars → `Progress` primitive.
3. The amber callout `<div>` in the parent dashboard → `callout-warn` tokens / a future
   `Callout` component (callout component itself is out of this team's scope unless lead
   assigns it; tokens are provided).
4. Section eyebrows (`uppercase tracking-wide`) → the eyebrow class in §2.3.
5. Page/section titles → `font-serif`.

No source files are modified in this spec phase. Implementation begins only after lead
approval.

---

## 7. Files this team will touch in the implementation phase

| File | Action |
|---|---|
| `src/app/globals.css` | Re-value all tokens, add new tokens, add katex import, selection style |
| `tailwind.config.ts` | Add colors, fontFamily, typography, boxShadow, radius xl, keyframes/animations, container tweak |
| `src/app/layout.tsx` | Fonts only (Inter + Source Serif 4 via next/font) |
| `src/components/ui/button.tsx` | Restyle (variants + sizes) |
| `src/components/ui/card.tsx` | Restyle (serif CardTitle) |
| `src/components/ui/input.tsx` | Restyle |
| `src/components/ui/label.tsx` | Restyle |
| `src/components/ui/tabs.tsx` | NEW |
| `src/components/ui/badge.tsx` | NEW |
| `src/components/ui/progress.tsx` | NEW |
| `src/components/ui/accordion.tsx` | NEW |
| `src/components/ui/dialog.tsx` | NEW |
| `src/components/ui/select.tsx` | NEW |
| `src/components/ui/radio-group.tsx` | NEW |
| `src/components/ui/separator.tsx` | NEW |
| `src/components/ui/skeleton.tsx` | NEW |
| `src/components/app-shell.tsx` | NEW |
| `src/components/nav-tabs.tsx` | NEW |

Nothing outside this list is edited by this team.
