import { BellRing, ClipboardCheck, Radio, Wrench } from "lucide-react";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [Wrench, Radio, BellRing, ClipboardCheck];

export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).how;
  return (
    <section id="como-funciona" className="section-band bg-white">
      <div className="container-page">
        <div className="reveal-on-scroll max-w-4xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-5">{copy.title}</h2>
        </div>
        <div className="mt-12">
          <SystemArchitecture locale={locale} />
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {copy.steps.map(([title, text], index) => {
            const Icon = icons[index];
            return (
            <article key={title} className="reveal-on-scroll grid gap-5 py-8 sm:grid-cols-[90px_1fr_1.2fr] sm:items-center lg:py-10">
              <span className="text-5xl font-black text-brandAmber/50">0{index + 1}</span>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brandGreenDark text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-black text-brandText">{title}</h3>
              </div>
              <p className="text-base leading-8 text-brandMuted">{text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
