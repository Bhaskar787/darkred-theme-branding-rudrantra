import { useState, useEffect, useRef, ElementType } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GiPrayerBeads,
  GiByzantinTemple,
  GiFlowerEmblem,
  GiSpiralShell,
  GiBellShield,
  GiBowlSpiral,
  GiGemPendant,
  GiCrystalCluster,
  GiWaterDrop,
  GiLotusFlower,
  GiSun,
  GiShield,
  GiOpenTreasureChest,
} from 'react-icons/gi';
import { ArrowRight, Sparkles, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface BulletItem {
  icon: ElementType;
  text: string;
}

interface SpotlightSlide {
  id: string;
  categoryName: string;
  headlineMain: string;
  headlineItalic: string;
  description: string;
  startingPrice: string;
  bullets: BulletItem[];
  image: string;
  targetLink: string;
}

const SPOTLIGHT_SLIDES: SpotlightSlide[] = [
  {
    id: 'siddha-mala',
    categoryName: 'Siddha Mala',
    headlineMain: 'The Supreme',
    headlineItalic: 'Siddha Combination.',
    description:
      'Siddha Mala combines the divine blessings of 1 to 14 Mukhi beads, Gauri Shankar, and Ganesh Rudraksha. Chosen by spiritual seekers for holistic protection and prosperity.',
    startingPrice: 'Rs. 180,300.00',
    bullets: [
      { icon: GiPrayerBeads, text: 'Includes 1-14 Mukhi, Gauri Shankar & Ganesh beads.' },
      { icon: GiByzantinTemple, text: 'Sacred choice for serious sadhaks & practitioners.' },
      { icon: GiFlowerEmblem, text: '100% Pashupatinath temple energized & certified.' },
    ],
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    targetLink: '/collection/siddha-mala',
  },
  {
    id: 'rudraksha-beads',
    categoryName: 'Rudraksha Beads',
    headlineMain: 'Sacred',
    headlineItalic: 'Nepali Mukhis.',
    description:
      'Directly harvested from Arun Valley, Nepal. Certified Ek Mukhi to 21 Mukhi beads with numbered X-ray laboratory density certificates.',
    startingPrice: 'Rs. 3,499.00',
    bullets: [
      { icon: GiLotusFlower, text: '100% Natural & uncarved mature Nepal seeds.' },
      { icon: GiShield, text: 'Accompanied by numbered GIA / Government X-Ray certificate.' },
      { icon: GiSun, text: 'Energized with Somwar Vedic Abhishekam.' },
    ],
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=800&q=80',
    targetLink: '/collection/rudraksha-beads',
  },
  {
    id: 'gandaki-saligram',
    categoryName: 'Saligram',
    headlineMain: 'Divine',
    headlineItalic: 'Vishnu Grace.',
    description:
      'Authentic non-carved Saligram Shilas harvested directly from Muktinath and the sacred Gandaki riverbed in Nepal with natural Chakra formations.',
    startingPrice: 'Rs. 4,200.00',
    bullets: [
      { icon: GiSpiralShell, text: 'Natural Lakshmi Narayan & Sudarshan Chakra marks.' },
      { icon: Sparkles, text: 'Attracts Mahalakshmi grace & household stability.' },
      { icon: GiLotusFlower, text: 'Blessed with Tulsi Abhishekam by Nepal Pandits.' },
    ],
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    targetLink: '/collection/saligram',
  },
  {
    id: 'shankha-ghanti',
    categoryName: 'Shankha & Ghanti',
    headlineMain: 'Purifying',
    headlineItalic: 'Temple Sounds.',
    description:
      'Vamavarti Ritual Conch shells and hand-cast Panchdhatu temple bells that dispel negative vibrations and cleanse ambient energy during daily Aarti.',
    startingPrice: 'Rs. 2,150.00',
    bullets: [
      { icon: GiBellShield, text: 'Pure acoustic resonance clearing negative aura.' },
      { icon: GiSpiralShell, text: 'Natural ocean Conch shells with scriptural purity.' },
      { icon: GiSun, text: 'Essential for traditional morning & evening Shiv Puja.' },
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    targetLink: '/collection/shankha-ghanti',
  },
  {
    id: 'singing-bowls',
    categoryName: 'Singing Bowl',
    headlineMain: 'Resonant',
    headlineItalic: '432Hz Healing.',
    description:
      'Hand-hammered Himalayan bronze singing bowls tuned to 432Hz harmonic frequencies for deep meditation, sound bath healing, and chakra balancing.',
    startingPrice: 'Rs. 5,800.00',
    bullets: [
      { icon: GiBowlSpiral, text: 'Hand-beaten by master artisans in Kathmandu valley.' },
      { icon: GiFlowerEmblem, text: 'Sustained resonance for deep alpha-wave meditation.' },
      { icon: GiLotusFlower, text: 'Comes with organic wooden mallet & brocade cushion.' },
    ],
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    targetLink: '/collection/singing-bowls',
  },
  {
    id: 'vedic-gemstones',
    categoryName: 'Gemstone',
    headlineMain: 'Planetary',
    headlineItalic: 'Alignment.',
    description:
      'Unheated, untreated natural Vedic gemstones certified by gemological laboratories. Selected based on birth chart requirements to strengthen planetary lords.',
    startingPrice: 'Rs. 12,500.00',
    bullets: [
      { icon: GiGemPendant, text: '100% Natural, unheated gemstones with lab certificate.' },
      { icon: GiSun, text: 'Prescribed by Vedic astrologers for planetary remedies.' },
      { icon: GiShield, text: 'Custom 925 silver or gold ring & pendant setting.' },
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    targetLink: '/collection/gemstones',
  },
  {
    id: 'statue-sphatik',
    categoryName: 'Statue & Sphatik',
    headlineMain: 'Pure',
    headlineItalic: 'Crystal Radiance.',
    description:
      'Flawless Himalayan Sphatik (Quartz Crystal) Shivlings, Ganesha idols, and Panchdhatu murtis that amplify spiritual energy and cool planetary heat.',
    startingPrice: 'Rs. 3,200.00',
    bullets: [
      { icon: GiCrystalCluster, text: 'High clarity Himalayan Quartz Crystal for home altars.' },
      { icon: GiByzantinTemple, text: 'Removes Vastu defects and promotes peace of mind.' },
      { icon: Sparkles, text: 'Consecrated during Pashupatinath Somwar Puja.' },
    ],
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    targetLink: '/collection/statue-sphatik',
  },
  {
    id: 'pooja-samagri',
    categoryName: 'Pooja Samagri',
    headlineMain: 'Sacred',
    headlineItalic: 'Consecration Kits.',
    description:
      'Pashupatinath shrine consecrated sandalwood paste, original holy Gangajal, Bhasma, and natural oils required for daily Sadhana and bead care.',
    startingPrice: 'Rs. 1,490.00',
    bullets: [
      { icon: GiWaterDrop, text: '100% Pure Kasturi sandalwood & neem conditioning oil.' },
      { icon: GiWaterDrop, text: 'Authentic Gangajal sealed from holy Himalayan sources.' },
      { icon: GiSun, text: 'Complete care kit to preserve your Rudraksha for life.' },
    ],
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    targetLink: '/collection/pooja-samagri',
  },
];

export function FeaturedCollectionSpotlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Tab Scroll Refs & Horizontal-only scroll logic
  const activeTabRef = useRef<HTMLButtonElement | null>(null);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);

  // Smooth horizontal-only tab centering
  useEffect(() => {
    if (tabsContainerRef.current && activeTabRef.current) {
      const container = tabsContainerRef.current;
      const tab = activeTabRef.current;
      const scrollLeft = tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  const scrollCategoryTabs = (direction: 'left' | 'right') => {
    if (tabsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SPOTLIGHT_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = SPOTLIGHT_SLIDES[activeIndex];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] border-b border-[#650a06]/20 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#650a06]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#650a06]/5 blur-3xl pointer-events-none" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest mb-2.5 shadow-xs">
            <GiOpenTreasureChest className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#650a06]" /> Divine Treasury
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#650a06] font-bold">
            Sacred Artifacts Spotlight
          </h2>
        </div>

        {/* CATEGORY TABS BAR */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8">
          <button
            onClick={() => scrollCategoryTabs('left')}
            className="hidden sm:flex shrink-0 p-1.5 rounded-full bg-[#fdf8f4] text-[#650a06] hover:border-[#650a06] border border-[#650a06]/20 shadow-xs mr-1 transition-all z-10 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={tabsContainerRef}
            className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1.5 px-1 scroll-smooth w-full"
          >
            {SPOTLIGHT_SLIDES.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#650a06] text-[#f7e5d9] shadow-md border border-[#650a06]'
                      : 'bg-[#fdf8f4] text-[#650a06] hover:border-[#650a06] border border-[#650a06]/20'
                  }`}
                >
                  {slide.categoryName}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollCategoryTabs('right')}
            className="hidden sm:flex shrink-0 p-1.5 rounded-full bg-[#fdf8f4] text-[#650a06] hover:border-[#650a06] border border-[#650a06]/20 shadow-xs ml-1 transition-all z-10 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* SPOTLIGHT CARD CONTAINER */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-[#fdf8f4] rounded-2xl sm:rounded-3xl border border-[#650a06]/20 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
            
            {/* LEFT COLUMN: FULL COVER IMAGE */}
            <div className="lg:col-span-5 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[480px] overflow-hidden bg-[#f7e5d9] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeSlide.image}
                    alt={activeSlide.categoryName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Badges */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#650a06]/80 backdrop-blur-md rounded-full border border-[#f7e5d9]/30 text-[9px] sm:text-[10px] font-semibold text-[#f7e5d9] shadow-xs">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f7e5d9]" /> 100% Certified Original
              </div>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#650a06] text-[#f7e5d9] font-heading font-bold rounded-full text-[9px] sm:text-[10px] shadow-md">
                <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f7e5d9]" /> Lab Tested
              </div>
            </div>

            {/* RIGHT COLUMN: SLIDE CONTENT */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-6 xl:p-9 flex flex-col justify-between bg-[#fdf8f4] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between"
                >
                  {/* Category Tag, Title & Description */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] block">
                      {activeSlide.categoryName}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-[#650a06] font-bold leading-tight">
                      {activeSlide.headlineMain}{' '}
                      <span className="text-[#650a06] italic font-serif">
                        {activeSlide.headlineItalic}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#650a06]/85 font-body font-medium leading-relaxed">
                      {activeSlide.description}
                    </p>
                  </div>

                  {/* Bullet Highlights Grid */}
                  <div className="space-y-2 my-1 sm:my-2">
                    {activeSlide.bullets.map((bullet, idx) => {
                      const BulletIcon = bullet.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 shadow-xs"
                        >
                          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#650a06]/15 text-[#650a06] flex items-center justify-center shrink-0">
                            <BulletIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-[#650a06] leading-snug">
                            {bullet.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom Action Section */}
                  <div className="pt-3.5 border-t border-[#650a06]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mt-auto">
                    <div>
                      <span className="text-[10px] text-[#650a06]/70 uppercase tracking-wider block font-bold">
                        Starting Investment
                      </span>
                      <span className="font-serif text-lg sm:text-2xl font-bold text-[#650a06]">
                        {activeSlide.startingPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center">
                      <Link
                        href="/consultation"
                        className="px-4 py-2.5 sm:py-3 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 group cursor-pointer text-center whitespace-nowrap"
                      >
                        <span>Appointment</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#f7e5d9] group-hover:translate-x-0.5 transition-transform" />
                      </Link>

                      <Link
                        href={activeSlide.targetLink}
                        className="px-4 py-2.5 sm:py-3 bg-[#f7e5d9] border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 group cursor-pointer text-center whitespace-nowrap"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#650a06] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}