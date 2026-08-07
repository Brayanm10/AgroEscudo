"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Navbar({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).nav;
  const home = localeRoutes[locale];
  const navItems = [{ label: copy.product, href: "#producto" }, { label: copy.how, href: "#como-funciona" }, { label: copy.platform, href: "#plataforma" }, { label: copy.press, href: "#prensa" }, { label: copy.agrotech, href: "#agrotech" }];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { const update = () => setScrolled(window.scrollY > 28); update(); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const solid = scrolled || open;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${solid ? "border-b border-brandGreen/10 bg-white/95 shadow-soft backdrop-blur-xl" : "border-b border-white/10 bg-brandInk/20 backdrop-blur-sm"}`}>
      <nav className="container-page flex h-[72px] items-center gap-5">
        <Link href={home} className="shrink-0 bg-white px-2.5 py-2 focus:outline-none focus:ring-2 focus:ring-brandAmber" aria-label={copy.home}>
          <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1432} height={416} priority sizes="(max-width: 639px) 148px, 168px" className="h-auto w-[148px] sm:w-[168px]" />
        </Link>
        <div className="ml-auto hidden items-center gap-3 xl:flex">{navItems.map((item) => <a key={item.href} href={item.href} className={`nav-link text-[13px] font-black ${solid ? "text-brandMuted" : "text-white/78"}`}>{item.label}</a>)}</div>
        <div className="ml-auto hidden items-center gap-2 lg:flex xl:ml-1">
          <LanguageSwitcher locale={locale} light={!solid} />
          <a href={siteConfig.platformUrl} target="_blank" rel="noreferrer" className={`inline-flex min-h-11 items-center gap-2 px-3 text-sm font-black transition ${solid ? "text-brandGreenDark hover:bg-brandField" : "text-white hover:bg-white/10"}`}>{copy.login}<ExternalLink size={15} aria-hidden="true" /></a>
          <a href={siteConfig.technicalVisitUrl} className="inline-flex min-h-11 items-center gap-2 bg-brandAmberLight px-4 text-sm font-black text-brandInk transition hover:bg-white"><MessageCircle size={17} aria-hidden="true" />{copy.cta}</a>
        </div>
        <button type="button" className={`ml-auto inline-flex h-11 w-11 items-center justify-center border xl:hidden ${solid ? "border-brandGreen/20 bg-white text-brandGreenDark" : "border-white/20 bg-white/10 text-white"}`} onClick={() => setOpen((value) => !value)} aria-label={open ? copy.close : copy.open} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {open ? <div className="border-t border-brandGreen/10 bg-white xl:hidden"><div className="container-page grid gap-1 py-4">{navItems.map((item) => <a key={item.href} href={item.href} className="px-3 py-3 text-sm font-black text-brandText hover:bg-brandField" onClick={() => setOpen(false)}>{item.label}</a>)}<a href="#ecosistema" className="px-3 py-3 text-sm font-black text-brandText hover:bg-brandField" onClick={() => setOpen(false)}>{copy.ecosystem}</a><div className="mt-2 flex items-center justify-between border-t border-brandGreen/10 px-3 pt-4"><LanguageSwitcher locale={locale} /><a href={siteConfig.platformUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-brandGreenDark">{copy.login}<ExternalLink size={15} /></a></div><a href={siteConfig.technicalVisitUrl} className="btn-primary mt-2" onClick={() => setOpen(false)}>{copy.cta}</a></div></div> : null}
    </header>
  );
}
