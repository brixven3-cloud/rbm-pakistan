import { Badge } from '@/components/ui'
import { MapPin } from 'lucide-react'

// Placeholder cards — replaced with real Supabase data in M3
const PLACEHOLDER = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? '10 Marla House for Sale' : '5 Marla Plot Available',
  price: i % 2 === 0 ? 'Rs. 2.5 Crore' : 'Rs. 85 Lakh',
  location: i % 3 === 0 ? 'DHA Phase 5, Lahore' : i % 3 === 1 ? 'Bahria Town, Islamabad' : 'DHA Phase 6, Karachi',
  featured: i === 0 || i === 3,
  verified: i === 1,
}))

// Staggered float delays
const FLOAT_CLASSES = ['card-float', 'card-float-2', 'card-float-3', 'card-float-4', 'card-float-5']

export function FeaturedListings() {
  return (
    <section className="mt-4">
      <div className="container-page mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">Featured listings</h2>
        <button className="text-sm font-medium text-copper transition-colors hover:text-copper-muted">
          View all
        </button>
      </div>

      {/* Edge-to-edge horizontal scroll */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 scrollbar-hide">
          {PLACEHOLDER.map((card, i) => (
            <article
              key={card.id}
              className={`w-56 shrink-0 overflow-hidden rounded-card border border-hairline sm:w-64 ${FLOAT_CLASSES[i % 5]}`}
              style={{ boxShadow: '0 10px 26px rgba(0,0,0,0.45)' }}
            >
              {/* ── PHOTO AREA — kept BRIGHT (natural colors, no dark overlay) ── */}
              {/* Real property photos go here as bright, natural images */}
              <div className="relative h-40 overflow-hidden bg-white">
                {/* Placeholder — simulates a bright, sunny property photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
                {/* Badges over photo */}
                <div className="absolute left-2 top-2 flex gap-1.5">
                  {card.featured && <Badge variant="copper" size="sm">⭐ Featured</Badge>}
                  {card.verified && <Badge variant="brand" size="sm">✓ Verified</Badge>}
                </div>
              </div>

              {/* ── CARD DETAILS — on dark surface below photo ── */}
              <div className="bg-surface p-3 space-y-1.5">
                <div className="line-clamp-2 text-sm font-semibold leading-snug text-white">
                  {card.title}
                </div>
                {/* Price in copper — key visual accent */}
                <div className="text-base font-bold text-copper">{card.price}</div>
                <div className="flex items-center gap-1 text-xs text-ink-muted">
                  <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                  <span className="truncate">{card.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
