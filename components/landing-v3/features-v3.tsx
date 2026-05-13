"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  AnimatedVisual,
  type FeatureVisualType,
} from "@/components/landing/feature-visuals";

type Accent = "blue" | "violet" | "amber" | "emerald" | "rose" | "sky";

type Feature = {
  visual: FeatureVisualType;
  title: string;
  body: string;
  accent: Accent;
};

// Lookup — literal class strings so Tailwind's JIT picks them up
const accentClasses: Record<Accent, { stripe: string; visual: string }> = {
  blue:    { stripe: "bg-blue-500",    visual: "text-blue-600 dark:text-blue-400" },
  violet:  { stripe: "bg-violet-500",  visual: "text-violet-600 dark:text-violet-400" },
  amber:   { stripe: "bg-amber-500",   visual: "text-amber-600 dark:text-amber-400" },
  emerald: { stripe: "bg-emerald-500", visual: "text-emerald-600 dark:text-emerald-400" },
  rose:    { stripe: "bg-rose-500",    visual: "text-rose-600 dark:text-rose-400" },
  sky:     { stripe: "bg-sky-500",     visual: "text-sky-600 dark:text-sky-400" },
};

const features: Feature[] = [
  {
    visual: "format",
    title: "Принимает любой формат",
    body: "Excel, PDF, сканы, email, тело письма. Без шаблонов для поставщика.",
    accent: "blue",
  },
  {
    visual: "language",
    title: "Работает на любом языке",
    body: "Русский, английский, китайский, турецкий, фарси, корейский — на одном уровне. Без участия переводчика.",
    accent: "violet",
  },
  {
    visual: "database",
    title: "Сопоставляет с вашей номенклатурой",
    body: "Синонимы, аналоги, разные артикулы — сводятся к единым кодам автоматически.",
    accent: "amber",
  },
  {
    visual: "custom",
    title: "Приводит к сопоставимому виду",
    body: "Валюты по выбранному курсу, единицы измерения, Инкотермс, логистика и таможня по вашим формулам. В таблице — сравнимая цена, а не номинальная.",
    accent: "emerald",
  },
  {
    visual: "recommend",
    title: "Ранжирует поставщиков",
    body: "По вашим критериям: цена, срок, условия оплаты, репутация. Закупщик получает шорт-лист, а не сырой массив данных.",
    accent: "rose",
  },
  {
    visual: "cloud",
    title: "Настраивается под вашу модель закупок",
    body: "Номенклатура, шаблоны ТКП, формулы сравнения, правила подбора — настраиваются на этапе пилота.",
    accent: "sky",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const colors = accentClasses[feature.accent];

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
      className={`relative border border-foreground/10 p-6 lg:p-8 hover:border-foreground/30 transition-all duration-500 group overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      {/* Top accent stripe — colored per feature */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${colors.stripe}`} />

      <div className={`w-full h-28 lg:h-32 mb-6 transition-colors ${colors.visual}`}>
        <AnimatedVisual type={feature.visual} />
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
