
"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: "portfolio-1",
    client: "Innovate INC",
    title: "E-commerce SEO Overhaul",
    description:
      "Dramatically increased organic traffic by 150% and doubled conversion rates through a comprehensive on-page and technical SEO strategy.",
    services: ["SEO", "Content"],
  },
  {
    id: "portfolio-2",
    client: "Future Gadgets",
    title: "Viral Social Media Campaign",
    description:
      "Launched a product campaign that reached over 5 million users, resulting in a 300% increase in brand mentions and a sold-out product line.",
    services: ["Social Media", "PPC"],
  },
  {
    id: "portfolio-3",
    client: "GreenLeaf Organics",
    title: "Brand Launch & Content Strategy",
    description:
      "Established a new brand identity and grew a loyal customer base from the ground up with a targeted content and email marketing plan.",
    services: ["Branding", "Email"],
  },
];

function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
  const image = PlaceHolderImages.find((img) => img.id === item.id);

  return (
    <Card className="overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-xl h-full flex flex-col">
      <div className="overflow-hidden relative h-full">
        {image && (
          <Image
            src={image.imageUrl}
            alt={item.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        )}
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
         <div className="absolute bottom-0 left-0 p-6">
          <h3 className="font-headline text-xl text-white mb-1">
            {item.client}
          </h3>
          <p className="text-white/80">{item.title}</p>
        </div>
      </div>
      <CardContent className="p-6 bg-background">
        <p className="text-muted-foreground mb-4 flex-grow">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.services.map((service) => (
            <Badge key={service} variant="secondary">
              {service}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}


export function Portfolio() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
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
      id="portfolio"
      className="w-full py-20 md:py-28 bg-frost"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
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
            Our Success Stories
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We deliver results. Explore a selection of our most impactful
            campaigns.
          </motion.p>
        </div>
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioItems.map((item) => (
             <motion.div key={item.id} variants={itemVariants}>
                <PortfolioCard item={item} />
             </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
