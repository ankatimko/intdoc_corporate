"use client";

import { useEffect, useRef, useState } from "react";
import { Table, FileSearch, AlertCircle, History, FileDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Element = {
  icon: typeof Table;
  title: string;
  body: string;
};

const elements: Element[] = [
  {
    icon: Table,
    title: "Сводная матрица поставщиков",
    body: "Главный экран — все позиции вашей спецификации в строках, все поставщики в столбцах. По каждой ячейке: цена, валюта, цена в рублях по курсу, срок, наличие, статус «оригинал / аналог». Лучший вариант по строке подсвечен.",
  },
  {
    icon: FileSearch,
    title: "Детализация строки",
    body: "Один клик по ячейке — открывается карточка с источником значения, объяснением сопоставления, уровнем уверенности и историей похожих решений по этой позиции.",
  },
  {
    icon: AlertCircle,
    title: "Очередь спорных строк",
    body: "Позиции с низкой уверенностью платформа выносит отдельно. Байер видит ровно то, что требует его внимания — а не весь массив данных.",
  },
  {
    icon: History,
    title: "История и рекомендации",
    body: "Подтверждённые соответствия, повторяющиеся закономерности, словарь клиента. Каждая следующая закупка опирается на накопленный опыт.",
  },
  {
    icon: FileDown,
    title: "Готовый выходной документ",
    body: "Excel-выгрузка, PDF, фирменное коммерческое предложение по вашему шаблону. Формируется одной кнопкой из данных матрицы.",
  },
];

// Mock matrix mini-visualization
function MatrixMock() {
  return (
    <div className="border border-foreground/15 rounded-xl p-4 lg:p-6 bg-foreground/[0.02]">
      <div className="font-mono text-xs text-muted-foreground mb-3">Сводная матрица — пример</div>
      <div className="grid grid-cols-[1fr_repeat(4,minmax(0,auto))] gap-x-3 gap-y-1.5 text-xs lg:text-sm">
        {/* Header */}
        <div className="text-muted-foreground font-mono pb-2 border-b border-foreground/10">Позиция</div>
        <div className="text-muted-foreground font-mono pb-2 border-b border-foreground/10 text-center">Поставщик А</div>
        <div className="text-muted-foreground font-mono pb-2 border-b border-foreground/10 text-center">Поставщик Б</div>
        <div className="text-muted-foreground font-mono pb-2 border-b border-foreground/10 text-center">Поставщик В</div>
        <div className="text-muted-foreground font-mono pb-2 border-b border-foreground/10 text-center">Поставщик Г</div>

        {/* Rows */}
        {[
          ["Насос К-100", "12 500 ₽", "11 800 ₽", "12 100 ₽", "14 200 ₽", 1],
          ["Фильтр ФМ-3", "3 200 ₽", "3 500 ₽", "3 050 ₽", "3 300 ₽", 2],
          ["Подшипник 6204", "850 ₽", "880 ₽", "820 ₽", "—", 2],
        ].map(([name, a, b, c, d, bestIdx]) => (
          <div key={String(name)} className="contents">
            <div className="py-2 truncate">{name}</div>
            {[a, b, c, d].map((v, i) => (
              <div
                key={`${name}-${i}`}
                className={`py-2 text-center tabular-nums ${
                  i === bestIdx ? "bg-foreground text-background font-medium rounded-sm" : ""
                }`}
              >
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="w-3 h-3 bg-foreground rounded-sm" />
        Лучший вариант по строке
      </div>
    </div>
  );
}

function ElementCard({ element, index }: { element: Element; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = element.icon;

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
      className={`grid lg:grid-cols-[auto_1fr] gap-6 py-8 border-b border-foreground/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 lg:w-72">
        <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className="text-lg lg:text-xl font-display pt-1">{element.title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{element.body}</p>
    </div>
  );
}

export function InterfaceSection() {
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
    <Section ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Интерфейс</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Всё, что нужно для сравнения поставщиков
          <br />
          <span className="text-muted-foreground">и выбора лучшего варианта — в одном месте</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-[3fr_2fr] gap-12 mb-12">
        <div>
          {elements.map((element, i) => (
            <ElementCard key={element.title} element={element} index={i} />
          ))}
        </div>
        <div className="lg:sticky lg:top-32 self-start">
          <MatrixMock />
        </div>
      </div>

      <div className="max-w-3xl border-l-2 border-foreground/30 pl-6 py-2">
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          Платформа показывает не только результат, но и его логику. Любой выбор можно проверить, оспорить или скорректировать — без потери данных и истории.
        </p>
      </div>
    </Section>
  );
}
