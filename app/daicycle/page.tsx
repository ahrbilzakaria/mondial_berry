import Hero from "./daicycle_sections/Hero";
import { Section1 } from "./daicycle_sections/section1";
import { Section2 } from "./daicycle_sections/section2";
import { Section3 } from "./daicycle_sections/section3";

export default function page(){
    return(
        <div>
            <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
    )
}
