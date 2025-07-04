"use client";
import NavBar from "../../global_components/navBar";
import {
  ContactButton,
  VoirNotreGamme,
} from "../../global_components/contactButton";
import { HeaderCard } from "../../global_components/headerCard";
import { HeaderNbCard } from "../../global_components/headerNbCard";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="w-full h-screen relative flex flex-col rounded-[3rem] border-[10px] border-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-80"
      >
        <NavBar />
      </motion.div>

      <img
        src="/BackgroundHome.webp"
        alt=""
        className="absolute inset-0 object-cover object-right w-full h-full -z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-[80%] h-[80%] mx-auto text-white flex flex-col md:items-start max-sm:justify-center max-sm:-mt-10 mt-12 "
      >
        <div>
          {/* medium to large title  */}
          <h1 className="font-bold md:text-6xl lg:text-7xl text-left uppercase hidden md:block">
            Líder{" "}
            <span className="font-thin">
              marroquí <br />
              de
            </span>{" "}
            frutos rojos <br />
            premium
          </h1>
          {/* small title  */}
          <h1 className="font-bold text-3xl text-center leading-8 uppercase sm:block md:hidden">
            Líder{" "}
            <span className="font-normal">
              marroquí de <br />
            </span>{" "}
            frutos rojos <br />
            premium
          </h1>
          <p className="font-thin tracking-wide pt-2 text-md lg:text-3xl md:text-2xl text-center md:text-left">
            Cultivando la excelencia, cosechando confianza.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="gap-3 md:mt-8 mt-5 flex flex-col md:flex-row items-center "
        >
          <ContactButton />
          <VoirNotreGamme />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="md:flex md:gap-6 gap-2 mt-8 md:mt-14 hidden flex-wrap"
        >
          <HeaderNbCard number={100} description="Hectáreas de campos" />
          <HeaderNbCard number={12} description="países" />
          <HeaderNbCard number={200} description="Colaboradores" />
        </motion.div>
      </motion.div>
      <HeaderCard />
    </header>
  );
}
