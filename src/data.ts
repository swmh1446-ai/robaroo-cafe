/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, MenuCategory, Review, GalleryItem, TableType } from "./types";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "artisanal-coffee",
    name: "Artisanal Espresso & Brews",
    description: "Espressos and slow-pours roasted with high-altitude Arabica beans from Chikmagalur.",
    icon: "Coffee",
  },
  {
    id: "signature-sips",
    name: "Signature Creations",
    description: "Exclusive blends combining royal Hyderabadi infusions with contemporary mixology.",
    icon: "Sparkles",
  },
  {
    id: "gourmet-bites",
    name: "Gourmet Platters & Bites",
    description: "Artisanal light lunches and savory creations styled by Michelin-inspired gastronomers.",
    icon: "Flame",
  },
  {
    id: "luxury-patisserie",
    name: "Elite Patisserie",
    description: "Gilded pastries, delicate mousses, and warm crumbles baked fresh hourly by our chef.",
    icon: "Cake",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Artisanal Coffee
  {
    id: "gold-standard-espresso",
    name: "Golden Crema Espresso",
    category: "artisanal-coffee",
    price: 345,
    description: "Double shot of single-origin AAA Arabica pulled over a delicate flake of edible gold, presenting dense notes of hazelnut and dark chocolate.",
    image: "https://images.unsplash.com/photo-151097252790b-af4f42dfb963?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic", "Signature"],
    caffeineLevel: "High",
    roastPreset: "Dark & Bold",
  },
  {
    id: "nizam-rose-latte",
    name: "Nizam's Rose & Cardamom Gold Latte",
    category: "artisanal-coffee",
    price: 425,
    description: "Creamy foam infused with premium organic rose water, subtle ground green cardamom, and steam-extracted espresso. Crowned with organic petals.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic", "Best Seller"],
    caffeineLevel: "Medium",
    roastPreset: "Medium & Smooth",
  },
  {
    id: "cold-brew-reserve",
    name: "Kyoto Drip Cold Brew Reserve",
    category: "artisanal-coffee",
    price: 395,
    description: "Slowly dripped over ice for 18 hours through a custom glass tower, yielding a silky, zero-acid extract with a bold, whiskey-like aroma.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic", "Signature"],
    caffeineLevel: "High",
    roastPreset: "Medium & Smooth",
  },
  {
    id: "pour-over-chikh",
    name: "Chikmagalur Micro-Lot V60",
    category: "artisanal-coffee",
    price: 380,
    description: "Exquisite hand-poured coffee utilizing filter techniques that highlight bright floral notes, honey-like sweetness, and a crisp clean citrus finish.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic"],
    caffeineLevel: "High",
    roastPreset: "Light & Fruity",
  },

  // Signature Sips
  {
    id: "royal-irani-affogato",
    name: "Royal Irani Cardamom Affogato",
    category: "signature-sips",
    price: 495,
    description: "A rich reduction of classical Hyderabadi Irani Chai cream, served alongside a hot double-shot of gold-rich espresso. A perfect luxury marriage.",
    image: "https://images.unsplash.com/photo-1594911774802-8822a707cbb3?q=80&w=600&auto=format&fit=crop",
    tags: ["Signature", "Best Seller"],
    caffeineLevel: "High",
    roastPreset: "Dark & Bold",
  },
  {
    id: "coconut-charcoal-frappe",
    name: "Midnight Obsidian Frappé",
    category: "signature-sips",
    price: 450,
    description: "Activated organic coconut charcoal blended with double ristretto, sweet organic coconut cream, and Madagascar vanilla beans.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic", "Gluten-Free"],
    caffeineLevel: "Medium",
    roastPreset: "Medium & Smooth",
  },
  {
    id: "rose-sparkle-tonic",
    name: "Sparkling Lavender Espresso Tonic",
    category: "signature-sips",
    price: 410,
    description: "Premium French lavender extraction combined with fine elderflower tonic water, cold-extracted espresso, and a citrus zest over crystal clear ice.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
    tags: ["Organic"],
    caffeineLevel: "Medium",
    roastPreset: "Light & Fruity",
  },

  // Gourmet Bites
  {
    id: "truffle-avocado-sourdough",
    name: "Truffle Glazed Avocado Sourdough",
    category: "gourmet-bites",
    price: 645,
    description: "Slow-fermented artisan sourdough toasted with creamy Hass avocado smash, white truffle oil, imported baby feta, toasted pine nuts, and edible micro-herbs.",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop",
    tags: ["Veg", "Best Seller"],
    caffeineLevel: "None",
    roastPreset: "None",
  },
  {
    id: "saffron-chicken-brioche",
    name: "Kashmiri Saffron Chicken Brioche",
    category: "gourmet-bites",
    price: 725,
    description: "Juicy pulled chicken thighs simmered in aromatic saffron aioli, dynamic dill, and micro-greens, clamped inside a buttery brioche roll.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop",
    tags: ["Non-Veg"],
    caffeineLevel: "None",
    roastPreset: "None",
  },
  {
    id: "burrata-heirloom-flatbread",
    name: "Burrata & Golden Peach Flatbread",
    category: "gourmet-bites",
    price: 685,
    description: "Rustic hand-crafted dynamic flatbread layered with fresh Italian burrata, grilled yellow peaches, fresh basil oil, and wild forest honey glaze.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop",
    tags: ["Veg"],
    caffeineLevel: "None",
    roastPreset: "None",
  },

  // Elite Patisserie
  {
    id: "belgian-gateau",
    name: "24-Karat Belgian Royal Gateau",
    category: "luxury-patisserie",
    price: 520,
    description: "Layers of 72% dark Belgian cocoa ganache and hazelnut praline disk, dressed in shiny chocolate mirror glaze and genuine 24-karat gold leaf flakes.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    tags: ["Veg", "Best Seller"],
    caffeineLevel: "None",
    roastPreset: "None",
  },
  {
    id: "pistachio-kunafa-croissant",
    name: "Crisp Pistachio Kunafa Croissant",
    category: "luxury-patisserie",
    price: 480,
    description: "Golden, flaky double-baked pastry filled with rich pistachio paste and crunchy toasted kunafa strands, finished with orange blossom cardamom glaze.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    tags: ["Veg", "Signature"],
    caffeineLevel: "None",
    roastPreset: "None",
  },
  {
    id: "lavender-honey-macarons",
    name: "Elysian Lavender & Lychee Macarons",
    category: "luxury-patisserie",
    price: 450,
    description: "Three delicate French macaron shells containing floral organic lavender ganache and a concentrated splash of sweet, aromatic Himalayan lychee honey.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=600&auto=format&fit=crop",
    tags: ["Veg", "Gluten-Free"],
    caffeineLevel: "None",
    roastPreset: "None",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Pranavi Rao",
    role: "Culinary Editor, Elite Living",
    tagline: "Unparalleled Elegance",
    rating: 5,
    text: "Roobaroo Cafe is not just about coffee; it is a full-sensory theatrical masterpiece. The cardamom aroma floating in the air, the gold dust glistening on your warm latte, and the absolute architectural perfection. It easily rivals the luxury cafes of London and Milan.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    date: "2 days ago",
  },
  {
    id: "review-2",
    author: "Aditya Verma",
    role: "President, Hyderabad Coffee Club",
    tagline: "The Zenith of Single-Origins",
    rating: 5,
    text: "The Kyoto Drip Tower here extracts the cleanest, most majestic cold brew I've ever tasted in India. The baristas are true taste curators who guide you through estate profiles. Their Hyderabad Nizam cardamom Rose Latte is an instant luxury classic.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    date: "1 week ago",
  },
  {
    id: "review-3",
    author: "Zoya Fatima",
    role: "Regular Premium Designer",
    tagline: "A Sanctuary in Banjara Hills",
    rating: 5,
    text: "I reserve 'The Library Chamber' every Tuesday for reading. The atmosphere of soft dim lighting, classic wooden pillars, and unparalleled glass walls looking at lush greens is magical. Don't leave without tasting their Pistachio Kunafa Croissant!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    date: "3 weeks ago",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    title: "Perfect Pour-Over Craft",
    caption: "Meticulous single-estate brewing at precise temperatures.",
  },
  {
    id: "gal-2",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    title: "The Garden Solarium",
    caption: "A bright glass dome harmonized by verdant tropical greens.",
  },
  {
    id: "gal-3",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    title: "Fresh Baked Artisanal Classics",
    caption: "Flaky textures and warm aromatic cardamom hints.",
  },
  {
    id: "gal-4",
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    title: "Master Barista Corner",
    caption: "Where extraction becomes a fine luxury discipline.",
  },
  {
    id: "gal-5",
    url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
    title: "Cozy Marble Interiors",
    caption: "Intimate conversations under bespoke warm lighting.",
  },
  {
    id: "gal-6",
    url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
    title: "Exquisite Signature Tonic",
    caption: "Refreshing layered tonic blended with organic botanical shrubs.",
  },
];

export const TABLE_TYPES: TableType[] = [
  {
    id: "royal-library",
    name: "The Royal Library Chamber",
    capacity: 2,
    description: "Surrounded by mahogany vintage bookshelves and warm brass lamps. Perfect for private literature retreats, deep intellectual tasks, or intimate coffees.",
    features: ["Private dim quiet zone", "Bespoke mahogany desk", "Power outlets", "Personal bell call service"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "glass-solarium",
    name: "The Garden Glass Solarium",
    capacity: 4,
    description: "Dine under a glorious panoramic glass star-dome surrounded by lush orchids and monstera lanes. Bathed in premium natural lighting for memorable aesthetic brunches.",
    features: ["Starry sky view", "Surrounding rare plants", "Natural sunlight", "Premium velvet couches"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "monarch-fireplace",
    name: "The Monarch Fireplace Lounge",
    capacity: 6,
    description: "An grand velvet couch sanctuary positioned next to our stone-hearth wood fireplace. Reserved for VIP groups looking to spend cozy luxury evenings in Banjara Hills.",
    features: ["Warm grand fireplace", "Plush premium seating", "Dedicated steward", "Siphon coffee demonstration"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  },
];

// Coffee Selector Data
export const BREW_BASES = [
  { id: "espresso", name: "Artisanal Single-Origin Espresso", desc: "Bold, 2 Shots of AAA Arabica", cost: 0, scaleRate: 0.8 },
  { id: "kyoto-cold", name: "Kyoto Drip 18-Hour Extract", desc: "Whiskey-peated, silky, low acid", cost: 50, scaleRate: 1.0 },
  { id: "pour-over", name: "Hand-poured Micro-lot Extract", desc: "Bright, floral, tea-like consistency", cost: 30, scaleRate: 0.9 },
];

export const BREW_MILKS = [
  { id: "none", name: "Pure Black (No Milk)", desc: "Maintain origin purity", cost: 0 },
  { id: "clotted-ghee", name: "Frother-Whisked Cream", desc: "Rich royal body", cost: 50 },
  { id: "organic-almond", name: "Artisanal Homemade Spiced Almond Milk", desc: "Cardamom & vanilla hints", cost: 60 },
  { id: "macadamia", name: "Silky Cold-Pressed Macadamia Milk", desc: "Buttery, nutty, modern finish", cost: 70 },
];

export const BREW_SYRUPS = [
  { id: "none", name: "Unsweetened", desc: "True origin flavors", cost: 0 },
  { id: "nizam-rose", name: "Royal Cardamom Rose Nectar", desc: "Our signature gold infusion", cost: 40 },
  { id: "kashmiri-saffron", name: "Himalayan Saffron Honey", desc: "Exquisite earthy floral syrup", cost: 80 },
  { id: "salted-praline", name: "Salted Pistachio Praline Sauce", desc: "Warm roasted cream", cost: 50 },
];

// Quirky sensory aroma quiz
export const AROMA_QUIZ_QUESTIONS = [
  {
    id: "q1",
    question: "Choose your favorite atmosphere for relaxation:",
    options: [
      { text: "A quiet vintage library with the scent of old parchment", rating: "bold" },
      { text: "A sparkling botanical greenhouse right after fresh rain", rating: "fruity" },
      { text: "A royal palace lobby with candles, velvet, and faint incense", rating: "spicy" },
    ],
  },
  {
    id: "q2",
    question: "How do you prefer your chocolate treats?",
    options: [
      { text: "Intense, rare, 85% single-origin dark chocolate", rating: "bold" },
      { text: "Creamy white chocolate infused with raspberry and lavender", rating: "fruity" },
      { text: "Warm cinnamon-spiced milk chocolate fudge", rating: "spicy" },
    ],
  },
  {
    id: "q3",
    question: "What is your main goal for today's coffee journey?",
    options: [
      { text: "Deep concentration, razor-focus, and mental clarity", rating: "bold" },
      { text: "An elegant, peaceful sensory exploration of rich florals", rating: "fruity" },
      { text: "Comfort, warm conversation, and royal nostalgic indulgence", rating: "spicy" },
    ],
  },
];
