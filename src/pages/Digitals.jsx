"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/NavBar";
import LiquidEther from "../utils/LiquidEther";

import brandingImg from "../assets/branding.jpg";
import marketingImg from "../assets/digital-marketing.jpg";
import postImg from "../assets/video-editing.jpg";

export default function CreativeServicesSplit() {
  const [active, setActive] = useState(null);
  // Close card when user taps outside (mobile fix)
  useEffect(() => {
    function handleTouch() {
      setActive(null);
    }
    document.addEventListener("touchstart", handleTouch);

    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  const sections = [
    {
      title: "Digital Marketing",
      subtitle: "Growth-focused performance marketing for modern brands.",
      items: [
        "Social Media Management",
        "Meta & Google Ads",
        "Influencer Marketing",
        "Campaign Strategy",
      ],
      image: marketingImg,
    },
    {
      title: "Creative & Branding",
      subtitle: "Identity, design & storytelling for brands.",
      items: [
        "Brand Identity Design",
        "Logo Design",
        "Packaging & Print",
        "Creative Campaigns",
        "Scriptwriting",
      ],
      image: brandingImg,
    },
    {
      title: "Post-Production",
      subtitle: "Transform raw footage into cinematic visuals.",
      items: [
        "Video Editing",
        "Motion Graphics",
        "Color Grading",
        "VFX",
        "Reels & Short Form",
      ],
      image: postImg,
    },
  ];

  // Scroll animation like Production.jsx
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      <Navbar />

      <main
        ref={scrollContainerRef}
        className="relative min-h-screen text-white overflow-hidden"
      >
        {/* LIQUID ETHER BACKGROUND */}
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

        {/* CONTENT */}
        <div className="relative pt-28 md:pt-32 pb-24 px-4 md:px-10 lg:px-20">
          {/* HERO */}
          <section className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
              transition={{ type: "spring", stiffness: 90, damping: 22 }}
              className="max-w-4xl"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-purple-300/80 mb-4">
                Pixel Media · Creative Services
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
                Creative, Branding & Marketing
                <span className="block text-gray-300 font-normal">
                  cinematic strategies for ambitious brands.
                </span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
                From branding and creative strategy to digital marketing and
                post-production, we craft visual and narrative experiences that
                help businesses grow.
              </p>
              <a href="https://wa.link/lvkvg8" target="_blank">
                <button
                  className="bg-white text-black px-5 py-2 mt-6 rounded-full font-medium 
          hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-md mx-auto"
                >
                  Enquire about a service
                </button>
              </a>
            </motion.div>
          </section>

          {/* SPLIT-SCREEN CARDS */}
          <section className="flex flex-col gap-12 max-w-7xl mx-auto">
            {sections.map((sec, index) => (
              <div
                key={index}
                className="relative group w-full h-[320px] md:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl border border-white/10
                           backdrop-blur-xl bg-white/5 cursor-pointer"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onTouchStart={(e) => e.stopPropagation()}
                onClick={() => setActive(active === index ? null : index)}
              >
                {/* Left Image Panel */}
                <motion.div
                  className="absolute inset-0 w-1/2"
                  animate={{ x: active === index ? "-8%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </motion.div>

                {/* Right Title Panel */}
                <motion.div
                  className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center text-center p-6"
                  animate={{ x: active === index ? "8%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                      {sec.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {sec.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Center Reveal List */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    opacity: active === index ? 1 : 0,
                    scale: active === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <div className="bg-black/60 backdrop-blur-xl px-6 py-6 rounded-2xl border border-white/10 shadow-xl">
                    <div className="flex flex-col gap-3 text-center">
                      {sec.items.map((item, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 
                                     hover:bg-purple-400/20 hover:border-purple-400/40 
                                     transition-all text-sm md:text-base"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </section>

          <div className="h-20" />
        </div>
      </main>
    </>
  );
}
