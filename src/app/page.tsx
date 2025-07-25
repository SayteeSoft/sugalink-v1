import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import FeaturedProfiles from '@/components/landing/featured-profiles';
import Testimonials from '@/components/landing/testimonials';
import InfoSection from '@/components/landing/info-section';
import StatsSection from '@/components/landing/stats-section';
import AiToast from '@/components/landing/ai-toast';
import WhatIsSugar from '@/components/landing/what-is-sugar';
import SecuritySection from '@/components/landing/security-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProfiles />
        <Testimonials />
        <WhatIsSugar />
        <SecuritySection />
        <StatsSection />
        <AiToast />
      </main>
      <Footer />
    </div>
  );
}
