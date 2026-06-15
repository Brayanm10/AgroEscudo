import Image from "next/image";
import { AlertTriangle, EyeOff, Timer } from "lucide-react";

const problems = [
  {
    icon: Timer,
    title: "Decisión tardía",
    text: "Si el calentamiento se detecta por olor, condensación o inspección casual, la respuesta ya parte con desventaja."
  },
  {
    icon: EyeOff,
    title: "Falta de evidencia",
    text: "Sin historial de temperatura, humedad y acciones, discutir responsabilidades consume más tiempo que corregir la operación."
  },
  {
    icon: AlertTriangle,
    title: "Merma operativa",
    text: "Cada hora fuera de rango puede impactar calidad, peso, inocuidad y valor comercial del inventario almacenado."
  }
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-band bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_0.72fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow">Problema</p>
            <h2 className="section-title mt-4">
              El grano no se pierde de golpe. Se deteriora mientras la operación trabaja a ciegas.
            </h2>
            <p className="section-copy mt-6">
              En muchos centros de acopio, la condición del lote depende de rondas manuales y experiencia del operador. AgroEscudo no reemplaza esa experiencia: la convierte en datos, alertas y evidencia para actuar antes.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-brandGreen/10 bg-brandGreenDark p-3 shadow-lift">
            <div className="relative h-48 overflow-hidden rounded-md">
              <Image
                src="/agro-field-premium.png"
                alt="Inventario agrícola monitoreado"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brandInk/88 via-brandInk/38 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brandInk/92 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg border border-white/14 bg-brandInk/66 p-3 shadow-soft backdrop-blur-sm">
                <Image src="/logo-mark.png" alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-lg bg-white p-1" />
                <div>
                  <p className="text-base font-black text-white drop-shadow">AgroEscudo</p>
                  <p className="text-xs font-black text-brandAmber drop-shadow">Visibilidad antes del daño visible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card group">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brandGreenDark text-brandAmber shadow-soft transition group-hover:scale-105">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-black tracking-normal text-brandText">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brandMuted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
