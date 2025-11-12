
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
  CheckCircle2,
  Hand,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

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
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. While some improvements can be seen in as little as a few weeks, significant results in traffic and rankings typically take 4-6 months of consistent effort."
      },
      {
        question: "What's the difference between on-page and off-page SEO?",
        answer: "On-page SEO refers to optimizing elements on your website, like content and HTML. Off-page SEO refers to actions taken outside your site, like link building, to improve its authority."
      }
    ]
  },
  {
    icon: Megaphone,
    title: "Build a Loyal Following",
    serviceName: "Social Media Marketing",
    description: "Create a vibrant community around your brand and turn followers into lifelong customers.",
    valueProposition: "Transform your social channels into powerful revenue-driving engines by building an authentic connection with your audience.",
    customerExpectations: [
      "A tailored social media strategy for platforms like Instagram, Facebook, LinkedIn, etc.",
      "Creation and scheduling of high-quality, engaging content.",
      "Community management to foster engagement and respond to inquiries.",
      "Performance tracking and optimization of ad campaigns."
    ],
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer: "This depends on your target audience. We'll conduct research to determine where your ideal customers are most active and focus our efforts there for maximum impact."
      },
      {
        question: "How do you measure social media ROI?",
        answer: "We track key metrics like engagement rate, click-through rate, conversion rate, and cost per acquisition to measure the direct impact of our campaigns on your business goals."
      }
    ]
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
    faqs: [
      {
        question: "How does content marketing help my business?",
        answer: "Content marketing builds trust, educates your audience, improves SEO, generates leads, and establishes your brand as a credible authority, all of which contribute to long-term growth."
      },
      {
        question: "Who writes the content?",
        answer: "We have a team of expert writers and creators who specialize in various industries. We'll match you with a creator who understands your niche and brand voice."
      }
    ]
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
    faqs: [
      {
        question: "Can you help me grow my email list?",
        answer: "Yes! We can implement various strategies like lead magnets, website pop-ups, and targeted ads to help you build a high-quality email list of potential customers."
      },
      {
        question: "What email marketing software do you use?",
        answer: "We are experienced with a wide range of platforms, including Mailchimp, Klaviyo, ConvertKit, and more. We can work with your existing system or recommend the best one for your needs."
      }
    ]
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
    faqs: [
      {
        question: "How much should I spend on PPC?",
        answer: "Your budget will depend on your industry, goals, and competition. We'll work with you to establish a starting budget and scale it responsibly as we gather data and prove ROI."
      },
      {
        question: "What is a good ROAS (Return On Ad Spend)?",
        answer: "A 'good' ROAS varies by industry and profit margins. A common benchmark is a 4:1 ratio ($4 in revenue for every $1 spent), but we will set specific goals based on your business."
      }
    ]
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
    faqs: [
      {
        question: "What KPIs should I be tracking?",
        answer: "The most important Key Performance Indicators (KPIs) depend on your goals. We'll help you identify the right metrics, which might include website traffic, conversion rate, customer acquisition cost (CAC), and customer lifetime value (LTV)."
      },
      {
        question: "How often will I receive reports?",
        answer: "We provide comprehensive reports on a monthly basis, but our dashboards are available 24/7 for you to check performance at any time. We also schedule regular calls to discuss the results and our strategy."
      }
    ]
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
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
            <Dialog key={service.title}>
              <DialogTrigger asChild>
                <motion.div variants={itemVariants} className="h-full">
                  <Card className="relative bg-background/80 border-border/60 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full cursor-pointer overflow-hidden">
                    <CardHeader className="flex flex-col items-center text-center p-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center shrink-0 mb-4">
                        <Icon className="h-8 w-8 text-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <CardTitle className="font-headline text-xl text-primary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 text-center">
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                    <motion.div
                      className="absolute bottom-4 right-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0, rotate: 15 }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      animate={{
                        opacity: [0, 1, 0.8, 1],
                        y: [0, -5, 0],
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    >
                      <Hand className="h-6 w-6" />
                    </motion.div>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[90dvh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-2xl font-headline text-primary">{service.serviceName}</span>
                  </DialogTitle>
                  <DialogDescription className="text-left py-4 text-base">
                    {service.valueProposition}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div>
                    <h3 className="text-lg font-semibold font-headline text-primary mb-3">What to Expect</h3>
                    <ul className="space-y-2">
                      {service.customerExpectations.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-headline text-primary mb-3">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {service.faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )})}
        </motion.div>
      </div>
    </motion.section>
  );
}

  

    