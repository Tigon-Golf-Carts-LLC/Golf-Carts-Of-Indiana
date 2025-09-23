import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Clock, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

export default function ThankYouPage() {
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "Thank You!",
    baseDescription: "Thank you for contacting Monroe County Golf Carts. We've received your message and our team will respond to your inquiry within 24 hours. Expert golf cart sales, service, and rentals.",
    pageType: "general",
    canonicalPath: "/thank-you",
    keywords: ["thank you", "contact confirmation", "Monroe County Golf Carts", "customer service"],
    heroBackgroundSeed: "thankyou"
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-green-600 to-green-800 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("thankyou")}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Thank You!
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We've received your message and appreciate your interest in Monroe County Golf Carts.
            Our team will respond to your inquiry soon.
          </p>
        </div>
      </section>
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Response Time & Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Response Time</h2>
                <p className="text-gray-600 mb-6">
                  Please allow up to <strong>24 hours</strong> for a response from our team. 
                  We'll contact you via email or phone based on your preference.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Typical response time: 2-6 hours during business hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-theme-primary text-white shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Need to Talk Now?</h2>
                <p className="text-gray-100 mb-6">
                  If you would like to talk to someone right now, 
                  please give us a call during business hours.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:1-844-844-6638" 
                    className="block text-2xl font-bold text-theme-orange hover:text-orange-300 transition-colors"
                  >
                    1-844-844-6638
                  </a>
                  <div className="text-sm text-gray-300">
                    <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What Happens Next */}
          <Card className="bg-white shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                What Happens Next?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Review Your Message</h3>
                  <p className="text-gray-600 text-sm">
                    Our team reviews your inquiry and determines the best specialist to help you.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Personal Response</h3>
                  <p className="text-gray-600 text-sm">
                    We'll contact you directly with answers to your questions and next steps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Solution & Service</h3>
                  <p className="text-gray-600 text-sm">
                    We'll provide personalized recommendations and schedule any needed services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Area Information */}
          <Card className="bg-blue-50 border-blue-200 mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Serving All of Monroe County
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional golf cart sales, rentals, and service delivered to all 20 Monroe County municipalities - 
                from Stroudsburg Borough to the scenic townships throughout the Pocono Mountains region.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Hatfield</h3>
                  <p className="text-gray-600 text-sm mb-1">2333 Bethlehem Pike</p>
                  <p className="text-gray-600 text-sm mb-1">Hatfield, PA 19440</p>
                  <p className="text-theme-orange font-semibold">(215) 595-8736</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Poconos</h3>
                  <p className="text-gray-600 text-sm mb-1">1712 Pennsylvania 940</p>
                  <p className="text-gray-600 text-sm mb-1">Pocono Pines, PA 18350</p>
                  <p className="text-theme-orange font-semibold">(570) 643-0152</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              While You Wait, Explore Our Services
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                  Browse Our Inventory
                </Button>
              </Link>
              <Link href="/rentals">
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white w-full sm:w-auto">
                  View Rental Options
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white w-full sm:w-auto">
                  Service & Maintenance
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <Link href="/">
                <Button variant="link" className="text-theme-primary hover:text-blue-700">
                  ← Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}