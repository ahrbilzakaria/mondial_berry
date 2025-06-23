"use client";
import { motion } from "framer-motion";

export const Section4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-14"
    >
      <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
        Red y desarrollo
      </h2>
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Un grupo sólido compuesto por varias entidades: Mondial Berry Export
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
        transition={{ duration: 0.8 }}
        src="/apropos/map.webp"
        alt=""
        className="md:w-[80%] h-full object-cover mx-auto mt-6"
      />
      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Gracias a la posición estratégica de Marruecos y a la creciente demanda
        en Europa de frutos rojos (por sus beneficios para la salud), Mondial
        Berry tiene un gran potencial de crecimiento.
      </p>
    </motion.section>
  );
};
