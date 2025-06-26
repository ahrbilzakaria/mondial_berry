"use client";
import { motion } from "framer-motion";

export const Section3 = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", }}
      className="w-[80%] mx-auto text-primary"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl tracking-wide max-w-3xl pt-6 md:pt-0 "
      >
        Depuis notre création, <strong>l’entrepreneuriat</strong> et{" "}
        <strong>l’esprit d’équipe</strong> sont au cœur de notre ADN. Nos{" "}
        <strong>valeurs fondamentales</strong> :
      </motion.p>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="list-disc pl-8 mt-2 font-normal text-lg md:text-xl"
      >
        {[
          "Travail collectif",
          "Humilité",
          "Recherche de l'excellence",
          "Engagement durable",
          "Responsabilité sociale",
        ].map((item, i) => (
          <motion.li key={i} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <p className="text-lg md:text-xl tracking-wide max-w-6xl mt-4">
        Chez <strong>Mondial Berry</strong>, le capital humain est notre
        richesse principale. Cette philosophie nous a permis de bâtir une équipe
        dirigeante efficace, avec de grandes valeurs humaines pour piloter notre
        croissance.
      </p>
      {/* <div className="flex justify-center items-center mt-12 w-full">
        <div className="flex items-center md:gap-4 gap-2 md:p-4 p-2 border-2 border-secondary rounded-lg ">
          <img
            src="/apropos/iso.png"
            alt=""
            className="scale-75 md:scale-100 object-cover"
          />
          <p className="md:text-xl text-md font-bold text-secondary">
            Entreprise certifiée ISO
          </p>
        </div>
      </div> */}
    </motion.section>
  );
};
