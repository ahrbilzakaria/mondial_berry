import { div } from "framer-motion/client";
import Hero from "./production_sections/Hero";
import { Section1 } from "./production_sections/section1";
import { Section2 } from "./production_sections/section2";
import { Section3 } from "./production_sections/section3";
import { Section4 } from "./production_sections/section4";
import { Section5 } from "./production_sections/section5";
import { Section6 } from "./production_sections/section6";
import { Section7 } from "./production_sections/section7";


export default function page(){
    return(
        <section>
            <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
        </section>
    )
}