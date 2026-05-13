# Task: Extract a Design System from the Landing Page (React + Tailwind)

## Context

The React project has a landing page styled with Tailwind CSS. Analyze its code and extract colors, fonts, spacing, and components into a design system within the Tailwind config that can be reused across the entire application.

## Steps

### 1. Analyze the Current Landing Page

Find all landing page component files (`.jsx`, `.tsx`) and the current `tailwind.config.js` (or `tailwind.config.ts`).

Extract from the classes used in JSX:

- **Colors**: all Tailwind color classes (`bg-*`, `text-*`, `border-*`, `ring-*`, etc.). Group by purpose: primary, secondary, accent, surface (backgrounds), muted (secondary text), border, success, error, warning
- **Typography**: all `text-*`, `font-*`, `leading-*`, `tracking-*` classes. Determine the hierarchy: which class combinations are used for h1–h6, body, caption, small
- **Spacing and sizing**: recurring patterns of `p-*`, `m-*`, `gap-*`, `max-w-*` — especially for sections and containers
- **Border radius**: `rounded-*` — which values are used and where
- **Shadows and effects**: `shadow-*`, `backdrop-*`, `bg-gradient-*`
- **Components**: buttons (all variants), cards, sections, navbar, footer, forms, badges — anything that visually repeats

Pay attention to classes hidden inside conditional logic (`clsx`, `classnames`, `cn`, template strings, `cva`) — these are easy to miss with a simple text search.

### 2. Update `tailwind.config.js`

Add semantic tokens to `theme.extend` so that instead of hardcoded classes like `bg-blue-600`, the codebase uses `bg-primary`. Example structure:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '...', // main color (from landing)
          hover: '...',   // hover state (from landing)
          light: '...',   // lighter variant, if present
        },
        secondary: {
          DEFAULT: '...',
          hover: '...',
        },
        accent: '...',
        surface: {
          DEFAULT: '...', // main page background
          raised: '...',  // card/elevated block background
        },
        muted: '...',     // secondary text
        // ...rest
      },
      fontFamily: {
        sans: ['...'],    // main font from landing
        heading: ['...'], // heading font, if different
      },
      borderRadius: {
        // only if the landing uses non-standard values
      },
      boxShadow: {
        // only if there are custom shadows
      },
      // container, spacing — if there are consistent patterns
    },
  },
}
```

> If the project uses Tailwind v4 with the `@theme` directive in CSS instead of `tailwind.config.js`, place the tokens there following the same semantic structure (`--color-primary`, `--color-primary-hover`, etc.).

### 3. Create UI Components

For each reusable component, create a file in `src/components/ui/`. Use a utility like `clsx` + `tailwind-merge` (commonly wrapped as `cn`) for combining classes.

**Button** — `src/components/ui/Button.jsx`:

```jsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const VARIANTS = {
  primary:   "bg-primary text-white hover:bg-primary-hover focus:ring-primary",
  secondary: "bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary",
  outline:   "border border-primary text-primary hover:bg-primary hover:text-white",
  ghost:     "text-primary hover:bg-primary/10",
};

const SIZES = {
  sm: "px-3 py-1.5 text-sm rounded-md",
  md: "px-5 py-2.5 text-base rounded-lg",
  lg: "px-7 py-3.5 text-lg rounded-lg",
};

const BASE =
  "inline-flex items-center justify-center font-medium transition-colors " +
  "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  as: Component = "button",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(BASE, VARIANTS[variant], SIZES[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
```

> If the project uses TypeScript, type `variant`, `size`, and `as` via a union type and `ElementType`. If `class-variance-authority` (`cva`) is already in the project — use it instead of plain objects, it's the same idea but type-safe.

Similarly, create components for everything else you find:

- `Card.jsx` — if there are cards
- `Badge.jsx` — if there are badges/tags
- `Section.jsx` — section wrapper with consistent max-width, padding, gap
- `Input.jsx` — if there are styled input fields
- Any other components you discover

All classes inside components must use the new semantic tokens from the config.

### 4. Create a Component Catalog Page (Styleguide)

Create a route `/styleguide` (mount it only in development — for example, behind `import.meta.env.DEV` in Vite, or `process.env.NODE_ENV === "development"` in CRA/Next).

Create `src/pages/Styleguide.jsx` (or place it wherever your routes live) that displays all design system elements:

- **Color palette**: grid of swatches with labels (token name, original Tailwind class, HEX value). Use classes from the config: `bg-primary`, `bg-secondary`, etc.
- **Typography**: examples of h1–h6, body text, caption, small — with the Tailwind classes used for each
- **Buttons**: a table showing all variant × size combinations
- **Other components**: one section per component with different variants

Example wiring with React Router:

```jsx
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Styleguide } from "./pages/Styleguide";

export default function App() {
  return (
    <Routes>
      {/* ...other routes */}
      {import.meta.env.DEV && <Route path="/styleguide" element={<Styleguide />} />}
    </Routes>
  );
}
```

For Next.js — put it at `app/styleguide/page.tsx` and guard with a `notFound()` call in production.

### 5. Refactor the Landing Page

Replace in the landing page:

- Specific color classes (`bg-blue-600`) → semantic ones (`bg-primary`)
- Duplicated JSX → components from `src/components/ui/`
- Repeating class combinations → components

After refactoring, run a visual diff against the original landing page — it must look pixel-perfect identical.

### 6. Documentation

Create `ai_docs/design-system.md` (create the `ai_docs` folder if it does not exist) with a brief description of:

- Available tokens and what they represent
- Available components, their props, and default values
- How to add a new component (file location, naming conventions, `cn`/`cva` patterns used)

## Rules

- **Do not change the landing page appearance** — it must look pixel-perfect identical after refactoring
- **Only use values from the actual code** — do not invent anything, do not add colors "for the future"
- If a color or class is used exactly once and doesn't fit the system — leave it as is
- Comment your decisions in commits: why a particular color became `primary`, what became `surface`, etc.
- Do not introduce a separate global CSS file with custom properties unless the project already uses Tailwind v4's `@theme`. Everything else goes through the Tailwind config

## Common Pitfalls to Avoid

### 1. Dynamic Tailwind Class Names

**NEVER** build class names by string concatenation from variables — Tailwind's JIT scans source files as plain text and won't find them:

```jsx
// BAD: Tailwind won't generate `bg-red-500` or `bg-blue-500`
<div className={`bg-${color}-500`} />

// BAD: same problem
const cls = "bg-" + variant;
```

**Solution**: keep full class strings in a lookup object so the scanner sees them literally:

```jsx
// GOOD: full class names are present in source
const COLOR_CLASSES = {
  red:  "bg-red-500",
  blue: "bg-blue-500",
};

<div className={COLOR_CLASSES[color]} />
```

If you truly need dynamic values, add them to the `safelist` in `tailwind.config.js`.

### 2. Class Conflicts Without `tailwind-merge`

When a component accepts a `className` prop and merges it with its own classes, simple string concatenation lets both sets of conflicting utilities reach the DOM, and the cascade decides — not the caller:

```jsx
// BAD: both `px-5` (default) and `px-2` (override) end up in the DOM
<button className={`px-5 py-2.5 ${className}`} />
```

**Solution**: use `tailwind-merge` (usually wrapped as `cn`) so later classes override earlier ones of the same utility group:

```jsx
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
const cn = (...i) => twMerge(clsx(i));

<button className={cn("px-5 py-2.5", className)} />
```

### 3. Forgetting to Forward Refs and `...props`

UI components are often used inside forms, tooltips, and router links that need access to the underlying DOM node and arbitrary HTML attributes. Always spread `...props` onto the root element, and use `forwardRef` (or React 19's `ref` as a prop) for components that may need refs:

```jsx
// GOOD
import { forwardRef } from "react";

export const Button = forwardRef(function Button(
  { className, ...props },
  ref
) {
  return <button ref={ref} className={cn(BASE, className)} {...props} />;
});
```

### 4. Polymorphic `as` Prop Pitfalls

If you allow `<Button as="a" href="...">`, do not also hardcode `type="button"` — that attribute is invalid on `<a>` and will cause React warnings. Apply tag-specific defaults conditionally, or just let the consumer pass them through `...props`.

### 5. Server Components (Next.js App Router)

If the project is on Next.js App Router and a UI component uses any client-side hooks or event handlers (`onClick`, `useState`), put `"use client"` at the top of the file. Without it, the component will fail to render with a server-component error.