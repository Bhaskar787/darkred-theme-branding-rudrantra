import { useState } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { Link } from 'wouter';
import { LuMessageCircle } from "react-icons/lu";
import {
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Send,
  Compass,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Star,
  HelpCircle,
} from 'lucide-react';
import { GiLotus } from 'react-icons/gi';
import { useToast } from '@/controllers/hooks/use-toast';
import { BLOG_POSTS } from '@/models/data/blogData';

// Scattered "night sky" dots for AstroBackground
const stars = [
  { x: 42, y: 68, r: 1.6, o: 0.55 }, { x: 118, y: 140, r: 1.1, o: 0.35 }, { x: 210, y: 54, r: 1.8, o: 0.5 },
  { x: 300, y: 200, r: 1.2, o: 0.3 }, { x: 60, y: 300, r: 1.4, o: 0.4 }, { x: 160, y: 380, r: 1.1, o: 0.3 },
  { x: 340, y: 340, r: 1.6, o: 0.45 }, { x: 30, y: 460, r: 1.2, o: 0.35 }, { x: 250, y: 470, r: 1.8, o: 0.5 },
  { x: 380, y: 120, r: 1.1, o: 0.3 }, { x: 470, y: 250, r: 1.5, o: 0.4 }, { x: 550, y: 90, r: 1.2, o: 0.35 },
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
      <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full opacity-60">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#650a06" opacity={s.o} className="animate-star-twinkle" style={{ animationDelay: `${(i % 6) * 0.6}s` }} />
        ))}
      </svg>

      <svg viewBox="0 0 800 800" className="absolute -right-16 -top-10 w-[620px] h-[620px] md:w-[720px] md:h-[720px] opacity-[0.15]">
        {orbitRadii.map((r) => (
          <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#650a06" strokeWidth="1" />
        ))}

        {navagraha.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const px = cx + 230 * Math.cos(rad);
          const py = cy + 230 * Math.sin(rad);
          return (
            <g key={p.name}>
              <circle cx={px} cy={py} r="14" fill="#fdf8f4" stroke="#650a06" strokeWidth="1.5" />
              <text x={px} y={py + 4} textAnchor="middle" fill="#650a06" fontSize="10" fontWeight="bold" fontFamily="serif">
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ConsultationPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationFor: '',
    city: '',
    country: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM IST',
    goalsMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.goalsMessage) {
      toast({
        title: 'Missing Required Fields',
        description: 'Please fill in your name, email, phone, and goal message.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: 'Consultation Request Submitted',
        description: 'Our Vedic Acharya will review your birth chart and contact you within 24 hours.',
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body relative overflow-x-clip">
      <AnnouncementBar />
      <Navbar />

      <main className="pb-20">
        
        {/* Top Header Bar */}
        <div className="bg-[#ffffff] text-[#650a06] py-4 border-b border-[#650a06]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <span className="text-[#650a06] font-bold">1:1 Spiritual & Product Guidance</span>
          </div>
        </div>

        {/* 1. HERO SECTION */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#faf7f2] relative overflow-hidden border-b border-[#650a06]/15">
          <AstroBackground />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Hero Copy */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 py-1.5 rounded-full shadow-xs">
                  <LuMessageCircle className="w-4 h-4 text-[#650a06]" />
                  PERSONALIZED 1:1 CONSULTATION
                </span>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650a06] leading-tight tracking-tight">
                  Book spiritual and product guidance
                </h1>

                <p className="font-body text-[#650a06]/90 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
                  Share your goals and birth details to receive practical, personalized suggestions for the right Rudraksha beads, malas, and daily spiritual practices.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#booking-form"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md hover:bg-[#8a130c] transition-all cursor-pointer"
                  >
                    <span>Book your slot ↓</span>
                  </a>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fdf8f4] text-[#650a06] border border-[#650a06]/30 hover:border-[#650a06] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-xs transition-all"
                  >
                    <span>Learn about us</span>
                  </Link>
                </div>
              </div>

              {/* Right How-It-Works Card */}
              <div className="lg:col-span-5 bg-[#fdf8f4] text-[#650a06] border border-[#650a06]/30 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
                <h3 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#650a06] border-b border-[#650a06]/20 pb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#650a06]" />
                  HOW IT WORKS
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-heading font-bold">
                  {[
                    { n: '1', title: 'Submit your concern, intention, and preferred time' },
                    { n: '2', title: 'Our team reviews your details and confirms a suitable slot' },
                    { n: '3', title: 'Attend a one-to-one guidance session with practical recommendations' },
                    { n: '4', title: 'Receive follow-up direction for product choices and daily practice' },
                  ].map((step) => (
                    <div key={step.n} className="flex items-start gap-3">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#f7e5d9] font-heading font-bold flex items-center justify-center text-xs shrink-0">
                        {step.n}
                      </span>
                      <p className="text-[#650a06] font-bold leading-snug pt-0.5">{step.title}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#650a06]/20">
                  <div className="bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl p-3 text-center">
                    <span className="block font-display text-xl font-bold text-[#650a06]">1:1</span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#650a06]">EXPERT SESSION</span>
                  </div>
                  <div className="bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl p-3 text-center">
                    <span className="block font-display text-xl font-bold text-[#650a06]">24h</span>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#650a06]">RESPONSE TIME</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. MAIN 2-COLUMN SECTION */}
        <section id="booking-form" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Request Consultation Form Card */}
            <div className="lg:col-span-7 bg-[#fdf8f4] border border-[#650a06]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#650a06] font-bold tracking-tight">
                  Request your consultation
                </h2>
                <p className="font-body text-xs sm:text-sm font-medium text-[#650a06]/80 mt-1">
                  Share your intention and birth details. We will guide you to the right bead or mala.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#f7e5d9] border border-[#650a06]/30 rounded-2xl p-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#650a06]/20 text-[#650a06] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#650a06] font-bold">
                    Consultation Request Received!
                  </h3>
                  <p className="font-body text-sm font-medium text-[#650a06]/90 max-w-md mx-auto leading-relaxed">
                    Thank you for submitting your birth details and intentions. Our Brahmin scholar will review your chart and confirm your slot via email / phone within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#8a130c] transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* GROUP 1: PERSONAL DETAILS */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-[#650a06]/15 pb-2">
                      <User className="w-4 h-4 text-[#650a06]" />
                      <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#650a06]">
                        1. Personal Details
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Full name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+977 / +91 Mobile Number"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Consultation for</label>
                        <input
                          type="text"
                          value={formData.consultationFor}
                          onChange={(e) => setFormData({ ...formData, consultationFor: e.target.value })}
                          placeholder="e.g. Wealth, Health, Protection"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">City</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Kathmandu / Mumbai"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Country</label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. Nepal / India"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GROUP 2: BIRTH DETAILS */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b border-[#650a06]/15 pb-2">
                      <Calendar className="w-4 h-4 text-[#650a06]" />
                      <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#650a06]">
                        2. Birth Details (For Planetary Calculation)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Birth date</label>
                        <input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-3 py-3 text-xs sm:text-sm font-medium text-[#650a06] focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Birth time</label>
                        <input
                          type="time"
                          value={formData.birthTime}
                          onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-3 py-3 text-xs sm:text-sm font-medium text-[#650a06] focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Birth place</label>
                        <input
                          type="text"
                          value={formData.birthPlace}
                          onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                          placeholder="City, State"
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GROUP 3: PREFERRED SCHEDULE */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b border-[#650a06]/15 pb-2">
                      <Clock className="w-4 h-4 text-[#650a06]" />
                      <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#650a06]">
                        3. Preferred Schedule
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Preferred date</label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-3 py-3 text-xs sm:text-sm font-medium text-[#650a06] focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block mb-1.5">Preferred time slot</label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#650a06] focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors cursor-pointer"
                        >
                          <option value="10:00 AM - 12:00 PM IST">10:00 AM - 12:00 PM IST</option>
                          <option value="02:00 PM - 04:00 PM IST">02:00 PM - 04:00 PM IST</option>
                          <option value="06:00 PM - 08:00 PM IST">06:00 PM - 08:00 PM IST</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* GROUP 4: YOUR MESSAGE */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06] block">Tell us about your goals *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.goalsMessage}
                      onChange={(e) => setFormData({ ...formData, goalsMessage: e.target.value })}
                      placeholder="Share your intention, current challenges, and what you hope to gain from this session…"
                      className="w-full bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl p-4 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/60 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors resize-none"
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#f7e5d9]" />
                        <span>Submit consultation request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Sidebar Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* CARD 1: SUGGESTED PRODUCTS */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#650a06] flex items-center gap-2">
                  <GiLotus className="w-4 h-4 text-[#650a06]" />
                  Suggested Products
                </h4>

                <div className="space-y-3">
                  {[
                    {
                      name: 'Personal Guidance Mala Set',
                      desc: 'A curated mala set commonly recommended after one-to-one consultations.',
                      link: '/all-products?category=Rudraksha %26 Variants',
                    },
                    {
                      name: 'Intention-Based Rudraksha Bracelet',
                      desc: 'Custom bead combination tailored to your focus, healing, or growth goals.',
                      link: '/all-products?category=Rudraksha %26 Variants',
                    },
                    {
                      name: 'Premium Daily Wear Rudraksha',
                      desc: 'Balanced spiritual wear for consistent everyday support and clarity.',
                      link: '/all-products?category=Rudraksha %26 Variants',
                    },
                  ].map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/15 space-y-1">
                      <h5 className="font-heading font-bold text-xs sm:text-sm text-[#650a06]">{p.name}</h5>
                      <p className="font-body text-xs font-medium text-[#650a06]/85 leading-snug line-clamp-2">{p.desc}</p>
                      <Link
                        href={p.link}
                        className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#650a06] hover:underline pt-1"
                      >
                        <span>View products</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#650a06]" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD 2: ABOUT RUDRANTRA GUIDANCE */}
              <div className="bg-[#650a06] text-[#f7e5d9] border border-[#650a06] rounded-2xl p-6 shadow-md space-y-3">
                <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#f7e5d9]">
                  About Rudrantra Guidance
                </h4>
                <p className="font-body text-xs sm:text-sm font-medium text-[#f7e5d9]/90 leading-relaxed">
                  Rudrantra combines traditional spiritual insight with practical guidance. Our consultations focus on clarity, authenticity, and solutions you can follow in daily life.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#f7e5d9]/95 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    Personalized recommendations aligned to your goals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    Authentic product guidance backed by experienced advisors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    Structured support before and after your consultation session
                  </li>
                </ul>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 pt-3 text-xs sm:text-sm font-heading font-bold text-[#f7e5d9] hover:underline transition-colors"
                >
                  <span>Explore our story</span>
                  <ArrowRight className="w-4 h-4 text-[#f7e5d9]" />
                </Link>
              </div>

              {/* CARD 3: READ BEFORE YOUR SESSION */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wider text-[#650a06] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#650a06]" />
                  Read Before Your Session
                </h4>

                <div className="space-y-3">
                  {BLOG_POSTS.slice(0, 2).map((post) => (
                    <div key={post.id} className="p-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/15 space-y-1">
                      <div className="flex items-center justify-between text-xs font-heading font-bold text-[#650a06]/70">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h5 className="font-heading font-bold text-xs sm:text-sm text-[#650a06] hover:underline transition-colors cursor-pointer">
                        <Link href={`/article/${post.id}`}>{post.title}</Link>
                      </h5>
                      <p className="font-body text-xs font-medium text-[#650a06]/85 leading-snug line-clamp-2">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <FloatingActions />
    </div>
  );
}
export default ConsultationPage;
