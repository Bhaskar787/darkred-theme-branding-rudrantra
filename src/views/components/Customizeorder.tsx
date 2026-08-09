import { useState } from 'react';
import { Link } from 'wouter';
import { GiMeditation, GiLotusFlower, GiByzantinTemple } from 'react-icons/gi';
import { ArrowRight, CheckCircle } from 'lucide-react';

const stars = [
  { x: 42, y: 68, r: 1.6, o: 0.55 }, { x: 118, y: 140, r: 1.1, o: 0.35 }, { x: 210, y: 54, r: 1.8, o: 0.5 },
  { x: 300, y: 200, r: 1.2, o: 0.3 }, { x: 60, y: 300, r: 1.4, o: 0.4 }, { x: 160, y: 380, r: 1.1, o: 0.3 },
  { x: 340, y: 340, r: 1.6, o: 0.45 }, { x: 30, y: 460, r: 1.2, o: 0.35 }, { x: 250, y: 470, r: 1.8, o: 0.5 },
  { x: 380, y: 120, r: 1.1, o: 0.3 }, { x: 470, y: 250, r: 1.5, o: 0.4 }, { x: 550, y: 90, r: 1.2, o: 0.35 },
  { x: 620, y: 200, r: 1.7, o: 0.5 }, { x: 700, y: 340, r: 1.1, o: 0.3 }, { x: 760, y: 150, r: 1.4, o: 0.4 },
  { x: 660, y: 460, r: 1.2, o: 0.3 }, { x: 500, y: 420, r: 1.6, o: 0.45 }, { x: 90, y: 560, r: 1.3, o: 0.35 },
  { x: 420, y: 580, r: 1.1, o: 0.3 }, { x: 580, y: 560, r: 1.5, o: 0.4 }, { x: 730, y: 540, r: 1.2, o: 0.35 },
  { x: 200, y: 620, r: 1.7, o: 0.5 }, { x: 350, y: 40, r: 1.1, o: 0.3 }, { x: 460, y: 60, r: 1.3, o: 0.35 },
];

const navagraha = [
  { label: 'सू', name: 'Surya', angle: 5 },
  { label: 'चं', name: 'Chandra', angle: 45 },
  { label: 'मं', name: 'Mangal', angle: 85 },
  { label: 'बु', name: 'Budh', angle: 125 },
  { label: 'गु', name: 'Guru', angle: 165 },
  { label: 'शु', name: 'Shukra', angle: 205 },
  { label: 'श', name: 'Shani', angle: 245 },
  { label: 'रा', name: 'Rahu', angle: 285 },
  { label: 'के', name: 'Ketu', angle: 325 },
];

function AstroBackground() {
  const cx = 400;
  const cy = 400;
  const orbitRadii = [140, 230, 320];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(252,140,104,0.15), transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(252,140,104,0.18), transparent 55%)',
        }}
      ></div>

      <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full opacity-90">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="hsl(17.14deg 96.08% 70%)" opacity={s.o} className="animate-star-twinkle" style={{ animationDelay: `${(i % 6) * 0.6}s` }} />
        ))}
        <polyline points="42,68 118,140 210,54" fill="none" stroke="hsl(17.14deg 96.08% 70%)" strokeWidth="0.5" opacity="0.3" />
        <polyline points="620,200 700,340 660,460" fill="none" stroke="hsl(17.14deg 96.08% 70%)" strokeWidth="0.5" opacity="0.3" />
      </svg>

      <svg viewBox="0 0 800 800" className="absolute -right-16 -top-10 w-[620px] h-[620px] md:w-[720px] md:h-[720px] opacity-[0.25]">
        {orbitRadii.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="hsl(17.14deg 96.08% 70%)" strokeWidth="1" />
        ))}

        {navagraha.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const px = cx + 230 * Math.cos(rad);
          const py = cy + 230 * Math.sin(rad);
          return (
            <g key={p.name}>
              <circle cx={px} cy={py} r="14" fill="#0F172A" stroke="hsl(17.14deg 96.08% 70%)" strokeWidth="1.5" />
              <text x={px} y={py + 4} textAnchor="middle" fill="hsl(17.14deg 96.08% 70%)" fontSize="10" fontWeight="bold" fontFamily="serif">
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const intentions = [
  'Peace & Mental Clarity',
  'Career & Financial Abundance',
  'Health & Physical Vitality',
  'Spiritual Growth & Sadhana',
  'Protection & Removal of Obstacles',
  'Harmonious Relationships',
];

const steps = [
  {
    n: '1',
    icon: GiMeditation,
    title: 'Kundali & Intention Reading',
    desc: 'Share your birth details or primary intention. Our Acharyas analyze the planetary influences shaping your current path.',
  },
  {
    n: '2',
    icon: GiLotusFlower,
    title: 'Mukhi Selection & Assembly',
    desc: 'We select specific mukhi beads (100% Nepal origin) and combine them with silver, gold, or silk cord for maximum synergy.',
  },
  {
    n: '3',
    icon: GiByzantinTemple,
    title: 'Pashupatinath Consecration',
    desc: 'Your custom mala undergoes Prana Pratishtha ritual at our altar, energized with 108 Vedic chants before dispatch.',
  },
];

export function CustomizeOrder() {
  const [selected, setSelected] = useState<string>('Peace & Mental Clarity');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-[#faf7f2] border-b border-[#650a06]/20">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <AstroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <span className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] md:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
            Bespoke Sacred Craft · By Appointment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#650a06] font-bold tracking-tight leading-tight mb-4 sm:mb-6 px-2">
            Your Personal Rudraksha Combination
          </h2>
          <p className="font-body text-[#650a06]/85 font-medium text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            No two seekers are identical. Our Vedic experts custom-design each mala or combination based on a careful reading of your birth chart, dominant planets, and the specific transformation you are seeking — precise, considered, and made for you alone.
          </p>
        </div>

        {/* 3-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 sm:mb-16 md:mb-20 relative">
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-[#650a06]/30 to-transparent pointer-events-none" />
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] group-hover:bg-[#650a06] group-hover:text-[#faf7f2] transition-colors duration-300 shadow-md">
                  <step.icon className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#faf7f2] text-xs font-heading font-bold flex items-center justify-center border-2 border-[#faf7f2] shadow-xs">
                  {step.n}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#650a06] group-hover:text-[#8a130c] transition-colors mb-3 sm:mb-4">{step.title}</h3>
              <p className="font-body text-[#650a06]/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            
            {/* Left Box: Choose Your Intention */}
            <div className="p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#650a06]/20">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#650a06] mb-2">Choose Your Intention</h3>
              <p className="font-body text-[#650a06]/80 font-medium text-xs sm:text-sm md:text-base mb-6 sm:mb-8">Select the life area you most want to strengthen:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {intentions.map((intention) => (
                  <button
                    key={intention}
                    onClick={() => setSelected(intention)}
                    className={`flex items-center gap-3 text-left px-4 py-3.5 sm:py-4 rounded-xl border text-xs sm:text-sm font-heading font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                      selected === intention
                        ? 'border-[#650a06] bg-[#650a06] text-[#f7e5d9] shadow-md'
                        : 'border-[#650a06]/20 text-[#650a06] hover:bg-[#650a06]/10 bg-[#f7e5d9]'
                    }`}
                  >
                    {selected === intention
                      ? <CheckCircle className="w-4.5 h-4.5 text-[#f7e5d9] shrink-0" />
                      : <span className="w-4.5 h-4.5 rounded-full border-2 border-[#650a06]/40 shrink-0" />}
                    <span className="font-bold">{intention}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Box: Request Your Custom Mala */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col bg-[#f7e5d9]/50">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#650a06] mb-2">Request Your Custom Mala</h3>
              <p className="font-body text-[#650a06]/80 font-medium text-xs sm:text-sm md:text-base mb-6 sm:mb-8">Fill in a few details and our Vedic expert will contact you within 24 hours.</p>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 py-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#650a06] bg-[#650a06]/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#650a06]" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-[#650a06] mb-2">Request Received!</h4>
                    <p className="font-body text-[#650a06]/80 font-medium text-xs sm:text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                      Our Vedic consultant will reach out within 24 hours to begin your personal consultation.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="flex flex-col gap-4 sm:gap-5 flex-1" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#650a06] block mb-2">Full Name *</label>
                      <input type="text" required placeholder="Your full name" className="w-full bg-white border border-[#650a06]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] transition-colors shadow-xs" />
                    </div>
                    <div>
                      <label className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#650a06] block mb-2">Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+977 9715551396" className="w-full bg-white border border-[#650a06]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] transition-colors shadow-xs" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#650a06] block mb-2">Date of Birth</label>
                    <input type="date" className="w-full bg-white border border-[#650a06]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#650a06] focus:outline-none focus:border-[#650a06] transition-colors shadow-xs" />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#650a06] block mb-2">
                      Selected Intention {selected && <span className="text-[#650a06] font-bold normal-case tracking-normal">— {selected}</span>}
                    </label>
                    <textarea rows={3} placeholder="Describe what you're seeking in more detail (optional)…" className="w-full bg-white border border-[#650a06]/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] transition-colors resize-none shadow-xs" />
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <button type="submit" className="w-full py-3.5 sm:py-4 bg-[#650a06] text-[#f7e5d9] font-heading font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl shadow-md hover:bg-[#8a130c] transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <span>Request Custom Mala</span>
                      <ArrowRight className="w-4 h-4 text-[#f7e5d9]" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <Link
                        href="/customize-order"
                        className="py-3 bg-[#650a06] text-[#f7e5d9] border border-[#650a06] hover:bg-[#8a130c] font-heading font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
                      >
                        <span>Open Custom Order Page</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#f7e5d9]" />
                      </Link>

                      <Link
                        href="/consultation"
                        className="py-3 bg-[#f7e5d9] border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] font-heading font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 text-center shadow-xs"
                      >
                        <span>Book 1:1 Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}