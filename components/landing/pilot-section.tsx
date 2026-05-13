"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Phase = {
  number: string;
  title: string;
  timeline: string;
  description: string;
};

const phases: Phase[] = [
  {
    number: "I",
    title: "Постановка задачи",
    timeline: "1–2 недели",
    description:
      "Анализируем ваш текущий процесс обработки ТКП, выбираем категорию для пилота, фиксируем метрики эффекта.",
  },
  {
    number: "II",
    title: "Настройка под ваши документы",
    timeline: "3–4 недели",
    description:
      "Обучаем нейросеть на ваших реальных ТКП и номенклатуре, настраиваем формулы сравнения и шаблоны выгрузки, разворачиваем платформу в нужном контуре.",
  },
  {
    number: "III",
    title: "Пилотная эксплуатация",
    timeline: "4–8 недель",
    description:
      "Параллельная работа платформы и существующего процесса на ограниченном объёме процедур. Замер фактических метрик: срок, охват поставщиков, нагрузка на закупщиков.",
  },
  {
    number: "IV",
    title: "Масштабирование",
    timeline: "по результатам пилота",
    description:
      "Расширение на категории, интеграция с корпоративными системами, обучение сотрудников отдела.",
  },
];

function PhaseRow({ phase, index, isLast }: { phase: Phase; index: number; isLast: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-[160px_1fr] gap-6 lg:gap-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number + connector */}
      <div className="relative flex lg:flex-col items-center lg:items-start gap-4">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-foreground bg-background flex items-center justify-center shrink-0 z-10">
          <span className="font-display text-lg lg:text-xl">{phase.number}</span>
        </div>
        {!isLast && (
          <div className="hidden lg:block absolute left-7 top-14 bottom-0 w-px bg-foreground/20" />
        )}
      </div>

      {/* Content */}
      <div className="pb-16 lg:pb-20 -mt-1">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Этап {phase.number} · {phase.timeline}
        </div>
        <h3 className="text-2xl lg:text-3xl font-display mb-4">{phase.title}</h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {phase.description}
        </p>
      </div>
    </div>
  );
}

export function PilotSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="pilot" ref={sectionRef} topBorder padding="lg">
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">С чего начать</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Пилот на ваших
          <br />
          <span className="text-muted-foreground">реальных документах</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Платформа показывает эффект быстрее всего на реальных ТКП заказчика. Поэтому работа начинается с пилотного проекта на ограниченном объёме — одной категории закупок или одной процедуре.
        </p>
      </div>

      <div>
        {phases.map((phase, i) => (
          <PhaseRow key={phase.number} phase={phase} index={i} isLast={i === phases.length - 1} />
        ))}
      </div>

      <div className="mt-8 lg:mt-12 max-w-3xl">
        <p className="text-base text-muted-foreground leading-relaxed border-l-2 border-foreground/30 pl-6">
          Стоимость пилота и условия дальнейшего внедрения обсуждаются индивидуально и зависят от объёма процедур, требований к развёртыванию и набора интеграций.
        </p>
      </div>
    </Section>
  );
}
