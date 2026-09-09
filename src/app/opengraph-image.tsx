import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ACT Prep — Adaptive practice and score reporting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f4ee",
          color: "#1a1f2b",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8a6d3b",
            fontFamily: "sans-serif",
            fontWeight: 600,
          }}
        >
          Study smarter for test day
        </div>
        <div style={{ fontSize: 76, fontWeight: 600, marginTop: 24, lineHeight: 1.1 }}>
          Effective ACT study for real results
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 28,
            color: "#5b6270",
            fontFamily: "sans-serif",
            maxWidth: 900,
          }}
        >
          Adaptive practice for students, clear progress reporting for parents.
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 30,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1a2540",
              color: "#f5f1e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            A
          </div>
          ACT Prep
        </div>
      </div>
    ),
    size
  );
}
