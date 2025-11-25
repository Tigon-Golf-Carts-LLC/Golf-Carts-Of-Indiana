import { useEffect } from "react";

interface NavigationItem {
  name: string;
  url: string;
  description?: string;
}

interface SiteNavigationSchemaProps {
  navigationItems?: NavigationItem[];
}

export default function SiteNavigationSchema({ 
  navigationItems = [
    { name: "Home", url: "https://golfcartsofindiana.com/", description: "Golf Carts Of Indiana homepage" },
    { name: "Inventory", url: "https://golfcartsofindiana.com/inventory", description: "Browse our golf cart inventory" },
    { name: "Rentals", url: "https://golfcartsofindiana.com/rentals", description: "Golf cart rental services" },
    { name: "Services", url: "https://golfcartsofindiana.com/services", description: "Golf cart maintenance and repair services" },
    { name: "Showroom", url: "https://golfcartsofindiana.com/showroom", description: "Visit our showroom locations" },
    { name: "About", url: "https://golfcartsofindiana.com/about", description: "About Golf Carts Of Indiana" },
    { name: "Contact", url: "https://golfcartsofindiana.com/contact", description: "Contact information and locations" }
  ]
}: SiteNavigationSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": "Main Navigation",
      "about": {
        "@type": "WebSite",
        "name": "Golf Carts Of Indiana",
        "url": "https://golfcartsofindiana.com"
      },
      "hasPart": navigationItems.map((item, index) => ({
        "@type": "WebPageElement",
        "name": item.name,
        "description": item.description,
        "url": item.url,
        "position": index + 1
      }))
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-navigation]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-navigation", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-navigation]');
      if (script) {
        script.remove();
      }
    };
  }, [navigationItems]);

  return null;
}