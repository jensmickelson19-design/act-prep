import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

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

// Absolute base for OG/canonical URLs. Set NEXT_PUBLIC_APP_URL in production
// (e.g. https://actprep.example.com); fall back to the Vercel-provided host,
// then localhost for dev.
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "ACT Prep — Adaptive practice and score reporting",
    template: "%s · ACT Prep",
  },
  description:
    "Adaptive ACT practice for students and clear progress reporting for parents. Full-length timed tests, projected scores, and targeted drills.",
  applicationName: "ACT Prep",
  openGraph: {
    type: "website",
    siteName: "ACT Prep",
    title: "ACT Prep — Adaptive practice and score reporting",
    description:
      "Adaptive ACT practice for students and clear progress reporting for parents.",
    url: appUrl,
  },
  twitter: {
    card: "summary",
    title: "ACT Prep — Adaptive practice and score reporting",
    description:
      "Adaptive ACT practice for students and clear progress reporting for parents.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
