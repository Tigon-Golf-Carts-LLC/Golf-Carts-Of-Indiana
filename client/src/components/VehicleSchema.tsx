import { useEffect } from "react";

interface VehicleSchemaProps {
  name: string;
  brand: string;
  image: string;
  description: string;
  url: string;
  price?: string;
  features?: string[];
}

export default function VehicleSchema({ 
  name, 
  brand, 
  image, 
  description, 
  url, 
  price = "Contact for pricing",
  features = []
}: VehicleSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "description": description,
      "image": `https://notredamegolfcarts.com/attached_assets/${image}`,
      "url": url,
      "category": "Golf Cart",
      "manufacturer": {
        "@type": "Organization",
        "name": brand
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": price,
        "priceCurrency": "USD",
        "seller": {
          "@type": "Organization",
          "name": "Notredame Golf Carts",
          "telephone": "1-844-844-6638",
          "email": "info@notredamegolfcarts.com",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "IN",
            "addressCountry": "US"
          }
        }
      },
      "additionalProperty": features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Feature",
        "value": feature
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "23"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-vehicle]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-vehicle", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-vehicle]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [name, brand, image, description, url, price, features]);

  return null;
}