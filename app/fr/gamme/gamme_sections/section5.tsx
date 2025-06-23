"use client";
import { motion } from "framer-motion";

export const Section5 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-18 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-center text-3xl md:text-4xl max-w-2xl italic font-semibold"
      >
        Pourquoi choisir Mondial Berry ?
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex gap-8 items-start mt-8 flex-wrap"
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-b from-transparent to-[#B7DB88] text-primary flex flex-col items-start gap-6 justify-start md:p-8 p-4 max-w-xl h-full rounded-3xl cursor-pointer"
        >
          <img src="/gamme/img2.webp" alt="" />
          <div className="space-y-2 ">
            <p className="font-bold md:text-2xl text-xl ">Santé & Bien-être</p>
            <p className="text-md md:text-xl">
              Nos fruits sont riches en vitamines, minéraux et antioxydants,
              contribuant à une alimentation saine et équilibrée.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-b from-transparent to-[#B7DB88] text-primary flex flex-col items-start gap-6 justify-start md:p-8 p-4 max-w-xl h-full rounded-3xl cursor-pointer"
        >
          <img src="/gamme/img3.webp" alt="" />
          <div className="space-y-2 ">
            <p className="font-bold md:text-2xl text-xl ">Goût supérieur</p>
            <p className="text-md md:text-xl">
              Cultivés pour leur saveur exceptionnelle, ils apportent une touche
              gourmande et nutritive à vos plats quotidiens.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
