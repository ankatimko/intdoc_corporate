"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileSearch, ThumbsUp, FileCheck } from "lucide-react";
import { AnimatedSphere } from "@/components/landing/animated-sphere";

const thesis = [
  { icon: Clock, text: "Сводка поставщиков за минуты" },
  { icon: FileSearch, text: "Источник и уверенность по каждой строке" },
  { icon: ThumbsUp, text: "Лучший вариант по каждой позиции" },
  { icon: FileCheck, text: "Готовая таблица и выходной документ" },
];

const cyclingWords = ["закупочное", "сравнимое", "выгодное", "управляемое"];

export function HeroV2() {
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
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
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
            Платформа обработки документов поставщиков
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-[clamp(2.25rem,7vw,5.5rem)] font-display leading-[0.98] tracking-tight mb-10 max-w-5xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block">Прайсы и КП поставщиков —</span>
          <span className="block">
            в одно{" "}
            <span className="relative inline-block">
              <span key={wordIndex} className="inline-flex">
                {cyclingWords[wordIndex].split("").map((char, i) => (
                  <span
                    key={`${wordIndex}-${i}`}
                    className="inline-block animate-char-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
            </span>{" "}
            решение
          </span>
        </h1>

        {/* Subhead + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Сводим документы поставщиков в одну сравнительную таблицу. Сопоставляем позиции, сравниваем по цене и сроку, подсвечиваем лучший вариант.
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
              <a href="#form">
                Получить разбор на ваших документах
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
              asChild
            >
              <a href="#form">Оставить заявку</a>
            </Button>
          </div>
        </div>

        {/* 4 thesis tiles */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {thesis.map(({ icon: Icon, text }) => (
            <div key={text} className="bg-background p-6 lg:p-7 flex flex-col gap-3">
              <Icon className="w-6 h-6 text-foreground/80" />
              <p className="text-sm lg:text-base leading-snug font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
