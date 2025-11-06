import { useEffect } from "react";

interface ImageObjectSchemaProps {
  url: string;
  name?: string;
  description?: string;
  width?: number;
  height?: number;
  encodingFormat?: string;
  contentUrl?: string;
  thumbnailUrl?: string;
  caption?: string;
  copyrightHolder?: string;
  creditText?: string;
  creator?: string;
  datePublished?: string;
  license?: string;
  acquireLicensePage?: string;
}

export default function ImageObjectSchema({
  url,
  name,
  description,
  width,
  height,
  encodingFormat = "image/png",
  contentUrl,
  thumbnailUrl,
  caption,
  copyrightHolder = "Monroe County Golf Carts",
  creditText,
  creator = "Monroe County Golf Carts",
  datePublished,
  license,
  acquireLicensePage
}: ImageObjectSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "url": url.startsWith('http') ? url : `https://monroegolfcarts.com${url}`,
      ...(name && { "name": name }),
      ...(description && { "description": description }),
      ...(width && { "width": width }),
      ...(height && { "height": height }),
      "encodingFormat": encodingFormat,
      "contentUrl": contentUrl || (url.startsWith('http') ? url : `https://monroegolfcarts.com${url}`),
      ...(thumbnailUrl && { "thumbnailUrl": thumbnailUrl }),
      ...(caption && { "caption": caption }),
      "copyrightHolder": {
        "@type": "Organization",
        "name": copyrightHolder
      },
      ...(creditText && { "creditText": creditText }),
      "creator": {
        "@type": "Organization",
        "name": creator
      },
      ...(datePublished && { "datePublished": datePublished }),
      ...(license && { "license": license }),
      ...(acquireLicensePage && { "acquireLicensePage": acquireLicensePage })
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-imageobject]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-imageobject", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-imageobject]');
      if (script) {
        script.remove();
      }
    };
  }, [url, name, description, width, height]);

  return null;
}