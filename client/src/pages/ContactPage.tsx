import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import TigonLeadForm from "@/components/TigonLeadForm";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

export default function ContactPage() {
  const [, setLocation] = useLocation();
  
  const seoData = generateSEOMetadata({
    pageTitle: "Contact Golf Carts Of Indiana",
    baseDescription: "Get in touch with Golf Carts Of Indiana for expert golf cart sales, service, and support. Located at 310 S Dixie Way, South Bend, IN 46637. Professional team ready to help with DENAGO and EVOLUTION electric vehicles.",
    pageType: "contact",
    canonicalPath: "/contact",
    keywords: ["Indiana showroom", "Indiana location", "golf cart consultation", "Indiana service center"],
    heroBackgroundSeed: "contact"
  });

  const contactInfo = [
    {
      icon: MapPin,
      label: "Golf Carts Of Indiana",
      value: "310 S Dixie Way, South Bend, IN 46637",
      phone: "1-844-844-6638",
    },
    {
      icon: Phone,
      label: "Local Phone",
      value: "1-844-844-6638",
    },
    {
      icon: Phone,
      label: "Toll-Free",
      value: "1-844-844-6638",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@golfcartsofindiana.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "golfcartsofindiana.com",
      link: "https://golfcartsofindiana.com",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "CLOSED" },
  ];

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("contact")}>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Contact Golf Carts Of Indiana
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with our team for sales, service, and support throughout Indiana. 
              Visit our showroom or call us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <a href="mailto:info@golfcartsofindiana.com">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <Icon className="w-5 h-5 text-theme-orange mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-theme-orange hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-900">{info.value}</div>
                        )}
                        {info.phone && (
                          <div className="text-sm text-theme-primary font-medium mt-1">
                            <a href={`tel:${info.phone}`} className="hover:text-theme-orange transition-colors">
                              {info.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <TigonLeadForm onSuccess={() => setLocation("/thank-you")} />
          </CardContent>
        </Card>
      </div>
        </div>
      </div>
    </>
  );
}
