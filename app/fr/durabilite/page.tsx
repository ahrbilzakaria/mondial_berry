import Hero from "./durabilite_sections/Hero";
import { Section1 } from "./durabilite_sections/section1";
import { Section2 } from "./durabilite_sections/section2";
import { Section3 } from "./durabilite_sections/section3";
import { Section4 } from "./durabilite_sections/section4";

export default function page() {
  return (
    <section className="">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        
    </section>
  );
}
