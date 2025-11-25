import { useEffect } from "react";

interface PersonSchemaProps {
  name: string;
  jobTitle?: string;
  description?: string;
  email?: string;
  telephone?: string;
  image?: string;
  worksFor?: string;
  url?: string;
  sameAs?: string[];
}

export default function PersonSchema({
  name,
  jobTitle = "Golf Cart Specialist",
  description = "Professional golf cart expert at Golf Carts Of Indiana",
  email,
  telephone,
  image,
  worksFor = "Golf Carts Of Indiana",
  url,
  sameAs = []
}: PersonSchemaProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": jobTitle,
      "description": description,
      ...(email && { "email": email }),
      ...(telephone && { "telephone": telephone }),
      ...(image && { 
        "image": {
          "@type": "ImageObject",
          "url": image,
          "width": 300,
          "height": 300
        }
      }),
      ...(url && { "url": url }),
      "worksFor": {
        "@type": "Organization",
        "name": worksFor,
        "url": "https://golfcartsofindiana.com"
      },
      ...(sameAs.length > 0 && { "sameAs": sameAs })
    };
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-person]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-person", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
    
    return () => {
      const script = document.querySelector('script[type="application/ld+json"][data-person]');
      if (script) {
        script.remove();
      }
    };
  }, [name, jobTitle, description, email, telephone]);

  return null;
}