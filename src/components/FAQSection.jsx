"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you provide both photo & video services for events?",
    a: "Yes, we provide complete production including photography, videography, cinematic films, drone coverage and multi-camera setups.",
  },
  {
    q: "How early should we book your team?",
    a: "For weddings and large events, we recommend booking 30–60 days in advance. For corporate shoots, 7–10 days is ideal.",
  },
  {
    q: "Do you travel for shoots outside the city?",
    a: "Yes, our team travels across India. Travel and stay are arranged as per the project's requirement.",
  },
  {
    q: "Can we customise the deliverables?",
    a: "Absolutely. Every project is tailored from film style to edit duration, social media cuts, reels, and more.",
  },
  {
    q: "What are your payment terms?",
    a: "Typically 40% advance for booking, 40% on shoot day, and the remaining 20% at delivery. This may vary based on project size.",
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
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                         px-6 py-4 cursor-pointer transition-all"
              onClick={() => setOpenIndex(isOpen ? null : index)}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
