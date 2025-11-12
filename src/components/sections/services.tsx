"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your visibility on search engines and attract high-quality organic traffic with our proven optimization strategies.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage your audience, build brand loyalty, and drive conversions through targeted social media campaigns.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "From blog posts to videos, we create compelling content that resonates with your audience and establishes you as an industry leader.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that deliver value directly to their inboxes.",
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    description: "Get instant, targeted traffic and maximize your ROI with our expertly managed pay-per-click advertising campaigns.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and clear, actionable reports on your marketing performance.",
  },
];

export function Services() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
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
      id="services" 
      className="w-full py-20 md:py-28 bg-secondary/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Our Digital Marketing Services
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A complete suite of services to help your business grow and succeed
            in the digital world.
          </motion.p>
        </div>
        <motion.div 
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="bg-background/80 border-border/60 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary mt-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </motion.section>
  );
}
