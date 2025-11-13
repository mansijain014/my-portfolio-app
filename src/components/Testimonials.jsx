"use client";

import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/testimonial-bg.jpg";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, Creative Vision",
    image: "/clients/aarav.jpg",
    quote: "Pixel Media transformed our story into something unforgettable.",
  },
  {
    name: "Neha Patel",
    role: "Marketing Head, Horizon Group",
    image: "/clients/neha.jpg",
    quote: "Every frame felt intentional and emotional — brilliant team.",
  },
  {
    name: "Rahul Verma",
    role: "Director, Vibe Studios",
    image: "/clients/rahul.jpg",
    quote: "From script to screen, they delivered beyond expectations.",
  },
  {
    name: "Simran Kaur",
    role: "CEO, Dreamline Productions",
    image: "/clients/simran.jpg",
    quote: "Professional, passionate and creative team — amazing experience.",
  },
];

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [position, setPosition] = useState(0);
  const speed = 0.7; // auto scroll speed
  const resumeTimer = useRef(null);
  const animationFrame = useRef(null);
  const itemWidth = 480; // approximate card width including gap

  // Start infinite auto scrolling
  const startAutoScroll = () => {
    const loop = () => {
      setPosition((prev) => {
        const newPos = prev - speed;

        // If we scrolled one full group, reset smoothly
        if (Math.abs(newPos) >= itemWidth * testimonials.length) {
          return 0; // reset without visual jump
        }
        return newPos;
      });

      animationFrame.current = requestAnimationFrame(loop);
    };

    animationFrame.current = requestAnimationFrame(loop);
  };

  // Stop auto scroll
  const stopAutoScroll = () => {
    cancelAnimationFrame(animationFrame.current);
  };

  // Manual scroll with buttons
  const manualScroll = (direction) => {
    stopAutoScroll(); // pause auto scroll during manual movement

    const duration = 400; // smooth scroll duration
    const distance = direction * itemWidth;
    const start = performance.now();
    const initialPos = position;

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3); // smooth cubic ease-out

      setPosition(initialPos + distance * easing);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // resume auto-scroll AFTER manual scrolling finishes
        clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => startAutoScroll(), 1200);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section
      id="testimonials"
      className="relative bg-black text-white py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h5 className="text-2xl md:text-5xl font-semibold mb-3">
          Testimonials
        </h5>
        <p className="text-gray-300">
          See what our clients have to say about us
        </p>
      </div>

      {/* LEFT Arrow */}
      <button
        onClick={() => manualScroll(+1)}
        className="absolute left-4 z-20 bg-white/10 hover:bg-white/20
        p-3 rounded-full backdrop-blur-lg border border-white/20
        top-1/2 translate-y-[70px]"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* RIGHT Arrow */}
      <button
        onClick={() => manualScroll(-1)}
        className="absolute right-4 z-20 bg-white/10 hover:bg-white/20
        p-3 rounded-full backdrop-blur-lg border border-white/20
        top-1/2 translate-y-[70px]"
      >
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Track */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          style={{ transform: `translateX(${position}px)` }}
          className="flex gap-10"
        >
          {/* Triple duplicated list → seamless infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="relative min-w-[340px] md:min-w-[460px] bg-white/5 border border-white/10 
              rounded-3xl backdrop-blur-md p-8 flex flex-col cursor-pointer 
              transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.image}
                  className="h-12 w-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-gray-400">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      {/* Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}
