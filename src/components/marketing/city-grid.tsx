import Link from 'next/link'
import { MapPin } from 'lucide-react'

const CITIES = [
  { name: 'Lahore',     slug: 'lahore' },
  { name: 'Islamabad',  slug: 'islamabad' },
  { name: 'Karachi',    slug: 'karachi' },
  { name: 'Rawalpindi', slug: 'rawalpindi' },
  { name: 'Faisalabad', slug: 'faisalabad' },
  { name: 'Multan',     slug: 'multan' },
  { name: 'Peshawar',   slug: 'peshawar' },
  { name: 'Quetta',     slug: 'quetta' },
]

const FLOAT_CLASSES = ['card-float', 'card-float-2', 'card-float-3', 'card-float-4', 'card-float-5', 'card-float', 'card-float-2', 'card-float-3']

export function CityGrid() {
  return (
    <section>
      <h2 className="mb-3 text-base font-semibold text-white">Browse by city</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CITIES.map((city, i) => (
          <Link
            key={city.slug}
            href={`/properties?city=${city.slug}`}
            className={`flex items-center gap-3 rounded-card border border-hairline bg-surface p-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-copper/30 ${FLOAT_CLASSES[i]}`}
            style={{ boxShadow: '0 6px 16px rgba(0,0,0,0.35)' }}
          >
            {/* Copper-tinted icon tile */}
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-input"
              style={{
                background: 'rgba(221,122,78,0.14)',
                border: '1px solid rgba(221,122,78,0.22)',
              }}
            >
              <MapPin className="h-4 w-4 text-copper" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-white">{city.name}</div>
              <div className="text-2xs text-ink-muted">Opening soon</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
