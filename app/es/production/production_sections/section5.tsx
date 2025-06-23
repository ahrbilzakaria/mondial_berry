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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-[80%] mx-auto text-primary  mt-24 flex flex-col items-center  md:py-18 "
    >
      <div className="text-center mx-auto">
        <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold">
          ¿Tienes preguntas?
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
    question: "¿QUÉ TIPOS DE FRUTAS PRODUCE MONDIAL BERRY?",
    answer:
      "Mondial Berry está especializado en el cultivo de frambuesas, fresas, arándanos y moras. Cada fruta se cultiva con el mayor cuidado para garantizar una calidad superior y un sabor excepcional.",
  },
  {
    question: "¿CÓMO ASEGURA MONDIAL BERRY LA CALIDAD DE SUS PRODUCTOS?",
    answer:
      "Implementamos rigurosas medidas de control de calidad en cada etapa de la producción, desde la agricultura y la cosecha hasta el envasado y la distribución. Nuestras instalaciones de vanguardia y prácticas sostenibles garantizan que nuestras frutas cumplan con los más altos estándares de calidad y seguridad.",
  },
  {
    question: "¿DÓNDE PUEDO COMPRAR LOS PRODUCTOS DE MONDIAL BERRY?",
    answer:
      "Los productos de Mondial Berry están disponibles en diferentes mercados de Europa y Oriente Medio. Mantenemos relaciones directas con los principales supermercados y nos aseguramos de que nuestras frutas estén presentes en las principales tiendas minoristas, ofreciendo así fácil acceso a nuestros productos de primera calidad.",
  },
];
