import { BellRing, ClipboardCheck, Radio, Wrench } from "lucide-react";
import { SystemArchitecture } from "@/components/SystemArchitecture";

const steps = [
  { icon: Wrench, title: "Instalamos", text: "El nodo se adapta al sitio y registra variables acordadas con el operador." },
  { icon: Radio, title: "Monitoreamos", text: "Las lecturas se guardan y transmiten periódicamente, incluso con conectividad intermitente." },
  { icon: BellRing, title: "Alertamos", text: "El sistema identifica condiciones fuera de los rangos configurados para el piloto." },
  { icon: ClipboardCheck, title: "Documentamos", text: "El historial, las alertas y las acciones quedan disponibles para seguimiento y reportes." }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-band bg-white">
      <div className="container-page">
        <div className="reveal-on-scroll max-w-4xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section-title mt-5">Del sensor a la decisión.</h2>
        </div>
        <div className="mt-12">
          <SystemArchitecture />
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="reveal-on-scroll grid gap-5 py-8 sm:grid-cols-[90px_1fr_1.2fr] sm:items-center lg:py-10">
              <span className="text-5xl font-black text-brandAmber/50">0{index + 1}</span>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brandGreenDark text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-black text-brandText">{title}</h3>
              </div>
              <p className="text-base leading-8 text-brandMuted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
