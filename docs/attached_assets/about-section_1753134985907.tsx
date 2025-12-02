import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Carts in Stock" },
    { number: "5⭐", label: "Customer Rating" },
  ];

  return (
    <section id="about" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
              alt="NJ Golf Carts Showroom"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              About NJ Golf Carts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, NJ Golf Carts has been New Jersey's trusted source for quality golf carts,
              exceptional service, and unbeatable customer support. We're a family-owned business that
              takes pride in helping our customers find the perfect golf cart for their needs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Visit Our Showrooms
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
