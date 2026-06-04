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
    <footer className="bg-navy">
      <div className="container-page py-10">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-btn bg-primary text-white shrink-0">
            <span className="text-sm font-bold leading-none select-none">R</span>
          </div>
          <span className="font-semibold text-white">RBM Pakistan</span>
        </div>

        {/* Tagline */}
        <p className="mb-6 max-w-sm text-sm text-white/60 leading-body">
          Pakistan's real estate SaaS — every dealer gets their own website, listings, and
          leads in one place.
        </p>

        {/* Links */}
        <nav className="mb-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">© 2025 RBM Pakistan. All rights reserved.</p>
          <p className="text-xs text-white/30">
            Made in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  )
}
