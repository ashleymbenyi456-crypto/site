"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    company: "CEO, Innovate INC",
    quote:
      "Global Leap Marketing completely transformed our online presence. Their SEO expertise is unmatched, and our traffic has never been higher. They are true partners in our growth.",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    company: "Founder, Future Gadgets",
    quote:
      "The social media campaign they executed was nothing short of brilliant. Our product sold out in weeks! I was blown away by their creativity and strategic approach.",
  },
  {
    id: "testimonial-3",
    name: "Laura Davis",
    company: "Marketing Director, GreenLeaf Organics",
    quote:
      "Working with Global Leap has been a game-changer. Their content strategy helped us connect with our audience on a deeper level. Highly recommended!",
  },
];

export function Testimonials() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="w-full py-20 md:py-28 lg:py-32 bg-secondary/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real stories from businesses we've helped to succeed.
          </motion.p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === testimonial.id
              );
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col bg-background">
                      <CardContent className="flex flex-col p-8 flex-grow">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                        </div>
                        <blockquote className="text-base italic text-foreground mb-6 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4 mt-auto">
                          <Avatar className="h-12 w-12">
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>}
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-left font-headline text-primary">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground text-left">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]"/>
          <CarouselNext className="right-[-50px]"/>
        </Carousel>
      </div>
    </motion.section>
  );
}
