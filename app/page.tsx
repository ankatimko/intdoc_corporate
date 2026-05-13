import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { EffectSection } from "@/components/landing/effect-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { ScenariosSection } from "@/components/landing/scenarios-section";
import { DeploymentSection } from "@/components/landing/deployment-section";
import { PilotSection } from "@/components/landing/pilot-section";
import { FAQSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <EffectSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScenariosSection />
      <DeploymentSection />
      <PilotSection />
      <FAQSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
