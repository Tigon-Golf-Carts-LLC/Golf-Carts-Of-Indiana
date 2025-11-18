export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// Notre Dame, Indiana service area municipalities
export const NEW_MONROE_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities
  { name: 'South Bend', type: 'City', slug: 'south-bend', url: '/south-bend-golf-carts' },
  { name: 'Mishawaka', type: 'City', slug: 'mishawaka', url: '/mishawaka-golf-carts' },
  { name: 'Elkhart', type: 'City', slug: 'elkhart', url: '/elkhart-golf-carts' },
  { name: 'Granger', type: 'Township', slug: 'granger', url: '/granger-golf-carts' },
  
  // Townships and Communities
  { name: 'Notre Dame', type: 'Township', slug: 'notre-dame', url: '/notre-dame-golf-carts' },
  { name: 'Penn Township', type: 'Township', slug: 'penn-township', url: '/penn-township-golf-carts' },
  { name: 'Clay Township', type: 'Township', slug: 'clay-township', url: '/clay-township-golf-carts' },
  { name: 'Centre Township', type: 'Township', slug: 'centre-township', url: '/centre-township-golf-carts' },
  { name: 'Portage Township', type: 'Township', slug: 'portage-township', url: '/portage-township-golf-carts' },
  { name: 'German Township', type: 'Township', slug: 'german-township', url: '/german-township-golf-carts' },
  { name: 'Liberty Township', type: 'Township', slug: 'liberty-township', url: '/liberty-township-golf-carts' },
  { name: 'Union Township', type: 'Township', slug: 'union-township', url: '/union-township-golf-carts' },
  { name: 'Warren Township', type: 'Township', slug: 'warren-township', url: '/warren-township-golf-carts' },
  { name: 'Greene Township', type: 'Township', slug: 'greene-township', url: '/greene-township-golf-carts' },
  { name: 'Madison Township', type: 'Township', slug: 'madison-township', url: '/madison-township-golf-carts' },
  { name: 'Harris Township', type: 'Township', slug: 'harris-township', url: '/harris-township-golf-carts' },
  { name: 'Olive Township', type: 'Township', slug: 'olive-township', url: '/olive-township-golf-carts' },
  { name: 'Baugo Township', type: 'Township', slug: 'baugo-township', url: '/baugo-township-golf-carts' },
  { name: 'Concord Township', type: 'Township', slug: 'concord-township', url: '/concord-township-golf-carts' },
  { name: 'Washington Township', type: 'Township', slug: 'washington-township', url: '/washington-township-golf-carts' },
];

// Notre Dame, Indiana coordinates (center of Notre Dame community)
export const NEW_MONROE_COUNTY_COORDINATES = {
  latitude: 41.7033,
  longitude: -86.2389
};

// Notre Dame, Indiana basic information
export const NEW_MONROE_COUNTY_INFO = {
  name: 'Notre Dame',
  state: 'Indiana',
  totalMunicipalities: 20, // 3 cities + 17 townships
  countySeat: 'South Bend',
  population: 315000, // St. Joseph County area
  area: '458 square miles',
  founded: 1842,
  website: 'sjcindiana.com'
};
