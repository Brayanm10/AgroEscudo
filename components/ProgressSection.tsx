import { getMessages, type Locale } from "@/lib/i18n";

const tones = ["amber", "green", "green", "green", "amber", "outline"];

export function ProgressSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).progress;
  return (
    <section id="avances" className="section-band bg-brandField">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 className="section-title mt-5">{copy.title}</h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            {copy.copy}
          </p>
        </div>
        <div className="mt-14 divide-y divide-brandGreen/10 border-y border-brandGreen/10">
          {copy.items.map(([title, status], index) => (
            <div key={title} className="reveal-on-scroll grid gap-3 py-5 sm:grid-cols-[64px_1fr_auto] sm:items-center">
              <span className="text-sm font-black text-brandGreen/40">0{index + 1}</span>
              <p className="text-base font-black text-brandText sm:text-lg">{title}</p>
              <span className={`status-badge status-${tones[index]}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
