import * as React from 'react'

import { cn } from '@/lib/utils'

type LogoProps = React.SVGProps<SVGSVGElement>

/**
 * Full horizontal logo (mark + IntDoc AI text).
 * Uses `currentColor` — set the color via parent `text-*` class.
 */
export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 28"
      fill="none"
      role="img"
      aria-label="IntDoc AI"
      className={cn('h-7 w-auto', className)}
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4 L4 4 L4 24 L9 24" />
        <path d="M19 4 L24 4 L24 24 L19 24" />
      </g>
      <g fill="currentColor">
        <circle cx="9.5" cy="14" r="1.4" />
        <circle cx="14" cy="14" r="1.4" />
        <circle cx="18.5" cy="14" r="1.4" />
      </g>
      <text
        x="34"
        y="20"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontWeight="500"
        fontSize="18"
        fill="currentColor"
        letterSpacing="-0.005em"
      >
        IntDoc AI
      </text>
    </svg>
  )
}

/**
 * Square mark only (no text). Useful for tight spaces / app icons.
 * Uses `currentColor`.
 */
export function LogoMark({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      fill="none"
      role="img"
      aria-label="IntDoc AI"
      className={cn('h-7 w-7', className)}
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5 L5 5 L5 23 L10 23" />
        <path d="M18 5 L23 5 L23 23 L18 23" />
      </g>
      <g fill="currentColor">
        <circle cx="10" cy="14" r="1.6" />
        <circle cx="14" cy="14" r="1.6" />
        <circle cx="18" cy="14" r="1.6" />
      </g>
    </svg>
  )
}
