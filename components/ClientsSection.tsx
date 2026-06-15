import { Building2 } from "lucide-react";

const clients = [
  "Acopiadores",
  "Cooperativas agropecuarias",
  "Molinos",
  "Plantas de alimento balanceado",
  "Agroindustrias",
  "Centros de almacenamiento",
  "Instituciones públicas con infraestructura de acopio",
  "Aseguradoras y banca agrícola en fase posterior"
];

export function ClientsSection() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Segmentos prioritarios</p>
            <h2 className="section-title mt-4">Pensado para quien responde por inventario almacenado.</h2>
          </div>
          <p className="section-copy">
            La primera validación comercial apunta a operadores que ya concentran volumen, tienen riesgo económico y necesitan justificar decisiones con evidencia.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <div key={client} className="flex min-h-28 items-start gap-3 rounded-lg border border-brandGreen/10 bg-brandField p-4">
              <Building2 className="mt-1 shrink-0 text-brandGreenDark" size={20} aria-hidden="true" />
              <p className="text-sm font-black leading-6 text-brandText">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
