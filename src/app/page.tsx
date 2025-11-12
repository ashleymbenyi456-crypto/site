import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <Faq />
      <Contact />
    </>
  );
}
