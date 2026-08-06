import { faqs } from "@/content/faqs";

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
