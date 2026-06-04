import Link from 'next/link'
import { Globe2, ArrowRight } from 'lucide-react'

/**
 * All Pakistan market entry — copper-soft icon tile, light card.
 * Per spec: NO dark/black box in content zone; copper-soft tile only.
 */
export function AllPakistanBtn() {
  return (
    <Link
      href="/properties"
      className="flex w-full items-center justify-between rounded-card border border-hairline bg-surface px-5 py-4 shadow-card transition-all duration-150 hover:-translate-y-0.5 hover:shadow-elevated active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        {/* Copper-soft icon tile — no dark box */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-copper-soft">
          <Globe2 className="h-5 w-5 text-copper" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">All Pakistan Market</div>
          <div className="text-xs text-ink-muted">Listings from every city &amp; dealer</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-copper" aria-hidden />
    </Link>
  )
}
