"use client";

import { useEffect, useRef, useState } from "react";
import { FileSearch, RefreshCw, GitMerge, LayoutGrid, Microscope, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Capability = {
  icon: typeof FileSearch;
  title: string;
  description: string;
  bullets?: string[];
};

const capabilities: Capability[] = [
  {
    icon: FileSearch,
    title: "Извлекает из документа",
    description: "Поля, которые формируют закупочное решение, а не просто текст.",
    bullets: [
      "Наименование позиции, артикул, код производителя",
      "Количество, единицу измерения, кратность",
      "Цену, валюту, НДС, условия оплаты",
      "Срок поставки, наличие, MOQ",
      "Условия поставки, гарантии, статус «оригинал / аналог»",
    ],
  },
  {
    icon: RefreshCw,
    title: "Нормализует данные",
    description: "Сводит разнородные предложения к одному виду — без этого честное сравнение невозможно.",
    bullets: [
      "Названия — к единому виду",
      "Валюты — к одной по выбранному курсу",
      "Единицы измерения — к стандарту",
      "Аналоги — сопоставляются с оригиналами",
    ],
  },
  {
    icon: GitMerge,
    title: "Сопоставляет позиции",
    description:
      "Одну и ту же позицию у разных поставщиков платформа сводит в одну строку сравнения. Синонимы, написания, артикулы, аналоги — обрабатываются автоматически с опорой на накопленный словарь.",
  },
  {
    icon: LayoutGrid,
    title: "Строит сводную матрицу",
    description:
      "Все предложения по всем позициям в одной таблице. Подсвечивает лучший вариант по цене, сроку, наличию или общему баллу — по вашим критериям ранжирования.",
  },
  {
    icon: Microscope,
    title: "Показывает источник и уверенность",
    description: "По каждой строке видно происхождение значения и нужно ли её проверять.",
    bullets: [
      "из какого документа извлечено значение",
      "почему система сопоставила позиции именно так",
      "насколько высока уверенность в результате",
      "нужна ли ручная проверка",
    ],
  },
  {
    icon: GraduationCap,
    title: "Учится на ваших решениях",
    description:
      "Подтверждённые соответствия сохраняются в словарь клиента. Следующие документы от тех же поставщиков обрабатываются точнее и быстрее.",
  },
];

function CapabilityCard({ capability, index }: { capability: Capability; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = capability.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-foreground/10 p-6 lg:p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl lg:text-2xl font-display mb-3">{capability.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{capability.description}</p>
      {capability.bullets && (
        <ul className="space-y-2 pl-1">
          {capability.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/80">
              <span className="w-1 h-1 rounded-full bg-foreground/50 mt-2 shrink-0" />
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function WhatItDoesSection() {
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
    <Section id="what" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Под капотом</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что IntDoc AI видит и делает
          <br />
          <span className="text-muted-foreground">внутри каждого входящего документа</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Это не просто распознавание текста. Это объяснимое закупочное решение, в котором по каждой строке видно, откуда взято значение, почему позиция сопоставлена именно так и какой вариант рекомендован.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
        {capabilities.map((c, i) => (
          <CapabilityCard key={c.title} capability={c} index={i} />
        ))}
      </div>

      <div className="max-w-3xl border-l-2 border-foreground pl-6 py-4">
        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
          Это не ещё один OCR. Это слой принятия решений между хаосом документов и готовым результатом для бизнеса.
        </p>
      </div>
    </Section>
  );
}
