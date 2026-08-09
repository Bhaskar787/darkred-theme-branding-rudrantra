import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#f7e5d9] text-[#650a06] pt-20 md:pt-24 pb-8 relative overflow-hidden border-t border-[#650a06]/20">
      {/* Faint mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-mandala opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 mb-16 md:mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-[#650a06] overflow-hidden flex items-center justify-center bg-[#f7e5d9] shrink-0">
                <img 
                  src="https://res.cloudinary.com/deiusxdk9/image/upload/v1771952737/rudrantra/cms/rswcale9xcfa697s2kvw.png" 
                  alt="Rudrantra Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display text-base sm:text-lg font-bold tracking-widest text-[#650a06] block">
                  Rudrantra
                </span>
                <span className="text-[10px] font-heading font-bold text-[#650a06] tracking-widest mt-1 block">ॐ नमः शिवाय</span>
              </div>
            </Link>
            <p className="text-[#650a06]/90 font-body text-sm leading-relaxed max-w-xs mt-2">
              Sacred Rudraksha from the Arun Valley, Nepal. Blessed at Pashupatinath, lab-certified, and delivered worldwide since 1973.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Collections
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Single Beads</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Mala & Rosaries</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Siddha Mala</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Bracelets</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Pooja Items</Link>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Information
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">About Us</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Book Consultation</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Authenticity Guide</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Shipping & Returns</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">FAQ</Link>
            </nav>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Contact
            </h4>
            <div className="flex flex-col gap-3 text-[#650a06]/85 text-sm font-body">
              <p>support@rudrantra.com</p>
              <p>+91 98765 43210</p>
              <p>Thamel, Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 flex items-center justify-center text-[#650a06] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 5 - Download App */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Download Our App
            </h4>
            <p className="text-[#650a06]/85 font-body text-sm leading-relaxed max-w-xs">
              Shop Rudraksha, track orders, and book consultations on the go.
            </p>
            <div className="flex flex-col gap-3">
              <a href="#" className="inline-block w-fit">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 sm:h-11 w-auto rounded-lg"
                />
              </a>
              <a href="#" className="inline-block w-fit">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-10 sm:h-11 w-auto"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#650a06]/30 to-transparent mb-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-heading tracking-widest uppercase text-[#650a06]/80">
          <p>© {new Date().getFullYear()} Rudrantra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#650a06] font-bold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#650a06] font-bold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}