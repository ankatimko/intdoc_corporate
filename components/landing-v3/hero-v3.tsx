"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileSpreadsheet,
  FileText,
  ScanLine,
  Mail,
  Database,
  Table,
  FileCheck,
  Languages,
} from "lucide-react";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const metrics = [
  { value: "×5–10", label: "быстрее обработка процедуры" },
  { value: "3–4×", label: "больше поставщиков в сравнении" },
  { value: "3–8%", label: "экономия на цене типового контракта" },
];

const cyclingWords = ["за минуты", "на одном экране", "в одной валюте", "с лучшим вариантом"];

export function HeroV3() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 w-full">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            AI-платформа для отделов закупок
          </span>
        </div>

        {/* Headline — cycling tail */}
        <h1
          className={`text-[clamp(2.5rem,7.5vw,6rem)] font-display leading-[0.95] tracking-tight mb-10 max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Сводная таблица по сотням ТКП —{" "}
          <span className="relative inline-block">
            <span key={wordIndex} className="inline-flex flex-wrap">
              {cyclingWords[wordIndex].split("").map((char, i) => (
                <span
                  key={`${wordIndex}-${i}`}
                  className="inline-block animate-char-in"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
          </span>
        </h1>

        {/* Subhead + CTAs */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-end mb-20">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Нейросеть собирает разнородные ТКП в единую сравнительную таблицу. Без ручной сводки в Excel, без потери выгодных вариантов.
          </p>

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
          className={`mb-12 lg:mb-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-center">
            {/* Input — Left side */}
            <div className="flex-1 max-w-md">
              <div className="bg-muted/30 border border-foreground/10 rounded-2xl p-6 lg:p-8">
                <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
                  ТКП от поставщиков
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-sm font-medium">Excel</div>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-sm font-medium">PDF</div>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <ScanLine className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium">Сканы</div>
                  </div>
                  <div className="flex items-center gap-3 bg-background/50 rounded-lg p-3 border border-foreground/5">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-sm font-medium">Email</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Languages className="w-4 h-4" />
                  <span>RU · EN · CN · TR · FA · +50</span>
                </div>
              </div>
            </div>

            {/* Arrow */}
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
              <span className="text-sm font-mono font-medium text-foreground bg-foreground/5 px-4 py-1.5 rounded-full border border-foreground/10">
                минуты
              </span>
            </div>

            {/* Output — Right side */}
            <div className="flex-1 max-w-md">
              <div className="bg-foreground/5 border border-foreground/20 rounded-2xl p-6 lg:p-8">
                <div className="text-xs font-mono text-foreground mb-4 uppercase tracking-wider">
                  Результат
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 bg-background rounded-lg p-3 border border-foreground/10 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center">
                      <Database className="w-5 h-5 text-background" />
                    </div>
                    <div className="text-sm lg:text-base font-medium">База ТКП</div>
                  </div>
                  <div className="flex items-center gap-4 bg-background rounded-lg p-3 border border-foreground/10 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center">
                      <Table className="w-5 h-5 text-background" />
                    </div>
                    <div className="text-sm lg:text-base font-medium">Сравнительная ведомость</div>
                  </div>
                  <div className="flex items-center gap-4 bg-background rounded-lg p-3 border border-foreground/10 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-background" />
                    </div>
                    <div className="text-sm lg:text-base font-medium">Протокол выбора</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 metric tiles */}
        <div
          className={`grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {metrics.map((m) => (
            <div key={m.value} className="bg-background p-8 lg:p-10">
              <div className="font-display text-5xl lg:text-6xl tracking-tight mb-3 leading-none">{m.value}</div>
              <div className="text-sm lg:text-base text-muted-foreground leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
