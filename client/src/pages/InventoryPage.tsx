import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Vehicle } from "@shared/schema";
import SchemaMarkup, { 
  generateBreadcrumbSchema,
  generateOfferCatalogSchema
} from "@/components/SchemaMarkup";
import SEOHead from "@/components/SEOHead";
import AllSchemas from "@/components/schema/AllSchemas";
import { getHeroBackgroundStyle } from "@/utils/backgroundImages";
import { generateSEOMetadata } from "@/utils/seoUtils";


export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  // Generate SEO metadata that matches the H1 on this page
  const seoData = generateSEOMetadata({
    pageTitle: "Golf Cart Inventory",
    baseDescription: "Browse our extensive collection of premium electric golf carts from DENAGO and EVOLUTION. Quality vehicles available in Indiana with expert sales support and competitive pricing.",
    pageType: "general",
    canonicalPath: "/inventory",
    keywords: ["golf cart inventory", "electric vehicles for sale", "DENAGO EVOLUTION models", "Indiana golf cart dealer"],
    heroBackgroundSeed: "inventory"
  });

  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles", selectedBrand, selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedBrand) params.append("brand", selectedBrand);
      if (selectedCategory) params.append("category", selectedCategory);
      
      const response = await fetch(`/api/vehicles?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Vehicles</h1>
          <p className="text-gray-600">
            Unable to load vehicle inventory. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://golfcartsofindiana.com" },
    { name: "Inventory", url: "https://golfcartsofindiana.com/inventory" }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        ogImageWidth={seoData.ogImageWidth}
        ogImageHeight={seoData.ogImageHeight}
        ogType={seoData.ogType}
        heroBackgroundSeed={seoData.heroBackgroundSeed}
        pageType={seoData.pageType}
      />
      <AllSchemas 
        pageType="inventory" 
        pageData={{
          title: "Golf Cart Inventory - Golf Carts Of Indiana",
          description: "Browse our extensive inventory of new electric golf carts from DENAGO and Evolution. Premium quality golf carts available in Indiana with expert service.",
          url: "https://golfcartsofindiana.com/inventory",
          breadcrumbs: breadcrumbItems,
          collectionItems: vehicles?.map(vehicle => ({
            name: vehicle.name,
            url: `https://golfcartsofindiana.com/vehicle/${vehicle.id}`,
            description: `${vehicle.brand} ${vehicle.name} electric golf cart`,
            image: vehicle.images[0]
          })) || [],
          faqs: [
            {
              question: "What brands of golf carts do you carry?",
              answer: "We carry premium electric golf carts from DENAGO and EVOLUTION, featuring the latest technology and reliable performance."
            },
            {
              question: "Do you have financing options available?",
              answer: "Yes, we offer competitive financing options with flexible terms to help you purchase your ideal golf cart."
            },
            {
              question: "What is the warranty on new golf carts?",
              answer: "All new golf carts come with manufacturer warranty coverage. Specific terms vary by brand and model."
            },
            {
              question: "Can I schedule a test drive?",
              answer: "Absolutely! Contact us to schedule a test drive and experience any golf cart in our inventory."
            }
          ],
          reviews: [
            {
              author: "Jennifer Martinez",
              reviewBody: "Great selection of golf carts with knowledgeable staff. Found exactly what I was looking for at a competitive price.",
              reviewRating: 5,
              datePublished: "2025-01-18",
              headline: "Excellent selection and service"
            },
            {
              author: "Robert Chen",
              reviewBody: "The inventory is well-maintained and the buying process was smooth. Highly recommend for anyone looking for quality golf carts.",
              reviewRating: 5,
              datePublished: "2025-01-21",
              headline: "Quality inventory and smooth process"
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={getHeroBackgroundStyle("inventory")}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Cart Inventory
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our extensive collection of premium electric golf carts from DENAGO and EVOLUTION. 
            Find the perfect vehicle for your needs with our advanced filtering options.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Available Vehicles</h2>
        
        <VehicleFilters
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          onBrandChange={setSelectedBrand}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : vehicles && vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Vehicles Found</h2>
          <p className="text-gray-500">
            No vehicles match your current filter criteria. Try adjusting your filters or browse all vehicles.
          </p>
        </div>
      )}
      </div>

      {/* Can't Find What You're Looking For Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Our team can help you find the perfect golf cart or place a custom order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto" onClick={() => window.open("tel:1-844-844-6638")}>
              Call 1-844-844-6638
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
