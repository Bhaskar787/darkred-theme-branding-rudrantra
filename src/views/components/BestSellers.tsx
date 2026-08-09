import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { formatPrice } from '@/utils/utils';
import { Heart, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: string;
  name: string;
  mukhi: string;
  origin: 'Nepal' | 'Java';
  desc: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  stockLeft?: number;
  isNewLaunch?: boolean;
}

const products: Product[] = [
  {
    id: 'p-new-1',
    name: '14 Mukhi Hanuman Siddha Bracelet',
    mukhi: '14 Mukhi',
    origin: 'Nepal',
    desc: 'Fresh Arun Valley harvest, silver-capped. Ruled by Lord Hanuman & Saturn for protection.',
    price: 38500,
    originalPrice: 45000,
    rating: 5.0,
    reviews: 42,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'New Launch',
    stockLeft: 3,
    isNewLaunch: true,
  },
  {
    id: 'p-new-2',
    name: 'Rare 1 Mukhi Savar Rudraksha Locket',
    mukhi: '1 Mukhi',
    origin: 'Nepal',
    desc: 'Natural cashew-shaped Single Mukhi encased in handcrafted 925 sterling silver locket.',
    price: 124900,
    originalPrice: 145000,
    rating: 5.0,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'New Launch',
    stockLeft: 1,
    isNewLaunch: true,
  },
  {
    id: 'p-new-3',
    name: '11 Mukhi Ekadash Rudra Mala (108 Beads)',
    mukhi: '11 Mukhi',
    origin: 'Nepal',
    desc: 'Blessed with 11 Rudras for fearlessness, strung on red silk with traditional knotting.',
    price: 14990,
    originalPrice: 18500,
    rating: 4.9,
    reviews: 29,
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    badge: 'New Launch',
    stockLeft: 5,
    isNewLaunch: true,
  },
  {
    id: 'p1',
    name: '5 Mukhi Rudraksha Bracelet',
    mukhi: '5 Mukhi',
    origin: 'Nepal',
    desc: 'An authentic bracelet symbolizing abundance and calm. Lab certified, Nepal origin, silver-capped.',
    price: 9170,
    originalPrice: 11800,
    rating: 4.8,
    reviews: 612,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Bestseller',
    stockLeft: 6,
  },
  {
    id: 'p2',
    name: '7 Mukhi Rudraksha Beads',
    mukhi: '7 Mukhi',
    origin: 'Nepal',
    desc: 'Seven natural lines symbolizing abundance and grace, ruled by Goddess Mahalakshmi.',
    price: 1742.3,
    originalPrice: 2100,
    rating: 4.7,
    reviews: 348,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Natural',
    stockLeft: 14,
  },
  {
    id: 'p3',
    name: '10 Mukhi Rudraksha Beads',
    mukhi: '10 Mukhi',
    origin: 'Nepal',
    desc: 'Contains natural clefts symbolizing Lord Vishnu — ultimate divine protection and stability.',
    price: 5226.9,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 289,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Featured',
    stockLeft: 9,
  },
  {
    id: 'p4',
    name: '2 Mukhi Rudraksha Beads',
    mukhi: '2 Mukhi',
    origin: 'Nepal',
    desc: 'Naturally formed with two clear lines or faces, fostering unity, harmony, and partnership.',
    price: 39431,
    originalPrice: 45000,
    rating: 4.9,
    reviews: 96,
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    badge: 'Rare',
    stockLeft: 3,
  },
  {
    id: 'p5',
    name: 'Siddha Mala (1–14 Mukhi)',
    mukhi: 'Combination',
    origin: 'Nepal',
    desc: 'A complete devotional set spanning fourteen mukhi types, energized and strung on red silk thread.',
    price: 24999,
    originalPrice: 29999,
    rating: 5.0,
    reviews: 154,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    badge: 'Collector’s Choice',
    stockLeft: 4,
    isNewLaunch: true,
  },
  {
    id: 'p6',
    name: '1 Mukhi Rudraksha Pendant',
    mukhi: '1 Mukhi',
    origin: 'Nepal',
    desc: 'The rarest of all mukhis, representing Lord Shiva himself. Comes with a dedicated silver locket and certificate.',
    price: 128500,
    rating: 5.0,
    reviews: 21,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.3',
    badge: 'Ultra Rare',
    stockLeft: 1,
  },
  {
    id: 'p7',
    name: '3 Mukhi Rudraksha Mala, 108 Beads',
    mukhi: '3 Mukhi',
    origin: 'Nepal',
    desc: 'A full 108-bead japa mala ruled by Agni, aiding focus, willpower, and the release of past guilt.',
    price: 6850,
    originalPrice: 8200,
    rating: 4.6,
    reviews: 203,
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    badge: 'Natural',
    stockLeft: 11,
  },
  {
    id: 'p8',
    name: '6 Mukhi Rudraksha Bracelet',
    mukhi: '6 Mukhi',
    origin: 'Nepal',
    desc: 'A gentle entry point ruled by Lord Kartikeya, favoured for confidence and clear communication.',
    price: 2450,
    originalPrice: 2900,
    rating: 4.5,
    reviews: 421,
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Value',
    stockLeft: 22,
  },
];

const filterTabs = ['New Launches', 'All', 'Nepal Origin', 'Under ₹10,000'] as const;
type FilterTab = (typeof filterTabs)[number];

export function BestSellers() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState<FilterTab>('New Launches');

  // Refresh GSAP ScrollTrigger whenever activeTab changes so ChooseByIntention pin position updates!
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeTab === 'New Launches') return p.isNewLaunch || p.badge?.toLowerCase().includes('new');
      if (activeTab === 'Nepal Origin') return p.origin === 'Nepal';
      if (activeTab === 'Under ₹10,000') return p.price < 10000;
      return true;
    });
  }, [activeTab]);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] relative border-b border-[#650a06]/20">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      {/* Background mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-mandala opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3.5 sm:px-4 py-1.5 rounded-full inline-block mb-3 sm:mb-4 shadow-xs">
              Sacred Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#650a06] font-bold tracking-tight mt-2">
              Trending Now
            </h2>
          </div>

          <Link
            href="/all-products"
            className="hidden md:inline-flex items-center gap-2 text-[#650a06] hover:text-[#8a130c] font-heading font-bold uppercase tracking-wider text-sm transition-colors group"
          >
            View All Products
            <span className="w-8 h-0.5 bg-[#650a06] group-hover:w-12 transition-all"></span>
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-[#650a06]/20 mb-8 sm:mb-10 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
          <div className="flex gap-2.5 sm:gap-4 pb-3 sm:pb-4 whitespace-nowrap">
            {filterTabs.map((tab) => {
              const isNewTab = tab === 'New Launches';
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-heading font-bold tracking-widest transition-all border flex items-center gap-1.5 cursor-pointer shadow-xs ${
                    isActive
                      ? 'bg-[#650a06] text-[#faf7f2] border-[#650a06] shadow-md scale-105'
                      : isNewTab
                      ? 'bg-[#650a06]/15 text-[#650a06] border-[#650a06]/30 hover:bg-[#650a06] hover:text-[#faf7f2]'
                      : 'bg-[#ffffff] text-[#650a06] border-[#650a06]/20 hover:border-[#650a06]'
                  }`}
                >
                  {isNewTab && <Sparkles className="w-3.5 h-3.5 text-current" />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid System */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {filtered.map((product) => {
            const isSaved = isInWishlist(product.id);
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;
            return (
              <div
                key={product.id}
                className="group relative flex flex-col bg-[#ffffff] border border-[#650a06]/20 shadow-xs rounded-xl p-2.5 sm:p-4 hover:border-[#650a06] hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-lg overflow-hidden border border-[#650a06]/10 mb-3 sm:mb-5">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-2 items-start pointer-events-none z-10">
                    {product.badge && (
                      <span className="bg-[#650a06] text-[#f7e5d9] text-[8px] sm:text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 sm:py-1 rounded shadow-xs">
                        {product.badge}
                      </span>
                    )}
                    {discount > 0 && (
                      <span className="bg-[#650a06]/80 text-[#f7e5d9] text-[8px] sm:text-[10px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 sm:py-1 rounded shadow-xs">
                        {discount}% Off
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 bg-[#f7e5d9] border border-[#650a06]/30 rounded-full flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all shadow-md z-10 cursor-pointer"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                        isSaved ? 'fill-[#650a06] text-[#650a06] scale-110' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Actions - Desktop Hover */}
                  <div className="absolute bottom-0 inset-x-0 p-2.5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden lg:flex gap-2 z-10 bg-[#fdf8f4]/95 backdrop-blur-sm border-t border-[#650a06]/20">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-2 bg-[#650a06] text-[#f7e5d9] font-heading font-bold uppercase tracking-wider rounded-xl hover:bg-[#8a130c] transition-colors shadow-md flex items-center justify-center gap-1.5 text-[11px] cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                    <a
                      href={`https://wa.me/9779715551396?text=${encodeURIComponent(
                        `Namaste! I am interested in inquiring about ${product.name} (${formatPrice(product.price)}). Please provide more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-1.5 text-[11px] cursor-pointer text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>

                {/* Content Details Area */}
                <div className="flex flex-col flex-1 px-0.5 sm:px-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-y-1">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, i) => (
                        <GiStarSattelites
                          key={i}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                            i < Math.round(product.rating) ? 'text-[#650a06] fill-[#650a06]' : 'text-[#650a06]/30'
                          }`}
                        />
                      ))}
                      <span className="text-[9px] sm:text-[10px] font-body text-[#650a06]/70 font-semibold ml-1">({product.reviews})</span>
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-heading font-bold text-[#650a06] uppercase tracking-widest border border-[#650a06]/20 bg-[#f7e5d9] px-1.5 sm:px-2 py-0.5 rounded">
                      {product.origin}
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-display text-sm sm:text-base md:text-lg text-[#650a06] font-bold mb-1.5 sm:mb-2 line-clamp-2 leading-tight group-hover:text-[#8a130c] transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs sm:text-sm font-body text-[#650a06]/80 font-medium line-clamp-2 mb-3 sm:mb-4 flex-1">
                    {product.desc}
                  </p>

                  <div className="flex items-baseline gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-[#650a06]/15">
                    <span className="font-display text-base sm:text-lg md:text-xl font-bold text-[#650a06]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm font-body text-[#650a06]/50 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Lab Certified Strip */}
                  <div className="mt-3 sm:mt-4 bg-[#650a06]/10 border border-[#650a06]/20 py-1 sm:py-1.5 px-2 sm:px-3 rounded-lg flex items-center justify-center gap-1.5 sm:gap-2">
                    <img src="https://img.icons8.com/color/48/warranty.png" alt="cert" className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-90" />
                    <span className="text-[8px] sm:text-[10px] font-heading font-bold text-[#650a06] uppercase tracking-widest">
                      Lab Certified
                    </span>
                  </div>

                  {/* Mobile Action Buttons: Add to Cart + WhatsApp */}
                  <div className="mt-2.5 sm:mt-3 flex gap-2 lg:hidden">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-2.5 border border-[#650a06] bg-[#650a06] text-[#f7e5d9] text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider rounded-xl hover:bg-[#8a130c] transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Cart</span>
                    </button>
                    <a
                      href={`https://wa.me/9779715551396?text=${encodeURIComponent(
                        `Namaste! I am interested in inquiring about ${product.name} (${formatPrice(product.price)}). Please provide more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 bg-[#25D366] text-white text-[11px] sm:text-xs font-heading font-bold uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-1 cursor-pointer text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Sub Anchor Link */}
        <div className="flex justify-center mt-8 sm:mt-12 md:hidden">
          <Link
            href="/all-products"
            className="text-[#650a06] font-heading font-bold uppercase tracking-widest text-xs border-b-2 border-[#650a06] pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}