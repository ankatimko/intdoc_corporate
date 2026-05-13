import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Section } from '@/components/ui/section'
import { Eyebrow } from '@/components/ui/eyebrow'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const metadata = {
  title: 'Styleguide — IntDoc AI',
  robots: { index: false, follow: false },
}

const SEMANTIC_COLORS: Array<{ token: string; cssVar: string; usage: string }> = [
  { token: 'background', cssVar: '--background', usage: 'Page background, surface' },
  { token: 'foreground', cssVar: '--foreground', usage: 'Default text, primary action bg' },
  { token: 'card', cssVar: '--card', usage: 'Elevated card background' },
  { token: 'card-foreground', cssVar: '--card-foreground', usage: 'Text on card' },
  { token: 'primary', cssVar: '--primary', usage: 'Brand action (= foreground)' },
  { token: 'primary-foreground', cssVar: '--primary-foreground', usage: 'Text on primary' },
  { token: 'secondary', cssVar: '--secondary', usage: 'Subtle button/surface' },
  { token: 'secondary-foreground', cssVar: '--secondary-foreground', usage: 'Text on secondary' },
  { token: 'muted', cssVar: '--muted', usage: 'Muted surface' },
  { token: 'muted-foreground', cssVar: '--muted-foreground', usage: 'Secondary text' },
  { token: 'accent', cssVar: '--accent', usage: 'Hover surface' },
  { token: 'accent-foreground', cssVar: '--accent-foreground', usage: 'Text on accent' },
  { token: 'destructive', cssVar: '--destructive', usage: 'Errors, destructive actions' },
  { token: 'border', cssVar: '--border', usage: 'Default borders' },
  { token: 'input', cssVar: '--input', usage: 'Form field borders' },
  { token: 'ring', cssVar: '--ring', usage: 'Focus rings' },
]

const FOREGROUND_OPACITIES: Array<{ label: string; className: string }> = [
  { label: 'bg-foreground/5', className: 'bg-foreground/5' },
  { label: 'bg-foreground/10', className: 'bg-foreground/10' },
  { label: 'bg-foreground/20', className: 'bg-foreground/20' },
  { label: 'bg-foreground/30', className: 'bg-foreground/30' },
  { label: 'bg-foreground/50', className: 'bg-foreground/50' },
  { label: 'bg-foreground/70', className: 'bg-foreground/70' },
]

const RADIUS_SAMPLES: Array<{ label: string; className: string }> = [
  { label: 'rounded-sm', className: 'rounded-sm' },
  { label: 'rounded-md', className: 'rounded-md' },
  { label: 'rounded-lg', className: 'rounded-lg' },
  { label: 'rounded-xl', className: 'rounded-xl' },
  { label: 'rounded-full', className: 'rounded-full' },
]

const TYPOGRAPHY: Array<{ name: string; className: string; sample: string }> = [
  { name: 'Display XL', className: 'text-5xl md:text-6xl lg:text-7xl font-display tracking-tight', sample: 'Стоимость внедрения' },
  { name: 'Display L', className: 'text-4xl lg:text-6xl font-display tracking-tight', sample: 'Что делает IntDoc AI особенным' },
  { name: 'Display M', className: 'text-3xl lg:text-4xl font-display', sample: 'Любой формат на входе' },
  { name: 'Display S', className: 'text-2xl lg:text-3xl font-display', sample: 'Актуальная база прайсов поставщиков' },
  { name: 'Heading', className: 'text-xl lg:text-2xl font-display', sample: 'Загрузка документов' },
  { name: 'Lead', className: 'text-xl lg:text-2xl text-muted-foreground leading-relaxed', sample: 'IntDoc AI нейросетью обрабатывает любые документы.' },
  { name: 'Body', className: 'text-base text-foreground leading-relaxed', sample: 'Стандартный абзац основного текста на лендинге.' },
  { name: 'Body Muted', className: 'text-base text-muted-foreground leading-relaxed', sample: 'Вторичный текст в описаниях карточек и подписях.' },
  { name: 'Small', className: 'text-sm text-muted-foreground', sample: 'Подпись или вспомогательная подсказка' },
  { name: 'Mono Label', className: 'text-sm font-mono text-muted-foreground', sample: '01' },
  { name: 'Mono XS Tracking', className: 'font-mono text-xs tracking-widest text-muted-foreground uppercase', sample: 'Модули и стоимость' },
]

export default function StyleguidePage() {
  if (process.env.NODE_ENV === 'production') {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Section topBorder={false} padding="lg">
        <div className="mb-16">
          <Eyebrow className="mb-6">Design system</Eyebrow>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Styleguide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Каталог токенов и компонентов. Доступен только в development-сборке. Подробности — в <code>ai_docs/design-system.md</code>.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← На главную
            </Link>
          </div>
        </div>

        {/* Colors */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Цвета</h2>
          <p className="text-muted-foreground mb-8">
            Семантические токены из <code>@theme</code> в <code>app/globals.css</code>. Используются как <code>bg-&lt;token&gt;</code>, <code>text-&lt;token&gt;</code>, <code>border-&lt;token&gt;</code>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SEMANTIC_COLORS.map(({ token, cssVar, usage }) => (
              <div key={token} className="border border-border rounded-md overflow-hidden">
                <div
                  className="h-20 border-b border-border"
                  style={{ background: `var(${cssVar})` }}
                />
                <div className="p-3">
                  <div className="font-mono text-sm">{token}</div>
                  <div className="font-mono text-xs text-muted-foreground">{cssVar}</div>
                  <div className="text-xs text-muted-foreground mt-1">{usage}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-display mt-12 mb-4">Шкала прозрачностей foreground</h3>
          <p className="text-muted-foreground mb-6">
            Лендинг широко использует <code>bg-foreground/&lt;opacity&gt;</code> и <code>border-foreground/&lt;opacity&gt;</code> для разделителей, фонов и сеток.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {FOREGROUND_OPACITIES.map(({ label, className }) => (
              <div key={label} className="border border-border rounded-md overflow-hidden">
                <div className={`h-16 ${className}`} />
                <div className="p-2 font-mono text-xs">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Типографика</h2>
          <p className="text-muted-foreground mb-8">
            Семейства: <code>font-sans</code> (Instrument Sans), <code>font-display</code> (Instrument Serif), <code>font-mono</code> (JetBrains Mono).
          </p>
          <div className="space-y-8">
            {TYPOGRAPHY.map(({ name, className, sample }) => (
              <div key={name} className="border-b border-border pb-6">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                  <span className="font-mono text-xs text-muted-foreground">{name}</span>
                  <code className="font-mono text-xs text-muted-foreground">{className}</code>
                </div>
                <div className={className}>{sample}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Кнопки</h2>
          <p className="text-muted-foreground mb-8">
            Компонент <code>Button</code> из <code>components/ui/button.tsx</code>. Поддерживает <code>variant</code> × <code>size</code>.
          </p>
          <div className="space-y-8">
            {(['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'] as const).map((variant) => (
              <div key={variant}>
                <div className="font-mono text-xs text-muted-foreground mb-3">variant={`"${variant}"`}</div>
                <div className="flex flex-wrap items-center gap-3">
                  {(['sm', 'default', 'lg'] as const).map((size) => (
                    <Button key={size} variant={variant} size={size}>
                      {variant}/{size}
                    </Button>
                  ))}
                  <Button variant={variant} size="default">
                    With icon <ArrowRight />
                  </Button>
                </div>
              </div>
            ))}
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-3">Landing CTA pattern (pill)</div>
              <div className="flex flex-wrap items-center gap-3">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full">
                  Запросить демо <ArrowRight className="ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                >
                  Обсудить внедрение
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Бейджи</h2>
          <p className="text-muted-foreground mb-8">
            Компонент <code>Badge</code>. Варианты — <code>default</code>, <code>secondary</code>, <code>outline</code>, <code>destructive</code>.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge>default</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="destructive">destructive</Badge>
          </div>
        </section>

        {/* Eyebrows */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Eyebrow</h2>
          <p className="text-muted-foreground mb-8">
            Метка над заголовком секции. Три варианта: <code>line</code> (по умолчанию), <code>tracking</code> (uppercase), <code>pill</code> (заливка).
          </p>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-xs text-muted-foreground">variant="line" (default)</div>
              <Eyebrow>Преимущества</Eyebrow>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-xs text-muted-foreground">variant="tracking"</div>
              <Eyebrow variant="tracking">Модули и стоимость</Eyebrow>
            </div>
            <div className="space-y-3">
              <div className="font-mono text-xs text-muted-foreground">variant="pill"</div>
              <Eyebrow variant="pill">Связаться с нами</Eyebrow>
            </div>
            <div className="space-y-3 bg-foreground p-6 rounded-md">
              <div className="font-mono text-xs text-background/50">tone="onDark"</div>
              <Eyebrow tone="onDark">Процесс</Eyebrow>
            </div>
          </div>
        </section>

        {/* Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Section</h2>
          <p className="text-muted-foreground mb-8">
            Обёртка секции с консистентными отступами и контейнером. Пропы: <code>padding</code>, <code>topBorder</code>, <code>tone</code>, <code>width</code>, <code>bare</code>.
          </p>
          <div className="border border-dashed border-border rounded-md p-4 text-sm text-muted-foreground space-y-2">
            <p>Default: <code>padding=&quot;default&quot;</code> (py-24 lg:py-32), <code>width=&quot;content&quot;</code> (max-w-content = 1400px), без border.</p>
            <p><code>topBorder</code> добавляет <code>border-t border-foreground/10</code>.</p>
            <p><code>padding=&quot;lg&quot;</code> = <code>py-32 lg:py-40</code> (используется в pricing).</p>
            <p><code>width=&quot;wide&quot;</code> = <code>max-w-7xl</code> (для pricing).</p>
            <p><code>tone=&quot;onDark&quot;</code> = тёмный фон (для секции «Как это работает»).</p>
            <p><code>bare</code> отключает внутренний контейнер.</p>
          </div>
        </section>

        {/* Forms */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Формы</h2>
          <p className="text-muted-foreground mb-8">
            Поля ввода из <code>components/ui/</code>.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium">Input</label>
              <Input placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Input (disabled)</label>
              <Input placeholder="readonly" disabled />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Textarea</label>
              <Textarea placeholder="Опишите задачу..." rows={4} />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Card</h2>
          <p className="text-muted-foreground mb-8">
            shadcn Card с CardHeader/CardContent.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Опциональное описание карточки.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Контент карточки. Может содержать любой JSX.
                </p>
              </CardContent>
            </Card>
            <Card className="border-foreground/20">
              <CardHeader>
                <CardTitle>С усиленной границей</CardTitle>
                <CardDescription>className=&quot;border-foreground/20&quot;</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Действие</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Radius & Spacing */}
        <section className="mb-24">
          <h2 className="text-3xl font-display mb-2">Радиусы и контейнер</h2>
          <p className="text-muted-foreground mb-8">
            <code>--radius: 0.25rem</code>. Шкала: <code>radius-sm</code>, <code>radius-md</code>, <code>radius-lg</code>, <code>radius-xl</code>.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            {RADIUS_SAMPLES.map(({ label, className }) => (
              <div key={label} className="text-center">
                <div className={`w-24 h-24 bg-foreground/10 border border-foreground/20 ${className}`} />
                <code className="font-mono text-xs text-muted-foreground mt-2 block">{label}</code>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mb-4">
            Контейнер: <code>max-w-content</code> = <code>1400px</code>. Стандартный паддинг: <code>px-6 lg:px-12</code>.
          </p>
        </section>
      </Section>
    </main>
  )
}
