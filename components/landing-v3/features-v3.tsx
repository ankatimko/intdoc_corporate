"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Languages, GitMerge, Scale, Trophy, Settings2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Feature = { icon: typeof Layers; title: string; body: string };

const features: Feature[] = [
  {
    icon: Layers,
    title: "Принимает любой формат",
    body: "Excel, PDF, сканы, email, тело письма. Без шаблонов для поставщика.",
  },
  {
    icon: Languages,
    title: "Работает на любом языке",
    body: "Русский, английский, китайский, турецкий, фарси, корейский — на одном уровне. Без участия переводчика.",
  },
  {
    icon: GitMerge,
    title: "Сопоставляет с вашей номенклатурой",
    body: "Синонимы, аналоги, разные артикулы — сводятся к единым кодам автоматически.",
  },
  {
    icon: Scale,
    title: "Приводит к сопоставимому виду",
    body: "Валюты по выбранному курсу, единицы измерения, Инкотермс, логистика и таможня по вашим формулам. В таблице — сравнимая цена, а не номинальная.",
  },
  {
    icon: Trophy,
    title: "Ранжирует поставщиков",
    body: "По вашим критериям: цена, срок, условия оплаты, репутация. Закупщик получает шорт-лист, а не сырой массив данных.",
  },
  {
    icon: Settings2,
    title: "Настраивается под вашу модель закупок",
    body: "Номенклатура, шаблоны ТКП, формулы сравнения, правила подбора — настраиваются на этапе пилота.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-foreground/10 p-6 lg:p-8 hover:border-foreground/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl lg:text-2xl font-display mb-3">{feature.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{feature.body}</p>
    </div>
  );
}

export function FeaturesV3() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="features" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">Возможности</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что платформа делает с ТКП
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </Section>
  );
}
