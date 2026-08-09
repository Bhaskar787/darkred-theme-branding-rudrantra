import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#f4ebd0] text-[#650a06] pt-16 sm:pt-20 md:pt-24 pb-8 relative overflow-hidden border-t border-[#650a06]/20">
      {/* Soft Ambient Glow Backgrounds */}
      <div className="absolute top-1/4 -left-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#650a06]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Faint mandala watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-mandala opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 mb-16 md:mb-20">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center shrink-0 group w-fit">
              <img
                src="/images/f123.png"
                alt="Rudrantra Ventures Pvt. Ltd."
                className="h-15 sm:h-16 md:h-18 w-auto max-h-[100px] md:max-h-[112px] object-contain select-none transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
            </Link>
            <span className="text-[11px] font-heading font-bold text-[#650a06] tracking-widest block">ॐ नमः शिवाय</span>
            <p className="text-[#650a06]/85 font-body text-sm leading-relaxed max-w-xs mt-1">
              Sacred Rudraksha from the Arun Valley, Nepal. Blessed at Pashupatinath, lab-certified, and delivered worldwide since 1973.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Collections
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/all-products" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">All Products</Link>
              <Link href="/all-products?category=Rudraksha %26 Variants&subcategory=Rudraksha Beads" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Rudraksha Beads</Link>
              <Link href="/all-products?category=Saligram" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Gandaki Saligram</Link>
              <Link href="/all-products?category=Singing Bowl" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Singing Bowls</Link>
              <Link href="/all-products?category=Pooja Samagri" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Pooja Items</Link>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Information
            </h4>
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">About Us</Link>
              <Link href="/consultation" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Book Consultation</Link>
              <Link href="/contact" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Contact Support</Link>
              <Link href="#" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">Shipping & Returns</Link>
              <Link href="/faq" className="text-[#650a06]/85 hover:text-[#650a06] font-bold transition-colors text-sm font-heading tracking-wider">FAQ & Help Center</Link>
            </nav>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Contact
            </h4>
            <div className="flex flex-col gap-3 text-[#650a06]/85 text-sm font-body">
              <p>support@rudrantra.com</p>
              <p>+977 9715551396</p>
              <p>Thamel, Kathmandu, Nepal</p>
            </div>
      
          </div>

          {/* Col 5 -  Visit our Site  */}
          <div className="flex flex-col gap-6">
            <h4 className="font-heading font-bold text-lg uppercase tracking-widest text-[#650a06] flex items-center gap-2">
              <span className="w-4 h-px bg-[#650a06]/50"></span> Visit Our Site
            </h4>
            <p className="text-[#650a06]/85 font-body text-sm leading-relaxed max-w-xs">
              Shop Rudraksha, track orders, and book consultations on the go.
            </p>
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