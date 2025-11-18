export interface Municipality {
  name: string;
  type: 'City' | 'Town' | 'Township';
  slug: string;
  url: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const NEW_MONROE_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities (2)
  {
    name: "South Bend",
    type: "City",
    slug: "south-bend-city",
    url: "/south-bend-city-golf-carts",
    coordinates: { lat: 41.6764, lng: -86.2520 }
  },
  {
    name: "Mishawaka",
    type: "City",
    slug: "mishawaka-city",
    url: "/mishawaka-city-golf-carts",
    coordinates: { lat: 41.6620, lng: -86.1586 }
  },
  
  // Towns (7)
  {
    name: "Indian Village",
    type: "Town",
    slug: "indian-village-town",
    url: "/indian-village-town-golf-carts",
    coordinates: { lat: 41.7033, lng: -86.2389 }
  },
  {
    name: "Lakeville",
    type: "Town",
    slug: "lakeville-town",
    url: "/lakeville-town-golf-carts",
    coordinates: { lat: 41.5192, lng: -86.2742 }
  },
  {
    name: "New Carlisle",
    type: "Town",
    slug: "new-carlisle-town",
    url: "/new-carlisle-town-golf-carts",
    coordinates: { lat: 41.7000, lng: -86.5094 }
  },
  {
    name: "North Liberty",
    type: "Town",
    slug: "north-liberty-town",
    url: "/north-liberty-town-golf-carts",
    coordinates: { lat: 41.5328, lng: -86.4253 }
  },
  {
    name: "Osceola",
    type: "Town",
    slug: "osceola-town",
    url: "/osceola-town-golf-carts",
    coordinates: { lat: 41.6645, lng: -86.0764 }
  },
  {
    name: "Roseland",
    type: "Town",
    slug: "roseland-town",
    url: "/roseland-town-golf-carts",
    coordinates: { lat: 41.7389, lng: -86.2389 }
  },
  {
    name: "Walkerton",
    type: "Town",
    slug: "walkerton-town",
    url: "/walkerton-town-golf-carts",
    coordinates: { lat: 41.4675, lng: -86.4844 }
  },
  
  // Townships (13)
  {
    name: "Centre",
    type: "Township",
    slug: "centre-township",
    url: "/centre-township-golf-carts",
    coordinates: { lat: 41.6833, lng: -86.2500 }
  },
  {
    name: "Clay",
    type: "Township",
    slug: "clay-township",
    url: "/clay-township-golf-carts",
    coordinates: { lat: 41.7167, lng: -86.3333 }
  },
  {
    name: "German",
    type: "Township",
    slug: "german-township",
    url: "/german-township-golf-carts",
    coordinates: { lat: 41.7667, lng: -86.2167 }
  },
  {
    name: "Greene",
    type: "Township",
    slug: "greene-township",
    url: "/greene-township-golf-carts",
    coordinates: { lat: 41.8000, lng: -86.3500 }
  },
  {
    name: "Harris",
    type: "Township",
    slug: "harris-township",
    url: "/harris-township-golf-carts",
    coordinates: { lat: 41.5667, lng: -86.4667 }
  },
  {
    name: "Liberty",
    type: "Township",
    slug: "liberty-township",
    url: "/liberty-township-golf-carts",
    coordinates: { lat: 41.5333, lng: -86.3667 }
  },
  {
    name: "Lincoln",
    type: "Township",
    slug: "lincoln-township",
    url: "/lincoln-township-golf-carts",
    coordinates: { lat: 41.5667, lng: -86.2500 }
  },
  {
    name: "Madison",
    type: "Township",
    slug: "madison-township",
    url: "/madison-township-golf-carts",
    coordinates: { lat: 41.6167, lng: -86.4167 }
  },
  {
    name: "Olive",
    type: "Township",
    slug: "olive-township",
    url: "/olive-township-golf-carts",
    coordinates: { lat: 41.6333, lng: -86.5000 }
  },
  {
    name: "Penn",
    type: "Township",
    slug: "penn-township",
    url: "/penn-township-golf-carts",
    coordinates: { lat: 41.6667, lng: -86.0833 }
  },
  {
    name: "Portage",
    type: "Township",
    slug: "portage-township",
    url: "/portage-township-golf-carts",
    coordinates: { lat: 41.6833, lng: -86.1667 }
  },
  {
    name: "Union",
    type: "Township",
    slug: "union-township",
    url: "/union-township-golf-carts",
    coordinates: { lat: 41.5500, lng: -86.1500 }
  },
  {
    name: "Warren",
    type: "Township",
    slug: "warren-township",
    url: "/warren-township-golf-carts",
    coordinates: { lat: 41.7833, lng: -86.4667 }
  }
];
