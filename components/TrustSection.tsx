import { Cpu, Database, ServerCog, ShieldCheck } from "lucide-react";

const trust = [
  {
    icon: Cpu,
    title: "Hardware IoT",
    text: "Sensores enfocados en las variables mínimas que cambian decisiones de almacenamiento."
  },
  {
    icon: ServerCog,
    title: "Tolerancia operativa",
    text: "Diseño pensado para conectividad variable, cortes y rutinas reales de planta o acopio."
  },
  {
    icon: Database,
    title: "Evidencia documentada",
    text: "Historial, bitácora y reportes que ayudan a explicar qué ocurrió y cómo se respondió."
  },
  {
    icon: ShieldCheck,
    title: "Enfoque B2B",
    text: "Priorizado para organizaciones que necesitan operar, justificar y escalar con disciplina."
  }
];

export function TrustSection() {
  return (
    <section className="section-band bg-brandField">
      <div className="container-page">
        <div className="max-w-4xl">
          <p className="eyebrow">Confianza técnica</p>
          <h2 className="section-title mt-4">Suficientemente simple para pilotear. Suficientemente serio para operar.</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <Icon size={24} className="text-brandGreenDark" aria-hidden="true" />
              <h3 className="mt-6 text-lg font-black text-brandText">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brandMuted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
