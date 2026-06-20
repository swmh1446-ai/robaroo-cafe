/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tags: string[]; // e.g., ["Veg", "Non-Veg", "Organic", "Signature", "Gluten-Free"]
  caffeineLevel?: "None" | "Medium" | "High";
  roastPreset?: "Light & Fruity" | "Medium & Smooth" | "Dark & Bold" | "None";
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Dynamic icon name matching lucide
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
  tagline: string;
  role: string; // e.g., "Regular Guest", "Gastronomy Blogger", "Hyderabad Elite critic"
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
}

export interface TableType {
  id: string;
  name: string;
  capacity: number;
  description: string;
  features: string[];
  image: string;
}

export interface BrewCombination {
  base: string;
  milk: string;
  syrup: string;
  strength: number; // 1 to 4 stars
  temp: "hot" | "iced";
}
