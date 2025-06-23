import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Services = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-services">
      {/* Background image with better accessibility */}
      {/* <img
        src="/accueil/img2.png"
        alt="Decorative background"
        className="w-full h-full object-cover absolute -z-10 inset-0"
        aria-hidden="true"
      /> */}

      <div className="w-[80%] mx-auto">
        <div className="flex flex-col items-center text-center ">
          {/* Added semantic heading structure and better text styling */}
          <span className="text-md font-light uppercase tracking-wider text-white">
            LO QUE HACEMOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            SERVICIOS QUE OFRECEMOS
          </h2>

          <div className="w-[80%] mt-12">
            <InfiniteMovingCards
              items={Content}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Content = [
  {
    title: "SOLUCIONES DE EMBALAJE PERSONALIZADO",
    description:
      "Nuestras instalaciones de embalaje están equipadas con la última tecnología, garantizando que nuestros productos lleguen a nuestros clientes en condiciones óptimas, listos para la venta al por menor o para ser procesados.",
    image: "/accueil/services/s2.webp",
  },
  {
    title: "RED DE DISTRIBUCIÓN GLOBAL",
    description:
      "Entregamos nuestras frutas de primera calidad. Nuestra experiencia logística garantiza una entrega rápida y eficiente, manteniendo la frescura y calidad de nuestros productos desde la finca hasta la mesa.",
    image: "/accueil/services/s3.webp",
  },
  {
    title: "PRÁCTICAS DE AGRICULTURA SOSTENIBLE",
    description:
      "Priorizamos la salud del suelo, la conservación del agua y la biodiversidad, asegurando que nuestros métodos agrícolas sean no solo productivos sino también respetuosos con el medio ambiente.",
    image: "/accueil/services/s4.webp",
  },
  {
    title: "CULTIVO Y EXPORTACIÓN DE FRUTOS ROJOS",
    description:
      "Nuestras fincas de última generación en Agadir y Moulay Bousselham garantizan un suministro constante de frutas frescas y deliciosas, cumpliendo con los más altos estándares de calidad.",
    image: "/accueil/services/s1.webp",
  },
];
