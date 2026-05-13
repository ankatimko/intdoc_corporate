"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, FileText, Mail, ScanLine, Globe, Database, Table, FileCheck } from "lucide-react";

// Illustration for Step 1: Document Upload
function DocumentsIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      {/* Scattered documents */}
      <div className="relative w-full max-w-[280px] h-[200px]">
        {/* Excel file */}
        <div className="absolute top-0 left-0 bg-background/10 backdrop-blur-sm border border-background/20 p-3 rounded-lg transform -rotate-6 animate-float-slow">
          <div className="flex items-center gap-2 mb-2">
            <FileSpreadsheet className="w-5 h-5 text-green-400" />
            <span className="text-xs font-mono text-background/70">price_list.xlsx</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-16 bg-background/20 rounded" />
            <div className="h-1.5 w-12 bg-background/20 rounded" />
          </div>
          <span className="absolute -top-2 -right-2 text-[10px] bg-background text-foreground px-1.5 py-0.5 rounded font-medium">RU</span>
        </div>

        {/* PDF file */}
        <div className="absolute top-8 right-0 bg-background/10 backdrop-blur-sm border border-background/20 p-3 rounded-lg transform rotate-3 animate-float-medium">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-5 h-5 text-red-400" />
            <span className="text-xs font-mono text-background/70">contract.pdf</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-14 bg-background/20 rounded" />
            <div className="h-1.5 w-10 bg-background/20 rounded" />
          </div>
          <span className="absolute -top-2 -right-2 text-[10px] bg-background text-foreground px-1.5 py-0.5 rounded font-medium">EN</span>
        </div>

        {/* Scan */}
        <div className="absolute bottom-4 left-4 bg-background/10 backdrop-blur-sm border border-background/20 p-3 rounded-lg transform rotate-2 animate-float-fast">
          <div className="flex items-center gap-2 mb-2">
            <ScanLine className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-mono text-background/70">scan_001.jpg</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-12 bg-background/20 rounded" />
            <div className="h-1.5 w-8 bg-background/20 rounded" />
          </div>
          <span className="absolute -top-2 -right-2 text-[10px] bg-background text-foreground px-1.5 py-0.5 rounded font-medium">ZH</span>
        </div>

        {/* Email */}
        <div className="absolute bottom-0 right-8 bg-background/10 backdrop-blur-sm border border-background/20 p-3 rounded-lg transform -rotate-3 animate-float-slow">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-mono text-background/70">supplier@mail</span>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-16 bg-background/20 rounded" />
            <div className="h-1.5 w-10 bg-background/20 rounded" />
          </div>
        </div>

        {/* Language badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-background/5 border border-background/10 px-3 py-1.5 rounded-full">
          <Globe className="w-3.5 h-3.5 text-background/50" />
          <span className="text-[10px] font-mono text-background/50">+50 языков</span>
        </div>
      </div>
    </div>
  );
}

// Illustration for Step 5: Export
function ExportIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="relative w-full max-w-[280px] h-[200px]">
        {/* Structured table */}
        <div className="absolute top-0 left-0 bg-background/10 backdrop-blur-sm border border-background/20 p-3 rounded-lg transform -rotate-2 animate-float-medium">
          <div className="flex items-center gap-2 mb-3">
            <Table className="w-4 h-4 text-background/70" />
            <span className="text-xs font-mono text-background/70">summary.xlsx</span>
          </div>
          {/* Table grid */}
          <div className="space-y-1">
            <div className="flex gap-1">
              <div className="h-4 w-12 bg-background/30 rounded-sm flex items-center justify-center text-[8px] font-mono text-background/70">Товар</div>
              <div className="h-4 w-10 bg-background/30 rounded-sm flex items-center justify-center text-[8px] font-mono text-background/70">Цена</div>
              <div className="h-4 w-8 bg-background/30 rounded-sm flex items-center justify-center text-[8px] font-mono text-background/70">Срок</div>
            </div>
            <div className="flex gap-1">
              <div className="h-3 w-12 bg-background/15 rounded-sm" />
              <div className="h-3 w-10 bg-green-400/30 rounded-sm" />
              <div className="h-3 w-8 bg-background/15 rounded-sm" />
            </div>
            <div className="flex gap-1">
              <div className="h-3 w-12 bg-background/15 rounded-sm" />
              <div className="h-3 w-10 bg-background/15 rounded-sm" />
              <div className="h-3 w-8 bg-background/15 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Database icon */}
        <div className="absolute top-4 right-4 bg-background/10 backdrop-blur-sm border border-background/20 p-4 rounded-lg transform rotate-3 animate-float-fast">
          <Database className="w-8 h-8 text-background/50 mb-2" />
          <div className="text-[10px] font-mono text-background/50 text-center">1,247 записей</div>
        </div>

        {/* Ready document */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background/10 backdrop-blur-sm border border-background/20 p-4 rounded-lg animate-float-slow">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-5 h-5 text-green-400" />
            <span className="text-xs font-mono text-background/70">document.pdf</span>
          </div>
          {/* Document preview */}
          <div className="w-32 space-y-1.5">
            <div className="h-2 w-full bg-background/20 rounded" />
            <div className="h-2 w-3/4 bg-background/20 rounded" />
            <div className="border-t border-background/10 my-2" />
            <div className="h-1.5 w-full bg-background/15 rounded" />
            <div className="h-1.5 w-5/6 bg-background/15 rounded" />
            <div className="h-1.5 w-2/3 bg-background/15 rounded" />
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    number: "I",
    title: "Входящий поток ТКП",
    description: "Платформа принимает ответы поставщиков из всех каналов: корпоративная почта, выгрузки с тендерных площадок, ручная загрузка, передача из SAP/1С. Не требует от поставщика заполнять шаблоны и формы.",
    illustration: "documents",
    code: `// Каналы приёма ТКП
intdoc.intake({
  channels: [
    'corporate_email',
    'b2b_center',
    'tek_torg',
    'sap_integration',
    'manual_upload'
  ]
})`,
  },
  {
    number: "II",
    title: "Извлечение данных нейросетью",
    description: "Из каждого ТКП извлекаются: позиции, цены, валюта, срок поставки, условия оплаты, гарантии, условия поставки по Инкотермс, реквизиты поставщика. Параллельно — на 50+ языках.",
    illustration: "code",
    code: `// Извлечение полей ТКП
intdoc.extract({
  fields: [
    'item_name',        // позиция
    'price',
    'currency',
    'delivery_time',
    'payment_terms',
    'incoterms',
    'warranty'
  ],
  languages: ['ru', 'en', 'zh', 'tr', 'fa']
})`,
  },
  {
    number: "III",
    title: "Нормализация и сопоставление с номенклатурой",
    description: "Синонимы позиций сводятся к единым кодам вашей номенклатуры. Валюты приводятся к одной. Единицы измерения унифицируются. В стоимость закладывается логистика и таможня по вашим формулам.",
    illustration: "code",
    code: `// Нормализация и матчинг
intdoc.normalize({
  nomenclature: 'sap-mm',
  currency: 'RUB',
  units: 'iso',
  incoterms: 'normalize',
  landed_cost: 'customer-formula'
})

// 247 позиций сопоставлены`,
  },
  {
    number: "IV",
    title: "Сравнительная таблица и рекомендации",
    description: "Закупщик открывает в браузере готовую сравнительную ведомость с ранжированием по заданным критериям. Видит лучшее предложение по каждой строке спецификации, может вручную корректировать выбор, история всех решений сохраняется.",
    illustration: "code",
    code: `// Ранжирование поставщиков
intdoc.rank({
  criteria: ['price', 'lead_time', 'payment'],
  weights: { price: 0.5, lead_time: 0.3, payment: 0.2 }
})

// Шорт-лист по 142 позициям
// Экономия по процедуре: 8.2%`,
  },
  {
    number: "V",
    title: "Выгрузка в существующий процесс",
    description: "Готовая ведомость уходит в вашу процедуру согласования: выгрузка в Excel, PDF на фирменном бланке, передача в SAP/1С через интеграцию, экспорт в формат тендерной площадки. Без двойного ввода.",
    illustration: "export",
    code: `// Выгрузка в процесс согласования
intdoc.export({
  formats: ['xlsx', 'pdf'],
  template: 'company_protocol',
  push_to: ['sap', '1c', 'b2b_center']
})

// Протокол готов`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderIllustration = () => {
    const step = steps[activeStep];
    
    if (step.illustration === "documents") {
      return <DocumentsIllustration />;
    }
    
    if (step.illustration === "export") {
      return <ExportIllustration />;
    }
    
    // Default code view
    return (
      <>
        {/* Window header */}
        <div className="px-6 py-4 border-b border-background/10 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-background/20" />
            <div className="w-3 h-3 rounded-full bg-background/20" />
            <div className="w-3 h-3 rounded-full bg-background/20" />
          </div>
          <span className="text-xs font-mono text-background/40">process.ts</span>
        </div>

        {/* Code content */}
        <div className="p-8 font-mono text-sm min-h-[250px]">
          <pre className="text-background/70">
            {step.code.split('\n').map((line, lineIndex) => (
              <div 
                key={`${activeStep}-${lineIndex}`} 
                className="leading-loose code-line-reveal"
                style={{ 
                  animationDelay: `${lineIndex * 80}ms`,
                }}
              >
                <span className="text-background/20 select-none w-8 inline-block">{lineIndex + 1}</span>
                <span className="inline-flex">
                  {line.split('').map((char, charIndex) => (
                    <span
                      key={`${activeStep}-${lineIndex}-${charIndex}`}
                      className="code-char-reveal"
                      style={{
                        animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>

        {/* Status */}
        <div className="px-6 py-4 border-t border-background/10 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-mono text-background/40">Готово</span>
        </div>
      </>
    );
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/50 mb-6">
            <span className="w-8 h-px bg-background/30" />
            Процесс
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Как это работает
            <br />
            <span className="text-background/50">Пять шагов от ТКП до решения</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-6 border-b border-background/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-2xl text-background/30">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-display mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed text-sm">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-3 h-px bg-background/20 overflow-hidden">
                        <div 
                          className="h-full bg-background w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Illustration / Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-background/10 overflow-hidden min-h-[320px]">
              {renderIllustration()}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-6px) rotate(5deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
        }
        
        :global(.animate-float-slow) {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        :global(.animate-float-medium) {
          animation: float-medium 3.5s ease-in-out infinite;
        }
        
        :global(.animate-float-fast) {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
