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
          CÓMO FUNCIONA
        </h2>

        <p className="text-lg md:text-xl tracking-wide max-w-4xl mt-4">
          SIGUE ESTOS 4 PASOS SIMPLES:
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
    title: "Planifica tu experiencia",
    description:
      "Organiza una visita a nuestras fincas para descubrir nuestro compromiso con la calidad.",
  },
  {
    number: 2,
    svg: "/daicycle/svg3.svg",
    title: "Recibe asesoramiento profesional",
    description:
      "Aprovecha nuestra amplia experiencia y nuestro compromiso con la agricultura sostenible.",
  },
  {
    number: 3,
    svg: "/daicycle/svg4.svg",
    title: "Conoce a nuestros expertos",
    description:
      "Nuestro equipo de expertos pone su conocimiento al servicio de cada etapa de nuestras operaciones.",
  },
  {
    number: 4,
    svg: "/daicycle/svg5.svg",
    title: "Disfruta de los mejores productos",
    description:
      "Prueba la diferencia con nuestras frambuesas, fresas, arándanos y moras meticulosamente cultivadas.",
  },
];
