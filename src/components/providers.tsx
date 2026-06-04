'use client'

import { MotionConfig } from 'framer-motion'
import { Toaster } from 'sonner'

/**
 * Client-side providers wrapper.
 * MotionConfig reducedMotion="user" makes ALL framer-motion animations
 * automatically no-ops for users who prefer reduced motion — no per-component
 * handling needed.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <Toaster
        richColors
        closeButton
        position="top-right"
        toastOptions={{ className: 'font-sans text-sm' }}
      />
    </MotionConfig>
  )
}
