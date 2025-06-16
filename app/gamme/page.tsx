
import Hero from "./gamme_sections/Hero";
import { Section1 } from "./gamme_sections/section1";
import { Section2 } from "./gamme_sections/section2";
import { Section3 } from "./gamme_sections/section3";
import { Section4 } from "./gamme_sections/section4";
import { Section5 } from "./gamme_sections/section5";



export default function page() {
  return (
    <div>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>
  );
}