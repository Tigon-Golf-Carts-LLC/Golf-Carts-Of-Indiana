import { useEffect } from "react";
import { getRandomBackgroundImage } from "@/utils/backgroundImages";
import { SEO_CONFIG, getModifiedTime } from "@/config/seoConfig";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  townName?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: string;
  heroBackgroundSeed?: string;
  pageType?: 'home' | 'vehicle' | 'contact' | 'about' | 'policy' | 'municipality' | 'rental' | 'general';
  modifiedTime?: Date; // Optional: Last modified timestamp for article:modified_time
  isArticle?: boolean; // Optional: Set to true for blog posts to use article-specific meta tags
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "Golf Carts Of Indiana, electric golf carts Indiana, DENAGO EVOLUTION golf cart sales service, Indiana golf cart dealer", 
  canonicalUrl,
  townName,
  ogImage,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = "website",
  heroBackgroundSeed,
  pageType = 'general',
  modifiedTime,
  isArticle = false
}: SEOHeadProps) {
  
  // Enhanced description formatting - ensure it ends with the phone number call-to-action
  const formatDescription = (desc: string): string => {
    const trimmedDesc = desc.trim();
    if (trimmedDesc.endsWith('Call 1-844-844-6638.')) {
      return trimmedDesc;
    }
    // Remove any existing call-to-action to avoid duplication
    const cleanDesc = trimmedDesc.replace(/\s*Call\s+1-844-844-6638\.?\s*$/, '');
    return `${cleanDesc} Call 1-844-844-6638.`;
  };
  
  const formattedDescription = formatDescription(description);
  
  // Determine the best image to use for Open Graph
  const getOptimalOGImage = (): string => {
    // 1. Use explicitly provided ogImage if available
    if (ogImage) {
      return ogImage.startsWith('http') ? ogImage : `https://golfcartsofindiana.com${ogImage}`;
    }
    
    // 2. Use hero background image based on page type or seed
    if (heroBackgroundSeed || pageType) {
      const seed = heroBackgroundSeed || pageType;
      const heroImage = getRandomBackgroundImage(seed);
      return `https://golfcartsofindiana.com${heroImage}`;
    }
    
    // 3. Fallback to default configured image
    return SEO_CONFIG.defaultImage.startsWith('http') 
      ? SEO_CONFIG.defaultImage 
      : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;
  };
  
  const finalOGImage = getOptimalOGImage();
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", formattedDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = formattedDescription;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    if (canonicalUrl) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonicalUrl);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    }

    // Set favicon - now using configurable paths from SEO_CONFIG
    const existingFavicon = document.querySelector('link[rel="icon"]:not([sizes])');
    if (existingFavicon) {
      existingFavicon.setAttribute("href", SEO_CONFIG.favicon.primary);
    } else {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/png";
      favicon.href = SEO_CONFIG.favicon.primary;
      document.head.appendChild(favicon);
    }

    // Set favicon 32x32
    const existingFavicon32 = document.querySelector('link[rel="icon"][sizes="32x32"]');
    if (existingFavicon32) {
      existingFavicon32.setAttribute("href", SEO_CONFIG.favicon.size32);
    } else {
      const favicon32 = document.createElement("link");
      favicon32.rel = "icon";
      favicon32.type = "image/png";
      favicon32.setAttribute("sizes", "32x32");
      favicon32.href = SEO_CONFIG.favicon.size32;
      document.head.appendChild(favicon32);
    }

    // Set favicon 16x16
    const existingFavicon16 = document.querySelector('link[rel="icon"][sizes="16x16"]');
    if (existingFavicon16) {
      existingFavicon16.setAttribute("href", SEO_CONFIG.favicon.size16);
    } else {
      const favicon16 = document.createElement("link");
      favicon16.rel = "icon";
      favicon16.type = "image/png";
      favicon16.setAttribute("sizes", "16x16");
      favicon16.href = SEO_CONFIG.favicon.size16;
      document.head.appendChild(favicon16);
    }

    // Set apple touch icon - now using configurable path
    const existingAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (existingAppleIcon) {
      existingAppleIcon.setAttribute("href", SEO_CONFIG.favicon.appleTouchIcon);
    } else {
      const appleIcon = document.createElement("link");
      appleIcon.rel = "apple-touch-icon";
      appleIcon.href = SEO_CONFIG.favicon.appleTouchIcon;
      document.head.appendChild(appleIcon);
    }

    // Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateOGTag("og:title", title);
    updateOGTag("og:description", formattedDescription);
    updateOGTag("og:type", ogType);
    updateOGTag("og:image", finalOGImage);
    updateOGTag("og:image:width", ogImageWidth.toString());
    updateOGTag("og:image:height", ogImageHeight.toString());
    updateOGTag("og:site_name", SEO_CONFIG.siteName);
    updateOGTag("og:locale", SEO_CONFIG.defaults.locale);
    if (canonicalUrl) {
      updateOGTag("og:url", canonicalUrl);
    }

    // Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    updateTwitterTag("twitter:card", "summary_large_image");
    updateTwitterTag("twitter:title", title);
    updateTwitterTag("twitter:description", formattedDescription);
    updateTwitterTag("twitter:image", finalOGImage);
    updateTwitterTag("twitter:site", SEO_CONFIG.social.twitterHandle);

    // Additional Open Graph tags for enhanced social sharing
    // Determine image type based on file extension
    const imageType = finalOGImage.match(/\.(jpg|jpeg)$/i) ? "image/jpeg" : 
                      finalOGImage.match(/\.png$/i) ? "image/png" : 
                      finalOGImage.match(/\.gif$/i) ? "image/gif" : 
                      finalOGImage.match(/\.webp$/i) ? "image/webp" : 
                      SEO_CONFIG.defaults.ogImageType;
    updateOGTag("og:image:type", imageType);

    // Article-specific meta tags for blog posts
    if (isArticle || ogType === "article") {
      // Facebook Page for article publisher
      updateOGTag("article:publisher", SEO_CONFIG.social.facebookPage);
      
      // Last modified time for articles
      const articleModifiedTime = modifiedTime ? getModifiedTime(modifiedTime) : getModifiedTime();
      updateOGTag("article:modified_time", articleModifiedTime);
    }

    // Search Engine Verification Meta Tags
    // These tags are added once globally for site verification with search engines
    if (SEO_CONFIG.verification.google) {
      updateTwitterTag("google-site-verification", SEO_CONFIG.verification.google);
    }
    
    if (SEO_CONFIG.verification.bing) {
      updateTwitterTag("msvalidate.01", SEO_CONFIG.verification.bing);
    }
    
    if (SEO_CONFIG.verification.pinterest) {
      updateTwitterTag("p:domain_verify", SEO_CONFIG.verification.pinterest);
    }
    
    if (SEO_CONFIG.verification.yandex) {
      updateTwitterTag("yandex-verification", SEO_CONFIG.verification.yandex);
    }

    // Social Profile Verification (rel="me" links)
    // Add social profile links for identity verification
    const addRelMeLink = (href: string, platform: string) => {
      const existingLink = document.querySelector(`link[rel="me"][href="${href}"]`);
      if (!existingLink && href) {
        const link = document.createElement("link");
        link.rel = "me";
        link.href = href;
        link.setAttribute("data-platform", platform);
        document.head.appendChild(link);
      }
    };

    if (SEO_CONFIG.social.twitterHandle && SEO_CONFIG.social.twitterHandle.startsWith('@')) {
      const twitterUsername = SEO_CONFIG.social.twitterHandle.replace('@', '');
      addRelMeLink(`https://twitter.com/${twitterUsername}`, "twitter");
    }
    
    if (SEO_CONFIG.social.facebookPage) {
      addRelMeLink(SEO_CONFIG.social.facebookPage, "facebook");
    }
    
    if (SEO_CONFIG.social.linkedInProfile) {
      addRelMeLink(SEO_CONFIG.social.linkedInProfile, "linkedin");
    }
    
    if (SEO_CONFIG.social.instagramProfile) {
      addRelMeLink(SEO_CONFIG.social.instagramProfile, "instagram");
    }

    // Structured Data (JSON-LD)
    if (townName) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Golf Carts Of Indiana - ${townName}`,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": townName,
          "addressRegion": "IN",
          "addressCountry": "US"
        },
        "telephone": "1-844-844-6638",
        "email": "info@golfcartsofindiana.com",
        "url": canonicalUrl,
        "logo": "https://golfcartsofindiana.com/attached_assets/Golf%20Carts%20OF%20Indiana_1764172383192.png",
        "image": finalOGImage,
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "41.7033",
            "longitude": "-86.2389"
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Golf Cart Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Electric Golf Carts",
                "brand": ["Denago", "Evolution"]
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Golf Cart Sales"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Golf Cart Maintenance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Golf Cart Rentals"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Golf Cart Financing"
              }
            }
          ]
        },
        "openingHours": "Mo-Sa 09:00-18:00",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127"
        },
        "priceRange": "$$"
      };

      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [title, description, keywords, canonicalUrl, townName, ogImage, ogImageWidth, ogImageHeight, ogType, heroBackgroundSeed, pageType, formattedDescription, finalOGImage, modifiedTime, isArticle]);

  return null;
}