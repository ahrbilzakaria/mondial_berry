"use client";
import { motion } from "framer-motion";

export const Section4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      className="w-[80%] mx-auto text-primary mt-14"
    >
      <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
        Réseau et développement
      </h2>
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Un groupe solide composé de plusieurs entités : Mondial Berry Export
        SARL MBN Farms SARM Daimond Berry SA Berry-Max SARL Para Agri SARL
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
        transition={{ duration: 1 }}
        src="/apropos/map.webp"
        alt=""
        className="md:w-[80%] h-full object-cover mx-auto mt-6"
      />
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Grâce au positionnement stratégique du Maroc et à la demande croissante
        en Europe pour les fruits rouges (pour leurs bienfaits sur la santé),
        Mondial Berry connaît un fort potentiel de croissance.
      </p>
    </motion.section>
  );
};
