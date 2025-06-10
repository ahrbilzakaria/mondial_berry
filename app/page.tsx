import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Engagements from "./sections/engagements/Engagements";
import { Services } from "./sections/services/Services";
import Type from "./sections/types/Type";


export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <Hero />
      <About />
      <Features />
      <Engagements />
      <Services />
      <Type />
    </div>
  );
}
