import Link from 'next/link'
import { MapPin } from 'lucide-react'

const CITIES = [
  { name: 'Lahore',      slug: 'lahore' },
  { name: 'Islamabad',   slug: 'islamabad' },
  { name: 'Karachi',     slug: 'karachi' },
  { name: 'Rawalpindi',  slug: 'rawalpindi' },
  { name: 'Faisalabad',  slug: 'faisalabad' },
  { name: 'Multan',      slug: 'multan' },
  { name: 'Peshawar',    slug: 'peshawar' },
  { name: 'Quetta',      slug: 'quetta' },
]

export function CityGrid() {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-ink">Browse by city</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/properties?city=${city.slug}`}
            // Copper-soft tile — NO dark box in the light content zone
            className="flex items-center gap-3 rounded-card border border-copper-border bg-copper-soft p-4 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-elevated active:scale-[0.98]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-input bg-white shadow-card">
              <MapPin className="h-4 w-4 text-copper" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-ink">{city.name}</div>
              <div className="text-2xs text-ink-muted">Opening soon</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
