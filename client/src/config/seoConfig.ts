// SEO Configuration for Notre Dame Golf Carts
// This file contains site-wide SEO settings for meta tags, verification codes, and social profiles

export const SEO_CONFIG = {
  // Site Information
  siteName: "Notre Dame Golf Carts",
  siteUrl: "https://notredamegolfcarts.com",
  defaultImage: "/attached_assets/Notre Dame Golf Carts_1763645528375.png",
  
  // Social Media
  social: {
    facebookPage: "https://www.facebook.com/notredamegolfcarts",
    twitterHandle: "@NotreDameGolfIN", // Notre Dame Golf Carts Indiana Twitter handle
    instagramProfile: "https://www.instagram.com/notredamegolfcarts",
    linkedInProfile: "https://www.linkedin.com/company/notredamegolfcarts"
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
    name: "Notre Dame Golf Carts",
    phone: "574-402-4158", // Local South Bend number
    phoneTollFree: "1-844-844-6638", // Toll-free number
    email: "info@notredamegolfcarts.com",
    address: {
      street: "310 S Dixie Way",
      city: "South Bend",
      state: "IN",
      zip: "46637",
      country: "US"
    },
    coordinates: {
      latitude: "41.7033",
      longitude: "-86.2389"
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
