import { useState, useMemo, useEffect } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { productsData, ALL_CATEGORIES, RUDRAKSHA_SUB_CATEGORIES } from '@/models/data/productsData';
import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { formatPrice } from '@/utils/utils';
import { Link } from 'wouter';
import {
  Search,
  X,
  Heart,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  RotateCcw,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { GiStarSattelites } from 'react-icons/gi';

type SortOption =
  | 'newest'
  | 'oldest'
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'stock-desc'
  | 'stock-asc'
  | 'featured';

const sortOptionsList: { label: string; value: SortOption }[] = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Name (A-Z)', value: 'name-asc' },
  { label: 'Name (Z-A)', value: 'name-desc' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Stock: High to Low', value: 'stock-desc' },
  { label: 'Stock: Low to High', value: 'stock-asc' },
  { label: 'Featured', value: 'featured' },
];

export default function AllProductsPage() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Query params setup
  const queryParams = new URLSearchParams(window.location.search);
  const initialCategory = queryParams.get('category') || 'All Categories';
  const initialSubCategory = queryParams.get('subcategory') || 'All';
  const initialSearch = queryParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [categorySearchQuery, setCategorySearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    initialSubCategory !== 'All' ? [initialSubCategory] : []
  );
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('oldest');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [isCollectorOnly, setIsCollectorOnly] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Collapsible Section Toggle States
  const [isSortSectionOpen, setIsSortSectionOpen] = useState(true);
  const [isCategorySectionOpen, setIsCategorySectionOpen] = useState(true);
  const [isProductTypeSectionOpen, setIsProductTypeSectionOpen] = useState(true);
  const [isSpecialFilterOpen, setIsSpecialFilterOpen] = useState(true);

  // Lock body scroll on mobile filter open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileFilterOpen]);

  // Sync state when URL params change
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    const sub = params.get('subcategory');
    const q = params.get('q');
    if (cat) setSelectedCategory(cat);
    if (sub && sub !== 'All') setSelectedSubCategories([sub]);
    if (q) setSearchQuery(q);
  }, []);

  // Helpers
  const getCategoryCount = (catName: string) => {
    if (catName === 'All Categories') return productsData.length;
    return productsData.filter((p) => p.category === catName).length;
  };

  const getSubCategoryCount = (subName: string) => {
    return productsData.filter((p) => p.subCategory === subName).length;
  };

  const handleSubCategoryToggle = (sub: string) => {
    setSelectedCategory('Rudraksha & Variants');
    setSelectedSubCategories((prev) =>
      prev.includes(sub) ? prev.filter((item) => item !== sub) : [...prev, sub]
    );
  };

  const handleProductTypeToggle = (type: string) => {
    setSelectedProductTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedSubCategories([]);
    setSelectedProductTypes([]);
    setSearchQuery('');
    setCategorySearchQuery('');
    setSortOption('oldest');
    setInStockOnly(false);
    setIsCollectorOnly(false);
  };

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategory !== 'All Categories' ||
    selectedSubCategories.length > 0 ||
    selectedProductTypes.length > 0 ||
    searchQuery !== '' ||
    inStockOnly ||
    isCollectorOnly;

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      if (selectedCategory !== 'All Categories' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedSubCategories.length > 0) {
        if (!p.subCategory || !selectedSubCategories.includes(p.subCategory)) {
          return false;
        }
      }
      if (selectedProductTypes.length > 0) {
        const matchesType = selectedProductTypes.some(
          (t) =>
            p.name.toLowerCase().includes(t.toLowerCase()) ||
            p.subCategory?.toLowerCase().includes(t.toLowerCase())
        );
        if (!matchesType) return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesDesc = p.desc.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesSub = p.subCategory?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat && !matchesSub) return false;
      }
      if (inStockOnly && !p.inStock) return false;
      if (isCollectorOnly && !p.badge?.toLowerCase().includes('collector') && !p.badge?.toLowerCase().includes('rare')) {
        return false;
      }
      return true;
    });
  }, [
    selectedCategory,
    selectedSubCategories,
    selectedProductTypes,
    searchQuery,
    inStockOnly,
    isCollectorOnly,
  ]);

  // Sort Logic
  const sortedProducts = useMemo(() => {
    const items = [...filteredProducts];
    switch (sortOption) {
      case 'newest':
        return items.sort((a, b) => (b.isNewLaunch ? 1 : 0) - (a.isNewLaunch ? 1 : 0));
      case 'oldest':
        return items.sort((a, b) => (a.isNewLaunch ? 1 : 0) - (b.isNewLaunch ? 1 : 0));
      case 'name-asc':
        return items.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return items.sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return items.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return items.sort((a, b) => b.price - a.price);
      case 'stock-desc':
        return items.sort((a, b) => b.stockCount - a.stockCount);
      case 'stock-asc':
        return items.sort((a, b) => a.stockCount - b.stockCount);
      case 'featured':
      default:
        return items.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  }, [filteredProducts, sortOption]);

  // Filter Sidebar Content Component
  const FilterSidebarContent = () => (
    <div className="space-y-6 text-[#650a06]">
      <div className="flex items-center justify-between pb-3 border-b border-[#650a06]/20">
        <h2 className="font-heading font-bold text-xl text-[#650a06] tracking-tight">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={handleResetFilters}
            className="text-xs font-bold text-[#650a06] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Clear All
          </button>
        )}
      </div>

      {/* Sort Section */}
      <div className="border-b border-[#650a06]/15 pb-5">
        <button
          onClick={() => setIsSortSectionOpen(!isSortSectionOpen)}
          className="w-full flex items-center justify-between font-heading font-bold text-base text-[#650a06] mb-3 cursor-pointer"
        >
          <span>Sort By</span>
          {isSortSectionOpen ? <ChevronUp className="w-4 h-4 text-[#650a06]" /> : <ChevronDown className="w-4 h-4 text-[#650a06]" />}
        </button>

        {isSortSectionOpen && (
          <div className="space-y-2.5 pl-1">
            {sortOptionsList.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-3 text-sm font-semibold text-[#650a06]/90 hover:text-[#650a06] cursor-pointer select-none py-0.5"
              >
                <input
                  type="radio"
                  name="sort-option"
                  checked={sortOption === opt.value}
                  onChange={() => setSortOption(opt.value)}
                  className="w-4 h-4 accent-[#650a06] cursor-pointer"
                />
                <span className={sortOption === opt.value ? 'font-bold text-[#650a06]' : ''}>
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories Section */}
      <div className="border-b border-[#650a06]/15 pb-5">
        <button
          onClick={() => setIsCategorySectionOpen(!isCategorySectionOpen)}
          className="w-full flex items-center justify-between font-heading font-bold text-base text-[#650a06] mb-3 cursor-pointer"
        >
          <span>Categories</span>
          {isCategorySectionOpen ? <ChevronUp className="w-4 h-4 text-[#650a06]" /> : <ChevronDown className="w-4 h-4 text-[#650a06]" />}
        </button>

        {isCategorySectionOpen && (
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={categorySearchQuery}
                onChange={(e) => setCategorySearchQuery(e.target.value)}
                placeholder="Search category..."
                className="w-full bg-[#faf7f2] border border-[#650a06]/20 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-[#650a06] placeholder-[#650a06]/50 focus:outline-none focus:border-[#650a06]"
              />
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              <label
                className={`flex items-center justify-between p-2.5 rounded-lg text-sm font-bold cursor-pointer transition-colors ${
                  selectedCategory === 'All Categories' ? 'bg-[#650a06] text-[#faf7f2]' : 'hover:bg-[#faf7f2] text-[#650a06]'
                }`}
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSelectedSubCategories([]);
                }}
              >
                <span>All Categories</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${selectedCategory === 'All Categories' ? 'bg-[#faf7f2]/20 text-[#faf7f2]' : 'bg-[#650a06]/10 text-[#650a06]'}`}>
                  {getCategoryCount('All Categories')}
                </span>
              </label>

              <div className="pl-1 space-y-1.5">
                <div className="text-xs font-bold text-[#650a06] uppercase tracking-wider pt-2 pb-1 flex items-center justify-between border-t border-[#650a06]/15">
                  <span>Rudraksha &amp; Variants</span>
                  <span className="text-xs font-bold bg-[#650a06]/10 text-[#650a06] px-2 py-0.5 rounded-full">
                    {getCategoryCount('Rudraksha & Variants')}
                  </span>
                </div>
                {RUDRAKSHA_SUB_CATEGORIES.map((sub) => {
                  const count = getSubCategoryCount(sub);
                  const isChecked = selectedSubCategories.includes(sub);
                  return (
                    <label
                      key={sub}
                      className="flex items-center justify-between text-sm font-semibold text-[#650a06]/90 hover:text-[#650a06] cursor-pointer py-1 pl-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleSubCategoryToggle(sub)}
                          className="w-4 h-4 accent-[#650a06] cursor-pointer"
                        />
                        <span className={isChecked ? 'font-bold text-[#650a06]' : ''}>{sub}</span>
                      </div>
                      <span className="text-xs font-bold text-[#650a06]/60">{count}</span>
                    </label>
                  );
                })}
              </div>

              {ALL_CATEGORIES.filter(
                (c) =>
                  c !== 'All Categories' &&
                  c !== 'Rudraksha & Variants' &&
                  c.toLowerCase().includes(categorySearchQuery.toLowerCase())
              ).map((cat) => {
                const count = getCategoryCount(cat);
                const isSelected = selectedCategory === cat;
                return (
                  <label
                    key={cat}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-sm font-bold cursor-pointer transition-colors ${
                      isSelected ? 'bg-[#650a06] text-[#faf7f2]' : 'hover:bg-[#faf7f2] text-[#650a06]'
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedSubCategories([]);
                    }}
                  >
                    <span>{cat}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isSelected ? 'bg-[#faf7f2]/20 text-[#faf7f2]' : 'bg-[#650a06]/10 text-[#650a06]'}`}>
                      {count}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Product Type Section */}
      <div className="border-b border-[#650a06]/15 pb-5">
        <button
          onClick={() => setIsProductTypeSectionOpen(!isProductTypeSectionOpen)}
          className="w-full flex items-center justify-between font-heading font-bold text-base text-[#650a06] mb-3 cursor-pointer"
        >
          <span>Product Type</span>
          {isProductTypeSectionOpen ? <ChevronUp className="w-4 h-4 text-[#650a06]" /> : <ChevronDown className="w-4 h-4 text-[#650a06]" />}
        </button>

        {isProductTypeSectionOpen && (
          <div className="space-y-2.5 pl-1">
            {['Bracelet', 'Japa Mala', 'Pendant', 'Siddha Mala', 'Single Bead'].map((type) => {
              const isChecked = selectedProductTypes.includes(type);
              return (
                <label
                  key={type}
                  className="flex items-center gap-3 text-sm font-semibold text-[#650a06]/90 hover:text-[#650a06] cursor-pointer py-0.5"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleProductTypeToggle(type)}
                    className="w-4 h-4 accent-[#650a06] cursor-pointer"
                  />
                  <span className={isChecked ? 'font-bold text-[#650a06]' : ''}>{type}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Special Filters */}
      <div className="pb-5">
        <button
          onClick={() => setIsSpecialFilterOpen(!isSpecialFilterOpen)}
          className="w-full flex items-center justify-between font-heading font-bold text-base text-[#650a06] mb-3 cursor-pointer"
        >
          <span>Special Filters</span>
          {isSpecialFilterOpen ? <ChevronUp className="w-4 h-4 text-[#650a06]" /> : <ChevronDown className="w-4 h-4 text-[#650a06]" />}
        </button>

        {isSpecialFilterOpen && (
          <div className="space-y-3 pl-1">
            <label className="flex items-center gap-3 text-sm font-semibold text-[#650a06] cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-[#650a06] cursor-pointer"
              />
              <span>In Stock Only</span>
            </label>

            <label className="flex items-center gap-3 text-sm font-semibold text-[#650a06] cursor-pointer">
              <input
                type="checkbox"
                checked={isCollectorOnly}
                onChange={(e) => setIsCollectorOnly(e.target.checked)}
                className="w-4 h-4 accent-[#650a06] cursor-pointer"
              />
              <span>Collector Items</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#faf7f2] text-[#650a06] font-body antialiased relative">
      <AnnouncementBar />
      <Navbar />

      {/* Responsive Search & Sort Controls Header - FIXED STICKY POSITION UNDER NAVBAR */}
      <div className="bg-[#ffffff] border-b border-[#650a06]/20 sticky top-[64px] sm:top-[80px] lg:top-[96px] z-40 shadow-md py-3 px-3 sm:px-6 md:px-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Search Box Component */}
          <div className="relative w-full md:max-w-md lg:max-w-lg mx-auto md:mx-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#650a06]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name, Mukhi, category..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#faf7f2] border border-[#650a06]/20 rounded-xl text-xs sm:text-sm font-body text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#650a06]/60 hover:text-[#650a06] p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Action Row: Mobile Filter Drawer Trigger & Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end shrink-0">
            {/* Filter Toggle Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-colors shadow-xs flex-1 sm:flex-none cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#faf7f2]" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-[#faf7f2] animate-pulse" />
              )}
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 flex-1 sm:flex-none justify-end">
              <span className="hidden lg:inline text-xs font-heading font-bold uppercase tracking-wider text-[#650a06]/80">
                Sort By:
              </span>
              <div className="relative w-full sm:w-auto">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="w-full sm:w-auto appearance-none bg-[#ffffff] border border-[#650a06]/30 text-[#650a06] font-heading font-bold text-xs uppercase tracking-wider px-3.5 py-2.5 pr-8 rounded-xl focus:outline-none focus:border-[#650a06] cursor-pointer shadow-xs truncate"
                >
                  {sortOptionsList.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#650a06] pointer-events-none" />
              </div>
            </div>

            {/* Reset Filters Quick Button (Desktop Only) */}
            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="hidden sm:flex items-center gap-1 text-xs font-heading font-bold text-[#650a06] hover:underline px-2 py-1 shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Page Body Grid */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-[calc(100vh-140px)]">
        {/* Desktop Left Sidebar */}
        <aside className="hidden md:block w-72 lg:w-80 shrink-0 bg-[#ffffff] border-r border-[#650a06]/20 p-5 lg:p-6 sticky top-[128px] sm:top-[144px] lg:top-[160px] max-h-[calc(100vh-160px)] overflow-y-auto shadow-xs">
          <FilterSidebarContent />
        </aside>

        {/* Right Main Grid Area */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 pb-16 sm:pb-24 space-y-6 max-w-full overflow-x-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#650a06]/15 pb-4">
            <div>
              <h1 className="font-display font-bold text-2xl sm:text-4xl text-[#650a06] tracking-tight">
                {selectedCategory === 'All Categories' ? 'All Sacred Collections' : selectedCategory}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-[#650a06]/80 mt-1">
                Showing <strong className="font-bold text-[#650a06]">{sortedProducts.length}</strong> of{' '}
                <strong className="font-bold text-[#650a06]">{productsData.length}</strong> 100% Nepal Origin Products
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
              {sortedProducts.map((product) => {
                const isSaved = isInWishlist(product.id);
                const discount = product.originalPrice
                  ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                  : 0;

                return (
                  <div
                    key={product.id}
                    className="group relative flex flex-col bg-[#ffffff] border border-[#650a06]/20 shadow-md rounded-2xl p-4 hover:shadow-xl hover:border-[#650a06] transition-all duration-300"
                  >
                    {/* Thumbnail Box */}
                    <div className="relative aspect-square rounded-xl overflow-hidden border border-[#650a06]/15 mb-3 bg-[#faf7f2]">
                      <Link href={`/product/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                      </Link>

                      {/* Badges */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
                        {product.badge && (
                          <span className="bg-[#650a06] text-[#faf7f2] text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                            {product.badge}
                          </span>
                        )}
                        {discount > 0 && (
                          <span className="bg-[#650a06] text-[#faf7f2] text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                            {discount}% OFF
                          </span>
                        )}
                      </div>

                      {/* Wishlist Toggle Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product);
                        }}
                        className="absolute top-2.5 right-2.5 w-8 h-8 sm:w-9 sm:h-9 bg-[#ffffff]/90 backdrop-blur border border-[#650a06]/20 rounded-full flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#faf7f2] transition-all shadow-xs z-10 cursor-pointer"
                        aria-label="Add to wishlist"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            isSaved ? 'fill-[#650a06] text-[#650a06] scale-110' : ''
                          }`}
                        />
                      </button>

                      {/* Quick Actions Overlay (Desktop Hover) */}
                      <div className="absolute bottom-0 inset-x-0 p-2.5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden lg:flex gap-2 z-10 bg-[#ffffff]/95 backdrop-blur-sm border-t border-[#650a06]/20">
                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 py-2 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold uppercase tracking-wider rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </button>
                        <a
                          href={`https://wa.me/9779715551396?text=${encodeURIComponent(
                            `Namaste! I am interested in inquiring about ${product.name} (Price: ${formatPrice(product.price)}). Please provide more details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-[11px] flex items-center justify-center cursor-pointer shadow-sm"
                          aria-label="Inquire on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        {/* Rating Stars & Nepal Origin Badge */}
                        <div className="flex items-center justify-between mb-1.5 text-xs">
                          <div className="flex items-center gap-1 text-[#650a06]">
                            {'★'.repeat(5)}
                            <span className="text-[10px] text-[#650a06]/70 font-medium font-body ml-1">
                              ({product.reviewsCount || 42})
                            </span>
                          </div>
                          <span className="text-[10px] font-heading font-bold text-[#650a06] uppercase tracking-wider bg-[#650a06]/10 px-2 py-0.5 rounded border border-[#650a06]/20">
                            Nepal Origin
                          </span>
                        </div>

                        {/* Name */}
                        <h3 className="font-heading font-bold text-sm sm:text-base text-[#650a06] line-clamp-2 leading-snug group-hover:text-[#8a130c] transition-colors">
                          <Link href={`/product/${product.id}`}>{product.name}</Link>
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs font-body font-medium text-[#650a06]/80 line-clamp-2 mt-1 leading-relaxed">
                          {product.subtitle || product.desc}
                        </p>
                      </div>

                      {/* Price & Cart Actions (Mobile/Tablet + Desktop Fallback) */}
                      <div className="pt-3 border-t border-[#650a06]/15 flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-heading font-bold text-base sm:text-lg text-[#650a06]">
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-[#650a06]/50 line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Mobile Add button */}
                        <button
                          onClick={() => addToCart(product)}
                          className="lg:hidden p-2.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] rounded-xl transition-all shadow-xs cursor-pointer"
                          aria-label="Add to Cart"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
              <GiStarSattelites className="w-12 h-12 text-[#650a06] mx-auto" />
              <h3 className="font-display font-bold text-xl text-[#650a06]">No Products Found</h3>
              <p className="text-xs sm:text-sm text-[#650a06]/80 max-w-md mx-auto">
                No Nepal origin beads match your current filter selections. Try clearing or expanding your filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-6 py-2.5 bg-[#650a06] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs hover:bg-[#8a130c] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />

      {/* Global Overlays */}
      {/* Mobile Filter Slide-over Drawer Modal - Slide in from Left */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[150] flex justify-start md:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/50 transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative w-full max-w-xs sm:max-w-sm bg-[#ffffff] h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300 text-[#650a06]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#650a06]/20 mb-6">
                <h2 className="font-display font-bold text-xl text-[#650a06]">Product Filters</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1.5 rounded-full text-[#650a06]/70 hover:text-[#650a06] hover:bg-[#faf7f2] transition-colors cursor-pointer"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Render Filter Sidebar Content */}
              <FilterSidebarContent />
            </div>

            {/* Apply Filters Mobile Button */}
            <div className="pt-6 border-t border-[#650a06]/20 mt-6">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all cursor-pointer"
              >
                Apply Filters ({sortedProducts.length} Products)
              </button>
            </div>
          </div>
        </div>
      )}

      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <FloatingActions />
    </div>
  );
}