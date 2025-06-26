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
        Rigorous and professional work
      </h2>

      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        At <strong>Mondial Berry</strong>, we specialize in
        <strong>
          {" "}the cultivation and distribution of a wide variety of premium berries.
        </strong>
        {" "}Our commitment to <strong>quality</strong> ensures that every fruit reaches you in optimal condition:{" "}
        <strong>
          rich in taste, freshness, and nutritional benefits.
        </strong>
      </p>
    </motion.section>
  );
};

