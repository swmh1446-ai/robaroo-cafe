/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Sparkles, Instagram, Share2, Grid, RefreshCw } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function GallerySection() {
  const [isLoading, setIsLoading] = useState(true);

  // Trigger simulated initial content fetch loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleReloadGallery = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 850);
  };

  return (
    <section id="gallery" className="py-24 bg-luxury-ebony relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-coffee-brown/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Gallery Headers */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <div className="flex justify-center items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase px-3 py-1 bg-luxury-gold/10 rounded-full inline-block">
              Pure Visual Devotion
            </span>
            <button
              onClick={handleReloadGallery}
              className="px-2.5 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-[10px] tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-ebony transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer"
              title="Trigger picture feed simulated fetch loading"
            >
              <RefreshCw className={`w-3 h-3 ${isLoading ? "animate-spin" : ""}`} />
              {isLoading ? "Loading..." : "Sync Gallery"}
            </button>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold mb-4">
            The Sensory Gallery
          </h2>
          <p className="text-sm md:text-base text-coffee-beige/70 font-light">
            Vibe through snapshots of our pristine Banjara Hills interior chambers, 72-hour fresh baked croissants, 
            and slow hand-poured siphon extractions.
          </p>
        </div>

        {/* Masonry Layout grid frame representation */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          id="gallery-masonry"
        >
          {isLoading ? (
            GALLERY_ITEMS.map((item, idx) => (
              <div
                key={`gallery-skeleton-${item.id}`}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#1A120E]/40 shadow-xl flex flex-col justify-end p-8 duration-500 transition-all relative ${
                  idx === 1 || idx === 4 ? "md:row-span-2 aspect-[4/5]" : "aspect-[4/3] sm:aspect-video md:aspect-[4/3]"
                }`}
              >
                {/* Shimmer sweep effect animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full animate-shimmer pointer-events-none"></div>

                {/* Decorative icon outline */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Grid className="w-16 h-16 text-luxury-gold animate-pulse-slow" />
                </div>

                {/* Inner skeleton slots on top of background */}
                <div className="space-y-4 w-full z-10">
                  <div className="h-3.5 bg-luxury-gold/15 rounded w-1/4 animate-pulse"></div>
                  <div className="h-6 bg-coffee-cream/10 rounded w-2/3 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-coffee-beige/5 rounded w-full animate-pulse"></div>
                    <div className="h-3 bg-coffee-beige/5 rounded w-5/6 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[2rem] border border-luxury-gold/10 bg-luxury-cocoa/40 shadow-xl flex flex-col justify-end duration-500 transition-all ${
                  idx === 1 || idx === 4 ? "md:row-span-2 aspect-[4/5]" : "aspect-[4/3] sm:aspect-video md:aspect-[4/3]"
                }`}
              >
                {/* Photo component */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90 scale-101"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Gold gradient fog layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-ebony/95 via-luxury-ebony/45 to-transparent opacity-75 group-hover:opacity-90 duration-500 z-10"></div>

                {/* Content overlaid on details */}
                <div className="relative z-20 p-6 md:p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] tracking-[0.25em] font-sans font-bold text-luxury-gold uppercase block mb-1">
                    Artisanal Perspective
                  </span>
                  <h4 className="font-serif text-lg text-coffee-cream font-bold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-coffee-beige/65 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.caption}
                  </p>

                  {/* Decorative gold vector line */}
                  <span className="w-10 h-[1.5px] bg-luxury-gold block mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Social Instagram handles footer row */}
        <div className="mt-14 p-6 rounded-2xl glass-panel-light max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-ebony text-luxury-gold">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold font-serif text-coffee-cream tracking-wide uppercase">Share your moments</h5>
              <p className="text-[11px] text-coffee-beige/60">Tag @RoobarooCafe on Instagram for weekly VIP selections.</p>
            </div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-luxury-gold text-luxury-ebony text-xs font-bold tracking-wider uppercase hover:bg-white duration-300 whitespace-nowrap"
          >
            Roobaroo Cafe live Feed
          </a>
        </div>

      </div>
    </section>
  );
}
