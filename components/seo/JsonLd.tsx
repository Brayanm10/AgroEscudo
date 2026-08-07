import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { pressItems } from "@/content/press";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";

export function JsonLd({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const pageUrl = absoluteUrl(localeRoutes[locale]);
  const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    description: messages.meta.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      image: absoluteUrl(siteConfig.founder.image)
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
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
    inLanguage: locale,
    description: messages.meta.description
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: messages.meta.title,
    url: pageUrl,
    inLanguage: locale,
    description: messages.meta.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImage)
    },
    about: [
      {
        "@type": "Thing",
        name: "monitoreo de silos"
      },
      {
        "@type": "Thing",
        name: "granos almacenados"
      },
      {
        "@type": "Thing",
        name: "tecnología postcosecha"
      },
      {
        "@type": "Thing",
        name: "IoT agrícola Bolivia"
      }
    ],
    mentions: pressItems.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      url: item.href
    }))
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
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "en" ? "Home" : locale === "qu-BO" ? "Qallariy" : "Inicio",
        item: pageUrl
      }
    ]
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
