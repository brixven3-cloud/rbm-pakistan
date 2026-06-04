'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * Wraps a content section in a fade+rise animation triggered on first scroll-in.
 * Respects prefers-reduced-motion via the root MotionConfig.
 * Use in page.tsx to stagger content sections (40–60ms apart per spec).
 */
export function AnimatedSection({ children, delay = 0, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.28, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
