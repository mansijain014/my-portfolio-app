import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import ShowreelSection from "../components/ShowReelSection";
import BrandPartners from "../components/BrandPartners";
import ServicesSection from "../components/ServiceSection";
import TestimonialsSection from "../components/Testimonials";
import Footer from "../components/Footer";
import Albums from "../components/Albums";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullScreenButton from "../utils/FullScreenButton";
import FAQSection from "../components/FAQSection";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <div className="bg-black min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <ShowreelSection />
      <BrandPartners />
      <ServicesSection />
      <Albums />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <FullScreenButton />
    </div>
  );
}
