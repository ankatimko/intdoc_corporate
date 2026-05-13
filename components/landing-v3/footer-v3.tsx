"use client";

import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/ui/logo";
import { AnimatedWave } from "@/components/landing/animated-wave";

const footerLinks = {
  Платформа: [
    { name: "Возможности", href: "#features" },
    { name: "Сценарии", href: "#scenarios" },
    { name: "Развёртывание", href: "#deployment" },
    { name: "Пилот", href: "#pilot" },
    { name: "FAQ", href: "#faq" },
  ],
  Компания: [
    { name: "О компании", href: "https://integramma.ru/", external: true },
    { name: "Другие продукты «Интеграммы»", href: "https://integramma.ru/", external: true },
  ],
};

export function FooterV3() {
  return (
    <footer className="relative border-t border-foreground/10">
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            <div>
              <a href="#" className="inline-flex items-center gap-2 mb-6 text-foreground">
                <LogoMark className="h-8 w-8" />
                <span className="text-2xl font-display">IntDoc AI</span>
              </a>

              <p className="text-muted-foreground leading-relaxed max-w-xs">
                AI-платформа для обработки ТКП и закупочной документации. Продукт компании «Интеграмма».
              </p>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"external" in link && link.external && <ArrowUpRight className="w-3 h-3" />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">2026 IntDoc AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
