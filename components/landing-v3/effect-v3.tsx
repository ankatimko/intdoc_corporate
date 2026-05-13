"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Row = { number: string; title: string; before: string; after: string };

const rows: Row[] = [
  {
    number: "01",
    title: "Срок процедуры",
    before: "1–2 недели на сведение ТКП в таблицу",
    after: "часы вместо дней",
  },
  {
    number: "02",
    title: "Цена контракта",
    before: "в сравнении 5–10 поставщиков — на больший охват не хватает рук",
    after: "30–50 поставщиков в одной таблице. Выше конкуренция — ниже цена.",
  },
  {
    number: "03",
    title: "Нагрузка на закупщиков",
    before: "70% времени уходит на сведение Excel и PDF",
    after: "тот же штат обрабатывает в 3–4 раза больше процедур",
  },
  {
    number: "04",
    title: "Качество сравнения",
    before: "ручные ошибки в синонимах, валютах, единицах, инкотермсах",
    after: "автоматическая унификация — выгодный вариант не теряется",
  },
];

function EffectCard({ row, index }: { row: Row; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      className={`border border-foreground/10 p-6 lg:p-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-foreground/10">
        <span className="font-mono text-sm text-muted-foreground">{row.number}</span>
        <h3 className="text-xl lg:text-2xl font-display">{row.title}</h3>
      </div>

      <div className="space-y-5">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Было</div>
          <p className="text-base text-foreground/75 leading-relaxed">{row.before}</p>
        </div>
        <div className="flex items-start gap-3">
          <ArrowRight className="w-4 h-4 mt-1.5 shrink-0" />
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Стало</div>
            <p className="text-base text-foreground font-medium leading-relaxed">{row.after}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EffectV3() {
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
    <Section id="effect" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-3xl">
        <Eyebrow className="mb-6">Эффект</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что меняется в работе отдела
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Ручная сводка ТКП — 60–80% рабочего времени закупщика. Платформа снимает эту работу полностью.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {rows.map((r, i) => (
          <EffectCard key={r.number} row={r} index={i} />
        ))}
      </div>
    </Section>
  );
}
