import { Sparkles, Leaf, ShoppingCart, Truck } from 'lucide-react';

// Map icons to the announcements matching Rudrantra theme
const announcements = [
  { text: 'Free Vedic Consecration & Consultation on orders above ₹5,000', icon: Sparkles },
  { text: '100% Authentic Nepal-Origin Rudraksha — Lab Certified & Consecrated', icon: Leaf },
  { text: 'Shravan Special: 10% Off All Siddha Malas This Month', icon: ShoppingCart },
  { text: 'Free Worldwide Express Shipping on All Mala Orders', icon: Truck },
];

export function AnnouncementBar() {
  return (
    <div className="relative bg-[#faecc3] border-b border-[#650a06]/20 text-[#650a06] overflow-hidden shadow-xs z-[101]">

      {/* Soft Ambient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#650a06]/5 to-transparent pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#650a06]/30 to-transparent pointer-events-none" />

      {/* Edge gradient fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-[#efe1d5] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-[#efe1d5] to-transparent z-10" />

      {/* Marquee Content */}
      <div className="flex animate-marquee whitespace-nowrap py-2.5 items-center font-bold">
        {[...announcements, ...announcements].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center shrink-0 px-6 sm:px-8 gap-2.5 sm:gap-3">
              {/* Icon Container */}
              <span className="flex items-center justify-center w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] shrink-0">
                <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              </span>
              
              {/* Text */}
              <span className="uppercase tracking-[0.18em] text-[10px] sm:text-[11px] text-[#650a06] font-semibold">
                {item.text}
              </span>
              
              {/* Diamond Separator */}
              <span className="ml-6 sm:ml-8 w-1.5 h-1.5 rotate-45 bg-[#650a06]/40 shrink-0" aria-hidden />
            </div>
          );
        })}
      </div>

    </div>
  );
}