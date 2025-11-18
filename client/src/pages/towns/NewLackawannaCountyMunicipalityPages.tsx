import { NEW_MONROE_COUNTY_MUNICIPALITIES } from "@/data/newMonroeCountyMunicipalities";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation, Car, DollarSign, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { useQuery } from "@tanstack/react-query";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

interface NewLackawannaCountyMunicipalityPageProps {
  municipalitySlug: string;
}

export function NewLackawannaCountyMunicipalityPage({ municipalitySlug }: NewLackawannaCountyMunicipalityPageProps) {
  const municipality = NEW_MONROE_COUNTY_MUNICIPALITIES.find(m => m.slug === municipalitySlug);
  
  // Fetch featured vehicles for the section
  const { data: vehicles = [] } = useQuery({
    queryKey: ['/api/vehicles'],
    staleTime: 1000 * 60 * 5,
  });

  // Get 3 featured vehicles for display
  const featuredVehicles = (vehicles as any[]).slice(0, 3);
  
  if (!municipality) {
    return <div>Municipality not found</div>;
  }

  const pageTitle = `${municipality.name} ${municipality.type} Golf Carts | Notredame Golf Carts`;
  const metaDescription = `Golf cart sales, rentals & service in ${municipality.name} ${municipality.type}, Notre Dame, IN. EVOLUTION & DENAGO electric golf carts. Professional installation & maintenance.`;

  // Google Maps embed URL for the specific municipality in Notre Dame
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${municipality.name.replace(' ', '%20')}%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817600000`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={pageTitle}
        description={metaDescription}
        keywords={`${municipality.name} golf carts, ${municipality.name} ${municipality.type} IN, Notre Dame golf cart sales, electric golf carts ${municipality.name}`}
        canonicalUrl={`https://notredamegolfcarts.com${municipality.url}`}
        ogImage="https://notredamegolfcarts.com/attached_assets/Notre Dame Golf Carts (1)_1756141613254.png"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-theme-primary to-blue-800 text-white py-16 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle(`municipality-${municipality.slug}`)}>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-theme-orange text-white">
              Notredame Golf Carts
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Golf Carts in {municipality.name} {municipality.type}
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Premium electric golf carts, professional service, and expert maintenance 
              delivered directly to {municipality.name} {municipality.type}, Notre Dame, Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  View Our Inventory
                </Button>
              </Link>
              <Link href={`/rentals/${municipality.slug}`}>
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
                  Rental Services
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
              Why Choose Notredame Golf Carts for {municipality.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver premium electric golf cart solutions throughout Notre Dame, 
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
            {featuredVehicles.map((vehicle: any, index: number) => (
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
                      <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                        View Details
                      </Button>
                    </Link>
                    <Link href={`/rentals/${municipality.slug}`}>
                      <Button variant="outline" className="w-full">
                        Rent This Model
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
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
                Our team provides comprehensive golf cart services throughout Notre Dame, 
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
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                    Get a Quote
                  </Button>
                </Link>
                <Link href={`/rentals/${municipality.slug}`}>
                  <Button size="lg" variant="outline">
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
          <p className="text-xl text-gray-100 mb-8">
            Contact us today for golf cart sales, rentals, and service in {municipality.name} {municipality.type}, 
            Notre Dame, Indiana.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-theme-orange font-bold">1-844-844-6638</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm">Service Available in<br />{municipality.name} {municipality.type}</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-theme-orange mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-sm">Mon-Sat: 8AM-6PM<br />Sun: 10AM-4PM</p>
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

      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `Notredame Golf Carts - ${municipality.name} Service`,
          description: metaDescription,
          url: `https://notredamegolfcarts.com${municipality.url}`,
          telephone: "1-844-844-6638",
          address: {
            "@type": "PostalAddress",
            addressLocality: municipality.name,
            addressRegion: "IN",
            addressCountry: "US"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.4993,
            longitude: -75.6649
          },
          areaServed: `${municipality.name} ${municipality.type}, Notre Dame, Indiana`
        }}
      />
    </div>
  );
}

// Export individual municipality page components
export const ArchbaldPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="archbald" />;
export const CarbondalePage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="carbondale" />;
export const ChinchillaPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="chinchilla-township" />;
export const ClarksSummitPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="clarks-summit" />;
export const DaltonPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="dalton" />;
export const ElmhurstPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="elmhurst-township" />;
export const FleetvillePage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="fleetville-township" />;
export const JermynPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="jermyn" />;
export const JessupPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="jessup" />;
export const LaPlumePage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="la-plume-township" />;
export const MoosicPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="moosic" />;
export const MoscowPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="moscow" />;
export const OldForgePage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="old-forge" />;
export const OlyphantPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="olyphant" />;
export const PeckvillePage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="peckville-township" />;
export const RansomPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="ransom-township" />;
export const ScrantonPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="scranton" />;
export const TaylorPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="taylor" />;
export const WaverlyPage = () => <NewLackawannaCountyMunicipalityPage municipalitySlug="waverly-township" />;