import { useState, useEffect } from 'react';
import { AnnouncementBar } from '@/views/components/AnnouncementBar';
import { Navbar } from '@/views/components/Navbar';
import { Footer } from '@/views/components/Footer';
import { MenuDrawer } from '@/views/components/MenuDrawer';
import { CartDrawer } from '@/views/components/CartDrawer';
import { WishlistDrawer } from '@/views/components/WishlistDrawer';
import { SearchOverlay } from '@/views/components/SearchOverlay';
import { FloatingActions } from '@/views/components/FloatingActions';
import { BlogGiftOffers } from '@/views/components/BlogGiftOffers';
import { Link } from 'wouter';
import { BLOG_POSTS } from '@/models/data/blogData';
import {
  ChevronRight,
  BookOpen,
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

export default function BlogListPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedTopic, setSelectedTopic] = useState('All topics');
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'popular'>('newest');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Filter & Sort Logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTopic = selectedTopic === 'All topics' || post.category === selectedTopic;
    const matchesFeatured = !showFeaturedOnly || post.featured;
    return matchesTopic && matchesFeatured;
  }).sort((a, b) => {
    if (sortOption === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortOption === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortOption === 'popular') return b.views - a.views;
    return 0;
  });

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
            <span className="text-[#650a06] font-bold">Spiritual Wisdom &amp; Blog Articles</span>
          </div>
        </div>

        {/* 1. HERO BANNER SECTION */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#faf7f2] border-b border-[#650a06]/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Copy */}
              <div className="lg:col-span-8 space-y-5">
                <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 px-4 py-1.5 rounded-full shadow-xs">
                  <BookOpen className="w-4 h-4 text-[#650a06]" />
                  INSIGHTS &amp; SACRED KNOWLEDGE
                </span>

                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650a06] tracking-tight leading-tight">
                  Spiritual Guides &amp; Wellness Articles
                </h1>

                <p className="font-body text-[#650a06]/90 font-medium text-base sm:text-lg leading-relaxed max-w-2xl">
                  Practical Rudraksha knowledge, authentic Nepal bead care tips, and sadhana guidance — written to help you choose, wear, and nurture your sacred beads with confidence.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#650a06] hover:bg-[#8a130c] text-[#faf7f2] font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <span>Book a Consultation →</span>
                  </Link>

                  <Link
                    href="/custom-order"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ffffff] text-[#650a06] border border-[#650a06]/30 hover:border-[#650a06] font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Customize a Mala</span>
                  </Link>
                </div>
              </div>

              {/* Right Article Library Stats Box */}
              <div className="lg:col-span-4 bg-[#650a06] text-[#faf7f2] border border-[#650a06] rounded-2xl p-6 shadow-xl space-y-4">
                <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#faf7f2] border-b border-[#faf7f2]/20 pb-2">
                  ARTICLE LIBRARY
                </h3>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-[#faf7f2]/10 border border-[#faf7f2]/20 rounded-xl p-3">
                    <span className="block font-display text-2xl font-bold text-[#faf7f2]">{BLOG_POSTS.length}</span>
                    <span className="text-[10px] font-heading font-bold uppercase text-[#faf7f2]/90">ARTICLES</span>
                  </div>
                  <div className="bg-[#faf7f2]/10 border border-[#faf7f2]/20 rounded-xl p-3">
                    <span className="block font-display text-2xl font-bold text-[#faf7f2]">100%</span>
                    <span className="text-[10px] font-heading font-bold uppercase text-[#faf7f2]/90">NEPAL</span>
                  </div>
                  <div className="bg-[#faf7f2]/10 border border-[#faf7f2]/20 rounded-xl p-3">
                    <span className="block font-display text-2xl font-bold text-[#faf7f2]">FREE</span>
                    <span className="text-[10px] font-heading font-bold uppercase text-[#faf7f2]/90">GUIDED</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs font-heading font-bold uppercase text-[#faf7f2]/85 border-t border-[#faf7f2]/20">
                  <span>Rudraksha Knowledge Base</span>
                  <span className="text-[#faf7f2] font-bold">Updated Weekly</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. FILTER & SORT BAR */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl p-4 sm:p-5 shadow-md space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase text-[#650a06]">
                <SlidersHorizontal className="w-4 h-4 text-[#650a06]" />
                <span>Filter &amp; Sort Articles</span>
                <span className="text-[#650a06] font-bold">({filteredPosts.length} articles)</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Sort dropdown */}
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="bg-[#ffffff] border border-[#650a06]/30 rounded-xl px-3.5 py-2 text-xs font-heading font-bold text-[#650a06] focus:outline-none focus:border-[#650a06] cursor-pointer shadow-xs"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="popular">Most Popular</option>
                </select>

                {/* Featured Toggle button */}
                <button
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    showFeaturedOnly
                      ? 'bg-[#650a06] text-[#faf7f2] border-[#650a06] shadow-xs'
                      : 'bg-[#ffffff] text-[#650a06] border-[#650a06]/30 hover:border-[#650a06]'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Featured Only</span>
                </button>
              </div>
            </div>

            {/* Topic Filter Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto whitespace-nowrap hide-scrollbar pt-2 border-t border-[#650a06]/15">
              {['All topics', 'Rudraksha', 'Vedic Practice', 'Authenticity'].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                    selectedTopic === topic
                      ? 'bg-[#650a06] text-[#faf7f2] border border-[#650a06] shadow-xs'
                      : 'bg-[#ffffff] text-[#650a06] hover:bg-[#650a06] hover:text-[#faf7f2] border border-[#650a06]/30'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* 3. ARTICLE GRID SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#ffffff] border border-[#650a06]/20 rounded-2xl overflow-hidden shadow-md hover:border-[#650a06] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#faf7f2]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3.5 left-3.5 bg-[#650a06] text-[#faf7f2] text-xs font-heading font-bold uppercase tracking-widest px-3.5 py-1 rounded-md border border-[#650a06] shadow-xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs font-heading font-bold text-[#650a06]/80">
                      <span className="flex items-center gap-1 text-[#650a06]">
                        <Calendar className="w-3.5 h-3.5 text-[#650a06]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#650a06]">
                        <Clock className="w-3.5 h-3.5 text-[#650a06]" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#650a06]">
                        <Eye className="w-3.5 h-3.5 text-[#650a06]" />
                        {post.views} views
                      </span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl text-[#650a06] font-bold leading-snug group-hover:text-[#8a130c] transition-colors">
                      <Link href={`/article/${post.id}`}>{post.title}</Link>
                    </h2>

                    <p className="font-body text-xs sm:text-sm font-medium text-[#650a06]/90 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read Article CTA Footer */}
                <div className="p-6 pt-0 border-t border-[#650a06]/15 mt-4 flex items-center justify-between">
                  <Link
                    href={`/article/${post.id}`}
                    className="text-xs font-heading font-bold text-[#650a06] hover:text-[#8a130c] flex items-center gap-1.5 transition-all"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] font-heading font-bold uppercase text-[#650a06]/70">Pashupatinath Verified</span>
                </div>
              </article>
            ))}
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
