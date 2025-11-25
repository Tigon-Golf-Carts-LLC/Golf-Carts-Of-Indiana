// SEO Configuration for Golf Carts Of Indiana
// This file contains site-wide SEO settings for meta tags, verification codes, and social profiles

export const SEO_CONFIG = {
  // Site Information
  siteName: "Golf Carts Of Indiana",
  siteUrl: "https://golfcartsofindiana.com",
  defaultImage: "/attached_assets/Notre Dame Golf Carts_1763645528375.png",
  
  // Social Media
  social: {
    facebookPage: "https://www.facebook.com/golfcartsofindiana",
    twitterHandle: "@GolfCartsIN",
    instagramProfile: "https://www.instagram.com/golfcartsofindiana",
    linkedInProfile: "https://www.linkedin.com/company/golfcartsofindiana"
  },
  
  // Search Engine Verification Codes
  verification: {
    google: "", // Add Google Search Console verification code here
    bing: "", // Add Bing Webmaster Tools verification code here
    pinterest: "", // Add Pinterest domain verification code here
    yandex: "" // Add Yandex Webmaster verification code here
  },
  
  // Favicon Settings
  favicon: {
    primary: "/attached_assets/Notre Dame Golf Carts_1763645528375.png",
    appleTouchIcon: "/attached_assets/Notre Dame Golf Carts_1763645528375.png",
    size32: "/attached_assets/Notre Dame Golf Carts_1763645528375.png",
    size16: "/attached_assets/Notre Dame Golf Carts_1763645528375.png"
  },
  
  // Business Information
  business: {
    name: "Golf Carts Of Indiana",
    phone: "574-402-4158",
    phoneTollFree: "1-844-844-6638",
    email: "info@golfcartsofindiana.com",
    address: {
      street: "310 S Dixie Way",
      city: "South Bend",
      state: "IN",
      zip: "46637",
      country: "US"
    },
    coordinates: {
      latitude: "39.7684",
      longitude: "-86.1581"
    }
  },
  
  // Default Meta Tag Settings
  defaults: {
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/png",
    twitterCardType: "summary_large_image",
    locale: "en_US"
  }
};

// Helper function to get current timestamp in ISO 8601 format
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

// Helper function to format modification time for article:modified_time
export const getModifiedTime = (date?: Date): string => {
  const modDate = date || new Date();
  return modDate.toISOString();
};
