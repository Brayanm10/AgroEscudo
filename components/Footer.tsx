import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Avances", href: "#avances" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Prensa", href: "#prensa" },
  { label: "Piloto", href: "#piloto" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#eef2ee] py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <div className="inline-block rounded-md bg-white px-4 py-3">
            <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1456} height={416} className="h-11 w-auto" />
          </div>
          <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-brandMuted">
            AgroEscudo desarrolla tecnología de monitoreo para reducir riesgos operativos y postcosecha en silos, galpones y centros de acopio.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-brandGreenDark">Navegación</p>
            <div className="mt-4 grid gap-3">
              {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-bold text-brandMuted hover:text-brandGreenDark">{link.label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-brandGreenDark">Contacto</p>
            <a href={siteConfig.whatsappUrl} className="mt-4 block text-sm font-black text-brandText hover:text-brandGreen">{siteConfig.phone}</a>
            <a href={siteConfig.emailUrl} className="mt-3 block text-sm font-black text-brandText hover:text-brandGreen">{siteConfig.email}</a>
            <p className="mt-4 text-sm leading-6 text-brandMuted">Operación inicial en Cochabamba y Santa Cruz, Bolivia.</p>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-3 border-t border-brandGreen/10 pt-6 text-xs font-semibold text-brandMuted sm:flex-row sm:justify-between">
        <p>© {year} AgroEscudo. Todos los derechos reservados.</p>
        <p>Monitoreo inteligente para proteger granos almacenados.</p>
      </div>
    </footer>
  );
}
