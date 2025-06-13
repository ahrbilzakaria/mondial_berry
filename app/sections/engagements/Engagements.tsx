import { EngagementCard } from "../../global_components/engagementCard";

export default function Engagements() {
  return (
    <section className="bg-[url(/accueil/img3.png)] bg-blend-hard-light bg-center  text-primary pt-12 relative  pb-12">
      <div className=" w-[80%] mx-auto flex flex-col items-start">
        <h2 className=" text-3xl md:text-4xl italic font-semibold">
          Nos engagements
        </h2>
        <div className="flex gap-4 flex-col md:flex-row flex-wrap  items-center mt-12 ">
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
      </div>

      {/* <img
        src="/accueil/img3.webp"
        alt=""
        className="absolute max-sm:-bottom-0 -bottom-60 left-1/2 -translate-x-1/2 object-center -z-10 mix-blend-hard-light max-sm:scale-180 opacity-65 "
      /> */}
    </section>
  );
}
