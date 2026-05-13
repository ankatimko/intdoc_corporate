"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, FileText, ScanLine, Mail, FileSearch, Languages } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

const formats = [
  { icon: FileSpreadsheet, text: "Excel-прайсы любой структуры" },
  { icon: FileText, text: "PDF — коммерческие предложения, спецификации" },
  { icon: ScanLine, text: "Сканы и фото — обработка через OCR + AI" },
  { icon: Mail, text: "Email — тело письма и вложения" },
  { icon: FileSearch, text: "Спецификации клиентов" },
  { icon: Languages, text: "50+ языков, включая китайский, турецкий" },
];

const integrations = [
  "Bitrix24",
  "CRM",
  "Корпоративная почта",
  "Внутренние системы через API",
  "Веб-интерфейс — без интеграций на старте",
];

export function TrustSection() {
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
    <Section ref={ref} topBorder>
      <div className="mb-16 lg:mb-20 max-w-4xl">
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IntDoc AI встраивается в реальный закупочный
          <br />
          <span className="text-muted-foreground">и коммерческий процесс</span>
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Работает с теми форматами и системами, которые уже есть у вас. Не требует переучивать поставщиков и менять процессы.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* Formats */}
        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Типы входящих документов
          </div>
          <ul className="space-y-4">
            {formats.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-foreground/15 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-base lg:text-lg leading-relaxed mt-1.5">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Integrations */}
        <div className="border border-foreground/10 p-8 lg:p-10">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Интеграции
          </div>
          <ul className="space-y-4">
            {integrations.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-foreground mt-3 shrink-0" />
                <span className="text-base lg:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Anonymous case callout */}
      <div className="max-w-3xl bg-foreground/5 border border-foreground/10 rounded-2xl p-6 lg:p-8">
        <div className="flex items-start gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground bg-foreground/10 px-3 py-1.5 rounded-full shrink-0 mt-1">
            В работе
          </span>
          <p className="text-base lg:text-lg leading-relaxed">
            Платформа развёрнута у крупного промышленного заказчика. Подробности кейса — по запросу на встрече.
          </p>
        </div>
      </div>
    </Section>
  );
}
