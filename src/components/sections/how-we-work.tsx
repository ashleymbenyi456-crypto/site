"use client";

import { motion } from "framer-motion";
import { ScanSearch, Lightbulb, PencilRuler, Rocket, AreaChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const processSteps = [
  {
    icon: ScanSearch,
    title: "1. Discovery & Research",
    description: "We start by diving deep into your business, market, and competition to understand your unique challenges and opportunities.",
  },
  {
    icon: Lightbulb,
    title: "2. Strategy & Planning",
    description: "We craft a bespoke marketing strategy and a clear roadmap with measurable goals, timelines, and KPIs based on our findings.",
  },
  {
    icon: PencilRuler,
    title: "3. Implementation",
    description: "Our team gets to work, executing the plan with precision. From creating content to launching campaigns, we handle it all.",
  },
  {
    icon: Rocket,
    title: "4. Optimization",
    description: "As campaigns go live, we monitor performance closely, making data-driven adjustments to maximize your return on investment.",
  },
  {
    icon: AreaChart,
    title: "5. Analysis & Reporting",
    description: "We provide transparent, easy-to-understand reports that show you exactly what's working and how we're driving your growth.",
  },
];

export function HowWeWork() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const listVariants = {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    hidden: {},
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
      id="how-we-work"
      className="w-full py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A Proven Path to Success
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our structured, five-step process ensures every campaign is strategic, transparent, and results-oriented.
          </motion.p>
        </div>

        <motion.div
          className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
           <div className="absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 hidden lg:block" />
          {processSteps.map((step, i) => (
            <motion.div key={step.title} variants={itemVariants} className="relative">
               <div className="absolute -top-3 left-1/2 w-px h-[calc(50%-1.5rem)] bg-border -translate-x-1/2 hidden lg:block" />
              <Card className="h-full text-center bg-background hover:bg-card hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent/50 group">
                <CardHeader className="items-center">
                    <div className="p-4 bg-secondary rounded-full mb-4 inline-flex border-2 border-transparent group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
                        <step.icon className="h-7 w-7 text-accent" />
                    </div>
                  <CardTitle className="font-headline text-lg text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 text-sm">{step.description}</CardDescription>
              </Card>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-border hidden lg:flex items-center justify-center" />
               <div className="absolute top-1/2 left-1/2 w-px h-[calc(50%-1.5rem)] bg-border -translate-x-1/2 hidden lg:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
