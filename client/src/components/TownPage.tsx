import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin, Phone, Clock, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { 
  generateLocalBusinessSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

interface TownPageProps {
  townName: string;
  townType: string; // "Township", "Borough", etc.
}

// Function to generate Google Maps embed URL for each town
const getGoogleMapsEmbedUrl = (townName: string, townType: string): string => {
  // Create town-specific Google Maps embed URLs
  const townKey = `${townName.toLowerCase().replace(/\s+/g, '')}_${townType.toLowerCase()}`;
  
  const townMaps: Record<string, string> = {
    // Monroe County, PA municipalities with Google Maps embeds (using Monroe County coordinates as fallback)
    'barrett_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBarrett%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'chestnuthill_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sChestnuthill%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'coolbaugh_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoolbaugh%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'delaware_water_gap_borough': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDelaware%20Water%20Gap%20Borough%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'east_stroudsburg_borough': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEast%20Stroudsburg%20Borough%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'eldred_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEldred%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'hamilton_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHamilton%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'jackson_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJackson%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'middle_smithfield_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMiddle%20Smithfield%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'mount_pocono_borough': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMount%20Pocono%20Borough%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'paradise_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sParadise%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'pocono_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPocono%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'polk_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPolk%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'price_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPrice%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'ross_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRoss%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'smithfield_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSmithfield%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'stroud_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStroud%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'stroudsburg_borough': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStroudsburg%20Borough%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'tobyhanna_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTobyhanna%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
    'tunkhannock_township': `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTunkhannock%20Township%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`,
  };
  
  // Return specific map or fallback to generic Monroe County embed for smaller towns
  return townMaps[townKey] || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c539d3b455555f%3A0x1c7e1e8e8e8e8e8e!2s${encodeURIComponent(townName + ' ' + townType)}%2C%20Monroe%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753817670000!5m2!1sen!2sus`;
};

export default function TownPage({ townName, townType }: TownPageProps) {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const fullTownName = `${townName} ${townType}`;
  
  // SEO optimization
  const pageTitle = `${townName} Golf Carts - Monroe County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = `Professional golf cart sales, service, and rentals in ${fullTownName}. Monroe County Golf Carts offers premium DENAGO and EVOLUTION electric golf carts with expert service for ${townName} residents.`;
  const pageKeywords = `${townName} golf carts, ${fullTownName} golf cart sales, Monroe County golf carts, electric golf carts ${townName}, golf cart service ${townName}, golf cart rentals ${townName}`;
  const canonicalUrl = `https://monroegolfcarts.com/${townName.toLowerCase().replace(/\s+/g, '-')}-${townType.toLowerCase()}-golf-carts`;

  const breadcrumbItems = [
    { name: "Home", url: "https://monroegolfcarts.com" },
    { name: `${townName} Golf Carts`, url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />
      
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
        townName={fullTownName}
      />
      {/* SEO Optimized Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {townName} Golf Carts - Monroe County's Premier Dealership
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional golf cart sales, service, and rentals in {fullTownName}. 
                Serving {townName} residents with premium DENAGO and EVOLUTION electric golf carts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop Golf Carts
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-blue-600 bg-white border-white hover:bg-gray-100 hover:text-blue-600 w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png" 
                alt={`Golf Cart ${townName}`}
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Cart Services in {fullTownName}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Monroe County Golf Carts proudly serves {townName} residents with comprehensive 
            golf cart solutions including sales, maintenance, repairs, and rentals.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated golf cart brands with factory warranties and certified quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance and repairs by certified technicians serving {townName}.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible financing options available for {townName} customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Clean electric golf carts perfect for {townName}'s environmental consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Lackawanna County Golf Carts - Top Golf Cart and LSV Brands
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We carry the most trusted names in Golf Carts and Low Speed Vehicles
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Club Car</h3>
              <p className="text-sm text-gray-600">Premium golf carts with advanced technology</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">EZ-GO</h3>
              <p className="text-sm text-gray-600">Reliable and efficient golf cart solutions</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Denago</h3>
              <p className="text-sm text-gray-600">High-quality performance golf carts</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Evolution</h3>
              <p className="text-sm text-gray-600">Luxury golf carts with premium features</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Tomberlin</h3>
              <p className="text-sm text-gray-600">Street-legal LSV and golf cart options</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Swift EV</h3>
              <p className="text-sm text-gray-600">Electric vehicle innovation</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Factory Warranties</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Genuine Parts</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Certified Service</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts for Town */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Popular Golf Carts in {fullTownName}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover the golf cart models {townName} residents love most
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  {vehicle.images && vehicle.images[0] && (
                    <img 
                      src={vehicle.images[0]} 
                      alt={`${vehicle.name} available in ${townName}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">Available in {townName}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-left">
                    {vehicle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ${vehicle.price.toLocaleString()}
                    </span>
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href="/inventory">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View All Golf Carts
            </Button>
          </Link>
        </div>
      </section>

      {/* Local Contact Information with Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Contact Lackawanna County Golf Carts from {fullTownName}
            </h2>
            <p className="text-xl text-gray-600">
              Easy access to professional golf cart services for {townName} residents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Speak with our {townName} golf cart specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 9AM-5PM</p>
                    <p>Saturday: 9AM-5PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Local Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Delivery and pickup available throughout {fullTownName} and surrounding Luzerne County areas.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps Embed for the specific town - Mobile Responsive */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src={getGoogleMapsEmbedUrl(townName, townType)}
                className="w-full h-64 sm:h-80 md:h-96"
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${fullTownName} Map`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why {townName} Chooses Lackawanna County Golf Carts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Residents of {fullTownName} trust Lackawanna County Golf Carts for reliable, 
                high-quality golf cart solutions. Our local expertise and commitment to customer 
                service make us the preferred choice for {townName} golf cart needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Local delivery to {fullTownName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Expert service and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Competitive pricing for {townName} residents</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Financing options available</span>
                </div>
              </div>

              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Service in {townName}
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                Serving {fullTownName}
              </h3>
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <p className="text-gray-700 mb-4">
                  Professional golf cart sales, service, and rentals delivered to {townName} residents.
                </p>
                <div className="text-sm text-gray-600">
                  <p>✓ New golf cart sales</p>
                  <p>✓ Golf cart rentals</p>
                  <p>✓ Professional service & repair</p>
                  <p>✓ Parts & accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Your Golf Cart in {fullTownName}?
          </h2>
          <p className="text-xl mb-8">
            Contact Ocean County Golf Carts today for personalized service in {townName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Call 1-844-844-6638
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 bg-white border-white hover:bg-gray-100 hover:text-blue-600">
              Request Quote for {townName}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}