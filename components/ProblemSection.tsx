import { Activity, Clock3, Droplets, ThermometerSun } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const signalIcons = [ThermometerSun, Droplets, Activity];

export function ProblemSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).problem;
  return (
    <section id="problema" className="section-band overflow-hidden bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="reveal-on-scroll max-w-4xl">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.title}</h2>
            <p className="section-copy mt-7">
              {copy.copy}
            </p>
            <div className="mt-9 flex items-start gap-4 border-l-2 border-brandAmber pl-5">
              <Clock3 className="mt-1 shrink-0 text-brandGreen" size={22} aria-hidden="true" />
              <p className="max-w-xl text-base font-bold leading-7 text-brandText">
                {copy.support}
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll relative min-h-[420px] overflow-hidden rounded-lg bg-[linear-gradient(145deg,#f3e4bf_0%,#d6a84f_46%,#7a4f16_100%)] p-6 shadow-lift sm:p-8">
            <div className="grain-texture absolute inset-0 opacity-55" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgba(3,31,22,.84),transparent)]" />
            <div className="relative flex h-full min-h-[356px] flex-col justify-end">
              <p className="max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                {copy.visual}
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {copy.signals.map(([label, value], index) => {
                  const Icon = signalIcons[index];
                  return (
                  <div key={label} className="border-t border-white/30 pt-4 text-white">
                    <Icon size={19} className="text-brandAmberLight" aria-hidden="true" />
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.13em] text-white/60">{label}</p>
                    <p className="mt-1 text-xs font-bold leading-5 sm:text-sm">{value}</p>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
