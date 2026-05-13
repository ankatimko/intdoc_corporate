"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Phase = { number: string; title: string; timeline: string; body: string };

const phases: Phase[] = [
  {
    number: "1",
    title: "Постановка задачи",
    timeline: "1–2 недели",
    body: "Выбираем категорию для пилота, фиксируем метрики.",
  },
  {
    number: "2",
    title: "Настройка",
    timeline: "3–4 недели",
    body: "Обучаем модель на ваших ТКП и номенклатуре, разворачиваем платформу.",
  },
  {
    number: "3",
    title: "Пилотная эксплуатация",
    timeline: "4–8 недель",
    body: "Параллельная работа с существующим процессом, замер метрик.",
  },
  {
    number: "4",
    title: "Масштабирование",
    timeline: "по результатам пилота",
    body: "Расширение на категории и интеграции.",
  },
];

function PhaseRow({ phase, index, isLast }: { phase: Phase; index: number; isLast: boolean }) {
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
      className={`relative grid lg:grid-cols-[160px_1fr] gap-6 lg:gap-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative flex lg:flex-col items-center lg:items-start gap-4">
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-foreground bg-background flex items-center justify-center shrink-0 z-10">
          <span className="font-display text-lg lg:text-xl">{phase.number}</span>
        </div>
        {!isLast && <div className="hidden lg:block absolute left-7 top-14 bottom-0 w-px bg-foreground/20" />}
      </div>

      <div className="pb-12 lg:pb-16 -mt-1">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Этап {phase.number} · {phase.timeline}
        </div>
        <h3 className="text-2xl lg:text-3xl font-display mb-3">{phase.title}</h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">{phase.body}</p>
      </div>
    </div>
  );
}

export function PilotV3() {
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
    <Section id="pilot" ref={sectionRef} topBorder padding="lg">
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">С чего начать</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Пилот на ваших реальных ТКП
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Эффект лучше всего виден на ваших данных. Начинаем с одной категории закупок и фиксируем фактические метрики.
        </p>
      </div>

      <div>
        {phases.map((phase, i) => (
          <PhaseRow key={phase.number} phase={phase} index={i} isLast={i === phases.length - 1} />
        ))}
      </div>

      <div className="mt-6 lg:mt-10 max-w-3xl border-l-2 border-foreground/30 pl-6 py-2">
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          Условия пилота обсуждаются индивидуально — зависят от объёма процедур, развёртывания, интеграций.
        </p>
      </div>
    </Section>
  );
}
