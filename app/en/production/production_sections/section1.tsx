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
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-secondary"
            svg="/production/svg1.svg"
            content="ORGANIC AGRICULTURE"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-accent"
            svg="/production/svg2.svg"
            content="INNOVATIVE ECONOMY"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="md:max-w-sm w-full"
        >
          <Production_block
            className="bg-primary"
            svg="/production/svg3.svg"
            content="A BETTER LIVING STOCK"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
