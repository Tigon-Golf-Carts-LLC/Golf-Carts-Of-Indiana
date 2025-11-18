// Background image utility for Notre Dame Golf Carts
// Uses the 8 professional showroom images featuring the modern Notre Dame Golf Carts dealership

const BACKGROUND_IMAGES = [
  '/attached_assets/a-photograph-of-a-friendly-young-woman-s_vxGUqvxjTKqX67SqAuIYoQ_qzVPvjrjTDOU46rfqSxBtw_1756144157631.jpeg',
  '/attached_assets/a-photograph-of-a-bright-and-modern-golf_pF3v8kw8Q_CCFrRRipQyig_qzVPvjrjTDOU46rfqSxBtw_1756144157631.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_gMwZuNW8SpiOsfQ6mcoCCg_qzVPvjrjTDOU46rfqSxBtw_1756144157631.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_fmehWSauQrinHDrywbR60g_qzVPvjrjTDOU46rfqSxBtw_1756144157631.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_kA-1uaPYQxue-dWWF09jAA_ulrDQA1xRFu_IwpRZWDCMA_1756144157632.jpeg',
  '/attached_assets/a-photograph-of-a-bright-and-modern-golf_TciWfI5yRyKjC7lfTXIFgw_ulrDQA1xRFu_IwpRZWDCMA_1756144157632.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_LEr7iX5jS4yIeV5y6WLfOw_ulrDQA1xRFu_IwpRZWDCMA_1756144157632.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_IiyNE3PAQS25DrWciibG2g_ulrDQA1xRFu_IwpRZWDCMA_1756144157633.jpeg'
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