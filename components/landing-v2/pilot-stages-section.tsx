"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Stage = { number: string; title: string; body: string };

const stages: Stage[] = [
  {
    number: "1",
    title: "Заявка и примеры файлов",
    body: "Вы оставляете заявку и присылаете 1–2 примера документов поставщиков — реальных, не подготовленных.",
  },
  {
    number: "2",
    title: "Настройка сценария",
    body: "Подключаем платформу под ваш тип документов, поля, валюты и формат выходного результата.",
  },
  {
    number: "3",
    title: "Разбор на ваших данных",
    body: "IntDoc AI извлекает, нормализует и сопоставляет данные. Вы получаете сводную таблицу, рекомендации и список спорных строк.",
  },
  {
    number: "4",
    title: "Демонстрация на встрече",
    body: "Показываем результат, обсуждаем, как платформа встраивается в ваш процесс закупки или коммерции.",
  },
  {
    number: "5",
    title: "Запуск в рабочем режиме",
    body: "После пилота — настройка под полный объём, обучение команды, подключение интеграций. Без длинных enterprise-проектов на полгода.",
  },
];

function StageRow({ stage, index, isLast }: { stage: Stage; index: number; isLast: boolean }) {
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
      className={`relative grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative flex lg:flex-col items-center lg:items-start gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-foreground bg-background flex items-center justify-center shrink-0 z-10">
          <span className="font-display text-lg">{stage.number}</span>
        </div>
        {!isLast && <div className="hidden lg:block absolute left-6 top-12 bottom-0 w-px bg-foreground/20" />}
      </div>

      <div className="pb-12 lg:pb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          Шаг {stage.number}
        </div>
        <h3 className="text-2xl lg:text-3xl font-display mb-3">{stage.title}</h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">{stage.body}</p>
      </div>
    </div>
  );
}

export function PilotStagesSection() {
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
          Как быстро начать и сразу увидеть результат
          <br />
          <span className="text-muted-foreground">на своих документах</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Вы не покупаете «вслепую». Сначала видите, как платформа работает с вашими реальными файлами — и только потом принимаем решение о внедрении.
        </p>
      </div>

      <div>
        {stages.map((stage, i) => (
          <StageRow key={stage.number} stage={stage} index={i} isLast={i === stages.length - 1} />
        ))}
      </div>

      <div className="mt-6 lg:mt-10 max-w-3xl border-l-2 border-foreground/30 pl-6 py-2">
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          Первый разбор на ваших файлах — за несколько рабочих дней с момента заявки. Полноценный запуск — несколько недель.
        </p>
      </div>
    </Section>
  );
}
