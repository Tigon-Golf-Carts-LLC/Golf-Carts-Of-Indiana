interface VehicleSchemaProps {
  name: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  url: string;
  price: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  condition: "NewCondition" | "UsedCondition" | "RefurbishedCondition";
  fuelType: "Electric" | "Gasoline" | "Hybrid";
  vehicleTransmission?: "Automatic" | "Manual";
  numberOfSeats?: number;
  vehicleEngine?: {
    name: string;
    enginePower: string;
  };
  features?: string[];
  manufacturer?: {
    name: string;
    url?: string;
  };
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    seller: {
      name: string;
      url: string;
    };
  };
}

export default function VehicleSchema({ 
  name, 
  brand, 
  model, 
  description, 
  image, 
  url, 
  price, 
  availability = "InStock",
  condition = "NewCondition",
  fuelType = "Electric",
  vehicleTransmission,
  numberOfSeats,
  vehicleEngine,
  features = [],
  manufacturer,
  offers
}: VehicleSchemaProps) {
  const vehicleSchema = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": name,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "model": model,
    "description": description,
    "image": image,
    "url": url,
    "fuelType": fuelType,
    "itemCondition": `https://schema.org/${condition}`,
    ...(vehicleTransmission && { "vehicleTransmission": vehicleTransmission }),
    ...(numberOfSeats && { "numberOfSeats": numberOfSeats }),
    ...(vehicleEngine && {
      "vehicleEngine": {
        "@type": "EngineSpecification",
        "name": vehicleEngine.name,
        "enginePower": vehicleEngine.enginePower
      }
    }),
    ...(features.length > 0 && { "additionalProperty": features.map(feature => ({
      "@type": "PropertyValue",
      "name": "Feature",
      "value": feature
    })) }),
    ...(manufacturer && {
      "manufacturer": {
        "@type": "Organization",
        "name": manufacturer.name,
        ...(manufacturer.url && { "url": manufacturer.url })
      }
    }),
    "offers": {
      "@type": "Offer",
      "price": offers?.price || price,
      "priceCurrency": offers?.priceCurrency || "USD",
      "availability": `https://schema.org/${offers?.availability || availability}`,
      "seller": offers?.seller || {
        "@type": "Organization",
        "name": "Notre Dame Golf Carts",
        "url": "https://notredamegolfcarts.com"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
    />
  );
}