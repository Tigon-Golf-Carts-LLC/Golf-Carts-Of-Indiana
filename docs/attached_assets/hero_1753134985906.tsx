import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, Star, Award, Users } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586618842057-b2f86c2e2241?w=1920&h=1080&fit=crop')",
        }}
      ></div>

      <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4 py-20">
        {/* Main Hero Content */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            New Jersey's Premier<br />
            <span className="text-secondary">Golf Cart Dealership</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            New & Used Golf Carts • Professional Service & Repairs • Custom Builds • 0% Financing Available
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 mr-1" />
            <span className="font-semibold">5.0 Star Rating</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 text-secondary mr-1" />
            <span className="font-semibold">15+ Years Experience</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-secondary mr-1" />
            <span className="font-semibold">500+ Happy Customers</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-lg"
            onClick={() => scrollToSection("inventory")}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Shop Our Inventory
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-neutral-dark px-8 py-4 text-lg font-semibold shadow-lg"
            onClick={() => window.open("tel:1-844-844-6638")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call 1-844-844-6638
          </Button>
        </div>

        {/* Special Offers Bar */}
        <div className="bg-accent/90 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Special Offers This Month</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">0% APR Financing</h4>
              <p className="text-sm">Available on all new golf carts with approved credit</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Trade-In Bonus</h4>
              <p className="text-sm">Get extra value for your old golf cart</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Free Delivery</h4>
              <p className="text-sm">Within 50 miles of our New Jersey location</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
