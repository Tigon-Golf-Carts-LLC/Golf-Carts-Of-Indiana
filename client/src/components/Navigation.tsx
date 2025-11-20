import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImage from "@assets/Notre Dame Golf Carts_1763645467658.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/inventory", label: "Inventory" },
    { path: "/rentals", label: "Rentals" },
    { path: "/services", label: "Services" },
    { path: "/showroom", label: "Showroom" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="rounded-lg">
              <img 
                src={logoImage} 
                alt="Notre Dame Golf Carts Logo" 
                className="h-20 w-20"
              />
            </div>
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-xl font-bold text-theme-primary">NOTRE DAME</div>
                <div className="text-xl font-bold text-theme-primary -mt-1">GOLF CARTS</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* About Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="w-full">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/eco-impact" className="w-full">
                      Eco-Impact Calculator
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center space-x-4">
              <a href="tel:1-844-844-6638">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                  Call Now 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-gray-900 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Mobile About Section */}
                  <div className="border-t pt-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      About
                    </div>
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/eco-impact"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Eco-Impact Calculator
                    </Link>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <a href="tel:1-844-844-6638">
                      <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full">
                        Call Now 1-844-844-6638
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}