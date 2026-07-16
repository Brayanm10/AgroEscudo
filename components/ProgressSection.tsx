const progress = [
  { title: "Nodo y comunicación LoRa", status: "Probado en laboratorio", tone: "amber" },
  { title: "API y almacenamiento de lecturas", status: "Desarrollado", tone: "green" },
  { title: "Dashboard web", status: "Desplegado", tone: "green" },
  { title: "Aplicación Android", status: "Versión MVP", tone: "green" },
  { title: "Recuperación ante desconexión", status: "En validación", tone: "amber" },
  { title: "Instalación en operación real", status: "Próximo piloto", tone: "outline" }
];

export function ProgressSection() {
  return (
    <section id="avances" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">Avances verificables</p>
            <h2 className="section-title mt-5">Del prototipo a una operación piloto.</h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            Mostramos la etapa de cada componente tal como es hoy. La siguiente prueba relevante es conectar la tecnología desarrollada con condiciones reales de almacenamiento.
          </p>
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {progress.map((item, index) => (
            <div key={item.title} className="reveal-on-scroll grid gap-3 py-5 sm:grid-cols-[64px_1fr_auto] sm:items-center">
              <span className="text-sm font-black text-brandGreen/40">0{index + 1}</span>
              <p className="text-base font-black text-brandText sm:text-lg">{item.title}</p>
              <span className={`status-badge status-${item.tone}`}>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
