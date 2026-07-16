import Image from "next/image";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function PressSection() {
  const laRazon = siteConfig.press[0];
  const boliviaEmprende = siteConfig.press[1];

  return (
    <section id="prensa" className="section-band overflow-hidden bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">Prensa y conversación pública</p>
            <h2 className="section-title mt-5">Una propuesta boliviana que ya entra en la conversación productiva.</h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            El suplemento Energías &amp; Negocios de La Razón publicó una entrevista sobre AgroEscudo y su propuesta para incorporar monitoreo tecnológico en la postcosecha.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <a
            href={laRazon.href}
            target="_blank"
            rel="noreferrer"
            className="press-feature reveal-on-scroll group relative min-h-[620px] overflow-hidden rounded-lg bg-brandInk shadow-lift"
            aria-label="Leer entrevista de AgroEscudo en La Razón"
          >
            <Image
              src="/images/press-la-razon-social.webp"
              alt="Pieza de La Razón sobre AgroEscudo y agricultura inteligente"
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,20,16,.92)_0%,rgba(3,20,16,.08)_64%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-brandAmberLight">La Razón · mayo de 2026</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <h3 className="max-w-xl text-2xl font-black leading-tight sm:text-3xl">AgroEscudo impulsa la agricultura inteligente</h3>
                <ArrowUpRight className="shrink-0" size={26} aria-hidden="true" />
              </div>
            </div>
          </a>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <PressEvidence image="/images/press-la-razon-cover.webp" alt="Portada de Energías y Negocios con AgroEscudo" label="Portada del suplemento" href={laRazon.href} />
            <PressEvidence image="/images/press-la-razon-article.webp" alt="Página de la entrevista de AgroEscudo en La Razón" label="Entrevista publicada" href={laRazon.href} />
          </div>
        </div>

        <div className="reveal-on-scroll mt-6 flex flex-col gap-5 border border-brandGreen/10 bg-brandField p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brandGreenDark text-brandAmberLight"><Newspaper size={20} aria-hidden="true" /></span>
            <div>
              <p className="text-sm font-black text-brandText">También publicado por Bolivia Emprende</p>
              <p className="mt-1 text-xs leading-5 text-brandMuted">Cobertura editorial de la propuesta y etapa de desarrollo de AgroEscudo.</p>
            </div>
          </div>
          <a href={boliviaEmprende.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-brandGreen hover:text-brandGreenDark">
            Leer publicación <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PressEvidence({ image, alt, label, href }: { image: string; alt: string; label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="reveal-on-scroll group grid min-h-[298px] grid-cols-[.44fr_.56fr] overflow-hidden rounded-lg border border-brandGreen/10 bg-brandField shadow-soft transition hover:border-brandAmber/50 hover:shadow-lift">
      <div className="relative min-h-full bg-white">
        <Image src={image} alt={alt} fill sizes="(max-width: 640px) 44vw, 22vw" className="object-cover object-top" />
      </div>
      <div className="flex flex-col justify-between p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandGreen">Evidencia editorial</p>
        <div>
          <h3 className="text-xl font-black text-brandText">{label}</h3>
          <p className="mt-3 text-sm leading-6 text-brandMuted">Ver la publicación en su fuente original.</p>
        </div>
        <ArrowUpRight size={20} className="text-brandGreen transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </a>
  );
}
