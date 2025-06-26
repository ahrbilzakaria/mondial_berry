"use client";
import { motion } from "framer-motion";

export const Section4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut"}}
      className="w-[80%] mx-auto text-primary mt-14"
    >
      <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
        Network and development
      </h2>
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        A solid group made up of several entities:
      </p>

      <ul className="text-lg md:text-xl tracking-wide font-semibold max-w-4xl mt-4 list-disc list-inside">
        <li>Mondial Berry Export SARL</li>
        <li>MBN Farms SARM</li>
        <li>Daimond Berry SA</li>
        <li>Berry-Max SARL</li>
        <li>Para Agri SARL</li>
      </ul>
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        src="/apropos/map.webp"
        alt=""
        className="md:w-[80%] h-full object-cover mx-auto mt-6"
      />
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Thanks to Morocco's strategic positioning and the growing demand in Europe for berries (for their health benefits), Mondial Berry has strong growth potential.
      </p>
    </motion.section>
  );
};