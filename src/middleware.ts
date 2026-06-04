import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware-client'

// Subdomains reserved for platform use — dealers cannot register these slugs.
// Keep in sync with the reserved_slugs seed in the database migration.
export const RESERVED_SUBDOMAINS = new Set([
  'www', 'app', 'api', 'admin', 'mail', 'static',
  'cdn', 'assets', 'support', 'help', 'status', 'webhook',
])

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'rbmpakistan.com'

  // Strip port (localhost:3000 → localhost)
  const host = hostname.replace(new RegExp(`:${process.env.PORT ?? 3000}$`), '')

  // Extract subdomain
  // 'demo.rbmpakistan.com' → 'demo'
  // 'rbmpakistan.com' or 'localhost' → null
  const subdomain = host.endsWith(`.${rootDomain}`)
    ? host.slice(0, -(rootDomain.length + 1))
    : null

  // ── M3: Full subdomain routing replaces this comment block ──────────────
  //
  //  null | 'www'  → marketing site
  //                  www: redirect to root domain
  //  'app'         → (dashboard) route group, auth guard added in M2
  //  RESERVED      → 404 / reserved page
  //  else          → dealer site: rewrite to /_sites/{slug}
  //                  set x-dealer-slug header for server components
  //                  Unavailable state handled inside _sites/[slug]/layout.tsx
  //
  // ─────────────────────────────────────────────────────────────────────────

  // M1: Refresh session on every request (required for Supabase Auth)
  const response = await updateSession(request)

  // Pass routing metadata to server components via headers
  response.headers.set('x-hostname', host)
  if (subdomain) response.headers.set('x-subdomain', subdomain)

  return response
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}
