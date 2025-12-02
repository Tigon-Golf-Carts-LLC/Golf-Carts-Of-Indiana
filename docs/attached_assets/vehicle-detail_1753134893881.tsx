import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Wrench, Percent, Leaf, Phone, ArrowLeft, Zap, Shield, Gauge, Users, ExternalLink } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { getDealershipSourceUrl } from "@/lib/utils";
import type { GolfCart } from "@shared/schema";

export default function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>();

  const { data: golfCart, isLoading, error } = useQuery<GolfCart>({
    queryKey: ["/api/golf-carts/slug", slug],
    queryFn: () => fetch(`/api/golf-carts/slug/${slug}`).then(res => res.json()),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !golfCart) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Vehicle Not Found</h1>
            <p className="text-gray-600 mb-8">The vehicle you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link href="/inventory">Back to Inventory</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isEvolution = golfCart.title.toLowerCase().includes("evolution");
  const isDenago = golfCart.title.toLowerCase().includes("denago");

  const getVehicleSpecs = () => {
    if (isEvolution) {
      if (golfCart.title.includes("D6")) {
        const getSeating = () => {
          if (golfCart.title.includes("GT4") || golfCart.title.includes("XT4")) return "4 passengers";
          if (golfCart.title.includes("GT6") || golfCart.title.includes("XT6")) return "6 passengers";
          return "4 passengers";
        };
        return {
          topSpeed: "19 mph",
          range: "30-45 miles",
          chargingTime: "6-8 hours",
          motorType: "AC Electric Motor",
          length: "95 inches",
          width: "48 inches",
          height: "72 inches",
          wheelbase: "66 inches",
          seating: getSeating(),
          payload: "800 lbs",
          groundClearance: "6 inches",
          batteryType: "Lithium Ion"
        };
      } else if (golfCart.title.includes("D5")) {
        const getSeating = () => {
          if (golfCart.title.includes("6")) return "6 passengers";
          if (golfCart.title.includes("4+2")) return "6 passengers (4+2)";
          if (golfCart.title.includes("2+2")) return "4 passengers (2+2)";
          if (golfCart.title.includes("4")) return "4 passengers";
          return "4 passengers";
        };
        return {
          topSpeed: "19 mph",
          range: "30-45 miles",
          chargingTime: "6-8 hours",
          motorType: "AC Electric Motor",
          length: "95 inches",
          width: "48 inches",
          height: "72 inches",
          wheelbase: "66 inches",
          seating: getSeating(),
          payload: "800 lbs",
          groundClearance: "6 inches",
          batteryType: "Lead Acid"
        };
      } else if (golfCart.title.includes("Classic")) {
        return {
          topSpeed: "15 mph",
          range: "25-35 miles",
          chargingTime: "8-10 hours",
          motorType: "DC Electric Motor",
          length: "94 inches",
          width: "47 inches",
          height: "70 inches",
          wheelbase: "65 inches",
          seating: golfCart.title.includes("4") ? "4 passengers" : "2 passengers",
          payload: "600 lbs",
          groundClearance: "5 inches",
          batteryType: "Lead Acid"
        };
      } else {
        // Handle other Evolution vehicles (Carrier, Forester, Turfman)
        const getSeating = () => {
          if (golfCart.title.includes("Carrier 6") || golfCart.title.includes("Forester 6")) return "6 passengers";
          if (golfCart.title.includes("Carrier 8")) return "8 passengers";
          if (golfCart.title.includes("Forester 4")) return "4 passengers";
          if (golfCart.title.includes("Turfman")) return "2 passengers";
          return "4 passengers";
        };
        return {
          topSpeed: "19 mph",
          range: "30-45 miles",
          chargingTime: "6-8 hours",
          motorType: "AC Electric Motor",
          length: "95 inches",
          width: "48 inches",
          height: "72 inches",
          wheelbase: "66 inches",
          seating: getSeating(),
          payload: "800 lbs",
          groundClearance: "6 inches",
          batteryType: "Lead Acid"
        };
      }
    } else if (isDenago) {
      const getSeating = () => {
        if (golfCart.title.includes("XXL")) return "8 passengers";
        if (golfCart.title.includes("6")) return "6 passengers";
        if (golfCart.title.includes("4")) return "4 passengers";
        if (golfCart.title.includes("City") || golfCart.title.includes("Nomad")) return "6 passengers";
        return "2-4 passengers";
      };
      return {
        topSpeed: "25 mph",
        range: "40-60 miles",
        chargingTime: "6-8 hours",
        motorType: "AC Electric Motor",
        length: "95 inches",
        width: "48 inches",
        height: "74 inches",
        wheelbase: "68 inches",
        seating: getSeating(),
        payload: "1200 lbs",
        groundClearance: "8 inches",
        batteryType: "Lithium Ion"
      };
    }
    
    return {
      topSpeed: "19 mph",
      range: "30-45 miles",
      chargingTime: "6-8 hours",
      motorType: "Electric Motor",
      length: "94 inches",
      width: "47 inches",
      height: "70 inches",
      wheelbase: "65 inches",
      seating: "4 passengers",
      payload: "800 lbs",
      groundClearance: "6 inches",
      batteryType: "Lead Acid"
    };
  };

  const specs = getVehicleSpecs();

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${golfCart.title} - Electric Golf Cart | NJ Golf Carts`}
        description={`${golfCart.title} - ${golfCart.description} Starting at $${golfCart.price.toLocaleString()}. Premium electric golf cart with authentic specifications and expert service in New Jersey.`}
        keywords={`${golfCart.title}, electric golf cart, New Jersey, ${isEvolution ? 'EVOLUTION' : 'DENAGO'}, golf cart sales`}
        vehicleImage={golfCart.image}
        ogTitle={`${golfCart.title} - Electric Golf Cart for Sale`}
        ogDescription={`${golfCart.title} starting at $${golfCart.price.toLocaleString()}. ${golfCart.description} Contact NJ Golf Carts for pricing and availability.`}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-primary">Inventory</Link>
            <span>/</span>
            <span className="text-gray-900">{golfCart.title}</span>
          </div>
        </div>
      </section>

      {/* Vehicle Hero Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="mb-6">
            <Link href="/inventory">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Inventory
            </Link>
          </Button>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <img
                src={golfCart.imageUrl}
                alt={golfCart.title}
                className="w-full aspect-square object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {golfCart.category.toUpperCase()}
                </Badge>
                <h1 className="text-3xl font-bold text-neutral-dark mb-4">
                  {golfCart.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {golfCart.description}
                </p>
                <div className="text-3xl font-bold text-primary mb-6">
                  ${golfCart.price.toLocaleString()}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm">{specs.topSpeed}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="w-5 h-5 text-primary" />
                  <span className="text-sm">{specs.range}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm">{specs.seating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">{specs.batteryType}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <Link href="/contact">Get Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href="tel:1-844-844-6638">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                {getDealershipSourceUrl(golfCart.title) && (
                  <Button asChild size="lg" variant="secondary" className="w-full">
                    <a href={getDealershipSourceUrl(golfCart.title)!} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Dealership Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Electric Power</h3>
                <p className="text-gray-600">
                  Eco-friendly electric motor for quiet, efficient operation
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Advanced safety features and reliable braking systems
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Low Maintenance</h3>
                <p className="text-gray-600">
                  Minimal maintenance requirements with long-lasting components
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Zero emissions for environmentally conscious transportation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Specifications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Top Speed:</span>
                    <span className="font-medium">{specs.topSpeed}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <span className="font-medium">{specs.range}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Charging Time:</span>
                    <span className="font-medium">{specs.chargingTime}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Motor Type:</span>
                    <span className="font-medium">{specs.motorType}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Battery Type:</span>
                    <span className="font-medium">{specs.batteryType}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Dimensions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Length:</span>
                    <span className="font-medium">{specs.length}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Width:</span>
                    <span className="font-medium">{specs.width}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Height:</span>
                    <span className="font-medium">{specs.height}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Wheelbase:</span>
                    <span className="font-medium">{specs.wheelbase}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Ground Clearance:</span>
                    <span className="font-medium">{specs.groundClearance}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Capacity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Seating:</span>
                    <span className="font-medium">{specs.seating}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Payload:</span>
                    <span className="font-medium">{specs.payload}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">{golfCart.category}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Availability:</span>
                    <span className="font-medium text-green-600">In Stock</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Drive Your {golfCart.title}?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a personalized quote and test drive appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
              <a href="tel:1-844-844-6638">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}