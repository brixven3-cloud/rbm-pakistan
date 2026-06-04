'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, Search } from 'lucide-react'
import { AiPill } from '@/components/marketing/ai-button'

export function HeroSection() {
  return (
    <section className="container-page pb-8 pt-3">
      {/* Tagline */}
      <p className="mb-6 text-center text-sm tracking-wide text-dark-muted">
        Find property anywhere in Pakistan
      </p>

      {/* Search pill + AI pill (floats above right edge) */}
      <div className="relative pt-9">
        {/* Gold AI pill — absolutely positioned above the search bar */}
        <div className="absolute top-0 right-1 z-10">
          <AiPill />
        </div>

        {/* White search pill */}
        <div className="flex h-14 items-center overflow-hidden rounded-pill bg-white shadow-hero">
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
            <ChevronDown className="h-3 w-3" aria-hidden />
          </button>
        </div>
      </div>

      {/* Dealer CTA — compact link, inside hero (full CTA is in content zone) */}
      <div className="mt-5 text-center">
        <Link
          href="/auth/signup"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
        >
          Make your own dealer site
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
