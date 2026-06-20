/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Coffee, Flame, RotateCcw, HelpCircle, PocketKnife, Share2, Sparkles, Star, Thermometer } from "lucide-react";
import { BREW_BASES, BREW_MILKS, BREW_SYRUPS } from "../data";

export default function BrewCustomizer() {
  const [selectedBase, setSelectedBase] = useState(BREW_BASES[0].id);
  const [selectedMilk, setSelectedMilk] = useState(BREW_MILKS[1].id);
  const [selectedSyrup, setSelectedSyrup] = useState(BREW_SYRUPS[1].id);
  const [temp, setTemp] = useState<"hot" | "iced">("hot");
  const [beansStrength, setBeansStrength] = useState(3); // 1-4
  const [alertSaved, setAlertSaved] = useState(false);

  // Get active configurations
  const baseObj = BREW_BASES.find((b) => b.id === selectedBase) || BREW_BASES[0];
  const milkObj = BREW_MILKS.find((m) => m.id === selectedMilk) || BREW_MILKS[0];
  const syrupObj = BREW_SYRUPS.find((s) => s.id === selectedSyrup) || BREW_SYRUPS[0];

  // Calculate luxury estimation
  const basePrice = 345;
  const totalCost = basePrice + baseObj.cost + milkObj.cost + syrupObj.cost;

  // Generate dynamic sommelier flavor analysis notes
  const getSommelierNotes = () => {
    let note = "An exceptionally pure roast focusing entirely on high-altitude acidity and clean extraction.";
    if (selectedSyrup === "nizam-rose") {
      note = "A romantic, dense floral blend where double-shot crema matches the royal, sweet perfume of organic rose water and green cardamom, creating a vintage taste.";
    } else if (selectedSyrup === "kashmiri-saffron") {
      note = "Extremely luxurious and earthy. The Kashmiri saffron honey provides a warm, golden, amber-slick glaze that heavily softens the heavy roasted chocolate undertones.";
    } else if (selectedSyrup === "salted-praline") {
      note = "Indulgent and nutty. Combines roasted pistachio and rich salted praline sauce with espresso to create a warm, thick dessert-coffee finish.";
    }

    if (selectedMilk === "clotted-ghee") {
      note += " The aerated ghee cream fat rounds the palate, offering a majestic, creamy mouthfeel resembling Nizam era royal brews.";
    } else if (selectedMilk === "organic-almond") {
      note += " Balanced with subtle homemade organic almond fats, providing a wholesome spice-tinged warmth.";
    } else if (selectedMilk === "macadamia") {
      note += " Dressed in rich macadamia nut cold-pressed cream for an buttery, modern international texture.";
    }

    return note;
  };

  // Reset function
  const handleReset = () => {
    setSelectedBase(BREW_BASES[0].id);
    setSelectedMilk(BREW_MILKS[1].id);
    setSelectedSyrup(BREW_SYRUPS[1].id);
    setTemp("hot");
    setBeansStrength(3);
  };

  // Mock ordering / sending custom recipe to barista
  const handleSendToBarista = () => {
    setAlertSaved(true);
    setTimeout(() => setAlertSaved(false), 4000);
  };

  // Determine virtual coffee appearance color
  const getCoffeeFluidColor = () => {
    if (selectedMilk === "none") {
      return "bg-[#1f120c]"; // Black Espresso
    }
    if (selectedMilk === "clotted-ghee") {
      return "bg-[#6d4d38]"; // Medium dark thick
    }
    if (selectedMilk === "organic-almond") {
      return "bg-[#91715b]"; // Almond cream
    }
    return "bg-[#b0937e]"; // Macadamia light beige
  };

  return (
    <section id="brew-lab" className="py-24 bg-luxury-ebony border-t border-b border-luxury-gold/10 relative">
      {/* Background radial soft light */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[400px] w-full bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase px-3 py-1 rounded-full bg-luxury-gold/10 inline-block mb-3">
            Interactive Brew Lab
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold mb-4">
            Deconstruct Your Brew
          </h2>
          <p className="text-sm md:text-base text-coffee-beige/70 font-light">
            Design your custom beverage. Adjust roast extractions, premium nut milks, and 
            royal botanical syrups. Our master baristas will brew it live on your arrival.
          </p>
        </div>

        {/* Customizer Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Form Options - Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-3xl glass-panel relative">
            <div className="space-y-8">
              
              {/* Option 1: Extraction Base */}
              <div>
                <label className="text-xs tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-3 block">
                  1. Choose Coffee Extraction Base
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {BREW_BASES.map((base) => (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                        selectedBase === base.id
                          ? "border-luxury-gold bg-luxury-gold/10 shadow-lg shadow-luxury-gold/5 text-coffee-cream"
                          : "border-luxury-gold/20 bg-luxury-cocoa/20 text-coffee-beige/80 hover:border-luxury-gold/40"
                      }`}
                    >
                      <h4 className="font-serif text-sm font-semibold mb-1">{base.name}</h4>
                      <p className="text-[10px] opacity-60 leading-normal">{base.desc}</p>
                      {base.cost > 0 && (
                        <span className="text-xs text-luxury-gold block mt-2 font-medium">
                          +₹{base.cost}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Cream & Milks */}
              <div>
                <label className="text-xs tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-3 block">
                  2. Select Artisanal Milk Infusion
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {BREW_MILKS.map((milk) => (
                    <button
                      key={milk.id}
                      onClick={() => setSelectedMilk(milk.id)}
                      className={`text-left p-3 rounded-2xl border transition-all duration-300 ${
                        selectedMilk === milk.id
                          ? "border-luxury-gold bg-luxury-gold/10 text-coffee-cream"
                          : "border-luxury-gold/10 bg-luxury-cocoa/10 text-coffee-beige/70 hover:border-luxury-gold/30"
                      }`}
                    >
                      <h4 className="font-serif text-[13px] font-semibold mb-1">{milk.name}</h4>
                      <p className="text-[9px] opacity-65 leading-normal">{milk.desc}</p>
                      {milk.cost > 0 && (
                        <span className="text-[11px] text-luxury-gold block mt-1">
                          +₹{milk.cost}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Royal Syrups */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs tracking-widest font-sans font-semibold text-luxury-gold uppercase block">
                    3. Infuse Royal botanical Syrup
                  </label>
                  <span className="text-[10px] text-luxury-gold/70 lowercase italic">
                    authentic kashmiri and organic extraction
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {BREW_SYRUPS.map((syrup) => (
                    <button
                      key={syrup.id}
                      onClick={() => setSelectedSyrup(syrup.id)}
                      className={`text-left p-3 rounded-2xl border transition-all duration-300 ${
                        selectedSyrup === syrup.id
                          ? "border-luxury-gold bg-luxury-gold/10 text-coffee-cream"
                          : "border-luxury-gold/10 bg-luxury-cocoa/10 text-coffee-beige/70 hover:border-luxury-gold/30"
                      }`}
                    >
                      <h4 className="font-serif text-[13px] font-semibold mb-1">{syrup.name}</h4>
                      <p className="text-[9px] opacity-65 leading-normal">{syrup.desc}</p>
                      {syrup.cost > 0 && (
                        <span className="text-[11px] text-luxury-gold block mt-1">
                          +₹{syrup.cost}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider Option: Beans Strength & Temperature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-luxury-gold/10">
                
                {/* Strength */}
                <div>
                  <span className="text-xs tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-3 block">
                    4. Extraction Strength ({beansStrength} Beans)
                  </span>
                  <div className="flex items-center gap-2 bg-luxury-cocoa/40 border border-luxury-gold/15 p-3.5 rounded-2xl">
                    <span className="text-[10px] text-coffee-beige uppercase">Mild</span>
                    <input
                      type="range"
                      min="1"
                      max="4"
                      value={beansStrength}
                      onChange={(e) => setBeansStrength(Number(e.target.value))}
                      className="flex-1 accent-luxury-gold bg-luxury-ebony h-1 rounded"
                    />
                    <span className="text-[10px] text-coffee-beige uppercase">Intense</span>
                    <div className="flex items-center gap-0.5 ml-2">
                      {Array.from({ length: beansStrength }).map((_, i) => (
                        <Coffee key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold animate-bounce" style={{ animationDelay: `${i*150}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Temperature Toggle */}
                <div>
                  <span className="text-xs tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-3 block">
                    5. Temperature Profile
                  </span>
                  <div className="flex border border-luxury-gold/25 p-1 rounded-2xl bg-luxury-cocoa/40">
                    <button
                      type="button"
                      onClick={() => setTemp("hot")}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                        temp === "hot"
                          ? "bg-luxury-gold text-luxury-ebony shadow-md"
                          : "text-coffee-cream hover:bg-luxury-gold/10"
                      }`}
                    >
                      <Flame className="w-4 h-4" />
                      Steaming Hot
                    </button>
                    <button
                      type="button"
                      onClick={() => setTemp("iced")}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                        temp === "iced"
                          ? "bg-sky-700 text-coffee-cream shadow-md"
                          : "text-coffee-cream hover:bg-luxury-gold/10"
                      }`}
                    >
                      <Thermometer className="w-4 h-4 rotate-180" />
                      Whiskey Iced
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-8 flex items-center justify-between pt-4 border-t border-luxury-gold/10">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-coffee-beige/60 hover:text-luxury-gold duration-300"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Canvas
              </button>
              <span className="text-[11px] text-[#8c7468] italic font-sans">
                Authentic barista tools and custom premium serving ware.
              </span>
            </div>
          </div>

          {/* Visualization & Premium Breakdown Card - Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-gradient-to-br from-luxury-cocoa/60 to-luxury-ebony border border-luxury-gold/25 relative overflow-hidden shadow-2xl">
            {/* Fine framing border decorative gold leaf */}
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/5 pointer-events-none rounded-[1.3rem]"></div>
            
            <div className="relative z-10">
              {/* Card Label */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-widest font-sans font-bold text-[#8c7468] uppercase">
                  Sommelier Live Preview
                </span>
                <span className="text-xs font-serif text-luxury-gold italic">
                  Chikmagalur Reserve
                </span>
              </div>

              {/* Dynamic Animated Glass representation of the fluid */}
              <div className="flex justify-center py-6">
                <div className="relative w-40 h-48 border-[6px] border-coffee-cream/20 rounded-b-[4rem] rounded-t-lg shadow-inner flex items-end justify-center overflow-hidden bg-luxury-ebony/30">
                  {/* Dynamic Fluid fill styling */}
                  <div
                    className={`w-full transition-all duration-1000 ${getCoffeeFluidColor()} absolute bottom-0`}
                    style={{ height: selectedMilk === "none" ? "65%" : "82%" }}
                  >
                    {/* Steaming ripple or Iced particle cubes style inside fluid */}
                    {temp === "hot" && (
                      <div className="absolute inset-x-0 bottom-4 flex justify-around animate-pulse-slow">
                        <div className="w-1 h-3 rounded-full bg-white/20 animate-bounce" style={{ animationDelay: "100ms" }}></div>
                        <div className="w-1 h-2 rounded-full bg-white/10 animate-bounce" style={{ animationDelay: "500ms" }}></div>
                        <div className="w-1 h-4 rounded-full bg-white/15 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    )}
                    {temp === "iced" && (
                      <div className="absolute inset-0 flex items-center justify-around p-3">
                        <div className="w-4 h-4 bg-white/10 rounded border border-white/20 rotate-12"></div>
                        <div className="w-3.5 h-3.5 bg-white/5 rounded border border-white/15 -rotate-12"></div>
                        <div className="w-4 h-4 bg-white/10 rounded border border-white/20 rotate-45"></div>
                      </div>
                    )}

                    {/* Golden foam topping layer on milk coffee */}
                    {selectedMilk !== "none" && (
                      <div className="absolute top-0 inset-x-0 h-4 bg-[#dec09d] border-b border-luxury-gold/20 flex items-center justify-center">
                        {/* Golden flakes on froth representation */}
                        {selectedSyrup !== "none" && (
                          <div className="flex gap-2">
                            <span className="w-1 h-1 bg-luxury-gold rounded-full animate-ping"></span>
                            <span className="w-1 h-1 bg-luxury-gold rounded-full"></span>
                            <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Hot Steam effect on outer cup */}
                  {temp === "hot" && (
                    <div className="absolute -top-10 inset-x-0 flex justify-center gap-3 opacity-30 animate-pulse-slow">
                      <span className="w-1.5 h-10 bg-white/20 blur-sm rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-12 bg-white/20 blur-sm rounded-full animate-bounce" style={{ animationDelay: "400ms" }}></span>
                      <span className="w-1.5 h-8 bg-white/20 blur-sm rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Recipe metadata */}
              <div className="space-y-4 border-t border-luxury-gold/15 pt-5 mt-4">
                <div>
                  <h3 className="font-serif text-[17px] text-coffee-cream font-bold block">
                    {temp === "hot" ? "Steaming" : "Iced"} {baseObj.name.replace("Artisanal ", "")}
                  </h3>
                  <p className="text-[11px] text-luxury-gold font-light mt-0.5">
                    Infused with {milkObj.name} & {syrupObj.name}
                  </p>
                </div>

                {/* Professional Sommelier Note description */}
                <div className="p-3.5 rounded-xl bg-luxury-ebony/60 border border-luxury-gold/10">
                  <span className="text-[9px] tracking-wider uppercase font-semibold text-luxury-gold block mb-1">
                    Sommelier Tasting Forecast:
                  </span>
                  <p className="text-xs text-coffee-beige italic font-light leading-relaxed">
                    "{getSommelierNotes()}"
                  </p>
                </div>
              </div>
            </div>

            {/* Computed Price & Barista Send Button */}
            <div className="mt-8 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-widest text-[#8c7468] uppercase font-semibold">
                  Luxury Estimate:
                </span>
                <span className="font-serif text-3xl font-semibold text-luxury-gold drop-shadow-md">
                  ₹{totalCost}
                </span>
              </div>

              <button
                onClick={handleSendToBarista}
                className="w-full py-4 rounded-full bg-luxury-gold text-luxury-ebony font-sans text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-luxury-ebony duration-500 shadow-xl shadow-luxury-gold/10 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-luxury-ebony" />
                Transfer Recipe To Barista
              </button>

              {alertSaved && (
                <div className="absolute top-[-90px] inset-x-0 p-3.5 rounded-xl bg-amber-950/95 border border-luxury-gold text-center text-xs text-coffee-cream shadow-2xl animate-fadeIn">
                  <p className="font-serif font-bold text-luxury-gold mb-0.5">Recipe Transferred!</p>
                  <p className="text-[10px] opacity-80">This custom profile is now tied to your session. Mention it at the Banjara Hills counter on arrival.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
