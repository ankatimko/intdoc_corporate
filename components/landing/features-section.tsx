"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const features = [
  {
    number: "01",
    title: "Принимает ТКП в любом формате",
    description:
      "Excel-прайсы любой структуры, PDF с таблицами и текстом, сканы коммерческих предложений, тело письма от поставщика, вложения, фото с телефона. Нейросеть извлекает позиции, цены, сроки, условия поставки, гарантии — без шаблонизации со стороны поставщика.",
    visual: "format",
  },
  {
    number: "02",
    title: "Понимает любой язык",
    description:
      "Русский, английский, китайский, турецкий, фарси, корейский, немецкий и ещё 50+ языков на одном уровне. ТКП от азиатских и ближневосточных поставщиков обрабатываются без участия переводчика.",
    visual: "language",
  },
  {
    number: "03",
    title: "Сопоставляет синонимы и аналоги номенклатуры",
    description:
      "Одна и та же позиция у разных поставщиков может называться 10 разными способами. Платформа автоматически сопоставляет их с позициями вашей номенклатуры — закупщик видит честную картину по каждой строке спецификации.",
    visual: "database",
  },
  {
    number: "04",
    title: "Приводит к сопоставимому виду",
    description:
      "Валюты конвертируются по выбранному курсу, единицы измерения унифицируются, условия поставки нормализуются по Инкотермс, в стоимость закладываются таможня и логистика по вашим формулам. В таблице видна сравнимая, а не номинальная цена.",
    visual: "custom",
  },
  {
    number: "05",
    title: "Рекомендует оптимальный вариант",
    description:
      "Не просто строит таблицу, а ранжирует поставщиков по заданным критериям: цена, срок, условия оплаты, репутация в вашей внутренней базе. Закупщик получает шорт-лист, а не сырой массив данных.",
    visual: "recommend",
  },
  {
    number: "06",
    title: "Учитывает специфику вашей закупочной модели",
    description:
      "На этапе пилота настраивается под вашу номенклатуру, ваши шаблоны ТКП, ваши формулы сравнения, ваши правила подбора. Не «универсальное решение» — а инструмент, обученный на ваших реальных документах.",
    visual: "cloud",
  },
  {
    number: "07",
    title: "Разворачивается в вашем контуре",
    description:
      "SaaS или on-premise в защищённом контуре заказчика — на выбор. Для крупных корпоративных заказчиков on-premise развёртывание является штатным сценарием.",
    visual: "shield",
  },
  {
    number: "08",
    title: "Интегрируется с вашими системами",
    description:
      "Подключение к SAP, 1С, «Галактике», корпоративной почте, тендерным площадкам. Готовая таблица уходит в существующую процедуру согласования без двойной работы.",
    visual: "network",
  },
];

function FormatVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect x="30" y="60" width="50" height="70" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="50" y="45" width="50" height="70" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="70" y="30" width="50" height="70" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2">
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </rect>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="78" y={42 + i * 12} width="34" height="6" rx="1" fill="currentColor" opacity="0.3">
          <animate attributeName="width" values="20;34;20" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <path d="M 130 65 L 150 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M 145 60 L 150 65 L 145 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
      </path>
      <rect x="160" y="40" width="35" height="50" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      <rect x="167" y="50" width="21" height="4" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="167" y="58" width="21" height="4" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="167" y="66" width="21" height="4" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="167" y="74" width="21" height="4" rx="1" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function LanguageVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="100" cy="80" rx="50" ry="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <ellipse cx="100" cy="80" rx="20" ry="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="80" x2="150" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="60" y="55" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="monospace">RU</text>
      <text x="115" y="55" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="monospace">EN</text>
      <text x="85" y="115" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="monospace">中</text>
      <text x="60" y="100" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="monospace">TR</text>
      <text x="120" y="100" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="monospace">ف</text>
      <circle cx="100" cy="30" r="4" fill="currentColor">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function DatabaseVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <ellipse cx="100" cy="40" rx="50" ry="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="50" y1="40" x2="50" y2="120" stroke="currentColor" strokeWidth="2" />
      <line x1="150" y1="40" x2="150" y2="120" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="100" cy="120" rx="50" ry="15" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <ellipse cx="100" cy={55 + i * 18} rx="45" ry="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
          </ellipse>
        </g>
      ))}
      <circle cx="100" cy="80" r="3" fill="currentColor">
        <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function RecommendVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="30" y={35 + i * 35} width="100" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" opacity={i === 1 ? 1 : 0.4} />
          <rect x="38" y={43 + i * 35} width="60" height="4" rx="1" fill="currentColor" opacity={i === 1 ? 0.8 : 0.3} />
          <rect x="38" y={51 + i * 35} width="40" height="4" rx="1" fill="currentColor" opacity={i === 1 ? 0.6 : 0.2} />
        </g>
      ))}
      <circle cx="145" cy="70" r="20" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="20;22;20" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <path d="M 138 70 L 143 75 L 155 63" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 130 70 L 123 70" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" values="0;6" dur="0.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function CustomVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <g transform="translate(100, 80)">
        <circle r="15" fill="currentColor" opacity="0.2" />
        <circle r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <rect
              key={i}
              x={Math.cos(angle) * 18 - 4}
              y={Math.sin(angle) * 18 - 4}
              width="8"
              height="8"
              rx="1"
              fill="currentColor"
              opacity="0.6"
            />
          );
        })}
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" additive="sum" />
      </g>
      <g>
        <rect x="30" y="50" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <circle cx="55" cy="52" r="6" fill="currentColor">
          <animate attributeName="cx" values="55;45;55" dur="3s" repeatCount="indefinite" />
        </circle>
        <rect x="30" y="80" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <circle cx="45" cy="82" r="6" fill="currentColor">
          <animate attributeName="cx" values="45;60;45" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <rect x="30" y="110" width="40" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <circle cx="50" cy="112" r="6" fill="currentColor">
          <animate attributeName="cx" values="50;40;50" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function CloudVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <path
        d="M 60 100 Q 40 100 40 80 Q 40 60 60 60 Q 65 40 90 40 Q 120 40 125 60 Q 160 55 160 80 Q 160 100 140 100 Z"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <g>
        <path d="M 80 120 L 80 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M 75 95 L 80 90 L 85 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M 120 90 L 120 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M 115 115 L 120 120 L 125 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        </path>
      </g>
      <rect x="70" y="130" width="60" height="25" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="70" y="130" width="60" height="8" fill="currentColor" opacity="0.1" />
      <circle cx="77" cy="134" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="84" cy="134" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function ShieldVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Outer perimeter (dashed = security boundary) */}
      <rect
        x="20"
        y="25"
        width="160"
        height="110"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.4"
      >
        <animate attributeName="stroke-dashoffset" values="0;8" dur="3s" repeatCount="indefinite" />
      </rect>
      {/* Shield body */}
      <path
        d="M 100 40 L 130 52 L 130 90 Q 130 110 100 122 Q 70 110 70 90 L 70 52 Z"
        fill="currentColor"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Inner check */}
      <path
        d="M 86 82 L 96 92 L 116 72"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate attributeName="stroke-dasharray" values="0 60;60 0" dur="2s" repeatCount="indefinite" />
      </path>
      {/* Corner ticks (perimeter anchors) */}
      {[
        [20, 25],
        [180, 25],
        [20, 135],
        [180, 135],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="currentColor" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

function NetworkVisual() {
  // Central hub + 6 satellites
  const center = { x: 100, y: 80 };
  const satellites = [
    { x: 40, y: 40, label: "SAP" },
    { x: 160, y: 40, label: "1C" },
    { x: 30, y: 100, label: "ERP" },
    { x: 170, y: 100, label: "Mail" },
    { x: 65, y: 140, label: "B2B" },
    { x: 135, y: 140, label: "API" },
  ];

  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Connection lines */}
      {satellites.map((s, i) => (
        <line
          key={`line-${i}`}
          x1={center.x}
          y1={center.y}
          x2={s.x}
          y2={s.y}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
          strokeDasharray="3 3"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;6"
            dur="1.5s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
      {/* Satellite nodes */}
      {satellites.map((s, i) => (
        <g key={`sat-${i}`}>
          <circle cx={s.x} cy={s.y} r="14" fill="currentColor" opacity="0.08" stroke="currentColor" strokeWidth="1.5" />
          <text
            x={s.x}
            y={s.y + 3}
            fontSize="8"
            fill="currentColor"
            opacity="0.8"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {s.label}
          </text>
        </g>
      ))}
      {/* Center hub */}
      <circle cx={center.x} cy={center.y} r="18" fill="currentColor" opacity="0.2">
        <animate attributeName="r" values="18;20;18" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx={center.x} cy={center.y} r="10" fill="currentColor" />
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "format":
      return <FormatVisual />;
    case "language":
      return <LanguageVisual />;
    case "database":
      return <DatabaseVisual />;
    case "recommend":
      return <RecommendVisual />;
    case "custom":
      return <CustomVisual />;
    case "cloud":
      return <CloudVisual />;
    case "shield":
      return <ShieldVisual />;
    case "network":
      return <NetworkVisual />;
    default:
      return <FormatVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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
    <Section id="features" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-24">
        <Eyebrow className="mb-6">Возможности платформы</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что делает IntDoc AI
          <br />
          <span className="text-muted-foreground">под капотом</span>
        </h2>
      </div>

      <div>
        {features.map((feature, index) => (
          <FeatureCard key={feature.number} feature={feature} index={index} />
        ))}
      </div>
    </Section>
  );
}
