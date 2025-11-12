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
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Real stories from businesses we've helped to succeed.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === testimonial.id
              );
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center flex-grow">
                        <p className="text-lg font-medium mb-4">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <Avatar>
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint}/>}
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-left">{testimonial.name}</p>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
