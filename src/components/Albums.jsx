import DomeGallery from "../utils/DomeGallery";
import { motion } from "framer-motion";

export default function Albums() {
  return (
    <section
      id="brand-partners"
      className="relative bg-black py-24 overflow-hidden"
    >
      <div id="Album" style={{ width: "100vw", height: "100vh" }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-white uppercase tracking-[0.25em] text-sm mb-16"
        >
          <h5 className="text-2xl md:text-5xl font-semibold leading-tight mb-8">
            Photo Album
          </h5>
          <span className="text-white font-normal">
            Explore our portfolio of compelling photo stories in the albums,
            showcasing our expertise.
          </span>
        </motion.h2>
        <DomeGallery />
      </div>
    </section>
  );
}
