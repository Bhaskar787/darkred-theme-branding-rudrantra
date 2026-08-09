import { GiMoon, GiSun, GiStarSattelites, GiSparkles } from 'react-icons/gi';

const events = [
  { name: "Mondays (Somavara)", desc: "Most auspicious weekly day for Shiva beads", label: "Weekly Ritual", icon: GiSun },
  { name: "Ekadashi", desc: "11th lunar day, ideal for spiritual malas", label: "Fortnightly", icon: GiMoon },
  { name: "Pradosh Tithi", desc: "Twice monthly 13th lunar day, powerful for Shiva worship", label: "Twilight Muhurta", icon: GiStarSattelites },
  { name: "Purnima", desc: "Full Moon night, perfect to cleanse and energize new Rudraksha", label: "Lunar Peak", icon: GiMoon },
  { name: "Maha Shivaratri", desc: "The grand sacred night of Shiva, offering maximum energetic potency", label: "Annual Peak", icon: GiSparkles },
  { name: "Navratri", desc: "Nine auspicious nights for activating protective Shakti malas", label: "Seasonal", icon: GiSun },
];

export function SpiritualCalendar() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f0e7cd] border-b border-[#650a06]/20 overflow-hidden relative">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-[11px] md:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full inline-block mb-4 sm:mb-6 shadow-sm">
            Vedic Panchang Tradition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#650a06] font-bold tracking-tight leading-tight mb-4 sm:mb-6 px-2">
            Auspicious Timings
          </h2>
          <p className="text-[#650a06]/85 font-body text-base sm:text-lg leading-relaxed px-2 font-medium">
            Wearing, cleansing, or energizing your sacred beads on these high-vibration lunar configurations multiplies their spiritual alignment according to the Shastras.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {events.map((ev, i) => {
            const IconComponent = ev.icon;
            return (
              <div 
                key={i} 
                className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-[#650a06] hover:shadow-xl group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Corner accent decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-bl from-[#650a06]/10 to-transparent pointer-events-none rounded-bl-full" />
                
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-[10px] sm:text-[11px] font-heading font-bold tracking-widest text-[#f7e5d9] uppercase bg-[#650a06] px-3 py-1 rounded shadow-sm">
                      {ev.label}
                    </span>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] group-hover:scale-110 group-hover:bg-[#650a06] group-hover:text-[#f7e5d9] transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <h3 className="font-display text-xl sm:text-2xl text-[#650a06] mb-2.5 sm:mb-3 font-bold">
                    {ev.name}
                  </h3>
                  <p className="text-sm font-body text-[#650a06]/80 font-medium leading-relaxed">
                    {ev.desc}
                  </p>
                </div>

                {/* Bottom Interactive Anchor */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-[#650a06]/15 flex items-center justify-between text-xs font-heading font-bold tracking-widest uppercase text-[#650a06] group-hover:text-[#8a130c] transition-colors">
                  <span>View Sadhana Guide</span>
                  <span className="transform -translate-x-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}