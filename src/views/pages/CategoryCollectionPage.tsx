import { useState, useMemo, useRef, useEffect } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { COLLECTION_CATEGORIES_META } from '@/models/data/collectionCategoriesData';
import { productsData, Product } from '@/models/data/productsData';
import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { formatPrice } from '@/utils/utils';
import { Link, useRoute, useLocation } from 'wouter';
import {
  Search,
  X,
  Heart,
  ShoppingBag,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Check,
  Eye,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

export default function CategoryCollectionPage() {
  const [, params] = useRoute('/collection/:slug');
  const [, setLocation] = useLocation();
  const activeSlug = params?.slug || 'rudraksha-beads';

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Active Category metadata matching slug
  const activeCategoryMeta = useMemo(() => {
    const found = COLLECTION_CATEGORIES_META.find((c) => c.slug === activeSlug);
    return found || COLLECTION_CATEGORIES_META[0];
  }, [activeSlug]);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug]);

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('featured');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [, setIsCollectorOnly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Quick View Modal State
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Horizontal Scroll Reference for Categories Bar
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Center active tab when slug changes
  useEffect(() => {
    if (activeTabRef.current && scrollContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeSlug]);

  // Filter Products for Active Collection
  const collectionProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCategory =
        activeCategoryMeta.filterCategories?.includes(p.category) ||
        p.category === activeCategoryMeta.title;

      const matchSub = activeCategoryMeta.filterSubCategories
        ? p.subCategory && activeCategoryMeta.filterSubCategories.includes(p.subCategory)
        : true;

      const matchKeyword = activeCategoryMeta.filterKeywords
        ? activeCategoryMeta.filterKeywords.some((kw) =>
            p.name.toLowerCase().includes(kw.toLowerCase()) ||
            p.desc.toLowerCase().includes(kw.toLowerCase())
          )
        : true;

      return matchCategory || (matchSub && matchKeyword);
    });
  }, [activeCategoryMeta]);

  // Apply Search & Stock Filters
  const filteredProducts = useMemo(() => {
    return collectionProducts.filter((p) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.desc.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }
      if (inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [collectionProducts, searchQuery, inStockOnly]);

  // Apply Sorting
  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];
    switch (sortOption) {
      case 'price-asc':
        return items.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return items.sort((a, b) => b.price - a.price);
      case 'rating':
        return items.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return items.sort((a, b) => (b.isNewLaunch ? 1 : 0) - (a.isNewLaunch ? 1 : 0));
      case 'featured':
      default:
        return items.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  }, [filteredProducts, sortOption]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body antialiased relative">
      <AnnouncementBar />
      <Navbar />

      {/* ── 1. STICKY HANGING BREADCRUMBS & CATEGORY SWITCHER BAR ── */}
      <div className="bg-[#ffffff] border-b border-[#650a06]/20 sticky top-[64px] sm:top-[80px] lg:top-[96px] z-40 shadow-md py-2.5 px-4 sm:px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#650a06]/80 font-medium shrink-0">
            <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <Link href="/collections" className="hover:text-[#650a06] transition-colors font-medium">Collections</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <span className="text-[#650a06] font-bold">{activeCategoryMeta.shortTitle}</span>
          </div>

          {/* Category Quick Selector Tabs */}
          <div className="relative flex items-center min-w-0 max-w-full group/tabs">
            <button
              onClick={() => scrollTabs('left')}
              className="hidden md:flex shrink-0 p-1.5 rounded-full bg-[#faf7f2] text-[#650a06] hover:bg-[#650a06] hover:text-[#faf7f2] border border-[#650a06]/20 shadow-xs mr-1 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
            >
              {COLLECTION_CATEGORIES_META.map((cat) => {
                const isActive = cat.id === activeCategoryMeta.id;
                return (
                  <button
                    key={cat.id}
                    ref={isActive ? activeTabRef : null}
                    onClick={(e) => {
                      e.currentTarget.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                      });
                      setLocation(`/collection/${cat.slug}`);
                    }}
                    className={`shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#650a06] text-[#faf7f2] border-[#650a06] shadow-xs'
                        : 'bg-[#ffffff] text-[#650a06] hover:border-[#650a06] border-[#650a06]/20'
                    }`}
                  >
                    {cat.shortTitle}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollTabs('right')}
              className="hidden md:flex shrink-0 p-1.5 rounded-full bg-[#faf7f2] text-[#650a06] hover:bg-[#650a06] hover:text-[#faf7f2] border border-[#650a06]/20 shadow-xs ml-1 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 2. HERO BANNER FOR ACTIVE COLLECTION - HIGH CONTRAST CRYSTAL CLEAR TEXT ── */}
      <section className="relative bg-[#650a06] text-[#ffffff] py-12 lg:py-16 px-4 sm:px-6 overflow-hidden shadow-lg">
        {/* Background Subtle Overlay - High Visibility on Right */}
        <div className="absolute inset-0 opacity-65 pointer-events-none">
          <img
            src={activeCategoryMeta.bannerImage}
            alt={activeCategoryMeta.title}
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#650a06] via-[#650a06]/70 to-[#650a06]/15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#ffffff]/15 border border-[#ffffff]/35 rounded-full text-[#ffffff] text-xs font-heading font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ffffff]" />
              <span>{activeCategoryMeta.heroBadge}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#ffffff] tracking-wide">
              {activeCategoryMeta.title}
            </h1>

            <p className="text-sm sm:text-base text-[#faf7f2] leading-relaxed font-medium">
              {activeCategoryMeta.longDescription}
            </p>

            {/* Key benefits pills - HIGH CONTRAST WHITE ON TRANSLUCENT WHITE */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {activeCategoryMeta.benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ffffff]/20 backdrop-blur-md border border-[#ffffff]/40 rounded-lg text-xs font-bold text-[#ffffff] shadow-xs"
                >
                  <Check className="w-3.5 h-3.5 text-[#ffffff] shrink-0 stroke-[3]" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Banner Card Image Box */}
          <div className="w-full sm:w-80 lg:w-96 shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-[#ffffff]/30 shadow-2xl relative group">
            <img
              src={activeCategoryMeta.bannerImage}
              alt={activeCategoryMeta.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-[#ffffff]">
              <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#faf7f2] block mb-0.5">
                CURATED COLLECTION
              </span>
              <span className="text-xs font-bold text-[#ffffff] block leading-tight">
                100% Pashupatinath Consecrated &amp; Lab Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CONTROLS & FILTER BAR ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Count & Info */}
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-[#650a06] font-bold">
              Explore {activeCategoryMeta.shortTitle} Items
            </h2>
            <p className="text-xs text-[#650a06]/80 font-medium mt-0.5">
              Showing <span className="font-bold text-[#650a06]">{sortedProducts.length}</span> authentic items in this collection
            </p>
          </div>

          {/* Middle Search Input */}
          <div className="relative w-full md:w-72 lg:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#650a06]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeCategoryMeta.shortTitle}...`}
              className="w-full pl-10 pr-8 py-2 bg-[#faf7f2] border border-[#650a06]/20 rounded-xl text-xs text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] transition-colors font-medium shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#650a06]/60 hover:text-[#650a06]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Toggles & Sort Dropdown */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <label className="flex items-center gap-2 text-xs font-bold text-[#650a06] cursor-pointer bg-[#faf7f2] border border-[#650a06]/20 px-3 py-2 rounded-xl hover:border-[#650a06] transition-colors shadow-xs">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-3.5 h-3.5 accent-[#650a06] cursor-pointer"
              />
              <span>In Stock Only</span>
            </label>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="appearance-none bg-[#faf7f2] border border-[#650a06]/20 text-[#650a06] font-bold text-xs px-3 py-2 pr-8 rounded-xl focus:outline-none cursor-pointer hover:border-[#650a06] transition-colors shadow-xs"
              >
                <option value="featured">Featured Items</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#650a06] pointer-events-none" />
            </div>
          </div>

        </div>

        {/* ── 4. PRODUCTS GRID FOR THIS COLLECTION ── */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6">
            {sortedProducts.map((product) => {
              const isSaved = isInWishlist(product.id);
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={product.id}
                  className="group relative flex flex-col bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-4 shadow-md hover:shadow-xl hover:border-[#650a06] transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#faf7f2] mb-3 border border-[#650a06]/15">
                    <Link href={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      />
                    </Link>

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
                      {product.badge && (
                        <span className="bg-[#650a06] text-[#faf7f2] text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-xs">
                          {product.badge}
                        </span>
                      )}
                      {discount > 0 && (
                        <span className="bg-[#650a06] text-[#faf7f2] text-[9px] font-heading font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-xs">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    {/* Wishlist Heart Toggle */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                      }}
                      className="absolute top-2.5 right-2.5 w-8 h-8 bg-[#ffffff]/90 backdrop-blur-xs border border-[#650a06]/20 rounded-full flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#faf7f2] transition-all shadow-xs z-10 cursor-pointer"
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isSaved ? 'fill-[#650a06] text-[#650a06] scale-110' : ''
                        }`}
                      />
                    </button>

                    {/* Overlay Actions (Desktop Hover Only) */}
                    <div className="absolute bottom-2 inset-x-2 hidden lg:flex items-center gap-1.5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 p-1.5 bg-[#ffffff]/95 backdrop-blur-xs rounded-xl border border-[#650a06]/20 shadow-md">
                      <Link
                        href={`/product/${product.id}`}
                        className="flex-1 py-2 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#faf7f2]" />
                        <span>Details</span>
                      </Link>
                      <a
                        href={`https://wa.me/9779715551396?text=${encodeURIComponent(
                          `Namaste! I am interested in inquiring about ${product.name} (${formatPrice(product.price)}). Please provide more details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="flex flex-col flex-1">
                    {/* Origin & Rating */}
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-0.5 text-[#650a06]">
                        {[...Array(5)].map((_, i) => (
                          <GiStarSattelites
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.round(product.rating) ? 'text-[#650a06]' : 'text-[#650a06]/20'
                            }`}
                          />
                        ))}
                        <span className="text-[10px] text-[#650a06]/70 font-semibold ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-[#650a06] uppercase tracking-wider bg-[#650a06]/10 border border-[#650a06]/20 px-2 py-0.5 rounded-full">
                        {product.origin} Origin
                      </span>
                    </div>

                    {/* Product Name */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-heading text-base text-[#650a06] font-bold line-clamp-2 leading-snug hover:text-[#8a130c] transition-colors cursor-pointer mb-1.5">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#650a06]/85 line-clamp-2 mb-3 flex-1 leading-relaxed font-medium">
                      {product.desc}
                    </p>

                    {/* Price & Desktop Action Footer */}
                    <div className="pt-3 border-t border-[#650a06]/15 flex items-center justify-between mt-auto">
                      <div>
                        <span className="font-heading text-lg font-bold text-[#650a06]">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#650a06]/50 line-through ml-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="hidden lg:flex px-3.5 py-2 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors items-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#faf7f2]" />
                        <span>Add</span>
                      </button>
                    </div>

                    {/* Mobile Action Row */}
                    <div className="mt-3 flex gap-2 lg:hidden">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 py-2 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] text-xs font-heading font-bold uppercase tracking-wider rounded-lg cursor-pointer flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#faf7f2]" />
                        <span>Add</span>
                      </button>
                      <a
                        href={`https://wa.me/9779715551396?text=${encodeURIComponent(
                          `Namaste! I am interested in inquiring about ${product.name} (${formatPrice(product.price)}). Please provide more details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg cursor-pointer flex items-center justify-center gap-1 text-center"
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
        ) : (
          /* Empty State */
          <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-12 text-center space-y-4 shadow-md">
            <div className="w-14 h-14 rounded-full bg-[#650a06]/10 text-[#650a06] flex items-center justify-center mx-auto text-2xl font-serif">
              ॐ
            </div>
            <h3 className="font-display text-xl text-[#650a06] font-bold">No Collection Items Found</h3>
            <p className="text-xs sm:text-sm text-[#650a06]/80 max-w-md mx-auto font-medium">
              No items match your active search or stock filters. Try clearing your filters to explore all items in {activeCategoryMeta.shortTitle}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setInStockOnly(false);
                setIsCollectorOnly(false);
              }}
              className="px-5 py-2.5 bg-[#650a06] text-[#faf7f2] hover:bg-[#8a130c] font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer transition-colors"
            >
              Reset Collection Filters
            </button>
          </div>
        )}

        {/* ── 5. ASTROLOGER CONSULTATION CTA ── */}
        <section className="bg-[#ffffff] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#650a06]/25 shadow-md">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] block">
              PERSONALIZED SACRED ALIGNMENT
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#650a06] font-bold leading-snug">
              Need Help Selecting From {activeCategoryMeta.shortTitle}?
            </h3>
            <p className="text-xs sm:text-sm text-[#650a06]/85 font-medium">
              Our resident Acharyas inspect birth charts (Kundali) to match exact Mukhi beads, Saligram Shilas, and Vedic Gemstones for your planetary alignment.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                href="/consultation"
                className="px-5 py-2.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center gap-1.5"
              >
                <span>TALK TO ASTROLOGER</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/mukhi-guide"
                className="px-5 py-2.5 bg-transparent border border-[#650a06]/30 hover:border-[#650a06] text-[#650a06] hover:bg-[#650a06]/10 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                READ MUKHI GUIDE
              </Link>
            </div>
          </div>

          <div className="w-48 sm:w-64 shrink-0 rounded-xl overflow-hidden shadow-md border border-[#650a06]/20">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10"
              alt="Sacred Rudrantra Artifacts"
              className="w-full h-36 object-cover"
            />
          </div>
        </section>

        {/* ── 6. COLLECTION SPECIFIC FAQ SECTION ── */}
        <section className="space-y-6 pt-4">
          <div className="text-center space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl text-[#650a06] font-bold">
              {activeCategoryMeta.shortTitle} FAQs
            </h2>
            <p className="text-xs text-[#650a06]/80 font-medium">
              Common questions about authenticity, consecration, and wearing guidelines
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {activeCategoryMeta.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-[#650a06]/20 rounded-xl bg-[#ffffff] overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-heading text-base text-[#650a06] font-bold cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#650a06] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#650a06]/90 leading-relaxed border-t border-[#650a06]/15 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* ── 7. INTERACTIVE ITEM DETAILS QUICK-VIEW MODAL ── */}
      {selectedQuickViewProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-2xl shadow-2xl overflow-hidden border border-[#650a06]/30 max-h-[90vh] flex flex-col md:flex-row text-[#650a06]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedQuickViewProduct(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 bg-[#ffffff] hover:bg-[#faf7f2] text-[#650a06] rounded-full flex items-center justify-center shadow-md transition-colors border border-[#650a06]/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Left */}
            <div className="w-full md:w-1/2 bg-[#faf7f2] p-6 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#650a06]/20">
              <img
                src={selectedQuickViewProduct.image}
                alt={selectedQuickViewProduct.name}
                className="w-full max-h-72 object-contain rounded-xl drop-shadow-md"
              />
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] font-heading font-bold text-[#650a06] uppercase tracking-wider bg-[#ffffff] border border-[#650a06]/30 px-2.5 py-1 rounded-full shadow-2xs">
                  {selectedQuickViewProduct.origin} Origin
                </span>
                <span className="text-[10px] font-heading font-bold text-[#650a06] uppercase tracking-wider bg-[#650a06]/10 border border-[#650a06]/30 px-2.5 py-1 rounded-full">
                  100% Lab Certified
                </span>
              </div>
            </div>

            {/* Modal Content Right */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#650a06]">
                  {[...Array(5)].map((_, i) => (
                    <GiStarSattelites key={i} className="w-4 h-4" />
                  ))}
                  <span className="text-xs text-[#650a06]/70 font-semibold ml-1">
                    ({selectedQuickViewProduct.reviews} Verified Reviews)
                  </span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl text-[#650a06] font-bold leading-tight">
                  {selectedQuickViewProduct.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-2xl font-bold text-[#650a06]">
                    {formatPrice(selectedQuickViewProduct.price)}
                  </span>
                  {selectedQuickViewProduct.originalPrice && (
                    <span className="text-sm text-[#650a06]/50 line-through">
                      {formatPrice(selectedQuickViewProduct.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#650a06]/85 leading-relaxed font-medium">
                  {selectedQuickViewProduct.desc}
                </p>

                {/* Specifications table snippet */}
                {selectedQuickViewProduct.specifications && (
                  <div className="bg-[#faf7f2] rounded-xl p-3 border border-[#650a06]/20 space-y-1.5">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06] block mb-1">
                      Product Specifications
                    </span>
                    {Object.entries(selectedQuickViewProduct.specifications).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs border-b border-[#650a06]/15 last:border-0 py-0.5">
                        <span className="text-[#650a06]/70 font-medium">{key}:</span>
                        <span className="font-bold text-[#650a06]">{val}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Benefits List */}
                {selectedQuickViewProduct.benefits && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06] block">
                      Key Spiritual Benefits
                    </span>
                    {selectedQuickViewProduct.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[#650a06] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#650a06] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-[#650a06]/15 space-y-2 mt-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(selectedQuickViewProduct);
                      setSelectedQuickViewProduct(null);
                    }}
                    className="flex-1 py-3 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#faf7f2]" />
                    <span>Add To Cart</span>
                  </button>

                  <button
                    onClick={() => toggleWishlist(selectedQuickViewProduct)}
                    className="px-3.5 py-3 border border-[#650a06]/30 hover:border-[#650a06] text-[#650a06] rounded-xl transition-colors cursor-pointer"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(selectedQuickViewProduct.id) ? 'fill-[#650a06] text-[#650a06]' : 'text-[#650a06]/60'}`} />
                  </button>
                </div>

                <Link
                  href={`/product/${selectedQuickViewProduct.id}`}
                  onClick={() => setSelectedQuickViewProduct(null)}
                  className="w-full py-2.5 bg-[#faf7f2] hover:bg-[#ffffff] border border-[#650a06]/30 text-[#650a06] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <span>Open Full Product Details Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#650a06]" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}

      <Footer />
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <FloatingActions />
    </div>
  );
}
