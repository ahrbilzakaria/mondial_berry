'use client'

import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion";
import { i } from "framer-motion/client";
import { useEffect, useState } from "react";
import { set } from "zod";




export const Section4 = () => {
    const [card, setCard] = useState(1);

    useEffect(() => {
         const interval = setInterval(()=>{
            setCard((prev) => (prev + 1) % cards.length);
        },5000)
        return () => clearInterval(interval);
    }, [card]);


  return (
    <section className="w-full lg:py-32 md:py-26 py-20 bg-gradient-to-b from-white to-primary lg:h-[80vh] md:h-[60vh] h-[50vh] flex flex-col items-center justify-between mt-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={card}
          className="w-[80%] mx-auto text-center  space-y-4 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7, ease: "anticipate" }}
        >
          <h3 className="lg:text-5xl md:text-3xl text-xl leading-[110%] text-primary">
            {cards[card].content}
          </h3>
          <p className="text-white">{cards[card].description}</p>
        </motion.div>
      </AnimatePresence>

      <div>
        <div className="flex justify-center md:gap-4 gap-2 mt-4">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {setCard(idx)
                
              }}
              className={`md:h-6 md:w-6 h-4 w-4 transition-colors duration-300 rounded-full cursor-pointer  ${
                card === idx ? "bg-secondary " : "bg-white/25 "
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}


const cards = [
  {
    id: 1,
    description: "Emballage avancé",
    content:
      "Utiliser des solutions d’emballage innovantes et respectueuses de l’environnement, équiper les installations de technologies de pointe pour protéger les produits et prolonger leur durée de conservation.",
  },
  {
    id: 2,
    description: "Excellence & Qualité",
    content:
      "La qualité est au cœur de tout ce que nous faisons. Nous maintenons les normes les plus élevées dans notre travail, en veillant à ce que chaque projet réponde et dépasse les attentes grâce à une attention méticuleuse aux détails.",
  },
  {
    id: 3,
    description: "Partenariat & Confiance",
    content:
      "Bâtir des relations durables avec nos clients est notre priorité. Nous croyons en une communication transparente, un service fiable et des partenariats collaboratifs qui favorisent une réussite mutuelle.",
  },
];