"use client";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    src: "/gamme/blueberry.webp",
    name: "Myrtille",
    color: "#446081",
  },
  {
    src: "/gamme/raspberry.webp",
    name: "Framboise",
    color: "#AF0F16",
  },
  {
    src: "/gamme/strawberry.webp",
    name: "Fraise",
    color: "#EA2524",
  },
  {
    src: "/gamme/blackberry.webp",
    name: "Mûre",
    color: "#19191D",
  },
] as const;

export const Section3 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      className="w-[80%] mx-auto text-primary mt-18 flex flex-col items-center"
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold mx-auto">
          Notre gamme de produits
        </h2>
        <p className="text-2xl md:text-3xl max-w-2xl mt-4 mx-auto">
          Des fruits rouges d'exception
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mt-12">
        {PRODUCTS.map(({ src, name, color }) => (
          <div key={src} className="flex flex-col items-center">
            <motion.img
              src={src}
              alt={name}
              className="md:h-60 md:w-60 h-32 w-32  object-cover rounded-lg"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                zIndex: 1,
              }}
              style={{ transition: " 0.3s" }}
            />
            <span className="mt-2 text-xl font-semibold" style={{ color }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
