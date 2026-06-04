'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Grid3X3, Search, Bookmark, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { icon: Home,     label: 'Home',     href: '/' },
  { icon: Grid3X3,  label: 'Projects', href: '/projects' },
  { icon: Search,   label: 'Search',   href: '/properties' },
  { icon: Bookmark, label: 'Saved',    href: '/saved' },
  { icon: User,     label: 'Profile',  href: '/profile' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-black md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex h-16 items-center justify-around pb-safe">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className="flex min-w-[44px] flex-col items-center gap-0.5 py-1"
              aria-current={active ? 'page' : undefined}
            >
              <Icon
                className={cn('h-5 w-5 transition-colors', active ? 'text-gold' : 'text-dark-muted')}
                aria-hidden
              />
              <span
                className={cn('text-2xs font-medium transition-colors', active ? 'text-gold' : 'text-dark-muted')}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
