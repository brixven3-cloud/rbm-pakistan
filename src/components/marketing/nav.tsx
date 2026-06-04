'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideDown } from '@/lib/motion'

const NAV_LINKS = [
  { label: 'Pricing',      href: '/pricing' },
  { label: 'How it works', href: '/how-it-works' },
]

export function MarketingNav() {
  const [open, setOpen] = useState(false)

  return (
    // Use the darkest charcoal so it matches the gradient end and looks seamless
    <header className="sticky top-0 z-40 bg-charcoal">
      <div className="container-page flex h-14 items-center">
        {/* Left: hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-btn p-2 text-white/60 transition-colors hover:text-white"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Center: logo + tagline */}
        <div className="flex flex-1 flex-col items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            {/* Copper logo mark — house-shaped "R" */}
            <div className="flex h-7 w-7 items-center justify-center rounded-btn bg-copper text-white shrink-0">
              <span className="text-xs font-bold leading-none select-none">R</span>
            </div>
            <span className="font-semibold text-white text-sm">RBM Pakistan</span>
          </Link>
          {/* Tagline — copper accent */}
          <span className="text-2xs font-medium text-copper tracking-wider">
            har property, ek jagah
          </span>
        </div>

        {/* Right: search icon */}
        <button
          className="rounded-btn p-2 text-white/60 transition-colors hover:text-white"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-white/10 bg-charcoal-soft"
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-page space-y-0.5 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-btn px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-white/10 pt-3 space-y-2">
                <Link
                  href="/auth/login"
                  className="block rounded-btn px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="block rounded-btn bg-copper px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-copper-dark"
                  onClick={() => setOpen(false)}
                >
                  Get started free
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
