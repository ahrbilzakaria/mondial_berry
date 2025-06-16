"use client";
import { Contact } from "../global_components/contact";
import NavBar from "../global_components/navBar";
import { ContactSection } from "../accueil_sections/contact/Contact";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8,delay: 0.7 }}
      className="h-screen flex items-center flex-col relative border-[10px] border-white w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full absolute z-10"
      >
        <NavBar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-full"
      >
      <Contact version="page" />
      </motion.div>
    </motion.div>
  );
}
