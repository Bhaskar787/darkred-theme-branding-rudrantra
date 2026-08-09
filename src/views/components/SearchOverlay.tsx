import { useUI } from '@/models/context/UIContext';
import { Search, X, SearchX } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { formatPrice } from '@/utils/utils';

// Static demo catalog so search has something real to match against.
// Swap this out for your actual product source (API, CMS, etc.) when ready.
const DEMO_PRODUCTS = [
  {
    id: 'p1',
    name: '1 Mukhi Rudraksha',
    tags: ['1 mukhi', 'meditation', 'shiva'],
    price: 24999,
    image: 'https://images.unsplash.com/photo-1610113817152-c9330bfd5c39?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'p2',
    name: '5 Mukhi Rudraksha Mala (108 Beads)',
    tags: ['5 mukhi', 'mala', 'meditation'],
    price: 3499,
    image: 'https://images.unsplash.com/photo-1610171880023-46e5ff5a6108?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'p3',
    name: 'Gauri Shankar Rudraksha',
    tags: ['gauri shankar', 'relationship', 'union'],
    price: 8999,
    image: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fac34?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'p4',
    name: '14 Mukhi Rudraksha',
    tags: ['14 mukhi', 'prosperity', 'protection'],
    price: 18999,
    image: 'https://images.unsplash.com/photo-1610171880135-b40aae5ec27b?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'p5',
    name: 'Siddha Mala — Navgraha',
    tags: ['siddha mala', 'navgraha', 'prosperity'],
    price: 12499,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'p6',
    name: 'Rudraksha Bracelet — Protection',
    tags: ['bracelet', 'protection', 'meditation'],
    price: 2199,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=200&q=80',
  },
];

const POPULAR_SEARCHES = ['Siddha Mala', '1 Mukhi', 'Prosperity', 'Meditation', 'Gauri Shankar', '14 Mukhi'];

export function SearchOverlay() {
  const { isSearchOpen, setIsSearchOpen } = useUI();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const [shouldRender, setShouldRender] = useState(isSearchOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
        setQuery('');
      }, 200);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isSearchOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isSearchOpen, setIsSearchOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return DEMO_PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))
    );
  }, [query]);

  if (!shouldRender) return null;

  const handleClose = () => setIsSearchOpen(false);

  return (
    <div className="fixed inset-0 z-[150] flex items-start justify-center pt-20 sm:pt-24 md:pt-32 px-3 sm:px-4">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      <div
        className={`relative w-full max-w-3xl bg-[#faf7f2] text-[#650a06] border border-[#650a06]/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-200 ${
          isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-in fade-in zoom-in-95'
        }`}
      >
        <div className="flex items-center p-3 sm:p-4 border-b border-[#650a06]/20 bg-[#efe1d5]">
          <Search className="w-5 h-5 md:w-6 md:h-6 text-[#650a06] ml-2 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sacred rudraksha, mukhis, or intentions..."
            className="flex-1 bg-transparent border-none text-[#650a06] text-base md:text-xl px-3 md:px-4 py-2 focus:outline-none placeholder:text-[#650a06]/60 font-heading min-w-0"
          />
          <button
            onClick={handleClose}
            aria-label="Close search"
            className="p-2 text-[#650a06] hover:bg-[#650a06]/10 transition-colors rounded-full shrink-0"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-5 sm:p-6 bg-[#faf7f2]">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#650a06] mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full border border-[#650a06]/30 text-[#650a06] text-xs sm:text-sm font-medium hover:bg-[#650a06] hover:text-[#f7e5d9] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 md:p-10 flex flex-col items-center text-center bg-[#fdf8f4] animate-in fade-in duration-200">
              <SearchX className="w-8 h-8 md:w-10 md:h-10 text-[#650a06] mb-3" />
              <p className="font-heading text-[#650a06] font-semibold mb-1 text-sm md:text-base">No results for "{query}"</p>
              <p className="text-xs md:text-sm text-[#650a06]/80">Try a mukhi number, mala type, or an intention like "prosperity".</p>
            </div>
          ) : (
            <div className="p-3 sm:p-4 bg-[#fdf8f4] animate-in fade-in duration-200">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#650a06] mb-3 px-2">
                {results.length} {results.length === 1 ? 'Result' : 'Results'}
              </h3>
              <div className="flex flex-col gap-1">
                {results.map((product) => (
                  <button
                    key={product.id}
                    className="flex items-center gap-3 md:gap-4 p-2 rounded-xl hover:bg-[#f7e5d9] transition-colors text-left group"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border border-[#650a06]/20 shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-[#650a06] text-xs md:text-sm font-semibold truncate group-hover:text-[#8a130c] transition-colors">
                        {product.name}
                      </p>
                      <p className="text-[#650a06] text-[10px] md:text-xs mt-0.5">{formatPrice(product.price)}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}