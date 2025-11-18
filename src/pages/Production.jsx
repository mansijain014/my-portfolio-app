"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/NavBar";
import LiquidEther from "../utils/LiquidEther";

import videoImg from "../assets/video-production.jpg";
import photoImg from "../assets/photography.jpg";
import liveImg from "../assets/broadcast.jpg";

const sections = [
  {
    id: "video-production",
    title: "Video Production",
    subtitle:
      "Corporate, commercial, event-based, and story-driven films that connect with your audience.",
    items: [
      "Corporate Films",
      "Brand & Product Videos",
      "Event Aftermovies",
      "Social Media Videos",
      "Music Videos",
      "Interviews & Testimonials",
      "Documentary Films",
    ],
    image: videoImg,
  },
  {
    id: "photography",
    title: "Photography",
    subtitle: "High-quality visuals for brands, products, events, and people.",
    items: [
      "Corporate Photography",
      "Event Photography",
      "Product & Catalogue Shoots",
      "Lifestyle & Portrait Photography",
    ],
    image: photoImg,
  },
  {
    id: "live-production",
    title: "Live Production & Broadcast",
    subtitle:
      "Multi-camera setups, live streaming, and broadcast-level execution for events of all scales.",
    items: [
      "Multi-Camera Setup (Ikegami / Broadcast Cameras)",
      "Live Streaming (YouTube, Zoom, Facebook)",
      "Virtual & Hybrid Events",
      "LED Wall Content Management",
      "Technical Crew & Equipment Support",
    ],
    image: liveImg,
  },
];

export default function Production() {
  const scrollContainerRef = useRef(null);

  // Hero scroll animation
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.4, 0]
  );
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroScale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.9]);

  return (
    <>
      <Navbar />
      <main
        ref={scrollContainerRef}
        className="relative min-h-screen bg-black text-white overflow-hidden"
      >
        {/* smoothed dark gradient for readability */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        {/* MAIN CONTENT */}
        <div className="relative pt-28 md:pt-32 pb-24 px-4 md:px-10 lg:px-20">
          {/* HERO SECTION */}
          <section className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div
              style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="max-w-4xl"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-purple-300/80 mb-4">
                Pixel Media · Production
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
                Films, Photography & Broadcast,
                <span className="block text-gray-300 font-normal">
                  all under one production roof.
                </span>
              </h1>

              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
                From corporate films to multi-camera live broadcasts, we handle
                every frame with cinematic precision - planning, crew, gear, and
                post-production included.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200">
                  Corporate & Brand Films
                </span>
                <span className="px-4 py-2 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200">
                  Photo & Video Teams
                </span>
                <span className="px-4 py-2 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-gray-200">
                  Live Streaming & Broadcast
                </span>
              </div>
            </motion.div>

            <a href="https://wa.link/lvkvg8" target="_blank">
              <button
                className="bg-white text-black px-5 py-2 mt-6 rounded-full font-medium 
          hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-md mx-auto"
              >
                Enquire about a production
              </button>
            </a>
          </section>

          {/* CONTENT SECTIONS — ALTERNATING LAYOUT */}
          <section className="space-y-16 md:space-y-24 px-4 sm:px-6 md:px-8 lg:px-10">
            {sections.map((sec, index) => {
              const isReversed = index % 2 === 1;

              return (
                <motion.div
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`flex flex-col items-center gap-10 md:gap-12 lg:gap-16 ${
                    isReversed ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Image block */}
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.65)]">
                      <motion.img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                  </div>

                  {/* Text block */}
                  <div className="w-full md:w-1/2 max-w-xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
                      {sec.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base mb-6">
                      {sec.subtitle}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-gray-200 text-sm md:text-base">
                      {sec.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 bg-white/5 border border-white/5 rounded-xl px-3 py-2.5 backdrop-blur-sm"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
