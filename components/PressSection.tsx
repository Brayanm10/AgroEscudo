import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { featuredPress, pressItems } from "@/content/press";
import { getMessages, type Locale } from "@/lib/i18n";

const secondaryPress = pressItems.filter((item) => item.id !== featuredPress.id).slice(0, 5);

export function PressSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).press;
  return (
    <section id="prensa" className="section-band overflow-hidden bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.title}</h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            {copy.copy}
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <a
            href={featuredPress.href}
            target="_blank"
            rel="noreferrer"
            className="press-feature reveal-on-scroll group relative min-h-[620px] overflow-hidden rounded-lg bg-brandInk shadow-lift"
          >
            <Image
              src={featuredPress.image ?? "/images/press-la-razon-social.webp"}
              alt={featuredPress.imageAlt ?? featuredPress.title}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,20,16,.92)_0%,rgba(3,20,16,.08)_64%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-brandAmberLight">{featuredPress.source} · {featuredPress.date}</p>
              <div className="mt-3 flex items-end justify-between gap-4">
                <h3 className="max-w-xl text-2xl font-black leading-tight sm:text-3xl">{featuredPress.title}</h3>
                <ArrowUpRight className="shrink-0" size={26} aria-hidden="true" />
              </div>
            </div>
          </a>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <PressEvidence image="/images/press-la-razon-cover.webp" alt="Portada de Energías y Negocios con AgroEscudo" label={copy.cover} evidence={copy.evidence} note={copy.sourceNote} href={featuredPress.href} />
            <PressEvidence image="/images/press-la-razon-article.webp" alt="Página de la entrevista de AgroEscudo en La Razón" label={copy.article} evidence={copy.evidence} note={copy.sourceNote} href={pressItems[1].href} />
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {secondaryPress.map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer" className="reveal-on-scroll flex min-h-[150px] flex-col justify-between rounded-lg border border-brandGreen/10 bg-brandField p-5 transition hover:-translate-y-0.5 hover:border-brandAmber/50 hover:bg-white hover:shadow-soft">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandGreen">{item.source}</p>
                <h3 className="mt-3 text-lg font-black leading-tight text-brandText">{item.title}</h3>
                <p className="mt-3 text-xs font-semibold leading-5 text-brandMuted">{item.type} · {item.date}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brandGreenDark">
                {copy.open} <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="reveal-on-scroll mt-6 flex flex-col gap-5 border border-brandGreen/10 bg-brandField p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brandGreenDark text-brandAmberLight"><Newspaper size={20} aria-hidden="true" /></span>
            <div>
              <p className="text-sm font-black text-brandText">{copy.more}</p>
              <p className="mt-1 text-xs leading-5 text-brandMuted">{copy.moreCopy}</p>
            </div>
          </div>
          <Link href="/prensa" className="inline-flex items-center gap-2 text-sm font-black text-brandGreen hover:text-brandGreenDark">
            {copy.moreLink} <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PressEvidence({ image, alt, label, evidence, note, href }: { image: string; alt: string; label: string; evidence: string; note: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="reveal-on-scroll group grid min-h-[298px] grid-cols-[.44fr_.56fr] overflow-hidden rounded-lg border border-brandGreen/10 bg-brandField shadow-soft transition hover:border-brandAmber/50 hover:shadow-lift">
      <div className="relative min-h-full bg-white">
        <Image src={image} alt={alt} fill sizes="(max-width: 640px) 44vw, 22vw" className="object-cover object-top" />
      </div>
      <div className="flex flex-col justify-between p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandGreen">{evidence}</p>
        <div>
          <h3 className="text-xl font-black text-brandText">{label}</h3>
          <p className="mt-3 text-sm leading-6 text-brandMuted">{note}</p>
        </div>
        <ArrowUpRight size={20} className="text-brandGreen transition group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </a>
  );
}
