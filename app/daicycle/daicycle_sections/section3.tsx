"use client";
import { Step } from "@/app/global_components/step";
import { motion } from "framer-motion";

export const Section3 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-28"
    >
      <div className="w-full ">
        <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
          COMMENT ÇA FONCTIONNE
        </h2>

        <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-4">
          SUIVEZ CES 4 ÉTAPES SIMPLES:
        </p>
      </div>

      <div className="mt-10 flex flex-wrap lg:flex-row flex-col justify-center w-full  gap-x-4 gap-y-8 lg:items-start items-center">
        {steps.map((item, idx) => (
          <Step
            key={idx}
            description={item.description}
            number={item.number}
            svg={item.svg}
            title={item.title}
          />
        ))}
      </div>
    </motion.section>
  );
};

const steps = [
  {
    number: 1,
    svg: "/daicycle/svg2.svg",
    title: "Planifiez votre expérience",
    description:
      "Organisez une visite de nos fermes pour découvrir notre engagement envers la qualité.",
  },
  {
    number: 2,
    svg: "/daicycle/svg3.svg",
    title: "Recevez des conseils professionnels",
    description:
      "Profitez de notre vaste expérience et de notre engagement envers l’agriculture durable.",
  },
  {
    number: 3,
    svg: "/daicycle/svg4.svg",
    title: "Rencontrez nos experts",
    description:
      "Notre équipe d’experts met son savoir-faire au service de chaque étape de nos opérations.",
  },
  {
    number: 4,
    svg: "/daicycle/svg5.svg",
    title: "Profitez des meilleurs produits",
    description:
      " Goûtez la différence avec nos framboises, fraises, myrtilles et mûres méticuleusement cultivées.",
  },
];
