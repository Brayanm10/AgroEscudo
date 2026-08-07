import { ArrowUpRight, CameraOff } from "lucide-react";
import { pressItems } from "@/content/press";
import { getMessages, type Locale } from "@/lib/i18n";

export function AgrotechSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).agrotech;
  const coverage = pressItems.find((item) => item.id === "iica-agrotech-bolivia");
  return (
    <section id="agrotech" className="border-y border-brandGreen/10 bg-brandField py-12 sm:py-16">
      <div className="container-page grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <span className="reveal-on-scroll flex h-14 w-14 items-center justify-center bg-brandGreenDark text-brandAmberLight"><CameraOff size={24} aria-hidden="true" /></span>
        <div className="reveal-on-scroll"><p className="eyebrow">{copy.eyebrow}</p><h2 className="mt-3 text-2xl font-black text-brandText sm:text-3xl">{copy.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-brandMuted">{copy.copy}</p></div>
        <a href={coverage?.href} target="_blank" rel="noreferrer" className="btn-secondary reveal-on-scroll">{copy.link}<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
