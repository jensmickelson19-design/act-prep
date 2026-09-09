"use client";

import { useEffect } from "react";

// Last-resort boundary: replaces the root layout when the layout itself (or
// something it renders) throws. It must ship its own <html>/<body> and cannot
// rely on globals.css classes being applied, so styles are inline.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          padding: "2rem",
          textAlign: "center",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#f7f4ee",
          color: "#1a1f2b",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", fontWeight: 600, margin: 0 }}>
          Something went wrong
        </h1>
        <p style={{ maxWidth: "28rem", color: "#5b6270", fontSize: "0.95rem" }}>
          A critical error stopped the page from loading. The problem has been
          logged. Please try again.
        </p>
        {error.digest && (
          <p style={{ fontSize: "0.8rem", color: "#5b6270" }}>
            Reference: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          style={{
            padding: "0.55rem 1.1rem",
            borderRadius: "0.375rem",
            border: "none",
            background: "#1a2540",
            color: "#fff",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
