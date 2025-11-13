import { useState } from "react";
import pixelMediaLogo from "../assets/white-pixel-media.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Album", "Projects"];
  const aboutSubmenu = [
    { text: "Show Reel", id: "show-reel" },
    { text: "Brand Partners", id: "brand-partners" },
    { text: "Testimonials", id: "testimonials" },
    { text: "Socials", id: "footer" },
    { text: "Address", id: "footer" },
  ];

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
        <ul className="hidden md:flex space-x-8 font-medium relative">
          {menuItems.map((item) =>
            item === "About" ? (
              <li key={item} className="relative group cursor-pointer">
                <span className="hover:text-purple-400 transition">About</span>

                {/* Dropdown */}
                <div
                  className="absolute left-0 top-8 bg-black/60 backdrop-blur-xl 
                  border border-white/10 rounded-xl py-3 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible transition-all duration-300 
                  w-40 shadow-lg"
                >
                  {aboutSubmenu.map((sub) => (
                    <div
                      key={sub.id}
                      className="px-4 py-2 text-sm hover:bg-white/10 hover:text-purple-300 cursor-pointer"
                    >
                      <a
                        onClick={() => {
                          document.getElementById(sub.id).scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        {sub.text}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            ) : (
              <li
                key={item}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                <a
                  onClick={() => {
                    document.getElementById(item).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item}
                </a>
              </li>
            )
          )}
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
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        <div
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl 
          text-white flex flex-col items-center py-6 space-y-4 shadow-xl"
        >
          {menuItems.map((item) =>
            item === "About" ? (
              <div key={item} className="w-full flex flex-col items-center">
                <button
                  className="text-lg font-medium hover:text-purple-400 flex justify-between w-40"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  <span>About</span>
                  <span>{aboutOpen ? "▲" : "▼"}</span>
                </button>

                {/* Mobile About Dropdown */}
                {aboutOpen && (
                  <div className="mt-2 w-40 bg-black/40 rounded-xl border border-white/10">
                    {aboutSubmenu.map((sub) => (
                      <div
                        key={sub.id}
                        className="px-4 py-2 text-sm hover:bg-white/10 hover:text-purple-300 cursor-pointer"
                      >
                        <a
                          onClick={() => {
                            setMenuOpen(false);
                            document.getElementById(sub.id).scrollIntoView({
                              behavior: "smooth",
                            });
                          }}
                        >
                          {sub.text}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div
                key={item}
                className="text-lg font-medium cursor-pointer hover:text-purple-400 transition"
              >
                <a
                  onClick={() => {
                    setMenuOpen(false);
                    document.getElementById(item).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {" "}
                  {item}
                </a>
              </div>
            )
          )}

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
