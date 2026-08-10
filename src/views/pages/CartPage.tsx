import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { useCart } from '@/models/context/CartContext';
import { formatPrice } from '@/utils/utils';
import { IoBagCheckOutline } from "react-icons/io5";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  Gift,
  Award,
  LogIn,
  Check,
  ChevronRight,
  Sparkles,
  Lock,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export function CartPage() {
  const [, setLocation] = useLocation();
  const { items, updateQuantity, removeFromCart, subtotal, addToCart } = useCart();
  const [orderNote, setOrderNote] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);
  const [showNote, setShowNote] = useState(false);

  // Cross-sell product
  const upsellProduct = {
    id: 'rud-br-5mukhi-cartpage',
    name: '5 Mukhi Rudraksha Bracelet',
    price: 26900,
    image: 'https://images.pexels.com/photos/25283500/pexels-photo-25283500.jpeg?auto=compress&cs=tinysrgb&w=600',
  };
  const [upsellQty, setUpsellQty] = useState(1);
  const [upsellAdded, setUpsellAdded] = useState(false);

  // Free shipping progress calculation (Threshold: 50,000)
  const freeShippingThreshold = 50000;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeeded = freeShippingThreshold - subtotal;

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear all items from your cart?')) {
      items.forEach((item) => removeFromCart(item.id));
    }
  };

  const handleAddUpsell = () => {
    addToCart(upsellProduct, upsellQty);
    setUpsellAdded(true);
    setTimeout(() => setUpsellAdded(false), 2000);
  };

  const handleCheckout = () => {
    if (!agreedTerms) {
      setShowTermsError(true);
      return;
    }
    setShowTermsError(false);
    setLocation('/checkout');
  };

  const totalItemCount = items.reduce((n, i) => n + i.qty, 0);

  return (
    <div className="min-h-screen bg-[#faf7f2] flex flex-col font-body text-[#650a06] antialiased relative">
      <Navbar />
      <CartDrawer />
      <SearchOverlay />
      <MenuDrawer />

      <main className="flex-1 pb-16 sm:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#ffffff] border-b border-[#650a06]/20 py-3.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-heading font-bold text-[#650a06]/80">
            <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <span className="text-[#650a06] font-bold">Shopping Cart</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Header Title */}
          <div className="flex items-center justify-between pb-6 border-b border-[#650a06]/15 mb-8">
            <div className="flex items-baseline gap-3">
              <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#650a06] tracking-tight">
                Your Shopping Cart
              </h1>
              <span className="text-xs font-bold text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3 py-1 rounded-full">
                {totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'}
              </span>
            </div>

            {items.length > 0 && (
              <button
                onClick={handleClearCart}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#650a06]/80 hover:text-red-700 transition-colors py-1 px-2.5 rounded-lg hover:bg-red-50 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear Cart
              </button>
            )}
          </div>

          {items.length === 0 ? (
            /* Empty Cart State */
            <div className="bg-[#ffffff] rounded-3xl border border-[#650a06]/20 p-12 sm:p-16 text-center max-w-xl mx-auto space-y-6 shadow-md my-8">
              <div className="w-20 h-20 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 flex items-center justify-center mx-auto text-[#650a06] shadow-xs">
                <ShoppingBag className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-2xl text-[#650a06] font-bold">Your cart is empty</h2>
                <p className="text-xs sm:text-sm text-[#650a06]/80 max-w-md mx-auto font-medium">
                  Looks like you haven't added any sacred artifacts or rudraksha items to your cart yet.
                </p>
              </div>
              <Link
                href="/all-products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
              >
                Explore Collection
              </Link>
            </div>
          ) : (
            /* Active Cart Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Cart Items & Perks */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Shipping Progress Bar Offer */}
                <div className="bg-[#ffffff] rounded-2xl border border-[#650a06]/20 p-4 shadow-md space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#650a06]">
                    <span className="flex items-center gap-1.5 text-[#650a06]">
                      <IoBagCheckOutline className="w-4 h-4 text-[#650a06]" />
                      {amountNeeded > 0 ? (
                        <>Add <strong className="text-[#650a06] font-bold">{formatPrice(amountNeeded)}</strong> more to qualify for <strong>FREE Insured Express Shipping</strong></>
                      ) : (
                        <strong className="text-[#25D366]">You qualify for FREE Insured Express Delivery!</strong>
                      )}
                    </span>
                    <span className="text-[#650a06]/80">{Math.round(progressToFreeShipping)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#faf7f2] rounded-full overflow-hidden border border-[#650a06]/15">
                    <div 
                      className="h-full bg-[#650a06] rounded-full transition-all duration-500"
                      style={{ width: `${progressToFreeShipping}%` }}
                    />
                  </div>
                </div>

                {/* Shravan Special Promotion Banner */}
                <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-4 flex items-start sm:items-center gap-3.5 shadow-md">
                  <div className="p-2.5 bg-[#650a06]/10 rounded-xl text-[#650a06] shrink-0 border border-[#650a06]/20">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div className="text-xs sm:text-sm text-[#650a06] space-y-0.5">
                    <p className="font-bold text-[#650a06]">
                      Shravan Special Offer Included!
                    </p>
                    <p className="text-[#650a06]/80 font-medium">
                      Complete this order today and automatically receive a <span className="font-bold text-[#650a06]">Rs. 300</span> Gift Voucher via Email/WhatsApp upon dispatch.
                    </p>
                  </div>
                </div>

                {/* Items Container */}
                <div className="bg-[#ffffff] rounded-2xl border border-[#650a06]/20 shadow-md overflow-hidden">
                  <div className="p-4 sm:p-6 divide-y divide-[#650a06]/15">
                    {items.map((item) => (
                      <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
                        
                        {/* Product Meta */}
                        <div className="flex gap-4 items-start w-full sm:w-auto">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-[#650a06]/20 shrink-0 bg-[#faf7f2]"
                          />
                          <div className="space-y-1.5 flex-1">
                            <h3 className="font-heading font-bold text-[#650a06] text-base leading-snug">
                              {item.name}
                            </h3>
                            
                            <div className="text-xs text-[#650a06]/80 space-y-0.5 font-medium">
                              <p><span className="font-bold text-[#650a06]">Size:</span> Collector Medium (25-27mm)</p>
                              <p><span className="font-bold text-[#650a06]">Energization:</span> Free Touch Energization Included</p>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="sm:hidden inline-flex items-center gap-1 text-xs text-red-700 hover:underline font-bold pt-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" /> Remove
                            </button>
                          </div>
                        </div>

                        {/* Controls & Price Block */}
                        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-[#650a06]/15">
                          
                          {/* Unit Price */}
                          <div className="text-left sm:text-right">
                            <span className="block text-[10px] text-[#650a06]/60 uppercase tracking-wider font-bold">Price</span>
                            <span className="text-sm font-bold text-[#650a06]">{formatPrice(item.price)}</span>
                          </div>

                          {/* Quantity Switcher */}
                          <div className="flex items-center border border-[#650a06]/30 rounded-lg bg-[#faf7f2] overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1.5 text-[#650a06] hover:bg-[#650a06]/10 transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-[#650a06] tabular-nums">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 text-[#650a06] hover:bg-[#650a06]/10 transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="text-right min-w-[80px]">
                            <span className="block text-[10px] text-[#650a06]/60 uppercase tracking-wider font-bold">Total</span>
                            <span className="font-heading font-bold text-[#650a06] text-base">
                              {formatPrice(item.price * item.qty)}
                            </span>
                          </div>

                          {/* Remove button desktop */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hidden sm:block text-[#650a06]/60 hover:text-red-700 transition-colors p-1.5 rounded-lg hover:bg-red-50 cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                      </div>
                    ))}
                  </div>

                  <div className="bg-[#faf7f2] px-6 py-3.5 border-t border-[#650a06]/15 flex items-center justify-between">
                    <Link
                      href="/all-products"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#650a06] hover:underline transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Continue Shopping
                    </Link>
                    <button
                      onClick={handleClearCart}
                      className="sm:hidden text-xs text-red-700 font-bold"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                {/* Rewards Loyalty Banner */}
                <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
                  <div className="flex items-center gap-3.5 text-center sm:text-left">
                    <div className="p-3 bg-[#650a06] text-[#faf7f2] rounded-xl shrink-0 hidden sm:block shadow-xs">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#650a06] tracking-wider uppercase bg-[#650a06]/10 px-2 py-0.5 rounded border border-[#650a06]/20">
                        Sadhana Loyalty Rewards
                      </span>
                      <p className="text-sm font-bold text-[#650a06] mt-1">
                        Earn <span className="text-[#650a06] font-bold">42 Coins</span> on this purchase
                      </p>
                      <p className="text-xs text-[#650a06]/80 font-medium">Coins can be redeemed for instant discounts on future orders.</p>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs rounded-xl transition-all shrink-0 cursor-pointer shadow-xs">
                    <LogIn className="w-3.5 h-3.5 text-[#faf7f2]" /> Sign In to Earn
                  </button>
                </div>

                {/* Special Instructions Collapsible */}
                <div className="bg-[#ffffff] rounded-2xl border border-[#650a06]/20 p-4 shadow-md">
                  <button
                    onClick={() => setShowNote(!showNote)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#650a06] uppercase tracking-wider cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#650a06]" /> Add Order Instructions / Blessings Note
                    </span>
                    <span className="text-[#650a06] text-lg font-bold">{showNote ? '−' : '+'}</span>
                  </button>
                  
                  {showNote && (
                    <div className="mt-3 pt-3 border-t border-[#650a06]/15">
                      <textarea
                        rows={3}
                        value={orderNote}
                        onChange={(e) => setOrderNote(e.target.value)}
                        placeholder="Write any special requests regarding energization name, gotra, or custom packaging..."
                        className="w-full p-3 rounded-xl border border-[#650a06]/20 text-xs text-[#650a06] placeholder-[#650a06]/50 focus:outline-none focus:border-[#650a06] bg-[#faf7f2]"
                      />
                    </div>
                  )}
                </div>

              </div>

              {/* RIGHT COLUMN: Summary Box */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Checkout Summary Box */}
                <div className="bg-[#ffffff] rounded-2xl border border-[#650a06]/20 shadow-md overflow-hidden">
                  
                  <div className="bg-[#650a06] text-[#faf7f2] px-6 py-4">
                    <h2 className="font-heading text-base text-[#faf7f2] font-bold uppercase tracking-wider flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#faf7f2]" /> Order Summary
                    </h2>
                  </div>

                  <div className="p-6 space-y-5">
                    
                    {/* Price Breakdown */}
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center text-[#650a06]/80 font-medium">
                        <span>Subtotal</span>
                        <span className="font-bold text-[#650a06] text-sm">{formatPrice(subtotal)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-[#650a06]/80 font-medium">
                        <span>Estimated Express Shipping</span>
                        <span className="font-bold text-[#650a06]">
                          {amountNeeded <= 0 ? 'FREE' : 'Calculated at checkout'}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-[#650a06]/80 font-medium">
                        <span>Vedic Energization Service</span>
                        <span className="font-bold text-[#650a06]">FREE</span>
                      </div>

                      <div className="pt-3 border-t border-dashed border-[#650a06]/20 flex justify-between items-baseline">
                        <span className="font-heading font-bold text-[#650a06] text-sm">Total</span>
                        <div className="text-right">
                          <span className="font-heading font-bold text-[#650a06] text-xl block">
                            {formatPrice(subtotal)}
                          </span>
                          <span className="text-[10px] text-[#650a06]/60 font-medium">Taxes included where applicable</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms & Conditions Checkbox */}
                    <div className="space-y-2 pt-2 border-t border-[#650a06]/15">
                      <div className="flex items-start gap-2.5 text-xs text-[#650a06]/90 font-medium">
                        <input
                          type="checkbox"
                          id="cart-terms"
                          checked={agreedTerms}
                          onChange={(e) => {
                            setAgreedTerms(e.target.checked);
                            if (e.target.checked) setShowTermsError(false);
                          }}
                          className="mt-0.5 accent-[#650a06] cursor-pointer h-4 w-4"
                        />
                        <label htmlFor="cart-terms" className="cursor-pointer select-none leading-relaxed">
                          I agree to the{' '}
                          <Link href="#" className="underline text-[#650a06] font-bold">Terms of Service</Link>{' '}
                          and{' '}
                          <Link href="#" className="underline text-[#650a06] font-bold">Refund Policy</Link>.
                        </label>
                      </div>

                      {showTermsError && (
                        <div className="flex items-center gap-1.5 text-red-700 text-xs font-bold">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Please accept terms before proceeding.</span>
                        </div>
                      )}
                    </div>

                    {/* Proceed to Checkout Button */}
                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed To Checkout</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Advisory Callout */}
                    <div className="bg-[#faf7f2] border border-[#650a06]/20 rounded-xl p-3 text-[11px] font-body text-[#650a06]/85 leading-relaxed font-medium">
                      <strong className="text-[#650a06]">Notice for International Orders:</strong> Ensure international payments are enabled on your card or bank application for a smooth transaction.
                    </div>

                  </div>
                </div>

                {/* Upsell Cross-Sell Widget */}
                <div className="bg-[#ffffff] rounded-2xl border border-[#650a06]/20 p-4 space-y-3 shadow-md">
                  <span className="text-[10px] font-bold text-[#650a06] uppercase tracking-wider block bg-[#650a06]/10 border border-[#650a06]/20 px-2 py-0.5 rounded w-fit">
                    Recommended Addition
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={upsellProduct.image}
                      alt={upsellProduct.name}
                      className="w-14 h-14 rounded-lg object-cover border border-[#650a06]/20 shrink-0 bg-[#faf7f2]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading text-xs font-bold text-[#650a06] truncate">
                        {upsellProduct.name}
                      </h4>
                      <p className="text-xs font-bold text-[#650a06] mt-0.5">
                        {formatPrice(upsellProduct.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#650a06]/15">
                    <div className="flex items-center border border-[#650a06]/30 rounded bg-[#faf7f2] text-xs">
                      <button
                        onClick={() => setUpsellQty((q) => Math.max(1, q - 1))}
                        className="px-2 py-1 text-[#650a06] hover:bg-[#650a06]/10 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-[#650a06] font-bold">{upsellQty}</span>
                      <button
                        onClick={() => setUpsellQty((q) => q + 1)}
                        className="px-2 py-1 text-[#650a06] hover:bg-[#650a06]/10 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={handleAddUpsell}
                      disabled={upsellAdded}
                      className={`px-4 py-2 font-heading font-bold text-xs rounded-lg transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ${
                        upsellAdded 
                          ? 'bg-[#25D366] text-white' 
                          : 'bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2]'
                      }`}
                    >
                      {upsellAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Added
                        </>
                      ) : (
                        'Add to Order'
                      )}
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </main>

      <Footer />
    </div>
  );
}
export default CartPage;