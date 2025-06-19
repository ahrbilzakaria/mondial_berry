"use client";
import Hero from "./accueil_sections/hero/Hero";
import About from "./accueil_sections/about/About";
import Features from "./accueil_sections/features/Features";
import Engagements from "./accueil_sections/engagements/Engagements";
import { Services } from "./accueil_sections/services/Services";
import Type from "./accueil_sections/types/Type";
import { Avantages } from "./accueil_sections/avantages/Avantages";
import { AvantagesCards } from "./accueil_sections/avantages/AvantagesCards";
import InfiniteScrollText from "./global_components/InfiniteScrollText";
import { ContactSection } from "./accueil_sections/contact/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Hero />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <About />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Features />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Engagements />
      </motion.section>
      <Services />
      
        <Type />
    
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Avantages />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <AvantagesCards />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <InfiniteScrollText
          text="Mondial Berry Export"
          speed={"slow"}
          className="text-secondary my-24"
        />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <ContactSection />
      </motion.section>
    </div>
  );
}
