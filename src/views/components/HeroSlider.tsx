import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    tag: 'Sacred Origin · Nepal',
    heading: 'Beads Blessed\nAt Pashupatinath',
    sub: "Every Rudraksha from the sacred Arun Valley, energized by Vedic pandits at Nepal's most holy Shiva temple before it reaches you.",
    cta: 'Explore Collections',
    href: '#',
    image: 'https://www.travelhimalayan.com/wp-content/uploads/2026/01/Pashupatinath-to-Mount-Kailash-1.webp',
  },
  {
    tag: 'X-Ray Certified · Lab Verified',
    heading: 'Authenticity\nYou Can See',
    sub: 'Every bead ships with a GIA-process X-ray certification and full mukhi count report. Zero guesswork, complete peace of mind.',
    cta: 'See Our Guarantee',
    href: '#',
    image: 'https://as1.ftcdn.net/v2/jpg/09/74/62/96/1000_F_974629665_AOBh7xezMAcwDnDtGIT9Xy4I1JxElMAn.jpg',
  },
  {
    tag: 'Shravan Special — Live Now',
    heading: 'The Siddha Mala\nComplete Set',
    sub: '1 through 14 Mukhi, naturally strung on red silk thread and energized in one sacred ceremony. The rarest offering in our collection.',
    cta: 'Shop Siddha Mala',
    href: '#',
    image: 'https://hsj.com.np/uploads/0000/1/2026/01/01/pexels-aidun-10792604.jpg',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const go = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const handlers = useSwipeable({
    onSwipedLeft: () => go(current + 1),
    onSwipedRight: () => go(current - 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const slide = slides[current];

  return (
    <section 
      {...handlers} 
      className="relative w-full h-auto sm:h-[75vh] md:h-[85vh] min-h-[380px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden bg-[#faf7f2] text-[#650a06] touch-pan-y border-b border-[#650a06]/20 py-8 sm:py-0"
    >
      {/* Soft Light Cream Ambient Glow */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-80'}`}
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* Soft Side Fade for Text Readability — Reduced Heavy Fade */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#faf7f2]/90 via-[#faf7f2]/55 to-transparent/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-auto sm:h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-2 sm:py-0">
        <div className={`max-w-2xl transition-all duration-700 w-full ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#650a06] mb-2.5 sm:mb-5 border-b border-[#650a06]/30 pb-1">
            {slide.tag}
          </span>

          <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl md:text-7xl leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-6 whitespace-pre-line text-[#650a06] font-bold drop-shadow-sm">
            {slide.heading}
          </h1>

          <p className="font-body text-[#650a06]/95 font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-5 sm:mb-8 max-w-xl">
            {slide.sub}
          </p>

          {/* ALWAYS ON ONE ROW ONLY ACROSS ALL DEVICES */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
            <Link
              href={slide.href}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-3 sm:py-4 bg-[#650a06] text-[#faf7f2] font-bold uppercase tracking-wider sm:tracking-widest text-[10px] xs:text-xs sm:text-sm hover:bg-[#8a130c] transition-all shadow-[0_4px_15px_rgba(101,10,6,0.2)] rounded-lg sm:rounded-none text-center whitespace-nowrap"
            >
              {slide.cta}
            </Link>
            <Link
              href="/consultation"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-3 sm:py-4 border border-[#650a06] text-[#650a06] font-bold uppercase tracking-wider sm:tracking-widest text-[10px] xs:text-xs sm:text-sm hover:bg-[#650a06] hover:text-[#faf7f2] bg-transparent transition-all rounded-lg sm:rounded-none text-center whitespace-nowrap"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={() => go(current - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-[#650a06]/30 flex items-center justify-center text-[#650a06] hover:border-[#650a06] transition-all hover:bg-[#650a06]/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => go(current + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-[#650a06]/30 flex items-center justify-center text-[#650a06] hover:border-[#650a06] transition-all hover:bg-[#650a06]/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Desktop Indicators */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 transition-all duration-300 ${
              i === current ? 'w-12 bg-[#650a06]' : 'w-6 bg-[#650a06]/30'
            }`}
          />
        ))}
      </div>

      {/* Mobile Dot Indicators */}
      <div className="flex md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-[#650a06]' : 'w-3 bg-[#650a06]/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}