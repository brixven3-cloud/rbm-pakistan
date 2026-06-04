import { MarketingNav } from '@/components/marketing/nav'
import { HeroSection } from '@/components/marketing/hero'
import { MakeWebsiteBtn } from '@/components/marketing/make-website-btn'
import { AdsBanner } from '@/components/marketing/ads-banner'
import { AllPakistanBtn } from '@/components/marketing/all-pakistan-btn'
import { BrowseProperties } from '@/components/marketing/browse-properties'
import { CityGrid } from '@/components/marketing/city-grid'
import { FeaturedListings } from '@/components/marketing/featured-listings'
import { TrustStrip } from '@/components/marketing/trust-strip'
import { MarketingFooter } from '@/components/marketing/footer'
import { BottomNav } from '@/components/marketing/bottom-nav'

export default function HomePage() {
  return (
    // pb-16 clears the fixed bottom nav on mobile
    <div className="min-h-screen bg-page pb-16 md:pb-0">

      {/* ═══════════ BLACK TOP ZONE ═══════════ */}
      {/* Sticky nav — must stay outside the overflow-hidden hero div */}
      <MarketingNav />

      {/* Hero band — black with elliptical curve at the bottom edge */}
      <div
        className="bg-black overflow-hidden pb-10"
        style={{
          borderBottomLeftRadius: '50% 60px',
          borderBottomRightRadius: '50% 60px',
        }}
      >
        <HeroSection />
      </div>

      {/* ═══════════ LIGHT CONTENT ZONE ═══════════ */}
      <main className="bg-page">
        <div className="container-page space-y-4 pt-5 pb-6">
          {/* 1. Dealer acquisition CTA */}
          <MakeWebsiteBtn />

          {/* 2. Ads banner slider (admin-managed in M6) */}
          <AdsBanner />

          {/* 3. All Pakistan Market entry */}
          <AllPakistanBtn />

          {/* 4. Browse by city */}
          <CityGrid />

          {/* 5. Browse by type + quick filters */}
          <BrowseProperties />
        </div>

        {/* 6. Featured listings — edge-to-edge horizontal scroll */}
        <FeaturedListings />

        {/* 7. Trust strip */}
        <TrustStrip />

        {/* 8. Footer (black, Brixven branding) */}
        <MarketingFooter />
      </main>

      {/* Fixed mobile bottom nav — 5 items, black bg, gold active */}
      <BottomNav />
    </div>
  )
}
