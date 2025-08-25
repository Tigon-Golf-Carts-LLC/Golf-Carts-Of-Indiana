import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Star, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import type { Vehicle } from "@shared/schema";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function NewInventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch('/api/vehicles');
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicles: ${response.status}`);
      }
      return response.json();
    },
    retry: 3,
    refetchOnWindowFocus: false,
  });

  const filteredVehicles = vehicles?.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brandFilter === "all" || vehicle.brand.toLowerCase() === brandFilter.toLowerCase();
    const matchesCategory = categoryFilter === "all" || vehicle.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesPrice = priceFilter === "all" || 
                        (priceFilter === "under-15000" && vehicle.price < 15000) ||
                        (priceFilter === "15000-25000" && vehicle.price >= 15000 && vehicle.price <= 25000) ||
                        (priceFilter === "over-25000" && vehicle.price > 25000);
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  return (
    <>
      <SEOHead 
        title="Golf Cart Inventory - New & Used | Monroe County Golf Carts"
        description="Browse our extensive inventory of new and used golf carts from top brands like DENAGO and EVOLUTION. Find the perfect electric vehicle for your needs in Monroe County, PA."
        keywords="golf cart inventory, new golf carts, used golf carts, DENAGO, EVOLUTION, Monroe County golf carts"
        canonicalUrl="https://monroegolfcarts.com/inventory"
        ogImage="/attached_assets/a-photograph-of-a-bright-modern-golf-car_iofSws5mRiCxoMwQwuXw4A_Yv-NWBaTQQ6ofRhClJiiIw_1753454023367.png"
        ogType="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("inventory")}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Golf Cart Inventory
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover our extensive selection of premium golf carts from leading brands. 
                New arrivals, certified pre-owned, and custom builds available.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search golf carts..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="denago">DENAGO</SelectItem>
                  <SelectItem value="evolution">EVOLUTION</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ranger">Ranger Series</SelectItem>
                  <SelectItem value="maverick">Maverick Series</SelectItem>
                  <SelectItem value="forester">Forester Series</SelectItem>
                  <SelectItem value="turfman">Turfman Series</SelectItem>
                  <SelectItem value="rover">Rover Series</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-15000">Under $15,000</SelectItem>
                  <SelectItem value="15000-25000">$15,000 - $25,000</SelectItem>
                  <SelectItem value="over-25000">Over $25,000</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-theme-orange hover:bg-orange-600">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Golf Carts ({filteredVehicles?.length || 0})
              </h2>
            </div>

            {error && (
              <div className="text-center py-8">
                <p className="text-red-600">Error loading vehicles: {error.message}</p>
              </div>
            )}
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : !filteredVehicles || filteredVehicles.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No vehicles match your current filters.</p>
                {vehicles && vehicles.length > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Showing 0 of {vehicles.length} total vehicles
                  </p>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles?.map((vehicle) => (
                  <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white border border-gray-200">
                    <div className="relative">
                      <img
                        src={vehicle.images[0] || "/placeholder-golf-cart.jpg"}
                        alt={vehicle.name}
                        className="w-full h-56 object-cover"
                      />
                      {vehicle.isNew && (
                        <Badge className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          NEW
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {vehicle.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          ${vehicle.price.toLocaleString()}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium"
                          asChild
                        >
                          <Link href={`/vehicles/${vehicle.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredVehicles?.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setBrandFilter("all");
                  setCategoryFilter("all");
                  setPriceFilter("all");
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8">
              Our team can help you find the perfect golf cart or place a custom order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Our Team
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Speak with our golf cart specialists</p>
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
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Montgomery County Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Delivery and pickup available throughout Montgomery County and surrounding areas.
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