"use client";
import { Production_block } from "../../global_components/production_block";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

export const Section1 = () => {
  return (
    <section className="w-[80%] mx-auto  mt-8">
      <motion.div
        className="w-full h-full flex gap-4 items-center justify-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-secondary "
            svg="/durabilite/svg2.svg"
            content="ÉCONOMIE INNOVANTE"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-accent "
            svg="/durabilite/svg1.svg"
            content="RESPONSABILITÉ ENVIRONNEMENTALE"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-primary "
            svg="/durabilite/svg3.svg"
            content="SOLUTIONS DURABLES"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
