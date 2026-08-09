import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '9779715551396';
const WHATSAPP_MESSAGE = "Namaste! I'd like to know more about your Rudraksha and Spritual Products.";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* BOTTOM RIGHT FLOATING ACTION STACK */}
      <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3">
        
        {/* 1. SCROLL TO TOP BUTTON (Appears above WhatsApp when scrolled down) */}
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#650a06]/30 bg-[#ffffff] text-[#650a06] flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#650a06] hover:text-[#faf7f2] shrink-0 ${
            showScrollTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* 2. WHATSAPP FLOATING ACTION BUTTON */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 cursor-pointer shrink-0"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35" />
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 text-white" />
        </a>

      </div>
    </>
  );
}