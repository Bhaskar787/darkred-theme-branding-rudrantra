import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { BLOG_POSTS } from '@/models/data/blogData';
import { FAQ } from '@/views/components/FAQ';
import { Link } from 'wouter';
import { ArrowRight, Clock } from 'lucide-react';

export interface CategoryBox {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  image: string;
  link: string;
}

const CATEGORY_BOXES: CategoryBox[] = [
  {
    id: 'rudraksha-beads',
    title: 'Rudraksha Beads',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Beads',
    description: 'Certified natural Nepal Mukhi seeds from Ek Mukhi to 21 Mukhi.',
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=800&q=80',
    link: '/collection/rudraksha-beads',
  },
  {
    id: 'rudraksha-mala',
    title: 'Rudraksha Mala',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Mala',
    description: '108-bead Japa Malas for daily mantra chanting and meditation.',
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    link: '/collection/rudraksha-mala',
  },
  {
    id: 'siddha-mala',
    title: 'Siddha Mala',
    category: 'Rudraksha & Variants',
    subcategory: 'Siddha Mala',
    description: 'The ultimate power combination containing 1 to 14 Mukhi beads.',
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    link: '/collection/siddha-mala',
  },
  {
    id: 'rudraksha-bracelet',
    title: 'Rudraksha Bracelets',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Bracelet',
    description: 'Handcrafted wristlets with silver caps and Nepal seeds.',
    image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    link: '/collection/rudraksha-bracelet',
  },
  {
    id: 'combinations-kawach',
    title: 'Combinations & Kawach',
    category: 'Rudraksha & Variants',
    subcategory: 'Combination & Kawach',
    description: 'Multi-bead energetic sets customized for astrological needs.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    link: '/collection/combinations-kawach',
  },
  {
    id: 'saligram',
    title: 'Gandaki Saligram',
    category: 'Saligram',
    description: 'Authentic non-carved Saligram Shilas from Gandaki riverbed.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyMs_J3LgpmB_vQvvzrKFl7yQZe_C-762f4Jd8pHajNs_6YqMs2m1XJE&s=10',
    link: '/collection/saligram',
  },
  {
    id: 'shankha-ghanti',
    title: 'Shankha & Ghanti',
    category: 'Shankha & Ghanti',
    description: 'Ritual Conch shells and hand-cast Panchdhatu temple bells.',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    link: '/collection/shankha-ghanti',
  },
  {
    id: 'singing-bowls',
    title: 'Singing Bowls',
    category: 'Singing Bowl',
    description: '7-metal Tibetan bronze singing bowls tuned to 432Hz.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    link: '/collection/singing-bowls',
  },
  {
    id: 'gemstones',
    title: 'Certified Gemstones',
    category: 'Gemstone',
    description: 'Unheated, untreated natural Vedic gemstones certified by labs.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    link: '/collection/gemstones',
  },
  {
    id: 'statue-sphatik',
    title: 'Statue & Sphatik',
    category: 'Statue & Sphatik',
    description: 'Flawless Himalayan Sphatik Quartz Crystal idols & murtis.',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    link: '/collection/statue-sphatik',
  },
  {
    id: 'pooja-samagri',
    title: 'Pooja Samagri',
    category: 'Pooja Samagri',
    description: 'Consecrated Sandalwood paste, Holy Gangajal, Bhasma & Oils.',
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    link: '/collection/pooja-samagri',
  },
];

/* ── GUIDES CARDS ── */
const GUIDES_COMBINATIONS = [
  {
    id: 'guide-beads',
    title: 'Rudraksha Beads (1–21 Mukhi)',
    bgStyle: 'bg-[#f4ebd0]',
    textColor: 'text-[#1a2634]',
    image: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=800&q=80',
    link: '/collection/rudraksha-beads',
  },
  {
    id: 'guide-mala',
    title: 'Rudraksha Japa Malas',
    bgStyle: 'bg-[#e3d1be]',
    textColor: 'text-[#1a2634]',
    image: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    link: '/collection/rudraksha-mala',
  },
  {
    id: 'guide-siddha',
    title: 'Siddha Mala (1–14 Mukhi)',
    bgStyle: 'bg-[#1b4332]',
    textColor: 'text-white',
    image: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    link: '/collection/siddha-mala',
  },
  {
    id: 'guide-bracelets',
    title: 'Rudraksha Bracelets',
    bgStyle: 'bg-[#f2e3d5]',
    textColor: 'text-[#1a2634]',
    image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    link: '/collection/rudraksha-bracelet',
  },
  {
    id: 'guide-combinations',
    title: 'Sacred Combinations',
    bgStyle: 'bg-[#f0e6d2]',
    textColor: 'text-[#1a2634]',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    link: '/collection/combinations-kawach',
  },
  {
    id: 'guide-saligram',
    title: 'Gandaki Saligram Shilas',
    bgStyle: 'bg-[#ded5cb]',
    textColor: 'text-[#1a2634]',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyMs_J3LgpmB_vQvvzrKFl7yQZe_C-762f4Jd8pHajNs_6YqMs2m1XJE&s=10',
    link: '/collection/saligram',
  },
  {
    id: 'guide-shankha',
    title: 'Shankha & Temple Ghanti',
    bgStyle: 'bg-[#e8decb]',
    textColor: 'text-[#1a2634]',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    link: '/collection/shankha-ghanti',
  },
  {
    id: 'guide-singingbowl',
    title: '432Hz Sound Singing Bowls',
    bgStyle: 'bg-[#253548]',
    textColor: 'text-white',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
    link: '/collection/singing-bowls',
  },
  {
    id: 'guide-gemstones',
    title: 'Certified Vedic Gemstones',
    bgStyle: 'bg-[#e5d0be]',
    textColor: 'text-[#1a2634]',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    link: '/collection/gemstones',
  },
  {
    id: 'guide-statue',
    title: 'Statue & Sphatik Idols',
    bgStyle: 'bg-[#f4ebd0]',
    textColor: 'text-[#1a2634]',
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    link: '/collection/statue-sphatik',
  },
  {
    id: 'guide-pooja',
    title: 'Pooja Samagri & Care Kits',
    bgStyle: 'bg-[#e3d1be]',
    textColor: 'text-[#1a2634]',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    link: '/collection/pooja-samagri',
  },

  
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1a2634] font-body selection:bg-[#c49a56]/20 relative">
      <AnnouncementBar />
      <Navbar />

      <main className="pb-16 space-y-16">

        {/* ── 1. MAIN TITLE SECTION ── */}
        <section className="pt-12 pb-4 text-center max-w-7xl mx-auto px-4">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1a2634]">
            World's Largest Collection Of Rudraksha
          </h1>
        </section>

        {/* ── 2. TOP PRODUCT TILES GRID (PLAIN & BORDERLESS) ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {CATEGORY_BOXES.map((box) => (
              <Link
                key={box.id}
                href={box.link}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Borderless Image Container */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-stone-200 shadow-xs group-hover:shadow-md transition-shadow duration-300">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Title Label */}
                <span className="mt-2.5 text-xs font-semibold uppercase tracking-wider text-[#1a2634] group-hover:text-[#c49a56] transition-colors leading-tight">
                  {box.title}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 3. ASTROLOGER CONSULTATION BANNER ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#ded5cb] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#1a2634]/10 shadow-sm relative overflow-hidden">
            <div className="space-y-4 max-w-md text-center md:text-left z-10">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-[#1a2634] leading-snug">
                Don't know which bead suits you?
              </h2>
              <p className="text-xs sm:text-sm text-[#1a2634]/70 font-medium">
                Consult with our Acharyas for personalized birth chart alignment.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <Link
                  href="/consultation"
                  className="px-5 py-2.5 bg-[#c49a56] hover:bg-[#b08848] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
                >
                  TALK TO ASTROLOGER
                </Link>
                <Link
                  href="/mukhi-guide"
                  className="px-5 py-2.5 bg-transparent border border-[#1a2634]/30 hover:border-[#c49a56] text-[#1a2634] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  RECOMMENDATION
                </Link>
              </div>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex justify-center items-center">
              <img
                src="https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png"
                alt="Pedestal Artifacts"
                className="max-h-48 sm:max-h-56 object-contain drop-shadow-md rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── 4. RUDRAKSHA GUIDES & CATEGORY EXPLORER GRID ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1a2634]">
              Rudraksha & Sacred Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUIDES_COMBINATIONS.map((guide) => (
              <div
                key={guide.id}
                className={`${guide.bgStyle} rounded-2xl p-6 sm:p-7 flex items-center justify-between min-h-[180px] sm:min-h-[200px] shadow-xs border border-black/5 hover:shadow-md transition-all relative overflow-hidden group`}
              >
                <div className="space-y-3 z-10 max-w-[210px] sm:max-w-[250px]">
                  <h3 className={`font-serif text-lg sm:text-2xl font-normal leading-snug ${guide.textColor}`}>
                    {guide.title}
                  </h3>

                  <Link
                    href={guide.link}
                    className="inline-block px-4 py-2 bg-[#c49a56] hover:bg-[#b08848] text-white font-semibold text-[11px] uppercase tracking-wider rounded-md transition-colors shadow-xs"
                  >
                    EXPLORE MORE
                  </Link>
                </div>

                <div className="w-28 h-28 sm:w-32 sm:h-32 relative z-10 shrink-0">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SACRED BLOG ARTICLES WITH IMAGES ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1a2634]/15 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c49a56] block mb-1">
                Sacred Knowledge & Insights
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1a2634]">
                Rudraksha Articles & Guides
              </h2>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c49a56] hover:text-[#1a2634] transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#1a2634]/15 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1a2634]/90 text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-xs">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#c49a56]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <span className="text-[11px] font-medium text-gray-500">
                    {post.date} • By {post.author.name}
                  </span>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-base font-semibold text-[#1a2634] line-clamp-2 leading-snug hover:text-[#c49a56] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#1a2634]/70 line-clamp-3 leading-relaxed flex-1 font-medium">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#c49a56] hover:text-[#1a2634] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 6. HANGING FEATURED FAQ SECTION (UNWRAPPED FOR CSS STICKY ACCORDION STACKING) ── */}
        <FAQ />

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