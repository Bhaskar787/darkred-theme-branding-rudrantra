import { ShieldCheck, BadgeCheck, HeartHandshake, Globe2, Star } from 'lucide-react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmex,
} from 'react-icons/fa';
import { SiGooglepay, SiRazorpay, SiPaytm, SiShopify } from 'react-icons/si';

const paymentMethods = [
  { name: 'Visa', icon: FaCcVisa, color: '#1A1F71' },
  { name: 'Mastercard', icon: FaCcMastercard, color: '#EB001B' },
  { name: 'RuPay', icon: null },
  { name: 'UPI', icon: null },
  { name: 'Razorpay', icon: SiRazorpay, color: '#0C2451' },
  { name: 'Paytm', icon: SiPaytm, color: '#00BAF2' },
  { name: 'American Express', icon: FaCcAmex, color: '#006FCF' },
  { name: 'Apple Pay', icon: FaCcApplePay, color: '#000000' },
  { name: 'Google Pay', icon: SiGooglepay, color: '#4285F4' },
  { name: 'PayPal', icon: FaCcPaypal, color: '#003087' },
  { name: 'Shop Pay', icon: SiShopify, color: '#5A31F4' },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    desc: 'Encrypted & Safe Checkout',
  },
  {
    icon: BadgeCheck,
    title: 'ISO 9001 Compliant Operation',
    desc: 'Certified. Verified. Trusted.',
  },
  {
    icon: HeartHandshake,
    title: 'Consumer-Centric Care',
    desc: 'Designed with your well-being and transformation in mind.',
  },
  {
    icon: Globe2,
    title: 'Safe & Secure Worldwide Shipping',
    desc: 'Tracked delivery to your doorstep.',
  },
];

export function TrustPaymentBar() {
  return (
    <section className="relative bg-[#efe1d5] border-y border-[#650a06]/20 overflow-hidden">
      {/* Payment methods marquee strip */}
      <div className="w-full">
        <div className="relative border-y border-[#650a06]/20 bg-[#ffffff] overflow-hidden shadow-xs">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#ffffff] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#ffffff] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap items-center py-3">
            {[...paymentMethods, ...paymentMethods].map((method, i) => (
              <div
                key={i}
                className="flex items-center gap-2 shrink-0 mx-2.5 px-4 py-1.5 rounded-lg text-[#650a06] font-heading font-bold text-xs tracking-wide"
              >
                {method.icon ? (
                  <method.icon className="w-5 h-5 shrink-0" style={{ color: method.color }} />
                ) : method.name === 'RuPay' ? (
                  <span className="w-6 h-5 shrink-0 rounded bg-[#650a06] text-[#f7e5d9] flex items-center justify-center text-[7px] font-bold tracking-tighter">
                    RuPay
                  </span>
                ) : (
                  <span className="w-6 h-5 shrink-0 rounded bg-[#650a06] text-[#f7e5d9] flex items-center justify-center text-[8px] font-bold tracking-tighter">
                    UPI
                  </span>
                )}
                <span>{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OM Divider */}
      <div className="flex items-center justify-center gap-4 px-4 py-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      {/* Store rating */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center text-center border-b border-[#650a06]/15">
        <span className="text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-[#650a06]/70 mb-3">
          Store Rating
        </span>
        <div className="flex items-center gap-3">
          <span className="text-4xl md:text-5xl font-display font-bold text-[#650a06]">4.9</span>
          <div className="flex flex-col items-start gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#650a06] text-[#650a06]" />
              ))}
            </div>
            <span className="text-xs font-heading font-bold tracking-widest text-[#650a06]/85 uppercase">
              1.6K+ Customer Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Trust badges grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {trustBadges.map((badge) => (
          <div key={badge.title} className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] shadow-xs">
              <badge.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm md:text-base uppercase tracking-wider text-[#650a06] mb-1.5">
                {badge.title}
              </h4>
              <p className="text-[#650a06]/85 font-body text-xs md:text-sm font-medium leading-relaxed max-w-[220px]">
                {badge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}