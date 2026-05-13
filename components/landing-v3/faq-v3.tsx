"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const faqs = [
  {
    question: "Под какой профиль закупок подходит?",
    answer:
      "Категорийные закупки с разнородными поставщиками: МТО, оборудование, материалы, комплектующие. Условие — поток ТКП от нескольких поставщиков и сравнимая номенклатура.",
  },
  {
    question: "Что если ТКП поставщиков сильно различаются по структуре?",
    answer:
      "Это основная задача платформы. Нейросеть не работает по шаблону — извлекает данные из произвольной структуры. На пилоте модель дообучается на ваших документах.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "В SaaS — на инфраструктуре оператора в РФ с соблюдением 152-ФЗ. В on-premise — в вашем контуре, без передачи вовне.",
  },
  {
    question: "Совместима ли с российскими ОС и СУБД?",
    answer:
      "Да. On-premise развёртывание поддерживает Astra Linux, РЕД ОС, PostgreSQL и Postgres Pro.",
  },
  {
    question: "Заменяет ли платформа закупщика?",
    answer:
      "Нет. Снимает ручную сводку данных и подготовку таблиц. Решение по выбору поставщика остаётся за закупщиком — платформа даёт полную и сопоставимую картину.",
  },
  {
    question: "Сколько занимает пилот?",
    answer: "8–14 недель от старта до фактических метрик на одной категории закупок.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-6">
          <span className="font-mono text-sm text-muted-foreground mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg lg:text-xl font-display group-hover:translate-x-2 transition-transform duration-300">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed pl-14">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQV3() {
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
    <Section id="faq" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">FAQ</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Вопросы, которые задают
          <br />
          <span className="text-muted-foreground">на первой встрече</span>
        </h2>
      </div>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </Section>
  );
}
