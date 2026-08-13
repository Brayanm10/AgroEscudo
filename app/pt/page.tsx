import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLocaleMetadata } from "@/lib/i18n";

export const metadata: Metadata = getLocaleMetadata("pt-BR");

export default function PortugueseHome() {
  return <LandingPage locale="pt-BR" />;
}
