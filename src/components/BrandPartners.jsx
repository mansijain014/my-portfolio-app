"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Nike", src: "/brands/nike.svg" },
  { name: "Adidas", src: "/brands/adidas.svg" },
  { name: "Sony", src: "/brands/sony.svg" },
  { name: "Canon", src: "/brands/canon.svg" },
  { name: "Apple", src: "/brands/apple.svg" },
  { name: "Google", src: "/brands/google.svg" },
  { name: "Samsung", src: "/brands/samsung.svg" },
  { name: "Red Bull", src: "/brands/redbull.svg" },
];

export default function BrandPartners() {
  return (
    <section
      id="brand-partners"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Title */}
      <h2 className="text-center text-white uppercase tracking-[0.2em] text-sm mb-12">
        Standing Tall with Our Esteemed Brand Partners
      </h2>

      {/* Outer Capsule */}
      <div className="relative w-[95%] max-w-7xl mx-auto rounded-full bg-white/5 border border-white/30 backdrop-blur-md overflow-hidden">
        {/* Scrolling Logos */}
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-6 px-12 py-6 border-r border-white/30 last:border-none"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="h-8 sm:h-10 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent"></div>
    </section>
  );
}
