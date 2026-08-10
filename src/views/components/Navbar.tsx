// // import { useUI } from '@/models/context/UIContext';
// // import { useCart } from '@/models/context/CartContext';
// // import { useWishlist } from '@/models/context/WishlistContext';
// // import { Menu, Search, Heart, ShoppingBag, User, ChevronDown, Sparkles, BookOpen, Layers, Mail, HelpCircle } from 'lucide-react';
// // import { Link } from 'wouter';
// // import { useState, useEffect } from 'react';
// // import { GiLotus, GiFlame, GiBowlSpiral, GiGemNecklace, GiByzantinTemple, GiSun } from 'react-icons/gi';
// // import { MdDesignServices } from "react-icons/md";

// // export function Navbar() {
// //   const { setIsMenuOpen, setIsSearchOpen } = useUI();
// //   const { setIsCartOpen, cartCount } = useCart();
// //   const { setIsWishlistOpen, wishlistCount } = useWishlist();

// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 20);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
// //     <Link
// //       href={href}
// //       className="relative py-2 text-[10px] lg:text-[11px] xl:text-xs font-heading font-medium text-[#650a06] hover:text-[#8a130c] transition-colors group whitespace-nowrap shrink-0"
// //     >
// //       {children}
// //       <span
// //         className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#650a06] transition-all duration-300 group-hover:w-full"
// //       ></span>
// //     </Link>
// //   );

// //   // Mukhi numbers for the Rudraksha Beads dropdown grid
// //   const mukhiList = [1, 2, 3, 5, 6, 8, 9, 10, 11, 7, 12];

// //   return (
    
// //     <header
// //       className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
// //         scrolled
// //           ? 'bg-[#f2e9e6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(101,10,6,0.12)] border-[#650a06]/20'
// //           : 'bg-[#f2e9e6] border-[#650a06]/15'
// //       }`}
// //     >
      
// //       <div className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 flex items-center justify-between h-16 sm:h-20 lg:h-24 gap-2 sm:gap-4 lg:gap-3 xl:gap-6">

// //         {/* LEFT: Menu Button + Brand Logo */}
// //         <div className="flex items-center gap-2 sm:gap-4 shrink-0">
// //           <button
// //             onClick={() => setIsMenuOpen(true)}
// //             className="p-1.5 sm:p-2 -ml-1 sm:-ml-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 rounded-lg transition-colors focus:outline-none shrink-0 flex items-center justify-center"
// //             aria-label="Open Menu"
// //           >
// //             <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
// //           </button>

// //           <Link href="/" className="flex items-center gap-2 shrink-0 group py-1">
// //             <img
// //               src="/images/f123.png"
// //               alt="Rudrantra Ventures Pvt. Ltd."
// //               className="h-12 sm:h-16 lg:h-18 xl:h-17 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
// //               draggable={false}
// //             />
// //           </Link>
// //         </div>

// //         {/* CENTER: Desktop Navigation Links */}
// //         <nav className="hidden lg:flex items-center justify-center gap-1 lg:gap-1.5 xl:gap-5 shrink">

// //           {/* RUDRAKSHA BEADS — MUKHI GRID MEGA DROPDOWN */}
// //           <div className="relative group cursor-pointer py-2 shrink-0">
// //             <button className="text-[10px] lg:text-[10.5px] xl:text-xs font-heading font-medium text-[#650a06] group-hover:text-[#8a130c] transition-colors flex items-center gap-0.5 xl:gap-1 whitespace-nowrap">
// //               <span>Rudraksha Beads</span>
// //               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-[#650a06]" />
// //             </button>

// //             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
// //               <div className="bg-[#f7e5d9] border border-[#650a06]/30 shadow-[0_20px_50px_rgba(101,10,6,0.2)] rounded-2xl p-5 sm:p-6 w-[480px] relative overflow-hidden backdrop-blur-xl">
// //                 <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />

// //                 {/* Header */}
// //                 <div className="relative z-10 mb-4">
// //                   <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/70">
// //                     Shop Collection
// //                   </span>
// //                   <h3 className="font-display text-xl text-[#650a06] font-bold mt-1">
// //                     Rudraksha Beads
// //                   </h3>
// //                   <p className="text-[11px] font-body text-[#650a06]/75 mt-1">
// //                     Choose by mukhi count — lab-tested beads sourced with care.
// //                   </p>
// //                 </div>

// //                 {/* Mukhi Grid */}
// //                 <div className="relative z-10 grid grid-cols-4 gap-2.5">
// //                   {mukhiList.map((mukhi) => (
// //                     <Link
// //                       key={mukhi}
// //                       href={`/all-products?category=Rudraksha&mukhi=${mukhi}`}
// //                       className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl border border-[#650a06]/20 hover:border-[#650a06]/60 hover:bg-[#650a06]/10 transition-all group/mukhi"
// //                     >
// //                       <div className="w-8 h-8 rounded-full bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center text-xs font-heading font-bold group-hover/mukhi:bg-[#650a06] group-hover/mukhi:text-[#f7e5d9] group-hover/mukhi:scale-110 transition-all">
// //                         {mukhi}
// //                       </div>
// //                       <span className="text-[11px] font-heading font-semibold text-[#650a06] group-hover/mukhi:text-[#8a130c] text-center leading-tight">
// //                         {mukhi} Mukhi
// //                       </span>
// //                       <span className="text-[8px] font-body uppercase tracking-wider text-[#650a06]/60">
// //                         Rudraksha
// //                       </span>
// //                     </Link>
// //                   ))}
// //                 </div>

// //                 {/* View All Button */}
// //                 <Link
// //                   href="/all-products?category=Rudraksha"
// //                   className="relative z-10 mt-4 w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#8a130c] transition-colors"
// //                 >
// //                   View all Rudraksha Beads
// //                   <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>

// //           {/* SACRED CATEGORIES TOOLTIP MEGA DROPDOWN */}
// //           <div className="relative group cursor-pointer py-2 shrink-0">
// //             <button className="text-[10px] lg:text-[11px] xl:text-xs font-heading font-medium text-[#650a06] group-hover:text-[#8a130c] transition-colors flex items-center gap-0.5 xl:gap-1 whitespace-nowrap">
// //               <span>Sacred Categories</span>
// //               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-[#650a06]" />
// //             </button>

// //             {/* Tooltip Mega Dropdown Box */}
// //             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
// //               <div className="bg-[#f7e5d9] border border-[#650a06]/30 shadow-[0_20px_50px_rgba(101,10,6,0.2)] rounded-2xl p-4 sm:p-5 w-[520px] grid grid-cols-2 gap-3 relative overflow-hidden backdrop-blur-xl">
// //                 <div className="absolute inset-0 bg-mandala opacity-5 pointer-events-none" />

// //                 {/* Category 1: Rudraksha & Variants */}
// //                 <Link
// //                   href="/all-products?category=Rudraksha %26 Variants"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <GiLotus className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Rudraksha & Variants
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       Beads, Mala, Siddha Mala & Bracelets
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Category 2: Saligram */}
// //                 <Link
// //                   href="/all-products?category=Saligram"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <GiByzantinTemple className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Gandaki Saligram
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       Lakshmi Narayan & Sudarshan Shila
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Category 3: Shankha & Ghanti */}
// //                 <Link
// //                   href="/all-products?category=Shankha %26 Ghanti"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <Sparkles className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Shankha & Ghanti
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       Vamavarti Conch & Panchdhatu Bell
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Category 4: Singing Bowl */}
// //                 <Link
// //                   href="/all-products?category=Singing Bowl"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <GiBowlSpiral className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Singing Bowls
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       7 Chakra Hand-Beaten Healing Bowls
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Category 5: Gemstones */}
// //                 <Link
// //                   href="/all-products?category=Gemstone"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <GiGemNecklace className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Vedic Gemstones
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       Certified Pukhraj, Neelam & Navratna
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Category 6: Statue & Sphatik */}
// //                 <Link
// //                   href="/all-products?category=Statue %26 Sphatik"
// //                   className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/30 group/item"
// //                 >
// //                   <div className="w-8 h-8 rounded-lg bg-[#650a06]/15 border border-[#650a06]/30 text-[#650a06] flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
// //                     <GiSun className="w-4 h-4" />
// //                   </div>
// //                   <div>
// //                     <h4 className="text-xs font-heading font-bold text-[#650a06]">
// //                       Statue & Sphatik
// //                     </h4>
// //                     <p className="text-[10px] font-body text-[#650a06]/75 line-clamp-1 mt-0.5">
// //                       Quartz Shivling & Panchdhatu Idols
// //                     </p>
// //                   </div>
// //                 </Link>

// //                 {/* Bottom View All Link inside Tooltip */}
// //                 <div className="col-span-2 pt-2 border-t border-[#650a06]/20 flex justify-between items-center text-xs">
// //                   <span className="font-body text-[#650a06]/70">100% Pashupatinath Consecrated</span>
// //                   <Link href="/collections" className="font-heading font-bold text-[#650a06] hover:text-[#8a130c] flex items-center gap-1">
// //                     Explore All Collections →
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <NavLink href="/blog">Blog</NavLink>
// //           <NavLink href="/about">About Us</NavLink>
// //           <NavLink href="/consultation">Consultation</NavLink>
// //           <NavLink href="/faq">FAQ</NavLink>

// //           {/* MORE DROPDOWN */}
// //           <div className="relative group cursor-pointer py-2 shrink-0">
// //             <button className="text-[11px] xl:text-xs font-heading font-bold text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all px-2.5 py-1 rounded-lg flex items-center gap-1 whitespace-nowrap">
// //               <Layers className="w-3.5 h-3.5" />
// //               <span>More</span>
// //               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
// //             </button>

// //             {/* Dropdown Card */}
// //             <div className="absolute top-full right-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
// //               <div className="bg-[#f7e5d9] border border-[#650a06]/30 shadow-[0_15px_40px_rgba(101,10,6,0.2)] rounded-xl p-2 w-48 space-y-1 backdrop-blur-xl">
                
// //                 {/* Custom Order */}
// //                 <Link
// //                   href="/customize-order"
// //                   className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#650a06]/15 text-[#650a06] transition-colors text-xs font-heading font-bold group/sub"
// //                 >
// //                   <MdDesignServices className="w-4 h-4 text-[#650a06] shrink-0 group-hover/sub:scale-110 transition-transform" />
// //                   <span>Custom Order</span>
// //                 </Link>

// //                 {/* Contact Us */}
// //                 <Link
// //                   href="/contact"
// //                   className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#650a06]/15 text-[#650a06] transition-colors text-xs font-heading font-bold group/sub"
// //                 >
// //                   <Mail className="w-4 h-4 text-[#650a06] shrink-0 group-hover/sub:scale-110 transition-transform" />
// //                   <span>Contact Us</span>
// //                 </Link>

// //               </div>
// //             </div>
// //           </div>

// //         </nav>

// //         {/* RIGHT: Actions (Search, Account, Wishlist, Cart) */}
// //         <div className="flex items-center justify-end gap-0.5 sm:gap-1.5 lg:gap-1.5 xl:gap-3 shrink-0">
// //           <div className="hidden sm:flex items-center gap-0.5 text-[10px] xl:text-xs font-heading font-medium text-[#650a06] shrink-0">
// //             <select className="bg-transparent border border-[#650a06]/20 rounded-md px-1 py-0.5 focus:outline-none cursor-pointer text-[#650a06] hover:bg-[#650a06]/10">
// //               <option>NPR</option>
// //               <option>USD</option>
// //             </select>
// //           </div>

// //           <button
// //             onClick={() => setIsSearchOpen(true)}
// //             className="p-1.5 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full shrink-0"
// //             aria-label="Search"
// //           >
// //             <Search className="w-4 h-4 sm:w-5 sm:h-5" />
// //           </button>

// //           <button
// //             className="hidden sm:block p-1.5 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full shrink-0"
// //             aria-label="Account"
// //           >
// //             <User className="w-4 h-4 sm:w-5 sm:h-5" />
// //           </button>

// //           <Link
// //             href="/wishlist"
// //             className="p-1.5 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full relative shrink-0"
// //             aria-label="Wishlist"
// //           >
// //             <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
// //             {wishlistCount > 0 && (
// //               <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#650a06] text-[#f7e5d9] text-[9px] font-bold flex items-center justify-center">
// //                 {wishlistCount}
// //               </span>
// //             )}
// //           </Link>

// //           <button
// //             onClick={() => setIsCartOpen(true)}
// //             className="p-1.5 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full relative shrink-0"
// //             aria-label="Cart"
// //           >
// //             <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
// //             {cartCount > 0 && (
// //               <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#650a06] text-[#f7e5d9] text-[9px] font-bold flex items-center justify-center animate-pulse">
// //                 {cartCount}
// //               </span>
// //             )}
// //           </button>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // }

// import { useState, useEffect } from 'react';
// import { Link } from 'wouter';
// import { useUI } from '@/models/context/UIContext';
// import { useCart } from '@/models/context/CartContext';
// import { useWishlist } from '@/models/context/WishlistContext';
// import {
//   Menu,
//   Search,
//   Heart,
//   ShoppingBag,
//   User,
//   ChevronDown,
//   Sparkles,
//   Layers,
//   Mail,
//   PhoneCall,
//   ShieldCheck,
//   Globe,
//   ArrowRight
// } from 'lucide-react';
// import {
//   GiLotus,
//   GiBowlSpiral,
//   GiGemNecklace,
//   GiByzantinTemple,
//   GiSun,
//   GiFlowerEmblem
// } from 'react-icons/gi';
// import { MdDesignServices } from 'react-icons/md';

// export function Navbar() {
//   const { setIsMenuOpen, setIsSearchOpen } = useUI();
//   const { setIsCartOpen, cartCount } = useCart();
//   const { setIsWishlistOpen, wishlistCount } = useWishlist();

//   const [scrolled, setScrolled] = useState(false);
//   const [currency, setCurrency] = useState('NPR');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const mukhiList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//   return (
//     <header className="sticky top-0 z-[100] w-full bg-[#fdfbf7] font-body text-[#3b120c] transition-all">
//       {/* TOP UTILITY ANNOUNCEMENT BAR */}
//       <div className="bg-[#4a0805] text-[#f7e5d9] px-4 py-1.5 text-[11px] font-medium border-b border-[#650a06]/30">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="hidden md:flex items-center gap-4">
//             <span className="flex items-center gap-1">
//               <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
//               100% Pashupatinath Consecrated
//             </span>
//             <span className="text-[#f7e5d9]/40">|</span>
//             <span className="flex items-center gap-1">
//               <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
//               Support: +977 1 4XXXXXX
//             </span>
//           </div>

//           <div className="w-full md:w-auto text-center font-heading tracking-wide">
//             ✨ Free Global Express Shipping on Sacred Orders Over $150
//           </div>

//           <div className="hidden md:flex items-center gap-3">
//             <div className="flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition-colors">
//               <Globe className="w-3 h-3 text-[#d4af37]" />
//               <select
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//                 className="bg-transparent border-none text-[11px] focus:outline-none cursor-pointer pr-1"
//               >
//                 <option value="NPR" className="bg-[#4a0805] text-[#f7e5d9]">NPR (रु)</option>
//                 <option value="USD" className="bg-[#4a0805] text-[#f7e5d9]">USD ($)</option>
//                 <option value="INR" className="bg-[#4a0805] text-[#f7e5d9]">INR (₹)</option>
//               </select>
//             </div>
//             <span className="text-[#f7e5d9]/40">|</span>
//             <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
//               Help Center
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* MAIN BRANDING & ACTION HEADER */}
//       <div
//         className={`w-full transition-all duration-300 border-b border-[#650a06]/15 ${
//           scrolled ? 'bg-[#fdfbf7]/95 backdrop-blur-md shadow-md py-2.5' : 'bg-[#fdfbf7] py-3.5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
          
//           {/* Mobile Menu Trigger & Search */}
//           <div className="flex items-center gap-2 lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(true)}
//               className="p-2 text-[#650a06] hover:bg-[#650a06]/10 rounded-lg transition-colors"
//               aria-label="Open Menu"
//             >
//               <Menu className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => setIsSearchOpen(true)}
//               className="p-2 text-[#650a06] hover:bg-[#650a06]/10 rounded-lg transition-colors"
//               aria-label="Search"
//             >
//               <Search className="w-5 h-5" />
//             </button>
//           </div>

//           {/* BRAND LOGO */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <img
//               src="/images/f123.png"
//               alt="Rudrantra Ventures Pvt. Ltd."
//               className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
//             />
//           </Link>

//           {/* DESKTOP SEARCH BAR (PRIMARY CTA FOR ECOMMERCE) */}
//           <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
//             <input
//               type="text"
//               readOnly
//               onClick={() => setIsSearchOpen(true)}
//               placeholder="Search Consecrated Rudraksha, Saligram, Gemstones..."
//               className="w-full pl-10 pr-4 py-2 bg-[#f4ece1]/60 border border-[#650a06]/20 rounded-full text-xs text-[#3b120c] placeholder-[#650a06]/50 cursor-pointer focus:outline-none hover:border-[#650a06]/50 transition-all shadow-inner"
//             />
//             <Search className="w-4 h-4 text-[#650a06] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
//           </div>

//           {/* USER ACTIONS */}
//           <div className="flex items-center gap-1 sm:gap-2">
//             <Link
//               href="/account"
//               className="hidden sm:flex items-center gap-2 p-2 text-[#650a06] hover:bg-[#650a06]/10 rounded-full transition-colors"
//               aria-label="Account"
//             >
//               <User className="w-5 h-5" />
//             </Link>

//             <button
//               onClick={() => setIsWishlistOpen(true)}
//               className="p-2 text-[#650a06] hover:bg-[#650a06]/10 rounded-full transition-colors relative"
//               aria-label="Wishlist"
//             >
//               <Heart className="w-5 h-5" />
//               {wishlistCount > 0 && (
//                 <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#650a06] text-[#f8f5ee] text-[10px] font-bold flex items-center justify-center border border-[#fdfbf7]">
//                   {wishlistCount}
//                 </span>
//               )}
//             </button>

//             <button
//               onClick={() => setIsCartOpen(true)}
//               className="p-2 text-[#650a06] hover:bg-[#650a06]/10 rounded-full transition-colors relative"
//               aria-label="Cart"
//             >
//               <ShoppingBag className="w-5 h-5" />
//               {cartCount > 0 && (
//                 <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#8a130c] text-[#f8f5ee] text-[10px] font-bold flex items-center justify-center border border-[#fdfbf7]">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* DESKTOP CATEGORY NAVIGATION STRIP */}
//       <nav className="hidden lg:block bg-[#f9f4ec] border-b border-[#650a06]/10">
//         <div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-8 text-xs font-heading font-semibold uppercase tracking-wider text-[#650a06]">
          
//           {/* MEGA MENU: RUDRAKSHA BEADS */}
//           <div className="relative group py-3">
//             <Link href="/all-products?category=Rudraksha" className="flex items-center gap-1.5 hover:text-[#8a130c] transition-colors">
//               <GiFlowerEmblem className="w-4 h-4 text-[#d4af37]" />
//               <span>Rudraksha Beads</span>
//               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
//             </Link>

//             <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
//               <div className="bg-[#fdfbf7] border border-[#650a06]/20 shadow-2xl rounded-xl p-6 w-[600px] backdrop-blur-xl">
//                 <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#650a06]/10">
//                   <div>
//                     <h3 className="font-display text-base text-[#650a06] font-bold uppercase tracking-wider">
//                       Mukhi Collections
//                     </h3>
//                     <p className="text-[11px] font-body text-[#650a06]/70 normal-case">
//                       Authentic Lab-Certified Sacred Nepali Beads
//                     </p>
//                   </div>
//                   <Link href="/all-products?category=Rudraksha" className="text-[11px] text-[#8a130c] hover:underline flex items-center gap-1 normal-case font-bold">
//                     View All Beads <ArrowRight className="w-3 h-3" />
//                   </Link>
//                 </div>

//                 <div className="grid grid-cols-7 gap-2">
//                   {mukhiList.map((m) => (
//                     <Link
//                       key={m}
//                       href={`/all-products?category=Rudraksha&mukhi=${m}`}
//                       className="flex flex-col items-center justify-center p-2 rounded-lg border border-[#650a06]/10 bg-[#fbf8f3] hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all group/item text-center"
//                     >
//                       <span className="text-xs font-bold">{m}</span>
//                       <span className="text-[9px] opacity-80 uppercase">Mukhi</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* MEGA MENU: SACRED CATEGORIES */}
//           <div className="relative group py-3">
//             <button className="flex items-center gap-1.5 hover:text-[#8a130c] transition-colors">
//               <span>Sacred Categories</span>
//               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
//             </button>

//             <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
//               <div className="bg-[#fdfbf7] border border-[#650a06]/20 shadow-2xl rounded-xl p-5 w-[640px] grid grid-cols-2 gap-4">
                
//                 {[
//                   { title: "Rudraksha & Variants", sub: "Malas, Siddha Malas & Bracelets", icon: GiLotus, href: "/all-products?category=Rudraksha" },
//                   { title: "Gandaki Saligram", sub: "Directly Sourced Lakshmi Narayan Shilas", icon: GiByzantinTemple, href: "/all-products?category=Saligram" },
//                   { title: "Shankha & Ghanti", sub: "Vamavarti Conch & Panchdhatu Bells", icon: Sparkles, href: "/all-products?category=Shankha" },
//                   { title: "Singing Bowls", sub: "Hand-Beaten 7-Chakra Healing Bowls", icon: GiBowlSpiral, href: "/all-products?category=SingingBowl" },
//                   { title: "Vedic Gemstones", sub: "Certified Unheated Pukhraj & Neelam", icon: GiGemNecklace, href: "/all-products?category=Gemstone" },
//                   { title: "Statue & Sphatik", sub: "Quartz Shivlings & Panchdhatu Statues", icon: GiSun, href: "/all-products?category=Statues" },
//                 ].map((cat, idx) => (
//                   <Link
//                     key={idx}
//                     href={cat.href}
//                     className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#650a06]/5 border border-transparent hover:border-[#650a06]/15 transition-all group/cat"
//                   >
//                     <div className="w-9 h-9 rounded-lg bg-[#650a06]/10 text-[#650a06] flex items-center justify-center shrink-0 group-hover/cat:bg-[#650a06] group-hover/cat:text-[#f7e5d9] transition-all">
//                       <cat.icon className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-[#650a06]">{cat.title}</h4>
//                       <p className="text-[10px] font-body text-[#3b120c]/70 normal-case mt-0.5">{cat.sub}</p>
//                     </div>
//                   </Link>
//                 ))}

//               </div>
//             </div>
//           </div>

//           <Link href="/consultation" className="hover:text-[#8a130c] transition-colors">
//             Free Consultation
//           </Link>

//           <Link href="/customize-order" className="hover:text-[#8a130c] transition-colors flex items-center gap-1">
//             <MdDesignServices className="w-4 h-4 text-[#d4af37]" />
//             Custom Orders
//           </Link>

//           <Link href="/blog" className="hover:text-[#8a130c] transition-colors">
//             Vedic Wisdom
//           </Link>

//           {/* MORE DROPDOWN */}
//           <div className="relative group py-3">
//             <button className="flex items-center gap-1 hover:text-[#8a130c] transition-colors">
//               <Layers className="w-3.5 h-3.5" />
//               <span>More</span>
//               <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
//             </button>

//             <div className="absolute top-full right-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
//               <div className="bg-[#fdfbf7] border border-[#650a06]/20 shadow-xl rounded-lg p-2 w-48 space-y-1">
//                 <Link href="/about" className="flex items-center gap-2 px-3 py-2 text-xs hover:bg-[#650a06]/10 rounded-md transition-colors normal-case">
//                   About Our Heritage
//                 </Link>
//                 <Link href="/faq" className="flex items-center gap-2 px-3 py-2 text-xs hover:bg-[#650a06]/10 rounded-md transition-colors normal-case">
//                   FAQs & Verification
//                 </Link>
//                 <Link href="/contact" className="flex items-center gap-2 px-3 py-2 text-xs hover:bg-[#650a06]/10 rounded-md transition-colors normal-case">
//                   <Mail className="w-3.5 h-3.5 text-[#650a06]" /> Contact Us
//                 </Link>
//               </div>
//             </div>
//           </div>

//         </div>
//       </nav>
//     </header>
//   );
// }



import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'wouter';
import { useUI } from '@/models/context/UIContext';
import { useCart } from '@/models/context/CartContext';
import { useWishlist } from '@/models/context/WishlistContext';
import { productsData, ALL_CATEGORIES } from '@/models/data/productsData';
import { formatPrice } from '@/utils/utils';
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Layers,
  Mail,
  ShieldCheck,
  Globe,
  ArrowRight,
  Loader2,
  SearchX
} from 'lucide-react';
import {
  GiLotus,
  GiBowlSpiral,
  GiGemNecklace,
  GiByzantinTemple,
  GiSun,
  GiFlowerEmblem
} from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';

export function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useUI();
  const { setIsCartOpen, cartCount } = useCart();
  const { setIsWishlistOpen, wishlistCount } = useWishlist();

  const [scrolled, setScrolled] = useState(false);
  const [currency, setCurrency] = useState('NPR');
  const [showSecondaryNav, setShowSecondaryNav] = useState(true);

  // ── LIVE E-COMMERCE DEBOUNCED SEARCH STATE ──────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchBtnRef = useRef<HTMLButtonElement>(null);

  // Debounce logic (300ms delay)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setDebouncedQuery('');
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim());
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Click Outside & Escape Key Listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (mobileSearchBtnRef.current && mobileSearchBtnRef.current.contains(target)) {
        return;
      }
      const isOutsideDesktop = searchContainerRef.current ? !searchContainerRef.current.contains(target) : true;
      const isOutsideMobile = mobileSearchContainerRef.current ? !mobileSearchContainerRef.current.contains(target) : true;

      if (isOutsideDesktop && isOutsideMobile) {
        setIsSearchFocused(false);
        setIsMobileSearchOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchFocused(false);
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrolled(currentY > 20);

          if (currentY <= 60) {
            setShowSecondaryNav(true);
          } else if (currentY - lastY > 10) {
            setShowSecondaryNav(false);
          } else if (lastY - currentY > 10) {
            setShowSecondaryNav(true);
          }

          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // ── LIVE SEARCH RESULTS COMPUTATION ─────────────────────────
  const popularSearches = [
    '5 Mukhi Nepal',
    'Siddha Mala',
    'Lakshmi Narayan Saligram',
    'Quartz Shivling',
    '7 Chakra Bowl',
    'Pukhraj Gemstone',
  ];

  const searchResults = useMemo(() => {
    const q = debouncedQuery.toLowerCase().trim();
    if (!q) return { products: [], categories: [], mukhiNumber: null, totalProductsCount: 0 };

    const matchedProducts = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.subCategory && p.subCategory.toLowerCase().includes(q)) ||
        p.desc.toLowerCase().includes(q)
    );

    const matchedCategories = ALL_CATEGORIES.filter(
      (c) => c !== 'All Categories' && c.toLowerCase().includes(q)
    );

    const mukhiMatch = q.match(/(\d+)\s*mukhi/);
    const mukhiNumber = mukhiMatch ? parseInt(mukhiMatch[1]) : null;

    return {
      products: matchedProducts.slice(0, 5),
      totalProductsCount: matchedProducts.length,
      categories: matchedCategories,
      mukhiNumber,
    };
  }, [debouncedQuery]);

  const renderSearchDropdownPanel = () => {
    if (!isSearchFocused) return null;

    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-[#fdfbf7] border border-[#650a06]/30 rounded-2xl shadow-[0_25px_60px_rgba(101,10,6,0.3)] overflow-hidden z-[500] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 text-[#3b120c]">
        
        {/* CASE 1: Query is empty — Popular Searches & Quick Categories */}
        {!searchQuery.trim() && (
          <div className="p-4 space-y-4">
            <div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/80 block mb-2">
                 Popular &amp; Trending Searches
              </span>
              <div className="flex flex-wrap gap-1.5">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setSearchQuery(term);
                      setIsSearchFocused(true);
                    }}
                    className="px-2.5 py-1 rounded-full bg-[#f9f4ec] hover:bg-[#650a06] text-[#650a06] hover:text-[#f7e5d9] border border-[#650a06]/20 text-xs font-heading font-semibold transition-all shadow-2xs cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#650a06]/10">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/80 block mb-2">
                ✨ Quick Sacred Categories
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {categories.slice(0, 4).map((cat, idx) => (
                  <Link
                    key={idx}
                    href={cat.href}
                    onClick={() => setIsSearchFocused(false)}
                    className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#650a06]/10 transition-colors border border-transparent hover:border-[#650a06]/20 group"
                  >
                    <cat.icon className="w-4 h-4 text-[#650a06] shrink-0" />
                    <span className="text-xs font-heading font-bold text-[#650a06] group-hover:text-[#8a130c] truncate">
                      {cat.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CASE 2: Loading State while debouncing */}
        {searchQuery.trim() && isSearching && (
          <div className="p-6 flex items-center justify-center gap-3 text-[#650a06]">
            <Loader2 className="w-5 h-5 animate-spin text-[#650a06]" />
            <span className="text-xs font-heading font-semibold">Searching sacred catalog...</span>
          </div>
        )}

        {/* CASE 3: Debounced Query Has Results */}
        {debouncedQuery && !isSearching && (
          <div>
            {/* Category & Mukhi Matches */}
            {(searchResults.categories.length > 0 || searchResults.mukhiNumber) && (
              <div className="p-3 bg-[#f9f4ec] border-b border-[#650a06]/10 space-y-1.5">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06]/70 block">
                  Matched Categories
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {searchResults.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/all-products?category=${encodeURIComponent(cat)}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#650a06] text-[#f7e5d9] text-xs font-heading font-bold hover:bg-[#8a130c] transition-colors"
                    >
                      <span>{cat}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                  {searchResults.mukhiNumber && (
                    <Link
                      href={`/all-products?category=Rudraksha&mukhi=${searchResults.mukhiNumber}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#8a130c] text-[#f7e5d9] text-xs font-heading font-bold hover:bg-[#650a06] transition-colors"
                    >
                      <span>{searchResults.mukhiNumber} Mukhi Rudraksha</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Matching Products List */}
            {searchResults.products.length > 0 ? (
              <div className="p-2 space-y-1 max-h-[340px] overflow-y-auto">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#650a06]/70 px-2 py-1 block">
                  Matching Sacred Products ({searchResults.totalProductsCount})
                </span>
                {searchResults.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={() => setIsSearchFocused(false)}
                    className="flex items-center justify-between gap-3 p-2 rounded-xl hover:bg-[#650a06]/10 transition-all border border-transparent hover:border-[#650a06]/20 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-11 h-11 rounded-lg object-cover border border-[#650a06]/20 shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="min-w-0">
                        <span className="text-[9px] font-heading uppercase tracking-wider text-[#650a06]/70 block truncate">
                          {product.category}
                        </span>
                        <h4 className="text-xs font-heading font-bold text-[#650a06] group-hover:text-[#8a130c] truncate">
                          {product.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-heading font-bold text-xs text-[#650a06]">
                        {formatPrice(product.price)}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#650a06] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              /* No Matching Products */
              <div className="p-6 text-center text-[#650a06] space-y-2">
                <SearchX className="w-8 h-8 text-[#650a06]/50 mx-auto" />
                <p className="font-heading font-bold text-xs">
                  No sacred products found for "{debouncedQuery}"
                </p>
                <p className="text-[11px] text-[#3b120c]/70 font-medium">
                  Try searching for "5 Mukhi", "Saligram", "Singing Bowl", or "Gemstone".
                </p>
              </div>
            )}

            {/* Footer Link to All Results */}
            {searchResults.totalProductsCount > 0 && (
              <Link
                href={`/all-products?q=${encodeURIComponent(debouncedQuery)}`}
                onClick={() => setIsSearchFocused(false)}
                className="flex items-center justify-between px-4 py-2.5 bg-[#650a06] text-[#f7e5d9] hover:bg-[#8a130c] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-inner"
              >
                <span>View All {searchResults.totalProductsCount} Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        )}
      </div>
    );
  };

  const mukhiList = [1, 2, 3, 5, 6, 8, 9, 10, 11, 7, 12];

  const categories = [
    { title: "Rudraksha & Variants", sub: "Beads, Mala, Siddha Mala & Bracelets", icon: GiLotus, href: "/all-products?category=Rudraksha%20%26%20Variants" },
    { title: "Gandaki Saligram", sub: "Lakshmi Narayan & Sudarshan Shila", icon: GiByzantinTemple, href: "/all-products?category=Saligram" },
    { title: "Shankha & Ghanti", sub: "Vamavarti Conch & Panchdhatu Bell", icon: Sparkles, href: "/all-products?category=Shankha%20%26%20Ghanti" },
    { title: "Singing Bowls", sub: "7 Chakra Hand-Beaten Healing Bowls", icon: GiBowlSpiral, href: "/all-products?category=Singing%20Bowl" },
    { title: "Vedic Gemstones", sub: "Certified Pukhraj, Neelam & Navratna", icon: GiGemNecklace, href: "/all-products?category=Gemstone" },
    { title: "Statue & Sphatik", sub: "Quartz Shivling & Panchdhatu Idols", icon: GiSun, href: "/all-products?category=Statue%20%26%20Sphatik" },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="relative py-2 text-[11px] lg:text-xs xl:text-[13px] font-heading font-semibold text-[#650a06] hover:text-[#8a130c] transition-colors group whitespace-nowrap shrink-0 tracking-wide"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#650a06] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-[#fdfbf7] font-body text-[#3b120c] transition-all">
        
        {/* MAIN NAVBAR CONTAINER */}
        <div
          className={`w-full transition-all duration-300 border-b relative z-50 ${
            scrolled
              ? 'bg-[#f2eae7]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(101,10,6,0.12)] border-[#650a06]/20 py-2'
              : 'bg-[#f2eae7] border-[#650a06]/15 py-2.5 sm:py-3'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 xs:gap-2 sm:gap-6">
            
            {/* LEFT: Menu Button (Mobile) + Brand Logo */}
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-4 shrink-0">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-1 sm:p-2 -ml-1 sm:-ml-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 rounded-lg transition-colors focus:outline-none shrink-0 flex items-center justify-center"
                aria-label="Open Menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              </button>

              <Link href="/" className="flex items-center gap-2 shrink-0 group py-0.5">
                <img
                  src="/images/f123.png"
                  alt="Rudrantra Ventures Pvt. Ltd."
                  className="h-7 xs:h-8 sm:h-11 lg:h-15 w-auto object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
                  draggable={false}
                />
              </Link>
            </div>

            {/* CENTER: DESKTOP SEARCH INPUT BOX WITH LIVE DEBOUNCED SEARCH */}
            <div ref={searchContainerRef} className="hidden lg:flex flex-1 max-w-sm xl:max-w-md mx-4 relative z-[300]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/all-products?q=${encodeURIComponent(searchQuery.trim())}`;
                    setIsSearchFocused(false);
                  }
                }}
                placeholder="Search Rudraksha, Saligram, Gemstones..."
                className="w-full pl-10 pr-8 py-2 bg-[#fdfbf7] border border-[#650a06]/25 rounded-full text-xs text-[#3b120c] placeholder-[#650a06]/60 focus:outline-none focus:border-[#650a06] transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-[#650a06] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setDebouncedQuery('');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#650a06]/60 hover:text-[#650a06] p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {renderSearchDropdownPanel()}
            </div>

            {/* RIGHT: Actions (Currency, Account, Wishlist, Cart) */}
            <div className="flex items-center justify-end gap-1 xs:gap-1.5 sm:gap-2 shrink-0">
              
              {/* Currency Selector */}
              <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs font-heading font-semibold text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/20 rounded-md sm:rounded-lg px-1.5 py-0.5 sm:px-2 sm:py-1">
                <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#650a06] shrink-0" />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent border-none text-[10px] sm:text-xs text-[#650a06] font-bold focus:outline-none cursor-pointer p-0"
                >
                  <option value="NPR">NPR (रु)</option>
                  <option value="USD">USD ($)</option>
                  <option value="INR">INR (₹)</option>
                </select>
              </div>

              {/* Mobile Search Icon Button */}
              <button
                ref={mobileSearchBtnRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileSearchOpen((prev) => !prev);
                  setIsSearchFocused(true);
                }}
                className="lg:hidden p-1 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full shrink-0"
                aria-label="Toggle Search"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                className="hidden sm:block p-1.5 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full shrink-0"
                aria-label="Account"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link
                href="/wishlist"
                className="p-1 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full relative shrink-0"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#650a06] text-[#f7e5d9] text-[8px] sm:text-[9px] font-bold flex items-center justify-center border border-[#f7e5d9]">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1 sm:p-2 text-[#650a06] hover:text-[#8a130c] hover:bg-[#650a06]/10 transition-colors rounded-full relative shrink-0"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#8a130c] text-[#f7e5d9] text-[8px] sm:text-[9px] font-bold flex items-center justify-center animate-pulse border border-[#f7e5d9]">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE INTERACTIVE SEARCH INPUT BAR */}
        {isMobileSearchOpen && (
          <div ref={mobileSearchContainerRef} className="lg:hidden px-3 py-2 bg-[#f7e5d9] border-b border-[#650a06]/20 relative z-50 animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchFocused(true);
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/all-products?q=${encodeURIComponent(searchQuery.trim())}`;
                      setIsSearchFocused(false);
                      setIsMobileSearchOpen(false);
                    }
                  }}
                  placeholder="Search products, mukhis, categories..."
                  className="w-full pl-9 pr-8 py-2 bg-[#fdfbf7] border border-[#650a06]/30 rounded-xl text-xs text-[#3b120c] placeholder-[#650a06]/60 focus:outline-none focus:border-[#650a06]"
                />
                <Search className="w-4 h-4 text-[#650a06] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setDebouncedQuery('');
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#650a06]/60 hover:text-[#650a06] p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsMobileSearchOpen(false);
                  setIsSearchFocused(false);
                }}
                className="p-1.5 text-[#650a06] hover:bg-[#650a06]/10 rounded-lg transition-colors shrink-0 cursor-pointer"
                aria-label="Close Mobile Search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {renderSearchDropdownPanel()}
          </div>
        )}

        {/* SECONDARY DESKTOP MENU BAR — SILKY SMOOTH SLIDE UP / SLIDE DOWN */}
        <nav
          className={`hidden lg:block bg-[#f1e8e4] border-b border-[#650a06]/10 relative z-40 transition-all duration-300 ease-in-out transform origin-top ${
            showSecondaryNav
              ? 'max-h-16 opacity-100 translate-y-0 py-2 overflow-visible pointer-events-auto'
              : 'max-h-0 opacity-0 -translate-y-2 py-0 border-b-0 pointer-events-none overflow-hidden'
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 lg:gap-4 xl:gap-8 py-2">
            
            {/* 1. RUDRAKSHA BEADS — MEGA DROPDOWN ANCHORED UNDER RUDRAKSHA BEADS LINK */}
            <div className="relative group cursor-pointer py-1 shrink-0">
              <button className="text-[11px] lg:text-xs xl:text-[13px] font-heading font-semibold text-[#650a06] group-hover:text-[#8a130c] transition-colors flex items-center gap-1 whitespace-nowrap">
                <GiFlowerEmblem className="w-4 h-4 text-[#8a130c]" />
                <span>Rudraksha Beads</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#650a06]" />
              </button>

              {/* MEGA DROPDOWN PANEL - CONTINUOUS HOVER BRIDGE TOUCHING TOP-FULL */}
              <div className="absolute left-0 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out transform -translate-y-3 group-hover:translate-y-0 z-[250] origin-top-left w-[840px] max-w-[90vw]">
                <div className="bg-[#fdfbf7] border border-[#650a06]/25 shadow-[0_25px_60px_rgba(101,10,6,0.25)] rounded-2xl p-6 relative overflow-hidden backdrop-blur-2xl">
                  <div className="grid grid-cols-12 gap-6 items-start">
                    
                    {/* LEFT COLUMN: Subcategories List */}
                    <div className="col-span-4 border-r border-[#650a06]/15 pr-6 space-y-3">
                      <div className="pb-2 border-b border-[#650a06]/10">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/70">
                          Shop Collection
                        </span>
                        <h3 className="font-display text-lg text-[#650a06] font-bold mt-0.5">
                          Rudraksha &amp; Mukhi Beads
                        </h3>
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Nepal Origin Rudraksha Beads', href: '/all-products?category=Rudraksha' },
                          { name: '1 to 21 Mukhi Special Beads', href: '/all-products?category=Rudraksha&mukhi=1' },
                          { name: 'Siddha Mala & Combination', href: '/all-products?category=Rudraksha&subcategory=Siddha%20Mala' },
                          { name: 'Rudraksha Japa Mala (108 Beads)', href: '/all-products?category=Rudraksha&subcategory=Rudraksha%20Mala' },
                          { name: 'Silver Capped Bracelets & Kawach', href: '/all-products?category=Rudraksha&subcategory=Rudraksha%20Bracelet' },
                          { name: 'Consecrated Collector Items', href: '/all-products?category=Rudraksha&collector=true' },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between p-2 rounded-xl text-xs font-heading font-bold text-[#650a06] hover:bg-[#650a06]/10 hover:text-[#8a130c] transition-colors group/item"
                          >
                            <span className="uppercase tracking-wider">{item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/all-products?category=Rudraksha"
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#650a06] text-[#f7e5d9] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#8a130c] transition-colors shadow-sm"
                        >
                          <span>View All Rudraksha Beads →</span>
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Featured Products with Images */}
                    <div className="col-span-8 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#650a06]/10">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/70">
                          Featured Rudraksha Beads &amp; Malas
                        </span>
                        <span className="text-[11px] font-body text-[#650a06]/70 font-semibold">100% Pashupatinath Consecrated</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            id: 'rud-b-2',
                            name: '2 Mukhi Rudraksha Bead (Nepal)',
                            price: 62126,
                            image: 'https://images.pexels.com/photos/13013622/pexels-photo-13013622.jpeg?auto=compress&cs=tinysrgb&w=600',
                            badge: 'FEATURED',
                          },
                          {
                            id: 'rud-b-3',
                            name: '3 Mukhi Agni Rudraksha Bead',
                            price: 1586,
                            image: 'https://images.pexels.com/photos/18723427/pexels-photo-18723427.jpeg?auto=compress&cs=tinysrgb&w=600',
                            badge: 'BESTSELLER',
                          },
                          {
                            id: 'rud-b-7',
                            name: '7 Mukhi Mahalaxmi Rudraksha Bead',
                            price: 2850,
                            image: 'https://images.pexels.com/photos/31430346/pexels-photo-31430346.jpeg?auto=compress&cs=tinysrgb&w=600',
                            badge: 'WEALTH BEAD',
                          },
                        ].map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/product/${prod.id}`}
                            className="bg-[#ffffff] border border-[#650a06]/20 rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#650a06]/50 transition-all group/card flex flex-col"
                          >
                            <div className="h-32 w-full overflow-hidden relative bg-[#faf7f2]">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#650a06] text-[#f7e5d9] text-[9px] font-heading font-bold uppercase tracking-wider rounded-md shadow-xs">
                                {prod.badge}
                              </span>
                            </div>
                            <div className="p-3 flex-1 flex flex-col justify-between space-y-1.5">
                              <h4 className="text-xs font-heading font-bold text-[#650a06] group-hover/card:text-[#8a130c] transition-colors line-clamp-2 leading-snug">
                                {prod.name}
                              </h4>
                              <span className="font-heading font-bold text-xs text-[#650a06] block">
                                {formatPrice(prod.price)}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 2. SACRED CATEGORIES — MEGA DROPDOWN ANCHORED UNDER SACRED CATEGORIES LINK */}
            <div className="relative group cursor-pointer py-1 shrink-0">
              <button className="text-[11px] lg:text-xs xl:text-[13px] font-heading font-semibold text-[#650a06] group-hover:text-[#8a130c] transition-colors flex items-center gap-1 whitespace-nowrap">
                <span>Sacred Categories</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#650a06]" />
              </button>

              {/* MEGA DROPDOWN PANEL - CONTINUOUS HOVER BRIDGE TOUCHING TOP-FULL */}
              <div className="absolute left-0 lg:-left-28 xl:-left-16 top-full pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out transform -translate-y-3 group-hover:translate-y-0 z-[250] origin-top-left w-[840px] max-w-[90vw]">
                <div className="bg-[#fdfbf7] border border-[#650a06]/25 shadow-[0_25px_60px_rgba(101,10,6,0.25)] rounded-2xl p-6 relative overflow-hidden backdrop-blur-2xl">
                  <div className="grid grid-cols-12 gap-6 items-start">
                    
                    {/* LEFT COLUMN: Subcategories List */}
                    <div className="col-span-4 border-r border-[#650a06]/15 pr-6 space-y-2">
                      <div className="pb-2 border-b border-[#650a06]/10">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/70">
                          Divine Catalog
                        </span>
                        <h3 className="font-display text-lg text-[#650a06] font-bold mt-0.5">
                          Sacred Categories
                        </h3>
                      </div>

                      <div className="space-y-1">
                        {[
                          { name: 'Stone Pendants & Kawach', href: '/all-products?category=Gemstone' },
                          { name: 'Quartz & Sphatik Shivling', href: '/all-products?category=Statue%20%26%20Sphatik' },
                          { name: 'Sacred Yantras & Idols', href: '/all-products?category=Statue%20%26%20Sphatik' },
                          { name: 'Statues & Figurines', href: '/all-products?category=Statue%20%26%20Sphatik' },
                          { name: 'Gandaki Saligram | Shankha | Ghanti', href: '/all-products?category=Saligram' },
                          { name: 'Vastu & Fengshui Sacred Store', href: '/all-products?category=Pooja%20Samagri' },
                          { name: '7 Chakra Reiki Healing Bowls', href: '/all-products?category=Singing%20Bowl' },
                        ].map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="flex items-center justify-between p-2 rounded-xl text-xs font-heading font-bold text-[#650a06] hover:bg-[#650a06]/10 hover:text-[#8a130c] transition-colors group/item"
                          >
                            <span className="uppercase tracking-wider truncate">{item.name}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0 ml-1" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Featured Category Product Cards with Real Images */}
                    <div className="col-span-8 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#650a06]/10">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#650a06]/70">
                          ✨ Popular Shila, Gemstones &amp; Shrines
                        </span>
                        <Link href="/collections" className="text-xs font-heading font-bold text-[#650a06] hover:text-[#8a130c] flex items-center gap-1">
                          Explore All <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            id: 'sal-1',
                            name: 'Authentic Gandaki Shaligram Shila',
                            price: 12500,
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
                            badge: 'SACRED SHILA',
                          },
                          {
                            id: 'rud-m-1',
                            name: '108 Bead 5 Mukhi Nepal Japa Mala',
                            price: 4990,
                            image: 'https://images.pexels.com/photos/2297252/pexels-photo-2297252.jpeg?auto=compress&cs=tinysrgb&w=600',
                            badge: 'BESTSELLER',
                          },
                          {
                            id: 'rud-b-14',
                            name: '14 Mukhi Hanuman Rudraksha Bead',
                            price: 38500,
                            image: 'https://images.pexels.com/photos/34792315/pexels-photo-34792315.jpeg?auto=compress&cs=tinysrgb&w=600',
                            badge: 'COLLECTOR',
                          },
                        ].map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/product/${prod.id}`}
                            className="bg-[#ffffff] border border-[#650a06]/20 rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#650a06]/50 transition-all group/card flex flex-col"
                          >
                            <div className="h-32 w-full overflow-hidden relative bg-[#faf7f2]">
                              <img
                                src={prod.image}
                                alt={prod.name}
                                className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                              />
                              <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#650a06] text-[#f7e5d9] text-[9px] font-heading font-bold uppercase tracking-wider rounded-md shadow-xs">
                                {prod.badge}
                              </span>
                            </div>
                            <div className="p-3 flex-1 flex flex-col justify-between space-y-1.5">
                              <h4 className="text-xs font-heading font-bold text-[#650a06] group-hover/card:text-[#8a130c] transition-colors line-clamp-2 leading-snug">
                                {prod.name}
                              </h4>
                              <span className="font-heading font-bold text-xs text-[#650a06] block">
                                {formatPrice(prod.price)}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* DIRECT NAV LINKS */}
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/consultation">Consultation</NavLink>
            <NavLink href="/faq">FAQ</NavLink>

            {/* 3. MORE DROPDOWN */}
            <div className="relative group cursor-pointer py-1 shrink-0">
              <button className="text-[11px] xl:text-xs font-heading font-bold text-[#650a06] bg-[#650a06]/10 border border-[#650a06]/30 hover:bg-[#650a06] hover:text-[#f7e5d9] transition-all px-3 py-1 rounded-lg flex items-center gap-1.5 whitespace-nowrap">
                <Layers className="w-3.5 h-3.5" />
                <span>More</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="absolute top-full right-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[200]">
                <div className="bg-[#fdfbf7] border border-[#650a06]/25 shadow-xl rounded-xl p-2 w-48 space-y-1">
                  <Link
                    href="/customize-order"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#650a06]/10 text-[#650a06] transition-colors text-xs font-heading font-bold group/sub"
                  >
                    <MdDesignServices className="w-4 h-4 text-[#650a06] shrink-0 group-hover/sub:scale-110 transition-transform" />
                    <span>Custom Order</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-[#650a06]/10 text-[#650a06] transition-colors text-xs font-heading font-bold group/sub"
                  >
                    <Mail className="w-4 h-4 text-[#650a06] shrink-0 group-hover/sub:scale-110 transition-transform" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header>
    </>
  );
}