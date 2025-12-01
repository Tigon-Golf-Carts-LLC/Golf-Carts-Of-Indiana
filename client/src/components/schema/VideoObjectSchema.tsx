interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  publisher?: {
    name: string;
    logo: string;
  };
}

export default function VideoObjectSchema({ 
  name, 
  description, 
  thumbnailUrl, 
  uploadDate, 
  duration, 
  contentUrl, 
  embedUrl, 
  publisher = {
    name: "Golf Carts Of Indiana",
    logo: "https://golfcartsofindiana.com/attached_assets/Golf%20Carts%20OF%20Indiana_1764172383192.png"
  }
}: VideoObjectSchemaProps) {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    ...(duration && { "duration": duration }),
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": publisher.name,
      "logo": {
        "@type": "ImageObject",
        "url": publisher.logo
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
}