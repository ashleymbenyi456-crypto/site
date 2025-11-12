
"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Smile } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Happy Clients",
  },
];

const StatCard = ({
  icon: Icon,
  value,
  label,
  index,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  index: number;
}) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm border border-border/50"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
  >
    <div className="p-3 bg-secondary rounded-full mb-3 border-2 border-transparent group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
      <Icon className="h-7 w-7 text-accent" />
    </div>
    <p className="text-4xl font-bold font-headline text-primary">{value}</p>
    <p className="text-muted-foreground mt-1">{label}</p>
  </motion.div>
);

export function About() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="about"
      className="w-full py-20 md:py-28 bg-secondary/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary"
          >
            Your Strategic Partner in Digital Growth
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto"
          >
            Global Leap Marketing is a team of passionate marketers, creative thinkers, and data-driven strategists dedicated to helping businesses like yours achieve exponential growth. We believe in building partnerships, not just campaigns.
          </motion.p>
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
