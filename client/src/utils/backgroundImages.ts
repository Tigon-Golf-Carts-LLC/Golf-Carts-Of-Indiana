// Background image utility for Golf Carts Of Indiana
// Uses 10 new professional showroom images featuring the Golf Carts Of Indiana dealership with professional staff

const BACKGROUND_IMAGES = [
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL_1764176169813.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 1_1764176169814.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 2_1764176169814.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 3_1764176169814.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 4_1764176169815.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 5_1764176169815.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 6_1764176169815.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 7_1764176169816.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 8_1764176169816.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 9_1764176169816.jpeg',
  '/attached_assets/Golf Carts Of Indiana - Indiana Golf Carts - LSV-NEV-MSV-PTV-UTV- STREET LEGAL 10_1764176169816.jpeg'
];

// Simple hash function to ensure consistent randomization based on seed
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Gets a consistent random background image based on a seed string
 * This ensures the same page always gets the same image, but different pages get different images
 */
export function getRandomBackgroundImage(seed: string): string {
  const index = simpleHash(seed) % BACKGROUND_IMAGES.length;
  return BACKGROUND_IMAGES[index];
}

/**
 * Gets the background style object for hero sections
 * Includes overlay for text readability
 */
export function getHeroBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.8), rgba(14, 46, 85, 0.6)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets a lighter background style for vehicle pages and other content sections
 */
export function getLightBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets background style for call-to-action sections
 */
export function getCTABackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.9), rgba(14, 46, 85, 0.8)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}
