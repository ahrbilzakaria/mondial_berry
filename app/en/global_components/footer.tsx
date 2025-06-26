"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full mt-24">
      <div className="bg-footer p-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[80%] mx-auto mt-18 flex md:gap-10 gap-6 md:flex-row flex-col text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:gap-6 gap-4"
          >
            <p className="font-bold text-2xl">ABOUT</p>
            <span className="max-w-md font-normal md:leading-8 leading-6 md:text-md text-sm">
              Stay connected with Mondial Berry for the latest updates on our
              premium berries and sustainable practices. Your satisfaction and
              feedback are our top priorities.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:gap-6 gap-4"
          >
            <p className="font-bold md:text-2xl text-xl">EXPLORE</p>
            <ul className="gap-4 text-white font-light flex flex-col ">
              <li>
                <Link className="hover:underline" href="/en">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/en/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/en/gamme">
                  Range
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/en/production">
                  Production
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/en/durabilite">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/en/experience">
                  Experience
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:gap-6 gap-4"
          >
            <p className="font-bold text-2xl">CONTACT</p>
            <div className="gap-4 text-white font-light flex flex-col">
              <address className="md:text-md text-sm not-italic max-w-md font-normal md:leading-8 leading-6">
                Bur Eb 202 Bloc E Technopole 2 2nd Floor Cite Founty Agadir
              </address>
              <a
                href="mailto:Infos@mondialberry.com"
                className="max-w-md font-normal md:leading-8 leading-6 hover:underline md:text-md text-sm"
              >
                Infos@mondialberry.com
              </a>
              <a
                href="tel:+212528322993"
                className="hover:underline md:text-md text-sm"
              >
                +212 528 322 993
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto bg-secondary">
        <p className="text-center text-[0.7rem] md:text-sm text-white font-light py-4">
          © {new Date().getFullYear()} Mondial Berry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
