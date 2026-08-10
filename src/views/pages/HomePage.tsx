import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { HeroSlider } from '@/views/components/HeroSlider';
import { TrustStrip } from '@/views/components/TrustStrip';
import { SacredCollections } from '@/views/components/SacredCollections';
import { WhyChoose } from '@/views/components/WhyChoose';
import { NewLaunchesBanner } from '@/views/components/NewLaunchesBanner';
import { BestSellers } from '@/views/components/BestSellers';
import { ChooseByIntention } from '@/views/components/ChooseByIntention';
import { CategoryShowcase } from '@/views/components/CategoryShowcase';
import { PromoBanners } from '@/views/components/PromoBanners';
import { RudrakshaGuide } from '@/views/components/RudrakshaGuide';
import { SpiritualCalendar } from '@/views/components/SpiritualCalendar';
import { AuthenticityGrid } from '@/views/components/AuthenticityGrid';
import { CustomizeOrder } from '@/views/components/Customizeorder';
import { Testimonials } from '@/views/components/Testimonials';
import { Blog } from '@/views/components/Blog';
import { FAQ } from '@/views/components/FAQ';
import { Newsletter } from '@/views/components/Newsletter';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { TrustPaymentBar } from '@/views/components/TrustPaymentBar';
import { FloatingActions } from '@/views/components/FloatingActions';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { CartDrawer } from '@/views/components/CartDrawer';
import { FeaturedCollectionSpotlight } from '@/views/components/FeaturedCollectionSpotlight';
import { LeftReviewsDrawer } from '@/views/components/LeftReviewsDrawer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <HeroSlider />
        <TrustStrip />

<SacredCollections />
         <BestSellers />
         
       
        
       
         <FeaturedCollectionSpotlight />
        <NewLaunchesBanner />
        <CategoryShowcase />

        
        <ChooseByIntention />
        <WhyChoose />
     
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
      <LeftReviewsDrawer />

      {/* Floating action buttons: WhatsApp, Ask AI, Scroll-to-top */}
      <FloatingActions />
    </div>
  );
}