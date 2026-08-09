import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VscThinking } from "react-icons/vsc";

gsap.registerPlugin(ScrollTrigger);

interface TabItem {
  id: string;
  label: string;
  desc: string;
  detail: string;
  image: string;
}

const tabs: TabItem[] = [
  {
    id: 'growth',
    label: 'Spiritual Growth',
    desc: 'Deepen sadhana, meditation, and devotion.',
    detail:
      'Deepen sadhana, meditation, and devotion. A rudraksha worn with intention becomes a quiet companion for practice, helping the mind settle into stillness session after session.',
    image:
      'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
  },
  {
    id: 'prosperity',
    label: 'Prosperity',
    desc: 'Invite abundance and financial clarity into daily life.',
    detail:
      'Invite abundance and financial clarity into daily life. The right rudraksha can help you attract wealth, opportunities, and success.',
    image: 'https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308',
  },
  {
    id: 'protection',
    label: 'Protection',
    desc: 'Shield against negative energy and instability.',
    detail:
      'Shield against negative energy and instability. The right rudraksha can provide protection from negative influences and create a shield of positive energy.',
    image:
      'https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 'harmony',
    label: 'Harmony',
    desc: 'Restore balance in relationships and the home.',
    detail:
      'Restore balance in relationships and the home. The right rudraksha can help you create a harmonious environment and improve relations.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10',
  },
  {
    id: 'wellness',
    label: 'Wellness',
    desc: 'Support physical vitality and calm the nervous system.',
    detail:
      'Support physical vitality and calm the nervous system. The right rudraksha can help you maintain your physical & mental well-being.',
    image:
      'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
  },
];

const TOTAL = tabs.length;

function SectionHeader() {
  return (
    <div className="text-center px-4 pt-1 pb-3 sm:pb-6">
      <div className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 mb-2 sm:mb-3 text-[#650a06] text-xs sm:text-sm font-bold tracking-wider uppercase">
        <VscThinking className="w-3.5 h-3.5 text-[#650a06]" />
        Sacred Intentions
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-[#650a06] tracking-tight mb-2 font-bold">
        Shop by Intention
      </h2>
      <p className="text-[#650a06]/85 font-body text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed hidden sm:block font-medium">
        Every intention calls for a unique energetic resonance — find the energy aligned with your journey.
      </p>
    </div>
  );
}

export function ChooseByIntention() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textContentRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const triggerInstanceRef = useRef<ScrollTrigger | null>(null);

  // Auto-scroll active tab button into center within its container when active index changes
  useEffect(() => {
    const activeBtn = buttonRefs.current[activeIndex];
    const container = tabsContainerRef.current;
    if (activeBtn && container) {
      const btnOffsetLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScrollLeft = btnOffsetLeft - containerWidth / 2 + btnWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${TOTAL * 100}%`,
          pin: true,
          pinSpacing: true, // Holds page layout steadily without vertical jitter
          scrub: 1, // Smooths out mouse wheel/trackpad momentum
          anticipatePin: 1,
          fastScrollEnd: true,
          snap: {
            snapTo: 1 / (TOTAL - 1),
            duration: { min: 0.1, max: 0.3 },
            delay: 0.02,
            ease: 'power1.inOut',
          },
          onUpdate: (self) => {
            const rawIndex = self.progress * (TOTAL - 1);
            const clampedIndex = Math.min(TOTAL - 1, Math.max(0, Math.round(rawIndex)));
            setActiveIndex(clampedIndex);

            if (progressLineRef.current) {
              progressLineRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      triggerInstanceRef.current = tl.scrollTrigger || null;

      // Set initial states
      imageCardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.set(card, {
          scale: idx === 0 ? 1 : 1.05,
          opacity: idx === 0 ? 1 : 0,
          zIndex: idx === 0 ? 10 : 1,
        });
      });

      textContentRef.current.forEach((txt, idx) => {
        if (!txt) return;
        gsap.set(txt, {
          opacity: idx === 0 ? 1 : 0,
          y: idx === 0 ? 0 : 20,
          pointerEvents: idx === 0 ? 'auto' : 'none',
        });
      });

      // Build smooth transitions
      for (let i = 0; i < TOTAL - 1; i++) {
        const currentCard = imageCardsRef.current[i];
        const nextCard = imageCardsRef.current[i + 1];
        const currentText = textContentRef.current[i];
        const nextText = textContentRef.current[i + 1];

        if (currentCard) {
          tl.to(
            currentCard,
            { opacity: 0, scale: 0.95, duration: 1, ease: 'power2.inOut' },
            i
          );
        }

        if (nextCard) {
          tl.to(
            nextCard,
            { opacity: 1, scale: 1, zIndex: 10 + i, duration: 1, ease: 'power2.inOut' },
            i
          );
        }

        if (currentText) {
          tl.to(
            currentText,
            { opacity: 0, y: -20, pointerEvents: 'none', duration: 0.4, ease: 'power2.in' },
            i
          );
        }

        if (nextText) {
          tl.to(
            nextText,
            { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.4, ease: 'power2.out' },
            i + 0.5
          );
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const jumpToTab = (index: number) => {
    if (!triggerInstanceRef.current) return;
    const st = triggerInstanceRef.current;
    const targetProgress = index / (TOTAL - 1);
    const scrollTarget = st.start + targetProgress * (st.end - st.start);

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-y border-[#650a06]/20 bg-[#faf7f2] text-[#650a06] min-h-screen flex flex-col justify-center py-4 sm:py-8 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 relative z-10">
        <SectionHeader />

        {/* Main Card Container */}
        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-[#650a06]/30 bg-[#ffffff] shadow-xl overflow-hidden mt-1 sm:mt-2 text-[#650a06]">
          
          {/* Top Progress Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#650a06]/10 z-30">
            <div
              ref={progressLineRef}
              className="h-full bg-[#650a06] w-0"
            />
          </div>

          <div className="flex flex-col md:flex-row min-h-[480px] sm:min-h-[580px] md:min-h-[580px]">
            
            {/* Text & Controls Area */}
            <div className="order-2 md:order-1 relative w-full md:w-1/2 p-3.5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between z-20 flex-1 border-t md:border-t-0 md:border-r border-[#650a06]/20">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#650a06]/20 pb-2 sm:pb-4">
                <span className="text-[10px] sm:text-sm md:text-base uppercase tracking-widest text-[#650a06] font-bold">
                  Intention Focus
                </span>
                <span className="font-mono text-[10px] sm:text-sm md:text-base text-[#650a06] font-bold">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
                </span>
              </div>

              {/* Dynamic Sliding Text Content */}
              <div className="relative flex-1 my-3 sm:my-6 min-h-[170px] sm:min-h-[220px] md:min-h-[280px] flex items-center">
                {tabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    ref={(el) => { textContentRef.current[idx] = el; }}
                    className="absolute inset-x-0 flex flex-col justify-center"
                  >
                    <h3 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#650a06] font-bold mb-2 sm:mb-4 tracking-tight">
                      {tab.label}
                    </h3>
                    <p className="text-[#650a06]/90 font-body text-xs sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-8 font-medium max-w-xl line-clamp-3 sm:line-clamp-none">
                      {tab.detail}
                    </p>
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3.5 md:py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] rounded-full font-heading font-bold text-[11px] sm:text-sm md:text-base uppercase tracking-widest transition-all active:scale-95 shadow-md"
                      >
                        Explore {tab.label} <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#f7e5d9]" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button Navigation Row */}
              <div className="pt-2 sm:pt-4 border-t border-[#650a06]/20 flex items-center justify-between gap-2">
                <div ref={tabsContainerRef} className="flex gap-1.5 overflow-x-auto no-scrollbar py-1 flex-1 min-w-0 scroll-smooth">
                  {tabs.map((tab, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={tab.id}
                        ref={(el) => { buttonRefs.current[idx] = el; }}
                        type="button"
                        onClick={() => jumpToTab(idx)}
                        className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                          isActive
                            ? 'bg-[#650a06] text-[#f7e5d9] shadow-md scale-105'
                            : 'text-[#650a06] border border-[#650a06]/20 hover:bg-[#650a06]/10'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* Left / Right Control Arrows */}
                <div className="flex items-center gap-1.5 shrink-0 pl-1">
                  <button
                    type="button"
                    onClick={() => jumpToTab(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous"
                    className="p-1.5 sm:p-2.5 rounded-xl border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] disabled:opacity-20 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => jumpToTab(Math.min(TOTAL - 1, activeIndex + 1))}
                    disabled={activeIndex === TOTAL - 1}
                    aria-label="Next"
                    className="p-1.5 sm:p-2.5 rounded-xl border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] disabled:opacity-20 transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </button>
                </div>

              </div>

            </div>

            {/* Image Box */}
            <div className="order-1 md:order-2 relative w-full h-[180px] sm:h-[300px] md:h-auto md:w-1/2 overflow-hidden bg-[#f7e5d9] shrink-0">
              <div className="relative w-full h-full">
                {tabs.map((tab, idx) => (
                  <div
                    key={tab.id}
                    ref={(el) => { imageCardsRef.current[idx] = el; }}
                    className="absolute inset-0 w-full h-full overflow-hidden"
                  >
                    <img
                      src={tab.image}
                      alt={tab.label}
                      className="w-full h-full object-cover object-center"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#650a06]/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}