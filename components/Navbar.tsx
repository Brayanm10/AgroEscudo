"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Navbar({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).nav;
  const home = localeRoutes[locale];
  const navItems = [
    { label: copy.product, href: "#producto" },
    { label: copy.how, href: "#como-funciona" },
    { label: copy.progress, href: "#avances" },
    { label: copy.ecosystem, href: "#ecosistema" },
    { label: copy.press, href: "#prensa" },
    { label: copy.pilot, href: "#piloto" }
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? "border-b border-brandGreen/10 bg-white/95 shadow-soft backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="container-page flex h-20 items-center justify-between gap-5">
        <Link href={home} className="rounded-md bg-white px-3 py-2 shadow-soft" aria-label={copy.home}>
          <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1456} height={416} priority className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm font-black transition ${scrolled ? "text-brandMuted hover:text-brandGreenDark" : "text-white/80 hover:text-white"}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-2 lg:flex xl:ml-0">
          <LanguageSwitcher locale={locale} light={!scrolled} />
          <a href={siteConfig.technicalVisitUrl} className={`hidden items-center gap-2 rounded-md px-4 py-3 text-sm font-black transition lg:inline-flex ${scrolled ? "bg-brandGreenDark text-white hover:bg-brandGreen" : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"}`}>
            <MessageCircle size={17} aria-hidden="true" /> {copy.cta}
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md border shadow-soft xl:hidden ${scrolled || open ? "border-brandGreen/20 bg-white text-brandGreenDark" : "border-white/20 bg-white/10 text-white backdrop-blur"}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? copy.close : copy.open}
          aria-expanded={open}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-brandGreen/10 bg-white xl:hidden">
          <div className="container-page grid gap-1 py-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-3 py-3 text-sm font-black text-brandText hover:bg-brandField" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-brandGreen/10 px-3 pt-4">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-brandMuted">Idioma / Language</span>
              <LanguageSwitcher locale={locale} />
            </div>
            <a href={siteConfig.technicalVisitUrl} className="btn-primary mt-2" onClick={() => setOpen(false)}>
              {copy.cta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
