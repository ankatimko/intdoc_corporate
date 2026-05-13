"use client";

import { useEffect, useRef, useState } from "react";
import { FileSearch, Repeat, Globe, FileOutput, AlertTriangle, Building2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Scenario = {
  number: string;
  icon: typeof FileSearch;
  title: string;
  problem: string;
  solution: string;
  result: string;
  callout?: string;
};

const scenarios: Scenario[] = [
  {
    number: "01",
    icon: FileSearch,
    title: "Котировочные сессии и закрытые конкурсы",
    problem:
      "Поставщики присылают ТКП в произвольной форме — Excel, PDF, сканы, тело письма. Закупщик руками сводит 30–50 ответов в одну таблицу, проверяет синонимы, конвертирует валюты, учитывает Инкотермс. На типовой процедуре это 1–2 недели работы одного человека.",
    solution:
      "Сводная ведомость собирается автоматически за минуты. Закупщик получает готовую таблицу и работает с решениями, а не с данными.",
    result:
      "Срок процедуры сокращается в 5–10 раз. В сравнение реально попадает в 3–4 раза больше поставщиков — это напрямую конвертируется в экономию на цене контракта. В сравнении видна полная стоимость: с НДС, логистикой, монтажом, ЗИП — а не только базовая цена из таблички поставщика.",
  },
  {
    number: "02",
    icon: Repeat,
    title: "Регулярные закупки и рамочные соглашения",
    problem:
      "Поставщики присылают обновлённые прайсы еженедельно или ежемесячно. На крупном предприятии это сотни файлов в неделю. Поддерживать актуальную внутреннюю базу цен по всей номенклатуре вручную невозможно — она устаревает быстрее, чем обновляется.",
    solution:
      "Новые прайсы парсятся автоматически по мере поступления, внутренняя база цен обновляется в реальном времени. Закупщик в любой момент видит актуальный рынок по любой позиции.",
    result:
      "Решения принимаются на свежих данных, а не на трёхмесячной давности. Снижается риск переплаты по рамочным контрактам.",
    callout:
      "В работе: этот сценарий сейчас разворачивается у крупного промышленного заказчика. Подробности и фактические метрики — на личной встрече.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Импортозамещение и работа с альтернативными поставщиками",
    problem:
      "После переориентации цепочек поставок появилась задача быстро находить аналоги у новых поставщиков из Китая, Турции, ОАЭ, Индии. Их ТКП приходят на родном языке, в незнакомых форматах, в местных валютах, с другой логикой описания номенклатуры. Закупщиков со знанием китайского или фарси на рынке практически нет — нанять их под рост азиатского импорта невозможно.",
    solution:
      "Платформа работает с китайскими, турецкими, фарси, корейскими документами на том же уровне, что с русскими. Сопоставление позиций с вашей номенклатурой — автоматическое.",
    result:
      "В сравнение включаются поставщики, которых раньше пропускали из-за языкового и форматного барьера. Расширение пула — лучшие условия по контракту.",
  },
  {
    number: "04",
    icon: FileOutput,
    title: "Формирование итоговых документов закупочной процедуры",
    problem:
      "По итогам сравнения нужно сформировать протокол выбора поставщика, сравнительную ведомость для согласующих, проект договора с финальными условиями.",
    solution:
      "Все итоговые документы формируются автоматически из данных платформы в ваших корпоративных шаблонах. Сравнительная ведомость, протокол, выгрузка для системы документооборота.",
    result: "Этап оформления процедуры сокращается с нескольких дней до нескольких часов.",
  },
  {
    number: "05",
    icon: AlertTriangle,
    title: "Срочные и аварийные закупки",
    problem:
      "Авария на производстве, простой оборудования, срыв сроков по основному поставщику. На сравнение поставщиков нет ни дня — закупщик звонит первым знакомым и берёт у того, кто быстрее ответит. Цена в таких ситуациях выше рынка на 20–40%.",
    solution:
      "Запрос рассылается по списку поставщиков из вашей базы, ответы парсятся в режиме реального времени, сравнительная таблица обновляется по мере поступления ТКП. Через 2–3 часа закупщик видит реальный рынок, а не первое попавшееся предложение.",
    result:
      "Даже в авральном режиме решение принимается на основе сравнения, а не безальтернативно. Снижение переплаты в срочных закупках на 15–25%.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Единая база цен по группе компаний",
    problem:
      "В крупных холдингах закупки распределены между ДЗО, филиалами, региональными подразделениями. Каждое подразделение закупает самостоятельно, по своим поставщикам, по своим ценам. Головная компания не видит общей картины: одна и та же позиция в Тюмени и Самаре закупается по ценам, отличающимся в полтора-два раза.",
    solution:
      "Все ТКП и итоговые цены по группе сводятся в единую базу. Категорийный менеджер видит реальный диапазон цен по позиции в разрезе ДЗО, поставщиков, периодов. Появляется основа для централизованных рамочных соглашений по группе.",
    result:
      "Выравнивание цен по группе, переговорная позиция перед поставщиками на уровне всего холдинга, основа для категорийного менеджмента. На крупных номенклатурных группах экономия достигает 5–12% от годового объёма закупок.",
  },
];

function ScenarioCard({ scenario, index }: { scenario: Scenario; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = scenario.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="border border-foreground/10 p-8 lg:p-10 hover:border-foreground/30 transition-all duration-500 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-6 mb-6">
          <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="font-mono text-xs text-muted-foreground block mb-2">{scenario.number}</span>
            <h3 className="text-2xl lg:text-3xl font-display group-hover:translate-x-1 transition-transform duration-300">
              {scenario.title}
            </h3>
          </div>
        </div>

        {/* Problem */}
        <p className="text-muted-foreground leading-relaxed mb-6">{scenario.problem}</p>

        {/* Solution */}
        <div className="mb-6 pl-4 border-l-2 border-foreground/30">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">С IntDoc AI</div>
          <p className="text-foreground leading-relaxed">{scenario.solution}</p>
        </div>

        {/* Callout (optional) */}
        {scenario.callout && (
          <div className="mb-6 bg-foreground/5 border border-foreground/10 rounded-lg p-4">
            <p className="text-sm text-foreground/80 leading-relaxed">{scenario.callout}</p>
          </div>
        )}

        {/* Result */}
        <div className="mt-auto pt-6 border-t border-foreground/10">
          <div className="flex items-start gap-3">
            <ArrowRight className="w-5 h-5 mt-1 shrink-0" />
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Эффект</div>
              <p className="font-medium leading-relaxed">{scenario.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScenariosSection() {
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
    <Section id="scenarios" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-24 max-w-4xl">
        <Eyebrow className="mb-6">Сценарии использования</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Где платформа уже даёт
          <br />
          <span className="text-muted-foreground">измеримый эффект</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Платформа модульная и настраивается под закупочную модель заказчика. Сценарии можно внедрять последовательно, начиная с самого тяжёлого участка.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {scenarios.map((scenario, index) => (
          <ScenarioCard key={scenario.number} scenario={scenario} index={index} />
        ))}
      </div>
    </Section>
  );
}
