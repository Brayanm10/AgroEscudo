const faqs = [
  {
    question: "¿Qué monitorea AgroEscudo?",
    answer:
      "AgroEscudo monitorea temperatura y humedad en silos, galpones y centros de acopio para detectar condiciones de riesgo postcosecha y apoyar decisiones operativas."
  },
  {
    question: "¿AgroEscudo funciona sin internet permanente?",
    answer:
      "El piloto se diseña considerando conectividad variable. La arquitectura contempla operación en campo y seguimiento de lecturas para no depender de una conexión ideal."
  },
  {
    question: "¿Dónde puede instalarse?",
    answer:
      "Puede evaluarse en silos, galpones, centros de acopio, molinos, cooperativas, plantas de alimentos balanceados y agroindustrias con inventario agrícola almacenado."
  },
  {
    question: "¿Está disponible en Cochabamba y Santa Cruz?",
    answer:
      "Sí. La primera etapa de validación comercial prioriza instalaciones piloto en Cochabamba y Santa Cruz, Bolivia."
  },
  {
    question: "¿Cómo se solicita un piloto?",
    answer:
      "El primer paso es escribir por WhatsApp para coordinar una revisión del sitio. Con esa información se define si el caso operativo merece un piloto de 60 a 90 días."
  },
  {
    question: "¿AgroEscudo reemplaza el manejo técnico del silo?",
    answer:
      "No. AgroEscudo no reemplaza la experiencia del operador. Aporta datos, alertas, historial y evidencia para apoyar decisiones de manejo."
  },
  {
    question: "¿Los sensores se venden o se entregan como servicio?",
    answer:
      "En esta etapa se prioriza el piloto operativo. El modelo final se define según el sitio, los nodos requeridos, el acompañamiento y la necesidad de reportes."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 className="section-title mt-4">Lo básico para evaluar AgroEscudo sin vueltas.</h2>
            <p className="section-copy mt-6">
              Respuestas directas para operadores que están considerando monitoreo de silos, granos almacenados e IoT agrícola en Bolivia.
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-brandGreen/10 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-black leading-7 text-brandText">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-brandMuted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
