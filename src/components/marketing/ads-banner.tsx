'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Placeholder banners — replaced with real data from ads_banners table in M6 admin
const BANNERS = [
  {
    id: 1,
    title: 'Premium Plots in DHA Lahore',
    subtitle: 'Starting from Rs. 1.2 Crore',
    cta: 'Explore now',
    href: '/properties?society=dha-lahore',
  },
  {
    id: 2,
    title: 'Bahria Town Islamabad — New Phase',
    subtitle: 'Limited files available',
    cta: 'Book now',
    href: '/properties?society=bahria-town-islamabad',
  },
  {
    id: 3,
    title: 'Get your free dealer website',
    subtitle: 'Rs. 700/mo · Live in minutes',
    cta: 'Start free',
    href: '/auth/signup',
  },
]

export function AdsBanner() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => setCurrent((p) => (p + 1) % BANNERS.length), [])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + BANNERS.length) % BANNERS.length), [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  return (
    <div
      className="relative overflow-hidden rounded-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-label="Promotional banners"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {BANNERS.map((b) => (
          <a
            key={b.id}
            href={b.href}
            className="relative flex h-28 w-full shrink-0 flex-col justify-center overflow-hidden rounded-card px-5 sm:h-32"
            style={{ background: 'linear-gradient(160deg, #2B2F36 0%, #1A1D23 55%, #15171C 100%)' }}
          >
            {/* Copper left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-copper rounded-l-card" aria-hidden />
            <p className="text-sm font-semibold text-white">{b.title}</p>
            <p className="mt-0.5 text-xs text-white/50">{b.subtitle}</p>
            <span className="mt-2 text-xs font-semibold text-copper">{b.cta} →</span>
          </a>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => { prev(); setPaused(true) }}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => { next(); setPaused(true) }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
        aria-label="Next banner"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Copper dot indicators */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5" role="tablist">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            onClick={() => { setCurrent(i); setPaused(true) }}
            className={cn(
              'h-1.5 rounded-full transition-all duration-300',
              i === current ? 'w-4 bg-copper' : 'w-1.5 bg-white/30'
            )}
            aria-label={`Slide ${i + 1} of ${BANNERS.length}`}
          />
        ))}
      </div>
    </div>
  )
}
