'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Bookmark, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { icon: Home,     label: 'Home',    href: '/' },
  { icon: Search,   label: 'Search',  href: '/properties' },
  { icon: Bookmark, label: 'Saved',   href: '/saved' },
  { icon: User,     label: 'Profile', href: '/profile' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-hairline bg-surface md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex h-16 items-center justify-around px-2 pb-safe">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className="flex min-w-[56px] flex-col items-center gap-0.5 py-1"
              aria-current={active ? 'page' : undefined}
            >
              <Icon
                className={cn(
                  'h-5 w-5 transition-colors',
                  active ? 'text-primary' : 'text-ink-faint'
                )}
                aria-hidden
              />
              <span
                className={cn(
                  'text-2xs font-medium transition-colors',
                  active ? 'text-primary' : 'text-ink-faint'
                )}
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
