
"use client";

import * as React from "react";
import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
  CheckCircle2,
  ArrowRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ServiceRequestForm } from "./service-request-form";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

type Service = (typeof services)[0];

function ServiceCard({ service, onHover, onClick, isSelected }: { service: Service; onHover: (icon: React.ElementType) => void; onClick: (service: Service) => void; isSelected: boolean; }) {
  return (
    <motion.div
      layout
      className="w-full h-[250px] md:h-[300px]"
      onMouseEnter={() => onHover(service.icon)}
      onClick={() => onClick(service)}
    >
      <Card className={cn(
        "cursor-pointer h-full flex flex-col items-center justify-center text-center p-6 bg-card group hover:shadow-xl transition-all duration-300 border-2",
        isSelected ? "border-accent/80 shadow-xl" : "border-transparent hover:border-accent/50"
      )}>
        <CardTitle className="font-headline text-2xl text-primary mb-2">
          {service.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {service.description}
        </CardDescription>
      </Card>
    </motion.div>
  );
}

export function Services() {
  const [hoveredIcon, setHoveredIcon] = useState<React.ElementType>(() => services[0].icon);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setHoveredIcon(service.icon);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  const ActiveIcon = selectedService?.icon || hoveredIcon;

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <AnimatePresence>
            {!selectedService && (
              <>
                <div className="lg:col-span-1 flex flex-col gap-8">
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[0]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[0].id}/>
                  </motion.div>
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[1]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[1].id} />
                  </motion.div>
                </div>

                <div className="lg:col-span-2 hidden lg:flex justify-center items-center h-full">
                  <motion.div
                    layoutId="service-card"
                    className="relative w-80 h-80 rounded-full flex items-center justify-center bg-background/50 shadow-2xl"
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full" />
                    <div className="absolute inset-5 bg-background rounded-full" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredIcon.displayName}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        className="relative z-10"
                      >
                        {React.createElement(hoveredIcon, { className: "h-32 w-32 text-accent" })}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-8">
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[2]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[2].id} />
                  </motion.div>
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[3]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[3].id} />
                  </motion.div>
                </div>
                
                <div className="md:col-start-1 lg:col-start-2">
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[4]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[4].id} />
                  </motion.div>
                </div>
                <div className="md:col-start-2 lg:col-start-3">
                  <motion.div variants={itemVariants} exit={{ opacity: 0, y: 20 }}>
                    <ServiceCard service={services[5]} onHover={setHoveredIcon} onClick={handleSelectService} isSelected={selectedService?.id === services[5].id} />
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedService && (
              <motion.div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center items-center p-4">
                  <motion.div
                    layoutId="service-card"
                    className="relative w-full max-w-4xl min-h-[500px] rounded-2xl bg-background shadow-2xl p-8 md:p-12"
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                      <motion.button 
                        onClick={handleClose} 
                        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                      >
                        <X className="h-6 w-6" />
                      </motion.button>
                     <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                        className="flex flex-col md:flex-row gap-8 md:gap-12 h-full"
                      >
                        <div className="flex-shrink-0 flex flex-col items-center text-center md:text-left md:items-start">
                          <div className="p-4 bg-secondary rounded-full mb-4 inline-flex border-2 border-accent/30 bg-accent/10">
                            <ActiveIcon className="h-12 w-12 text-accent" />
                          </div>
                          <h2 className="text-3xl font-bold font-headline text-primary">{selectedService.serviceName}</h2>
                          <p className="text-lg text-muted-foreground mt-2">{selectedService.valueProposition}</p>
                           <Sheet>
                            <SheetTrigger asChild>
                              <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto">
                                Request Service <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </SheetTrigger>
                            <SheetContent>
                              <ServiceRequestForm serviceName={selectedService.serviceName} />
                            </SheetContent>
                          </Sheet>
                        </div>

                        <div className="border-t md:border-t-0 md:border-l border-border mt-6 md:mt-0 md:pl-12 pt-6 md:pt-0">
                          <h4 className="text-xl font-semibold text-primary mb-4">What to Expect:</h4>
                          <ul className="space-y-3 text-muted-foreground text-base">
                            {selectedService.customerExpectations.map((item, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                     </motion.div>
                  </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
