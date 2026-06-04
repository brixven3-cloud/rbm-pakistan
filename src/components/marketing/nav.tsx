'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { slideDown } from '@/lib/motion'

const NAV_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'How it works', href: '/how-it-works' },
]

export function MarketingNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-surface shadow-sticky">
      <div className="container-page flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-btn bg-primary text-white shrink-0">
            <span className="text-sm font-bold leading-none select-none">R</span>
          </div>
          <span className="font-semibold text-navy">RBM Pakistan</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop auth CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-ink-muted transition-colors hover:text-primary"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center rounded-btn bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-btn p-2 text-navy transition-colors hover:bg-surface-soft md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-hairline bg-surface md:hidden"
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-label="Mobile navigation"
          >
            <div className="container-page space-y-1 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-btn px-3 py-2 text-sm text-ink transition-colors hover:bg-surface-soft"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 border-t border-hairline pt-3 space-y-2">
                <Link
                  href="/auth/login"
                  className="block rounded-btn px-3 py-2 text-sm text-ink transition-colors hover:bg-surface-soft"
                  onClick={() => setOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/signup"
                  className="block rounded-btn bg-primary px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-dark"
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
