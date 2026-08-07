import Image from "next/image";
import { getMessages, type Locale } from "@/lib/i18n";

export function SystemArchitecture({ compact = false, locale = "es-BO" }: { compact?: boolean; locale?: Locale }) {
  const copy = getMessages(locale).architecture;
  return (
    <figure className="reveal-on-scroll">
      <div
        className="overflow-x-auto rounded-lg border border-brandGreen/10 bg-[#f7faf7] shadow-soft"
        role="region"
        tabIndex={0}
        aria-label={copy.aria}
      >
        <Image
          src="/images/agroescudo/system/arquitectura-agroescudo.svg"
          alt={copy.alt}
          width={1600}
          height={900}
          sizes="(max-width: 1024px) 100vw, 1280px"
          className="h-auto w-full min-w-[840px] md:min-w-0"
        />
      </div>
      <figcaption className="mt-4 text-xs font-semibold leading-5 text-brandMuted">
        {copy.caption}
      </figcaption>
      <div className={`mt-7 grid gap-px overflow-hidden rounded-lg border border-brandGreen/10 bg-brandGreen/10 ${compact ? "sm:grid-cols-5" : "md:grid-cols-5"}`}>
        {copy.items.map(([label, detail], index) => (
          <div key={label} className="relative bg-white px-4 py-5">
            <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandAmberDark">0{index + 1}</p>
            <p className="mt-2 text-sm font-black text-brandText">{label}</p>
            <p className="mt-1 text-xs leading-5 text-brandMuted">{detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
