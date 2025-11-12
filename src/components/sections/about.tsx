"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const image = PlaceHolderImages.find((img) => img.id === "about-us");

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
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
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {image && (
              <Image
                src={image.imageUrl}
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint={image.imageHint}
              />
            )}
          </motion.div>
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div variants={itemVariants} className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Who We Are</motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
              Your Strategic Partner in Digital Growth
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg">
              Global Leap Marketing is a team of passionate marketers, creative thinkers, and data-driven strategists dedicated to helping businesses like yours achieve exponential growth. We believe in building partnerships, not just campaigns.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg">
              Our mission is to demystify digital marketing and deliver strategies that are not only innovative but also transparent and measurable. We're here to translate your vision into tangible results and propel your brand to new heights.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
