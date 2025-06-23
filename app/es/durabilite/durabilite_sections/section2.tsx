"use client";
import { motion } from "framer-motion";

export const Section2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut"}}
      className="w-[80%] mx-auto text-primary mt-18 flex flex-col items-center"
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold text-center mx-auto">
          Bayas mejores para un futuro mejor
        </h2>
        <p className="text-2xl  md:text-3xl max-w-2xl mt-4 text-center mx-auto">
          Frutos rojos de excepción
        </p>
        <p className="text-lg md:text-xl text-center mx-auto tracking-wide max-w-4xl mt-8">
          En <strong>Mondial Berry</strong>, estamos orgullosos de cultivar bayas sabrosas respetando el planeta. Nuestro compromiso con la
          <strong> excelencia sostenible</strong> se traduce en prácticas agrícolas innovadoras y ecológicas, garantizando tanto la{" "}
          <strong>calidad</strong> como el{" "}
          <strong>respeto por el medio ambiente.</strong>
        </p>
      </div>
    </motion.section>
  );
};
