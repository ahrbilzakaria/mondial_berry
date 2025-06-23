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
        Un trabajo riguroso y profesional
      </h2>

      <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-8">
        En <strong>Mondial Berry</strong>, estamos especializados en el
        <strong>
          {" "}
          cultivo y la distribución de una amplia variedad de frutos rojos de
          alta calidad.
        </strong>{" "}
        Nuestro compromiso con la <strong>calidad</strong> garantiza que cada
        fruta llegue a usted en un estado óptimo:{" "}
        <strong>rica en sabor, frescura y beneficios nutricionales.</strong>
      </p>
    </motion.section>
  );
};
