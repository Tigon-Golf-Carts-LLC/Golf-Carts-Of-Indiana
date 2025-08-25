import { NEW_MONROE_COUNTY_MUNICIPALITIES } from "@/data/newMonroeCountyMunicipalities";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Calendar, Car, DollarSign, Star, CheckCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

interface NewLackawannaCountyMunicipalityRentalPageProps {
  municipalitySlug: string;
}

export function NewLackawannaCountyMunicipalityRentalPage({ municipalitySlug }: NewLackawannaCountyMunicipalityRentalPageProps) {
  const municipality = NEW_MONROE_COUNTY_MUNICIPALITIES.find(m => m.slug === municipalitySlug);
  
  if (!municipality) {
    return <div>Municipality not found</div>;
  }

  const pageTitle = `Golf Cart Rentals in ${municipality.name} ${municipality.type} | Monroe County Golf Carts`;
  const metaDescription = `Rent electric golf carts in ${municipality.name}, Monroe County, PA. Daily, weekly & monthly rates. Street-legal carts with professional delivery service. Reserve today!`;

  // Google Maps embed URL for the specific municipality in Monroe County
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${municipality.name.replace(' ', '%20')}%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817600000`;

  // Why Choose Our Golf Cart Rentals Features
  const whyChooseFeatures = [
    "Street legal with seat belts",
    "Fully charged and ready to go", 
    "24/7 customer support",
    "Flexible pickup and return",
    "Insurance coverage included",
    "No hidden fees"
  ];

  // Calculate savings percentages and daily rates
  const calculateSavings = (daily: number, total: number, days: number) => {
    const regularTotal = daily * days;
    const savings = regularTotal - total;
    const percentage = ((savings / regularTotal) * 100).toFixed(1);
    return { savings, percentage, dailyRate: (total / days).toFixed(2) };
  };

  // Rental pricing structure
  const rentalPricing = [
    {
      title: "4 Seater Golf Cart Rental Plans",
      subtitle: "Choose the perfect rental duration for your needs",
      plans: [
        {
          name: "Daily Rental",
          description: "When you just need one day.",
          price: 245,
          duration: "1 day",
          renewsAt: "$245/daily term",
          recommended: true
        },
        {
          name: "3 Day Rental", 
          description: "When you need a few days", 
          price: 685,
          duration: "3 days",
          renewsAt: "$228.34/daily term",
          savings: calculateSavings(245, 685, 3),
          recommended: true
        },
        {
          name: "Weekly Rental",
          description: "When you need a week of fun.",
          price: 1050,
          duration: "7 days", 
          renewsAt: "$150/daily term",
          savings: calculateSavings(245, 1050, 7),
          recommended: true
        },
        {
          name: "Monthly Rental",
          description: "When you need a month of convenience.",
          price: 2800,
          duration: "30 days",
          renewsAt: "$93.33/daily term",
          savings: calculateSavings(245, 2800, 30),
          recommended: false
        }
      ]
    },
    {
      title: "6 Seater Golf Cart Rental Plans", 
      subtitle: "Perfect for larger groups and families",
      plans: [
        {
          name: "Daily Rental",
          description: "When you just need one day.",
          price: 295,
          duration: "1 day",
          renewsAt: "$295/daily term",
          recommended: false
        },
        {
          name: "3 Day Rental",
          description: "When you need a few days",
          price: 825,
          duration: "3 days", 
          renewsAt: "$275/daily term",
          savings: calculateSavings(295, 825, 3),
          recommended: true
        },
        {
          name: "Weekly Rental",
          description: "When you need a week of fun.",
          price: 1260,
          duration: "7 days",
          renewsAt: "$180/daily term", 
          savings: calculateSavings(295, 1260, 7),
          recommended: true
        },
        {
          name: "Monthly Rental",
          description: "When you need a month of convenience.",
          price: 3360,
          duration: "30 days",
          renewsAt: "$112/daily term",
          savings: calculateSavings(295, 3360, 30),
          recommended: false
        }
      ]
    },
    {
      title: "Utility Golf Cart Rental Plans",
      subtitle: "Perfect for work and heavy-duty applications", 
      plans: [
        {
          name: "Daily Rental",
          description: "When you just need one day.",
          price: 275,
          duration: "1 day",
          renewsAt: "$275/daily term",
          recommended: false
        },
        {
          name: "3 Day Rental",
          description: "When you need a few days",
          price: 770,
          duration: "3 days",
          renewsAt: "$256.67/daily term", 
          savings: calculateSavings(275, 770, 3),
          recommended: true
        },
        {
          name: "Weekly Rental", 
          description: "When you need a week of productivity.",
          price: 1155,
          duration: "7 days",
          renewsAt: "$165/daily term",
          savings: calculateSavings(275, 1155, 7),
          recommended: true
        },
        {
          name: "Monthly Rental",
          description: "When you need a month of utility.",
          price: 3080,
          duration: "30 days", 
          renewsAt: "$102.67/daily term",
          savings: calculateSavings(275, 3080, 30),
          recommended: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={pageTitle}
        description={metaDescription}
        keywords={`${municipality.name} golf cart rentals, ${municipality.name} ${municipality.type} rentals, Monroe County golf cart rental, electric golf cart rental ${municipality.name}`}
        canonicalUrl={`https://monroegolfcarts.com/rentals/${municipality.slug}`}
        ogImage="https://monroegolfcarts.com/assets/lackawanna-county-golf-carts-logo.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-theme-primary to-blue-800 text-white py-16 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle(`rental-${municipality.slug}`)}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-theme-orange text-white">
              Golf Cart Rentals
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Cart Rentals in {municipality.name}
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Rent premium electric golf carts in {municipality.name} {municipality.type}, Monroe County. 
              Daily, weekly, and monthly rental options available with professional delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#pricing">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  View Rental Pricing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
                  Reserve Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Golf Cart Rentals Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Golf Cart Rentals?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional golf cart rental service for {municipality.name} {municipality.type} with the highest quality vehicles and customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-theme-orange mr-4 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Golf Cart Rental Pricing for {municipality.name}
            </h2>
            <p className="text-xl text-gray-600">
              Flexible rental options to meet your needs in {municipality.name} {municipality.type}, Monroe County.
            </p>
          </div>

          {rentalPricing.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-lg text-gray-600">{category.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.plans.map((plan, planIndex) => (
                  <Card key={planIndex} className={`border-2 hover:shadow-lg transition-shadow bg-white ${plan.recommended ? 'border-theme-orange' : 'border-gray-200'}`}>
                    <CardHeader className="text-center">
                      {plan.recommended && (
                        <Badge className="mb-2 bg-theme-orange text-white w-fit mx-auto">
                          RECOMMENDED
                        </Badge>
                      )}
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription className="text-sm text-gray-600">
                        {plan.description}
                      </CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600">/{plan.duration}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {plan.renewsAt}
                      </div>
                      {plan.savings && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-green-700 bg-green-100">
                            Save {plan.savings.percentage}% (${plan.savings.savings})
                          </Badge>
                          <div className="text-sm text-gray-600 mt-1">
                            Daily rate: ${plan.savings.dailyRate}
                          </div>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                        RESERVE TODAY
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Available for delivery to {municipality.name}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Golf Cart Rentals Delivered to {municipality.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide professional delivery and pickup service throughout {municipality.name} {municipality.type}, 
                Monroe County. Our rental golf carts are street-legal, fully charged, and ready for immediate use.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Car className="h-6 w-6 text-theme-orange mr-3" />
                  <span className="text-gray-700">Street Legal Vehicles</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-theme-orange mr-3" />
                  <span className="text-gray-700">Flexible Rental Terms</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-theme-orange mr-3" />
                  <span className="text-gray-700">Local Delivery Service</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-theme-orange mr-3" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Book Your Rental Today!
                </Button>
              </Link>
            </div>
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-theme-orange mr-2" />
                    {municipality.name} {municipality.type} Delivery Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full">
                    <iframe
                      src={mapsUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Free delivery within {municipality.name} {municipality.type} area
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Rent in {municipality.name}?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact Monroe County Golf Carts today to reserve your rental golf cart 
            for delivery to {municipality.name} {municipality.type}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call to Reserve</h3>
                <p className="text-theme-orange font-bold">1-844-844-6638</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Delivery to</h3>
                <p className="text-sm">{municipality.name} {municipality.type}<br />Monroe County, PA</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Available</h3>
                <p className="text-sm">Daily, Weekly<br />& Monthly Rentals</p>
              </CardContent>
            </Card>
          </div>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// Export individual municipality rental page components
export const ArchbaldRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="archbald" />;
export const CarbondaleRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="carbondale" />;
export const ChinchillaRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="chinchilla-township" />;
export const ClarksSummitRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="clarks-summit" />;
export const DaltonRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="dalton" />;
export const ElmhurstRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="elmhurst-township" />;
export const FleetvilleRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="fleetville-township" />;
export const JermynRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="jermyn" />;
export const JessupRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="jessup" />;
export const LaPlumeRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="la-plume-township" />;
export const MoosicRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="moosic" />;
export const MoscowRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="moscow" />;
export const OldForgeRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="old-forge" />;
export const OlyphantRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="olyphant" />;
export const PeckvilleRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="peckville-township" />;
export const RansomRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="ransom-township" />;
export const ScrantonRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="scranton" />;
export const TaylorRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="taylor" />;
export const WaverlyRentalsPage = () => <NewLackawannaCountyMunicipalityRentalPage municipalitySlug="waverly-township" />;