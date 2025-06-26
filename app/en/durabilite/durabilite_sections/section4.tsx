import { DurCard } from "../../global_components/durCard";

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
          <h2 className="font-bold md:text-3xl text-2xl">
            INNOVATION AND TECHNOLOGY
          </h2>
          <p className="md:text-lg text-sm max-w-4xl">
            Our production facilities are equipped with modern sorting and
            grading equipment that uses{" "}
            <strong>
              optical sensors and artificial intelligence to select the best
              fruits
            </strong>
            , ensuring consistent quality and minimizing waste.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-col md:flex-row px-4">
          {cards.map((item, idx) => (
            <DurCard svg={item.svg} content={item.content} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    svg: "/durabilite/svg4.svg",
    content: "ADVANCED SYSTEMS",
  },
  {
    svg: "/durabilite/svg5.svg",
    content: "AUTOMATED SORTING",
  },
  {
    svg: "/durabilite/svg6.svg",
    content: "REAL-TIME MONITORING",
  },
];
