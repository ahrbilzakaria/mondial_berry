"use client"
import { motion } from 'framer-motion';


export const Section1 = () => {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-12 mt-16">
      <div className="max-w-3xl py-4 md:px-16 px-8 flex flex-col gap-2 items-center mx-auto [background-image:conic-gradient(from_180deg_at_50%_50%,_#941936_0deg,_#2E0811_360deg)] rounded-2xl">
        <img src="/daicycle/svg1.svg" alt="" className='md:h-16 h-14' />
        <p className="text-white md:text-2xl text-md text-center ">
          Nous cultivons les meilleurs fruits au monde
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        className="w-full mx-auto text-primary flex flex-col items-center "
      >
        <div className="text-center mx-auto">
          <h2 className="text-3xl md:text-4xl max-w-3xl italic font-semibold text-center mx-auto ">
            Vivez la fraîcheur des fruits rouges premium
          </h2>

          <p className="text-lg md:text-xl text-center mx-auto tracking-wide max-w-4xl mt-4">
            Notre engagement envers l’excellence garantit que chaque baie
            regorge de saveur, de nutriments et de fraîcheur. Découvrez la
            différence avec nos framboises, fraises, myrtilles et mûres
            soigneusement cultivées et récoltées.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
