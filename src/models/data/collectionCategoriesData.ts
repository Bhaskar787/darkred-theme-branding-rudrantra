export interface CollectionCategoryMeta {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  subcategory?: string;
  bannerImage: string;
  heroBadge: string;
  description: string;
  longDescription: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  bgStyle: string;
  textColor: string;
  accentColor: string;
}

export const COLLECTION_CATEGORIES_META: CollectionCategoryMeta[] = [
  {
    id: 'rudraksha-beads',
    slug: 'rudraksha-beads',
    title: 'Certified Rudraksha Beads (1 to 21 Mukhi)',
    shortTitle: 'Rudraksha Beads',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Beads',
    bannerImage: 'https://images.unsplash.com/photo-1685419367862-1dd40253bf2b?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Pashupatinath Consecrated',
    description: 'Explore certified natural Nepal Mukhi seeds from Ek Mukhi to 21 Mukhi, each blessed with distinct planetary powers and divine grace.',
    longDescription: 'Our natural Nepal Rudraksha beads are hand-picked directly from high-altitude trees in the Arun Valley of Nepal. Every single bead undergoes rigorous X-Ray density tests and is individually certified by authorized gemological laboratories. Before shipping, each bead is consecrated through ancient Vedic rituals at the holy Pashupatinath Shrine in Kathmandu.',
    benefits: [
      '100% Genuine Natural Nepal Origin Seeds',
      'Individual X-Ray Density Lab Certificate',
      'Pashupatinath Temple Abhishekam Consecration',
      'Lifetime Authenticity Guarantee'
    ],
    faqs: [
      {
        q: 'How do I choose the right Mukhi bead for my needs?',
        a: 'Each Mukhi corresponds to specific planetary energies and deities. You can choose based on your Kundali birth chart, specific goals (wealth, health, focus), or consult our resident Acharyas.'
      },
      {
        q: 'Are these beads genuine Nepal origin?',
        a: 'Yes! All our Mukhi beads come directly from Nepal. We include an X-Ray laboratory certificate verifying internal natural seed cavities.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'rudraksha-mala',
    slug: 'rudraksha-mala',
    title: 'Sacred Rudraksha Japa & Meditation Malas',
    shortTitle: 'Rudraksha Mala',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Mala',
    bannerImage: 'https://m.media-amazon.com/images/I/815Ynn0E9wL._AC_UF1000,1000_QL80_.jpg',
    heroBadge: '108+1 Sacred String',
    description: '108-bead Japa Malas for daily mantra chanting, meditation, and spiritual energy accumulation.',
    longDescription: 'Crafted with precision according to ancient scriptural guidelines, our Japa Malas feature 108 authentic beads plus 1 Bindu (Guru bead). Strung on durable multi-ply silk thread with traditional knots between each bead to ensure smooth counting during Japa meditation.',
    benefits: [
      'Authentic 108+1 Bead Configuration',
      'Hand-knotted for smooth mantra counting',
      'Purified with holy Gangajal',
      'Enhances concentration & inner peace'
    ],
    faqs: [
      {
        q: 'Why are there 108 beads in a Japa Mala?',
        a: 'In Vedic astronomy and spirituality, 108 is the sacred number representing the 108 Upanishads, 108 energy channels (Nadis), and 12 zodiac signs across 9 planets.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'siddha-mala',
    slug: 'siddha-mala',
    title: 'Siddha Mala & Power Combinations (1–14 Mukhi)',
    shortTitle: 'Siddha Mala',
    category: 'Rudraksha & Variants',
    subcategory: 'Siddha Mala',
    bannerImage: 'https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840',
    heroBadge: 'Ultimate Power Combination',
    description: 'The supreme energetic masterpiece containing 1 through 14 Mukhi beads, Gauri Shankar, and Ganesh Rudraksha for complete life mastery.',
    longDescription: 'The Siddha Mala is universally recognized as the most powerful Rudraksha combination in existence. Mentioned in the Akshamalika Upanishad, it harmonizes all 9 astrological planets, activates all 7 chakras, and shields the wearer from all directions.',
    benefits: [
      'Complete 9-Planetary Balancing Shield',
      'Activates & Aligns All 7 Chakras',
      'Consecrated by Vedic Pandits at Pashupatinath',
      'Includes individual X-Ray report for every bead'
    ],
    faqs: [
      {
        q: 'Who should wear a Siddha Mala?',
        a: 'Anyone seeking overall prosperity, spiritual elevation, protection from planetary afflictions, and high-level leadership success can wear a Siddha Mala.'
      }
    ],
    bgStyle: 'bg-[#650a06]',
    textColor: 'text-[#f7e5d9]',
    accentColor: '#f7e5d9',
  },
  {
    id: 'rudraksha-bracelet',
    slug: 'rudraksha-bracelet',
    title: 'Handcrafted Rudraksha Bracelets & Wristlets',
    shortTitle: 'Rudraksha Bracelets',
    category: 'Rudraksha & Variants',
    subcategory: 'Rudraksha Bracelet',
    bannerImage: 'https://japam.in/cdn/shop/files/Gold_plated_Modern_Bracelet_and_Brown_Rudraksha_Mala_combo.jpg?v=1726560930&width=1214',
    heroBadge: 'Silver Capped Elegance',
    description: 'Handcrafted wristlets with sterling silver caps, natural Nepal seeds, and ergonomic durable clasps for daily wear.',
    longDescription: 'Combining contemporary style with sacred spiritual potency, our Rudraksha bracelets allow you to keep protective cosmic vibrations with you wherever you go. Made with pure 925 sterling silver capping and genuine Nepal seeds.',
    benefits: [
      '925 Sterling Silver Capping & Chains',
      'Modern, comfortable everyday design',
      'Continuous energetic wrist contact',
      'Adjustable sizes for perfect fit'
    ],
    faqs: [
      {
        q: 'Can I wear the bracelet on any hand?',
        a: 'Yes, Rudraksha bracelets can be worn on either wrist. The right wrist is traditional for active energy manifestation, while the left is for receptive calming energy.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'combinations-kawach',
    slug: 'combinations-kawach',
    title: 'Sacred Combinations & Astrological Kawach',
    shortTitle: 'Sacred Combinations',
    category: 'Rudraksha & Variants',
    subcategory: 'Combination & Kawach',
    bannerImage: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    heroBadge: 'Synergistic Astro Power',
    description: 'Multi-bead energetic sets custom-formulated for health, wealth, education, career, and planetary dosha remediation.',
    longDescription: 'Sacred Kawachs combine specific Mukhi beads that amplify each other’s bio-electric frequencies. Whether you need wealth enhancement (Dhan Laxmi), health restoration (Swasthya), or academic success (Saraswati), our Kawachs offer targeted spiritual solutions.',
    benefits: [
      'Astrologically Formulated Mukhi Trios',
      'Targeted Intentional Energies',
      'Silver Capped Pendant Strings',
      'Lab Certified & Blessed'
    ],
    faqs: [
      {
        q: 'How do combinations work better than single beads?',
        a: 'When specific Mukhis are combined together in exact geometric order, their electromagnetic fields synergize to create an amplified aura shield.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'saligram',
    slug: 'saligram',
    title: 'Authentic Gandaki Saligram Shilas',
    shortTitle: 'Gandaki Saligram',
    category: 'Saligram',
    bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    heroBadge: 'Swayambhu Lord Vishnu',
    description: 'Authentic non-carved Saligram Shilas naturally formed in the sacred Gandaki riverbed of Mustang, Nepal.',
    longDescription: 'Saligram Shilas are natural ammonite fossil stones found exclusively in the Kali Gandaki River of Nepal. According to the Skanda Purana, Lord Vishnu resides directly in genuine Saligram Shilas. They require no ritual consecration (Prana Pratishtha) as they are inherently self-manifested (Swayambhu).',
    benefits: [
      'Direct Sourced from Kali Gandaki, Nepal',
      '100% Natural, Non-Carved Sacred Formations',
      'Brings Lakshmi-Narayan Blessings to Home Altars',
      'Verified Natural Ammonite Impressions'
    ],
    faqs: [
      {
        q: 'Do Saligram Shilas require special worship rules?',
        a: 'Saligrams love clean altars, daily bathing with Gangajal or water, and offering of fresh Tulsi leaves. They bring immense harmony to any home.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'shankha-ghanti',
    slug: 'shankha-ghanti',
    title: 'Sacred Ritual Shankha & Panchdhatu Ghanti',
    shortTitle: 'Shankha & Ghanti',
    category: 'Shankha & Ghanti',
    bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7r-xBROYk0kcVnBqjSal_5jbGHZUO8ATM2uAG_HNzgGCsnNjh4wNMoEl&s=10',
    heroBadge: 'Acoustic Purification',
    description: 'Natural ocean blowing conch shells and hand-cast Panchdhatu temple bells that purify home acoustics and dispel negative vibrations.',
    longDescription: 'Sound is the primary vibration (Nada Brahma) of the universe. Our ritual Shankhas produce deep resonant Om acoustic frequencies when blown, while our hand-carved Panchdhatu temple bells emit bell tones that clear stagnant mental and environmental energy.',
    benefits: [
      'Natural Ocean Conch Shells',
      '5-Metal Panchdhatu Traditional Alloy',
      'Acoustically Tested Resonant Frequencies',
      'Handcrafted Temple Bell Designs'
    ],
    faqs: [
      {
        q: 'What is the difference between Vamavarti and Dakshinavarti Shankha?',
        a: 'Vamavarti Shankhas open to the left and are blown during rituals for acoustic purification. Dakshinavarti Shankhas open to the right and are sacred wealth idols worshipped for Goddess Lakshmi.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'singing-bowls',
    slug: 'singing-bowls',
    title: '432Hz Himalayan Sound Singing Bowls',
    shortTitle: 'Singing Bowls',
    category: 'Singing Bowl',
    bannerImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Sound Therapy & Meditation',
    description: '7-metal hand-hammered Tibetan & Nepali bronze singing bowls tuned to 432Hz harmonic healing frequencies.',
    longDescription: 'Hand-hammered by traditional Himalayan artisans over days of dedicated forging, our 7-metal singing bowls resonate rich, complex overtones. Ideal for chakra healing, yoga studios, sound baths, and deep meditation state entry.',
    benefits: [
      'Hand-Hammered 7-Metal Alloy Composition',
      'Tuned to 432Hz Natural Healing Frequency',
      'Includes Rosewood Striker & Silk Cushion',
      'Sustained Resonance > 40 Seconds'
    ],
    faqs: [
      {
        q: 'How do singing bowls promote healing?',
        a: 'The acoustic sound waves produced by 7-metal singing bowls interact with brainwaves, shifting them into relaxed Theta & Alpha states, releasing stress and physical tension.'
      }
    ],
    bgStyle: 'bg-[#650a06]',
    textColor: 'text-[#f7e5d9]',
    accentColor: '#f7e5d9',
  },
  {
    id: 'gemstones',
    slug: 'gemstones',
    title: 'Lab-Certified Natural Vedic Gemstones',
    shortTitle: 'Certified Gemstones',
    category: 'Gemstone',
    bannerImage: 'https://cdn.dotpe.in/longtail/store-items/6210244/b1HKHWj3.png',
    heroBadge: 'Unheated & Untreated',
    description: '100% natural, unheated Jyotish Vedic gemstones certified by leading gemological laboratories (IGI / GIA).',
    longDescription: 'In Vedic Jyotish astrology, gemstones act as cosmic reflectors for planetary light rays. We offer only untreated, unheated, eye-clean gemstones with maximum astrological potency, complete with international lab certificates.',
    benefits: [
      '100% Natural, Unheated & Untreated',
      'GIA / IGI International Lab Certificate',
      'Tailored Astrological Weight Recommendations',
      'Set in Custom 925 Silver or Gold Mounts'
    ],
    faqs: [
      {
        q: 'Why must Vedic gemstones be untreated?',
        a: 'Heat treatment or glass filling destroys the natural crystalline crystal lattice, rendering the gemstone astrologically inert. Only untreated gems transmit planetary prana.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'statue-sphatik',
    slug: 'statue-sphatik',
    title: 'Himalayan Sphatik & Sacred Panchdhatu Idols',
    shortTitle: 'Statue & Sphatik',
    category: 'Statue & Sphatik',
    bannerImage: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    heroBadge: 'Crystal & Panchdhatu Murtis',
    description: 'Flawless transparent Himalayan Quartz Crystal (Sphatik) Shivlings, Shree Yantras, and brass Panchdhatu murtis.',
    longDescription: 'Sphatik (Quartz Crystal) is prized in Tantra and Purana as the purest earthly vessel for divine light. It absorbs heat and negative electromagnetic radiation, filling your sanctuary with serene, cool vibration.',
    benefits: [
      '100% Pure Natural Himalayan Sphatik Quartz',
      'Cools environmental temperature & absorbs stress',
      'Artisan-cast Panchdhatu metal murtis',
      'Lab Certified authentic crystal'
    ],
    faqs: [
      {
        q: 'How do I test if Sphatik is natural quartz?',
        a: 'Natural Sphatik feels noticeably cool to the touch even in warm weather and sparks faintly in total darkness when rubbed together.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
  {
    id: 'pooja-samagri',
    slug: 'pooja-samagri',
    title: 'Consecrated Pooja Samagri & Care Kits',
    shortTitle: 'Pooja Samagri',
    category: 'Pooja Samagri',
    bannerImage: 'https://www.hinduismtoday.com/wp-content/uploads/2023/06/350_rudraksha-links-1024x682.jpg',
    heroBadge: 'Pashupatinath Consecrated',
    description: 'Pure Himalayan Sandalwood paste, Holy Gangajal, Bhasma Vibhuti, Sandalwood Oil & ritual Abhishekam care kits.',
    longDescription: 'Proper care and periodic energization keep your Rudraksha beads, Saligrams, and idols vibrant. Our Pooja Samagri kits contain organic, consecrated ritual ingredients sourced directly from Kathmandu and Gangotri.',
    benefits: [
      'Direct Sourced Organic Ingredients',
      'Blessed at Pashupatinath Temple',
      'Complete Rudraksha Oil Maintenance Essentials',
      'Sealed Holy Waters & Pure Chandan'
    ],
    faqs: [
      {
        q: 'How often should I condition my Rudraksha with oil?',
        a: 'We recommend cleaning your Rudraksha with Gangajal and applying pure Sandalwood oil once every 2-3 weeks to maintain seed moisture and luster.'
      }
    ],
    bgStyle: 'bg-[#f7e5d9]',
    textColor: 'text-[#650a06]',
    accentColor: '#650a06',
  },
];
