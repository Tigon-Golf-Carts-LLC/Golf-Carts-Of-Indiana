import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, Award, Users, MapPin, Phone } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BrandsSection from "@/components/brands-section";
import SEOHead from "@/components/seo-head";
import { createSlug } from "@/lib/utils";
import type { GolfCart } from "@shared/schema";

export default function Home() {
  const { data: golfCarts, isLoading } = useQuery<GolfCart[]>({
    queryKey: ["/api/golf-carts/featured"],
  });

  const featuredCarts = golfCarts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-blue-400 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                New Jersey's Premier Golf Cart Dealerships
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover our extensive selection of new electric golf carts from Evolution and Denago 
                with professional services. Serving Atlantic County, Cape May County, Middlesex County, Monmouth County, Ocean County and all of New Jersey State.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link href="/inventory">View Inventory</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/D6-XT6-4wd-color-PORTIMAO-BLUE.png"
                alt="NJ Golf Carts - Evolution D6 XT6 4WD Golf Cart"
                className="rounded-lg mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Why Choose NJ Golf Carts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a dealership - we're your partner in golf cart ownership 
              with comprehensive services and unmatched expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">
                  Top-rated brands including Yamaha, Club Car, EZGO, and Evolution 
                  with rigorous quality standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
                <p className="text-gray-600">
                  Professional maintenance, repairs, and customization by certified technicians.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">0% Financing</h3>
                <p className="text-gray-600">
                  Flexible payment options with 0% financing available on select models.
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
                  Electric golf carts for sustainable, quiet, and efficient transportation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSection />

      {/* Featured Inventory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">Featured Golf Carts</h2>
            <p className="text-xl text-gray-600">
              Check out some of our most popular models
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="aspect-square bg-gray-200"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCarts.map((cart) => (
                <Card key={cart.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={cart.imageUrl}
                    alt={cart.title}
                    className="w-full aspect-square object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-neutral-dark">
                        {cart.title}
                      </h3>
                      <Badge variant="secondary">
                        {cart.category.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{cart.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        ${cart.price.toLocaleString()}
                      </span>
                      <Button asChild className="bg-accent hover:bg-accent/90">
                        <Link href={`/vehicle/${createSlug(cart.title)}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/inventory">View Full Inventory</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                About NJ Golf Carts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of experience in the golf cart industry, we've built our reputation 
                on providing exceptional service and quality products to customers throughout New Jersey.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="w-96 h-96 mx-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563360.0521476464!2d-76.04353399667406!3d40.06564996257287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1752521852566!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-xl"
                  title="New Jersey Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-dark mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today for personalized service and expert advice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
            {/* Ocean View Location */}
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ocean View</h3>
                <p className="text-gray-600 mb-2">101 NJ-50, Ocean View, NJ 08230</p>
                <a href="tel:609-840-0404" className="text-primary font-semibold block mb-4">
                  609-840-0404
                </a>
                <div className="space-y-1">
                  <a href="https://www.google.com/maps?cid=6446924254429489274" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Google Maps</a>
                  <a href="https://www.facebook.com/TigonGolfCartsOceanView/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook</a>
                  <a href="https://tigongolfcarts.com/ocean-view/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                </div>
              </CardContent>
            </Card>
            
            {/* Bayville Location */}
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bayville</h3>
                <p className="text-gray-600 mb-2">155 Atlantic City Blvd, Bayville, NJ 08721</p>
                <a href="tel:732-908-7166" className="text-primary font-semibold block mb-4">
                  (732) 908-7166
                </a>
                <div className="space-y-1">
                  <a href="https://www.google.com/maps?cid=16812778070531162551" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Google Maps</a>
                  <a href="https://www.facebook.com/TigonGolfCartsBayville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook</a>
                  <a href="https://tigongolfcarts.com/bayville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                </div>
              </CardContent>
            </Card>
            
            {/* Waretown Location */}
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Waretown</h3>
                <p className="text-gray-600 mb-2">526 US-9, Waretown, NJ 08758</p>
                <a href="tel:732-998-8146" className="text-primary font-semibold block mb-4">
                  (732) 998-8146
                </a>
                <div className="space-y-1">
                  <a href="https://www.google.com/maps?cid=11595558320608622005" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Google Maps</a>
                  <a href="https://www.facebook.com/TigonGolfCartsWaretown/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook</a>
                  <a href="https://tigongolfcarts.com/waretown/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                </div>
              </CardContent>
            </Card>
            
            {/* Pleasantville Location */}
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pleasantville</h3>
                <p className="text-gray-600 mb-2">7000 Black Horse Pike, Pleasantville, NJ 08232</p>
                <a href="tel:640-444-3094" className="text-primary font-semibold block mb-4">
                  640-444-3094
                </a>
                <div className="space-y-1">
                  <a href="https://www.google.com/maps?cid=7635149767591436869" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Google Maps</a>
                  <a href="https://www.facebook.com/TigonGolfCartPleasantville" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Facebook</a>
                  <a href="https://tigongolfcarts.com/pleasantville/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                </div>
              </CardContent>
            </Card>
            
            {/* New Jersey Main Location */}
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">New Jersey</h3>
                <p className="text-gray-600 mb-2">New Jersey</p>
                <a href="tel:1-844-844-6638" className="text-primary font-semibold block mb-4">
                  1-844-844-6638
                </a>
                <div className="space-y-1">
                  <a href="https://www.google.com/maps?cid=15178469885958324473" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Google Maps</a>
                  <a href="https://www.youtube.com/@TIGONGolfCartsNewJersey" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">YouTube</a>
                  <a href="https://tigongolfcarts.com/new-jersey/" target="_blank" rel="noopener noreferrer" className="block text-sm text-primary hover:underline">Website</a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center bg-gray-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:1-844-844-6638" className="text-primary font-semibold text-xl">
                1-844-844-6638
              </a>
              <span className="text-gray-400 hidden sm:block">|</span>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
