"use client";
import { motion } from "framer-motion";

export const Section2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full border-4 border-[#743600] mt-28 bg-[#FFF5EC]"
    >
      <div className="w-[80%] mx-auto py-16 px-4 flex flex-col md:gap-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-2 flex-col"
        >
          <h2 className="text-4xl md:text-5xl text-[#3B1E02] font-bold text-center ">
            Certificados de calidad
          </h2>
          <p className="text-[#3B1E02] text-center text-lg md:text-xl tracking-wide max-w-4xl ">
            Nuestras certificaciones garantizan la calidad y seguridad de nuestros
            productos convencionales y orgánicos, tanto a nivel nacional como
            internacional:
          </p>
        </motion.div>
        <div className="w-full flex flex-wrap gap-8 items-center justify-center">
          {[
            "/daicycle/img1.png",
            "/daicycle/img3.png",
            "/daicycle/img2.png",
          ].map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className={`md:h-full ${src.includes("img3") ? "h-12" : "h-18"}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
