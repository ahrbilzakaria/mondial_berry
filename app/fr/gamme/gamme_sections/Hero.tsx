"use client";
import NavBar from "../../global_components/navBar";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="w-full  relative flex flex-col justify-between rounded-[3rem] border-[10px] border-white overflow-hidden text-white md:pb-20 pb-12 md:h-auto h-[50vh]">
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
        className=" inset-0 object-cover h-full absolute w-full -z-10"
      />
      <motion.h1
        className="md:text-6xl  lg:text-7xl text-2xl font-bold text-center mx-auto md:mt-20 mb-24 md:max-w-4xl max-w-[80%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="font-thin">Tout ce qu’il vous faut</span>
        <br /> pour une agriculture d’excellence
      </motion.h1>
    </header>
  );
}
