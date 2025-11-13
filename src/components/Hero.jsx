import LiquidEther from "../utils/LiquidEther";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  return (
    <div
      id={"Home"}
      style={{ width: "100%", height: "600px", position: "relative" }}
    >
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
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.section
          ref={ref}
          className="h-screen flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
        >
          {/* Animated content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              CREATING MOMENTS.
              <br />
              CRAFTING LEGACY.
            </h1>

            <p className="text-lg text-gray-400 mb-8">
              As a leading video production company, we blend creativity with
              technical expertise to deliver videos that resonate with your
              audience and achieve your objectives.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
