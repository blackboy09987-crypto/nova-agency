import { ImageResponse } from "next/og";

export const alt = "Nova Agency — Digital Design & Web Development Agency in Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#050b17",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(63,208,255,0.25), transparent 50%), radial-gradient(circle at 10% 90%, rgba(20,115,255,0.25), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #1473ff, #3fd0ff)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
              color: "#050b17",
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#f3f6fb",
            }}
          >
            NOVA AGENCY
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "58px",
            fontWeight: 700,
            color: "#f3f6fb",
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          Building Brands For The Digital World
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: "#98a6bf",
            marginTop: "28px",
            maxWidth: "820px",
          }}
        >
          UI/UX · Web Development · Branding · SEO — Digital Agency in Pakistan
        </div>
      </div>
    ),
    { ...size }
  );
}
