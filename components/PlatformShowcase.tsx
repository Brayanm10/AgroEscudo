import Image from "next/image";
import { BellRing, ChartNoAxesCombined, FileText, History } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [ChartNoAxesCombined, BellRing, History, FileText];

export function PlatformShowcase({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).platform;
  return (
    <section id="plataforma" className="section-band overflow-hidden bg-brandInk text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <div className="reveal-on-scroll">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">{copy.eyebrow}</p>
            <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.6rem)] font-black leading-[1]">{copy.title}</h2>
            <p className="mt-7 text-lg leading-8 text-white/70">
              {copy.copy}
            </p>
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5">
              {copy.items.map((label, index) => {
                const Icon = icons[index];
                return (
                <div key={label} className="flex items-center gap-3 border-t border-white/20 pt-4">
                  <Icon size={18} className="text-brandAmberLight" aria-hidden="true" />
                  <span className="text-sm font-black text-white/80">{label}</span>
                </div>
                );
              })}
            </div>
          </div>

          <div className="reveal-on-scroll lg:translate-x-8">
            <div className="overflow-hidden rounded-lg border border-white/20 bg-[#e9eef0] shadow-[0_35px_90px_rgba(0,0,0,.38)]">
              <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-white px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d85b4f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-brandAmber" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a9f71]" />
                <span className="ml-3 text-[10px] font-bold text-black/40">{copy.window}</span>
              </div>
              <Image
                src="/images/platform-dashboard.webp"
                alt={copy.alt}
                width={1600}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-xs font-semibold leading-5 text-white/50">
              {copy.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
