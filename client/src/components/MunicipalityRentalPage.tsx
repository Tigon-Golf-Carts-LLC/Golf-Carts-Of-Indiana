import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocationSchema from "@/components/LocationSchema";
import { Check, Phone, Users, Car, MapPin, Clock, Shield } from "lucide-react";
import { Link } from "wouter";

interface MunicipalityRentalPageProps {
  municipalityName: string;
  municipalityType: 'City' | 'Borough' | 'Township';
  slug: string;
}

export default function MunicipalityRentalPage({ 
  municipalityName, 
  municipalityType, 
  slug 
}: MunicipalityRentalPageProps) {
  const fullLocationName = `${municipalityName} ${municipalityType}`;
  const pageTitle = `Golf Cart Rentals in ${fullLocationName}, PA | Montgomery County Golf Carts`;
  const pageDescription = `Rent premium golf carts in ${fullLocationName}, Montgomery County, PA. Daily, weekly, monthly rentals available. 4-seater, 6-seater, and utility golf carts. Professional delivery within ${fullLocationName}.`;
  const keywords = `golf cart rental ${municipalityName}, ${fullLocationName} golf cart rental, Montgomery County golf cart rental, Pennsylvania golf cart rental, street legal golf cart rental`;

  const rentalFeatures = [
    "Street legal with seat belts and safety features",
    "Flexible pickup and return scheduling",
    "Fully charged and ready to drive",
    "Fully charged and ready to drive",
    "Comprehensive insurance coverage included",
    "24/7 customer support and emergency assistance",
    "No hidden fees or surprise charges",
    `Professional delivery within ${fullLocationName} limits`,
    "Professional maintenance and cleaning"
  ];

  const fourSeaterPlans = [
    {
      title: "Daily Rental",
      description: "Perfect for a day of exploration",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Professional delivery within service area",
      badge: "POPULAR",
      savings: null
    },
    {
      title: "3 Day Rental", 
      description: "Great for weekend getaways",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228/daily term",
      delivery: "Professional delivery within service area",
      badge: "BEST VALUE",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "Ideal for extended stays",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term", 
      delivery: "Professional delivery within service area",
      badge: "MOST POPULAR",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "Best for long-term needs",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Professional delivery within service area",
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
      delivery: "Professional delivery within service area",
      badge: "POPULAR",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "Great for group adventures",
      price: 735,
      duration: "3 days",
      renewal: "Renews at $245/daily term",
      delivery: "Professional delivery within service area",
      badge: "BEST VALUE",
      savings: "SAVE 16.9%"
    },
    {
      title: "Weekly Rental",
      description: "Ideal for group vacations",
      price: 1400,
      duration: "7 days",
      renewal: "Renews at $200/daily term",
      delivery: "Professional delivery within service area",
      badge: "MOST POPULAR",
      savings: "SAVE 32.2%"
    },
    {
      title: "Monthly Rental",
      description: "Best for extended group use",
      price: 3500,
      duration: "30 days",
      renewal: "Renews at $117/daily term",
      delivery: "Professional delivery within service area",
      badge: "PREMIUM",
      savings: "SAVE 60.4%"
    }
  ];

  const utilityPlans = [
    {
      title: "Daily Rental",
      description: "Perfect for work projects",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Professional delivery within service area",
      badge: "PRACTICAL",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "Great for short projects",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228/daily term",
      delivery: "Professional delivery within service area",
      badge: "EFFICIENT",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "Ideal for work weeks",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term",
      delivery: "Professional delivery within service area",
      badge: "PROFESSIONAL",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "Best for ongoing operations",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Professional delivery within service area",
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

  const businessPhone = "1-844-844-6638";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalUrl={`https://monroegolfcarts.com/${slug}`}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />
      <LocationSchema 
        municipalityName={municipalityName}
        municipalityType={municipalityType as 'Borough' | 'Township'}
        pageType="rental"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-theme-primary to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Cart Rentals in {fullLocationName}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium golf cart rentals delivered to your door in {fullLocationName}, Monroe County. 
              Street legal, fully insured, and ready for adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${businessPhone}`}>
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: {businessPhone}
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100 shadow-lg">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our {fullLocationName} Golf Cart Rentals?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide the most reliable and convenient golf cart rental service in {fullLocationName} 
                and throughout Monroe County, Pennsylvania.
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

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="border-theme-orange border-2">
                <CardHeader>
                  <Users className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Local Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Proudly serving {fullLocationName} and all of Monroe County with personalized, 
                    local customer service you can trust.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-theme-orange border-2">
                <CardHeader>
                  <Shield className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Fully Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    All rentals include comprehensive insurance coverage for your peace of mind 
                    while exploring {fullLocationName}.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-theme-orange border-2">
                <CardHeader>
                  <Car className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Street Legal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our golf carts are street legal in {fullLocationName} with seat belts, 
                    mirrors, and all required safety equipment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4-Seater Rentals */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                4-Seater Golf Cart Rentals in {fullLocationName}
              </h2>
              <p className="text-lg text-gray-600">
                Perfect for couples, small families, or intimate group adventures around {fullLocationName}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fourSeaterPlans.map((plan, index) => (
                <RentalCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* 6-Seater Rentals */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                6-Seater Golf Cart Rentals in {fullLocationName}
              </h2>
              <p className="text-lg text-gray-600">
                Ideal for larger families and groups exploring {fullLocationName} and Berks County together
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sixSeaterPlans.map((plan, index) => (
                <RentalCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Utility Rentals */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Utility Golf Cart Rentals in {fullLocationName}
              </h2>
              <p className="text-lg text-gray-600">
                Heavy-duty utility carts perfect for work projects, landscaping, and business use in {fullLocationName}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {utilityPlans.map((plan, index) => (
                <RentalCard key={index} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Location Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving {fullLocationName} with Pride
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                As your local Berks County golf cart rental specialists, we're proud to serve the residents 
                and visitors of {fullLocationName} with reliable, professional service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why {fullLocationName} Chooses Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-theme-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Knowledge</h4>
                      <p className="text-gray-600">
                        We know {fullLocationName} inside and out, ensuring the best routes and destinations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-theme-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                      <p className="text-gray-600">
                        Convenient pickup and drop-off times that work with your {fullLocationName} schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-theme-orange mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600">
                        Emergency support and assistance available anytime during your {fullLocationName} rental.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  Ready to Rent in {fullLocationName}?
                </h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">Call us now for instant quotes and availability</p>
                    <a href={`tel:${businessPhone}`}>
                      <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full">
                        <Phone className="w-5 h-5 mr-2" />
                        Call {businessPhone}
                      </Button>
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Or get a free quote online</p>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="w-full">
                        Request Free Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Start Your {fullLocationName} Golf Cart Adventure Today
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied customers who trust Berks County Golf Carts for their rental needs in {fullLocationName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${businessPhone}`}>
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call {businessPhone}
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}