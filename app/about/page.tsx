"use client";
import Hero from "./about_sections/Hero";
import { Section1 } from "./about_sections/section1";
import { Section2 } from "./about_sections/section2";
import { Section3 } from "./about_sections/section3";
import { Section4 } from "./about_sections/section4";
import { Section5 } from "./about_sections/section5";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
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
      <Section5 />
    </div>
  );
}
