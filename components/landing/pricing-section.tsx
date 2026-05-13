"use client";

import { ArrowRight, Check } from "lucide-react";

const modules = [
  {
    name: "Модуль 1",
    title: "Приём и обработка данных",
    price: "200 000 ₽",
    timeline: "2-3 недели",
    description: "Парсинг входящих документов, сборка единой базы, сопоставление синонимов между источниками, сводные таблицы, подбор оптимального варианта.",
    features: [
      "Парсинг документов любых форматов",
      "Сборка единой базы данных",
      "Сопоставление синонимов между источниками",
      "Сводные таблицы и фильтрация",
      "Подбор оптимального варианта",
      "История подборов",
      "Выгрузка в Excel",
      "Настройка под ваши форматы и языки",
    ],
    popular: true,
  },
  {
    name: "Модуль 2",
    title: "Формирование документов",
    price: "140 000 ₽",
    timeline: "2-3 недели",
    description: "Шаблоны фирменных документов, расчёты логистики, курсы валют и коэффициенты, выгрузка в PDF и Excel.",
    features: [
      "Шаблоны фирменных документов",
      "Кнопка формирования в интерфейсе",
      "Настройка формул по вашему расчёту",
      "Учёт логистики",
      "Курсы валют и коэффициенты",
      "Выгрузка в PDF и Excel",
    ],
    popular: false,
  },
];

const options = [
  { name: "Встраивание в Bitrix24", price: "40 000 ₽" },
  { name: "Интеграция с почтой для автоприёма", price: "по запросу" },
  { name: "Дополнительные шаблоны и языки", price: "по запросу" },
];

const support = [
  { name: "Инфраструктура", price: "1 000 ₽/мес" },
  { name: "Техническое сопровождение", price: "15 000 ₽/мес", description: "до 2 часов разработчика и 1 часа аналитика, обновления, реакция в чате в течение 4 часов" },
  { name: "Обработка документов нейросетью", price: "10 ₽/документ", description: "по факту использования" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Модули и стоимость
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Стоимость
            <br />
            <span className="text-stroke">внедрения</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Сервис поставляется двумя модулями. Можно начать с одного.
          </p>
        </div>

        {/* Modules */}
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 mb-16">
          {modules.map((module, idx) => (
            <div
              key={module.name}
              className={`relative p-8 lg:p-12 bg-background ${
                module.popular ? "border-2 border-foreground" : ""
              }`}
            >
              {module.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Начните с этого
                </span>
              )}

              {/* Module Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2">{module.name}</h3>
                <p className="text-xl text-foreground font-display mt-1">{module.title}</p>
                <p className="text-sm text-muted-foreground mt-3">{module.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    {module.price}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground mt-2 block">
                  Срок: {module.timeline}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  module.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                Обсудить внедрение
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Options */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-8">Опции</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {options.map((option) => (
              <div key={option.name} className="p-6 border border-foreground/10">
                <p className="text-foreground mb-2">{option.name}</p>
                <p className="font-mono text-lg">{option.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="border-t border-foreground/10 pt-16">
          <h3 className="font-display text-2xl mb-8">Сопровождение и эксплуатация</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {support.map((item) => (
              <div key={item.name} className="p-6 border border-foreground/10">
                <p className="text-foreground mb-2">{item.name}</p>
                <p className="font-mono text-xl mb-2">{item.price}</p>
                {item.description && (
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          IntDoc AI предоставляется как SaaS: размещение на нашей инфраструктуре, доступ через веб-интерфейс, централизованные обновления.{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Обсудить размещение в вашем контуре
          </a>
        </p>
      </div>
    </section>
  );
}
