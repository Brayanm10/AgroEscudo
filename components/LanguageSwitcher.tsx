"use client";

import Link from "next/link";
import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { localeLabels, localeRoutes, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale, light = false }: { locale: Locale; light?: boolean }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const choose = (nextLocale: Locale) => {
    localStorage.setItem("agroescudo-locale", nextLocale);
    document.cookie = `agroescudo-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={`${localeLabels[locale].short}: Cambiar idioma / Change language / Simi tikray`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-3 text-sm font-black transition ${light ? "border-white/25 bg-white/10 text-white hover:bg-white/20" : "border-brandGreen/15 bg-white text-brandGreenDark hover:border-brandAmber"}`}
      >
        <Globe2 size={17} aria-hidden="true" />
        {localeLabels[locale].short}
        <ChevronDown size={15} aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div role="menu" className="absolute right-0 top-[calc(100%+.5rem)] z-[70] min-w-44 overflow-hidden rounded-md border border-brandGreen/10 bg-white p-1.5 text-brandText shadow-lift">
          {locales.map((item) => (
            <Link
              key={item}
              href={localeRoutes[item]}
              hrefLang={item}
              lang={item}
              role="menuitem"
              aria-current={item === locale ? "page" : undefined}
              onClick={() => choose(item)}
              className="flex min-h-11 items-center justify-between gap-4 rounded px-3 text-sm font-black hover:bg-brandField focus:bg-brandField"
            >
              <span>{localeLabels[item].name}</span>
              {item === locale ? <Check size={16} className="text-brandGreen" aria-hidden="true" /> : <span className="text-xs text-brandMuted">{localeLabels[item].short}</span>}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
