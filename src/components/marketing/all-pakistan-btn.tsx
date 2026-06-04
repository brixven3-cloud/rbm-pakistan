import Link from 'next/link'
import { Globe2, ArrowRight } from 'lucide-react'

/**
 * Prominent entry point to the nationwide all-dealers property view.
 * Tapping opens cross-dealer search across all cities.
 */
export function AllPakistanBtn() {
  return (
    <Link
      href="/properties"
      className="flex w-full items-center justify-between rounded-card border border-hairline bg-surface px-5 py-4 shadow-card transition-all hover:shadow-elevated"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-black">
          <Globe2 className="h-5 w-5 text-white" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">All Pakistan Market</div>
          <div className="text-xs text-ink-muted">Listings from every city &amp; dealer</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-gold" aria-hidden />
    </Link>
  )
}
