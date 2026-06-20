/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Calendar, Users, Clock, Sparkles, ChevronRight, CheckCircle, Copy, Share2, Printer } from "lucide-react";
import { TABLE_TYPES } from "../data";

interface TableReservationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableReservation({ isOpen, onClose }: TableReservationProps) {
  const [selectedTable, setSelectedTable] = useState(TABLE_TYPES[0].id);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [specialRequest, setSpecialRequest] = useState("");
  
  // States representing reservation completion ticket
  const [inviteTicket, setInviteTicket] = useState<{
    token: string;
    name: string;
    email: string;
    table: string;
    date: string;
    time: string;
    guests: number;
  } | null>(null);

  const [copiedToken, setCopiedToken] = useState(false);

  const activeTableObj = TABLE_TYPES.find((t) => t.id === selectedTable) || TABLE_TYPES[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !bookingDate || !bookingTime) {
      alert("Please fill out all required fields to register your private chamber.");
      return;
    }

    // Auto-generate complex VIP token
    const randomHex = Math.floor(100000 + Math.random() * 900000).toString();
    const tokenStr = `RBR-${activeTableObj.name.substring(4, 7).toUpperCase()}-${randomHex}`;

    setInviteTicket({
      token: tokenStr,
      name: guestName,
      email: guestEmail,
      table: activeTableObj.name,
      date: bookingDate,
      time: bookingTime,
      guests: guestCount,
    });
  };

  const copyTokenToClipboard = () => {
    if (!inviteTicket) return;
    navigator.clipboard.writeText(inviteTicket.token);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2500);
  };

  const resetBookingForm = () => {
    setInviteTicket(null);
    setGuestName("");
    setGuestEmail("");
    setBookingDate("");
    setBookingTime("");
    setGuestCount(2);
    setSpecialRequest("");
  };

  // Pre-determined luxury hours slots
  const timeSlots = [
    "08:00 AM – 10:00 AM (Serene Breakfast)",
    "11:00 AM – 01:00 PM (Aesthetic Brunch)",
    "02:00 PM – 04:00 PM (High Tea Ritual)",
    "05:00 PM – 07:00 PM (Cosy Twilight Sunset)",
    "08:00 PM – 10:30 PM (Grand Regal Dinner)",
  ];

  return (
    <section id="tables" className="py-24 bg-luxury-ebony border-t border-luxury-gold/5 relative">
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-luxury-gold uppercase px-3 py-1 rounded-full bg-luxury-gold/10 inline-block mb-3">
            Private Seating
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-coffee-cream font-bold mb-4">
            Reserve An Exquisite Sanctuary
          </h2>
          <p className="text-sm md:text-base text-coffee-beige/70 font-light">
            We hold a selected count of private spaces for guest comfort. Select from libraries, 
            natural solariums, or intimate fireside booths to secure your VIP Roobaroo date.
          </p>
        </div>

        {/* Display Chamber Choices Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" id="chambers-grid">
          {TABLE_TYPES.map((table) => {
            const isSelected = selectedTable === table.id;
            return (
              <div
                key={table.id}
                onClick={() => {
                  setSelectedTable(table.id);
                  setGuestCount(Math.min(guestCount, table.capacity));
                }}
                className={`cursor-pointer rounded-3xl overflow-hidden glass-panel flex flex-col justify-between transition-all duration-500 hover:scale-101 border ${
                  isSelected
                    ? "border-luxury-gold ring-1 ring-luxury-gold/40 shadow-2xl shadow-luxury-gold/5"
                    : "border-luxury-gold/15 hover:border-luxury-gold/40"
                }`}
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={table.image}
                    alt={table.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-ebony via-transparent to-transparent opacity-60"></div>
                  
                  {/* Select Badge Indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                      isSelected ? "bg-luxury-gold text-luxury-ebony shadow-md" : "bg-luxury-ebony/90 text-coffee-cream"
                    }`}>
                      {isSelected ? "Selected Core" : "Select Chamber"}
                    </span>
                  </div>
                </div>

                {/* Details text area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-[17px] text-coffee-cream font-bold">
                        {table.name}
                      </h4>
                      <span className="text-[10px] text-luxury-gold font-sans font-semibold tracking-widest uppercase">
                        Capacity {table.capacity} VIPs
                      </span>
                    </div>
                    <p className="text-[12px] text-coffee-beige/60 font-light leading-relaxed mb-4">
                      {table.description}
                    </p>
                  </div>

                  {/* Bullet Bullet features */}
                  <div className="border-t border-luxury-gold/10 pt-4 mt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {table.features.map((feat) => (
                        <span key={feat} className="text-[9px] tracking-wider uppercase bg-luxury-cocoa/55 text-coffee-beige/95 border border-luxury-gold/5 px-2 py-0.5 rounded-full">
                          • {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Display Booking panel or Golden Invitation Ticket Receipt */}
        <div className="max-w-4xl mx-auto">
          {!inviteTicket ? (
            /* ACTIVE BOOKING SCHEDULER FORM Card */
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-[2rem] glass-panel relative shadow-2xl animate-fadeIn"
              id="reservation-booking-form"
            >
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/5 pointer-events-none rounded-[1.8rem]"></div>

              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-coffee-cream font-bold mb-6 text-center">
                  Reservation Parameters for <span className="text-luxury-gold">{activeTableObj.name}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Host Name input */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      VIP Host Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nawab Wajihuddin"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream placeholder-coffee-beige/30"
                    />
                  </div>

                  {/* Host Email input */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      VIP Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. host@royal-hyderabad.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream placeholder-coffee-beige/30"
                    />
                  </div>

                  {/* Selection Date */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream text-left block"
                      />
                    </div>
                  </div>

                  {/* Selection Luxury Hour Slot selection */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      Chamber Time Slot *
                    </label>
                    <select
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream"
                    >
                      <option value="" className="bg-luxury-ebony text-coffee-beige/40">Select a curated slot...</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-luxury-ebony text-coffee-cream">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Count of Guests Slider */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      Number of Guests (Max {activeTableObj.capacity} for this room)
                    </label>
                    <div className="flex items-center gap-4 bg-luxury-ebony border border-luxury-gold/15 p-3 rounded-xl h-12">
                      <Users className="w-4 h-4 text-luxury-gold" />
                      <input
                        type="range"
                        min="1"
                        max={activeTableObj.capacity}
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                        className="flex-1 accent-luxury-gold h-1 rounded bg-luxury-cocoa"
                      />
                      <span className="text-xs font-bold text-coffee-cream font-mono w-6 text-right">
                        {guestCount}
                      </span>
                    </div>
                  </div>

                  {/* Special Requests notes */}
                  <div>
                    <label className="text-[10px] tracking-widest font-sans font-semibold text-luxury-gold uppercase mb-2 block">
                      Special Celebration Accommodations (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Wedding proposal, vegan menu preferences, extreme quiet zone"
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-luxury-ebony border border-luxury-gold/15 text-xs text-coffee-cream placeholder-coffee-beige/30"
                    />
                  </div>

                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 rounded-full bg-luxury-gold text-luxury-ebony font-sans text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-luxury-ebony duration-500 shadow-xl shadow-luxury-gold/10"
                    id="submit-booking-action"
                  >
                    Transmit Chamber Request
                  </button>
                  <p className="text-[10px] text-coffee-beige/50 mt-3">
                    By submitting, you agree to fine-dining dress etiquette (smart casual) of Roobaroo Cafe Hyderabad.
                  </p>
                </div>
              </div>
            </form>
          ) : (
            /* GOLDEN INVITATION VIP TICKET PASS DISPLAY RENDER */
            <div
              className="p-8 pb-10 rounded-[2.5rem] bg-gradient-to-tr from-[#1f1612] to-[#120e0c] border border-luxury-gold/60 relative overflow-hidden shadow-2xl animate-zoomIn"
              id="golden-ticket-pass"
            >
              {/* Fine gold concentric border borders */}
              <div className="absolute top-3 left-3 right-3 bottom-3 border-2 border-luxury-gold/30 pointer-events-none rounded-[1.9rem]"></div>
              <div className="absolute top-5 left-5 right-5 bottom-5 border border-luxury-gold/15 pointer-events-none rounded-[1.7rem]"></div>

              {/* Floating watermark ornaments */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0 pointer-events-none rotate-45">
                <Sparkles className="w-96 h-96 text-luxury-gold" />
              </div>

              <div className="relative z-10 text-center flex flex-col items-center">
                
                {/* VIP badge icon */}
                <div className="w-16 h-16 rounded-full border-2 border-luxury-gold bg-luxury-ebony flex items-center justify-center p-3 text-luxury-gold mb-6 shadow-xl animate-float">
                  <Sparkles className="w-8 h-8 text-luxury-gold" />
                </div>

                <span className="text-[10px] tracking-[0.3em] font-sans text-luxury-gold font-bold uppercase mb-1">
                  Hyderabadi Deccan Registry
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-coffee-cream font-bold mb-1 tracking-tight">
                  Golden Chamber Invitation
                </h3>
                <p className="text-[11px] text-coffee-beige/50 uppercase tracking-widest font-sans font-semibold mb-6">
                  VIP Pass • Face-To-Face Sanctuary
                </p>

                {/* Ticket Body Details Matrix */}
                <div className="w-full max-w-lg bg-luxury-ebony/90 backdrop-blur-md rounded-2xl border border-luxury-gold/15 p-6 md:p-8 text-left space-y-5 mb-8">
                  
                  {/* Grid values */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    
                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">VIP HOST GUEST</span>
                      <strong className="text-coffee-cream font-serif text-sm tracking-wide block">{inviteTicket.name}</strong>
                    </div>

                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">CHAMBER CODE</span>
                      <strong className="text-luxury-gold font-serif text-sm tracking-wide block">{inviteTicket.token}</strong>
                    </div>

                    <div className="col-span-2 border-t border-luxury-gold/5 my-1"></div>

                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">RESERVED SANCTUARY</span>
                      <strong className="text-coffee-cream font-serif text-sm tracking-wide block">{inviteTicket.table}</strong>
                    </div>

                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">GUESTS PERMITTED</span>
                      <strong className="text-coffee-cream font-serif text-sm tracking-wide block">{inviteTicket.guests} Persons</strong>
                    </div>

                    <div className="col-span-2 border-t border-luxury-gold/5 my-1"></div>

                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">BOOKING DATE</span>
                      <strong className="text-coffee-cream font-serif text-sm tracking-wide block">{inviteTicket.date}</strong>
                    </div>

                    <div>
                      <span className="text-[9px] tracking-widest font-bold text-[#8c7468] uppercase block mb-1">HOUR SEGMENT TIME</span>
                      <strong className="text-coffee-cream font-serif text-sm tracking-wide block">{inviteTicket.time.split(" (")[0]}</strong>
                    </div>

                  </div>

                  {/* Instruction block inside registry ticket */}
                  <div className="pt-4 border-t border-luxury-gold/10 text-[10px] text-coffee-beige/65 font-light leading-relaxed space-y-1">
                    <p className="font-semibold text-luxury-gold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Guest Code of Etiquette:
                    </p>
                    <p>• Valet parking is located at Road No. 4 Banjara Hills entrance.</p>
                    <p>• Chambers are held for maximum 20 minutes past slot start.</p>
                    <p>• Smart casual outfit codes requested (closed footwear preferred).</p>
                    {specialRequest && (
                      <p className="mt-2 text-luxury-gold"><strong>* Special Request:</strong> "{specialRequest}"</p>
                    )}
                  </div>

                </div>

                {/* Ticket Buttons row */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg justify-center">
                  
                  {/* Copy code button */}
                  <button
                    onClick={copyTokenToClipboard}
                    className="w-full sm:flex-1 py-3 px-5 rounded-full border border-luxury-gold bg-luxury-gold/5 text-luxury-gold text-xs font-semibold tracking-widest uppercase hover:bg-luxury-gold hover:text-luxury-ebony duration-300 flex items-center justify-center gap-2"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    {copiedToken ? "Pass Copied!" : "Copy Pass Code"}
                  </button>

                  {/* Done button resets view */}
                  <button
                    type="button"
                    onClick={resetBookingForm}
                    className="w-full sm:flex-1 py-3 px-5 rounded-full bg-luxury-gold text-luxury-ebony text-xs font-semibold tracking-widest uppercase hover:bg-white duration-300 shadow-xl shadow-luxury-gold/10"
                  >
                    Confirm & Reserve Another
                  </button>

                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
