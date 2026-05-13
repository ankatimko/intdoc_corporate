"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Accent = "amber" | "sky" | "violet" | "emerald" | "rose";

type Step = { number: string; title: string; body: string; accent: Accent };

// On dark theme — use bright -400 variants so colors pop on foreground bg
const accentClasses: Record<Accent, { border: string; number: string }> = {
  amber:   { border: "border-amber-400/70",   number: "text-amber-300" },
  sky:     { border: "border-sky-400/70",     number: "text-sky-300" },
  violet:  { border: "border-violet-400/70",  number: "text-violet-300" },
  emerald: { border: "border-emerald-400/70", number: "text-emerald-300" },
  rose:    { border: "border-rose-400/70",    number: "text-rose-300" },
};

const steps: Step[] = [
  {
    number: "1",
    title: "Поступление ТКП",
    body: "Почта, тендерные площадки, ручная загрузка.",
    accent: "amber",
  },
  {
    number: "2",
    title: "Извлечение данных",
    body: "Позиции, цены, валюты, сроки, условия — нейросетью.",
    accent: "sky",
  },
  {
    number: "3",
    title: "Нормализация",
    body: "Синонимы, валюты, единицы измерения сводятся к единому виду.",
    accent: "violet",
  },
  {
    number: "4",
    title: "Сравнительная таблица",
    body: "Ранжирование по вашим критериям, лучший вариант подсвечен.",
    accent: "emerald",
  },
  {
    number: "5",
    title: "Выгрузка",
    body: "Excel, PDF, передача в ваши корпоративные системы.",
    accent: "rose",
  },
];

function StepRow({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const colors = accentClasses[step.accent];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative flex lg:flex-col items-center lg:items-start gap-4">
        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 bg-foreground flex items-center justify-center shrink-0 z-10 ${colors.border}`}>
          <span className={`font-display text-lg lg:text-xl ${colors.number}`}>{step.number}</span>
        </div>
        {!isLast && <div className="hidden lg:block absolute left-7 top-14 bottom-0 w-px bg-background/20" />}
      </div>

      <div className="pb-12 lg:pb-14 -mt-1">
        <h3 className="text-2xl lg:text-3xl font-display mb-3">{step.title}</h3>
        <p className="text-base lg:text-lg text-background/60 leading-relaxed max-w-2xl">{step.body}</p>
      </div>
    </div>
  );
}

export function HowItWorksV3() {
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
    <Section id="how-it-works" ref={sectionRef} tone="onDark">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="mb-16 lg:mb-20">
        <Eyebrow tone="onDark" className="mb-6">
          Процесс
        </Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Пять шагов от ТКП до решения
        </h2>
      </div>

      <div>
        {steps.map((step, i) => (
          <StepRow key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>
    </Section>
  );
}
