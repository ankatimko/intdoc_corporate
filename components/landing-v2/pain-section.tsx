"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Pain = { title: string; body: string };

const pains: Pain[] = [
  {
    title: "Хаос форматов",
    body:
      "Прайсы и КП приходят в Excel, PDF, письмах и сканах. Каждый поставщик присылает по-своему — единого шаблона нет и не будет.",
  },
  {
    title: "Один товар — десять названий",
    body:
      "У одного поставщика «насос центробежный К-100», у другого «насос К100», у третьего артикул без названия. Сопоставление вручную — часы работы байера на каждый запрос.",
  },
  {
    title: "Разные валюты и единицы",
    body:
      "Цены в рублях, долларах, юанях. Объёмы в штуках, упаковках, тоннах. Без приведения к одному виду честное сравнение невозможно.",
  },
  {
    title: "Байеры сводят данные вместо решений",
    body:
      "Дорогие специалисты 60–70% времени работают как операторы ввода — переписывают данные из файлов в Excel-таблицу.",
  },
  {
    title: "Лучшая цена теряется в хаосе",
    body:
      "В файлах от 30 поставщиков выгодное предложение часто остаётся незамеченным — на полноценный разбор просто нет времени.",
  },
  {
    title: "Заявка обрабатывается слишком долго",
    body:
      "Пока клиент ждёт ответ 2–3 дня, конкурент с более быстрым процессом уже отправил своё предложение и взял заказ.",
  },
  {
    title: "Невозможно объяснить выбор",
    body:
      "«Почему этот поставщик, а не тот?» — без сводной таблицы и истории решений руководитель не может проверить логику закупки.",
  },
  {
    title: "Рост объёма = рост штата",
    body:
      "Чтобы обрабатывать в два раза больше заявок, приходится нанимать в два раза больше байеров. Линейная модель, в которой не масштабируется маржа.",
  },
];

function PainCard({ pain, index }: { pain: Pain; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${(index % 4) * 60}ms` }}
    >
      <div className="font-mono text-xs text-muted-foreground mb-3">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-xl lg:text-2xl font-display mb-3">{pain.title}</h3>
      <p className="text-muted-foreground leading-relaxed">{pain.body}</p>
    </div>
  );
}

export function PainSection() {
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
        <Eyebrow className="mb-6">Что мешает бизнесу</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Почему закупка теряет время, скорость и маржу
          <br />
          <span className="text-muted-foreground">даже при сильной команде</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10">
          Проблема не в количестве документов. Проблема в том, что бизнес до сих пор вручную превращает хаос поставщиков в закупочное решение.
        </p>
        <div
          className={`max-w-3xl border-l-2 border-foreground pl-6 lg:pl-8 py-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
            Пока ваша команда вручную сводит прайсы и КП 2–3 дня — более быстрый конкурент уже отправляет клиенту готовое предложение.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {pains.map((pain, i) => (
          <PainCard key={pain.title} pain={pain} index={i} />
        ))}
      </div>
    </Section>
  );
}
