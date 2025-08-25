import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  townName?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "golf carts, Luzerne County, electric golf carts, golf cart sales, golf cart service", 
  canonicalUrl,
  townName,
  ogImage = "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
  ogType = "website"
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
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

    // Set favicon
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.setAttribute("href", "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png");
    } else {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/png";
      favicon.href = "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png";
      document.head.appendChild(favicon);
    }

    // Set apple touch icon
    const existingAppleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (existingAppleIcon) {
      existingAppleIcon.setAttribute("href", "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png");
    } else {
      const appleIcon = document.createElement("link");
      appleIcon.rel = "apple-touch-icon";
      appleIcon.href = "/attached_assets/Monroe County Golf Carts (1)_1756141613254.png";
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
    updateOGTag("og:description", description);
    updateOGTag("og:type", ogType);
    updateOGTag("og:image", `https://monroegolfcarts.com${ogImage}`);
    updateOGTag("og:site_name", "Monroe County Golf Carts");
    updateOGTag("og:locale", "en_US");
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
    updateTwitterTag("twitter:description", description);
    updateTwitterTag("twitter:image", `https://lackawannagolfcarts.com${ogImage}`);
    updateTwitterTag("twitter:site", "@lehighgolfcarts");
    updateTwitterTag("twitter:creator", "@lehighgolfcarts");

    // Structured Data (JSON-LD)
    if (townName) {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Atlantic County Golf Carts - ${townName}`,
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": townName,
          "addressRegion": "NJ",
          "addressCountry": "US"
        },
        "telephone": "1-844-844-6638",
        "email": "info@lackawannagolfcarts.com",
        "url": canonicalUrl,
        "logo": "https://monroegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
        "image": `https://lackawannagolfcarts.com${ogImage}`,
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "40.3073",
            "longitude": "-75.1292"
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
  }, [title, description, keywords, canonicalUrl, townName, ogImage, ogType]);

  return null;
}