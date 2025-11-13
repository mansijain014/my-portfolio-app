import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ShowreelSection from "./components/ShowReelSection";
import BrandPartners from "./components/BrandPartners";
import ServicesSection from "./components/ServiceSection";
import TestimonialsSection from "./components/Testimonials";
import Footer from "./components/Footer";
import Albums from "./components/Albums";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <ShowreelSection />
      <BrandPartners />
      <Albums />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
