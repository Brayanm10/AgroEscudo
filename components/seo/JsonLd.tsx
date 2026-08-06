import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { faqs } from "@/content/faqs";
import { pressItems } from "@/content/press";

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
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
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
        name: "Inicio",
        item: siteConfig.url
      }
    ]
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
