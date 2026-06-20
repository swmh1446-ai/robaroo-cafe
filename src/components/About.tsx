/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Heart, HelpCircle, Flame } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Intimate Conversations",
      desc: "'Roobaroo' signifies face-to-face soulful connection. We have crafted private acoustic booths and micro-libraries designed for memorable human engagement.",
      icon: Heart,
    },
    {
      title: "Artisanal Roasting",
      desc: "Our AAA Arabica beans are harvested at 4,000+ feet in Chikmagalur and shade-grown in natural forest reserves before custom slow roasting in small batches.",
      icon: Flame,
    },
    {
      title: "Fine Gastronomy",
      desc: "Every croissant layer takes 72 hours of lamination. Every blend is topped with authentic local spices, certified saffron strands, and 24K gold foil.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 bg-luxury-ebony relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-0 w-[300px] h-[300px] rounded-full bg-coffee-brown/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text content column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase mb-3">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold leading-tight mb-6">
              Where Royal Heritage Meets <br />
              <span className="text-luxury-gold italic font-normal">Modern Sensory Craft</span>
            </h2>
            <p className="text-sm md:text-base text-coffee-beige/90 font-light leading-relaxed mb-6">
              Nestled in the prime leafy lanes of Road No. 4, Banjara Hills, 
              <strong> Roobaroo Cafe</strong> is Hyderabad’s premier luxury coffee destination. 
              The name <em>Roobaroo</em> represents face-to-face warmth. We created this space to 
              bring back the lost art of unhurried rendezvous, served with the finest coffees in India.
            </p>
            <p className="text-sm text-coffee-beige/75 font-light leading-relaxed mb-10">
              By pairing hand-picked single estates with royal regional infusions like Kashmiri Saffron, 
              organic rose-waters, and Hyderabadi Irani double cream reduction, we serve an exquisite, 
              expensive sensory experience built for connoisseurs.
            </p>

            {/* highlights blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl glass-panel-light hover:border-luxury-gold/30 transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center mb-4 group-hover:bg-luxury-gold group-hover:text-luxury-ebony transition-all duration-500 text-luxury-gold">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-coffee-cream font-semibold tracking-wide text-[15px] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-coffee-beige/60 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image/Stack Column */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-luxury-gold/20 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-ebony via-transparent to-transparent opacity-40 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
                alt="Roobaroo Cafe Premium Ambience"
                className="w-full h-full object-cover group-hover:scale-105 duration-700 transition-transform"
                referrerPolicy="no-referrer"
                id="about-visual-image"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-luxury-ebony/90 backdrop-blur-md border border-luxury-gold/20 z-20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase">
                    Banjara Hills, Hyderabad
                  </span>
                </div>
                <h3 className="font-serif text-coffee-cream font-bold text-lg mb-1">
                  Open Daily: 7 AM – 11 PM
                </h3>
                <p className="text-[11px] text-coffee-beige/75 font-light">
                  Acoustic booths, warm brass panels, and artisanal barista counter. Valet parking available.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
