import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import classicImage from "@assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function EvolutionClassic4Plus() {
  return (
    <>
      <SEOHead 
        title="EVOLUTION® CLASSIC 4 PLUS - Premium Golf Cart | Ocean County Golf Carts"
        description="Experience the EVOLUTION® CLASSIC 4 PLUS with timeless design and modern electric performance. Classic styling meets contemporary technology."
        keywords="EVOLUTION CLASSIC 4 PLUS, classic golf cart, premium electric vehicle, traditional styling, EVOLUTION dealer Ocean County"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="text-theme-primary hover:text-blue-800">Home</a>
              <span>→</span>
              <a href="/inventory" className="text-theme-primary hover:text-blue-800">Vehicles</a>
              <span>→</span>
              <a href="/evolution" className="text-theme-primary hover:text-blue-800">EVOLUTION</a>
              <span>→</span>
              <span className="text-gray-900">CLASSIC 4 PLUS</span>
            </div>
          </div>
        </nav>

        {/* Vehicle Hero Section */}
        <section className="relative py-20 px-4 bg-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("vehicle-classic")}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <Badge className="bg-theme-primary text-white px-4 py-2 text-sm font-semibold">
                    EVOLUTION®
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  CLASSIC 4 PLUS
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Experience the EVOLUTION® CLASSIC 4 PLUS with timeless design and modern electric performance. Where classic styling meets contemporary technology and comfort.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Classic Design</div>
                    <div className="text-gray-900">Timeless Styling</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">35-45 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Comfort</div>
                    <div className="text-gray-900">Premium Seating</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Seating</div>
                    <div className="text-gray-900">4 Passengers</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-theme-primary hover:bg-theme-primary text-white">
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Schedule Test Drive
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={classicImage} 
                    alt="EVOLUTION® CLASSIC 4 PLUS - Premium classic golf cart" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="relative py-16 px-4 bg-gray-50 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(249, 250, 251, 0.9)), url('/attached_assets/a-photograph-of-a-bright-and-modern-golf_ygMA1CzxR2i0uIyVxAfxjQ_ZqW2atbRQBmR7FYMnoTMSA_1753729066546.png')"}}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-theme-primary">Classic Features</h2>
              <p className="text-xl text-gray-600">Traditional elegance with modern performance</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-16 h-16 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Electric Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Modern electric motor technology for smooth, quiet, and efficient operation.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Reliable Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Proven safety features and reliable construction for peace of mind driving.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Premium Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">High-quality seating and smooth suspension for comfortable rides.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Classic Style</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Timeless design that never goes out of style with quality craftsmanship.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h2 className="text-4xl font-bold text-center mb-12 text-theme-primary">Technical Specifications</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Gauge className="w-6 h-6" />
                    Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Top Speed:</span>
                      <span>19 mph</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Range:</span>
                      <span>35-45 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging Time:</span>
                      <span>8-10 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Motor Type:</span>
                      <span>48V Electric Motor</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Car className="w-6 h-6" />
                    Dimensions
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Length:</span>
                      <span>110 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Width:</span>
                      <span>48 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Height:</span>
                      <span>72 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Wheelbase:</span>
                      <span>79 inches</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Capacity & Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Seating Capacity:</span>
                      <span>4 Adults</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Payload Capacity:</span>
                      <span>800 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Battery:</span>
                      <span>48V Deep Cycle</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Body Style:</span>
                      <span>Classic Traditional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the EVOLUTION® CLASSIC 4 PLUS?
            </h2>
            <p className="text-xl mb-8">
              Contact Bucks County Golf Carts today for pricing, availability, and to schedule a test drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-theme-primary">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-primary mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Speak with our EVOLUTION specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
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
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Bucks County Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Delivery and pickup available throughout Bucks County, Indiana and surrounding areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}