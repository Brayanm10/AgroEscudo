import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F6F8F4",
    theme_color: "#063B27",
    lang: siteConfig.language,
    icons: [
      {
        src: siteConfig.logo,
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
