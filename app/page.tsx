import { ClientsSection } from "@/components/ClientsSection";
import { CTASection } from "@/components/CTASection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PilotSection } from "@/components/PilotSection";
import { PressSection } from "@/components/PressSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <PilotSection />
        <ClientsSection />
        <TrustSection />
        <PressSection />
        <EcosystemSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
