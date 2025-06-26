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
        Mondial Berry: A quality solution in the world of berries.
      </h2>

      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        Founded in <strong>2018</strong> by <strong>Mr. Redouan GAIMAR</strong>,{" "}
        <strong>Mr. Mohamed GAIMAR</strong>, <strong>Mr. Faissal GAIMAR</strong>{" "}
        and <strong>Mr. Said EL GAREH</strong>, the company now operates several farms in the regions of{" "}
        <strong>Agadir</strong> and <strong>Moulay Bousselham</strong>. In{" "}
        <strong>2021</strong>, it employed more than <strong>1,250</strong>{" "}
        people, including seasonal workers.
      </p>
      <div className="flex  gap-2  md:gap-8 w-full  justify-center md:mt-12 mt-8 md:px-4 ">
        {["/apropos/img1.webp", "/apropos/img2.webp", "/apropos/img3.webp"].map(
          (src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className={i === 1 ? "h-full w-1/3 " : "h-2/3 w-1/3"}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                zIndex: 1,
              }}
              style={{ transition: "box-shadow 0.3s" }}
            />
          )
        )}
      </div>
    </motion.section>
  );
};
