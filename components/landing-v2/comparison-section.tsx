"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Column = {
  title: string;
  tone: "neutral" | "neutral" | "accent";
  items: Array<{ text: string; positive: boolean }>;
};

const columns: Column[] = [
  {
    title: "Ручной Excel-процесс",
    tone: "neutral",
    items: [
      { text: "Десятки файлов сводятся вручную", positive: false },
      { text: "Названия и валюты приводятся к единому виду руками", positive: false },
      { text: "Результат зависит от конкретного байера", positive: false },
      { text: "Долго и непрозрачно", positive: false },
      { text: "Невозможно проверить логику задним числом", positive: false },
      { text: "Не масштабируется без роста штата", positive: false },
    ],
  },
  {
    title: "Обычный OCR / распознавание",
    tone: "neutral",
    items: [
      { text: "Извлекает текст из документов", positive: true },
      { text: "Не понимает коммерческую логику", positive: false },
      { text: "Не сопоставляет одинаковые позиции у разных поставщиков", positive: false },
      { text: "Не показывает лучший вариант", positive: false },
      { text: "Не доводит до готового решения", positive: false },
      { text: "Требует ручной работы поверх результата", positive: false },
    ],
  },
  {
    title: "IntDoc AI",
    tone: "accent",
    items: [
      { text: "Собирает входящие документы в единую структуру", positive: true },
      { text: "Нормализует данные автоматически", positive: true },
      { text: "Сопоставляет позиции с опорой на словарь клиента", positive: true },
      { text: "Показывает источник и уверенность по каждой строке", positive: true },
      { text: "Выносит спорные строки на проверку", positive: true },
      { text: "Рекомендует лучший вариант по вашим критериям", positive: true },
      { text: "Формирует готовый выходной документ", positive: true },
    ],
  },
];

function ColumnCard({ column, index }: { column: Column; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isAccent = column.tone === "accent";

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
      className={`p-6 lg:p-8 transition-all duration-700 ${
        isAccent ? "bg-foreground text-background" : "border border-foreground/15"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <h3
        className={`text-xl lg:text-2xl font-display mb-6 pb-6 border-b ${
          isAccent ? "border-background/15" : "border-foreground/10"
        }`}
      >
        {column.title}
      </h3>

      <ul className="space-y-4">
        {column.items.map((item, i) => {
          const Icon = item.positive ? Check : X;
          return (
            <li key={i} className="flex items-start gap-3">
              <Icon
                className={`w-4 h-4 mt-1 shrink-0 ${
                  isAccent
                    ? "text-background"
                    : item.positive
                    ? "text-foreground"
                    : "text-muted-foreground/60"
                }`}
              />
              <span
                className={`text-sm lg:text-base leading-relaxed ${
                  isAccent
                    ? "text-background/95"
                    : item.positive
                    ? "text-foreground/90"
                    : "text-muted-foreground"
                }`}
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ComparisonSection() {
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
        <Eyebrow className="mb-6">Сравнение</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Обычная обработка документов даёт текст.
          <br />
          IntDoc AI даёт{" "}
          <span className="relative inline-block">
            закупочное решение
            <span className="absolute -bottom-1 left-0 right-0 h-2 bg-foreground/10" />
          </span>
          .
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mb-12">
        {columns.map((column, i) => (
          <ColumnCard key={column.title} column={column} index={i} />
        ))}
      </div>

      <div className="max-w-3xl border-l-2 border-foreground pl-6 py-2">
        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
          IntDoc AI — это не ещё один инструмент для файлов. Это слой принятия решений между хаосом документов и готовым результатом для бизнеса.
        </p>
      </div>
    </Section>
  );
}
