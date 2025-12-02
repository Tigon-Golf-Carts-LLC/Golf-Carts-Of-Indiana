import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Wrench, Palette, Settings, Phone, ArrowRight } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Golf Cart Services - NJ Golf Carts";
  }, []);

  const services = [
    {
      icon: ShoppingCart,
      title: "New & Used Golf Cart Sales",
      description: "Browse our extensive inventory of new and pre-owned golf carts from top manufacturers.",
      features: [
        "Wide selection of brands and models",
        "Competitive pricing",
        "Expert guidance from knowledgeable staff",
        "Trade-in evaluations",
        "Financing options available",
      ],
    },
    {
      icon: Wrench,
      title: "Service & Repair",
      description: "Professional maintenance and repair services by certified technicians.",
      features: [
        "Factory-trained technicians",
        "Genuine OEM parts",
        "Comprehensive diagnostic services",
        "Routine maintenance programs",
        "Emergency repair services",
      ],
    },
    {
      icon: Palette,
      title: "Custom Builds & Modifications",
      description: "Transform your golf cart with custom modifications and accessories.",
      features: [
        "Lift kits and suspension upgrades",
        "Custom paint and graphics",
        "Premium seating and interiors",
        "Sound systems and electronics",
        "Performance upgrades",
      ],
    },
    {
      icon: Settings,
      title: "Parts & Accessories",
      description: "Complete selection of genuine parts and premium accessories.",
      features: [
        "Genuine OEM replacement parts",
        "Premium aftermarket accessories",
        "Batteries and charging systems",
        "Tires and wheels",
        "Weather protection accessories",
      ],
    },
  ];

  return (
    <div>
      <SEOHead
        title="Golf Cart Services - Sales, Repair & Accessories | NJ Golf Carts"
        description="Professional golf cart services in New Jersey including sales, repairs, accessories, and custom modifications. Expert technicians and quality parts."
        keywords="golf cart service, golf cart repair, golf cart accessories, New Jersey, professional service"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete golf cart solutions from sales to service, customization, and parts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-secondary mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-neutral-light rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Need Service or Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our expert team is ready to help you with all your golf cart needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-844-844-6638
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Schedule Service
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
