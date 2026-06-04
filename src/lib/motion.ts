'use client'

import type { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Returns true when the user prefers reduced motion.
 * Use this to conditionally skip animations for accessibility.
 * Note: MotionConfig reducedMotion="user" in the root layout already handles
 * Framer Motion animations globally — this hook is for non-FM animations.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefers(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return prefers
}

// ---------------------------------------------------------------------------
// Named animation variants — import these everywhere instead of writing inline.
// MotionConfig reducedMotion="user" in the root layout makes all of these
// automatically become no-ops for users who prefer reduced motion.
// ---------------------------------------------------------------------------

// Typing as Variants lets TypeScript validate ease values against the Framer Motion
// Easing union. Bezier arrays need `as const` to satisfy readonly [n,n,n,n].

/** Simple fade: opacity 0 → 1 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

/** Slide up + fade: rises 10px while fading in */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
}

/** Slide down + fade */
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
}

/** Scale in: slight zoom in while fading — for modals, dropdowns */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.18, ease: [0.4, 0, 0.2, 1] as const } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.12 } },
}

/** Parent wrapper that staggers children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
}

/** Child item used inside staggerContainer */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const } },
}
