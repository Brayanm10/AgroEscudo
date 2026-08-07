import { Boxes, Factory, ScanSearch } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [Boxes, Factory, ScanSearch];

export function ClientsSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).clients;
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <div className="reveal-on-scroll max-w-4xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-5">{copy.title}</h2>
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {copy.items.map(([title, audience, risk, decision], index) => {
            const Icon = icons[index];
            return (
            <article key={title} className="reveal-on-scroll grid gap-6 py-9 lg:grid-cols-[.8fr_1fr_1fr] lg:items-start">
              <div>
                <Icon size={24} className="text-brandGreen" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black text-brandText">{title}</h3>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-brandAmberDark">{audience}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandMuted">{copy.riskLabel}</p>
                <p className="mt-3 text-sm leading-7 text-brandMuted">{risk}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandMuted">{copy.decisionLabel}</p>
                <p className="mt-3 text-sm font-bold leading-7 text-brandText">{decision}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
