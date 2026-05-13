"use client";

import { useEffect, useRef, useState } from "react";
import { Truck, Search, Wrench, ShoppingCart, Users, Globe } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Scenario = { icon: typeof Truck; title: string; body: string };

const scenarios: Scenario[] = [
  {
    icon: Truck,
    title: "Дистрибьюторы и торговые компании",
    body:
      "Много поставщиков, тысячи SKU, постоянные обновления прайсов. Платформа автоматически парсит новые прайсы и поддерживает актуальную базу — менеджеры работают со свежими ценами, а не с трёхмесячной давности.",
  },
  {
    icon: Search,
    title: "Подбор под спецификацию клиента",
    body:
      "Клиент присылает запрос на 50–200 позиций. Вы рассылаете его поставщикам, получаете десятки разнородных ответов. Платформа собирает их в сравнительную матрицу за минуты — менеджер сразу видит лучший вариант по каждой строке и быстро формирует предложение клиенту.",
  },
  {
    icon: Wrench,
    title: "Технические закупки",
    body:
      "Стройка, промышленность, оборудование, комплектующие, инжиниринг, MRO. Сложные номенклатуры с артикулами, аналогами, техническими параметрами — платформа сопоставляет позиции даже когда поставщики используют разные системы обозначений.",
  },
  {
    icon: ShoppingCart,
    title: "Ассортиментная закупка и e-commerce",
    body:
      "Скорость сравнения, актуальное наличие, регулярные обновления закупочных условий. Платформа держит актуальную картину рынка по каждой позиции вашего ассортимента.",
  },
  {
    icon: Users,
    title: "Команды с несколькими байерами",
    body:
      "Объём уже вырос из ручного Excel-процесса, но содержать пропорционально большую команду — невыгодно. Платформа позволяет той же командой обрабатывать в 3–4 раза больше заявок.",
  },
  {
    icon: Globe,
    title: "Импортозамещение и работа с азиатскими поставщиками",
    body:
      "ТКП от поставщиков из Китая, Турции, Кореи, ОАЭ — на их языках и в их форматах. Платформа работает с китайским и турецким на том же уровне, что с русским. Закупщиков со знанием этих языков нанять практически невозможно — а платформе они не нужны.",
  },
];

function ScenarioCard({ scenario, index }: { scenario: Scenario; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = scenario.icon;

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
      className={`border border-foreground/10 p-6 lg:p-8 hover:border-foreground/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center mb-5">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-xl lg:text-2xl font-display mb-3">{scenario.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{scenario.body}</p>
    </div>
  );
}

export function IndustryScenariosSection() {
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
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Где работает</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Где IntDoc AI даёт
          <br />
          <span className="text-muted-foreground">максимальный эффект</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {scenarios.map((scenario, i) => (
          <ScenarioCard key={scenario.title} scenario={scenario} index={i} />
        ))}
      </div>
    </Section>
  );
}
