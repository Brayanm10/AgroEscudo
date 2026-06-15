import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agroescudo.vercel.app"),
  title: "AgroEscudo | El escudo digital del grano boliviano",
  description:
    "AgroEscudo monitorea temperatura y humedad en almacenamiento agrícola con sensores IoT, alertas tempranas, bitácora y reportes operativos para reducir riesgo postcosecha en Bolivia.",
  keywords: [
    "AgroEscudo",
    "agrotech Bolivia",
    "IoT agrícola",
    "monitoreo de silos",
    "postcosecha",
    "Cochabamba",
    "Santa Cruz",
    "sensores agrícolas",
    "riesgo operativo agrícola"
  ],
  openGraph: {
    title: "AgroEscudo | El escudo digital del grano boliviano",
    description: "Sensores IoT, alertas y reportes para monitoreo postcosecha en Cochabamba y Santa Cruz.",
    url: "https://agroescudo.vercel.app",
    siteName: "AgroEscudo",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/agro-field-premium.png",
        width: 1680,
        height: 900,
        alt: "AgroEscudo en campo agrícola"
      }
    ]
  },
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
