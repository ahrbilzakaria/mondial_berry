'use client';
import Hero from "./durabilite_sections/Hero";
import { Section1 } from "./durabilite_sections/section1";
import { Section2 } from "./durabilite_sections/section2";
import { Section3 } from "./durabilite_sections/section3";
import { Section4 } from "./durabilite_sections/section4";
import { motion } from 'motion/react';

export default function page() {
  return (
    <section className="">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full"
      >
        <Hero />
      </motion.section>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </section>
  );
}
