import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Engagements from "./sections/engagements/Engagements";
import { Services } from "./sections/services/Services";
import Type from "./sections/types/Type";
import { Avantages } from "./sections/avantages/Avantages";
import { AvantagesCards } from "./sections/avantages/AvantagesCards";
import InfiniteScrollText from "./global_components/InfiniteScrollText";
import { ContactSection } from "./sections/contact/Contact";


export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <Hero />
      <About />
      <Features />
      <Engagements />
      <Services />
      <Type />
      <Avantages />
      <AvantagesCards />
      <InfiniteScrollText text="Mondial Berry Export" speed={"medium"} className="text-secondary"  />
      <ContactSection />
    </div>
  );
}
