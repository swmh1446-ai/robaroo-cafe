/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, ArrowDown, MapPin } from "lucide-react";

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export default function Hero({ onExploreMenu, onOpenReservation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-ebony"
    >
      {/* Cinematic Ken Burns Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-ebony/90 via-luxury-ebony/60 to-luxury-ebony/90 z-10"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-ebony/35 to-luxury-ebony/95 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1800&auto=format&fit=crop"
          alt="Cinematic Artisanal Coffee Art"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns origin-center opacity-85 scale-102"
          referrerPolicy="no-referrer"
          id="hero-bg-picture"
        />
      </div>

      {/* Floating Sparkles & Accent lines */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-[25%] left-[10%] w-2 h-2 rounded-full bg-luxury-gold/30 animate-pulse-slow"></div>
        <div className="absolute bottom-[30%] right-[15%] w-3.5 h-3.5 rounded-full bg-luxury-gold/20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-[8%] w-1.5 h-1.5 rounded-full bg-[#f5e6d3]/20 animate-pulse-slow"></div>
      </div>

      {/* Centered Hero Content Block */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Elegant Sophisticated Dark Badge */}
        <span className="text-[11px] md:text-[12px] uppercase tracking-[0.45em] text-luxury-gold mb-6 italic font-serif animate-float">
          Est. 2018 — Banjara Hills, Hyderabad
        </span>

        {/* Serif Main Brand Typography */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-coffee-cream tracking-tight leading-none mb-8 font-semibold"
          id="hero-main-title"
        >
          Experience the <span className="font-normal font-serif italic text-luxury-gold block mt-2">Art of Fine Brewing</span>
        </h1>

        {/* Underlined Subtitles */}
        <p
          className="text-base md:text-lg font-sans text-[#E8D5C4]/90 tracking-wide max-w-2xl font-light leading-relaxed mb-10 opacity-85"
          id="hero-subtitle"
        >
          A curated journey through the world's most exquisite origins, served in the heart of Hyderabad. Luxury in every sip, art in every bean.
        </p>

        {/* Luxury CTA Brand Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center z-20">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-luxury-gold text-luxury-ebony font-sans text-xs font-bold tracking-[0.18em] uppercase hover:bg-white hover:text-luxury-ebony transition-all duration-500 transform hover:-translate-y-1 shadow-xl shadow-luxury-gold/15 hover:shadow-white/20 hover:scale-103 cursor-pointer"
            id="hero-btn-menu"
          >
            Explore Digital Menu
          </button>
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 border border-luxury-gold/40 bg-luxury-ebony/60 text-coffee-cream font-sans text-xs font-bold tracking-[0.18em] uppercase hover:bg-luxury-gold hover:text-luxury-ebony hover:border-luxury-gold transition-all duration-500 transform hover:-translate-y-1 backdrop-blur-sm hover:scale-103 cursor-pointer"
            id="hero-btn-book"
          >
            Book A Table
          </button>
        </div>
      </div>

      {/* Down arrow marker */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[9px] tracking-[0.3em] font-sans text-coffee-beige/40 uppercase mb-2">
          Discover More
        </span>
        <ArrowDown className="w-4 h-4 text-luxury-gold animate-bounce opacity-60" />
      </div>
    </section>
  );
}
