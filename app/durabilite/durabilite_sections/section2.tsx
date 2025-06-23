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
          Des baies meilleures pour un avenir meilleur
        </h2>
        <p className="text-2xl  md:text-3xl max-w-2xl mt-4 text-center mx-auto">
          Des fruits rouges d'exception
        </p>
        <p className="text-lg md:text-xl text-center mx-auto tracking-wide max-w-4xl mt-8">
          Chez <strong>Mondial Berry</strong>, nous sommes fiers de cultiver des
          baies savoureuses tout en respectant la planète. Notre engagement
          envers
          <strong> l’excellence durable</strong> se traduit par des pratiques
          agricoles innovantes et écoresponsables, garantissant à la fois{" "}
          <strong>qualité</strong> et{" "}
          <strong>respect de l’environnement.</strong>
        </p>
      </div>
    </motion.section>
  );
};
