"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Example service data
const services = [
  {
    title: "Video Production",
    image: "/services/video-production.jpg",
  },
  {
    title: "Editing & Post Production",
    image: "/services/editing.jpg",
  },
  {
    title: "Ad Films & Commercials",
    image: "/services/ad-films.jpg",
  },
  {
    title: "Event Coverage",
    image: "/services/event.jpg",
  },
  {
    title: "Social Media Content",
    image: "/services/social-media.jpg",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="Services"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
        {/* ─── LEFT TEXT CONTENT ─── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h3 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
            From Concept To Completion:
            <br />
            <span className="text-gray-400 font-normal">
              We've Got You Covered!
            </span>
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
            We handle every aspect of video creation, from ideation to final
            delivery. Our team ensures your story connects with your audience
            every step of the way.
          </p>

          {/* 🔘 Explore Services Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm md:text-base font-medium 
                       text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300"
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* ─── RIGHT CAPSULES ─── */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden cursor-pointer 
                         transition-all duration-500 ease-out hover:bg-white/10"
            >
              {/* Capsule text and arrow */}
              <div className="relative z-10 px-8 py-6 flex items-center justify-between">
                <span className="text-lg md:text-xl font-medium">
                  {service.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>

              {/* Hover image reveal */}
              <motion.img
                src={service.image}
                alt={service.title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  scale: hoveredIndex === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />

              {/* Dark overlay for better readability */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
