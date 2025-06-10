import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Services = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background image with better accessibility */}
      <img
        src="/accueil/img2.png"
        alt="Decorative background"
        className="w-full h-full object-cover absolute -z-10 inset-0"
        aria-hidden="true"
      />

      <div className="w-[80%] mx-auto">
        <div className="flex flex-col items-center text-center ">
          {/* Added semantic heading structure and better text styling */}
          <span className="text-md font-light uppercase tracking-wider text-white">
            CE QUE NOUS FAISONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            SERVICES QUE NOUS OFFRONS
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
    title: "EMBALLAGE PERSONNALISÉ SOLUTIONS",
    description:
      "Nos installations d’emballage sont équipées des dernières technologies,  garantissant que nos produits parviennent à nos clients dans des  conditions optimales, prêts à être vendus au détail ou à être  transformés.",
    image: "/accueil/services/s2.png",
  },
  {
    title: "DISTRIBUTION MONDIALE RÉSEAU",
    description:
      "nous livrons nos fruits de première qualité. Notre expertise logistique  garantit une livraison rapide et efficace, en maintenant la fraîcheur et la qualité de nos produits de la ferme à la table.",
    image: "/accueil/services/s3.png",
  },
  {
    title: "AGRICULTURE DURABLELES PRATIQUES",
    description:
      "Nous accordons la priorité à la santé des sols, à la conservation de  l’eau et à la biodiversité, en veillant à ce que nos méthodes agricoles  soient non seulement productives mais également respectueuses de  l’environnement.",
    image: "/accueil/services/s4.png",
  },
  {
    title: "FRUITS ROUGESCULTURE ET EXPORTATION",
    description:
      "Nos fermes ultramodernes d’Agadir et de Moulay Bousselham garantissent un approvisionnement constant en fruits frais et délicieux, dans le respect des normes de qualité les plus élevées.",
    image: "/accueil/services/s1.png",
  },
];