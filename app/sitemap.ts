import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languageAlternates = {
    "es-BO": siteConfig.url,
    en: `${siteConfig.url}/en`,
    "pt-BR": `${siteConfig.url}/pt`,
    "qu-BO": `${siteConfig.url}/qu`,
    "x-default": siteConfig.url
  };
  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/en`,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/qu`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/pt`,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/qr`,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/prensa`,
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];
}
