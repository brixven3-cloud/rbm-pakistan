'use client'

import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Gold AI assistant pill — floats above the search bar in the hero section.
 * Gently slides up and down (2.5s loop) so it stays noticeable without distracting.
 * Phase 1: opens search / "coming soon" state.
 * Phase 2: full conversational AI across all dealer listings.
 */
export function AiPill() {
  return (
    <motion.button
      className="flex items-center gap-1.5 rounded-pill bg-gold px-3 py-1.5 text-xs font-semibold text-black shadow-gold-sm"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0 }}
      aria-label="Open AI property search assistant"
      title="RBM Smart Search — coming in Phase 2"
    >
      <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
      AI assistant
    </motion.button>
  )
}

// Keep AiButton as alias so page.tsx imports don't need updating
export { AiPill as AiButton }
