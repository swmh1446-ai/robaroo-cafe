/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Search, Sparkles, Filter, X, Coffee, Eye, ArrowRight, RefreshCw } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS } from "../data";
import { MenuItem } from "../types";

// Helper to resolve dynamic icons or default to Coffee
const DynamicIcon = ({ name, className }: { name: string; className: string }) => {
  const IconComponent = (LucideIcons as any)[name] || Coffee;
  return <IconComponent className={className} />;
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [tagFilter, setTagFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Trigger simulated loading state to showcase custom skeleton panels when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery, tagFilter]);

  const handleManualRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 850);
  };

  const tagsList = ["all", "Signature", "Best Seller", "Veg", "Organic", "Gluten-Free"];

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = tagFilter === "all" || item.tags.includes(tagFilter);
    return matchesCategory && matchesSearch && matchesTag;
  });

  return (
    <section id="menu" className="py-24 bg-luxury-ebony relative">
      <div className="absolute inset-y-0 left-0 w-[350px] bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase">
              Gourmet Selection
            </span>
            <button
              onClick={handleManualRefresh}
              className="px-2.5 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-[10px] tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-ebony transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              title="Trigger high-end simulated loading sequence"
            >
              <RefreshCw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Fetching..." : "Fetch Reload"}
            </button>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold leading-tight mb-4">
            The Digital Artisanal Menu
          </h2>
          <p className="text-sm md:text-base text-coffee-beige/70 font-light leading-relaxed">
            Delight on bespoke cups curated alongside local royal spice infusions and organic dairy, 
            crafted to transport Hyderabad coffee lovers into an era of majestic taste.
          </p>
        </div>

        {/* Filter & Search Bar Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          
          {/* Category Tabs inside standard horizontal bar */}
          <div className="lg:col-span-8 flex flex-nowrap overflow-x-auto gap-3 pb-3 lg:pb-0 slider-scrollbar" id="category-scroller">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-luxury-gold text-luxury-ebony shadow-md shadow-luxury-gold/15"
                  : "bg-luxury-ebony/60 text-coffee-cream border border-luxury-gold/10 hover:border-luxury-gold/40"
              }`}
            >
              All Delicacies
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-luxury-gold text-luxury-ebony shadow-md shadow-luxury-gold/15"
                    : "bg-luxury-ebony/60 text-coffee-cream border border-luxury-gold/10 hover:border-luxury-gold/40"
                }`}
              >
                <DynamicIcon name={cat.icon} className="w-3.5 h-3.5" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box & Tag Dropdown */}
          <div className="lg:col-span-4 grid grid-cols-12 gap-3">
            
            {/* Tag filter dropdown */}
            <div className="col-span-5 relative">
              <select
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                className="w-full h-12 px-3 rounded-full bg-luxury-ebony border border-luxury-gold/15 text-[11px] font-sans text-coffee-cream tracking-wider uppercase appearance-none"
                aria-label="Filter by dietary style"
              >
                {tagsList.map((tag) => (
                  <option key={tag} value={tag} className="bg-luxury-ebony text-coffee-cream">
                    {tag === "all" ? "DIET: ALL" : tag.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-luxury-gold">
                <Filter className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Live Search input */}
            <div className="col-span-7 relative">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-full bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream placeholder-coffee-beige/40 font-sans"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-gold/5s text-luxury-gold">
                <Search className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>

        {/* Categories description label */}
        {activeCategory !== "all" && (
          <div className="mb-8 p-4 rounded-2xl bg-luxury-gold/5 border border-luxury-gold/10 max-w-xl animate-fadeIn">
            <p className="text-xs text-coffee-beige font-light">
              <span className="font-semibold text-luxury-gold uppercase tracking-wider block mb-1">
                {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name}:
              </span>
              {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.description}
            </p>
          </div>
        )}

        {/* Menu Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="menu-items-grid"
        >
          {isLoading ? (
            /* Elegant Skeleton Grid */
            Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i} 
                className="rounded-3xl overflow-hidden bg-[#1A120E]/40 border border-white/5 flex flex-col justify-between h-[450px] relative shadow-lg"
              >
                {/* Shimmer sweep effect animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>
                
                {/* Product Picture Skeleton */}
                <div className="relative aspect-[4/3] w-full bg-[#1A120E]/80 flex items-center justify-center overflow-hidden border-b border-white/5">
                  <Coffee className="w-8 h-8 text-coffee-brown/20 absolute animate-pulse-slow" />
                  <div className="absolute top-4 left-4 w-12 h-5 rounded-full bg-luxury-gold/5 border border-luxury-gold/10"></div>
                </div>

                {/* Content Skeleton */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="h-5 bg-coffee-cream/10 rounded-md w-2/3 animate-pulse"></div>
                      <div className="h-5 bg-luxury-gold/15 rounded-md w-12 animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3.5 bg-coffee-beige/5 rounded w-full animate-pulse"></div>
                      <div className="h-3.5 bg-coffee-beige/5 rounded w-5/6 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Footer Stats Skeleton */}
                  <div className="flex items-center justify-between pt-4 border-t border-luxury-gold/5">
                    <div className="h-3 bg-[#8c7468]/15 rounded w-1/3 animate-pulse"></div>
                    <div className="h-3 bg-luxury-gold/15 rounded w-1/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-3xl overflow-hidden glass-panel hover:shadow-2xl hover:shadow-luxury-gold/5 border hover:border-luxury-gold/30 duration-500 transition-all transform hover:-translate-y-1.5 flex flex-col justify-between"
                id={`item-card-${item.id}`}
              >
                
                {/* Product Picture Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-103 duration-500 transition-transform"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Visual Cover hover indicator overlay */}
                  <div className="absolute inset-0 bg-luxury-ebony/40 opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 rounded-full bg-luxury-gold/90 text-luxury-ebony text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-500">
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </span>
                  </div>

                  {/* Tags Badge Top-Left corner */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md backdrop-blur-md ${
                          tag === "Signature" || tag === "Best Seller"
                            ? "bg-luxury-gold text-luxury-ebony"
                            : "bg-luxury-ebony/85 text-coffee-cream border border-luxury-gold/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Product Details Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-serif text-lg text-coffee-cream font-semibold tracking-wide group-hover:text-luxury-gold duration-300">
                        {item.name}
                      </h3>
                      <span className="font-serif text-lg font-bold text-luxury-gold whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-coffee-beige/60 font-light leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Specific coffee stats or light bullet indicators */}
                  <div className="flex items-center justify-between pt-4 border-t border-luxury-gold/5 text-[10px] text-[#8c7468] uppercase tracking-widest font-sans font-semibold">
                    <span>{item.roastPreset !== "None" ? item.roastPreset : "Chef's Artisanal Signature"}</span>
                    {item.caffeineLevel && item.caffeineLevel !== "None" && (
                      <span className="flex items-center gap-1">
                        <Coffee className="w-3 h-3 text-luxury-gold fill-luxury-gold" />
                        {item.caffeineLevel} Potency
                      </span>
                    )}
                  </div>
                </div>

              </article>
            ))
          )}
        </div>

        {/* Empty State */}
        {!isLoading && filteredItems.length === 0 && (
          <div className="py-16 text-center rounded-3xl border border-dashed border-luxury-gold/20 max-w-md mx-auto">
            <Coffee className="w-10 h-10 text-luxury-gold/40 mx-auto mb-3 animate-pulse" />
            <p className="text-sm text-coffee-beige font-serif font-bold italic mb-1">No delicacies matches</p>
            <p className="text-xs text-coffee-beige/60">Try adjusting your filters or search terms.</p>
          </div>
        )}

      </div>

      {/* Exquisite Dish Detail Modal Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 bg-luxury-ebony/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn" id="menu-modal">
          <div className="bg-gradient-to-br from-[#211916] to-[#120e0c] border border-luxury-gold/30 rounded-[2rem] max-w-2xl w-full relative overflow-hidden shadow-2xl">
            
            {/* Modal Corner decoration line */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/5 pointer-events-none rounded-[1.8rem]"></div>

            {/* Close Button right hand */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-25 w-9 h-9 rounded-full bg-luxury-ebony/80 border border-luxury-gold/20 text-coffee-cream hover:text-luxury-gold flex items-center justify-center duration-300 hover:scale-105"
              aria-label="Close details"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal visual content */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
              
              {/* Left Picture */}
              <div className="sm:col-span-5 h-56 sm:h-full relative overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-[#120e0c]/30 to-[#120e0c] z-10"></div>
              </div>

              {/* Right Descriptions content */}
              <div className="sm:col-span-7 p-7 sm:p-9 relative z-20 flex flex-col justify-between">
                <div>
                  
                  {/* Badges */}
                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    {selectedItem.tags.map((tg) => (
                      <span key={tg} className="text-[8px] font-bold tracking-widest uppercase bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/20 px-2 py-0.5 rounded-full">
                        {tg}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-coffee-cream font-bold leading-tight mb-2">
                    {selectedItem.name}
                  </h3>
                  
                  <span className="font-serif text-xl font-bold text-luxury-gold block mb-4">
                    ₹{selectedItem.price}
                  </span>

                  <p className="text-xs text-coffee-beige leading-relaxed font-light mb-5">
                    {selectedItem.description}
                  </p>

                  {/* Curated Gilded Backstory */}
                  <div className="p-4 rounded-2xl bg-luxury-ebony/60 border border-luxury-gold/10 mb-6">
                    <span className="text-[10px] tracking-wider uppercase font-semibold text-luxury-gold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                      Culinary Story
                    </span>
                    <p className="text-[11px] text-coffee-beige/70 font-light italic leading-relaxed">
                      {selectedItem.category === "artisanal-coffee" && "Perfected through precise heat tracking, our master baristas draw this shot at a steady 93.5°C over hand-cut single-estate grounds."}
                      {selectedItem.category === "signature-sips" && "Inspired by the private recipe registers of historical Deccan rulers who blended fresh mountain spring water with local spices."}
                      {selectedItem.category === "gourmet-bites" && "Prepared using fully sourdough starters wild-cultured right inside Banjara Hills, combined with imported cold-pressed olive oils."}
                      {selectedItem.category === "luxury-patisserie" && "Every layer is gently folded 144 times using fresh organic cultured butter to ensure thin glassy pastry glassiness."}
                    </p>
                  </div>

                  {/* Sommelier analytics stats bullets */}
                  <div className="grid grid-cols-2 gap-4 text-[10px] text-coffee-beige/50 uppercase tracking-widest font-sans border-t border-luxury-gold/5 pt-4">
                    <div>
                      <span className="block text-[#8c7468] font-bold mb-0.5">ESTATE PROFILE</span>
                      <span className="text-coffee-cream">{selectedItem.roastPreset !== "None" ? selectedItem.roastPreset : "No Roast (Bake)"}</span>
                    </div>
                    <div>
                      <span className="block text-[#8c7468] font-bold mb-0.5">PRESENTATION</span>
                      <span className="text-coffee-cream">Artisanal Fine China</span>
                    </div>
                  </div>

                </div>

                {/* Footer Reservation Action */}
                <div className="mt-8 flex items-center justify-between">
                  <a
                    href="#tables"
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-luxury-gold hover:text-white duration-300"
                  >
                    <span>Reserve table to enjoy online</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
