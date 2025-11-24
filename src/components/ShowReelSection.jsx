"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lottie from "lottie-react";
import pixelLoader from "../lottie/pixel-loader.json"; // <-- ADD THIS
import showReel from "../assets/showreel.mp4";

export default function ShowreelSection() {
  const ref = useRef(null);
  const videoRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.05, 1.4]);
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20 });

  const opacityVideo = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Detect when video is ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setIsVideoLoaded(true);

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("canplaythrough", handleLoaded);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("canplaythrough", handleLoaded);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <section
      id="show-reel"
      ref={ref}
      className="
    relative flex flex-col items-center 
    md:h-[160vh]         /* tablet */
    lg:h-[180vh]         /* desktop */
    bg-black overflow-hidden
  "
    >
      {/* TITLE */}
      <motion.h1
        style={{ opacity: opacityText }}
        className="text-[14vw] font-extrabold text-white tracking-tight z-10 mt-20 mb-16"
      >
        SHOWREEL
      </motion.h1>

      {/* VIDEO WRAPPER */}
      <motion.div
        style={{ scale, opacity: opacityVideo }}
        className="relative w-[90vw] max-w-7xl aspect-video rounded-3xl 
                    overflow-hidden shadow-2xl border border-white/10 z-20"
      >
        {/* SKELETON + LOTTIE LOADER */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 rounded-3xl bg-white/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 animate-pulse" />

            {/* LOTTIE ANIMATION */}
            <Lottie
              animationData={pixelLoader}
              loop
              autoplay
              className="w-32 h-32 opacity-80"
            />
          </div>
        )}

        {/* VIDEO */}
        <video
          ref={videoRef}
          src={showReel}
          autoPlay
          playsInline
          loop
          muted={isMuted}
          className={`w-full h-full object-cover transition-opacity duration-500 
            ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* CONTROLS */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
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
        </div>
      </motion.div>

      {/* FADE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none" />
    </section>
  );
}
