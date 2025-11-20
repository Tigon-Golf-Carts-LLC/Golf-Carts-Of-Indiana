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
  latitude = "41.7033",
  longitude = "-86.2389"
}: LocationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Notre Dame Golf Carts - ${municipalityName} ${municipalityType}`,
      "description": `Professional golf cart sales, service, and rentals serving ${municipalityName} ${municipalityType}, Notre Dame, Indiana. Premium DENAGO and Evolution electric golf carts available.`,
      "url": `https://notredamegolfcarts.com/${municipalityName.toLowerCase().replace(/\s+/g, '-')}-${municipalityType.toLowerCase()}-golf-carts`,
      "logo": "https://notredamegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
      "image": "https://notredamegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
      "telephone": "1-844-844-6638",
      "email": "info@notredamegolfcarts.com",
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
        "@type": "City",
        "name": `${municipalityName} ${municipalityType}`,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Notre Dame",
          "containedInPlace": {
            "@type": "State",
            "name": "Indiana"
          }
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

    // Add rental-specific schema for rental pages
    if (pageType === 'rental') {
      const rentalSchema = {
        ...baseStructuredData,
        "@type": ["LocalBusiness", "RentalCarAgency"],
        "name": `Golf Cart Rentals - ${municipalityName} ${municipalityType}`,
        "description": `Professional golf cart rentals in ${municipalityName} ${municipalityType}, St. Joseph County. Daily, weekly, and monthly rental options available for events, recreation, and personal use.`,
        "url": `https://notredamegolfcarts.com/${municipalityName.toLowerCase().replace(/\s+/g, '-')}-${municipalityType.toLowerCase()}-rentals`,
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
                "price": "75",
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
                "price": "95",
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
                "price": "85",
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