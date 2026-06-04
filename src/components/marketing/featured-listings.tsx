import { Badge } from '@/components/ui'
import { MapPin } from 'lucide-react'

// Placeholder cards — replaced with real Supabase data in M3
const PLACEHOLDER = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? '10 Marla House for Sale' : '5 Marla Plot Available',
  price: i % 2 === 0 ? 'Rs. 2.5 Crore' : 'Rs. 85 Lakh',
  location: i % 3 === 0 ? 'DHA Phase 5, Lahore' : i % 3 === 1 ? 'Bahria Town, Islamabad' : 'DHA Phase 6, Karachi',
  type: i % 2 === 0 ? 'House' : 'Plot',
  featured: i === 0 || i === 3,
  verified: i === 1,
}))

export function FeaturedListings() {
  return (
    <section className="mt-6">
      <div className="container-page mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-ink">Featured listings</h2>
        <button className="text-sm font-medium text-gold transition-colors hover:text-gold-dark">
          View all
        </button>
      </div>

      {/* Edge-to-edge horizontal scroll on mobile */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex gap-3 overflow-x-auto px-4 pb-3 sm:px-6 lg:px-8 scrollbar-hide">
          {PLACEHOLDER.map((card) => (
            <article
              key={card.id}
              className="w-56 shrink-0 rounded-card border border-hairline bg-surface shadow-card transition-shadow hover:shadow-elevated sm:w-64"
            >
              {/* Image placeholder — dark gradient, property images sit on light bg in real cards */}
              <div className="relative h-36 overflow-hidden rounded-t-card bg-gradient-to-br from-black-soft to-black">
                <div className="absolute left-2 top-2 flex gap-1.5">
                  {card.featured && <Badge variant="gold" size="sm">⭐ Featured</Badge>}
                  {card.verified && <Badge variant="brand" size="sm">Verified</Badge>}
                </div>
              </div>

              <div className="space-y-1.5 p-3">
                <div className="line-clamp-2 text-sm font-semibold leading-snug text-ink">
                  {card.title}
                </div>
                {/* Price in gold — key visual highlight */}
                <div className="text-base font-bold text-gold">{card.price}</div>
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
