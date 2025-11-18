import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Truck, Star, Users, Wrench, Battery } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { generateTownPageSchema } from "@/components/SchemaMarkup";
import LocationSchema from "@/components/LocationSchema";
import VehicleCard from "@/components/VehicleCard";
import { MONTGOMERY_COUNTY_MUNICIPALITIES, Municipality } from "@/data/montgomeryCountyMunicipalities";
import { generateSimpleGoogleMapsEmbed } from "@/utils/googleMaps";

interface Vehicle {
  description: string;
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  specifications: {
    topSpeed: string;
    range: string;
    seatingCapacity: number;
    batteryType: string;
    chargingTime: string;
    payload: string;
  };
  features: string[];
  inStock: boolean;
  isNew: boolean;
}

interface MontgomeryCountyMunicipalityPageProps {
  municipality: Municipality;
}

// Generate location-specific Google Maps embed URL
const getGoogleMapsEmbedUrl = (municipality: Municipality) => {
  return generateSimpleGoogleMapsEmbed(municipality.name, municipality.type);
};

export default function MontgomeryCountyMunicipalityPage({ municipality }: MontgomeryCountyMunicipalityPageProps) {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const fullName = `${municipality.name} ${municipality.type}`;
  
  // SEO optimization for Montgomery County
  const pageTitle = `${municipality.name} Golf Carts - Montgomery County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = `Professional golf cart sales, service, and rentals in ${fullName}. Montgomery County Golf Carts offers premium DENAGO and EVOLUTION electric golf carts with expert service for ${municipality.name} residents.`;
  const pageKeywords = `${municipality.name} golf carts, ${fullName} golf cart sales, Montgomery County golf carts, electric golf carts ${municipality.name}, golf cart service ${municipality.name}, golf cart rentals ${municipality.name}, Indiana golf carts`;
  const canonicalUrl = `https://montcogolfcarts.com${municipality.url}`;

  const businessHours = "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM, Sun: Closed";
  const businessPhone = "1-844-844-6638";
  const businessEmail = "info@montcogolfcarts.com";

  return (
    <>
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
        townName={municipality.name}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_OlTDU4v9StGOZo5AygNb9A_bbx-4nIbSSGW4LKOIV9o3w_1753383770677.png"
        ogType="website"
      />
      
      <SchemaMarkup schema={generateTownPageSchema(municipality.name)} />
      <LocationSchema 
        municipalityName={municipality.name}
        municipalityType={municipality.type}
        pageType="location"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/locations" className="text-gray-500 hover:text-gray-700">Montgomery County Locations</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">{fullName}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Montgomery County Golf Carts</Badge>
            <h1 className="text-5xl font-bold mb-6">
              Premium Golf Carts in {fullName}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Montgomery County's trusted source for premium electric golf carts. Professional sales, 
              service, and rental solutions delivered directly to {municipality.name} residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Link href="/inventory" className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  Browse Golf Carts
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-white">
                <Link href={`${municipality.url}/rentals`} className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Rental Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-100 hover:border-blue-200 transition-all">
                <CardHeader className="text-center">
                  <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-blue-900">Call Us Today</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{businessPhone}</p>
                  <p className="text-gray-600">Serving {fullName} with expert golf cart solutions</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-200 transition-all">
                <CardHeader className="text-center">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-green-900">Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-green-600">{businessHours}</p>
                  <p className="text-gray-600 mt-2">Fast response times for {municipality.name} customers</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all">
                <CardHeader className="text-center">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-purple-900">Service Area</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-purple-600">{fullName}</p>
                  <p className="text-gray-600">Complete Montgomery County coverage</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Vehicles */}
        {featuredVehicles.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  Popular Golf Carts in {municipality.name}
                </h2>
                <p className="text-xl text-gray-600">
                  Top-rated electric golf carts perfect for {fullName} residents
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <Link href="/inventory">
                    View Complete Inventory
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Complete Golf Cart Services for {municipality.name}
              </h2>
              <p className="text-xl text-gray-600">
                Professional solutions delivered throughout {fullName}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Premium Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">New and certified pre-owned DENAGO and EVOLUTION golf carts with full warranty coverage.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Expert Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Professional maintenance, repairs, and upgrades by certified technicians.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Truck className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Rental Fleet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Flexible daily, weekly, and monthly rental options for events and temporary needs.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Local Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Dedicated Montgomery County team providing personalized customer service.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                {fullName} Location & Service Area
              </h2>
              <p className="text-xl text-gray-600">
                Proudly serving {municipality.name} and surrounding Montgomery County areas
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={getGoogleMapsEmbedUrl(municipality)}
                  className="w-full h-64 sm:h-80 md:h-96 border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${fullName} Golf Cart Service Area Map`}
                />
              </div>
              <div className="p-6 bg-blue-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Contact Information</h3>
                    <p className="text-blue-700">{businessPhone}</p>
                    <p className="text-blue-700">{businessEmail}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Service Hours</h3>
                    <p className="text-blue-700">{businessHours}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Service Area</h3>
                    <p className="text-blue-700">Montgomery County, IN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Your Golf Cart in {municipality.name}?
            </h2>
            <p className="text-xl mb-8">
              Contact Montgomery County Golf Carts today for expert consultation and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${businessPhone}`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="h-5 w-5 mr-2" />
                  Call {businessPhone}
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* All Montgomery County Locations */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                All Montgomery County Service Areas
              </h2>
              <p className="text-xl text-gray-600">
                Professional golf cart services throughout Montgomery County, Indiana
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
              {MONTGOMERY_COUNTY_MUNICIPALITIES.map((muni: Municipality) => (
                <Link 
                  key={muni.slug} 
                  href={muni.url}
                  className={`py-2 px-3 bg-white rounded-lg hover:bg-blue-50 hover:border-theme-primary border transition-colors ${
                    muni.slug === municipality.slug ? 'border-theme-primary bg-blue-50 font-semibold' : 'border-transparent'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-medium text-gray-900">{muni.name}</div>
                    <div className="text-xs text-gray-500">{muni.type}</div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Serving all {MONTGOMERY_COUNTY_MUNICIPALITIES.length} municipalities in Montgomery County with premium golf cart solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}