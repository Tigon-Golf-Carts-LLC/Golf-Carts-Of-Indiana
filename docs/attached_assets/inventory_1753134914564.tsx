import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createSlug } from "@/lib/utils";
import type { GolfCart } from "@shared/schema";

export default function Inventory() {
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    document.title = "Golf Cart Inventory - NJ Golf Carts";
  }, []);

  const { data: carts, isLoading } = useQuery<GolfCart[]>({
    queryKey: ["/api/golf-carts", category],
    queryFn: async () => {
      const url = category && category !== "all" ? `/api/golf-carts?category=${category}` : "/api/golf-carts";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch golf carts");
      }
      return response.json();
    },
  });

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "new":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getBadgeText = (category: string) => {
    switch (category) {
      case "new":
        return "NEW";
      default:
        return category.toUpperCase();
    }
  };

  return (
    <div>
      <SEOHead
        title="Golf Cart Inventory - New Electric Golf Carts | NJ Golf Carts"
        description="Browse our complete inventory of new electric golf carts from Evolution and Denago. Premium quality golf carts with expert service in New Jersey."
        keywords="golf cart inventory, new golf carts, electric golf carts, Evolution, Denago, New Jersey"
      />
      <Navigation />
      <div className="pt-20 pb-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-4">
              Golf Cart Inventory
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our complete selection of new golf carts from Evolution and Denago
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="new">New Golf Carts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carts?.map((cart) => (
                <div
                  key={cart.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={cart.imageUrl}
                    alt={cart.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-neutral-dark">
                        {cart.title}
                      </h3>
                      <Badge variant={getBadgeVariant(cart.category)}>
                        {getBadgeText(cart.category)}
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
                  </div>
                </div>
              ))}
            </div>
          )}

          {carts && carts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No golf carts found in this category.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
