"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy thumbnails – replace with real assets
import thumb1 from "../assets/after-movie-ashoka.png";
import thumb2 from "../assets/sahaja-yoga-short-film.png";
import thumb3 from "../assets/ifp-ad-shoot.png";
import thumb4 from "../assets/audi-expo-shoot.png";
import thumb5 from "../assets/neutron-e-bike-commercial-ad-film.png";
import thumb6 from "../assets/ashish-singhal-success-story.png";
import thumb7 from "../assets/neutron-e-bike-launch.png";
import thumb8 from "../assets/jeevika-documentary.png";
import thumb9 from "../assets/hum-hain-super-star-reality-show.png";
import LiquidEther from "../utils/LiquidEther";
import Navbar from "../components/NavBar";

// MASTER PROJECT LIST
const projects = [
  {
    title: "Ashoka University Convocation 2024 - After Movie",
    category: "Corporate",
    youtubeId: "7mUD3nikyjo",
    thumbnail: thumb1,
    description:
      "A cinematic corporate storytelling film crafted for a modern tech brand.",
    tags: ["Brand Film", "Corporate", "Cinematic"],
  },
  {
    title: "Neutron E-bike Launch",
    category: "Ads & Promos",
    youtubeId: "gTA_lwxVKAw",
    thumbnail: thumb7,
    description:
      "Premium commercial promo highlighting design, detail & product value.",
    tags: ["Product", "Commercial", "Ad Film"],
  },
  {
    title: "A Sahaja Yoga Short Film",
    category: "Short Films & Shows",
    youtubeId: "qNXX6wLkqus",
    thumbnail: thumb2,
    description:
      "Emotional, cinematic wedding storytelling with a strong narrative arc.",
    tags: ["Wedding", "Teaser", "Cinematic"],
  },
  {
    title: "The Audi Experience | Celebration Of Progress",
    category: "Ads & Promos",
    youtubeId: "PVPjcsQ4cVo",
    thumbnail: thumb4,
    description:
      "Premium commercial promo highlighting design, detail & product value.",
    tags: ["Product", "Commercial", "Ad Film"],
  },
  {
    title: "Neutron E-bike Commercial Ad Film",
    category: "Ads & Promos",
    youtubeId: "jd3q16M4Yds",
    thumbnail: thumb5,
    description:
      "Capturing high-energy moments and turning them into a cinematic recap.",
    tags: ["Aftermovie", "Event", "Cinematic"],
  },
  {
    title: "Ashish Singhal Success Story",
    category: "Corporate",
    youtubeId: "A4EMGNEjjkU",
    thumbnail: thumb6,
    description:
      "Editorial Short Films visuals blending movement, texture and lighting.",
    tags: ["Short Films", "Editorial", "Film"],
  },
  {
    title: "Hum Hain Superstar - Reality Show",
    category: "Short Films & Shows",
    youtubeId: "38Q1K6w6cwQ",
    thumbnail: thumb9,
    description:
      "Editorial Short Films visuals blending movement, texture and lighting.",
    tags: ["Short Films", "Editorial", "Film"],
  },
  {
    title: "Jeevika Documentary",
    category: "Ads & Promos",
    youtubeId: "20lEZBuGZIw",
    thumbnail: thumb8,
    description:
      "A fast-paced music video combining choreography, color and performance.",
    tags: ["Music Video", "Performance", "Creative Direction"],
  },
  {
    title: "IFP Ad",
    category: "Ads & Promos",
    youtubeId: "Or7YefkwrEY",
    thumbnail: thumb3,
    description:
      "A fast-paced music video combining choreography, color and performance.",
    tags: ["Music Video", "Performance", "Creative Direction"],
  },
];

// ORDERED CATEGORY TABS
const categoryTabs = [
  "All",
  "Corporate",
  "Short Films & Shows",
  "Events",
  "Ads & Promos",
  "Music Videos",
  "Weddings",
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null); // index in filtered list
  const [sectionInView, setSectionInView] = useState(false);

  // Filtered list based on category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const activeProject =
    activeIndex !== null ? filteredProjects[activeIndex] : null;

  // Close modal if category changes while open
  useEffect(() => {
    if (activeIndex !== null) {
      setActiveIndex(null);
    }
  }, [activeCategory]);

  // Keyboard controls for lightbox: ESC, ←, →
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % filteredProjects.length
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + filteredProjects.length) % filteredProjects.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredProjects.length]);

  return (
    <section id="Projects" className="py-24 px-6 md:px-12 lg:px-20 text-white">
      <Navbar />
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
      {/* CINEMATIC SECTION ENTRANCE */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onViewportEnter={() => setSectionInView(true)}
      >
        {/* TITLE */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-purple-300/80 mb-3">
            Pixel Media · Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A curated selection of films, weddings, events and campaigns we've
            crafted for brands and people.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categoryTabs.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-xs md:text-sm border 
                  transition-all duration-300 backdrop-blur-md
                  ${
                    isActive
                      ? "bg-white text-black border-white shadow-lg"
                      : "bg-white/5 border-white/15 text-gray-200 hover:bg-white/10 hover:border-white/30"
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.title + i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid border border-white/10 bg-white/5 backdrop-blur-md"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={
                sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: "easeOut",
              }}
            >
              {/* Thumbnail */}
              <img
                src={p.thumbnail}
                alt={p.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
              />

              {/* Gradient overlay when hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Text overlay */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-[0.25em] text-purple-200/80 mb-1">
                  {p.category}
                </p>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close click on background */}
            <div
              className="absolute inset-0"
              onClick={() => setActiveIndex(null)}
            />

            {/* Modal content */}
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-black rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/80">
                    {activeProject.category}
                  </p>
                  <h3 className="text-sm md:text-base font-semibold">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-200 transition-all text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Smaller YouTube Player */}
              <div className="w-full bg-black">
                <div className="relative w-full pb-[48%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeProject.youtubeId}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    title={activeProject.title}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="px-4 md:px-5 py-4 space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[10px] bg-white/10 border border-white/15 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        setActiveIndex(
                          (prev) =>
                            (prev - 1 + filteredProjects.length) %
                            filteredProjects.length
                        )
                      }
                      className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/15 hover:bg-white/15 transition-all"
                    >
                      ← Previous
                    </button>

                    <button
                      onClick={() =>
                        setActiveIndex(
                          (prev) => (prev + 1) % filteredProjects.length
                        )
                      }
                      className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/15 hover:bg-white/15 transition-all"
                    >
                      Next →
                    </button>
                  </div>

                  <p className="text-[10px] text-gray-400 hidden sm:block">
                    Use <b>Esc</b>, <b>←</b>, <b>→</b> to navigate.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
