import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { GolfCart } from "@shared/schema";

export default function InventorySection() {
  const { data: carts, isLoading } = useQuery<GolfCart[]>({
    queryKey: ["/api/golf-carts/featured"],
  });

  if (isLoading) {
    return (
      <section id="inventory" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "new":
        return "secondary";
      case "custom":
        return "default";
      case "used":
        return "outline";
      default:
        return "outline";
    }
  };

  const getBadgeText = (category: string) => {
    switch (category) {
      case "new":
        return "NEW";
      case "custom":
        return "CUSTOM";
      case "used":
        return "USED";
      default:
        return category.toUpperCase();
    }
  };

  return (
    <section id="inventory" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Featured Golf Carts
          </h2>
          <p className="text-lg text-gray-600">
            Browse our selection of new and pre-owned golf carts from top manufacturers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {carts?.map((cart) => (
            <div
              key={cart.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={cart.imageUrl}
                alt={cart.title}
                className="w-full h-48 object-cover"
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
                  <Button className="bg-accent hover:bg-accent/90">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/inventory">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Inventory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
