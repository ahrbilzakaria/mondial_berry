import { EngagementCard } from "../../global_components/engagementCard";

export default function Engagements() {
  return (
    <div className="w-[80%] mx-auto text-primary mt-12 relative ">
      <h2 className="text-3xl md:text-4xl italic font-semibold">
        Nos engagements
      </h2>
      <div className="flex gap-4 flex-col md:flex-row space-between items-center w-full pt-12">
        <EngagementCard
          type="green"
          url="/accueil/StarIco.png"
          content="Qualité supérieure certifiée"
        />
        <EngagementCard
          type="red"
          url="/accueil/NormIco.png"
          content="Respect des normes environnementales"
        />
        <EngagementCard
          type="green"
          url="/accueil/ResIco.png"
          content="Responsabilité sociale et innovation continue"
        />
      </div>
      <img src="/accueil/img3.png" alt="" className="absolute -bottom-200 -z-10 mix-blend-hard-light w-full object-cover scale-120" />
    </div>
  );
}
