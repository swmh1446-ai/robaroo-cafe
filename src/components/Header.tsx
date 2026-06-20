/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Coffee, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Menu", href: "#menu" },
    { name: "Brew Lab", href: "#brew-lab" },
    { name: "Aroma Quiz", href: "#aroma-quiz" },
    { name: "Seating", href: "#tables" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-luxury-ebony/90 backdrop-blur-md border-b border-luxury-gold/10 py-3 shadow-lg"
          : "bg-gradient-to-b from-luxury-ebony/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-full border border-luxury-gold/40 flex items-center justify-between p-2 bg-luxury-cocoa/40 group-hover:border-luxury-gold duration-500">
            <Coffee className="w-5 h-5 text-luxury-gold group-hover:rotate-12 duration-500" />
          </div>
          <div>
            <span className="font-serif text-lg tracking-[0.25em] text-coffee-cream group-hover:text-luxury-gold transition-colors duration-300 block uppercase font-medium">
              Roobaroo
            </span>
            <span className="text-[9px] font-sans tracking-[0.4em] text-luxury-gold/70 group-hover:text-luxury-gold block uppercase ml-0.5">
              Luxury Cafe
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] tracking-widest font-sans font-medium text-coffee-cream/80 hover:text-luxury-gold transition-all duration-300 uppercase relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button & Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-luxury-gold/40 bg-luxury-gold/5 text-luxury-gold text-[10px] font-medium tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-ebony transition-all duration-500 transform hover:-translate-y-0.5 shadow-md shadow-luxury-gold/5 cursor-pointer"
            id="book-table-btn"
          >
            <Sparkles className="w-3 h-3" />
            Book A Table
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-coffee-cream/90 hover:text-luxury-gold transition-colors p-2"
            aria-label="Toggle navigation menu"
            id="menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with backdrop filter */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-luxury-ebony/95 backdrop-blur-xl z-40 flex flex-col p-8 md:hidden transition-all duration-300 animate-fadeIn"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-6 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-widest font-serif text-coffee-cream hover:text-luxury-gold duration-300 border-b border-luxury-gold/5 pb-3 uppercase flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-luxury-gold/40">›</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pb-12 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full text-center px-6 py-3.5 rounded-full bg-luxury-gold text-luxury-ebony font-semibold tracking-widest uppercase text-xs shadow-lg shadow-luxury-gold/20 duration-300 hover:bg-luxury-gold-dark"
            >
              Reserve Private Seating
            </button>
            <p className="text-center text-[10px] tracking-widest text-[#8c7468] uppercase">
              Road No. 4, Banjara Hills, Hyderabad
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
