
"use client";

import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const services = [
  {
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

export function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const isMobile = useIsMobile();
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveService(services[index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = serviceRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const activeServiceIndex = services.findIndex(s => s.title === activeService.title);
  const Icon = activeService.icon;

  if (isMobile) {
    return (
      <motion.section 
        id="services" 
        className="w-full py-20 md:py-28 bg-secondary/50"
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
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                ref={el => serviceRefs.current[index] = el}
                className="flex flex-col items-center text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={contentVariants}
              >
                  <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shrink-0 mb-6 shadow-md border">
                    <service.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 max-w-xl">{service.description}</p>
                  <p className="text-base font-medium text-foreground mb-6 max-w-xl">{service.valueProposition}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">What to Expect:</h4>
                    <ul className="space-y-2 text-muted-foreground text-left max-w-md mx-auto">
                      {service.customerExpectations.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section 
      id="services" 
      className="w-full py-20 md:py-28 bg-secondary/50"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 min-h-[500px]">
          <div className="md:col-span-1">
              <div className="sticky top-24 space-y-2">
                {services.map((service, index) => (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-all duration-300 border border-transparent",
                      activeService.title === service.title
                        ? "bg-background shadow-md border-border/50"
                        : "hover:bg-background/50"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors", 
                        activeService.title === service.title ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      )}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className={cn("text-base font-semibold text-primary transition-colors",
                         activeService.title !== service.title && "text-muted-foreground group-hover:text-primary"
                      )}>{service.title}</h3>
                    </div>
                  </button>
                ))}
              </div>
          </div>

          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="bg-background/80 p-8 rounded-xl shadow-lg border border-border/60"
              >
                  <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                          <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                          <h3 className="text-2xl font-bold font-headline text-primary">{activeService.serviceName}</h3>
                          <p className="text-muted-foreground">{activeService.description}</p>
                      </div>
                  </div>

                  <p className="text-base font-medium text-foreground my-6 leading-relaxed">{activeService.valueProposition}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-4">What to Expect:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      {activeService.customerExpectations.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
