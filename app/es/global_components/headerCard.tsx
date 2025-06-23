import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeaderCard = () => {
  return (
    <div className="w-80 bg-white/6 backdrop-blur-md p-6  flex-col gap-4 rounded-2xl absolute bottom-10 right-40 hidden lg:flex text-white">
      <div className="font-medium flex gap-2 items-center  text-xl tracking-wide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
        >
          <circle cx="5" cy="5.5" r="5" fill="white" />
        </svg>
        <h3>Nuestra misión</h3>
      </div>
      <p className="text-[0.8rem] font-light">
        Ofrecer las mejores frutas rojas de Marruecos al mundo, cultivadas con
        pasión, experiencia y respeto por la naturaleza. En Mondial Berry, cada
        baya es un compromiso con la calidad, la sostenibilidad y la innovación.
      </p>
      <Link href="" className="underline flex items-center gap-2 tracking-wide">
        Descubrir más
        <ArrowRight></ArrowRight>
      </Link>
    </div>
  );
};
