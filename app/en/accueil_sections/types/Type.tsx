"use client";
import { motion } from "framer-motion";
import { DecouvrezPlus } from "../../global_components/contactButton";

export default function Type() {
  return (
    <section className="w-[80%] mx-auto  mt-12 bg-types md:p-14 p-8   rounded-2xl md:rounded-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center justify-between text-white gap-6 md:gap-10"
      >
        <div className="flex md:gap-4  items-center bg-[#0931018F] md:px-6 pr-3 md:py-1 rounded-full border border-white/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="md:scale-100 scale-50"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.95726 6.62876C8.95151 11.6035 8.07714 10.5977 12.8651 12.2746C7.89035 13.2688 8.8962 12.3945 7.21927 17.1824C6.22501 12.2077 7.09939 13.2135 2.31143 11.5366C7.28617 10.5423 6.28032 11.4167 7.95726 6.62876Z"
              fill="url(#paint0_linear_9_1387)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.6193 2.74366C29.9146 9.22687 28.7755 7.91415 35.0133 10.0991C28.5324 11.3945 29.8428 10.2553 27.6579 16.493C26.3626 10.0098 27.5016 11.3225 21.2639 9.13762C27.7448 7.84219 26.4342 8.98366 28.6193 2.74366Z"
              fill="url(#paint1_linear_9_1387)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.5011 15.3395C20.2525 24.1004 18.7118 22.3282 27.1421 25.2798C18.3812 27.0312 20.1533 25.4905 17.2018 33.9207C15.4502 25.1622 16.991 26.932 8.55908 23.9803C17.32 22.2289 15.5478 23.7696 18.5011 15.3395Z"
              fill="url(#paint2_linear_9_1387)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9_1387"
                x1="7.95726"
                y1="6.62876"
                x2="7.21927"
                y2="17.1824"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#5B8C51" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9_1387"
                x1="28.6193"
                y1="2.74366"
                x2="27.6579"
                y2="16.493"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#5B8C51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_9_1387"
                x1="18.5002"
                y1="15.3394"
                x2="17.2009"
                y2="33.9207"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#5B8C51" />
              </linearGradient>
            </defs>
          </svg>
          <span className="md:text-lg text-[0.6rem] font-medium bg-gradient-to-r from-[#7BA249] to-white text-transparent bg-clip-text leading-10">
            TYPES OF MODERN AGRICULTURE
          </span>
        </div>
        <h2 className="text-xl md:text-5xl lg:text-6xl text-center ">
          <strong>FRUIT AGRICULTURE</strong> IS CRUCIAL FOR A
          <strong> SUSTAINABLE FUTURE</strong> DEVELOPMENT
        </h2>
        <DecouvrezPlus />
      </motion.div>

      {/* <img
        src="/accueil/img4.png"
        alt=""
        className="absolute inset-0 -z-10 w-full object-cover h-full"
      /> */}
    </section>
  );
}
