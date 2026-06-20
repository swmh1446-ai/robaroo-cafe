/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Sparkles, MessageSquare } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const currentReview = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-24 bg-luxury-ebony relative border-t border-luxury-gold/5">
      {/* Background soft lighting */}
      <div className="absolute top-[20%] left-[-150px] w-[350px] h-[350px] rounded-full bg-coffee-brown/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase px-3 py-1 bg-luxury-gold/10 rounded-full inline-block mb-3">
            Honored Testaments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold mb-4">
            Guest Testimonials
          </h2>
          <p className="text-sm text-coffee-beige/70 font-light max-w-xl mx-auto uppercase tracking-wide">
            Heartfelt accounts from our culinary guests and Hyderabad’s discerning elite.
          </p>
        </div>

        {/* Highlight Main Slider Box */}
        <div className="relative" id="reviews-carousel-outer">
          
          <div 
            className="p-8 md:p-12 rounded-[2.5rem] glass-panel relative shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between"
            id="review-slide-card"
          >
            {/* Fine framing border decorative gold leaf */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/5 pointer-events-none rounded-[1.9rem]"></div>

            <div className="relative z-10">
              
              {/* Stars & Tagline Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                
                <div className="flex items-center gap-1.5" aria-label="Review rating">
                  {Array.from({ length: currentReview.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold drop-shadow-md" />
                  ))}
                  <span className="text-[11px] font-bold text-coffee-beige ml-1.5 uppercase font-sans tracking-widest">
                    Rating {currentReview.rating}.0
                  </span>
                </div>

                <span className="font-serif text-sm italic text-luxury-gold font-semibold uppercase tracking-wider block">
                  "{currentReview.tagline}"
                </span>

              </div>

              {/* Main review text */}
              <blockquote className="font-serif text-base md:text-xl text-coffee-cream leading-relaxed mb-8 italic text-left">
                “{currentReview.text}”
              </blockquote>

            </div>

            {/* Guest details bottom row */}
            <div className="relative z-10 border-t border-luxury-gold/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Left Profile details */}
              <div className="flex items-center gap-4 text-left">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-luxury-gold/45 p-0.5 shadow-md">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.author}
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 rounded-full border border-luxury-gold/10"></div>
                </div>
                <div>
                  <h4 className="font-serif text-coffee-cream font-bold text-sm tracking-wide">
                    {currentReview.author}
                  </h4>
                  <p className="text-[10px] text-luxury-gold font-sans tracking-wider uppercase">
                    {currentReview.role}
                  </p>
                </div>
              </div>

              {/* Slider selector dots */}
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full duration-300 ${
                      idx === activeIndex ? "bg-luxury-gold scale-125" : "bg-luxury-gold/20"
                    }`}
                    aria-label={`Go to review slide ${idx + 1}`}
                  ></button>
                ))}
              </div>

            </div>

          </div>

          {/* Side arrow buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-20">
            <button
              onClick={prevReview}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-ebony border border-luxury-gold/30 text-coffee-cream hover:text-luxury-gold duration-300 hover:scale-105 flex items-center justify-center p-2.5 shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-20">
            <button
              onClick={nextReview}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-ebony border border-luxury-gold/30 text-coffee-cream hover:text-luxury-gold duration-300 hover:scale-105 flex items-center justify-center p-2.5 shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
