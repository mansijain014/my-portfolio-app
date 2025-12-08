"use client";

import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/testimonial-bg.webp";
import imranKhan from "../assets/imran-sir.webp";
import sunilKumar from "../assets/sunilKumar.webp";
import sagarChaudhary from "../assets/sagarChaudhary.webp";
import balwantSingh from "../assets/balwantSingh.webp";
import varunMehta from "../assets/varunMehta.webp";
import rahulKumar from "../assets/rahulKumar.webp";

const testimonials = [
  {
    name: "Imran khan",
    role: "Founder, More slides",
    image: imranKhan,
    quote:
      "As a founder, I value professionalism, clarity and consistent quality and Pixel Media delivers all three. Their production team is disciplined, creative and extremely dependable. Whether it's a fast-paced shoot, a brand film or event coverage, they handle everything with maturity and attention to detail. I recommend Pixel Media to anyone who wants a trustworthy, high-quality production partner.",
  },
  {
    name: "Sunil Kumar",
    role: "Founder, Modern Stage Services",
    image: sunilKumar,
    quote:
      "Pixel Media has supported us on multiple large-scale events, and their professionalism has been exceptional. They understand technical setups, work seamlessly with production crews and deliver stunning visuals even under tight timelines. Their commitment to quality makes them one of the most dependable production teams in Delhi.",
  },
  {
    name: "Sagar Chaudhary",
    role: "Founder, Delmum Productions",
    image: sagarChaudhary,
    quote:
      "Pixel Media has become our go-to team whenever we need fast, clean and premium-quality production. Their coordination, execution and delivery are consistently on point. Shubhank understands the brief instantly and gets things done without excuses. Working with Pixel Media feels effortless, they deliver exactly what we envision, every single time.",
  },
  {
    name: "Balwant Singh",
    role: "Founder, Sorted Media Management",
    image: balwantSingh,
    quote:
      "Professional, reliable and extremely dedicated, that's Pixel Media. We've collaborated on multiple shoots and live events, and their team always shows up prepared with solutions, not problems. The final output is polished, crisp and always delivered before deadline. Highly recommended for anyone who wants a dependable production partner.",
  },
  {
    name: "Varun Mehta",
    role: "Founder, Soulz Production",
    image: varunMehta,
    quote:
      "What I appreciate the most about Pixel Media is their clarity, honesty and work ethic. They speak less and deliver more. From creative direction to execution, their team handles everything smoothly. Clients love the output and the experience is always smooth. Pixel Media is one of the few teams I blindly trust for quality.",
  },
  {
    name: "Rahul Kumar",
    role: "Founder, WaffleBytes",
    image: rahulKumar,
    quote:
      "Pixel Media brings a rare mix of creativity and operational discipline. Whether it's a brand shoot, a fast-paced event setup or post-production, their attention to detail stands out. The team is humble, hardworking and highly collaborative, exactly the kind of production partner every modern brand needs.",
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
