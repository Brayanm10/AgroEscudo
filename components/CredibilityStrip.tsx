import { Cpu, MapPin, Newspaper, ShieldCheck } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

export function CredibilityStrip({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).credibility;
  const items = [[Newspaper, copy.press], [ShieldCheck, copy.ecosystem], [Cpu, copy.technology], [MapPin, copy.local]] as const;
  return (
    <section className="border-y border-brandGreen/10 bg-white" aria-label="AgroEscudo credibilidad">
      <div className="container-page grid grid-cols-2 divide-x divide-y divide-brandGreen/10 lg:grid-cols-4 lg:divide-y-0">
        {items.map(([Icon, label]) => <div key={label} className="flex min-h-24 items-center gap-3 px-3 py-5 sm:px-5"><Icon size={19} className="shrink-0 text-brandAmberDark" aria-hidden="true" /><span className="text-xs font-black leading-5 text-brandText sm:text-sm">{label}</span></div>)}
      </div>
    </section>
  );
}
