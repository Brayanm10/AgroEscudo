import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languageAlternates = {
    "es-BO": siteConfig.url,
    en: `${siteConfig.url}/en`,
    "qu-BO": `${siteConfig.url}/qu`,
    "x-default": siteConfig.url
  };
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/qu`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: languageAlternates }
    },
    {
      url: `${siteConfig.url}/qr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/prensa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75
    }
  ];
}
