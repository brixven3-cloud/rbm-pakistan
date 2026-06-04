import Link from 'next/link'

const LINKS = [
  { label: 'About',   href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Terms',   href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
]

export function MarketingFooter() {
  return (
    <footer className="bg-black">
      <div className="container-page py-10">
        {/* Logo */}
        <div className="mb-5 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-btn bg-gold text-black shrink-0">
            <span className="text-sm font-bold leading-none select-none">R</span>
          </div>
          <span className="font-semibold text-white">RBM Pakistan</span>
        </div>

        {/* Tagline */}
        <p className="mb-6 max-w-sm text-sm leading-body text-white/50">
          Pakistan&apos;s real estate platform — every dealer gets their own website, listings,
          and leads in one place.
        </p>

        {/* Nav links */}
        <nav className="mb-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/40 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="flex flex-col gap-1.5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">© 2026 RBM Pakistan. All rights reserved.</p>
          <p className="text-xs text-white/25">
            Powered by{' '}
            <a
              href="https://brixven.com"
              className="text-white/40 transition-colors hover:text-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brixven.com
            </a>
            {' · '}2026
          </p>
        </div>
      </div>
    </footer>
  )
}
