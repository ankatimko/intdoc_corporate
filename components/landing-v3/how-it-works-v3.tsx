"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Step = { number: string; title: string; body: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Поступление ТКП",
    body: "Почта, тендерные площадки, ручная загрузка.",
  },
  {
    number: "2",
    title: "Извлечение данных",
    body: "Позиции, цены, валюты, сроки, условия — нейросетью.",
  },
  {
    number: "3",
    title: "Нормализация",
    body: "Синонимы, валюты, единицы измерения сводятся к единому виду.",
  },
  {
    number: "4",
    title: "Сравнительная таблица",
    body: "Ранжирование по вашим критериям, лучший вариант подсвечен.",
  },
  {
    number: "5",
    title: "Выгрузка",
    body: "Excel, PDF, передача в ваши корпоративные системы.",
  },
];

function StepRow({ step, index, isLast }: { step: Step; index: number; isLast: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-foreground bg-background flex items-center justify-center shrink-0 z-10">
          <span className="font-display text-lg lg:text-xl">{step.number}</span>
        </div>
        {!isLast && <div className="hidden lg:block absolute left-7 top-14 bottom-0 w-px bg-foreground/20" />}
      </div>

      <div className="pb-12 lg:pb-14 -mt-1">
        <h3 className="text-2xl lg:text-3xl font-display mb-3">{step.title}</h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">{step.body}</p>
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
    <Section id="how-it-works" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">Процесс</Eyebrow>
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
