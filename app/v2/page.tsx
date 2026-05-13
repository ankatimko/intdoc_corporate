import type { Metadata } from "next";

import { NavigationV2 } from "@/components/landing-v2/navigation-v2";
import { HeroV2 } from "@/components/landing-v2/hero-v2";
import { TrustSection } from "@/components/landing-v2/trust-section";
import { PainSection } from "@/components/landing-v2/pain-section";
import { BusinessEffectsSection } from "@/components/landing-v2/business-effects-section";
import { WhatItDoesSection } from "@/components/landing-v2/what-it-does-section";
import { InterfaceSection } from "@/components/landing-v2/interface-section";
import { PilotStagesSection } from "@/components/landing-v2/pilot-stages-section";
import { ComparisonSection } from "@/components/landing-v2/comparison-section";
import { IndustryScenariosSection } from "@/components/landing-v2/industry-scenarios-section";
import { IntegrationsV2Section } from "@/components/landing-v2/integrations-v2-section";
import { PricingV2Section } from "@/components/landing-v2/pricing-v2-section";
import { FAQV2Section } from "@/components/landing-v2/faq-v2-section";
import { FinalCtaSection } from "@/components/landing-v2/final-cta-section";
import { FormSection } from "@/components/landing-v2/form-section";
import { FooterV2 } from "@/components/landing-v2/footer-v2";

export const metadata: Metadata = {
  title: "IntDoc AI — превращаем прайсы и КП поставщиков в готовое закупочное решение",
  description:
    "Собирает Excel, PDF, сканы и email от поставщиков в одну структуру, сопоставляет позиции, сравнивает по цене, сроку и наличию, помогает выбрать лучший вариант.",
};

export default function HomeV2() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <NavigationV2 />
      <HeroV2 />
      <TrustSection />
      <PainSection />
      <BusinessEffectsSection />
      <WhatItDoesSection />
      <InterfaceSection />
      <PilotStagesSection />
      <ComparisonSection />
      <IndustryScenariosSection />
      <IntegrationsV2Section />
      <PricingV2Section />
      <FAQV2Section />
      <FinalCtaSection />
      <FormSection />
      <FooterV2 />
    </main>
  );
}
