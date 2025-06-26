"use client";
import { motion } from "framer-motion";

export const Section2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-18 flex flex-col items-center"
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold text-center mx-auto">
          We are proud to be the producers of delicious berries
        </h2>
        <p className="text-2xl  md:text-3xl max-w-2xl mt-4 text-center mx-auto">
          Exceptional red fruits
        </p>
        <p className="text-lg md:text-xl text-center mx-auto tracking-wide max-w-4xl mt-8">
          At Mondial Berry, our commitment to <strong>excellence</strong>{" "}
          extends to all aspects of our production process. We use advanced
          agricultural techniques and <strong>sustainable practices</strong> to
          ensure the highest quality and consistency of our red fruits.
        </p>
      </div>
      <motion.div
        className="relative h-full w-full overflow-hidden px-8 py-14 flex flex-wrap gap-8 justify-center mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.img
          src="/production/img1.webp"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover rounded-4xl"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.img
          src="/production/img2.webp"
          alt=""
          className="h-fit object-cover rounded-2xl "
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src="/production/img3.webp"
          alt=""
          className="h-fit object-cover rounded-2xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        />
      </motion.div>
    </motion.section>
  );
};
