import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLocaleMetadata } from "@/lib/i18n";

export const metadata: Metadata = getLocaleMetadata("qu-BO");

export default function QuechuaHome() {
  return <LandingPage locale="qu-BO" />;
}
