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
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Pixel Media Production | Video Production & Creative Studio</title>

        <meta
          name="description"
          content="Pixel Media Production offers cinematic video production, brand films, event coverage, and creative media solutions for brands and businesses. Pixel Media offers full-service production solutions including photography, videography, cinematic films, drone coverage, and multi-camera setups for events, weddings, corporate shoots, and brand campaigns. We handle everything from pre-production to final delivery."
        />

        <meta
          name="keywords"
          content="video production company delhi, film production, corporate video, event coverage, brand films, creative studio, camera rentals delhi, ads, reel shoots, social media management"
        />

        <meta name="author" content="Pixel Media Production" />

        {/* OpenGraph (for social sharing) */}
        <meta property="og:title" content="Pixel Media Production" />
        <meta
          property="og:description"
          content="Cinematic video production, brand storytelling, equipment rentals, creative media solutions and much more  x."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelmediaproduction.in" />
        <meta
          property="og:image"
          content="https://pixelmediaproduction.in/pixelmedia-logo.jpg"
        />
      </Helmet>
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
