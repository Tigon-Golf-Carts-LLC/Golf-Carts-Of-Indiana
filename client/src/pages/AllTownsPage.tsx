import { Link } from "wouter";
import { INDIANA_MUNICIPALITIES, getUniqueCounties, getMunicipalitiesByCounty } from "@/data/indianaTowns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";

export default function AllTownsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  
  const counties = getUniqueCounties();
  
  const filteredMunicipalities = INDIANA_MUNICIPALITIES.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         m.county.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCounty = !selectedCounty || m.county === selectedCounty;
    return matchesSearch && matchesCounty;
  });

  const groupedByCounty = selectedCounty 
    ? { [selectedCounty]: getMunicipalitiesByCounty(selectedCounty) }
    : counties.reduce((acc, county) => {
        const towns = getMunicipalitiesByCounty(county).filter(m => 
          m.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (towns.length > 0) {
          acc[county] = towns;
        }
        return acc;
      }, {} as Record<string, typeof INDIANA_MUNICIPALITIES>);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="All Indiana Towns | Golf Carts Of Indiana"
        description="Browse all Indiana towns and cities served by Golf Carts Of Indiana. Find golf cart sales, rentals, and service in your community."
        keywords="Indiana towns, Indiana cities, golf cart service areas, Indiana golf carts"
        canonicalUrl="https://golfcartsofindiana.com/towns"
      />

      <section 
        className="bg-gradient-to-br from-theme-primary to-blue-800 text-white py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={getHeroBackgroundStyle('all-towns')}
      >
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-theme-orange text-white">
            {INDIANA_MUNICIPALITIES.length} Communities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All Indiana Towns & Cities
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Golf Carts Of Indiana proudly serves every community across the state. 
            Find your town and discover our local golf cart services.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search towns or counties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-towns"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-gray-600">Filter by county:</span>
              <Button
                variant={selectedCounty === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCounty(null)}
                data-testid="btn-filter-all"
              >
                All
              </Button>
              <select
                value={selectedCounty || ""}
                onChange={(e) => setSelectedCounty(e.target.value || null)}
                className="border rounded-md px-3 py-1 text-sm"
                data-testid="select-county"
              >
                <option value="">Select County</option>
                {counties.map(county => (
                  <option key={county} value={county}>{county} County</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredMunicipalities.length} of {INDIANA_MUNICIPALITIES.length} towns
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {Object.keys(groupedByCounty).sort().map(county => (
            <div key={county} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-theme-orange" />
                {county} County
                <Badge variant="secondary" className="ml-2">
                  {groupedByCounty[county].length} towns
                </Badge>
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {groupedByCounty[county].map(municipality => (
                  <Link 
                    key={municipality.slug} 
                    href={municipality.url}
                    className="bg-white border hover:border-theme-orange hover:shadow-md p-4 rounded-lg transition-all group"
                    data-testid={`link-town-${municipality.slug}`}
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-theme-orange transition-colors">
                      {municipality.name}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {municipality.type}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          {filteredMunicipalities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No towns found matching your search.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchTerm(""); setSelectedCounty(null); }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See Your Town?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We serve all of Indiana! Contact us to learn about golf cart services in your area.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
