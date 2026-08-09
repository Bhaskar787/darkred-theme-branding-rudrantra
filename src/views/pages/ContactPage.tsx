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
import {
  ChevronRight,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  PhoneCall,
  Compass,
} from 'lucide-react';
import { useToast } from '@/controllers/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: 'Missing Required Fields',
        description: 'Please fill in your name, email, phone, and message.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: 'Message Sent Successfully',
        description: 'Thank you for reaching out! Our team will get back to you within 24 hours.',
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body relative overflow-x-clip">
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#ffffff] border-b border-[#650a06]/15 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#650a06]">
          <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
          <span className="text-[#650a06] font-bold">Contact Support & Reach Us</span>
        </div>
      </div>

      <main className="pb-20 pt-6 sm:pt-10">

        {/* ── MAIN 12-COLUMN LAYOUT STARTING DIRECTLY BELOW BREADCRUMBS ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: HERO CONTENT + FORM + BANNER (7 Columns) */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              
              {/* Hero Header Content */}
              <div className="space-y-4 pt-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] font-heading text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#650a06]" />
                  <span>WE'RE HERE TO HELP</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#650a06] leading-tight tracking-tight">
                  Best Rudraksha & Original <span className="text-[#650a06] underline decoration-[#650a06]/30">Rudraksha Mala Support</span>
                </h1>

                <p className="font-body text-base sm:text-lg font-medium text-[#650a06]/90 leading-relaxed">
                  Have a question about choosing the best rudraksha, selecting an original rudraksha mala, or finding the right Rudraksha for positivity? Reach out for guided help, order support, and authenticity-related queries.
                </p>
              </div>

              {/* CONTACT FORM CARD */}
              <div id="contact-form" className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
                <div className="space-y-1.5 border-b border-[#650a06]/15 pb-4">
                  <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#650a06]">
                    Send us a message
                  </h2>
                  <p className="font-body text-sm sm:text-base font-medium text-[#650a06]/80">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 bg-[#f7e5d9] border border-[#650a06]/30 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#650a06] mx-auto" />
                    <h3 className="font-display text-xl font-bold text-[#650a06]">Message Sent!</h3>
                    <p className="font-body text-xs sm:text-sm text-[#650a06]/90 font-medium">
                      Thank you for contacting Rudrantra. Our spiritual advisors in Nepal will review your message and reply via email or phone shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: '', email: '', phone: '', message: '' });
                      }}
                      className="px-6 py-2.5 bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#8a130c] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl text-xs sm:text-sm font-bold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-all"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-wider block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rajesh@example.com"
                          className="w-full px-4 py-3 bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl text-xs sm:text-sm font-bold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-wider block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +977 9715551396"
                          className="w-full px-4 py-3 bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl text-xs sm:text-sm font-bold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-wider block">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you? Ask about Mukhi selection, authentic Nepal beads, custom order status, or consecration rituals..."
                        className="w-full px-4 py-3 bg-[#f7e5d9] border border-[#650a06]/20 rounded-xl text-xs sm:text-sm font-bold text-[#650a06] placeholder:text-[#650a06]/50 focus:outline-none focus:border-[#650a06] focus:bg-[#fdf8f4] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#650a06] hover:bg-[#8a130c] text-[#f7e5d9] font-heading font-bold text-sm sm:text-base uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#f7e5d9]" />
                          <span>Send message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

              {/* CALLOUT BANNER INSIDE LEFT GRID */}
              <div className="bg-[#650a06] text-[#f7e5d9] rounded-3xl p-6 sm:p-8 border border-[#650a06] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#f7e5d9]">
                    [ EXPERT GUIDANCE ]
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f7e5d9]">
                    Not sure which Rudraksha is right for you?
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#f7e5d9]/90 font-medium">
                    Book a consultation with our spiritual advisors or reach out — we help you choose authentic beads with confidence.
                  </p>
                </div>

                <Link
                  href="/consultation"
                  className="px-6 py-3.5 bg-[#f7e5d9] text-[#650a06] font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md hover:bg-white transition-all shrink-0 text-center"
                >
                  Book Consultation →
                </Link>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 lg:sticky lg:top-20 self-start space-y-6 pt-2">
              
              {/* REACH US DIRECTLY CARD */}
              <div className="bg-[#fdf8f4] text-[#650a06] rounded-3xl p-6 sm:p-8 border border-[#650a06]/20 shadow-xl space-y-6 relative overflow-hidden">
                <h3 className="font-heading text-xs sm:text-sm font-bold text-[#650a06] uppercase tracking-widest border-b border-[#650a06]/20 pb-3">
                  REACH US DIRECTLY
                </h3>

                <div className="space-y-3.5">
                  {/* Email */}
                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex items-start gap-4 hover:border-[#650a06] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06]">EMAIL</span>
                      <p className="font-heading font-bold text-xs sm:text-sm text-[#650a06]">support@rudrantra.com</p>
                      <p className="font-body text-xs text-[#650a06]/75 font-medium">rudrantra@gmail.com</p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex items-start gap-4 hover:border-[#650a06] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06]">PHONE / WHATSAPP</span>
                      <p className="font-heading font-bold text-xs sm:text-sm text-[#650a06]">+977-9715551396</p>
                      <p className="font-body text-xs text-[#650a06]/75 font-medium">+977 9715551396 (WhatsApp & Call Support)</p>
                    </div>
                  </div>

                  {/* Headquarters */}
                  <div className="p-4 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/15 flex items-start gap-4 hover:border-[#650a06] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06]">HEADQUARTERS</span>
                      <p className="font-heading font-bold text-xs sm:text-sm text-[#650a06]">Kathmandu, Nepal</p>
                      <p className="font-body text-xs text-[#650a06]/75 font-medium">Pashupatinath Marg, Thamel, Kathmandu</p>
                    </div>
                  </div>
                </div>

                {/* 2 Stat Pills */}
                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#650a06]/15">
                  <div className="bg-[#f7e5d9] p-3.5 rounded-xl border border-[#650a06]/20 text-center">
                    <p className="font-display text-lg sm:text-xl font-bold text-[#650a06]">24h</p>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#650a06]">RESPONSE TIME</p>
                  </div>
                  <div className="bg-[#f7e5d9] p-3.5 rounded-xl border border-[#650a06]/20 text-center">
                    <p className="font-display text-lg sm:text-xl font-bold text-[#650a06]">1:1</p>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#650a06]">EXPERT SUPPORT</p>
                  </div>
                </div>

              </div>

              {/* ITEM 2: NEED IMMEDIATE HELP? */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#650a06]">
                    Need immediate help?
                  </h3>
                </div>

                <p className="font-body text-xs sm:text-sm font-medium text-[#650a06]/85 leading-relaxed">
                  For urgent inquiries about your order or spiritual guidance, reach out directly.
                </p>

                <a
                  href="tel:+9779715551396"
                  className="w-full py-3 bg-[#650a06] text-[#f7e5d9] font-heading font-bold uppercase tracking-wider text-xs rounded-xl text-center hover:bg-[#8a130c] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#f7e5d9]" />
                  <span>Call now: +977-9715551396</span>
                </a>
              </div>

              {/* ITEM 3: LOOKING FOR PERSONALIZED GUIDANCE? */}
              <div className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0">
                    <Compass className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#650a06]">
                    Looking for personalized guidance?
                  </h3>
                </div>

                <p className="font-body text-xs sm:text-sm font-medium text-[#650a06]/85 leading-relaxed">
                  Book a 1:1 consultation to choose Rudraksha based on your intention or birth chart.
                </p>

                <div className="space-y-2.5">
                  <Link
                    href="/consultation"
                    className="w-full py-3 bg-[#650a06] text-[#f7e5d9] font-heading font-bold uppercase tracking-wider text-xs rounded-xl text-center shadow-md hover:bg-[#8a130c] transition-all block"
                  >
                    Book consultation →
                  </Link>

                  <Link
                    href="/all-products"
                    className="w-full py-2.5 border border-[#650a06]/30 text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] text-xs font-heading font-bold uppercase tracking-wider rounded-xl text-center transition-colors block"
                  >
                    Explore collection →
                  </Link>
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