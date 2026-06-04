'use client'

import { ChevronDown, Search } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Search bar section — sits directly below the nav on the dark canvas.
 * Dark pill with a soft glowing copper border and scale+fade entrance.
 * No AI pill here — the AI assistant lives only in the bottom bar FAB.
 */
export function HeroSection() {
  return (
    <section className="py-4">
      {/* Search pill — scale+fade entrance per spec */}
      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.32, ease: 'easeOut', delay: 0.06 }}
        className="flex h-14 items-center overflow-hidden rounded-pill bg-surface-2 shadow-search-glow"
      >
        <Search className="ml-4 h-5 w-5 shrink-0 text-ink-muted" aria-hidden />
        <input
          type="search"
          placeholder="Search all of Pakistan"
          className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-ink-faint outline-none"
          readOnly
          aria-label="Search properties nationwide"
        />
        {/* City selector chip */}
        <button className="flex shrink-0 items-center gap-1 border-l border-hairline px-4 text-xs font-medium text-ink-muted transition-colors hover:text-white whitespace-nowrap">
          Lahore
          <ChevronDown className="h-3 w-3 text-copper" aria-hidden />
        </button>
      </motion.div>
    </section>
  )
}
