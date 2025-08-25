import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Truck, Phone, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import VehicleCard from "@/components/VehicleCard";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

// Import DENAGO vehicle images
import denagoEvCityImage from "@assets/DENAGONEVCITY_1751893047472_1753135231313.jpg";
import denagoEvNomadImage from "@assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg";
import denagoEvNomadXLImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";
import denagoEvRoverXLImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";
import denagoEvRoverXL6Image from "@assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg";
import denagoEvRoverXXLImage from "@assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg";

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

export default function DenagoPage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  // Filter DENAGO vehicles
  const denagoVehicles = vehicles?.filter(vehicle => 
    vehicle.brand.toLowerCase().includes('denago')
  ) || [];

  const denagoFeatures = [
    "Advanced All-Wheel Drive Technology",
    "High-Performance Lithium-Ion Battery Systems", 
    "Premium Suspension & Comfort Seating",
    "Rugged Off-Road Capability",
    "Extended Range & Fast Charging",
    "Durable Weather-Resistant Construction"
  ];

  const denagoSeries = [
    {
      title: "EV CITY Series",
      description: "Urban mobility redefined with sleek design and efficient performance",
      image: denagoEvCityImage,
      features: ["Street Legal Ready", "LED Lighting", "Premium Interior"],
      vehicles: ["DENAGO EV CITY"],
      price: "Starting at $15,000"
    },
    {
      title: "EV NOMAD Series", 
      description: "Adventure-ready vehicles built for exploration and off-road adventures",
      image: denagoEvNomadImage,
      features: ["All-Terrain Tires", "Lifted Suspension", "Adventure Package"],
      vehicles: ["DENAGO EV NOMAD", "DENAGO EV NOMAD XL"],
      price: "Starting at $8,495"
    },
    {
      title: "EV ROVER Series",
      description: "Luxury family transportation with maximum comfort and capacity",
      image: denagoEvRoverXLImage,
      features: ["6-Passenger Seating", "Premium Materials", "Advanced Safety"],
      vehicles: ["DENAGO EV ROVER XL", "DENAGO EV ROVER XL6", "DENAGO EV ROVER XXL"],
      price: "Starting at $9,995"
    }
  ];

  // Complete DENAGO vehicle lineup with specifications
  const allDenagoVehicles = [
    {
      name: "DENAGO EV CITY",
      series: "EV CITY",
      image: denagoEvCityImage,
      price: "$15,000",
      features: ["Street Legal Ready", "LED Light Package", "Premium Seating", "Weather Protection"],
      specs: { seats: "2", range: "40 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    },
    {
      name: "DENAGO EV NOMAD",
      series: "EV NOMAD",
      image: denagoEvNomadImage,
      price: "$8,495",
      features: ["Off-Road Suspension", "All-Terrain Tires", "Adventure Package", "Enhanced Ground Clearance"],
      specs: { seats: "4", range: "45 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    },
    {
      name: "DENAGO EV NOMAD XL",
      series: "EV NOMAD",
      image: denagoEvNomadXLImage,
      price: "$8,495",
      features: ["Extended Range", "Premium Off-Road Package", "Enhanced Cargo Space", "All-Weather Protection"],
      specs: { seats: "4", range: "55 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    },
    {
      name: "DENAGO EV ROVER XL",
      series: "EV ROVER",
      image: denagoEvRoverXLImage,
      price: "$9,995",
      features: ["6-Passenger Seating", "Luxury Interior", "Advanced Safety Features", "Premium Sound"],
      specs: { seats: "6", range: "50 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    },
    {
      name: "DENAGO EV ROVER XL6",
      series: "EV ROVER",
      image: denagoEvRoverXL6Image,
      price: "$11,995",
      features: ["Extended 6-Seat Configuration", "Premium Materials", "Enhanced Comfort", "Smart Technology"],
      specs: { seats: "6", range: "50 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    },
    {
      name: "DENAGO EV ROVER XXL",
      series: "EV ROVER",
      image: denagoEvRoverXXLImage,
      price: "$11,995",
      features: ["Maximum Capacity", "Ultra-Premium Interior", "Advanced Technology Suite", "Superior Performance"],
      specs: { seats: "8", range: "60 miles", topSpeed: "25 mph", driveType: "All-Wheel Drive" }
    }
  ];

  return (
    <>
      <SEOHead 
        title="DENAGO Electric Golf Carts Monroe County | Premium Off-Road Vehicles PA"
        description="Discover DENAGO electric golf carts in Monroe County, PA. Premium EV CITY, EV NOMAD, and EV ROVER series with advanced all-wheel drive technology. Sales, service & delivery."
        keywords="DENAGO golf carts Monroe County, electric golf carts Pennsylvania, DENAGO EV CITY, DENAGO EV NOMAD, DENAGO EV ROVER, off-road golf carts, all-wheel drive golf carts"
        canonicalUrl="https://monroegolfcarts.com/denago"
        ogImage="/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"
        ogType="product.group"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-white overflow-hidden"
          style={getHeroBackgroundStyle('/denago')}
        >
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <Badge className="bg-theme-orange text-white px-6 py-2 text-lg font-bold mb-6">
              PREMIUM ELECTRIC VEHICLES
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              DENAGO<sup className="text-2xl">®</sup>
            </h1>
            <p className="text-2xl mb-8 max-w-4xl mx-auto">
              Experience the ultimate in electric off-road performance. DENAGO vehicles combine cutting-edge 
              technology with rugged durability for unmatched adventure capability in Monroe County, Pennsylvania.
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
                  View DENAGO Models
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
                  Redefining Electric Adventure
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  DENAGO represents the pinnacle of electric vehicle engineering, combining innovative 
                  all-wheel drive technology with premium comfort features. Each DENAGO is built to 
                  exceed expectations on any terrain while delivering exceptional reliability for 
                  Monroe County's diverse mountainous and suburban landscapes.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {denagoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-6 h-6 text-theme-orange mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={denagoEvRoverXXLImage}
                  alt="DENAGO EV Technology"
                  className="rounded-xl shadow-2xl w-full"
                />
                <div className="absolute top-4 left-4 bg-theme-orange text-white px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 inline mr-2" />
                  Premium Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DENAGO Series Overview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                DENAGO Vehicle Series
              </h2>
              <p className="text-xl text-gray-600">
                Discover the complete lineup of DENAGO electric vehicles available in Monroe County
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {denagoSeries.map((series, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-64">
                    <img 
                      src={series.image} 
                      alt={series.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-theme-primary text-white">
                        {series.vehicles.length} Model{series.vehicles.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{series.title}</CardTitle>
                    <p className="text-gray-600">{series.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {series.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Zap className="w-4 h-4 text-theme-orange mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {series.vehicles.map((vehicle, idx) => (
                        <Link key={idx} href={`/vehicles/${vehicle.toLowerCase().replace(/\s+/g, '-')}`}>
                          <div className="text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded hover:bg-theme-orange hover:text-white transition-colors cursor-pointer">
                            {vehicle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Complete DENAGO Vehicle Lineup */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Complete DENAGO Vehicle Lineup
              </h2>
              <p className="text-xl text-gray-600">
                Explore all 6 DENAGO electric vehicle models available in Atlantic County
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allDenagoVehicles.map((vehicle, index) => (
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
                        <span className="font-semibold">Drive:</span> 2x4
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-theme-orange mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link href={`/vehicles/${vehicle.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                          View Details
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="w-full border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Can't decide? Compare all DENAGO models or schedule a test drive to experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/inventory">
                  <Button size="lg" className="bg-theme-primary hover:bg-blue-800 text-white">
                    Compare All Models
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-theme-orange text-theme-orange hover:bg-theme-orange hover:text-white">
                    Schedule Test Drive
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose DENAGO */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose DENAGO in Luzerne County?
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built to Last</h3>
                <p className="text-gray-600">
                  DENAGO vehicles are engineered for Pennsylvania's challenging terrain with 
                  military-grade components and weather-resistant construction.
                </p>
              </div>

              <div className="text-center">
                <Zap className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                <p className="text-gray-600">
                  Cutting-edge all-wheel drive systems and smart battery management deliver 
                  superior performance and extended range for your adventures.
                </p>
              </div>

              <div className="text-center">
                <MapPin className="w-16 h-16 text-theme-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Service</h3>
                <p className="text-gray-600">
                  Expert DENAGO service and support right here in Luzerne County with 
                  genuine parts and factory-trained technicians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience DENAGO?
            </h2>
            <p className="text-xl mb-8">
              Contact Lackawanna County Golf Carts today to schedule a test drive or learn more 
              about DENAGO's revolutionary electric vehicle technology.
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