"use client";

import { motion } from "framer-motion";
import bgImage from "../assets/testimonial-bg.jpg";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, Creative Vision",
    image: "/clients/aarav.jpg",
    quote:
      "Pixel Media transformed our story into something unforgettable. Their cinematic visuals captured our brand essence perfectly.",
  },
  {
    name: "Neha Patel",
    role: "Marketing Head, Horizon Group",
    image: "/clients/neha.jpg",
    quote:
      "The attention to detail and storytelling is unmatched. Every frame felt intentional and emotional — brilliant team.",
  },
  {
    name: "Rahul Verma",
    role: "Director, Vibe Studios",
    image: "/clients/rahul.jpg",
    quote:
      "From script to screen, the Pixel Media team delivered beyond expectations. They brought our creative vision to life flawlessly.",
  },
  {
    name: "Simran Kaur",
    role: "CEO, Dreamline Productions",
    image: "/clients/simran.jpg",
    quote:
      "Truly one of the best teams we’ve worked with. Their professionalism, passion, and creativity shine through in every project.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative bg-black text-white py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // subtle parallax effect
      }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center text-white uppercase tracking-[0.25em] text-sm mb-16"
      >
        <h5 className="text-2xl md:text-5xl font-semibold leading-tight mb-8">
          Testimonials
        </h5>
        <span className="text-white font-normal">
          See what our clients have to say for us
        </span>
      </motion.h2>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40, // adjust speed here
          }}
        >
          {/* Duplicate testimonials for infinite loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="relative min-w-[340px] md:min-w-[460px] bg-white/5 border border-white/10 
                         rounded-3xl backdrop-blur-md p-8 flex flex-col justify-between cursor-pointer 
                         transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
            >
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed italic text-base md:text-lg">
                “{testimonial.quote}”
              </p>

              {/* Decorative quote mark */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="absolute top-6 right-6 w-6 h-6 text-gray-600/60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75H7.5A2.25 2.25 0 015.25 10.5v-6A2.25 2.25 0 017.5 2.25H9M18.75 12.75H17.25A2.25 2.25 0 0115 10.5v-6a2.25 2.25 0 012.25-2.25h1.5"
                />
              </svg>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent" />
    </section>
  );
}
