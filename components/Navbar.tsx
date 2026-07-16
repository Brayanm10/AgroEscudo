"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Avances", href: "#avances" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Prensa", href: "#prensa" },
  { label: "Piloto", href: "#piloto" }
];

export function Navbar() {
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
        <Link href="/" className="rounded-md bg-white px-3 py-2 shadow-soft" aria-label="AgroEscudo inicio">
          <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1456} height={416} priority className="h-9 w-auto sm:h-10" />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`text-sm font-black transition ${scrolled ? "text-brandMuted hover:text-brandGreenDark" : "text-white/80 hover:text-white"}`}>
              {item.label}
            </a>
          ))}
        </div>

        <a href={siteConfig.technicalVisitUrl} className={`hidden items-center gap-2 rounded-md px-4 py-3 text-sm font-black transition lg:inline-flex ${scrolled ? "bg-brandGreenDark text-white hover:bg-brandGreen" : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"}`}>
          <MessageCircle size={17} aria-hidden="true" /> Solicitar piloto
        </a>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-md border shadow-soft xl:hidden ${scrolled || open ? "border-brandGreen/20 bg-white text-brandGreenDark" : "border-white/20 bg-white/10 text-white backdrop-blur"}`}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
            <a href={siteConfig.technicalVisitUrl} className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Solicitar evaluación del sitio
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
