/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, ArrowRight, RotateCcw, Coffee, Check } from "lucide-react";
import { AROMA_QUIZ_QUESTIONS, MENU_ITEMS } from "../data";

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswerSelect = (rating: string) => {
    const updatedScores = [...scores, rating];
    setScores(updatedScores);

    if (currentStep < AROMA_QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner profile recommendation
      calculateRecommendation(updatedScores);
    }
  };

  const calculateRecommendation = (finalScores: string[]) => {
    // Count frequencies
    const counts: { [key: string]: number } = {};
    for (const val of finalScores) {
      counts[val] = (counts[val] || 0) + 1;
    }

    let winner = "bold";
    let maxCount = 0;
    for (const key in counts) {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        winner = key;
      }
    }

    // Map winners to a menu item ID
    let suggestedItemId = "gold-standard-espresso"; // Bold default
    if (winner === "fruity") {
      suggestedItemId = "nizam-rose-latte";
    } else if (winner === "spicy") {
      suggestedItemId = "royal-irani-affogato";
    }

    setResult(suggestedItemId);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores([]);
    setResult(null);
  };

  // Find recommended item
  const recommendedItem = MENU_ITEMS.find((item) => item.id === result);

  return (
    <section id="aroma-quiz" className="py-24 bg-luxury-ebony border-b border-luxury-gold/5 relative overflow-hidden">
      {/* Absolute floating lights */}
      <div className="absolute top-[30%] left-[-100px] w-[350px] h-[350px] rounded-full bg-coffee-brown/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-100px] w-[350px] h-[350px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase px-3 py-1 rounded-full bg-luxury-gold/10 inline-block mb-3">
            Sensory Experience
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold mb-3">
            Your Sensory Aroma Journey
          </h2>
          <p className="text-xs md:text-sm text-coffee-beige/60 font-light max-w-xl mx-auto uppercase tracking-wider">
            Discover which of our royal single-origin selections match your soul's current vibration.
          </p>
        </div>

        {/* Quiz Frame inside pristine card */}
        <div className="glass-panel p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between">
          <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/5 pointer-events-none rounded-[1.8rem]"></div>

          {/* Active Question State */}
          {!result ? (
            <div className="relative z-10 flex-grow flex flex-col justify-between" id="quiz-question-container">
              <div>
                {/* Header indicators */}
                <div className="flex items-center justify-between text-[10px] text-coffee-beige/50 font-sans tracking-widest uppercase mb-10">
                  <span>Sensory profile finder</span>
                  <span>Step {currentStep + 1} of {AROMA_QUIZ_QUESTIONS.length}</span>
                </div>

                {/* Loading indicator bar */}
                <div className="w-full h-1 bg-luxury-gold/10 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-luxury-gold transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep + 1) / AROMA_QUIZ_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question title */}
                <h3 className="font-serif text-xl md:text-2xl text-coffee-cream font-bold mb-8 leading-tight">
                  {AROMA_QUIZ_QUESTIONS[currentStep].question}
                </h3>

                {/* Options button layouts */}
                <div className="space-y-4">
                  {AROMA_QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswerSelect(option.rating)}
                      className="w-full text-left p-5 rounded-2xl bg-luxury-ebony/40 border border-luxury-gold/15 hover:border-luxury-gold hover:bg-luxury-gold/5 text-xs md:text-sm text-coffee-cream/90 hover:text-coffee-cream font-sans tracking-wide leading-relaxed duration-300 transition-all flex items-center justify-between group transform hover:translate-x-1"
                    >
                      <span>{option.text}</span>
                      <span className="w-6 h-6 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Steps dot indicator links */}
              <div className="flex items-center gap-2 mt-8 justify-center">
                {AROMA_QUIZ_QUESTIONS.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full duration-300 ${
                      i === currentStep ? "bg-luxury-gold scale-125" : "bg-luxury-gold/20"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ) : (
            /* Recommendations Result Screen */
            <div className="relative z-10 flex-grow flex flex-col justify-between animate-fadeIn" id="quiz-result-container">
              <div>
                <div className="flex items-center justify-between text-[10px] text-luxury-gold font-sans tracking-widest uppercase mb-8">
                  <span>Sensory profile matched</span>
                  <span>100% Harmony Finder</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column Profile Pic */}
                  <div className="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square border border-luxury-gold/20 shadow-lg">
                    {recommendedItem && (
                      <img
                        src={recommendedItem.image}
                        alt={recommendedItem.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-luxury-ebony/60"></div>
                  </div>

                  {/* Right Column details */}
                  <div className="md:col-span-7">
                    <span className="text-[10px] font-sans tracking-[0.25em] text-luxury-gold uppercase block mb-1">
                      Recommended for Your Soul
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-coffee-cream font-bold mb-3 leading-tight">
                      {recommendedItem?.name}
                    </h3>

                    {/* Sommelier tag descriptions */}
                    <div className="p-4 rounded-2xl bg-luxury-ebony/80 border border-luxury-gold/10 mb-4">
                      <p className="text-xs text-coffee-beige font-light leading-relaxed italic">
                        "{recommendedItem?.description}"
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[9px] font-bold tracking-widest uppercase bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/25 px-2.5 py-1 rounded-full">
                        {scores[0] === "bold" ? "Rich & Intense Soul" : scores[0] === "fruity" ? "Bright & Elegant Soul" : "Comfort Accent Soul"}
                      </span>
                      <span className="text-[9px] font-bold tracking-widest uppercase bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/25 px-2.5 py-1 rounded-full">
                        {recommendedItem?.caffeineLevel} Potency
                      </span>
                    </div>

                    {/* Est Price */}
                    <p className="text-sm text-coffee-beige/70">
                      Standard luxury serving price: <strong className="text-luxury-gold font-serif text-lg ml-1">₹{recommendedItem?.price}</strong>
                    </p>
                  </div>

                </div>
              </div>

              {/* Reset Actions footer */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 pt-6 border-t border-luxury-gold/15 w-full">
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto inline-flex items-center gap-2 px-5 py-3 rounded-full border border-luxury-gold/20 text-coffee-cream hover:bg-luxury-gold/5 text-xs font-semibold tracking-wider uppercase duration-300"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-luxury-gold" />
                  Retake Sensory Quiz
                </button>
                <a
                  href="#tables"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-luxury-gold text-luxury-ebony font-semibold tracking-wider uppercase text-xs hover:bg-white duration-300 ml-auto shadow-lg shadow-luxury-gold/10"
                >
                  Book Seat to Savour It
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
