// import { AnnouncementBar } from '@/views/components/AnnouncementBar';
// import { Navbar } from '@/views/components/Navbar';
// import { Footer } from '@/views/components/Footer';
// import { MenuDrawer } from '@/views/components/MenuDrawer';
// import { CartDrawer } from '@/views/components/CartDrawer';
// import { WishlistDrawer } from '@/views/components/WishlistDrawer';
// import { SearchOverlay } from '@/views/components/SearchOverlay';
// import { FloatingActions } from '@/views/components/FloatingActions';
// import { Link } from 'wouter';
// import {
//   ChevronRight,
//   ShieldCheck,
//   Award,
//   Sparkles,
//   CheckCircle2,
//   BookOpen,
//   ArrowRight,
//   Star,
//   Users,
//   Feather,
//   Flame,
//   Globe2,
//   Trees as Tree,
//   Heart,
//   HelpCircle,
//   FileCheck,
//   Layers,
//   SlidersHorizontal,
//   Compass,
//   Scroll,
// } from 'lucide-react';
// import { BLOG_POSTS } from '@/models/data/blogData';

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-[#FAF7F2] text-navy font-body selection:bg-orange/20 selection:text-navy-deep">
//       {/* Navigation */}
//       <AnnouncementBar />
//       <Navbar />

//       {/* Breadcrumbs Bar */}
//       <div className="bg-[#0E1B26] border-b border-orange/15 py-3 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-heading text-peach/70">
//           <Link href="/" className="hover:text-orange transition-colors">
//             Home
//           </Link>
//           <ChevronRight className="w-3.5 h-3.5 text-orange" />
//           <span className="text-orange font-bold uppercase tracking-wider">About Us</span>
//         </div>
//       </div>

//       <main className="pb-20 space-y-16 sm:space-y-24">

//         {/* ── 1. HERO BANNER: WHERE FAITH MEETS AUTHENTICITY ── */}
//         <section className="pt-10 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
//             {/* Left Column Content */}
//             <div className="lg:col-span-7 space-y-6">
//               <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/15 border border-orange/40 text-orange-600 font-heading text-xs font-bold uppercase tracking-widest">
//                 <Sparkles className="w-4 h-4 text-orange-600" />
//                 <span>WHERE FAITH MEETS AUTHENTICITY</span>
//               </div>

//               <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-deep leading-tight">
//                 Authentic Rudraksha Beads for Your <span className="text-orange underline decoration-orange/30">Spiritual Awakening</span>
//               </h1>

//               <p className="font-body text-base sm:text-lg text-navy/80 leading-relaxed">
//                 Discover the sacred power of authentic Rudraksha Beads at <strong className="text-navy-deep">Rudrantra</strong>, your trusted destination for Original Rudraksha sourced directly from Nepal. Many of our beads come from carefully cultivated trees in our own Rudrantra farm in Nepal, a region known worldwide for producing the most powerful and naturally formed Rudraksha. Each bead is carefully verified, respectfully handled, and prepared following traditional spiritual practices. Our mission is to provide Trusted Rudraksha that supports meditation, protection, inner balance, and spiritual growth for seekers around the world.
//               </p>

//               {/* 4 Stats Metrics Cards */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
//                 <div className="bg-white border border-navy/15 p-4 rounded-2xl shadow-xs text-center hover:border-orange transition-colors">
//                   <p className="font-display text-2xl sm:text-3xl font-bold text-orange">25K+</p>
//                   <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-navy/70 mt-1">
//                     Beads Blessed & Calibrated
//                   </p>
//                 </div>

//                 <div className="bg-white border border-navy/15 p-4 rounded-2xl shadow-xs text-center hover:border-orange transition-colors">
//                   <p className="font-display text-2xl sm:text-3xl font-bold text-navy-deep">12K</p>
//                   <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-navy/70 mt-1">
//                     Practitioners Served
//                   </p>
//                 </div>

//                 <div className="bg-white border border-navy/15 p-4 rounded-2xl shadow-xs text-center hover:border-orange transition-colors">
//                   <p className="font-display text-2xl sm:text-3xl font-bold text-orange">480+</p>
//                   <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-navy/70 mt-1">
//                     Curated Malas & Tools
//                   </p>
//                 </div>

//                 <div className="bg-white border border-navy/15 p-4 rounded-2xl shadow-xs text-center hover:border-orange transition-colors">
//                   <p className="font-display text-2xl sm:text-3xl font-bold text-navy-deep">Nepal</p>
//                   <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-navy/70 mt-1">
//                     Rudrantra Artisans & Farm
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column Image */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden border-2 border-orange/30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-navy-deep">
//                 <img
//                   src="https://m.media-amazon.com/images/I/91PNTywJb6L._AC_UF894,1000_QL80_.jpg"
//                   alt="Rudrantra Arun Valley Nepal Rudraksha Farm"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
//                 <div className="absolute bottom-6 left-6 right-6 text-peach space-y-1.5">
//                   <span className="text-[9px] font-heading font-bold uppercase tracking-widest text-orange bg-navy-deep/90 px-3 py-1 rounded-full border border-orange/40 backdrop-blur-md">
//                     OWN CULTIVATION FARM IN NEPAL
//                   </span>
//                   <h3 className="font-display text-lg font-bold text-peach pt-1">
//                     Purity, Traceability, and Authenticity from Tree to Devotee
//                   </h3>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* ── 2. OUR SACRED JOURNEY: BUILT ON EXPERIENCE, GUIDED BY AUTHENTICITY ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white border border-navy/15 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
            
//             <div className="max-w-3xl space-y-4">
//               <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                 [ OUR SACRED JOURNEY ]
//               </span>
//               <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-deep">
//                 Built on Experience, Guided by Authenticity
//               </h2>
//               <div className="space-y-4 font-body text-sm sm:text-base text-navy/80 leading-relaxed">
//                 <p>
//                   Rudrantra was founded on a deep spiritual respect for the divine significance of Rudraksha Beads. What began as a personal search for genuine Original Rudraksha soon became a larger mission: to create a platform where spiritual seekers can find authentic, naturally formed Rudraksha with complete trust.
//                 </p>
//                 <p>
//                   During our journey, we worked closely with traditional collectors, farmers, and spiritual practitioners in Nepal and Indonesia to understand the true nature of Rudraksha. Through years of direct sourcing, study of ancient scriptures, and practical bead evaluation, we gained deep insight into how to identify authentic mukhi formations and distinguish natural Original Rudraksha from modified or artificial beads.
//                 </p>
//                 <p>
//                   Today, Rudrantra continues this tradition by maintaining direct connections with trusted growers and collectors. We are proud that some of our Rudraksha Beads come from our own cultivation farm in Nepal, where authentic Nepali Rudraksha grows naturally. This allows us to ensure purity, traceability, and authenticity from tree to devotee.
//                 </p>
//                 <p className="font-bold text-navy-deep italic border-l-4 border-orange pl-4 py-1 bg-[#FAF7F2]/50 rounded-r-xl">
//                   "At Rudrantra, we believe Rudraksha is not just a bead; it is a sacred symbol of Lord Shiva's blessings. Every bead is handled with respect, verified with care, and shared with devotion so that seekers can confidently receive Trusted Rudraksha aligned with spiritual integrity."
//                 </p>
//               </div>
//             </div>

//             {/* 5 Key Principles Checklist */}
//             <div className="bg-[#FAF7F2] border border-navy/10 p-6 sm:p-8 rounded-2xl space-y-4">
//               <h3 className="font-heading text-sm font-bold text-navy-deep uppercase tracking-wider">
//                 Core Foundations of Our Mission:
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-bold text-navy-deep bg-white p-3.5 rounded-xl border border-navy/10">
//                   <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                   <span>Direct Sourcing from Nepal, Including Our Own Farm</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-bold text-navy-deep bg-white p-3.5 rounded-xl border border-navy/10">
//                   <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                   <span>Accurate Mukhi Verification Process</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-bold text-navy-deep bg-white p-3.5 rounded-xl border border-navy/10">
//                   <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                   <span>100% Natural & Untreated Rudraksha Beads</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-bold text-navy-deep bg-white p-3.5 rounded-xl border border-navy/10">
//                   <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                   <span>Spiritual Preparation Guided by Shiva Traditions</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-bold text-navy-deep bg-white p-3.5 rounded-xl border border-navy/10 md:col-span-2 lg:col-span-2">
//                   <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                   <span>Education and Guidance for Selecting Trusted Rudraksha</span>
//                 </div>
//               </div>
//             </div>

//             {/* 5 Core Pillars Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              
//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3 hover:border-orange transition-colors group">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-navy-deep transition-colors">
//                   <Tree className="w-5 h-5" />
//                 </div>
//                 <h3 className="font-display text-base font-bold text-navy-deep">Integrity in Origin</h3>
//                 <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                   Rudrantra sources Rudraksha Beads directly from Nepal, including beads grown in our own farm, where authentic Nepali Rudraksha naturally develops. This ensures traceability, authenticity, and genuine Original Rudraksha.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3 hover:border-orange transition-colors group">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-navy-deep transition-colors">
//                   <ShieldCheck className="w-5 h-5" />
//                 </div>
//                 <h3 className="font-display text-base font-bold text-navy-deep">Respect for Nature</h3>
//                 <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                   No artificial enhancement, drilling alteration, or chemical polishing — we preserve what nature creates naturally.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3 hover:border-orange transition-colors group">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-navy-deep transition-colors">
//                   <BookOpen className="w-5 h-5" />
//                 </div>
//                 <h3 className="font-display text-base font-bold text-navy-deep">Wisdom-Led Guidance</h3>
//                 <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                   Selection advice rooted in ancient scriptures, planetary alignment principles, and personal intention clarity.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3 hover:border-orange transition-colors group">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-navy-deep transition-colors">
//                   <Heart className="w-5 h-5" />
//                 </div>
//                 <h3 className="font-display text-base font-bold text-navy-deep">Devotional Responsibility</h3>
//                 <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                   We treat every Rudraksha as sacred — stored, handled, and packaged with extreme reverence and devotion.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3 hover:border-orange transition-colors group sm:col-span-2 lg:col-span-2">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-navy-deep transition-colors">
//                   <Compass className="w-5 h-5" />
//                 </div>
//                 <h3 className="font-display text-base font-bold text-navy-deep">Guided Personal Support</h3>
//                 <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                   Selecting the right Rudraksha Bead depends on spiritual intention, mukhi type, and traditional knowledge. We provide guidance to help seekers choose Trusted Rudraksha aligned with their personal journey.
//                 </p>
//               </div>

//             </div>

//           </div>
//         </section>

//         {/* ── 3. AUTHENTICITY & HERITAGE: ALIGNED WITH TRADITION ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
//             {/* Left Column: Aligned with Tradition */}
//             <div className="lg:col-span-7 bg-white border border-navy/15 rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6">
//               <div className="space-y-4">
//                 <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                   [ AUTHENTICITY & HERITAGE ]
//                 </span>
//                 <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-deep">
//                   Aligned with Tradition, Guided by Responsibility
//                 </h2>
//                 <p className="font-body text-sm sm:text-base text-navy/80 leading-relaxed">
//                   The tradition of wearing Rudraksha Beads comes from ancient Vedic scriptures like the Shiva Purana and Padma Purana, where they are described as sacred seeds blessed by Lord Shiva that support meditation, protection, and spiritual growth. At Rudrantra, we combine this traditional wisdom with real experience in identifying natural mukhi formations and sourcing Original Rudraksha directly from growers. Many of our beads come from authentic Nepali Rudraksha sourced from farms, including our own Rudrantra farm, ensuring every bead remains a truly Trusted Rudraksha.
//                 </p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//                   <div className="flex items-center gap-2 text-xs font-heading font-bold text-navy-deep bg-[#FAF7F2] p-3 rounded-xl border border-navy/10">
//                     <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                     <span>Traditional 1 to 21 Mukhi Wisdom</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs font-heading font-bold text-navy-deep bg-[#FAF7F2] p-3 rounded-xl border border-navy/10">
//                     <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                     <span>Ethical Harvesting Awareness</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs font-heading font-bold text-navy-deep bg-[#FAF7F2] p-3 rounded-xl border border-navy/10">
//                     <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                     <span>Respect for Wearing Practices</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs font-heading font-bold text-navy-deep bg-[#FAF7F2] p-3 rounded-xl border border-navy/10">
//                     <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
//                     <span>Natural Bead Formation Verification</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
//                 <span className="text-xs font-heading uppercase text-navy/60">Pashupatinath Verified</span>
//                 <Link href="/consultation" className="text-xs font-heading font-bold text-orange hover:text-orange-700 flex items-center gap-1">
//                   <span>Explore Mukhi Selection Guidance →</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Column: Why Customers Trust Rudrantra */}
//             <div className="lg:col-span-5 bg-navy-deep text-peach rounded-3xl p-6 sm:p-8 border-2 border-orange/40 shadow-md flex flex-col justify-between space-y-6">
//               <div className="space-y-4">
//                 <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                   [ WHY CUSTOMERS TRUST RUDRANTRA ]
//                 </span>
//                 <h3 className="font-display text-xl sm:text-2xl font-bold text-peach">
//                   Built on Truth & Honest Pricing
//                 </h3>

//                 <div className="space-y-2.5">
//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <Award className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Transparent Mukhi Classification</span>
//                   </div>

//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <FileCheck className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Clear and Honest Product Descriptions</span>
//                   </div>

//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <ShieldCheck className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Authenticity & Transparent Pricing</span>
//                   </div>

//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <Users className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Growing Global Community of Seekers</span>
//                   </div>

//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <Tree className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Authentic Rudraksha from Our Own Farm</span>
//                   </div>

//                   <div className="p-3 bg-navy/80 rounded-xl border border-orange/20 flex items-center gap-2.5">
//                     <Sparkles className="w-4 h-4 text-orange shrink-0" />
//                     <span className="font-heading text-xs font-bold text-peach">Expertise in Identifying Mukhi Formations</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="text-[10px] font-heading uppercase text-center text-orange/90 border-t border-orange/20 pt-3">
//                 Trusted by Meditation Practitioners & Yoga Communities Worldwide
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* ── 4. RITUAL PREPARATION: RITUALLY PREPARED IN LIVING SHAIVA TRADITION ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white border border-navy/15 rounded-3xl p-6 sm:p-12 shadow-sm space-y-10">
            
//             <div className="max-w-3xl space-y-4">
//               <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                 [ SACRED PREPARATION ]
//               </span>
//               <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-deep">
//                 Ritually Prepared in Living Shaiva Tradition
//               </h2>
//               <p className="font-body text-sm sm:text-base text-navy/80 leading-relaxed">
//                 At Rudrantra, every Rudraksha Bead is treated as a sacred spiritual element rather than just a product. Our Original Rudraksha Beads are sourced directly from Nepal, including carefully cultivated trees from our own farm, where authentic Nepali Rudraksha naturally grows. Because Nepal is known as one of the most sacred regions for Rudraksha, we ensure that every bead reflects the purity and natural formation expected from genuine Nepali Rudraksha. Before reaching devotees, selected Original Rudraksha undergo traditional purification and mantra-based preparation rooted in Shaiva and Vedic practices. These rituals help preserve the spiritual vibration of the beads and prepare them for meditation, protection, mantra chanting, and devotional practice. Through careful handling and traditional preparation, we ensure that every piece represents the authenticity expected from Trusted Rudraksha.
//               </p>
//             </div>

//             {/* Lineage & Ritual Details Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-[#FAF7F2] border border-navy/10 p-6 rounded-2xl space-y-3">
//                 <span className="text-xs font-heading font-bold text-orange uppercase tracking-wider">
//                   Temple / Location Lineage
//                 </span>
//                 <p className="font-body text-xs sm:text-sm text-navy/80 leading-relaxed">
//                   Our ritual preparation practices are inspired by sacred traditions connected to the Pashupatinath spiritual lineage of Nepal, a revered center of Shaiva devotion where Rudraksha has long been associated with Lord Shiva.
//                 </p>
//               </div>

//               <div className="bg-[#FAF7F2] border border-navy/10 p-6 rounded-2xl space-y-3">
//                 <span className="text-xs font-heading font-bold text-orange uppercase tracking-wider">
//                   Shaiva Consecration Heritage
//                 </span>
//                 <p className="font-body text-xs sm:text-sm text-navy/80 leading-relaxed">
//                   Guided by experienced practitioners familiar with Shaiva rituals, Rudra mantra chanting, and Vedic consecration practices, ensuring that every Rudraksha bead is handled with spiritual respect.
//                 </p>
//               </div>
//             </div>

//             {/* Ritual Quality Control Checklist */}
//             <div className="bg-navy-deep text-peach rounded-2xl p-6 sm:p-8 border border-orange/30 space-y-4">
//               <h3 className="font-heading text-sm font-bold text-orange uppercase tracking-wider">
//                 Ritual Process & Quality Controls:
//               </h3>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-body text-peach/90">
//                 <div className="p-3.5 bg-navy/80 rounded-xl border border-orange/20 space-y-1">
//                   <strong className="text-orange block font-heading">Saltwater Purification</strong>
//                   <p>Natural saltwater bath to cleanse the beads physically & energetically.</p>
//                 </div>

//                 <div className="p-3.5 bg-navy/80 rounded-xl border border-orange/20 space-y-1">
//                   <strong className="text-orange block font-heading">Rudra Mantra Japa</strong>
//                   <p>Continuous Vedic chanting and Beej mantra repetition.</p>
//                 </div>

//                 <div className="p-3.5 bg-navy/80 rounded-xl border border-orange/20 space-y-1">
//                   <strong className="text-orange block font-heading">Sankalpa Energization</strong>
//                   <p>Fire & sacred smoke purification for spiritual alignment.</p>
//                 </div>

//                 <div className="p-3.5 bg-navy/80 rounded-xl border border-orange/20 space-y-1">
//                   <strong className="text-orange block font-heading">Batch Consecration Logs</strong>
//                   <p>Small-batch ritual records maintained for every dispatch.</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* ── 5. A TRANSPARENT PATH FROM TREE TO TEMPLE ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
//             <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//               [ OUR JOURNEY OF PURITY ]
//             </span>
//             <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-deep">
//               A Transparent Path from Tree to Temple
//             </h2>
//             <p className="font-body text-sm sm:text-base text-navy/80">
//               Every Rudraksha Bead at Rudrantra follows a transparent path from tree to temple to devotee. Many of our beads originate from our own farm in Nepal, where authentic Nepali Rudraksha grows naturally. This direct connection allows us to ensure purity, authenticity, and proper mukhi formation before the beads reach spiritual practitioners worldwide.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 01
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Curated at Source</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Rudraksha Beads are carefully harvested from mature trees in Nepal, including our own cultivation farms, and from trusted Nepal growers.
//               </p>
//             </div>

//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 02
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Structural Examination</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Inspection of mukhi lines, natural clefts, density, and botanical characteristics to confirm 100% natural authenticity.
//               </p>
//             </div>

//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 03
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Spiritual Preparation</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Chant-based energization, fire purification, and sacred smoke cleansing are performed in a designated ritual space.
//               </p>
//             </div>

//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 04
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Mala Crafting</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Hand-assembled original rudraksha mala with durable thread knotting and precise bead alignment.
//               </p>
//             </div>

//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 05
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Energetic Cleansing</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Beads undergo purification through traditional salt cleansing and sacred smoke to stabilize spiritual vibration.
//               </p>
//             </div>

//             <div className="bg-white border border-navy/15 p-6 rounded-2xl space-y-3 hover:border-orange transition-colors">
//               <span className="font-heading font-bold text-xs text-orange bg-orange/15 px-3 py-1 rounded-full border border-orange/30">
//                 STEP 06
//               </span>
//               <h3 className="font-display text-base font-bold text-navy-deep pt-2">Guided Dispatch</h3>
//               <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed">
//                 Delivered with care instructions, activation guidance, and lifetime authenticity certification.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* ── 6. ARTISTRY & DURABILITY: DESIGNED FOR DAILY PRACTICE ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white border border-navy/15 rounded-3xl p-6 sm:p-12 shadow-sm space-y-8">
//             <div className="max-w-3xl space-y-3">
//               <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                 [ ARTISTRY & DURABILITY ]
//               </span>
//               <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-deep">
//                 Designed for Daily Practice and Lifelong Devotion
//               </h2>
//               <p className="font-body text-sm sm:text-base text-navy/80 leading-relaxed">
//                 A properly crafted Rudraksha mala should feel natural, balanced, and comfortable during meditation. At Rudrantra, our malas are designed to support years of mantra chanting and spiritual discipline while maintaining the sacred integrity of Original Rudraksha Beads.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center font-bold">
//                   <Layers className="w-5 h-5" />
//                 </div>
//                 <h4 className="font-display text-base font-bold text-navy-deep">Thread Engineering</h4>
//                 <p className="font-body text-xs text-navy/75 leading-relaxed">
//                   Multi-layered threading ensures structural resilience while maintaining flexibility during meditation.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center font-bold">
//                   <SlidersHorizontal className="w-5 h-5" />
//                 </div>
//                 <h4 className="font-display text-base font-bold text-navy-deep">Balanced Spacing</h4>
//                 <p className="font-body text-xs text-navy/75 leading-relaxed">
//                   Each bead is aligned to maintain smooth finger movement and accurate mantra rhythm.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center font-bold">
//                   <Scroll className="w-5 h-5" />
//                 </div>
//                 <h4 className="font-display text-base font-bold text-navy-deep">Sacred Final Touch</h4>
//                 <p className="font-body text-xs text-navy/75 leading-relaxed">
//                   A closing mantra recitation seals the mala before secure packaging and dispatch.
//                 </p>
//               </div>

//               <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-navy/10 space-y-3">
//                 <div className="w-10 h-10 rounded-xl bg-orange/20 text-orange flex items-center justify-center font-bold">
//                   <Flame className="w-5 h-5" />
//                 </div>
//                 <h4 className="font-display text-base font-bold text-navy-deep">Blessings & Mantras</h4>
//                 <p className="font-body text-xs text-navy/75 leading-relaxed">
//                   Every batch of malas is respectfully prepared with traditional mantra chanting to honor Lord Shiva.
//                 </p>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ── 7. CTA BANNER: CONSULTATION & SHOP ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-navy-deep text-peach rounded-3xl p-8 sm:p-12 border-2 border-orange/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
//             <div className="space-y-3 text-center lg:text-left max-w-2xl">
//               <h2 className="font-display text-2xl sm:text-4xl font-bold text-peach">
//                 Begin Your Journey with Authentic Rudraksha
//               </h2>
//               <p className="font-body text-sm sm:text-base text-peach/80">
//                 Explore our lab-certified Nepali beads or speak with our Acharyas for personalized Mukhi selection.
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
//               <Link
//                 href="/consultation"
//                 className="px-6 py-3.5 bg-gradient-to-r from-orange to-orange-bright text-navy-deep font-heading font-bold text-xs uppercase tracking-widest rounded-xl shadow-md hover:shadow-sacred-glow transition-all text-center"
//               >
//                 Book Vedic Consultation →
//               </Link>
//               <Link
//                 href="/all-products"
//                 className="px-6 py-3.5 bg-navy border border-orange/40 text-peach hover:text-orange font-heading font-bold text-xs uppercase tracking-widest rounded-xl transition-colors text-center"
//               >
//                 Explore All Beads →
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ── 8. RICH BLOG SECTION & SPIRITUAL GUIDES ── */}
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-navy/10 pb-4">
//             <div>
//               <span className="text-orange font-heading text-xs font-bold uppercase tracking-widest">
//                 [ SPIRITUAL GUIDES & BLOG ]
//               </span>
//               <h2 className="font-display text-2xl sm:text-4xl font-bold text-navy-deep mt-1">
//                 Sacred Reads & Authentic Knowledge
//               </h2>
//             </div>
//             <Link href="/blog" className="text-xs font-heading font-bold text-orange hover:text-orange-soft flex items-center gap-1">
//               <span>View All Articles</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {BLOG_POSTS.slice(0, 2).map((post) => (
//               <div
//                 key={post.id}
//                 className="bg-white border border-navy/15 rounded-3xl overflow-hidden shadow-sm hover:border-orange hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
//               >
//                 <div>
//                   <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-deep">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <span className="absolute top-4 left-4 bg-navy-deep/90 text-orange text-[9px] font-heading font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-orange/40 backdrop-blur-md">
//                       {post.category}
//                     </span>
//                   </div>

//                   <div className="p-6 space-y-3">
//                     <div className="flex items-center gap-3 text-[11px] font-heading text-navy/60">
//                       <span>{post.date}</span>
//                       <span>•</span>
//                       <span>{post.readTime}</span>
//                       <span>•</span>
//                       <span>{post.views} views</span>
//                     </div>

//                     <h3 className="font-display text-xl font-bold text-navy-deep group-hover:text-orange transition-colors">
//                       <Link href={`/article/${post.id}`}>{post.title}</Link>
//                     </h3>

//                     <p className="font-body text-xs sm:text-sm text-navy/75 leading-relaxed line-clamp-3">
//                       {post.excerpt}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="p-6 pt-0 border-t border-navy/10 mt-4 flex items-center justify-between">
//                   <Link
//                     href={`/article/${post.id}`}
//                     className="text-xs font-heading font-bold text-orange group-hover:text-orange-soft flex items-center gap-1.5 transition-all"
//                   >
//                     <span>Read Article</span>
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </Link>

//                   <span className="text-[10px] font-heading uppercase text-navy/50">Pashupatinath Verified</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//       </main>

//       {/* Footer & Overlays */}
//       <Footer />
//       <MenuDrawer />
//       <SearchOverlay />
//       <CartDrawer />
//       <WishlistDrawer />
//       <FloatingActions />
//     </div>
//   );
// }



import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Users,
  Flame,
  Trees as Tree,
  Heart,
  FileCheck,
  Layers,
  SlidersHorizontal,
  Compass,
  Scroll,
} from 'lucide-react';
import { BLOG_POSTS } from '@/models/data/blogData';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
// Replace these with your real Arun Valley farm assets.
// Video is used as the hero background when it loads; the poster
// image shows instantly and also acts as the fallback on mobile /
// low-bandwidth connections where autoplay video is skipped.
// ─────────────────────────────────────────────────────────────
const HERO_VIDEO_SRC = 'https://assets.mixkit.co/uajgzfv4bqnr4ytme90cnooy6iz3';
const HERO_POSTER_SRC = 'https://m.media-amazon.com/images/I/91PNTywJb6L._AC_UF894,1000_QL80_.jpg';
const GROW_IMAGE_SRC = 'https://m.media-amazon.com/images/I/91PNTywJb6L._AC_UF894,1000_QL80_.jpg';

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParaRef = useRef<HTMLParagraphElement>(null);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const growSectionRef = useRef<HTMLDivElement>(null);
  const growFrameRef = useRef<HTMLDivElement>(null);
  const growImageRef = useRef<HTMLImageElement>(null);
  const growOverlayRef = useRef<HTMLDivElement>(null);
  const growTextRef = useRef<HTMLDivElement>(null);
  const growLabelRef = useRef<HTMLSpanElement>(null);
  const growScrollCueRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero entrance timeline (plays once on load) ──
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        heroRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.6 }
      )
        .fromTo(
          heroBadgeRef.current,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          '-=0.2'
        )
        .fromTo(
          heroHeadingRef.current?.querySelectorAll('.hero-word') ?? [],
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.06 },
          '-=0.3'
        )
        .fromTo(
          heroParaRef.current,
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          heroStatsRef.current?.children ?? [],
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
          '-=0.35'
        );

      // Slow, ambient Ken-Burns drift on the hero background so the
      // section still feels alive if the video doesn't load.
      gsap.fromTo(
        '.hero-bg-media',
        { scale: 1.08 },
        {
          scale: 1,
          duration: 8,
          ease: 'power1.out',
        }
      );

      // Fade the hero out slightly / darken as the user scrolls past it,
      // so the transition into the next section feels intentional.
      gsap.to('.hero-bg-media', {
        yPercent: 15,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── Scroll-triggered "growing image" reveal ──
      // The frame fills its sticky stage from frame one, but is visually
      // SMALL because we scale it down with a CSS transform (not width /
      // height). Scaling a transform is compositor-only work — no layout
      // reflow every scroll tick — so the grow feels buttery and doesn't
      // jank on lower-end devices. As it scales up to fill the screen we
      // counter-scale the image inside it slightly (a subtle parallax),
      // fade in a dark gradient for legibility, then bring the caption in
      // on top — the same pattern used on Apple / Framer style product
      // pages, just built with GSAP + ScrollTrigger.
      if (growSectionRef.current && growFrameRef.current) {
        gsap.set(growFrameRef.current, {
          scale: 0.42,
          borderRadius: 32,
          boxShadow: '0 30px 80px -20px rgba(0,0,0,0.55)',
        });
        gsap.set(growImageRef.current, { scale: 1.25 });
        gsap.set(growOverlayRef.current, { autoAlpha: 0 });
        gsap.set(growTextRef.current, { autoAlpha: 0, y: 40 });
        gsap.set(growLabelRef.current, { autoAlpha: 0, y: 20 });
        gsap.set(growScrollCueRef.current, { autoAlpha: 0, y: 15 });

        const growTl = gsap.timeline({
          scrollTrigger: {
            trigger: growSectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });

        growTl
          // Card grows from a small rounded tile to a full-bleed frame.
          .to(growFrameRef.current, {
            scale: 1,
            borderRadius: 0,
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            duration: 1,
            ease: 'power2.inOut',
          })
          // Image counter-scales down as the frame scales up, so the
          // photo itself appears to "settle" rather than just stretching.
          .to(growImageRef.current, { scale: 1, duration: 1, ease: 'power1.out' }, '<')
          .to(growOverlayRef.current, { autoAlpha: 1, duration: 0.35, ease: 'none' }, '-=0.4')
          .to(growLabelRef.current, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'none' }, '-=0.25')
          .to(growTextRef.current, { autoAlpha: 1, y: 0, duration: 0.3, ease: 'none' }, '-=0.15')
          .to(growScrollCueRef.current, { autoAlpha: 1, y: 0, duration: 0.2, ease: 'none' }, '-=0.1')
          .to({}, { duration: 0.35 }) // hold so the text is comfortably readable
          .to(
            [growTextRef.current, growLabelRef.current, growScrollCueRef.current, growOverlayRef.current],
            { autoAlpha: 0, y: -20, duration: 0.25, ease: 'none' }
          );
      }

      // ── Generic fade-up reveal for every section further down the page ──
      const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Staggered reveal for card grids
      const staggerGroups = gsap.utils.toArray<HTMLElement>('[data-reveal-group]');
      staggerGroups.forEach((group) => {
        const items = group.children;
        gsap.fromTo(
          items,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, mainRef);

    // Try to play the video; if it fails (missing file, autoplay block),
    // the poster image + Ken Burns drift above quietly carries the section.
    videoRef.current?.play().catch(() => {});

    return () => ctx.revert();
  }, []);

  const headingWords = "Authentic Rudraksha Beads for Your Spiritual Awakening".split(' ');

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#650a06] font-body selection:bg-[#650a06]/20 selection:text-[#650a06]">
      {/* Navigation */}
      <AnnouncementBar />
      <Navbar />

      {/* Breadcrumbs Bar */}
      <div className="bg-[#ffffff] border-b border-[#650a06]/15 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-heading text-[#650a06]/80">
          <Link href="/" className="hover:text-[#650a06] font-medium transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#650a06]" />
          <span className="text-[#650a06] font-bold uppercase tracking-wider">About Us</span>
        </div>
      </div>

      <main ref={mainRef} className="pb-20 space-y-16 sm:space-y-24">

        {/* ── 1. HERO: FULL-BLEED ARUN VALLEY BACKGROUND ── */}
        <section
          ref={heroRef}
          className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#faf7f2] py-16 sm:py-24 lg:py-32"
        >
          {/* Background media */}
          <div className="hero-bg-media absolute inset-0 will-change-transform opacity-80">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster={HERO_POSTER_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>

          {/* Legibility gradients — Soft light fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/90 via-[#faf7f2]/45 to-transparent/10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div
                ref={heroBadgeRef}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#650a06]/10 border border-[#650a06]/30 text-[#650a06] font-heading text-xs font-bold uppercase tracking-widest backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-[#650a06]" />
                <span>Where Faith Meets Authenticity</span>
              </div>

              <h1
                ref={heroHeadingRef}
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#650a06] leading-tight"
              >
                {headingWords.map((word, i) => (
                  <span key={i} className="hero-word inline-block mr-3">
                    {word === 'Spiritual' || word === 'Awakening.' || word === 'Awakening' ? (
                      <span className="text-[#650a06] underline underline-offset-4 decoration-[#650a06]/40">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>

              <p ref={heroParaRef} className="font-body text-base sm:text-lg text-[#650a06]/90 leading-relaxed max-w-2xl font-medium">
                Discover the sacred power of authentic Rudraksha Beads at <strong className="text-[#650a06]">Rudrantra</strong>, your trusted destination for Original Rudraksha sourced directly from Nepal's Arun Valley. Many of our beads come from carefully cultivated trees in our own Rudrantra farm, a region known worldwide for producing the most powerful and naturally formed Rudraksha.
              </p>

              {/* Stats */}
              <div ref={heroStatsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
                <div className="bg-[#fdf8f4] border border-[#650a06]/20 p-4 rounded-2xl text-center shadow-sm hover:border-[#650a06] transition-colors">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">25K+</p>
                  <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-[#650a06]/80 mt-1">
                    Beads Blessed &amp; Calibrated
                  </p>
                </div>

                <div className="bg-[#fdf8f4] border border-[#650a06]/20 p-4 rounded-2xl text-center shadow-sm hover:border-[#650a06] transition-colors">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">12K</p>
                  <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-[#650a06]/80 mt-1">
                    Practitioners Served
                  </p>
                </div>

                <div className="bg-[#fdf8f4] border border-[#650a06]/20 p-4 rounded-2xl text-center shadow-sm hover:border-[#650a06] transition-colors">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">480+</p>
                  <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-[#650a06]/80 mt-1">
                    Curated Malas &amp; Tools
                  </p>
                </div>

                <div className="bg-[#fdf8f4] border border-[#650a06]/20 p-4 rounded-2xl text-center shadow-sm hover:border-[#650a06] transition-colors">
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#650a06]">Nepal</p>
                  <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-[#650a06]/80 mt-1">
                    Rudrantra Artisans &amp; Farm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 1.5 SCROLL REVEAL: IMAGE GROWS AS YOU SCROLL ── */}
        <section ref={growSectionRef} className="relative -mt-16 sm:-mt-24" style={{ height: '250vh' }}>
          <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#efefec] text-[#650a06] flex items-center justify-center">
            <div
              ref={growFrameRef}
              className="absolute inset-0 overflow-hidden origin-center border border-[#650a06]/35 shadow-2xl"
              style={{ borderRadius: '2rem' }}
            >
              <img
                ref={growImageRef}
                src={GROW_IMAGE_SRC}
                alt="Rudrantra farm in the Arun Valley, Nepal"
                className="w-full h-full object-cover origin-center"
              />
              <div
                ref={growOverlayRef}
                className="absolute inset-0 bg-gradient-to-t from-[#f6e4d8]/90 via-[#650a06]/60 to-transparent"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-20">
              <span
                ref={growLabelRef}
                className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#f7e5d9] mb-4 drop-shadow-md"
              >
                The Arun Valley, Nepal
              </span>
              <div ref={growTextRef} className="max-w-2xl space-y-4">
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f7e5d9] leading-tight drop-shadow-md">
                  Where the Himalaya Meets the Sacred Tree
                </h2>
                <p className="font-body text-sm sm:text-base text-[#f7e5d9]/95 font-medium leading-relaxed drop-shadow-md">
                  High above the Arun River, our own cultivation farm grows Rudraksha the way nature intended — unhurried, untreated, and watched over from seed to seed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. OUR SACRED JOURNEY ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-12 shadow-md space-y-10">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-[#f7e5d9] font-heading text-xs font-extrabold uppercase tracking-widest bg-[#650a06] px-3 py-1 rounded-md inline-block">
                OUR SACRED JOURNEY
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#650a06] tracking-tight">
                Built on Experience, Guided by Authenticity
              </h2>
              <div className="space-y-4 font-body text-sm sm:text-base text-[#650a06]/90 font-medium leading-relaxed">
                <p>
                  Rudrantra was founded on a deep spiritual respect for the divine significance of Rudraksha Beads. What began as a personal search for genuine Original Rudraksha soon became a larger mission: to create a platform where spiritual seekers can find authentic, naturally formed Rudraksha with complete trust.
                </p>
                <p>
                  During our journey, we worked closely with traditional collectors, farmers, and spiritual practitioners in Nepal's sacred valleys to understand the true nature of Rudraksha. Through years of direct sourcing, study of ancient scriptures, and practical bead evaluation, we gained deep insight into how to identify authentic mukhi formations and distinguish natural Original Rudraksha from modified or artificial beads.
                </p>
                <p>
                  Today, Rudrantra continues this tradition by maintaining direct connections with trusted growers and collectors. We are proud that our Rudraksha Beads come from our own cultivation farm in Nepal, where authentic Nepali Rudraksha grows naturally. This allows us to ensure purity, traceability, and authenticity from tree to devotee.
                </p>
                <p className="font-bold text-[#650a06] italic border-l-4 border-[#650a06] pl-4 py-2 bg-[#f7e5d9] rounded-r-xl">
                  "At Rudrantra, we believe Rudraksha is not just a bead; it is a sacred symbol of Lord Shiva's blessings. Every bead is handled with respect, verified with care, and shared with devotion so that seekers can confidently receive Trusted Rudraksha aligned with spiritual integrity."
                </p>
              </div>
            </div>

            {/* 5 Key Principles Checklist */}
            <div className="bg-[#f7e5d9] border border-[#650a06]/20 p-6 sm:p-8 rounded-2xl space-y-4">
              <h3 className="font-heading text-base font-extrabold text-[#650a06] uppercase tracking-wider">
                Core Foundations of Our Mission:
              </h3>
              <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#fdf8f4] p-3.5 rounded-xl border border-[#650a06]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                  <span>Direct Sourcing from Nepal, Including Our Own Farm</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#fdf8f4] p-3.5 rounded-xl border border-[#650a06]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                  <span>Accurate Mukhi Verification Process</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#fdf8f4] p-3.5 rounded-xl border border-[#650a06]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                  <span>100% Natural &amp; Untreated Rudraksha Beads</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#fdf8f4] p-3.5 rounded-xl border border-[#650a06]/20 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                  <span>Spiritual Preparation Guided by Shiva Traditions</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#fdf8f4] p-3.5 rounded-xl border border-[#650a06]/20 shadow-2xs md:col-span-2 lg:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                  <span>Education and Guidance for Selecting Trusted Rudraksha</span>
                </div>
              </div>
            </div>

            {/* 5 Core Pillars Grid */}
            <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="p-6 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/20 space-y-3 hover:border-[#650a06] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] font-extrabold flex items-center justify-center transition-colors shadow-2xs">
                  <Tree className="w-5 h-5 text-[#f7e5d9]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06]">Integrity in Origin</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  Rudrantra sources Rudraksha Beads directly from Nepal, including beads grown in our own farm, where authentic Nepali Rudraksha naturally develops. This ensures traceability, authenticity, and genuine Original Rudraksha.
                </p>
              </div>

              <div className="p-6 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/20 space-y-3 hover:border-[#650a06] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] font-extrabold flex items-center justify-center transition-colors shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#f7e5d9]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06]">Respect for Nature</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  No artificial enhancement, drilling alteration, or chemical polishing — we preserve what nature creates naturally.
                </p>
              </div>

              <div className="p-6 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/20 space-y-3 hover:border-[#650a06] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] font-extrabold flex items-center justify-center transition-colors shadow-2xs">
                  <BookOpen className="w-5 h-5 text-[#f7e5d9]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06]">Wisdom-Led Guidance</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  Selection advice rooted in ancient scriptures, planetary alignment principles, and personal intention clarity.
                </p>
              </div>

              <div className="p-6 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/20 space-y-3 hover:border-[#650a06] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] font-extrabold flex items-center justify-center transition-colors shadow-2xs">
                  <Heart className="w-5 h-5 text-[#f7e5d9]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06]">Devotional Responsibility</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  We treat every Rudraksha as sacred — stored, handled, and packaged with extreme reverence and devotion.
                </p>
              </div>

              <div className="p-6 bg-[#f7e5d9] rounded-2xl border border-[#650a06]/20 space-y-3 hover:border-[#650a06] transition-colors group sm:col-span-2 lg:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#650a06] text-[#f7e5d9] font-extrabold flex items-center justify-center transition-colors shadow-2xs">
                  <Compass className="w-5 h-5 text-[#f7e5d9]" />
                </div>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06]">Guided Personal Support</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  Selecting the right Rudraksha Bead depends on spiritual intention, mukhi type, and traditional knowledge. We provide guidance to help seekers choose Trusted Rudraksha aligned with their personal journey.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. AUTHENTICITY & HERITAGE ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column */}
            <div data-reveal className="lg:col-span-7 bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <span className="text-[#f7e5d9] font-heading text-xs font-extrabold uppercase tracking-widest bg-[#650a06] px-3 py-1 rounded-md inline-block">
                  AUTHENTICITY &amp; HERITAGE
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#650a06]">
                  Aligned with Tradition, Guided by Responsibility
                </h2>
                <p className="font-body text-sm sm:text-base text-[#650a06]/90 font-medium leading-relaxed">
                  The tradition of wearing Rudraksha Beads comes from ancient Vedic scriptures like the Shiva Purana and Padma Purana, where they are described as sacred seeds blessed by Lord Shiva that support meditation, protection, and spiritual growth. At Rudrantra, we combine this traditional wisdom with real experience in identifying natural mukhi formations and sourcing Original Rudraksha directly from growers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#f7e5d9] p-3 rounded-xl border border-[#650a06]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                    <span>Traditional 1 to 21 Mukhi Wisdom</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#f7e5d9] p-3 rounded-xl border border-[#650a06]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                    <span>Ethical Harvesting Awareness</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#f7e5d9] p-3 rounded-xl border border-[#650a06]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                    <span>Respect for Wearing Practices</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-extrabold text-[#650a06] bg-[#f7e5d9] p-3 rounded-xl border border-[#650a06]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#650a06] shrink-0" />
                    <span>Natural Bead Formation Verification</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#650a06]/15 flex items-center justify-between">
                <span className="text-xs font-heading font-extrabold uppercase text-[#650a06]/80">Pashupatinath Verified</span>
                <Link href="/consultation" className="text-xs font-heading font-bold text-[#650a06] hover:underline flex items-center gap-1">
                  <span>Explore Mukhi Selection Guidance →</span>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div data-reveal className="lg:col-span-5 bg-[#650a06] text-[#f7e5d9] rounded-3xl p-6 sm:p-8 border border-[#650a06] shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[#650a06] font-heading text-xs font-extrabold uppercase tracking-widest bg-[#f7e5d9] px-3 py-1 rounded-md inline-block">
                  TRUST &amp; TRANSPARENCY
                </span>
                <h3 className="font-heading text-2xl font-extrabold text-[#f7e5d9]">
                  Why Seekers Rely on Rudrantra
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#f7e5d9]/90 font-medium leading-relaxed">
                  Genuine beads, verified origin, traditional consecration, and dedicated spiritual guidance for every devotee.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 4. RITUAL PREPARATION ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="bg-[#fdf8f4] border border-[#650a06]/20 rounded-3xl p-6 sm:p-12 shadow-md space-y-10">
            <div className="max-w-3xl space-y-4">
              <span className="text-[#f7e5d9] font-heading text-xs font-extrabold uppercase tracking-widest bg-[#650a06] px-3 py-1 rounded-md inline-block">
                SACRED PREPARATION
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#650a06] tracking-tight">
                Ritually Prepared in Living Shaiva Tradition
              </h2>
              <p className="font-body text-sm sm:text-base text-[#650a06]/90 font-medium leading-relaxed">
                At Rudrantra, every Rudraksha Bead is treated as a sacred spiritual element rather than just a product. Selected Original Rudraksha undergo traditional purification and mantra-based preparation rooted in Shaiva and Vedic practices.
              </p>
            </div>

            <div data-reveal-group className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f7e5d9] border border-[#650a06]/20 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-heading font-extrabold text-[#650a06] uppercase tracking-wider block">
                  Temple / Location Lineage
                </span>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  Our ritual preparation practices are inspired by sacred traditions connected to the Pashupatinath spiritual lineage of Nepal.
                </p>
              </div>

              <div className="bg-[#f7e5d9] border border-[#650a06]/20 p-6 rounded-2xl space-y-3">
                <span className="text-xs font-heading font-extrabold text-[#650a06] uppercase tracking-wider block">
                  Shaiva Consecration Heritage
                </span>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  Guided by experienced practitioners familiar with Shaiva rituals, Rudra mantra chanting, and Vedic consecration practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. A TRANSPARENT PATH FROM TREE TO TEMPLE ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[#f7e5d9] font-heading text-xs font-extrabold uppercase tracking-widest bg-[#650a06] px-3 py-1 rounded-md inline-block">
              OUR JOURNEY OF PURITY
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#650a06] tracking-tight">
              A Transparent Path from Tree to Temple
            </h2>
            <p className="font-body text-sm sm:text-base text-[#650a06]/90 font-medium leading-relaxed">
              Every Rudraksha Bead at Rudrantra follows a transparent path from tree to temple to devotee.
            </p>
          </div>

          <div data-reveal-group className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: 'STEP 01', title: 'Curated at Source', desc: 'Rudraksha Beads are harvested from mature trees in Nepal.' },
              { step: 'STEP 02', title: 'Structural Examination', desc: 'Inspection of mukhi lines, natural clefts, and density.' },
              { step: 'STEP 03', title: 'Spiritual Preparation', desc: 'Chant-based energization and fire purification.' },
              { step: 'STEP 04', title: 'Mala Crafting', desc: 'Hand-assembled mala with durable knotting.' },
              { step: 'STEP 05', title: 'Energetic Cleansing', desc: 'Purification through traditional salt cleansing.' },
              { step: 'STEP 06', title: 'Guided Dispatch', desc: 'Delivered with care instructions and authenticity certificate.' },
            ].map((s) => (
              <div key={s.step} className="bg-[#fdf8f4] border border-[#650a06]/20 p-6 rounded-2xl space-y-3 hover:border-[#650a06] transition-colors shadow-2xs">
                <span className="font-heading font-extrabold text-xs text-[#f7e5d9] bg-[#650a06] px-3 py-1 rounded-full">
                  {s.step}
                </span>
                <h3 className="font-heading text-lg font-extrabold text-[#650a06] pt-2">{s.title}</h3>
                <p className="font-body text-xs sm:text-sm font-semibold text-[#650a06]/85 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. CTA BANNER ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal className="bg-[#650a06] text-[#f7e5d9] rounded-3xl p-8 sm:p-12 border border-[#650a06] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#f7e5d9]">
                Begin Your Journey with Authentic Rudraksha
              </h2>
              <p className="font-body text-sm sm:text-base text-[#f7e5d9]/90 font-medium">
                Explore our lab-certified Nepali beads or speak with our Acharyas for personalized Mukhi selection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/consultation"
                className="px-6 py-3.5 bg-[#f7e5d9] text-[#650a06] font-heading font-extrabold text-xs uppercase tracking-widest rounded-xl shadow-md hover:bg-white transition-all text-center"
              >
                Book Vedic Consultation →
              </Link>
              <Link
                href="/all-products"
                className="px-6 py-3.5 bg-[#650a06] border border-[#f7e5d9]/40 text-[#f7e5d9] hover:bg-[#8a130c] font-heading font-extrabold text-xs uppercase tracking-widest rounded-xl transition-colors text-center"
              >
                Explore All Beads →
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer & Overlays */}
      <Footer />
      <MenuDrawer />
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <FloatingActions />
    </div>
  );
}