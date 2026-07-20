import type { Metadata } from "next";
import { newsreader, instrumentSans } from "@/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const title = "Agustina Rey Francos — Estilista y Directora Creativa";
const description =
  "Estilista y directora creativa. Construcción de universos visuales a través del estilismo, la dirección de arte y la narrativa de imagen.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Agustina Rey Francos",
  },
  description,
  keywords: [
    "fashion stylist",
    "fashion direction",
    "creative direction",
    "image strategy",
    "estilismo",
    "dirección de arte",
    "consultoría creativa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Agustina Rey Francos",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${newsreader.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
