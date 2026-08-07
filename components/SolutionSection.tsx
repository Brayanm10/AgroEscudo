import { BellRing, Cloud, Cpu, RadioTower, Router } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [Cpu, RadioTower, Router, Cloud, BellRing];

export function SolutionSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).solution;
  return (
    <section id="producto" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.title}</h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            {copy.copy}
          </p>
        </div>

        <div className="reveal-on-scroll mt-14 overflow-hidden rounded-lg border border-brandGreen/10 bg-brandInk px-5 py-10 shadow-lift sm:px-8 lg:px-10">
          <div className="system-flow grid gap-3 md:grid-cols-5">
            {copy.items.map(([label, detail], index) => {
              const Icon = icons[index];
              return (
              <div key={label} className="system-node relative min-w-0">
                <div className="flex h-full min-h-40 flex-col justify-between border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-start justify-between">
                    <Icon size={26} className="text-brandAmberLight" aria-hidden="true" />
                    <span className="text-xs font-black text-white/30">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{label}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{detail}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-bold text-white/70">{copy.status}</p>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brandAmberLight">{copy.flow}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
