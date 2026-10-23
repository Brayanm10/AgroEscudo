import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLocaleMetadata } from "@/lib/i18n";

export const metadata: Metadata = getLocaleMetadata("es-BO");

export default function Home() {
  return <LandingPage locale="es-BO" />;
}
