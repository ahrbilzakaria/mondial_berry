import { DurCard } from "@/app/global_components/durCard";

export const Section4 = () => {
  return (
    <section className="w-full relative py-18 px-4 ">
      <img
        src="/durabilite/img1.webp"
        alt=""
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
      <div className="w-[80%] mx-auto flex flex-col gap-8 ">
        <div className="text-center mx-auto text-white flex flex-col gap-4">
          <h2 className="font-bold md:text-3xl text-2xl">INNOVATION ET TECHNOLOGIE</h2>
          <p className="md:text-lg text-sm max-w-4xl">
            Nos installations de production sont équipées d’équipements de tri
            et de calibrage modernes qui utilisent <strong>des capteurs optiques et
            l’intelligence artificielle pour sélectionner les meilleurs fruits </strong>,
            garantissant une qualité constante et minimisant les déchets.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-col md:flex-row px-4">
            {cards.map((item,idx)=>(
                <DurCard svg={item.svg} content={item.content} key={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    svg: "/durabilite/svg4.svg",
    content: "SYSTÈMES AVANCÉS",
  },
  {
    svg: "/durabilite/svg5.svg",
    content: "TRI AUTOMATISÉ",
  },
  {
    svg: "/durabilite/svg6.svg",
    content: "SURVEILLANCE EN TEMPS RÉEL",
  },
];