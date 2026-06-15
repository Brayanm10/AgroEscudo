import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Solución", href: "#solucion" },
  { label: "Piloto", href: "#piloto" },
  { label: "Contacto", href: "#contacto" }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/agroescudo?igsh=dXRyNWphbW9xemVi&utm_source=qr",
    icon: Instagram
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1LJGrbaSKM/?mibextid=wwXIfr",
    icon: Facebook
  }
];

export function Footer() {
  return (
    <footer className="border-t border-brandGreen/10 bg-white py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Image src="/logo-horizontal.png" alt="AgroEscudo" width={250} height={90} className="h-12 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm font-semibold text-brandMuted">
            El escudo digital del grano boliviano.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreenDark">Responsable</p>
            <p className="mt-3 text-sm font-bold text-brandText">Brayan Javier Mejia Saavedra</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreenDark">Base</p>
            <p className="mt-3 text-sm font-bold text-brandText">Cochabamba y Santa Cruz, Bolivia</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreenDark">Contacto</p>
            <a href="https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20solicitar%20un%20piloto" className="mt-3 block text-sm font-bold text-brandText hover:text-brandGreen">
              +591 79366846
            </a>
            <a href="mailto:mesabrabo@gmail.com?subject=Solicitud%20de%20piloto%20AgroEscudo" className="mt-2 block text-sm font-bold text-brandText hover:text-brandGreen">
              mesabrabo@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandGreenDark">Redes</p>
            <div className="mt-3 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`AgroEscudo en ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brandGreen/12 bg-brandField text-brandGreenDark transition hover:-translate-y-0.5 hover:border-brandAmber/50 hover:bg-white hover:text-brandGreen"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-4 border-t border-brandGreen/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-brandMuted">© 2026 AgroEscudo. Todos los derechos reservados.</p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-brandMuted hover:text-brandGreenDark">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
