import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Megaphone,
  PenTool,
  Mail,
  MousePointerClick,
  BarChart,
} from "lucide-react";

const services = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "SEO",
    description: "Boost your visibility on search engines and attract high-quality organic traffic with our proven optimization strategies.",
  },
  {
    icon: <Megaphone className="h-10 w-10 text-primary" />,
    title: "Social Media Marketing",
    description: "Engage your audience, build brand loyalty, and drive conversions through targeted social media campaigns.",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Content Creation",
    description: "From blog posts to videos, we create compelling content that resonates with your audience and establishes you as an industry leader.",
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that deliver value directly to their inboxes.",
  },
  {
    icon: <MousePointerClick className="h-10 w-10 text-primary" />,
    title: "PPC Advertising",
    description: "Get instant, targeted traffic and maximize your ROI with our expertly managed pay-per-click advertising campaigns.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and clear, actionable reports on your marketing performance.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Our Digital Marketing Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            A complete suite of services to help your business grow and succeed
            in the digital world.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="p-0 mb-4">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
