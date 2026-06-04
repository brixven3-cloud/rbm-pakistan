'use client'

import { ChevronDown, Search } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Hero section — sits inside the charcoal gradient band.
 * Contains only the nationwide search bar (no AI pill — AI lives in bottom nav).
 * Subtle scale+fade entrance animation per spec.
 */
export function HeroSection() {
  return (
    <section className="container-page py-5">
      {/* White search pill — scale+fade entrance */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.05 }}
        className="flex h-14 items-center overflow-hidden rounded-pill bg-white shadow-hero"
      >
        <Search className="ml-4 h-5 w-5 shrink-0 text-ink-faint" aria-hidden />
        <input
          type="search"
          placeholder="Search all of Pakistan"
          className="flex-1 bg-transparent px-3 text-sm text-ink placeholder:text-ink-faint outline-none"
          readOnly
          aria-label="Search properties nationwide"
        />
        {/* City selector chip */}
        <button className="flex shrink-0 items-center gap-1 border-l border-hairline px-4 text-xs font-medium text-ink-muted transition-colors hover:text-ink whitespace-nowrap">
          Lahore
          <ChevronDown className="h-3 w-3 text-copper" aria-hidden />
        </button>
      </motion.div>
    </section>
  )
}
