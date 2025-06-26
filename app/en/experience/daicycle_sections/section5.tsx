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
          Life Cycle
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mt-4 ">
          Better agriculture for a better future
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
              transition={{ duration: 0.8, delay: 1 + idx * 0.2 }}
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
    title: "Sustainable agriculture and cultivation",
    description:
      "We adopt responsible practices such as organic fertilization, crop rotation, and integrated pest management (IPM) to preserve soils and the environment.",
  },
  {
    id: 2,
    title: "Quality control and harvesting",
    description:
      "Rigorous controls are applied at every stage to ensure optimal taste, perfect texture, and impeccable food safety.",
  },
  {
    id: 3,
    title: "Packaging and distribution",
    description:
      "We ensure fast delivery thanks to efficient cold chain logistics, allowing our fruits to retain their freshness all the way to markets in Europe and the Middle East.",
  },
];
