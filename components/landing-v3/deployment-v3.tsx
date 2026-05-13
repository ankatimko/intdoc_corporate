"use client";

import { useEffect, useRef, useState } from "react";
import { Cloud, Server, Network, ShieldCheck, Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Accent = "sky" | "violet" | "blue" | "amber";

type Option = {
  icon: typeof Cloud;
  name: string;
  audience: string;
  features: string[];
  accent: Accent;
};

const accentClasses: Record<Accent, { stripe: string; iconBg: string; iconText: string }> = {
  sky:    { stripe: "bg-sky-500",    iconBg: "bg-sky-500/10 border-sky-500/30",       iconText: "text-sky-600 dark:text-sky-400" },
  violet: { stripe: "bg-violet-500", iconBg: "bg-violet-500/10 border-violet-500/30", iconText: "text-violet-600 dark:text-violet-400" },
  blue:   { stripe: "bg-blue-500",   iconBg: "bg-blue-500/10 border-blue-500/30",     iconText: "text-blue-600 dark:text-blue-400" },
  amber:  { stripe: "bg-amber-500",  iconBg: "bg-amber-500/10 border-amber-500/30",   iconText: "text-amber-600 dark:text-amber-400" },
};

const options: Option[] = [
  {
    icon: Cloud,
    name: "SaaS",
    audience: "Для пилотов, дочерних обществ, быстрого старта",
    features: [
      "Доступ через браузер",
      "Размещение на инфраструктуре оператора в РФ",
      "Развёртывание — дни",
    ],
    accent: "sky",
  },
  {
    icon: Server,
    name: "On-premise",
    audience: "При требованиях службы ИБ к изоляции контура, для работы с конфиденциальными данными",
    features: [
      "Установка в вашем дата-центре или приватном облаке",
      "Данные не покидают периметр заказчика",
      "Совместимость с российскими ОС (Astra Linux, РЕД ОС)",
      "Развёртывание — 4–8 недель",
    ],
    accent: "violet",
  },
];

export function DeploymentV3() {
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
    <Section id="deployment" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">Развёртывание</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Два варианта — под требования вашей ИБ
        </h2>
      </div>

      {/* Deployment options */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {options.map((option) => {
          const Icon = option.icon;
          const colors = accentClasses[option.accent];
          return (
            <div
              key={option.name}
              className="relative p-8 lg:p-10 border border-foreground/15 h-full flex flex-col overflow-hidden"
            >
              {/* Top accent stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${colors.stripe}`} />

              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 border flex items-center justify-center shrink-0 ${colors.iconBg}`}>
                  <Icon className={`w-6 h-6 ${colors.iconText}`} />
                </div>
                <h3 className="text-3xl lg:text-4xl font-display">{option.name}</h3>
              </div>

              <div className="mb-6 pb-6 border-b border-foreground/10">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Когда выбирают
                </div>
                <p className="text-muted-foreground leading-relaxed">{option.audience}</p>
              </div>

              <ul className="space-y-3">
                {option.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-1 shrink-0" />
                    <span className="text-sm lg:text-base text-foreground/80 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Integrations + Security */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div className="relative border border-foreground/10 p-8 lg:p-10 overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-1 ${accentClasses.blue.stripe}`} />
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 border flex items-center justify-center shrink-0 ${accentClasses.blue.iconBg}`}>
              <Network className={`w-5 h-5 ${accentClasses.blue.iconText}`} />
            </div>
            <h3 className="text-xl lg:text-2xl font-display">Интеграции</h3>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Платформа подключается к корпоративной почте, ERP, системам документооборота и тендерным площадкам по вашему стеку. Конкретный набор и протоколы — обсуждаем с вашими ИТ на этапе пилота.
          </p>
        </div>

        <div className="relative border border-foreground/10 p-8 lg:p-10 overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-1 ${accentClasses.amber.stripe}`} />
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 border flex items-center justify-center shrink-0 ${accentClasses.amber.iconBg}`}>
              <ShieldCheck className={`w-5 h-5 ${accentClasses.amber.iconText}`} />
            </div>
            <h3 className="text-xl lg:text-2xl font-display">Безопасность</h3>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Соответствие 152-ФЗ, поддержка работы с КИИ, журналирование действий пользователей, ролевая модель доступа, работа в защищённой сети.
          </p>
        </div>
      </div>
    </Section>
  );
}
