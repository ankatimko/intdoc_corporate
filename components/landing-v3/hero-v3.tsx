"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const metrics = [
  { value: "×5–10", label: "быстрее обработка процедуры" },
  { value: "3–4×", label: "больше поставщиков в сравнении" },
  { value: "3–8%", label: "экономия на цене типового контракта" },
];

export function HeroV3() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

        {/* Headline — one line, no cycling */}
        <h1
          className={`text-[clamp(2.5rem,7.5vw,6rem)] font-display leading-[0.95] tracking-tight mb-10 max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Сводная таблица по сотням ТКП —{" "}
          <span className="relative inline-block">
            за минуты
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

        {/* 3 metric tiles */}
        <div
          className={`grid sm:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
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
