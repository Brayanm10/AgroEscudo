import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { pressItems } from "@/content/press";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AgroEscudo en prensa, reconocimientos y AgroTECH Bolivia 2026",
  description:
    "Cobertura de AgroEscudo en La Razón, Bolivia Emprende, Reporte Startup, IICA Bolivia y SCA Canal Digital Agropecuario sobre monitoreo postcosecha e IoT agrícola.",
  alternates: {
    canonical: "/prensa"
  },
  openGraph: {
    title: "AgroEscudo en prensa y ecosistema de innovación",
    description:
      "Prensa, reconocimientos y participación pública de AgroEscudo, tecnología boliviana para monitoreo de silos y granos almacenados.",
    url: absoluteUrl("/prensa"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "AgroEscudo, monitoreo postcosecha en Bolivia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroEscudo en prensa y ecosistema de innovación",
    description: "Cobertura pública de AgroEscudo sobre monitoreo postcosecha e IoT agrícola en Bolivia.",
    images: [absoluteUrl(siteConfig.ogImage)]
  }
};

export default function PressPage() {
  const pressJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AgroEscudo en prensa, reconocimientos y AgroTECH Bolivia 2026",
    url: absoluteUrl("/prensa"),
    inLanguage: siteConfig.language,
    description:
      "Cobertura pública de AgroEscudo sobre monitoreo postcosecha, sensores IoT y almacenamiento de granos en Bolivia.",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: pressItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: item.title,
          url: item.href,
          datePublished: item.datePublished,
          description: item.summary,
          publisher: {
            "@type": "Organization",
            name: item.source
          }
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-brandField text-brandText">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pressJsonLd).replace(/</g, "\\u003c")
        }}
      />
      <section className="bg-brandInk py-10 text-white">
        <div className="container-page">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-white/70 transition hover:text-white">
            <ArrowLeft size={17} aria-hidden="true" /> Volver a la landing
          </Link>
          <div className="mt-14 grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">Prensa y reconocimientos</p>
              <h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)] font-black leading-[.92]">
                AgroEscudo en el ecosistema de innovación.
              </h1>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/72">
              Cobertura, reconocimiento y participación pública de una tecnología boliviana enfocada en monitoreo postcosecha, sensores IoT, alertas e historial para silos, galpones y centros de acopio.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            {pressItems.map((item) => (
              <article key={item.id} className="grid min-h-[280px] gap-0 overflow-hidden rounded-lg border border-brandGreen/10 bg-white shadow-soft md:grid-cols-[.42fr_.58fr]">
                <div className="relative min-h-[220px] bg-brandGreenDark">
                  {item.image ? (
                    <Image src={item.image} alt={item.imageAlt ?? item.title} fill sizes="(max-width: 768px) 100vw, 28vw" className="object-cover object-top" />
                  ) : (
                    <div className="flex h-full min-h-[220px] items-center justify-center p-8 text-center">
                      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">{item.source}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandGreen">{item.type} · {item.date}</p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-brandText">{item.title}</h2>
                    <p className="mt-4 text-sm font-semibold leading-7 text-brandMuted">{item.summary}</p>
                    <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-brandAmberDark">{item.source}</p>
                  </div>
                  <a href={item.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brandGreenDark transition hover:text-brandGreen">
                    {item.cta} <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-brandGreenDark p-6 text-white sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">Contacto</p>
              <h2 className="mt-3 text-3xl font-black leading-tight">¿Quieres conocer el sistema detrás de AgroEscudo?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
                Agenda una conversación técnica sobre monitoreo de silos, centros de acopio, galpones o plantas con inventario agrícola almacenado.
              </p>
            </div>
            <a href={siteConfig.whatsappUrl} className="btn-amber mt-6 lg:mt-0">
              <MessageCircle size={18} aria-hidden="true" /> Solicitar una demostración
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
