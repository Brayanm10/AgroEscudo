import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getLocaleMetadata } from "@/lib/i18n";

export const metadata: Metadata = getLocaleMetadata("en");

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
