import Link from 'next/link'
import { Globe2, ArrowRight } from 'lucide-react'

/**
 * All Pakistan market entry — dark surface card, copper-tint icon tile.
 * Per spec: copper-tint tile (no dark/black box — that's the card itself).
 */
export function AllPakistanBtn() {
  return (
    <Link
      href="/properties"
      className="flex w-full items-center justify-between rounded-card border border-hairline bg-surface px-5 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-copper/30"
      style={{ boxShadow: '0 10px 26px rgba(0,0,0,0.45)' }}
    >
      <div className="flex items-center gap-3">
        {/* Copper-tinted icon tile */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input"
          style={{
            background: 'rgba(221,122,78,0.14)',
            border: '1px solid rgba(221,122,78,0.22)',
          }}
        >
          <Globe2 className="h-5 w-5 text-copper" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">All Pakistan Market</div>
          <div className="text-xs text-ink-muted">Listings from every city &amp; dealer</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-copper" aria-hidden />
    </Link>
  )
}
