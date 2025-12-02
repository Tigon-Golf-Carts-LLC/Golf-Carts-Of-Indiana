import { ShoppingCart, Wrench, Palette, Settings } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Sales",
      description: "New and used golf cart sales with expert guidance and competitive pricing.",
    },
    {
      icon: Wrench,
      title: "Service & Repair",
      description: "Professional maintenance and repair services by certified technicians.",
    },
    {
      icon: Palette,
      title: "Customization",
      description: "Custom builds and modifications to make your golf cart uniquely yours.",
    },
    {
      icon: Settings,
      title: "Parts & Accessories",
      description: "Genuine OEM parts and premium accessories for all golf cart brands.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete golf cart services from sales to maintenance and customization
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
