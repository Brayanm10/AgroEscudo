import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat({ href = siteConfig.whatsappUrl, label = "Hablemos del piloto" }: { href?: string; label?: string }) {
  return (
    <a
      href={href}
      className="whatsapp-premium group fixed bottom-5 right-4 z-40 flex items-center gap-3 sm:right-6 lg:bottom-7 lg:right-7"
      aria-label="Hablar con AgroEscudo por WhatsApp"
    >
      <span className="hidden rounded-full border border-brandGreen/10 bg-white/95 px-4 py-3 text-sm font-black text-brandGreenDark shadow-[0_16px_45px_rgba(7,62,50,.22)] backdrop-blur transition group-hover:-translate-x-1 lg:block">
        {label}
      </span>
      <span className="whatsapp-orbit relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#20bf63] text-white shadow-[0_14px_38px_rgba(32,191,99,.38)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#159e50] sm:h-16 sm:w-16">
        <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-brandAmberLight" />
        <MessageCircle size={27} strokeWidth={2.4} aria-hidden="true" />
      </span>
    </a>
  );
}
