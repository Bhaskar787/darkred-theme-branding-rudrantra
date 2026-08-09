import { useState, useRef } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { Link } from 'wouter';
import { TbTools } from "react-icons/tb";
import {
  ChevronRight,
  Sparkles,
  Upload,
  CheckCircle2,
  ArrowRight,
  User,
  Compass,
  FileText,
  BookOpen,
} from 'lucide-react';
import { useToast } from '@/controllers/hooks/use-toast';
import { BLOG_POSTS } from '@/models/data/blogData';

export default function CustomOrderPage() {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    intention: '',
    budget: '',
    mukhiPreference: '',
    timeline: '',
    birthDetails: '',
    customizationDetails: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.customizationDetails) {
      toast({
        title: 'Missing Required Fields',
        description: 'Please fill in your name, email, phone, and customization requirements.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: 'Custom Order Request Submitted',
        description: 'Our Vedic artisans & Acharyas will review your request and get in touch within 24 hours.',
      });
    }, 1200);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body relative overflow-x-clip">
      
      {/* ASTROLOGICAL CELESTIAL BACKGROUND ANIMATIONS */}
      <style>{`
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes star-pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .astro-orbit {
          animation: orbit-rotate 60s linear infinite;
        }
        .astro-star {
          animation: star-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#ffffff] border-b border-[#650a06]/15 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-heading text-[#650a06]">
          <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
          <span className="text-[#650a06] font-bold uppercase tracking-wider">Customize Your Product</span>
        </div>
      </div>

      <main className="pb-20 space-y-12 sm:space-y-16">

        {/* ── 1. HERO SECTION: BUILD YOUR OWN SPIRITUAL PRODUCT ── */}
        <section className="relative pt-10 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          
          {/* Astrological Cosmic Watermark Behind Hero */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#650a06]/10 rounded-full blur-3xl pointer-events-none astro-star" />
          <div className="absolute top-10 right-10 w-72 h-72 border border-[#650a06]/20 rounded-full border-dashed pointer-events-none astro-orbit hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] font-heading text-xs sm:text-sm font-bold uppercase tracking-widest">
                <TbTools className="w-4 h-4 text-[#650a06]" />
                <span>BESPOKE RUDRAKSHA CRAFTING</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#650a06] leading-tight">
                Build your own <span className="text-[#650a06] underline decoration-[#650a06]/30">spiritual product</span>
              </h1>

              <p className="font-body text-base sm:text-xl text-[#650a06]/90 font-medium leading-relaxed max-w-2xl">
                Share your intention and preferences, and our team will design a custom spiritual piece that aligns with your path, budget, and timeline. Sourced directly from our Nepal farms and consecrated by Pashupatinath Brahmin scholars.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={scrollToForm}
                  className="px-8 py-4 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md hover:bg-[#8a130c] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start custom request</span>
                  <ArrowRight className="w-4 h-4 text-[#f7e5d9]" />
                </button>

                <Link
                  href="/consultation"
                  className="px-8 py-4 bg-[#fdf8f4] border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all text-center"
                >
                  Book consultation first →
                </Link>
              </div>
            </div>

            {/* Right Hero Card: HOW IT WORKS */}
            <div className="lg:col-span-5">
              <div className="bg-[#fdf8f4] text-[#650a06] rounded-3xl p-6 sm:p-8 border border-[#650a06]/20 shadow-xl space-y-6 relative overflow-hidden">
                <h3 className="font-heading text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-widest border-b border-[#650a06]/20 pb-3">
                  HOW IT WORKS
                </h3>

                <div className="space-y-4 text-xs sm:text-sm font-heading">
                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#f7e5d9] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      1
                    </span>
                    <p className="text-[#650a06] font-bold leading-snug pt-0.5">
                      Share your intention, design direction, and timeline through the form.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#f7e5d9] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      2
                    </span>
                    <p className="text-[#650a06] font-bold leading-snug pt-0.5">
                      Our team reviews your preferences and prepares a tailored recommendation.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#f7e5d9] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      3
                    </span>
                    <p className="text-[#650a06] font-bold leading-snug pt-0.5">
                      We connect with you for confirmation before crafting starts.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#650a06] text-[#f7e5d9] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                      4
                    </span>
                    <p className="text-[#650a06] font-bold leading-snug pt-0.5">
                      Your custom piece is handcrafted, quality checked, and delivered securely.
                    </p>
                  </div>
                </div>

                {/* 2 Stats Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#650a06]/15">
                  <div className="bg-[#f7e5d9] p-3.5 rounded-xl border border-[#650a06]/20 text-center">
                    <p className="font-display text-lg sm:text-xl font-bold text-[#650a06]">100%</p>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#650a06]">BESPOKE CRAFT</p>
                  </div>
                  <div className="bg-[#f7e5d9] p-3.5 rounded-xl border border-[#650a06]/20 text-center">
                    <p className="font-display text-lg sm:text-xl font-bold text-[#650a06]">Expert</p>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#650a06]">CRAFT REVIEW</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── 2. MAIN CUSTOMIZATION FORM & SIDEBAR GRID ── */}
        <section ref={formRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: CUSTOMIZE YOUR PRODUCT FORM */}
            <div className="lg:col-span-7 bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 relative">
              
              <div className="space-y-1.5 border-b border-[#650a06]/15 pb-4">
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#650a06]">
                  Customize your product
                </h2>
                <p className="font-body text-sm sm:text-base font-medium text-[#650a06]/80">
                  Tell us about your requirements and we'll get back to you with a tailored plan.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-[#f7e5d9] border border-[#650a06]/30 rounded-2xl text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#650a06]/20 text-[#650a06] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#650a06]">
                    Customization Request Received!
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#650a06]/90 font-medium max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our Vedic artisans and Acharyas will carefully evaluate your preferences and contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        intention: '',
                        budget: '',
                        mukhiPreference: '',
                        timeline: '',
                        birthDetails: '',
                        customizationDetails: '',
                      });
                      setFileName(null);
                    }}
                    className="px-8 py-3 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl hover:bg-[#8a130c] transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* GROUP 1: CONTACT DETAILS */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider">
                      <User className="w-4.5 h-4.5 text-[#650a06]" />
                      <span>CONTACT DETAILS</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Full name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Phone number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                      />
                    </div>
                  </div>

                  {/* GROUP 2: CUSTOM PREFERENCES */}
                  <div className="space-y-4 pt-2 border-t border-[#650a06]/15">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider">
                      <Sparkles className="w-4.5 h-4.5 text-[#650a06]" />
                      <span>CUSTOM PREFERENCES</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Spiritual intention</label>
                        <input
                          type="text"
                          name="intention"
                          value={formData.intention}
                          onChange={handleInputChange}
                          placeholder="e.g. protection, focus, prosperity"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Budget range</label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          placeholder="e.g. INR 5,000 - 15,000"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Mukhi / bead preference</label>
                        <input
                          type="text"
                          name="mukhiPreference"
                          value={formData.mukhiPreference}
                          onChange={handleInputChange}
                          placeholder="e.g. 5 Mukhi, 7 Mukhi, custom combination"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Preferred timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          placeholder="e.g. within 2 weeks"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GROUP 3: ASTROLOGICAL GUIDANCE */}
                  <div className="space-y-4 pt-2 border-t border-[#650a06]/15">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider">
                      <Compass className="w-4.5 h-4.5 text-[#650a06]" />
                      <span>ASTROLOGICAL GUIDANCE (OPTIONAL)</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Birth details (optional)</label>
                      <textarea
                        rows={2}
                        name="birthDetails"
                        value={formData.birthDetails}
                        onChange={handleInputChange}
                        placeholder="Date, time, and place of birth"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* GROUP 4: YOUR REQUIREMENTS */}
                  <div className="space-y-4 pt-2 border-t border-[#650a06]/15">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider">
                      <FileText className="w-4.5 h-4.5 text-[#650a06]" />
                      <span>YOUR REQUIREMENTS</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Customization details *</label>
                      <textarea
                        rows={4}
                        name="customizationDetails"
                        required
                        value={formData.customizationDetails}
                        onChange={handleInputChange}
                        placeholder="Describe size, color, design preferences, materials, and any special requests."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#f7e5d9] border border-[#650a06]/20 text-xs sm:text-sm font-medium text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* GROUP 5: REFERENCE IMAGE */}
                  <div className="space-y-4 pt-2 border-t border-[#650a06]/15">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider">
                      <Upload className="w-4.5 h-4.5 text-[#650a06]" />
                      <span>REFERENCE IMAGE</span>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">Upload inspiration (optional)</label>
                      <label className="border-2 border-dashed border-[#650a06]/30 bg-[#f7e5d9] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#650a06] hover:bg-[#fdf8f4] transition-all text-center">
                        <Upload className="w-8 h-8 text-[#650a06] mb-2 animate-bounce" />
                        <span className="text-xs sm:text-sm font-heading font-bold text-[#650a06]">
                          {fileName ? `File Selected: ${fileName}` : 'Click to upload a reference image'}
                        </span>
                        <span className="text-xs font-body text-[#650a06]/70 mt-1 font-medium">
                          PNG, JPG, WEBP up to 10MB
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting request...</span>
                    ) : (
                      <span>Submit customization request</span>
                    )}
                  </button>

                </form>
              )}

            </div>

            {/* RIGHT COLUMN: SIDEBAR CARDS STACK */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* CARD 1: SUGGESTED PRODUCTS */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider border-b border-[#650a06]/15 pb-3">
                  <Sparkles className="w-4.5 h-4.5 text-[#650a06]" />
                  <span>SUGGESTED PRODUCTS</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex gap-3.5 items-center group">
                    <img
                      src="https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214"
                      alt="Energized 5 Mukhi Jap Mala"
                      className="w-16 h-16 rounded-xl object-cover border border-[#650a06]/20 shrink-0"
                    />
                    <div className="space-y-1 flex-1 min-w-0">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-[#650a06] group-hover:underline truncate">
                        Energized 5 Mukhi Jap Mala
                      </h4>
                      <p className="text-xs font-body text-[#650a06]/80 line-clamp-1 font-medium">
                        Balanced everyday spiritual support for grounding and focus.
                      </p>
                      <Link href="/product/r1" className="text-xs font-heading font-bold text-[#650a06] inline-flex items-center gap-1 pt-0.5">
                        <span>View product</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#650a06]" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex gap-3.5 items-center group">
                    <img
                      src="https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png"
                      alt="Prosperity Combination Bracelet"
                      className="w-16 h-16 rounded-xl object-cover border border-[#650a06]/20 shrink-0"
                    />
                    <div className="space-y-1 flex-1 min-w-0">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-[#650a06] group-hover:underline truncate">
                        Prosperity Combination Bracelet
                      </h4>
                      <p className="text-xs font-body text-[#650a06]/80 line-clamp-1 font-medium">
                        Curated bead combination for career and abundance intention.
                      </p>
                      <Link href="/all-products" className="text-xs font-heading font-bold text-[#650a06] inline-flex items-center gap-1 pt-0.5">
                        <span>View product</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#650a06]" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex gap-3.5 items-center group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10"
                      alt="Meditation Rudraksha Set"
                      className="w-16 h-16 rounded-xl object-cover border border-[#650a06]/20 shrink-0"
                    />
                    <div className="space-y-1 flex-1 min-w-0">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-[#650a06] group-hover:underline truncate">
                        Meditation Rudraksha Set
                      </h4>
                      <p className="text-xs font-body text-[#650a06]/80 line-clamp-1 font-medium">
                        A premium handcrafted set designed for deep sadhana sessions.
                      </p>
                      <Link href="/all-products" className="text-xs font-heading font-bold text-[#650a06] inline-flex items-center gap-1 pt-0.5">
                        <span>View product</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#650a06]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: ABOUT RUDRANTRA */}
              <div className="bg-[#650a06] text-[#f7e5d9] rounded-3xl p-6 sm:p-8 border border-[#650a06] shadow-md space-y-4">
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#f7e5d9]">
                  About Rudrantra
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#f7e5d9]/90 font-medium leading-relaxed">
                  We craft spiritually aligned Rudraksha products with a focus on authenticity, intentional design, and personalized guidance. Every custom request is handled with care by a team that blends traditional knowledge with modern quality standards.
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-bold text-[#f7e5d9]/90 border-t border-[#f7e5d9]/20 pt-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    <span>Authentic sourcing and quality verification process.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    <span>Recommendations tailored to your intention & lifestyle.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f7e5d9] shrink-0" />
                    <span>Dedicated support before, during, and after your order.</span>
                  </li>
                </ul>

                <Link
                  href="/about"
                  className="inline-block mt-2 px-5 py-2.5 bg-[#f7e5d9] text-[#650a06] font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-colors"
                >
                  Explore our story →
                </Link>
              </div>

              {/* CARD 3: FROM OUR BLOG */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#650a06] uppercase tracking-wider border-b border-[#650a06]/15 pb-3">
                  <BookOpen className="w-4.5 h-4.5 text-[#650a06]" />
                  <span>FROM OUR BLOG</span>
                </div>

                <div className="space-y-3.5">
                  {BLOG_POSTS.slice(0, 3).map((post) => (
                    <div key={post.id} className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 space-y-1.5">
                      <h4 className="font-display text-xs sm:text-sm font-bold text-[#650a06] line-clamp-1">
                        {post.title}
                      </h4>
                      <p className="text-xs font-body text-[#650a06]/80 line-clamp-2 font-medium">
                        {post.excerpt}
                      </p>
                      <Link href={`/article/${post.id}`} className="text-xs font-heading font-bold text-[#650a06] hover:underline inline-flex items-center gap-1 pt-1">
                        <span>Read blog →</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── 3. BOTTOM CALLOUT BANNER ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#650a06] text-[#f7e5d9] rounded-3xl p-8 sm:p-12 border border-[#650a06] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#f7e5d9]">
                [ EXPERT GUIDANCE ]
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f7e5d9]">
                Not sure which Rudraksha is right for you?
              </h3>
              <p className="font-body text-sm sm:text-base text-[#f7e5d9]/90 font-medium">
                Book a consultation with our spiritual advisors or reach out — we help you choose authentic beads with confidence.
              </p>
            </div>

            <Link
              href="/consultation"
              className="px-8 py-4 bg-[#f7e5d9] text-[#650a06] font-heading font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-md hover:bg-white transition-all shrink-0 text-center"
            >
              Book Consultation →
            </Link>
          </div>
        </section>

      </main>

      {/* Footer & Global Overlays */}
      <Footer />
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <FloatingActions />
    </div>
  );
}
