"use client";
import { motion } from "framer-motion";

export const Section1 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-14"
    >
      <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
        Un travail rigoureux et professionnel
      </h2>

      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Chez <strong>Mondial Berry </strong>, nous sommes spécialisés dans la
        <strong>
          {" "}culture et la distribution d'une large variété de fruits rouges haut
          de gamme.
        </strong>
        {" "}Notre engagement envers la <strong>qualité</strong> garantit que chaque
        fruit vous parvienne dans un état optimal :{" "}
        <strong>
          riche en goût, en fraîcheur et en bienfaits nutritionnels.
        </strong>
      </p>
    </motion.section>
  );
};
