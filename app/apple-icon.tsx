import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "#0C0B09",
          border: "8px solid #C8A84B",
        }}
      >
        <span
          style={{
            color: "#C8A84B",
            fontSize: 100,
            fontWeight: 800,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    { ...size },
  );
}
