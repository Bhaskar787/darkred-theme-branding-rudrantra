import { GiFlame, GiMeditation, GiYinYang, GiLotusFlower } from 'react-icons/gi';
import { ArrowRight } from 'lucide-react';

const reasons = [
  {
    icon: GiYinYang,
    title: "Healing & Wellness",
    desc: "Ancient texts and modern seekers alike report increased vitality, reduced stress, and stabilized energy levels when wearing authentic beads.",
  },
  {
    icon: GiFlame,
    title: "Protection & Blessing",
    desc: "Create a spiritual armor against negative energies. Each mukhi offers distinct protective qualities for the wearer's journey.",
  },
  {
    icon: GiMeditation,
    title: "Meditation & Prayer",
    desc: "Deepen your sadhana. A genuine rudraksha mala serves as a powerful anchor, magnifying the resonance of your mantras.",
  },
  {
    icon: GiLotusFlower,
    title: "Spiritual Growth",
    desc: "Align with higher frequencies. Wearing these sacred seeds facilitates intuition, clarity, and connection to divine consciousness.",
  }
];

export function WhyChoose() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f4ebd0] relative overflow-hidden border-b border-[#650a06]/20">
      {/* Background Meditation Image Intact (0.35 Opacity) */}
      <div 
        className="absolute inset-0 opacity-[0.25] bg-cover bg-center"
        style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/069/690/059/large_2x/serene-monk-meditating-in-mountain-cave-illuminated-by-golden-rays-of-setting-sun-surrounded-by-lush-greenery-and-majestic-mountains-evokes-sense-of-peace-and-tranquility-free-photo.jpeg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f2]/80 via-[#faf7f2]/60 to-[#faf7f2]/80" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-xs">
            Sacred Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#650a06] font-bold tracking-tight mb-4 sm:mb-6">
            Spiritual Tools for Your Journey
          </h2>
          <p className="text-[#650a06]/90 font-body font-semibold text-base sm:text-lg md:text-xl leading-relaxed">
            Beyond beautiful adornments, these are spiritual tools. Discover how authentic Rudraksha can transform your daily experience and inner life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i} 
              className="bg-[#ffffff]/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl border border-[#650a06]/20 hover:border-[#650a06] hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-xl group flex flex-col relative overflow-hidden"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] group-hover:bg-[#650a06] group-hover:text-[#f7e5d9] transition-colors duration-500 mb-5 sm:mb-6 md:mb-8 mx-auto lg:mx-0 shadow-xs">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#650a06] font-bold mb-3 sm:mb-4 text-center lg:text-left group-hover:text-[#8a130c] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-[#650a06]/85 font-body leading-relaxed flex-1 mb-5 sm:mb-6 md:mb-8 text-center lg:text-left text-xs sm:text-sm md:text-base font-medium">
                {item.desc}
              </p>
              
              <a href="#" className="inline-flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] group-hover:text-[#8a130c] group/link mt-auto transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform text-[#650a06]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// import { GiFlame, GiMeditation, GiYinYang, GiLotusFlower } from 'react-icons/gi';
// import { ArrowRight } from 'lucide-react';

// const reasons = [
//   {
//     icon: GiYinYang,
//     title: "Healing & Wellness",
//     desc: "Ancient texts and modern seekers alike report increased vitality, reduced stress, and stabilized energy levels when wearing authentic beads.",
//   },
//   {
//     icon: GiFlame,
//     title: "Protection & Blessing",
//     desc: "Create a spiritual armor against negative energies. Each mukhi offers distinct protective qualities for the wearer's journey.",
//   },
//   {
//     icon: GiMeditation,
//     title: "Meditation & Prayer",
//     desc: "Deepen your sadhana. A genuine rudraksha mala serves as a powerful anchor, magnifying the resonance of your mantras.",
//   },
//   {
//     icon: GiLotusFlower,
//     title: "Spiritual Growth",
//     desc: "Align with higher frequencies. Wearing these sacred seeds facilitates intuition, clarity, and connection to divine consciousness.",
//   }
// ];

// export function WhyChoose() {
//   return (
//     <section className="py-14 sm:py-20 md:py-24 bg-[#faf7f4] relative overflow-hidden">
//       {/* Pashupatinath Background Overlay - fully visible */}
//       <div 
//         className="absolute inset-0 opacity-100 bg-cover bg-center"
//         style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/069/690/059/large_2x/serene-monk-meditating-in-mountain-cave-illuminated-by-golden-rays-of-setting-sun-surrounded-by-lush-greenery-and-majestic-mountains-evokes-sense-of-peace-and-tranquility-free-photo.jpeg")' }}
//       />
//       {/* Darker gradient concentrated at the top (behind title) fading out before the cards */}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#1a1108]/70 via-[#faf7f4]/40 to-[#faf7f4]/50" />
//       {/* Extra dark pool right behind the title text for guaranteed contrast */}
//       <div className="absolute top-0 left-0 right-0 h-[280px] sm:h-[340px] bg-gradient-radial from-black/50 via-black/25 to-transparent" />

//       <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
//         {/* Title Section - no box, text sits directly on darkened image */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
//           <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
//             <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-orange-bright"></div>
//             <span className="text-xl sm:text-2xl md:text-3xl text-orange-bright drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">ॐ</span>
//             <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-orange-bright"></div>
//           </div>
//           <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
//             Spiritual Tools for Your Journey
//           </h2>
//           <p className="text-white/90 font-body text-sm sm:text-lg md:text-xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
//             Beyond beautiful adornments, these are spiritual tools. Discover how authentic Rudraksha can transform your daily experience and inner life.
//           </p>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
//           {reasons.map((item, i) => (
//             <div 
//               key={i} 
//               className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-orange/20 hover:border-orange hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-sacred-glow group flex flex-col relative overflow-hidden"
//             >
//               {/* Subtle top glow */}
//               <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-bright to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
//               <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-orange/25 bg-orange/10 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors duration-500 mb-5 sm:mb-6 md:mb-8 mx-auto lg:mx-0">
//                 <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
//               </div>
              
//               <h3 className="font-display text-lg sm:text-xl md:text-2xl text-orange mb-3 sm:mb-4 text-center lg:text-left">{item.title}</h3>
//               <p className="text-navy/70 font-body leading-relaxed flex-1 mb-5 sm:mb-6 md:mb-8 text-center lg:text-left text-xs sm:text-sm md:text-base">
//                 {item.desc}
//               </p>
              
//               <a href="#" className="inline-flex items-center justify-center lg:justify-start gap-2 text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest text-orange hover:text-orange-bright group/link mt-auto">
//                 Learn more
//                 <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }