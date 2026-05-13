"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Crown, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Group = {
  icon: typeof Briefcase;
  label: string;
  items: Array<{ title: string; body: string }>;
};

const groups: Group[] = [
  {
    icon: Briefcase,
    label: "Что получает бизнес",
    items: [
      {
        title: "Быстрее обработка заявки",
        body: "Раньше — дни, теперь — часы. Конкурентное преимущество в скорости ответа клиенту.",
      },
      {
        title: "Больше выигранных сделок",
        body: "Первое предложение клиенту чаще побеждает — особенно в нишах, где решает скорость, а не только цена.",
      },
      {
        title: "Меньше ручной работы",
        body: "60–80% рутинной сводки данных уходит из расписания команды.",
      },
      {
        title: "Более выгодные закупки",
        body: "В сравнение попадает в 3–4 раза больше поставщиков — конкуренция снижает финальную цену на 3–8% от типового контракта.",
      },
      {
        title: "Снижение потерь",
        body: "Меньше ошибок в синонимах, валютах, единицах измерения — меньше переплат и срывов.",
      },
      {
        title: "Масштабирование без роста штата",
        body: "Объём закупки растёт, численность отдела — нет.",
      },
    ],
  },
  {
    icon: Crown,
    label: "Что получает руководитель",
    items: [
      {
        title: "Прозрачная картина предложений",
        body: "Видно, что пришло, от кого, по какой цене — в одном окне, без открытия десятков файлов.",
      },
      {
        title: "Понимание узких мест команды",
        body: "Где зависают заявки, какие поставщики тормозят, где байеры перегружены.",
      },
      {
        title: "Объяснимая логика выбора",
        body: "По каждой сделке видно, почему выбран именно этот поставщик и какие были альтернативы.",
      },
      {
        title: "Единые правила",
        body: "Критерии выбора (цена, срок, наличие, репутация) задаются один раз — применяются ко всем процедурам.",
      },
      {
        title: "Управляемый процесс",
        body: "Вместо набора Excel-файлов на ноутбуках сотрудников — единая система с историей решений.",
      },
    ],
  },
  {
    icon: Users,
    label: "Что получает команда",
    items: [
      {
        title: "Одна сводная таблица",
        body: "Вместо десятков документов от поставщиков.",
      },
      {
        title: "Автоматическое сопоставление",
        body: "Одинаковые и похожие позиции у разных поставщиков сводятся в одну строку.",
      },
      {
        title: "Быстрый выбор лучшего варианта",
        body: "Система подсказывает, человек подтверждает.",
      },
      {
        title: "Очередь спорных строк",
        body: "Только то, что действительно требует внимания — а не весь массив данных.",
      },
      {
        title: "Готовый материал для клиента",
        body: "Выгрузка в Excel, PDF или фирменное КП в один клик.",
      },
    ],
  },
];

function GroupCard({ group, index }: { group: Group; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = group.icon;

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
      className={`border border-foreground/10 p-8 lg:p-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-foreground/10">
        <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl lg:text-2xl font-display">{group.label}</h3>
      </div>

      <ul className="space-y-5">
        {group.items.map((item) => (
          <li key={item.title}>
            <div className="text-base font-medium mb-1">{item.title}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BusinessEffectsSection() {
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
    <Section id="result" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Эффект для бизнеса</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что меняется после подключения IntDoc AI
          <br />
          <span className="text-muted-foreground">на уровне бизнеса, руководителя и команды</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {groups.map((group, i) => (
          <GroupCard key={group.label} group={group} index={i} />
        ))}
      </div>
    </Section>
  );
}
