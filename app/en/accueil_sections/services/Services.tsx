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
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            SERVICES WE OFFER
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
    title: "CUSTOMIZED PACKAGING SOLUTIONS",
    description:
      "Our packaging facilities are equipped with the latest technologies, ensuring that our products reach our customers in optimal condition, ready for retail sale or further processing.",
    image: "/accueil/services/s2.webp",
  },
  {
    title: "GLOBAL DISTRIBUTION NETWORK",
    description:
      "We deliver our premium quality fruits. Our logistics expertise ensures fast and efficient delivery, maintaining the freshness and quality of our products from farm to table.",
    image: "/accueil/services/s3.webp",
  },
  {
    title: "SUSTAINABLE AGRICULTURAL PRACTICES",
    description:
      "We prioritize soil health, water conservation, and biodiversity, ensuring that our farming methods are not only productive but also environmentally friendly.",
    image: "/accueil/services/s4.webp",
  },
  {
    title: "BERRIES CULTIVATION AND EXPORT",
    description:
      "Our state-of-the-art farms in Agadir and Moulay Bousselham ensure a constant supply of fresh and delicious berries, meeting the highest quality standards.",
    image: "/accueil/services/s1.webp",
  },
];