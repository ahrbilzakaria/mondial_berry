"use client";
import { motion } from "framer-motion";

export const Section2 = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-r from-[#941936] to-[#FF6186] mt-18"
    >
      <div className="w-[80%] mx-auto py-8 flex gap-8 items-center justify-between flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Qualité sans compromis
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 max-w-2xl">
            Nous appliquons les normes les plus strictes en matière de qualité.
            Chaque lot est soigneusement contrôlé pour vous offrir des fruits :
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            <ul className="text-white mt-6 flex gap-4">
              <motion.li
                variants={listItemVariants}
                whileHover="hover"
                className="px-4 py-2 text-center bg-gradient-to-r from-[#7BA249] to-[#2E3C1B] rounded-lg md:text-lg cursor-pointer"
              >
                Frais
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover="hover"
                className="px-4 py-2 text-center bg-gradient-to-r from-[#F34E75] to-[#A4334E] rounded-lg md:text-lg cursor-pointer"
              >
                Savoureux
              </motion.li>
              <motion.li
                variants={listItemVariants}
                whileHover="hover"
                className="px-4 py-2 text-center bg-gradient-to-r from-[#7BA249] to-[#2E3C1B] rounded-lg md:text-lg cursor-pointer"
              >
                Sûrs
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="/gamme/img1.webp" alt="" className="rounded-2xl" />
        </motion.div>
      </div>
    </motion.section>
  );
};
