import Navbar from "../components/NavBar";
import MagicBento from "../utils/MagicBento";
import LiquidEther from "../utils/LiquidEther";

export default function Rentals() {
  return (
    <>
      <Navbar />

      {/* FOREGROUND CONTENT */}
      <div className="relative min-h-screen text-white flex flex-col items-center pt-32 px-4 backdrop-blur-[2px]">
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
        <div className="max-w-5xl w-full text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-purple-300/80 mb-4">
            Pixel Media · Rentals
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
            Camera & Gear Rentals
            <span className="block text-gray-300 font-normal">
              for all your needs.
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Pick your perfect setup - cinema cameras, lenses, lights, audio and
            more. Build a kit that fits your story, your crew, and your budget.
          </p>
          <a
            href="https://wa.me/918448956173?text=Hi%20Pixel%20Media%2C%20I%20am%20interested%20in%20your%20rental%20services."
            target="_blank"
          >
            <button className="bg-white text-black px-5 py-2 mt-6 rounded-full font-medium">
              Check Availability & Pricing
            </button>
          </a>
        </div>

        <MagicBento
          textAutoHide={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          glowColor="132, 0, 255"
        />
      </div>
    </>
  );
}
