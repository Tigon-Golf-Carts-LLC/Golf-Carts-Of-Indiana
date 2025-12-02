// Complete TIGON Golf Carts vehicle inventory with all 37 vehicles and correct pricing

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  externalUrl: string;
  specifications: {
    topSpeed: string;
    range: string;
    seatingCapacity: number;
    batteryType: string;
    chargingTime: string;
    payload: string;
  };
  features: string[];
  inStock: boolean;
  isNew: boolean;
}

// All 37 TIGON Golf Carts vehicles with correct pricing and external URLs
export const vehicles: Vehicle[] = [
  // DENAGO Electric Vehicles - 6 models
  {
    id: "denago-ev-city",
    name: "DENAGO® EV CITY",
    brand: "DENAGO",
    category: "Street Legal",
    price: 15000,
    description: "The DENAGO EV CITY is perfect for urban adventures with street-legal capabilities and premium features.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/city/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "500 lbs"
    },
    features: ["Street Legal", "LED Lights", "Premium Sound", "Weather Protection"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "DENAGO® EV NOMAD",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Built for adventure with rugged off-road capabilities and reliable performance.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["All-Terrain Tires", "LED Lighting", "Storage Compartment", "Durable Frame"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad-xl",
    name: "DENAGO® EV NOMAD XL",
    brand: "DENAGO",
    category: "Off-Road",
    price: 8495,
    description: "Extended version with 4-seater capacity for family adventures.",
    images: ["/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/nomad-xl/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "600 lbs"
    },
    features: ["Extended Seating", "All-Terrain Tires", "LED Package", "Cargo Space"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "DENAGO® EV ROVER XL",
    brand: "DENAGO",
    category: "Utility",
    price: 9995,
    description: "Heavy-duty utility vehicle perfect for work applications.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl/",
    specifications: {
      topSpeed: "25 mph",
      range: "45 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Heavy Duty", "Utility Bed", "All-Terrain", "Commercial Grade"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl6",
    name: "DENAGO® EV ROVER XL6",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "6-seater utility vehicle for larger work crews and families.",
    images: ["/attached_assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xl6/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["6-Seater", "Utility Bed", "Heavy Duty", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xxl",
    name: "DENAGO® EV ROVER XXL",
    brand: "DENAGO",
    category: "Utility",
    price: 11995,
    description: "Extra large utility vehicle with maximum cargo capacity.",
    images: ["/attached_assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg"],
    externalUrl: "https://tigongolfcarts.com/denago-ev/rover-xxl/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Extra Large Bed", "Maximum Capacity", "Heavy Duty", "Commercial Grade"],
    inStock: true,
    isNew: true
  },
  
  // EVOLUTION Series - 31 models
  {
    id: "evolution-carrier-6-plus",
    name: "EVolution® Carrier 6 Plus",
    brand: "EVOLUTION",
    category: "Carrier",
    price: 9595,
    description: "6-passenger carrier with premium features and comfort.",
    images: ["/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Premium Comfort", "Plus Package", "Enhanced Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-8-plus",
    name: "EVolution® Carrier 8 Plus",
    brand: "EVOLUTION",
    category: "Carrier",
    price: 13995,
    description: "8-passenger carrier for large groups with premium comfort.",
    images: ["/attached_assets/EVOLUTIONCARRIER8PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/carrier/8-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 8,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["8-Passenger", "Large Group Transport", "Plus Package", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-plus",
    name: "EVolution® Classic 2 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6695,
    description: "2-passenger classic design with modern reliability.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "400 lbs"
    },
    features: ["Classic Styling", "2-Passenger", "Plus Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-pro",
    name: "EVolution® Classic 2 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 2-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PRO_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/2-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "450 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "2-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "EVolution® Classic 4 Plus",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Classic design with modern reliability and 4-passenger capacity.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-plus/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "500 lbs"
    },
    features: ["Classic Styling", "4-Passenger", "Plus Package", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-pro",
    name: "EVolution® Classic 4 Pro",
    brand: "EVOLUTION",
    category: "Classic",
    price: 6995,
    description: "Professional 4-passenger classic with enhanced features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PRO_1751893115780_1753135231314.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/classic/4-pro/",
    specifications: {
      topSpeed: "20 mph",
      range: "35 miles",
      seatingCapacity: 4,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "550 lbs"
    },
    features: ["Professional Package", "Enhanced Features", "4-Passenger", "Pro Styling"],
    inStock: true,
    isNew: true
  },
  
  // D5 Maverick Series - 6 models
  {
    id: "evolution-d5-maverick-2-plus-2-plus",
    name: "EVolution® D5 Maverick 2+2 Plus",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 8995,
    description: "2+2 seating configuration with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2PLUS_1751893115780_1753135231312.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/2-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["2+2 Seating", "Plus Package", "D5 Performance", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-2-plus-2",
    name: "EVolution® D5 Maverick 2+2",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 8595,
    description: "Standard 2+2 seating with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2_1751893115780_1753135231312.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/2-plus-2/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["2+2 Seating", "D5 Performance", "Standard Features", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-plus-2-plus",
    name: "EVolution® D5 Maverick 4+2 Plus",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 9995,
    description: "6-passenger 4+2 configuration with Plus package.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135231312.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["4+2 Seating", "Plus Package", "6-Passenger", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-plus",
    name: "EVolution® D5 Maverick 4 Plus",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 9995,
    description: "4-passenger Maverick with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135231312.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["4-Passenger", "Plus Package", "D5 Performance", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4",
    name: "EVolution® D5 Maverick 4",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 9595,
    description: "Standard 4-passenger Maverick with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4_1751893115780_1753135231312.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/4/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["4-Passenger", "D5 Performance", "Standard Features", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6-plus",
    name: "EVolution® D5 Maverick 6 Plus",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 11595,
    description: "6-passenger Maverick with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6PLUS_1751893115781_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Plus Package", "D5 Performance", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6",
    name: "EVolution® D5 Maverick 6",
    brand: "EVOLUTION",
    category: "D5 Maverick",
    price: 11195,
    description: "Standard 6-passenger Maverick with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6_1751893115781_1753135350621.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-maverick/6/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "D5 Performance", "Standard Features", "Extended Seating"],
    inStock: true,
    isNew: true
  },
  
  // D5 Ranger Series - 6 models
  {
    id: "evolution-d5-ranger-2-plus-2-plus",
    name: "EVolution® D5 Ranger 2+2 Plus",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 8995,
    description: "Ranger 2+2 configuration with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER2+2PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/2-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["2+2 Seating", "Plus Package", "Ranger Performance", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-2-plus-2",
    name: "EVolution® D5 Ranger 2+2",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 8595,
    description: "Standard Ranger 2+2 with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5RANGER2+2_1751893115781_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/2-plus-2/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "600 lbs"
    },
    features: ["2+2 Seating", "D5 Performance", "Ranger Styling", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-plus-2-plus",
    name: "EVolution® D5 Ranger 4+2 Plus",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 9995,
    description: "6-passenger Ranger 4+2 configuration with Plus package.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4+2PLUS(9)_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4-plus-2-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["4+2 Seating", "Plus Package", "6-Passenger", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-plus",
    name: "EVolution® D5 Ranger 4 Plus",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 9595,
    description: "4-passenger Ranger with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["4-Passenger", "Plus Package", "Ranger Performance", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4",
    name: "EVolution® D5 Ranger 4",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 9195,
    description: "Standard 4-passenger Ranger with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4_1751893115782_1753135350622.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/4/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["4-Passenger", "D5 Performance", "Ranger Styling", "Reliable Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6-plus",
    name: "EVolution® D5 Ranger 6 Plus",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 11595,
    description: "6-passenger Ranger with Plus package features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Plus Package", "Ranger Performance", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6",
    name: "EVolution® D5 Ranger 6",
    brand: "EVOLUTION",
    category: "D5 Ranger",
    price: 11195,
    description: "Standard 6-passenger Ranger with D5 performance.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d5-ranger/6/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "D5 Performance", "Ranger Styling", "Extended Seating"],
    inStock: true,
    isNew: true
  },
  
  // D6 Max Series - 4 models
  {
    id: "evolution-d6-max-gt4",
    name: "EVolution® D6 Max GT4",
    brand: "EVOLUTION",
    category: "D6 Max",
    price: 15995,
    description: "4-passenger D6 Max with GT performance package.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/gt4/",
    specifications: {
      topSpeed: "30 mph",
      range: "45 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "700 lbs"
    },
    features: ["GT Performance", "D6 Max Power", "4-Passenger", "High Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-gt6",
    name: "EVolution® D6 Max GT6",
    brand: "EVOLUTION",
    category: "D6 Max",
    price: 17995,
    description: "6-passenger D6 Max with GT performance package.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT6_1751893159004_1753135350620.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/gt6/",
    specifications: {
      topSpeed: "30 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "850 lbs"
    },
    features: ["GT Performance", "D6 Max Power", "6-Passenger", "High Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt4",
    name: "EVolution® D6 Max XT4",
    brand: "EVOLUTION",
    category: "D6 Max",
    price: 15595,
    description: "4-passenger D6 Max with XT performance package.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/xt4/",
    specifications: {
      topSpeed: "28 mph",
      range: "45 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "700 lbs"
    },
    features: ["XT Performance", "D6 Max Power", "4-Passenger", "Enhanced Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt6",
    name: "EVolution® D6 Max XT6",
    brand: "EVOLUTION",
    category: "D6 Max",
    price: 17595,
    description: "6-passenger D6 Max with XT performance package.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT6_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/d6-max/xt6/",
    specifications: {
      topSpeed: "28 mph",
      range: "40 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "850 lbs"
    },
    features: ["XT Performance", "D6 Max Power", "6-Passenger", "Enhanced Performance"],
    inStock: true,
    isNew: true
  },
  
  // Forester Series - 2 models
  {
    id: "evolution-forester-4-plus",
    name: "EVolution® Forester 4 Plus",
    brand: "EVOLUTION",
    category: "Forester",
    price: 8995,
    description: "4-passenger Forester with Plus package features.",
    images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/forester/4-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "40 miles",
      seatingCapacity: 4,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "650 lbs"
    },
    features: ["4-Passenger", "Plus Package", "Forester Styling", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-6-plus",
    name: "EVolution® Forester 6 Plus",
    brand: "EVOLUTION",
    category: "Forester",
    price: 10995,
    description: "6-passenger Forester with Plus package features.",
    images: ["/attached_assets/EVOLUTIONFORESTER6PLUS_1751893159005_1753135437837.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/forester/6-plus/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 6,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "750 lbs"
    },
    features: ["6-Passenger", "Plus Package", "Forester Styling", "Extended Capacity"],
    inStock: true,
    isNew: true
  },
  
  // Turfman Series - 3 models
  {
    id: "evolution-turfman-200",
    name: "EVolution® Turfman 200",
    brand: "EVOLUTION",
    category: "Turfman",
    price: 5995,
    description: "Compact utility vehicle perfect for turf management and maintenance.",
    images: ["/attached_assets/EVOLUTIONTURFMAN200_1751893159006_1753135437837.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/200/",
    specifications: {
      topSpeed: "15 mph",
      range: "25 miles",
      seatingCapacity: 2,
      batteryType: "48V Lithium",
      chargingTime: "4-6 hours",
      payload: "800 lbs"
    },
    features: ["Utility Focused", "Compact Design", "Turf Management", "Work Vehicle"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-800",
    name: "EVolution® Turfman 800",
    brand: "EVOLUTION",
    category: "Turfman",
    price: 7995,
    description: "Mid-size utility vehicle for professional turf management.",
    images: ["/attached_assets/EVOLUTIONTURFMAN800_1751893159006_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/800/",
    specifications: {
      topSpeed: "20 mph",
      range: "30 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["Mid-Size Utility", "Professional Grade", "Enhanced Payload", "Work Vehicle"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-1000",
    name: "EVolution® Turfman 1000",
    brand: "EVOLUTION",
    category: "Turfman",
    price: 9995,
    description: "Heavy-duty utility vehicle for demanding turf management applications.",
    images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
    externalUrl: "https://tigongolfcarts.com/evolution/turfman/1000/",
    specifications: {
      topSpeed: "25 mph",
      range: "35 miles",
      seatingCapacity: 2,
      batteryType: "72V Lithium",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Heavy-Duty", "Maximum Payload", "Professional Grade", "Work Vehicle"],
    inStock: true,
    isNew: true
  }
];

// Export all vehicles as default
export default vehicles;

// DENAGO Electric Vehicles - 6 models  
export const denagoVehicles = vehicles.filter(v => v.brand === "DENAGO");

// EVOLUTION Electric Vehicles - 31 models
export const evolutionVehicles = vehicles.filter(v => v.brand === "EVOLUTION");