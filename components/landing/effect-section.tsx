"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type EffectRow = {
  number: string;
  title: string;
  before: string;
  after: string;
  result: string;
};

const rows: EffectRow[] = [
  {
    number: "01",
    title: "Срок процедуры",
    before: "5–15 рабочих дней на сведение ТКП",
    after: "часы вместо дней",
    result:
      "Котировочная процедура завершается в пределах одной рабочей недели вместо двух-трёх",
  },
  {
    number: "02",
    title: "Цена контракта",
    before:
      "в сравнение реально попадает 5–10 поставщиков — на больший объём не хватает рук",
    after: "30–50 поставщиков в одной таблице без дополнительной нагрузки",
    result:
      "Выше конкуренция между поставщиками — ниже итоговая цена. Экономия 3–8% от контракта на типовой процедуре",
  },
  {
    number: "03",
    title: "Нагрузка на закупщиков",
    before: "закупщик 70% времени тратит на сведение Excel и PDF",
    after: "закупщик работает с готовой таблицей и принимает решения",
    result:
      "Тот же штат обрабатывает в 3–4 раза больше процедур. Или текущий план закупок исполняется меньшей численностью",
  },
  {
    number: "04",
    title: "Качество сравнения",
    before: "ручные ошибки в синонимах, валютах, единицах измерения, инкотермсах",
    after: "автоматическая унификация и сопоставление синонимов",
    result:
      "Закупщик не пропускает выгодный вариант из-за того, что у поставщика «другое название той же позиции»",
  },
  {
    number: "05",
    title: "Скрытые расходы в ТКП",
    before:
      "поставщик «забыл» включить НДС, доставку, монтаж, ЗИП — выясняется уже после подписания контракта, итоговая цена расходится с тендерной",
    after:
      "платформа извлекает не только основную цену, но и все сопутствующие позиции из ТКП — налоги, логистику, упаковку, шеф-монтаж, гарантийные условия, ЗИП",
    result:
      "В сравнении видна реальная стоимость владения, а не маркетинговая цена. Сюрпризов после подписания контракта не возникает",
  },
  {
    number: "06",
    title: "Защита решения перед руководством",
    before:
      "обоснование выбора поставщика для тендерного комитета собирается вручную — сводная таблица, отдельная пояснительная записка, проверка альтернатив",
    after:
      "сравнительная ведомость с ранжированием и всеми вариантами выгружается одной кнопкой в корпоративный шаблон",
    result:
      "Материал для тендерного комитета готовится за минуты вместо часов. На любой вопрос «а почему не этот поставщик» — ответ прямо в таблице",
  },
];

function EffectRowItem({ row, index }: { row: EffectRow; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-12 lg:py-16 border-b border-foreground/10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start">
        {/* Title column */}
        <div>
          <span className="font-mono text-sm text-muted-foreground block mb-3">{row.number}</span>
          <h3 className="text-2xl lg:text-4xl font-display tracking-tight">{row.title}</h3>
        </div>

        {/* Transformation grid */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rounded-xl overflow-hidden">
          {/* Before */}
          <div className="bg-background p-6 lg:p-7">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">До</div>
            <p className="text-sm lg:text-base text-foreground/80 leading-relaxed">{row.before}</p>
          </div>
          {/* After */}
          <div className="bg-background p-6 lg:p-7">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">С IntDoc AI</div>
            <p className="text-sm lg:text-base text-foreground leading-relaxed">{row.after}</p>
          </div>
          {/* Result */}
          <div className="bg-foreground text-background p-6 lg:p-7 relative">
            <div className="font-mono text-xs uppercase tracking-widest text-background/60 mb-3 flex items-center gap-2">
              <ArrowRight className="w-3 h-3" />
              Эффект
            </div>
            <p className="text-sm lg:text-base text-background leading-relaxed">{row.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EffectSection() {
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
    <Section id="effect" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Что меняется</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что получает отдел закупок
          <br />
          <span className="text-muted-foreground">в цифрах</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Эффект достигается на самой трудоёмкой операции — ручной сводке разнородных ТКП в единую сравнительную таблицу. Эта операция занимает 60–80% рабочего времени закупщика и является бутылочным горлышком всей процедуры.
        </p>
      </div>

      <div>
        {rows.map((row, i) => (
          <EffectRowItem key={row.number} row={row} index={i} />
        ))}
      </div>
    </Section>
  );
}
