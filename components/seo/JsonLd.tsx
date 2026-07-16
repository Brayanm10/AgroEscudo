import { absoluteUrl, siteConfig } from "@/lib/site-config";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      image: absoluteUrl(siteConfig.founder.image)
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cochabamba",
      addressCountry: "BO"
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.title,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImage)
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Monitoreo IoT para silos y granos almacenados",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    serviceType: "Monitoreo postcosecha con sensores IoT",
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    description:
      "Monitoreo de temperatura y humedad en silos, galpones y centros de acopio con alertas, historial operativo y reportes."
  }
];

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
      }}
    />
  );
}
