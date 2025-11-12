import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Propel Your Brand to Global Heights
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Global Leap Marketing delivers innovative digital marketing strategies
            that drive growth, engagement, and measurable results. Let's build
            your future, together.
          </p>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-[#FF7F50] text-white hover:bg-[#FF7F50]/90 transition-all duration-300 transform hover:scale-105">
            <Link href="#contact">Get a Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
