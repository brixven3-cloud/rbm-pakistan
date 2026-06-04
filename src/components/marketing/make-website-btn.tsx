import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'

/**
 * Dealer acquisition card — copper-tinted gradient bg, glowing copper border.
 * Floats with gentle animation. Dealer-only entry point in the content zone.
 */
export function MakeWebsiteBtn() {
  return (
    <Link
      href="/auth/signup"
      className="flex w-full items-center justify-between rounded-card px-5 py-4 card-float transition-opacity hover:opacity-90"
      style={{
        background: 'linear-gradient(160deg, rgba(221,122,78,0.14) 0%, rgba(192,57,43,0.08) 100%)',
        border: '1px solid rgba(221,122,78,0.32)',
        boxShadow: '0 10px 26px rgba(0,0,0,0.45), 0 0 0 0px rgba(221,122,78,0.20)',
      }}
    >
      <div className="flex items-center gap-3">
        {/* Accent-grad icon tile */}
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input shadow-copper-sm"
          style={{ background: 'linear-gradient(160deg, #DD7A4E, #C0392B)' }}
        >
          <Building2 className="h-5 w-5 text-white" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Make your own property website</div>
          <div className="text-xs text-ink-muted">Free to start · From Rs. 700/mo · Ready in minutes</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-copper" aria-hidden />
    </Link>
  )
}
