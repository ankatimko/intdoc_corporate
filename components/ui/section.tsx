import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const sectionVariants = cva('relative', {
  variants: {
    padding: {
      default: 'py-24 lg:py-32',
      lg: 'py-32 lg:py-40',
      none: '',
    },
    topBorder: {
      true: 'border-t border-foreground/10',
      false: '',
    },
    tone: {
      default: '',
      onDark: 'bg-foreground text-background overflow-hidden',
    },
  },
  defaultVariants: {
    padding: 'default',
    topBorder: false,
    tone: 'default',
  },
})

const containerVariants = cva('relative z-10 mx-auto px-6 lg:px-12', {
  variants: {
    width: {
      content: 'max-w-content',
      wide: 'max-w-7xl',
      narrow: 'max-w-4xl',
    },
  },
  defaultVariants: {
    width: 'content',
  },
})

type SectionProps = React.ComponentProps<'section'> &
  VariantProps<typeof sectionVariants> & {
    /** Max-width for the inner container. */
    width?: VariantProps<typeof containerVariants>['width']
    /** Render children without the inner container. */
    bare?: boolean
  }

function Section({
  className,
  padding,
  topBorder,
  tone,
  width,
  bare,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ padding, topBorder, tone }), className)}
      {...props}
    >
      {bare ? children : <div className={containerVariants({ width })}>{children}</div>}
    </section>
  )
}

export { Section, sectionVariants, containerVariants }
