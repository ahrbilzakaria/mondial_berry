"use client";
import { motion } from "framer-motion";
import NavBar from "../../global_components/navBar";

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
      <div className="mb-24">
        <motion.h1
          className="md:text-6xl  lg:text-7xl text-3xl font-bold text-center md:mt-20 "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-thin">About</span>
          <br /> our company
        </motion.h1>
        <motion.p
          className="font-thin tracking-wide pt-2 text-md lg:text-3xl md:text-2xl text-center "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          WHO ARE WE?
        </motion.p>
      </div>
    </header>
  );
}
