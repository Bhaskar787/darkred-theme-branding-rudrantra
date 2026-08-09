import { useUI } from '@/models/context/UIContext';
import { X, ChevronRight, Facebook, Instagram } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

export function MenuDrawer() {
  const { isMenuOpen, setIsMenuOpen } = useUI();

  const [shouldRender, setShouldRender] = useState(isMenuOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      document.body.style.overflow = '';
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen, setIsMenuOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[150] flex" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`relative w-[90vw] md:w-[62%] max-w-4xl h-full bg-[#faf7f2] text-[#650a06] flex flex-col shadow-2xl border-r border-[#650a06]/20 transition-transform duration-300 ease-out ${
          isClosing ? '-translate-x-full' : 'translate-x-0 animate-in slide-in-from-left'
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-[#650a06]/15 bg-[#ffffff]">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center shrink-0 group">
            <img
              src="/images/f123.png"
              alt="Rudrantra Ventures Pvt. Ltd."
              className="h-16 sm:h-16 md:h-18 w-auto max-h-[80px] md:max-h-[92px] object-contain select-none transition-transform duration-300 group-hover:scale-105"
              draggable={false}
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-[#650a06]/70 hover:text-[#650a06] hover:rotate-90 transition-all duration-300 shrink-0"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 md:p-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            
            {/* Col 1: Shop */}
            <div className="flex flex-col gap-6 md:gap-8">
              <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-[#650a06] uppercase flex items-center gap-2">
                <span className="w-4 h-px bg-[#650a06]/40"></span> Shop
              </h3>
              <nav className="flex flex-col gap-3 md:gap-5">
                {[
                  { title: 'All Products', href: '/all-products' },
                  { title: 'Sacred Collections', href: '/collections' },
                  { title: 'Rudraksha & Variants', href: '/all-products?category=Rudraksha %26 Variants' },
                  { title: 'Saligram', href: '/all-products?category=Saligram' },
                  { title: 'Shankha & Ghanti', href: '/all-products?category=Shankha %26 Ghanti' },
                  { title: 'Singing Bowl', href: '/all-products?category=Singing Bowl' },
                  { title: 'Gemstone', href: '/all-products?category=Gemstone' },
                  { title: 'Statue & Sphatik', href: '/all-products?category=Statue %26 Sphatik' },
                  { title: 'Pooja Samagri', href: '/all-products?category=Pooja Samagri' },
                ].map((item, i) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${i * 50}ms` }}
                    className="text-lg sm:text-xl text-[#650a06] hover:text-[#8a130c] transition-colors group flex items-center justify-between border-b border-[#650a06]/15 pb-2 md:pb-2.5 font-bold"
                  >
                    {item.title}
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#650a06]" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 2: Guidance & Company */}
            <div className="flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-[#650a06] uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-[#650a06]/40"></span> Guidance & Trust
                </h3>
                <nav className="flex flex-col gap-3 md:gap-4 text-sm md:text-base">
                  <Link href="/mukhi-guide" onClick={() => setIsMenuOpen(false)} className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold">
                    1:1 Mukhi Guide & Authenticity
                  </Link>
                  <Link href="/consultation" onClick={() => setIsMenuOpen(false)} className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold">
                    Book 1:1 Consultation
                  </Link>
                  <Link href="/consultation" onClick={() => setIsMenuOpen(false)} className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold">
                    Custom Order & Bespoke Mala
                  </Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-[#650a06] uppercase flex items-center gap-2">
                  <span className="w-4 h-px bg-[#650a06]/40"></span> Company
                </h3>
                <nav className="flex flex-col gap-3 md:gap-4 text-sm md:text-base">
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold"
                  >
                    FAQ & Help
                  </Link>
                  {['Shipping & Returns'].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[#650a06]/85 hover:text-[#650a06] transition-colors font-semibold"
                    >
                      {link}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Col 3: Featured & Social */}
            <div className="flex flex-col justify-between mt-4 md:mt-0">
              <div className="rounded-xl overflow-hidden relative group h-40 md:h-80 border border-[#650a06]/20 bg-[#fdf8f4]">
                <img 
                  src="https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840" 
                  alt="Featured" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#650a06]/60 via-transparent to-transparent p-4 md:p-6 flex flex-col justify-end">
                  <span className="text-[#f7e5d9] font-bold text-base md:text-xl mb-1 md:mb-2">Explore the Siddha Mala</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 md:mt-8">
                <a href="#" className="text-[#650a06]/70 hover:text-[#650a06] transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-[#650a06]/70 hover:text-[#650a06] transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}