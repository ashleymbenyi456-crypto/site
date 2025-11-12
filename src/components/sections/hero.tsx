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
    <motion.section
      className="w-full py-24 md:py-32 lg:py-48 bg-grid-slate-50/[0.05]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-primary mb-4"
            variants={itemVariants}
          >
            Driving Growth Through Innovation
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl font-headline"
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 transform hover:scale-105">
            <Link href="#contact">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform duration-300 transform hover:scale-105">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
