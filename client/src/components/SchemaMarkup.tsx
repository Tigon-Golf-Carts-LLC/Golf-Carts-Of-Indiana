interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Golf Carts Of Indiana",
  "alternateName": "GCOI",
  "description": "Indiana's premier statewide golf cart dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across all 92 counties.",
  "url": "https://golfcartsofindiana.com",
  "logo": "https://golfcartsofindiana.com/attached_assets/Golf%20Carts%20OF%20Indiana_1764172383192.png",
  "image": [
    "https://golfcartsofindiana.com/attached_assets/Golf%20Carts%20OF%20Indiana_1764172383192.png",
    "https://golfcartsofindiana.com/attached_assets/Golf%20Carts%20Of%20Indiana%20-%20Indiana%20Golf%20Carts%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL_1764176169813.jpeg"
  ],
  "telephone": "1-844-844-6638",
  "email": "info@golfcartsofindiana.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "310 S Dixie Way",
    "addressLocality": "South Bend",
    "addressRegion": "IN",
    "postalCode": "46637",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "Indiana"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.7684,
      "longitude": -86.1581
    },
    "geoRadius": "200000"
  },
  "foundingDate": "2008",
  "numberOfEmployees": "15-25",
  "slogan": "Professional golf cart services delivered throughout Indiana",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/golfcartsofindiana",
    "https://www.instagram.com/golfcartsofindiana"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://golfcartsofindiana.com/#localbusiness",
  "name": "Golf Carts Of Indiana",
  "description": "Premier golf cart dealer serving Indiana communities with electric vehicle sales, service, and rentals.",
  "url": "https://golfcartsofindiana.com",
  "telephone": "1-844-844-6638",
  "email": "info@golfcartsofindiana.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "310 S Dixie Way",
    "addressLocality": "South Bend",
    "addressRegion": "IN",
    "postalCode": "46637",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7684,
    "longitude": -86.1581
  },
  "areaServed": [
    "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Fishers",
    "Bloomington", "Hammond", "Gary", "Lafayette", "Muncie", "Terre Haute",
    "Kokomo", "Noblesville", "Anderson", "Greenwood", "Elkhart", "Mishawaka"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://golfcartsofindiana.com/#website",
  "name": "Golf Carts Of Indiana",
  "description": "Official website for Golf Carts Of Indiana - Indiana's premier electric golf cart dealer",
  "url": "https://golfcartsofindiana.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://golfcartsofindiana.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Golf Carts Of Indiana"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://golfcartsofindiana.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://golfcartsofindiana.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Golf Carts Of Indiana",
      "telephone": "1-844-844-6638",
      "email": "info@golfcartsofindiana.com"
    },
    "url": `https://golfcartsofindiana.com/vehicles/${vehicle.id}`
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "23",
    "bestRating": "5",
    "worstRating": "1"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Golf Cart Services",
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Indiana",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Golf Carts Of Indiana"
  },
  "areaServed": {
    "@type": "State",
    "name": "Indiana"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Golf Cart Inventory",
  "description": "Complete inventory of electric golf carts available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://golfcartsofindiana.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://golfcartsofindiana.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Golf Carts Of Indiana",
  "description": "Get in touch with Golf Carts Of Indiana for sales, service, rentals, and support",
  "url": "https://golfcartsofindiana.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Golf Carts Of Indiana",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "1-844-844-6638",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "info@golfcartsofindiana.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Golf Carts in ${townName}`,
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Indiana`,
  "url": `https://golfcartsofindiana.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Golf Carts Of Indiana",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "State",
        "name": "Indiana"
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://golfcartsofindiana.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://golfcartsofindiana.com/towns/${townName.toLowerCase().replace(/\s+/g, '-')}`
      }
    ]
  }
});
