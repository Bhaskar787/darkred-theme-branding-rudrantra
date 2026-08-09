import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, Search, ShieldCheck, Sparkles, Truck, Compass, MessageCircle, Phone } from 'lucide-react';
import { GiLotusFlower } from 'react-icons/gi';

type Category = 'All' | 'Authenticity' | 'Wearing & Care' | 'Shipping' | 'Spiritual';

const categoryMeta: Record<Exclude<Category, 'All'>, { icon: typeof ShieldCheck }> = {
  'Authenticity': { icon: ShieldCheck },
  'Wearing & Care': { icon: Sparkles },
  'Shipping': { icon: Truck },
  'Spiritual': { icon: Compass },
};

const faqs: { q: string; a: string; category: Exclude<Category, 'All'> }[] = [
  { q: 'How do I know the Rudraksha is genuine and not a fake?', a: "Every Rudraksha from Rudrantra comes with a numbered X-ray laboratory certificate that shows the internal bead structure, mukhi count, and seed density. We also apply the traditional copper coin test and water float test before packaging. Our sourcing is direct from growers in Nepal's Arun Valley, bypassing the middlemen who introduce adulterated beads into the market.", category: 'Authenticity' },
  { q: 'Why does Rudrantra offer only 100% Genuine Nepal Origin Rudraksha?', a: 'Nepali beads, sourced from the sacred Arun and Dolakha valleys near Mount Kailash, possess the highest seed density, deepest natural clefts, and most potent energy vibrations. We exclusively supply 100% genuine Nepal origin Rudraksha, each backed by an X-Ray lab certificate.', category: 'Authenticity' },
  { q: 'How do I know my Rudraksha is authentic and not artificially carved?', a: "Every premium bead ships with an independent X-Ray laboratory certificate confirming the internal compartment structure matches the external mukhi lines, which guarantees zero artificial carving, resin-filling, or tampering. You can verify each certificate number on our lab partner's portal at any time.", category: 'Authenticity' },
  { q: 'Can I wear Rudraksha without a religious ceremony or initiation?', a: 'Yes. While we recommend the Prana Pratishtha energization ceremony, which we perform for every bead before shipping, Rudraksha can be worn by any sincere person regardless of their religious background. The bead works through its electromagnetic and bioelectric properties, which are intrinsic to the seed itself, not conferred only through ritual.', category: 'Spiritual' },
  { q: 'Which Mukhi is right for me as a beginner?', a: 'The 5 Mukhi (Panch Mukhi) is universally recommended as a starting point. Ruled by Jupiter and Lord Kalagni Rudra, it supports general health, mental clarity, and spiritual awareness without any restrictions on who can wear it.', category: 'Spiritual' },
  { q: 'How should I care for and maintain my Rudraksha?', a: 'Clean your beads monthly using a soft brush and neem oil or sandalwood oil. Avoid harsh chemicals, perfumes, or saltwater. Remove before bathing or sleeping initially; once attuned to your energy (~40 days), many practitioners keep them on continuously.', category: 'Wearing & Care' },
  { q: 'What thread or metal should I use to string my Rudraksha?', a: 'Red or yellow silk thread is traditional and lets the bead breathe. Silver is spiritually neutral and our most recommended metal; copper is favoured for Saturn-related mukhis, while orange is reserved for higher mukhis.', category: 'Wearing & Care' },
  { q: 'Can I wear multiple Mukhis at the same time?', a: 'Yes. Our Siddha Mala contains all 14 Mukhis in a single piece, and we also offer custom-designed combinations based on your birth chart.', category: 'Wearing & Care' },
  { q: 'Do you ship internationally? How long does delivery take?', a: 'Yes, worldwide with DHL Express and FedEx. India: 2–4 business days. International: 7–14 business days depending on customs.', category: 'Shipping' },
  { q: 'Is my payment information secure, and what methods do you accept?', a: 'All transactions are processed through PCI-DSS compliant gateways with 256-bit encryption. We accept major cards, UPI, net banking, and PayPal.', category: 'Shipping' },
  { q: 'Can I return or exchange my Rudraksha if I am not satisfied?', a: 'We offer a 7-day return window for undamaged items in original packaging. Beads not matching their certificate or arriving damaged are replaced at no cost.', category: 'Shipping' },
  { q: 'What is the Pashupatinath energization and does it cost extra?', a: 'Every bead is blessed in a collective Rudra Abhishekam ceremony at Pashupatinath Temple in Kathmandu, included free. Personalized puja with your name and gotra is available as an upgrade.', category: 'Spiritual' },
  { q: 'Do you offer personalised consultations before I buy?', a: 'Yes. Every order over a certain value includes a complimentary consultation with one of our Vedic astrologers.', category: 'Spiritual' },
];

const categories: Category[] = ['All', 'Authenticity', 'Wearing & Care', 'Shipping', 'Spiritual'];

// Stacking config: each item sticks a few px lower than the previous,
// creating a card-stack effect ("beads on a mala thread"). As later cards
// arrive at their sticky position they visually settle behind/under the
// earlier ones, so we scale, dim and lift the earlier ones slightly to
// sell real depth instead of a flat pile of identical cards.
const STACK_TOP = 96; // px — matches top-24
const STACK_OFFSET = 10; // px between stacked cards
const MAX_DEPTH = 5; // how many "cards behind" we bother animating for

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [query, setQuery] = useState('');
  const [depths, setDepths] = useState<number[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const filtered = useMemo(() => {
    return faqs
      .map((faq, originalIndex) => ({ ...faq, originalIndex }))
      .filter((faq) => activeCategory === 'All' || faq.category === activeCategory)
      .filter((faq) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      });
  }, [activeCategory, query]);

  const measure = useCallback(() => {
    if (reducedMotion.current) return;
    const nodes = cardRefs.current;
    const stuck: boolean[] = nodes.map((el, i) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= STACK_TOP + i * STACK_OFFSET + 1;
    });
    const next = nodes.map((_, i) => {
      if (!stuck[i]) return 0;
      let covering = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        if (stuck[j]) covering++;
        else break;
      }
      return Math.min(covering, MAX_DEPTH);
    });
    setDepths((prev) => {
      if (prev.length === next.length && prev.every((v, i) => v === next[i])) return prev;
      return next;
    });
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [measure, filtered.length]);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#faf7f2] relative border-b border-[#650a06]/20">
      <style>{`
        @keyframes faq-rise {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .faq-card-enter {
          animation: faq-rise 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .faq-thread {
          background: linear-gradient(to bottom, rgba(101,10,6,0) 0%, rgba(101,10,6,0.35) 6%, rgba(101,10,6,0.35) 94%, rgba(101,10,6,0) 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-card-enter { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
      <div className="absolute inset-0 bg-stars opacity-5 pointer-events-none" />

      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm">
            <GiLotusFlower className="w-3.5 h-3.5 text-[#650a06]" /> Common Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#650a06] font-bold tracking-tight leading-tight mb-4 sm:mb-6 px-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-[#650a06]/85 font-medium text-sm sm:text-base md:text-lg leading-relaxed px-2">
            Everything a sincere seeker needs to know before making their sacred choice.
          </p>
        </div>

        <div className="relative max-w-lg mx-auto mb-6 sm:mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#650a06]/60" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a question, e.g. shipping, mukhi, care..."
            className="w-full pl-11 pr-4 py-2.5 sm:py-3 rounded-full border border-[#650a06]/30 bg-[#ffffff] text-xs sm:text-sm font-body text-[#650a06] font-medium placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:ring-1 focus:ring-[#650a06] transition-colors shadow-sm"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-heading font-bold uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#650a06] text-[#faf7f2] border-[#650a06] shadow-md'
                  : 'text-[#650a06] border-[#650a06]/20 bg-[#ffffff] hover:border-[#650a06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-6 sm:gap-8 md:gap-10 items-start">
          <div ref={listRef} className="flex flex-col gap-2.5 sm:gap-3 relative">
            {filtered.length === 0 && (
              <div className="text-center py-12 sm:py-16 text-[#650a06]/70 border border-dashed border-[#650a06]/30 bg-[#fdf8f4] rounded-2xl text-sm sm:text-base px-4">
                No questions match "{query}". Try a different search term, or ask us directly.
              </div>
            )}

            {filtered.length > 0 && (
              <div
                aria-hidden
                className="hidden sm:block faq-thread absolute left-[41px] top-6 bottom-6 w-px z-0"
              />
            )}

            {filtered.map((faq, i) => {
              const isOpen = openIndex === faq.originalIndex;
              const Icon = categoryMeta[faq.category].icon;
              const top = STACK_TOP + i * STACK_OFFSET;
              const depth = depths[i] ?? 0;
              const panelId = `faq-panel-${faq.originalIndex}`;
              const buttonId = `faq-trigger-${faq.originalIndex}`;

              const scale = isOpen ? 1 : 1 - depth * 0.012;
              const liftY = isOpen ? 0 : -depth * 2;
              const dim = isOpen ? 0 : depth * 0.03;

              return (
                <div
                  key={`${activeCategory}-${query}-${faq.originalIndex}`}
                  className="sticky faq-card-enter"
                  style={{
                    top: `${top}px`,
                    zIndex: isOpen ? 50 : 10 + i,
                    animationDelay: `${Math.min(i, 8) * 40}ms`,
                  }}
                >
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className={`relative rounded-xl border transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen
                        ? 'border-[#650a06] bg-[#ffffff] shadow-md'
                        : 'border-[#650a06]/20 bg-[#ffffff] shadow-xs hover:border-[#650a06]/60'
                    }`}
                    style={{
                      transform: `translateY(${liftY}px) scale(${scale})`,
                      transformOrigin: 'top center',
                    }}
                  >
                    {dim > 0 && (
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-xl bg-black pointer-events-none transition-opacity duration-300"
                        style={{ opacity: dim }}
                      />
                    )}

                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-center gap-3 sm:gap-4 justify-between px-4 sm:px-6 py-4 sm:py-5 text-left relative z-10 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#650a06] focus-visible:outline-offset-2"
                      onClick={() => setOpenIndex(isOpen ? null : faq.originalIndex)}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span
                          className={`hidden sm:flex w-9 h-9 rounded-full items-center justify-center shrink-0 transition-all duration-300 relative ${
                            isOpen ? 'bg-[#650a06] text-[#f7e5d9] scale-110 shadow-sm' : 'bg-[#650a06]/10 text-[#650a06]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className={`font-heading text-sm sm:text-base leading-snug transition-colors duration-300 ${isOpen ? 'text-[#650a06] font-bold' : 'text-[#650a06] font-semibold'}`}>
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-[#650a06] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid relative z-10 transition-[grid-template-rows,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="px-4 sm:px-6 pb-4 sm:pb-6 sm:pl-[70px] transition-transform duration-300 ease-out"
                          style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-6px)' }}
                        >
                          <div className="h-px bg-[#650a06]/20 mb-3 sm:mb-4" />
                          <p className="font-body text-[#650a06]/85 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div aria-hidden style={{ height: `${Math.max(filtered.length * STACK_OFFSET + 24, 60)}px` }} />
          </div>

          <aside className="md:sticky md:top-24 md:self-start">
            <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 shadow-md">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#650a06]/10 flex items-center justify-center mb-2">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#650a06]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-[#650a06] font-bold mb-1">Need personal guidance?</h3>
                <p className="font-body text-[#650a06]/85 text-xs sm:text-sm leading-relaxed">
                  Our resident Vedic scholars and gemstone experts are available to clarify your spiritual queries. We typically respond within 3–4 business hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-[#650a06]/20">
                <a href="tel:+9779715551396" className="flex items-center gap-3 text-xs sm:text-sm font-body text-[#650a06] hover:text-[#8a130c] transition-colors font-medium">
                  <Phone className="w-4 h-4 text-[#650a06] shrink-0" /> +977 9715551396
                </a>
                <p className="text-[9px] sm:text-[10px] text-[#650a06]/60 uppercase tracking-widest pl-7">
                  Available Mon-Sat, 10am - 6pm NPT
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/9779715551396"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 sm:py-3 bg-[#650a06] text-[#f7e5d9] border border-[#650a06] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-xl text-center hover:bg-[#8a130c] transition-all shadow-md"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="/consultation"
                  className="w-full py-2.5 sm:py-3 border border-[#650a06]/30 text-[#650a06] text-xs sm:text-sm font-heading font-bold uppercase tracking-wider rounded-xl text-center hover:bg-[#650a06] hover:text-[#f7e5d9] transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}