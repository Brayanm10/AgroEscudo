import { Building2, RadioTower, WifiOff } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";

const icons = [Building2, WifiOff, RadioTower];

export function WhySection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).why;
  return (
    <section className="section-band bg-[#f4f7f4]">
      <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div className="reveal-on-scroll"><p className="eyebrow">{copy.eyebrow}</p><h2 className="section-title mt-5">{copy.title}</h2></div>
        <div className="divide-y divide-brandGreen/15 border-y border-brandGreen/15">{copy.items.map(([title, text], index) => { const Icon = icons[index]; return <article key={title} className="reveal-on-scroll grid gap-4 py-7 sm:grid-cols-[52px_1fr]"><span className="flex h-11 w-11 items-center justify-center bg-white text-brandGreenDark shadow-soft"><Icon size={20} aria-hidden="true" /></span><div><h3 className="text-lg font-black text-brandText">{title}</h3><p className="mt-2 text-sm leading-7 text-brandMuted">{text}</p></div></article>; })}</div>
      </div>
    </section>
  );
}
