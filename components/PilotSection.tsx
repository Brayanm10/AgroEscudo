import { ArrowRight, CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { getContactLinks, getMessages, type Locale } from "@/lib/i18n";

export function PilotSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).pilot;
  const contact = getContactLinks(locale);
  return (
    <section id="piloto" className="section-band relative overflow-hidden bg-brandInk text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div className="reveal-on-scroll">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">{copy.eyebrow}</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.5rem,5.8vw,5.5rem)] font-black leading-[.98]">
              {copy.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              {copy.copy}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-black text-brandAmberLight">
              <MapPin size={17} aria-hidden="true" /> {copy.location}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={contact.technicalVisit} className="btn-amber">
                {copy.primary} <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href={contact.whatsapp} className="btn-ghost-light">
                <MessageCircle size={18} aria-hidden="true" /> {copy.secondary}
              </a>
            </div>
            <p className="mt-4 pr-14 text-xs font-semibold leading-5 text-white/50 lg:pr-0">
              {copy.note}
            </p>
          </div>

          <div className="reveal-on-scroll border border-white/20 bg-white/[0.06] p-6 backdrop-blur sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandAmberLight">{copy.route}</p>
            <ol className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {copy.stages.map((stage, index) => (
                <li key={stage} className="flex items-center gap-4 py-5">
                  <span className="text-xl font-black text-brandAmberLight">0{index + 1}</span>
                  <span className="text-sm font-black text-white">{stage}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-white/50">{copy.observe}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {copy.metrics.map((metric) => (
                <div key={metric} className="flex gap-2 text-sm leading-6 text-white/70">
                  <CheckCircle2 className="mt-1 shrink-0 text-brandAmberLight" size={16} aria-hidden="true" />
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
