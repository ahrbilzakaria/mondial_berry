import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeaderCard = () => {
  return (
    <div className="w-80 bg-white/6 backdrop-blur-md p-6  flex-col gap-4 rounded-2xl absolute bottom-10 right-40 hidden lg:flex">
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
        <h3>Notre Mission</h3>
      </div>
      <p className="text-[0.8rem] font-light">
        Offrir les meilleurs fruits rouges du Maroc au monde, cultivés avec
        passion, expertise et respect de la nature. Chez Mondial Berry, chaque
        baie est un engagement pour la qualité, la durabilité et l'innovation
      </p>
      <Link href="" className="underline flex items-center gap-2 tracking-wide">
        Découvrir plus
        <ArrowRight></ArrowRight>
      </Link>
    </div>
  );
}
