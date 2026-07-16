import Image from "next/image";
import { Building2, GraduationCap, Network, ShieldCheck } from "lucide-react";
import { institutions } from "@/lib/institutions";

const categoryIcons = {
  Preaceleración: Network,
  "Incubación tecnológica": Building2,
  "Respaldo académico": GraduationCap,
  "Acompañamiento técnico": ShieldCheck
};

const logoInstitutions = institutions.filter((institution) => institution.logo);

export function EcosystemSection() {
  return (
    <section id="ecosistema" aria-labelledby="ecosistema-title" className="section-band overflow-hidden bg-[#f7faf7]">
      <div className="container-page">
        <div className="reveal-on-scroll overflow-hidden rounded-lg bg-brandGreenDark text-white shadow-lift">
          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:px-10 lg:py-10">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">Ecosistema institucional</p>
              <p className="mt-4 max-w-xl text-2xl font-black leading-tight sm:text-3xl">
                Respaldados por un ecosistema que impulsa la innovación boliviana.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-md bg-white/15 sm:grid-cols-6">
              {logoInstitutions.map((institution) => (
                <div key={institution.shortName} className="flex h-24 items-center justify-center bg-white px-3 py-4 sm:h-28">
                  <Image
                    src={institution.logo!}
                    alt={institution.logoAlt}
                    width={institution.width}
                    height={institution.height}
                    sizes="(max-width: 640px) 28vw, 140px"
                    className="institution-logo h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="eyebrow">Organizaciones que nos respaldan</p>
            <h2 id="ecosistema-title" className="section-title mt-5">
              Apoyo real para avanzar con más rigor.
            </h2>
          </div>
          <p className="section-copy reveal-on-scroll">
            AgroEscudo fortalece su desarrollo tecnológico, comercial y académico con el respaldo de organizaciones bolivianas vinculadas a la innovación, la incubación empresarial y la formación técnica.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {institutions.map((institution) => {
            const Icon = categoryIcons[institution.category];
            const isTextOnly = !institution.logo;
            return (
              <article
                key={institution.name}
                className={`institution-card reveal-on-scroll group rounded-lg border border-brandGreen/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brandAmber/60 hover:shadow-soft ${isTextOnly ? "grid gap-6 md:col-span-2 md:grid-cols-[.42fr_.58fr] md:items-center xl:col-span-3" : "flex min-h-[330px] flex-col"}`}
              >
                <div className="flex h-32 items-center justify-center rounded-md border border-brandGreen/[0.08] bg-[#fbfdfb] p-4">
                  {institution.logo ? (
                    <Image
                      src={institution.logo}
                      alt={institution.logoAlt}
                      width={institution.width}
                      height={institution.height}
                      sizes="(max-width: 768px) 80vw, (max-width: 1280px) 42vw, 360px"
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="flex items-center gap-4 text-brandGreenDark">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-brandGreenDark text-white">
                        <GraduationCap size={28} aria-hidden="true" />
                      </span>
                      <span className="max-w-[12rem] text-sm font-black leading-5">Facultad UMSS</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className={`${isTextOnly ? "" : "mt-6"} flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-brandGreen`}>
                    <Icon size={15} aria-hidden="true" /> {institution.category}
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-tight text-brandText">{institution.shortName}</h3>
                  <p className="mt-3 text-sm leading-6 text-brandMuted">{institution.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="reveal-on-scroll mt-8 border-l-2 border-brandAmber bg-white px-5 py-4 text-xs font-semibold leading-6 text-brandMuted">
          El respaldo corresponde a procesos de acompañamiento, incubación, preaceleración y articulación institucional; no implica inversión, certificación ni relación comercial.
        </p>
      </div>
    </section>
  );
}
