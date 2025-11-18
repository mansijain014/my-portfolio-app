"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Production", route: "/production" },
  { title: "Event Coverage", route: "/events" },
  { title: "Digital & Creative Service", route: "/digital" },
  { title: "Rentals", route: "/rentals" },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <section
      id="Services"
      className="relative bg-black text-white py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
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
            From films to events to digital campaigns, we bring every idea to
            life with production, creativity, and technology working seamlessly
            together.
          </p>

        </motion.div>

        {/* RIGHT — CLEAN CAPSULES */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => service.route && navigate(service.route)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative group rounded-full border border-white/10 bg-white/5 
  backdrop-blur-md cursor-pointer px-8 py-6 flex items-center justify-between 
  transition-all duration-150 ease-out"
              style={{
                transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                backgroundColor:
                  hoveredIndex === index
                    ? "rgba(145, 39, 180, 0.16)"
                    : "rgba(255,255,255,0.05)",
                borderColor:
                  hoveredIndex === index
                    ? "rgba(191, 69, 248, 0.8)"
                    : "rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-lg md:text-xl font-medium">
                {service.title}
              </span>

              {/* Arrow Animation (FAST) */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-300 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{
                  x: hoveredIndex === index ? 6 : 0,
                }}
                transition={{
                  duration: 0.18,
                  ease: "easeOut",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </motion.svg>
            </motion.div>
          ))}
        </div>
      </div>

      {/* gradient fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
