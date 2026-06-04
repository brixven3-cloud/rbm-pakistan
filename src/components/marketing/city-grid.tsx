import Link from 'next/link'
import { MapPin } from 'lucide-react'

// Seeded from the database — hard-coded for M1, fetched dynamically from M3
const CITIES = [
  { name: 'Lahore',      slug: 'lahore',      count: 0 },
  { name: 'Islamabad',   slug: 'islamabad',   count: 0 },
  { name: 'Karachi',     slug: 'karachi',     count: 0 },
  { name: 'Rawalpindi',  slug: 'rawalpindi',  count: 0 },
]

export function CityGrid() {
  return (
    <section>
      <h2 className="mb-4 text-base font-semibold text-navy">Popular cities</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/properties?city=${city.slug}`}
            className="flex items-center gap-3 rounded-card border border-hairline bg-surface p-4 shadow-card transition-shadow hover:shadow-elevated"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-input bg-primary-soft">
              <MapPin className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-navy">{city.name}</div>
              <div className="text-2xs text-ink-muted">
                {city.count > 0 ? `${city.count} listings` : 'Launching soon'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
