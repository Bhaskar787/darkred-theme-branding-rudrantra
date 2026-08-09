import { useState, useEffect, useCallback } from 'react';
import { GiSpiralArrow } from 'react-icons/gi';
import { Sparkles, ArrowRight, Star, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/models/context/CartContext';
import { formatPrice } from '@/utils/utils';

interface NewLaunchItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
}

const newLaunches: NewLaunchItem[] = [
  {
    id: 'sacred-launch-1',
    name: '14 Mukhi Divine Siddha Kavach',
    subtitle: 'Handcrafted with rare Lord Hanuman energized beads for ultimate protection and courage.',
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 84,
    image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    badge: 'NEW LAUNCH',
  },
  {
    id: 'sacred-launch-2',
    name: 'Rare Pashupati Single Mukhi Locket',
    subtitle: 'Natural cashew-shaped bead encased in 925 sterling silver locket with GIA lab certificate.',
    price: 24500,
    originalPrice: 29990,
    rating: 5.0,
    reviews: 36,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=800&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'LIMITED EDITION',
  },
  {
    id: 'sacred-launch-3',
    name: 'Ekadash 11 Mukhi Japa Mala (108 Beads)',
    subtitle: 'Blessed in Pashupatinath Abhishekam. Aids fearlessness, focus, and meditation.',
    price: 8990,
    originalPrice: 11500,
    rating: 4.9,
    reviews: 52,
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    badge: 'FRESH ARRIVAL',
  },
];

import { Link } from 'wouter';

const collections = [
  { name: 'Rudraksha Bracelets', slug: 'rudraksha-bracelet', image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214' },
  { name: 'Combination & Kawach', slug: 'combinations-kawach', image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Siddha Mala', slug: 'siddha-mala', image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png' },
  { name: 'Rudraksha Mala', slug: 'rudraksha-mala', image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840' },
  { name: 'Rudraksha Beads', slug: 'rudraksha-beads', image: 'https://i.etsystatic.com/20350453/r/il/1c38f4/4937036824/il_570xN.4937036824_gxmx.jpg' },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
  }),
};

export function SacredCollections() {
  const { addToCart } = useCart();
  const [[current, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => {
      const nextIndex = (prev + newDirection + newLaunches.length) % newLaunches.length;
      return [nextIndex, newDirection];
    });
  }, []);

  const nextSlide = useCallback(() => paginate(1), [paginate]);
  const prevSlide = useCallback(() => paginate(-1), [paginate]);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isHovering, nextSlide]);

  const activeProduct = newLaunches[current];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f4ebd0] text-[#650a06] relative overflow-hidden border-b border-[#650a06]/20">
      {/* Soft Light Cream Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative Top OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#650a06]/20 to-transparent" />

      {/* Container aligned with Navbar max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 relative z-10">
        
        {/* Header Title Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3.5 sm:px-4 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
              ॐ Sacred Selections
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-[#650a06] tracking-tight font-bold">
              Explore Collections & New Arrivals
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#650a06]/85 font-body text-xs sm:text-sm md:text-sm max-w-md border-l-2 border-[#650a06]/30 pl-4 leading-relaxed font-medium">
              Hand-picked, lab-certified authentic Nepali Rudraksha items, energized for divine harmony.
            </p>
            <Link
              href="/all-products"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#650a06] text-[#f7e5d9] hover:bg-[#8a130c] transition-all rounded-xl font-heading font-bold text-xs uppercase tracking-wider shrink-0 shadow-md"
            >
              <span>All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* NEW LAUNCH ANIMATED SLIDER SHOWCASE (5 Columns) */}
          <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="order-1 lg:order-1 lg:col-span-5 relative h-full flex flex-col"
          >
            <div className="h-full min-h-[440px] sm:min-h-[460px] rounded-2xl sm:rounded-3xl border border-[#650a06]/20 bg-[#fdf8f4] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-lg">
              
              {/* Background Glow */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#650a06]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Control Bar: Launch Badge, Rating, Arrows */}
              <div className="flex items-center justify-between relative z-20 mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#650a06] text-[#f7e5d9] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-[#f7e5d9]" />
                  {activeProduct.badge}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#f7e5d9] border border-[#650a06]/30 px-2.5 py-1 rounded-full text-xs text-[#650a06]">
                    <Star className="w-3.5 h-3.5 fill-[#650a06]" />
                    <span className="font-bold text-[#650a06]">{activeProduct.rating}</span>
                    <span className="text-[#650a06]/60 text-[10px]">({activeProduct.reviews})</span>
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous launch product"
                      className="w-7 h-7 rounded-full border border-[#650a06]/30 bg-[#f7e5d9] text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all flex items-center justify-center cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next launch product"
                      className="w-7 h-7 rounded-full border border-[#650a06]/30 bg-[#f7e5d9] text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all flex items-center justify-center cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slide Content Area with 3-Second Framer Motion Animation */}
              <div className="relative flex-1 flex flex-col justify-between overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-between h-full"
                  >
                    {/* Featured Image Frame */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.5] w-full rounded-xl overflow-hidden border border-[#650a06]/20 shadow-md bg-[#f7e5d9] mb-3 sm:mb-4 group">
                      <img
                        src={activeProduct.image}
                        alt={activeProduct.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#650a06]/40 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Price Tag */}
                      <div className="absolute bottom-2.5 left-2.5 bg-[#f7e5d9]/95 border border-[#650a06]/30 backdrop-blur-md px-2.5 py-1.5 rounded-lg text-xs flex items-baseline gap-2 shadow-sm">
                        <span className="text-[#650a06]/50 line-through text-[11px]">
                          {formatPrice(activeProduct.originalPrice)}
                        </span>
                        <span className="text-[#650a06] font-bold text-sm sm:text-base">
                          {formatPrice(activeProduct.price)}
                        </span>
                      </div>
                    </div>

                    {/* Product Name & Subtitle */}
                    <div className="space-y-1">
                      <h3 className="font-display text-base sm:text-lg md:text-xl text-[#650a06] font-bold leading-snug">
                        {activeProduct.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-body text-[#650a06]/85 line-clamp-2 leading-relaxed font-medium">
                        {activeProduct.subtitle}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3 border-t border-[#650a06]/15 mt-3 flex items-center gap-2">
                      <button
                        onClick={() => addToCart(activeProduct)}
                        className="flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slide Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 pt-2 sm:pt-3 border-t border-[#650a06]/15 mt-2 sm:mt-3">
                {newLaunches.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage([idx, idx > current ? 1 : -1])}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === current
                        ? 'w-6 bg-[#650a06]'
                        : 'w-1.5 bg-[#650a06]/30 hover:bg-[#650a06]/60'
                    }`}
                    aria-label={`Go to launch product ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* CATEGORIES GRID: (7 Columns) */}
          <div className="order-2 lg:order-2 lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 h-full">
              {collections.map((item, i) => (
                <Link
                  key={i}
                  href={`/collection/${item.slug}`}
                  className="group flex flex-col justify-between h-full"
                >
                  <div className="aspect-square rounded-xl overflow-hidden border border-[#650a06]/20 relative shadow-md group-hover:border-[#650a06]/60 group-hover:-translate-y-1 transition-all duration-300 bg-[#fdf8f4]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[#650a06]/10 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#650a06]/50 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Index Number */}
                    <div className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full border border-[#650a06]/30 bg-[#f7e5d9]/90 backdrop-blur-sm flex items-center justify-center text-[#650a06] text-[10px] font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Hover Bottom Hairline */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#650a06] w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                  <span className="font-heading font-bold text-center text-xs sm:text-sm text-[#650a06] group-hover:text-[#8a130c] transition-colors mt-1">
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* View All Tile */}
              <Link href="/all-products" className="group flex flex-col justify-between h-full">
                <div className="aspect-square rounded-xl border border-[#650a06]/30 bg-[#fdf8f4] flex flex-col items-center justify-center gap-2 sm:gap-3 transition-all duration-300 group-hover:border-[#650a06] group-hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-full border border-[#650a06]/30 flex items-center justify-center text-[#650a06] group-hover:bg-[#650a06] group-hover:text-[#f7e5d9] transition-colors">
                    <GiSpiralArrow className="w-5 h-5" />
                  </div>
                  <span className="font-display font-bold text-xs sm:text-sm text-[#650a06]">
                    All Products
                  </span>
                </div>
                <span className="font-heading font-bold text-center text-xs text-transparent mt-1">View</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}