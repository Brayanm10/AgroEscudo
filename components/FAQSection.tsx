import { getMessages, type Locale } from "@/lib/i18n";

export function FAQSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).faq;
  return (
    <section id="faq" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title mt-4">{copy.title}</h2>
            <p className="section-copy mt-6">
              {copy.copy}
            </p>
          </div>
          <div className="grid gap-3">
            {copy.items.map(([question, answer]) => (
              <article key={question} className="rounded-lg border border-brandGreen/10 bg-white p-5 shadow-soft">
                <h3 className="text-lg font-black leading-7 text-brandText">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-brandMuted">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
