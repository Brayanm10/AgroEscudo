import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  BellRing,
  ChartNoAxesCombined,
  Download,
  ExternalLink,
  Facebook,
  History,
  Home,
  Instagram,
  Mail,
  MessageCircle,
  RadioTower,
  ShieldCheck,
  ThermometerSun,
  Waves
} from "lucide-react";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { qrInstitutions } from "@/lib/institutions";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conoce AgroEscudo | Tecnología postcosecha boliviana",
  description:
    "Conoce AgroEscudo: monitoreo inteligente de temperatura y humedad, alertas e historial para proteger granos almacenados.",
  alternates: { canonical: "/qr" },
  openGraph: {
    title: "AgroEscudo | El riesgo no avisa. AgroEscudo sí.",
    description: "Tecnología postcosecha desarrollada en Bolivia para anticipar riesgos en granos almacenados.",
    url: absoluteUrl("/qr"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "AgroEscudo, tecnología boliviana para protección postcosecha"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroEscudo | Tecnología postcosecha boliviana",
    description: "Monitoreo inteligente para anticipar riesgos en granos almacenados.",
    images: [absoluteUrl(siteConfig.ogImage)]
  }
};

const capabilities = [
  {
    icon: ThermometerSun,
    title: "Monitoreo continuo",
    description: "Lecturas de temperatura y humedad organizadas para supervisión operativa."
  },
  {
    icon: BellRing,
    title: "Alertas configurables",
    description: "Avisos cuando una condición supera los umbrales definidos para el sitio."
  },
  {
    icon: History,
    title: "Historial operativo",
    description: "Evidencia para revisar tendencias, eventos y decisiones tomadas."
  }
];

export default function QrPage() {
  const laRazon = siteConfig.press[0];
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-brandText">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link href="/" className="rounded-md bg-white px-3 py-2 shadow-lift" aria-label="Ir a la página principal de AgroEscudo">
            <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1456} height={416} priority className="h-9 w-auto sm:h-11" />
          </Link>
          <a href={siteConfig.qrWhatsappUrl} className="hidden min-h-11 items-center gap-2 rounded-md border border-white/25 bg-white/10 px-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex">
            <MessageCircle size={17} aria-hidden="true" /> Hablar con AgroEscudo
          </a>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[90svh] items-end overflow-hidden bg-brandInk pb-14 pt-28 text-white sm:pb-16 lg:items-center lg:pb-12 lg:pt-24">
          <Image
            src={siteConfig.media.hero}
            alt="Visual conceptual de silos y almacenamiento agrícola con monitoreo AgroEscudo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,22,16,.97)_0%,rgba(2,22,16,.84)_42%,rgba(2,22,16,.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,22,16,.88)_0%,transparent_48%)] lg:bg-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(242,198,109,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(242,198,109,.06)_1px,transparent_1px)] bg-[size:54px_54px]" />

          <div className="container-page relative grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div className="animate-fade-up max-w-4xl">
              <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">
                <span className="status-pulse h-2 w-2 rounded-full bg-emerald-300" /> AgTech boliviana para la protección postcosecha
              </p>
              <h1 className="mt-6 text-[clamp(3.25rem,8vw,7.7rem)] font-black leading-[.86] tracking-normal text-white">
                El riesgo no avisa.<br />
                <span className="text-brandAmberLight">AgroEscudo sí.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/78 sm:text-xl">
                Monitoreo inteligente de temperatura y humedad para anticipar condiciones que pueden comprometer granos almacenados.
              </p>
              <p className="mt-4 text-xs font-bold text-white/50">Imagen conceptual del sistema. No corresponde a una instalación o piloto ejecutado.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={siteConfig.qrWhatsappUrl} className="btn-amber">
                  <MessageCircle size={19} aria-hidden="true" /> Hablar con AgroEscudo
                </a>
                <Link href="/" className="btn-ghost-light">
                  <Home size={18} aria-hidden="true" /> Ver landing completa
                </Link>
                <a href="#sistema" className="btn-ghost-light">
                  Conocer el sistema <ArrowDown size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hidden justify-self-end lg:block">
              <div className="w-[390px] border border-white/20 bg-brandInk/60 p-5 shadow-[0_28px_80px_rgba(0,0,0,.32)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-brandAmberLight">Lectura demostrativa</p>
                    <p className="mt-1 text-sm font-bold text-white/60">Zona de almacenamiento</p>
                  </div>
                  <span className="animate-sensor-ping h-3 w-3 rounded-full bg-emerald-300" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <QrReading icon={ThermometerSun} label="Temperatura" value="Monitoreando" />
                  <QrReading icon={Waves} label="Humedad" value="Registrando" />
                </div>
                <div className="mt-3 flex items-center gap-3 border border-brandAmberLight/35 bg-brandAmberLight/10 p-4">
                  <BellRing size={20} className="text-brandAmberLight" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-black text-white">Alerta temprana</p>
                    <p className="mt-1 text-[11px] text-white/55">Umbrales definidos por operación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sistema" className="section-band relative z-10 border-b border-brandGreen/10 bg-white shadow-soft">
          <div className="container-page">
            <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Conexión del sistema</p>
                <h2 className="section-title mt-5">Así viaja la información desde el silo.</h2>
              </div>
              <p className="section-copy">
                Las sondas registran condiciones dentro del grano. El nodo transmite por LoRa al gateway, que conserva las lecturas y las sincroniza con la plataforma cuando dispone de internet.
              </p>
            </div>
            <div className="mt-12"><SystemArchitecture compact /></div>
          </div>
        </section>

        <section className="section-band bg-[#f7faf7]">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div className="reveal-on-scroll">
                <p className="eyebrow">Sistema AgroEscudo</p>
                <h2 className="section-title mt-5">Visibilidad para actuar antes.</h2>
              </div>
              <p className="section-copy reveal-on-scroll">
                El sistema conecta medición, comunicación y seguimiento en una experiencia diseñada para supervisar condiciones y documentar la operación.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-brandGreen/10 bg-brandGreen/10 md:grid-cols-3">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <article key={title} className="reveal-on-scroll min-h-[230px] bg-white p-7">
                  <Icon size={28} className="text-brandGreen" aria-hidden="true" />
                  <h3 className="mt-8 text-xl font-black text-brandText">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brandMuted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-band bg-brandInk text-white">
          <div className="container-page grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
            <div className="reveal-on-scroll">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">Plataforma desarrollada</p>
              <h2 className="mt-5 text-[clamp(2.3rem,5vw,4.8rem)] font-black leading-[.96]">La condición del sitio, en una sola vista.</h2>
              <div className="mt-8 grid gap-4 text-sm font-black text-white/75">
                <p className="flex items-center gap-3"><ChartNoAxesCombined size={18} className="text-brandAmberLight" aria-hidden="true" /> Estado general</p>
                <p className="flex items-center gap-3"><BellRing size={18} className="text-brandAmberLight" aria-hidden="true" /> Alertas e historial</p>
                <p className="flex items-center gap-3"><ShieldCheck size={18} className="text-brandAmberLight" aria-hidden="true" /> Evidencia operativa</p>
              </div>
            </div>
            <div className="reveal-on-scroll overflow-hidden rounded-lg border border-white/20 bg-[#e9eef0] shadow-[0_35px_90px_rgba(0,0,0,.38)]">
              <div className="flex h-9 items-center gap-2 bg-white px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d85b4f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-brandAmber" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#4a9f71]" />
              </div>
              <Image src={siteConfig.media.dashboard} alt="Plataforma AgroEscudo con estado, alertas e indicadores operativos" width={1600} height={1000} sizes="(max-width: 1024px) 100vw, 62vw" className="h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="section-band bg-white">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div className="reveal-on-scroll">
                <p className="eyebrow">Respaldo y evidencia</p>
                <h2 className="section-title mt-5">Construido en Bolivia. Conectado con quienes impulsan innovación.</h2>
                <p className="section-copy mt-7">
                  AgroEscudo participa en procesos de incubación, preaceleración y acompañamiento académico que fortalecen su desarrollo tecnológico y comercial.
                </p>
                <a href={laRazon.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-black text-brandGreen hover:text-brandGreenDark">
                  Leer entrevista en La Razón <ExternalLink size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="reveal-on-scroll grid grid-cols-[.42fr_.58fr] overflow-hidden rounded-lg border border-brandGreen/10 bg-[#f7faf7]">
                <div className="relative min-h-[330px]">
                  <Image src={siteConfig.founder.image} alt={`${siteConfig.founder.name}, ${siteConfig.founder.role} de AgroEscudo`} fill sizes="(max-width: 1024px) 42vw, 20vw" className="object-cover object-[center_35%]" />
                </div>
                <div className="flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-brandGreen">Fundador y CEO</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-brandText">Brayan Javier Mejía Saavedra</h3>
                  <p className="mt-4 text-sm leading-6 text-brandMuted">Tecnología útil, evidencia operativa y validación en campo.</p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-y border-brandGreen/10 py-8">
              <p className="text-center text-[10px] font-black uppercase tracking-[0.16em] text-brandGreen">Organizaciones que respaldan y apoyan nuestro desarrollo</p>
              <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-5">
                {qrInstitutions.map((institution) => (
                  <div key={institution.shortName} className="flex h-24 items-center justify-center px-3">
                    <Image src={institution.logo!} alt={institution.logoAlt} width={institution.width} height={institution.height} sizes="(max-width: 640px) 42vw, 160px" className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-7 max-w-4xl text-center text-xs font-semibold leading-6 text-brandMuted">
                Con respaldo académico de la UMSS y articulación técnica con la Facultad de Ciencias Agrícolas, Pecuarias y Forestales. El acompañamiento institucional no implica inversión, certificación ni relación comercial.
              </p>
            </div>
          </div>
        </section>

        <section id="contacto" className="relative overflow-hidden bg-brandGreenDark py-20 text-white sm:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(242,198,109,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(242,198,109,.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="container-page relative text-center">
            <RadioTower size={34} className="mx-auto text-brandAmberLight" aria-hidden="true" />
            <h2 className="mx-auto mt-6 max-w-5xl text-[clamp(2.6rem,6vw,6.2rem)] font-black leading-[.92]">Conversemos sobre el riesgo postcosecha de tu operación.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Una conversación técnica es el primer paso para entender el sitio, sus variables y una posible evaluación.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={siteConfig.qrWhatsappUrl} className="btn-amber"><MessageCircle size={19} aria-hidden="true" /> Hablar por WhatsApp</a>
              <Link href="/" className="btn-ghost-light"><Home size={19} aria-hidden="true" /> Ver landing completa</Link>
              <a href={siteConfig.emailUrl} className="btn-ghost-light"><Mail size={19} aria-hidden="true" /> {siteConfig.email}</a>
            </div>
            <p className="mt-7 text-sm font-bold text-white/55">{siteConfig.phone} · Cochabamba, Bolivia</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={siteConfig.socialLinks[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/20">
                <Instagram size={18} aria-hidden="true" /> Instagram
              </a>
              <a href={siteConfig.socialLinks[1].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/20">
                <Facebook size={18} aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#061b16] pb-28 pt-8 text-white/60 sm:pb-28">
        <div className="container-page grid gap-6 text-xs font-semibold">
          <p>© {year} AgroEscudo. Tecnología postcosecha desarrollada en Bolivia.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-black text-brandGreenDark transition hover:-translate-y-0.5 hover:bg-brandAmberLight">
              <Home size={17} aria-hidden="true" /> Ver landing completa
            </Link>
            <a href="/qr-agroescudo.png" download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-brandAmberLight hover:text-brandAmberLight">
              <Download size={17} aria-hidden="true" /> QR PNG
            </a>
            <a href="/qr-agroescudo.svg" download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-brandAmberLight hover:text-brandAmberLight">
              <Download size={17} aria-hidden="true" /> QR SVG
            </a>
            <a href={siteConfig.socialLinks[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-brandAmberLight hover:text-brandAmberLight">
              <Instagram size={17} aria-hidden="true" /> Instagram
            </a>
            <a href={siteConfig.socialLinks[1].href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-brandAmberLight hover:text-brandAmberLight">
              <Facebook size={17} aria-hidden="true" /> Facebook
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFloat href={siteConfig.qrWhatsappUrl} label="Hablar con AgroEscudo" />
    </div>
  );
}

function QrReading({ icon: Icon, label, value }: { icon: typeof ThermometerSun; label: string; value: string }) {
  return (
    <div className="border border-white/15 bg-white/[0.07] p-4">
      <Icon size={19} className="text-brandAmberLight" aria-hidden="true" />
      <p className="mt-5 text-[10px] font-black uppercase tracking-[0.12em] text-white/45">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}
