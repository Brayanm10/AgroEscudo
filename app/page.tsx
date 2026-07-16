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

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <PlatformShowcase />
        <ProgressSection />
        <FounderSection />
        <EcosystemSection />
        <ClientsSection />
        <PressSection />
        <PilotSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
