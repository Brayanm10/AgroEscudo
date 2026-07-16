import { AppWindow, Cpu, MapPinned, RadioTower } from "lucide-react";

const capabilities = [
  { icon: Cpu, value: "IoT", label: "Nodo funcional" },
  { icon: RadioTower, value: "LoRa", label: "Comunicación probada" },
  { icon: AppWindow, value: "Web + Android", label: "Producto MVP" },
  { icon: MapPinned, value: "Bolivia", label: "Cochabamba y Santa Cruz" }
];

export function CapabilityStrip() {
  return (
    <section aria-label="Capacidades desarrolladas" className="relative overflow-hidden bg-brandAmberLight text-brandInk">
      <div className="capability-signal absolute inset-x-0 top-0 h-1 bg-brandGreenDark" />
      <div className="container-page grid divide-y divide-brandInk/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {capabilities.map(({ icon: Icon, value, label }) => (
          <div key={value} className="group flex min-h-32 items-center gap-4 px-3 py-6 sm:px-6 lg:min-h-36">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brandInk text-brandAmberLight transition duration-300 group-hover:-translate-y-1 group-hover:bg-brandGreenDark">
              <Icon size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xl font-black leading-tight sm:text-2xl">{value}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.1em] text-brandGreenDark/70">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
