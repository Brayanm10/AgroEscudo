import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { pressItems } from "@/content/press";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const pageUrl = absoluteUrl(localeRoutes[locale]);
  const service = locale === "pt-BR"
    ? { name: "Monitoramento IoT para silos e grãos armazenados", type: "Monitoramento pós-colheita com sensores IoT", description: "Monitoramento de temperatura e umidade em silos, armazéns e centros de coleta com alertas, histórico operacional e relatórios.", topics: ["monitoramento de silos", "grãos armazenados", "tecnologia pós-colheita", "IoT agrícola na Bolívia"] }
    : locale === "en"
      ? { name: "IoT monitoring for silos and stored grain", type: "Post-harvest monitoring with IoT sensors", description: "Temperature and humidity monitoring for silos, warehouses, and grain collection facilities with alerts, operational history, and reports.", topics: ["silo monitoring", "stored grain", "post-harvest technology", "agricultural IoT in Bolivia"] }
      : { name: "Monitoreo IoT para silos y granos almacenados", type: "Monitoreo postcosecha con sensores IoT", description: "Monitoreo de temperatura y humedad en silos, galpones y centros de acopio con alertas, historial operativo y reportes.", topics: ["monitoreo de silos", "granos almacenados", "tecnología postcosecha", "IoT agrícola Bolivia"] };
  const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
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
    sameAs: ["https://www.instagram.com/agroescudo/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: "BO",
      availableLanguage: "es"
    },
    subjectOf: pressItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: item.href,
      datePublished: item.datePublished,
      publisher: {
        "@type": "Organization",
        name: item.source
      }
    })),
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["es-BO", "en", "pt-BR", "qu-BO"],
    description: siteConfig.description,
    publisher: { "@id": absoluteUrl("/#organization") }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: messages.meta.title,
    url: pageUrl,
    inLanguage: locale,
    description: messages.meta.description,
    isPartOf: {
      "@id": absoluteUrl("/#website")
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImage)
    },
    about: service.topics.map((name) => ({ "@type": "Thing", name })),
    mentions: pressItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: item.href
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    provider: {
      "@id": absoluteUrl("/#organization")
    },
    serviceType: service.type,
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    description: service.description
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: messages.faq.items.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  }
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
      }}
    />
  );
}
