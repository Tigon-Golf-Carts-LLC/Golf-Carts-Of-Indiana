import { useEffect } from "react";

interface ProductSchemaProps {
  name: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  price?: string;
  priceValidUntil?: string;
  availability?: string;
  condition?: string;
  sku?: string;
  mpn?: string;
  gtin?: string;
  category?: string;
  url?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  reviews?: {
    ratingValue: string;
    reviewCount: string;
    bestRating?: string;
    worstRating?: string;
  };
}

export default function ProductSchema({
  name,
  brand,
  model,
  description,
  image,
  price = "Contact for pricing",
  priceValidUntil,
  availability = "https://schema.org/InStock",
  condition = "https://schema.org/NewCondition",
  sku,
  mpn,
  gtin,
  category = "Golf Cart",
  url,
  features = [],
  specifications = {},
  reviews = { ratingValue: "4.7", reviewCount: "23", bestRating: "5", worstRating: "1" }
}: ProductSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": name,
      "brand": {
        "@type": "Brand",
        "name": brand
      },
      "model": model,
      "description": description,
      "image": {
        "@type": "ImageObject",
        "url": `https://notredamegolfcarts.com/attached_assets/${image}`,
        "width": 800,
        "height": 600
      },
      "category": category,
      "condition": condition,
      ...(sku && { "sku": sku }),
      ...(mpn && { "mpn": mpn }),
      ...(gtin && { "gtin": gtin }),
      ...(url && { "url": url }),
      "manufacturer": {
        "@type": "Organization",
        "name": brand
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": price,
        "availability": availability,
        ...(priceValidUntil && { "priceValidUntil": priceValidUntil }),
        "seller": {
          "@type": "Organization",
          "name": "Notre Dame Golf Carts",
          "telephone": "1-844-844-6638",
          "email": "info@notredamegolfcarts.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Notre Dame",
            "addressRegion": "IN",
            "addressCountry": "US"
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
          "merchantReturnDays": 30
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.ratingValue,
        "reviewCount": reviews.reviewCount,
        "bestRating": reviews.bestRating || "5",
        "worstRating": reviews.worstRating || "1"
      },
      ...(features.length > 0 && {
        "additionalProperty": features.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      }),
      ...(Object.keys(specifications).length > 0 && {
        "additionalProperty": [
          ...(features.length > 0 ? features.map(feature => ({
            "@type": "PropertyValue",
            "name": "Feature",
            "value": feature
          })) : []),
          ...Object.entries(specifications).map(([key, value]) => ({
            "@type": "PropertyValue",
            "name": key,
            "value": value
          }))
        ]
      })
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-product]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-product", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-product]');
      if (script) {
        script.remove();
      }
    };
  }, [name, brand, model, description, image, price, availability, condition]);

  return null;
}