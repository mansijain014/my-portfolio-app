"use client";

import { motion } from "framer-motion";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import pixelMediaLogo from "../assets/white-pixel-media.webp";
import GoogleMap from "./GoogleMapLocaltion";

export default function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* --- LEFT: Contact Info & Newsletter --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur-md"
        >
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 18A, Pandav Nagar, New Delhi-110092,
              India
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a className="text-gray-300 hover:text-purple-400 transition">
                connect.pixelmedia@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a className="text-gray-300 hover:text-purple-400 transition">
                +91-8448956173
              </a>
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <GoogleMap />
            </div>
          </div>
        </motion.div>

        {/* --- MIDDLE: Quick Links & Legal --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/5 rounded-3xl p-8 backdrop-blur-md flex justify-center items-center"
        >
          <div>
            <img src={pixelMediaLogo} alt="logo" />
          </div>
        </motion.div>

        {/* --- RIGHT: Social Pills with Links --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 justify-between"
        >
          {[
            {
              icon: <FaWhatsapp />,
              label: "Whatsapp",
              href: "https://wa.link/lvkvg8",
              color: "#30e16bff",
            },
            {
              icon: <FaInstagram />,
              label: "Instagram (Main)",
              href: "https://www.instagram.com/pixelmedia.productions/",
              color: "#E1306C",
            },
            {
              icon: <FaInstagram />,
              label: "Instagram (Weddings)",
              href: "https://www.instagram.com/theweddingchapter.co/",
              color: "#E1306C",
            },
            {
              icon: <FaTwitter />,
              label: "Twitter",
              href: "https://twitter.com/yourhandle",
              color: "#1DA1F2",
            },
            {
              icon: <FaYoutube />,
              label: "YouTube",
              href: "https://youtube.com/@yourchannel",
              color: "#FF0000",
            },
            {
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
              href: "https://linkedin.com/in/yourprofile",
              color: "#0A66C2",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex items-center justify-between rounded-full bg-white/5 border border-white/10 
                         backdrop-blur-md px-6 py-4 cursor-pointer transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-gray-300">
                <span
                  className="text-lg transition-colors duration-300"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
                <span className="text-sm tracking-wide group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </div>
              <span
                className="text-gray-400 text-xl group-hover:text-white transition-all duration-300"
                style={{
                  color: item.color,
                }}
              >
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* --- Divider --- */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pixel Media. All rights reserved.
      </div>
    </footer>
  );
}
