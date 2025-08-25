
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Settings, Battery, Truck, Shield, Star } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";


export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance and repair services by certified technicians",
      features: [
        "Regular maintenance schedules",
        "Diagnostic services",
        "Engine and motor repair",
        "Brake system service",
        "Tire replacement"
      ]
    },
    {
      icon: Battery,
      title: "Battery Service",
      description: "Expert battery maintenance, testing, and replacement services",
      features: [
        "Battery testing and analysis",
        "Battery replacement",
        "Charging system repair",
        "Battery maintenance tips",
        "Warranty service"
      ]
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Personalize your golf cart with custom accessories and modifications",
      features: [
        "Custom paint jobs",
        "Lift kits installation",
        "LED lighting packages",
        "Custom seating",
        "Sound system installation"
      ]
    },
    {
      icon: Truck,
      title: "Delivery & Pickup",
      description: "Convenient delivery and pickup services throughout our service area",
      features: [
        "Free local delivery",
        "Statewide delivery available",
        "Service pickup and return",
        "Emergency roadside assistance",
        "Scheduled maintenance pickup"
      ]
    },
    {
      icon: Shield,
      title: "Warranty Service",
      description: "Complete warranty coverage and factory-authorized repairs",
      features: [
        "Factory warranty service",
        "Extended warranty options",
        "Genuine parts guarantee",
        "Certified technicians",
        "Quick turnaround times"
      ]
    },
    {
      icon: Star,
      title: "Premium Care",
      description: "VIP service packages for complete peace of mind",
      features: [
        "Priority scheduling",
        "Annual service packages",
        "Preventive maintenance",
        "24/7 support hotline",
        "Loaner cart program"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title="Monroe County Golf Cart Services - Expert Maintenance & Repair in PA"
        description="Professional golf cart maintenance, repair, customization, and warranty services in Monroe County, Pennsylvania. Certified technicians, quality parts, and comprehensive care."
        keywords="golf cart service Monroe County PA, golf cart repair Pennsylvania, golf cart maintenance, battery service, customization"
        canonicalUrl="https://monroegolfcarts.com/services"
      />
      <AllSchemas 
        pageType="services" 
        pageData={{
          title: "Monroe County Golf Cart Services",
          description: "Professional golf cart maintenance, repair, customization, and warranty services in Monroe County, Pennsylvania. Certified technicians, quality parts, and comprehensive care.",
          url: "https://monroegolfcarts.com/services",
          breadcrumbs: [
            { name: "Home", url: "https://monroegolfcarts.com/" },
            { name: "Services", url: "https://monroegolfcarts.com/services" }
          ],
          serviceName: "Golf Cart Services",
          serviceDescription: "Comprehensive golf cart maintenance, repair, customization, and warranty services in Monroe County, Pennsylvania",
          serviceOffers: [
            { price: "Contact for pricing", description: "Maintenance & Repair Services" },
            { price: "Contact for pricing", description: "Battery Service & Replacement" },
            { price: "Contact for pricing", description: "Custom Accessories & Modifications" },
            { price: "Contact for pricing", description: "Delivery & Pickup Service" },
            { price: "Contact for pricing", description: "Warranty Service & Support" }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("services")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
              Golf Cart Services in Monroe County
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Professional maintenance, repair, and customization services for all golf cart brands throughout Monroe County, Pennsylvania.
            </p>
          <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
            Schedule Service
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">
              Complete golf cart services from certified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-theme-orange w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-theme-orange rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Service */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Our Service?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference of professional golf cart service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Technicians</h3>
              <p className="text-gray-600">
                Our team is factory-trained and certified to work on all major golf cart brands
              </p>
            </div>

            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and quality guarantees
              </p>
            </div>

            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Convenient Service</h3>
              <p className="text-gray-600">
                Mobile service options and pickup/delivery available throughout our service area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Service Areas</h2>
          <p className="text-xl text-gray-600 mb-8">
            We proudly serve customers throughout Luzerne County and surrounding areas
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
            {[
              "Allentown", "Alburtis", "Breinigsville", "Catasauqua",
              "Center Valley", "Coopersburg", "Coplay", "East Texas",
              "Emmaus", "Fogelsville", "Germansville", "Laurys Station",
              "Limeport", "Macungie", "Neffs", "New Tripoli"
            ].map((town, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                {town}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Schedule Your Service Today
          </h2>
          <p className="text-xl mb-8">
            Keep your golf cart running smoothly with professional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-844-844-6638">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Call 1-844-844-6638
              </Button>
            </a>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-theme-primary">
              Schedule Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
