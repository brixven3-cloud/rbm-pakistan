'use client'

import { Search, ChevronDown } from 'lucide-react'

/**
 * Standalone white search pill — used on light-zone pages (property list, city views).
 * The hero version in hero.tsx uses the same visual pattern with a motion entrance.
 */
export function SearchBar() {
  return (
    <div className="flex h-12 items-center overflow-hidden rounded-pill border border-hairline bg-surface shadow-card transition-shadow hover:shadow-elevated">
      <Search className="ml-4 h-4 w-4 shrink-0 text-ink-faint" aria-hidden />
      <input
        type="search"
        placeholder="Search properties"
        className="flex-1 bg-transparent px-3 text-sm text-ink placeholder:text-ink-faint outline-none"
        aria-label="Search properties"
      />
      <button className="flex items-center gap-1 border-l border-hairline px-3 text-xs font-medium text-ink-muted whitespace-nowrap transition-colors hover:text-ink">
        City
        <ChevronDown className="h-3 w-3 text-copper" aria-hidden />
      </button>
    </div>
  )
}
