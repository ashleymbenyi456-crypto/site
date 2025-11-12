
"use client";

import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ServiceRequestForm } from "./service-request-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


const services = [
  {
    id: "service-1",
    icon: Search,
    title: "Get Found By Customers",
    serviceName: "Search Engine Optimization (SEO)",
    description: "Climb the search rankings to connect with customers who are actively looking for your solutions.",
    valueProposition: "Unlock sustainable growth by ranking higher than your competitors for the keywords that matter most to your business.",
    customerExpectations: [
      "A comprehensive audit of your website's current SEO performance.",
      "In-depth keyword research and competitive analysis.",
      "Ongoing on-page, off-page, and technical SEO optimizations.",
      "Transparent monthly reporting on key metrics like traffic, rankings, and conversions."
    ],
  },
  {
    id: "service-2",
    icon: Megaphone,
    title: "Build a Loyal Following",
    serviceName: "Social Media Marketing",
    description: "Create a vibrant community around your brand and turn followers into lifelong customers.",
    valueProposition: "Transform your social channels into powerful revenue-driving engines by building an authentic connection with your audience.",
    customerExpectations: [
      "A tailored social media strategy for platforms like Instagram, Facebook, etc.",
      "Creation and scheduling of high-quality, engaging content.",
      "Community management to foster engagement and respond to inquiries.",
      "Performance tracking and optimization of ad campaigns."
    ],
  },
  {
    id: "service-3",
    icon: PenTool,
    title: "Become an Industry Voice",
    serviceName: "Content Creation",
    description: "Establish your authority and build trust with high-value content that educates and inspires your audience.",
    valueProposition: "Become the go-to authority in your industry with high-quality content that educates, entertains, and converts.",
    customerExpectations: [
      "A content strategy aligned with your marketing funnel and audience's needs.",
      "Professionally written blog articles, case studies, and whitepapers.",
      "High-quality video scripts and production coordination.",
      "Content distribution strategy to maximize reach and engagement."
    ],
  },
  {
    id: "service-4",
    icon: Mail,
    title: "Drive Repeat Business",
    serviceName: "Email Marketing",
    description: "Nurture customer relationships and boost lifetime value with personalized, automated email campaigns.",
    valueProposition: "Maximize customer lifetime value and drive repeat business with automated, personalized email campaigns that feel like a one-on-one conversation.",
    customerExpectations: [
      "Design and setup of email templates that match your branding.",
      "Development of lead nurturing sequences and automated workflows.",
      "A/B testing of subject lines and content to improve open and click rates.",
      "Segmentation of your email list for highly targeted messaging."
    ],
  },
  {
    id: "service-5",
    icon: MousePointerClick,
    title: "Generate Immediate Leads",
    serviceName: "PPC Advertising",
    description: "Capture high-intent customers at the exact moment they're ready to buy with targeted ad campaigns.",
    valueProposition: "Achieve immediate, measurable results with data-driven PPC campaigns on Google, Facebook, and more, ensuring every dollar you spend is an investment in growth.",
    customerExpectations: [
      "Management of ad campaigns on platforms like Google Ads and Meta Ads.",
      "Continuous keyword research, ad copywriting, and bid management.",
      "Landing page optimization recommendations to improve conversion rates.",
      "Detailed reporting on ad spend, cost-per-click (CPC), and return on ad spend (ROAS)."
    ],
  },
  {
    id: "service-6",
    icon: BarChart,
    title: "Make Smarter Decisions",
    serviceName: "Analytics & Reporting",
    description: "Turn your marketing data into actionable insights that drive strategy and prove your return on investment.",
    valueProposition: "Turn data into decisions. We provide you with clear, actionable insights into your marketing performance so you can understand your ROI and identify new growth opportunities.",
    customerExpectations: [
      "Setup and configuration of analytics tools like Google Analytics 4.",
      "Creation of custom dashboards to track your most important KPIs.",
      "In-depth analysis of user behavior, traffic sources, and conversion funnels.",
      "Regular strategy sessions to review performance and plan next steps."
    ],
  },
];


function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = service.icon;

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      className="perspective-1000 w-full h-[550px] md:h-[500px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={isFlipped ? "back" : "front"}
        variants={flipVariants}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <motion.div
          className={cn(
            "absolute w-full h-full backface-hidden",
            "cursor-pointer"
          )}
        >
          <Card className="h-full flex flex-col items-center justify-center text-center p-6 bg-card group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-accent/50">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6 border-2 border-border group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
              <Icon className="h-10 w-10 text-accent" />
            </div>
            <CardTitle className="font-headline text-2xl text-primary mb-2">
              {service.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground mb-6">
              {service.description}
            </CardDescription>
            <Badge variant="outline">Click to see details</Badge>
          </Card>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className={cn(
            "absolute w-full h-full backface-hidden",
            "cursor-pointer"
          )}
          style={{ transform: "rotateY(180deg)" }}
        >
          <Card className="h-full flex flex-col bg-secondary/70 p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold font-headline text-primary">{service.serviceName}</h3>
            <p className="text-base font-medium text-foreground my-4 leading-relaxed flex-grow">
              {service.valueProposition}
            </p>
            <div>
              <h4 className="text-md font-semibold text-primary mb-3">What to Expect:</h4>
              <ul className="space-y-2 text-muted-foreground text-sm flex-grow">
                {service.customerExpectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
             <Sheet>
              <SheetTrigger asChild>
                <Button size="sm" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                  Request Service <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <ServiceRequestForm serviceName={service.serviceName} />
              </SheetContent>
            </Sheet>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}


export function Services() {
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
      id="services"
      className="w-full py-20 md:py-28 bg-secondary/30"
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
              How We Can Help You Grow
            </motion.h2>
            <motion.p
              className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our suite of digital marketing services is designed to deliver measurable results and turn your vision into reality.
            </motion.p>
        </div>
        <motion.div
          className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
             <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard service={service} />
             </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

    
