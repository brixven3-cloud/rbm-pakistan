import { MarketingNav } from '@/components/marketing/nav'
import { HeroSection } from '@/components/marketing/hero'
import { MakeWebsiteBtn } from '@/components/marketing/make-website-btn'
import { AdsBanner } from '@/components/marketing/ads-banner'
import { AllPakistanBtn } from '@/components/marketing/all-pakistan-btn'
import { CityGrid } from '@/components/marketing/city-grid'
import { FeaturedListings } from '@/components/marketing/featured-listings'
import { MarketingFooter } from '@/components/marketing/footer'
import { BottomNav } from '@/components/marketing/bottom-nav'
import { AnimatedSection } from '@/components/marketing/animated-section'

export default function HomePage() {
  return (
    // Outermost canvas — solid #08090B as fallback
    <div className="min-h-screen bg-canvas">

      {/* ── Ambient copper glow at top — fixed, subtle, never neon ── */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-96"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(221,122,78,0.16) 0%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* ── Page content on warm radial gradient ── */}
      <div className="relative z-10 min-h-screen bg-page-grad pb-20 md:pb-0">

        {/* Sticky nav */}
        <MarketingNav />

        {/* All sections on single dark canvas — no light zone */}
        <div className="container-page space-y-4 pt-3 pb-6">

          {/* 1. Search bar */}
          <HeroSection />

          {/* 2. Make Website CTA (dealer entry, copper card) */}
          <AnimatedSection delay={0.04}>
            <MakeWebsiteBtn />
          </AnimatedSection>

          {/* 3. Ads banner slider (admin-managed in M6) */}
          <AnimatedSection delay={0.08}>
            <AdsBanner />
          </AnimatedSection>

          {/* 4. All Pakistan market */}
          <AnimatedSection delay={0.11}>
            <AllPakistanBtn />
          </AnimatedSection>

        </div>

        {/* 5. Featured listings — edge-to-edge horizontal scroll, bright photos */}
        <AnimatedSection delay={0.14}>
          <FeaturedListings />
        </AnimatedSection>

        {/* 6. Browse by city */}
        <div className="container-page pt-6 pb-4">
          <AnimatedSection delay={0.17}>
            <CityGrid />
          </AnimatedSection>
        </div>

        {/* 7. Footer — darkest surface, Brixven.com · 2026 */}
        <MarketingFooter />
      </div>

      {/* Fixed bottom nav: dark canvas bg, copper active, center AI FAB */}
      <BottomNav />
    </div>
  )
}
