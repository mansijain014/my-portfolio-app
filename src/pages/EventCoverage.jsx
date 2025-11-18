"use client";

import Navbar from "../components/NavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./EventCoverage.css";
import LiquidEther from "../utils/LiquidEther";
import corporateImg from "../assets/album17.png";
import weddingImg from "../assets/album30.png";
import stageImg from "../assets/album1.png";

const cards = [
  {
    title: "Corporate & Business Events",
    subtitle: "Professional execution for business events & conferences.",
    items: [
      "Conferences & Seminars",
      "Brand Launches",
      "Award Nights",
      "MICE Events",
      "Exhibitions & Expo Setup",
    ],
    image: corporateImg,
  },
  {
    title: "Social & Wedding Events",
    subtitle: "Cinematic storytelling & premium coverage for celebrations.",
    items: [
      "Cinematic Wedding Films",
      "Wedding Photography",
      "Pre-Wedding Shoots",
      "Drone / Aerial Coverage",
      "LED, Sound & Lighting Setup",
    ],
    image: weddingImg,
  },
  {
    title: "Stage & Artist Production",
    subtitle:
      "Complete technical & creative execution for shows & performances.",
    items: [
      "Stage Design & Fabrication",
      "Light & Sound Setup",
      "Technical Crew Management",
      "Artist Management Support",
    ],
    image: stageImg,
  },
];

export default function EventCoverage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const [isFlipped, setIsFlipped] = useState({});

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen text-white overflow-hidden">
        <div className="fixed inset-0 -z-10 pointer-events-none bg-black">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={true}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Slight radial glow for premium look */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(150,0,255,0.15),transparent_70%)] opacity-40" />

        {/* CONTENT */}
        <div className="relative pt-28 md:pt-32 pb-32 px-6 md:px-12 lg:px-20">
          {/* HERO */}
          <section className="text-center mb-20 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase text-purple-300/80 mb-3"
            >
              Pixel Media · Events
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5"
            >
              End-to-End Event Coverage,
              <span className="block text-gray-300 font-medium">
                built for any scale & industry.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-sm md:text-base"
            >
              Corporate, social, wedding & stage events executed with precision,
              creativity, and flawless coordination.
            </motion.p>

            <a href="https://wa.link/lvkvg8" target="_blank">
              <button
                className="bg-white text-black px-5 py-2 mt-6 rounded-full font-medium 
          hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-md mx-auto"
              >
                Enquire Now
              </button>
            </a>
          </section>

          {/* MODULAR GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flip-card ${isFlipped[index] ? "flipped" : ""}`}
                onClick={() => {
                  setIsFlipped((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  }));
                }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={card.image} alt={card.title} />
                    <div className="flip-card-front-overlay">
                      <h3>{card.title}</h3>
                    </div>
                  </div>

                  <div className="flip-card-back">
                    <h2>{card.title}</h2>
                    <p className="subtitle">{card.subtitle}</p>

                    <div className="items-list">
                      {card.items.map((item, i) => (
                        <div key={i} className="item-pill">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
