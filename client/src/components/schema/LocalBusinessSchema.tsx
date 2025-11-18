import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: string;
    longitude?: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  openingHours?: string[];
  paymentAccepted?: string[];
  businessType?: string;
  areaServed?: string;
}

export default function LocalBusinessSchema({
  name = "Notre Dame Golf Carts",
  description = "Premier golf cart dealership in Notre Dame, Indiana specializing in electric golf carts, sales, service, rentals, and financing.",
  address = {
    streetAddress: "",
    addressLocality: "Notre Dame",
    addressRegion: "IN",
    postalCode: "46556",
    addressCountry: "US"
  },
  geo = {
    latitude: "41.7033",
    longitude: "-86.2389"
  },
  telephone = "1-844-844-6638",
  email = "info@notredamegolfcarts.com",
  url = "https://notredamegolfcarts.com",
  openingHours = [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-17:00",
    "Su 12:00-17:00"
  ],
  paymentAccepted = ["Cash", "Credit Card", "Debit Card", "Check", "Financing"],
  businessType = "Golf Cart Dealership",
  areaServed = "Notre Dame, IN"
}: LocalBusinessSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Store", "AutomotiveDealer"],
      "name": name,
      "description": description,
      "image": {
        "@type": "ImageObject",
        "url": "https://notredamegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
        "width": 400,
        "height": 400
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://notredamegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
        "width": 400,
        "height": 400
      },
      "url": url,
      "telephone": telephone,
      "email": email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.streetAddress,
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        "postalCode": address.postalCode,
        "addressCountry": address.addressCountry
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      },
      "openingHoursSpecification": openingHours.map(hours => {
        const [days, time] = hours.split(' ');
        const [startTime, endTime] = time.split('-');
        return {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": days.split('-').map(day => {
            const dayMap: { [key: string]: string } = {
              "Mo": "Monday", "Tu": "Tuesday", "We": "Wednesday", 
              "Th": "Thursday", "Fr": "Friday", "Sa": "Saturday", "Su": "Sunday"
            };
            return dayMap[day] || day;
          }),
          "opens": startTime,
          "closes": endTime
        };
      }),
      "paymentAccepted": paymentAccepted,
      "priceRange": "$$",
      "areaServed": {
        "@type": "State",
        "name": areaServed
      },
      "sameAs": [
        "https://www.facebook.com/notredamegolfcarts",
        "https://twitter.com/notredamegolfcarts",
        "https://www.instagram.com/notredamegolfcarts"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Golf Cart Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "DENAGO Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Golf Carts",
              "category": "Electric Golf Carts"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Golf Cart Service & Repair",
              "category": "Maintenance Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156",
        "bestRating": "5",
        "worstRating": "1"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-localbusiness]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-localbusiness", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-localbusiness]');
      if (script) {
        script.remove();
      }
    };
  }, [name, description, telephone, email, url]);

  return null;
}