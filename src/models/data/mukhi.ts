import { GiSun, GiMoon, GiFlame, GiBookCover, GiHeartBeats, GiShield, GiLightningTear, GiThirdEye } from 'react-icons/gi';

const beadImages = [
  "https://himalayarudraksh.online/cdn/shop/files/1-13-mukhi-shiv-shakti-rudraksha-mala-nepal-origin-499218.png?v=1750001216&width=3840",
  "https://rudrakshashop.in/cdn/shop/files/shopping.webp?v=1765300308",
  "https://m.media-amazon.com/images/I/51orjIrx2pL._AC_UF894,1000_QL80_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkJz5pJyZzfhXm_VJs62WVv4LjKifyYNOq0PdgJ3zTUJ0J-G-L4BFHsrR&s=10"
];

export const mukhis = [
  { n: 1, deity: "Shiva", planet: "Sun", benefits: "Supreme consciousness, liberation, moksha", whom: "Monks, seekers of enlightenment", icon: GiSun },
  { n: 2, deity: "Ardhanarishvara", planet: "Moon", benefits: "Unity, emotional balance, marital harmony", whom: "Couples, emotional healers", icon: GiMoon },
  { n: 3, deity: "Agni", planet: "Mars", benefits: "Burn past karma, boost confidence", whom: "Those facing obstacles, low self-esteem", icon: GiFlame },
  { n: 4, deity: "Brahma", planet: "Mercury", benefits: "Knowledge, creativity, speech power", whom: "Students, teachers, writers", icon: GiBookCover },
  { n: 5, deity: "Kalagni Rudra", planet: "Jupiter", benefits: "Mental clarity, general health, prosperity", whom: "Everyone — most universal bead", icon: GiHeartBeats },
  { n: 6, deity: "Kartikeya", planet: "Venus", benefits: "Willpower, courage, artistic abilities", whom: "Artists, warriors, those seeking discipline", icon: GiShield },
  { n: 7, deity: "Mahalakshmi", planet: "Saturn", benefits: "Wealth, good luck, remove misfortune", whom: "Business people, those facing financial blocks", icon: GiLightningTear },
  { n: 8, deity: "Ganesha", planet: "Rahu", benefits: "Remove obstacles, success, intelligence", whom: "Entrepreneurs, those facing repeated failures", icon: GiShield },
  { n: 9, deity: "Durga", planet: "Ketu", benefits: "Power, fearlessness, energy", whom: "Those seeking courage and vitality", icon: GiLightningTear },
  { n: 10, deity: "Vishnu", planet: "All planets", benefits: "Protection, peace, all-round prosperity", whom: "Those needing complete divine protection", icon: GiShield },
  { n: 11, deity: "Hanuman", planet: "All planets", benefits: "Meditation, right decisions, adventure", whom: "Yogis, travelers, those in dangerous work", icon: GiThirdEye },
  { n: 12, deity: "Sun (Aditya)", planet: "Sun", benefits: "Leadership, self-confidence, brilliance", whom: "Leaders, politicians, executives", icon: GiSun },
  { n: 13, deity: "Indra", planet: "Venus", benefits: "Desires fulfilled, charisma, attraction", whom: "Those seeking worldly pleasures and success", icon: GiHeartBeats },
  { n: 14, deity: "Shiva", planet: "Saturn", benefits: "Intuition, third eye opening, protection", whom: "Advanced spiritual practitioners", icon: GiThirdEye },
].map((m, i) => ({ ...m, image: beadImages[i % beadImages.length] }));

export type Mukhi = (typeof mukhis)[number];