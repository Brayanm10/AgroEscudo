import { Boxes, Factory, ScanSearch } from "lucide-react";

const segments = [
  {
    icon: Boxes,
    title: "Protección de inventario",
    audience: "Silos · galpones · centros de acopio",
    risk: "Inventario concentrado expuesto a cambios que una ronda ocasional puede no revelar.",
    decision: "Priorizar inspección, ventilación o seguimiento según evidencia."
  },
  {
    icon: Factory,
    title: "Continuidad operativa",
    audience: "Molinos · alimentos balanceados · agroindustria",
    risk: "Una condición fuera de rango puede afectar recepción, almacenamiento y programación de planta.",
    decision: "Coordinar respuesta antes de que el evento comprometa el proceso siguiente."
  },
  {
    icon: ScanSearch,
    title: "Supervisión y trazabilidad",
    audience: "Cooperativas · calidad · administradores multisitio",
    risk: "Sin historial común, comparar sitios y justificar acciones consume tiempo operativo.",
    decision: "Revisar eventos, responsables y acciones desde una fuente compartida."
  }
];

export function ClientsSection() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <div className="reveal-on-scroll max-w-4xl">
          <p className="eyebrow">Para quién es</p>
          <h2 className="section-title mt-5">Para operaciones donde conocer tarde cuesta más.</h2>
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {segments.map(({ icon: Icon, title, audience, risk, decision }) => (
            <article key={title} className="reveal-on-scroll grid gap-6 py-9 lg:grid-cols-[.8fr_1fr_1fr] lg:items-start">
              <div>
                <Icon size={24} className="text-brandGreen" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black text-brandText">{title}</h3>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-brandAmberDark">{audience}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandMuted">Riesgo operativo</p>
                <p className="mt-3 text-sm leading-7 text-brandMuted">{risk}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandMuted">Decisión que mejora</p>
                <p className="mt-3 text-sm font-bold leading-7 text-brandText">{decision}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
