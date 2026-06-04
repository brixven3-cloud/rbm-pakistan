import Link from 'next/link'
import { Building2, ArrowRight } from 'lucide-react'

/**
 * Dealer acquisition CTA — copper-soft card at the top of the light content zone.
 * Clearly for dealers, separate from buyer browsing.
 */
export function MakeWebsiteBtn() {
  return (
    <Link
      href="/auth/signup"
      className="flex w-full items-center justify-between rounded-card border border-copper-border bg-copper-soft px-5 py-4 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-elevated active:scale-[0.98]"
    >
      <div className="flex items-center gap-3">
        {/* Copper icon tile — prominent accent */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-copper shadow-copper-sm">
          <Building2 className="h-5 w-5 text-white" aria-hidden />
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Make your own property website</div>
          <div className="text-xs text-ink-muted">Free to start · From Rs. 700/mo · Ready in minutes</div>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-copper" aria-hidden />
    </Link>
  )
}
