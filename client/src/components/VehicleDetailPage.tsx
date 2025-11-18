import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, ExternalLink, Check, Star, MapPin, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

interface VehicleDetailPageProps {
  // Vehicle Information
  vehicleName: string;
  brand: "DENAGO" | "EVOLUTION";
  series: string;
  price: string;
  image: string;

  // Specifications
  seats: string;
  range: string;
  topSpeed: string;
  driveType: string;

  // Features and Description
  features: string[];
  description: string;

  // External Link
  tigoUrl: string;

  // Optional SEO overrides (for legacy compatibility)
  seoKeywords?: string;
  canonicalUrl?: string;
}

export default function VehicleDetailPage({
  vehicleName,
  brand,
  series,
  price,
  image,
  seats,
  range,
  topSpeed,
  driveType,
  features,
  description,
  tigoUrl,
  seoKeywords,
  canonicalUrl
}: VehicleDetailPageProps) {
  const brandColors = {
    DENAGO: "from-gray-900 to-gray-700",
    EVOLUTION: "from-blue-900 to-blue-700"
  };
  
  // Generate enhanced SEO metadata that matches H1 and includes call-to-action
  const vehicleSlug = vehicleName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const defaultCanonicalPath = `/vehicles/${vehicleSlug}`;
  const defaultKeywords = [
    vehicleName,
    `${brand} golf cart`,
    `${series} series`,
    `electric golf cart Monroe County`,
    `${brand} ${series}`,
    "golf cart sales Indiana"
  ];
  
  const seoData = generateSEOMetadata({
    pageTitle: vehicleName, // This matches the H1 text exactly
    baseDescription: `Discover the ${vehicleName} electric golf cart in Notre Dame, IN. ${description} Expert sales, service, and delivery available.`,
    pageType: "vehicle",
    canonicalPath: canonicalUrl ? new URL(canonicalUrl).pathname : defaultCanonicalPath,
    keywords: seoKeywords ? seoKeywords.split(', ') : defaultKeywords,
    ogImage: image,
    heroBackgroundSeed: "vehicle",
    vehicleBrand: brand,
    vehicleModel: series
  });

  const specifications = {
    "Seating Capacity": seats,
    "Range": range,
    "Top Speed": topSpeed,
    "Drive Type": driveType,
    "Brand": brand,
    "Series": series,
    "Motor Type": "Electric Motor",
    "Battery Type": brand === "DENAGO" ? "Lithium Ion" : "Lead Acid"
  };

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage={image}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      <AllSchemas 
        pageType="vehicle" 
        pageData={{
          title: seoData.title,
          description: seoData.description,
          url: seoData.canonicalUrl,
          breadcrumbs: [
            { name: "Home", url: "https://notredamegolfcarts.com/" },
            { name: "Inventory", url: "https://notredamegolfcarts.com/inventory" },
            { name: vehicleName, url: seoData.canonicalUrl }
          ],
          vehicleName,
          vehicleBrand: brand,
          vehicleModel: series,
          vehicleImage: typeof image === 'string' ? image : (image as any)?.src || "",
          vehiclePrice: price.replace('$', '').replace(',', ''),
          vehicleFeatures: features,
          vehicleSpecs: specifications,
          reviews: [
            {
              author: "Michael Thompson",
              reviewBody: `The ${vehicleName} is an excellent golf cart with great performance and build quality. Highly recommended for anyone looking for a reliable electric vehicle.`,
              reviewRating: 5,
              datePublished: "2025-01-20",
              headline: `Outstanding ${brand} vehicle`
            },
            {
              author: "Susan Rodriguez",
              reviewBody: `Purchased the ${vehicleName} and couldn't be happier. The features and performance exceed expectations. Great service from Notredame Golf Carts.`,
              reviewRating: 5,
              datePublished: "2025-01-18",
              headline: "Excellent purchase experience"
            },
            {
              author: "James Wilson",
              reviewBody: `The ${vehicleName} combines style, performance, and reliability. Perfect for our needs and the team provided excellent support throughout the process.`,
              reviewRating: 4,
              datePublished: "2025-01-15",
              headline: "Great combination of features"
            }
          ]
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`relative py-20 px-4 bg-gradient-to-r ${brandColors[brand]} text-white overflow-hidden bg-cover bg-center bg-no-repeat`} style={getHeroBackgroundStyle("vehicle")}>
          <div className="relative max-w-7xl mx-auto z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
                  {brand} {series}
                </Badge>
                <h1 className="text-5xl font-bold mb-6">
                  {vehicleName}
                </h1>
                <p className="text-xl mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-3xl font-bold text-theme-orange">{price}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm">5.0 Rating</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:1-844-844-6638">
                    <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                      <Phone className="w-5 h-5 mr-2" />
                      Call 1-844-844-6638
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={image}
                  alt={vehicleName}
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 right-4 bg-theme-orange text-white px-4 py-2 rounded-lg">
                  <Badge className="bg-white text-gray-900 font-bold">
                    {price}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Vehicle Specifications
              </h2>
              <p className="text-xl text-gray-600">
                Technical details and performance specifications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-theme-orange text-2xl">{seats}</CardTitle>
                  <p className="text-gray-600">Seating Capacity</p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-theme-orange text-2xl">{range}</CardTitle>
                  <p className="text-gray-600">Driving Range</p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-theme-orange text-2xl">{topSpeed}</CardTitle>
                  <p className="text-gray-600">Top Speed</p>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-theme-orange text-2xl">{driveType}</CardTitle>
                  <p className="text-gray-600">Drive System</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Key Features
              </h2>
              <p className="text-xl text-gray-600">
                Premium features and capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                  <Check className="w-6 h-6 text-theme-orange mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Link Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              View {vehicleName} Details
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get complete specifications, pricing, and availability information from TIGON Golf Carts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={tigoUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View {vehicleName} Details
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Notredame Golf Carts */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose Notredame Golf Carts?
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Expert Service</h3>
                <p className="text-blue-100">
                  Professional installation, maintenance, and warranty support for all {brand} vehicles in Monroe County, New Jersey.
                </p>
              </div>

              <div className="text-center">
                <Zap className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Premium Quality</h3>
                <p className="text-blue-100">
                  Only the highest quality {brand} vehicles with advanced features and reliable performance for years of enjoyment.
                </p>
              </div>

              <div className="text-center">
                <MapPin className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
                <p className="text-blue-100">
                  Deep knowledge of Monroe County's communities and terrain to help you choose the perfect vehicle for your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the {vehicleName}?
            </h2>
            <p className="text-xl mb-8">
              Contact Notredame Golf Carts today for pricing, availability, and to schedule your test drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theme-primary">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}