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

        {/* Header Layout: Tag & Title on Left, Description & Button on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 md:mb-16">
          {/* Left Column: Pill Tag & Big Title */}
          <div className="max-w-xl">
            <span className="text-[9px] sm:text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full inline-block mb-3 sm:mb-4 shadow-2xs">
              Sacred Knowledge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#650a06] font-bold tracking-tight leading-[1.1]">
              The Language of Mukhi
            </h2>
          </div>

          {/* Right Column: Description with Vertical Divider + Action Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6 shrink-0 lg:max-w-xl">
            <div className="border-l-2 border-[#650a06]/30 pl-4 py-1 text-xs sm:text-sm font-medium text-[#650a06]/85 leading-relaxed max-w-md">
              Explore the metaphysical signatures, ruling cosmic forces, and energetic applications behind each divine configuration as described in the Shiva Purana.
            </div>

            <Link
              href="/mukhi-guide"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] transition-all rounded-full font-heading font-bold text-xs uppercase tracking-wider shrink-0 shadow-md group cursor-pointer hover:shadow-lg hover:scale-105 transform duration-200"
            >
              <span>View All Mukhi</span>
              <ArrowRight className="w-4 h-4 text-[#f7e5d9] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <MukhiCardGrid items={previewMukhis} />

   

      </div>
    </section>
  );
}