import { Facebook, Instagram, Mail, MessageCircle, Radio } from "lucide-react";

const pilotWhatsApp = "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20solicitar%20un%20piloto";

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

export function CTASection() {
  return (
    <section id="contacto" className="section-band bg-brandInk text-white">
      <div className="container-page">
        <div className="grid gap-8 rounded-lg border border-white/12 bg-white/8 p-6 shadow-lift backdrop-blur sm:p-8 lg:grid-cols-[1fr_0.86fr] lg:p-10">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmber">Siguiente paso</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-normal text-white sm:text-5xl">
              Agenda una revisión del sitio y define si el piloto aplica.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Estamos habilitando pilotos en Cochabamba y Santa Cruz para operadores de almacenamiento, acopio e industria agroalimentaria.
            </p>
          </div>
          <div className="rounded-lg border border-white/12 bg-brandInk/54 p-5">
            <p className="text-sm font-black text-white">Qué enviar por WhatsApp</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/70">
              <li>Nombre de la empresa o sitio.</li>
              <li>Tipo de almacenamiento: silo, galpón, acopio o planta.</li>
              <li>Ciudad y persona responsable.</li>
            </ul>
            <div className="mt-6 grid gap-3">
              <a
                href={pilotWhatsApp}
                className="inline-flex items-center justify-center rounded-lg bg-brandAmber px-5 py-3 text-sm font-black text-brandInk shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
              >
                <MessageCircle className="mr-2" size={18} aria-hidden="true" />
                Solicitar piloto por WhatsApp
              </a>
              <a
                href="mailto:mesabrabo@gmail.com?subject=Solicitud%20de%20piloto%20AgroEscudo"
                className="inline-flex items-center justify-center rounded-lg border border-white/18 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16"
              >
                <Mail className="mr-2" size={18} aria-hidden="true" />
                Escribir por correo
              </a>
            </div>
            <p className="mt-4 text-xs font-semibold leading-5 text-white/48">
              Sin compromiso de compra. Primero validamos si el caso operativo merece un piloto.
            </p>
            <div className="mt-5 rounded-lg border border-brandAmber/20 bg-brandAmber/10 p-3">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-brandAmber">
                <Radio size={14} aria-hidden="true" />
                Respuesta directa
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/70">
                WhatsApp es el canal principal para coordinar la visita técnica y validar el sitio.
              </p>
            </div>
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-white/52">También en redes</p>
              <div className="mt-3 flex gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`AgroEscudo en ${label}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/14 bg-white/8 px-3 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 hover:border-brandAmber/45 hover:bg-white/14"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
