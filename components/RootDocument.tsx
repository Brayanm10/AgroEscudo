import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "@/app/globals.css";

const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION || "FYai700AQxWwoJ5odHN9cMgVg6R4AYca7wVrV9Qimxw";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "AgTech, monitoreo postcosecha, IoT agrícola",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.url
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "AgroEscudo, monitoreo inteligente para proteger granos almacenados"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [absoluteUrl(siteConfig.ogImage)]
  },
  verification: googleVerification
    ? {
        google: googleVerification
      }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootDocument({ children, language }: { children: React.ReactNode; language: string }) {
  return (
    <html lang={language}>
      <body>{children}</body>
    </html>
  );
}
