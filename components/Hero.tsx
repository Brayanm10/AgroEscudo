import Image from "next/image";
import { ArrowDown, ExternalLink, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getMessages, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).hero;
  return (
    <section className="hero-shell relative isolate min-h-[calc(100svh-3rem)] overflow-hidden bg-brandInk text-white">
      <Image src={siteConfig.media.hero} alt={copy.alt} fill priority fetchPriority="high" loading="eager" sizes="100vw" className="hero-image object-cover object-[68%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,23,18,.98)_0%,rgba(3,27,21,.92)_36%,rgba(3,27,21,.44)_66%,rgba(3,27,21,.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,23,18,.82)_0%,transparent_48%)]" />
      <div className="hero-grain absolute inset-0 opacity-30" />

      <div className="container-page relative flex min-h-[calc(100svh-3rem)] items-end pb-6 pt-28 sm:pb-12 lg:pb-14 lg:pt-32">
        <div className="max-w-[980px] animate-fade-up">
          <div className="hero-brand mb-5 inline-flex items-center gap-3 sm:mb-7">
            <span className="hero-brand-mark">
              <Image src={siteConfig.logo} alt="" width={72} height={72} priority className="h-11 w-11 object-contain sm:h-14 sm:w-14" />
            </span>
            <span className="text-xl font-black text-white sm:text-2xl">AgroEscudo</span>
          </div>
          <p className="inline-flex items-center gap-2 border-l-2 border-brandAmberLight pl-3 text-[11px] font-black uppercase tracking-[0.17em] text-brandAmberLight sm:text-xs">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-[1040px] font-black leading-[.9] text-white sm:mt-6">
            <span className="block text-[clamp(2.8rem,7.6vw,7.4rem)] text-brandAmberLight">{copy.brand}</span>
            <span className="mt-1 block text-[clamp(2.35rem,6.2vw,6rem)]">{copy.title}</span>
          </h1>
          <p className="mt-5 text-base font-black text-white sm:mt-7 sm:text-2xl">{copy.promise}</p>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/76 sm:mt-7 sm:text-xl sm:leading-8">{copy.copy}</p>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.08em] text-white/50 sm:mt-5 sm:text-xs">{copy.microcopy}</p>
          <div className="hero-actions mt-6 gap-3 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap">
            <a href={siteConfig.technicalVisitUrl} className="btn-amber"><MessageCircle size={18} aria-hidden="true" />{copy.primary}</a>
            <a href="#como-funciona" className="btn-ghost-light">{copy.secondary}<ArrowDown size={18} aria-hidden="true" /></a>
            <a href={siteConfig.platformUrl} target="_blank" rel="noreferrer" className="hero-login-link">{copy.tertiary}<ExternalLink size={16} aria-hidden="true" /></a>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-xs font-semibold text-white/48 sm:flex-row sm:items-center sm:gap-6">
            <span>{copy.note}</span><span className="hidden items-center gap-2 sm:inline-flex"><MapPin size={14} className="text-brandAmberLight" aria-hidden="true" />{copy.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
