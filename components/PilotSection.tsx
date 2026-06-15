import { CheckCircle2, MessageCircle } from "lucide-react";

const visitWhatsApp = "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20agendar%20una%20visita%20t%C3%A9cnica";

const includes = [
  "1 a 3 nodos",
  "Selección de puntos críticos con el operador",
  "Configuración inicial de umbrales",
  "Capacitación breve",
  "Dashboard básico de seguimiento",
  "Alertas por WhatsApp o correo",
  "Reportes semanales",
  "Bitácora de eventos y respuestas",
  "Informe final para decidir escalamiento"
];

const kpis = [
  "Disponibilidad del sistema",
  "Eventos detectados",
  "Tiempo hasta primera respuesta",
  "Horas fuera de rango",
  "Acciones registradas",
  "Claridad para escalar o ajustar"
];

const fit = [
  "Silos, galpones o ambientes con inventario almacenado",
  "Operador responsable disponible para recibir alertas",
  "Interés real en validar datos en sitio, no solo ver una demo"
];

export function PilotSection() {
  return (
    <section id="piloto" className="section-band bg-brandInk text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmber">Piloto operativo</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-[1.05] tracking-normal text-white sm:text-4xl lg:text-5xl">
              Un piloto acotado para decidir con evidencia, no con promesas.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/72 sm:text-lg">
              Durante 60 a 90 días medimos si AgroEscudo ayuda a detectar condiciones de riesgo, responder con más orden y documentar la operación de almacenamiento.
            </p>
            <a
              href={visitWhatsApp}
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-brandAmber px-5 py-3 text-sm font-black text-brandInk shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
            >
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Agendar visita técnica
            </a>
            <p className="mt-4 text-sm font-semibold leading-6 text-white/58">
              La visita sirve para revisar el sitio, elegir puntos de medición y definir si el piloto tiene sentido operativo.
            </p>
          </div>
          <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
            <PilotList title="Qué incluye" items={includes} />
            <PilotList title="KPIs que medimos" items={kpis} />
            <article className="rounded-lg border border-brandAmber/25 bg-brandAmber/12 p-6 backdrop-blur xl:col-span-2">
              <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div>
                  <h3 className="text-xl font-black text-white">Cuándo tiene sentido probarlo</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    AgroEscudo encaja mejor cuando existe inventario concentrado, riesgo económico y una persona responsable de operar alertas.
                  </p>
                </div>
                <ul className="space-y-3">
                  {fit.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/78">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-brandAmber" size={17} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div className="mt-10 rounded-lg border border-white/12 bg-white/8 p-5 text-sm font-semibold leading-7 text-white/68">
          AgroEscudo está en etapa de validación comercial. El objetivo del piloto es producir evidencia útil para el operador y decidir si corresponde escalar, ajustar o descartar el caso de uso.
        </div>
      </div>
    </section>
  );
}

function PilotList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-white/76">
            <CheckCircle2 className="mt-0.5 shrink-0 text-brandAmber" size={17} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
