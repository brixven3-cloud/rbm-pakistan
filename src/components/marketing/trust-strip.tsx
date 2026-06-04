import { ShieldCheck, Globe2, Zap } from 'lucide-react'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Verified dealers',
    desc: 'Every listing comes from a verified real estate professional',
  },
  {
    icon: Globe2,
    title: 'All of Pakistan',
    desc: 'Lahore, Karachi, Islamabad, Rawalpindi and beyond',
  },
  {
    icon: Zap,
    title: 'Instant dealer websites',
    desc: 'Every dealer gets their own site at {name}.rbmpakistan.com',
  },
]

export function TrustStrip() {
  return (
    <section className="mt-12 border-t border-hairline bg-surface py-12">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-card bg-primary-soft">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy">{title}</div>
                <div className="mt-1 text-sm text-ink-muted leading-body">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
