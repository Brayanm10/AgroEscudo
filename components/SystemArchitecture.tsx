import Image from "next/image";

const flow = [
  { label: "SiloSensor", detail: "Mide variables acordadas" },
  { label: "LoRa", detail: "Comunicación local" },
  { label: "Gateway", detail: "Almacena y sincroniza" },
  { label: "Internet + API", detail: "Organiza las lecturas" },
  { label: "Plataforma", detail: "Alertas, historial y reportes" }
];

export function SystemArchitecture({ compact = false }: { compact?: boolean }) {
  return (
    <figure className="reveal-on-scroll">
      <div
        className="overflow-x-auto rounded-lg border border-brandGreen/10 bg-[#f7faf7] shadow-soft"
        role="region"
        tabIndex={0}
        aria-label="Diagrama desplazable de la arquitectura AgroEscudo"
      >
        <Image
          src="/images/agroescudo/system/arquitectura-agroescudo.svg"
          alt="Diagrama conceptual del sistema AgroEscudo: sensores en el silo, LoRa, gateway, internet, API, dashboard y aplicación"
          width={1600}
          height={900}
          sizes="(max-width: 1024px) 100vw, 1280px"
          className="h-auto w-full min-w-[840px] md:min-w-0"
        />
      </div>
      <figcaption className="mt-4 text-xs font-semibold leading-5 text-brandMuted">
        Ilustración técnica conceptual. La cantidad de sondas, los puntos de medición y la conectividad se definen según cada instalación.
      </figcaption>
      <div className={`mt-7 grid gap-px overflow-hidden rounded-lg border border-brandGreen/10 bg-brandGreen/10 ${compact ? "sm:grid-cols-5" : "md:grid-cols-5"}`}>
        {flow.map((item, index) => (
          <div key={item.label} className="relative bg-white px-4 py-5">
            <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brandAmberDark">0{index + 1}</p>
            <p className="mt-2 text-sm font-black text-brandText">{item.label}</p>
            <p className="mt-1 text-xs leading-5 text-brandMuted">{item.detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
