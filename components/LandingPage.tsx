import { ClientsSection } from "@/components/ClientsSection";
import { CapabilityStrip } from "@/components/CapabilityStrip";
import { CTASection } from "@/components/CTASection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { PilotSection } from "@/components/PilotSection";
import { PressSection } from "@/components/PressSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProgressSection } from "@/components/ProgressSection";
import { SolutionSection } from "@/components/SolutionSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/lib/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div lang={locale}>
      <JsonLd locale={locale} />
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <CapabilityStrip locale={locale} />
        <ProblemSection locale={locale} />
        <SolutionSection locale={locale} />
        <HowItWorks locale={locale} />
        <PlatformShowcase locale={locale} />
        <ProgressSection locale={locale} />
        <FounderSection locale={locale} />
        <EcosystemSection locale={locale} />
        <ClientsSection locale={locale} />
        <PressSection locale={locale} />
        <PilotSection locale={locale} />
        <FAQSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloat label={locale === "en" ? "Talk with AgroEscudo" : locale === "qu-BO" ? "AgroEscudowan rimay" : "Hablar con AgroEscudo"} />
    </div>
  );
}
