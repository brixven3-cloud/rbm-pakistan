'use client'

import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * AI assistant FAB — center-raised button in the bottom nav.
 * Copper-red gradient fill, ring matching nav background, gentle glow pulse.
 * Phase 1: opens search / "coming soon".
 * Phase 2: full conversational AI.
 */
export function AiFab() {
  return (
    <motion.button
      className="relative h-14 w-14 overflow-visible rounded-full"
      style={{
        background: 'linear-gradient(160deg, #DD7A4E, #C0392B)',
        // Ring matching canvas background
        boxShadow: '0 0 0 3px #08090B, 0 0 0 4px rgba(221,122,78,0.35), 0 6px 20px rgba(192,57,43,0.45)',
      }}
      animate={{
        boxShadow: [
          '0 0 0 3px #08090B, 0 0 0 4px rgba(221,122,78,0.35), 0 6px 20px rgba(192,57,43,0.45)',
          '0 0 0 3px #08090B, 0 0 0 10px rgba(221,122,78,0.00), 0 6px 20px rgba(192,57,43,0.45)',
        ],
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', repeatType: 'loop' }}
      whileTap={{ scale: 0.92 }}
      aria-label="Open AI property search assistant"
      title="RBM Smart Search — Phase 2"
    >
      <Bot className="mx-auto h-6 w-6 text-white" aria-hidden />
    </motion.button>
  )
}
