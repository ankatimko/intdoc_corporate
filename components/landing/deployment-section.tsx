"use client";

import { useEffect, useRef, useState } from "react";
import { Cloud, Server, Network, ShieldCheck, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type DeploymentOption = {
  number: string;
  icon: typeof Cloud;
  name: string;
  audience: string;
  features: string[];
  recommended?: boolean;
};

const options: DeploymentOption[] = [
  {
    number: "01",
    icon: Cloud,
    name: "SaaS",
    audience: "Дочерние общества, региональные подразделения, пилотные проекты",
    features: [
      "Доступ через браузер, без установки",
      "Размещение на инфраструктуре оператора в РФ",
      "Централизованные обновления",
      "Развёртывание — дни",
    ],
  },
  {
    number: "02",
    icon: Server,
    name: "On-premise",
    audience:
      "При работе с конфиденциальными данными, требованиях службы ИБ к изоляции контура, в защищённых сегментах сети",
    features: [
      "Установка в вашем дата-центре или приватном облаке",
      "Данные не покидают периметр заказчика",
      "Совместимость с российскими ОС (Astra Linux, РЕД ОС)",
      "Работа без подключения к внешнему интернету",
      "Развёртывание — 4–8 недель с учётом интеграций",
    ],
    recommended: true,
  },
];

const integrations = {
  erp: ["SAP", "1С", "«Галактика»"],
  docs: ["Directum", "ELMA"],
  mail: ["Exchange", "«МойОфис»"],
  marketplaces: ["B2B-Center", "ТЭК-Торг", "ЭТП ГПБ", "«Сбер А»", "«Росэлторг»"],
};

const security = [
  "Соответствие 152-ФЗ",
  "Поддержка работы с КИИ",
  "Журналирование действий пользователей",
  "Ролевая модель доступа",
  "Возможность работы в защищённой сети",
];

function OptionCard({ option, index }: { option: DeploymentOption; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = option.icon;

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
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`relative p-8 lg:p-10 h-full flex flex-col ${
          option.recommended
            ? "border-2 border-foreground bg-foreground/[0.02]"
            : "border border-foreground/15"
        }`}
      >
        {option.recommended && (
          <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-background text-xs font-mono uppercase tracking-widest">
            Регулярно разворачиваем у заказчиков с собственным контуром
          </span>
        )}

        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className="w-14 h-14 border border-foreground/20 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <span className="font-mono text-xs text-muted-foreground block mb-2">Вариант {option.number}</span>
            <h3 className="text-3xl lg:text-4xl font-display">{option.name}</h3>
          </div>
        </div>

        <div className="mb-6 pb-6 border-b border-foreground/10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Когда выбирают</div>
          <p className="text-muted-foreground leading-relaxed">{option.audience}</p>
        </div>

        <ul className="space-y-3">
          {option.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-foreground mt-1 shrink-0" />
              <span className="text-sm lg:text-base text-foreground/80 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function DeploymentSection() {
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
    <Section id="deployment" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <Eyebrow className="mb-6">Развёртывание</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Два варианта развёртывания
          <br />
          <span className="text-muted-foreground">под требования вашей ИБ</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Платформа доступна и как SaaS, и в виде on-premise установки в контуре заказчика. Выбор зависит от политик информационной безопасности и требований к обработке данных.
        </p>
      </div>

      {/* Deployment options */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {options.map((option, i) => (
          <OptionCard key={option.number} option={option} index={i} />
        ))}
      </div>

      {/* Integrations + Security */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Integrations */}
        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display">Интеграции</h3>
          </div>

          <dl className="space-y-5">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">ERP</dt>
              <dd className="flex flex-wrap gap-2">
                {integrations.erp.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Документооборот</dt>
              <dd className="flex flex-wrap gap-2">
                {integrations.docs.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Корпоративная почта</dt>
              <dd className="flex flex-wrap gap-2">
                {integrations.mail.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Тендерные площадки</dt>
              <dd className="flex flex-wrap gap-2">
                {integrations.marketplaces.map((item) => (
                  <span key={item} className="text-sm px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
            Подключение к собственным системам — через REST API.
          </p>
        </div>

        {/* Security */}
        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display">Безопасность</h3>
          </div>

          <ul className="space-y-4">
            {security.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-foreground mt-1 shrink-0" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
