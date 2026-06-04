'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, MapPin, Bookmark, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AiFab } from '@/components/marketing/ai-button'

const LEFT_ITEMS = [
  { icon: Home,   label: 'Home',   href: '/' },
  { icon: MapPin, label: 'Cities', href: '/cities' },
]
const RIGHT_ITEMS = [
  { icon: Bookmark, label: 'Saved',   href: '/saved' },
  { icon: User,     label: 'Profile', href: '/profile' },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-hairline md:hidden"
      aria-label="Mobile navigation"
    >
      {/* AI FAB — raised above nav bar, centered */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center gap-0.5">
        <AiFab />
        <span className="text-2xs font-medium text-charcoal">Ask AI</span>
      </div>

      {/* Nav items row */}
      <div className="flex h-16 items-center pb-safe">
        {/* Left: Home, Cities */}
        <div className="flex flex-1 items-center justify-around">
          {LEFT_ITEMS.map(({ icon: Icon, label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 py-1 min-w-[48px]"
                aria-current={active ? 'page' : undefined}
              >
                <Icon
                  className={cn('h-5 w-5 transition-colors', active ? 'text-copper' : 'text-ink-faint')}
                  aria-hidden
                />
                <span
                  className={cn('text-2xs font-medium transition-colors', active ? 'text-copper' : 'text-ink-faint')}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Center spacer so items don't crowd behind the FAB */}
        <div className="w-16 shrink-0" aria-hidden />

        {/* Right: Saved, Profile */}
        <div className="flex flex-1 items-center justify-around">
          {RIGHT_ITEMS.map(({ icon: Icon, label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 py-1 min-w-[48px]"
                aria-current={active ? 'page' : undefined}
              >
                <Icon
                  className={cn('h-5 w-5 transition-colors', active ? 'text-copper' : 'text-ink-faint')}
                  aria-hidden
                />
                <span
                  className={cn('text-2xs font-medium transition-colors', active ? 'text-copper' : 'text-ink-faint')}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
