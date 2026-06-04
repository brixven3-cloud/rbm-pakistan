import { MarketingNav } from '@/components/marketing/nav'
import { HeroSection } from '@/components/marketing/hero'
import { SearchBar } from '@/components/marketing/search-bar'
import { CityGrid } from '@/components/marketing/city-grid'
import { QuickActions } from '@/components/marketing/quick-actions'
import { FeaturedListings } from '@/components/marketing/featured-listings'
import { TrustStrip } from '@/components/marketing/trust-strip'
import { MarketingFooter } from '@/components/marketing/footer'
import { BottomNav } from '@/components/marketing/bottom-nav'
import { AiButton } from '@/components/marketing/ai-button'

export default function HomePage() {
  return (
    // pb-20 keeps content above the fixed bottom nav on mobile
    <div className="min-h-screen bg-page pb-20 md:pb-0">
      <MarketingNav />

      <main>
        {/* 1. Hero — primary-soft bg */}
        <HeroSection />

        {/* 2-4. Search + city grid + quick actions */}
        <div className="container-page space-y-8 py-6">
          <SearchBar />
          <CityGrid />
          <QuickActions />
        </div>

        {/* 5. Featured listings — edge-to-edge scroll on mobile */}
        <FeaturedListings />

        {/* 6. Trust strip */}
        <TrustStrip />

        {/* 7. Footer (navy) */}
        <MarketingFooter />
      </main>

      {/* Floating AI button — above bottom nav */}
      <AiButton />

      {/* Mobile bottom navigation */}
      <BottomNav />
    </div>
  )
}
