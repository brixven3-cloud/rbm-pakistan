'use client'

import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * The AI assistant FAB — center-raised button in the bottom nav.
 * Copper gradient fill, 3px white ring, pulse ring animation (2.4s loop).
 * Phase 1: tapping opens nationwide search / "coming soon".
 * Phase 2: full conversational AI across all dealer listings.
 */
export function AiFab() {
  return (
    <motion.button
      className="relative h-14 w-14 overflow-visible rounded-full ring-[3px] ring-white shadow-copper-md"
      style={{ background: 'linear-gradient(160deg, #E08A5C, #C95F32)' }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.12 }}
      aria-label="Open AI property search assistant"
      title="RBM Smart Search — Phase 2"
    >
      {/* Expanding pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full border-[2px] border-copper/60"
        animate={{ scale: [1, 1.55], opacity: [0.8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
        aria-hidden
      />
      <Bot className="mx-auto h-6 w-6 text-white" aria-hidden />
    </motion.button>
  )
}
