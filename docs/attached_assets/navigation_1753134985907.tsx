import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Inventory" },
    { href: "/rentals", label: "Rentals" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/nj-golf-carts-logo.png"
              alt="New Jersey Golf Carts Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">
                NEW JERSEY<br />
                GOLF CART DEALERSHIPS
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-primary"
                    : "text-neutral-dark hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Call Now</p>
              <a href="tel:1-844-844-6638" className="text-primary font-semibold">
                1-844-844-6638
              </a>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 font-medium ${
                  location === item.href
                    ? "text-primary"
                    : "text-neutral-dark hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <a href="tel:1-844-844-6638" className="block py-2 text-primary font-semibold">
                <Phone className="inline w-4 h-4 mr-2" />
                1-844-844-6638
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
