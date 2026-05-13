"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const launchItems = [
  "Внедрение ядра обработки документов",
  "Опционально — модуль формирования итоговых документов",
  "Опционально — встраивание в Bitrix24",
  "Опционально — дополнительные шаблоны и типы документов",
];

const monthlyItems = [
  "Пакет обработки документов под ваш объём",
  "Базовая обработка, сравнение, выгрузка, источник и уверенность",
  "Часы доработок и поддержки — в зависимости от пакета",
];

const volumes = [
  {
    range: "До 500",
    label: "документов в месяц",
    body: "Стартовый сценарий, подходит для пилота и небольшого потока",
  },
  {
    range: "500–3 000",
    label: "документов в месяц",
    body: "Рабочий режим для растущей команды",
  },
  {
    range: "3 000+",
    label: "документов в месяц",
    body: "Корпоративный пакет с SLA, выделенным менеджером и индивидуальной инфраструктурой",
  },
];

const discounts = [
  { threshold: "от 1 000 документов", value: "10%" },
  { threshold: "от 3 000 документов", value: "20%" },
  { threshold: "от 5 000 документов", value: "индивидуальные условия" },
];

export function PricingV2Section() {
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
    <Section id="pricing" ref={sectionRef} topBorder padding="lg">
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Стоимость</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Прозрачная модель оплаты
          <br />
          <span className="text-muted-foreground">под ваш объём документов</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Стоимость складывается из разового запуска и ежемесячного пакета по объёму обработки. Финальная цифра зависит от типа документов, объёма потока и набора интеграций.
        </p>
      </div>

      {/* Cost components */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Разовый запуск
          </div>
          <ul className="space-y-4">
            {launchItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Ежемесячная подписка
          </div>
          <ul className="space-y-4">
            {monthlyItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-1 shrink-0" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Volumes */}
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Объёмы и подходы
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden">
          {volumes.map((v) => (
            <div key={v.range} className="bg-background p-6 lg:p-8">
              <div className="font-display text-4xl lg:text-5xl tracking-tight mb-1">{v.range}</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">{v.label}</div>
              <p className="text-sm text-foreground/80 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Discounts */}
      <div className="mb-12 max-w-3xl">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Скидки от объёма
        </div>
        <ul className="space-y-3">
          {discounts.map((d) => (
            <li key={d.threshold} className="flex items-baseline justify-between gap-4 py-3 border-b border-foreground/10">
              <span className="text-base text-foreground/80">{d.threshold}</span>
              <span className="font-mono font-medium">{d.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl">
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-foreground/30 pl-6">
          Оставьте заявку — рассчитаем стоимость под ваш объём, типы документов и нужные интеграции. Покажем разбор на ваших файлах и предложим оптимальный пакет.
        </p>

        <Button
          size="lg"
          className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          asChild
        >
          <a href="#form">
            Рассчитать стоимость
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
