import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  PenSquare,
  Search,
  Check,
  User
} from 'lucide-react';

interface CustomerReview {
  id: string;
  author: string;
  isVerified: boolean;
  date: string;
  rating: number;
  title: string;
  content: string;
  helpfulCount: number;
  unhelpfulCount: number;
  productName?: string;
}

const CUSTOMER_REVIEWS_DATA: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Ramji T.',
    isVerified: true,
    date: '01/06/26',
    rating: 5,
    title: 'Shipping was prompt. Best services.',
    content:
      'Shipping was prompt. Best services. Authentic 5 Mukhi Nepal Rudraksha received with numbered X-Ray density lab certificate. Highly recommended for spiritual seekers!',
    helpfulCount: 1,
    unhelpfulCount: 0,
    productName: '5 Mukhi Nepal Rudraksha',
  },
  {
    id: 'rev-2',
    author: 'Dr D.',
    isVerified: true,
    date: '31/05/26',
    rating: 5,
    title: 'Excellent Company Supplying Original products',
    content:
      'Excellent Company Supplying Original products. I ordered Siddha Mala and the energy is tangible. Packaging and Somwar consecration ceremony video link was sent via WhatsApp.',
    helpfulCount: 0,
    unhelpfulCount: 0,
    productName: 'Pashupatinath Siddha Mala',
  },
  {
    id: 'rev-3',
    author: 'Deepak Y.',
    isVerified: true,
    date: '27/05/26',
    rating: 5,
    title: 'Best Quality and Original product',
    content:
      'Best Quality and Original product. 100% genuine Nepal mature seed. Checked density under lab test and matched certificate number online on government portal.',
    helpfulCount: 0,
    unhelpfulCount: 0,
    productName: 'Ek Mukhi Savar Rudraksha',
  },
  {
    id: 'rev-4',
    author: 'Anita Sharma',
    isVerified: true,
    date: '20/05/26',
    rating: 5,
    title: 'Pure Gandaki Saligram Shila',
    content:
      'Harvested directly from Muktinath Gandaki riverbed. Beautiful natural Sudarshan Chakra formations. Panditji performed Ganga Jal abhishekam before dispatch.',
    helpfulCount: 2,
    unhelpfulCount: 0,
    productName: 'Gandaki Lakshmi Narayan Saligram',
  },
  {
    id: 'rev-5',
    author: 'Rajesh Verma',
    isVerified: true,
    date: '15/05/26',
    rating: 5,
    title: 'Authentic 7-Metal Singing Bowl',
    content:
      'Deep 432Hz acoustic vibration that sustains for over 45 seconds. Clears household aura completely during morning meditation.',
    helpfulCount: 0,
    unhelpfulCount: 0,
    productName: 'Himalayan Bronze Singing Bowl',
  },
  {
    id: 'rev-6',
    author: 'Suresh Patel',
    isVerified: true,
    date: '10/05/26',
    rating: 5,
    title: 'Fast delivery to Mumbai & lab test verified',
    content:
      'Delivered within 48 hours. GIA accredited laboratory density certificate included. Excellent customer guidance from astrologer team.',
    helpfulCount: 3,
    unhelpfulCount: 0,
    productName: 'Gauri Shankar Nepal Bead',
  },
];

export function LeftReviewsDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [showWriteModal, setShowWriteModal] = useState(false);

  // New review form state
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Votes tracking state
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({
    'rev-1': 1,
    'rev-2': 0,
    'rev-3': 0,
    'rev-4': 2,
    'rev-5': 0,
    'rev-6': 3,
  });

  // Track scroll position: Only show vertical tab when user scrolls past 350px (below hero slider)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowTab(true);
      } else {
        setShowTab(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleHelpfulClick = (id: string) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newContent.trim()) return;
    setSubmittedMessage(true);
    setTimeout(() => {
      setShowWriteModal(false);
      setSubmittedMessage(false);
      setNewName('');
      setNewTitle('');
      setNewContent('');
    }, 2000);
  };

  // Filter reviews
  const filteredReviews = CUSTOMER_REVIEWS_DATA.filter((r) => {
    if (ratingFilter && r.rating !== ratingFilter) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const matchName = r.author.toLowerCase().includes(q);
      const matchTitle = r.title.toLowerCase().includes(q);
      const matchContent = r.content.toLowerCase().includes(q);
      if (!matchName && !matchTitle && !matchContent) return false;
    }
    return true;
  });

  return (
    <>
      {/* ── SINGLE CONTINUOUS DRAWER + ATTACHED TAB CONTAINER (ZERO GLITCH ON OPEN/CLOSE) ── */}
      <AnimatePresence>
        {showTab && (
          <div
            className="fixed top-[52px] sm:top-[64px] lg:top-[76px] left-0 right-0 bottom-0 z-[110] pointer-events-none"
            role="dialog"
            aria-modal={isOpen}
          >
            {/* Backdrop Layer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="absolute inset-0 bg-black/30 transition-opacity cursor-pointer pointer-events-auto"
                />
              )}
            </AnimatePresence>

            {/* Single Drawer Panel with Physically Attached Vertical Tab Button */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: isOpen ? '0%' : '-100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute top-0 left-0 bottom-0 w-[85vw] sm:w-[480px] md:w-[540px] lg:w-[600px] xl:w-[640px] max-w-[calc(100vw-48px)] bg-white shadow-2xl border-r border-orange/20 flex flex-col justify-between overflow-visible pointer-events-auto"
            >
              {/* PHYSICALLY ATTACHED VERTICAL REVIEWS TAB BUTTON ON RIGHT OUTER EDGE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute left-full top-1/2 -translate-y-1/2 z-50 bg-navy-deep hover:bg-navy text-white border border-l-0 border-orange/30 shadow-2xl rounded-r-2xl py-4 px-2 sm:px-2.5 flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 group select-none hover:pl-3"
                aria-label="Toggle Customer Reviews Drawer"
              >
                <div className="flex flex-col items-center gap-1">
                  <Star className="w-4 h-4 fill-[#f7d623] text-[#f7d623] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-[#f2eae7] [writing-mode:vertical-rl] rotate-180 py-1">
                    ★ Reviews
                  </span>
                </div>
                <div className="flex flex-col items-center gap-0.5 bg-orange text-[#f2eae7] text-[10px] font-bold font-heading px-1.5 py-0.5 rounded-md shadow-2xs mt-0.5">
                  <span>4.9</span>
                </div>
              </button>

              {/* Scrollable Main Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                
                {/* Header Score & Write A Review CTA (Exact Screenshot Match) */}
                <div className="flex items-start justify-between border-b border-gray-100 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-4xl font-bold text-navy-deep">4.9</span>
                    <div>
                      <div className="flex items-center gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange text-orange" />
                        ))}
                      </div>
                      <span className="text-xs text-navy/60 font-medium">
                        Based on 878 reviews
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowWriteModal(!showWriteModal)}
                    className="px-4 py-2 bg-navy-deep hover:bg-navy text-white text-xs font-heading font-bold uppercase tracking-wider rounded-full transition-all shadow-sm shrink-0"
                  >
                    Write A Review
                  </button>
                </div>

                {/* Write A Review Form Modal */}
                <AnimatePresence>
                  {showWriteModal && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      onSubmit={handleReviewSubmit}
                      className="bg-[#faf7f4] border border-orange/25 rounded-2xl p-4 shadow-sm space-y-3 overflow-hidden"
                    >
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-navy border-b border-orange/15 pb-2">
                        Submit Your Customer Review
                      </h4>

                      {submittedMessage ? (
                        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Thank you! Your review has been posted.</span>
                        </div>
                      ) : (
                        <>
                          <div>
                            <label className="text-[10px] font-bold text-navy/80 block mb-1">
                              Rating
                            </label>
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  type="button"
                                  key={star}
                                  onClick={() => setNewRating(star)}
                                  className="p-0.5 transition-transform hover:scale-110"
                                >
                                  <Star
                                    className={`w-5 h-5 ${
                                      star <= newRating ? 'fill-orange text-orange' : 'fill-gray-200 text-gray-200'
                                    }`}
                                  />
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <input
                              type="text"
                              required
                              placeholder="Your Name"
                              value={newName}
                              onChange={(e) => setNewName(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-navy focus:outline-none focus:border-orange"
                            />

                            <input
                              type="text"
                              placeholder="Review Headline"
                              value={newTitle}
                              onChange={(e) => setNewTitle(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-navy focus:outline-none focus:border-orange"
                            />

                            <textarea
                              required
                              rows={3}
                              placeholder="Write your experience..."
                              value={newContent}
                              onChange={(e) => setNewContent(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs text-navy focus:outline-none focus:border-orange resize-none"
                            />
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setShowWriteModal(false)}
                              className="px-3 py-1.5 text-xs text-navy/70 hover:text-navy font-semibold"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-1.5 bg-navy-deep text-white font-heading font-bold text-xs uppercase tracking-wider rounded-full hover:bg-navy transition-colors shadow-xs"
                            >
                              Submit
                            </button>
                          </div>
                        </>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>

                {/* Section Title */}
                <div>
                  <h4 className="text-xs font-body font-medium text-navy/60">
                    Site Reviews
                  </h4>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-navy/40" />
                    <input
                      type="text"
                      value={searchFilter}
                      onChange={(e) => setSearchFilter(e.target.value)}
                      placeholder="Search reviews..."
                      className="w-full pl-8 pr-3 py-1.5 bg-[#faf7f4] border border-gray-200 rounded-xl text-xs text-navy focus:outline-none focus:border-orange"
                    />
                  </div>

                  <select
                    value={ratingFilter || ''}
                    onChange={(e) => setRatingFilter(e.target.value ? Number(e.target.value) : null)}
                    className="bg-[#faf7f4] border border-gray-200 rounded-xl text-xs text-navy font-semibold px-2.5 py-1.5 focus:outline-none cursor-pointer"
                  >
                    <option value="">All Ratings</option>
                    <option value="5">5 Stars Only</option>
                    <option value="4">4 Stars & Above</option>
                  </select>
                </div>

                {/* Reviews Feed List */}
                <div className="space-y-6 pt-2">
                  {filteredReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="border-b border-gray-100 pb-5 space-y-3 last:border-b-0"
                    >
                      {/* Author Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-navy/10 text-navy font-bold text-xs flex items-center justify-center border border-orange/20">
                            <User className="w-4 h-4 text-orange" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-heading font-bold text-sm sm:text-base text-navy">
                                {rev.author}
                              </span>
                              {rev.isVerified && (
                                <span className="inline-flex items-center gap-1 text-xs font-bold text-navy-deep bg-orange/15 px-2.5 py-0.5 rounded-full border border-orange/40">
                                  <span className="w-3.5 h-3.5 rounded-full bg-navy-deep text-orange flex items-center justify-center text-[9px] font-bold">✓</span>
                                  Verified Buyer
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <span className="text-xs sm:text-sm text-navy/50 font-medium">
                          {rev.date}
                        </span>
                      </div>

                      {/* Orange 5-Star rating */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < rev.rating ? 'fill-orange text-orange' : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm sm:text-base font-bold text-navy font-display ml-1">
                          {rev.title}
                        </span>
                      </div>

                      {/* Review Content */}
                      <p className="text-xs sm:text-sm md:text-base font-body text-navy/85 leading-relaxed font-normal">
                        {rev.content}
                      </p>

                      {/* Helpful Vote Footer with Lucide Icons */}
                      <div className="flex items-center justify-end gap-3 text-xs sm:text-sm text-navy/60 font-medium pt-1">
                        <span>Was this review helpful?</span>
                        <button
                          onClick={() => handleHelpfulClick(rev.id)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange/10 hover:bg-orange hover:text-navy-deep text-orange font-bold transition-all cursor-pointer border border-orange/20"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{helpfulVotes[rev.id] ?? rev.helpfulCount}</span>
                        </button>
                        <button
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold transition-all cursor-pointer border border-gray-200"
                        >
                          <ThumbsDown className="w-3.5 h-3.5 text-gray-500" />
                          <span>0</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Drawer Footer */}
              <div className="p-3.5 bg-[#faf7f4] border-t border-gray-100 text-center shrink-0">
                <span className="text-xs text-navy/70 font-semibold">
                  Verified Site Reviews • Rudrantra Official
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
