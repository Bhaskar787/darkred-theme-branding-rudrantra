import { useEffect } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { TrustPaymentBar } from '@/views/components/TrustPaymentBar';
import { Link } from 'wouter';
import { ChevronRight, ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import { mukhis } from '@/models/data/mukhi';
import { MukhiCardGrid } from '@/views/components/MukhiCardGrid';

export default function MukhiGuidePage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#faf7f2] text-[#650a06]">
      {/* Top Header & Navigation */}
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 bg-[#faf7f2]">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#ffffff] text-[#650a06] py-4 border-b border-[#650a06]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#650a06]/80 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]/60" />
            <span className="text-[#650a06] font-bold">1 to 14 Mukhi Sacred Guide</span>
          </div>
        </div>

        {/* Main Mukhi Guide Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#faf7f2] text-[#650a06] relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header Description */}
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 py-1.5 rounded-full mb-4 shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-[#650a06]" />
                Shiva Purana Knowledge
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-[#650a06] tracking-tight leading-tight font-bold">
                The Complete Language of Mukhi
              </h1>
              <p className="text-[#650a06]/85 font-body text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 px-2 font-medium">
                Discover all fourteen sacred configurations — their ruling deity, cosmic association, ruling planet, and metaphysical purpose as described in ancient Vedic scriptures.
              </p>
            </div>

            {/* Mukhi Card Grid Component */}
            <MukhiCardGrid items={mukhis} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Drawers & Overlays */}
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <FloatingActions />
    </div>
  );
}