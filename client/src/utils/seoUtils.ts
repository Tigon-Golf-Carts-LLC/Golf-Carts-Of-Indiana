/**
 * SEO utilities for generating optimal metadata across all pages
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: string;
  heroBackgroundSeed?: string;
  pageType?: 'home' | 'vehicle' | 'contact' | 'about' | 'policy' | 'municipality' | 'rental' | 'general';
}

/**
 * Generates optimized SEO metadata for different page types
 */
export function generateSEOMetadata(options: {
  pageTitle: string; // Should match the H1 text on the page
  baseDescription: string; // Core description without call-to-action
  pageType: SEOMetadata['pageType'];
  canonicalPath: string;
  keywords?: string[];
  ogImage?: string;
  heroBackgroundSeed?: string;
  townName?: string;
  vehicleBrand?: string;
  vehicleModel?: string;
}): SEOMetadata {
  
  const {
    pageTitle,
    baseDescription,
    pageType = 'general',
    canonicalPath,
    keywords = [],
    ogImage,
    heroBackgroundSeed,
    townName,
    vehicleBrand,
    vehicleModel
  } = options;

  // Generate title that matches H1
  const title = pageTitle;

  // Generate description with benefit statement and call-to-action
  const description = formatDescriptionWithCTA(baseDescription);

  // Generate keywords
  const defaultKeywords = [
    'golf carts Monroe County PA',
    'electric golf carts Pennsylvania', 
    'DENAGO golf carts',
    'EVOLUTION golf carts',
    'golf cart sales service rentals'
  ];

  const pageSpecificKeywords = getPageSpecificKeywords(pageType, townName, vehicleBrand, vehicleModel);
  const finalKeywords = [...defaultKeywords, ...pageSpecificKeywords, ...keywords].join(', ');

  // Generate canonical URL
  const canonicalUrl = `https://monroegolfcarts.com${canonicalPath}`;

  // Determine OG type
  const ogType = getOGType(pageType);

  return {
    title,
    description,
    keywords: finalKeywords,
    canonicalUrl,
    ogImage,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogType,
    heroBackgroundSeed: heroBackgroundSeed || pageType,
    pageType
  };
}

/**
 * Formats description to include benefit statement and end with call-to-action
 */
function formatDescriptionWithCTA(baseDescription: string): string {
  const trimmed = baseDescription.trim();
  
  // Remove any existing call-to-action to avoid duplication
  const cleaned = trimmed.replace(/\s*Call\s+1-844-844-6638\.?\s*$/, '');
  
  // Ensure description ends with call-to-action
  return `${cleaned} Call 1-844-844-6638.`;
}

/**
 * Generates page-specific keywords based on page type
 */
function getPageSpecificKeywords(
  pageType: SEOMetadata['pageType'], 
  townName?: string,
  vehicleBrand?: string,
  vehicleModel?: string
): string[] {
  const keywords: string[] = [];

  switch (pageType) {
    case 'home':
      keywords.push(
        'Monroe County golf cart dealership',
        'Pennsylvania golf cart dealer',
        'electric vehicle sales PA',
        'golf cart financing'
      );
      break;
    case 'vehicle':
      if (vehicleBrand && vehicleModel) {
        keywords.push(
          `${vehicleBrand} ${vehicleModel}`,
          `${vehicleBrand} golf cart`,
          `${vehicleModel} electric vehicle`,
          `${vehicleBrand} ${vehicleModel} for sale`
        );
      }
      keywords.push('electric golf cart specs', 'golf cart features');
      break;
    case 'contact':
      keywords.push(
        'golf cart dealership contact',
        'Monroe County showroom',
        'Pennsylvania golf cart service',
        'golf cart support'
      );
      break;
    case 'about':
      keywords.push(
        'golf cart company Monroe County',
        'electric vehicle expertise',
        'Pennsylvania golf cart history'
      );
      break;
    case 'municipality':
      if (townName) {
        keywords.push(
          `${townName} golf carts`,
          `golf cart sales ${townName}`,
          `${townName} PA electric vehicles`
        );
      }
      break;
    case 'rental':
      keywords.push(
        'golf cart rentals',
        'Monroe County rentals',
        'electric vehicle rental PA'
      );
      break;
    case 'policy':
      keywords.push('golf cart dealer policies', 'Monroe County terms');
      break;
  }

  if (townName) {
    keywords.push(`${townName} golf carts`, `golf cart dealer ${townName}`);
  }

  return keywords;
}

/**
 * Determines appropriate Open Graph type
 */
function getOGType(pageType: SEOMetadata['pageType']): string {
  switch (pageType) {
    case 'vehicle':
      return 'product';
    case 'home':
      return 'website';
    default:
      return 'article';
  }
}

/**
 * Utility to convert file names to Title Case for fallback titles
 */
export function fileNameToTitle(fileName: string): string {
  return fileName
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, str => str.toUpperCase()) // Capitalize first letter
    .replace(/\bPage\b/g, '') // Remove "Page" suffix
    .trim();
}

/**
 * Extract H1 text from common page patterns or generate from props
 */
export function extractPageTitle(options: {
  explicitTitle?: string;
  vehicleName?: string;
  pageType?: string;
  fileName?: string;
  townName?: string;
}): string {
  const { explicitTitle, vehicleName, pageType, fileName, townName } = options;

  if (explicitTitle) return explicitTitle;
  if (vehicleName) return vehicleName;
  if (townName) return `${townName} Golf Cart Sales & Rentals - Monroe County Golf Carts`;
  if (fileName) return fileNameToTitle(fileName);
  if (pageType) return fileNameToTitle(pageType);
  
  return 'Monroe County Golf Carts';
}