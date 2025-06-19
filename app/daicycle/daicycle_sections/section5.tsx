"use client";
import { motion } from "framer-motion";
import { desc, div } from "framer-motion/client";
import { id } from "zod/v4/locales";

export const Section5 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary mt-14"
    >
      <div className="flex md:gap-1 flex-col items-start justify-start">
        <h2 className="text-3xl md:text-4xl max-w-2xl italic font-semibold">
          Cycle de vie
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mt-4 ">
          Une agriculture meilleure pour un avenir meilleur
        </p>
      </div>
      <div className="flex w-full  md:flex-row md:justify-between  gap-8 mt-4 flex-wrap">
        <div className="flex flex-col items-start justify-center gap-8 mt-6 w-fit">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-start justify-start max-w-xl gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: idx * 1.2 }}
            >
              <div className="flex gap-4 items-center">
                <span className="font-semibold text-accent bg-primary py-3 rounded-lg md:w-[2.9rem] w-[3.7rem] text-center mx-auto text-xl">
                  0{step.id}
                </span>
                <h3 className="md:text-xl text-lg font-semibold text-primary">
                  {step.title}
                </h3>
              </div>
              <p className="text-md md:text-lg tracking-wide ">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img
            src="/daicycle/img4.webp"
            alt=""
            className=" h-full hover:scale-110 transition-transform duration-300 ease-in-out "
          />
        </div>
      </div>
    </motion.section>
  );
};

const steps = [
  {
    id: 1,
    title: "Agriculture et culture durables",
    description:
      "Nous adoptons des pratiques responsables telles que la fertilisation organique, la rotation des cultures et la lutte intégrée contre les ravageurs (IPM) pour préserver les sols et l’environnement.",
  },
  {
    id: 2,
    title: "Contrôle de qualité et récolte",
    description:
      "Des contrôles rigoureux sont appliqués à chaque étape pour garantir un goût optimal, une texture parfaite et une sécurité alimentaire irréprochable.",
  },
  {
    id: 3,
    title: "Conditionnement et distribution",
    description:
      "Nous assurons une livraison rapide grâce à une logistique de chaîne du froid performante, permettant à nos fruits de conserver leur fraîcheur jusqu’aux marchés d’Europe et du Moyen-Orient.",
  },
];
