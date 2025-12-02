import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  vehicleImage?: string;
}

export default function SEOHead({
  title = "NJ Golf Carts - Premium Golf Cart Dealership",
  description = "New Jersey's premier golf cart dealership offering DENAGO and EVOLUTION electric golf carts, sales, service, and parts in Newark, New Jersey.",
  keywords = "golf cart, New Jersey, DENAGO, EVOLUTION, electric vehicle, golf cart sales, golf cart service, Newark New Jersey",
  ogTitle,
  ogDescription,
  ogImage = "/favicon.png",
  ogUrl = "https://njgolfcarts.com",
  vehicleImage
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update favicon
    const updateFavicon = () => {
      const faviconUrl = '/favicon.png';
      
      // Remove existing favicon links
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(link => link.remove());
      
      // Add new favicon links using the NJ Golf Carts logo
      const faviconLinks = [
        { rel: 'icon', type: 'image/png', href: faviconUrl },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: faviconUrl },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: faviconUrl },
        { rel: 'apple-touch-icon', sizes: '180x180', href: faviconUrl },
        { rel: 'shortcut icon', href: faviconUrl }
      ];
      
      faviconLinks.forEach(linkConfig => {
        const link = document.createElement('link');
        Object.entries(linkConfig).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
        document.head.appendChild(link);
      });
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'NJ Golf Carts');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1');
    updateMetaTag('theme-color', '#FDD835');
    updateMetaTag('msapplication-TileColor', '#FDD835');
    
    // Determine image for OpenGraph - use vehicle image if provided, otherwise default
    const socialImage = vehicleImage || ogImage;
    
    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', socialImage, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'NJ Golf Carts', true);
    updateMetaTag('og:locale', 'en_US', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', socialImage);
    
    // Business information
    updateMetaTag('business:contact_data:locality', 'Newark');
    updateMetaTag('business:contact_data:region', 'New Jersey');
    updateMetaTag('business:contact_data:country_name', 'United States');
    updateMetaTag('business:contact_data:phone_number', '1-844-844-6638');
    updateMetaTag('business:contact_data:email', 'info@njgolfcarts.com');
    
    // Update favicon
    updateFavicon();
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, vehicleImage]);

  return null;
}