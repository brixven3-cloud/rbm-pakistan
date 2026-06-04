'use client'

import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="py-5">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
          aria-hidden
        />
        <input
          type="search"
          placeholder="Search property across all of Pakistan"
          className="h-14 w-full rounded-pill border border-hairline bg-surface pl-12 pr-5 text-base text-ink placeholder:text-ink-faint shadow-card transition-shadow hover:shadow-elevated focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          aria-label="Search properties nationwide"
          readOnly
          onClick={() => {
            /* Phase 2: opens AI search / filter sheet */
          }}
        />
      </div>
    </div>
  )
}
