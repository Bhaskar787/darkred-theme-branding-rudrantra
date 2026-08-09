import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { TrustStrip } from '@/components/TrustStrip';
import { SacredCollections } from '@/components/SacredCollections';
import { WhyChoose } from '@/components/WhyChoose';
import { NewLaunchesBanner } from '@/components/NewLaunchesBanner';
import { BestSellers } from '@/components/BestSellers';
import { ChooseByIntention } from '@/components/ChooseByIntention';
import { CategoryShowcase } from '@/components/CategoryShowcase';
import { PromoBanners } from '@/components/PromoBanners';
import { RudrakshaGuide } from '@/components/RudrakshaGuide';
import { SpiritualCalendar } from '@/components/SpiritualCalendar';
import { AuthenticityGrid } from '@/components/AuthenticityGrid';
import { CustomizeOrder } from '@/components/Customizeorder';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { FAQ } from '@/components/FAQ';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { MenuDrawer } from '@/components/MenuDrawer';
import { TrustPaymentBar } from '@/components/TrustPaymentBar';
import { FloatingActions } from '@/components/FloatingActions';
import { SearchOverlay } from '@/components/SearchOverlay';
import { CartDrawer } from '@/components/CartDrawer';
import { WishlistDrawer } from '@/components/WishlistDrawer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <HeroSlider />
        <TrustStrip />
        <SacredCollections />
        <WhyChoose />
        <NewLaunchesBanner />
        <BestSellers />
        <ChooseByIntention />
        <CategoryShowcase />
        <PromoBanners />
        <RudrakshaGuide />
        <SpiritualCalendar />
        <AuthenticityGrid />
        <CustomizeOrder />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
      </main>

      <TrustPaymentBar />
      <Footer />

      {/* Global Overlays */}
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />

      {/* Floating action buttons: WhatsApp, Ask AI, Scroll-to-top */}
      <FloatingActions />
    </div>
  );
}