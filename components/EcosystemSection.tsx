import Image from "next/image";
import { institutions } from "@/lib/institutions";
import { getMessages, type Locale } from "@/lib/i18n";

const logos = institutions.filter((institution) => institution.logo).slice(0, 6);

export function EcosystemSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).ecosystem;
  return (
    <section id="ecosistema" className="border-y border-brandGreen/10 bg-white py-14 sm:py-16">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <div className="reveal-on-scroll"><p className="eyebrow">{copy.eyebrowTop}</p><h2 className="mt-4 max-w-xl text-2xl font-black leading-tight text-brandText sm:text-3xl">{copy.headline}</h2></div>
          <div className="reveal-on-scroll grid grid-cols-3 gap-px overflow-hidden border border-brandGreen/10 bg-brandGreen/10 sm:grid-cols-6">{logos.map((institution) => <div key={institution.shortName} className="flex h-24 items-center justify-center bg-white p-3 sm:h-28"><Image src={institution.logo!} alt={institution.logoAlt} width={institution.width} height={institution.height} sizes="140px" className="h-full w-full object-contain" /></div>)}</div>
        </div>
        <p className="mt-6 max-w-5xl text-xs font-semibold leading-6 text-brandMuted">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
