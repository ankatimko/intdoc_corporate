"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Briefcase, Layers, Code2, Globe } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Item = { icon: typeof Mail; name: string; body: string };

const items: Item[] = [
  {
    icon: Mail,
    name: "Корпоративная почта",
    body: "Автоматический приём входящих документов от поставщиков",
  },
  {
    icon: Briefcase,
    name: "Bitrix24",
    body: "Обработка ТКП прямо в карточке сделки",
  },
  {
    icon: Layers,
    name: "CRM",
    body: "Связь с воронкой закупки или продажи",
  },
  {
    icon: Code2,
    name: "API",
    body: "Интеграция с вашими внутренними системами",
  },
  {
    icon: Globe,
    name: "Веб-интерфейс",
    body: "Работа сразу, без интеграций на старте",
  },
];

const formats = ["Excel", "PDF", "сканы", "фото", "email", "спецификации", "текст в теле сообщения"];

export function IntegrationsV2Section() {
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
    <Section id="integrations" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Связь с инфраструктурой</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IntDoc AI встраивается
          <br />
          <span className="text-muted-foreground">в существующую инфраструктуру</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Не требует менять процессы, переучивать команду или ставить тяжёлый софт. Работа начинается с веб-интерфейса, интеграции добавляются по мере необходимости.
        </p>
      </div>

      {/* What we connect */}
      <div className="mb-16">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Что подключаем
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {items.map(({ icon: Icon, name, body }) => (
            <div
              key={name}
              className="border border-foreground/10 p-6 hover:border-foreground/30 transition-colors"
            >
              <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center mb-4">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-medium mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formats */}
      <div className="mb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Форматы документов
        </div>
        <div className="flex flex-wrap gap-3">
          {formats.map((f) => (
            <span
              key={f}
              className="px-4 py-2 bg-foreground/5 border border-foreground/10 rounded-full text-sm"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">Другие интеграции — по запросу.</p>
    </Section>
  );
}
