"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";

type FormData = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  task: string;
  volume: string;
  crm: string;
};

const initialData: FormData = {
  name: "",
  company: "",
  role: "",
  phone: "",
  email: "",
  task: "",
  volume: "",
  crm: "",
};

const volumeOptions = ["до 100", "100–500", "500–3 000", "3 000+"];
const crmOptions = ["Bitrix24", "другая CRM", "не используем", "готовы внедрять"];

const MAX_FILES = 2;
const MAX_BYTES = 20 * 1024 * 1024;

export function FormSection() {
  const [data, setData] = useState<FormData>(initialData);
  const [files, setFiles] = useState<File[]>([]);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const next = [...files, ...selected].slice(0, MAX_FILES);
    const tooBig = next.find((f) => f.size > MAX_BYTES);
    if (tooBig) {
      setError(`Файл «${tooBig.name}» превышает 20 МБ`);
      return;
    }
    setError("");
    setFiles(next);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (idx: number) => {
    setFiles(files.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          fileNames: files.map((f) => f.name),
        }),
      });

      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Ошибка отправки");

      setIsSubmitted(true);
      setData(initialData);
      setFiles([]);
      setIsAgreed(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="form" topBorder padding="lg">
      <div className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Заявка на разбор</Eyebrow>
        <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
          Расскажите о вашей задаче
        </h2>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Заполните форму и приложите 1–2 примера документов. Мы покажем, как IntDoc AI обработает их, сопоставит позиции и соберёт сравнительную таблицу — на ваших реальных данных.
        </p>
      </div>

      <div className="max-w-3xl">
        {isSubmitted ? (
          <div className="border border-foreground/10 p-10 lg:p-14 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-foreground rounded-full flex items-center justify-center">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-display mb-3">Заявка принята</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мы свяжемся с вами в течение рабочего дня для обсуждения вашей задачи и формата разбора.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Отправить ещё одну заявку
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Имя" required>
                <Input
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </Field>
              <Field label="Компания" required>
                <Input
                  required
                  value={data.company}
                  onChange={(e) => setData({ ...data, company: e.target.value })}
                />
              </Field>
              <Field label="Должность">
                <Input
                  value={data.role}
                  onChange={(e) => setData({ ...data, role: e.target.value })}
                />
              </Field>
              <Field label="Телефон" required>
                <Input
                  type="tel"
                  required
                  placeholder="+7 (999) 123-45-67"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </Field>
            </div>

            <Field label="Email" required>
              <Input
                type="email"
                required
                placeholder="your@company.ru"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Field>

            <Field label="Что хотите автоматизировать?" required>
              <Textarea
                required
                rows={4}
                placeholder="Опишите, какие документы обрабатываете и что хотите получить на выходе"
                value={data.task}
                onChange={(e) => setData({ ...data, task: e.target.value })}
              />
            </Field>

            <Field label="Примерный объём документов в месяц" required>
              <ChipGroup
                options={volumeOptions}
                value={data.volume}
                onChange={(v) => setData({ ...data, volume: v })}
                required
              />
            </Field>

            <Field label="Используете Bitrix24 или CRM?">
              <ChipGroup
                options={crmOptions}
                value={data.crm}
                onChange={(v) => setData({ ...data, crm: v })}
              />
            </Field>

            <Field label="Приложить файлы">
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".xlsx,.xls,.pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="sr-only"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-3 h-14 border border-dashed border-foreground/30 hover:border-foreground/60 hover:bg-foreground/5 transition-colors cursor-pointer rounded-md text-sm text-muted-foreground"
                >
                  <Upload className="w-4 h-4" />
                  {files.length >= MAX_FILES
                    ? "Лимит файлов достигнут"
                    : "Excel, PDF, скан, изображение — до 2 файлов, до 20 МБ"}
                </label>

                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((f, i) => (
                      <li
                        key={`${f.name}-${i}`}
                        className="flex items-center justify-between gap-3 bg-foreground/5 border border-foreground/10 rounded-md px-4 py-2"
                      >
                        <span className="text-sm truncate">{f.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`Удалить ${f.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Field>

            {/* Consent */}
            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="consent-v2"
                checked={isAgreed}
                onCheckedChange={(c) => setIsAgreed(c === true)}
                className="mt-1"
              />
              <label htmlFor="consent-v2" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Я согласен на{" "}
                <Link href="/consent" className="text-foreground underline underline-offset-4 hover:no-underline">
                  обработку персональных данных
                </Link>{" "}
                и ознакомлен с{" "}
                <Link href="/privacy" className="text-foreground underline underline-offset-4 hover:no-underline">
                  Политикой конфиденциальности
                </Link>
                . <span className="text-destructive">*</span>
              </label>
            </div>

            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-base rounded-full bg-foreground text-background hover:bg-foreground/90"
              disabled={isSubmitting || !isAgreed}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                  Отправляем…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
          </form>
        )}

        <p className="text-sm text-muted-foreground mt-10 text-center">
          Или напишите нам напрямую:{" "}
          <a
            href="mailto:integramma.tech@gmail.com"
            className="text-foreground underline underline-offset-4 hover:no-underline"
          >
            integramma.tech@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
  required,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(selected ? "" : opt)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              selected
                ? "bg-foreground text-background border-foreground"
                : "border-foreground/15 hover:border-foreground/40"
            }`}
          >
            {opt}
          </button>
        );
      })}
      {/* Hidden input for HTML5 required validation when required=true and no value */}
      {required && (
        <input
          type="text"
          value={value}
          onChange={() => {}}
          required
          tabIndex={-1}
          aria-hidden
          className="sr-only"
        />
      )}
    </div>
  );
}
