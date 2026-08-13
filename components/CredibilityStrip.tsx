import { Cpu, MapPin, Newspaper, ShieldCheck } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

export function CredibilityStrip({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).credibility;
  const items = [[Newspaper, copy.press], [ShieldCheck, copy.ecosystem], [Cpu, copy.technology], [MapPin, copy.local]] as const;
  return (
    <section className="border-y border-white/10 bg-brandGreenDark text-white" aria-label={`${copy.press} · ${copy.ecosystem}`}>
      <div className="container-page grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
        {items.map(([Icon, label], index) => <div key={label} className="credibility-item flex min-h-24 items-center gap-3 px-3 py-5 sm:px-5"><span className="text-[10px] font-black text-white/70">0{index + 1}</span><Icon size={19} className="shrink-0 text-brandAmberLight" aria-hidden="true" /><span className="text-xs font-black leading-5 text-white sm:text-sm">{label}</span></div>)}
      </div>
    </section>
  );
}
