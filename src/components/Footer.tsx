/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Coffee, MapPin, Phone, Mail, Instagram, Compass, Sparkles, Check } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribedToast, setSubscribedToast] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribedToast(true);
    setEmailInput("");
    setTimeout(() => setSubscribedToast(false), 3000);
  };

  return (
    <footer className="bg-luxury-ebony border-t border-luxury-gold/15 relative z-10 pt-20 pb-12 overflow-hidden" id="main-footer">
      {/* Decorative vertical lines and warm glow */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-luxury-gold/5 z-0 pointer-events-none"></div>
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-luxury-gold/5 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[0px] right-1/2 w-[350px] h-[150px] rounded-full bg-luxury-gold/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top grid blocks */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-left">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group focus:outline-none">
              <div className="w-9 h-9 rounded-full border border-luxury-gold/45 flex items-center justify-center p-2 bg-luxury-cocoa/40">
                <Coffee className="w-4 h-4 text-luxury-gold" />
              </div>
              <div>
                <span className="font-serif text-base tracking-[0.2em] text-coffee-cream uppercase font-medium">
                  Roobaroo
                </span>
                <span className="text-[8px] font-sans tracking-[0.3em] text-luxury-gold block uppercase ml-0.5">
                  Luxury Cafe
                </span>
              </div>
            </a>
            <p className="text-xs text-coffee-beige/60 font-light leading-relaxed mb-6">
              A serene luxury sanctuary pairing AAA Single Estate Indian coffee profiles with royal heritage cardamom and rose elixirs. Crafted for face-to-face memories.
            </p>
            
            {/* Minimal social icons */}
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Roobaroo Cafe Instagram" className="w-8 h-8 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-coffee-cream hover:text-luxury-gold flex items-center justify-center duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label="Roobaroo Cafe on Google Maps" className="w-8 h-8 rounded-full border border-luxury-gold/30 hover:border-luxury-gold text-coffee-cream hover:text-luxury-gold flex items-center justify-center duration-300">
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-sans font-bold text-luxury-gold uppercase mb-6">
              Hours of Rendezvous
            </h4>
            <div className="space-y-4 text-xs text-coffee-beige/75 font-light">
              <div>
                <p className="font-semibold text-coffee-cream">MON – FRI</p>
                <p className="text-coffee-beige/60 text-[11px] mt-0.5">07:30 AM – 10:30 PM</p>
              </div>
              <div>
                <p className="font-semibold text-coffee-cream">SAT – SUN</p>
                <p className="text-coffee-beige/60 text-[11px] mt-0.5">07:00 AM – 11:30 PM</p>
              </div>
              <div>
                <p className="text-[11px] text-luxury-gold/80 italic font-semibold">Valet Parking Available daily.</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-sans font-bold text-luxury-gold uppercase mb-6">
              The Sanctuary
            </h4>
            <div className="space-y-4 text-xs text-coffee-beige/75 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>Road No. 4, Banjara Hills, Hyderabad, Telangana 500034</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="font-mono">+91 40 8829 1930</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="break-all">concierge@roobaroocafe.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter registry */}
          <div>
            <h4 className="text-xs tracking-[0.25em] font-sans font-bold text-luxury-gold uppercase mb-6">
              The Golden Registry
            </h4>
            <p className="text-xs text-coffee-beige/60 font-light mb-4 leading-relaxed">
              Register your email for private chamber privileges, masterclass invites, and seasonal coffee harvest notices.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex flex-col gap-2.5" id="registry-email-form">
              <label htmlFor="registry-email" className="sr-only">Email Address</label>
              <input
                id="registry-email"
                type="email"
                required
                placeholder="Enter email address..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full h-11 px-4 rounded-full bg-luxury-cocoa/40 border border-luxury-gold/15 text-xs text-coffee-cream placeholder-coffee-beige/35 text-left focus:border-luxury-gold"
              />
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-luxury-gold text-luxury-ebony font-sans text-xs font-bold tracking-widest uppercase hover:bg-white duration-300 shadow-md shadow-luxury-gold/5 whitespace-nowrap"
              >
                Register
              </button>

              {subscribedToast && (
                <div className="absolute top-[-50px] left-0 right-0 p-2.5 rounded-lg bg-emerald-950 border border-emerald-500 text-center text-[10px] text-coffee-cream font-medium animate-fadeIn z-30">
                  <span className="flex items-center gap-1.5 justify-center">
                    <Check className="w-3 h-3 text-emerald-400" />
                    Joined The Golden Registry!
                  </span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 border-t border-luxury-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8c7468] text-[11px] uppercase tracking-widest">
          <p>© 2026 Roobaroo Cafe Hyderabad. All Sovereigns Reserved.</p>
          <p className="text-luxury-gold/60">Best Coffee & Space in Banjara Hills</p>
        </div>

      </div>
    </footer>
  );
}
