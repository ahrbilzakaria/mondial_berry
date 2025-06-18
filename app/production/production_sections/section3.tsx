'use client'
import { motion } from 'framer-motion'

export const Section3 = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full relative md:pt-30 pt-20 mt-24"
    >
      <img
        src="/production/img4.webp"
        alt=""
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="md:w-[80%] w-[95%] mx-auto bg-gradient-to-b from-white/50 to-white h-full backdrop-blur-lg flex flex-col gap-8 py-16 px-4 justify-center items-center rounded-t-2xl"
      >
        <motion.img
          src="/production/icon.png"
          alt=""
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
            borderColor: ["#E8CED4", "rgba(232, 206, 212, 0.3)", "#E8CED4"],
          }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            borderColor: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.2 }}
          className="md:h-34 md:w-34 h-28 w-28 border-8  border-[#E8CED4] rounded-full"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="md:text-5xl text-3xl md:leading-14 leading-10 max-w-3xl text-center mx-auto text-primary "
        >
          <span className="font-bold">Des produits écologiques</span>
          <br /> peuvent être fabriqués à<br /> partir de zéro
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
