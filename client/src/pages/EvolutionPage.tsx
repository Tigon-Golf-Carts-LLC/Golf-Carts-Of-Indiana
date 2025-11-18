import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Truck, Phone, MapPin, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import VehicleCard from "@/components/VehicleCard";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";

// Import EVOLUTION vehicle images
import evolutionD5Ranger6Image from "@assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg";
import evolutionD5Ranger4PlusImage from "@assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg";
import evolutionForester4PlusImage from "@assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg";
import evolutionTurfman1000Image from "@assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg";
import evolutionD6MaxXT4Image from "@assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg";
import evolutionClassic4PlusImage from "@assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg";
import evolutionCarrier6PlusImage from "@assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg";
import evolutionD5Maverick4PlusImage from "@assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135231312.jpg";

interface Vehicle {
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
  description: string;
}

export default function EvolutionPage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  // Filter EVOLUTION vehicles
  const evolutionVehicles = vehicles?.filter(vehicle => 
    vehicle.brand.toLowerCase().includes('evolution')
  ) || [];
  
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "EVOLUTION®",
    baseDescription: "Experience the evolution of electric vehicle excellence. EVOLUTION golf carts deliver premium quality, innovative design, and reliable performance for Notre Dame, Indiana. Complete lineup of D5 RANGER, MAVERICK, CLASSIC, CARRIER, FORESTER, TURFMAN, and D6 MAX series.",
    pageType: "general",
    canonicalPath: "/evolution",
    keywords: ["EVOLUTION golf carts", "premium electric vehicles", "D5 RANGER", "EVOLUTION MAVERICK", "golf cart sales St. Joseph County"],
    ogImage: "/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg",
    heroBackgroundSeed: "evolution"
  });

  const evolutionFeatures = [
    "Premium Quality Construction",
    "Advanced LED Lighting Systems",
    "Comfortable Ergonomic Seating",
    "Reliable Electric Performance",
    "Weather-Resistant Design",
    "Comprehensive Warranty Coverage"
  ];

  const evolutionSeries = [
    {
      title: "D5 RANGER Series",
      description: "Premium recreational vehicles with LED lighting and modern styling",
      image: evolutionD5Ranger4PlusImage,
      features: ["LED Lighting Package", "Premium Seating", "Modern Design"],
      vehicles: ["D5 RANGER 2+2", "D5 RANGER 4", "D5 RANGER 6", "D5 RANGER 6 PLUS"],
      price: "Starting at $7,695"
    },
    {
      title: "D5 MAVERICK Series", 
      description: "Versatile family vehicles with comfort and performance features",
      image: evolutionD5Maverick4PlusImage,
      features: ["Family Seating", "Comfort Package", "Storage Solutions"],
      vehicles: ["D5 MAVERICK 4", "D5 MAVERICK 6", "D5 MAVERICK 4 PLUS", "D5 MAVERICK 6 PLUS"],
      price: "Starting at $7,995"
    },
    {
      title: "CLASSIC Series",
      description: "Traditional golf cart design with reliable performance",
      image: evolutionClassic4PlusImage,
      features: ["Classic Styling", "Proven Reliability", "Value Pricing"],
      vehicles: ["CLASSIC 2 PLUS", "CLASSIC 2 PRO", "CLASSIC 4 PLUS"],
      price: "Starting at $6,695"
    },
    {
      title: "CARRIER Series",
      description: "Utility vehicles designed for work and cargo transportation",
      image: evolutionCarrier6PlusImage,
      features: ["Cargo Capacity", "Utility Features", "Heavy-Duty Build"],
      vehicles: ["CARRIER 6 PLUS", "CARRIER 8 PLUS"],
      price: "Starting at $9,595"
    },
    {
      title: "FORESTER Series", 
      description: "Lifted recreational vehicles designed for off-road adventures",
      image: evolutionForester4PlusImage,
      features: ["Lifted Suspension", "All-Terrain Capability", "Adventure Ready"],
      vehicles: ["FORESTER 4 PLUS", "FORESTER 6 PLUS"],
      price: "Starting at $6,995"
    },
    {
      title: "TURFMAN Series",
      description: "Commercial-grade utility vehicles for professional applications", 
      image: evolutionTurfman1000Image,
      features: ["Commercial Grade", "Heavy-Duty Operation", "Professional Use"],
      vehicles: ["TURFMAN 200", "TURFMAN 800", "TURFMAN 1000"],
      price: "Starting at $6,795"
    },
    {
      title: "D6 MAX Series",
      description: "High-performance vehicles with advanced technology and features",
      image: evolutionD6MaxXT4Image,
      features: ["High Performance", "Advanced Tech", "Premium Features"],
      vehicles: ["D6 MAX GT4", "D6 MAX GT6", "D6 MAX XT4", "D6 MAX XT6"],
      price: "Starting at $13,595"
    }
  ];

  // All EVOLUTION vehicles for complete lineup section - matching DENAGO layout
  const allEvolutionVehicles = [
    {
      name: "EVOLUTION D5 RANGER 4 PLUS",
      series: "D5 RANGER",
      price: "$9,595",
      image: evolutionD5Ranger4PlusImage,
      specs: {
        seats: "4",
        range: "45 miles",
        topSpeed: "25 mph"
      },
      features: [
        "Premium Comfort Package",
        "Enhanced Performance",
        "Durable Construction",
        "Advanced Suspension"
      ]
    },
    {
      name: "EVOLUTION D5 RANGER 6 PLUS",
      series: "D5 RANGER", 
      price: "$11,595",
      image: evolutionD5Ranger6Image,
      specs: {
        seats: "6",
        range: "40 miles", 
        topSpeed: "25 mph"
      },
      features: [
        "Extended 6-Passenger Seating",
        "Premium Comfort Features",
        "Enhanced Performance",
        "Superior Build Quality"
      ]
    },
    {
      name: "EVOLUTION D5 MAVERICK 4 PLUS",
      series: "D5 MAVERICK",
      price: "$9,995", 
      image: evolutionD5Maverick4PlusImage,
      specs: {
        seats: "4",
        range: "42 miles",
        topSpeed: "25 mph"
      },
      features: [
        "Sport-Oriented Design",
        "Enhanced Performance", 
        "Agile Handling",
        "Premium Features"
      ]
    },
    {
      name: "EVOLUTION CLASSIC 4 PLUS",
      series: "CLASSIC",
      price: "$6,995",
      image: evolutionClassic4PlusImage,
      specs: {
        seats: "4", 
        range: "35 miles",
        topSpeed: "25 mph"
      },
      features: [
        "Classic Golf Cart Design",
        "Reliable Performance",
        "Traditional Styling",
        "Proven Technology"
      ]
    },
    {
      name: "EVOLUTION CARRIER 6 PLUS", 
      series: "CARRIER",
      price: "$9,595",
      image: evolutionCarrier6PlusImage,
      specs: {
        seats: "6",
        range: "38 miles",
        topSpeed: "25 mph"
      },
      features: [
        "6-Passenger Utility Vehicle",
        "Enhanced Cargo Capacity", 
        "Work-Ready Features",
        "Durable Construction"
      ]
    },
    {
      name: "EVOLUTION D6 MAX XT4",
      series: "D6 MAX",
      price: "$15,595",
      image: evolutionD6MaxXT4Image,
      specs: {
        seats: "4",
        range: "50 miles",
        topSpeed: "25 mph"
      },
      features: [
        "High Performance",
        "Advanced Technology",
        "Premium Features", 
        "All-Wheel Drive"
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImage={seoData.ogImage}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle('/evolution')}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              PREMIUM ELECTRIC VEHICLES
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              EVOLUTION<sup className="text-2xl">®</sup>
            </h1>
            <p className="text-2xl mb-8 max-w-4xl mx-auto">
              Experience the evolution of electric vehicle excellence. EVOLUTION golf carts deliver 
              premium quality, innovative design, and reliable performance for Notre Dame, Indiana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/inventory">
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                  View EVOLUTION Models
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  The EVOLUTION Difference
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  EVOLUTION represents the perfect balance of innovation, quality, and value in 
                  electric vehicle manufacturing. With a comprehensive lineup ranging from classic 
                  golf carts to high-performance utility vehicles, EVOLUTION delivers solutions 
                  for every need in St. Joseph County's diverse campus and residential communities.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {evolutionFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-6 h-6 text-theme-orange mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={evolutionD5Ranger6Image}
                  alt="EVOLUTION Quality"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 inline mr-2" />
                  Industry Leading
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EVOLUTION Series Overview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Complete EVOLUTION Lineup
              </h2>
              <p className="text-xl text-gray-600">
                Discover the full range of EVOLUTION electric vehicles available in St. Joseph County
              </p>
            </div>

            <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {evolutionSeries.map((series, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48">
                    <img 
                      src={series.image} 
                      alt={series.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-theme-primary text-white text-xs">
                        {series.vehicles.length} Model{series.vehicles.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gray-900">{series.title}</CardTitle>
                    <p className="text-sm text-gray-600">{series.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {(series as any).price && (
                      <div className="mb-3 text-center">
                        <span className="text-lg font-bold text-theme-orange">{(series as any).price}</span>
                      </div>
                    )}
                    <div className="space-y-1 mb-3">
                      {series.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Zap className="w-3 h-3 text-theme-orange mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {series.vehicles.slice(0, 3).map((vehicle, idx) => (
                        <Link key={idx} href={`/vehicles/${vehicle.toLowerCase().replace(/\s+/g, '-')}`}>
                          <div className="text-xs font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded hover:bg-theme-orange hover:text-white transition-colors cursor-pointer">
                            {vehicle}
                          </div>
                        </Link>
                      ))}
                      {series.vehicles.length > 3 && (
                        <div className="text-xs text-gray-500 text-center py-1">
                          +{series.vehicles.length - 3} more models
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete EVOLUTION Vehicle Lineup */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Complete EVOLUTION Vehicle Lineup  
              </h2>
              <p className="text-xl text-gray-600">
                Explore all 6 EVOLUTION electric vehicle models available in St. Joseph County
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvolutionVehicles.map((vehicle, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-theme-orange text-white font-bold">
                        {vehicle.series}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900 font-bold">
                        {vehicle.price}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{vehicle.name}</CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold">Seats:</span> {vehicle.specs.seats}
                      </div>
                      <div>
                        <span className="font-semibold">Range:</span> {vehicle.specs.range}
                      </div>
                      <div>
                        <span className="font-semibold">Top Speed:</span> {vehicle.specs.topSpeed}
                      </div>
                      <div>
                        <span className="font-semibold">Drive:</span> Rear-Wheel Drive
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-theme-orange mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href={`/vehicles/${vehicle.name.toLowerCase().replace(/\s+/g, '-').replace('evolution-', '')}`}>
                        <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white text-sm">
                          View Details
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full bg-white text-theme-primary border-theme-primary hover:bg-theme-primary hover:text-white text-sm">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* EVOLUTION Advantages */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose EVOLUTION in St. Joseph County?
              </h2>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Quality</h3>
                <p className="text-gray-600">
                  EVOLUTION vehicles are built to the highest standards with rigorous quality 
                  control and premium components for lasting performance.
                </p>
              </div>

              <div className="text-center">
                <Zap className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
                <p className="text-gray-600">
                  From LED lighting systems to premium seating, EVOLUTION incorporates 
                  innovative features that enhance comfort and functionality.
                </p>
              </div>

              <div className="text-center">
                <Shield className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Performance</h3>
                <p className="text-gray-600">
                  Count on EVOLUTION's dependable electric systems and robust construction 
                  for years of reliable service in Indiana's varied conditions.
                </p>
              </div>

              <div className="text-center">
                <MapPin className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Support</h3>
                <p className="text-gray-600">
                  Expert EVOLUTION service and genuine parts support right here in St. Joseph County 
                  with factory-trained technicians and comprehensive warranties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience EVOLUTION?
            </h2>
            <p className="text-xl mb-8">
              Contact Notre Dame Golf Carts today to explore the complete EVOLUTION lineup 
              and find the perfect electric vehicle for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 1-844-844-6638
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}