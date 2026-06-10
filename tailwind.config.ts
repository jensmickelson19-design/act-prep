import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2rem", lg: "2.5rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
          english: "hsl(var(--chart-english))",
          math: "hsl(var(--chart-math))",
          reading: "hsl(var(--chart-reading))",
          science: "hsl(var(--chart-science))",
          grid: "hsl(var(--chart-grid))",
        },
        callout: {
          note: "hsl(var(--callout-note))",
          "note-border": "hsl(var(--callout-note-border))",
          tip: "hsl(var(--callout-tip))",
          "tip-border": "hsl(var(--callout-tip-border))",
          warn: "hsl(var(--callout-warn))",
          "warn-border": "hsl(var(--callout-warn-border))",
          example: "hsl(var(--callout-example))",
          "example-border": "hsl(var(--callout-example-border))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 hsl(222 47% 20% / 0.04)",
        DEFAULT:
          "0 1px 3px 0 hsl(222 47% 20% / 0.06), 0 1px 2px -1px hsl(222 47% 20% / 0.05)",
        md: "0 4px 12px -2px hsl(222 47% 20% / 0.08), 0 2px 6px -2px hsl(222 47% 20% / 0.05)",
        lg: "0 12px 28px -6px hsl(222 47% 20% / 0.16), 0 4px 10px -4px hsl(222 47% 20% / 0.10)",
      },
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
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
