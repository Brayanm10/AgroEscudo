import { BellRing, ClipboardCheck, Radio, Wrench } from "lucide-react";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [Wrench, Radio, BellRing, ClipboardCheck];

export function HowItWorks({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).how;
  return (
    <section id="como-funciona" className="section-band overflow-hidden bg-[#f6f8f6]">
      <div className="container-page">
        <div className="reveal-on-scroll max-w-5xl">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title mt-5">{copy.title}</h2>
        </div>
        <div className="mt-12 lg:-mx-4">
          <SystemArchitecture locale={locale} />
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-brandGreen/10 bg-brandGreen/10 md:grid-cols-4">
          {copy.steps.map(([title, text], index) => {
            const Icon = icons[index];
            return (
            <article key={title} className="reveal-on-scroll bg-white p-6 lg:p-7">
              <span className="text-3xl font-black text-brandAmberDark">0{index + 1}</span>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brandGreenDark text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-black text-brandText">{title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-brandMuted">{text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
