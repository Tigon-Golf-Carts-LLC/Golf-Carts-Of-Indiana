import React from 'react';
import SEOHead from "@/components/SEOHead";
import LocationSchema from "@/components/LocationSchema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Battery, Wrench, Calendar, Star, Check, Users, Car, Truck } from "lucide-react";

interface CommunityRentalPageProps {
  communityName: string;
  parentMunicipality?: string;
  slug: string;
}

function CommunityRentalPage({ 
  communityName, 
  parentMunicipality,
  slug 
}: CommunityRentalPageProps) {
  const locationText = parentMunicipality ? `${communityName} (${parentMunicipality})` : communityName;
  const pageTitle = `Golf Cart Rentals in ${communityName}, Montgomery County | Premium Rental Services`;
  const pageDescription = `Rent premium golf carts in ${communityName}, Montgomery County, IN. Daily, weekly, monthly rentals available. 4-seater, 6-seater, and utility golf carts. Professional delivery in ${communityName}.`;
  const keywords = `golf cart rental ${communityName}, ${communityName} golf cart rental, Montgomery County golf cart rental, Indiana golf cart rental, street legal golf cart rental`;

  const rentalFeatures = [
    "Street legal with seat belts and safety features",
    "Flexible pickup and return scheduling", 
    "Fully charged and ready to drive",
    "Comprehensive insurance coverage included",
    "24/7 customer support and emergency assistance",
    "No hidden fees or surprise charges",
    `Professional delivery within ${communityName} area`,
    "Professional maintenance and cleaning"
  ];

  const fourSeaterPlans = [
    {
      title: "Daily Rental",
      description: "Perfect for a day of exploration",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Professional delivery within community limits",
      badge: "POPULAR",
      savings: null
    },
    {
      title: "3 Day Rental", 
      description: "Great for weekend getaways",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228/daily term",
      delivery: "Professional delivery within community limits",
      badge: "BEST VALUE",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "Ideal for extended stays",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term", 
      delivery: "Professional delivery within community limits",
      badge: "MOST POPULAR",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "Best for long-term needs",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Professional delivery within community limits",
      badge: "PREMIUM",
      savings: "SAVE 61.6%"
    }
  ];

  const sixSeaterPlans = [
    {
      title: "Daily Rental",
      description: "Perfect for larger groups",
      price: 295,
      duration: "1 day", 
      renewal: "Renews at $295/daily term",
      delivery: "Professional delivery within community limits",
      badge: "POPULAR",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "Great for group adventures",
      price: 735,
      duration: "3 days",
      renewal: "Renews at $245/daily term",
      delivery: "Professional delivery within community limits",
      badge: "BEST VALUE",
      savings: "SAVE 16.9%"
    },
    {
      title: "Weekly Rental",
      description: "Ideal for group vacations",
      price: 1400,
      duration: "7 days",
      renewal: "Renews at $200/daily term",
      delivery: "Professional delivery within community limits",
      badge: "MOST POPULAR", 
      savings: "SAVE 32.2%"
    },
    {
      title: "Monthly Rental",
      description: "Best for extended group use",
      price: 3500,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Professional delivery within community limits",
      badge: "BUSINESS",
      savings: "SAVE 61.6%"
    }
  ];

  const RentalCard = ({ plan, index }: { plan: any; index: number }) => (
    <Card key={index} className={`relative ${plan.savings ? 'border-theme-orange border-2' : 'border-gray-200'} hover:shadow-lg transition-shadow`}>
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-theme-orange text-white px-3 py-1">
            {plan.badge}
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
        <p className="text-gray-600">{plan.description}</p>
        <div className="text-3xl font-bold text-theme-primary">
          ${plan.price}
          <span className="text-lg font-normal text-gray-600">/{plan.duration}</span>
        </div>
        {plan.savings && (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            {plan.savings}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-gray-600">
          <p>{plan.renewal}</p>
          <p>{plan.delivery}</p>
        </div>
        <a href="tel:1-844-844-6638">
          <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Call 1-844-844-6638
          </Button>
        </a>
      </CardContent>
    </Card>
  );

  const RentalSection = ({ title, icon, plans, subtitle }: { title: string; icon: any; plans: any[]; subtitle: string }) => (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon}
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <RentalCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={`https://montcogolfcarts.com/${slug}`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />
      <LocationSchema 
        municipalityName={communityName}
        municipalityType="Township"
        pageType="rental"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/rentals" className="text-gray-500 hover:text-gray-700">Rentals</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{communityName} Rentals</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Montgomery County Golf Carts</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Golf Cart Rentals in {locationText}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Premium golf cart rental services delivered directly to {communityName}. 
              Choose from our flexible daily, weekly, and monthly rental options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="h-5 w-5" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-white">
                <Link href="/inventory" className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  View Golf Carts
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our {communityName} Golf Cart Rentals?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide the most reliable and convenient golf cart rental service in {communityName} 
                and throughout Montgomery County, Indiana.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {rentalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-theme-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Seater Plans */}
        <RentalSection 
          title="4 Seater Golf Cart Rental Plans"
          icon={<Users className="w-8 h-8 text-blue-600" />}
          plans={fourSeaterPlans}
          subtitle="Perfect for couples and small families"
        />

        {/* 6 Seater Plans */}
        <RentalSection 
          title="6 Seater Golf Cart Rental Plans"
          icon={<Car className="w-8 h-8 text-green-600" />}
          plans={sixSeaterPlans}
          subtitle="Ideal for larger groups and families"
        />

        {/* Contact Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Rent in {communityName}?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to reserve your golf cart rental. Our team is ready to help you 
              choose the perfect rental plan for your {communityName} adventure.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Now</h3>
                <p className="text-gray-600 mb-4">Speak with our rental specialists</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <span className="text-2xl font-bold text-theme-orange">1-844-844-6638</span>
                  <a href="tel:1-844-844-6638">
                    <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">Get rental information and quotes</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                  <span className="text-lg font-semibold text-gray-700">info@montcogolfcarts.com</span>
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Contact Form
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CommunityRentalPage;