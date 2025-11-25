import { useEffect } from "react";

interface OfferSchemaProps {
  itemOffered: {
    name: string;
    type: "Product" | "Service";
    description: string;
    category?: string;
  };
  price?: string;
  priceCurrency?: string;
  availability?: string;
  validFrom?: string;
  validThrough?: string;
  seller?: {
    name: string;
    telephone?: string;
    email?: string;
  };
  eligibleRegion?: string;
  priceSpecification?: {
    type: string;
    price: string;
    priceCurrency: string;
    description?: string;
  }[];
}

export default function OfferSchema({
  itemOffered,
  price = "Contact for pricing",
  priceCurrency = "USD",
  availability = "https://schema.org/InStock",
  validFrom,
  validThrough,
  seller = {
    name: "Golf Carts Of Indiana",
    telephone: "1-844-844-6638",
    email: "info@golfcartsofindiana.com"
  },
  eligibleRegion = "Indiana",
  priceSpecification = []
}: OfferSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Offer",
      "itemOffered": {
        "@type": itemOffered.type,
        "name": itemOffered.name,
        "description": itemOffered.description,
        ...(itemOffered.category && { "category": itemOffered.category })
      },
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": availability,
      ...(validFrom && { "validFrom": validFrom }),
      ...(validThrough && { "validThrough": validThrough }),
      "seller": {
        "@type": "Organization",
        "name": seller.name,
        ...(seller.telephone && { "telephone": seller.telephone }),
        ...(seller.email && { "email": seller.email }),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Indiana",
          "addressRegion": "IN",
          "addressCountry": "US"
        }
      },
      "eligibleRegion": {
        "@type": "State",
        "name": eligibleRegion
      },
      ...(priceSpecification.length > 0 && {
        "priceSpecification": priceSpecification.map(spec => ({
          "@type": spec.type,
          "price": spec.price,
          "priceCurrency": spec.priceCurrency,
          ...(spec.description && { "description": spec.description })
        }))
      }),
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-offer]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-offer", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-offer]');
      if (script) {
        script.remove();
      }
    };
  }, [itemOffered, price, priceCurrency, availability]);

  return null;
}