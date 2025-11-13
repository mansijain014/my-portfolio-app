"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import showReel from "../assets/showreel.mp4";

export default function ShowreelSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Dramatic zoom effect (with spring smoothing)
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.05, 1.7]);
  const scale = useSpring(rawScale, {
    stiffness: 60,
    damping: 20,
  });

  // Fade and motion controls
  const opacityVideo = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="show-reel"
      ref={ref}
      className="relative flex flex-col items-center h-[180vh] bg-black overflow-hidden"
    >
      {/* --- TEXT --- */}
      <motion.h1
        style={{ opacity: opacityText }}
        className="text-[14vw] font-extrabold text-white tracking-tight z-10 mt-20 mb-16"
      >
        SHOWREEL
      </motion.h1>

      {/* --- VIDEO CARD --- */}
      <motion.div
        style={{ scale, opacity: opacityVideo }}
        className="relative w-[90vw] max-w-7xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-20"
      >
        <video
          // src={showReel}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* --- CINEMATIC OVERLAY --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
    </section>
  );
}
