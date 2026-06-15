import { BellRing, ClipboardList, FileText, ThermometerSun } from "lucide-react";

const solutions = [
  {
    icon: ThermometerSun,
    title: "SiloSensor",
    text: "Lecturas de temperatura y humedad en puntos críticos definidos con el operador del sitio."
  },
  {
    icon: BellRing,
    title: "Alertas tempranas",
    text: "Avisos por umbral para que el responsable decida si ventila, inspecciona o registra una acción."
  },
  {
    icon: ClipboardList,
    title: "Bitácora operativa",
    text: "Evidencia de eventos, responsables y respuestas para ordenar la operación y el seguimiento."
  },
  {
    icon: FileText,
    title: "Reportes",
    text: "Resumen semanal con lecturas, eventos y recomendación de escalamiento basada en el piloto."
  }
];

export function SolutionSection() {
  return (
    <section id="solucion" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Solución</p>
            <h2 className="section-title mt-4">Una capa simple de control para almacenamiento agrícola.</h2>
          </div>
          <p className="section-copy">
            La primera versión se enfoca en lo que un gerente de planta necesita para validar valor: medir variables críticas, alertar fuera de rango y dejar evidencia de respuesta.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brandGreenDark text-white">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-black tracking-normal text-brandText">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brandMuted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
