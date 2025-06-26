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
        Since our creation, <strong>entrepreneurship</strong> and{" "}
        <strong>team spirit</strong> have been at the heart of our DNA. Our{" "}
        <strong>core values</strong>:
      </motion.p>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="list-disc pl-8 mt-2 font-normal text-lg md:text-xl"
      >
        {[
          "Collective work",
          "Humility",
          "Pursuit of excellence",
          "Sustainable commitment",
          "Social responsibility",
        ].map((item, i) => (
          <motion.li key={i} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <p className="text-lg md:text-xl tracking-wide max-w-6xl mt-4">
        At <strong>Mondial Berry</strong>, human capital is our main wealth. This philosophy has enabled us to build an effective management team, with great human values to drive our growth.
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

