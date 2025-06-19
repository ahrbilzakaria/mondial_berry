"use client";
import { Indicateurs } from "@/app/global_components/indicateurs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1.2,
    },
  },
};



export const Section4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-24 flex flex-col items-center"
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold">
          Indicateurs Clés de Production
        </h2>
        <p className="text-2xl mx-auto md:text-3xl max-w-2xl mt-4 text-center">
          Capacité de production
        </p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 1.2,
              },
            },
          }}
        >
          <Indicateurs
            number={400}
            title="Hectares"
            description="Superfivie cultivé"
            type="green"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 1.2,
              },
            },
          }}
        >
          <Indicateurs
            number={1250}
            title="Employés"
            description="Emplois crées"
            type="red"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 1.2,
              },
            },
          }}
        >
          <Indicateurs
            number={4000}
            title="Tonnes"
            description="Production actuelle"
            type="green"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
