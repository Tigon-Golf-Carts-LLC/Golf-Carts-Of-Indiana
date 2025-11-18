import { useEffect } from "react";

interface WebsiteSchemaProps {
  url?: string;
  name?: string;
  description?: string;
}

export default function WebsiteSchema({ 
  url = "https://notredamegolfcarts.com",
  name = "Notre Dame Golf Carts",
  description = "Premier golf cart dealership in Notre Dame, Indiana"
}: WebsiteSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": name,
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "Notre Dame Golf Carts",
        "logo": {
          "@type": "ImageObject",
          "url": "https://notredamegolfcarts.com/attached_assets/Monroe County Golf Carts (1)_1756141613254.png",
          "width": 400,
          "height": 400
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/inventory?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.facebook.com/notredamegolfcarts",
        "https://twitter.com/notredamegolfcarts",
        "https://www.instagram.com/notredamegolfcarts"
      ]
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-website]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-website", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-website]');
      if (script) {
        script.remove();
      }
    };
  }, [url, name, description]);

  return null;
}