import { useEffect } from "react";
import { motion } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Offerings from "./components/Offerings";
import WhyChooseUs from "./components/WhyChooseUs";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function App() {
  useEffect(() => {
    // Dynamically ensure SEO tags are synchronized
    document.title = "Shrinit Enterprises | Trusted Electronics & Home Appliances in Gwalior";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Shrinit Enterprises is Gwalior's premium electronics and home appliances store. Discover top-quality refrigerators, LED TVs, ACs, washing machines, and kitchen utilities with reliable local service."
      );
    }
  }, []);

  return (
    <main className="font-sans text-slate-900 bg-slate-50 min-h-screen relative overflow-x-hidden">
      <Navigation />
      
      <Hero />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <Offerings />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <Highlights />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={sectionVariants}
      >
        <CustomerReviews />
      </motion.div>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}

