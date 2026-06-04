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
import { AnimatedSection } from '@/components/marketing/animated-section'

export default function HomePage() {
  return (
    // pb-16 clears the fixed bottom nav on mobile
    <div className="min-h-screen bg-page pb-16 md:pb-0">

      {/* ════════════ CHARCOAL HEADER BAND ════════════ */}
      {/* Sticky nav — kept outside overflow:hidden so it stays truly sticky */}
      <MarketingNav />

      {/* Hero zone: charcoal gradient with elliptical curve at the bottom edge */}
      <div
        className="bg-header-grad overflow-hidden pb-10"
        style={{
          borderBottomLeftRadius: '50% 60px',
          borderBottomRightRadius: '50% 60px',
        }}
      >
        <HeroSection />
      </div>

      {/* ════════════ LIGHT CONTENT ZONE ════════════ */}
      {/* Light-first: copper-soft tinted tiles only — no dark boxes below the curve */}
      <main className="bg-page">
        <div className="container-page space-y-4 pt-5 pb-6">

          {/* 1. Dealer acquisition CTA — most prominent, top of zone */}
          <AnimatedSection delay={0}>
            <MakeWebsiteBtn />
          </AnimatedSection>

          {/* 2. Ads banner (admin-managed in M6; placeholder content now) */}
          <AnimatedSection delay={0.05}>
            <AdsBanner />
          </AnimatedSection>

          {/* 3. All Pakistan market entry */}
          <AnimatedSection delay={0.08}>
            <AllPakistanBtn />
          </AnimatedSection>

          {/* 4. Browse by city */}
          <AnimatedSection delay={0.11}>
            <CityGrid />
          </AnimatedSection>

          {/* 5. Browse by type + quick filter chips */}
          <AnimatedSection delay={0.14}>
            <BrowseProperties />
          </AnimatedSection>

        </div>

        {/* 6. Featured listings — edge-to-edge horizontal scroll */}
        <AnimatedSection delay={0.16}>
          <FeaturedListings />
        </AnimatedSection>

        {/* 7. Trust strip */}
        <AnimatedSection delay={0}>
          <TrustStrip />
        </AnimatedSection>

        {/* 8. Footer — charcoal, Powered by Brixven.com · 2026 */}
        <MarketingFooter />
      </main>

      {/* Fixed bottom nav: light/white, copper active, center AI FAB */}
      <BottomNav />
    </div>
  )
}
