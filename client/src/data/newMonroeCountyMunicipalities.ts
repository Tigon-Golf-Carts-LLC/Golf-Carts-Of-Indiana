export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// New Monroe County municipalities for golf cart business
export const NEW_MONROE_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Boroughs
  { name: 'Delaware Water Gap', type: 'Borough', slug: 'delaware-water-gap', url: '/delaware-water-gap-golf-carts' },
  { name: 'East Stroudsburg', type: 'Borough', slug: 'east-stroudsburg', url: '/east-stroudsburg-golf-carts' },
  { name: 'Mount Pocono', type: 'Borough', slug: 'mount-pocono', url: '/mount-pocono-golf-carts' },
  { name: 'Stroudsburg', type: 'Borough', slug: 'stroudsburg', url: '/stroudsburg-golf-carts' },

  // Townships
  { name: 'Barrett', type: 'Township', slug: 'barrett-township', url: '/barrett-township-golf-carts' },
  { name: 'Chestnuthill', type: 'Township', slug: 'chestnuthill-township', url: '/chestnuthill-township-golf-carts' },
  { name: 'Coolbaugh', type: 'Township', slug: 'coolbaugh-township', url: '/coolbaugh-township-golf-carts' },
  { name: 'Eldred', type: 'Township', slug: 'eldred-township', url: '/eldred-township-golf-carts' },
  { name: 'Hamilton', type: 'Township', slug: 'hamilton-township', url: '/hamilton-township-golf-carts' },
  { name: 'Jackson', type: 'Township', slug: 'jackson-township', url: '/jackson-township-golf-carts' },
  { name: 'Middle Smithfield', type: 'Township', slug: 'middle-smithfield-township', url: '/middle-smithfield-township-golf-carts' },
  { name: 'Paradise', type: 'Township', slug: 'paradise-township', url: '/paradise-township-golf-carts' },
  { name: 'Pocono', type: 'Township', slug: 'pocono-township', url: '/pocono-township-golf-carts' },
  { name: 'Polk', type: 'Township', slug: 'polk-township', url: '/polk-township-golf-carts' },
  { name: 'Price', type: 'Township', slug: 'price-township', url: '/price-township-golf-carts' },
  { name: 'Ross', type: 'Township', slug: 'ross-township', url: '/ross-township-golf-carts' },
  { name: 'Smithfield', type: 'Township', slug: 'smithfield-township', url: '/smithfield-township-golf-carts' },
  { name: 'Stroud', type: 'Township', slug: 'stroud-township', url: '/stroud-township-golf-carts' },
  { name: 'Tobyhanna', type: 'Township', slug: 'tobyhanna-township', url: '/tobyhanna-township-golf-carts' },
  { name: 'Tunkhannock', type: 'Township', slug: 'tunkhannock-township', url: '/tunkhannock-township-golf-carts' },
];

// Monroe County coordinates (center of county near Stroudsburg)
export const NEW_MONROE_COUNTY_COORDINATES = {
  latitude: 41.0548,
  longitude: -75.1932
};

// Monroe County basic information
export const NEW_MONROE_COUNTY_INFO = {
  name: 'Monroe County',
  state: 'Pennsylvania',
  totalMunicipalities: 20, // 4 boroughs + 16 townships
  countySeat: 'Stroudsburg',
  population: 168327, // 2020 census
  area: '608 square miles',
  founded: 1836,
  website: 'monroecountypa.gov'
};