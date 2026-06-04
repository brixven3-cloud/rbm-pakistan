import Link from 'next/link'
import { PlusCircle, Bookmark, Map } from 'lucide-react'

const ACTIONS = [
  { icon: PlusCircle, label: 'List property', href: '/auth/signup' },
  { icon: Bookmark,   label: 'Saved',         href: '/saved' },
  { icon: Map,        label: 'Map view',       href: '/map' },
]

export function QuickActions() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-3">
        {ACTIONS.map(({ icon: Icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex flex-col items-center gap-2 rounded-card border border-hairline bg-surface p-4 shadow-card transition-all hover:shadow-elevated"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-input bg-black">
              <Icon className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <span className="text-center text-2xs font-medium leading-tight text-ink-muted">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
