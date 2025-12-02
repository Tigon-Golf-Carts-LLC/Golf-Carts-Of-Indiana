import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import ContactSection from "@/components/contact-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Car, Wrench, DollarSign, Users } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - NJ Golf Carts";
  }, []);

  const contactReasons = [
    {
      icon: Car,
      title: "Sales Inquiries",
      description: "Questions about our new or used golf cart inventory",
    },
    {
      icon: Wrench,
      title: "Service & Repair",
      description: "Schedule maintenance or repair services",
    },
    {
      icon: DollarSign,
      title: "Financing",
      description: "Learn about our financing options and get pre-approved",
    },
    {
      icon: Users,
      title: "General Questions",
      description: "Any other questions about our services",
    },
  ];

  return (
    <div>
      <SEOHead
        title="Contact NJ Golf Carts - Sales, Service & Support | 1-844-844-6638"
        description="Contact NJ Golf Carts for sales, service, and support. Call 1-844-844-6638 or visit our Newark location. Mon-Fri 9AM-5PM, Sat 9AM-5PM."
        keywords="contact NJ Golf Carts, phone number, location, hours, Newark New Jersey"
      />
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Contact NJ Golf Carts
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for all your golf cart needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{reason.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <ContactSection />

          <div className="mt-16 bg-neutral-light rounded-lg p-8">
            <h2 className="text-3xl font-bold text-neutral-dark text-center mb-8">
              Visit Our Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              
              {/* Ocean View Location */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Ocean View</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <div className="text-gray-600">101 NJ-50, Ocean View, NJ 08230</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <a href="tel:609-840-0404" className="text-primary font-semibold">609-840-0404</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.google.com/maps?cid=6446924254429489274" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">View on Google Maps</a>
                    <a href="https://www.facebook.com/TigonGolfCartsOceanView/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook Page</a>
                    <a href="https://tigongolfcarts.com/ocean-view/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                  </div>
                </div>
              </Card>

              {/* Bayville Location */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Bayville</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <div className="text-gray-600">155 Atlantic City Blvd, Bayville, NJ 08721</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <a href="tel:732-908-7166" className="text-primary font-semibold">(732) 908-7166</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.google.com/maps?cid=16812778070531162551" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">View on Google Maps</a>
                    <a href="https://www.facebook.com/TigonGolfCartsBayville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook Page</a>
                    <a href="https://tigongolfcarts.com/bayville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                  </div>
                </div>
              </Card>

              {/* Waretown Location */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Waretown</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <div className="text-gray-600">526 US-9, Waretown, NJ 08758</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <a href="tel:732-998-8146" className="text-primary font-semibold">(732) 998-8146</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.google.com/maps?cid=11595558320608622005" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">View on Google Maps</a>
                    <a href="https://www.facebook.com/TigonGolfCartsWaretown/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook Page</a>
                    <a href="https://tigongolfcarts.com/waretown/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                  </div>
                </div>
              </Card>

              {/* Pleasantville Location */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Pleasantville</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <div className="text-gray-600">7000 Black Horse Pike, Pleasantville, NJ 08232</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <a href="tel:640-444-3094" className="text-primary font-semibold">640-444-3094</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.google.com/maps?cid=7635149767591436869" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">View on Google Maps</a>
                    <a href="https://www.facebook.com/TigonGolfCartPleasantville" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook Page</a>
                    <a href="https://tigongolfcarts.com/pleasantville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                  </div>
                </div>
              </Card>

              {/* New Jersey Main Location */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">New Jersey</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <div className="text-gray-600">New Jersey</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <div>
                      <a href="tel:1-844-844-6638" className="text-primary font-semibold">1-844-844-6638</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-accent mr-3" />
                    <div className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM, Sat: 9AM-5PM, Sun: Closed</div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <a href="https://www.google.com/maps?cid=15178469885958324473" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">View on Google Maps</a>
                    <a href="https://www.youtube.com/@TIGONGolfCartsNewJersey" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">YouTube Channel</a>
                    <a href="https://tigongolfcarts.com/new-jersey/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                We have multiple locations throughout New Jersey to serve you better. Each location offers full sales, service, and parts support.
              </p>
              <p className="text-gray-600">
                <strong>Main Contact:</strong> <a href="tel:1-844-844-6638" className="text-primary font-semibold">1-844-844-6638</a> | 
                <strong> Email:</strong> <a href="mailto:info@njgolfcarts.com" className="text-primary">info@njgolfcarts.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
