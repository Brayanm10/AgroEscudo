"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const pilotWhatsApp = "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20solicitar%20un%20piloto";

const navItems = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Piloto", href: "#piloto" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Contacto", href: "#contacto" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brandGreen/10 bg-white/86 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="AgroEscudo inicio">
          <Image src="/logo-mark.png" alt="" width={48} height={48} priority className="h-11 w-11 object-contain" />
          <div className="leading-none">
            <p className="text-xl font-black tracking-normal text-brandGreenDark">AgroEscudo</p>
            <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-brandAmber">Riesgo postcosecha</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-brandMuted transition hover:text-brandGreenDark">
              {item.label}
            </a>
          ))}
        </div>

        <a href={pilotWhatsApp} className="btn-primary hidden lg:inline-flex">
          Hablar por WhatsApp
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brandGreen/15 bg-white text-brandGreenDark shadow-soft lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-brandGreen/10 bg-white lg:hidden">
          <div className="container-page grid gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-bold text-brandText hover:bg-brandField"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={pilotWhatsApp} className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
