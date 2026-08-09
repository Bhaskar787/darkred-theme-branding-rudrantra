import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useCart } from '@/models/context/CartContext';
import {
  ShieldCheck,
  Lock,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Truck,
  ArrowRight,
  ShoppingBag,
  Award,
  Flame,
  QrCode,
  ChevronDown,
  Trash2,
  RefreshCw,
  MessageSquare,
  Clock,
  ChevronLeft,
  PhoneCall,
  Mail,
  HelpCircle,
} from 'lucide-react';

type Step = 'contact' | 'consecration' | 'payment';
type PaymentStatus = 'idle' | 'processing' | 'success' | 'failed';

interface ShippingMethod {
  id: string;
  name: string;
  desc: string;
  price: number;
  eta: string;
}

const SHIPPING_METHODS: ShippingMethod[] = [
  {
    id: 'express-nepal',
    name: 'Nepal Express Delivery (Insured)',
    desc: 'Direct dispatch via Air/Courier with tamper-evident sacred seal',
    price: 0,
    eta: '1 - 2 Business Days',
  },
  {
    id: 'pashupati-energized',
    name: 'Pashupatinath Consecrated Air Express',
    desc: 'Shipped after Somwar Vedic Abhishekam ritual with Pandit bless certificate',
    price: 350,
    eta: '2 - 3 Business Days',
  },
  {
    id: 'global-express',
    name: 'Worldwide DHL / FedEx Sacred Express',
    desc: 'International tracked delivery with Lab Certificate customs clearance',
    price: 1850,
    eta: '4 - 7 Business Days',
  },
];

/* ── CHECKOUT HEADER ── */
function CheckoutHeader() {
  return (
    <header className="sticky top-0 z-[100] w-full bg-[#f2e9e6] border-b border-[#650a06]/20 shadow-md py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Rudrantra Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/images/f123.png"
            alt="Rudrantra Ventures Pvt. Ltd."
            className="h-14 sm:h-16 md:h-18 w-auto max-h-[60px] sm:max-h-[68px] md:max-h-[76px] object-contain select-none transition-transform duration-300 group-hover:scale-105"
            draggable={false}
          />
        </Link>

        {/* Security & Trust Badges */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs text-[#650a06]">
          <div className="hidden sm:flex items-center gap-1.5 bg-[#ffffff] border border-[#650a06]/25 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#650a06] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#650a06]" />
            <span>256-Bit SSL Encrypted</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-[#650a06]">
            <Lock className="w-4 h-4 text-[#650a06]" />
            <span className="hidden sm:inline">Bank Secure Checkout</span>
            <span className="sm:hidden">100% Secure</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── BRAND LOGO IMAGE COMPONENTS ── */
function EsewaLogo({ className = "h-7 sm:h-8" }: { className?: string }) {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp"
      alt="eSewa Logo"
      className={`object-contain ${className}`}
    />
  );
}

function KhaltiLogo({ className = "h-7 sm:h-8" }: { className?: string }) {
  return (
    <img
      src="https://imelondon.co.uk/assets/dist/images/imeKhalti.png"
      alt="Khalti Logo"
      className={`object-contain ${className}`}
    />
  );
}

function FonepayLogo({ className = "h-7 sm:h-8" }: { className?: string }) {
  return (
    <img
      src="https://images.seeklogo.com/logo-png/38/1/fonepay-logo-png_seeklogo-385625.png"
      alt="Fonepay Logo"
      className={`object-contain ${className}`}
    />
  );
}

function VisaMastercardLogo({ className = "h-7 sm:h-8" }: { className?: string }) {
  return (
    <img
      src="https://play-lh.googleusercontent.com/2t1Dlt4TlVotZsWGxQWSTiGQDzfkiZqmU1sUqQwTI4v-xqjZwvfvBzEI4LBt-vUrUZv5dHMYf2t-yROmoUR5hA"
      alt="Visa & Mastercard Logo"
      className={`object-contain rounded-md ${className}`}
    />
  );
}

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  const { items, subtotal, removeFromCart, updateQuantity } = useCart();
  const [currentStep, setCurrentStep] = useState<Step>('contact');
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
  const [failureReason, setFailureReason] = useState<string>('');

  // Mobile Order Summary Toggle
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  // Form Field Validation & Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Contact & Delivery Form State
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('Kathmandu');
  const [country, setCountry] = useState('Nepal');

  // Consecration & Personalization State
  const [devoteeName, setDevoteeName] = useState('');
  const [gotra, setGotra] = useState('');
  const [rashi, setRashi] = useState('');
  const [sankalpaIntention, setSankalpaIntention] = useState('Health, Peace & Protection');
  const [includeXrayCert, setIncludeXrayCert] = useState(true);

  // Shipping Method
  const [selectedShipping, setSelectedShipping] = useState<string>('express-nepal');

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'esewa' | 'khalti' | 'fonepay' | 'card' | 'cod'>('esewa');
  
  // Wallet specific form inputs
  const [esewaId, setEsewaId] = useState('');
  const [esewaMpin, setEsewaMpin] = useState('');
  const [khaltiId, setKhaltiId] = useState('');

  // Card specific inputs
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  // Coupon Discount State
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Fonepay QR Modal State
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrTimer, setQrTimer] = useState(299); // 4m 59s countdown

  // Order Information
  const [orderId, setOrderId] = useState('');
  const [transactionRef, setTransactionRef] = useState('');

  const activeShippingObj = SHIPPING_METHODS.find((s) => s.id === selectedShipping) || SHIPPING_METHODS[0];
  const shippingFee = activeShippingObj.price;
  const totalAmount = Math.max(0, subtotal - appliedDiscount + shippingFee);

  const formatPrice = (val: number) => `NPR ${val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // Timer countdown for Fonepay QR Modal
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (showQrModal && qrTimer > 0) {
      interval = setInterval(() => setQrTimer((prev) => prev - 1), 1000);
    } else if (qrTimer === 0) {
      setShowQrModal(false);
      setPaymentStatus('failed');
      setFailureReason('Fonepay Dynamic QR session expired (5 min timeout). Please try again.');
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showQrModal, qrTimer]);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const validateContactStep = () => {
    const newErrors: Record<string, string> = {};
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Valid email address is required.';
    }
    if (!phone.trim() || phone.length < 7) {
      newErrors.phone = 'Valid phone number is required for courier updates.';
    }
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!address.trim()) {
      newErrors.address = 'Street address is required.';
    }
    if (!city.trim()) {
      newErrors.city = 'City / Town is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'RUDRAN10' || code === 'SHIVARATRI') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discount);
      setCouponSuccess('10% Sacred Discount Applied Successfully!');
    } else if (code === 'PASUPATI') {
      const discount = Math.min(subtotal, 1000);
      setAppliedDiscount(discount);
      setCouponSuccess('NPR 1,000 Special Blessing Discount Applied!');
    } else {
      setCouponError('Invalid promo code. Try RUDRAN10 for 10% off.');
    }
  };

  const executePayment = (shouldFail: boolean = false) => {
    if (!validateContactStep()) {
      setCurrentStep('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setPaymentStatus('processing');

    setTimeout(() => {
      if (shouldFail) {
        setPaymentStatus('failed');
        setFailureReason('Bank authorization declined or wallet session timed out. Please check your balance or try another payment method.');
      } else {
        const generatedId = `RUD-${Math.floor(100000 + Math.random() * 900000)}`;
        const generatedTx = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
        setOrderId(generatedId);
        setTransactionRef(generatedTx);
        setPaymentStatus('success');
        setShowQrModal(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body antialiased flex flex-col relative">
      <CheckoutHeader />

      {/* Main Checkout Grid */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* ── SUCCESS VIEW ── */}
        {paymentStatus === 'success' ? (
          <div className="max-w-3xl mx-auto bg-[#ffffff] rounded-3xl border border-[#650a06]/20 shadow-xl p-6 sm:p-10 text-center space-y-8 animate-in fade-in duration-500 text-[#650a06]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#650a06]/10 text-[#650a06] border border-[#650a06]/30 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#650a06]" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-4 py-1 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] font-bold text-xs uppercase tracking-wider">
                Payment Verified · Order Confirmed
              </span>
              <h1 className="font-display text-2xl sm:text-4xl font-bold text-[#650a06] tracking-tight">
                Namaste, {firstName}! Your Order is Confirmed
              </h1>
              <p className="text-sm sm:text-base text-[#650a06]/85 max-w-lg mx-auto font-medium">
                Thank you for choosing <strong className="text-[#650a06]">Rudrantra</strong>. Your sacred items are registered for Pashupatinath Temple consecration.
              </p>
            </div>

            {/* Transaction Data Box */}
            <div className="bg-[#faf7f2] border border-[#650a06]/20 rounded-2xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#650a06]/60 block">
                  Order Reference
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#650a06]">{orderId}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#650a06]/60 block">
                  Transaction ID
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#650a06] truncate block">{transactionRef}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#650a06]/60 block">
                  Payment Method
                </span>
                <span className="font-bold text-sm text-[#650a06] uppercase">{paymentMethod}</span>
              </div>
            </div>

            {/* Timeline View */}
            <div className="bg-[#650a06] text-[#faf7f2] rounded-2xl p-5 sm:p-7 text-left space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-[#faf7f2]/20 pb-3">
                <div className="flex items-center gap-2 text-[#faf7f2] font-bold text-sm">
                  <Flame className="w-4 h-4 text-[#faf7f2]" />
                  <span>Pashupatinath Consecration Timeline</span>
                </div>
                <span className="text-[10px] text-[#faf7f2]/80 uppercase tracking-widest font-bold">
                  Status: Processing
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#faf7f2]/10 border border-[#faf7f2]/20 space-y-1">
                  <span className="font-bold text-[#faf7f2] block">1. Seed Inspection</span>
                  <p className="text-[11px] text-[#faf7f2]/80">X-Ray density &amp; mukhi verification underway.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f2]/10 border border-[#faf7f2]/20 space-y-1">
                  <span className="font-bold text-[#faf7f2] block">2. Vedic Abhishekam</span>
                  <p className="text-[11px] text-[#faf7f2]/80">Chanting bath for devotee <strong className="text-white">{devoteeName || firstName}</strong>.</p>
                </div>
                <div className="p-3 rounded-xl bg-[#faf7f2]/10 border border-[#faf7f2]/20 space-y-1">
                  <span className="font-bold text-[#faf7f2] block">3. Express Dispatch</span>
                  <p className="text-[11px] text-[#faf7f2]/80">Packed with tamper seal &amp; lab certificate.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/all-products"
                className="w-full sm:w-auto px-8 py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md text-center"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-[#faf7f2] border border-[#650a06]/30 hover:bg-white text-[#650a06] font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : paymentStatus === 'failed' ? (
          /* ── FAILED VIEW ── */
          <div className="max-w-2xl mx-auto bg-[#ffffff] rounded-3xl border border-red-300 shadow-xl p-6 sm:p-10 text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center justify-center mx-auto shadow-xs">
              <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-700" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-4 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 font-bold text-xs uppercase tracking-wider">
                Payment Unsuccessful
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">
                Payment Could Not Be Processed
              </h1>
              <p className="text-xs sm:text-sm text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 max-w-lg mx-auto leading-relaxed font-bold">
                {failureReason || 'Your transaction was cancelled or timed out. No funds were debited.'}
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-[#650a06]/20 p-4 sm:p-5 rounded-2xl text-left space-y-2 text-xs text-[#650a06]/90 font-medium">
              <span className="font-bold text-[#650a06] block">Recommended Action Steps:</span>
              <ul className="list-disc list-inside space-y-1">
                <li>Verify your wallet balance or mobile banking authorization.</li>
                <li>Choose an alternative payment option (e.g. Fonepay QR Code or Cash on Delivery).</li>
                <li>Contact our support team directly via WhatsApp for swift assistance.</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setPaymentStatus('idle')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Retry Payment</span>
              </button>

              <button
                onClick={() => {
                  setPaymentStatus('idle');
                  setPaymentMethod('cod');
                }}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#faf7f2] border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06]/10 font-bold text-xs uppercase tracking-wider rounded-xl transition-all text-center cursor-pointer"
              >
                Switch to Cash on Delivery
              </button>
            </div>
          </div>
        ) : items.length === 0 ? (
          /* Empty Bag State */
          <div className="max-w-md mx-auto text-center bg-[#ffffff] border border-[#650a06]/20 rounded-3xl p-10 shadow-md space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#650a06]/10 text-[#650a06] border border-[#650a06]/30 flex items-center justify-center mx-auto shadow-xs">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold text-[#650a06]">Your Cart is Empty</h2>
              <p className="text-xs sm:text-sm text-[#650a06]/80 font-medium">
                Explore our collection of authentic lab-certified Nepali Rudraksha beads and malas before checking out.
              </p>
            </div>
            <Link
              href="/all-products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          /* ── ACTIVE CHECKOUT FLOW ── */
          <div className="space-y-6">
            
            {/* Mobile Summary Drawer */}
            <div className="lg:hidden bg-[#ffffff] border border-[#650a06]/20 rounded-2xl overflow-hidden shadow-xs">
              <button
                onClick={() => setShowMobileSummary(!showMobileSummary)}
                className="w-full p-4 bg-[#faf7f2] flex items-center justify-between text-xs font-bold text-[#650a06] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#650a06]" />
                  <span>{showMobileSummary ? 'Hide Summary' : 'Show Summary'} ({items.length} items)</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileSummary ? 'rotate-180' : ''}`} />
                </span>
                <span className="text-sm font-bold text-[#650a06]">{formatPrice(totalAmount)}</span>
              </button>

              {showMobileSummary && (
                <div className="p-4 border-t border-[#650a06]/15 space-y-3 bg-[#ffffff]">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs gap-3">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover bg-[#faf7f2] border border-[#650a06]/20" />
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-[#650a06] block truncate">{item.name}</span>
                        <span className="text-[10px] text-[#650a06]/70">Qty: {item.qty}</span>
                      </div>
                      <span className="font-bold text-[#650a06]">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* LEFT COLUMN: MULTI-STEP FORM */}
              <div className="lg:col-span-7 space-y-6">

                {/* Stepper Header */}
                <div className="flex items-center justify-between border-b border-[#650a06]/20 pb-4">
                  <button
                    onClick={() => setCurrentStep('contact')}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      currentStep === 'contact' ? 'text-[#650a06] border-b-2 border-[#650a06] pb-1' : 'text-[#650a06]/50 hover:text-[#650a06]'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'contact' ? 'bg-[#650a06] text-[#faf7f2]' : 'bg-[#650a06]/20 text-[#650a06]'}`}>
                      1
                    </span>
                    <span>Details</span>
                  </button>

                  <ChevronRight className="w-4 h-4 text-[#650a06]/40" />

                  <button
                    onClick={() => {
                      if (validateContactStep()) setCurrentStep('consecration');
                    }}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      currentStep === 'consecration' ? 'text-[#650a06] border-b-2 border-[#650a06] pb-1' : 'text-[#650a06]/50 hover:text-[#650a06]'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'consecration' ? 'bg-[#650a06] text-[#faf7f2]' : 'bg-[#650a06]/20 text-[#650a06]'}`}>
                      2
                    </span>
                    <span>Consecration</span>
                  </button>

                  <ChevronRight className="w-4 h-4 text-[#650a06]/40" />

                  <button
                    onClick={() => {
                      if (validateContactStep()) setCurrentStep('payment');
                    }}
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                      currentStep === 'payment' ? 'text-[#650a06] border-b-2 border-[#650a06] pb-1' : 'text-[#650a06]/50 hover:text-[#650a06]'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'payment' ? 'bg-[#650a06] text-[#faf7f2]' : 'bg-[#650a06]/20 text-[#650a06]'}`}>
                      3
                    </span>
                    <span>Payment</span>
                  </button>
                </div>

                {/* ── STEP 1: CONTACT & SHIPPING ── */}
                {currentStep === 'contact' && (
                  <div className="bg-[#ffffff] rounded-3xl border border-[#650a06]/20 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-300">
                    
                    {/* Gateway Bar */}
                    <div className="bg-[#faf7f2] p-4 sm:p-5 rounded-2xl border border-[#650a06]/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#650a06]/80">
                          Official Nepal Payment Gateways
                        </span>
                        <span className="text-[10px] text-[#650a06] font-bold flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> 100% Secure
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <button
                          type="button"
                          onClick={() => {
                            if (validateContactStep()) {
                              setPaymentMethod('esewa');
                              setCurrentStep('payment');
                            }
                          }}
                          className="p-3 rounded-xl border border-[#650a06]/20 bg-[#ffffff] hover:border-[#650a06] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs"
                        >
                          <EsewaLogo className="h-6" />
                          <span className="text-[9px] font-bold text-[#650a06] mt-0.5">eSewa Wallet</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (validateContactStep()) {
                              setPaymentMethod('khalti');
                              setCurrentStep('payment');
                            }
                          }}
                          className="p-3 rounded-xl border border-[#650a06]/20 bg-[#ffffff] hover:border-[#650a06] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs"
                        >
                          <KhaltiLogo className="h-6" />
                          <span className="text-[9px] font-bold text-[#650a06] mt-0.5">Khalti Wallet</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (validateContactStep()) {
                              setPaymentMethod('fonepay');
                              setCurrentStep('payment');
                            }
                          }}
                          className="p-3 rounded-xl border border-[#650a06]/20 bg-[#ffffff] hover:border-[#650a06] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs"
                        >
                          <FonepayLogo className="h-6" />
                          <span className="text-[9px] font-bold text-[#650a06] mt-0.5">Fonepay QR</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (validateContactStep()) {
                              setPaymentMethod('card');
                              setCurrentStep('payment');
                            }
                          }}
                          className="p-3 rounded-xl border border-[#650a06]/20 bg-[#ffffff] hover:border-[#650a06] transition-all flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs"
                        >
                          <VisaMastercardLogo className="h-5" />
                          <span className="text-[9px] font-bold text-[#650a06] mt-0.5">Debit/Credit Card</span>
                        </button>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-4">
                      <h2 className="font-display text-xl font-bold text-[#650a06]">
                        1. Contact Information
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                            }}
                            placeholder="namaste@domain.com"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.email ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                            } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                          />
                          {errors.email && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Mobile Number (for Courier &amp; SMS) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                            }}
                            placeholder="+977 9800000000"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.phone ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                            } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                          />
                          {errors.phone && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <label className="flex items-center gap-2 cursor-pointer pt-1">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded accent-[#650a06] h-4 w-4"
                        />
                        <span className="text-xs text-[#650a06]/90 font-medium">
                          Receive tracking and Pashupatinath consecration photos via SMS &amp; Email
                        </span>
                      </label>
                    </div>

                    <hr className="border-[#650a06]/15" />

                    {/* Shipping Address Inputs */}
                    <div className="space-y-4">
                      <h2 className="font-display text-xl font-bold text-[#650a06]">
                        2. Shipping Address
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => {
                              setFirstName(e.target.value);
                              if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: '' }));
                            }}
                            placeholder="First Name"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.firstName ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                            } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                          />
                          {errors.firstName && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.firstName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => {
                              setLastName(e.target.value);
                              if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: '' }));
                            }}
                            placeholder="Last Name"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.lastName ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                            } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                          />
                          {errors.lastName && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                          Street Address &amp; House / Tole No. *
                        </label>
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                            if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                          }}
                          placeholder="House No, Street Name, Tole or Landmark"
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.address ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                          } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                        />
                        {errors.address && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.address}</p>}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            City / Town *
                          </label>
                          <input
                            type="text"
                            required
                            value={city}
                            onChange={(e) => {
                              setCity(e.target.value);
                              if (errors.city) setErrors((prev) => ({ ...prev, city: '' }));
                            }}
                            placeholder="Kathmandu"
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.city ? 'border-red-500 bg-red-50' : 'border-[#650a06]/20 bg-[#faf7f2]'
                            } text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]`}
                          />
                          {errors.city && <p className="text-[11px] text-red-700 font-bold mt-1">{errors.city}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            District / Region *
                          </label>
                          <input
                            type="text"
                            required
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            placeholder="District"
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Country *
                          </label>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06] cursor-pointer"
                          >
                            <option value="Nepal">Nepal</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="Germany">Germany</option>
                            <option value="Other International">Other International</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <hr className="border-[#650a06]/15" />

                    {/* Shipping Method Selector */}
                    <div className="space-y-3">
                      <h2 className="font-display text-xl font-bold text-[#650a06]">
                        3. Shipping Method
                      </h2>

                      <div className="space-y-2.5">
                        {SHIPPING_METHODS.map((method) => (
                          <label
                            key={method.id}
                            onClick={() => setSelectedShipping(method.id)}
                            className={`flex items-start justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                              selectedShipping === method.id
                                ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs'
                                : 'border-[#650a06]/20 bg-[#faf7f2] hover:border-[#650a06]'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="radio"
                                name="shipping"
                                checked={selectedShipping === method.id}
                                onChange={() => setSelectedShipping(method.id)}
                                className="mt-1 accent-[#650a06]"
                              />
                              <div>
                                <span className="font-bold text-xs sm:text-sm text-[#650a06] block">
                                  {method.name}
                                </span>
                                <span className="text-xs text-[#650a06]/80 font-medium block mt-0.5">
                                  {method.desc}
                                </span>
                                <span className="text-[10px] font-bold text-[#650a06] mt-1 inline-block">
                                  Arrival: {method.eta}
                                </span>
                              </div>
                            </div>
                            <span className="font-bold text-xs sm:text-sm text-[#650a06] shrink-0">
                              {method.price === 0 ? 'FREE' : formatPrice(method.price)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (validateContactStep()) {
                          setCurrentStep('consecration');
                          window.scrollTo({ top: 100, behavior: 'smooth' });
                        }
                      }}
                      className="w-full py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Consecration</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* ── STEP 2: CONSECRATION ── */}
                {currentStep === 'consecration' && (
                  <div className="bg-[#ffffff] rounded-3xl border border-[#650a06]/20 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-300">
                    <div className="bg-[#650a06] text-[#faf7f2] p-5 rounded-2xl space-y-2 shadow-xs">
                      <div className="flex items-center gap-2 text-[#faf7f2] font-bold text-sm">
                        <span>Free Pashupatinath Temple Abhishekam</span>
                      </div>
                      <p className="text-xs font-medium text-[#faf7f2]/90 leading-relaxed">
                        Every bead is personalized with your birth details (Gotra &amp; Rashi). Our pandas perform Rudra Japa in your name prior to dispatch.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h2 className="font-display text-xl font-bold text-[#650a06]">
                        Vedic Sankalpa Details (Optional)
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Devotee Full Name
                          </label>
                          <input
                            type="text"
                            value={devoteeName}
                            onChange={(e) => setDevoteeName(e.target.value)}
                            placeholder={firstName ? `${firstName} ${lastName}` : 'Devotee Name'}
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Vedic Gotra (If Known)
                          </label>
                          <input
                            type="text"
                            value={gotra}
                            onChange={(e) => setGotra(e.target.value)}
                            placeholder="e.g. Kashyapa / Vashistha"
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Birth Rashi / Zodiac Sign
                          </label>
                          <input
                            type="text"
                            value={rashi}
                            onChange={(e) => setRashi(e.target.value)}
                            placeholder="e.g. Mesha, Vrishabha..."
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#650a06] mb-1.5">
                            Primary Intention
                          </label>
                          <select
                            value={sankalpaIntention}
                            onChange={(e) => setSankalpaIntention(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs sm:text-sm text-[#650a06] focus:outline-none focus:border-[#650a06] cursor-pointer"
                          >
                            <option value="Health, Peace & Protection">Health, Peace &amp; Protection</option>
                            <option value="Career, Wealth & Success">Career, Wealth &amp; Success</option>
                            <option value="Spiritual Growth & Meditation">Spiritual Growth &amp; Meditation</option>
                            <option value="Remove Saturn/Rahu Dasha Remedies">Remove Saturn/Rahu Dasha Remedies</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <hr className="border-[#650a06]/15" />

                    <div className="space-y-3">
                      <h2 className="font-display text-xl font-bold text-[#650a06]">
                        Lab Certification
                      </h2>

                      <label className="flex items-start gap-3 p-4 rounded-2xl border border-[#650a06]/20 bg-[#faf7f2] cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeXrayCert}
                          onChange={(e) => setIncludeXrayCert(e.target.checked)}
                          className="mt-1 accent-[#650a06] h-4 w-4"
                        />
                        <div>
                          <span className="font-bold text-xs sm:text-sm text-[#650a06] block">
                            Include Numbered Government X-Ray Lab Certificate (Free)
                          </span>
                          <span className="text-xs text-[#650a06]/80 font-medium block mt-0.5">
                            Verifies internal seed chambers (mukhis) and density ratio.
                          </span>
                        </div>
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep('contact')}
                        className="w-1/3 py-4 bg-[#faf7f2] hover:bg-white text-[#650a06] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#650a06]/20 transition-all cursor-pointer text-center flex items-center justify-center gap-1"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentStep('payment');
                          window.scrollTo({ top: 100, behavior: 'smooth' });
                        }}
                        className="w-2/3 py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Proceed to Payment</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: PAYMENT METHOD ── */}
                {currentStep === 'payment' && (
                  <div className="bg-[#ffffff] rounded-3xl border border-[#650a06]/20 p-6 sm:p-8 shadow-md space-y-6 animate-in fade-in duration-300">
                    <div className="space-y-1">
                      <h2 className="font-display text-2xl font-bold text-[#650a06] flex items-center gap-2">
                        <span>Select Payment Method</span>
                        <Lock className="w-4 h-4 text-[#650a06]" />
                      </h2>
                      <p className="text-xs text-[#650a06]/80 font-medium">
                        100% encrypted processing via official banking gateways in Nepal.
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      
                      {/* 1. eSewa */}
                      <div
                        onClick={() => setPaymentMethod('esewa')}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          paymentMethod === 'esewa' ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs' : 'border-[#650a06]/20 bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === 'esewa'}
                              onChange={() => setPaymentMethod('esewa')}
                              className="accent-[#650a06]"
                            />
                            <div className="flex items-center gap-3">
                              <EsewaLogo className="h-7" />
                              <span className="font-bold text-sm text-[#650a06]">eSewa Mobile Wallet</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold bg-[#650a06] text-[#faf7f2] px-2.5 py-0.5 rounded-full uppercase">Instant</span>
                        </div>

                        {paymentMethod === 'esewa' && (
                          <div className="mt-4 pt-4 border-t border-[#650a06]/15 space-y-3.5 text-xs text-[#650a06]">
                            <p className="font-medium">Enter your registered eSewa account ID to complete payment.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#faf7f2] p-3.5 rounded-xl border border-[#650a06]/20">
                              <div>
                                <label className="block text-[10px] font-bold text-[#650a06] mb-1">
                                  eSewa ID / Mobile
                                </label>
                                <input
                                  type="text"
                                  value={esewaId}
                                  onChange={(e) => setEsewaId(e.target.value)}
                                  placeholder="9800000000"
                                  className="w-full px-3 py-2 rounded-lg border border-[#650a06]/20 text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06] bg-[#ffffff]"
                                />
                              </div>

                              <div>
                                <label className="block text-[10px] font-bold text-[#650a06] mb-1">
                                  Password / MPIN
                                </label>
                                <input
                                  type="password"
                                  value={esewaMpin}
                                  onChange={(e) => setEsewaMpin(e.target.value)}
                                  placeholder="••••"
                                  maxLength={6}
                                  className="w-full px-3 py-2 rounded-lg border border-[#650a06]/20 text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06] bg-[#ffffff]"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 2. Khalti */}
                      <div
                        onClick={() => setPaymentMethod('khalti')}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          paymentMethod === 'khalti' ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs' : 'border-[#650a06]/20 bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === 'khalti'}
                              onChange={() => setPaymentMethod('khalti')}
                              className="accent-[#650a06]"
                            />
                            <div className="flex items-center gap-3">
                              <KhaltiLogo className="h-7" />
                              <span className="font-bold text-sm text-[#650a06]">Khalti Mobile Wallet</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold bg-[#650a06] text-[#faf7f2] px-2.5 py-0.5 rounded-full uppercase">Wallet</span>
                        </div>

                        {paymentMethod === 'khalti' && (
                          <div className="mt-4 pt-4 border-t border-[#650a06]/15 space-y-3.5 text-xs text-[#650a06]">
                            <p className="font-medium">Pay via Khalti account or linked Mobile Banking app.</p>
                            <div className="bg-[#faf7f2] p-3.5 rounded-xl border border-[#650a06]/20 space-y-2">
                              <label className="block text-[10px] font-bold text-[#650a06]">
                                Khalti Mobile Number
                              </label>
                              <input
                                type="text"
                                value={khaltiId}
                                onChange={(e) => setKhaltiId(e.target.value)}
                                placeholder="98XXXXXXXX"
                                className="w-full px-3 py-2 rounded-lg border border-[#650a06]/20 text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06] bg-[#ffffff]"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 3. Fonepay QR */}
                      <div
                        onClick={() => setPaymentMethod('fonepay')}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          paymentMethod === 'fonepay' ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs' : 'border-[#650a06]/20 bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === 'fonepay'}
                              onChange={() => setPaymentMethod('fonepay')}
                              className="accent-[#650a06]"
                            />
                            <div className="flex items-center gap-3">
                              <FonepayLogo className="h-7" />
                              <span className="font-bold text-sm text-[#650a06]">Fonepay Dynamic QR Code</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold bg-[#650a06] text-[#faf7f2] px-2.5 py-0.5 rounded-full uppercase">All Banks</span>
                        </div>

                        {paymentMethod === 'fonepay' && (
                          <div className="mt-4 pt-4 border-t border-[#650a06]/15 space-y-3.5 text-xs text-[#650a06]">
                            <p className="font-medium">A dynamic Fonepay QR code with exact order amount ({formatPrice(totalAmount)}) will open. Compatible with Global IME, Nabil, NIC Asia, Prabhu, EBL, and all mobile banking apps.</p>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setQrTimer(299);
                                setShowQrModal(true);
                              }}
                              className="w-full py-3 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                            >
                              <QrCode className="w-4 h-4" />
                              <span>Generate Fonepay Dynamic QR</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* 4. Cards */}
                      <div
                        onClick={() => setPaymentMethod('card')}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          paymentMethod === 'card' ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs' : 'border-[#650a06]/20 bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === 'card'}
                              onChange={() => setPaymentMethod('card')}
                              className="accent-[#650a06]"
                            />
                            <div className="flex items-center gap-3">
                              <VisaMastercardLogo className="h-5" />
                              <span className="font-bold text-sm text-[#650a06]">Credit / Debit Card (Visa, Mastercard, SCT)</span>
                            </div>
                          </div>
                        </div>

                        {paymentMethod === 'card' && (
                          <div className="mt-4 pt-4 border-t border-[#650a06]/15 space-y-4 text-xs">
                            <div className="bg-[#650a06] text-[#faf7f2] p-4 rounded-2xl shadow-md space-y-4 border border-[#650a06]">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-[#faf7f2] uppercase tracking-wider">
                                  256-Bit Encrypted
                                </span>
                                <span className="text-xs font-mono font-bold text-[#faf7f2]">VISA / MC</span>
                              </div>
                              <div className="font-mono text-base tracking-widest text-[#faf7f2] pt-2">
                                {cardNumber || '•••• •••• •••• ••••'}
                              </div>
                              <div className="flex justify-between items-end text-[10px]">
                                <div>
                                  <span className="text-[#faf7f2]/70 block text-[8px] uppercase">Cardholder</span>
                                  <span className="font-bold uppercase text-[#faf7f2]">{cardHolder || 'DEVOTEE NAME'}</span>
                                </div>
                                <div>
                                  <span className="text-[#faf7f2]/70 block text-[8px] uppercase">Expires</span>
                                  <span className="font-mono font-bold text-[#faf7f2]">{cardExpiry || 'MM/YY'}</span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block font-bold text-[#650a06] mb-1">
                                  Cardholder Name
                                </label>
                                <input
                                  type="text"
                                  value={cardHolder}
                                  onChange={(e) => setCardHolder(e.target.value)}
                                  placeholder="Name on card"
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs text-[#650a06] focus:outline-none focus:border-[#650a06]"
                                />
                              </div>

                              <div>
                                <label className="block font-bold text-[#650a06] mb-1">
                                  Card Number
                                </label>
                                <input
                                  type="text"
                                  value={cardNumber}
                                  onChange={(e) => setCardNumber(e.target.value)}
                                  placeholder="4111 2222 3333 4444"
                                  maxLength={19}
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06]"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block font-bold text-[#650a06] mb-1">
                                  Expiry Date
                                </label>
                                <input
                                  type="text"
                                  value={cardExpiry}
                                  onChange={(e) => setCardExpiry(e.target.value)}
                                  placeholder="MM/YY"
                                  maxLength={5}
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06]"
                                />
                              </div>

                              <div>
                                <label className="block font-bold text-[#650a06] mb-1">
                                  CVV / CVC
                                </label>
                                <input
                                  type="password"
                                  value={cardCvc}
                                  onChange={(e) => setCardCvc(e.target.value)}
                                  placeholder="123"
                                  maxLength={4}
                                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs font-mono text-[#650a06] focus:outline-none focus:border-[#650a06]"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 5. COD */}
                      <div
                        onClick={() => setPaymentMethod('cod')}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                          paymentMethod === 'cod' ? 'border-[#650a06] bg-[#650a06]/10 shadow-xs' : 'border-[#650a06]/20 bg-[#ffffff]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="payment"
                              checked={paymentMethod === 'cod'}
                              onChange={() => setPaymentMethod('cod')}
                              className="accent-[#650a06]"
                            />
                            <span className="font-bold text-sm text-[#650a06]">Cash on Delivery (Nepal Cities)</span>
                          </div>
                          <Truck className="w-5 h-5 text-[#650a06]" />
                        </div>

                        {paymentMethod === 'cod' && (
                          <div className="mt-4 pt-3 border-t border-[#650a06]/15 text-xs text-[#650a06]/85 font-medium">
                            <p>Pay cash upon delivery. Orders undergo quick phone verification prior to dispatch.</p>
                          </div>
                        )}
                      </div>

                    </div>

                    <div className="space-y-3 pt-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep('consecration')}
                          className="w-full sm:w-1/3 py-3.5 sm:py-4 px-4 bg-[#faf7f2] hover:bg-white text-[#650a06] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#650a06]/20 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-xs"
                        >
                          <ChevronLeft className="w-4 h-4 shrink-0" />
                          <span>Back</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => executePayment(false)}
                          disabled={paymentStatus === 'processing'}
                          className="w-full sm:w-2/3 py-3.5 sm:py-4 px-4 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 text-center leading-tight min-w-0"
                        >
                          {paymentStatus === 'processing' ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Lock className="w-4 h-4 shrink-0" />
                              <span className="truncate sm:whitespace-normal">Complete Order ({formatPrice(totalAmount)})</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-center pt-2">
                        <button
                          type="button"
                          onClick={() => executePayment(true)}
                          className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-mono font-bold text-[11px] sm:text-xs rounded-xl border border-red-200 transition-all cursor-pointer shadow-xs break-words leading-normal"
                        >
                          [Dev Test: Simulate Payment Failure]
                        </button>
                      </div>
                    </div>

                  </div>
                )}

              </div>

              {/* RIGHT COLUMN: HANGING STICKY ORDER SUMMARY */}
              <div className="hidden lg:block lg:col-span-5 sticky top-24 space-y-6">
                
                {/* Main Order Summary Card */}
                <div className="bg-[#ffffff] rounded-3xl border border-[#650a06]/20 p-6 sm:p-7 shadow-md space-y-6 text-[#650a06]">
                  
                  <div className="flex items-center justify-between border-b border-[#650a06]/15 pb-4">
                    <h2 className="font-display text-xl font-bold text-[#650a06]">Order Summary</h2>
                    <span className="text-xs font-bold text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3 py-1 rounded-full">
                      {items.length} {items.length === 1 ? 'Item' : 'Items'}
                    </span>
                  </div>

                  {/* Items List */}
                  <div className="space-y-3.5 max-h-[280px] overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3.5 items-center justify-between p-2.5 rounded-2xl bg-[#faf7f2] border border-[#650a06]/20">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#ffffff] shrink-0 border border-[#650a06]/15">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          <span className="absolute top-0 right-0 bg-[#650a06] text-[#faf7f2] text-[9px] font-bold px-1.5 py-0.5 rounded-bl-md">
                            x{item.qty}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs sm:text-sm text-[#650a06] truncate">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-[#650a06]/70 font-medium block">
                            Lab Certified &amp; Consecrated
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded bg-[#ffffff] border border-[#650a06]/30 text-xs font-bold text-[#650a06] flex items-center justify-center cursor-pointer hover:bg-[#650a06]/10"
                            >
                              -
                            </button>
                            <span className="text-xs font-mono font-bold text-[#650a06]">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded bg-[#ffffff] border border-[#650a06]/30 text-xs font-bold text-[#650a06] flex items-center justify-center cursor-pointer hover:bg-[#650a06]/10"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-bold text-xs sm:text-sm text-[#650a06] block">
                            {formatPrice(item.price * item.qty)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-[10px] text-red-700 hover:underline cursor-pointer mt-1 inline-flex items-center gap-0.5 font-bold"
                          >
                            <Trash2 className="w-3 h-3" /> Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Form */}
                  <form onSubmit={handleApplyCoupon} className="pt-1">
                    <label className="block text-xs font-bold text-[#650a06] mb-1">
                      Have a Promo or Blessing Code?
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="RUDRAN10"
                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#650a06]/20 bg-[#faf7f2] text-xs font-mono uppercase text-[#650a06] focus:outline-none focus:border-[#650a06]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponSuccess && <p className="text-[11px] font-bold text-[#25D366] mt-1.5">{couponSuccess}</p>}
                    {couponError && <p className="text-[11px] font-bold text-red-700 mt-1.5">{couponError}</p>}
                  </form>

                  <hr className="border-[#650a06]/15" />

                  {/* Pricing Breakdown */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-[#650a06]/80 font-medium">
                      <span>Items Subtotal</span>
                      <span className="font-bold text-[#650a06]">{formatPrice(subtotal)}</span>
                    </div>

                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-[#25D366] font-bold">
                        <span>Promo Discount</span>
                        <span>- {formatPrice(appliedDiscount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[#650a06]/80 font-medium">
                      <span>Shipping ({activeShippingObj.name})</span>
                      <span className="font-bold text-[#650a06]">
                        {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                      </span>
                    </div>

                    <div className="flex justify-between text-[#650a06]/80 font-medium">
                      <span>Pashupatinath Consecration</span>
                      <span className="font-bold text-[#650a06] uppercase">FREE</span>
                    </div>

                    <div className="flex justify-between text-[#650a06]/80 font-medium">
                      <span>Government Lab Certificate</span>
                      <span className="font-bold text-[#650a06] uppercase">FREE</span>
                    </div>

                    <div className="pt-3 border-t border-[#650a06]/15 flex justify-between items-baseline">
                      <span className="font-heading font-bold text-[#650a06] text-sm">Total Investment</span>
                      <div className="text-right">
                        <span className="font-heading font-bold text-[#650a06] text-xl block">
                          {formatPrice(totalAmount)}
                        </span>
                        <span className="text-[10px] text-[#650a06]/60 block font-medium">Includes all local taxes &amp; insurance</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="bg-[#faf7f2] p-3.5 rounded-2xl border border-[#650a06]/20 space-y-2 text-[11px] text-[#650a06] font-medium">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#650a06] shrink-0" />
                      <span>100% Original Nepal Origin Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#650a06] shrink-0" />
                      <span>Numbered X-Ray Density Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#650a06] shrink-0" />
                      <span>Insured Transit &amp; Replacement Protection</span>
                    </div>
                  </div>

                </div>

                {/* NEED HELP / DIRECT CONTACT ASSISTANCE CARD */}
                <div className="bg-[#650a06] text-[#faf7f2] rounded-3xl p-5 border border-[#650a06] space-y-3.5 shadow-md">
                  <div className="flex items-center gap-2.5 text-[#faf7f2]">
                    <HelpCircle className="w-5 h-5 shrink-0 text-[#faf7f2]" />
                    <h3 className="font-heading font-bold text-sm text-[#faf7f2]">Need Assistance With Order?</h3>
                  </div>

                  <p className="text-xs text-[#faf7f2]/90 leading-relaxed font-medium">
                    Have questions about bead sizing, gotra registration, or payment methods? Speak directly with our Pandit or support team:
                  </p>

                  <div className="space-y-2 text-xs pt-2 border-t border-[#faf7f2]/20">
                    <a
                      href="tel:+9779715551396"
                      className="flex items-center gap-2.5 text-[#faf7f2] hover:underline font-bold"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#faf7f2] shrink-0" />
                      <span>+977 9715551396 (Call Support)</span>
                    </a>

                    <a
                      href="mailto:support@rudrantra.com"
                      className="flex items-center gap-2.5 text-[#faf7f2] hover:underline font-bold"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#faf7f2] shrink-0" />
                      <span>support@rudrantra.com</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* ── FONEPAY DYNAMIC QR MODAL ── */}
      {showQrModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#ffffff] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 relative border border-[#650a06]/30 shadow-2xl text-center text-[#650a06]">
            
            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#650a06]/70 hover:text-[#650a06] hover:bg-[#faf7f2] cursor-pointer text-sm font-bold"
            >
              ✕
            </button>

            <div className="space-y-2">
              <FonepayLogo className="h-8 mx-auto" />
              <h3 className="font-heading text-xl font-bold text-[#650a06]">
                Fonepay Merchant QR
              </h3>
              <p className="text-xs text-[#650a06]/80 font-medium">
                Merchant: <strong className="text-[#650a06]">RUDRANTRA SACRED TREASURY</strong>
              </p>
            </div>

            <div className="bg-[#faf7f2] p-5 rounded-2xl border-2 border-dashed border-[#650a06]/30 space-y-3">
              <div className="w-48 h-48 bg-[#ffffff] p-3 rounded-xl mx-auto shadow-sm border border-[#650a06]/20 flex flex-col items-center justify-center relative">
                <div className="w-full h-full border-4 border-[#650a06] p-2 flex flex-col justify-between items-center relative">
                  <div className="w-full flex justify-between">
                    <div className="w-8 h-8 bg-[#650a06]" />
                    <div className="w-8 h-8 bg-[#650a06]" />
                  </div>
                  <div className="text-center font-mono font-bold text-[10px] text-[#650a06]">
                    RUDRANTRA SCAN
                  </div>
                  <div className="w-full flex justify-between">
                    <div className="w-8 h-8 bg-[#650a06]" />
                    <div className="w-6 h-6 bg-[#650a06] rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                      F
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-0.5">
                <span className="text-[10px] font-bold text-[#650a06]/60 uppercase tracking-wider block">
                  Amount to Pay
                </span>
                <span className="font-heading text-2xl font-bold text-[#650a06]">
                  {formatPrice(totalAmount)}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#650a06]/30 text-[#650a06] text-xs font-mono font-bold">
                <Clock className="w-3.5 h-3.5 text-[#650a06]" />
                <span>Expires In:</span>
                <span className="text-[#650a06] font-bold">{formatTimer(qrTimer)}</span>
              </div>

              <p className="text-xs text-[#650a06]/85 leading-relaxed font-medium">
                Scan using Global IME, Nabil, NIC Asia, Prabhu, eSewa or any Mobile Banking application in Nepal to confirm payment.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowQrModal(false);
                  executePayment(false);
                }}
                className="w-full py-3.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
              >
                I Have Completed Payment
              </button>

              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="w-full py-2 text-xs font-bold text-[#650a06]/70 hover:text-[#650a06] cursor-pointer"
              >
                Cancel &amp; Select Other Method
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}