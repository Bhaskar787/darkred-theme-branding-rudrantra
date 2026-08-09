import { ArrowRight, Clock, Users, Lock } from 'lucide-react';
import {
  GiByzantinTemple, GiStarSattelites,
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces,
} from 'react-icons/gi';
import { Link } from 'wouter';

const zodiacIcons = [
  GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo,
  GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces,
];

function ZodiacRing({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      {ticks.map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = 200 + Math.sin(angle) * 180;
        const y1 = 200 - Math.cos(angle) * 180;
        const x2 = 200 + Math.sin(angle) * 165;
        const y2 = 200 - Math.cos(angle) * 165;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeOpacity="0.4" strokeWidth="2" />
        );
      })}
    </svg>
  );
}

function ConstellationField({ className = '' }: { className?: string }) {
  const points = [
    { x: 40, y: 60 }, { x: 110, y: 30 }, { x: 170, y: 90 },
    { x: 130, y: 150 }, { x: 60, y: 140 }, { x: 200, y: 40 },
  ];
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [1, 5]];
  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a].x} y1={points[a].y}
          x2={points[b].x} y2={points[b].y}
          stroke="currentColor" strokeOpacity="0.25" strokeWidth="1"
        />
      ))}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x} cy={p.y} r={i % 2 === 0 ? 2.5 : 1.6}
          fill="currentColor"
          className={i % 2 === 0 ? 'promo-star-twinkle' : ''}
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}

export function PromoBanners() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] overflow-hidden border-b border-[#650a06]/20 relative">
      <style>{`
        @keyframes promo-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes promo-star-twinkle {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.25; }
        }
        .promo-ring-spin { animation: promo-ring-spin 90s linear infinite; }
        .promo-star-twinkle { animation: promo-star-twinkle 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .promo-ring-spin { animation: none; }
          .promo-star-twinkle { animation: none; opacity: 0.7; }
        }
      `}</style>

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 shadow-xs">
            Guided By The Stars
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#650a06] font-bold tracking-tight leading-tight mb-2 sm:mb-3 px-2">
            Two Paths to Your Right Bead
          </h2>
          <p className="font-body text-[#650a06]/85 font-medium text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Whether you need a reading first or already know your intention, both begin with the same chart: yours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

          {/* Card 1 */}
          <div className="bg-[#ffffff] border border-[#650a06]/20 p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-lg group hover:border-[#650a06] hover:-translate-y-1 transition-all duration-500">
            <div className="absolute -top-24 -right-24 w-56 sm:w-80 h-56 sm:h-80 bg-[#650a06]/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            <ZodiacRing className="promo-ring-spin absolute -bottom-16 -right-10 sm:-bottom-24 sm:-right-16 w-48 sm:w-72 h-48 sm:h-72 text-[#650a06]/20 pointer-events-none" />

            <div className="w-full relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#faf7f2] bg-[#650a06] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xs">
                  Expert Advice
                </span>
                <GiByzantinTemple className="w-6 h-6 sm:w-8 sm:h-8 text-[#650a06] group-hover:scale-110 transition-transform duration-500 shrink-0" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#650a06] tracking-tight leading-tight mb-3 sm:mb-5 font-bold">
                Free Personalized Guidance
              </h3>
              <p className="text-[#650a06]/85 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 max-w-md font-medium">
                Unsure which Mukhi configuration aligns with your current life path? Speak directly with our certified Vedic consultants for a comprehensive astrological and energetic assessment.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-7 sm:mb-10">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[#650a06]/80 text-[11px] sm:text-xs font-body font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#650a06] shrink-0" /> 30-min session
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[#650a06]/80 text-[11px] sm:text-xs font-body font-semibold">
                  <Users className="w-3.5 h-3.5 text-[#650a06] shrink-0" /> 12,000+ readings given
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[#650a06]/80 text-[11px] sm:text-xs font-body font-semibold">
                  <Lock className="w-3.5 h-3.5 text-[#650a06] shrink-0" /> Confidential
                </div>
              </div>
            </div>

            <Link
              href="/consultation"
              className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#650a06] text-[#f7e5d9] rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-widest transition-all hover:bg-[#8a130c] hover:gap-4 group/btn w-full sm:w-auto shadow-md"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffffff] border border-[#650a06]/20 p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-between items-start text-left relative overflow-hidden shadow-lg group hover:border-[#650a06] hover:-translate-y-1 transition-all duration-500">
            <div className="absolute -bottom-24 -right-24 w-56 sm:w-80 h-56 sm:h-80 bg-[#650a06]/10 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            <ConstellationField className="absolute top-4 right-4 sm:top-6 sm:right-6 w-28 sm:w-40 h-24 sm:h-32 text-[#650a06]/40 pointer-events-none" />

            <div className="w-full relative z-10">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <span className="text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#650a06] border border-[#650a06]/30 bg-[#650a06]/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                  Custom Creation
                </span>
                <GiStarSattelites className="w-6 h-6 sm:w-8 sm:h-8 text-[#650a06] group-hover:scale-110 transition-transform duration-500 shrink-0" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#650a06] tracking-tight leading-tight mb-3 sm:mb-5 font-bold">
                Elevate Your Sadhana
              </h3>
              <p className="text-[#650a06]/85 font-body text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 max-w-md font-medium">
                Commission a bespoke combination or structural Mala custom-strung by specialists according to your specific natal birth chart and spiritual intentions.
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-7 sm:mb-10" aria-hidden>
                {zodiacIcons.map((Icon, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#650a06]/20 bg-[#f7e5d9] flex items-center justify-center text-[#650a06]/70 group-hover:text-[#650a06] transition-colors duration-500 shrink-0"
                    style={{ transitionDelay: `${i * 25}ms` }}
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/custom-order"
              className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#650a06] text-[#650a06] bg-[#f7e5d9] rounded-full text-xs sm:text-sm font-heading font-bold uppercase tracking-widest hover:bg-[#650a06] hover:text-[#f7e5d9] hover:gap-4 transition-all shadow-md group/btn w-full sm:w-auto"
            >
              Start Custom Order
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}