"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type InlineCtaProps = {
  text: string;
  buttonText?: string;
  href?: string;
};

/**
 * Slim inline call-to-action band between sections.
 * Used to surface "Обсудить пилот" right after key decision-moments
 * (after Effect, after Scenarios) — for diagonal-reading LPRs.
 */
export function InlineCta({
  text,
  buttonText = "Обсудить пилот",
  href = "#pilot",
}: InlineCtaProps) {
  return (
    <section className="relative border-t border-foreground/10">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-10 lg:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-lg lg:text-xl font-display tracking-tight max-w-2xl">{text}</p>
        <Button
          size="lg"
          className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group shrink-0"
          asChild
        >
          <a href={href}>
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    </section>
  );
}
