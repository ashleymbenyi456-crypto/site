import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}
