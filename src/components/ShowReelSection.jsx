"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import showReel from "../assets/showreel.mp4";

export default function ShowreelSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.05, 1.7]);
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20 });

  const opacityVideo = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      videoRef.current.volume = newMuted ? 0 : 1;
      setIsMuted(newMuted);
    }
  };

  // Fullscreen handler
  const handleFullscreen = () => {
    if (!videoRef.current) return;

    // Modern API
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
    // Safari (iOS)
    else if (videoRef.current.webkitEnterFullscreen) {
      videoRef.current.webkitEnterFullscreen();
    }
  };

  return (
    <section
      id="show-reel"
      ref={ref}
      className="relative flex flex-col items-center h-[180vh] bg-black overflow-hidden"
    >
      <motion.h1
        style={{ opacity: opacityText }}
        className="text-[14vw] font-extrabold text-white tracking-tight z-10 mt-20 mb-16"
      >
        SHOWREEL
      </motion.h1>

      <motion.div
        style={{ scale, opacity: opacityVideo }}
        className="relative w-[90vw] max-w-7xl aspect-video rounded-3xl 
                   overflow-hidden shadow-2xl border border-white/10 z-20"
      >
        <video
          ref={videoRef}
          src={showReel}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover"
        />

        {/* BUTTON GROUP (bottom-right) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {/* Mute / Unmute */}
          <button
            onClick={toggleMute}
            className="bg-black/40 backdrop-blur-sm p-3 rounded-full 
               border border-white/20 text-white 
               hover:bg-black/60 transition-all duration-200"
          >
            {isMuted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75L12 6v12l-3.75-3.75H4.5v-4.5h3.75zm9 0l-4.5 4.5m0-4.5l4.5 4.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75L12 6v12l-3.75-3.75H4.5v-4.5h3.75z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9a3 3 0 010 6m2.25-7.5a6 6 0 010 9"
                />
              </svg>
            )}
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            className="bg-black/40 backdrop-blur-sm p-3 rounded-full 
               border border-white/20 text-white 
               hover:bg-black/60 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V4h4m12 0h-4m4 0v4M4 16v4h4m12 0h-4m4 0v-4"
              />
            </svg>
          </button>
        </div>

        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
    </section>
  );
}
