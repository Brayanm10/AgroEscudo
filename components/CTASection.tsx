import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const socialIcons = { Instagram, Facebook };

export function CTASection() {
  return (
    <section id="contacto" className="bg-brandAmberLight py-14 sm:py-16">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="reveal-on-scroll">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandGreenDark">Contacto directo</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-brandInk sm:text-4xl">
            Cuéntanos qué almacenas, dónde y quién responde por la operación.
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-brandGreenDark/70"><MapPin size={17} aria-hidden="true" /> Cochabamba y Santa Cruz, Bolivia</p>
        </div>
        <div className="reveal-on-scroll flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={siteConfig.whatsappUrl} className="btn-primary min-w-56"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a>
          <a href={siteConfig.emailUrl} className="inline-flex min-h-12 min-w-56 items-center justify-center gap-2 rounded-md border border-brandInk/20 bg-white px-5 py-3 text-sm font-black text-brandInk transition hover:-translate-y-0.5 hover:border-brandGreen"><Mail size={18} aria-hidden="true" /> Correo</a>
          <div className="flex justify-center gap-2 lg:justify-start">
            {siteConfig.socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label as keyof typeof socialIcons];
              return <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`AgroEscudo en ${label}`} className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brandInk/20 bg-white/70 text-brandGreenDark transition hover:bg-white"><Icon size={18} aria-hidden="true" /></a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
