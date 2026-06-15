const steps = [
  {
    title: "Instalación",
    text: "Instalamos sensores en puntos críticos del almacenamiento."
  },
  {
    title: "Lectura",
    text: "Recolectamos temperatura y humedad de forma continua."
  },
  {
    title: "Alerta",
    text: "Detectamos condiciones fuera de rango y notificamos al responsable."
  },
  {
    title: "Evidencia",
    text: "Generamos historial, bitácora y reportes para tomar decisiones."
  }
];

export function HowItWorks() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <div className="max-w-4xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="section-title mt-4">De una lectura ambiental a una decisión operativa.</h2>
          <p className="section-copy mt-6">
            El sistema está diseñado para que la información no se quede en el sensor: debe llegar al operador como alerta, historial y reporte.
          </p>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative rounded-lg border border-brandGreen/10 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brandGreenDark text-lg font-black text-white">
                  {index + 1}
                </span>
                <span className="hidden h-px flex-1 bg-brandGreen/20 lg:block" />
              </div>
              <h3 className="mt-7 text-lg font-black text-brandText">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brandMuted">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
