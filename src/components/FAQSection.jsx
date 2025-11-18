"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you provide both photo & video services for events?",
    a: "Yes. Pixel Media offers full-service production solutions including photography, videography, cinematic films, drone coverage, and multi-camera setups for events, weddings, corporate shoots, and brand campaigns. We handle everything from pre-production to final delivery.",
  },
  {
    q: "How early should we book your team for a shoot or event?",
    a: "For weddings and large events, booking 30–60 days in advance is ideal. Corporate shoots, product shoots, and small events can be booked 5-7 days prior depending on crew and equipment availability. Don't hesitate to reach out to us for your last minute needs as well.",
  },
  {
    q: "Do you travel for shoots outside the city or country?",
    a: "Absolutely. We travel pan-India and internationally for wedding shoots, corporate events, brand films, and commercial productions. Travel and accommodation are discussed during booking.",
  },
  {
    q: "What deliverables do you provide after the shoot? Can we customise the deliverables?",
    a: "We provide, High-resolution edited photos, Cinematic teaser + main film, Event aftermovies, Reels/short-form edits, Raw footage (optional), Drone shots (if included). Deliverables depend on the requirements.",
  },
  {
    q: "What are your pricing and payment terms?",
    a: "Pricing depends on crew size, equipment, shoot duration, location, and editing requirements. Our standard payment terms are 50% advance and 50% upon final delivery.",
  },
  {
    q: "Do you provide equipment along with the crew?",
    a: "Yes. We provide complete production gear - cameras, lenses, lighting, audio equipment, gimbals, monitors, and broadcast setups, all operated by trained professionals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faqs"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-white"
    >
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-14">
        Frequently Asked Questions
        <span className="block text-gray-400 text-base mt-3">
          Everything you need to know about us.
        </span>
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className="
                rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                px-6 py-4 cursor-pointer transition-all duration-300
                hover:bg-white/10 hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(150,0,255,0.25)]
              "
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{faq.q}</p>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300"
                >
                  ▼
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 text-gray-300 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
