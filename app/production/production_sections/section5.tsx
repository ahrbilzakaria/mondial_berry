"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { a } from "framer-motion/client";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 1.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Section5 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      className="w-[80%] mx-auto text-primary  mt-24 flex flex-col items-center  md:py-18 "
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold">
          Vous avez des questions ?
        </h2>
      </div>
      <div className="w-4xl max-w-full mt-16 space-y-4">
        {AccordionContentArray.map((item, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold md:text-xl text-md  text-primary cursor-pointer ">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary md:text-xl text-md border-b-1 border-primary rounded-none">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </motion.section>
  );
};

const AccordionContentArray = [
  {
    question: "QUELS TYPES DE FRUITS PRODUITE MONDIAL BERRY ?",
    answer:
      "Mondial Berry est spécialisé dans la culture de framboises, fraises,  bleuets et mûres. Chaque fruit est cultivé avec le plus grand soin pour  garantir une qualité supérieure et un goût exceptionnel.",
  },
  {
    question: "COMMENT MONDIAL BERRY ASSURE-T-IL LA QUALITÉ DE SES PRODUITS ?",
    answer:
      "Nous mettons en œuvre des mesures de contrôle de qualité rigoureuses à  chaque étape de la production, de l’agriculture et de la récolte à  l’emballage et à la distribution. Nos installations de pointe et nos  pratiques durables garantissent que nos fruits répondent aux normes de  qualité et de sécurité les plus élevées.",
  },
  {
    question: "OÙ PUIS-JE ACHETER LES PRODUITS MONDIAL BERRY ?",
    answer:
      "Les produits Mondial Berry sont disponibles sur différents marchés en  Europe et au Moyen-Orient. Nous entretenons des relations directes avec  les grands supermarchés et veillons à ce que nos fruits soient présents  dans les principaux magasins de détail, offrant ainsi un accès facile à  nos produits de première qualité.",
  },
];