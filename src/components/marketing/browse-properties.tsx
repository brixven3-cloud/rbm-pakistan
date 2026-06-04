'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = ['Homes', 'Plots', 'Commercial'] as const
type TabType = (typeof TABS)[number]

const CHIPS: Record<TabType, string[]> = {
  Homes:      ['3 Bed', '4 Bed', '5 Marla', '10 Marla', 'New'],
  Plots:      ['5 Marla', '10 Marla', '1 Kanal', 'New', 'Low price'],
  Commercial: ['Shop', 'Office', 'Warehouse', 'Plaza'],
}

export function BrowseProperties() {
  const [activeTab, setActiveTab] = useState<TabType>('Homes')
  const [activeChip, setActiveChip] = useState<string | null>(null)

  return (
    <div className="rounded-card border border-hairline bg-surface shadow-card">
      {/* Tab row */}
      <div className="flex border-b border-hairline px-2" role="tablist" aria-label="Property type">
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            onClick={() => { setActiveTab(tab); setActiveChip(null) }}
            className={cn(
              'px-4 pb-3 pt-3 text-sm font-medium transition-colors',
              activeTab === tab
                ? 'border-b-2 border-ink text-ink'
                : 'border-b-2 border-transparent text-ink-muted hover:text-ink'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 p-4" role="group" aria-label="Quick filters">
        {CHIPS[activeTab].map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(activeChip === chip ? null : chip)}
            className={cn(
              'rounded-pill px-3 py-1.5 text-xs font-medium transition-all',
              activeChip === chip
                ? 'bg-gold-soft text-gold-dark ring-1 ring-gold/40'
                : 'bg-surface-soft text-ink-muted hover:bg-hairline hover:text-ink'
            )}
            aria-pressed={activeChip === chip}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* View CTA */}
      <div className="border-t border-hairline px-4 py-3">
        <Link
          href={`/properties?type=${activeTab.toLowerCase()}${activeChip ? `&q=${encodeURIComponent(activeChip)}` : ''}`}
          className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-ink-muted"
        >
          Browse {activeTab.toLowerCase()}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  )
}
