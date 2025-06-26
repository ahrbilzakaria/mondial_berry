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
          Do you have questions?
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
    question: "WHAT TYPES OF FRUITS DOES MONDIAL BERRY PRODUCE?",
    answer:
      "Mondial Berry specializes in the cultivation of raspberries, strawberries, blueberries, and blackberries. Each fruit is grown with the utmost care to ensure superior quality and exceptional taste.",
  },
  {
    question: "HOW DOES MONDIAL BERRY ENSURE THE QUALITY OF ITS PRODUCTS?",
    answer:
      "We implement rigorous quality control measures at every stage of production, from farming and harvesting to packaging and distribution. Our state-of-the-art facilities and sustainable practices ensure our fruits meet the highest standards of quality and safety.",
  },
  {
    question: "WHERE CAN I BUY MONDIAL BERRY PRODUCTS?",
    answer:
      "Mondial Berry products are available in various markets in Europe and the Middle East. We maintain direct relationships with major supermarkets and ensure our fruits are present in leading retail stores, providing easy access to our premium products.",
  },
];
