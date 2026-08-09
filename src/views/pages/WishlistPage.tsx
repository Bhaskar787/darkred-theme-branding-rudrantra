import { useState } from 'react';
import { Link } from 'wouter';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { LeftReviewsDrawer } from '@/views/components/LeftReviewsDrawer';
import { useWishlist, WishlistItem } from '@/models/context/WishlistContext';
import { useCart } from '@/models/context/CartContext';
import { formatPrice } from '@/utils/utils';
import { Heart, ShoppingBag, Check, ChevronRight, Trash2 } from 'lucide-react';
import { TrustPaymentBar } from '../components/TrustPaymentBar';

export function WishlistPage() {
  const { items, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col font-body text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <CartDrawer />
      <SearchOverlay />
      <MenuDrawer />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-stone-200 py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-stone-500">
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-stone-400" />
            <span className="text-stone-900 font-semibold">Wishlist</span>
          </div>
        </div>

        {/* Wishlist Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Header Title Bar matching Cart Page */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-8">
            <div className="flex items-baseline gap-3">
              <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Your Saved Wishlist
              </h1>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
                {items.length} {items.length === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearWishlist}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-red-600 transition-colors py-1 px-2 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear Wishlist
              </button>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty State matching Cart Page */
            <div className="bg-white rounded-3xl border border-stone-200/80 p-12 sm:p-16 text-center max-w-xl mx-auto space-y-6 shadow-sm my-8">
              <div className="w-24 h-24 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center mx-auto text-amber-700 shadow-inner">
                <Heart className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-2xl text-stone-900 font-bold">Your Wishlist is Empty</h2>
                <p className="text-sm text-stone-500 max-w-md mx-auto">
                  Explore our collection of authentic lab-certified Rudraksha beads and save your favorite items here.
                </p>
              </div>
              <Link
                href="/all-products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy hover:bg-navy-deep text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            /* Grid of Wishlist Products */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {items.map((item) => {
                const isAdded = addedIds[item.id];

                return (
                  <div
                    key={item.id}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-square overflow-hidden bg-stone-50">
                      <Link href={`/product/${item.id}`} className="block w-full h-full cursor-pointer">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>
                      
                      {/* Remove from Wishlist Badge */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          toggleWishlist(item);
                        }}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy hover:bg-navy-deep text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10 cursor-pointer"
                        title="Remove from Wishlist"
                      >
                        <Heart className="w-4 h-4 fill-current text-rose-400" />
                      </button>
                    </div>

                    {/* Info Body */}
                    <div className="p-5 flex-1 flex flex-col text-center justify-between space-y-4">
                      <div>
                        <Link href={`/product/${item.id}`} className="block group/title cursor-pointer">
                          <h3 className="font-heading font-bold text-stone-900 text-sm sm:text-base mb-1.5 group-hover/title:text-amber-800 transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="font-heading font-extrabold text-amber-800 text-sm sm:text-base">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={isAdded}
                        className={`w-full py-3 font-heading text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-navy text-white hover:bg-navy-deep shadow-sm hover:shadow-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" /> Added to Cart
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4" /> Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <TrustPaymentBar />
      <Footer />
    </div>
  );
}

export default WishlistPage;
