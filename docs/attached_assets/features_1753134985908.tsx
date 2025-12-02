import { Award, Handshake, CreditCard } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Expert service and repairs by factory-trained technicians with years of experience.",
    },
    {
      icon: Handshake,
      title: "Best Warranty",
      description: "Comprehensive warranty coverage on all new and certified pre-owned golf carts.",
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description: "0% APR financing available with approved credit. Multiple payment options.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Why Choose NJ Golf Carts?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving New Jersey with quality golf carts, expert service, and unbeatable customer support for over 15 years.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
