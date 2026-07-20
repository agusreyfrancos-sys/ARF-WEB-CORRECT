import { ImageResponse } from "next/og";

export const alt = "Agustina Rey Francos — Estilista y Directora Creativa";
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
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#f5f3ee",
          color: "#16140f",
          padding: "0 90px",
        }}
      >
        <div style={{ fontSize: 56, fontStyle: "italic", fontFamily: "serif" }}>
          Agustina Rey Francos
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#6f6a5f" }}>
          Estilismo — Dirección de Imagen — Consultoría Creativa
        </div>
      </div>
    ),
    size
  );
}
