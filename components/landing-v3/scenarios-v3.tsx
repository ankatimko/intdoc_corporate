"use client";

import { useEffect, useRef, useState } from "react";
import { FileSearch, Repeat, Globe, FileOutput } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Scenario = {
  number: string;
  icon: typeof FileSearch;
  title: string;
  body: string;
  callout?: string;
};

const scenarios: Scenario[] = [
  {
    number: "01",
    icon: FileSearch,
    title: "Котировочные сессии и закрытые конкурсы",
    body:
      "30–50 ТКП в разных форматах сводятся в одну таблицу автоматически. Срок процедуры сокращается в 5–10 раз. В сравнение реально попадает в 3–4 раза больше поставщиков.",
  },
  {
    number: "02",
    icon: Repeat,
    title: "Регулярные закупки и рамочные соглашения",
    body:
      "Прайсы поставщиков парсятся по мере поступления. Внутренняя база цен всегда актуальна — решения принимаются на свежих данных, а не на трёхмесячной давности.",
    callout:
      "В работе: этот сценарий разворачивается у крупного промышленного заказчика. Подробности — на встрече.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Импортозамещение и азиатские поставщики",
    body:
      "ТКП из Китая, Турции, ОАЭ, Индии обрабатываются на родном языке. В сравнение попадают поставщики, которых раньше пропускали из-за языкового барьера.",
  },
  {
    number: "04",
    icon: FileOutput,
    title: "Формирование документов процедуры",
    body:
      "Сравнительная ведомость, протокол выбора, выгрузка для документооборота — формируются автоматически в ваших корпоративных шаблонах.",
  },
];

function ScenarioCard({ scenario, index }: { scenario: Scenario; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = scenario.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-foreground/10 p-8 lg:p-10 hover:border-foreground/30 transition-all duration-500 h-full flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div className="flex items-start gap-5 mb-6">
        <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <span className="font-mono text-xs text-muted-foreground block mb-2">{scenario.number}</span>
          <h3 className="text-xl lg:text-2xl font-display leading-snug">{scenario.title}</h3>
        </div>
      </div>

      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{scenario.body}</p>

      {scenario.callout && (
        <div className="mt-6 pt-6 border-t border-foreground/10 bg-foreground/[0.02] -mx-8 lg:-mx-10 px-8 lg:px-10 pb-1">
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground bg-foreground/10 px-2 py-1 rounded mr-2">
              В работе
            </span>
            {scenario.callout.replace(/^В работе:\s*/, "")}
          </p>
        </div>
      )}
    </div>
  );
}

export function ScenariosV3() {
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
    <Section id="scenarios" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">Где работает</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Четыре сценария с измеримым эффектом
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {scenarios.map((s, i) => (
          <ScenarioCard key={s.number} scenario={s} index={i} />
        ))}
      </div>
    </Section>
  );
}
