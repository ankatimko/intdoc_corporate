# Design System

Дизайн-система IntDoc AI извлечена из лендинга и хранится двумя слоями:

1. **Семантические токены** — CSS-переменные в `app/globals.css` (`@theme inline`). Это Tailwind v4, поэтому `tailwind.config.*` отсутствует намеренно.
2. **Reusable-компоненты** — в `components/ui/`. Базовые примитивы (`Button`, `Card`, `Input` и т.п.) сгенерированы shadcn/ui (стиль *new-york*). Поверх добавлены доменные обёртки лендинга: `Section`, `Eyebrow`.

Живой каталог компонентов доступен по адресу [`/styleguide`](../app/styleguide/page.tsx) **только в development-сборке** (в production страница возвращает 404 через `notFound()`).

---

## Токены

Источник правды — [`app/globals.css`](../app/globals.css). Все токены экспортируются через директиву Tailwind v4 `@theme inline`, поэтому каждый токен сразу превращается в утилитарный класс: `bg-<token>`, `text-<token>`, `border-<token>`, `ring-<token>`, и т.п.

### Цвета

Палитра монохромная (контрастный foreground/background с шкалой прозрачностей) — это сознательное решение брендинга, а не недостаток системы.

| Токен | Класс | Назначение |
| --- | --- | --- |
| `background` | `bg-background` | Основной фон страницы |
| `foreground` | `text-foreground`, `bg-foreground` | Основной текст и фон CTA |
| `card` / `card-foreground` | `bg-card` / `text-card-foreground` | Поднятые поверхности |
| `popover` / `popover-foreground` | — | Поверхности поповеров |
| `primary` / `primary-foreground` | `bg-primary` | Совпадает с foreground; брендовое действие |
| `secondary` / `secondary-foreground` | `bg-secondary` | Тихая поверхность/кнопка |
| `muted` / `muted-foreground` | `text-muted-foreground` | Вторичный текст, подписи |
| `accent` / `accent-foreground` | `bg-accent` | Hover-поверхности |
| `destructive` | `bg-destructive`, `text-destructive` | Ошибки, опасные действия |
| `border` | `border-border` | Дефолтные границы |
| `input` | — | Границы полей формы |
| `ring` | `ring-ring` | Фокус-кольцо |
| `chart-1` … `chart-5` | — | Палитра для графиков (recharts) |
| `sidebar*` | — | Токены сайдбара (зарезервированы shadcn) |

**Шкала прозрачностей foreground** — основной приём вёрстки лендинга. Используется как разделители, фоны блоков и сетки:

```
bg-foreground/5   bg-foreground/10   bg-foreground/20
bg-foreground/30  bg-foreground/50   bg-foreground/70
```

Изменять отдельные ступени **не нужно** — это просто `opacity` от `foreground`, Tailwind генерирует их автоматически из литералов в коде.

### Типографика

Семейства подключаются как CSS-переменные из `app/layout.tsx` (Google Fonts) и экспонируются через `@theme`:

| Класс | Шрифт | Где применять |
| --- | --- | --- |
| `font-sans` *(default)* | Instrument Sans | Основной текст, формы, кнопки |
| `font-display` | Instrument Serif (400) | Заголовки секций, hero |
| `font-mono` | JetBrains Mono | Eyebrow-метки, нумерация, код-сэмплы |

`font-display` реализован как `.font-display` utility в `@layer utilities` (см. `globals.css`).

Размерная шкала заголовков фиксирована паттернами в JSX (Tailwind утилиты `text-*`):

| Имя в Styleguide | Класс |
| --- | --- |
| Display XL | `text-5xl md:text-6xl lg:text-7xl font-display tracking-tight` |
| Display L | `text-4xl lg:text-6xl font-display tracking-tight` |
| Display M | `text-3xl lg:text-4xl font-display` |
| Display S | `text-2xl lg:text-3xl font-display` |
| Heading | `text-xl lg:text-2xl font-display` |
| Lead | `text-xl lg:text-2xl text-muted-foreground leading-relaxed` |
| Body | `text-base text-foreground leading-relaxed` |
| Mono Label | `text-sm font-mono text-muted-foreground` |

Hero использует индивидуальный `text-[clamp(2.5rem,8vw,6rem)]` — это намеренный отход от шкалы для главного экрана, в систему не выносится.

### Радиус и контейнер

- Базовый радиус: `--radius: 0.25rem`. Шкала: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`.
- `rounded-full` — для пилюль/CTA-кнопок hero и cta-секции.
- **`--container-content: 1400px`** — глобальный max-width для секций лендинга. Используется через `max-w-content` (генерируется Tailwind v4 из namespace `--container-*`).

Стандартные горизонтальные паддинги: `px-6 lg:px-12`.

### Отступы секций

| Класс | Где |
| --- | --- |
| `py-24 lg:py-32` | Большинство секций (`Section padding="default"`) |
| `py-32 lg:py-40` | Pricing, contact (`Section padding="lg"`) |

### Кастомные utility (в `globals.css`)

Не токены, а готовые эффекты:

- `.font-display` — применить серифный заголовочный шрифт
- `.text-stroke` — текст обведённой контурной заливкой
- `.marquee` / `.marquee-reverse` — бегущая строка
- `.line-reveal` — clip-path reveal слева направо
- `.hover-lift` — translateY(-4px) на hover
- `.letter-spin` — rotateY на hover (буквенные эффекты)
- `.animate-char-in` — поэлементная появка символов (используется hero)
- `.noise-overlay` — SVG-шум поверх элемента

---

## Компоненты

### Доменные примитивы

#### `Section` — [`components/ui/section.tsx`](../components/ui/section.tsx)

Обёртка секции лендинга с консистентными отступами и контейнером.

```tsx
<Section id="features" topBorder>
  <Eyebrow className="mb-6">Преимущества</Eyebrow>
  <h2 className="text-4xl lg:text-6xl font-display tracking-tight">…</h2>
</Section>
```

| Prop | Тип | Default | Назначение |
| --- | --- | --- | --- |
| `padding` | `'default' \| 'lg' \| 'none'` | `'default'` | Вертикальный паддинг |
| `topBorder` | `boolean` | `false` | `border-t border-foreground/10` сверху |
| `tone` | `'default' \| 'onDark'` | `'default'` | Инверсная палитра (для секции «Как это работает») |
| `width` | `'content' \| 'wide' \| 'narrow'` | `'content'` | Max-width внутреннего контейнера: 1400px / `max-w-7xl` / `max-w-4xl` |
| `bare` | `boolean` | `false` | Не рендерить внутренний контейнер (например, если нужен свой) |

Спред `...props` идёт на `<section>`, так что `id`, `ref` (React 19), `aria-*` работают как обычно.

#### `Eyebrow` — [`components/ui/eyebrow.tsx`](../components/ui/eyebrow.tsx)

Маленькая метка над заголовком секции.

```tsx
<Eyebrow className="mb-6">Преимущества</Eyebrow>
<Eyebrow variant="tracking">Модули и стоимость</Eyebrow>
<Eyebrow variant="pill">Связаться с нами</Eyebrow>
<Eyebrow tone="onDark">Процесс</Eyebrow>
```

| Prop | Тип | Default | Назначение |
| --- | --- | --- | --- |
| `variant` | `'line' \| 'tracking' \| 'pill'` | `'line'` | Стиль: префикс-линия / uppercase-трекинг / залитая пилюля |
| `tone` | `'default' \| 'onDark'` | `'default'` | Подгоняет цвета под тёмный фон |

В варианте `line` префикс-линия рендерится автоматически. В `tracking` и `pill` — нет.

### shadcn-примитивы

Базовые компоненты сгенерированы CLI shadcn/ui и лежат в [`components/ui/`](../components/ui/). Они уже привязаны к семантическим токенам:

| Компонент | Файл | Варианты |
| --- | --- | --- |
| `Button` | `button.tsx` | variant: default / destructive / outline / secondary / ghost / link · size: sm / default / lg / icon / icon-sm / icon-lg |
| `Badge` | `badge.tsx` | variant: default / secondary / outline / destructive |
| `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`) | `card.tsx` | — |
| `Input` | `input.tsx` | — |
| `Textarea` | `textarea.tsx` | — |
| `Checkbox` | `checkbox.tsx` | — |
| ...и далее | весь остальной набор shadcn | см. директорию |

CTA-кнопки лендинга («пилюли») в hero и cta-секции используют тот же `Button`, но с инлайн-классами:

```tsx
<Button className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full">
```

Если эта форма закрепится в новых секциях — её стоит вынести в новый `size` или `variant` в `buttonVariants`. Сейчас намеренно оставлено инлайном, чтобы не плодить варианты под 2 точки использования.

---

## Как добавить новый компонент

1. **Расположение.** Доменные обёртки и shadcn-примитивы — в [`components/ui/`](../components/ui/). Лендинг-специфичные блоки (секции страницы) — в [`components/landing/`](../components/landing/).
2. **Имя файла.** `kebab-case.tsx` (например, `section.tsx`). Экспорт — именованный, в PascalCase.
3. **Инструменты.**
   - `cn` из [`lib/utils.ts`](../lib/utils.ts) (`tailwind-merge` + `clsx`) — для слияния классов.
   - `cva` из `class-variance-authority` — для вариантов.
   - Все классы внутри компонента используют **семантические токены**, а не сырые цвета вроде `bg-zinc-900`.
4. **Шаблон компонента:**

```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const myThingVariants = cva('base classes here', {
  variants: {
    variant: { default: '...', subtle: '...' },
  },
  defaultVariants: { variant: 'default' },
})

type MyThingProps = React.ComponentProps<'div'> & VariantProps<typeof myThingVariants>

export function MyThing({ className, variant, ...props }: MyThingProps) {
  return (
    <div
      data-slot="my-thing"
      className={cn(myThingVariants({ variant }), className)}
      {...props}
    />
  )
}
```

5. **Server vs client.** Server-компонент по умолчанию. Если внутри есть `useState`, `useEffect`, `onClick` и т.п. — первой строкой ставьте `"use client"`.
6. **Демонстрация.** Добавьте секцию с компонентом в [`app/styleguide/page.tsx`](../app/styleguide/page.tsx).
7. **Документация.** Допишите запись в таблицу компонентов выше.

---

## Pitfalls (на что обращать внимание)

### Динамические имена классов

Tailwind сканирует исходники как простой текст. Конструкции вида `` `bg-${color}-500` `` или `'bg-' + variant` **не сгенерируют** соответствующий CSS. Решение — lookup-объект с полными литералами:

```tsx
const COLOR_CLASSES = {
  primary: 'bg-foreground text-background',
  ghost:   'bg-transparent text-foreground',
}
<div className={COLOR_CLASSES[variant]} />
```

В styleguide-странице ([`app/styleguide/page.tsx`](../app/styleguide/page.tsx)) есть готовые примеры (`RADIUS_SAMPLES`, `FOREGROUND_OPACITIES`).

### Слияние классов

Когда компонент принимает `className` от потребителя, используйте `cn(...)` — он применит `tailwind-merge` и корректно перетрёт конфликтующие утилиты последним значением.

### `data-slot`

Все примитивы помечены `data-slot="<name>"`. Это удобно для отладки в DevTools и для радикс-стиля каскада в shadcn-стиле.

### Tailwind v4, не v3

`tailwind.config.*` отсутствует **намеренно**. Все токены добавляются в `@theme` в [`app/globals.css`](../app/globals.css). Namespaces:

- `--color-*` → `bg-*`, `text-*`, `border-*`, `ring-*`, …
- `--font-*` → `font-*`
- `--container-*` → `max-w-*`
- `--radius-*` → `rounded-*`

---

## Чек-лист при изменении токенов

- [ ] Изменили цвет в `:root` или в `@theme` в `globals.css`
- [ ] Проверили [`/styleguide`](../app/styleguide/page.tsx) — все swatches/типографика выглядят ожидаемо
- [ ] Проверили лендинг (`/`) — особенно секцию «Как это работает» (инверсная палитра)
- [ ] Если добавили новый токен — упомянули его в таблице выше
