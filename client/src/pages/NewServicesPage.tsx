import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Battery, Paintbrush, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function NewServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Complete maintenance and repair services for all golf cart brands",
      features: ["Brake service", "Suspension repair", "Engine diagnostics", "Electrical troubleshooting"],
      price: "Starting at $155/hour"
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Battery testing, replacement, and maintenance services",
      features: ["Battery testing", "New battery installation", "Battery maintenance", "Charging system repair"],
      price: "Starting at $155/hour"
    },
    {
      icon: Paintbrush,
      title: "Custom Modifications",
      description: "Personalize your golf cart with custom modifications and accessories",
      features: ["Custom paint jobs", "Lift kits", "Custom seating", "Lighting upgrades"],
      price: "Quote on request"
    },
    {
      icon: Shield,
      title: "Warranty Service",
      description: "Authorized warranty service for all major brands",
      features: ["Factory warranty work", "Extended warranty options", "Certified technicians", "OEM parts"],
      price: "Covered by warranty"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Golf Cart Services & Repair | Montgomery County Golf Carts"
        description="Professional golf cart services including maintenance, repair, battery service, and custom modifications. Serving Montgomery County, IN with certified technicians."
        keywords="golf cart service, golf cart repair, battery replacement, maintenance, Montgomery County"
        canonicalUrl="https://montcogolfcarts.com/services"
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-theme-primary to-blue-700 text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("services")}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Golf Cart Services
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Keep your golf cart running smoothly with our comprehensive service offerings. 
                From routine maintenance to major repairs, our certified technicians have you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                    Schedule Service
                  </Button>
                </Link>
                <a href="tel:1-844-844-6638">
                  <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                    Call for Emergency Service
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600">Comprehensive golf cart services for all makes and models</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <service.icon className="w-8 h-8 text-theme-orange" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="outline">{service.price}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-theme-orange" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-theme-orange hover:bg-orange-600 text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Service Center?</h2>
              <p className="text-lg text-gray-600">Experience the difference of professional golf cart service</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-theme-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Factory-trained technicians with years of experience in golf cart repair and maintenance.</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-theme-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">Most repairs completed within 24-48 hours. Emergency service available for urgent needs.</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-theme-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">All work backed by our comprehensive warranty. We stand behind our repairs and service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Service?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule your golf cart service or request a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Schedule Service Online
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Service Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Direct line to our service team</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Service Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 8AM-5PM</p>
                    <p>Saturday: 9AM-3PM</p>
                    <p>Sunday: Emergency Only</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Mobile Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    On-site service available throughout Ocean County for major repairs and maintenance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}