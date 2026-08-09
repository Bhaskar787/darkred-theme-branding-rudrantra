import { useState } from 'react';
import { GiByzantinTemple, GiFlame, GiMoon, GiBookCover } from 'react-icons/gi';

const offerings = [
  {
    icon: GiByzantinTemple,
    title: 'Rare Bead Arrivals',
    desc: 'First access to naturally-formed, high-mukhi and collector-grade beads sourced from Nepal, before they reach our shelves.',
  },
  {
    icon: GiMoon,
    title: 'Panchang & Muhurta Alerts',
    desc: 'Auspicious tithis for energization, mala-wearing, and abhishekam — timed to the lunar calendar and Vedic panchang.',
  },
  {
    icon: GiBookCover,
    title: 'Wisdom from Our Scholars',
    desc: 'Short teachings on mantra, mukhi significance, and the Shiva Purana, shared by our resident Vedic pandits.',
  },
];

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] relative overflow-hidden border-b border-[#650a06]/20">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 relative">
          
          {/* Giant decorative OM watermark */}
          <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 text-[160px] sm:text-[220px] md:text-[300px] text-[#650a06]/10 font-serif select-none pointer-events-none leading-none">
            ॐ
          </div>

          {/* Left/Top Content & Form Area */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-between relative z-10 bg-[#ffffff] border-r border-[#650a06]/20">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
                Parivar · Our Sacred Circle
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-4 sm:mb-6 text-[#650a06]">
                Join Our Spiritual Circle
              </h2>
              
              <p className="text-[#650a06]/85 font-body text-base sm:text-lg font-medium leading-relaxed max-w-xl mb-8 sm:mb-12">
                Receive updates on rare bead arrivals, auspicious days for energization, and exclusive insights from
                our Vedic scholars — a quiet correspondence rooted in tradition, sent only when it truly matters.
              </p>

              {/* Dynamic Subscription State Area */}
              {submitted ? (
                <div className="bg-[#f7e5d9] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-[#650a06]/30 max-w-md shadow-md">
                  <GiFlame className="w-8 h-8 sm:w-10 sm:h-10 text-[#650a06] mb-3 sm:mb-4" />
                  <span className="block text-lg sm:text-xl md:text-2xl font-display font-bold text-[#650a06] mb-2">
                    Namaste! You've joined our sacred circle 
                  </span>
                  <span className="block text-xs sm:text-sm font-body text-[#650a06]/80 font-medium leading-relaxed">
                    Watch your inbox for our next Panchang update and rare bead arrival notification.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-body font-semibold rounded-full border border-[#650a06]/30 bg-white text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:bg-[#8a130c] shadow-md whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#650a06]/15 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center text-xs font-heading font-bold tracking-widest text-[#650a06]/70 uppercase">
              <span>Trusted by 12,000+ seekers</span>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#650a06]"></span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Right Panel - Offerings */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 relative z-10 flex flex-col justify-center bg-[#f7e5d9]/60">
            <div className="space-y-4 sm:space-y-6">
              {offerings.map((o) => {
                const IconComponent = o.icon;
                return (
                  <div
                    key={o.title}
                    className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm group hover:border-[#650a06] hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-5">
                      <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] group-hover:bg-[#650a06] group-hover:text-[#f7e5d9] transition-colors shrink-0 shadow-xs">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-[#650a06] mb-1.5 sm:mb-2">
                          {o.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-body text-[#650a06]/80 font-medium leading-relaxed">
                          {o.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}