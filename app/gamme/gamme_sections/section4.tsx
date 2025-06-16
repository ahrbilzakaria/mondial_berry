"use client";
import { motion } from "framer-motion";
import { ContactButtonAddon } from "@/app/global_components/contactButton";

export const Section4 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        background: [
          "conic-gradient(from 0deg at 50% 50%, #7ba249 0%, #ffffff 100%)",
          "conic-gradient(from 360deg at 50% 50%, #7ba249 0%, #ffffff 100%)",
        ],
      }}
      transition={{
        background: {
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        },
        opacity: { duration: 0.6 }, // handles fade-in
      }}
      viewport={{ once: true }}
      className="text-primary mt-14 py-12"
    >
      <div className="w-[80%] mx-auto flex gap-4 flex-wrap items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl max-w-lg italic font-semibold"
        >
          DÉCOUVREZ LE GOÛT DE LA FRAÎCHEUR À LA BAIE DU MONDIAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-md md:text-xl tracking-wide max-w-xl"
        >
          Découvrez la différence à chaque bouchée avec la gamme de fruits
          rouges haut de gamme de Mondial Berry. Notre engagement envers la
          qualité et la durabilité fait de nous le choix de confiance pour des
          produits de qualité supérieure.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ContactButtonAddon arrow="text-accent" bg="bg-accent" />
        </motion.div>
      </div>
    </motion.section>
  );
};
