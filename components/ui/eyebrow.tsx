import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const eyebrowVariants = cva('text-sm font-mono', {
  variants: {
    variant: {
      line: 'inline-flex items-center gap-3',
      tracking: 'block tracking-widest uppercase text-xs',
      pill: 'inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium',
    },
    tone: {
      default: 'text-muted-foreground',
      onDark: 'text-background/50',
    },
  },
  compoundVariants: [
    { variant: 'pill', tone: 'default', className: 'text-primary' },
  ],
  defaultVariants: {
    variant: 'line',
    tone: 'default',
  },
})

type EyebrowProps = React.ComponentProps<'span'> &
  VariantProps<typeof eyebrowVariants>

function Eyebrow({ className, variant, tone, children, ...props }: EyebrowProps) {
  const showLine = (variant ?? 'line') === 'line'
  const lineClass = tone === 'onDark' ? 'bg-background/30' : 'bg-foreground/30'

  return (
    <span
      data-slot="eyebrow"
      className={cn(eyebrowVariants({ variant, tone }), className)}
      {...props}
    >
      {showLine && <span className={cn('w-8 h-px', lineClass)} aria-hidden />}
      {children}
    </span>
  )
}

export { Eyebrow, eyebrowVariants }
