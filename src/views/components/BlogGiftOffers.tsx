import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Gift, Flame, Clock, ShoppingBag, X } from 'lucide-react';

interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  price: string;
  originalPrice: string;
  discount: string;
  image: string;
  perks: string;
  link: string;
}

const OFFERS: SpecialOffer[] = [
  {
    id: 'o1',
    title: '1 Mukhi Nepali Chandrakar Shila',
    subtitle: 'Lab Certified Ek Mukhi Bead with Sun Grace',
    badge: '19% OFF • TOP SELLER',
    price: '₹14,999',
    originalPrice: '₹18,500',
    discount: '19% OFF',
    image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    perks: 'Free 925 Silver Chain + Gangajal Kit',
    link: '/product/r1',
  },
  {
    id: 'o2',
    title: '1 to 14 Mukhi Complete Siddha Mala',
    subtitle: 'Royal Consecrated Power Combination',
    badge: '25% OFF • ROYAL COMBO',
    price: '₹48,000',
    originalPrice: '₹64,000',
    discount: '25% OFF',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    perks: 'Personalized Brahmin Consecration Certificate',
    link: '/all-products?category=Rudraksha %26 Variants',
  },
  {
    id: 'o3',
    title: 'Gandaki Saligram & Vamavarti Shankha',
    subtitle: 'Sacred Muktinath Shila & Conch Ritual Pair',
    badge: '15% OFF • HOLY SHILA PAIR',
    price: '₹8,500',
    originalPrice: '₹10,000',
    discount: '15% OFF',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    perks: 'Free Organic Sandalwood Paste & Brass Bell',
    link: '/all-products?category=Saligram',
  },
  {
    id: 'o4',
    title: 'Certified Yellow Sapphire Gemstone',
    subtitle: 'High Clarity Vedic Pukhraj for Jupiter Grace',
    badge: '20% OFF • IGI CERTIFIED',
    price: '₹22,500',
    originalPrice: '₹28,000',
    discount: '20% OFF',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    perks: 'Free Panchdhatu Ring & Energization Ritual',
    link: '/all-products?category=Gemstone',
  },
  {
    id: 'o5',
    title: '7 Chakra Tibetan Singing Bowl',
    subtitle: 'Hand-Hammered 432Hz Healing Bowl Set',
    badge: '18% OFF • SOUND HEALING',
    price: '₹6,800',
    originalPrice: '₹8,300',
    discount: '18% OFF',
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    perks: 'Free Wooden Mallet & Brocade Cushion',
    link: '/all-products?category=Singing Bowl',
  },
  {
    id: 'o6',
    title: 'Pure Quartz Crystal Sphatik Shivling',
    subtitle: 'High Clarity Himalayan Quartz for Home Altar',
    badge: '22% OFF • DIVINE SHIVLING',
    price: '₹4,200',
    originalPrice: '₹5,400',
    discount: '22% OFF',
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    perks: 'Consecrated during Somwar Abhishekam',
    link: '/all-products?category=Statue %26 Sphatik',
  },
  {
    id: 'o7',
    title: 'Pashupatinath Consecrated Pooja Kit',
    subtitle: 'Organic Kasturi Chandan, Gangajal & Akshata',
    badge: '30% OFF • RITUAL ESSENTIALS',
    price: '₹2,999',
    originalPrice: '₹4,200',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
    perks: 'Direct Consecrated Material from Nepal Shrine',
    link: '/all-products?category=Pooja Samagri',
  },
];

export function BlogGiftOffers() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [timer, setTimer] = useState({ hours: 3, minutes: 42, seconds: 18 });
  const arcContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  // Check if current page is in the blog section
  const isBlogPage = location.startsWith('/blog') || location.startsWith('/article');

  // AUTO-OPEN AFTER 3 SECONDS IF USER HAS NOT INTERACTED
  useEffect(() => {
    if (!isBlogPage) return;

    const autoOpenTimer = setTimeout(() => {
      if (!userInteracted) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(autoOpenTimer);
  }, [isBlogPage, userInteracted]);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // SMOOTH 1-BY-1 WHEEL & TOUCH SWIPE ROTATION
  useEffect(() => {
    const el = arcContainerRef.current;
    if (!el || !isOpen) return;

    // Desktop Mouse Wheel Scroll Handler
    const preventDefaultWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev < OFFERS.length - 1 ? prev + 1 : 0));
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : OFFERS.length - 1));
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 300);
    };

    // Mobile Touch Gesture Handlers
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null) return;
      e.preventDefault(); // Prevent page scroll when interacting with cards

      const currentY = e.touches[0].clientY;
      const diffY = touchStartYRef.current - currentY;

      if (Math.abs(diffY) > 25 && !isScrollingRef.current) {
        isScrollingRef.current = true;

        if (diffY > 0) {
          // Swipe Up -> Next Offer
          setActiveIndex((prev) => (prev < OFFERS.length - 1 ? prev + 1 : 0));
        } else {
          // Swipe Down -> Previous Offer
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : OFFERS.length - 1));
        }

        touchStartYRef.current = currentY;

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 300);
      }
    };

    const handleTouchEnd = () => {
      touchStartYRef.current = null;
    };

    el.addEventListener('wheel', preventDefaultWheel, { passive: false });
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: false });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('wheel', preventDefaultWheel);
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen]);

  if (!isBlogPage) return null;

  return (
    <>
      <style>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      {/* GIFT BOX TRIGGER & HIGH-PRIORITY CLOSE BUTTON */}
      <div
        className={`fixed right-3 sm:right-6 z-[120] flex items-center transition-all duration-300 ${
          isOpen ? 'top-28 sm:top-32 md:top-36' : 'top-1/2 -translate-y-1/2'
        }`}
      >
        {!isOpen ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setUserInteracted(true);
                setIsOpen(true);
              }}
              className="bg-[#f7e5d9] text-[#650a06] border border-[#650a06]/40 shadow-xl px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 animate-[gentle-float_2s_ease-in-out_infinite] hover:scale-105 transition-transform cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5 text-[#650a06] animate-pulse" />
              <span>Grab Special Offers!</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setUserInteracted(true);
                setIsOpen(true);
              }}
              aria-label="Open Special Offers"
              className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#650a06] text-[#f7e5d9] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 shrink-0 cursor-pointer"
            >
              <span className="absolute inset-0 rounded-full bg-[#650a06] animate-ping opacity-25" />
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 text-[#f7e5d9] animate-bounce" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setUserInteracted(true);
              setIsOpen(false);
            }}
            className="w-10 h-10 flex items-center justify-center bg-[#f7e5d9] text-[#650a06] border-2 border-[#650a06] shadow-2xl rounded-full hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* CURVED CIRCLE ARC CARDS WHEEL */}
      {isOpen && (
        <div
          ref={arcContainerRef}
          className="fixed top-1/2 -translate-y-1/2 right-2 sm:right-8 z-40 flex items-center justify-center select-none animate-in fade-in zoom-in-95 duration-500 touch-none"
        >
          <div className="relative w-[260px] xs:w-[280px] sm:w-[320px] h-[400px] sm:h-[500px] flex items-center justify-center">
            {OFFERS.map((offer, idx) => {
              let diff = idx - activeIndex;
              const total = OFFERS.length;
              if (diff > Math.floor(total / 2)) diff -= total;
              if (diff < -Math.floor(total / 2)) diff += total;

              let translateY = 0;
              let translateX = 0;
              let rotateDeg = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let isInteractive = true;

              const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
              const offsetY = isMobile ? 100 : 130;
              const offsetX = isMobile ? 25 : 40;

              if (diff === 0) {
                translateY = 0;
                translateX = 0;
                rotateDeg = 0;
                scale = 1;
                opacity = 1;
                zIndex = 40;
              } else if (diff === -1) {
                translateY = -offsetY;
                translateX = offsetX;
                rotateDeg = 10;
                scale = 0.84;
                opacity = 0.8;
                zIndex = 30;
              } else if (diff === 1) {
                translateY = offsetY;
                translateX = offsetX;
                rotateDeg = -10;
                scale = 0.84;
                opacity = 0.8;
                zIndex = 30;
              } else {
                translateY = diff < 0 ? -offsetY * 1.8 : offsetY * 1.8;
                translateX = 140;
                rotateDeg = diff < 0 ? 20 : -20;
                scale = 0.6;
                opacity = 0;
                zIndex = 10;
                isInteractive = false;
              }

              return (
                <div
                  key={offer.id}
                  onClick={() => isInteractive && setActiveIndex(idx)}
                  style={{
                    transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: isInteractive ? 'auto' : 'none',
                  }}
                  className={`absolute w-full bg-[#fdf8f4] text-[#650a06] border-2 border-[#650a06]/40 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 shadow-2xl transition-all duration-300 ease-out cursor-pointer ${
                    diff === 0 ? 'ring-2 ring-[#650a06]' : 'hover:opacity-95'
                  }`}
                >
                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-1.5 mb-2.5 relative z-10">
                    <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                      <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#650a06] animate-pulse" />
                      <span>{offer.badge}</span>
                    </span>

                    <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-heading text-[#650a06]/80 bg-[#f7e5d9] px-1.5 py-0.5 rounded-full border border-[#650a06]/20">
                      <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#650a06]" />
                      <span>
                        {String(timer.hours).padStart(2, '0')}:{String(timer.minutes).padStart(2, '0')}:{String(timer.seconds).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Image & Main Info */}
                  <div className="flex gap-2.5 sm:gap-3 items-center relative z-10">
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden border border-[#650a06]/30 shrink-0 bg-white shadow-sm">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 text-[6px] sm:text-[7px] font-heading uppercase text-center bg-[#650a06] text-[#f7e5d9] font-bold py-0.5">
                        {offer.discount}
                      </span>
                    </div>

                    <div className="space-y-0.5 sm:space-y-1 min-w-0 flex-1">
                      <h4 className="font-display text-[11px] sm:text-sm font-bold text-[#650a06] line-clamp-2 leading-snug">
                        {offer.title}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] font-body text-[#650a06]/70 line-clamp-1">
                        {offer.subtitle}
                      </p>

                      <div className="flex items-center gap-1.5 pt-0.5">
                        <span className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">{offer.price}</span>
                        <span className="text-[9px] sm:text-[10px] line-through text-[#650a06]/50">{offer.originalPrice}</span>
                      </div>
                    </div>
                  </div>

                  {/* Perks & CTA Button */}
                  <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-[#650a06]/15 space-y-1.5 sm:space-y-2 relative z-10">
                    <p className="text-[9px] sm:text-[10px] font-body text-[#650a06]/80 line-clamp-1">
                      • {offer.perks}
                    </p>

                    <Link
                      href={offer.link}
                      onClick={() => setIsOpen(false)}
                      className="w-full py-1.5 sm:py-2 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-lg sm:rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Claim Deal Now →</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}