import { useEffect } from "react";

interface PlaceSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: string;
    longitude: string;
  };
  telephone?: string;
  url?: string;
  placeType?: string;
  containedInPlace?: {
    name: string;
    type: string;
  };
}

export default function PlaceSchema({
  name,
  description,
  address,
  geo,
  telephone,
  url,
  placeType = "City",
  containedInPlace
}: PlaceSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": placeType,
      "name": name,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        ...(address.streetAddress && { "streetAddress": address.streetAddress }),
        "addressLocality": address.addressLocality,
        "addressRegion": address.addressRegion,
        ...(address.postalCode && { "postalCode": address.postalCode }),
        "addressCountry": address.addressCountry
      },
      ...(geo && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": geo.latitude,
          "longitude": geo.longitude
        }
      }),
      ...(telephone && { "telephone": telephone }),
      ...(url && { "url": url }),
      ...(containedInPlace && {
        "containedInPlace": {
          "@type": containedInPlace.type,
          "name": containedInPlace.name
        }
      }),
      "image": {
        "@type": "ImageObject",
        "url": "https://notredamegolfcarts.com/attached_assets/Notre Dame area Golf Carts (1)_1756141613254.png"
      }
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-place]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-place", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-place]');
      if (script) {
        script.remove();
      }
    };
  }, [name, description, address, geo]);

  return null;
}