"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, FileSpreadsheet, Mail, Database, Table, FileCheck, ScanLine, Languages } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["за минуты", "автоматически", "на одной странице", "в одной валюте"];

type Metric = { value: string; label: string; wide?: boolean };

const metrics: Metric[] = [
  { value: "×5–10", label: "быстрее обработка одной процедуры" },
  { value: "3–4×", label: "больше поставщиков в сравнении при той же численности отдела" },
  { value: "Реальная стоимость", label: "владения вместо тендерной цены", wide: true },
  { value: "50+", label: "языков, включая китайский, турецкий, фарси" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-16 w-full">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            AI-платформа для отделов закупок крупных компаний
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(2rem,6.5vw,5rem)] font-display leading-[0.98] tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">Сравнительная таблица</span>
            <span className="block">
              по сотням ТКП —{" "}
              <span className="relative inline-block">
                <span
                  key={wordIndex}
                  className="inline-flex"
                >
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char === " " ? " " : char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16 lg:mb-20">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            IntDoc AI принимает технико-коммерческие предложения поставщиков в любых форматах и на любых языках, извлекает позиции нейросетью и собирает их в единую сравнительную базу. Закупщик видит готовую таблицу с лучшими вариантами по цене, сроку и условиям поставки — без ручной сводки в Excel.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
              asChild
            >
              <a href="#pilot">
                Обсудить пилот
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="#how-it-works">Посмотреть, как работает</a>
            </Button>
          </div>
        </div>

        {/* Document flow visual */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center">
            {/* Input — Left side */}
            <div className="flex-1 max-w-md">
              <div className="bg-muted/30 border border-foreground/10 rounded-2xl p-6 lg:p-8">
                <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">ТКП от поставщиков</div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Excel */}
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Excel</div>
                      <div className="text-xs text-muted-foreground">прайсы, таблицы</div>
                    </div>
                  </div>
                  {/* PDF */}
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">PDF</div>
                      <div className="text-xs text-muted-foreground">КП, спецификации</div>
                    </div>
                  </div>
                  {/* Scans */}
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <ScanLine className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Сканы</div>
                      <div className="text-xs text-muted-foreground">и фото с телефона</div>
                    </div>
                  </div>
                  {/* Emails */}
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Письма</div>
                      <div className="text-xs text-muted-foreground">и вложения</div>
                    </div>
                  </div>
                </div>
                {/* Languages */}
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Languages className="w-4 h-4" />
                  <span>RU</span>
                  <span className="text-foreground/20">|</span>
                  <span>EN</span>
                  <span className="text-foreground/20">|</span>
                  <span>CN</span>
                  <span className="text-foreground/20">|</span>
                  <span>TR</span>
                  <span className="text-foreground/20">|</span>
                  <span>FA</span>
                  <span className="text-foreground/20">|</span>
                  <span>+50</span>
                </div>
              </div>
            </div>

            {/* Arrow with time */}
            <div className="flex flex-col items-center gap-2 px-6 lg:px-10 py-4">
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-12 h-px bg-foreground/30" />
                <div className="w-16 h-16 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background">
                  <ArrowRight className="w-6 h-6 text-foreground" />
                </div>
                <div className="w-12 h-px bg-foreground/30" />
              </div>
              <div className="lg:hidden flex items-center gap-2">
                <div className="w-px h-8 bg-foreground/30" />
                <div className="w-14 h-14 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background rotate-90">
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </div>
                <div className="w-px h-8 bg-foreground/30" />
              </div>
              <span className="text-sm font-mono font-medium text-foreground bg-foreground/5 px-4 py-1.5 rounded-full border border-foreground/10">минуты</span>
            </div>

            {/* Output — Right side */}
            <div className="flex-1 max-w-md">
              <div className="bg-foreground/5 border border-foreground/20 rounded-2xl p-6 lg:p-8">
                <div className="text-xs font-mono text-foreground mb-4 uppercase tracking-wider">Результат для закупщика</div>
                <div className="flex flex-col gap-4">
                  {/* Database */}
                  <div className="flex items-center gap-4 bg-background rounded-lg p-4 border border-foreground/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                      <Database className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <div className="text-base font-medium">База ТКП</div>
                      <div className="text-sm text-muted-foreground">Единый формат, нормализация валют</div>
                    </div>
                  </div>
                  {/* Table */}
                  <div className="flex items-center gap-4 bg-background rounded-lg p-4 border border-foreground/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                      <Table className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <div className="text-base font-medium">Сравнительная ведомость</div>
                      <div className="text-sm text-muted-foreground">Ранжирование по вашим критериям</div>
                    </div>
                  </div>
                  {/* Document */}
                  <div className="flex items-center gap-4 bg-background rounded-lg p-4 border border-foreground/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <div className="text-base font-medium">Протокол выбора</div>
                      <div className="text-sm text-muted-foreground">По вашему корпоративному шаблону</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric badges */}
        <div
          className={`mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {metrics.map((metric, i) => (
            <div
              key={metric.value}
              className="bg-background p-6 lg:p-8"
              style={{ transitionDelay: `${700 + i * 100}ms` }}
            >
              <div
                className={`font-display tracking-tight mb-3 leading-[1.05] ${
                  metric.wide ? "text-2xl lg:text-3xl" : "text-4xl lg:text-5xl"
                }`}
              >
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
