import { useEffect } from 'react';

interface LocationSchemaProps {
  municipalityName: string;
  municipalityType: 'City' | 'Town' | 'Township' | 'Borough';
  pageType?: 'location' | 'rental';
  latitude?: string;
  longitude?: string;
}

export default function LocationSchema({ 
  municipalityName, 
  municipalityType, 
  pageType = 'location',
  latitude = "39.7684",
  longitude = "-86.1581"
}: LocationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Golf Carts Of Indiana - ${municipalityName} ${municipalityType}`,
      "description": `Professional golf cart sales, service, and rentals serving ${municipalityName} ${municipalityType}, Indiana. Premium DENAGO and Evolution electric golf carts available.`,
      "url": `https://golfcartsofindiana.com/${municipalityName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`,
      "logo": "https://golfcartsofindiana.com/attached_assets/Notre%20Dame%20Golf%20Carts_1763645528375.png",
      "image": "https://golfcartsofindiana.com/attached_assets/Notre%20Dame%20Golf%20Carts_1763645528375.png",
      "telephone": "1-844-844-6638",
      "email": "info@golfcartsofindiana.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": municipalityName,
        "addressRegion": "IN",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": latitude,
        "longitude": longitude
      },
      "areaServed": {
        "@type": municipalityType === "City" ? "City" : "Place",
        "name": `${municipalityName} ${municipalityType}`,
        "containedInPlace": {
          "@type": "State",
          "name": "Indiana"
        }
      },
      "serviceType": [
        "Golf Cart Sales",
        "Golf Cart Service",
        "Golf Cart Rentals",
        "Golf Cart Parts",
        "Electric Vehicle Sales"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Golf Cart Services in ${municipalityName} ${municipalityType}`,
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
          }
        ]
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    };

    if (pageType === 'rental') {
      const rentalSchema = {
        ...baseStructuredData,
        "@type": ["LocalBusiness", "RentalCarAgency"],
        "name": `Golf Cart Rentals - ${municipalityName} ${municipalityType}`,
        "description": `Professional golf cart rentals in ${municipalityName} ${municipalityType}, Indiana. Daily, weekly, and monthly rental options available for events, recreation, and personal use.`,
        "url": `https://golfcartsofindiana.com/${municipalityName.toLowerCase().replace(/\s+/g, '-')}-rentals`,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `Golf Cart Rental Services in ${municipalityName} ${municipalityType}`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "4-Seater Golf Cart Rental",
                "category": "Vehicle Rental",
                "serviceType": "Golf Cart Rental"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "245",
                "priceCurrency": "USD",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "DAY"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "6-Seater Golf Cart Rental",
                "category": "Vehicle Rental",
                "serviceType": "Golf Cart Rental"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "345",
                "priceCurrency": "USD",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "DAY"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Utility Golf Cart Rental",
                "category": "Vehicle Rental",
                "serviceType": "Golf Cart Rental"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "195",
                "priceCurrency": "USD",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "unitText": "DAY"
                }
              }
            }
          ]
        }
      };

      const existingScript = document.querySelector('script[type="application/ld+json"][data-location-rental]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(rentalSchema);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-location-rental", "true");
        script.textContent = JSON.stringify(rentalSchema);
        document.head.appendChild(script);
      }
    } else {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-location]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(baseStructuredData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-location", "true");
        script.textContent = JSON.stringify(baseStructuredData);
        document.head.appendChild(script);
      }
    }

    return () => {
      const scriptToRemove = document.querySelector(`script[type="application/ld+json"][data-location${pageType === 'rental' ? '-rental' : ''}]`);
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [municipalityName, municipalityType, pageType, latitude, longitude]);

  return null;
}
