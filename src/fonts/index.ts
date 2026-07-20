import { Newsreader, Instrument_Sans } from "next/font/google";

// Serif editorial para titulares y nombres de proyecto. Placeholder de buen
// nivel hasta licenciar algo a medida (Canela, GT Sectra, Reckless).
export const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  variable: "--font-newsreader",
  display: "swap",
});

// Sans muda para cuerpo, labels y navegación.
export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument",
  display: "swap",
});
