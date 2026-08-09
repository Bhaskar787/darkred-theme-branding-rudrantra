import { useState, useEffect, useCallback, useRef } from 'react';
import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { formatPrice } from '@/utils/utils';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { MdLocalOffer } from 'react-icons/md';

interface LaunchedProduct {
  id: string;
  name: string;
  tagline: string;
  mukhi: string;
  origin: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  stockLeft: number;
  image: string;
  badge: string;
  certNo: string;
  highlights: string[];
}

const launchedProducts: LaunchedProduct[] = [
  {
    id: 'launch-1',
    name: '14 Mukhi Hanuman Siddha Bracelet',
    tagline: 'Fresh Arun Valley Harvest, Pure Silver Capped',
    mukhi: '14 Mukhi',
    origin: 'Nepal',
    price: 38500,
    originalPrice: 45000,
    rating: 5.0,
    reviews: 42,
    stockLeft: 3,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'New Arrival',
    certNo: 'HR-1401',
    highlights: [
      'Ruled by Lord Hanuman and planet Saturn',
      'Traditionally worn for protection during Sade Sati',
      'X-ray lab report included with certificate',
    ],
  },
  {
    id: 'launch-2',
    name: 'Rare 1 Mukhi Savar Rudraksha Locket',
    tagline: "Collector's Grade, 925 Sterling Silver Locket",
    mukhi: '1 Mukhi Savar',
    origin: 'Nepal',
    price: 124900,
    originalPrice: 145000,
    rating: 5.0,
    reviews: 18,
    stockLeft: 1,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=800&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'Limited Release',
    certNo: 'HR-0102',
    highlights: [
      'Natural cashew-shaped bead symbolizing Lord Shiva',
      'Encased in handcrafted 925 sterling silver locket',
      'Includes VIP Pashupatinath puja certificate',
    ],
  },
  {
    id: 'launch-3',
    name: '11 Mukhi Ekadash Rudra Mala, 108 Beads',
    tagline: 'Hand-Strung on Silk, Energized in Abhishekam',
    mukhi: '11 Mukhi',
    origin: 'Nepal',
    price: 14990,
    originalPrice: 18500,
    rating: 4.9,
    reviews: 29,
    stockLeft: 5,
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    badge: 'Fresh Launch',
    certNo: 'HR-1108',
    highlights: [
      'Carries the strength of the eleven Rudras',
      'Knotted on red silk thread with a silver guru bead',
      'Includes a complimentary neem oil care kit',
    ],
  },
  {
    id: 'launch-4',
    name: 'Akshamala Masterpiece, 1 to 21 Mukhi Set',
    tagline: 'The Complete Devotional Collection',
    mukhi: '1 to 21 Mukhi',
    origin: 'Nepal',
    price: 299000,
    originalPrice: 350000,
    rating: 5.0,
    reviews: 9,
    stockLeft: 2,
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    badge: 'Exclusive Edition',
    certNo: 'HR-2101',
    highlights: [
      'The complete 21-mukhi energy matrix in one mala',
      'Hand-selected by Arun Valley elders over three years',
      'Includes a one-on-one astrologer consultation',
    ],
  },
];

const AUTOPLAY_MS = 6000;

export function NewLaunchesBanner() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [[current, direction], setPage] = useState([0, 0]);
  const [isHovering, setIsHovering] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % launchedProducts.length, 1]);
    setProgressKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setPage(([prev]) => [(prev - 1 + launchedProducts.length) % launchedProducts.length, -1]);
    setProgressKey((k) => k + 1);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setPage(([prev]) => [index, index > prev ? 1 : -1]);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isHovering, nextSlide]);

  const activeProduct = launchedProducts[current];
  const isSaved = isInWishlist(activeProduct.id);
  const discount = Math.round(
    ((activeProduct.originalPrice - activeProduct.price) / activeProduct.originalPrice) * 100
  );

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f4ebd0] text-[#650a06] relative overflow-hidden border-b border-[#650a06]/20">
      {/* Soft Light Cream Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3.5 py-1 rounded-full mb-2 sm:mb-3">
              <MdLocalOffer className="w-3.5 h-3.5 text-[#650a06]" />
              Exclusive Release
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display text-[#650a06] tracking-tight font-bold">
              Arun Valley Vault Collection
            </h2>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous piece"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f7e5d9] hover:bg-[#650a06] text-[#650a06] hover:text-[#f7e5d9] transition-all duration-300 backdrop-blur-md flex items-center justify-center cursor-pointer border border-[#650a06]/30 shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next piece"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f7e5d9] hover:bg-[#650a06] text-[#650a06] hover:text-[#f7e5d9] transition-all duration-300 backdrop-blur-md flex items-center justify-center cursor-pointer border border-[#650a06]/30 shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MAIN SLIDER CARD CONTAINER */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (delta > 50) prevSlide();
            else if (delta < -50) nextSlide();
            touchStartX.current = null;
          }}
          className="relative rounded-2xl sm:rounded-3xl bg-[#fdf8f4] border-2 border-[#650a06]/30 overflow-hidden shadow-xl pb-14 lg:pb-0 text-[#650a06]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* LEFT COLUMN: COVER IMAGE */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full overflow-hidden group shrink-0 bg-[#f7e5d9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#650a06]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#fdf8f4]/90" />
                </motion.div>
              </AnimatePresence>

              {/* Certified Seal Badge */}
              <motion.div
                key={`seal-${current}`}
                initial={{ opacity: 0, scale: 1.5, rotate: -18 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                transition={{ duration: 0.35, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#650a06] border-2 border-[#f7e5d9] flex flex-col items-center justify-center text-center shadow-xl text-[#f7e5d9]"
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f7e5d9] mb-0.5" />
                <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider leading-tight">
                  Certified
                </span>
                <span className="text-[7px] sm:text-[8px] font-mono opacity-90 leading-tight">
                  {activeProduct.certNo}
                </span>
              </motion.div>

              {/* Wishlist Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(activeProduct);
                }}
                aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                className="absolute bottom-14 left-4 sm:bottom-16 sm:left-5 z-30 w-10 h-10 bg-[#f7e5d9] border-2 border-[#650a06]/40 rounded-full flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all shadow-md cursor-pointer"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#650a06] text-[#650a06]' : ''}`} />
              </button>
            </div>

            {/* RIGHT COLUMN: CONTENT AREA */}
            <div className="lg:col-span-7 p-4 sm:p-8 lg:p-10 pb-14 sm:pb-20 lg:pb-16 flex flex-col justify-between space-y-4 sm:space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Badge & Meta */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] text-xs font-heading font-bold uppercase tracking-wider">
                      {activeProduct.badge}
                    </span>
                    <span className="text-xs text-[#650a06]/80 font-heading font-semibold">
                      {activeProduct.origin} · {activeProduct.mukhi}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-[#650a06] leading-snug">
                      {activeProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#650a06]/85 italic">
                      {activeProduct.tagline}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[#650a06]">
                      {[...Array(5)].map((_, i) => (
                        <GiStarSattelites
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.round(activeProduct.rating) ? 'text-[#650a06] fill-[#650a06]' : 'text-[#650a06]/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-[#650a06]/80 font-medium">
                      {activeProduct.rating.toFixed(1)} ({activeProduct.reviews} verified reviews)
                    </span>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-1 sm:pt-2">
                    {activeProduct.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#650a06] shrink-0" />
                        <span className="text-xs sm:text-sm text-[#650a06]/90 font-body leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action Section */}
                  <div className="pt-4 border-t border-[#650a06]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2.5">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">
                          {formatPrice(activeProduct.price)}
                        </span>
                        <span className="text-xs sm:text-sm text-[#650a06]/50 line-through">
                          {formatPrice(activeProduct.originalPrice)}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#650a06]/10 text-[#650a06] text-xs font-heading font-bold">
                          {discount}% OFF
                        </span>
                      </div>
                      <span className="text-xs text-[#650a06]/70 flex items-center gap-1.5 mt-1 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#650a06] animate-pulse" />
                        Only {activeProduct.stockLeft} item(s) left in stock
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto">
                      <button
                        onClick={() => addToCart(activeProduct)}
                        className="flex-1 sm:flex-none px-6 py-3 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </button>

                      <Link
                        href={`/product/${activeProduct.id}`}
                        className="flex-1 sm:flex-none px-5 py-3 bg-[#f7e5d9] hover:bg-[#650a06] hover:text-[#f7e5d9] text-[#650a06] border border-[#650a06]/30 font-heading font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Progress Bar & Slide Dots */}
          <div className="absolute bottom-0 inset-x-0 px-4 sm:px-6 py-3 bg-[#f7e5d9] border-t border-[#650a06]/20 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              {launchedProducts.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className="relative w-6 h-6 flex items-center justify-center cursor-pointer"
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      idx === current
                        ? 'w-3.5 h-3.5 bg-[#650a06]'
                        : 'w-2 h-2 bg-[#650a06]/30 hover:bg-[#650a06]/60'
                    }`}
                  />
                  {idx === current && !isHovering && (
                    <svg className="absolute -inset-1 w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                      <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(101,10,6,0.2)" strokeWidth="1.5" />
                      <motion.circle
                        key={progressKey}
                        cx="16"
                        cy="16"
                        r="13"
                        fill="none"
                        stroke="#650a06"
                        strokeWidth="1.5"
                        strokeDasharray={2 * Math.PI * 13}
                        initial={{ strokeDashoffset: 2 * Math.PI * 13 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            <span className="text-xs font-heading font-bold text-[#650a06] tracking-wider">
              {String(current + 1).padStart(2, '0')} / {String(launchedProducts.length).padStart(2, '0')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}