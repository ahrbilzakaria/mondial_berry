"use client";
import { motion } from "framer-motion";

export const Section2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-[80%] mx-auto relative mt-14 mb-16  md:p-36 p-10 max-sm:py-18  flex justify-center items-center "
    >
      <img
        src="/apropos/img4.webp"
        alt=""
        className="absolute inset-0 -z-10 object-center object-cover w-full h-full md:rounded-4xl rounded-2xl "
      />
      <h3 className="md:text-8xl text-2xl  md:max-w-5xl text-center text-white font-bold ">
        <span className="font-normal">
          We offer you
          <br />
        </span>{" "}
        the best agricultural services.
      </h3>
      <img
        src="/apropos/elm1.png"
        alt=""
        className="absolute -bottom-40 right-20 md:scale-100 scale-50 max-sm:right-0"
      />
    </motion.section>
  );
};
