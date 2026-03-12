import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vasper Labs | AI & Web3 Research Laboratory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Teal glow background */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "80px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(19,103,138,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Green glow background */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "100px",
            width: "460px",
            height: "460px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(154,235,163,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 600,
              color: "#13678A",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            VΛsper
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 300,
              color: "#A1A1AA",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            labs
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 300,
            color: "#666666",
            letterSpacing: "0.02em",
          }}
        >
          AI &amp; Web3 Research Laboratory
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 18,
            color: "#333333",
            fontWeight: 300,
            letterSpacing: "0.05em",
          }}
        >
          vasperlabs.com
        </div>

        {/* Bottom teal accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #13678A, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
