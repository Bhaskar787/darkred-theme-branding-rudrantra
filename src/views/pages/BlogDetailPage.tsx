import { useState, useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { BlogGiftOffers } from '@/views/components/BlogGiftOffers';
import { BLOG_POSTS } from '@/models/data/blogData';
import { productsData } from '@/models/data/productsData';
import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { formatPrice } from '@/utils/utils';
import {
  ChevronRight,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  Heart,
  ShieldCheck,
} from 'lucide-react';

export default function BlogDetailPage() {
  const [, params] = useRoute('/article/:id');
  const [, paramsBlog] = useRoute('/blog/:id');
  const articleId = params?.id || paramsBlog?.id || 'rudraksha-shrawan-7-benefits';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const post = BLOG_POSTS.find((p) => p.id === articleId) || BLOG_POSTS[0];
  const relatedArticles = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const suggestedProducts = productsData.slice(0, 4);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="flex flex-col min-h-screen bg-[#faf7f2] text-[#650a06] font-body antialiased relative">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-24">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-[#ffffff] text-[#650a06] py-3.5 border-b border-[#650a06]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] overflow-x-auto whitespace-nowrap hide-scrollbar">
            <Link href="/" className="hover:text-[#650a06] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <Link href="/blog" className="hover:text-[#650a06] transition-colors font-medium">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
            <span className="text-[#650a06] font-bold truncate max-w-xs">{post.title}</span>
          </div>
        </div>

        {/* 1. ARTICLE HEADER SECTION */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 space-y-6">
          
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#650a06]" />
              {post.category}
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650a06] leading-tight tracking-tight">
              {post.title}
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl font-medium text-[#650a06]/90 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-y border-[#650a06]/20 text-xs sm:text-sm font-heading font-bold text-[#650a06]">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#650a06] shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-[#650a06] text-sm">{post.author.name}</h4>
                  <span className="text-xs text-[#650a06]/80 font-body font-medium block">{post.author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-[#650a06]/80">
                <span className="flex items-center gap-1.5 text-[#650a06]">
                  <Calendar className="w-4 h-4 text-[#650a06]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-[#650a06]">
                  <Clock className="w-4 h-4 text-[#650a06]" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-[#650a06]">
                  <Eye className="w-4 h-4 text-[#650a06]" />
                  {post.views} views
                </span>
              </div>
            </div>
          </div>

          {/* Featured Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg border border-[#650a06]/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* ARTICLE BODY CONTENT */}
          <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-6 sm:p-10 shadow-md space-y-8 text-[#650a06] font-body leading-relaxed text-base sm:text-lg">
            
            {/* Intro paragraph */}
            <p className="text-base sm:text-xl font-bold text-[#650a06] leading-relaxed border-l-4 border-[#650a06] pl-4 bg-[#faf7f2] py-3.5 pr-4 rounded-r-xl">
              {post.content.intro}
            </p>

            {/* Sections Loop */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-6 border-t border-[#650a06]/15 first:border-t-0 first:pt-0">
                <h2 className="font-display text-xl sm:text-3xl text-[#650a06] font-bold tracking-tight">
                  {section.heading}
                </h2>

                <p className="leading-relaxed font-medium text-[#650a06]/90">{section.text}</p>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-base sm:text-lg font-semibold text-[#650a06]">
                        <CheckCircle2 className="w-5 h-5 text-[#650a06] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Conclusion Callout Box */}
            <div className="bg-[#650a06] text-[#faf7f2] border border-[#650a06] rounded-2xl p-6 sm:p-8 space-y-3 shadow-lg">
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#faf7f2] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#faf7f2]" />
                Key Spiritual Takeaway
              </h3>
              <p className="font-body text-base sm:text-lg text-[#faf7f2]/95 font-medium leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

          </div>

        </article>

        {/* 2. "YOU MAY ALSO LIKE" PRODUCT RECOMMENDATIONS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            <div className="flex justify-between items-center border-b border-[#650a06]/15 pb-4">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#650a06]">
                  Sacred Consecrated Jewelry
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#650a06] mt-1">
                  You May Also Like
                </h3>
              </div>
              <Link href="/all-products" className="text-xs font-heading font-bold text-[#650a06] hover:text-[#8a130c]">
                View Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {suggestedProducts.map((product) => {
                const inWishlist = isInWishlist(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-[#faf7f2] border border-[#650a06]/20 rounded-xl overflow-hidden p-3.5 flex flex-col justify-between group hover:border-[#650a06] transition-colors shadow-xs"
                  >
                    <div>
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#ffffff] mb-3 border border-[#650a06]/15">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="absolute top-2 right-2 p-1.5 bg-[#ffffff]/90 border border-[#650a06]/20 text-[#650a06] rounded-full hover:bg-[#650a06] hover:text-[#faf7f2] transition-colors cursor-pointer shadow-xs"
                        >
                          <Heart className={`w-3.5 h-3.5 ${inWishlist ? 'fill-[#650a06]' : ''}`} />
                        </button>
                      </div>

                      <h4 className="font-heading font-bold text-xs sm:text-sm text-[#650a06] line-clamp-1 group-hover:text-[#8a130c] transition-colors">
                        <Link href={`/product/${product.id}`}>{product.name}</Link>
                      </h4>
                      <p className="text-xs font-body text-[#650a06]/80 font-medium line-clamp-1 mt-0.5">
                        {(product as any).subtitle || (product as any).description || '100% Nepal Origin Bead'}
                      </p>
                    </div>

                    <div className="pt-3 flex justify-between items-center border-t border-[#650a06]/15 mt-3">
                      <span className="text-sm font-heading font-bold text-[#650a06]">
                        {formatPrice(product.price)}
                      </span>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] rounded-lg transition-colors cursor-pointer"
                        aria-label="Add to cart"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. RELATED ARTICLES SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
          <div className="space-y-6">
            <div className="flex justify-between items-end border-b border-[#650a06]/15 pb-4">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#650a06]">
                  Vedic Knowledge Journal
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#650a06] mt-1">
                  Related Articles
                </h3>
              </div>

              <Link href="/blog" className="text-xs font-heading font-bold text-[#650a06] hover:text-[#8a130c]">
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl overflow-hidden shadow-md hover:border-[#650a06] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#faf7f2]">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-2.5 left-2.5 bg-[#650a06] text-[#faf7f2] text-[9px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#650a06]">
                        {rel.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#650a06]/80">
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="font-display text-base font-bold text-[#650a06] group-hover:text-[#8a130c] transition-colors line-clamp-2 leading-snug">
                        <Link href={`/article/${rel.id}`}>{rel.title}</Link>
                      </h4>
                      <p className="font-body text-xs sm:text-sm font-medium text-[#650a06]/85 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-[#650a06]/15 mt-2">
                    <Link
                      href={`/article/${rel.id}`}
                      className="text-xs font-heading font-bold text-[#650a06] hover:text-[#8a130c] flex items-center gap-1 transition-all"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Global Overlays */}
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <BlogGiftOffers />
      <FloatingActions />
    </div>
  );
}
