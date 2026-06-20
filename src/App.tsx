/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import BrewCustomizer from "./components/BrewCustomizer";
import MenuSection from "./components/MenuSection";
import QuizSection from "./components/QuizSection";
import TableReservation from "./components/TableReservation";
import GallerySection from "./components/GallerySection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  // Smooth scroll handler anchors
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExploreMenu = () => scrollToSection("menu");
  const handleOpenReservation = () => scrollToSection("tables");

  return (
    <div className="w-full bg-luxury-ebony text-coffee-cream overflow-x-hidden font-sans antialiased selection:bg-luxury-gold/30 selection:text-white relative" id="main-app-container">
      
      {/* Ambient background glows for Sophisticated Dark atmosphere */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none filter blur-[120px] bg-coffee-brown"></div>
      <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.08] pointer-events-none filter blur-[150px] bg-luxury-gold"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-[0.07] pointer-events-none filter blur-[140px] bg-coffee-brown"></div>
      
      {/* 1. Transparent Header bar */}
      <Header onOpenReservation={handleOpenReservation} />

      {/* 2. Full-screen Cinematic Hero with Ken Burns continuous zoom effect */}
      <Hero
        onExploreMenu={handleExploreMenu}
        onOpenReservation={handleOpenReservation}
      />

      {/* 3. The Philosophy of 'Roobaroo' content block */}
      <About />

      {/* 4. The Digital Artisanal Menu with categories, search, and detail overlays */}
      <MenuSection />

      {/* 5. The Roobaroo Brew Lab Interactive Customizer */}
      <BrewCustomizer />

      {/* 6. Sensory Aroma Questionnaire Quiz Recommendation Matcher */}
      <QuizSection />

      {/* 7. Chambers Tables selection and scheduler with Golden ticket pass generation */}
      <TableReservation isOpen={true} onClose={() => {}} />

      {/* 8. Masonry Visuals Portfolio Gallery */}
      <GallerySection />

      {/* 9. Discerning Local Guides and Critics review slider feedback */}
      <Reviews />

      {/* 10. Warm brand footer with Operation hours, coordinates, and newsletter registry */}
      <Footer />

    </div>
  );
}
