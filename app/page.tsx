import { Contact } from "lucide-react";
import Image from "next/image";
import ContactButtonNav, {
  ContactButton,
  VoirNotreGamme,
} from "./global_components/contactButton";
import { HeaderCard } from "./global_components/headerCard";
import { HeaderNbCard } from "./global_components/headerNbCard";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <header className="w-full h-screen relative flex  overflow-hidden rounded-[3rem] border-10 border-white">
        <img
          src="/BackgroundHome.png"
          alt=""
          className="md:w-screen object-cover hidden md:block  h-screen absolute -z-10  "
        />
        <img
          src="/BackgroundHome.png"
          alt=""
          className=" h-screen object-cover object-right w-full  md:hidden   absolute -z-10  "
        />

        <div className=" w-[80%] h-[60%] mx-auto text-white  flex flex-col justify-between  md:items-strat">
          <div >
            {/* medium to large title  */}
            <h1 className=" font-bold md:text-6xl lg:text-7xl  text-left uppercase hidden md:block">
              Leader{" "}
              <span className="font-thin">
                marocain <br />
                des
              </span>{" "}
              fruits rouges <br />
              premium
            </h1>
            {/* small title  */}
            <h1 className=" font-bold text-4xl text-center leading-11   uppercase sm:block md:hidden">
              Leader{" "}
              <span className="font-thin">
                marocain des <br />
              </span>{" "}
              fruits rouges <br />
              premium
            </h1>
            <p className="font-thin tracking-wide pt-2 text-md lg:text-3xl md:text-2xl text-center md:text-left  ">
              Cultiver l’excellence, récolter la confiance.
            </p>
          </div>
          <div className="gap-3 md:mt-8 mt-5 flex flex-col md:flex-row items-center">
            <ContactButton />
            <VoirNotreGamme />
          </div>
          <HeaderCard />
          <div className="flex gap-6 ">
            <HeaderNbCard/>
            <HeaderNbCard/>
            <HeaderNbCard/>
          </div>
        </div>
      </header>
    </div>
  );
}
