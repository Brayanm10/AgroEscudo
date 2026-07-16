import Image from "next/image";
import { ArrowDown, MapPin, MessageCircle, Radio, ThermometerSun, Waves } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-shell relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-brandInk text-white">
      <Image
        src="/images/hero-agroescudo-silo.webp"
        alt="Visual conceptual de un silo, galpón y nodo de monitoreo AgroEscudo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,20,.96)_0%,rgba(3,31,22,.88)_36%,rgba(3,31,22,.32)_68%,rgba(3,31,22,.12)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,31,22,.72)_0%,transparent_42%)]" />

      <div className="container-page relative flex min-h-[100svh] flex-col justify-between pb-8 pt-28 sm:pb-11 sm:pt-32 lg:pb-14">
        <div className="max-w-[260px] rounded-lg bg-white px-4 py-3 shadow-lift sm:max-w-[320px]">
          <Image
            src="/images/logo-horizontal-clean.webp"
            alt="AgroEscudo"
            width={1456}
            height={416}
            className="h-auto w-full"
          />
        </div>

        <div className="max-w-4xl py-12 sm:py-16">
          <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-brandAmberLight sm:text-xs">
            <Radio size={16} aria-hidden="true" />
            Tecnología boliviana para proteger granos almacenados
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.85rem,7vw,6.2rem)] font-black leading-[0.94] text-white">
            El escudo digital del grano boliviano.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/80 sm:text-xl">
            Monitoreamos temperatura y humedad en silos, galpones y centros de acopio para detectar condiciones de riesgo a tiempo y ayudar a proteger el valor de la cosecha.
          </p>
          <p className="mt-4 text-xs font-bold text-white/50">Imagen conceptual del sistema. No corresponde a una instalación o piloto ejecutado.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappUrl} className="btn-amber">
              <MessageCircle size={19} aria-hidden="true" />
              Solicitar una demostración
            </a>
            <a href="#como-funciona" className="btn-ghost-light">
              Ver cómo funciona
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 pr-14 text-sm font-bold text-white/60 lg:pr-0">
            <MapPin size={16} className="text-brandAmberLight" aria-hidden="true" />
            Preparación de pilotos en Cochabamba y Santa Cruz.
          </p>
        </div>

        <div className="grid max-w-3xl grid-cols-3 divide-x divide-white/20 border-t border-white/20 bg-brandInk/40 backdrop-blur-md">
          <HeroReading icon={ThermometerSun} label="Temperatura" value="Lectura continua" />
          <HeroReading icon={Waves} label="Humedad" value="Umbral definido" />
          <HeroReading icon={Radio} label="Estado" value="Nodo conectado" live />
        </div>
      </div>
    </section>
  );
}

function HeroReading({
  icon: Icon,
  label,
  value,
  live = false
}: {
  icon: typeof Radio;
  label: string;
  value: string;
  live?: boolean;
}) {
  return (
    <div className="min-w-0 px-3 py-4 sm:px-5">
      <div className="flex items-center gap-2 text-brandAmberLight">
        <Icon size={17} aria-hidden="true" />
        {live ? <span className="status-pulse h-2 w-2 rounded-full bg-emerald-300" /> : null}
      </div>
      <p className="mt-3 text-[10px] font-black uppercase tracking-[0.14em] text-white/50">{label}</p>
      <p className="mt-1 truncate text-xs font-black text-white sm:text-sm">{value}</p>
    </div>
  );
}
