import { BellRing, ChartNoAxesCombined, ClipboardList, FileText, Gauge, Radio } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const productIcons = [Radio, BellRing, ClipboardList, FileText];
const stepIcons = [Gauge, Radio, BellRing];

export function ProductSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).product;
  const stepLabels = locale === "en" ? ["Measure", "Detect", "Act"] : locale === "pt-BR" ? ["Medir", "Detectar", "Agir"] : locale === "qu-BO" ? ["Tupuy", "Tariy", "Ruway"] : ["Medir", "Detectar", "Actuar"];
  return (
    <section id="producto" className="section-band bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div className="reveal-on-scroll"><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title mt-5">{copy.title}</h2></div>
          <div className="reveal-on-scroll"><p className="section-copy">{copy.copy}</p><div className="mt-7 flex flex-wrap gap-2">{stepLabels.map((label, index) => { const Icon = stepIcons[index]; return <div key={label} className="inline-flex min-h-11 items-center gap-2 border border-brandGreen/15 bg-brandField px-4 text-sm font-black text-brandGreenDark"><Icon size={17} aria-hidden="true" />{label}</div>; })}</div></div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-brandGreen/10 bg-brandGreen/10 md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map(([title, text], index) => { const Icon = productIcons[index]; return <article key={title} className="reveal-on-scroll min-h-64 bg-white p-6 sm:p-7"><span className="flex h-12 w-12 items-center justify-center bg-brandGreenDark text-brandAmberLight"><Icon size={22} aria-hidden="true" /></span><h3 className="mt-8 text-xl font-black text-brandText">{title}</h3><p className="mt-4 text-sm leading-7 text-brandMuted">{text}</p></article>; })}
        </div>
      </div>
    </section>
  );
}
