"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const faqs = [
  {
    question: "Под какой профиль закупок подходит платформа?",
    answer:
      "Категорийные закупки с разнородными поставщиками: МТО, оборудование, материалы, комплектующие, услуги с измеримыми параметрами. Принципиальное условие — наличие сравнимой номенклатуры и потока ТКП от нескольких поставщиков.",
  },
  {
    question: "Что если ТКП поставщиков сильно различаются по структуре?",
    answer:
      "Это и есть основная задача платформы. Нейросеть не работает по шаблону — она извлекает данные из произвольной структуры. На этапе настройки модель дообучается на ваших реальных ТКП.",
  },
  {
    question: "Какие языки поддерживаются?",
    answer:
      "В базовой поставке — русский, английский, китайский, турецкий, фарси, корейский, немецкий, французский. Расширение языковой поддержки — на этапе настройки.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "В SaaS-варианте — на инфраструктуре оператора в РФ с соблюдением 152-ФЗ. В on-premise варианте — полностью в контуре заказчика, без передачи данных вовне.",
  },
  {
    question: "Совместима ли платформа с российскими ОС и СУБД?",
    answer:
      "Да. On-premise развёртывание поддерживает Astra Linux, РЕД ОС, PostgreSQL и Postgres Pro.",
  },
  {
    question: "Заменяет ли платформа закупщика?",
    answer:
      "Нет. Платформа снимает с закупщика ручную сводку данных и подготовку сравнительных таблиц. Решение по выбору поставщика остаётся за закупщиком и согласующими — платформа даёт им полную и сопоставимую картину для этого решения.",
  },
  {
    question: "Сколько занимает внедрение?",
    answer:
      "Пилот на одной категории закупок — 8–14 недель от старта до фактических результатов. Полноценное внедрение по нескольким категориям с интеграциями — обсуждается по итогам пилота.",
  },
  {
    question: "Кто отвечает за качество извлечения данных?",
    answer:
      "Платформа поставляется с SLA по точности извлечения. На этапе пилота фиксируются целевые показатели по конкретным типам ваших документов, после внедрения они контролируются на постоянной основе.",
  },
  {
    question: "Можно ли работать с ТКП на азиатских языках без переводчика?",
    answer:
      "Да. Платформа работает с китайским, турецким, фарси, корейским на том же уровне, что с русским — извлекает позиции, цены, сроки, условия. Закупщик видит готовую таблицу на русском, не открывая исходный документ.",
  },
  {
    question: "Подходит ли решение для холдинга с распределёнными закупками?",
    answer:
      "Да. Возможна централизованная установка с разделением доступа по ДЗО и категориям. Закупщики каждого подразделения работают со своими процедурами, головная компания видит сводную аналитику по группе.",
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
        <p className="text-muted-foreground leading-relaxed pl-14">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
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
    <Section id="faq" ref={sectionRef} topBorder>
      {/* Header */}
      <div className="mb-16 lg:mb-24">
        <Eyebrow className="mb-6">FAQ</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Вопросы, которые обычно задают
          <br />
          <span className="text-muted-foreground">на первой встрече</span>
        </h2>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </div>
    </Section>
  );
}
