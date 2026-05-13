"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "Чем IntDoc AI отличается от обычного OCR?",
    answer:
      "OCR извлекает текст. IntDoc AI извлекает данные, нормализует их, сопоставляет позиции между разными поставщиками, показывает источник и уверенность, сравнивает предложения и помогает выбрать лучший вариант. На выходе — не текстовая копия документа, а закупочное решение.",
  },
  {
    question: "Что значит «разбор на ваших документах»?",
    answer:
      "Мы берём реальные файлы вашей компании — прайс, КП, спецификацию — и показываем, как платформа извлекает позиции, сопоставляет их и собирает сравнительную матрицу. Вы видите результат на своих данных, а не на абстрактных примерах.",
  },
  {
    question: "С какими форматами работает платформа?",
    answer:
      "Excel, PDF, сканы, фото с телефона, email-вложения, спецификации и коммерческие предложения. Поддерживаются документы на русском, английском, китайском, турецком и ещё 50+ языках.",
  },
  {
    question: "Можно ли понять, откуда взялась конкретная строка в сводной таблице?",
    answer:
      "Да. По каждой ячейке матрицы видно источник значения, причину сопоставления и уровень уверенности. Любое решение можно проверить и оспорить.",
  },
  {
    question: "Что делать, если система не уверена в результате?",
    answer:
      "Такие строки попадают в очередь проверки. Пользователь видит спорные позиции отдельно, может подтвердить или скорректировать сопоставление. Подтверждённые решения сохраняются и используются для следующих документов.",
  },
  {
    question: "Можно ли интегрировать IntDoc AI с Bitrix24?",
    answer:
      "Да. Возможна интеграция с Bitrix24, CRM, корпоративной почтой и внутренними системами через API. На старте интеграции не обязательны — платформа работает через веб-интерфейс.",
  },
  {
    question: "Что получает клиент на выходе?",
    answer:
      "Сводную матрицу предложений поставщиков, лучший вариант по каждой позиции, объяснимую логику выбора, выгрузку в Excel, PDF или фирменное коммерческое предложение по вашему шаблону.",
  },
  {
    question: "Сколько стоит запуск?",
    answer:
      "Стоимость складывается из разового запуска и ежемесячного пакета по объёму обработки. Конкретные цифры зависят от типа документов, потока и интеграций — рассчитываем индивидуально после заявки и разбора ваших файлов.",
  },
  {
    question: "Где хранятся данные?",
    answer:
      "В базовом варианте — на инфраструктуре оператора в РФ с соблюдением 152-ФЗ. Для заказчиков с особыми требованиями ИБ возможно развёртывание в их защищённом контуре — решаем по итогам пилота.",
  },
  {
    question: "Подходит ли платформа, если поставщики присылают документы в очень разной структуре?",
    answer:
      "Да, это и есть основной сценарий. Платформа не работает по шаблону — она извлекает данные из произвольной структуры. На этапе настройки обучается на ваших реальных документах.",
  },
];

function FAQItem({ faq, index }: { faq: Faq; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-foreground/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-6">
          <span className="font-mono text-sm text-muted-foreground mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-lg lg:text-xl font-display group-hover:translate-x-2 transition-transform duration-300">
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed pl-14">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQV2Section() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="faq" ref={sectionRef} topBorder>
      <div className="mb-16 lg:mb-20">
        <Eyebrow className="mb-6">Частые вопросы</Eyebrow>
        <h2
          className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Что обычно спрашивают
          <br />
          <span className="text-muted-foreground">перед пилотом</span>
        </h2>
      </div>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </Section>
  );
}
