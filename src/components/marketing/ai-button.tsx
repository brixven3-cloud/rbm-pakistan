'use client'

import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function AiButton() {
  return (
    // bottom-20 on mobile clears the bottom nav (64px) + 16px gap
    // md:bottom-6 on desktop (no bottom nav)
    <div className="fixed bottom-20 right-4 z-40 md:bottom-6 md:right-6">
      <motion.button
        className="flex items-center gap-2 rounded-pill bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-primary-md"
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(15, 157, 122, 0.45)',
            '0 0 0 8px rgba(15, 157, 122, 0)',
            '0 0 0 0 rgba(15, 157, 122, 0)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
        aria-label="Open AI smart property search"
        title="Ask AI — smart property search (coming soon)"
      >
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
        <span>Ask AI</span>
      </motion.button>
    </div>
  )
}
