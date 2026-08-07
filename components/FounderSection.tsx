import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getMessages, type Locale } from "@/lib/i18n";

export function FounderSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).founder;
  return (
    <section id="fundador" className="section-band relative overflow-hidden bg-[#092a22] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,198,109,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(242,198,109,.055)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(214,154,39,.1))]" />

      <div className="container-page relative grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
        <div className="reveal-on-scroll relative mx-auto min-w-0 w-full max-w-[540px] lg:mx-0">
          <div className="absolute -left-3 -top-3 h-28 w-28 border-l-2 border-t-2 border-brandAmberLight" />
          <div className="absolute -bottom-3 -right-3 h-28 w-28 border-b-2 border-r-2 border-brandAmberLight" />
          <div className="relative aspect-[4/5] overflow-hidden bg-brandInk shadow-[0_34px_90px_rgba(0,0,0,.4)]">
            <Image
              src="/images/brayan-javier-mejia-saavedra.webp"
              alt={copy.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="founder-portrait object-cover object-[center_42%]"
            />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brandInk/85 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/25 pt-4">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-brandAmberLight">{copy.location}</p>
              <ShieldCheck size={20} className="text-brandAmberLight" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="reveal-on-scroll min-w-0 lg:pl-8">
          <p className="text-[11px] font-black uppercase tracking-[0.19em] text-brandAmberLight">{copy.role}</p>
          <h2 className="mt-5 max-w-full break-words text-[clamp(2.5rem,4.4vw,4.7rem)] font-black leading-[.96] text-white">
            <span className="block">Brayan Javier</span>
            <span className="block">Mejía Saavedra</span>
          </h2>
          <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-white/85">
            {copy.lead}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
            {copy.copy}
          </p>

          <div className="mt-8 border-l-2 border-brandAmberLight bg-white/[0.06] px-5 py-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-brandAmberLight">{copy.principle}</p>
            <p className="mt-2 text-base font-bold leading-7 text-white">{copy.quote}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappUrl} className="btn-amber">
              <MessageCircle size={18} aria-hidden="true" /> {copy.contact}
            </a>
            <a href={siteConfig.emailUrl} className="btn-ghost-light">
              <Mail size={18} aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
          <a href={siteConfig.press[0].href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brandAmberLight transition hover:text-white">
            {copy.interview} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
