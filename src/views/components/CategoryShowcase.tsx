import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  name: string;
  categoryParam: string;
  subCategoryParam?: string;
  subtitle: string;
  image: string;
  objectPosition?: string; // controls crop focus, e.g. 'top', 'center 30%', '50% 20%'
  badge?: string;
  featured?: boolean;
}

const categoriesList: (CategoryItem & { slug: string })[] = [
  {
    name: 'Rudraksha & Variants',
    categoryParam: 'Rudraksha & Variants',
    slug: 'rudraksha-beads',
    subtitle: 'Authentic 1 to 14 Mukhi Beads, Malas, Siddha Malas & Bracelets',
    image: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    objectPosition: 'center 20%',
    badge: 'SACRED ORIGIN',
    featured: true,
  },
  {
    name: 'Gandaki Saligram',
    categoryParam: 'Saligram',
    slug: 'saligram',
    subtitle: 'Natural Lakshmi Narayan & Sudarshan Chakra Shilas',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    objectPosition: 'center',
    badge: 'HOLY SHILA',
  },
  {
    name: 'Shankha & Ghanti',
    categoryParam: 'Shankha & Ghanti',
    slug: 'shankha-ghanti',
    subtitle: 'Vamavarti Blowing Conch & Panchdhatu Nandi Bells',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    objectPosition: 'top',
    badge: 'SOUND PURITY',
  },
  {
    name: 'Singing Bowl',
    categoryParam: 'Singing Bowl',
    slug: 'singing-bowls',
    subtitle: '7 Chakra Hand-Hammered Tibetan Healing Bowls',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80',
    objectPosition: 'center',
    badge: '432Hz HARMONY',
  },
  {
    name: 'Vedic Gemstones',
    categoryParam: 'Gemstone',
    slug: 'gemstones',
    subtitle: 'Certified Natural Yellow Sapphire, Neelam & Navratna',
    image: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    objectPosition: 'center',
    badge: 'IGI LAB CERTIFIED',
  },
  {
    name: 'Statue & Sphatik',
    categoryParam: 'Statue & Sphatik',
    slug: 'statue-sphatik',
    subtitle: 'Pure Quartz Crystal Shivling & Panchdhatu Idols',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    objectPosition: 'top',
    badge: 'DIVINE ENERGY',
  },
  {
    name: 'Pooja Samagri',
    categoryParam: 'Pooja Samagri',
    slug: 'pooja-samagri',
    subtitle: 'Organic Kasturi Chandan, Gangajal & Abhishekam Kits',
    image: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    objectPosition: 'center',
    badge: 'RITUAL ESSENTIALS',
  },
];

export function CategoryShowcase() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#f4ebd0] relative overflow-hidden border-b border-[#650a06]/20">
      {/* OM Section Divider */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4 pt-0 pb-6 sm:pb-8 relative z-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
        <span className="text-[#650a06] text-xl sm:text-2xl font-serif font-bold">ॐ</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#650a06]/40 to-transparent max-w-xs" />
      </div>

      {/* Subtle mandala background */}
      <div className="absolute inset-0 bg-mandala opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-3.5 sm:px-4 py-1.5 rounded-full inline-block mb-3 sm:mb-4 shadow-sm">
              Sacred Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#650a06] font-bold tracking-tight">
              Explore Our Sacred Spectrum
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#650a06]/85 font-body text-xs sm:text-sm md:text-sm max-w-md border-l-2 border-[#650a06]/30 pl-4 font-medium hidden sm:block">
              Sourced directly from Arun Valley, Muktinath Gandaki, & Nepal high-altitude shrines.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#650a06] text-[#f7e5d9] hover:bg-[#8a130c] transition-all rounded-xl font-heading font-bold text-xs uppercase tracking-wider shrink-0 shadow-sm"
            >
              <span>View Collections</span>
              <ArrowRight className="w-4 h-4 text-[#f7e5d9]" />
            </Link>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {categoriesList.map((cat) => (
            <Link
              key={cat.name}
              href={`/collection/${cat.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-[#650a06]/20 bg-[#fdf8f4] shadow-md hover:border-[#650a06] hover:shadow-xl transition-all duration-500 block ${
                cat.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative aspect-[16/9] sm:aspect-[16/10] h-full w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ objectPosition: cat.objectPosition || 'center' }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-80 group-hover:opacity-65 transition-opacity pointer-events-none" />

                {/* Badge */}
                {cat.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-[#f7e5d9]/95 border border-[#650a06]/30 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-heading font-bold text-[#650a06] uppercase tracking-wider shadow-sm">
                      {cat.badge}
                    </span>
                  </div>
                )}

                {/* Card Title & Content */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl text-[#f7e5d9] font-bold group-hover:text-white transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-[#f7e5d9]/90 text-xs sm:text-sm font-body line-clamp-1 mt-0.5 font-medium">
                        {cat.subtitle}
                      </p>
                    </div>

                    <div className="w-9 h-9 rounded-full border border-[#f7e5d9]/50 bg-[#650a06]/80 text-[#f7e5d9] flex items-center justify-center group-hover:bg-[#f7e5d9] group-hover:text-[#650a06] transition-all shrink-0 shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Inner Border Accent */}
                <div className="absolute inset-2 border border-transparent group-hover:border-[#f7e5d9]/40 transition-colors duration-500 rounded-xl pointer-events-none" />
              </div>
            </Link>
          ))}

          {/* Special Catalogue CTA Tile */}
          <Link
            href="/all-products"
            className="group relative overflow-hidden rounded-2xl border border-[#650a06]/20 bg-[#fdf8f4] p-6 flex flex-col justify-between shadow-md hover:border-[#650a06] hover:shadow-xl transition-all duration-500 min-h-[220px]"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#650a06] text-[#f7e5d9] shadow-xs">
                FULL CATALOGUE
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-[#650a06] font-bold leading-tight">
                Looking for Specific Mukhi or Ritual Gift?
              </h3>
              <p className="text-[#650a06]/85 font-body text-xs sm:text-sm font-medium">
                Browse all 20+ lab-certified items with instant origin verification & price filters.
              </p>
            </div>

            <div className="pt-4 border-t border-[#650a06]/15 flex items-center justify-between">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#650a06] group-hover:text-[#8a130c] transition-colors">
                Open All Products Page
              </span>
              <div className="w-8 h-8 rounded-full border border-[#650a06]/30 bg-[#650a06]/10 text-[#650a06] flex items-center justify-center group-hover:bg-[#650a06] group-hover:text-[#f7e5d9] transition-all shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}