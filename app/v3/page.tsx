import type { Metadata } from "next";

import { NavigationV3 } from "@/components/landing-v3/navigation-v3";
import { HeroV3 } from "@/components/landing-v3/hero-v3";
import { EffectV3 } from "@/components/landing-v3/effect-v3";
import { FeaturesV3 } from "@/components/landing-v3/features-v3";
import { HowItWorksV3 } from "@/components/landing-v3/how-it-works-v3";
import { ScenariosV3 } from "@/components/landing-v3/scenarios-v3";
import { DeploymentV3 } from "@/components/landing-v3/deployment-v3";
import { PilotV3 } from "@/components/landing-v3/pilot-v3";
import { FAQV3 } from "@/components/landing-v3/faq-v3";
import { FinalCtaV3 } from "@/components/landing-v3/final-cta-v3";
import { FooterV3 } from "@/components/landing-v3/footer-v3";
import { InlineCta } from "@/components/landing-v3/inline-cta";

export const metadata: Metadata = {
  title: "IntDoc AI — обработка ТКП поставщиков для отделов закупок",
  description:
    "Нейросеть собирает разнородные ТКП в единую сравнительную таблицу за минуты. Сокращает срок закупочных процедур в 5–10 раз.",
};

export default function HomeV3() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <NavigationV3 />
      <HeroV3 />
      <EffectV3 />
      <InlineCta text="Эффект в цифрах убедил? Покажем то же на ваших ТКП." />
      <FeaturesV3 />
      <HowItWorksV3 />
      <ScenariosV3 />
      <InlineCta text="Ваш сценарий — в списке? Обсудим детали пилота на встрече." />
      <DeploymentV3 />
      <PilotV3 />
      <FAQV3 />
      <FinalCtaV3 />
      <FooterV3 />
    </main>
  );
}
