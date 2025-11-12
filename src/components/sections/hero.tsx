
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
       <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-30 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
      </div>
      <motion.div
        className="container mx-auto max-w-7xl px-4 md:px-6 text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-4 shadow-sm"
            variants={itemVariants}
          >
            Driving Growth Through Innovation
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline"
            variants={itemVariants}
          >
            Propel Your Brand to Global Heights
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Global Leap Marketing delivers innovative digital marketing strategies
            that drive growth, engagement, and measurable results. Let's build
            your future, together.
          </motion.p>
        </div>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 transform hover:scale-105 shadow-lg shadow-accent/20">
            <Link href="#contact">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform duration-300 transform hover:scale-105 bg-background/50">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
