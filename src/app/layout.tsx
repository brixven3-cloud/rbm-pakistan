import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: '#0F9D7A',
}

export const metadata: Metadata = {
  title: {
    default: 'RBM Pakistan — Real Estate for Dealers & Agents',
    template: '%s | RBM Pakistan',
  },
  description:
    'Find properties across Pakistan. Get your own real estate website in minutes — manage listings, leads, and subscriptions.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    siteName: 'RBM Pakistan',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="min-h-screen bg-page font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
