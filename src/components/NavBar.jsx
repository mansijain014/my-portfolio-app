import { useState } from "react";
import pixelMediaLogo from "../assets/white-pixel-media.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <nav
        className="flex justify-between items-center px-6 py-4 
        bg-black/30 backdrop-blur-md border border-white/10 shadow-lg 
        rounded-full text-white transition-all duration-300"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={pixelMediaLogo} alt="Pixel Media" className="h-8 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold">Pixel Media</span>
            <span className="text-xs text-gray-400 tracking-widest">
              PRODUCTION
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Services", "Albums", "Projects"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-orange-400 transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          className="hidden md:block bg-white text-black px-5 py-2 rounded-full font-medium 
          hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-md"
          onClick={() => {
            document.getElementById("footer").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact Us
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            /* Hamburger Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            /* Close Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl 
          text-white flex flex-col items-center py-6 space-y-6 shadow-xl"
        >
          {["Home", "About", "Services", "Albums", "Projects"].map((item) => (
            <div
              key={item}
              className="text-lg font-medium cursor-pointer hover:text-orange-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </div>
          ))}

          <button
            className="bg-white text-black px-6 py-2 rounded-full font-medium 
            hover:bg-purple-400 hover:text-white transition-all duration-300 shadow-md"
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("footer").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
