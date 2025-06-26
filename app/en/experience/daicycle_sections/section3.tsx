"use client";
import { Step } from "../../global_components/step";
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
          HOW IT WORKS
        </h2>

        <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-4">
          FOLLOW THESE 4 SIMPLE STEPS:
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
    title: "Plan your experience",
    description:
      "Arrange a visit to our farms to discover our commitment to quality.",
  },
  {
    number: 2,
    svg: "/daicycle/svg3.svg",
    title: "Receive professional advice",
    description:
      "Benefit from our extensive experience and commitment to sustainable agriculture.",
  },
  {
    number: 3,
    svg: "/daicycle/svg4.svg",
    title: "Meet our experts",
    description:
      "Our team of experts brings their know-how to every stage of our operations.",
  },
  {
    number: 4,
    svg: "/daicycle/svg5.svg",
    title: "Enjoy the best products",
    description:
      "Taste the difference with our meticulously grown raspberries, strawberries, blueberries, and blackberries.",
  },
];
