"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { ScanSearch, Lightbulb, PencilRuler, Rocket, AreaChart, Icon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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

type Step = typeof processSteps[0];

function StepItem({ step, onInView, index }: { step: Step; onInView: (index: number) => void; index: number; }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      onInView(index);
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, onInView, index, controls]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0.5, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      className="mb-16"
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-bold font-headline text-primary mb-3">{step.title}</h3>
      <p className="text-muted-foreground md:text-lg">{step.description}</p>
    </motion.div>
  );
}

export function HowWeWork() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const ActiveIcon = processSteps[activeStepIndex].icon;

  return (
    <section id="how-we-work" className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
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

        <div className="grid md:grid-cols-2 gap-16">
          <div className="hidden md:block">
            <div className="sticky top-36">
              <div className="relative w-64 h-64 mx-auto rounded-full flex items-center justify-center bg-background shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full" />
                <div className="absolute inset-5 bg-background rounded-full" />
                <motion.div
                  key={activeStepIndex}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <ActiveIcon className="h-24 w-24 text-accent" />
                </motion.div>
              </div>
            </div>
          </div>
          <div>
            {processSteps.map((step, index) => (
              <StepItem
                key={index}
                step={step}
                index={index}
                onInView={setActiveStepIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
