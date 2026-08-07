import { AgrotechSection } from "@/components/AgrotechSection";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { CTASection } from "@/components/CTASection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { PilotSection } from "@/components/PilotSection";
import { PressSection } from "@/components/PressSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProductSection } from "@/components/ProductSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhySection } from "@/components/WhySection";
import { VideoShowcase } from "@/components/VideoShowcase";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/lib/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div lang={locale}>
      <JsonLd locale={locale} />
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <CredibilityStrip locale={locale} />
        <VideoShowcase locale={locale} />
        <ProblemSection locale={locale} />
        <ProductSection locale={locale} />
        <HowItWorks locale={locale} />
        <PlatformShowcase locale={locale} />
        <WhySection locale={locale} />
        <FounderSection locale={locale} />
        <EcosystemSection locale={locale} />
        <PressSection locale={locale} />
        <AgrotechSection locale={locale} />
        <PilotSection locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsAppFloat label={getWhatsappLabel(locale)} />
    </div>
  );
}

function getWhatsappLabel(locale: Locale) {
  if (locale === "en") return "Talk with AgroEscudo";
  if (locale === "qu-BO") return "AgroEscudowan rimay";
  return "Hablar con AgroEscudo";
}
