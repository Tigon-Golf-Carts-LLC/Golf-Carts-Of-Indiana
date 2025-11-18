import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import InventorySection from "@/components/InventorySection";
import BrandsSection from "@/components/BrandsSection";
import OrganizationSchema from "@/components/OrganizationSchema";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { NEW_MONROE_COUNTY_MUNICIPALITIES, type Municipality } from "@/data/newMonroeCountyMunicipalities";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

export default function HomePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "Notredame Golf Carts - Premier Indiana Dealership",
    baseDescription: "Serving all 20 Monroe County municipalities with premium electric golf carts from Evolution and Denago. Professional sales, service, and rental solutions throughout Notre Dame, IN.",
    pageType: "home",
    canonicalPath: "/",
    keywords: ["premium golf cart dealer", "Indiana electric vehicles", "Monroe County showroom"],
    heroBackgroundSeed: "home"
  });

  return (
    <div className="min-h-screen">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage="/attached_assets/a-photograph-of-a-modern-golf-cart-deale_1Cnk505HSlGhjw-TPLFg9w_nDZV9Dn5QHiGR5OY8JPBgA_1753453234033.png"
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      <AllSchemas 
        pageType="home" 
        pageData={{
          title: "Notredame Golf Carts - Premier Electric Golf Cart Dealership in Indiana",
          description: "Discover premium electric golf carts from Denago and Evolution at Notredame Golf Carts. Expert sales, service, rentals, and financing throughout Notre Dame, IN.",
          url: "https://notredamegolfcarts.com/",
          breadcrumbs: [{ name: "Home", url: "https://notredamegolfcarts.com/" }],
          reviews: [
            {
              author: "John Smith",
              reviewBody: "Excellent service and quality golf carts. The team at Notredame Golf Carts helped me find the perfect cart for my needs.",
              reviewRating: 5,
              datePublished: "2025-01-15",
              headline: "Outstanding service and selection"
            },
            {
              author: "Maria Garcia",
              reviewBody: "Professional staff and great prices. Highly recommend for anyone looking for golf carts in Monroe County.",
              reviewRating: 5,
              datePublished: "2025-01-20",
              headline: "Professional and affordable"
            },
            {
              author: "David Johnson",
              reviewBody: "Fast delivery and excellent customer support. The Evolution cart I purchased works perfectly.",
              reviewRating: 4,
              datePublished: "2025-01-22",
              headline: "Great customer support"
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("home")}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Notredame Golf Carts - Premier Indiana Dealership
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Serving all 39 Monroe County municipalities with premium electric golf carts from Evolution and Denago. Professional sales, service, and rental solutions. 
                Serving Monroe County, and all surrounding towns, townships, and Indiana communities in Monroe County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    View Inventory
                  </Button>
                </Link>
                <a href="tel:1-844-844-6638">
                  <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                    Call Now 1-844-844-6638
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png" 
                alt="Golf Cart" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose Notredame Golf Carts?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're more than just a dealership - we're your partner in golf cart ownership 
            with comprehensive services and unmatched expertise.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated brands including Yamaha, Club Car, EZGO, and Evolution with rigorous quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance, repairs, and customization by certified technicians.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible payment options with 0% financing available on select models.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Electric golf carts for sustainable, quiet, and efficient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Notredame Golf Carts - Top Golf Cart and LSV Brands
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

          <p className="text-lg text-gray-700 mb-8">
            As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-green-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Factory Warranties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Certified Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Golf Carts
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Check out some of our most popular models
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Evolution D5 Maverick 4 Plus */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg" 
                  alt="Evolution D5 Maverick 4 Plus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D5 Maverick 4 Plus</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $12,995
                  </span>
                  <Link href="/vehicle/evolution-d5-maverick-4-plus">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Evolution D6 Max GT4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg" 
                  alt="Evolution D6 Max XT4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D6 Max XT4</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  High-performance 4-passenger golf cart with cutting-edge technology and sporty design.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $16,995
                  </span>
                  <Link href="/vehicle/evolution-d6-max-xt4">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Denago EV City */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg" 
                  alt="Denago EV City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Denago EV City</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Urban mobility solution with street-legal capabilities and modern design for city transportation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $11,995
                  </span>
                  <Link href="/vehicle/denago-ev-city">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Link href="/inventory">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View Full Inventory
            </Button>
          </Link>
        </div>
      </section>

      {/* About Montgomery County Golf Carts Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
                About Notredame Golf Carts
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                With over 15 years of experience in the golf cart industry, we've built our reputation on providing exceptional service and quality products to customers throughout Monroe County and surrounding Indiana areas.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-theme-orange mb-1 md:mb-2">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-theme-orange mb-1 md:mb-2">15+</div>
                  <div className="text-sm md:text-base text-gray-600">Years Experience</div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full md:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98084.82!2d-75.3379!3d41.0534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c539d3b455555f%3A0x1c7e1e8e8e8e8e8e!2sMonroe%20County%2C%20PA%2C%20USA!5e0!3m2!1sen!2sus!4v1753472406041!5m2!1sen!2sus" 
                  className="w-full h-64 md:h-80 lg:h-96"
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre Dame, IN Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monroe County Municipalities Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Carts for Every Monroe County Municipality
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional golf cart services delivered to your city, borough, or township
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
            {/* Complete Monroe County Municipality List - dynamically generated */}
            {NEW_MONROE_COUNTY_MUNICIPALITIES.map((municipality: Municipality) => (
              <Link 
                key={municipality.slug} 
                href={municipality.url} 
                className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors"
              >
                <div className="text-sm font-semibold text-blue-700">
                  {municipality.name}
                </div>
              </Link>
            ))}
          </div>
          
          <p className="text-gray-600 mb-8">
            Serving all {NEW_MONROE_COUNTY_MUNICIPALITIES.length} Monroe County municipalities! Professional golf cart sales, service, and rentals delivered throughout the region.
          </p>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact us today for personalized service and expert advice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Hatfield</h3>
              <p className="text-sm text-gray-600 mb-2">2333 Bethlehem Pike, Hatfield, IN 19440</p>
              <p className="text-theme-orange font-semibold">(215) 595-8736</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Poconos</h3>
              <p className="text-sm text-gray-600 mb-2">1712 Indiana 940, Pocono Pines, IN 18350</p>
              <p className="text-theme-orange font-semibold">(570) 643-0152</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-theme-orange mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">TIGON Golf Carts Scranton</h3>
              <p className="text-sm text-gray-600 mb-2">1225 N Keyser Ave #2, Scranton, IN 18504</p>
              <p className="text-theme-orange font-semibold">(570) 344-4443</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support throughout Monroe County</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a href="tel:1-844-844-6638" className="text-2xl font-bold text-theme-orange hover:underline">1-844-844-6638</a>
              <Link href="/contact">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
