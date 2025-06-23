"use client";
import { motion } from "framer-motion";
import { ContactButtonAddon } from "../../global_components/contactButton";

export const Section5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8}}
      className="w-[80%] mx-auto h-fit bg-green relative mt-12 gap-4 flex flex-col md:flex-row md:justify-between md:items-stretch md:px-12 rounded-4xl overflow-hidden"
    >
      <div className="flex flex-col justify-between items-start  w-full px-4 py-12 md:h-auto">
        <p className="text-xl md:text-5xl max-w-2xl font-normal text-white text-center md:text-left">
          VOUS FOURNIR DES PRODUITS DE LA <br />
          <strong>PLUS HAUTE QUALITÉ QUI RÉPONDENT À VOS ATTENTES</strong>
        </p>
        <div className="flex w-full flex-wrap justify-between items-center mt-4 flex-col md:flex-row gap-4 md:gap-6">
          <span className="playfair text-3xl md:text-5xl bg-gradient-to-r from-[#296C1B] to-[#1DAA00] text-transparent bg-clip-text">
            Mondial Berry
          </span>
          <ContactButtonAddon bg="bg-primary" arrow="text-primary" />
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="/apropos/man.webp"
        alt=""
        className="w-full md:w-auto md:h-2xl object-contain md:object-cover mt-4 md:mt-0"
      />
    </motion.div>
  );
};
