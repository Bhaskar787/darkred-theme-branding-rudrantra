import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { X, Flame, ShoppingBag, Sparkles, Clock } from 'lucide-react';

export function FloatingBlogAd() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 42, seconds: 18 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside className="hidden lg:block fixed top-36 right-6 z-30 w-[320px] group">
      
      {/* EXPANDING RADAR WAVE GLOW RINGS (Like WhatsApp Wave Effect) */}
      <div className="absolute -inset-2 rounded-3xl bg-orange/35 animate-ping opacity-40 pointer-events-none" />
      <div className="absolute -inset-1 rounded-3xl bg-orange/25 animate-pulse pointer-events-none" />

      {/* MAIN ADVERT CARD */}
      <div className="relative bg-navy-deep text-peach border-2 border-orange shadow-[0_12px_40px_rgba(252,146,105,0.35)] rounded-2xl p-4 overflow-hidden backdrop-blur-xl animate-in slide-in-from-right-10 duration-500">
        
        {/* Subtle mandala watermark */}
        <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2.5 right-2.5 p-1 text-orange/70 hover:text-orange hover:bg-white/10 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Close Advertisement"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Badge & Countdown Timer */}
        <div className="flex items-center justify-between gap-2 mb-3 pr-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-wider text-orange bg-orange/15 border border-orange/40 px-2.5 py-1 rounded-full shadow-xs">
            <Flame className="w-3.5 h-3.5 text-orange animate-pulse" />
            <span>SPECIAL SHRAVAN OFFER</span>
          </span>

          <div className="flex items-center gap-1 text-[9px] font-heading font-bold text-peach/80 bg-navy/80 px-2 py-0.5 rounded-full border border-orange/20">
            <Clock className="w-3 h-3 text-orange" />
            <span>
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex gap-3 items-center relative z-10">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-orange/50 shrink-0 bg-white">
            <img
              src="https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214"
              alt="1 Mukhi Nepali Chandrakar Shila"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <span className="absolute bottom-0 inset-x-0 text-[7px] font-heading uppercase text-center bg-orange text-navy-deep font-bold py-0.5">
              1 Mukhi
            </span>
          </div>

          <div className="space-y-1 min-w-0 flex-1">
            <h4 className="font-display text-xs font-bold text-peach line-clamp-2 leading-snug group-hover:text-orange transition-colors">
              Authentic Nepali 1 Mukhi Chandrakar Shila
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-heading font-bold text-orange">₹14,999</span>
              <span className="text-[10px] line-through text-peach/50">₹18,500</span>
              <span className="text-[8px] bg-crimson text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                19% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle Guarantee */}
        <div className="flex items-center justify-between text-[9px] font-heading uppercase text-peach/70 mt-2.5 pt-2 border-t border-orange/20 relative z-10">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-orange" />
            100% Consecrated
          </span>
          <span className="text-orange font-bold">Free Silver Chain</span>
        </div>

        {/* CTA Button */}
        <Link
          href="/product/r1"
          className="mt-3 w-full py-2.5 bg-gradient-to-r from-orange via-orange-bright to-orange text-navy-deep font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md hover:shadow-sacred-glow transition-all flex items-center justify-center gap-1.5 relative z-10 group/btn"
        >
          <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
          <span>Claim Offer Now →</span>
        </Link>
      </div>

    </aside>
  );
}