"use client";

import { motion } from "framer-motion";
import { ScanSearch, Lightbulb, PencilRuler, Rocket, AreaChart } from "lucide-react";

const processSteps = [
  {
    icon: ScanSearch,
    title: "Discovery & Research",
    description: "We start by diving deep into your business, market, and competition. This phase is all about understanding your unique challenges and opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Based on our findings, we craft a bespoke marketing strategy and a clear roadmap with measurable goals, timelines, and KPIs.",
  },
  {
    icon: PencilRuler,
    title: "Implementation & Execution",
    description: "Our team gets to work, executing the plan with precision. From creating content to launching campaigns, we handle it all.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "As your campaigns go live, we monitor performance closely, making data-driven adjustments to maximize your return on investment.",
  },
  {
    icon: AreaChart,
    title: "Analysis & Reporting",
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
            className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4"
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
          className="relative"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-0.5 -translate-x-1/2 bg-border md:block" aria-hidden="true" />
          <div className="grid gap-12 md:gap-0 md:grid-cols-1">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center md:flex-row md:items-start gap-6"
                variants={itemVariants}
              >
                <div className="md:w-1/2 flex justify-start md:data-[align=right]:justify-end" data-align={index % 2 === 0 ? 'left' : 'right'}>
                   <div className="w-full max-w-md space-y-3 text-center md:text-left md:data-[align=right]:text-right" data-align={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="flex items-center justify-center md:justify-start md:data-[align=right]:justify-end gap-3" data-align={index % 2 === 0 ? 'left' : 'right'}>
                      <h3 className="text-xl font-bold font-headline text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                   </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-border shadow-md">
                    <step.icon className="h-7 w-7 text-accent" />
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-border shadow-md md:hidden">
                    <step.icon className="h-7 w-7 text-accent" />
                </div>
                
                <div className="hidden md:block md:w-1/2" />

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
