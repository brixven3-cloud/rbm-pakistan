import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'

/**
 * Dealer acquisition CTA — sits at the top of the light content zone.
 * Clearly for dealers, not buyers. Visually separate from search/browse.
 */
export function MakeWebsiteBtn() {
  return (
    <Link
      href="/auth/signup"
      className="flex w-full items-center justify-between rounded-card border-2 border-gold/30 bg-gold-soft px-5 py-4 transition-all hover:border-gold/60 hover:bg-gold-100"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-gold">
          <Building2 className="h-5 w-5 text-black" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Make your own property website</div>
          <div className="text-xs text-ink-muted">Free to start · From Rs. 700/mo · Ready in minutes</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-gold-dark" aria-hidden />
    </Link>
  )
}
