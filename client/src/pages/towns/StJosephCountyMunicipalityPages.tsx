import { NEW_MONROE_COUNTY_MUNICIPALITIES } from "@/data/newMonroeCountyMunicipalities";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Car, DollarSign, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { vehicles } from "@/data/vehicles";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

interface StJosephCountyMunicipalityPageProps {
  municipalitySlug: string;
}

export function StJosephCountyMunicipalityPage({ municipalitySlug }: StJosephCountyMunicipalityPageProps) {
  const municipality = NEW_MONROE_COUNTY_MUNICIPALITIES.find(m => m.slug === municipalitySlug);

  const featuredVehicles = vehicles.slice(0, 3);
  
  if (!municipality) {
    return <div>Municipality not found</div>;
  }

  const pageTitle = `${municipality.name} ${municipality.type} Golf Carts | Golf Carts Of Indiana`;
  const metaDescription = `Golf cart sales, rentals & service in ${municipality.name} ${municipality.type}, St. Joseph County, IN. EVOLUTION & DENAGO electric golf carts. Professional installation & maintenance.`;
  
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${municipality.coordinates.lng}!3d${municipality.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${municipality.name.replace(' ', '%20')}%2C%20St.%20Joseph%20County%2C%20IN!5e0!3m2!1sen!2sus!4v1763668400000`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={pageTitle}
        description={metaDescription}
        keywords={`${municipality.name} golf carts, ${municipality.name} ${municipality.type} IN, St. Joseph County golf cart sales, electric golf carts ${municipality.name}`}
        canonicalUrl={`https://golfcartsofindiana.com${municipality.url}`}
        ogImage="https://golfcartsofindiana.com/attached_assets/a-photograph-of-a-modern-golf-cart-deale_7zUe5Lu4Q5y7tCLWthTNUg_X4G12-7lSBK0VDHDYkTBEA_1753809417448.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-theme-primary to-blue-800 text-white py-16 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle(`municipality-${municipality.slug}`)}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-theme-orange text-white">
              Golf Carts Of Indiana
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Carts in {municipality.name} {municipality.type}
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Premium electric golf carts, professional service, and expert maintenance 
              delivered directly to {municipality.name} {municipality.type}, St. Joseph County, Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="btn-view-inventory">
                  View Our Inventory
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100" data-testid="btn-contact">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Golf Carts Of Indiana for {municipality.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver premium electric golf cart solutions throughout St. Joseph County, 
              including {municipality.name} {municipality.type}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Car className="h-12 w-12 text-theme-orange mx-auto mb-4" />
                <CardTitle className="text-xl">Premium Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  DENAGO and EVOLUTION electric golf carts with advanced features and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Navigation className="h-12 w-12 text-theme-orange mx-auto mb-4" />
                <CardTitle className="text-xl">Local Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Professional delivery and setup service throughout {municipality.name} {municipality.type}.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-theme-orange mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Comprehensive maintenance and repair services with certified technicians.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <DollarSign className="h-12 w-12 text-theme-orange mx-auto mb-4" />
                <CardTitle className="text-xl">Best Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Competitive pricing with flexible financing options for {municipality.name} residents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Golf Carts in {municipality.name}
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular electric golf cart models available for {municipality.name} {municipality.type} delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle: any) => (
              <Card key={vehicle.id} className="border-2 hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mb-2 bg-theme-orange text-white w-fit mx-auto">
                    {vehicle.brand}
                  </Badge>
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-theme-primary">
                    Starting at ${vehicle.price?.toLocaleString() || 'Call for Price'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    {vehicle.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href={`/vehicles/${vehicle.id}`}>
                      <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white" data-testid={`btn-vehicle-${vehicle.id}`}>
                        View Details
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full" data-testid={`btn-contact-${vehicle.id}`}>
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="btn-view-all">
                View All Golf Carts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Service in {municipality.name} {municipality.type}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team provides comprehensive golf cart services throughout St. Joseph County, 
                including dedicated service routes to {municipality.name} {municipality.type}. 
                From sales to maintenance, we're your trusted local partner.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-orange rounded-full mr-3"></div>
                  <span className="text-gray-700">Sales & Leasing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-orange rounded-full mr-3"></div>
                  <span className="text-gray-700">Daily/Weekly Rentals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-orange rounded-full mr-3"></div>
                  <span className="text-gray-700">Maintenance & Repair</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-theme-orange rounded-full mr-3"></div>
                  <span className="text-gray-700">Parts & Accessories</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="btn-get-quote">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/rentals">
                  <Button size="lg" variant="outline" data-testid="btn-view-rentals">
                    View Rental Options
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 text-theme-orange mr-2" />
                    Find {municipality.name} {municipality.type}
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
                      title={`Map of ${municipality.name} ${municipality.type}`}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started in {municipality.name}?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Contact Golf Carts Of Indiana today for expert advice, competitive pricing, and professional service in {municipality.name} {municipality.type}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:1-844-844-6638" className="flex items-center text-white hover:text-theme-orange transition-colors" data-testid="link-phone">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg font-semibold">1-844-844-6638</span>
            </a>
          </div>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-theme-primary bg-white hover:bg-gray-100" data-testid="btn-contact-final">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Golf Carts Of Indiana - ${municipality.name} ${municipality.type}`,
        "description": `Professional golf cart sales, service, and rentals serving ${municipality.name} ${municipality.type}, St. Joseph County, Indiana. Premium DENAGO and EVOLUTION electric golf carts available.`,
        "url": `https://golfcartsofindiana.com${municipality.url}`,
        "telephone": "1-844-844-6638",
        "email": "info@golfcartsofindiana.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": municipality.name,
          "addressRegion": "IN",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": municipality.coordinates.lat.toString(),
          "longitude": municipality.coordinates.lng.toString()
        },
        "areaServed": {
          "@type": municipality.type === "City" ? "City" : "Place",
          "name": `${municipality.name} ${municipality.type}`,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "St. Joseph County",
            "containedInPlace": {
              "@type": "State",
              "name": "Indiana"
            }
          }
        }
      }} />
    </div>
  );
}

// Export all 22 St. Joseph County municipality pages

// Cities (2)
export const SouthBendCityPage = () => <StJosephCountyMunicipalityPage municipalitySlug="south-bend-city" />;
export const MishawakaCityPage = () => <StJosephCountyMunicipalityPage municipalitySlug="mishawaka-city" />;

// Towns (7)
export const IndianVillageTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="indian-village-town" />;
export const LakevilleTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="lakeville-town" />;
export const NewCarlisleTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="new-carlisle-town" />;
export const NorthLibertyTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="north-liberty-town" />;
export const OsceolaTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="osceola-town" />;
export const RoselandTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="roseland-town" />;
export const WalkertonTownPage = () => <StJosephCountyMunicipalityPage municipalitySlug="walkerton-town" />;

// Townships (13)
export const CentreTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="centre-township" />;
export const ClayTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="clay-township" />;
export const GermanTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="german-township" />;
export const GreeneTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="greene-township" />;
export const HarrisTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="harris-township" />;
export const LibertyTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="liberty-township" />;
export const LincolnTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="lincoln-township" />;
export const MadisonTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="madison-township" />;
export const OliveTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="olive-township" />;
export const PennTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="penn-township" />;
export const PortageTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="portage-township" />;
export const UnionTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="union-township" />;
export const WarrenTownshipPage = () => <StJosephCountyMunicipalityPage municipalitySlug="warren-township" />;
