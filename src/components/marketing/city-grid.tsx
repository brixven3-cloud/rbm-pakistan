import Link from 'next/link'
import { MapPin } from 'lucide-react'

// Cities from the seeded reference data — expanded per spec
const CITIES = [
  { name: 'Lahore',       slug: 'lahore',       count: 0 },
  { name: 'Islamabad',    slug: 'islamabad',    count: 0 },
  { name: 'Karachi',      slug: 'karachi',      count: 0 },
  { name: 'Rawalpindi',   slug: 'rawalpindi',   count: 0 },
  { name: 'Faisalabad',   slug: 'faisalabad',   count: 0 },
  { name: 'Multan',       slug: 'multan',       count: 0 },
  { name: 'Peshawar',     slug: 'peshawar',     count: 0 },
  { name: 'Quetta',       slug: 'quetta',       count: 0 },
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
            className="flex items-center gap-3 rounded-card border border-hairline bg-surface p-4 shadow-card transition-shadow hover:shadow-elevated"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-input bg-black">
              <MapPin className="h-4 w-4 text-gold" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-ink">{city.name}</div>
              <div className="text-2xs text-ink-muted">
                {city.count > 0 ? `${city.count} listings` : 'Opening soon'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
