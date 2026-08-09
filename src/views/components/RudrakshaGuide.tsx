import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { mukhis } from  '@/models/data/mukhi';
import { MukhiCardGrid } from '@/views/components/MukhiCardGrid';

// Preview shows 2 rows at the widest (xl) breakpoint — 4 columns × 2 rows = 8 cards.
// On smaller breakpoints this simply wraps into more visual rows, which is expected.
const PREVIEW_COUNT = 8;

export function RudrakshaGuide() {
  const previewMukhis = mukhis.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] text-[#650a06] min-h-screen relative overflow-hidden border-b border-[#650a06]/20">
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-10 sm:mb-14 md:mb-20 max-w-3xl mx-auto">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full inline-block mb-4 sm:mb-6 shadow-sm">
            Sacred Knowledge
          </span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#650a06] font-bold tracking-tight leading-tight mb-3 sm:mb-5">
            The Language of Mukhi
          </h3>
          <p className="text-[#650a06]/85 font-body text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 px-2 font-medium">
            Explore the metaphysical signatures, ruling cosmic forces, and energetic applications behind each divine configuration as described in the Shiva Purana.
          </p>
        </div>

        <MukhiCardGrid items={previewMukhis} />

        {/* View All CTA */}
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-16">
          <Link
            href="/mukhi-guide"
            className="group inline-flex items-center gap-2 sm:gap-3 font-heading font-bold uppercase tracking-widest text-xs sm:text-sm text-[#f7e5d9] bg-[#650a06] px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:bg-[#8a130c] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            View All Mukhi
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 text-[#f7e5d9]" />
          </Link>
        </div>

      </div>
    </section>
  );
}