import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-48 bg-grid-slate-50/[0.05]">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-primary mb-4">
            Driving Growth Through Innovation
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl font-headline">
            Propel Your Brand to Global Heights
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Global Leap Marketing delivers innovative digital marketing strategies
            that drive growth, engagement, and measurable results. Let's build
            your future, together.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 transform hover:scale-105">
            <Link href="#contact">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform duration-300 transform hover:scale-105">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
