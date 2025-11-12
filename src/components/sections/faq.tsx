"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We work with a diverse range of businesses, from high-growth startups to established enterprises across various industries. Our strategies are customized to fit the unique needs and goals of each client, regardless of their size or sector.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "The timeline for results varies depending on the services you choose. For example, SEO is a long-term strategy that can take 3-6 months to see significant ranking improvements, while PPC campaigns can generate leads almost immediately. We set clear expectations and milestones for every project.",
  },
  {
    question: "How do you measure the success of a campaign?",
    answer:
      "Success is measured against the specific Key Performance Indicators (KPIs) we establish during the strategy phase. This could include metrics like organic traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), and customer lifetime value (LTV). We provide detailed monthly reports to track progress.",
  },
  {
    question: "Do you require long-term contracts?",
    answer:
      "We offer flexible engagement models. While we recommend a commitment of at least 6 months for services like SEO to allow enough time for our strategies to bear fruit, we also offer project-based work and shorter-term contracts for other services. Our goal is to build a long-term partnership based on results and trust.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is tailored to the specific needs and scope of each project. After our initial discovery call, we will provide a detailed proposal outlining the services, scope of work, and a clear pricing structure. We focus on providing value and a strong return on your investment.",
  },
];

export function Faq() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  
  return (
    <motion.section
      id="faq"
      className="w-full py-20 md:py-28 bg-secondary/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions? We've got answers. Here are some of the most common inquiries we receive.
          </motion.p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
             >
                <AccordionItem value={`item-${index}`} className="bg-background rounded-lg mb-4 shadow-sm border px-6">
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                    {item.answer}
                </AccordionContent>
                </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
