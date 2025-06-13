"use client";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Engagements from "./sections/engagements/Engagements";
import { Services } from "./sections/services/Services";
import Type from "./sections/types/Type";
import { Avantages } from "./sections/avantages/Avantages";
import { AvantagesCards } from "./sections/avantages/AvantagesCards";
import InfiniteScrollText from "./global_components/InfiniteScrollText";
import { ContactSection } from "./sections/contact/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <About />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Features />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Engagements />
      </motion.section>
      <Services />
      
        <Type />
    
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Avantages />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <AvantagesCards />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <InfiniteScrollText
          text="Mondial Berry Export"
          speed={"fast"}
          className="text-secondary"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <ContactSection />
      </motion.section>
    </div>
  );
}
