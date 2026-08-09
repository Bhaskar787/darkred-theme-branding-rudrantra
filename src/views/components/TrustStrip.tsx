import { GiLotusFlower, GiMeditation, GiMountainCave } from 'react-icons/gi';

const trustItems = [
  {
    icon: GiMeditation,
    title: "Vedic Energization",
    desc: "Blessed according to ancient Vedic scriptures."
  },
  {
    icon: GiMountainCave,
    title: "Himalayan Origin",
    desc: "Exclusively from Nepal's sacred Arun Valley."
  },
  {
    icon: GiLotusFlower,
    title: "Lab Verification",
    desc: "100% authentic, X-Ray certified for peace of mind."
  }
];

export function TrustStrip() {
  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#faf7f2] text-[#650a06] border-b border-[#650a06]/20 overflow-hidden">
      {/* Soft Light Cream Ambient Glow */}
      <div className="absolute top-1/2 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#650a06]/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#650a06]/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <div 
              key={i} 
              className="relative px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-[#650a06]/20 bg-[#ffffff] shadow-md flex items-center gap-3.5 text-left group hover:border-[#650a06] transition-all duration-300"
            >
              {/* Compact Glowing Icon */}
              <div className="relative shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#650a06]/30 bg-[#faf7f2] flex items-center justify-center text-[#650a06] shadow-xs group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Side-by-side Typography */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-display font-bold text-[#650a06] leading-tight tracking-wide">
                  {item.title}
                </h3>
                <p className="text-[#650a06]/85 font-body text-xs font-medium leading-snug truncate mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}