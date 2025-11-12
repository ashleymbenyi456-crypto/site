import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioItems = [
  {
    id: "portfolio-1",
    client: "Innovate INC",
    title: "E-commerce SEO Overhaul",
    description:
      "Dramatically increased organic traffic by 150% and doubled conversion rates through a comprehensive on-page and technical SEO strategy.",
    services: ["SEO", "Content Creation"],
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
    services: ["Content Creation", "Email Marketing"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We deliver results. Explore a selection of our most impactful
            campaigns.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => {
            const image = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <Card
                key={item.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>Client: {item.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
