import { Activity, Clock3, Droplets, ThermometerSun } from "lucide-react";

const signals = [
  { icon: ThermometerSun, label: "Temperatura", value: "Cambio térmico" },
  { icon: Droplets, label: "Humedad", value: "Condición ambiental" },
  { icon: Activity, label: "Tendencia", value: "Evolución del riesgo" }
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-band overflow-hidden bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="reveal-on-scroll max-w-4xl">
            <p className="eyebrow">El riesgo invisible</p>
            <h2 className="section-title mt-5">El deterioro comienza antes de que pueda verse.</h2>
            <p className="section-copy mt-7">
              Los cambios de temperatura, humedad y condensación pueden avanzar dentro del almacenamiento sin que una inspección ocasional los detecte. Cuando el problema ya es evidente, la capacidad de reacción es menor.
            </p>
            <div className="mt-9 flex items-start gap-4 border-l-2 border-brandAmber pl-5">
              <Clock3 className="mt-1 shrink-0 text-brandGreen" size={22} aria-hidden="true" />
              <p className="max-w-xl text-base font-bold leading-7 text-brandText">
                AgroEscudo complementa la experiencia del operador con señales continuas y evidencia para decidir a tiempo.
              </p>
            </div>
          </div>

          <div className="reveal-on-scroll relative min-h-[420px] overflow-hidden rounded-lg bg-[linear-gradient(145deg,#f3e4bf_0%,#d6a84f_46%,#7a4f16_100%)] p-6 shadow-lift sm:p-8">
            <div className="grain-texture absolute inset-0 opacity-55" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,rgba(3,31,22,.84),transparent)]" />
            <div className="relative flex h-full min-h-[356px] flex-col justify-end">
              <p className="max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                Lo que no se registra, llega tarde a la decisión.
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-3">
                {signals.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="border-t border-white/30 pt-4 text-white">
                    <Icon size={19} className="text-brandAmberLight" aria-hidden="true" />
                    <p className="mt-3 text-[10px] font-black uppercase tracking-[0.13em] text-white/60">{label}</p>
                    <p className="mt-1 text-xs font-bold leading-5 sm:text-sm">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
