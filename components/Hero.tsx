import Image from "next/image";
import { ArrowRight, BellRing, ClipboardCheck, Gauge, MessageCircle, Radio, Signal, ThermometerSun } from "lucide-react";

const pilotWhatsApp = "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20solicitar%20un%20piloto";

const metrics = [
  { value: "24/7", label: "Lecturas ambientales" },
  { value: "60-90 días", label: "Validación en sitio" },
  { value: "1-3 nodos", label: "Entrada controlada" }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brandInk text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#031f16_0%,#063b27_46%,#0b5d3b_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-[linear-gradient(0deg,rgba(214,168,79,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="animate-pulse-glow absolute right-0 top-24 hidden h-px w-1/2 bg-gradient-to-r from-transparent via-brandAmber/70 to-transparent lg:block" />
      <div className="absolute right-0 top-20 hidden h-72 w-72 rounded-full border border-brandAmber/18 bg-brandAmber/8 blur-2xl lg:block" />
      <div className="absolute bottom-20 left-0 hidden h-72 w-72 rounded-full border border-white/10 bg-emerald-300/8 blur-2xl lg:block" />

      <div className="container-page relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/10 px-4 py-2 shadow-soft backdrop-blur">
            <Image src="/logo-mark.png" alt="" width={38} height={38} className="h-9 w-9 object-contain" />
            <span className="text-sm font-black text-white">AgroEscudo</span>
            <span className="h-4 w-px bg-white/20" />
            <span className="text-xs font-black uppercase tracking-[0.16em] text-brandAmber">Bolivia</span>
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brandAmber">
            Pilotos IoT · Almacenamiento · Riesgo postcosecha
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            AgroEscudo protege el grano antes de que el riesgo sea visible.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            AgroEscudo da visibilidad continua a silos, galpones y centros de acopio: temperatura, humedad, alertas y bitácora para intervenir antes de que el lote se comprometa.
          </p>
          <div className="mt-5 grid max-w-2xl gap-2 text-sm font-semibold text-white/72 sm:grid-cols-3">
            <span className="rounded-lg border border-white/12 bg-white/8 px-3 py-2">Sin prometer milagros</span>
            <span className="rounded-lg border border-white/12 bg-white/8 px-3 py-2">Sin instalar un sistema gigante</span>
            <span className="rounded-lg border border-white/12 bg-white/8 px-3 py-2">Con evidencia semanal</span>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={pilotWhatsApp} className="btn-primary bg-brandAmber text-brandInk hover:bg-white">
              <MessageCircle className="mr-2" size={18} aria-hidden="true" />
              Solicitar piloto por WhatsApp
            </a>
            <a href="#piloto" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16 focus:outline-none focus:ring-4 focus:ring-white/20">
              Ver piloto 60-90 días
              <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-4 text-sm font-semibold text-white/64">
            Respuesta directa con Brayan Mejia. Pilotos disponibles para validación en Cochabamba y Santa Cruz.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.value} className="rounded-lg border border-white/13 bg-white/10 px-4 py-4 backdrop-blur">
                <p className="text-2xl font-black text-white">{metric.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/64">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-lg border border-white/14 bg-white/10 p-5 shadow-lift backdrop-blur-md">
            <div className="relative mb-5 h-36 overflow-hidden rounded-lg border border-white/12">
              <Image
                src="/agro-field-premium.png"
                alt="Campo agrícola para piloto AgroEscudo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="animate-field-pan object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brandInk/88 via-brandInk/34 to-brandInk/8" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brandInk/92 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg border border-white/14 bg-brandInk/62 p-3 shadow-soft backdrop-blur-sm">
                <Image src="/logo-mark.png" alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1" />
                <p className="max-w-xs text-sm font-black leading-5 text-white">
                  AgroEscudo convierte lectura ambiental en decisión operativa.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-white/12 pb-4">
              <div className="flex items-center gap-3">
                <Image src="/logo-mark.png" alt="" width={56} height={56} className="h-14 w-14 object-contain" />
                <div>
                  <p className="text-sm font-black text-white">Piloto SiloSensor</p>
                  <p className="text-xs font-semibold text-white/58">1 a 3 nodos · umbrales · seguimiento</p>
                </div>
              </div>
              <span className="animate-sensor-ping rounded-full bg-brandAmber px-3 py-1 text-xs font-black text-brandInk">60-90 días</span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <VisualStat icon={ThermometerSun} label="Temperatura" value="Lectura continua" />
              <VisualStat icon={Gauge} label="Humedad" value="Umbral definido" />
              <VisualStat icon={Radio} label="Alerta" value="Aviso temprano" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[0.88fr_1.12fr]">
              <div className="rounded-lg border border-brandAmber/24 bg-brandAmber/12 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-brandAmber">Lectura actual</p>
                  <Signal size={17} className="text-brandAmber" aria-hidden="true" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <LiveReading value="28.4°C" label="Temp." />
                  <LiveReading value="68%" label="Humedad" />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/12">
                  <div className="animate-live-bar h-full w-[68%] rounded-full bg-brandAmber" />
                </div>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/8 p-4">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/52">
                  <BellRing size={15} className="text-brandAmber" aria-hidden="true" />
                  Eventos del piloto
                </div>
                <div className="mt-4 space-y-2">
                  <LiveEvent tone="ok" text="Nodo reportando lectura" />
                  <LiveEvent tone="warn" text="Humedad cerca de umbral" />
                  <LiveEvent tone="ok" text="Reporte semanal preparado" />
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-white/12 bg-brandInk/52 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brandAmber">Ruta de decisión</p>
                <p className="text-xs font-semibold text-white/48">Evidencia operativa</p>
              </div>
              <div className="mt-5 space-y-3">
                {["Condición fuera de rango", "Responsable recibe alerta", "Acción queda registrada"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brandAmber/50 text-xs font-black text-brandAmber">
                      {index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/12" />
                    <p className="w-48 text-right text-sm font-semibold text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-brandAmber/25 bg-brandAmber/12 p-4">
              <div className="flex gap-3">
                <ClipboardCheck className="mt-1 shrink-0 text-brandAmber" size={19} aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-white/78">
                  La conversación empieza con una visita técnica breve para definir punto de medición, umbrales y alcance del piloto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualStat({
  icon: Icon,
  label,
  value
}: {
  icon: typeof ThermometerSun;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/10 p-4">
      <Icon size={20} className="text-brandAmber" aria-hidden="true" />
      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-white/48">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function LiveReading({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/52">{label}</p>
    </div>
  );
}

function LiveEvent({ tone, text }: { tone: "ok" | "warn"; text: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-brandInk/34 px-3 py-2">
      <span className="text-xs font-semibold text-white/74">{text}</span>
      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${tone === "warn" ? "animate-sensor-ping bg-brandAmber" : "bg-emerald-300"}`} />
    </div>
  );
}
