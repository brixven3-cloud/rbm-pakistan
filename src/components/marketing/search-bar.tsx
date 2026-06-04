'use client'

import { Search, ChevronDown } from 'lucide-react'

/**
 * Standalone dark search pill — used on property list / city view pages.
 * The hero version (hero.tsx) has the motion entrance animation.
 */
export function SearchBar() {
  return (
    <div className="flex h-12 items-center overflow-hidden rounded-pill bg-surface-2 shadow-search-glow">
      <Search className="ml-4 h-4 w-4 shrink-0 text-ink-muted" aria-hidden />
      <input
        type="search"
        placeholder="Search properties"
        className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-ink-faint outline-none"
        aria-label="Search properties"
      />
      <button className="flex items-center gap-1 border-l border-hairline px-3 text-xs font-medium text-ink-muted transition-colors hover:text-white whitespace-nowrap">
        City
        <ChevronDown className="h-3 w-3 text-copper" aria-hidden />
      </button>
    </div>
  )
}
