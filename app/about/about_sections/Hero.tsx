"use client";
import NavBar from "@/app/global_components/navBar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="w-full  relative flex flex-col rounded-[3rem] border-[10px] border-white overflow-hidden text-white pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <NavBar />
      </motion.div>

      <img
        src="/BackgroundHome.webp"
        alt=""
        className=" inset-0 object-cover h-full absolute w-full -z-10"
      />
      <motion.h1
        className="md:text-6xl  lg:text-7xl text-3xl font-bold text-center mt-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="font-thin">À propos de</span>
        <br /> notre entreprise
      </motion.h1>
      <motion.p
        className="font-thin tracking-wide pt-2 text-md lg:text-3xl md:text-2xl text-center "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        QUI SOMMES-NOUS ?
      </motion.p>
    </header>
  );
}
